import { ReactDOMSelector } from "./selectors"

// bait typescript into thinking this is not reactDOM so no circular dependency.
window.ReactDOM = (window["Reac"+"tDOM"] || // If in Lightcord
    (()=>{ // If in Standard BetterDiscord
        try{
            return window.BdApi.findModule(ReactDOMSelector as any)
        }catch(e){
            return null
        }
    })() ||
    (()=>{ // If in Powercord
        try{
            const webpack = require("powercord/webpack")
            return webpack.ReactDOM
        }catch(e){
            return null
        }
    })() || 
    (()=>{ // If in EnhancedDiscord
        try{
            return window.EDApi.findModule(ReactDOMSelector as any)
        }catch(e){
            return null
        }
    })()) as typeof import("react-dom")

export = (window.ReactDOM as any)