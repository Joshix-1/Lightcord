import BDV2 from "../modules/v2";

import SettingsGroup from "./settingsGroup";

export default class V2C_SectionedSettingsPanel extends BDV2.reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let columnModule = BDModules.get(e => e.contentColumnDefault)[0]
        return BDV2.react.createElement(
            "div", {className: columnModule.contentColumn+" "+columnModule.contentColumnDefault+" content-column default"},
            this.props.sections.map(section => {
                return BDV2.react.createElement(SettingsGroup, Object.assign({}, section, {onChange: this.props.onChange}));
            })
        );
    }
}