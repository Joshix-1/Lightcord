import BDV2 from "../modules/v2";

export default class V2C_Scroller extends BDV2.reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        //scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y
        let scrollerModule1 = BDModules.get(e => e.scrollerHorizontal)[0]
        let scrollerModule2 = BDModules.get(e => e.sidebarRegionScroller)[0]
        let wrapperClass = `${scrollerModule1.scrollerWrap} ${scrollerModule1.scrollerThemed} ${scrollerModule1.themeGhostHairline}${this.props.fade ? " "+scrollerModule1.scrollerFade : ""}`;
        let scrollerClass = scrollerModule1.scroller+" scroller";                                          /* fuck */
        if (this.props.sidebar) scrollerClass += ` ${scrollerModule2.sidebarRegionScroller} sidebar-region-scroller`
        if (this.props.contentColumn) {
            scrollerClass += " "+scrollerModule2.contentRegionScroller+" content-region-scroller";                                         /* fuck */
            wrapperClass = `${scrollerModule1.scrollerWrap} ${scrollerModule2.contentRegionScrollerWrap} content-region-scroller-wrap  ${scrollerModule1.scrollerThemed} ${scrollerModule1.themeGhost} ${scrollerModule1.scrollerTrack}`;
        }
        const {children} = this.props;
        return BDV2.react.createElement(
            "div",
            {key: "scrollerwrap", className: wrapperClass},
            BDV2.react.createElement(
                "div",
                {key: "scroller", ref: "scroller", className: scrollerClass},
                children
            )
        );
    }
}