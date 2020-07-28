import Utils from "./Utils"
import Notices, { notices } from "../components/private/Notices"
import { isNative } from "./environnement";

export function patch(){
    /** START NOTICE */
    getModule(e => e.default && e.default.displayName === "ConnectedAppView")
    .then(async (mod) => {
        const appClasses = await getModule(e => e.hasNotice);
        const buildRender = original => {
            return function render(){
                const returnValue = original.call(this, ...arguments)
                const newchildren = []
                let children = returnValue.props.children[1].props.children
                if(!Array.isArray(children))children = [children]
    
                newchildren.push(children[0])
                newchildren.push(React.createElement(Notices, {container: this}))
                newchildren.push(children[1])
                returnValue.props.children[1].props.children = newchildren
                
                returnValue.props.children[1].props.children[2].props.children[0].props.render = buildRenderChannelSidebar(returnValue.props.children[1].props.children[2].props.children[0].props.render)
                
                return returnValue
            }
        }
        const buildRenderChannelSidebar = original => {
            return function renderChannelSidebar(){
                const returnValue = original.call(this, ...arguments)
                
                const hasNotice = notices.length > 0
                if(!hasNotice)return returnValue
                if(!Utils.hasClass(returnValue.props.className, appClasses.hasNotice)){
                    returnValue.props.className += " "+Utils.removeDa(appClasses.hasNotice)
                }

                return returnValue
            }
        }
        mod.default.prototype.render = buildRender(mod.default.prototype.render);
        (async function(){
            const base = document.querySelector("."+Utils.removeDa(appClasses.base))
            if(!base)throw new Error(`Could not find base here`)
            const elem = Utils.FindReact(base) as any
            elem.render = buildRender(elem.render)
            elem.forceUpdate()
        })()
    })
    /** END NOTICE */

    if(isNative){
        /** START USERPOPOUT PATCH */
        awaitLogin()
        .then(async () => {
            let UserPopout = await getModule(e => e.default && e.default.displayName === "FluxContainer(ForwardRef(SubscribeGuildMembersContainer(UserPopout)))")
            const userModule = await getModule(e => e.default && e.default.getCurrentUser)
            const render1 = new UserPopout.default({userId: userModule.default.getCurrentUser().id, guildId: null, channelId: null, disableUserProfileLink: true}).render()
            const PopoutProps = render1.props
            const render2 = render1.type.render(PopoutProps, null)
            const render3 = new render2.type(render2.props).render()
            const UserPopoutComponent = render3.type
            if(!UserPopoutComponent)throw new Error(`Couldn't find the UserPopoutComponent component.`)
    
            const render = UserPopoutComponent.prototype.render
            UserPopoutComponent.prototype.render = function(){
                const returnValue = render.call(this, ...arguments)
                try{
                    returnValue.props.children.props["data-user-id"] = this.props.user.id
                }catch(e){
                    console.error(e)
                }
                return returnValue
            }
        })
        /** END USERPOPOUT PATCH*/
    
        /** START USERPROFILE PATCH */
        awaitLogin()
        .then(async () => {
            let UserProfile = await getModule(e => e.default && e.default.displayName === "UserProfile")
            const userModule = await getModule(e => e.default && e.default.getCurrentUser)
            const render1 = new UserProfile.default({
                user: userModule.default.getCurrentUser()
            }).render()
            const render2 = new render1.type(render1.props).render()
            const render3 = render2.type.render(render2.props, null)
            const render4 = new render3.type(render3.props).render()
            const UserProfileComponent = render4.type
            if(!UserProfileComponent)throw new Error(`Couldn't find the UserProfileComponent component.`)
    
            const render = UserProfileComponent.prototype.render
            UserProfileComponent.prototype.render = function(){
                const returnValue = render.call(this, ...arguments)
                console.log(returnValue)
                try{
                    returnValue.props.children.props["data-user-id"] = this.props.user.id
                }catch(e){
                    console.error(e)
                }
                return returnValue
            }
        })
        /** END USERPROFILE PATCH */
    }

    // TODO: Add in app-notifications / confirmations.
    /** START IN-APP NOTIFICATIONS */
    //getModule(e => true)
    /** END IN-APP NOTIFICATIONS */
}

function getModule(filter: (mod:any) => boolean):Promise<any>{
    return new Promise((resolve) => {
        window.Lightcord.Api.ensureExported(filter)
        .then(resolve)
        .catch(err => {
            console.error("[LIGHTCORD]", err, filter)
        })
    })
}

let hasCompletedLogin = false
let loginPromise:Promise<void>
function awaitLogin():Promise<void>{
    if(hasCompletedLogin)return Promise.resolve()
    if(loginPromise)return loginPromise
     
    return loginPromise = new Promise((resolve) => {
        let isResolved = false
        window.Lightcord.DiscordModules.dispatcher.subscribe("CONNECTION_OPEN", (ev) => {
            if(isResolved)return
            hasCompletedLogin = true
            resolve()
            isResolved = true
        })
    })
}
window.Lightcord.DiscordModules.dispatcher.subscribe("LOGOUT", (ev) => {
    hasCompletedLogin = false
    loginPromise = undefined
})