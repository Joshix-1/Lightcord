import { Snowflake } from ".."

export default function getModule(name:string){
    return exports[name+"Module"]
}

const BDModules = window.BDModules

function requireModule(filter: (module:any) => boolean){
    let module = BDModules.get(filter)[0]
    return module && module.default || module
}

export const channelsModule:{
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

export interface DiscordChannel {
    application_id?: Snowflake,
    bitrate?: number,
    guild_id?: Snowflake,
    icon?: string,
    id: Snowflake,
    lastMessageId?: Snowflake,
    lastPinTimestamp?: number,
    memberListId?: null,
    name?: string,
    nicks: any,
    nsfw: boolean,
    originChannelId?: Snowflake,
    ownerId?: Snowflake,
    parent_id?: Snowflake,
    permissionOverwrites: any,
    position: number,
    rateLimitPerUser: number,
    rawRecipients: DiscordRecipient[],
    recipients: Snowflake[],
    topic: string,
    type: number,
    userLimit: number,
    lastActiveTimestamp: number
}

interface DiscordRecipient {
    username: string,
    discriminator: string,
    id: Snowflake,
    avatar?: string,
    public_flags: number
}