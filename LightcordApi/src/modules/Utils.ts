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

    DecimalColorToHex(color:number):string{
        return "#"+color.toString(16).toUpperCase()
    }

    HexColorToDecimal(color:string):number{
        color = color.replace(/[#;]/g, "")
        let res = parseInt(color, 16)
        if(isNaN(res))throw new Error(`Invalid color: ${color}`)
        return res
    }

    removeDa(className:string):string{
        if(!className)return className
        return className.split(" ").filter(e => !e.startsWith("da-")).join(" ")
    }

    FindReact(dom:Element, traverseUp:number = 0):React.Component|React.PureComponent{
        // taken from https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging#39165137
        const key = Object.keys(dom).find(key=>key.startsWith("__reactInternalInstance$"));
        const domFiber = dom[key];
        if (domFiber == null) return null;
    
        // react <16
        if (domFiber._currentElement) {
            let compFiber = domFiber._currentElement._owner;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = compFiber._currentElement._owner;
            }
            return compFiber._instance;
        }
    
        // react 16+
        const GetCompFiber = fiber=>{
            //return fiber._debugOwner; // this also works, but is __DEV__ only
            let parentFiber = fiber.return;
            while (typeof parentFiber.type == "string") {
                parentFiber = parentFiber.return;
            }
            return parentFiber;
        };
        let compFiber = GetCompFiber(domFiber);
        for (let i = 0; i < traverseUp; i++) {
            compFiber = GetCompFiber(compFiber);
        }
        return compFiber.stateNode;
    }

    hasClass(classNames:string, className:string):boolean{
        if(!classNames || !className)return false
        const classnames = classNames.split(" ")
        for(let classname of this.removeDa(className).split(" ")){
            if(!classnames.includes(classname))return false
        }
        return true
    }

    formatJSObject(obj:any):string{
        if(["string", "number", "boolean", "bigint", "undefined"].includes(typeof obj))return JSON.stringify(obj)
        if(obj === null)return "null"
        if(typeof obj === "function")return String(obj)
        if(typeof obj === "symbol")return String(obj)

        if(Array.isArray(obj)){
            if(!obj.length)return "[]"
            return `[\n    ${obj.map(e => this.formatJSObject(e)).join(",\n    ")}\n]`
        }else{
            const keys = Object.keys(obj)
            if(keys.length === 0)return "{}"
            return `{\n    ${keys.map(key => {
                let original = key
                if(typeof key === "symbol")key = "["+String(key)+"]"
                else{
                    if(typeof key === "number")key = String(key)
                    else{
                        console.log(key)
                        if(isNaN(parseInt(key[0]))){
                            key = this.formatJSObject(key)
                        }else if(/[^\w\d_$]/g.test(key)){
                            key = this.formatJSObject(key)
                        }
                    }
                }
                return `${key}: ${this.formatJSObject(obj[original])}`
            })}\n}`
        }
    }
}