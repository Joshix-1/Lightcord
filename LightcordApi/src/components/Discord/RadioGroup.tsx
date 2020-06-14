import NOOP from "../../modules/noop"
import WebpackLoader from "../../modules/WebpackLoader"


type RadioGroupProps = {
    options?: {
        color?: string,
        name: string,
        value: string,
        desc?: string
    }[],
    onChange?: (value: string) => void,
    value?: string,
    disabled?: boolean,
    size?: "small"|"medium",
    itemType?: "bar"|"panel",
    infoClassName?: string
}

let RadioGroupModule
export default class RadioGroup extends React.Component<RadioGroupProps, RadioGroupProps> {
    constructor(props:RadioGroupProps){
        props = RadioGroup.normalizeProps(props)
        super(props)
        this.state = props
        this.onChange = this.onChange.bind(this)
    }

    static normalizeProps(props:RadioGroupProps):RadioGroupProps{
        if(!props || typeof props !== "object")props = {}
        let defaultOptions = false
        if(!props.options || !Array.isArray(props.options)){
            props.options = [{
                value: "none",
                name: "No options",
                desc: "No options was passed to Choices. If you meant to display no options at all, please pass an empty array.",
                color: "#f04747"
            }]
            defaultOptions = true
        }
        if(!props.value || typeof props.value !== "string"){
            if(defaultOptions){
                props.value = "none"
            }else{
                props.value = null
            }
        }
        if(typeof props.disabled !== "boolean")props.disabled = false
        if(typeof props.size !== "string" || !["small", "medium"].includes(props.size.toLowerCase()))props.size = "medium"
        if(typeof props.itemType !== "string" || !["bar", "panel"].includes(props.itemType))props.itemType = "bar"
        if(typeof props.infoClassName !== "string")props.infoClassName = ""
        if(!props.onChange || typeof props.onChange !== "function")props.onChange = NOOP

        return props
    }

    onChange(ev){
        this.state.onChange(ev.value)
        this.setState({
            value: ev.value
        })
    }

    get modules(){
        return RadioGroupModule || (RadioGroupModule = [
            WebpackLoader.find(e => e.default && e.default.displayName === "RadioGroup").default
        ])
    }

    render(){
        let [
            RadioGroupComponent
        ] = this.modules

        let props = RadioGroup.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = Object.create(props)
        }
        return <RadioGroupComponent options={props.options} onChange={this.onChange} value={props.value} disabled={props.disabled} 
            size={RadioGroupComponent.Sizes[props.size.toUpperCase()]} itemType={RadioGroupComponent.ItemTypes[props.itemType.toUpperCase()]} 
            infoClassName={props.infoClassName}/>
    }

    get value(){
        return this.state.value
    }
}