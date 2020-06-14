/**
 * How the fuck did I do this
 */

import BDV2 from "../modules/v2";
import V2C_SettingsTitle from "./settingsTitle";
import V2C_SettingsGroup from "./settingsGroup";
import dataStore from "../modules/dataStore";
import { defaultRPC, settingsRPC } from "../0globals";
import CustomRichPresence from "../modules/CustomRichPresence"
import Select from "./select";
import timestampRender from "./timestampRender"
import { remote } from "electron";


const React = BDV2.React;

let V2C_PresenceSettingsModules
export default class V2C_PresenceSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: dataStore.getSettingGroup("rpc") || defaultRPC,
            assets: []
        }

        this.preview = null
        this.isfetching = false
        if(this.state.data.application_id){
            this.fetchAssets()
        }

        this.assetComponents = new Set()
    }

    updateWhenFetched(comp){
        this.assetComponents.add(comp)
    }

    /**
     * 
     * @param {InputText} setting 
     */
    onChange(setting, value){
        let defaultSetting = RPCProps.find(e => e.id === setting.props.id)

        this.setState({
            data: Object.assign(settingsRPC, this.state.data, {
                [defaultSetting.id]: !!value ? value : null
            }),
            assets: this.state.assets
        })
        if(setting.props.id === "application_id"){
            this.fetchAssets()
        }

        dataStore.setSettingGroup("rpc", settingsRPC);
        this.preview.forceUpdate()
        CustomRichPresence.set(settingsRPC)
    }

    fetchAssets(){
        if(this.isfetching === true){
            let app = this.state.data.application_id
            setTimeout(() => {
                if(this.state.data.application_id !== app){
                    return
                }
                this.fetchAssets()
            }, 5000);
        }
        if(!this.state.data.application_id){
            this.setState({
                data: this.state.data,
                assets: []
            })
            this.forceUpdate()
            this.assetComponents.forEach(e => e.forceUpdate())
            return
        }
        this.isfetching = true
        CustomRichPresence.fetchAssets(this.state.data.application_id)
        .then(assets => {
            this.isfetching = false
            this.setState({
                data: this.state.data,
                assets: Object.keys(assets).map(k => {
                    let asset = assets[k]
                    return {
                        id: asset.id,
                        name: asset.name,
                        type: asset.type
                    }
                })
            })
            this.forceUpdate()
            this.assetComponents.forEach(e => e.forceUpdate())
        }).catch(() => {
            this.isfetching = false
            this.setState({
                data: this.state.data,
                assets: []
            })
            this.forceUpdate()
            this.assetComponents.forEach(e => e.forceUpdate())
        })
    }

    updatePreview(data){
        this.setState({
            data
        })
    }

    get modules(){
        return V2C_PresenceSettingsModules || (V2C_PresenceSettingsModules = [
            BDModules.get(e => e.contentColumn)[0],
            BDModules.get(e => e.marginBottom20)[0]
        ])
    }

    render() {
        console.log("Rerendering rpc manager")
        let [
            contentModule,
            marginModule
        ] = this.modules
        return (<div className={contentModule.contentColumn+" "+contentModule.contentColumnDefault+" content-column default"}
            style={{padding: "60px 40px 0px"}}>
                <V2C_SettingsGroup title="RichPresence Settings" settings={this.props.settings} onChange={this.props.onChange}/>
                <V2C_SettingsTitle text="RichPresence"/>
                <div>
                    {/** options */}
                    {this.optionsComponents}
                </div>
                <div>
                    <V2C_SettingsTitle text="Preview"/>
                    {/** preview */}
                    <RpcPreview settings={this}/>
                </div>
                <div className={marginModule.marginBottom20}></div>
                <button style={{opacity: 0.01}} onClick={window.ohgodohfuck}>
                    Oh god Oh fuck
                </button>
                <button style={{opacity: 0.01}} onClick={() => {
                    remote.shell.openExternal("https://www.youtube.com/watch?v=LkYa7rps_g4")
                }}>
                    See ? I pulled a litle sneaky on ya
                </button>
        </div>)
    }

    get optionsComponents(){
        return this._optionsComponents || (this._optionsComponents = RPCProps.map(e => {
            if(e.type === "text"){
                return <InputText setting={e} manager={this} id={e.id}/>
            }else if(e.type === "number"){
                let array = [<InputNumber setting={e} manager={this} id={e.id}/>]/*
                if(e.id === "timestamps.start"){
                    array.unshift(<DiscordButton title="Copy Current Timestamp" onClick={() => {
                        DiscordNative.clipboard.copy(Date.now()+"")
                    }} />)
                }*/
                return array
            }else if(e.type === "choice"){
                if(["assets.small", "assets.large"].includes(e.id)){
                    return <InputChoice setting={e} manager={this} id={e.id} choices={[{value: "none", label: "No assets"}].concat(this.state.assets.map(e => {
                        return {
                            value: "asset-"+e.id,
                            label: e.name
                        }
                    }))}/>
                }else{
                    return "Unknown choice."
                }
            }
        }))
    }
}
const RPCProps = [
    {
        title: "Application ID",
        id: "application_id",
        type: "number",
        placeholder: "711416957718757418"
    },
    {
        title: "Name",
        id: "name",
        type: "text",
        placeholder: "Lightcord"
    },
    {
        title: "Details",
        id: "details",
        type: "text",
        placeholder: "Browsing Discord"
    },
    {
        title: "State",
        id: "state",
        type: "text",
        placeholder: "Lightcord Client"
    },
    {
        title: "Timestamp Start",
        id: "timestamps.start",
        type: "number",
        get placeholder(){
            return Date.now()
        }
    },
    {
        title: "LargeAsset",
        id: "assets.large",
        type: "choice"
    },
    {
        title: "SmallAsset",
        id: "assets.small",
        type: "choice"
    },
]

