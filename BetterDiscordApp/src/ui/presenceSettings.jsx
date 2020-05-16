import {settingsCookie} from "../0globals";
import BDV2 from "../modules/v2";
import Utils from "../modules/utils";
import DOM from "../modules/domtools";

import XSvg from "./xSvg";
import ReloadIcon from "./reloadIcon";
import EditIcon from "./icons/edit";
import DeleteIcon from "./icons/delete";
import Switch from "./components/switch";
import TooltipWrap from "./tooltipWrap";
import V2C_SettingsTitle from "./settingsTitle";
import V2C_SettingsGroup from "./settingsGroup";

const React = BDV2.React;
const anchorClasses = BDV2.anchorClasses;

export default class V2C_PresenceSettings extends BDV2.reactComponent {
    constructor(props) {
        super(props);
        console.log(props)
    }

    updatePreview(data){
        this.setState({
            data
        })
    }

    render() {
        let contentModule = BDModules.get(e => e.contentColumn)[0]
        return (<div className={contentModule.contentColumn+" "+contentModule.contentColumnDefault+" content-column default"}
            style={{padding: "60px 40px 0px"}}>
                <V2C_SettingsGroup title="RichPresence Settings" settings={this.props.settings} onChange={this.props.onChange}/>
                <V2C_SettingsTitle text="RichPresence"/>
                <div>
                    {/** options */}
                    {RPCProps.map(e => {
                        return <PresenceSettingRow setting={e} />
                    })}
                </div>
                <div>
                    {/** preview */}
                    <RpcPreview settings={this}/>
                </div>
        </div>)
    }
}

class PresenceSettingRow extends BDV2.reactComponent {
    render(){
        let setting = this.props.setting

        let rowModule = BDModules.get(e => e.removeKeybind)[0]
        let marginModule = BDModules.get(e => e.marginBottom20)[0]
        let marginModule2 = BDModules.get(e => e.defaultMarginh5)[0]
        let colorModule = BDModules.get(e => e.colorStandard)[0]
        let sizeModule = BDModules.get(e => e.size32)[0]

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className="item-rJ_Cmt da-item flexChild-faoVW3 da-flexChild">
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                <div className="inputWrapper-31_8H8 da-inputWrapper">
                    <input class="inputDefault-_djjkz input-cIJ7To size16-1__VVI" name="state" type="text" placeholder="" maxlength="999" value={setting.default} />
                </div>
            </div>
            <div class="divider-3573oO da-divider dividerDefault-3rvLe- da-dividerDefault"></div>
        </div>)
    }
}

class RpcPreview extends BDV2.reactComponent {
    constructor(props = {}){
        super(props)
        this.state = {
            active: "profile"
        }
        this.tabs = []
    }

    changeTab(tab){
        let ancientTab = this.state.active
        if(ancientTab === tab.props.id)return

        this.tabs.forEach(e => {
            e.setActive(false)
        })
        this.setState({
            active: tab.id
        })
    }

    render(){
        return (<div className="lc-tabWrapper">
            <div className="lc-tabnav" style={{flex: "0 1 auto"}}>
                <Tab onClick={this.changeTab.bind(this)} preview={this} title="Full Profile" id="profile"/>
                <Tab onClick={this.changeTab.bind(this)} preview={this} title="User Popout" id="popout"/>
            </div>
            <Profile />
        </div>)
    }   

    isActive(tab){
        return this.state.active === tab
    }

    /**
     * 
     * @param {string} tmplate 
     * @param {any} data 
     */
    renderTemplate(tmplate, data){
        Object.keys(data).forEach(k => {
            tmplate.replace(new RegExp("{{"+k+"}}", "g"), data[k])
        })
        return tmplate
    }
}

class Tab extends BDV2.reactComponent {
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
            this.props.onClick(this)
            this.setActive(true)
        }}>
            {this.props.title}
        </div>)
    }
}

class Status extends BDV2.reactComponent {
    render(){
        let status = BDModules.get(e => e.default && e.default.getPresence)[0].default.getPresence().status
        if(status === "invisible")status = "offline"
        let className = "pointerEvents-2zdfdO da-pointerEvents"
        return <rect width="16" height="16" x="60" y="60" fill="#ffffff" mask={`url(#svg-mask-status-${status})`} className={className}></rect>
    }
}

