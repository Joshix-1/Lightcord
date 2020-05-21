import nodeFetch from "node-fetch"
import * as electron from "electron"
import * as crypto from "crypto"
import BDV2 from "./v2"
import tooltipWrap from "../ui/tooltipWrap"

const debug = false
const cache = {}
const cache2 = {}

const PinnedModule = BDModules.get(e => e.default && e.default.getPinnedMessages)[0].default
const ChannelModule = BDModules.get(e => e.default && e.default.getChannelId)[0].default
const fetchMessagesModule = BDModules.get(e => e.default && e.default.fetchMessages)[0].default
const fetchMessagesModule2 = BDModules.get(e => e.default && e.default.fetchMessages)[1].default
const getMessagesModule = BDModules.get(e => e.default && e.default.getMessages)[0].default

export default class PluginCertifier {
    constructor(){}

    start(){
        const dispatcher = window.Lightcord.DiscordModules.dispatcher
        const constants = window.Lightcord.DiscordModules.constants

        const originalFetchMessages = fetchMessagesModule.fetchMessages
        fetchMessagesModule.fetchMessages = function(){
            const returnValue = originalFetchMessages.apply(this, arguments)
            if(returnValue instanceof Promise){
                returnValue
                .then(() => {
                    const ev = getMessagesModule.getMessages(ChannelModule.getChannelId())
                    process.nextTick(() => {
                        for(const message of ev._array){
                            const attachments = message.attachments || []
                            if(attachments.length === 0)continue // no attachments
            
                            attachments.forEach(attachment => {
                                processAttachment(attachment)
                            })
                        }
                    })
                })
            }
            return returnValue
        }

        const originalFetchMessages2 = fetchMessagesModule2.fetchMessages
        fetchMessagesModule2.fetchMessages = function(){
            const returnValue = originalFetchMessages2.apply(this, arguments)
            if(returnValue instanceof Promise){
                returnValue
                .then(() => {
                    const ev = getMessagesModule.getMessages(ChannelModule.getChannelId())
                    process.nextTick(() => {
                        for(const message of ev._array){
                            const attachments = message.attachments || []
                            if(attachments.length === 0)continue // no attachments
            
                            attachments.forEach(attachment => {
                                processAttachment(attachment)
                            })
                        }
                    })
                })
            }
            return returnValue
        }

        const alreadyUsed = {}
        const originalGetPinnedMessages = PinnedModule.getPinnedMessages.bind(PinnedModule)
        PinnedModule.getPinnedMessages = function(){
            const pinned = originalGetPinnedMessages(...arguments)
            if(!pinned || alreadyUsed[pinned.id])return pinned
            alreadyUsed[pinned.id] = true
            
            setTimeout(() => {
                delete alreadyUsed[pinned.id]
                for(const message of pinned.messages){
                    const attachments = message.attachments || []
                    if(attachments.length === 0)continue // no attachments
    
                    attachments.forEach(attachment => {
                        processAttachment(attachment)
                    })
                }
            }, 50);

            return pinned
        }

        dispatcher.subscribe(constants.ActionTypes.MESSAGE_CREATE, (ev) => {
            const message = ev.message
            if(message.channel_id !== ChannelModule.getChannelId())return
            process.nextTick(() => {
                const attachments = message.attachments || []
                if(attachments.length === 0)return // no attachments

                attachments.forEach(attachment => {
                    processAttachment(attachment)
                })
            })
        })
    }
}

function processAttachment(attachment){
    if(!attachment.url.startsWith("https://cdn.discordapp.com/"))return
    if(!attachment.filename.endsWith(".plugin.js") && !attachment.filename.endsWith(".theme.css"))return

    let nextHash = (hash) => {
        if(!cache[hash]){
            nodeFetch("https://raw.githubusercontent.com/Lightcord/filehashes/master/hashes/"+hash, {
                headers: {
                    "User-Agent": electron.remote.getCurrentWebContents().userAgent
                }
            }).then(async res => {
                if(res.status !== 200)return
                const result = await res.json()
                debug&&console.log(`Hash valid:`, result)

                cache[hash] = result

                let elements = Array.from(document.querySelectorAll(`a[href="${attachment.url}"]`)).filter(e => !e.classList.contains("da-fileNameLink")).map(e => e.parentElement)
                renderToElements(elements, result, attachment.filename)
            }).catch(()=>{})
        }else{
            const result = cache[hash]
            debug&&console.log(`Hash valid:`, result)

            let elements = Array.from(document.querySelectorAll(`a[href="${attachment.url}"]`)).filter(e => !e.classList.contains("da-fileNameLink")).map(e => e.parentElement)
            renderToElements(elements, result, attachment.filename)
        }
    }

    if(cache2[attachment.url])return nextHash(cache2[attachment.url])

    nodeFetch(attachment.url, {
        headers: {
            "User-Agent": electron.remote.getCurrentWebContents().userAgent
        }
    }).then(res => {
        if(res.status !== 200)throw new Error("File doesn't exist.")
        const hash = crypto.createHash("sha256")
        res.body.pipe(hash)
        res.body.on("end", () => {
            const hashResult = hash.digest("hex")
            debug&&console.log(`Calculated hash for file ${attachment.filename}: ${hashResult}`)

            cache2[attachment.url] = hashResult

            nextHash(hashResult)
        })
    }).catch(()=>{})
}

