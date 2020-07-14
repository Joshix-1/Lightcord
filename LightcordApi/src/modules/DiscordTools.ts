import { notices, noticeWithoutID, notice, events as noticeEvents } from "../components/private/Notices";
import Utils from "./Utils";
import uuid from "./uuid";
import cloneNullProto from "./cloneNullProto";
import { EventEmitter } from "events";
import { defaultNotice } from "../components/private/Notice";
import excludeProperties from "./excludeProperties";
import NOOP from "./noop";
import WebpackLoader, { WebpackLoaderError } from "./WebpackLoader";

let soundModule
export default new class DiscordTools {
    showNotice(data:NoticeData):Notice{
        if(typeof data !== "object" || typeof data.text !== "string")throw new Error(`This notice is not valid. Given: ${Utils.formatJSObject(data)}`)
        let newData = cloneNullProto(Object.assign({}, defaultNotice, data)) as notice
        newData.id = uuid()
        notices.push(newData)
        noticeEvents.emit("noticeUpdate")
        const notice = new Notice(newData)
        return notice
    }

    get notices():Notice[]{
        return notices.map(data => new Notice(data))
    }

    /**
     * Quickly send notification (Even when no focused.)
     * @param data The notification. Be sure to include all properties except functions cause they're optional.
     * Notifications have a timeout of 3-5 seconds.
     * They look like this: https://i.imgur.com/jzuxKKu.png
     */
    showNotification(data:NotificationData):Notification{
        const notification = new window.Notification(data.title, excludeProperties(data, [
            "title",
            "onClick",
            "onClose",
            "onShow"
        ]))
        notification.onclick = data.onClick || NOOP
        notification.onshow = data.onShow || NOOP
        notification.onclose = data.onClose || NOOP
        return notification
    }

    playSound(sound:Sound){
        soundModule = soundModule || WebpackLoader.findByUniqueProperties(["createSound"])
        if(!soundModule)throw new WebpackLoaderError("Couldn't find soundModule here.")
        const created = soundModule.createSound(sound)
        created.play()
        return created
    }
}

export type Sound = "call_calling"|"call_ringing"|"call_ringing_beat"|"ddr-down"|"ddr-left"|"ddr-right"|"ddr-up"|"deafen"|"discodo"|"disconnect"|"human_man"|"mention1"|"mention2"|"mention3"|"message1"|"message2"|"message3"|"mute"|"overlayunlock"|"ptt_start"|"ptt_stop"|"reconnect"|"robot_man"|"stream_ended"|"stream_started"|"stream_user_joined"|"stream_user_left"|"undeafen"|"unmute"|"user_join"|"user_leave"|"user_moved"

export type NotificationData = {
    title: string,
    body: string,
    icon: string,
    onShow?: () => void,
    onClick?: () => void,
    onClose?: () => void
}

export type NoticeData = noticeWithoutID

const EventHandler = function(){
    if(this.removed !== this.state.removed){
        if(this.removed){
            this.emit("removed")
        }
    }
    if(this.showing !== this.state.showing){
        if(this.showing){
            this.emit("showing", true)
        }else{
            this.emit("showing", false)
        }
    }
    if(this.index !== this.state.index){
        this.emit("index", this.index)
    }
}

/** A notice interface for modifying it and subscribing to events. */
export class Notice extends EventEmitter {
    constructor(data){
        super()
        this.data = data

        this.state = {
            removed: this.removed,
            showing: this.showing,
            index: this.index
        }

        let eventFunc = EventHandler.bind(this)
        noticeEvents.on("noticeUpdate", eventFunc)
        this.on("removed", () => {
            noticeEvents.off("noticeUpdate", eventFunc)
        })
    }

    state:{
        removed:boolean,
        showing:boolean,
        index:number
    }

    get removed():boolean{
        return !notices.find(e => e.id === this.id)
    }
    get showing():boolean{
        return this.index === 0
    }

    get index():number{
        return notices.findIndex(e => e.id === this.id)
    }
    get id(){
        return this.data.id
    }

    get text(){
        return this.data.text
    }
    set text(text){
        this.data.text = text
        noticeEvents.emit("noticeUpdate")
    }

    get type(){
        return this.data.type
    }
    set type(type){
        this.data.type = type
        noticeEvents.emit("noticeUpdate")
    }

    get buttonText(){
        return this.data.buttonText
    }
    set buttonText(buttonText:string){
        this.data.buttonText = buttonText
        noticeEvents.emit("noticeUpdate")
    }

    get onClick(){
        return this.data.onClick
    }
    set onClick(onClick){
        this.data.onClick = onClick
        noticeEvents.emit("noticeUpdate")
    }

    remove(){
        if(this.removed)return
        notices.splice(this.index, 1)
        noticeEvents.emit("noticeUpdate")
    }
    data:notice
}