class Profile extends BDV2.ReactComponent {
    render(){
        let user = BDModules.get(e => e.default && e.default.getCurrentUser)[0].default.getCurrentUser()
        let avatarURL = user.getAvatarURL(user.avatar.startsWith("a_") ? "gif" : "png")
        let [
            flexModule1,
            stylingModule1,
            rootModule1,
            avatarModule1,
            nameTagModule1
        ] = [
            BDModules.get(e => e.flex && e._horizontal)[0],
            BDModules.get(e => e.vertical && e.alignStretch)[0],
            BDModules.get(e => e.topSectionStreaming)[0],
            BDModules.get(e => e.pointerEvents)[0],
            BDModules.get(e => e.bot)[0]
        ]
        return [
            <div className="lc-tab">
                <div class={`${flexModule1.flex} ${stylingModule1.vertical} ${stylingModule1.justifyStart} ${stylingModule1.alignStretch} ${stylingModule1.noWrap} ${rootModule1.root}`} style={{flex: "1 1 auto"}}>
                    <div class={rootModule1.topSectionPlaying}>
                        <header class={rootModule1.header}>
                            <div class={`${rootModule1.avatar} ${avatarModule1.wrapper}`} role="img" aria-hidden="true" style={{width: "80px", height: "80px"}}>
                                <svg width="92" height="80" viewBox="0 0 92 80" class="mask-1l8v16 da-mask svg-2V3M55 da-svg" aria-hidden="true">
                                    <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
                                        <img src={avatarURL} alt=" " class={avatarModule1.avatar} aria-hidden="true" />
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
                            <div class="activityProfile-2bJRaP da-activityProfile activity-1ythUs da-activity">
                                <h3 class="headerTextNormal-2mGWX3 headerText-1HLrL7 marginBottom8-AtZOdT da-headerTextNormal da-headerText da-marginBottom8 base-1x0h_U da-base size12-3cLvbJ">En train de jouer</h3>
                                <div class="bodyNormal-2D39hT body-ZAhrcj flex-1O1GKY alignStart-H-X2h- da-bodyNormal da-body da-flex da-alignStart">
                                    <div class="assets-VMAukC da-assets">
                                        <img alt="" src="https://cdn.discordapp.com/app-assets/708687209372581888/711293441526726747.png" class="assetsLargeImageProfile-3YXDex assetsLargeImage-eYwpTX noUserDrag-5Mb43F da-assetsLargeImageProfile da-assetsLargeImage da-noUserDrag assetsLargeMaskProfile-1Qkfen da-assetsLargeMaskProfile"/>
                                        <img alt="" src="https://cdn.discordapp.com/app-assets/708687209372581888/711293441526726747.png" class="assetsSmallImageProfile-3JcsV1 assetsSmallImage-3_3Bzj noUserDrag-5Mb43F da-assetsSmallImageProfile da-assetsSmallImage da-noUserDrag"/>
                                    </div>
                                    <div class="contentImagesProfile-1Mz07W content-3JfFJh da-contentImagesProfile da-content" style={{flex: "1 1 auto"}}>
                                    <h3 class="nameNormal-2lqVQK ellipsis-1XUmPN textRow-19NEd_ da-nameNormal da-ellipsis da-textRow base-1x0h_U da-base size14-e6ZScH" title="Deroku Vanity">
                                        <span class="activityName-1IaRLn da-activityName">Deroku Vanity</span>
                                    </h3>
                                    <div title="Lightcord test" class="details-38sfDr ellipsis-1XUmPN textRow-19NEd_ da-details da-ellipsis da-textRow">
                                        Lightcord test
                                    </div>
                                    <div class="state-Tt0LO3 ellipsis-1XUmPN textRow-19NEd_ da-state da-ellipsis da-textRow">
                                        <span title="gay comme phorcys">gay comme phorcys</span>
                                    </div>
                                    <div class="timestamp-VjAZmo ellipsis-1XUmPN textRow-19NEd_ da-timestamp da-ellipsis da-textRow">
                                        50&nbsp;min&nbsp;24&nbsp;s écoulées
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div class={rootModule1.body}>
					<div class="scrollerWrap-2lJEkd da-scrollerWrap scrollerFade-1Ijw5y da-scrollerFade">
						<div class="scroller-2FKFPG da-scroller">
							<div class="userInfoSection-2acyCx da-userInfoSection">
								<div class="userInfoSectionHeader-CBvMDh da-userInfoSectionHeader">Note</div>
								<div class="note-3kmerW da-note note-QfFU8y da-note">
									<textarea placeholder="Clique pour ajouter une note" maxlength="256" autocorrect="off" class="scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9 da-scrollbarGhostHairline da-scrollbar" style={{height: "40px"}} disabled></textarea>
								</div>
							</div>
							<div class="userInfoSection-2acyCx da-userInfoSection">
								<div class="connectedAccounts-repVzS da-connectedAccounts">
									<div class="flex-1xMQg5 flex-1O1GKY da-flex da-flex horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 connectedAccount-36nQx7 da-connectedAccount" style={{flex: "0 1 auto"}}>
										<img alt="Logo Twitter" class="connectedAccountIcon-3P3V6F da-connectedAccountIcon" src="/assets/4662875160dc4c56954003ebda995414.png" />
											<div class="connectedAccountNameInner-1phBvE da-connectedAccountNameInner">
												<div class="connectedAccountName-f8AEe2 da-connectedAccountName">jen_wina</div>
												<span>
													<div class="flowerStarContainer-3zDVtj da-flowerStarContainer connectedAccountVerifiedIcon-3aZz_K da-connectedAccountVerifiedIcon" style={{width: "16px", height: "16px"}}>
														<svg class="flowerStar-1GeTsn da-flowerStar" aria-hidden="true" width="16" height="16" viewBox="0 0 16 15.2">
															<path fill="#4f545c" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path>
														</svg>
														<div class="childContainer-1wxZNh da-childContainer">
															<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 15.2">
																<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="#ffffff"></path>
															</svg>
														</div>
													</div>
												</span>
											</div>
											<a class="anchor-3Z-8Bb da-anchor anchorUnderlineOnHover-2ESHQB da-anchorUnderlineOnHover" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">
												<svg class="connectedAccountOpenIcon-2cNbq5 da-connectedAccountOpenIcon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
													<path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path>
													<path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>,
            <div class="lc-fadeOverlay"></div>
        ]
    }
}

