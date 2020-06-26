import WebpackLoader from "../../modules/WebpackLoader"
import uuid from "../../modules/uuid"
import NOOP from "../../modules/noop"
import Utils from "../../modules/Utils"

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
        super(props)

        this.state = {
            value: props.value || false
        }
        this.onChange = this.onChange.bind(this)
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

        let props = this.props
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

    static defaultProps = {
        id: null,
        onChange: NOOP,
        value: false,
        fill: null,
        theme: "default",
        disabled: false,
        className: null,
        size: "default",
        style: {}
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{onChange: (value) => {}}])
            AllPreviews.push([{
                value: false
            }], [{
                theme: "default"
            }, {
                theme: "clear"
            }], [{
                disabled: false
            }, {
                disabled: true
            }], [{
                id: "api-preview-switch"
            }], [{
                fill: null
            }], [{
                size: "default"
            }, {
                size: "mini"
            }], [{
                style: {}
            }])
            return AllPreviews
        })()
    }
}
let AllPreviews