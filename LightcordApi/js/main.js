module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alias/react-dom.ts":
/*!********************************!*\
  !*** ./src/alias/react-dom.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = window["Reac" + "tDOM"];


/***/ }),

/***/ "./src/components/components.ts":
/*!**************************************!*\
  !*** ./src/components/components.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __webpack_require__(/*! ./inputs/Button */ "./src/components/inputs/Button.tsx");
const Switch_1 = __webpack_require__(/*! ./inputs/Switch */ "./src/components/inputs/Switch.tsx");
const RadioGroup_1 = __webpack_require__(/*! ./inputs/RadioGroup */ "./src/components/inputs/RadioGroup.tsx");
const TextArea_1 = __webpack_require__(/*! ./inputs/TextArea */ "./src/components/inputs/TextArea.tsx");
const TextInput_1 = __webpack_require__(/*! ./inputs/TextInput */ "./src/components/inputs/TextInput.tsx");
const Dropdown_1 = __webpack_require__(/*! ./inputs/Dropdown */ "./src/components/inputs/Dropdown.tsx");
const Title_1 = __webpack_require__(/*! ./general/Title */ "./src/components/general/Title.tsx");
const SettingsTitle_1 = __webpack_require__(/*! ./general/SettingsTitle */ "./src/components/general/SettingsTitle.tsx");
const Tabs_1 = __webpack_require__(/*! ./general/Tabs */ "./src/components/general/Tabs.tsx");
const SettingSubTitle_1 = __webpack_require__(/*! ./general/SettingSubTitle */ "./src/components/general/SettingSubTitle.tsx");
const CodeBlock_1 = __webpack_require__(/*! ./general/CodeBlock */ "./src/components/general/CodeBlock.tsx");
const cloneNullProto_1 = __webpack_require__(/*! ../modules/cloneNullProto */ "./src/modules/cloneNullProto.ts");
const Tooltip_1 = __webpack_require__(/*! ./general/Tooltip */ "./src/components/general/Tooltip.ts");
const ColorPicker_1 = __webpack_require__(/*! ./inputs/ColorPicker */ "./src/components/inputs/ColorPicker.tsx");
const AlertBox_1 = __webpack_require__(/*! ./general/AlertBox */ "./src/components/general/AlertBox.tsx");
exports.default = cloneNullProto_1.default({
    inputs: cloneNullProto_1.default({
        Button: Button_1.default,
        Switch: Switch_1.default,
        Choices: RadioGroup_1.default,
        RadioGroup: RadioGroup_1.default,
        TextArea: TextArea_1.default,
        TextInput: TextInput_1.default,
        Dropdown: Dropdown_1.default,
        ColorPicker: ColorPicker_1.default
    }),
    general: cloneNullProto_1.default({
        Title: Title_1.default,
        SettingsTitle: SettingsTitle_1.default,
        SettingSubTitle: SettingSubTitle_1.default,
        Tabs: Tabs_1.default,
        CodeBlock: CodeBlock_1.default,
        Tooltip: Tooltip_1.default,
        AlertBox: AlertBox_1.default
    })
});


/***/ }),

/***/ "./src/components/general/AlertBox.tsx":
/*!*********************************************!*\
  !*** ./src/components/general/AlertBox.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let AlertBoxModules;
class AlertBox extends React.Component {
    get modules() {
        return AlertBoxModules || (AlertBoxModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Markdown" && e.default.defaultProps.parser).default
        ]);
    }
    render() {
        const [Markdown] = this.modules;
        let wrap;
        let children;
        if (typeof this.props.children === "string") {
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: this.props.children
                }, Markdown.defaultProps)
            });
            children = wrap.props.children;
        }
        else {
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: ""
                }, Markdown.defaultProps)
            });
            children = this.props.children;
        }
        wrap.props.children = React.createElement("div", { className: "lc-alert-box lc-alert-box-" + this.props.type },
            React.createElement("blockquote", { className: "lc-blockquote" }, children));
        return wrap;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "***Discord's*** **Markdown** _is_ [supported](https://google.com) or you can just insert your own react childs."
                }
            ], [
                {
                    type: "info"
                },
                {
                    type: "success"
                },
                {
                    type: "warn"
                },
                {
                    type: "error"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = AlertBox;
AlertBox.defaultProps = {
    type: "info",
    children: null
};
AlertBox.help = {
    info: "You can insert markdown (as string) or normal react childs",
    warn: "All string will be interpreted as markdown. If you want raw string, pass an array with the string inside."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/CodeBlock.tsx":
/*!**********************************************!*\
  !*** ./src/components/general/CodeBlock.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let CodeBlockModules;
class CodeBlock extends React.Component {
    get modules() {
        return CodeBlockModules || (CodeBlockModules = [
            WebpackLoader_1.default.find(e => e.markup),
            WebpackLoader_1.default.find(e => e.messageContent),
            WebpackLoader_1.default.find(e => e.scrollbarGhostHairline),
            WebpackLoader_1.default.find(e => e.highlight),
            WebpackLoader_1.default.find(e => e.marginBottom8)
        ]);
    }
    render() {
        let [messageModule1, messageModule2, scrollbarModule1, hightlightJS, marginModule1] = this.modules;
        const code = this.props.language === "plaintext" ? React.createElement("code", { className: `${scrollbarModule1.scrollbarGhostHairline} hljs` }, this.props.content) : React.createElement("code", { className: `${scrollbarModule1.scrollbarGhostHairline} hljs`, dangerouslySetInnerHTML: { __html: hightlightJS.highlight(this.props.language, this.props.content).value } });
        return (React.createElement("div", { className: `${messageModule1.markup} ${messageModule2.messageContent}` },
            React.createElement("pre", null, code),
            React.createElement("div", { className: marginModule1.marginBottom8 })));
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    content: "console.log(\"Exemple code\")"
                }
            ]);
            AllPreviews.push([
                {
                    language: "js"
                },
                {
                    language: "plaintext"
                },
                ...CodeBlock.prototype.modules[3].listLanguages().filter(e => e !== "js").map(e => ({ language: e }))
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = CodeBlock;
CodeBlock.defaultProps = {
    language: "plaintext",
    content: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/SettingSubTitle.tsx":
/*!****************************************************!*\
  !*** ./src/components/general/SettingSubTitle.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let TitleModules;
class SettingSubTitle extends React.Component {
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string"),
            WebpackLoader_1.default.findByUniqueProperties(["h5"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["size14"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["colorStandard"])
        ]);
    }
    render() {
        let [marginModule, titleModule, sizeModule, colorModule] = this.modules;
        let props = this.props;
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h5} ${marginModule.marginBottom4}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement("h5", { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = SettingSubTitle;
SettingSubTitle.defaultProps = {
    children: [],
    className: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/SettingsTitle.tsx":
/*!**************************************************!*\
  !*** ./src/components/general/SettingsTitle.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Title_1 = __webpack_require__(/*! ./Title */ "./src/components/general/Title.tsx");
let TitleModules;
class SettingsTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string")
        ]);
    }
    render() {
        let [marginModule] = this.modules;
        let props = this.props;
        let className = `${marginModule.marginTop60} ${marginModule.marginBottom20}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement(Title_1.default, { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = SettingsTitle;
SettingsTitle.defaultProps = {
    children: [""],
    className: ""
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/Tabs.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/Tabs.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const Title_1 = __webpack_require__(/*! ./Title */ "./src/components/general/Title.tsx");
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tabsElements = [];
        this.state = {
            active: this.props.active || null
        };
    }
    get tabs() {
        return this.props.tabs || [];
    }
    changeTab(tab) {
        if (tab === this.state.active)
            return;
        if (this.props.onChange)
            this.props.onChange(tab);
        this.setState({
            active: tab
        });
        this.tabsElements.forEach(e => e.setActive(tab === e.props.id));
    }
    render() {
        return (React.createElement("div", { className: "lc-tabWrapper", style: this.props.style },
            React.createElement("div", { className: "lc-tabnav", style: { flex: "0 1 auto" } }, this.tabs.map(tab => {
                return React.createElement(Tab, { TabContainer: this, title: tab.label, id: tab.id, key: btoa(tab.label + ":" + tab.id) });
            })),
            React.createElement("div", { className: "lc-tab" }, this.props.children)));
    }
    isActive(tab) {
        return this.state.active === tab;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: (React.createElement("div", { style: { marginTop: "20px", marginBottom: "20px" } },
                        React.createElement("div", { style: {
                                backgroundColor: "var(--background-primary)",
                                padding: "30px 30px",
                                borderRadius: "8px"
                            }, className: "lc-tab-box-shadow" },
                            React.createElement(Title_1.default, null, "Preview tabs"))))
                }
            ], [
                {
                    tabs: [
                        {
                            label: "Active tab",
                            id: "1"
                        },
                        {
                            label: "Unactive tab",
                            id: "2"
                        }
                    ]
                }
            ], [
                {
                    active: "1"
                }
            ], [
                {
                    onChange: (tabId) => { }
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = Tabs;
Tabs.defaultProps = {
    children: null,
    tabs: [{ label: "No tabs was passed to <Tabs>.", id: "none" }],
    active: null,
    onChange: noop_1.default,
    style: {}
};
let AllPreviews;
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.TabContainer.isActive(props.id)
        };
        this.props.TabContainer.tabsElements.push(this);
    }
    setActive(isActive) {
        this.setState({
            active: !!isActive
        });
    }
    render() {
        let className = `lc-navItem`;
        if (this.state.active) {
            className += ` lc-navItemActive`;
        }
        else {
            className += ` lc-navItemInactive`;
        }
        return (React.createElement("div", { className: className, onClick: () => {
                this.props.TabContainer.changeTab(this.props.id);
            } }, this.props.title));
    }
}
exports.Tab = Tab;


/***/ }),

/***/ "./src/components/general/Title.tsx":
/*!******************************************!*\
  !*** ./src/components/general/Title.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let TitleModules;
class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.colorStandard === "string"),
            WebpackLoader_1.default.find(e => typeof e.size32 === "string"),
            WebpackLoader_1.default.find(e => typeof e.h2 === "string")
        ]);
    }
    render() {
        let [colorModule, sizeModule, titleModule] = this.modules;
        let props = this.props;
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h2} ${titleModule.defaultColor} ${titleModule.defaultMarginh2}`;
        if (props.className)
            className += " " + props.className;
        return React.createElement("h2", { className }, props.children);
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: "Exemple title"
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = Title;
Title.defaultProps = {
    children: null,
    className: null
};
let AllPreviews;


/***/ }),

/***/ "./src/components/general/Tooltip.ts":
/*!*******************************************!*\
  !*** ./src/components/general/Tooltip.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const excludeProperties_1 = __webpack_require__(/*! ../../modules/excludeProperties */ "./src/modules/excludeProperties.ts");