let inputTextModules
class InputText extends React.PureComponent {
    get modules(){
        if(inputTextModules && inputTextModules[0])return inputTextModules
        return inputTextModules = [
            BDModules.get(e => e.removeKeybind)[0],
            BDModules.get(e => e.marginBottom20)[0],
            BDModules.get(e => e.defaultMarginh5)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e._horizontal)[0],
            BDModules.get(e => e.inputMini)[0],
            BDModules.get(e => e.size16 && e.size20)[0],
        ]
    }

    constructor(props){
        super(props)
        let setting = this.props.setting
        this.state = {
            data: this.props.manager.state.data[setting.id]
        }

        this.input = <window.Lightcord.Api.Components.inputs.TextInput placeholder={setting.placeholder} name={setting.id} value={this.state.data} onChange={(value) => {
            this.setState({
                data: value
            })
            if(!this.lastEdited || this.lastEdited < Date.now() - 500){
                this.props.manager.onChange(this, value)
                this.lastEdited = Date.now()
            }else if(!this.isTiming){
                this.isTiming = setTimeout(() => {
                    this.props.manager.onChange(this, this.state.data)
                    this.isTiming = null
                    this.lastEdited = Date.now()
                }, 500);
            }
        }} type="text"/>
    }

    render(){
        let setting = this.props.setting

        let [
            rowModule,
            marginModule,
            marginModule2,
            colorModule,
            sizeModule,
            flexModule,
            inputModule,
            sizeModule2,
        ] = this.modules

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                {this.input}
            </div>
            <Divider/>
        </div>)
    }
}

