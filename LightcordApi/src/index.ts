import WebpackLoader from "./modules/WebpackLoader"
import Components from "./components/components"

const LightcordApi = {
    WebpackLoader: WebpackLoader,
    Components: Components
}

declare global {
    var React:typeof import("react")
    interface Window {
        Lightcord: {
            DiscordModules: {
                /**
                 * Internal Discord's dispatcher - can be used to subscribe to gateway events / client events.
                 */
                dispatcher: {
                    _subscriptions: any,
                    _waitQueue: (() => void)[],
                    _processingWaitQueue: boolean,
                    _currentDispatchActionType: string | null,
                    _orderedActionHandlers: any,
                    _orderedCallbackTokens: any,
                    _lastID: number,
                    _dependencyGraph: any
    
                    isDispatching():boolean,
                    /**
                     * If the dispatcher isn't dispatching, then dispatch
                     */
                    maybeDispatch(event: {type: string, [k: string]:any}):void,
                    /**
                     * Wait until the dispatcher finished dispatching, then dispatch
                     */
                    dirtyDispatch(event: {type: string, [k: string]:any}):void,
                    /**
                     * dispatch
                     */
                    dispatch(event: {type: string, [k: string]:any}):void,
                    /** Same as dispatcher.dispatch */
                    _dispatch(event: {type: string, [k: string]:any}):void,
                    /**
                     * Intercept events before they happens, if returning true, then the event will be blocked from dispatching.
                     */
                    setInterceptor(interceptor: (event) => boolean):void,
                    /**
                     * Wait until the dispatcher has finished dispatching
                     */
                    wait(waiting: () => void):void,
                    /** Subscribe to an event */
                    subscribe(event: string, listener: (event: {type: string, [k: string]:any}) => void):void,
                    /**
                     * Unsubscribe from the event. 
                     */
                    unsubscribe(event: string, listener: (event: {type: string, [k: string]:any}) => void):void,
                    register(name: string, actionHandler: any, storeDidChange: any):void
                    addDependencies,
                    _invalidateCaches,
                    _processWaitQueue,
                    _computeOrderedActionHandlers,
                    _computeOrderedCallbackTokens
                },
                constants: import("./types/DiscordConstantsTypes").default
            },
            Settings: {
                devMode: boolean,
                callRingingBeat: boolean
            },
            Api: {
                /**
                 * Lightcord's autorization for lightcord's servers
                 */
                Authorization: string,
                /**
                 * Waits until the first module that match the filter gets exported
                 * @param filter The filter that specifies the module to match.
                 */
                ensureExported(filter: (mod:any) => boolean):Promise<any>
            } & typeof LightcordApi
        },
        BDModules: {
            modules:any[],
            get(filter:(mod:any)=>boolean, modules?:any[]):any[],
            get(id:number, modules?:any[]):any,
            get(ids: [number|((mod:any)=>boolean)], modules?:any[]):any
        }
    }
}

export default LightcordApi

Object.assign(window.Lightcord.Api, LightcordApi)