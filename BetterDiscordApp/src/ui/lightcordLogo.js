import BDV2 from "../modules/v2";

export default class LightcordLogo extends BDV2.reactComponent {
    render() {
        return BDV2.react.createElement(
            "svg",
            {height: "100%", width: this.props.size, className: "bd-logo " + this.props.className, style: {fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round"}, viewBox: "0 0 168 190"},
            BDV2.react.createElement("metadata", null),
            BDV2.react.createElement("rect", {
                x: "14.9",
                y: "35.3",
                className: "st0",
                width: "139.2",
                height: "97.7",
                fill: "#FFFFFF"
            }),
            BDV2.react.createElement("defs", null, ...[
                BDV2.react.createElement("linearGradient", {
                    id: "SVGID_1_",
                    gradientUnits: "userSpaceOnUse",
                    x1: "66.7",
                    y1: "112.3",
                    x2: "66.7",
                    y2: "91.2685",
                    gradientTransform: "matrix(1 0 0 -1 0 192)"
                }, 
                    BDV2.react.createElement("stop", {
                        offset: "0",
                        style: {
                            stopColor: "#E20613"
                        }
                    }),
                    BDV2.react.createElement("stop", {
                        offset: "1",
                        style: {
                            stopColor: "#731A14"
                        }
                    })
                ),
                BDV2.react.createElement("linearGradient", {
                    id: "SVGID_2_",
                    gradientUnits: "userSpaceOnUse",
                    x1: "101.7",
                    y1: "112.3",
                    x2: "101.7",
                    y2: "91.2685",
                    gradientTransform: "matrix(1 0 0 -1 0 192)"
                }, 
                    BDV2.react.createElement("stop", {
                        offset: "0",
                        style: {
                            stopColor: "#E20613"
                        }
                    }),
                    BDV2.react.createElement("stop", {
                        offset: "1",
                        style: {
                            stopColor: "#731A13"
                        }
                    })
                ),
                BDV2.react.createElement("linearGradient", {
                    id: "SVGID_3_",
                    gradientUnits: "userSpaceOnUse",
                    x1: "84",
                    y1: "192",
                    x2: "84",
                    y2: "2",
                    gradientTransform: "matrix(1 0 0 -1 0 192)"
                }, 
                    BDV2.react.createElement("stop", {
                        offset: "0",
                        style: {
                            stopColor: "#E30613"
                        }
                    }),
                    BDV2.react.createElement("stop", {
                        offset: "1",
                        style: {
                            stopColor: "#731A13"
                        }
                    })
                ),
            ]),
            BDV2.react.createElement("g", null,
                BDV2.react.createElement("path", {className: "st1", d: "M66.7,79.7c-5.4,0-9.8,4.7-9.8,10.5s4.4,10.5,9.8,10.5s9.8-4.7,9.8-10.5C76.5,84.4,72.1,79.7,66.7,79.7z", fill: "url(#SVGID_1_)", opacity: "1"}),
                BDV2.react.createElement("path", {className: "st2", d: "M101.7,79.7c-5.4,0-9.8,4.7-9.8,10.5s4.4,10.5,9.8,10.5s9.8-4.7,9.8-10.5C111.5,84.4,107.1,79.7,101.7,79.7z", fill: "url(#SVGID_2_)", opacity: "1"}),
                BDV2.react.createElement("path", {className: "st3", d: "M148.4,0H19.6C8.8,0,0,8.8,0,19.6V148c0,10.8,8.8,19.6,19.6,19.6h108.9l-5.1-17.5l12.3,11.3l11.6,10.7 L168,190v-41.9v-9.5v-119C168,8.8,159.2,0,148.4,0z M111.3,124.1c0,0-3.4-4.1-6.3-7.7c12.6-3.5,17.4-11.3,17.4-11.3 c-4,2.6-7.7,4.4-11.1,5.6c-4.8,2-9.5,3.3-14,4.1c-9.2,1.7-17.6,1.3-24.9-0.1c-5.5-1-10.2-2.5-14.1-4.1c-2.2-0.8-4.6-1.9-7.1-3.3 c-0.3-0.2-0.6-0.3-0.9-0.5c-0.1-0.1-0.3-0.2-0.4-0.2c-1.7-1-2.6-1.6-2.6-1.6s4.6,7.6,16.8,11.2c-2.9,3.6-6.4,7.9-6.4,7.9 c-21.2-0.6-29.3-14.5-29.3-14.5c0-30.6,13.8-55.4,13.8-55.4c13.8-10.3,26.9-10,26.9-10l1,1.1C52.8,50.3,45,57.9,45,57.9 s2.1-1.2,5.7-2.7c10.3-4.5,18.4-5.7,21.8-6c0.5-0.1,1.1-0.2,1.6-0.2c5.9-0.7,12.5-0.9,19.4-0.2c9.1,1,18.9,3.7,28.9,9.1 c0,0-7.5-7.2-23.9-12.1l1.3-1.5c0,0,13.1-0.3,26.9,10c0,0,13.8,24.8,13.8,55.4C140.6,109.6,132.5,123.5,111.3,124.1z", fill: "url(#SVGID_3_)", opacity: "1"})
            )
        );
    }
}