let InputNumberModules
class InputNumber extends React.PureComponent {
    get modules(){
        return InputNumberModules || (InputNumberModules = [
            BDModules.get(e => e.removeKeybind)[0],
            BDModules.get(e => e.marginBottom20)[0],
            BDModules.get(e => e.defaultMarginh5)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e._horizontal)[0],
            BDModules.get(e => e.inputMini)[0],
            BDModules.get(e => e.size16 && e.size20)[0],
            BDModules.get(e => e.colorTransparent)[0],
        ])
    }

    constructor(props){
        super(props)
        let setting = this.props.setting
        this.state = {
            data: this.props.manager.state.data[setting.id]
        }

        this.input = <window.Lightcord.Api.Components.inputs.TextInput placeholder={setting.placeholder} name={setting.id} value={this.state.data} type="number" onChange={(value, name, input) => {
            value = value.replace(/[^\d]+/g, "")
            if(value == this.state.data){
                input.setValue(value)
                return
            }

            if(!this.lastEdited || this.lastEdited < Date.now() - 500){
                this.props.manager.onChange(this, value)
                this.lastEdited = Date.now()
            }else if(!this.isTiming){
                this.isTiming = setTimeout(() => {
                    this.props.manager.onChange(this, this.state.data)
                    this.isTiming = null
                    this.lastEdited = Date.now()
                }, 500);
            }
            this.setState({
                data: value
            })
        }} type="text"/>
    }

    render(){
        let setting = this.props.setting

        let [
            rowModule,
            marginModule,
            marginModule2,
            colorModule,
            sizeModule,
            flexModule,
        ] = this.modules


        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                {this.input}
                {setting.id === "timestamps.start" ? 
                <Lightcord.Api.Components.inputs.Button text="Copy current timestamp" onClick={() => {
                    DiscordNative.clipboard.copy(Date.now()+"")
                }} color="brand"/> : null}
            </div>
            <Divider/>
        </div>)
    }
}

let InputChoiceModules
class InputChoice extends React.PureComponent {
    constructor(props){
        super(props)
        let setting = this.props.setting
        this.state = {
            data: this.props.manager.state.data[setting.id] ? "asset-"+this.props.manager.state.data[setting.id] : "none"
        }
        this.props.manager.updateWhenFetched(this)
    }

    onChange(data){
        let value = data.value

        if(!this.lastEdited || this.lastEdited < Date.now() - 500){
            this.props.manager.onChange(this, value === "none" ? null : value.replace("asset-", ""))
            this.lastEdited = Date.now()
        }else if(!this.isTiming){
            this.isTiming = setTimeout(() => {
                this.props.manager.onChange(this, this.state.data === "none" ? null : this.state.data.replace("asset-", ""))
                this.isTiming = null
                this.lastEdited = Date.now()
            }, 500);
        }
        this.setState({
            data: value
        })
        this.forceUpdate()
    }
    
    get modules(){
        return InputChoiceModules || (InputChoiceModules = [
            BDModules.get(e => e.removeKeybind)[0],
            BDModules.get(e => e.marginBottom20)[0],
            BDModules.get(e => e.defaultMarginh5)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e._horizontal)[0]
        ])
    }

    render(){
        let setting = this.props.setting

        let [
            rowModule,
            marginModule,
            marginModule2,
            colorModule,
            sizeModule,
            flexModule
        ] = this.modules
        
        let options = this.props.manager.state.assets.map(e => {
            return {
                value: "asset-"+e.id,
                label: e.name
            }
        })

        options.unshift({
            value: "none",
            label: "No assets"
        })

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                <Select value={this.state.data} onChange={this.onChange.bind(this)} options={options}/>
            </div>
            <Divider/>
        </div>)
    }
}

let DividerModules = []
class Divider extends React.PureComponent {
    get modules(){
        return DividerModules&&DividerModules[0] ? DividerModules : (DividerModules = [
            BDModules.get(e => e.divider && Object.keys(e).length === 1)[0],
            BDModules.get(e => e.dividerDefault)[0]
        ])
    }

    render(){
        let [
            divider,
            dividerDefault
        ] = this.modules

        return <div class={`${divider.divider} ${dividerDefault.dividerDefault}`}></div>
    }
}

class DiscordButton extends React.Component {
    render(){
        let rowModule = BDModules.get(e => e.removeKeybind)[0]
        let marginModule = BDModules.get(e => e.marginBottom20)[0]
        let flexModule = BDModules.get(e => e._horizontal)[0]

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <Lightcord.Api.Components.inputs.Button text={this.props.title} onClick={this.props.onClick} color="brand"/>
            </div>
        </div>)
    }
}

