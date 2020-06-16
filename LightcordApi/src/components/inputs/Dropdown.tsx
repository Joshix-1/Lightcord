import NOOP from "../../modules/noop"
import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode, CSSProperties } from "react"
import Utils from "../../modules/Utils"

type DropdownProps = {
    className?: string,
    error?: string,
    options?: {
        value: string,
        label: string
    }[],
    valueRenderer?: (data) => ReactNode,
    optionRenderer?: (data) => ReactNode,
    multiValueRenderer?: (data) => ReactNode
    onChange?: (value: string) => void,
    value?: string,
    disabled?: boolean,
    searchable?: boolean,
    clearable?: boolean,
    styleOverrides?: CSSProperties,
    lightThemeColorOverrides?: themeOverride,
    darkThemeColorOverrides?: themeOverride,
    isMulti?: boolean
}

type themeOverride = {
    neutral0: string,
    neutral5: string,
    neutral10: string,
    neutral20: string,
    neutral30: string,
    primary: string,
    primary25: string,
    primary50: string,
    selectedOptionBackground: string,
    text: string,
    menuBackground: string,
    menuBorder: string,
    scrollBarThumb: string,
    multiOptionBackground: string
}

let DropdownModules
export default class Dropdown extends React.Component<DropdownProps, DropdownProps> {
    constructor(props:DropdownProps){
        super(props)
        props = Dropdown.normalizeProps(props)
        this.state = props
        this.onChange = this.onChange.bind(this)
    }

    static normalizeProps(props:DropdownProps):DropdownProps{
        props = Object.create(props)
        if(!props || typeof props !== "object")props = {}
        if(typeof props.className !== "string")delete props.className
        if(typeof props.darkThemeColorOverrides !== "object" || !props.darkThemeColorOverrides)delete props.darkThemeColorOverrides
        if(typeof props.disabled !== "boolean")props.disabled = false
        if(typeof props.error !== "string")delete props.error
        if(typeof props.isMulti !== "boolean")props.isMulti = false
        if(typeof props.lightThemeColorOverrides !== "object" || !props.lightThemeColorOverrides)delete props.lightThemeColorOverrides
        if(typeof props.multiValueRenderer !== "function")delete props.multiValueRenderer
        if(typeof props.valueRenderer !== "function")delete props.valueRenderer
        if(typeof props.optionRenderer !== "function")delete props.optionRenderer
        if(typeof props.onChange !== "function")props.onChange = NOOP
        if(!Array.isArray(props.options))props.options = [{
            value: "none",
            "label": "No options - No options was passed to Dropdown. If you meant to put an empty dropdown, input an empty array."
        }]
        if(typeof props.searchable !== "boolean")props.searchable = false
        if(typeof props.styleOverrides !== "object")delete props.styleOverrides
        if(typeof props.value !== "string")props.value = null

        let levels = [props]
        while(Utils.getNestedProps(props, levels.map(e => "__proto__").join("."))){
            levels.push(Utils.getNestedProps(props, levels.map(e => "__proto__").join(".")))
        }
        let finals = Object.assign({}, ...levels)

        return finals
    }

    onChange(value){
        console.log(value)
        this.state.onChange(value)
        this.setState({
            value: value
        })
    }

    get modules(){
        return DropdownModules || (DropdownModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "SelectTempWrapper").default
        ])
    }

    render(){
        let [
            DropdownComponent
        ] = this.modules

        let props = Dropdown.normalizeProps(this.state || this.props)
        if(!this.state){
            this.state = Object.create(props)
        }
        return <DropdownComponent {...this.props} onChange={this.onChange}/>
    }

    get value(){
        return this.state.value
    }
}