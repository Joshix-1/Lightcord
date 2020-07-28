import { ReactSelector } from "./selectors";

window.React = (window.React || // If in Lightcord
    (()=>{ // If in Standard BetterDiscord
        try{
            return window.BdApi.findModule(ReactSelector as any)
        }catch(e){
            return null
        }
    })() ||
    (()=>{ // If in Powercord
        try{
            const webpack = require("powercord/webpack")
            return webpack.React
        }catch(e){
            return null
        }
    })() || 
    (()=>{ // If in EnhancedDiscord
        try{
            return window.EDApi.findModule(ReactSelector as any)
        }catch(e){
            return null
        }
    })()) as typeof import("react")

export = window.React