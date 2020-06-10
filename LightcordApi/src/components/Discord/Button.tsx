import WebpackLoader from "../../modules/WebpackLoader"
import { MouseEventHandler } from "react"

export default class Button extends React.Component<{
    text: string,
    onClick: MouseEventHandler,
    color?: ButtonColor
}> {
    constructor(props:{
        text: string,
        onClick: MouseEventHandler,
        color?: ButtonColor
    }){
        if(props.color){
            props.color = props.color.toLowerCase() as ButtonColor
            if(!["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"].includes(props.color)){
                props.color = "brand"
            }
        }else{
            props.color = "brand"
        }
        props.onClick = typeof props.onClick === "function" ? props.onClick : () => {}
        super(props)
    }

    render(){
        let flexModule = WebpackLoader.findByUniqueProperties(["_horizontal"])
        let euhModule1 = WebpackLoader.findByUniqueProperties(["colorTransparent"])
        let buttonModule = WebpackLoader.findByUniqueProperties(["buttonWrapper"])
        let colorsModule = WebpackLoader.findByUniqueProperties(["ButtonColors"])

        return (<div className={buttonModule.buttonWrapper}>
                <button type="button" className={`${flexModule.flexChild} ${euhModule1.button} ${euhModule1.lookFilled} ${colorsModule.ButtonColors[this.props.color.toUpperCase()]} ${euhModule1.sizeSmall} ${euhModule1.grow}`} style={{flex: "0 1 auto"}} onClick={this.props.onClick}>
                    <div className={euhModule1.contents}>{this.props.text}</div>
                </button>
            </div>)
    }
}

export type ButtonColor = "brand" | "grey" | "red" | "green" | "yellow" | "primary" | "link" | "white" | "black" | "transparent"