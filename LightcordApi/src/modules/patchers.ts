import Utils from "./Utils"
import Notices, { notices } from "../components/private/Notices"

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