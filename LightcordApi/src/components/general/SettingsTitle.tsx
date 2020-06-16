import WebpackLoader from "../../modules/WebpackLoader"
import Title from "./Title"
import { ReactNode } from "react"
import Utils from "../../modules/Utils"

type SettingsTitleProps = {
    children: ReactNode
    className?: string
}

let TitleModules
export default class SettingsTitle extends React.Component<SettingsTitleProps, SettingsTitleProps> {
    constructor(props: SettingsTitleProps){
        super(props)
        props = SettingsTitle.normalizeProps(props)
        this.state = Object.create(props)
    }

    static normalizeProps(props: SettingsTitleProps):SettingsTitleProps{
        props = Object.create(props)
        if(!props || typeof props !== "object")props = {children: []}
        if(typeof props.className !== "string")delete props.className

        let levels = [props]
        while(Utils.getNestedProps(props, levels.map(e => "__proto__").join("."))){
            levels.push(Utils.getNestedProps(props, levels.map(e => "__proto__").join(".")))
        }
        let finals = Object.assign({}, ...levels)

        return finals
    }

    get modules(){
        return TitleModules || (TitleModules = [
            WebpackLoader.find(e => typeof e.marginTop60 === "string")
        ])
    }

    render(){
        let [
            marginModule
        ] = this.modules

        let props = SettingsTitle.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = Object.create(props)
        }

        let className = `${marginModule.marginTop60} ${marginModule.marginBottom20}`
        if(props.className)className =+ " "+props.className
        
        return React.createElement(Title, {className}, props.children)
    }
}