import WebpackLoader from "../../modules/WebpackLoader"
import uuid from "../../modules/uuid"
import NOOP from "../../modules/noop"

type SwitchProps = {
    id?: string,
    onChange?: (checked: boolean) => void,
    value?: boolean,
    fill?: string,
    theme?: "default"|"clear",
    disabled?: boolean,
    className?: string,
    size?: "default"|"mini",
    style?: React.CSSProperties
}

let SwitchModules
export default class Switch extends React.Component<SwitchProps, {value: boolean}> {
    constructor(props:SwitchProps){
        props = Switch.normalizeProps(props)
        super(props)

        this.state = Object.create(props)
        this.onChange = this.onChange.bind(this)
    }

    static normalizeProps(props:SwitchProps){
        if(!props)props = {}
        if(!props.id || typeof props.id !== "string")props.id = null
        if(!props.onChange || typeof props.onChange !== "function")props.onChange = NOOP
        if(!props.value || typeof props.value !== "boolean")props.value = false
        if(!props.fill || typeof props.fill !== "string")props.fill = null
        if(!props.theme || !["default", "clear"].includes(props.theme.toLowerCase()))props.theme = "default"
        if(!("disabled" in props) || typeof props.disabled !== "boolean")props.disabled = false
        if(!props.className || typeof props.className !== "string")props.className = ""
        if(!props.size || !["default", "mini"].includes(props.size.toLowerCase()))props.size = "default"
        if(!props.style || typeof props.style !== "object")props.style = {}

        return props
    }



    get modules(){
        return SwitchModules || (SwitchModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "Switch").default
        ])
    }

    render(){
        let [
            SwitchComponent
        ] = this.modules

        let props = Switch.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = Object.create(props)
        }
        return (<SwitchComponent id={props.id} onChange={this.onChange} value={this.state.value || false} fill={props.fill} 
            theme={SwitchComponent.Themes[props.theme.toUpperCase()]} disabled={props.disabled} className={props.className} 
            size={SwitchComponent.Sizes[props.size.toUpperCase()]} style={props.style}/>)
    }

    onChange(value){
        this.props.onChange(!this.state.value)
        this.setState({
            value: !this.state.value
        })
    }

    get value(){
        return this.state.value
    }
}