let TooltipModules;
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
    }
    get modules() {
        return TooltipModules || (TooltipModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Tooltip")
        ]);
    }
    render() {
        let [Tooltip] = this.modules;
        let props = excludeProperties_1.default(this.props, ["children"]);
        return React.createElement(Tooltip.default, props, (data) => {
            return React.createElement("div", Object.assign(Object.assign({}, data), { style: {
                    width: "fit-content",
                    height: "fit-content"
                } }), this.props.children);
        });
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    children: React.createElement(window.Lightcord.Api.Components.inputs.Button, {
                        color: "green",
                        look: "ghost",
                        size: "small",
                        hoverColor: "yellow",
                        onClick: () => { },
                        wrapper: false
                    }, "Hover this button to see the tooltip")
                }
            ]);
            AllPreviews.push([
                {
                    text: "Example Tooltip Text"
                }
            ]);
            let colors = [];
            Tooltip.Colors.forEach(color => {
                colors.push({
                    color: color
                });
            });
            AllPreviews.push(colors);
            let positions = [];
            Tooltip.Positions.forEach(p => {
                positions.push({
                    position: p
                });
            });
            AllPreviews.push(positions);
            return AllPreviews;
        })();
    }
}
exports.default = Tooltip;
Tooltip.defaultProps = {
    children: null,
    text: "No text was passed to Tooltip",
    position: "top",
    color: "brand"
};
Tooltip.Positions = ["top", "left", "right", "bottom"];
Tooltip.Colors = ["black", "grey", "brand", "green", "yellow", "red"];
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/inputs/Button.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let ButtonModules;
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    get modules() {
        return ButtonModules || (ButtonModules = [
            WebpackLoader_1.default.findByUniqueProperties(["_horizontal"]),
            WebpackLoader_1.default.findByUniqueProperties(["colorTransparent"]),
            WebpackLoader_1.default.findByUniqueProperties(["buttonWrapper"]),
            WebpackLoader_1.default.findByUniqueProperties(["ButtonColors"]),
        ]);
    }
    render() {
        let [flexModule, euhModule1, buttonModule, colorsModule,] = this.modules;
        let props = {};
        if (this.props) {
            if ("color" in this.props) {
                props.color = this.props.color;
            }
            if ("children" in this.props) {
                props.children = this.props.children;
            }
            if ("onClick" in this.props) {
                props.onClick = this.props.onClick;
            }
            if ("wrapper" in this.props) {
                props.wrapper = !!this.props.wrapper;
            }
            if ("look" in this.props) {
                props.look = this.props.look;
            }
            if ("size" in this.props) {
                props.size = this.props.size;
            }
            if ("hoverColor" in this.props) {
                props.hoverColor = this.props.hoverColor;
            }
            if ("disabled" in this.props) {
                props.disabled = this.props.disabled;
            }
            else {
                props.disabled = false;
            }
        }
        if (props.color) {
            props.color = props.color.toLowerCase();
            if (!Button.Colors.includes(props.color)) {
                props.color = Button.Colors[0];
            }
        }
        else {
            props.color = Button.Colors[0];
        }
        if (props.look) {
            props.look = props.look.toLowerCase();
            if (!Button.Looks.includes(props.look)) {
                props.look = Button.Looks[0];
            }
        }
        else {
            props.look = Button.Looks[0];
        }
        if (props.size) {
            props.size = props.size.toLowerCase();
            if (!Button.Sizes.includes(props.size)) {
                props.size = Button.Sizes[0];
            }
        }
        else {
            props.size = Button.Sizes[0];
        }
        if (props.hoverColor) {
            props.hoverColor = props.hoverColor.toLowerCase();
            if (!Button.HoverColors.includes(props.hoverColor)) {
                props.hoverColor = Button.HoverColors[0];
            }
        }
        else {
            props.hoverColor = Button.HoverColors[0];
        }
        let buttonSize = props.size ? colorsModule.ButtonSizes[props.size.toUpperCase()] || "" : "";
        if (buttonSize)
            buttonSize = " " + buttonSize;
        let hoverColor = props.hoverColor ? colorsModule.ButtonHovers[props.hoverColor.toUpperCase()] || "" : "";
        if (hoverColor)
            hoverColor = " " + hoverColor;
        props.onClick = typeof props.onClick === "function" ? props.onClick : () => { };
        if (typeof props.wrapper !== "boolean")
            props.wrapper = true;
        let hover = this.state.hover ? euhModule1.hasHover : "";
        if (hover)
            hover = " " + hover;
        let button = React.createElement("button", { type: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${colorsModule.ButtonLooks[props.look.toUpperCase()]} ${colorsModule.ButtonColors[props.color.toUpperCase()]}${buttonSize}${hoverColor}${hover} ${euhModule1.grow}`, style: { flex: "0 1 auto" }, onClick: this.props.onClick, onMouseEnter: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: true });
            }, onMouseLeave: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: false });
            }, disabled: props.disabled },
            React.createElement("div", { className: euhModule1.contents }, props.children));
        if (props.wrapper) {
            return React.createElement("div", { className: buttonModule.buttonWrapper }, button);
        }
        return button;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            let colors = [];
            for (let color of Button.Colors) {
                colors.push({
                    color: color
                });
            }
            AllPreviews.push(colors);
            let looks = [];
            for (let look of Button.Looks) {
                looks.push({
                    look: look
                });
            }
            AllPreviews.push(looks);
            let sizes = [];
            for (let size of Button.Sizes) {
                sizes.push({
                    size: size
                });
            }
            AllPreviews.push(sizes);
            let hovers = [];
            for (let hover of Button.HoverColors) {
                hovers.push({
                    hoverColor: hover
                });
            }
            AllPreviews.push(hovers);
            AllPreviews.push([{ children: "Test Button" }]);
            AllPreviews.push([{ onClick: () => { } }]);
            AllPreviews.push([{ wrapper: false }]);
            AllPreviews.push([{ disabled: false }, { disabled: true }]);
            return AllPreviews;
        })();
    }
}
exports.default = Button;
Button.Colors = ["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"];
Button.Looks = ["filled", "inverted", "outlined", "ghost", "link", "blank"];
Button.Sizes = ["small", "medium", "large", "xlarge", "min", "max", "icon", "none"];
Button.HoverColors = ["default", ...Button.Colors];
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/ColorPicker.tsx":
/*!***********************************************!*\
  !*** ./src/components/inputs/ColorPicker.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
const Constants = {
    defaultColor: 10070709,
    baseColors: [
        1752220,
        3066993,
        3447003,
        10181046,
        15277667,
        15844367,
        15105570,
        15158332,
        9807270,
        6323595,
        1146986,
        2067276,
        2123412,
        7419530,
        11342935,
        12745742,
        11027200,
        10038562,
        9936031,
        5533306
    ]
};
let ColorPickerModules;
let isFetching = null;
/**
 * This componennt needs to be loaded. As a result, you may experience 100-300ms loading the first time.
 * Render will return `null` before loaded.
 */
class ColorPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || null,
            lastColor: this.props.value
        };
        this.onChange = this.onChange.bind(this);
    }
    /** Preload the component. */
    static preload() {
        if (ColorPicker.prototype.modules[0])
            return;
        if (isFetching)
            return;
        new ColorPicker({}).render();
    }
    onChange(val) {
        this.props.onChange(val);
        this.setState({
            value: val
        });
        this.forceUpdate();
    }
    get modules() {
        return ColorPickerModules || (ColorPickerModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "ColorPicker")
        ]);
    }
    renderColorPicker() {
        let [ColorPickerComponent] = this.modules;
        if (!ColorPickerComponent) {
            if (isFetching) { // support for multiple color picker
                isFetching.then(() => this.forceUpdate());
                return null;
            }
            ColorPickerModules = null;
            let resolve;
            isFetching = new Promise(res => (resolve = res));
            const GuildSettingsRoles = new (WebpackLoader_1.default.find(e => e.default && e.default.displayName && e.default.displayName.includes("GuildSettingsRoles")).default)().render().type;
            const settings = GuildSettingsRoles.prototype.renderRoleSettings.call({
                props: {
                    guild: {
                        roles: [],
                        id: null,
                        isOwner: () => false
                    },
                    currentUser: {
                        id: null
                    }
                },
                getSelectedRole() {
                    return {
                        id: null
                    };
                }
            });
            const GuildRoleSettings = settings.props.children.type;
            let children = GuildRoleSettings.prototype.renderColorPicker.call({
                props: {
                    role: {
                        id: null,
                        color: 0
                    },
                    locked: false,
                    everyone: false
                }
            }).props.children;
            children.type(children.props).props.children.type._ctor().then(c => {
                this.forceUpdate();
                resolve();
            });
            return null;
        }
        return React.createElement(ColorPickerComponent.default, { colors: this.props.baseColors, defaultColor: this.props.defaultColor, value: this.state.value, disabled: this.props.disabled, onChange: this.onChange, customColor: this.props.customColor });
    }
    render() {
        if (this.state.lastColor !== this.props.value) {
            this.state = {
                value: this.props.value,
                lastColor: this.props.value
            };
        }
        return this.renderColorPicker();
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([
                {
                    disabled: false
                },
                {
                    disabled: true
                }
            ], [
                {
                    value: Utils_1.default.HexColorToDecimal("#7289DA")
                }, {
                    value: null
                }
            ], [
                {
                    onChange: (color) => { }
                }
            ]);
            return AllPreviews;
        })();
    }
}
exports.default = ColorPicker;
ColorPicker.defaultProps = {
    defaultColor: Constants.defaultColor,
    customColor: null,
    baseColors: Constants.baseColors,
    value: null,
    disabled: false,
    onChange: noop_1.default
};
ColorPicker.help = {
    info: "To convert hex colors to decimal, you can do `Lightcord.Api.Utils.HexColorToDecimal('#yourcolor')` and go back with `Lightcord.Api.Utils.DecimalColorToHex(7506394)`",
    warn: "The component may not appear instantly. The component needs to be loaded, so you could experience 50-300ms loading time depending on your internet connection."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Dropdown.tsx":
/*!********************************************!*\
  !*** ./src/components/inputs/Dropdown.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let DropdownModules;
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value || null
        };
    }
    onChange(value) {
        this.props.onChange(value);
        this.setState({
            value: value
        });
    }
    get modules() {
        return DropdownModules || (DropdownModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "SelectTempWrapper").default
        ]);
    }
    render() {
        let [DropdownComponent] = this.modules;
        let props = this.props;
        let returnValue = React.createElement(DropdownComponent, Object.assign({}, props, { onChange: this.onChange, value: this.state.value }));
        return returnValue;
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    error: null
                }, {
                    error: "An error occured"
                }], [{
                    options: [
                        {
                            value: "option1",
                            label: "Option 1"
                        },
                        {
                            value: "option2",
                            label: "Option 2"
                        },
                        {
                            value: "option3",
                            label: "Option 3"
                        }
                    ]
                }], [{
                    value: "option1"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    searchable: true
                }, {
                    searchable: false
                }], [{
                    clearable: true
                }, {
                    clearable: false
                }], [{
                    isMulti: false
                }, {
                    isMulti: true
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Dropdown;
Dropdown.defaultProps = {
    className: null,
    error: null,
    options: [{
            value: "none",
            "label": "No options - No options was passed to Dropdown. If you meant to put an empty dropdown, input an empty array."
        }],
    valueRenderer: null,
    multiValueRenderer: null,
    optionRenderer: null,
    onChange: noop_1.default,
    value: null,
    disabled: false,
    searchable: false,
    clearable: false,
    styleOverrides: null,
    lightThemeColorOverrides: null,
    darkThemeColorOverrides: null,
    isMulti: false
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/RadioGroup.tsx":
/*!**********************************************!*\
  !*** ./src/components/inputs/RadioGroup.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let RadioGroupModule;
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: props.value
        };
    }
    onChange(ev) {
        this.props.onChange(ev.value);
        this.setState({
            value: ev.value
        });
    }
    get modules() {
        return RadioGroupModule || (RadioGroupModule = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "RadioGroup").default
        ]);
    }
    render() {
        let [RadioGroupComponent] = this.modules;
        let props = this.props;
        return React.createElement(RadioGroupComponent, { options: props.options, onChange: this.onChange, value: this.state.value, disabled: props.disabled, size: RadioGroupComponent.Sizes[props.size.toUpperCase()], itemType: RadioGroupComponent.ItemTypes[props.itemType.toUpperCase()], infoClassName: props.infoClassName });
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    options: [
                        {
                            value: "option1",
                            name: "Option 1",
                            desc: "description 1"
                        },
                        {
                            value: "option2",
                            name: "Option 2",
                            desc: "description 2"
                        },
                        {
                            value: "option3",
                            name: "Option 3",
                            desc: "description 3"
                        }
                    ]
                }], [{
                    value: "option1"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    size: "medium"
                }, {
                    size: "small"
                }], [{
                    itemType: "bar"
                }, {
                    itemType: "panel"
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = RadioGroup;
RadioGroup.defaultProps = {
    options: [{
            value: "none",
            name: "No options",
            desc: "No options was passed to Choices. If you meant to display no options at all, please pass an empty array.",
            color: "#f04747"
        }],
    value: null,
    disabled: false,
    size: "medium",
    itemType: "bar",
    infoClassName: null,
    onChange: noop_1.default
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/Switch.tsx":
/*!******************************************!*\
  !*** ./src/components/inputs/Switch.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let SwitchModules;
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || false
        };
        this.onChange = this.onChange.bind(this);
    }
    get modules() {
        return SwitchModules || (SwitchModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Switch").default
        ]);
    }
    render() {
        let [SwitchComponent] = this.modules;
        let props = this.props;
        return (React.createElement(SwitchComponent, { id: props.id, onChange: this.onChange, value: this.state.value || false, fill: props.fill, theme: SwitchComponent.Themes[props.theme.toUpperCase()], disabled: props.disabled, className: props.className, size: SwitchComponent.Sizes[props.size.toUpperCase()], style: props.style }));
    }
    onChange(value) {
        this.props.onChange(!this.state.value);
        this.setState({
            value: !this.state.value
        });
    }
    get value() {
        return this.state.value;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{ onChange: (value) => { } }]);
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
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = Switch;
Switch.defaultProps = {
    id: null,
    onChange: noop_1.default,
    value: false,
    fill: null,
    theme: "default",
    disabled: false,
    className: null,
    size: "default",
    style: {}
};
Switch.help = {
    error: "The `clear` option doesn't work well on light theme."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/TextArea.tsx":
/*!********************************************!*\
  !*** ./src/components/inputs/TextArea.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextAreaModules;
class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.state = {
            value: props.value || ""
        };
    }
    get modules() {
        return TextAreaModules || (TextAreaModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextArea").default
        ]);
    }
    onChange(value, name) {
        this.props.onChange(value, name);
        this.setState({
            value
        });
    }
    onFocus(ev, name) {
        this.props.onFocus(ev, name);
    }
    onBlur(ev, name) {
        this.props.onBlur(ev, name);
    }
    onKeyDown(ev) {
        this.props.onKeyDown(ev);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = this.props;
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown, value: this.state.value }));
    }
    get value() {
        return this.state.value || "";
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    name: "api-preview-textarea"
                }]);
            AllPreviews.push([{
                    disabled: false
                }, {
                    disabled: true
                }]);
            AllPreviews.push([{
                    placeholder: null
                }]);
            AllPreviews.push([{
                    autoFocus: false
                }, {
                    autoFocus: true
                }]);
            AllPreviews.push([{
                    resizeable: false
                }, {
                    resizeable: true
                }]);
            AllPreviews.push([{
                    flex: false
                }, {
                    flex: true
                }]);
            AllPreviews.push([{
                    autosize: false
                }, {
                    autosize: true
                }]);
            AllPreviews.push([{
                    rows: 3
                }, {
                    rows: 2
                }, {
                    rows: 1
                }]);
            AllPreviews.push([{
                    value: ""
                }]);
            AllPreviews.push([{
                    error: null
                }, {
                    error: "Example error"
                }]);
            AllPreviews.push([{
                    maxLength: 100
                }]);
            AllPreviews.push([{
                    className: ""
                }]);
            AllPreviews.push([{
                    inputClassName: ""
                }]);
            AllPreviews.push([{
                    id: "api-preview-textarea"
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = TextArea;
TextArea.defaultProps = {
    name: null,
    disabled: false,
    placeholder: null,
    autoFocus: false,
    resizeable: false,
    flex: false,
    autosize: false,
    rows: 3,
    value: "",
    error: null,
    maxLength: null,
    className: null,
    id: null,
    onChange: noop_1.default,
    onFocus: noop_1.default,
    onBlur: noop_1.default,
    onKeyDown: noop_1.default
};
TextArea.help = {
    warn: "This should be used for multi line inputs."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/inputs/TextInput.tsx":
/*!*********************************************!*\
  !*** ./src/components/inputs/TextInput.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextInputModules;
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            value: props.value || ""
        };
    }
    get modules() {
        return TextInputModules || (TextInputModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextInput").default
        ]);
    }
    onChange(value, name) {
        this.hasSet = false;
        this.props.onChange(value, name, this);
        if (this.hasSet)
            return; // prevent event if the onChange has changed the value.
        this.setState({
            value
        });
        this.forceUpdate();
    }
    onFocus(ev, name) {
        this.props.onFocus(ev, name, this);
    }
    onBlur(ev, name) {
        this.props.onBlur(ev, name, this);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = this.props;
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, value: this.state.value }));
    }
    get value() {
        return this.state.value || "";
    }
    setValue(value) {
        this.setState({
            value: value
        });
        this.forceUpdate();
        this.hasSet = true;
    }
    static get AllPreviews() {
        return AllPreviews || (() => {
            AllPreviews = [];
            AllPreviews.push([{
                    name: "api-preview-textinput"
                }], [{
                    size: "default"
                }, {
                    size: "mini"
                }], [{
                    disabled: false
                }, {
                    disabled: true
                }], [{
                    placeholder: ""
                }], [{
                    value: ""
                }], [{
                    error: null
                }, {
                    error: "Example error"
                }], [{
                    maxLength: 999
                }], [{
                    className: ""
                }], [{
                    inputClassName: ""
                }], [{
                    id: "api-preview-textinput"
                }], [{
                    onChange: (value, name) => { }
                }]);
            return AllPreviews;
        })();
    }
}
exports.default = TextInput;
TextInput.defaultProps = {
    name: "",
    size: "default",
    disabled: false,
    placeholder: "",
    value: "",
    error: null,
    maxLength: 999,
    className: "",
    inputClassName: "",
    id: null,
    onChange: noop_1.default,
    onFocus: noop_1.default,
    onBlur: noop_1.default
};
TextInput.help = {
    warn: "This should be used for single line inputs."
};
let AllPreviews;


/***/ }),

/***/ "./src/components/private/Notice.tsx":
/*!*******************************************!*\
  !*** ./src/components/private/Notice.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultNotice = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const Notices_1 = __webpack_require__(/*! ./Notices */ "./src/components/private/Notices.tsx");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let NoticeModules;
exports.defaultNotice = {
    text: "",
    id: "unknown id",
    onClick: noop_1.default,
    buttonText: null,
    type: "default"
};
class Notice extends React.Component {
    get modules() {
        return NoticeModules || (NoticeModules = [
            WebpackLoader_1.default.find(e => e.noticeInfo)
        ]);
    }
    render() {
        const [noticeClasses] = this.modules;
        const className = noticeClasses["notice" + this.props.type.slice(0, 1).toUpperCase() + this.props.type.slice(1)];
        if (!className) {
            Notices_1.notices.pop();
            setImmediate(() => {
                Notices_1.events.emit("noticeUpdate");
            });
            return null;
        }
        const button = this.props.buttonText ? React.createElement("button", { className: noticeClasses.button, onClick: () => {
                Notices_1.notices.pop();
                this.props.onClick();
                Notices_1.events.emit("noticeUpdate");
            } }, this.props.buttonText) : null;
        return React.createElement("div", { className: className },
            React.createElement("div", { className: noticeClasses.dismiss, role: "button", tabIndex: 0, onClick: () => {
                    Notices_1.notices.pop();
                    Notices_1.events.emit("noticeUpdate");
                } }),
            this.props.text,
            button);
    }
}
exports.default = Notice;
Notice.displayName = "LightcordNotice";
Notice.defaultProps = exports.defaultNotice;


/***/ }),

/***/ "./src/components/private/Notices.tsx":
/*!********************************************!*\
  !*** ./src/components/private/Notices.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notices = exports.events = void 0;
const Notice_1 = __webpack_require__(/*! ./Notice */ "./src/components/private/Notice.tsx");
const events_1 = __webpack_require__(/*! events */ "events");
exports.events = new events_1.EventEmitter();
class Notices extends React.Component {
    constructor(props) {
        super(props);
        this.noticeHandler = this.noticeHandler.bind(this);
    }
    noticeHandler() {
        this.forceUpdate();
    }
    componentWillMount() {
        exports.events.on("noticeUpdate", this.noticeHandler);
    }
    componentWillUnmount() {
        exports.events.off("noticeUpdate", this.noticeHandler);
    }
    render() {
        if (!this.hasNotice)
            return null;
        const notice = exports.notices[0];
        return React.createElement(Notice_1.default, Object.assign({}, notice));
    }
    get hasNotice() {
        return exports.notices.length > 0;
    }
}
exports.default = Notices;
Notices.displayName = "LightcordNotices";
Notices.defaultProps = {};
exports.notices = [];


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ./modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const components_1 = __webpack_require__(/*! ./components/components */ "./src/components/components.ts");
const uuid_1 = __webpack_require__(/*! ./modules/uuid */ "./src/modules/uuid.ts");
const Utils_1 = __webpack_require__(/*! ./modules/Utils */ "./src/modules/Utils.ts");
const DiscordTools_1 = __webpack_require__(/*! ./modules/DiscordTools */ "./src/modules/DiscordTools.ts");
const patchers = __webpack_require__(/*! ./modules/patchers */ "./src/modules/patchers.ts");
const excludeProperties_1 = __webpack_require__(/*! ./modules/excludeProperties */ "./src/modules/excludeProperties.ts");
const cloneNullProto_1 = __webpack_require__(/*! ./modules/cloneNullProto */ "./src/modules/cloneNullProto.ts");
const noop_1 = __webpack_require__(/*! ./modules/noop */ "./src/modules/noop.ts");
const Unfreeze_1 = __webpack_require__(/*! ./modules/Unfreeze */ "./src/modules/Unfreeze.ts");
patchers.patch();
const LightcordApi = {
    WebpackLoader: WebpackLoader_1.default,
    Components: components_1.default,
    uuid: uuid_1.default,
    Utils: Utils_1.default,
    DiscordTools: DiscordTools_1.default,
    _: {
        excludeProperties: excludeProperties_1.default,
        cloneNullProto: cloneNullProto_1.default,
        NOOP: noop_1.default,
        unfreeze: Unfreeze_1.default
    }
};
exports.default = LightcordApi;
Object.assign(window.Lightcord.Api, LightcordApi);


/***/ }),

/***/ "./src/modules/DiscordTools.ts":
/*!*************************************!*\
  !*** ./src/modules/DiscordTools.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const Notices_1 = __webpack_require__(/*! ../components/private/Notices */ "./src/components/private/Notices.tsx");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const uuid_1 = __webpack_require__(/*! ./uuid */ "./src/modules/uuid.ts");
const cloneNullProto_1 = __webpack_require__(/*! ./cloneNullProto */ "./src/modules/cloneNullProto.ts");
const events_1 = __webpack_require__(/*! events */ "events");
const Notice_1 = __webpack_require__(/*! ../components/private/Notice */ "./src/components/private/Notice.tsx");
const excludeProperties_1 = __webpack_require__(/*! ./excludeProperties */ "./src/modules/excludeProperties.ts");
const noop_1 = __webpack_require__(/*! ./noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ./WebpackLoader */ "./src/modules/WebpackLoader.ts");
let soundModule;
exports.default = new class DiscordTools {
    showNotice(data) {
        if (typeof data !== "object" || typeof data.text !== "string")
            throw new Error(`This notice is not valid. Given: ${Utils_1.default.formatJSObject(data)}`);
        let newData = cloneNullProto_1.default(Object.assign({}, Notice_1.defaultNotice, data));
        newData.id = uuid_1.default();
        Notices_1.notices.push(newData);
        Notices_1.events.emit("noticeUpdate");
        const notice = new Notice(newData);
        return notice;
    }
    get notices() {
        return Notices_1.notices.map(data => new Notice(data));
    }
    /**
     * Quickly send notification (Even when no focused.)
     * @param data The notification. Be sure to include all properties except functions cause they're optional.
     * Notifications have a timeout of 3-5 seconds.
     * They look like this: https://i.imgur.com/jzuxKKu.png
     */
    showNotification(data) {
        const notification = new window.Notification(data.title, excludeProperties_1.default(data, [
            "title",
            "onClick",
            "onClose",
            "onShow"
        ]));
        notification.onclick = data.onClick || noop_1.default;
        notification.onshow = data.onShow || noop_1.default;
        notification.onclose = data.onClose || noop_1.default;
        return notification;
    }
    createSound(sound) {
        soundModule = soundModule || WebpackLoader_1.default.findByUniqueProperties(["createSound"]);
        if (!soundModule)
            throw new WebpackLoader_1.WebpackLoaderError("Couldn't find soundModule here.");
        const created = soundModule.createSound(sound);
        return created;
    }
    playSound(sound) {
        const created = this.createSound(sound);
        created.play();
        return created;
    }
};
const EventHandler = function () {
    if (this.removed !== this.state.removed) {
        if (this.removed) {
            this.emit("removed");
        }
    }
    if (this.showing !== this.state.showing) {
        if (this.showing) {
            this.emit("showing", true);
        }
        else {
            this.emit("showing", false);
        }
    }
    if (this.index !== this.state.index) {
        this.emit("index", this.index);
    }
};
/** A notice interface for modifying it and subscribing to events. */
class Notice extends events_1.EventEmitter {
    constructor(data) {
        super();
        this.data = data;
        this.state = {
            removed: this.removed,
            showing: this.showing,
            index: this.index
        };
        let eventFunc = EventHandler.bind(this);
        Notices_1.events.on("noticeUpdate", eventFunc);
        this.on("removed", () => {
            Notices_1.events.off("noticeUpdate", eventFunc);
        });
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    once(event, listener) {
        return super.once(event, listener);
    }
    off(event, listener) {
        return super.off(event, listener);
    }
    get removed() {
        return !Notices_1.notices.find(e => e.id === this.id);
    }
    get showing() {
        return this.index === 0;
    }
    get index() {
        return Notices_1.notices.findIndex(e => e.id === this.id);
    }
    get id() {
        return this.data.id;
    }
    get text() {
        return this.data.text;
    }
    set text(text) {
        this.data.text = text;
        Notices_1.events.emit("noticeUpdate");
    }
    get type() {
        return this.data.type;
    }
    set type(type) {
        this.data.type = type;
        Notices_1.events.emit("noticeUpdate");
    }
    get buttonText() {
        return this.data.buttonText;
    }
    set buttonText(buttonText) {
        this.data.buttonText = buttonText;
        Notices_1.events.emit("noticeUpdate");
    }
    get onClick() {
        return this.data.onClick;
    }
    set onClick(onClick) {
        this.data.onClick = onClick;
        Notices_1.events.emit("noticeUpdate");
    }
    remove() {
        if (this.removed)
            return;
        Notices_1.notices.splice(this.index, 1);
        Notices_1.events.emit("noticeUpdate");
    }
}
exports.Notice = Notice;


/***/ }),

/***/ "./src/modules/PluginUtilities.ts":
/*!****************************************!*\
  !*** ./src/modules/PluginUtilities.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __webpack_require__(/*! ../components/components */ "./src/components/components.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const uuid_1 = __webpack_require__(/*! ./uuid */ "./src/modules/uuid.ts");
const TextInput_1 = __webpack_require__(/*! ../components/inputs/TextInput */ "./src/components/inputs/TextInput.tsx");
exports.default = new class PluginUtilities {
    constructor() { }
    renderSettings(settings) {
        let items = this.renderSettingsToReact(settings);
        let elem = React.createElement("div", { key: uuid_1.default() }, items);
        return Utils_1.default.ReactToHTMLElement(elem);
    }
    renderSettingsToReact(settings) {
        let items = [];
        settings.forEach(item => {
            if (typeof item !== "object")
                return items.push(item);
            if (item.props && "children" in item.props) {
                if (!Array.isArray(item.props.children))
                    item.props.children = [item.props.children];
                item.props.children = this.renderSettingsToReact(item.props.children);
            }
            if (!item.props)
                item.props = {};
            item.props.key = uuid_1.default();
            let component = Utils_1.default.getNestedProps(components_1.default, item.component);
            if (!component) {
                let warning = new TextInput_1.default({
                    value: `Warning: No component was found for: "${item.component}". Please correct your code.`,
                    disabled: true,
                    error: `Warning: No component was found for: "${item.component}". Please correct your code.`
                }).render();
                items.push(warning);
                return;
            }
            items.push(React.createElement(component, Object.create(item.props)));
        });
        return items;
    }
};


/***/ }),

/***/ "./src/modules/Unfreeze.ts":
/*!*********************************!*\
  !*** ./src/modules/Unfreeze.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function unfreeze(o) {
    var oo = undefined;
    if (o instanceof Array) {
        oo = [];
        var clone = function (v) {
            oo.push(v);
        };
        o.forEach(clone);
    }
    else if (o instanceof String) {
        oo = new String(o).toString();
    }
    else if (typeof o == 'object') {
        oo = {};
        for (var property in o) {
            oo[property] = o[property];
        }
    }
    return oo;
}
exports.default = unfreeze;
Object.unfreeze = unfreeze;


/***/ }),

/***/ "./src/modules/Utils.ts":
/*!******************************!*\
  !*** ./src/modules/Utils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __webpack_require__(/*! react-dom */ "./src/alias/react-dom.ts");
const PluginUtilities_1 = __webpack_require__(/*! ./PluginUtilities */ "./src/modules/PluginUtilities.ts");
exports.default = new class Utils {
    constructor() { }
    ReactToHTMLElement(ReactElement) {
        const element = document.createElement("div");
        ReactDOM.render(ReactElement, element);
        return element;
    }
    get PluginUtils() { return PluginUtilities_1.default; }
    getNestedProps(obj, path) {
        let segments = path.split(".");
        for (let seg of segments) {
            obj = obj && (seg in obj) ? obj[seg] : undefined;
        }
        return obj;
    }
    DecimalColorToHex(color) {
        return "#" + color.toString(16).toUpperCase();
    }
    HexColorToDecimal(color) {
        color = color.replace(/[#;]/g, "");
        let res = parseInt(color, 16);
        if (isNaN(res))
            throw new Error(`Invalid color: ${color}`);
        return res;
    }
    removeDa(className) {
        if (!className)
            return className;
        return className.split(" ").filter(e => !e.startsWith("da-")).join(" ");
    }
    FindReact(dom, traverseUp = 0) {
        // taken from https://stackoverflow.com/questions/29321742/react-getting-a-component-from-a-dom-element-for-debugging#39165137
        const key = Object.keys(dom).find(key => key.startsWith("__reactInternalInstance$"));
        const domFiber = dom[key];
        if (domFiber == null)
            return null;
        // react <16
        if (domFiber._currentElement) {
            let compFiber = domFiber._currentElement._owner;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = compFiber._currentElement._owner;
            }
            return compFiber._instance;
        }
        // react 16+
        const GetCompFiber = fiber => {
            //return fiber._debugOwner; // this also works, but is __DEV__ only
            let parentFiber = fiber.return;
            while (typeof parentFiber.type == "string") {
                parentFiber = parentFiber.return;
            }
            return parentFiber;
        };
        let compFiber = GetCompFiber(domFiber);
        for (let i = 0; i < traverseUp; i++) {
            compFiber = GetCompFiber(compFiber);
        }
        return compFiber.stateNode;
    }
    hasClass(classNames, className) {
        if (!classNames || !className)
            return false;
        const classnames = classNames.split(" ");
        for (let classname of this.removeDa(className).split(" ")) {
            if (!classnames.includes(classname))
                return false;
        }
        return true;
    }
    formatJSObject(obj) {
        if (["string", "number", "boolean", "bigint", "undefined"].includes(typeof obj))
            return JSON.stringify(obj);
        if (obj === null)
            return "null";
        if (typeof obj === "function")
            return String(obj);
        if (typeof obj === "symbol")
            return String(obj);
        if (Array.isArray(obj)) {
            if (!obj.length)
                return "[]";
            return `[\n    ${obj.map(e => this.formatJSObject(e)).join(",\n    ")}\n]`;
        }
        else {
            const keys = Object.keys(obj);
            if (keys.length === 0)
                return "{}";
            return `{\n    ${keys.map(key => {
                let original = key;
                if (typeof key === "symbol")
                    key = "[" + String(key) + "]";
                else {
                    if (typeof key === "number")
                        key = String(key);
                    else {
                        console.log(key);
                        if (isNaN(parseInt(key[0]))) {
                            key = this.formatJSObject(key);
                        }
                        else if (/[^\w\d_$]/g.test(key)) {
                            key = this.formatJSObject(key);
                        }
                    }
                }
                return `${key}: ${this.formatJSObject(obj[original])}`;
            })}\n}`;
        }
    }
};


/***/ }),

/***/ "./src/modules/WebpackLoader.ts":
/*!**************************************!*\
  !*** ./src/modules/WebpackLoader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackLoaderError = void 0;
const BDModules = window.BDModules;
exports.default = new class WebpackLoader {
    constructor() { }
    get(id) {
        return BDModules.get(id);
    }
    find(filter) {
        let result = BDModules.get(filter)[0];
        if (!result) {
            console.warn(filter, "couldn't find the module.");
        }
        return result;
    }
    findByUniqueProperties(props) {
        return BDModules.get((mod) => {
            if (mod.__esModule && ("default" in mod)) {
                let doesMatch = true;
                for (let prop of props) {
                    if (!Object.prototype.hasOwnProperty.call(mod.default, prop))
                        doesMatch = false;
                }
                if (doesMatch)
                    return true;
            }
            for (let prop of props) {
                if (!Object.prototype.hasOwnProperty.call(mod, prop))
                    return false;
            }
            return true;
        })[0];
    }
    filter(filter) {
        return BDModules.get(filter);
    }
    filterByUniqueProperties(props) {
        return BDModules.get((mod) => {
            if (mod.__esModule && ("default" in mod)) {
                let doesMatch = true;
                for (let prop of props) {
                    if (!Object.prototype.hasOwnProperty.call(mod.default, prop))
                        doesMatch = false;
                }
                if (doesMatch)
                    return true;
            }
            for (let prop of props) {
                if (!Object.prototype.hasOwnProperty.call(mod, prop))
                    return false;
            }
            return true;
        });
    }
};
class WebpackLoaderError extends Error {
    constructor(message = "") {
        message += "\n\tThis error is related to Lightcord not being able to find a WebpackModule. \n\tPlease show this error and a few lines of logs above this error. \n\tOpen an issue on https://github.com/Lightcord/Lightcord or in their discord server.";
        super(message);
        this.name = "WebpackLoaderError";
    }
}
exports.WebpackLoaderError = WebpackLoaderError;


/***/ }),

/***/ "./src/modules/cloneNullProto.ts":
/*!***************************************!*\
  !*** ./src/modules/cloneNullProto.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Recreate the given object without the __proto__. Useful for better formatting when output in console.
 * @param obj The object to recreate
 */
function cloneNullProto(obj) {
    let o = Object.create(null);
    Object.keys(obj).forEach(k => {
        o[k] = obj[k];
    });
    return o;
}
exports.default = cloneNullProto;


/***/ }),

/***/ "./src/modules/excludeProperties.ts":
/*!******************************************!*\
  !*** ./src/modules/excludeProperties.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function excludeProperties(obj, props) {
    let newObj = {};
    Object.keys(obj).forEach((k) => {
        if (props.includes(k))
            return;
        newObj[k] = obj[k];
    });
    return newObj;
}
exports.default = excludeProperties;


/***/ }),

/***/ "./src/modules/noop.ts":
/*!*****************************!*\
  !*** ./src/modules/noop.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function NOOP() { }
exports.default = NOOP;


/***/ }),

/***/ "./src/modules/patchers.ts":
/*!*********************************!*\
  !*** ./src/modules/patchers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/modules/Utils.ts");
const Notices_1 = __webpack_require__(/*! ../components/private/Notices */ "./src/components/private/Notices.tsx");
function patch() {
    /** START NOTICE */
    getModule(e => e.default && e.default.displayName === "ConnectedAppView")
        .then(async (mod) => {
        const appClasses = await getModule(e => e.hasNotice);
        const buildRender = original => {
            return function render() {
                const returnValue = original.call(this, ...arguments);
                const newchildren = [];
                let children = returnValue.props.children[1].props.children;
                if (!Array.isArray(children))
                    children = [children];
                newchildren.push(children[0]);
                newchildren.push(React.createElement(Notices_1.default, { container: this }));
                newchildren.push(children[1]);
                returnValue.props.children[1].props.children = newchildren;
                returnValue.props.children[1].props.children[2].props.children[0].props.render = buildRenderChannelSidebar(returnValue.props.children[1].props.children[2].props.children[0].props.render);
                return returnValue;
            };
        };
        const buildRenderChannelSidebar = original => {
            return function renderChannelSidebar() {
                const returnValue = original.call(this, ...arguments);
                const hasNotice = Notices_1.notices.length > 0;
                if (!hasNotice)
                    return returnValue;
                if (!Utils_1.default.hasClass(returnValue.props.className, appClasses.hasNotice)) {
                    returnValue.props.className += " " + Utils_1.default.removeDa(appClasses.hasNotice);
                }
                return returnValue;
            };
        };
        mod.default.prototype.render = buildRender(mod.default.prototype.render);
        (async function () {
            const base = document.querySelector("." + Utils_1.default.removeDa(appClasses.base));
            if (!base)
                throw new Error(`Could not find base here`);
            const elem = Utils_1.default.FindReact(base);
            elem.render = buildRender(elem.render);
            elem.forceUpdate();
        })();
    });
    /** END NOTICE */
    /** START IN-APP NOTIFICATIONS */
    //getModule(e => true)
    /** END IN-APP NOTIFICATIONS */
}
exports.patch = patch;
function getModule(filter) {
    return new Promise((resolve) => {
        window.Lightcord.Api.ensureExported(filter)
            .then(resolve)
            .catch(err => {
            console.error("[LIGHTCORD]", err, filter);
        });
    });
}


/***/ }),

/***/ "./src/modules/uuid.ts":
/*!*****************************!*\
  !*** ./src/modules/uuid.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uuidv1 = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
const uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
let uuid = Object.assign(function () {
    return uuidv4();
}, { v1: () => uuidv1(), v4: () => uuidv4() });
exports.default = uuid;


/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQWxlcnRCb3gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQ29kZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9TZXR0aW5nc1RpdGxlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1RhYnMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVG9vbHRpcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ29sb3JQaWNrZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2UudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlcy50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL0Rpc2NvcmRUb29scy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9QbHVnaW5VdGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvVW5mcmVlemUudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvV2VicGFja0xvYWRlci50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9jbG9uZU51bGxQcm90by50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9leGNsdWRlUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9ub29wLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL3BhdGNoZXJzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL3V1aWQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92MVwiIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInV1aWQvdjRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsaUJBQVMsTUFBTSxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQStCOzs7Ozs7Ozs7Ozs7Ozs7QUNENUQsa0dBQTJDO0FBQzNDLGtHQUFvQztBQUNwQyw4R0FBNEM7QUFDNUMsd0dBQXdDO0FBQ3hDLDJHQUEwQztBQUMxQyx3R0FBd0M7QUFDeEMsaUdBQW1DO0FBQ25DLHlIQUFtRDtBQUNuRCw4RkFBMEM7QUFDMUMsK0hBQXVEO0FBQ3ZELDZHQUEyQztBQUMzQyxpSEFBc0Q7QUFDdEQsc0dBQXVDO0FBQ3ZDLGlIQUE4QztBQUM5QywwR0FBeUM7QUFFekMsa0JBQWUsd0JBQWMsQ0FBQztJQUMxQixNQUFNLEVBQUUsd0JBQWMsQ0FBQztRQUNuQixNQUFNLEVBQUUsZ0JBQWE7UUFDckIsTUFBTSxFQUFFLGdCQUFNO1FBQ2QsT0FBTyxFQUFFLG9CQUFVO1FBQ25CLFVBQVUsRUFBRSxvQkFBVTtRQUN0QixRQUFRLEVBQUUsa0JBQVE7UUFDbEIsU0FBUyxFQUFFLG1CQUFTO1FBQ3BCLFFBQVEsRUFBRSxrQkFBUTtRQUNsQixXQUFXLEVBQUUscUJBQVc7S0FDM0IsQ0FBQztJQUNGLE9BQU8sRUFBRSx3QkFBYyxDQUFDO1FBQ3BCLEtBQUssRUFBRSxlQUFLO1FBQ1osYUFBYSxFQUFFLHVCQUFhO1FBQzVCLGVBQWUsRUFBRSx5QkFBZTtRQUNoQyxJQUFJLEVBQUUsY0FBSTtRQUNWLFNBQVMsRUFBRSxtQkFBUztRQUNwQixPQUFPLEVBQUUsaUJBQU87UUFDaEIsUUFBUSxFQUFFLGtCQUFRO0tBQ3JCLENBQUM7Q0FDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0YsaUhBQXVEO0FBUXZELElBQUksZUFBZTtBQUNuQixNQUFxQixRQUFTLFNBQVEsS0FBSyxDQUFDLFNBQXdCO0lBTWhFLElBQUksT0FBTztRQUNQLE9BQU8sZUFBZSxJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ3pDLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTztTQUN0SCxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07UUFDRixNQUFNLENBQ0YsUUFBUSxDQUNYLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFaEIsSUFBSSxJQUFJO1FBQ1IsSUFBSSxRQUFRO1FBQ1osSUFBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBQztZQUN2QyxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtpQkFDaEMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQzVCLENBQUM7WUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQ2pDO2FBQUk7WUFDRCxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsUUFBUSxFQUFFLEVBQUU7aUJBQ2YsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQzVCLENBQUM7WUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsNkJBQUssU0FBUyxFQUFFLDRCQUE0QixHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUM5RSxvQ0FBWSxTQUFTLEVBQUMsZUFBZSxJQUNoQyxRQUFRLENBQ0EsQ0FDWDtRQUNOLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxNQUFNLEtBQUssV0FBVztRQUNsQixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNiO29CQUNJLFFBQVEsRUFBRSxpSEFBaUg7aUJBQzlIO2FBQ0osRUFBRTtnQkFDQztvQkFDSSxJQUFJLEVBQUUsTUFBTTtpQkFDZjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsU0FBUztpQkFDbEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLE1BQU07aUJBQ2Y7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0osQ0FBQztZQUNGLE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBbkVMLDJCQXlFQztBQXhFVSxxQkFBWSxHQUFpQjtJQUNoQyxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxJQUFJO0NBQ2pCO0FBaUVNLGFBQUksR0FBRztJQUNWLElBQUksRUFBRSw0REFBNEQ7SUFDbEUsSUFBSSxFQUFFLDJHQUEyRztDQUNwSDtBQUVMLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZmLGlIQUF1RDtBQU92RCxJQUFJLGdCQUFnQjtBQUNwQixNQUFxQixTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBTWxFLElBQUksT0FBTztRQUNQLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUMzQyx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakMsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ3pDLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO1lBQ2pELHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNwQyx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7U0FDM0MsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUNBLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixhQUFhLENBQ2hCLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyw4QkFBTSxTQUFTLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxzQkFBc0IsT0FBTyxJQUNoSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQyxDQUFDLENBQUMsOEJBQU0sU0FBUyxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLE9BQU8sRUFDeEUsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBQyxHQUFJO1FBQ2hILE9BQU8sQ0FBQyw2QkFBSyxTQUFTLEVBQUUsR0FBRyxjQUFjLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxjQUFjLEVBQUU7WUFDL0UsaUNBQ0ssSUFBSSxDQUNIO1lBQ04sNkJBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxhQUFhLEdBQVEsQ0FDakQsQ0FBQztJQUNYLENBQUM7SUFFRCxNQUFNLEtBQUssV0FBVztRQUNsQixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNiO29CQUNJLE9BQU8sRUFBRSwrQkFBK0I7aUJBQzNDO2FBQ0osQ0FBQztZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2I7b0JBQ0ksUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNEO29CQUNJLFFBQVEsRUFBRSxXQUFXO2lCQUN4QjtnQkFDRCxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDdEcsQ0FBQztZQUNGLE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBeERMLDRCQXlEQztBQXhEVSxzQkFBWSxHQUFrQjtJQUNqQyxRQUFRLEVBQUUsV0FBVztJQUNyQixPQUFPLEVBQUUsRUFBRTtDQUNkO0FBc0RMLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVmLGlIQUF1RDtBQVN2RCxJQUFJLFlBQVk7QUFDaEIsTUFBcUIsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBK0I7SUFNOUUsSUFBSSxPQUFPO1FBQ1AsT0FBTyxZQUFZLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDbkMsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDO1lBQzFELHVCQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvRSxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQ0EsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1YsV0FBVyxDQUNkLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFFdEIsSUFBSSxTQUFTLEdBQUcsR0FBRyxXQUFXLENBQUMsYUFBYSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLEVBQUUsSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO1FBQ25ILElBQUcsS0FBSyxDQUFDLFNBQVM7WUFBQyxTQUFTLEdBQUUsQ0FBRSxHQUFHLEdBQUMsS0FBSyxDQUFDLFNBQVM7UUFFbkQsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFDLFNBQVMsRUFBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU0sS0FBSyxXQUFXO1FBQ2xCLE9BQU8sV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsR0FBRyxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2I7b0JBQ0ksUUFBUSxFQUFFLGVBQWU7aUJBQzVCO2FBQ0osQ0FBQztZQUNGLE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBekNMLGtDQTBDQztBQXpDVSw0QkFBWSxHQUF3QjtJQUN2QyxRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxFQUFFO0NBQ2hCO0FBdUNMLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDckRmLGlIQUF1RDtBQUN2RCx5RkFBMkI7QUFRM0IsSUFBSSxZQUFZO0FBQ2hCLE1BQXFCLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBNkI7SUFDMUUsWUFBWSxLQUF5QjtRQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLFlBQVksSUFBSSxDQUFDLFlBQVksR0FBRztZQUNuQyx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUM7U0FDN0QsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUNBLFlBQVksQ0FDZixHQUFHLElBQUksQ0FBQyxPQUFPO1FBRWhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRXRCLElBQUksU0FBUyxHQUFHLEdBQUcsWUFBWSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFO1FBQzVFLElBQUcsS0FBSyxDQUFDLFNBQVM7WUFBQyxTQUFTLEdBQUUsQ0FBRSxHQUFHLEdBQUMsS0FBSyxDQUFDLFNBQVM7UUFFbkQsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQUssRUFBRSxFQUFDLFNBQVMsRUFBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbEUsQ0FBQztJQU9ELE1BQU0sS0FBSyxXQUFXO1FBQ2xCLE9BQU8sV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsR0FBRyxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2I7b0JBQ0ksUUFBUSxFQUFFLGVBQWU7aUJBQzVCO2FBQ0osQ0FBQztZQUNGLE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBdkNMLGdDQXdDQztBQWhCVSwwQkFBWSxHQUFzQjtJQUNyQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDZCxTQUFTLEVBQUUsRUFBRTtDQUNoQjtBQWNMLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZixzRkFBcUM7QUFDckMseUZBQTJCO0FBVTNCLE1BQXFCLElBQUssU0FBUSxLQUFLLENBQUMsU0FFdEM7SUFTRSxZQUFZLEtBQWU7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQU1oQixpQkFBWSxHQUFTLEVBQUU7UUFMbkIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJO1NBQ3BDO0lBQ0wsQ0FBQztJQUlELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtJQUNoQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVU7UUFDaEIsSUFBRyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQUMsT0FBTTtRQUNuQyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxDQUFDLDZCQUFLLFNBQVMsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUMxRCw2QkFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsSUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFDeEgsQ0FBQyxDQUFDLENBQ0E7WUFDTiw2QkFBSyxTQUFTLEVBQUMsUUFBUSxJQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbEIsQ0FDSixDQUFDO0lBQ1gsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ3BDLENBQUM7SUFFRCxNQUFNLEtBQUssV0FBVztRQUNsQixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNiO29CQUNJLFFBQVEsRUFBRSxDQUFDLDZCQUFLLEtBQUssRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQzt3QkFDNUQsNkJBQUssS0FBSyxFQUFFO2dDQUNSLGVBQWUsRUFBRSwyQkFBMkI7Z0NBQzVDLE9BQU8sRUFBRSxXQUFXO2dDQUNwQixZQUFZLEVBQUUsS0FBSzs2QkFDdEIsRUFBRSxTQUFTLEVBQUMsbUJBQW1COzRCQUM1QixvQkFBQyxlQUFLLHVCQUFxQixDQUN6QixDQUNKLENBQUM7aUJBQ1Y7YUFDSixFQUFFO2dCQUNDO29CQUNJLElBQUksRUFBRTt3QkFDRjs0QkFDSSxLQUFLLEVBQUUsWUFBWTs0QkFDbkIsRUFBRSxFQUFFLEdBQUc7eUJBQ1Y7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLGNBQWM7NEJBQ3JCLEVBQUUsRUFBRSxHQUFHO3lCQUNWO3FCQUNKO2lCQUNKO2FBQ0osRUFBRTtnQkFDQztvQkFDSSxNQUFNLEVBQUUsR0FBRztpQkFDZDthQUNKLEVBQUU7Z0JBQ0M7b0JBQ0ksUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRSxDQUFDO2lCQUMxQjthQUNKLENBQUM7WUFDRixPQUFPLFdBQVc7UUFDdEIsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDOztBQXpGTCx1QkEwRkM7QUF2RlUsaUJBQVksR0FBYTtJQUM1QixRQUFRLEVBQUUsSUFBSTtJQUNkLElBQUksRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLCtCQUErQixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUM1RCxNQUFNLEVBQUUsSUFBSTtJQUNaLFFBQVEsRUFBRSxjQUFJO0lBQ2QsS0FBSyxFQUFFLEVBQUU7Q0FDWjtBQWtGTCxJQUFJLFdBQVc7QUFFZixNQUFhLEdBQUksU0FBUSxLQUFLLENBQUMsU0FNN0I7SUFDRSxZQUFZLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxDQUFDO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFnQjtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRO1NBQ3JCLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksU0FBUyxHQUFHLFlBQVk7UUFDNUIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQztZQUNqQixTQUFTLElBQUksbUJBQW1CO1NBQ25DO2FBQUk7WUFDRCxTQUFTLElBQUkscUJBQXFCO1NBQ3JDO1FBQ0QsT0FBTyxDQUFDLDZCQUFLLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BELENBQUMsSUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDZixDQUFDO0lBQ1gsQ0FBQztDQUNKO0FBcENELGtCQW9DQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0lELGlIQUF1RDtBQVF2RCxJQUFJLFlBQVk7QUFDaEIsTUFBcUIsS0FBTSxTQUFRLEtBQUssQ0FBQyxTQUFxQjtJQUMxRCxZQUFZLEtBQWlCO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sWUFBWSxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ25DLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxLQUFLLFFBQVEsQ0FBQztZQUM1RCx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUM7WUFDckQsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDO1NBQ3BELENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FDQSxXQUFXLEVBQ1gsVUFBVSxFQUNWLFdBQVcsQ0FDZCxHQUFHLElBQUksQ0FBQyxPQUFPO1FBRWhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRXRCLElBQUksU0FBUyxHQUFHLEdBQUcsV0FBVyxDQUFDLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDLFlBQVksSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFO1FBQ2hKLElBQUcsS0FBSyxDQUFDLFNBQVM7WUFBQyxTQUFTLElBQUksR0FBRyxHQUFDLEtBQUssQ0FBQyxTQUFTO1FBRW5ELE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2pFLENBQUM7SUFPRCxNQUFNLEtBQUssV0FBVztRQUNsQixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNiO29CQUNJLFFBQVEsRUFBRSxlQUFlO2lCQUM1QjthQUNKLENBQUM7WUFDRixPQUFPLFdBQVc7UUFDdEIsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDOztBQTNDTCx3QkE0Q0M7QUFoQlUsa0JBQVksR0FBYztJQUM3QixRQUFRLEVBQUUsSUFBSTtJQUNkLFNBQVMsRUFBRSxJQUFJO0NBQ2xCO0FBY0wsSUFBSSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUN0RGYsaUhBQXVEO0FBRXZELDZIQUErRDtBQWdCL0QsSUFBSSxjQUFjO0FBQ2xCLE1BQXFCLE9BQVEsU0FBUSxLQUFLLENBQUMsU0FBdUI7SUFDOUQsWUFBWSxLQUFtQjtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLGNBQWMsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUN2Qyx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDO1NBQzVFLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FDQSxPQUFPLENBQ1YsR0FBRyxJQUFJLENBQUMsT0FBTztRQUVoQixJQUFJLEtBQUssR0FBRywyQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkQsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBZ0IsRUFBRSxFQUFFO1lBQ3BFLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLGtDQUN6QixJQUFJLEtBQ1AsS0FBSyxFQUFFO29CQUNILEtBQUssRUFBRSxhQUFhO29CQUNwQixNQUFNLEVBQUUsYUFBYTtpQkFDeEIsS0FDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBU0QsTUFBTSxLQUFLLFdBQVc7UUFDbEIsT0FBTyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEVBQUU7WUFDaEIsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDYjtvQkFDSSxRQUFRLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDekUsS0FBSyxFQUFFLE9BQU87d0JBQ2QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxFQUFFLE9BQU87d0JBQ2IsVUFBVSxFQUFFLFFBQVE7d0JBQ3BCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO3dCQUNsQixPQUFPLEVBQUUsS0FBSztxQkFDakIsRUFBRSxzQ0FBc0MsQ0FBQztpQkFDN0M7YUFDSixDQUFDO1lBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDYjtvQkFDSSxJQUFJLEVBQUUsc0JBQXNCO2lCQUMvQjthQUNKLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQztZQUNOLENBQUMsQ0FBQztZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hCLElBQUksU0FBUyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ1gsUUFBUSxFQUFFLENBQUM7aUJBQ2QsQ0FBQztZQUNOLENBQUMsQ0FBQztZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzNCLE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBeEVMLDBCQTRFQztBQS9DVSxvQkFBWSxHQUFnQjtJQUMvQixRQUFRLEVBQUUsSUFBSTtJQUNkLElBQUksRUFBRSwrQkFBK0I7SUFDckMsUUFBUSxFQUFFLEtBQUs7SUFDZixLQUFLLEVBQUUsT0FBTztDQUNqQjtBQXdDTSxpQkFBUyxHQUFxQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUNoRSxjQUFNLEdBQWtCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7QUFFdkYsSUFBSSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNoR2YsaUhBQXVEO0FBR3ZELElBQUksYUFBYTtBQVlqQixNQUFxQixNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQXdDO0lBQzlFLFlBQVksS0FBaUI7UUFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUVaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSztTQUNmO0lBQ0wsQ0FBQztJQU9ELElBQUksT0FBTztRQUNQLE9BQU8sYUFBYSxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ3JDLHVCQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCx1QkFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxRCx1QkFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdkQsdUJBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3pELENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FDQSxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ2YsR0FBRyxJQUFJLENBQUMsT0FBTztRQUVoQixJQUFJLEtBQUssR0FBZSxFQUFFO1FBQzFCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNWLElBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ2pDO1lBQ0QsSUFBRyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDeEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDdkM7WUFDRCxJQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUN2QixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUNyQztZQUNELElBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzthQUN2QztZQUNELElBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQy9CO1lBQ0QsSUFBRyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDcEIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDL0I7WUFDRCxJQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUMxQixLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTthQUMzQztZQUNELElBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQ3ZDO2lCQUFJO2dCQUNELEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSzthQUN6QjtTQUNKO1FBRUQsSUFBRyxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ1gsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBaUI7WUFDdEQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQztnQkFDcEMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNqQztTQUNKO2FBQUk7WUFDRCxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDO1lBQ1YsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBZ0I7WUFDbkQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDbEMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNKO2FBQUk7WUFDRCxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDO1lBQ1YsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBZ0I7WUFDbkQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDbEMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNKO2FBQUk7WUFDRCxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFDO1lBQ2hCLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQWtCO1lBQ2pFLElBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUM7Z0JBQzlDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDSjthQUFJO1lBQ0QsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzRixJQUFHLFVBQVU7WUFBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVU7UUFFM0MsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hHLElBQUcsVUFBVTtZQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVTtRQUUzQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUM7UUFDOUUsSUFBRyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUztZQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUUxRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN2RCxJQUFHLEtBQUs7WUFBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUs7UUFFNUIsSUFBSSxNQUFNLEdBQUcsZ0NBQVEsSUFBSSxFQUFDLFFBQVEsRUFDOUIsU0FBUyxFQUFFLEdBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsS0FBSyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFDNU4sS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDekUsSUFBRyxDQUFDLFVBQVU7b0JBQUMsT0FBTTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ3BCLElBQUcsQ0FBQyxVQUFVO29CQUFDLE9BQU07Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUMzQiw2QkFBSyxTQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVEsSUFBRyxLQUFLLENBQUMsUUFBUSxDQUFPLENBQ3REO1FBRVQsSUFBRyxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2IsT0FBTyw2QkFBSyxTQUFTLEVBQUUsWUFBWSxDQUFDLGFBQWEsSUFDNUMsTUFBTSxDQUNMO1NBQ1Q7UUFDRCxPQUFPLE1BQU07SUFDakIsQ0FBQztJQUVELE1BQU0sS0FBSyxXQUFXO1FBQ2xCLE9BQU8sV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsR0FBRyxFQUFFO1lBQ2hCLElBQUksTUFBTSxHQUFHLEVBQUU7WUFDZixLQUFJLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNMO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUNkLEtBQUksSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssRUFBQztnQkFDekIsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDUCxJQUFJLEVBQUUsSUFBSTtpQkFDYixDQUFDO2FBQ0w7WUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2QsS0FBSSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO2dCQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNQLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUM7YUFDTDtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUU7WUFDZixLQUFJLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ1IsVUFBVSxFQUFFLEtBQUs7aUJBQ3BCLENBQUM7YUFDTDtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO1lBQzdDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBdEtMLHlCQXVLQztBQTlKVSxhQUFNLEdBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDO0FBQ3RILFlBQUssR0FBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUNqRixZQUFLLEdBQWdCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUN6RixrQkFBVyxHQUFtQixDQUFDLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUE0SnRFLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDdkxmLHNGQUFxQztBQUNyQyxpSEFBdUQ7QUFFdkQseUZBQXVDO0FBRXZDLE1BQU0sU0FBUyxHQUFHO0lBQ2QsWUFBWSxFQUFFLFFBQVE7SUFDdEIsVUFBVSxFQUFFO1FBQ1IsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsT0FBTztRQUNQLE9BQU87S0FDVjtDQUNKO0FBV0QsSUFBSSxrQkFBa0I7QUFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSTtBQUVyQjs7O0dBR0c7QUFDSCxNQUFxQixXQUFZLFNBQVEsS0FBSyxDQUFDLGFBQThEO0lBQ3pHLFlBQVksS0FBc0I7UUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7U0FDOUI7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsSUFBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBQyxPQUFNO1FBQzFDLElBQUcsVUFBVTtZQUFDLE9BQU07UUFDcEIsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2hDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsS0FBSyxFQUFFLEdBQUc7U0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUN0QixDQUFDO0lBV0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxrQkFBa0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQy9DLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxhQUFhLENBQUM7U0FDaEYsQ0FBQztJQUNOLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLENBQ0Esb0JBQW9CLENBQ3ZCLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFaEIsSUFBRyxDQUFDLG9CQUFvQixFQUFDO1lBQ3JCLElBQUcsVUFBVSxFQUFDLEVBQUUsb0NBQW9DO2dCQUNoRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxJQUFJO2FBQ2Q7WUFDRCxrQkFBa0IsR0FBRyxJQUFJO1lBQ3pCLElBQUksT0FBTztZQUNYLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSTtZQUM1SyxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dCQUNsRSxLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFFO3dCQUNILEtBQUssRUFBRSxFQUFFO3dCQUNULEVBQUUsRUFBRSxJQUFJO3dCQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLO3FCQUN2QjtvQkFDRCxXQUFXLEVBQUU7d0JBQ1QsRUFBRSxFQUFFLElBQUk7cUJBQ1g7aUJBQ0o7Z0JBQ0QsZUFBZTtvQkFDWCxPQUFPO3dCQUNILEVBQUUsRUFBRSxJQUFJO3FCQUNYO2dCQUNMLENBQUM7YUFDSixDQUFDO1lBQ0YsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3RELElBQUksUUFBUSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzlELEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUU7d0JBQ0YsRUFBRSxFQUFFLElBQUk7d0JBQ1IsS0FBSyxFQUFFLENBQUM7cUJBQ1g7b0JBQ0QsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsUUFBUSxFQUFFLEtBQUs7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1lBRUYsT0FBTyxJQUFJO1NBQ2Q7UUFDRCxPQUFPLG9CQUFDLG9CQUFvQixDQUFDLE9BQU8sSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDOUgsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FDaEU7SUFDbkMsQ0FBQztJQUVELE1BQU07UUFDRixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzthQUM5QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7SUFDbkMsQ0FBQztJQUVELE1BQU0sS0FBSyxXQUFXO1FBQ2xCLE9BQU8sV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hCLFdBQVcsR0FBRyxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2I7b0JBQ0ksUUFBUSxFQUFFLEtBQUs7aUJBQ2xCO2dCQUNEO29CQUNJLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjthQUNKLEVBQUU7Z0JBQ0M7b0JBQ0ksS0FBSyxFQUFFLGVBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7aUJBQzVDLEVBQUU7b0JBQ0MsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7YUFDSixFQUFFO2dCQUNDO29CQUNJLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUUsQ0FBQztpQkFDMUI7YUFDSixDQUFDO1lBQ0YsT0FBTyxXQUFXO1FBQ3RCLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQzs7QUEvSEwsOEJBcUlDO0FBNUdVLHdCQUFZLEdBQW9CO0lBQ25DLFlBQVksRUFBRSxTQUFTLENBQUMsWUFBWTtJQUNwQyxXQUFXLEVBQUUsSUFBSTtJQUNqQixVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVU7SUFDaEMsS0FBSyxFQUFFLElBQUk7SUFDWCxRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxjQUFJO0NBQ2pCO0FBaUdNLGdCQUFJLEdBQUc7SUFDVixJQUFJLEVBQUUsc0tBQXNLO0lBQzVLLElBQUksRUFBRSxnS0FBZ0s7Q0FDeks7QUFFTCxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3JMZixzRkFBcUM7QUFDckMsaUhBQXVEO0FBeUN2RCxJQUFJLGVBQWU7QUFDbkIsTUFBcUIsUUFBUyxTQUFRLEtBQUssQ0FBQyxTQUE4QztJQUN0RixZQUFZLEtBQW1CO1FBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSTtTQUM3QjtJQUNMLENBQUM7SUF1QkQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNOLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLGVBQWUsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUN6Qyx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxPQUFPO1NBQzlGLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FDQSxpQkFBaUIsQ0FDcEIsR0FBRyxJQUFJLENBQUMsT0FBTztRQUVoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixJQUFJLFdBQVcsR0FBRyxvQkFBQyxpQkFBaUIsb0JBQUssS0FBSyxJQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBRztRQUNuRyxPQUFPLFdBQVc7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzNCLENBQUM7SUFFRCxNQUFNLEtBQUssV0FBVztRQUNsQixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsS0FBSyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDQyxLQUFLLEVBQUUsa0JBQWtCO2lCQUM1QixDQUFDLEVBQUUsQ0FBQztvQkFDRCxPQUFPLEVBQUU7d0JBQ0w7NEJBQ0ksS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLEtBQUssRUFBRSxVQUFVO3lCQUNwQjt3QkFDRDs0QkFDSSxLQUFLLEVBQUUsU0FBUzs0QkFDaEIsS0FBSyxFQUFFLFVBQVU7eUJBQ3BCO3dCQUNEOzRCQUNJLEtBQUssRUFBRSxTQUFTOzRCQUNoQixLQUFLLEVBQUUsVUFBVTt5QkFDcEI7cUJBQ0o7aUJBQ0osQ0FBQyxFQUFFLENBQUM7b0JBQ0QsS0FBSyxFQUFFLFNBQVM7aUJBQ25CLENBQUMsRUFBRSxDQUFDO29CQUNELFFBQVEsRUFBRSxLQUFLO2lCQUNsQixFQUFFO29CQUNDLFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDLEVBQUUsQ0FBQztvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDbkIsRUFBRTtvQkFDQyxVQUFVLEVBQUUsS0FBSztpQkFDcEIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsU0FBUyxFQUFFLElBQUk7aUJBQ2xCLEVBQUU7b0JBQ0MsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLENBQUMsRUFBRSxDQUFDO29CQUNELE9BQU8sRUFBRSxLQUFLO2lCQUNqQixFQUFFO29CQUNDLE9BQU8sRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUM7WUFDSCxPQUFPLFdBQVc7UUFDdEIsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDOztBQXBHTCwyQkFxR0M7QUE1RlUscUJBQVksR0FBaUI7SUFDaEMsU0FBUyxFQUFFLElBQUk7SUFDZixLQUFLLEVBQUUsSUFBSTtJQUNYLE9BQU8sRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsOEdBQThHO1NBQzFILENBQUM7SUFDRixhQUFhLEVBQUUsSUFBSTtJQUNuQixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFFBQVEsRUFBRSxjQUFJO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxRQUFRLEVBQUUsS0FBSztJQUNmLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLHdCQUF3QixFQUFFLElBQUk7SUFDOUIsdUJBQXVCLEVBQUUsSUFBSTtJQUM3QixPQUFPLEVBQUUsS0FBSztDQUNqQjtBQTBFTCxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2pKZixzRkFBcUM7QUFDckMsaUhBQXVEO0FBbUJ2RCxJQUFJLGdCQUFnQjtBQUNwQixNQUFxQixVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQTRDO0lBZXRGLFlBQVksS0FBcUI7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDckI7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLEVBQUU7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNOLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLGdCQUFnQixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDM0MsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxDQUFDLE9BQU87U0FDdkYsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUNBLG1CQUFtQixDQUN0QixHQUFHLElBQUksQ0FBQyxPQUFPO1FBRWhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sb0JBQUMsbUJBQW1CLElBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUMxSCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFDaEksYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEdBQUc7SUFDN0MsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzNCLENBQUM7SUFFRCxNQUFNLEtBQUssV0FBVztRQUNsQixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4QixXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsT0FBTyxFQUFFO3dCQUNMOzRCQUNJLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsVUFBVTs0QkFDaEIsSUFBSSxFQUFFLGVBQWU7eUJBQ3hCO3dCQUNEOzRCQUNJLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsVUFBVTs0QkFDaEIsSUFBSSxFQUFFLGVBQWU7eUJBQ3hCO3dCQUNEOzRCQUNJLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsVUFBVTs0QkFDaEIsSUFBSSxFQUFFLGVBQWU7eUJBQ3hCO3FCQUNKO2lCQUNKLENBQUMsRUFBRSxDQUFDO29CQUNELEtBQUssRUFBRSxTQUFTO2lCQUNuQixDQUFDLEVBQUUsQ0FBQztvQkFDRCxRQUFRLEVBQUUsS0FBSztpQkFDbEIsRUFBRTtvQkFDQyxRQUFRLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFFBQVE7aUJBQ2pCLEVBQUU7b0JBQ0MsSUFBSSxFQUFFLE9BQU87aUJBQ2hCLENBQUMsRUFBRSxDQUFDO29CQUNELFFBQVEsRUFBRSxLQUFLO2lCQUNsQixFQUFFO29CQUNDLFFBQVEsRUFBRSxPQUFPO2lCQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPLFdBQVc7UUFDdEIsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDOztBQXpGTCw2QkEwRkM7QUF6RlUsdUJBQVksR0FBbUI7SUFDbEMsT0FBTyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsTUFBTTtZQUNiLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSwwR0FBMEc7WUFDaEgsS0FBSyxFQUFFLFNBQVM7U0FDbkIsQ0FBQztJQUNGLEtBQUssRUFBRSxJQUFJO0lBQ1gsUUFBUSxFQUFFLEtBQUs7SUFDZixJQUFJLEVBQUUsUUFBUTtJQUNkLFFBQVEsRUFBRSxLQUFLO0lBQ2YsYUFBYSxFQUFFLElBQUk7SUFDbkIsUUFBUSxFQUFFLGNBQUk7Q0FDakI7QUE2RUwsSUFBSSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNoSGYsaUhBQXVEO0FBRXZELHNGQUFxQztBQWVyQyxJQUFJLGFBQWE7QUFDakIsTUFBcUIsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUF3QztJQUM5RSxZQUFZLEtBQWlCO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFWixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSztTQUM5QjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLGFBQWEsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNyQyx1QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTztTQUNuRixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQ0EsZUFBZSxDQUNsQixHQUFHLElBQUksQ0FBQyxPQUFPO1FBRWhCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sQ0FBQyxvQkFBQyxlQUFlLElBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFDOUcsS0FBSyxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUM5RyxJQUFJLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNyRixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7U0FDM0IsQ0FBQztJQUNOLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztJQUMzQixDQUFDO0lBY0QsTUFBTSxLQUFLLFdBQVc7UUFDbEIsT0FBTyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEVBQUU7WUFDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzdDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZCxLQUFLLEVBQUUsS0FBSztpQkFDZixDQUFDLEVBQUUsQ0FBQztvQkFDRCxLQUFLLEVBQUUsU0FBUztpQkFDbkIsRUFBRTtvQkFDQyxLQUFLLEVBQUUsT0FBTztpQkFDakIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsUUFBUSxFQUFFLEtBQUs7aUJBQ2xCLEVBQUU7b0JBQ0MsUUFBUSxFQUFFLElBQUk7aUJBQ2pCLENBQUMsRUFBRSxDQUFDO29CQUNELEVBQUUsRUFBRSxvQkFBb0I7aUJBQzNCLENBQUMsRUFBRSxDQUFDO29CQUNELElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsRUFBRSxDQUFDO29CQUNELElBQUksRUFBRSxTQUFTO2lCQUNsQixFQUFFO29CQUNDLElBQUksRUFBRSxNQUFNO2lCQUNmLENBQUMsRUFBRSxDQUFDO29CQUNELEtBQUssRUFBRSxFQUFFO2lCQUNaLENBQUMsQ0FBQztZQUNILE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBN0VMLHlCQWtGQztBQTVDVSxtQkFBWSxHQUFHO0lBQ2xCLEVBQUUsRUFBRSxJQUFJO0lBQ1IsUUFBUSxFQUFFLGNBQUk7SUFDZCxLQUFLLEVBQUUsS0FBSztJQUNaLElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFFLFNBQVM7SUFDaEIsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsSUFBSTtJQUNmLElBQUksRUFBRSxTQUFTO0lBQ2YsS0FBSyxFQUFFLEVBQUU7Q0FDWjtBQStCTSxXQUFJLEdBQUc7SUFDVixLQUFLLEVBQUUsc0RBQXNEO0NBQ2hFO0FBRUwsSUFBSSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNyR2YsaUhBQXVEO0FBQ3ZELHNGQUFxQztBQXVCckMsSUFBSSxlQUFlO0FBQ25CLE1BQXFCLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBeUM7SUFDakYsWUFBWSxLQUFtQjtRQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDO1FBRVosSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7U0FDM0I7SUFDTCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxlQUFlLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDekMsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU87U0FDckYsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsS0FBSztTQUNSLENBQUM7SUFDTixDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUyxDQUFDLEVBQUU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQ0EsaUJBQWlCLENBQ3BCLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFFdEIsT0FBTyxvQkFBQyxpQkFBaUIsb0JBQUssS0FBSyxJQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBRztJQUNuSyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ2pDLENBQUM7SUFxQkQsTUFBTSxLQUFLLFdBQVc7UUFDbEIsT0FBTyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEVBQUU7WUFDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLElBQUksRUFBRSxzQkFBc0I7aUJBQy9CLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZCxRQUFRLEVBQUUsS0FBSztpQkFDbEIsRUFBRTtvQkFDQyxRQUFRLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLFdBQVcsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLEVBQUU7b0JBQ0MsU0FBUyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZCxVQUFVLEVBQUUsS0FBSztpQkFDcEIsRUFBRTtvQkFDQyxVQUFVLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNkLEVBQUU7b0JBQ0MsSUFBSSxFQUFFLElBQUk7aUJBQ2IsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLFFBQVEsRUFBRSxLQUFLO2lCQUNsQixFQUFFO29CQUNDLFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsSUFBSSxFQUFFLENBQUM7aUJBQ1YsRUFBRTtvQkFDQyxJQUFJLEVBQUUsQ0FBQztpQkFDVixFQUFFO29CQUNDLElBQUksRUFBRSxDQUFDO2lCQUNWLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZCxLQUFLLEVBQUUsRUFBRTtpQkFDWixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsS0FBSyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDQyxLQUFLLEVBQUUsZUFBZTtpQkFDekIsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLFNBQVMsRUFBRSxHQUFHO2lCQUNqQixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2QsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDZCxjQUFjLEVBQUUsRUFBRTtpQkFDckIsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLEVBQUUsRUFBRSxzQkFBc0I7aUJBQzdCLENBQUMsQ0FBQztZQUNILE9BQU8sV0FBVztRQUN0QixDQUFDLENBQUMsRUFBRTtJQUNSLENBQUM7O0FBdklMLDJCQTRJQztBQXZGVSxxQkFBWSxHQUFpQjtJQUNoQyxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxLQUFLO0lBQ2YsV0FBVyxFQUFFLElBQUk7SUFDakIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsSUFBSSxFQUFFLEtBQUs7SUFDWCxRQUFRLEVBQUUsS0FBSztJQUNmLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLEVBQUU7SUFDVCxLQUFLLEVBQUUsSUFBSTtJQUNYLFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixFQUFFLEVBQUUsSUFBSTtJQUNSLFFBQVEsRUFBRSxjQUFJO0lBQ2QsT0FBTyxFQUFFLGNBQUk7SUFDYixNQUFNLEVBQUUsY0FBSTtJQUNaLFNBQVMsRUFBRSxjQUFJO0NBQ2xCO0FBa0VNLGFBQUksR0FBRztJQUNWLElBQUksRUFBRSw0Q0FBNEM7Q0FDckQ7QUFFTCxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ3RLZixpSEFBdUQ7QUFDdkQsc0ZBQXFDO0FBbUJyQyxJQUFJLGdCQUFnQjtBQUNwQixNQUFxQixTQUFVLFNBQVEsS0FBSyxDQUFDLGFBQThDO0lBRXZGLFlBQVksS0FBcUI7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUVaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXBDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO1NBQzNCO0lBQ0wsQ0FBQztJQWtCRCxJQUFJLE9BQU87UUFDUCxPQUFPLGdCQUFnQixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDM0MsdUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQyxDQUFDLE9BQU87U0FDdEYsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3RDLElBQUcsSUFBSSxDQUFDLE1BQU07WUFBQyxPQUFNLENBQUMsdURBQXVEO1FBQzdFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFLO1NBQ1IsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FDQSxpQkFBaUIsQ0FDcEIsR0FBRyxJQUFJLENBQUMsT0FBTztRQUVoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixPQUFPLG9CQUFDLGlCQUFpQixvQkFBSyxLQUFLLElBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJO0lBQ3pJLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDakMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtJQUN0QixDQUFDO0lBRUQsTUFBTSxLQUFLLFdBQVc7UUFDbEIsT0FBTyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEVBQUU7WUFDaEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNkLElBQUksRUFBRSx1QkFBdUI7aUJBQ2hDLENBQUMsRUFBRSxDQUFDO29CQUNELElBQUksRUFBRSxTQUFTO2lCQUNsQixFQUFFO29CQUNDLElBQUksRUFBRSxNQUFNO2lCQUNmLENBQUMsRUFBRSxDQUFDO29CQUNELFFBQVEsRUFBRSxLQUFLO2lCQUNsQixFQUFFO29CQUNDLFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDLEVBQUUsQ0FBQztvQkFDRCxXQUFXLEVBQUUsRUFBRTtpQkFDbEIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsS0FBSyxFQUFFLEVBQUU7aUJBQ1osQ0FBQyxFQUFFLENBQUM7b0JBQ0QsS0FBSyxFQUFFLElBQUk7aUJBQ2QsRUFBRTtvQkFDQyxLQUFLLEVBQUUsZUFBZTtpQkFDekIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsU0FBUyxFQUFFLEdBQUc7aUJBQ2pCLENBQUMsRUFBRSxDQUFDO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNoQixDQUFDLEVBQUUsQ0FBQztvQkFDRCxjQUFjLEVBQUUsRUFBRTtpQkFDckIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsRUFBRSxFQUFFLHVCQUF1QjtpQkFDOUIsQ0FBQyxFQUFFLENBQUM7b0JBQ0QsUUFBUSxFQUFFLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxFQUFFLEdBQUUsQ0FBQztpQkFDaEQsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxXQUFXO1FBQ3RCLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQzs7QUE3R0wsNEJBa0hDO0FBcEdVLHNCQUFZLEdBQWtCO0lBQ2pDLElBQUksRUFBRSxFQUFFO0lBQ1IsSUFBSSxFQUFFLFNBQVM7SUFDZixRQUFRLEVBQUUsS0FBSztJQUNmLFdBQVcsRUFBRSxFQUFFO0lBQ2YsS0FBSyxFQUFFLEVBQUU7SUFDVCxLQUFLLEVBQUUsSUFBSTtJQUNYLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEVBQUU7SUFDYixjQUFjLEVBQUUsRUFBRTtJQUNsQixFQUFFLEVBQUUsSUFBSTtJQUNSLFFBQVEsRUFBRSxjQUFJO0lBQ2QsT0FBTyxFQUFFLGNBQUk7SUFDYixNQUFNLEVBQUUsY0FBSTtDQUNmO0FBbUZNLGNBQUksR0FBRztJQUNWLElBQUksRUFBRSw2Q0FBNkM7Q0FDdEQ7QUFFTCxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SWYsaUhBQXVEO0FBQ3ZELCtGQUFtRDtBQUNuRCxzRkFBcUM7QUFFckMsSUFBSSxhQUFhO0FBQ0oscUJBQWEsR0FBVTtJQUNoQyxJQUFJLEVBQUUsRUFBRTtJQUNSLEVBQUUsRUFBRSxZQUFZO0lBQ2hCLE9BQU8sRUFBRSxjQUFJO0lBQ2IsVUFBVSxFQUFFLElBQUk7SUFDaEIsSUFBSSxFQUFFLFNBQVM7Q0FDbEI7QUFDRCxNQUFxQixNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQWlCO0lBSXZELElBQUksT0FBTztRQUNQLE9BQU8sYUFBYSxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ3JDLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07UUFDRixNQUFNLENBQ0YsYUFBYSxDQUNoQixHQUFHLElBQUksQ0FBQyxPQUFPO1FBRWhCLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUcsSUFBRyxDQUFDLFNBQVMsRUFBQztZQUNWLGlCQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2IsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxnQkFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDL0IsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxJQUFJO1NBQ2Q7UUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZ0NBQVEsU0FBUyxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDMUYsaUJBQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLGdCQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUMvQixDQUFDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUMxQyxPQUFPLDZCQUFLLFNBQVMsRUFBRSxTQUFTO1lBQzVCLDZCQUFLLFNBQVMsRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUM1RSxpQkFBTyxDQUFDLEdBQUcsRUFBRTtvQkFDYixnQkFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQy9CLENBQUMsR0FBSTtZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNmLE1BQU0sQ0FDTDtJQUNWLENBQUM7O0FBckNMLHlCQXNDQztBQXJDVSxrQkFBVyxHQUFHLGlCQUFpQjtBQUMvQixtQkFBWSxHQUFVLHFCQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDZDlDLDRGQUE2QjtBQUU3Qiw2REFBcUM7QUFFeEIsY0FBTSxHQUFHLElBQUkscUJBQVksRUFBRTtBQUV4QyxNQUFxQixPQUFRLFNBQVEsS0FBSyxDQUFDLFNBQTJCO0lBR2xFLFlBQVksS0FBbUM7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUVaLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUM7SUFFRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUN0QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsY0FBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLGNBQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUVELE1BQU07UUFDRixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBQyxPQUFPLElBQUk7UUFDOUIsTUFBTSxNQUFNLEdBQUcsZUFBTyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLG9CQUFDLGdCQUFNLG9CQUFLLE1BQU0sRUFBVztJQUN4QyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxlQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDN0IsQ0FBQzs7QUE3QkwsMEJBOEJDO0FBN0JVLG1CQUFXLEdBQUcsa0JBQWtCO0FBQ2hDLG9CQUFZLEdBQUcsRUFBRTtBQThCZixlQUFPLEdBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FDdENsQyw2R0FBbUQ7QUFDbkQsMEdBQWdEO0FBQ2hELGtGQUFpQztBQUNqQyxxRkFBbUM7QUFDbkMsMEdBQWlEO0FBQ2pELDRGQUE4QztBQUM5Qyx5SEFBMkQ7QUFDM0QsZ0hBQXFEO0FBQ3JELGtGQUFpQztBQUNqQyw4RkFBeUM7QUFDekMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUVoQixNQUFNLFlBQVksR0FBRztJQUNqQixhQUFhLEVBQUUsdUJBQWE7SUFDNUIsVUFBVSxFQUFFLG9CQUFVO0lBQ3RCLElBQUksRUFBRSxjQUFJO0lBQ1YsS0FBSyxFQUFFLGVBQUs7SUFDWixZQUFZLEVBQUUsc0JBQVk7SUFDMUIsQ0FBQyxFQUFFO1FBQ0MsaUJBQWlCLEVBQUUsMkJBQWlCO1FBQ3BDLGNBQWMsRUFBRSx3QkFBYztRQUM5QixJQUFJLEVBQUUsY0FBSTtRQUNWLFFBQVEsRUFBRSxrQkFBUTtLQUNyQjtDQUNKO0FBZ0JELGtCQUFlLFlBQVk7QUFFM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2pELG1IQUF5RztBQUN6Ryw2RUFBNEI7QUFDNUIsMEVBQTBCO0FBQzFCLHdHQUE4QztBQUM5Qyw2REFBc0M7QUFDdEMsZ0hBQTZEO0FBQzdELGlIQUFvRDtBQUNwRCwwRUFBMEI7QUFDMUIscUdBQW9FO0FBRXBFLElBQUksV0FBVztBQUNmLGtCQUFlLElBQUksTUFBTSxZQUFZO0lBQ2pDLFVBQVUsQ0FBQyxJQUFlO1FBQ3RCLElBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsZUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlJLElBQUksT0FBTyxHQUFHLHdCQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsc0JBQWEsRUFBRSxJQUFJLENBQUMsQ0FBVztRQUM5RSxPQUFPLENBQUMsRUFBRSxHQUFHLGNBQUksRUFBRTtRQUNuQixpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsZ0JBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxPQUFPLE1BQU07SUFDakIsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8saUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0IsQ0FBQyxJQUFxQjtRQUNsQyxNQUFNLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSwyQkFBaUIsQ0FBQyxJQUFJLEVBQUU7WUFDN0UsT0FBTztZQUNQLFNBQVM7WUFDVCxTQUFTO1lBQ1QsUUFBUTtTQUNYLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFJO1FBQzNDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxjQUFJO1FBQ3pDLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFJO1FBQzNDLE9BQU8sWUFBWTtJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVc7UUFDbkIsV0FBVyxHQUFHLFdBQVcsSUFBSSx1QkFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEYsSUFBRyxDQUFDLFdBQVc7WUFBQyxNQUFNLElBQUksa0NBQWtCLENBQUMsaUNBQWlDLENBQUM7UUFDL0UsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDOUMsT0FBTyxPQUFPO0lBQ2xCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVztRQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUN2QyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2QsT0FBTyxPQUFPO0lBQ2xCLENBQUM7Q0FDSjtBQWVELE1BQU0sWUFBWSxHQUFHO0lBQ2pCLElBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQztRQUNuQyxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2QjtLQUNKO0lBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDO1FBQ25DLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztTQUM3QjthQUFJO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1NBQzlCO0tBQ0o7SUFDRCxJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNqQztBQUNMLENBQUM7QUFFRCxxRUFBcUU7QUFDckUsTUFBYSxNQUFPLFNBQVEscUJBQVk7SUFDcEMsWUFBWSxJQUFJO1FBQ1osS0FBSyxFQUFFO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBRWhCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNwQjtRQUVELElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLGdCQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQ3BCLGdCQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7UUFDL0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQWNELEVBQUUsQ0FBQyxLQUFhLEVBQUUsUUFBaUM7UUFDL0MsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQWNELElBQUksQ0FBQyxLQUFhLEVBQUUsUUFBaUM7UUFDakQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUtELEdBQUcsQ0FBQyxLQUFhLEVBQUUsUUFBaUM7UUFDaEQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDckMsQ0FBQztJQVFELElBQUksT0FBTztRQUNQLE9BQU8sQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8saUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtJQUN6QixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDckIsZ0JBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtJQUN6QixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDckIsZ0JBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtJQUMvQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsVUFBaUI7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUNqQyxnQkFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO0lBQzVCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUMzQixnQkFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU07UUFDRixJQUFHLElBQUksQ0FBQyxPQUFPO1lBQUMsT0FBTTtRQUN0QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM3QixnQkFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckMsQ0FBQztDQUVKO0FBbkhELHdCQW1IQzs7Ozs7Ozs7Ozs7Ozs7O0FDOU1ELDJHQUFpRDtBQUNqRCw2RUFBMkI7QUFFM0IsMEVBQXlCO0FBQ3pCLHVIQUFzRDtBQUV0RCxrQkFBZSxJQUFJLE1BQU0sZUFBZTtJQUNwQyxnQkFBYyxDQUFDO0lBRWYsY0FBYyxDQUFDLFFBQXNCO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsY0FBSSxFQUFFLEVBQUMsRUFBRSxLQUFLLENBQUM7UUFDM0QsT0FBTyxlQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxRQUFzQjtRQUN4QyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUVwQixJQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNuRCxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3RDLElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN4RTtZQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsY0FBSSxFQUFFO1lBQ3ZCLElBQUksU0FBUyxHQUFHLGVBQUssQ0FBQyxjQUFjLENBQUMsb0JBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hFLElBQUcsQ0FBQyxTQUFTLEVBQUM7Z0JBQ1YsSUFBSSxPQUFPLEdBQUcsSUFBSSxtQkFBUyxDQUFDO29CQUN4QixLQUFLLEVBQUUseUNBQXlDLElBQUksQ0FBQyxTQUFTLDhCQUE4QjtvQkFDNUYsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLHlDQUF5QyxJQUFJLENBQUMsU0FBUyw4QkFBOEI7aUJBQy9GLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLE9BQU07YUFDVDtZQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUM7UUFDRixPQUFPLEtBQUs7SUFDaEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q0QsU0FBd0IsUUFBUSxDQUFDLENBQUM7SUFDOUIsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBQ25CLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTtRQUNwQixFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsSUFBSSxLQUFLLEdBQUcsVUFBUyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtTQUFNLElBQUksQ0FBQyxZQUFZLE1BQU0sRUFBRTtRQUM1QixFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUM3QixFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsS0FBSyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QjtLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBakJELDJCQWlCQztBQU1ELE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDdEIxQixrRkFBc0M7QUFDdEMsMkdBQWdEO0FBRWhELGtCQUFlLElBQUksTUFBTSxLQUFLO0lBQzFCLGdCQUFjLENBQUM7SUFFZixrQkFBa0IsQ0FBQyxZQUEwQjtRQUN6QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFDdEMsT0FBTyxPQUFPO0lBQ2xCLENBQUM7SUFFRCxJQUFJLFdBQVcsS0FBRyxPQUFPLHlCQUFlLEdBQUM7SUFFekMsY0FBYyxDQUFDLEdBQU8sRUFBRSxJQUFZO1FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlCLEtBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFDO1lBQ3BCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUNuRDtRQUNELE9BQU8sR0FBRztJQUNkLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzFCLE9BQU8sR0FBRyxHQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO0lBQy9DLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDN0IsSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLENBQUM7UUFDeEQsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFnQjtRQUNyQixJQUFHLENBQUMsU0FBUztZQUFDLE9BQU8sU0FBUztRQUM5QixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUMzRSxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVcsRUFBRSxhQUFvQixDQUFDO1FBQ3hDLDhIQUE4SDtRQUM5SCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUUsSUFBRyxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDbkYsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVsQyxZQUFZO1FBQ1osSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzFCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLFNBQVMsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzthQUNoRDtZQUNELE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUM5QjtRQUVELFlBQVk7UUFDWixNQUFNLFlBQVksR0FBRyxLQUFLLEdBQUU7WUFDeEIsbUVBQW1FO1lBQ25FLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDL0IsT0FBTyxPQUFPLFdBQVcsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO2dCQUN4QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNwQztZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUNGLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFpQixFQUFFLFNBQWdCO1FBQ3hDLElBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTO1lBQUMsT0FBTyxLQUFLO1FBQ3pDLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hDLEtBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDckQsSUFBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUFDLE9BQU8sS0FBSztTQUNsRDtRQUNELE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBTztRQUNsQixJQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDekcsSUFBRyxHQUFHLEtBQUssSUFBSTtZQUFDLE9BQU8sTUFBTTtRQUM3QixJQUFHLE9BQU8sR0FBRyxLQUFLLFVBQVU7WUFBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDL0MsSUFBRyxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBRTdDLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQztZQUNsQixJQUFHLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBQUMsT0FBTyxJQUFJO1lBQzFCLE9BQU8sVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztTQUM3RTthQUFJO1lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDN0IsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUMsT0FBTyxJQUFJO1lBQ2hDLE9BQU8sVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLFFBQVEsR0FBRyxHQUFHO2dCQUNsQixJQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVE7b0JBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUMsR0FBRztxQkFDaEQ7b0JBQ0EsSUFBRyxPQUFPLEdBQUcsS0FBSyxRQUFRO3dCQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUN4Qzt3QkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDaEIsSUFBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7NEJBQ3ZCLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzt5QkFDakM7NkJBQUssSUFBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDOzRCQUM1QixHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7eUJBQ2pDO3FCQUNKO2lCQUNKO2dCQUNELE9BQU8sR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUMxRCxDQUFDLENBQUMsS0FBSztTQUNWO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0dELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO0FBRWxDLGtCQUFlLElBQUksTUFBTSxhQUFhO0lBQ2xDLGdCQUFjLENBQUM7SUFFZixHQUFHLENBQUMsRUFBVTtRQUNWLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksQ0FBQyxNQUE0QjtRQUM3QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsMkJBQTJCLENBQUM7U0FDcEQ7UUFDRCxPQUFPLE1BQU07SUFDakIsQ0FBQztJQUNELHNCQUFzQixDQUFDLEtBQXVCO1FBQzFDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3pCLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsRUFBQztnQkFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSTtnQkFDcEIsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUM7b0JBQ2xCLElBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7d0JBQUMsU0FBUyxHQUFHLEtBQUs7aUJBQ2hGO2dCQUNELElBQUcsU0FBUztvQkFBQyxPQUFPLElBQUk7YUFDM0I7WUFDRCxLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztnQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO29CQUFDLE9BQU8sS0FBSzthQUNuRTtZQUNELE9BQU8sSUFBSTtRQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCxNQUFNLENBQUMsTUFBNEI7UUFDL0IsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsd0JBQXdCLENBQUMsS0FBdUI7UUFDNUMsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekIsSUFBRyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFDO2dCQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJO2dCQUNwQixLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztvQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt3QkFBQyxTQUFTLEdBQUcsS0FBSztpQkFDaEY7Z0JBQ0QsSUFBRyxTQUFTO29CQUFDLE9BQU8sSUFBSTthQUMzQjtZQUNELEtBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFDO2dCQUNsQixJQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7b0JBQUMsT0FBTyxLQUFLO2FBQ25FO1lBQ0QsT0FBTyxJQUFJO1FBQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKO0FBRUQsTUFBYSxrQkFBbUIsU0FBUSxLQUFLO0lBQ3pDLFlBQVksVUFBaUIsRUFBRTtRQUMzQixPQUFPLElBQUksNk9BQTZPO1FBQ3hQLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQjtJQUNwQyxDQUFDO0NBQ0o7QUFORCxnREFNQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEREOzs7R0FHRztBQUNILFNBQXdCLGNBQWMsQ0FBVSxHQUFPO0lBQ25ELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQztBQUNaLENBQUM7QUFORCxpQ0FNQzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQsU0FBd0IsaUJBQWlCLENBQVksR0FBTyxFQUFFLEtBQW1CO0lBQzdFLElBQUksTUFBTSxHQUFHLEVBQUU7SUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFjLENBQUM7WUFBQyxPQUFNO1FBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGLE9BQU8sTUFBTTtBQUNqQixDQUFDO0FBVEQsb0NBU0M7Ozs7Ozs7Ozs7Ozs7OztBQ1RELFNBQXdCLElBQUksS0FBRyxDQUFDO0FBQWhDLHVCQUFnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoQyw2RUFBMkI7QUFDM0IsbUhBQWdFO0FBRWhFLFNBQWdCLEtBQUs7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssa0JBQWtCLENBQUM7U0FDeEUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNoQixNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsRUFBRTtZQUMzQixPQUFPLFNBQVMsTUFBTTtnQkFDbEIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUM7Z0JBQ3JELE1BQU0sV0FBVyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUMzRCxJQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUVqRCxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGlCQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDakUsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVztnQkFFMUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcseUJBQXlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBRTFMLE9BQU8sV0FBVztZQUN0QixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0seUJBQXlCLEdBQUcsUUFBUSxDQUFDLEVBQUU7WUFDekMsT0FBTyxTQUFTLG9CQUFvQjtnQkFDaEMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUM7Z0JBRXJELE1BQU0sU0FBUyxHQUFHLGlCQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3BDLElBQUcsQ0FBQyxTQUFTO29CQUFDLE9BQU8sV0FBVztnQkFDaEMsSUFBRyxDQUFDLGVBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFDO29CQUNsRSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxHQUFHLEdBQUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2lCQUMxRTtnQkFFRCxPQUFPLFdBQVc7WUFDdEIsQ0FBQztRQUNMLENBQUM7UUFDRCxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pFLENBQUMsS0FBSztZQUNGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFDLGVBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hFLElBQUcsQ0FBQyxJQUFJO2dCQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUM7WUFDcEQsTUFBTSxJQUFJLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQVE7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3RCLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsaUJBQWlCO0lBRWpCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DLENBQUM7QUFqREQsc0JBaURDO0FBRUQsU0FBUyxTQUFTLENBQUMsTUFBNEI7SUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7YUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDN0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOURELDZEQUFpQztBQUNqQyw2REFBaUM7QUFHakMsSUFBSSxJQUFJLEdBQTJDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0QsT0FBTyxNQUFNLEVBQUU7QUFDbkIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0FBRTVDLGtCQUFlLElBQUk7Ozs7Ozs7Ozs7OztBQ1JuQixtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBiYWl0IHR5cGVzY3JpcHQgaW50byB0aGlua2luZyB0aGlzIGlzIG5vdCByZWFjdERPTSBzbyBubyBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG5leHBvcnQgPSB3aW5kb3dbXCJSZWFjXCIrXCJ0RE9NXCJdIGFzIHR5cGVvZiBpbXBvcnQoXCJyZWFjdC1kb21cIikiLCJpbXBvcnQgRGlzY29yZEJ1dHRvbiBmcm9tIFwiLi9pbnB1dHMvQnV0dG9uXCJcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi9pbnB1dHMvU3dpdGNoXCJcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4vaW5wdXRzL1JhZGlvR3JvdXBcIlxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vaW5wdXRzL1RleHRBcmVhXCJcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9pbnB1dHMvVGV4dElucHV0XCJcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL2lucHV0cy9Ecm9wZG93blwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1RpdGxlXCJcclxuaW1wb3J0IFNldHRpbmdzVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9TZXR0aW5nc1RpdGxlXCJcclxuaW1wb3J0IFRhYnMsIHsgVGFiIH0gZnJvbSBcIi4vZ2VuZXJhbC9UYWJzXCJcclxuaW1wb3J0IFNldHRpbmdTdWJUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZVwiXHJcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4vZ2VuZXJhbC9Db2RlQmxvY2tcIlxyXG5pbXBvcnQgY2xvbmVOdWxsUHJvdG8gZnJvbSBcIi4uL21vZHVsZXMvY2xvbmVOdWxsUHJvdG9cIlxyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi9nZW5lcmFsL1Rvb2x0aXBcIlxyXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4vaW5wdXRzL0NvbG9yUGlja2VyXCJcclxuaW1wb3J0IEFsZXJ0Qm94IGZyb20gXCIuL2dlbmVyYWwvQWxlcnRCb3hcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xvbmVOdWxsUHJvdG8oe1xyXG4gICAgaW5wdXRzOiBjbG9uZU51bGxQcm90byh7XHJcbiAgICAgICAgQnV0dG9uOiBEaXNjb3JkQnV0dG9uLFxyXG4gICAgICAgIFN3aXRjaDogU3dpdGNoLFxyXG4gICAgICAgIENob2ljZXM6IFJhZGlvR3JvdXAsXHJcbiAgICAgICAgUmFkaW9Hcm91cDogUmFkaW9Hcm91cCxcclxuICAgICAgICBUZXh0QXJlYTogVGV4dEFyZWEsXHJcbiAgICAgICAgVGV4dElucHV0OiBUZXh0SW5wdXQsXHJcbiAgICAgICAgRHJvcGRvd246IERyb3Bkb3duLFxyXG4gICAgICAgIENvbG9yUGlja2VyOiBDb2xvclBpY2tlclxyXG4gICAgfSksXHJcbiAgICBnZW5lcmFsOiBjbG9uZU51bGxQcm90byh7XHJcbiAgICAgICAgVGl0bGU6IFRpdGxlLFxyXG4gICAgICAgIFNldHRpbmdzVGl0bGU6IFNldHRpbmdzVGl0bGUsXHJcbiAgICAgICAgU2V0dGluZ1N1YlRpdGxlOiBTZXR0aW5nU3ViVGl0bGUsXHJcbiAgICAgICAgVGFiczogVGFicyxcclxuICAgICAgICBDb2RlQmxvY2s6IENvZGVCbG9jayxcclxuICAgICAgICBUb29sdGlwOiBUb29sdGlwLFxyXG4gICAgICAgIEFsZXJ0Qm94OiBBbGVydEJveFxyXG4gICAgfSlcclxufSkiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgQWxlcnRCb3hQcm9wcyA9IHtcclxuICAgIHR5cGU6IFwid2FyblwifFwiaW5mb1wifFwiZGFuZ2VyXCJ8XCJlcnJvclwifFwic3VjY2Vzc1wiLFxyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZXxzdHJpbmdcclxufVxyXG5cclxubGV0IEFsZXJ0Qm94TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBbGVydEJveFByb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkFsZXJ0Qm94UHJvcHMgPSB7XHJcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBBbGVydEJveE1vZHVsZXMgfHwgKEFsZXJ0Qm94TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJNYXJrZG93blwiICYmIGUuZGVmYXVsdC5kZWZhdWx0UHJvcHMucGFyc2VyKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICAgIE1hcmtkb3duXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgd3JhcFxyXG4gICAgICAgIGxldCBjaGlsZHJlblxyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgd3JhcCA9IE1hcmtkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9LCBNYXJrZG93bi5kZWZhdWx0UHJvcHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gd3JhcC5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3cmFwID0gTWFya2Rvd24ucHJvdG90eXBlLnJlbmRlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sIE1hcmtkb3duLmRlZmF1bHRQcm9wcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXAucHJvcHMuY2hpbGRyZW4gPSA8ZGl2IGNsYXNzTmFtZT17XCJsYy1hbGVydC1ib3ggbGMtYWxlcnQtYm94LVwiK3RoaXMucHJvcHMudHlwZX0+XHJcbiAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cImxjLWJsb2NrcXVvdGVcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHJldHVybiB3cmFwXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIioqKkRpc2NvcmQncyoqKiAqKk1hcmtkb3duKiogX2lzXyBbc3VwcG9ydGVkXShodHRwczovL2dvb2dsZS5jb20pIG9yIHlvdSBjYW4ganVzdCBpbnNlcnQgeW91ciBvd24gcmVhY3QgY2hpbGRzLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGluZm86IFwiWW91IGNhbiBpbnNlcnQgbWFya2Rvd24gKGFzIHN0cmluZykgb3Igbm9ybWFsIHJlYWN0IGNoaWxkc1wiLFxyXG4gICAgICAgIHdhcm46IFwiQWxsIHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGFzIG1hcmtkb3duLiBJZiB5b3Ugd2FudCByYXcgc3RyaW5nLCBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0cmluZyBpbnNpZGUuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuXHJcbnR5cGUgQ29kZUJsb2NrUHJvcHMgPSB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgQ29kZUJsb2NrTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29kZUJsb2NrUHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6Q29kZUJsb2NrUHJvcHMgPSB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwicGxhaW50ZXh0XCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBDb2RlQmxvY2tNb2R1bGVzIHx8IChDb2RlQmxvY2tNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1hcmt1cCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWVzc2FnZUNvbnRlbnQpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLnNjcm9sbGJhckdob3N0SGFpcmxpbmUpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmhpZ2hsaWdodCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWFyZ2luQm90dG9tOClcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1lc3NhZ2VNb2R1bGUxLFxyXG4gICAgICAgICAgICBtZXNzYWdlTW9kdWxlMixcclxuICAgICAgICAgICAgc2Nyb2xsYmFyTW9kdWxlMSxcclxuICAgICAgICAgICAgaGlnaHRsaWdodEpTLFxyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGUxXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5wcm9wcy5sYW5ndWFnZSA9PT0gXCJwbGFpbnRleHRcIiA/IDxjb2RlIGNsYXNzTmFtZT17YCR7c2Nyb2xsYmFyTW9kdWxlMS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lfSBobGpzYH0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgPC9jb2RlPiA6IDxjb2RlIGNsYXNzTmFtZT17YCR7c2Nyb2xsYmFyTW9kdWxlMS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lfSBobGpzYH0gXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBoaWdodGxpZ2h0SlMuaGlnaGxpZ2h0KHRoaXMucHJvcHMubGFuZ3VhZ2UsIHRoaXMucHJvcHMuY29udGVudCkudmFsdWV9fSAvPlxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Ake21lc3NhZ2VNb2R1bGUxLm1hcmt1cH0gJHttZXNzYWdlTW9kdWxlMi5tZXNzYWdlQ29udGVudH1gfT5cclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtjb2RlfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21hcmdpbk1vZHVsZTEubWFyZ2luQm90dG9tOH0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImNvbnNvbGUubG9nKFxcXCJFeGVtcGxlIGNvZGVcXFwiKVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImpzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwicGxhaW50ZXh0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5Db2RlQmxvY2sucHJvdG90eXBlLm1vZHVsZXNbM10ubGlzdExhbmd1YWdlcygpLmZpbHRlcihlID0+IGUgIT09IFwianNcIikubWFwKGUgPT4gKHtsYW5ndWFnZTogZX0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFNldHRpbmdTdWJUaXRsZVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1N1YlRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNldHRpbmdTdWJUaXRsZVByb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlNldHRpbmdTdWJUaXRsZVByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUubWFyZ2luVG9wNjAgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiaDVcIl0pLFxyXG4gICAgICAgICAgICB3aW5kb3cuTGlnaHRjb3JkLkFwaS5XZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wic2l6ZTE0XCJdKSxcclxuICAgICAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNvbG9yU3RhbmRhcmRcIl0pXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGUsXHJcbiAgICAgICAgICAgIHRpdGxlTW9kdWxlLFxyXG4gICAgICAgICAgICBzaXplTW9kdWxlLFxyXG4gICAgICAgICAgICBjb2xvck1vZHVsZVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7Y29sb3JNb2R1bGUuY29sb3JTdGFuZGFyZH0gJHtzaXplTW9kdWxlLnNpemUxNH0gJHt0aXRsZU1vZHVsZS5oNX0gJHttYXJnaW5Nb2R1bGUubWFyZ2luQm90dG9tNH1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSA9KyBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImg1XCIsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgU2V0dGluZ3NUaXRsZVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nc1RpdGxlUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBTZXR0aW5nc1RpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5tYXJnaW5Ub3A2MCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1hcmdpbk1vZHVsZVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7bWFyZ2luTW9kdWxlLm1hcmdpblRvcDYwfSAke21hcmdpbk1vZHVsZS5tYXJnaW5Cb3R0b20yMH1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSA9KyBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge2NsYXNzTmFtZX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6U2V0dGluZ3NUaXRsZVByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBbXCJcIl0sXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IHsgUmVhY3ROb2RlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcblxyXG50eXBlIFRhYnNQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgdGFiczoge2xhYmVsOiBzdHJpbmcsIGlkOiBzdHJpbmd9W10sXHJcbiAgICBhY3RpdmU/OiBzdHJpbmdcclxuICAgIG9uQ2hhbmdlPzogKHRhYjogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFic1Byb3BzLCB7XHJcbiAgICBhY3RpdmU6IHN0cmluZ1xyXG59PiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRhYnNQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICB0YWJzOiBbe2xhYmVsOiBcIk5vIHRhYnMgd2FzIHBhc3NlZCB0byA8VGFicz4uXCIsIGlkOiBcIm5vbmVcIn1dLFxyXG4gICAgICAgIGFjdGl2ZTogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICBzdHlsZToge31cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGFic1Byb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlIHx8IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGFic0VsZW1lbnRzOlRhYltdID0gW11cclxuICAgIFxyXG4gICAgZ2V0IHRhYnMoKTpUYWJzW1wicHJvcHNcIl1bXCJ0YWJzXCJde1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRhYnMgfHwgW11cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWIodGFiOnN0cmluZyl7XHJcbiAgICAgICAgaWYodGFiID09PSB0aGlzLnN0YXRlLmFjdGl2ZSlyZXR1cm5cclxuICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2hhbmdlKXRoaXMucHJvcHMub25DaGFuZ2UodGFiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRhYlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50YWJzRWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QWN0aXZlKHRhYiA9PT0gZS5wcm9wcy5pZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYldyYXBwZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGMtdGFibmF2XCIgc3R5bGU9e3tmbGV4OiBcIjAgMSBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnRhYnMubWFwKHRhYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiLCB7VGFiQ29udGFpbmVyOiB0aGlzLCB0aXRsZTogdGFiLmxhYmVsLCBpZDogdGFiLmlkLCBrZXk6IGJ0b2EodGFiLmxhYmVsK1wiOlwiK3RhYi5pZCl9KVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH0gICBcclxuXHJcbiAgICBpc0FjdGl2ZSh0YWIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gdGFiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAoPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWJhY2tncm91bmQtcHJpbWFyeSlcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjMwcHggMzBweFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJsYy10YWItYm94LXNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlByZXZpZXcgdGFiczwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWN0aXZlIHRhYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVuYWN0aXZlIHRhYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHRhYklkKSA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtcclxuICAgIFRhYkNvbnRhaW5lcjogVGFicywgXHJcbiAgICB0aXRsZTogc3RyaW5nLCBcclxuICAgIGlkOiBzdHJpbmdcclxufSwge1xyXG4gICAgYWN0aXZlOiBib29sZWFuXHJcbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlOiBwcm9wcy5UYWJDb250YWluZXIuaXNBY3RpdmUocHJvcHMuaWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLlRhYkNvbnRhaW5lci50YWJzRWxlbWVudHMucHVzaCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShpc0FjdGl2ZTpib29sZWFuKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlOiAhIWlzQWN0aXZlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYGxjLW5hdkl0ZW1gXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBsYy1uYXZJdGVtQWN0aXZlYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBsYy1uYXZJdGVtSW5hY3RpdmVgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5UYWJDb250YWluZXIuY2hhbmdlVGFiKHRoaXMucHJvcHMuaWQpXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBUaXRsZVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFRpdGxlTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUaXRsZVByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGl0bGVQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLmNvbG9yU3RhbmRhcmQgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5zaXplMzIgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5oMiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIGNvbG9yTW9kdWxlLFxyXG4gICAgICAgICAgICBzaXplTW9kdWxlLFxyXG4gICAgICAgICAgICB0aXRsZU1vZHVsZVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7Y29sb3JNb2R1bGUuY29sb3JTdGFuZGFyZH0gJHtzaXplTW9kdWxlLnNpemUxNH0gJHt0aXRsZU1vZHVsZS5oMn0gJHt0aXRsZU1vZHVsZS5kZWZhdWx0Q29sb3J9ICR7dGl0bGVNb2R1bGUuZGVmYXVsdE1hcmdpbmgyfWBcclxuICAgICAgICBpZihwcm9wcy5jbGFzc05hbWUpY2xhc3NOYW1lICs9IFwiIFwiK3Byb3BzLmNsYXNzTmFtZVxyXG5cclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUaXRsZVByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgZXhjbHVkZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL21vZHVsZXMvZXhjbHVkZVByb3BlcnRpZXNcIlxyXG5cclxudHlwZSBUb29sdGlwRGF0YSA9IHtcclxuICAgIG9uQ2xpY2soKTp2b2lkXHJcbiAgICBvbk1vdXNlRW50ZXIoKTp2b2lkXHJcbiAgICBvbk1vdXNlTGVhdmUoKTp2b2lkXHJcbiAgICBvbkNvbnRleHRNZW51KCk6dm9pZFxyXG4gICAgXCJhcmlhLWxhYmVsXCI6IHN0cmluZ1xyXG59XHJcbnR5cGUgVG9vbHRpcFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46UmVhY3ROb2RlLFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgcG9zaXRpb24/OiBUb29sdGlwUG9zaXRpb24sXHJcbiAgICBjb2xvcj86IFRvb2x0aXBDb2xvclxyXG59XHJcblxyXG5sZXQgVG9vbHRpcE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUb29sdGlwUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUb29sdGlwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRvb2x0aXBNb2R1bGVzIHx8IChUb29sdGlwTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUb29sdGlwXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUb29sdGlwXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBleGNsdWRlUHJvcGVydGllcyh0aGlzLnByb3BzLCBbXCJjaGlsZHJlblwiXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcC5kZWZhdWx0LCBwcm9wcywgKGRhdGE6VG9vbHRpcERhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VG9vbHRpcFByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgIHRleHQ6IFwiTm8gdGV4dCB3YXMgcGFzc2VkIHRvIFRvb2x0aXBcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICBjb2xvcjogXCJicmFuZFwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KHdpbmRvdy5MaWdodGNvcmQuQXBpLkNvbXBvbmVudHMuaW5wdXRzLkJ1dHRvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29rOiBcImdob3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiSG92ZXIgdGhpcyBidXR0b24gdG8gc2VlIHRoZSB0b29sdGlwXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXhhbXBsZSBUb29sdGlwIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW11cclxuICAgICAgICAgICAgVG9vbHRpcC5Db2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGNvbG9ycylcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgIFRvb2x0aXAuUG9zaXRpb25zLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2gocG9zaXRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFBvc2l0aW9uczpUb29sdGlwUG9zaXRpb25bXSA9IFtcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiXVxyXG4gICAgc3RhdGljIENvbG9yczpUb29sdGlwQ29sb3JbXSA9IFtcImJsYWNrXCIsIFwiZ3JleVwiLCBcImJyYW5kXCIsIFwiZ3JlZW5cIiwgXCJ5ZWxsb3dcIiwgXCJyZWRcIl1cclxufVxyXG5sZXQgQWxsUHJldmlld3NcclxuXHJcbmV4cG9ydCB0eXBlIFRvb2x0aXBQb3NpdGlvbiA9IFwidG9wXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiYm90dG9tXCJcclxuZXhwb3J0IHR5cGUgVG9vbHRpcENvbG9yID0gXCJibGFja1wiIHwgXCJncmV5XCIgfCBcImJyYW5kXCIgfCBcImdyZWVuXCIgfCBcInllbGxvd1wiIHwgXCJyZWRcIiIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmxldCBCdXR0b25Nb2R1bGVzXHJcblxyXG50eXBlIEJ1dHRvblByb3BzID0ge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICBvbkNsaWNrPzogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yLFxyXG4gICAgd3JhcHBlcj86IGJvb2xlYW4sXHJcbiAgICBsb29rPzogQnV0dG9uTG9vayxcclxuICAgIHNpemU/OiBCdXR0b25TaXplLFxyXG4gICAgaG92ZXJDb2xvcj86IEJ1dHRvbkhvdmVycyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxCdXR0b25Qcm9wcywge2hvdmVyOiBib29sZWFufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6QnV0dG9uUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENvbG9yczpCdXR0b25Db2xvcltdID0gW1wiYnJhbmRcIiwgXCJncmV5XCIsIFwicmVkXCIsIFwiZ3JlZW5cIiwgXCJ5ZWxsb3dcIiwgXCJwcmltYXJ5XCIsIFwibGlua1wiLCBcIndoaXRlXCIsIFwiYmxhY2tcIiwgXCJ0cmFuc3BhcmVudFwiXVxyXG4gICAgc3RhdGljIExvb2tzOkJ1dHRvbkxvb2tbXSA9IFtcImZpbGxlZFwiLCBcImludmVydGVkXCIsIFwib3V0bGluZWRcIiwgXCJnaG9zdFwiLCBcImxpbmtcIiwgXCJibGFua1wiXVxyXG4gICAgc3RhdGljIFNpemVzOkJ1dHRvblNpemVbXSA9IFtcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIiwgXCJ4bGFyZ2VcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJpY29uXCIsIFwibm9uZVwiXVxyXG4gICAgc3RhdGljIEhvdmVyQ29sb3JzOiBCdXR0b25Ib3ZlcnNbXSA9IFtcImRlZmF1bHRcIiwgLi4uQnV0dG9uLkNvbG9yc11cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpeyAvLyBjYWNoaW5nIG1vZHVsZXNcclxuICAgICAgICByZXR1cm4gQnV0dG9uTW9kdWxlcyB8fCAoQnV0dG9uTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIl9ob3Jpem9udGFsXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNvbG9yVHJhbnNwYXJlbnRcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiYnV0dG9uV3JhcHBlclwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJCdXR0b25Db2xvcnNcIl0pLFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgZmxleE1vZHVsZSxcclxuICAgICAgICAgICAgZXVoTW9kdWxlMSxcclxuICAgICAgICAgICAgYnV0dG9uTW9kdWxlLFxyXG4gICAgICAgICAgICBjb2xvcnNNb2R1bGUsXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHM6QnV0dG9uUHJvcHMgPSB7fVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICBpZihcImNvbG9yXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jb2xvciA9IHRoaXMucHJvcHMuY29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImNoaWxkcmVuXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcIm9uQ2xpY2tcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSB0aGlzLnByb3BzLm9uQ2xpY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcIndyYXBwZXJcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLndyYXBwZXIgPSAhIXRoaXMucHJvcHMud3JhcHBlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwibG9va1wiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMubG9vayA9IHRoaXMucHJvcHMubG9va1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwic2l6ZVwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwiaG92ZXJDb2xvclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IHRoaXMucHJvcHMuaG92ZXJDb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwiZGlzYWJsZWRcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Db2xvcnMuaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMubG9vayl7XHJcbiAgICAgICAgICAgIHByb3BzLmxvb2sgPSBwcm9wcy5sb29rLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uTG9va1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkxvb2tzLmluY2x1ZGVzKHByb3BzLmxvb2spKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSBCdXR0b24uTG9va3NbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5sb29rID0gQnV0dG9uLkxvb2tzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5zaXplKXtcclxuICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IHByb3BzLnNpemUudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25TaXplXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uU2l6ZXMuaW5jbHVkZXMocHJvcHMuc2l6ZSkpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IEJ1dHRvbi5TaXplc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLnNpemUgPSBCdXR0b24uU2l6ZXNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmhvdmVyQ29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvci50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkhvdmVyc1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkhvdmVyQ29sb3JzLmluY2x1ZGVzKHByb3BzLmhvdmVyQ29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSBCdXR0b24uSG92ZXJDb2xvcnNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gQnV0dG9uLkhvdmVyQ29sb3JzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uU2l6ZSA9IHByb3BzLnNpemUgPyBjb2xvcnNNb2R1bGUuQnV0dG9uU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXSB8fCBcIlwiIDogXCJcIlxyXG4gICAgICAgIGlmKGJ1dHRvblNpemUpYnV0dG9uU2l6ZSA9IFwiIFwiICsgYnV0dG9uU2l6ZVxyXG5cclxuICAgICAgICBsZXQgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IgPyBjb2xvcnNNb2R1bGUuQnV0dG9uSG92ZXJzW3Byb3BzLmhvdmVyQ29sb3IudG9VcHBlckNhc2UoKV0gfHwgXCJcIiA6IFwiXCJcclxuICAgICAgICBpZihob3ZlckNvbG9yKWhvdmVyQ29sb3IgPSBcIiBcIiArIGhvdmVyQ29sb3JcclxuXHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMud3JhcHBlciAhPT0gXCJib29sZWFuXCIpcHJvcHMud3JhcHBlciA9IHRydWVcclxuXHJcbiAgICAgICAgbGV0IGhvdmVyID0gdGhpcy5zdGF0ZS5ob3ZlciA/IGV1aE1vZHVsZTEuaGFzSG92ZXIgOiBcIlwiXHJcbiAgICAgICAgaWYoaG92ZXIpaG92ZXIgPSBcIiBcIiArIGhvdmVyXHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmbGV4TW9kdWxlLmZsZXhDaGlsZH0gJHtldWhNb2R1bGUxLmJ1dHRvbn0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uTG9va3NbcHJvcHMubG9vay50b1VwcGVyQ2FzZSgpXX0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uQ29sb3JzW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldfSR7YnV0dG9uU2l6ZX0ke2hvdmVyQ29sb3J9JHtob3Zlcn0gJHtldWhNb2R1bGUxLmdyb3d9YH0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfSBvbk1vdXNlRW50ZXI9eyhldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWhvdmVyQ29sb3IpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH19IG9uTW91c2VMZWF2ZT17KGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighaG92ZXJDb2xvcilyZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH19IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldWhNb2R1bGUxLmNvbnRlbnRzfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIGlmKHByb3BzLndyYXBwZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2J1dHRvbk1vZHVsZS5idXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGNvbG9yIG9mIEJ1dHRvbi5Db2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGNvbG9ycylcclxuICAgICAgICAgICAgbGV0IGxvb2tzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBsb29rIG9mIEJ1dHRvbi5Mb29rcyl7XHJcbiAgICAgICAgICAgICAgICBsb29rcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsb29rOiBsb29rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2gobG9va3MpXHJcbiAgICAgICAgICAgIGxldCBzaXplcyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgc2l6ZSBvZiBCdXR0b24uU2l6ZXMpe1xyXG4gICAgICAgICAgICAgICAgc2l6ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHNpemVzKVxyXG4gICAgICAgICAgICBsZXQgaG92ZXJzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBob3ZlciBvZiBCdXR0b24uSG92ZXJDb2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgaG92ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IGhvdmVyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goaG92ZXJzKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7Y2hpbGRyZW46IFwiVGVzdCBCdXR0b25cIn1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DbGljazogKCkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe3dyYXBwZXI6IGZhbHNlfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tkaXNhYmxlZDogZmFsc2V9LCB7ZGlzYWJsZWQ6IHRydWV9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbG9yID0gXCJicmFuZFwiIHwgXCJncmV5XCIgfCBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicHJpbWFyeVwiIHwgXCJsaW5rXCIgfCBcIndoaXRlXCIgfCBcImJsYWNrXCIgfCBcInRyYW5zcGFyZW50XCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uTG9vayA9IFwiZmlsbGVkXCIgfCBcImludmVydGVkXCIgfCBcIm91dGxpbmVkXCIgfCBcImdob3N0XCIgfCBcImxpbmtcIiB8IFwiYmxhbmtcIlxyXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gXCJub25lXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJ4bGFyZ2VcIiB8IFwibWluXCIgfCBcIm1heFwiIHwgXCJpY29uXCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uSG92ZXJzID0gXCJkZWZhdWx0XCIgfCBCdXR0b25Db2xvciIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4uL2dlbmVyYWwvVG9vbHRpcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG5jb25zdCBDb25zdGFudHMgPSB7XHJcbiAgICBkZWZhdWx0Q29sb3I6IDEwMDcwNzA5LFxyXG4gICAgYmFzZUNvbG9yczogW1xyXG4gICAgICAgIDE3NTIyMjAsIFxyXG4gICAgICAgIDMwNjY5OTMsIFxyXG4gICAgICAgIDM0NDcwMDMsIFxyXG4gICAgICAgIDEwMTgxMDQ2LCBcclxuICAgICAgICAxNTI3NzY2NywgXHJcbiAgICAgICAgMTU4NDQzNjcsIFxyXG4gICAgICAgIDE1MTA1NTcwLCBcclxuICAgICAgICAxNTE1ODMzMiwgXHJcbiAgICAgICAgOTgwNzI3MCwgXHJcbiAgICAgICAgNjMyMzU5NSwgXHJcbiAgICAgICAgMTE0Njk4NiwgXHJcbiAgICAgICAgMjA2NzI3NiwgXHJcbiAgICAgICAgMjEyMzQxMiwgXHJcbiAgICAgICAgNzQxOTUzMCwgXHJcbiAgICAgICAgMTEzNDI5MzUsIFxyXG4gICAgICAgIDEyNzQ1NzQyLCBcclxuICAgICAgICAxMTAyNzIwMCwgXHJcbiAgICAgICAgMTAwMzg1NjIsIFxyXG4gICAgICAgIDk5MzYwMzEsIFxyXG4gICAgICAgIDU1MzMzMDZcclxuICAgIF1cclxufVxyXG5cclxudHlwZSBDb2xvclBpY2tlclByb3BzID0ge1xyXG4gICAgZGVmYXVsdENvbG9yPzogbnVtYmVyLFxyXG4gICAgY3VzdG9tQ29sb3I/OiBudW1iZXIsXHJcbiAgICBiYXNlQ29sb3JzPzogbnVtYmVyW10sXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIG9uQ2hhbmdlPzogKGNvbG9yOm51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgQ29sb3JQaWNrZXJNb2R1bGVzXHJcbmxldCBpc0ZldGNoaW5nID0gbnVsbFxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW5udCBuZWVkcyB0byBiZSBsb2FkZWQuIEFzIGEgcmVzdWx0LCB5b3UgbWF5IGV4cGVyaWVuY2UgMTAwLTMwMG1zIGxvYWRpbmcgdGhlIGZpcnN0IHRpbWUuXHJcbiAqIFJlbmRlciB3aWxsIHJldHVybiBgbnVsbGAgYmVmb3JlIGxvYWRlZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxDb2xvclBpY2tlclByb3BzLCB7dmFsdWU/OnN0cmluZyxsYXN0Q29sb3I6YW55fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29sb3JQaWNrZXJQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IG51bGwsXHJcbiAgICAgICAgICAgIGxhc3RDb2xvcjogdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFByZWxvYWQgdGhlIGNvbXBvbmVudC4gKi9cclxuICAgIHN0YXRpYyBwcmVsb2FkKCl7XHJcbiAgICAgICAgaWYoQ29sb3JQaWNrZXIucHJvdG90eXBlLm1vZHVsZXNbMF0pcmV0dXJuXHJcbiAgICAgICAgaWYoaXNGZXRjaGluZylyZXR1cm5cclxuICAgICAgICBuZXcgQ29sb3JQaWNrZXIoe30pLnJlbmRlcigpXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpDb2xvclBpY2tlclByb3BzID0ge1xyXG4gICAgICAgIGRlZmF1bHRDb2xvcjogQ29uc3RhbnRzLmRlZmF1bHRDb2xvcixcclxuICAgICAgICBjdXN0b21Db2xvcjogbnVsbCxcclxuICAgICAgICBiYXNlQ29sb3JzOiBDb25zdGFudHMuYmFzZUNvbG9ycyxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1BcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBDb2xvclBpY2tlck1vZHVsZXMgfHwgKENvbG9yUGlja2VyTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJDb2xvclBpY2tlclwiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29sb3JQaWNrZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBDb2xvclBpY2tlckNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgaWYoIUNvbG9yUGlja2VyQ29tcG9uZW50KXtcclxuICAgICAgICAgICAgaWYoaXNGZXRjaGluZyl7IC8vIHN1cHBvcnQgZm9yIG11bHRpcGxlIGNvbG9yIHBpY2tlclxyXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZy50aGVuKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29sb3JQaWNrZXJNb2R1bGVzID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZVxyXG4gICAgICAgICAgICBpc0ZldGNoaW5nID0gbmV3IFByb21pc2UocmVzID0+IChyZXNvbHZlID0gcmVzKSlcclxuICAgICAgICAgICAgY29uc3QgR3VpbGRTZXR0aW5nc1JvbGVzID0gbmV3IChXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZS5pbmNsdWRlcyhcIkd1aWxkU2V0dGluZ3NSb2xlc1wiKSkuZGVmYXVsdCkoKS5yZW5kZXIoKS50eXBlXHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gR3VpbGRTZXR0aW5nc1JvbGVzLnByb3RvdHlwZS5yZW5kZXJSb2xlU2V0dGluZ3MuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWxkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZXI6ICgpID0+IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFJvbGUoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgR3VpbGRSb2xlU2V0dGluZ3MgPSBzZXR0aW5ncy5wcm9wcy5jaGlsZHJlbi50eXBlXHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IEd1aWxkUm9sZVNldHRpbmdzLnByb3RvdHlwZS5yZW5kZXJDb2xvclBpY2tlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlcnlvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnR5cGUoY2hpbGRyZW4ucHJvcHMpLnByb3BzLmNoaWxkcmVuLnR5cGUuX2N0b3IoKS50aGVuKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8Q29sb3JQaWNrZXJDb21wb25lbnQuZGVmYXVsdCBjb2xvcnM9e3RoaXMucHJvcHMuYmFzZUNvbG9yc30gZGVmYXVsdENvbG9yPXt0aGlzLnByb3BzLmRlZmF1bHRDb2xvcn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGN1c3RvbUNvbG9yPXt0aGlzLnByb3BzLmN1c3RvbUNvbG9yfT5cclxuICAgICAgICA8L0NvbG9yUGlja2VyQ29tcG9uZW50LmRlZmF1bHQ+XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sYXN0Q29sb3IgIT09IHRoaXMucHJvcHMudmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0Q29sb3I6IHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xvclBpY2tlcigpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFV0aWxzLkhleENvbG9yVG9EZWNpbWFsKFwiIzcyODlEQVwiKVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGNvbG9yKSA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgaW5mbzogXCJUbyBjb252ZXJ0IGhleCBjb2xvcnMgdG8gZGVjaW1hbCwgeW91IGNhbiBkbyBgTGlnaHRjb3JkLkFwaS5VdGlscy5IZXhDb2xvclRvRGVjaW1hbCgnI3lvdXJjb2xvcicpYCBhbmQgZ28gYmFjayB3aXRoIGBMaWdodGNvcmQuQXBpLlV0aWxzLkRlY2ltYWxDb2xvclRvSGV4KDc1MDYzOTQpYFwiLFxyXG4gICAgICAgIHdhcm46IFwiVGhlIGNvbXBvbmVudCBtYXkgbm90IGFwcGVhciBpbnN0YW50bHkuIFRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgbG9hZGVkLCBzbyB5b3UgY291bGQgZXhwZXJpZW5jZSA1MC0zMDBtcyBsb2FkaW5nIHRpbWUgZGVwZW5kaW5nIG9uIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbi5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgRHJvcGRvd25Qcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBzdHJpbmdcclxuICAgIH1bXSxcclxuICAgIHZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlLFxyXG4gICAgb3B0aW9uUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlLFxyXG4gICAgbXVsdGlWYWx1ZVJlbmRlcmVyPzogKGRhdGEpID0+IFJlYWN0Tm9kZVxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgc2VhcmNoYWJsZT86IGJvb2xlYW4sXHJcbiAgICBjbGVhcmFibGU/OiBib29sZWFuLFxyXG4gICAgc3R5bGVPdmVycmlkZXM/OiBDU1NQcm9wZXJ0aWVzLFxyXG4gICAgbGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzPzogdGhlbWVPdmVycmlkZSxcclxuICAgIGRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzPzogdGhlbWVPdmVycmlkZSxcclxuICAgIGlzTXVsdGk/OiBib29sZWFuXHJcbn1cclxuXHJcbnR5cGUgdGhlbWVPdmVycmlkZSA9IHtcclxuICAgIG5ldXRyYWwwOiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsNTogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDEwOiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMjA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwzMDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeTogc3RyaW5nLFxyXG4gICAgcHJpbWFyeTI1OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5NTA6IHN0cmluZyxcclxuICAgIHNlbGVjdGVkT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgbWVudUJhY2tncm91bmQ6IHN0cmluZyxcclxuICAgIG1lbnVCb3JkZXI6IHN0cmluZyxcclxuICAgIHNjcm9sbEJhclRodW1iOiBzdHJpbmcsXHJcbiAgICBtdWx0aU9wdGlvbkJhY2tncm91bmQ6IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgRHJvcGRvd25Nb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERyb3Bkb3duUHJvcHMsIHt2YWx1ZTogc3RyaW5nfG51bGx9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpEcm9wZG93blByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpEcm9wZG93blByb3BzID0ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJObyBvcHRpb25zIC0gTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIERyb3Bkb3duLiBJZiB5b3UgbWVhbnQgdG8gcHV0IGFuIGVtcHR5IGRyb3Bkb3duLCBpbnB1dCBhbiBlbXB0eSBhcnJheS5cIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHZhbHVlUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgbXVsdGlWYWx1ZVJlbmRlcmVyOiBudWxsLFxyXG4gICAgICAgIG9wdGlvblJlbmRlcmVyOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGxpZ2h0VGhlbWVDb2xvck92ZXJyaWRlczogbnVsbCxcclxuICAgICAgICBkYXJrVGhlbWVDb2xvck92ZXJyaWRlczogbnVsbCxcclxuICAgICAgICBpc011bHRpOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIERyb3Bkb3duTW9kdWxlcyB8fCAoRHJvcGRvd25Nb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlNlbGVjdFRlbXBXcmFwcGVyXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIERyb3Bkb3duQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlID0gPERyb3Bkb3duQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfS8+XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJlZFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaXNNdWx0aTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaXNNdWx0aTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcblxyXG50eXBlIFJhZGlvR3JvdXBQcm9wcyA9IHtcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgZGVzYz86IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgc2l6ZT86IFwic21hbGxcInxcIm1lZGl1bVwiLFxyXG4gICAgaXRlbVR5cGU/OiBcImJhclwifFwicGFuZWxcIixcclxuICAgIGluZm9DbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFJhZGlvR3JvdXBNb2R1bGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSYWRpb0dyb3VwUHJvcHMsIHt2YWx1ZT86IHN0cmluZ30+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6UmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgbmFtZTogXCJObyBvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIGRlc2M6IFwiTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIENob2ljZXMuIElmIHlvdSBtZWFudCB0byBkaXNwbGF5IG5vIG9wdGlvbnMgYXQgYWxsLCBwbGVhc2UgcGFzcyBhbiBlbXB0eSBhcnJheS5cIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI2YwNDc0N1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNpemU6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgaXRlbVR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgaW5mb0NsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUFxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6UmFkaW9Hcm91cFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2KXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogZXYudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFJhZGlvR3JvdXBNb2R1bGUgfHwgKFJhZGlvR3JvdXBNb2R1bGUgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiUmFkaW9Hcm91cFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBSYWRpb0dyb3VwQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxSYWRpb0dyb3VwQ29tcG9uZW50IG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBcclxuICAgICAgICAgICAgc2l6ZT17UmFkaW9Hcm91cENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBpdGVtVHlwZT17UmFkaW9Hcm91cENvbXBvbmVudC5JdGVtVHlwZXNbcHJvcHMuaXRlbVR5cGUudG9VcHBlckNhc2UoKV19IFxyXG4gICAgICAgICAgICBpbmZvQ2xhc3NOYW1lPXtwcm9wcy5pbmZvQ2xhc3NOYW1lfS8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCk6c3RyaW5nfG51bGx7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtZWRpdW1cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogXCJiYXJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogXCJwYW5lbFwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuLi8uLi9tb2R1bGVzL3V1aWRcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgU3dpdGNoUHJvcHMgPSB7XHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IGJvb2xlYW4sXHJcbiAgICBmaWxsPzogc3RyaW5nLFxyXG4gICAgdGhlbWU/OiBcImRlZmF1bHRcInxcImNsZWFyXCIsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCIsXHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcclxufVxyXG5cclxubGV0IFN3aXRjaE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN3aXRjaFByb3BzLCB7dmFsdWU6IGJvb2xlYW59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpTd2l0Y2hQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gU3dpdGNoTW9kdWxlcyB8fCAoU3dpdGNoTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJTd2l0Y2hcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgU3dpdGNoQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuICg8U3dpdGNoQ29tcG9uZW50IGlkPXtwcm9wcy5pZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlIHx8IGZhbHNlfSBmaWxsPXtwcm9wcy5maWxsfSBcclxuICAgICAgICAgICAgdGhlbWU9e1N3aXRjaENvbXBvbmVudC5UaGVtZXNbcHJvcHMudGhlbWUudG9VcHBlckNhc2UoKV19IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IFxyXG4gICAgICAgICAgICBzaXplPXtTd2l0Y2hDb21wb25lbnQuU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXX0gc3R5bGU9e3Byb3BzLnN0eWxlfS8+KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCF0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogIXRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgZmlsbDogbnVsbCxcclxuICAgICAgICB0aGVtZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgICAgICBzdHlsZToge31cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe29uQ2hhbmdlOiAodmFsdWUpID0+IHt9fV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjbGVhclwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYXBpLXByZXZpZXctc3dpdGNoXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBudWxsXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge31cclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICBlcnJvcjogXCJUaGUgYGNsZWFyYCBvcHRpb24gZG9lc24ndCB3b3JrIHdlbGwgb24gbGlnaHQgdGhlbWUuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFRleHRBcmVhUHJvcHMgPSB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXHJcbiAgICBhdXRvRm9jdXM/OiBib29sZWFuLFxyXG4gICAgcmVzaXplYWJsZT86IGJvb2xlYW4sXHJcbiAgICBmbGV4PzogYm9vbGVhbixcclxuICAgIGF1dG9zaXplPzogZmFsc2UsXHJcbiAgICByb3dzPzogbnVtYmVyLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgb25Gb2N1cz86IChldiwgbmFtZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgb25CbHVyPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbktleURvd24/OiAoZXYpID0+IHZvaWRcclxufVxyXG5cclxubGV0IFRleHRBcmVhTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUZXh0QXJlYVByb3BzLCB7dmFsdWU6IHN0cmluZ30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlRleHRBcmVhUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dEFyZWFNb2R1bGVzIHx8IChUZXh0QXJlYU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVGV4dEFyZWFcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIG5hbWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXYsIG5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldiwgbmFtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25LZXlEb3duKGV2KXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gPFRleHRBcmVhQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSB8fCBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUZXh0QXJlYVByb3BzID0ge1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBudWxsLFxyXG4gICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICAgICAgcmVzaXplYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZmxleDogZmFsc2UsXHJcbiAgICAgICAgYXV0b3NpemU6IGZhbHNlLFxyXG4gICAgICAgIHJvd3M6IDMsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBudWxsLFxyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICBvbkZvY3VzOiBOT09QLFxyXG4gICAgICAgIG9uQmx1cjogTk9PUCxcclxuICAgICAgICBvbktleURvd246IE5PT1BcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImFwaS1wcmV2aWV3LXRleHRhcmVhXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG51bGxcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICByZXNpemVhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBhdXRvc2l6ZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYXV0b3NpemU6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHJvd3M6IDNcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcm93czogMlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAxXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiRXhhbXBsZSBlcnJvclwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDEwMFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYXBpLXByZXZpZXctdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIHdhcm46IFwiVGhpcyBzaG91bGQgYmUgdXNlZCBmb3IgbXVsdGkgbGluZSBpbnB1dHMuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFRleHRJbnB1dFByb3BzID0ge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIlxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaW5wdXRDbGFzc05hbWU/OiBzdHJpbmdcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkLFxyXG4gICAgb25Gb2N1cz86IChldiwgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkLFxyXG4gICAgb25CbHVyPzogKGV2LCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWRcclxufVxyXG5cclxubGV0IFRleHRJbnB1dE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxUZXh0SW5wdXRQcm9wcywge3ZhbHVlOiBzdHJpbmd9PiB7XHJcbiAgICBoYXNTZXQ6IGJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXh0SW5wdXRQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRJbnB1dFByb3BzID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG1heExlbmd0aDogOTk5LFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICBpbnB1dENsYXNzTmFtZTogXCJcIixcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICBvbkZvY3VzOiBOT09QLFxyXG4gICAgICAgIG9uQmx1cjogTk9PUFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRleHRJbnB1dE1vZHVsZXMgfHwgKFRleHRJbnB1dE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVGV4dElucHV0XCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlLCBuYW1lKXtcclxuICAgICAgICB0aGlzLmhhc1NldCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgbmFtZSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLmhhc1NldClyZXR1cm4gLy8gcHJldmVudCBldmVudCBpZiB0aGUgb25DaGFuZ2UgaGFzIGNoYW5nZWQgdGhlIHZhbHVlLlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2LCBuYW1lLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVGV4dEFyZWFDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPFRleHRBcmVhQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IC8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgfHwgXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgdGhpcy5oYXNTZXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBpLXByZXZpZXctdGV4dGlucHV0XCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJFeGFtcGxlIGVycm9yXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDk5OVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYXBpLXByZXZpZXctdGV4dGlucHV0XCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge31cclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICB3YXJuOiBcIlRoaXMgc2hvdWxkIGJlIHVzZWQgZm9yIHNpbmdsZSBsaW5lIGlucHV0cy5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBub3RpY2UsIG5vdGljZXMsIGV2ZW50cyB9IGZyb20gXCIuL05vdGljZXNcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuXHJcbmxldCBOb3RpY2VNb2R1bGVzXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Tm90aWNlOm5vdGljZSA9IHtcclxuICAgIHRleHQ6IFwiXCIsXHJcbiAgICBpZDogXCJ1bmtub3duIGlkXCIsXHJcbiAgICBvbkNsaWNrOiBOT09QLFxyXG4gICAgYnV0dG9uVGV4dDogbnVsbCxcclxuICAgIHR5cGU6IFwiZGVmYXVsdFwiXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PG5vdGljZT4ge1xyXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJMaWdodGNvcmROb3RpY2VcIlxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpub3RpY2UgPSBkZWZhdWx0Tm90aWNlXHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gTm90aWNlTW9kdWxlcyB8fCAoTm90aWNlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5ub3RpY2VJbmZvKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IFtcclxuICAgICAgICAgICAgbm90aWNlQ2xhc3Nlc1xyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gbm90aWNlQ2xhc3Nlc1tcIm5vdGljZVwiK3RoaXMucHJvcHMudHlwZS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpK3RoaXMucHJvcHMudHlwZS5zbGljZSgxKV1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIWNsYXNzTmFtZSl7XHJcbiAgICAgICAgICAgIG5vdGljZXMucG9wKClcclxuICAgICAgICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMucHJvcHMuYnV0dG9uVGV4dCA/IDxidXR0b24gY2xhc3NOYW1lPXtub3RpY2VDbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBub3RpY2VzLnBvcCgpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljaygpXHJcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICAgICAgfX0+e3RoaXMucHJvcHMuYnV0dG9uVGV4dH08L2J1dHRvbj4gOiBudWxsXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bm90aWNlQ2xhc3Nlcy5kaXNtaXNzfSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9ezB9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vdGljZXMucG9wKClcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRleHR9XHJcbiAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTm90aWNlIGZyb20gXCIuL05vdGljZVwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuLi8uLi9tb2R1bGVzL3V1aWRcIlxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e2NvbnRhaW5lcjogYW55fT4ge1xyXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJMaWdodGNvcmROb3RpY2VzXCJcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fVxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PHsgY29udGFpbmVyOiBhbnkgfT4pe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm5vdGljZUhhbmRsZXIgPSB0aGlzLm5vdGljZUhhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGljZUhhbmRsZXIoKXtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgICBldmVudHMub24oXCJub3RpY2VVcGRhdGVcIiwgdGhpcy5ub3RpY2VIYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgZXZlbnRzLm9mZihcIm5vdGljZVVwZGF0ZVwiLCB0aGlzLm5vdGljZUhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFzTm90aWNlKXJldHVybiBudWxsXHJcbiAgICAgICAgY29uc3Qgbm90aWNlID0gbm90aWNlc1swXVxyXG4gICAgICAgIHJldHVybiA8Tm90aWNlIHsuLi5ub3RpY2V9PjwvTm90aWNlPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNOb3RpY2UoKXtcclxuICAgICAgICByZXR1cm4gbm90aWNlcy5sZW5ndGggPiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub3RpY2VzOm5vdGljZVtdID0gW11cclxuXHJcbmV4cG9ydCB0eXBlIG5vdGljZVdpdGhvdXRJRCA9IHtcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIGJ1dHRvblRleHQ/OiBzdHJpbmcsXHJcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZCxcclxuICAgIHR5cGU6IFwiZGVmYXVsdFwifFwiaW5mb1wifFwic3VjY2Vzc1wifFwiZGFuZ2VyXCJ8XCJzdHJlYW1lck1vZGVcInxcImRvd25sb2FkXCJ8XCJub3RpZmljYXRpb25cInxcInByZW1pdW1cInxcInJpY2hQcmVzZW5jZVwifFwicHJlbWl1bVRpZXIxXCJ8XCJwcmVtaXVtVGllcjJcInxcImZhY2Vib29rXCJ8XCJicmFuZFwifFwic3VydmV5XCJ8XCJzcG90aWZ5XCJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgbm90aWNlID0ge1xyXG4gICAgaWQ6IHN0cmluZ1xyXG59ICYgbm90aWNlV2l0aG91dElEIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL21vZHVsZXMvVXRpbHNcIlxyXG5pbXBvcnQgRGlzY29yZFRvb2xzIGZyb20gXCIuL21vZHVsZXMvRGlzY29yZFRvb2xzXCJcclxuaW1wb3J0ICogYXMgcGF0Y2hlcnMgZnJvbSBcIi4vbW9kdWxlcy9wYXRjaGVyc1wiXHJcbmltcG9ydCBleGNsdWRlUHJvcGVydGllcyBmcm9tIFwiLi9tb2R1bGVzL2V4Y2x1ZGVQcm9wZXJ0aWVzXCJcclxuaW1wb3J0IGNsb25lTnVsbFByb3RvIGZyb20gXCIuL21vZHVsZXMvY2xvbmVOdWxsUHJvdG9cIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgdW5mcmVlemUgZnJvbSBcIi4vbW9kdWxlcy9VbmZyZWV6ZVwiXHJcbnBhdGNoZXJzLnBhdGNoKClcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzLFxyXG4gICAgdXVpZDogdXVpZCxcclxuICAgIFV0aWxzOiBVdGlscyxcclxuICAgIERpc2NvcmRUb29sczogRGlzY29yZFRvb2xzLFxyXG4gICAgXzoge1xyXG4gICAgICAgIGV4Y2x1ZGVQcm9wZXJ0aWVzOiBleGNsdWRlUHJvcGVydGllcyxcclxuICAgICAgICBjbG9uZU51bGxQcm90bzogY2xvbmVOdWxsUHJvdG8sXHJcbiAgICAgICAgTk9PUDogTk9PUCxcclxuICAgICAgICB1bmZyZWV6ZTogdW5mcmVlemVcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgdmFyIFJlYWN0OnR5cGVvZiBpbXBvcnQoXCJyZWFjdFwiKVxyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgTGlnaHRjb3JkOiBMaWdodGNvcmRHbG9iYWwsXHJcbiAgICAgICAgQkRNb2R1bGVzOiB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6YW55W10sXHJcbiAgICAgICAgICAgIGdldChmaWx0ZXI6KG1vZDphbnkpPT5ib29sZWFuLCBtb2R1bGVzPzphbnlbXSk6YW55W10sXHJcbiAgICAgICAgICAgIGdldChpZDpudW1iZXIsIG1vZHVsZXM/OmFueVtdKTphbnksXHJcbiAgICAgICAgICAgIGdldChpZHM6IFtudW1iZXJ8KChtb2Q6YW55KT0+Ym9vbGVhbildLCBtb2R1bGVzPzphbnlbXSk6YW55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIExpZ2h0Y29yZDpMaWdodGNvcmRHbG9iYWxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRjb3JkQXBpXHJcblxyXG5PYmplY3QuYXNzaWduKHdpbmRvdy5MaWdodGNvcmQuQXBpLCBMaWdodGNvcmRBcGkpXHJcblxyXG4vKipcclxuICogVGhlIG1haW4gTGlnaHRjb3JkIGV4cG9ydHMuIENhbiBiZSBhY2Nlc3NlZCB3aXRoIGB3aW5kb3cuTGlnaHRjb3JkYFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBMaWdodGNvcmRHbG9iYWwge1xyXG4gICAgRGlzY29yZE1vZHVsZXM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnRlcm5hbCBEaXNjb3JkJ3MgZGlzcGF0Y2hlciAtIGNhbiBiZSB1c2VkIHRvIHN1YnNjcmliZSB0byBnYXRld2F5IGV2ZW50cyAvIGNsaWVudCBldmVudHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlzcGF0Y2hlcjogaW1wb3J0KFwiLi90eXBlcy9EaXNjb3JkRGlzcGF0Y2hlclR5cGVzXCIpLmRlZmF1bHQsXHJcbiAgICAgICAgY29uc3RhbnRzOiBpbXBvcnQoXCIuL3R5cGVzL0Rpc2NvcmRDb25zdGFudHNUeXBlc1wiKS5kZWZhdWx0XHJcbiAgICB9LFxyXG4gICAgU2V0dGluZ3M6IHtcclxuICAgICAgICBkZXZNb2RlOiBib29sZWFuLFxyXG4gICAgICAgIGNhbGxSaW5naW5nQmVhdDogYm9vbGVhblxyXG4gICAgfSxcclxuICAgIEFwaTogTGlnaHRjb3JkQXBpR2xvYmFsLFxyXG4gICAgQmV0dGVyRGlzY29yZDoge1xyXG4gICAgICAgIEJkQXBpOiB0eXBlb2YgaW1wb3J0KFwiQGJhbmRhZ2VkYmQvYmRhcGlcIikuQmRBcGksXHJcbiAgICAgICAgW21vZDpzdHJpbmddOmFueVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gQXBpLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZC5BcGlgXHJcbiAqL1xyXG50eXBlIExpZ2h0Y29yZEFwaUdsb2JhbCA9IGxpZ2h0Y29yZEFwaU1haW5FeHBvcnRzICYgdHlwZW9mIExpZ2h0Y29yZEFwaVxyXG5cclxudHlwZSBsaWdodGNvcmRBcGlNYWluRXhwb3J0cyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgdGhlIGZpcnN0IG1vZHVsZSB0aGF0IG1hdGNoIHRoZSBmaWx0ZXIgZ2V0cyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBUaGUgZmlsdGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBtb2R1bGUgdG8gbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGVuc3VyZUV4cG9ydGVkKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOlByb21pc2U8YW55PixcclxuICAgIC8qKlxyXG4gICAgICogUmVjcmVhdGUgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBgX19wcm90b19fYCBhbmQgYHByb3RvdHlwZWAgcHJvcGVydGllcyAtIHVzZWZ1bGwgZm9yIGJldHRlciBmb3JtYXR0aW5nIGluIGNvbnNvbGUuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gcmVjcmVhdGVcclxuICAgICAqL1xyXG4gICAgY2xvbmVOdWxsUHJvdG88T2JqID0gYW55PihvYmo6T2JqKTpPYmpcclxufSIsImltcG9ydCB7IG5vdGljZXMsIG5vdGljZVdpdGhvdXRJRCwgbm90aWNlLCBldmVudHMgYXMgbm90aWNlRXZlbnRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2VzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi91dWlkXCI7XHJcbmltcG9ydCBjbG9uZU51bGxQcm90byBmcm9tIFwiLi9jbG9uZU51bGxQcm90b1wiO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XHJcbmltcG9ydCB7IGRlZmF1bHROb3RpY2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcml2YXRlL05vdGljZVwiO1xyXG5pbXBvcnQgZXhjbHVkZVByb3BlcnRpZXMgZnJvbSBcIi4vZXhjbHVkZVByb3BlcnRpZXNcIjtcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4vbm9vcFwiO1xyXG5pbXBvcnQgV2VicGFja0xvYWRlciwgeyBXZWJwYWNrTG9hZGVyRXJyb3IgfSBmcm9tIFwiLi9XZWJwYWNrTG9hZGVyXCI7XHJcblxyXG5sZXQgc291bmRNb2R1bGVcclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIERpc2NvcmRUb29scyB7XHJcbiAgICBzaG93Tm90aWNlKGRhdGE6Tm90aWNlRGF0YSk6Tm90aWNle1xyXG4gICAgICAgIGlmKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBkYXRhLnRleHQgIT09IFwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKGBUaGlzIG5vdGljZSBpcyBub3QgdmFsaWQuIEdpdmVuOiAke1V0aWxzLmZvcm1hdEpTT2JqZWN0KGRhdGEpfWApXHJcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBjbG9uZU51bGxQcm90byhPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Tm90aWNlLCBkYXRhKSkgYXMgbm90aWNlXHJcbiAgICAgICAgbmV3RGF0YS5pZCA9IHV1aWQoKVxyXG4gICAgICAgIG5vdGljZXMucHVzaChuZXdEYXRhKVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICAgICAgY29uc3Qgbm90aWNlID0gbmV3IE5vdGljZShuZXdEYXRhKVxyXG4gICAgICAgIHJldHVybiBub3RpY2VcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbm90aWNlcygpOk5vdGljZVtde1xyXG4gICAgICAgIHJldHVybiBub3RpY2VzLm1hcChkYXRhID0+IG5ldyBOb3RpY2UoZGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWlja2x5IHNlbmQgbm90aWZpY2F0aW9uIChFdmVuIHdoZW4gbm8gZm9jdXNlZC4pXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgbm90aWZpY2F0aW9uLiBCZSBzdXJlIHRvIGluY2x1ZGUgYWxsIHByb3BlcnRpZXMgZXhjZXB0IGZ1bmN0aW9ucyBjYXVzZSB0aGV5J3JlIG9wdGlvbmFsLlxyXG4gICAgICogTm90aWZpY2F0aW9ucyBoYXZlIGEgdGltZW91dCBvZiAzLTUgc2Vjb25kcy5cclxuICAgICAqIFRoZXkgbG9vayBsaWtlIHRoaXM6IGh0dHBzOi8vaS5pbWd1ci5jb20vanp1eEtLdS5wbmdcclxuICAgICAqL1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihkYXRhOk5vdGlmaWNhdGlvbkRhdGEpOk5vdGlmaWNhdGlvbntcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgd2luZG93Lk5vdGlmaWNhdGlvbihkYXRhLnRpdGxlLCBleGNsdWRlUHJvcGVydGllcyhkYXRhLCBbXHJcbiAgICAgICAgICAgIFwidGl0bGVcIixcclxuICAgICAgICAgICAgXCJvbkNsaWNrXCIsXHJcbiAgICAgICAgICAgIFwib25DbG9zZVwiLFxyXG4gICAgICAgICAgICBcIm9uU2hvd1wiXHJcbiAgICAgICAgXSkpXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9uY2xpY2sgPSBkYXRhLm9uQ2xpY2sgfHwgTk9PUFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbnNob3cgPSBkYXRhLm9uU2hvdyB8fCBOT09QXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9uY2xvc2UgPSBkYXRhLm9uQ2xvc2UgfHwgTk9PUFxyXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTb3VuZChzb3VuZDpTb3VuZCl7XHJcbiAgICAgICAgc291bmRNb2R1bGUgPSBzb3VuZE1vZHVsZSB8fCBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiY3JlYXRlU291bmRcIl0pXHJcbiAgICAgICAgaWYoIXNvdW5kTW9kdWxlKXRocm93IG5ldyBXZWJwYWNrTG9hZGVyRXJyb3IoXCJDb3VsZG4ndCBmaW5kIHNvdW5kTW9kdWxlIGhlcmUuXCIpXHJcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IHNvdW5kTW9kdWxlLmNyZWF0ZVNvdW5kKHNvdW5kKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVkXHJcbiAgICB9XHJcblxyXG4gICAgcGxheVNvdW5kKHNvdW5kOlNvdW5kKXtcclxuICAgICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVTb3VuZChzb3VuZClcclxuICAgICAgICBjcmVhdGVkLnBsYXkoKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNvdW5kID0gXCJjYWxsX2NhbGxpbmdcInxcImNhbGxfcmluZ2luZ1wifFwiY2FsbF9yaW5naW5nX2JlYXRcInxcImRkci1kb3duXCJ8XCJkZHItbGVmdFwifFwiZGRyLXJpZ2h0XCJ8XCJkZHItdXBcInxcImRlYWZlblwifFwiZGlzY29kb1wifFwiZGlzY29ubmVjdFwifFwiaHVtYW5fbWFuXCJ8XCJtZW50aW9uMVwifFwibWVudGlvbjJcInxcIm1lbnRpb24zXCJ8XCJtZXNzYWdlMVwifFwibWVzc2FnZTJcInxcIm1lc3NhZ2UzXCJ8XCJtdXRlXCJ8XCJvdmVybGF5dW5sb2NrXCJ8XCJwdHRfc3RhcnRcInxcInB0dF9zdG9wXCJ8XCJyZWNvbm5lY3RcInxcInJvYm90X21hblwifFwic3RyZWFtX2VuZGVkXCJ8XCJzdHJlYW1fc3RhcnRlZFwifFwic3RyZWFtX3VzZXJfam9pbmVkXCJ8XCJzdHJlYW1fdXNlcl9sZWZ0XCJ8XCJ1bmRlYWZlblwifFwidW5tdXRlXCJ8XCJ1c2VyX2pvaW5cInxcInVzZXJfbGVhdmVcInxcInVzZXJfbW92ZWRcIlxyXG5cclxuZXhwb3J0IHR5cGUgTm90aWZpY2F0aW9uRGF0YSA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBib2R5OiBzdHJpbmcsXHJcbiAgICBpY29uOiBzdHJpbmcsXHJcbiAgICBvblNob3c/OiAoKSA9PiB2b2lkLFxyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWQsXHJcbiAgICBvbkNsb3NlPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOb3RpY2VEYXRhID0gbm90aWNlV2l0aG91dElEXHJcblxyXG5jb25zdCBFdmVudEhhbmRsZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgaWYodGhpcy5yZW1vdmVkICE9PSB0aGlzLnN0YXRlLnJlbW92ZWQpe1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInJlbW92ZWRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnNob3dpbmcgIT09IHRoaXMuc3RhdGUuc2hvd2luZyl7XHJcbiAgICAgICAgaWYodGhpcy5zaG93aW5nKXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwic2hvd2luZ1wiLCB0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJzaG93aW5nXCIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHRoaXMuaW5kZXggIT09IHRoaXMuc3RhdGUuaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuZW1pdChcImluZGV4XCIsIHRoaXMuaW5kZXgpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBBIG5vdGljZSBpbnRlcmZhY2UgZm9yIG1vZGlmeWluZyBpdCBhbmQgc3Vic2NyaWJpbmcgdG8gZXZlbnRzLiAqL1xyXG5leHBvcnQgY2xhc3MgTm90aWNlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlbW92ZWQ6IHRoaXMucmVtb3ZlZCxcclxuICAgICAgICAgICAgc2hvd2luZzogdGhpcy5zaG93aW5nLFxyXG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGV2ZW50RnVuYyA9IEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpXHJcbiAgICAgICAgbm90aWNlRXZlbnRzLm9uKFwibm90aWNlVXBkYXRlXCIsIGV2ZW50RnVuYylcclxuICAgICAgICB0aGlzLm9uKFwicmVtb3ZlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGljZUV2ZW50cy5vZmYoXCJub3RpY2VVcGRhdGVcIiwgZXZlbnRGdW5jKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVtIHRoZSBub3RpY2UgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQ6IFwicmVtb3ZlZFwiLCBsaXN0ZW5lcjogKCkgPT4gdm9pZCk6dGhpc1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpY2UgaXMgdmlzaWJsZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50OiBcInNob3dpbmdcIiwgbGlzdGVuZXI6IChpc1Nob3dpbmc6Ym9vbGVhbikgPT4gdm9pZCk6dGhpc1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpY2UgcXVldWUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQ6IFwiaW5kZXhcIiwgbGlzdGVuZXI6IChpbmRleDpudW1iZXIpID0+IHZvaWQpOnRoaXNcclxuICAgIG9uKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczphbnlbXSkgPT4gdm9pZCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9uKGV2ZW50LCBsaXN0ZW5lcilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW0gdGhlIG5vdGljZSBpcyByZW1vdmVkLlxyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50OiBcInJlbW92ZWRcIiwgbGlzdGVuZXI6ICgpID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIGlzIHZpc2libGUgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50OiBcInNob3dpbmdcIiwgbGlzdGVuZXI6IChpc1Nob3dpbmc6Ym9vbGVhbikgPT4gdm9pZCk6dGhpc1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpY2UgcXVldWUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudDogXCJpbmRleFwiLCBsaXN0ZW5lcjogKGluZGV4Om51bWJlcikgPT4gdm9pZCk6dGhpc1xyXG4gICAgb25jZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKC4uLmFyZ3M6YW55W10pID0+IHZvaWQpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5vbmNlKGV2ZW50LCBsaXN0ZW5lcilcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZXZlbnQ6IFwicmVtb3ZlZFwiLCBsaXN0ZW5lcjogKCkgPT4gdm9pZCk6dGhpc1xyXG4gICAgb2ZmKGV2ZW50OiBcInNob3dpbmdcIiwgbGlzdGVuZXI6IChpc1Nob3dpbmc6Ym9vbGVhbikgPT4gdm9pZCk6dGhpc1xyXG4gICAgb2ZmKGV2ZW50OiBcImluZGV4XCIsIGxpc3RlbmVyOiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvZmYoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6ICguLi5hcmdzOmFueVtdKSA9PiB2b2lkKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZTp7XHJcbiAgICAgICAgcmVtb3ZlZDpib29sZWFuLFxyXG4gICAgICAgIHNob3dpbmc6Ym9vbGVhbixcclxuICAgICAgICBpbmRleDpudW1iZXJcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVtb3ZlZCgpOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuICFub3RpY2VzLmZpbmQoZSA9PiBlLmlkID09PSB0aGlzLmlkKVxyXG4gICAgfVxyXG4gICAgZ2V0IHNob3dpbmcoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID09PSAwXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluZGV4KCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiBub3RpY2VzLmZpbmRJbmRleChlID0+IGUuaWQgPT09IHRoaXMuaWQpXHJcbiAgICB9XHJcbiAgICBnZXQgaWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmlkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnRleHRcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHRleHQpe1xyXG4gICAgICAgIHRoaXMuZGF0YS50ZXh0ID0gdGV4dFxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnR5cGVcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHR5cGUpe1xyXG4gICAgICAgIHRoaXMuZGF0YS50eXBlID0gdHlwZVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJ1dHRvblRleHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmJ1dHRvblRleHRcclxuICAgIH1cclxuICAgIHNldCBidXR0b25UZXh0KGJ1dHRvblRleHQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmRhdGEuYnV0dG9uVGV4dCA9IGJ1dHRvblRleHRcclxuICAgICAgICBub3RpY2VFdmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkNsaWNrKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5vbkNsaWNrXHJcbiAgICB9XHJcbiAgICBzZXQgb25DbGljayhvbkNsaWNrKXtcclxuICAgICAgICB0aGlzLmRhdGEub25DbGljayA9IG9uQ2xpY2tcclxuICAgICAgICBub3RpY2VFdmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlZClyZXR1cm5cclxuICAgICAgICBub3RpY2VzLnNwbGljZSh0aGlzLmluZGV4LCAxKVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICB9XHJcbiAgICBkYXRhOm5vdGljZVxyXG59IiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUGx1Z2luVXRpbGl0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzKHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzKVxyXG4gICAgICAgIGxldCBlbGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7a2V5OiB1dWlkKCl9LCBpdGVtcylcclxuICAgICAgICByZXR1cm4gVXRpbHMuUmVhY3RUb0hUTUxFbGVtZW50KGVsZW0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFtdXHJcbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBpdGVtICE9PSBcIm9iamVjdFwiKXJldHVybiBpdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucHJvcHMgJiYgXCJjaGlsZHJlblwiIGluIGl0ZW0ucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoaXRlbS5wcm9wcy5jaGlsZHJlbikpaXRlbS5wcm9wcy5jaGlsZHJlbiA9IFtpdGVtLnByb3BzLmNoaWxkcmVuXVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wcm9wcy5jaGlsZHJlbiA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KGl0ZW0ucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWl0ZW0ucHJvcHMpaXRlbS5wcm9wcyA9IHt9XHJcbiAgICAgICAgICAgIGl0ZW0ucHJvcHMua2V5ID0gdXVpZCgpXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBVdGlscy5nZXROZXN0ZWRQcm9wcyhjb21wb25lbnRzLCBpdGVtLmNvbXBvbmVudClcclxuICAgICAgICAgICAgaWYoIWNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2FybmluZyA9IG5ldyBUZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGBXYXJuaW5nOiBObyBjb21wb25lbnQgd2FzIGZvdW5kIGZvcjogXCIke2l0ZW0uY29tcG9uZW50fVwiLiBQbGVhc2UgY29ycmVjdCB5b3VyIGNvZGUuYFxyXG4gICAgICAgICAgICAgICAgfSkucmVuZGVyKClcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2god2FybmluZylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIE9iamVjdC5jcmVhdGUoaXRlbS5wcm9wcykpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0dGluZ0l0ZW0gPSB7XHJcbiAgICBjb21wb25lbnQ6IHN0cmluZyxcclxuICAgIHByb3BzOiBDb21wb25lbnRQcm9wczxhbnk+XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmZyZWV6ZShvKSB7XHJcbiAgICB2YXIgb28gPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgb28gPSBbXTtcclxuICAgICAgICB2YXIgY2xvbmUgPSBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgIG9vLnB1c2godilcclxuICAgICAgICB9O1xyXG4gICAgICAgIG8uZm9yRWFjaChjbG9uZSk7XHJcbiAgICB9IGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICBvbyA9IG5ldyBTdHJpbmcobykudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG8gPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvbyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG8pIHtcclxuICAgICAgICAgICAgb29bcHJvcGVydHldID0gb1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9vO1xyXG59XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBPYmplY3RDb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgdW5mcmVlemU6IDxUIGV4dGVuZHMgYW55PihvYmo6IFJlYWRvbmx5PFQ+KSA9PiBUXHJcbiAgICB9XHJcbn1cclxuT2JqZWN0LnVuZnJlZXplID0gdW5mcmVlemUiLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKVxyXG5pbXBvcnQgUGx1Z2luVXRpbGl0aWVzIGZyb20gXCIuL1BsdWdpblV0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIFJlYWN0VG9IVE1MRWxlbWVudChSZWFjdEVsZW1lbnQ6IFJlYWN0RWxlbWVudCl7ICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0RWxlbWVudCwgZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQbHVnaW5VdGlscygpe3JldHVybiBQbHVnaW5VdGlsaXRpZXN9XHJcblxyXG4gICAgZ2V0TmVzdGVkUHJvcHMob2JqOmFueSwgcGF0aDogc3RyaW5nKXtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiLlwiKVxyXG4gICAgICAgIGZvcihsZXQgc2VnIG9mIHNlZ21lbnRzKXtcclxuICAgICAgICAgICAgb2JqID0gb2JqICYmIChzZWcgaW4gb2JqKSA/IG9ialtzZWddIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxuXHJcbiAgICBEZWNpbWFsQ29sb3JUb0hleChjb2xvcjpudW1iZXIpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gXCIjXCIrY29sb3IudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuXHJcbiAgICBIZXhDb2xvclRvRGVjaW1hbChjb2xvcjpzdHJpbmcpOm51bWJlcntcclxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoL1sjO10vZywgXCJcIilcclxuICAgICAgICBsZXQgcmVzID0gcGFyc2VJbnQoY29sb3IsIDE2KVxyXG4gICAgICAgIGlmKGlzTmFOKHJlcykpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbG9yOiAke2NvbG9yfWApXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURhKGNsYXNzTmFtZTpzdHJpbmcpOnN0cmluZ3tcclxuICAgICAgICBpZighY2xhc3NOYW1lKXJldHVybiBjbGFzc05hbWVcclxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5maWx0ZXIoZSA9PiAhZS5zdGFydHNXaXRoKFwiZGEtXCIpKS5qb2luKFwiIFwiKVxyXG4gICAgfVxyXG5cclxuICAgIEZpbmRSZWFjdChkb206RWxlbWVudCwgdHJhdmVyc2VVcDpudW1iZXIgPSAwKTpSZWFjdC5Db21wb25lbnR8UmVhY3QuUHVyZUNvbXBvbmVudHtcclxuICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MzIxNzQyL3JlYWN0LWdldHRpbmctYS1jb21wb25lbnQtZnJvbS1hLWRvbS1lbGVtZW50LWZvci1kZWJ1Z2dpbmcjMzkxNjUxMzdcclxuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhkb20pLmZpbmQoa2V5PT5rZXkuc3RhcnRzV2l0aChcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiKSk7XHJcbiAgICAgICAgY29uc3QgZG9tRmliZXIgPSBkb21ba2V5XTtcclxuICAgICAgICBpZiAoZG9tRmliZXIgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgICAgICAvLyByZWFjdCA8MTZcclxuICAgICAgICBpZiAoZG9tRmliZXIuX2N1cnJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wRmliZXIgPSBkb21GaWJlci5fY3VycmVudEVsZW1lbnQuX293bmVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlcnNlVXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29tcEZpYmVyID0gY29tcEZpYmVyLl9jdXJyZW50RWxlbWVudC5fb3duZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBGaWJlci5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVhY3QgMTYrXHJcbiAgICAgICAgY29uc3QgR2V0Q29tcEZpYmVyID0gZmliZXI9PntcclxuICAgICAgICAgICAgLy9yZXR1cm4gZmliZXIuX2RlYnVnT3duZXI7IC8vIHRoaXMgYWxzbyB3b3JrcywgYnV0IGlzIF9fREVWX18gb25seVxyXG4gICAgICAgICAgICBsZXQgcGFyZW50RmliZXIgPSBmaWJlci5yZXR1cm47XHJcbiAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgcGFyZW50RmliZXIudHlwZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRGaWJlciA9IHBhcmVudEZpYmVyLnJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RmliZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY29tcEZpYmVyID0gR2V0Q29tcEZpYmVyKGRvbUZpYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlcnNlVXA7IGkrKykge1xyXG4gICAgICAgICAgICBjb21wRmliZXIgPSBHZXRDb21wRmliZXIoY29tcEZpYmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBGaWJlci5zdGF0ZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2xhc3MoY2xhc3NOYW1lczpzdHJpbmcsIGNsYXNzTmFtZTpzdHJpbmcpOmJvb2xlYW57XHJcbiAgICAgICAgaWYoIWNsYXNzTmFtZXMgfHwgIWNsYXNzTmFtZSlyZXR1cm4gZmFsc2VcclxuICAgICAgICBjb25zdCBjbGFzc25hbWVzID0gY2xhc3NOYW1lcy5zcGxpdChcIiBcIilcclxuICAgICAgICBmb3IobGV0IGNsYXNzbmFtZSBvZiB0aGlzLnJlbW92ZURhKGNsYXNzTmFtZSkuc3BsaXQoXCIgXCIpKXtcclxuICAgICAgICAgICAgaWYoIWNsYXNzbmFtZXMuaW5jbHVkZXMoY2xhc3NuYW1lKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRKU09iamVjdChvYmo6YW55KTpzdHJpbmd7XHJcbiAgICAgICAgaWYoW1wic3RyaW5nXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcImJpZ2ludFwiLCBcInVuZGVmaW5lZFwiXS5pbmNsdWRlcyh0eXBlb2Ygb2JqKSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIGlmKG9iaiA9PT0gbnVsbClyZXR1cm4gXCJudWxsXCJcclxuICAgICAgICBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpcmV0dXJuIFN0cmluZyhvYmopXHJcbiAgICAgICAgaWYodHlwZW9mIG9iaiA9PT0gXCJzeW1ib2xcIilyZXR1cm4gU3RyaW5nKG9iailcclxuXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShvYmopKXtcclxuICAgICAgICAgICAgaWYoIW9iai5sZW5ndGgpcmV0dXJuIFwiW11cIlxyXG4gICAgICAgICAgICByZXR1cm4gYFtcXG4gICAgJHtvYmoubWFwKGUgPT4gdGhpcy5mb3JtYXRKU09iamVjdChlKSkuam9pbihcIixcXG4gICAgXCIpfVxcbl1gXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAgICAgICAgIGlmKGtleXMubGVuZ3RoID09PSAwKXJldHVybiBcInt9XCJcclxuICAgICAgICAgICAgcmV0dXJuIGB7XFxuICAgICR7a2V5cy5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmlnaW5hbCA9IGtleVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIilrZXkgPSBcIltcIitTdHJpbmcoa2V5KStcIl1cIlxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiKWtleSA9IFN0cmluZyhrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc05hTihwYXJzZUludChrZXlbMF0pKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmZvcm1hdEpTT2JqZWN0KGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoL1teXFx3XFxkXyRdL2cudGVzdChrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuZm9ybWF0SlNPYmplY3Qoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2tleX06ICR7dGhpcy5mb3JtYXRKU09iamVjdChvYmpbb3JpZ2luYWxdKX1gXHJcbiAgICAgICAgICAgIH0pfVxcbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiY29uc3QgQkRNb2R1bGVzID0gd2luZG93LkJETW9kdWxlc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFdlYnBhY2tMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgZ2V0KGlkOiBudW1iZXIpOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChpZClcclxuICAgIH1cclxuICAgIGZpbmQoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55e1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBCRE1vZHVsZXMuZ2V0KGZpbHRlcilbMF1cclxuICAgICAgICBpZighcmVzdWx0KXtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGZpbHRlciwgXCJjb3VsZG4ndCBmaW5kIHRoZSBtb2R1bGUuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuICAgIGZpbmRCeVVuaXF1ZVByb3BlcnRpZXMocHJvcHM6KHN0cmluZ3xudW1iZXIpW10pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZC5fX2VzTW9kdWxlICYmIChcImRlZmF1bHRcIiBpbiBtb2QpKXtcclxuICAgICAgICAgICAgICAgIGxldCBkb2VzTWF0Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLmRlZmF1bHQsIHByb3ApKWRvZXNNYXRjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkb2VzTWF0Y2gpcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIHByb3ApKXJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlbMF1cclxuICAgIH1cclxuICAgIGZpbHRlcihmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnlbXXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeVVuaXF1ZVByb3BlcnRpZXMocHJvcHM6KHN0cmluZ3xudW1iZXIpW10pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZC5fX2VzTW9kdWxlICYmIChcImRlZmF1bHRcIiBpbiBtb2QpKXtcclxuICAgICAgICAgICAgICAgIGxldCBkb2VzTWF0Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLmRlZmF1bHQsIHByb3ApKWRvZXNNYXRjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkb2VzTWF0Y2gpcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIHByb3ApKXJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYnBhY2tMb2FkZXJFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6c3RyaW5nID0gXCJcIil7XHJcbiAgICAgICAgbWVzc2FnZSArPSBcIlxcblxcdFRoaXMgZXJyb3IgaXMgcmVsYXRlZCB0byBMaWdodGNvcmQgbm90IGJlaW5nIGFibGUgdG8gZmluZCBhIFdlYnBhY2tNb2R1bGUuIFxcblxcdFBsZWFzZSBzaG93IHRoaXMgZXJyb3IgYW5kIGEgZmV3IGxpbmVzIG9mIGxvZ3MgYWJvdmUgdGhpcyBlcnJvci4gXFxuXFx0T3BlbiBhbiBpc3N1ZSBvbiBodHRwczovL2dpdGh1Yi5jb20vTGlnaHRjb3JkL0xpZ2h0Y29yZCBvciBpbiB0aGVpciBkaXNjb3JkIHNlcnZlci5cIlxyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpXHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJXZWJwYWNrTG9hZGVyRXJyb3JcIlxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFJlY3JlYXRlIHRoZSBnaXZlbiBvYmplY3Qgd2l0aG91dCB0aGUgX19wcm90b19fLiBVc2VmdWwgZm9yIGJldHRlciBmb3JtYXR0aW5nIHdoZW4gb3V0cHV0IGluIGNvbnNvbGUuXHJcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byByZWNyZWF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVOdWxsUHJvdG88T2JqPWFueT4ob2JqOk9iaik6T2Jqe1xyXG4gICAgbGV0IG8gPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgb1trXSA9IG9ialtrXVxyXG4gICAgfSlcclxuICAgIHJldHVybiBvXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGNsdWRlUHJvcGVydGllczxPYmogPSBhbnk+KG9iajpPYmosIHByb3BzOihrZXlvZiBPYmopW10pOlBhcnRpYWw8T2JqPntcclxuICAgIGxldCBuZXdPYmogPSB7fVxyXG5cclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmluY2x1ZGVzKGsgYXMga2V5b2YgT2JqKSlyZXR1cm5cclxuICAgICAgICBuZXdPYmpba10gPSBvYmpba11cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG5ld09ialxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTk9PUCgpe30iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIlxyXG5pbXBvcnQgTm90aWNlcywgeyBub3RpY2VzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2VzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaCgpe1xyXG4gICAgLyoqIFNUQVJUIE5PVElDRSAqL1xyXG4gICAgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJDb25uZWN0ZWRBcHBWaWV3XCIpXHJcbiAgICAudGhlbihhc3luYyAobW9kKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXBwQ2xhc3NlcyA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuaGFzTm90aWNlKTtcclxuICAgICAgICBjb25zdCBidWlsZFJlbmRlciA9IG9yaWdpbmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBvcmlnaW5hbC5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld2NoaWxkcmVuID0gW11cclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICBpZighQXJyYXkuaXNBcnJheShjaGlsZHJlbikpY2hpbGRyZW4gPSBbY2hpbGRyZW5dXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIG5ld2NoaWxkcmVuLnB1c2goY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICBuZXdjaGlsZHJlbi5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWNlcywge2NvbnRhaW5lcjogdGhpc30pKVxyXG4gICAgICAgICAgICAgICAgbmV3Y2hpbGRyZW4ucHVzaChjaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuID0gbmV3Y2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW5bMl0ucHJvcHMuY2hpbGRyZW5bMF0ucHJvcHMucmVuZGVyID0gYnVpbGRSZW5kZXJDaGFubmVsU2lkZWJhcihyZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlblsyXS5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy5yZW5kZXIpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1aWxkUmVuZGVyQ2hhbm5lbFNpZGViYXIgPSBvcmlnaW5hbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXJDaGFubmVsU2lkZWJhcigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBvcmlnaW5hbC5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzTm90aWNlID0gbm90aWNlcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICBpZighaGFzTm90aWNlKXJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYoIVV0aWxzLmhhc0NsYXNzKHJldHVyblZhbHVlLnByb3BzLmNsYXNzTmFtZSwgYXBwQ2xhc3Nlcy5oYXNOb3RpY2UpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jbGFzc05hbWUgKz0gXCIgXCIrVXRpbHMucmVtb3ZlRGEoYXBwQ2xhc3Nlcy5oYXNOb3RpY2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kLmRlZmF1bHQucHJvdG90eXBlLnJlbmRlciA9IGJ1aWxkUmVuZGVyKG1vZC5kZWZhdWx0LnByb3RvdHlwZS5yZW5kZXIpO1xyXG4gICAgICAgIChhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitVdGlscy5yZW1vdmVEYShhcHBDbGFzc2VzLmJhc2UpKVxyXG4gICAgICAgICAgICBpZighYmFzZSl0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGJhc2UgaGVyZWApXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBVdGlscy5GaW5kUmVhY3QoYmFzZSkgYXMgYW55XHJcbiAgICAgICAgICAgIGVsZW0ucmVuZGVyID0gYnVpbGRSZW5kZXIoZWxlbS5yZW5kZXIpXHJcbiAgICAgICAgICAgIGVsZW0uZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgIH0pKClcclxuICAgIH0pXHJcbiAgICAvKiogRU5EIE5PVElDRSAqL1xyXG5cclxuICAgIC8qKiBTVEFSVCBJTi1BUFAgTk9USUZJQ0FUSU9OUyAqL1xyXG4gICAgLy9nZXRNb2R1bGUoZSA9PiB0cnVlKVxyXG4gICAgLyoqIEVORCBJTi1BUFAgTk9USUZJQ0FUSU9OUyAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2R1bGUoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6UHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuZW5zdXJlRXhwb3J0ZWQoZmlsdGVyKVxyXG4gICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbTElHSFRDT1JEXVwiLCBlcnIsIGZpbHRlcilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSIsImltcG9ydCAqIGFzIHV1aWR2MSBmcm9tIFwidXVpZC92MVwiXHJcbmltcG9ydCAqIGFzIHV1aWR2NCBmcm9tIFwidXVpZC92NFwiXHJcblxyXG50eXBlIHV1aWRGdW5jID0gKCkgPT4gc3RyaW5nXHJcbmxldCB1dWlkOnV1aWRGdW5jICYge3YxOiB1dWlkRnVuYywgdjQ6IHV1aWRGdW5jfSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB1dWlkdjQoKVxyXG59LCB7djE6ICgpID0+IHV1aWR2MSgpLCB2NDogKCkgPT4gdXVpZHY0KCl9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXVpZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3YxXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==