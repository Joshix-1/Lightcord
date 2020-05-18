import BDV2 from "../modules/v2"

/**
 * @type {typeof import("react")}
 */
const React = BDV2.react

export default class Select extends React.Component {
    handleChange(value) {
        this.props.value = value;
        if (typeof this.props.onChange == "function") this.props.onChange(value, this);
        this.forceUpdate()
    }
    render() {
        let flex = BDModules.get(e => e.default && e.default.Wrap && e.default.Direction && e.default.Child)[0].default
        let nativeSelect = BDModules.get(e => e.default && e.default.displayName === "SelectTempWrapper")[0].default
        return (<flex direction={flex.Direction.HORIZONTAL} align={flex.Align.CENTER}>
                {React.createElement(nativeSelect, Object.assign({}, this.props, {
                    onChange: this.handleChange.bind(this)
                }))}
            </flex>)/*
        return BDFDB.ReactUtils.createElement(InternalComponents.LibraryComponents.Flex, {
            className: BDFDB.disCN.selectwrapper,
            direction: InternalComponents.LibraryComponents.Flex.Direction.HORIZONTAL,
            align: InternalComponents.LibraryComponents.Flex.Align.CENTER,
            children: BDFDB.ReactUtils.createElement(InternalComponents.NativeSubComponents.Select, Object.assign({}, this.props, {
                onChange: this.handleChange.bind(this)
            }))
        });*/
    }
};