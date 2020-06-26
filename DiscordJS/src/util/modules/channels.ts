import {requireModule, DiscordChannel} from "../DiscordToModules"
import { Snowflake } from "../.."

let channelsModuleInternal1:{
    getChannel(id:Snowflake): DiscordChannel,
    getChannels(): {
        [k:string]: DiscordChannel
    },
    getDMFromUserId(id:string):Snowflake,
    getDMUserIds():Snowflake[],
    getFollowerStatsForChannel(id: Snowflake):{
        loadingStatus: "succeeded"|"failed",
        lastFetched: number,
        channelsFollowing: number,
        guildMembers: number,
        guildsFollowing: number,
        usersSeenEver: number,
        subscribersGainedSinceLastPost: number,
        subscribersLostSinceLastPost: number
    },
    getGDMsForRecipients(recipients: Snowflake[]):Set<Snowflake>
} = requireModule(e => e.default && e.default.getChannels && e.default.getChannel)

let channelsModuleInternal2:{
    deleteChannel(id: Snowflake):void
}

let channelsModuleInternal3:{
    hasUnread(channel_id:Snowflake):boolean,
    hasCategoryUnread(channel_id:Snowflake):boolean,
    getUnreadCount(channel_id:Snowflake):number,
    getMentionCount(channel_id:Snowflake):number,
    ackMessageId(channel_id:Snowflake):Snowflake,
    lastMessageId(channel_id:Snowflake):Snowflake,
    getOldestUnreadMessageId(channel_id:Snowflake):Snowflake,
    getOldestUnreadTimestamp(channel_id:Snowflake):number,
    isEstimated(channel_id:Snowflake):boolean,
    hasUnreadPins(channel_id:Snowflake):boolean,
    getAllReadStates()
} = requireModule(e => e.default && e.default.lastMessageId)

function set3(){
    if(channelsModuleInternal3)return
    channelsModuleInternal3 = requireModule(e => e.default && e.default.lastMessageId)
}

export = {
    getChannel: channelsModuleInternal1.getChannel,
    getAllChannels: channelsModuleInternal1.getChannels,
    get delete():typeof channelsModuleInternal2.deleteChannel{
        return channelsModuleInternal2 ? channelsModuleInternal2.deleteChannel : (channelsModuleInternal2 = requireModule(e => e.default && e.default.deleteChannel), channelsModuleInternal2.deleteChannel)
    },

    get lastMessageId(){
        set3()
        return channelsModuleInternal3.lastMessageId
    }
}