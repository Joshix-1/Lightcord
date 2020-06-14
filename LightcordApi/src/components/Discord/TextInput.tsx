import WebpackLoader from "../../modules/WebpackLoader"
import NOOP from "../../modules/noop"

type TextInputProps = {
    name?: string,
    size?: "default"|"mini"
    disabled?: boolean,
    placeholder?: string,
    value?: string,
    error?: string,
    maxLength?: number,
    className?: string,
    inputClassName?: string
    id?: string,
    onChange?: (value: string, name: string, input: TextInput) => void,
    onFocus?: (ev, name: string, input: TextInput) => void,
    onBlur?: (ev, name: string, input: TextInput) => void
}

let TextInputModules
export default class TextInput extends React.PureComponent<TextInputProps, TextInputProps> {
    hasSet: boolean
    constructor(props){
        props = TextInput.normalizeProps(props)
        super(props)
        this.state = props

        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    static normalizeProps(props:TextInputProps):TextInputProps {
        if(!props)props = {}
        if(!props.name || typeof props.name !== "string")props.name = ""
        if(!props.size || !["default", "mini"].includes(props.size))props.size = "default"
        if(!props.disabled || typeof props.disabled !== "boolean")props.disabled = false
        if(typeof props.placeholder !== "string")props.placeholder = ""
        if(typeof props.value !== "string")props.value = ""
        if(typeof props.error !== "string")props.error = null
        if(props.maxLength && typeof props.maxLength !== "number")props.maxLength = 999
        if(typeof props.className !== "string")props.className = ""
        if(typeof props.inputClassName !== "string")props.inputClassName = ""
        if(typeof props.id !== "string")props.id = null
        if(typeof props.onChange !== "function")props.onChange = NOOP
        if(typeof props.onFocus !== "function")props.onFocus = NOOP
        if(typeof props.onBlur !== "function")props.onBlur = NOOP

        return props
    }

    get modules(){
        return TextInputModules || (TextInputModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "TextInput").default
        ])
    }

    onChange(value, name){
        this.hasSet = false
        this.state.onChange(value, name, this)
        if(this.hasSet)return // prevent event if the onChange has changed the value.
        this.setState({
            value
        })
        this.forceUpdate()
    }

    onFocus(ev, name){
        this.state.onFocus(ev, name, this)
    }

    onBlur(ev, name){
        this.state.onBlur(ev, name, this)
    }

    render(){
        let [
            TextAreaComponent
        ] = this.modules

        let props = TextInput.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = Object.create(props)
        }
        return <TextAreaComponent {...props} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
    }

    get value(){
        return this.state.value
    }

    setValue(value:string){
        this.setState({
            value: value
        })
        this.forceUpdate()
        this.hasSet = true
    }
}