class RpcPreview extends React.Component {
    constructor(props = {}){
        super(props)
        this.state = {
            active: "profile"
        }
        this.tabs = []

        this.props.settings.preview = this
    }

    changeTab(tab){
        let ancientTab = this.state.active
        if(ancientTab === tab.props.id)return

        this.tabs.forEach(e => {
            e.setActive(false)
        })
        tab.setActive(true)
        this.setState({
            active: tab.props.id
        })
    }

    render(){
        let preview = new this.preview({
            preview: this
        })
        preview.setState(this.state.rpc)
        return (<div className="lc-tabWrapper">
            <div className="lc-tabnav" style={{flex: "0 1 auto"}}>
                <Tab preview={this} title="Full Profile" id="profile"/>
                <Tab preview={this} title="User Popout" id="popout"/>
            </div>
            {preview.render()}
        </div>)
    }   

    isActive(tab){
        return this.state.active === tab
    }

    get preview(){
        if(this.state.active === "profile")return Profile
        return Popout
    }
}

class Tab extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: props.preview.isActive(props.id)
        }
        props.preview.tabs.push(this)
    }

    setActive(isActive){
        this.setState({
            active: !!isActive
        })
    }

    render(){
        let className = `lc-navItem`
        if(this.state.active){
            className += ` lc-navItemActive`
        }else{
            className += ` lc-navItemInactive`
        }
        return (<div className={className} onClick={()=>{
            this.props.preview.changeTab(this)
        }}>
            {this.props.title}
        </div>)
    }
}

