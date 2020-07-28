import WebpackLoader from "./modules/WebpackLoader"
import Components from "./components/components"
import uuid from "./modules/uuid"
import Utils from "./modules/Utils"
import DiscordTools from "./modules/DiscordTools"
import * as patchers from "./modules/patchers"
import excludeProperties from "./modules/excludeProperties"
import cloneNullProto from "./modules/cloneNullProto"
import NOOP from "./modules/noop"
import unfreeze from "./modules/Unfreeze"
import { isNative, isImported } from "./modules/environnement"
import * as bandagedbdApi from "@bandagedbd/bdapi"
patchers.patch()

const LightcordApi = {
    WebpackLoader: WebpackLoader,
    Components: Components,
    uuid: uuid,
    Utils: Utils,
    DiscordTools: DiscordTools,
    _: {
        excludeProperties: excludeProperties,
        cloneNullProto: cloneNullProto,
        NOOP: NOOP,
        unfreeze: unfreeze
    },
    get isNative(){return isNative},
    get isImported(){return isImported}
}

declare global {
    var React:typeof import("react")
    interface Window {
        /**
         * Lightcord is only availlaible in Lightcord (native)
         */
        Lightcord: LightcordGlobal,
        /**
         * BDModules is only availlaible in Lightcord (native)
         */
        BDModules: {
            modules:any[],
            get(filter:(mod:any)=>boolean, modules?:any[]):any[],
            get(id:number, modules?:any[]):any,
            get(ids: [number|((mod:any)=>boolean)], modules?:any[]):any
        },
        BdApi: typeof bandagedbdApi.BdApi,
        EDApi: typeof bandagedbdApi.BdApi
    }
    var Lightcord:LightcordGlobal
}

export default LightcordApi

Object.assign(window.Lightcord.Api, LightcordApi)

/**
 * The main Lightcord exports. Can be accessed with `window.Lightcord`
 */
export interface LightcordGlobal {
    DiscordModules: {
        /**
         * Internal Discord's dispatcher - can be used to subscribe to gateway events / client events.
         */
        dispatcher: import("./types/DiscordDispatcherTypes").default,
        constants: import("./types/DiscordConstantsTypes").default
    },
    Settings: {
        devMode: boolean,
        callRingingBeat: boolean
    },
    Api: LightcordApiGlobal,
    BetterDiscord: {
        BdApi: typeof bandagedbdApi.BdApi,
        [mod:string]:any
    }
}

/**
 * The main Api. Can be accessed with `window.Lightcord.Api`
 */
type LightcordApiGlobal = lightcordApiMainExports & typeof LightcordApi

type lightcordApiMainExports = {
    /**
     * Waits until the first module that match the filter gets exported
     * @param filter The filter that specifies the module to match.
     */
    ensureExported(filter: (mod:any) => boolean):Promise<any>,
    /**
     * Recreate the object without the `__proto__` and `prototype` properties - usefull for better formatting in console.
     * @param obj The object to recreate
     */
    cloneNullProto<Obj = any>(obj:Obj):Obj
}