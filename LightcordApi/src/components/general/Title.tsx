import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode } from "react"
import uuid from "../../modules/uuid"
import Utils from "../../modules/Utils"

type TitleProps = {
    children?: ReactNode,
    className?: string
}

let TitleModules
export default class Title extends React.Component<TitleProps, TitleProps> {
    constructor(props: TitleProps){
        super(props)
        props = Title.normalizeProps(props)
        this.state = Object.create(props)
    }

    _key: string

    get key(){
        return this._key || uuid()
    }

    static normalizeProps(props: TitleProps):TitleProps{
        props = Object.create(props)
        if(!props || typeof props !== "object")props = {children: []}
        if(!props.children)props.children = []
        if(typeof props.className !== "string")props.className = ""

        let levels = [props]
        while(Utils.getNestedProps(props, levels.map(e => "__proto__").join("."))){
            levels.push(Utils.getNestedProps(props, levels.map(e => "__proto__").join(".")))
        }
        let finals = Object.assign({}, ...levels)

        return finals
    }

    get modules(){
        return TitleModules || (TitleModules = [
            WebpackLoader.find(e => typeof e.colorStandard === "string"),
            WebpackLoader.find(e => typeof e.size32 === "string"),
            WebpackLoader.find(e => typeof e.h2 === "string")
        ])
    }

    render(){
        let [
            colorModule,
            sizeModule,
            titleModule
        ] = this.modules

        let props = Title.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = props
        }

        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h2} ${titleModule.defaultColor} ${titleModule.defaultMarginh2}`
        if(props.className)className += " "+props.className

        return React.createElement("h2", {className, key: this.key}, props.children)
    }
}