let popoutModule
class Popout extends React.Component {
    get modules(){
        return popoutModule || (popoutModule = [
            BDModules.get(e => e.userPopout)[0],
            BDModules.get(e => e._horizontal)[0],
            BDModules.get(e => e.vertical && e.alignStretch && !e.streamerModeEnabledBtn)[0],
            BDModules.get(e => e.bot)[0],
            BDModules.get(e => e.activityUserPopout)[0],
            BDModules.get(e => e.muted && e.wrapper && e.base)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e.themeGhostHairlineChannels)[0],
            BDModules.get(e => e.note && Object.keys(e).length === 1)[0],
            BDModules.get(e => e.pro && e.inline)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.default && e.default.Messages)[0].default.Messages,
            BDModules.get(e => e.pointerEvents)[0],
            BDModules.get(e => e.default && e.default.getCurrentUser)[0].default
        ])
    }

    render(){
        let [
            rootModule1,
            flexModule1,
            stylingModule1,
            nameTagModule1,
            activityModule1,
            textModule1,
            sizeModule1,
            scrollerModule1,
            noteModule1,
            protipModule1,
            colorModule1,
            Messages,
            avatarModule1,
            userModule1
        ] = this.modules
        let user = userModule1.getCurrentUser()
        let avatarURL = user.getAvatarURL(user.avatar.startsWith("a_") ? "gif" : "png")

        let data = Object.assign({}, defaultRPC, this.props.preview.props.settings.state.data)
        timestampClass = timestampClass || activityModule1.timestamp

        let images = (() => {
            if(!data["assets.large"])return null
            let images = []
            if(data["assets.large"]){
                images.push(<img alt="" src={`https://cdn.discordapp.com/app-assets/${data.application_id}/${data["assets.large"]}.png`} class={`${activityModule1.assetsLargeImageUserPopout} ${data["assets.small"] ? activityModule1.assetsLargeMaskUserPopout : ""}`} />)
            }
            if(data["assets.small"]){
                images.push(<img alt="" src={`https://cdn.discordapp.com/app-assets/${data.application_id}/${data["assets.small"]}.png`} class={activityModule1.assetsSmallImageUserPopout} />)
            }
            if(!images.length)return null
            return <div class={activityModule1.assets}>
                {images}
            </div>
        })()
        
        return (<div className="lc-userPopout">
            <div class={rootModule1.userPopout} role="dialog" tabindex="-1">
                <div class={rootModule1.headerPlaying}>
                    <div class={`${flexModule1.flex} ${stylingModule1.vertical} ${stylingModule1.justifyCenter} ${stylingModule1.alignCenter} ${stylingModule1.noWrap} ${rootModule1.headerTop}`} style={{flex: "1 1 auto"}}>
                        <div class={rootModule1.avatarWrapperNormal} role="button" tabindex="0">
                            <div class={avatarModule1} role="img" style={{width: "80px", height: "80px"}}>
                                <svg width="92" height="80" viewBox="0 0 92 80" class={`${avatarModule1.mask} ${avatarModule1.svg}`}>
                                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                                        <img src={avatarURL} alt=" " class={avatarModule1.avatar} />
                                    </foreignObject>
                                    <Status />
                                </svg>
                            </div>
                            <svg width="80" height="80" class={rootModule1.avatarHint} viewBox="0 0 80 80">
                                <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                                    <div class={rootModule1.avatarHintInner}>{Messages.VIEW_PROFILE}</div>
                                </foreignObject>
                            </svg>
                        </div>
                        <div class={rootModule1.headerText}>
                            <div class={`${flexModule1.flex} ${stylingModule1.horizontal} ${stylingModule1.justifyStart} ${stylingModule1.alignCenter} ${stylingModule1.noWrap}`} style={{flex: "1 1 auto"}}>
                                <div class={`${rootModule1.headerTagNoNickname} ${nameTagModule1.nameTag}`}>
                                    <span class={`${nameTagModule1.username} ${rootModule1.headerTagUsernameNoNickname}`}>{user.username}</span>
                                    <span>#{user.discriminator}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={`${activityModule1.activityUserPopout} ${rootModule1.activity}`}>
                        <h3 class={`${activityModule1.headerTextNormal} ${textModule1.base} ${sizeModule1.size12}`}>{Messages.USER_ACTIVITY_HEADER_PLAYING}</h3>
                        <div class={activityModule1.bodyNormal}>
                            {images}
                            <div class={images ? activityModule1.contentImagesUserPopout : activityModule1.contentNoImagesUserPopout} style={{flex: "1 1 auto"}}>
                                {(() => {
                                    if(!data.name)return null
                                    return <h3 class={`${activityModule1.nameNormal} ${textModule1.base} ${sizeModule1.size14}`} title={data.name}>
                                        <span class={activityModule1.activityName}>{data.name}</span>
                                    </h3>
                                })()}
                                {(() => {
                                    if(!data.details)return null
                                    return <div title={data.title} class={activityModule1.details}>{data.details}</div>
                                })()}
                                {(() => {
                                    if(!data.state)return null
                                    return <div class={activityModule1.state}>
                                        <span title={data.state}>{data.state}</span>
                                    </div>
                                })()}
                                {(() => {
                                    if(!data["timestamps.start"])return null
                                    let timeComponent = timestampRender(Timestamp, Messages)

                                    return (<div class={activityModule1.timestamp}>
                                        {React.createElement(timeComponent, {
                                            timestamps: {
                                                end: null,
                                                start: data["timestamps.start"]
                                            }
                                        })}
                                    </div>)
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
                <div class={`${scrollerModule1.scrollerWrap} ${rootModule1.body} ${scrollerModule1.scrollerThemed} ${scrollerModule1.themeGhostHairline} ${scrollerModule1.scrollerFade}`}>
                    <div class={`${scrollerModule1.scroller} ${rootModule1.bodyInner}`}>
                        <div class={rootModule1.bodyTitle}>{Messages.NOTE}</div>
                        <div class={`${noteModule1.note} ${rootModule1.note}`}>
                            <textarea placeholder={Messages.NOTE_PLACEHOLDER} maxlength="256" autocorrect="off" class={BDModules.get(e => e.scrollbarGhostHairline)[0].scrollbarGhostHairline} style={{height: "36px"}} disabled></textarea>
                        </div>
                    </div>
                </div>
                <div class={rootModule1.footer}>
                    <div class={`${rootModule1.protip} ${protipModule1.inline}`}>
                        <h3 class={`${protipModule1.pro} ${textModule1.base} ${sizeModule1.size12}`} style={{color: "rgb(67, 181, 129)"}}>{Messages.PINNED_MESSAGES_PRO_TIP}</h3>
                        <div class={`${colorModule1.colorStandard} ${sizeModule1.size14} ${protipModule1.tip}`}>{Messages.CONTEXT_MENU_HINT}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

let StatusModules
class Status extends React.Component {
    get modules(){
        return StatusModules || (StatusModules = [
            BDModules.get(e => e.default && e.default.getPresence)[0],
            BDModules.get(e => e.pointerEvents)[0].pointerEvents
        ])
    }

    render(){
        let [
            getPresence,
            pointerEvents
        ] = this.modules
        let status = getPresence.default.getPresence().status
        if(status === "invisible")status = "offline"
        return <rect width="16" height="16" x="60" y="60" fill="#ffffff" mask={`url(#svg-mask-status-${status})`} className={pointerEvents}></rect>
    }
}

let timestampClass = ""

let ProfileModules
class Profile extends React.Component {
    get modules(){
        return ProfileModules || (ProfileModules = [
            BDModules.get(e => e.flex && e._horizontal)[0],
            BDModules.get(e => e.vertical && e.alignStretch && !e.streamerModeEnabledBtn)[0],
            BDModules.get(e => e.topSectionStreaming)[0],
            BDModules.get(e => e.pointerEvents)[0],
            BDModules.get(e => e.bot)[0],
            BDModules.get(e => e.activityProfile)[0],
            BDModules.get(e => e.muted && e.wrapper && e.base)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e.scrollerFade)[0],
            BDModules.get(e => e.note && Object.keys(e).length === 1)[0],
            BDModules.get(e => e.default && e.default.Messages)[0].default.Messages
        ])
    }

    render(){
        let user = BDModules.get(e => e.default && e.default.getCurrentUser)[0].default.getCurrentUser()
        let avatarURL = user.getAvatarURL(user.avatar.startsWith("a_") ? "gif" : "png")
        let [
            flexModule1,
            stylingModule1,
            rootModule1,
            avatarModule1,
            nameTagModule1,
            activityModule1,
            textModule1,
            sizeModule1,
            scrollerModule1,
            noteModule1,
            Messages
        ] = this.modules

        let data = Object.assign({}, defaultRPC, this.props.preview.props.settings.state.data)
        timestampClass = timestampClass || activityModule1.timestamp

        let images = (() => {
            if(!data["assets.large"])return null
            let images = []
            if(data["assets.large"]){
                images.push(<img alt="" src={`https://cdn.discordapp.com/app-assets/${data.application_id}/${data["assets.large"]}.png`} class={`${activityModule1.assetsLargeImageProfile} ${data["assets.small"] ? activityModule1.assetsLargeMaskProfile : ""}`} />)
            }
            if(data["assets.small"]){
                images.push(<img alt="" src={`https://cdn.discordapp.com/app-assets/${data.application_id}/${data["assets.small"]}.png`} class={activityModule1.assetsSmallImageProfile} />)
            }
            if(!images.length)return null
            return <div class={activityModule1.assets}>
                {images}
            </div>
        })()

        return [
            <div className="lc-tab">
                <div class={`${flexModule1.flex} ${stylingModule1.vertical} ${stylingModule1.justifyStart} ${stylingModule1.alignStretch} ${stylingModule1.noWrap} ${rootModule1.root}`} style={{flex: "1 1 auto"}}>
                    <div class={rootModule1.topSectionPlaying}>
                        <header class={rootModule1.header}>
                            <div class={`${rootModule1.avatar} ${avatarModule1.wrapper}`} role="img" style={{width: "80px", height: "80px"}}>
                                <svg width="92" height="80" viewBox="0 0 92 80" class={`${avatarModule1.mask} ${avatarModule1.svg}`}>
                                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                                        <img src={avatarURL} alt=" " class={avatarModule1.avatar} />
                                    </foreignObject>
                                    <Status />
                                </svg>
                            </div>
                            <div class={`${rootModule1.headerInfo}`}>
                                <div class={`${rootModule1.nameTag} ${nameTagModule1.nameTag}`}>
                                    <span class={`${rootModule1.username} ${rootModule1.username}`}>{user.username}</span>
                                    <span class={rootModule1.discriminator}>#{user.discriminator}</span>
                                </div>
                                <div class={`${flexModule1.flex} ${flexModule1.horizontal} ${stylingModule1.justifyStart} ${stylingModule1.alignStretch} ${stylingModule1.noWrap} ${rootModule1.profileBadges}`} style={{flex: "1 1 auto"}}>
                                    <Badges />
                                </div>
                            </div>
                        </header>
                        <div class={rootModule1.headerFill}>
                            <div class={`${activityModule1.activityProfile} ${rootModule1.activity}`}>
                                <h3 class={`${activityModule1.headerTextNormal} ${textModule1.base} ${sizeModule1.size12}`}>
                                    {Messages.USER_ACTIVITY_HEADER_PLAYING}
                                </h3>
                                <div class={activityModule1.bodyNormal}>
                                    {images}
                                    <div class={images ? activityModule1.contentImagesProfile : activityModule1.contentNoImagesUserPopout} style={{flex: "1 1 auto"}}>
                                        {(() => {
                                            if(!data.name)return null
                                            return <h3 class={`${activityModule1.nameNormal} ${textModule1.base} ${sizeModule1.size14}`} title={data.name}>
                                                <span class={activityModule1.activityName}>{data.name}</span>
                                            </h3>
                                        })()}
                                        {(() => {
                                            if(!data.details)return null
                                            return <div title={data.title} class={activityModule1.details}>{data.details}</div>
                                        })()}
                                        {(() => {
                                            if(!data.state)return null
                                            return <div class={activityModule1.state}>
                                                <span title={data.state}>{data.state}</span>
                                            </div>
                                        })()}
                                        {(() => {
                                            if(!data["timestamps.start"])return null
                                            let timeComponent = timestampRender(Timestamp, Messages)

                                            return (<div class={activityModule1.timestamp}>
                                                {React.createElement(timeComponent, {
                                                    timestamps: {
                                                        end: null,
                                                        start: data["timestamps.start"]
                                                    }
                                                })}
                                            </div>)
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				    <div class={rootModule1.body}>
					    <div class={`${scrollerModule1.scrollerWrap} ${scrollerModule1.scrollerFade}`}>
						    <div class={scrollerModule1.scroller}>
							    <div class={rootModule1.userInfoSection}>
								    <div class={rootModule1.userInfoSectionHeader}>{Messages.NOTE}</div>
								    <div class={`${rootModule1.note} ${noteModule1.note}`}>
                                        <textarea placeholder={Messages.NOTE_PLACEHOLDER} maxlength="256" autocorrect="off" 
                                        class={BDModules.get(e => e.scrollbarGhostHairline)[0].scrollbarGhostHairline} style={{height: "40px"}} disabled>

                                        </textarea>
								    </div>
							    </div>
                                <ConnectedAccounts />
							</div>
						</div>
					</div>
				</div>
            </div>,
            <div class="lc- "></div>
        ]
    }
}

class ConnectedAccounts extends React.Component {
    render(){
        let accounts = []
        let rootModule1 = BDModules.get(e => e.topSectionStreaming)[0]
        let AccountModule1 = BDModules.get(e => e.default && e.default.getAccounts)[0].default

        let accs = AccountModule1.getAccounts().filter(e => e.visibility === 1)
        for(let acc of accs){
            accounts.push(<ConnectedAccount acc={acc} />)
        }

        if(accounts.length > 0){
            return (<div class={rootModule1.userInfoSection}>
                <div class={rootModule1.connectedAccounts}>
                    {accounts}
                </div>
            </div>)
        }
        return null
    }
}

class ConnectedAccount extends React.Component {
    render(){
        let [
            flexModule1,
            stylingModule1,
            rootModule1,
            flowerModule1,
            anchorModule1,
            SocialConstants
        ] = [
            BDModules.get(e => e.flex && e._horizontal)[0],
            BDModules.get(e => e.vertical && e.alignStretch && !e.streamerModeEnabledBtn)[0],
            BDModules.get(e => e.topSectionStreaming)[0],
            BDModules.get(e => e.flowerStarContainer)[0],
            BDModules.get(e => e.anchor)[0],
            BDModules.get(e => e.default && e.default.get && e.default.map)[0].default
        ]
        let acc = this.props.acc
        let constantsSocial = SocialConstants.get(acc.type)
        return (<div class={`${flexModule1.flex} ${flexModule1.horizontal} ${stylingModule1.justifyStart} ${stylingModule1.alignCenter} ${stylingModule1.noWrap} ${rootModule1.connectedAccount}`} style={{flex: "0 1 auto"}}>
            <img alt={`Logo ${constantsSocial.name}`} class={rootModule1.connectedAccountIcon} src={constantsSocial.icon.color || constantsSocial.icon.white || constantsSocial.icon.grey} />
            <div class={rootModule1.connectedAccountNameInner}>
                <div class={rootModule1.connectedAccountName}>{acc.name}</div>
                {acc.verified ? (<span>
                    <div class={`${flowerModule1.flowerStarContainer} ${rootModule1.connectedAccountVerifiedIcon}`} style={{width: "16px", height: "16px"}}>
                        <svg class={flowerModule1.flowerStar} width="16" height="16" viewBox="0 0 16 15.2">
                            <path fill="#4f545c" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path>
                        </svg>
                        <div class={flowerModule1.childContainer}>
                            <svg width="16" height="16" viewBox="0 0 16 15.2">
                                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="#ffffff"></path>
                            </svg>
                        </div>
                    </div>
                </span>) : null}
            </div>
            <a class={`${anchorModule1.anchor} ${anchorModule1.anchorUnderlineOnHover}`} rel="noreferrer noopener" target="_blank" role="button" tabindex="0">
                <svg class={rootModule1.connectedAccountOpenIcon} width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path>
                    <path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path>
                </svg>
            </a>
        </div>)
    }
}

class Badges extends React.Component {
    render(){
        let user = BDModules.get(e => e.default && e.default.getCurrentUser)[0].default.getCurrentUser()
        let rootModule = BDModules.get(e => e.topSectionStreaming)[0]
        let UserFlags = BDModules.get(e => e.UserFlags)[0].UserFlags
        let badges = []
        let serialized = []

        for(let flagName in UserFlags){
            if(user.hasFlag(UserFlags[flagName]))serialized.push(flagName)
        }

        for(let flagName of serialized){
            let searchable = `profileBadge${flagName.toLowerCase().replace(/_/g, " ").split(" ").map(e => e[0].toUpperCase()+e.slice(1)).join("")}`
            searchable = searchable.replace("HypesquadOnline", "HypeSquadOnline")
            if(!rootModule[searchable])continue
            badges.push(<Badge name={searchable}/>)
        }

        if(user.hasPremiumSubscription){
            badges.push(<Badge name="profileBadgePremium" />)
        }
        
        return badges
    }
}

class Badge extends React.Component {
    render(){
        let rootModule1 = BDModules.get(e => e.topSectionStreaming)[0]

        return (<div class={rootModule1.profileBadgeWrapper}>
            <div>
                <div class="" role="button" tabindex="0">
                    <div class={`${rootModule1.profileBadge} ${rootModule1[this.props.name]}`}>

                    </div>
                </div>
            </div>
        </div>)
    }
}

class Timestamp extends React.Component {
    render(){
        return <div className={timestampClass}>
            {this.props.message}
        </div>
    }
}