class Badges extends BDV2.reactComponent {
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
            console.log(searchable, rootModule[searchable])
            if(!rootModule[searchable])continue
            badges.push(<Badge name={searchable}/>)
        }

        if(user.hasPremiumSubscription){
            badges.push(<Badge name="profileBadgePremium" />)
        }
        
        return badges
    }
}

class Badge extends BDV2.reactComponent {
    render(){
        let rootModule1 = BDModules.get(e => e.topSectionStreaming)[0]

        return (<div class={rootModule1.profileBadgeWrapper}>
            <div>
                <div class="" role="button" tabindex="0">
                    <div class={`profileBadge-2BqF-Z da-profileBadge ${rootModule1[this.props.name]}`}>

                    </div>
                </div>
            </div>
        </div>)
    }
}



const RPCProps = [
    {
        title: "State",
        id: "state",
        default: "Browsing Discord",
        type: "text"
    },
    {
        title: "Details",
        id: "details",
        default: "Lightcord",
        type: "text"
    }
]

const Constants = {
    PresenceViewer: {
        USER_ACTIVITY_HEADER_WATCHING: "Watching {name}",
        USER_ACTIVITY_HEADER_PLAYING: "Playing a game",
        USER_ACTIVITY_STATE_SIZE: "({count} of {max})",
        USER_ACTIVITY_TIMESTAMP_END: "{hours, plural, =-1 {} other {{hours}:}}{minutes, plural, =-1 {} other {{minutes}:}}{seconds, plural, =-1 {} other {{seconds}}} left",
        USER_ACTIVITY_TIMESTAMP_START: "{hours, plural, =-1 {} other {{hours}:}}{minutes, plural, =-1 {} other {{minutes}:}}{seconds, plural, =-1 {} other {{seconds}}} elapsed",
        USER_ACTIVITY_ACTION_NOTIFY_ME: "Notify Me",
        USER_ACTIVITY_ACTION_ASK_TO_JOIN: "Ask to Join",
        USER_ACTIVITY_ACTION_SPECTATE: "Spectate",
        SECTION_TITLE: "Rich Presence Visualizer",
        SECTION_MORE_INFO: "Rich Presence lets your game surface exciting game data on your players' profiles, and lets them play together with chat invites, Ask to Join, and Spectate. See exactly how your text and art will look on a user's profile.",
        PROFILE: "Full Profile",
        USER_POPOUT: "User Popout",
        ACTIVITY_FEED: "Games Tab",
        NONE: "None",
        SHOW_CODE: "Show Code",
        MOBILE_ALERT: "Rich Presence Visualizer only available on desktop",
        PARTY_ID_MUST_BE_UNIQUE: "Party ID can't match Join or Spectate Secrets.",
        SECRETS_MUST_BE_UNIQUE: "Join and Spectate Secrets must be unique strings."
    },
    Tooltips: {
        STATE: "[type: char*]\nThe user's current party status",
        DETAILS: "[type: char*]\nWhat the player is currently doing",
        START_TIMESTAMP: '[type: int64_t]\nEpoch seconds for game start - including will show time as "elapsed"',
        END_TIMESTAMP: '[type: int64_t]\nEpoch seconds for game end - including will show time as "remaining"\t',
        LARGE_IMAGE_KEY: "[type: char*]\nKey of the uploaded image for the large profile artwork",
        LARGE_IMAGE_TEXT: "[type: char*]\nTooltip for the largeImageKey",
        SMALL_IMAGE_KEY: "[type: char*]\nKey of the uploaded image for the small profile artwork",
        SMALL_IMAGE_TEXT: "[type: char*]\nTooltip for the smallImageKey",
        PARTY_ID: "[type: char*]\nId of the player's party, lobby, or group",
        PARTY_SIZE: "[type: int]\nCurrent size of the player's party, lobby, or group",
        PARTY_MAX: "[type: int]\nMaximum size of the player's party, lobby, or group\t",
        SPECTATE_SECRET: "[type: char*]\nUnique hashed string for Spectate button",
        JOIN_SECRET: "[type: char*]\nUnique hashed string for chat invitations and Ask to Join"
    },
    UserProfile: {
        USER_INFO: "User Info",
        MUTUAL_SERVERS: "Mutual Servers",
        MUTUAL_FRIENDS: "Mutual Friends",
        NOTE: "Note",
        ADD_NOTE: "Click to add note"
    }
}