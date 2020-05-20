import { EventEmitter } from "events";
import DiscordJSError from "../util/DiscordJSError";
import Collection from "@discordjs/collection";
import { Snowflake, Channel } from "..";
import { channelsModule } from "../util/DiscordToModules";
import { createChannel } from "../util/util";

export default class Client extends EventEmitter {
    constructor(){
        super()
    }

    /** Warnings and overrides for functions that are not compatible. */
    async login():Promise<never>{
        throw new DiscordJSError("Client#login is not supported. DiscordJS on lightcord will use the connected account.")
    }

    get token():never{
        throw new DiscordJSError("Client#token is not supported. DiscordJS on lightcord will use the connected account.")
    }

    get broadcasts(){
        return [] // not giving any since they're not supported.
    }

    get browser(){
        return true // since we're in electron, we're always in browser
    }

    get channels():Collection<Snowflake, Channel>{
        const channels = Object.values(channelsModule.getChannels())
        return new Collection(channels.map(e => ([e.id, createChannel(e)])))
    }
}