const flowerStarModule = BDModules.get(e => e.flowerStarContainer)[0]
const childModule = BDModules.get(e => e.childContainer)[0]

/**
 * 
 * @param {HTMLDivElement[]} elements 
 * @param {{type: "Theme"|"Plugin", name: string}} result
 */
function renderToElements(elements, result, filename){

    elements.forEach(e => {
        if(e.childNodes.length > 3)return
        const div = document.createElement("div")
        e.appendChild(div)
        if(!result.official){
            BDV2.reactDom.render(BDV2.react.createElement(tooltipWrap, {text: result.type+" "+result.name+" is certified by Lightcord."}, 
                BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "16px", height: "16px"}},
                    BDV2.react.createElement("svg", {className: flowerStarModule.flowerStar, "aria-hidden":"false",width:"16px",height:"16px",viewBox:"0 0 16 15.2"},
                        BDV2.react.createElement("path", {fill:"#4f545c", "fill-rule":"evenodd",d:"m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"})
                    ),
                    BDV2.react.createElement("div", {className: childModule.childContainer}, 
                        BDV2.react.createElement("svg", {"aria-hidden":"false",width:"16px",height:"16px",viewBox:"0 0 16 15.2"}, 
                            BDV2.react.createElement("path", {fill:"#ffffff",d:"M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"})
                        )
                    )
                )
            ), div)
        }else{
            BDV2.reactDom.render(BDV2.react.createElement(tooltipWrap, {text: result.type+" "+result.name+" was made by the developers of Lightcord.",style:"brand"}, 
                BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "16px", height: "16px"}},
                    BDV2.react.createElement("svg", {className: flowerStarModule.flowerStar, "aria-hidden":"false",width:"16px",height:"16px",viewBox:"0 0 16 15.2",stroke:"#36393f",style:{color:"#4087ed"}},
                        BDV2.react.createElement("path", {fill:"currentColor", "fill-rule":"evenodd",d:"m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"})
                    ),
                    BDV2.react.createElement("div", {className: childModule.childContainer}, 
                        BDV2.react.createElement("svg", {"aria-hidden":"false",width:"16px",height:"16px",viewBox:"0 0 16 15.2"}, 
                            BDV2.react.createElement("path", {fill:"#ffffff",d:"M10.7,5.28a2.9,2.9,0,0,0-2.11.86.11.11,0,0,0,0,.16l1.05.94a.11.11,0,0,0,.15,0,1.27,1.27,0,0,1,.9-.33c.65,0,.65.73.65.73a.64.64,0,0,1-.65.65,1.73,1.73,0,0,1-1.18-.54c-.31-.26-.36-.32-.73-.66S7.06,5.28,5.65,5.28A2.26,2.26,0,0,0,3.37,7.56,2.59,2.59,0,0,0,3.82,9a2.18,2.18,0,0,0,1.83.89,2.94,2.94,0,0,0,2.1-.81.11.11,0,0,0,0-.16L6.74,8A.11.11,0,0,0,6.6,8a1.58,1.58,0,0,1-.94.29h0A.71.71,0,0,1,5,7.56H5a.63.63,0,0,1,.65-.64c.71,0,1.42.75,1.94,1.27.75.76,1.66,1.79,3.11,1.74A2.28,2.28,0,0,0,13,7.64a2.59,2.59,0,0,0-.45-1.47A2.14,2.14,0,0,0,10.7,5.28Z"})
                        )
                    )
                )
            ), div)
        }
    })
}