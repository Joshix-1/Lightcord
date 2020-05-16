import BDV2 from "../modules/v2";

export default class V2C_ContentColumn extends BDV2.reactComponent {
    constructor(props) {
        super(props);
    }

    static get displayName() {return "ContentColumn";}

    render() {
        let contentModule = BDModules.get(e => e.contentColumn)[0]
        return BDV2.react.createElement(
            "div",
            {className: contentModule.contentColumn + " "+contentModule.contentColumnDefault+" content-column default"},
            BDV2.react.createElement(
                "h2",
                {className: "ui-form-title h2 margin-reset margin-bottom-20"},
                this.props.title
            ),
            this.props.children
        );
    }
}