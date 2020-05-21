import { DiscordChannel, channelsModule } from "../util/DiscordToModules";
import Client from "../client/client";
import BaseStructure from "./BaseStructure";
import Snowflake from "../util/Snowflake"

export default class BaseChannel extends BaseStructure {
    id:string
    deleted:boolean
    constructor(channel:DiscordChannel){
        super()
        this.id = channel.id
        this.deleted = false
    }

    get createdAt():Date{
        return new Date(this.createdTimestamp)
    }
    get createdTimestamp(): number{
        return Snowflake.deconstruct(this.id).timestamp
    }

    delete() {
        return channelsModule.delete(this.id);
      }
}