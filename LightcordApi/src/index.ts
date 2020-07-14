import WebpackLoader from "./modules/WebpackLoader"
import Components from "./components/components"
import uuid from "./modules/uuid"
import Utils from "./modules/Utils"
import DiscordTools from "./modules/DiscordTools"
import * as patchers from "./modules/patchers"
patchers.patch()

const LightcordApi = {
    WebpackLoader: WebpackLoader,
    Components: Components,
    uuid: uuid,
    Utils: Utils,
    DiscordTools: DiscordTools
}

declare global {
    var React:typeof import("react")
    interface Window {
        Lightcord: LightcordGlobal,
        BDModules: {
            modules:any[],
            get(filter:(mod:any)=>boolean, modules?:any[]):any[],
            get(id:number, modules?:any[]):any,
            get(ids: [number|((mod:any)=>boolean)], modules?:any[]):any
        }
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
    Api: LightcordApiGlobal
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