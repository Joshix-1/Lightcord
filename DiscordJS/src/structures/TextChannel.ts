import { applyMixins } from "../util/util";
import GuildChannel from "./GuildChannel";
import { DiscordChannel } from "../util/DiscordToModules";
import { ChannelTypes } from "../util/Constants";

export class TextChannel extends GuildChannel/* implements TextBasedChannel*/ {
    constructor(data:DiscordChannel){
        super(data)
    }

    get type(): ChannelTypes.TEXT{
        return ChannelTypes.TEXT
    }
}