import BDV2 from "../modules/v2";
import V2C_SettingsTitle from "./settingsTitle";
import V2C_SettingsGroup from "./settingsGroup";
import dataStore from "../modules/dataStore";
import { defaultRPC, settingsRPC } from "../0globals";
import CustomRichPresence from "../modules/CustomRichPresence"
import Select from "./select";
import timestampRender from "./timestampRender"
import DOMTools from "../modules/domtools";

/**
 * @type {typeof import("react")}
 */
const React = BDV2.React;

let contentModule = BDModules.get(e => e.contentColumn)[0]
let marginModule2 = BDModules.get(e => e.defaultMarginh5)[0]
let colorModule = BDModules.get(e => e.colorStandard)[0]
let sizeModule = BDModules.get(e => e.size32)[0]
const scrollbarModule1 = BDModules.get(e => e.scrollbarGhostHairline)[0]
const GuildModule = BDModules.get(e => e.default && e.default.getGuilds)[0].default
const relationShipModule = BDModules.get(e => e.default && e.default.getRelationships)[0].default
const sessionModule = BDModules.get(e => e.default && e.default.getSessions)[0].default
const userModule = BDModules.get(e => e.default && e.default.getCurrentUser)[0].default

export default class V2C_AccountInfos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<div className={contentModule.contentColumn+" "+contentModule.contentColumnDefault+" content-column default"}
            style={{padding: "60px 40px 0px"}}>
                <V2C_SettingsTitle text="Account Infos"/>
                <div>
                    <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                        Profile
                    </h5>
                    <CodeContent content={this.getProfileValue()} language="diff" />
                    <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                        Statistics
                    </h5>
                    <CodeContent content={this.getStatistics()} language="diff" />
                    <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                        Connected Sessions
                    </h5>
                    <CodeContent content={this.getSessionValue()} language="diff" />
                </div>
                <div className={BDModules.get(e => e.marginBottom20)[0].marginBottom20}></div>
        </div>)
    }

    getSessionValue(){
        const sessionsRaw = sessionModule.getSessions()
        const sessions = Object.keys(sessionsRaw).filter(e => e !== "all").map(e => sessionsRaw[e])

        if(sessions.length === 0)return "- No session detected. Please try in a few seconds"
        
        return sessions.map(e => {
            return `+ id: ${e.sessionId}
+ os: ${e.clientInfo.os[0].toUpperCase()+e.clientInfo.os.slice(1)}
+ client: ${e.clientInfo.client}
+ status: ${e.status}
+ active: ${e.active ? "Yes" : "No"}
+ Activities: ${e.activities.length}`
        }).join("\n"+"-".repeat(38)+"\n")
    }

    getProfileValue(){
        const user = userModule.getCurrentUser()
        /**
         * @type {Date}
         */
        const createdAt = user.createdAt

        return `+ Username: ${user.username}
+ Discriminator: ${user.discriminator}
+ Tag: ${user.tag}
+ ID: ${user.id}
+ Avatar: ${user.avatar}
+ Avatar URL: https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith("a_") ? "gif" : "png"}?size=4096
+ Creation Date: ${(createdAt.getDate()).toString().padStart(2, "0")}/${(createdAt.getMonth()+1).toString().padStart(2, "0")}/${(createdAt.getFullYear()).toString().padStart(2, "0")} ${createdAt.getHours().toString().padStart(2, "0")}h ${createdAt.getMinutes().toString().padStart(2, "0")}min ${createdAt.getSeconds()}s
+ Flags: ${user.flags}
+ Has Nitro: ${user.hasPremiumSubscription ? "Yes" : "No"}
- Email: ${user.email}
- 2FA: ${user.mfaEnabled ? "Yes" : "No"}
- Has Been On Mobile: ${user.mobile ? "Yes" : "No"}
- Phone: ${user.phone || "None"}
- Verified: ${user.verified}`
    }

    getStatistics(){

        const guilds = Object.values(GuildModule.getGuilds())
        const relations = Object.keys(relationShipModule.getRelationships())
        const friends = relations.filter(e => relationShipModule.isFriend(e))
        const blocked = relations.filter(e => relationShipModule.isBlocked(e))

        return `+ Server Count: ${guilds.length} servers
+ Relations: ${relations.length} relations
+ Friends Count: ${friends.length} friends
- Blocked Users Count: ${blocked.length} blocked users`
    }
}


const hightlightJS = BDModules.get(e => e.highlight)[0]
const messageModule1 = BDModules.get(e => e.markup)[0]
const messageModule2 = BDModules.get(e => e.messageContent)[0]

class CodeContent extends React.Component {
    render(){
        
        return (<div class={`${messageModule1.markup} ${messageModule2.messageContent}`}>
            <pre>
                <code class={`${scrollbarModule1.scrollbarGhostHairline} hljs`} dangerouslySetInnerHTML={{__html: hightlightJS.highlight(this.props.language, this.props.content).value}}>

                </code>
            </pre>
            <div className={BDModules.get(e => e.marginBottom8)[0].marginBottom8}></div>
        </div>)
    }
}