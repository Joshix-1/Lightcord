import WebpackLoader from "../../modules/WebpackLoader"
import NOOP from "../../modules/noop"
import Utils from "../../modules/Utils"

type TextAreaProps = {
    name?: string,
    disabled?: boolean,
    placeholder?: string,
    autoFocus?: boolean,
    resizeable?: boolean,
    flex?: boolean,
    autosize?: false,
    rows?: number,
    value?: string,
    error?: string,
    maxLength?: number,
    className?: string,
    id?: string,
    onChange?: (value: string, name: string) => void,
    onFocus?: (ev, name: string) => void,
    onBlur?: (ev, name: string) => void,
    onKeyDown?: (ev) => void
}

let TextAreaModules
export default class TextArea extends React.Component<TextAreaProps, TextAreaProps> {
    constructor(props){
        super(props)
        props = TextArea.normalizeProps(props)
        this.state = Object.create(props)

        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    static normalizeProps(props:TextAreaProps):TextAreaProps {
        props = Object.create(props)
        if(!props)props = {}
        if(!props.name || typeof props.name !== "string")props.name = ""
        if(!props.disabled || typeof props.disabled !== "boolean")props.disabled = false
        if(typeof props.placeholder !== "string")props.placeholder = ""
        if(typeof props.autoFocus !== "boolean")props.autoFocus = false
        if(typeof props.resizeable !== "boolean")props.resizeable = false
        if(typeof props.flex !== "boolean")props.flex = false
        if(typeof props.autosize !== "boolean")props.autosize = false
        if(typeof props.rows !== "number")props.rows = 3
        if(typeof props.value !== "string")props.value = ""
        if(typeof props.error !== "string")props.error = null
        if(props.maxLength && typeof props.maxLength !== "number")props.maxLength = 999
        if(typeof props.className !== "string")props.className = ""
        if(typeof props.id !== "string")props.id = null
        if(typeof props.onChange !== "function")props.onChange = NOOP
        if(typeof props.onFocus !== "function")props.onFocus = NOOP
        if(typeof props.onBlur !== "function")props.onBlur = NOOP
        if(typeof props.onKeyDown !== "function")props.onKeyDown = NOOP

        let levels = [props]
        while(Utils.getNestedProps(props, levels.map(e => "__proto__").join("."))){
            levels.push(Utils.getNestedProps(props, levels.map(e => "__proto__").join(".")))
        }
        let finals = Object.assign({}, ...levels)

        return finals
    }

    get modules(){
        return TextAreaModules || (TextAreaModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "TextArea").default
        ])
    }

    onChange(value, name){
        this.state.onChange(value, name)
        this.setState({
            value
        })
    }

    onFocus(ev, name){
        this.state.onFocus(ev, name)
    }

    onBlur(ev, name){
        this.state.onBlur(ev, name)
    }
    
    onKeyDown(ev){
        this.state.onKeyDown(ev)
    }

    render(){
        let [
            TextAreaComponent
        ] = this.modules

        let props = TextArea.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = Object.create(props)
        }

        return <TextAreaComponent {...props} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown}/>
    }

    get value(){
        return this.state.value
    }
}