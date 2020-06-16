import { ReactElement } from "react";
import ReactDOM = require("react-dom")
import PluginUtilities from "./PluginUtilities";

export default new class Utils {
    constructor(){}

    ReactToHTMLElement(ReactElement: ReactElement){    
        const element = document.createElement("div")
        ReactDOM.render(ReactElement, element)
        return element
    }

    get PluginUtils(){return PluginUtilities}

    getNestedProps(obj:any, path: string){
        let segments = path.split(".")
        for(let seg of segments){
            obj = obj && (seg in obj) ? obj[seg] : undefined
        }
        return obj
    }
}