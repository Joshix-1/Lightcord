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
class ColorPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || null,
            lastColor: this.props.value
        };
        this.onChange = this.onChange.bind(this);
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
            if (isFetching)
                isFetching.then(e => this.forceUpdate()); // support for multiple color picker
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
    info: "To convert hex colors to decimal, you can do `Lightcord.Api.Utils.HexColorToDecimal('#yourcolor')` and go back with `Lightcord.Api.Utils.DecimalColorToHex(7506394)`"
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
const LightcordApi = {
    WebpackLoader: WebpackLoader_1.default,
    Components: components_1.default,
    uuid: uuid_1.default,
    Utils: Utils_1.default
};
exports.default = LightcordApi;
Object.assign(window.Lightcord.Api, LightcordApi);


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
        return "#" + color.toString(16);
    }
    HexColorToDecimal(color) {
        color = color.replace(/[#;]/g, "");
        let res = parseInt(color, 16);
        if (isNaN(res))
            throw new Error(`Invalid color: ${color}`);
        return res;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQWxlcnRCb3gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQ29kZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9TZXR0aW5nc1RpdGxlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1RhYnMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVG9vbHRpcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ29sb3JQaWNrZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1BsdWdpblV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9VdGlscy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9XZWJwYWNrTG9hZGVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2Nsb25lTnVsbFByb3RvLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2V4Y2x1ZGVQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL25vb3AudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvdXVpZC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3YxXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92NFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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QW1CO0lBQzdFLElBQUksTUFBTSxHQUFHLEVBQUU7SUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFjLENBQUM7WUFBQyxPQUFNO1FBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztJQUVGLE9BQU8sTUFBTTtBQUNqQixDQUFDO0FBVEQsb0NBU0M7Ozs7Ozs7Ozs7Ozs7OztBQ1RELFNBQXdCLElBQUksS0FBRyxDQUFDO0FBQWhDLHVCQUFnQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhDLDZEQUFpQztBQUNqQyw2REFBaUM7QUFHakMsSUFBSSxJQUFJLEdBQTJDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0QsT0FBTyxNQUFNLEVBQUU7QUFDbkIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0FBRTVDLGtCQUFlLElBQUk7Ozs7Ozs7Ozs7OztBQ1JuQixvQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBiYWl0IHR5cGVzY3JpcHQgaW50byB0aGlua2luZyB0aGlzIGlzIG5vdCByZWFjdERPTSBzbyBubyBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG5leHBvcnQgPSB3aW5kb3dbXCJSZWFjXCIrXCJ0RE9NXCJdIGFzIHR5cGVvZiBpbXBvcnQoXCJyZWFjdC1kb21cIikiLCJpbXBvcnQgRGlzY29yZEJ1dHRvbiBmcm9tIFwiLi9pbnB1dHMvQnV0dG9uXCJcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi9pbnB1dHMvU3dpdGNoXCJcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4vaW5wdXRzL1JhZGlvR3JvdXBcIlxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vaW5wdXRzL1RleHRBcmVhXCJcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9pbnB1dHMvVGV4dElucHV0XCJcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL2lucHV0cy9Ecm9wZG93blwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1RpdGxlXCJcclxuaW1wb3J0IFNldHRpbmdzVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9TZXR0aW5nc1RpdGxlXCJcclxuaW1wb3J0IFRhYnMsIHsgVGFiIH0gZnJvbSBcIi4vZ2VuZXJhbC9UYWJzXCJcclxuaW1wb3J0IFNldHRpbmdTdWJUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZVwiXHJcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4vZ2VuZXJhbC9Db2RlQmxvY2tcIlxyXG5pbXBvcnQgY2xvbmVOdWxsUHJvdG8gZnJvbSBcIi4uL21vZHVsZXMvY2xvbmVOdWxsUHJvdG9cIlxyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi9nZW5lcmFsL1Rvb2x0aXBcIlxyXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4vaW5wdXRzL0NvbG9yUGlja2VyXCJcclxuaW1wb3J0IEFsZXJ0Qm94IGZyb20gXCIuL2dlbmVyYWwvQWxlcnRCb3hcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xvbmVOdWxsUHJvdG8oe1xyXG4gICAgaW5wdXRzOiBjbG9uZU51bGxQcm90byh7XHJcbiAgICAgICAgQnV0dG9uOiBEaXNjb3JkQnV0dG9uLFxyXG4gICAgICAgIFN3aXRjaDogU3dpdGNoLFxyXG4gICAgICAgIENob2ljZXM6IFJhZGlvR3JvdXAsXHJcbiAgICAgICAgUmFkaW9Hcm91cDogUmFkaW9Hcm91cCxcclxuICAgICAgICBUZXh0QXJlYTogVGV4dEFyZWEsXHJcbiAgICAgICAgVGV4dElucHV0OiBUZXh0SW5wdXQsXHJcbiAgICAgICAgRHJvcGRvd246IERyb3Bkb3duLFxyXG4gICAgICAgIENvbG9yUGlja2VyOiBDb2xvclBpY2tlclxyXG4gICAgfSksXHJcbiAgICBnZW5lcmFsOiBjbG9uZU51bGxQcm90byh7XHJcbiAgICAgICAgVGl0bGU6IFRpdGxlLFxyXG4gICAgICAgIFNldHRpbmdzVGl0bGU6IFNldHRpbmdzVGl0bGUsXHJcbiAgICAgICAgU2V0dGluZ1N1YlRpdGxlOiBTZXR0aW5nU3ViVGl0bGUsXHJcbiAgICAgICAgVGFiczogVGFicyxcclxuICAgICAgICBDb2RlQmxvY2s6IENvZGVCbG9jayxcclxuICAgICAgICBUb29sdGlwOiBUb29sdGlwLFxyXG4gICAgICAgIEFsZXJ0Qm94OiBBbGVydEJveFxyXG4gICAgfSlcclxufSkiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgQWxlcnRCb3hQcm9wcyA9IHtcclxuICAgIHR5cGU6IFwid2FyblwifFwiaW5mb1wifFwiZGFuZ2VyXCJ8XCJlcnJvclwifFwic3VjY2Vzc1wiLFxyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZXxzdHJpbmdcclxufVxyXG5cclxubGV0IEFsZXJ0Qm94TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBbGVydEJveFByb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkFsZXJ0Qm94UHJvcHMgPSB7XHJcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBBbGVydEJveE1vZHVsZXMgfHwgKEFsZXJ0Qm94TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJNYXJrZG93blwiICYmIGUuZGVmYXVsdC5kZWZhdWx0UHJvcHMucGFyc2VyKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICAgIE1hcmtkb3duXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgd3JhcFxyXG4gICAgICAgIGxldCBjaGlsZHJlblxyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgd3JhcCA9IE1hcmtkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9LCBNYXJrZG93bi5kZWZhdWx0UHJvcHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gd3JhcC5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3cmFwID0gTWFya2Rvd24ucHJvdG90eXBlLnJlbmRlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiXCJcclxuICAgICAgICAgICAgICAgIH0sIE1hcmtkb3duLmRlZmF1bHRQcm9wcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXAucHJvcHMuY2hpbGRyZW4gPSA8ZGl2IGNsYXNzTmFtZT17XCJsYy1hbGVydC1ib3ggbGMtYWxlcnQtYm94LVwiK3RoaXMucHJvcHMudHlwZX0+XHJcbiAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cImxjLWJsb2NrcXVvdGVcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHJldHVybiB3cmFwXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIioqKkRpc2NvcmQncyoqKiAqKk1hcmtkb3duKiogX2lzXyBbc3VwcG9ydGVkXShodHRwczovL2dvb2dsZS5jb20pIG9yIHlvdSBjYW4ganVzdCBpbnNlcnQgeW91ciBvd24gcmVhY3QgY2hpbGRzLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGluZm86IFwiWW91IGNhbiBpbnNlcnQgbWFya2Rvd24gKGFzIHN0cmluZykgb3Igbm9ybWFsIHJlYWN0IGNoaWxkc1wiLFxyXG4gICAgICAgIHdhcm46IFwiQWxsIHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGFzIG1hcmtkb3duLiBJZiB5b3Ugd2FudCByYXcgc3RyaW5nLCBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0cmluZyBpbnNpZGUuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuXHJcbnR5cGUgQ29kZUJsb2NrUHJvcHMgPSB7XHJcbiAgICBsYW5ndWFnZT86IHN0cmluZyxcclxuICAgIGNvbnRlbnQ6IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgQ29kZUJsb2NrTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29kZUJsb2NrUHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6Q29kZUJsb2NrUHJvcHMgPSB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwicGxhaW50ZXh0XCIsXHJcbiAgICAgICAgY29udGVudDogXCJcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBDb2RlQmxvY2tNb2R1bGVzIHx8IChDb2RlQmxvY2tNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1hcmt1cCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWVzc2FnZUNvbnRlbnQpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLnNjcm9sbGJhckdob3N0SGFpcmxpbmUpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmhpZ2hsaWdodCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWFyZ2luQm90dG9tOClcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1lc3NhZ2VNb2R1bGUxLFxyXG4gICAgICAgICAgICBtZXNzYWdlTW9kdWxlMixcclxuICAgICAgICAgICAgc2Nyb2xsYmFyTW9kdWxlMSxcclxuICAgICAgICAgICAgaGlnaHRsaWdodEpTLFxyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGUxXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5wcm9wcy5sYW5ndWFnZSA9PT0gXCJwbGFpbnRleHRcIiA/IDxjb2RlIGNsYXNzTmFtZT17YCR7c2Nyb2xsYmFyTW9kdWxlMS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lfSBobGpzYH0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgPC9jb2RlPiA6IDxjb2RlIGNsYXNzTmFtZT17YCR7c2Nyb2xsYmFyTW9kdWxlMS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lfSBobGpzYH0gXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBoaWdodGxpZ2h0SlMuaGlnaGxpZ2h0KHRoaXMucHJvcHMubGFuZ3VhZ2UsIHRoaXMucHJvcHMuY29udGVudCkudmFsdWV9fSAvPlxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Ake21lc3NhZ2VNb2R1bGUxLm1hcmt1cH0gJHttZXNzYWdlTW9kdWxlMi5tZXNzYWdlQ29udGVudH1gfT5cclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtjb2RlfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21hcmdpbk1vZHVsZTEubWFyZ2luQm90dG9tOH0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImNvbnNvbGUubG9nKFxcXCJFeGVtcGxlIGNvZGVcXFwiKVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcImpzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwicGxhaW50ZXh0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5Db2RlQmxvY2sucHJvdG90eXBlLm1vZHVsZXNbM10ubGlzdExhbmd1YWdlcygpLmZpbHRlcihlID0+IGUgIT09IFwianNcIikubWFwKGUgPT4gKHtsYW5ndWFnZTogZX0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFNldHRpbmdTdWJUaXRsZVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1N1YlRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNldHRpbmdTdWJUaXRsZVByb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlNldHRpbmdTdWJUaXRsZVByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUubWFyZ2luVG9wNjAgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiaDVcIl0pLFxyXG4gICAgICAgICAgICB3aW5kb3cuTGlnaHRjb3JkLkFwaS5XZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wic2l6ZTE0XCJdKSxcclxuICAgICAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNvbG9yU3RhbmRhcmRcIl0pXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGUsXHJcbiAgICAgICAgICAgIHRpdGxlTW9kdWxlLFxyXG4gICAgICAgICAgICBzaXplTW9kdWxlLFxyXG4gICAgICAgICAgICBjb2xvck1vZHVsZVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7Y29sb3JNb2R1bGUuY29sb3JTdGFuZGFyZH0gJHtzaXplTW9kdWxlLnNpemUxNH0gJHt0aXRsZU1vZHVsZS5oNX0gJHttYXJnaW5Nb2R1bGUubWFyZ2luQm90dG9tNH1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSA9KyBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImg1XCIsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgU2V0dGluZ3NUaXRsZVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nc1RpdGxlUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBTZXR0aW5nc1RpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5tYXJnaW5Ub3A2MCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1hcmdpbk1vZHVsZVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7bWFyZ2luTW9kdWxlLm1hcmdpblRvcDYwfSAke21hcmdpbk1vZHVsZS5tYXJnaW5Cb3R0b20yMH1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSA9KyBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge2NsYXNzTmFtZX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6U2V0dGluZ3NUaXRsZVByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBbXCJcIl0sXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IHsgUmVhY3ROb2RlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcblxyXG50eXBlIFRhYnNQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgdGFiczoge2xhYmVsOiBzdHJpbmcsIGlkOiBzdHJpbmd9W10sXHJcbiAgICBhY3RpdmU/OiBzdHJpbmdcclxuICAgIG9uQ2hhbmdlPzogKHRhYjogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGFic1Byb3BzLCB7XHJcbiAgICBhY3RpdmU6IHN0cmluZ1xyXG59PiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRhYnNQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICB0YWJzOiBbe2xhYmVsOiBcIk5vIHRhYnMgd2FzIHBhc3NlZCB0byA8VGFicz4uXCIsIGlkOiBcIm5vbmVcIn1dLFxyXG4gICAgICAgIGFjdGl2ZTogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICBzdHlsZToge31cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGFic1Byb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlIHx8IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGFic0VsZW1lbnRzOlRhYltdID0gW11cclxuICAgIFxyXG4gICAgZ2V0IHRhYnMoKTpUYWJzW1wicHJvcHNcIl1bXCJ0YWJzXCJde1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRhYnMgfHwgW11cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWIodGFiOnN0cmluZyl7XHJcbiAgICAgICAgaWYodGFiID09PSB0aGlzLnN0YXRlLmFjdGl2ZSlyZXR1cm5cclxuICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2hhbmdlKXRoaXMucHJvcHMub25DaGFuZ2UodGFiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRhYlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50YWJzRWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QWN0aXZlKHRhYiA9PT0gZS5wcm9wcy5pZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYldyYXBwZXJcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGMtdGFibmF2XCIgc3R5bGU9e3tmbGV4OiBcIjAgMSBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnRhYnMubWFwKHRhYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiLCB7VGFiQ29udGFpbmVyOiB0aGlzLCB0aXRsZTogdGFiLmxhYmVsLCBpZDogdGFiLmlkLCBrZXk6IGJ0b2EodGFiLmxhYmVsK1wiOlwiK3RhYi5pZCl9KVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH0gICBcclxuXHJcbiAgICBpc0FjdGl2ZSh0YWIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gdGFiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAoPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCIyMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZhcigtLWJhY2tncm91bmQtcHJpbWFyeSlcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjMwcHggMzBweFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJsYy10YWItYm94LXNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlByZXZpZXcgdGFiczwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWN0aXZlIHRhYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVuYWN0aXZlIHRhYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IFwiMVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHRhYklkKSA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtcclxuICAgIFRhYkNvbnRhaW5lcjogVGFicywgXHJcbiAgICB0aXRsZTogc3RyaW5nLCBcclxuICAgIGlkOiBzdHJpbmdcclxufSwge1xyXG4gICAgYWN0aXZlOiBib29sZWFuXHJcbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlOiBwcm9wcy5UYWJDb250YWluZXIuaXNBY3RpdmUocHJvcHMuaWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLlRhYkNvbnRhaW5lci50YWJzRWxlbWVudHMucHVzaCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZShpc0FjdGl2ZTpib29sZWFuKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlOiAhIWlzQWN0aXZlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYGxjLW5hdkl0ZW1gXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBsYy1uYXZJdGVtQWN0aXZlYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBsYy1uYXZJdGVtSW5hY3RpdmVgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5UYWJDb250YWluZXIuY2hhbmdlVGFiKHRoaXMucHJvcHMuaWQpXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBUaXRsZVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFRpdGxlTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUaXRsZVByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGl0bGVQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLmNvbG9yU3RhbmRhcmQgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5zaXplMzIgPT09IFwic3RyaW5nXCIpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5oMiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIGNvbG9yTW9kdWxlLFxyXG4gICAgICAgICAgICBzaXplTW9kdWxlLFxyXG4gICAgICAgICAgICB0aXRsZU1vZHVsZVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gYCR7Y29sb3JNb2R1bGUuY29sb3JTdGFuZGFyZH0gJHtzaXplTW9kdWxlLnNpemUxNH0gJHt0aXRsZU1vZHVsZS5oMn0gJHt0aXRsZU1vZHVsZS5kZWZhdWx0Q29sb3J9ICR7dGl0bGVNb2R1bGUuZGVmYXVsdE1hcmdpbmgyfWBcclxuICAgICAgICBpZihwcm9wcy5jbGFzc05hbWUpY2xhc3NOYW1lICs9IFwiIFwiK3Byb3BzLmNsYXNzTmFtZVxyXG5cclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUaXRsZVByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgZXhjbHVkZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL21vZHVsZXMvZXhjbHVkZVByb3BlcnRpZXNcIlxyXG5cclxudHlwZSBUb29sdGlwRGF0YSA9IHtcclxuICAgIG9uQ2xpY2soKTp2b2lkXHJcbiAgICBvbk1vdXNlRW50ZXIoKTp2b2lkXHJcbiAgICBvbk1vdXNlTGVhdmUoKTp2b2lkXHJcbiAgICBvbkNvbnRleHRNZW51KCk6dm9pZFxyXG4gICAgXCJhcmlhLWxhYmVsXCI6IHN0cmluZ1xyXG59XHJcbnR5cGUgVG9vbHRpcFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46UmVhY3ROb2RlLFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgcG9zaXRpb24/OiBUb29sdGlwUG9zaXRpb24sXHJcbiAgICBjb2xvcj86IFRvb2x0aXBDb2xvclxyXG59XHJcblxyXG5sZXQgVG9vbHRpcE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUb29sdGlwUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUb29sdGlwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRvb2x0aXBNb2R1bGVzIHx8IChUb29sdGlwTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUb29sdGlwXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUb29sdGlwXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBleGNsdWRlUHJvcGVydGllcyh0aGlzLnByb3BzLCBbXCJjaGlsZHJlblwiXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcC5kZWZhdWx0LCBwcm9wcywgKGRhdGE6VG9vbHRpcERhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VG9vbHRpcFByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgIHRleHQ6IFwiTm8gdGV4dCB3YXMgcGFzc2VkIHRvIFRvb2x0aXBcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICBjb2xvcjogXCJicmFuZFwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBSZWFjdC5jcmVhdGVFbGVtZW50KHdpbmRvdy5MaWdodGNvcmQuQXBpLkNvbXBvbmVudHMuaW5wdXRzLkJ1dHRvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29rOiBcImdob3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFwiSG92ZXIgdGhpcyBidXR0b24gdG8gc2VlIHRoZSB0b29sdGlwXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXhhbXBsZSBUb29sdGlwIFRleHRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW11cclxuICAgICAgICAgICAgVG9vbHRpcC5Db2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGNvbG9ycylcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgIFRvb2x0aXAuUG9zaXRpb25zLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2gocG9zaXRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFBvc2l0aW9uczpUb29sdGlwUG9zaXRpb25bXSA9IFtcInRvcFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiXVxyXG4gICAgc3RhdGljIENvbG9yczpUb29sdGlwQ29sb3JbXSA9IFtcImJsYWNrXCIsIFwiZ3JleVwiLCBcImJyYW5kXCIsIFwiZ3JlZW5cIiwgXCJ5ZWxsb3dcIiwgXCJyZWRcIl1cclxufVxyXG5sZXQgQWxsUHJldmlld3NcclxuXHJcbmV4cG9ydCB0eXBlIFRvb2x0aXBQb3NpdGlvbiA9IFwidG9wXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiYm90dG9tXCJcclxuZXhwb3J0IHR5cGUgVG9vbHRpcENvbG9yID0gXCJibGFja1wiIHwgXCJncmV5XCIgfCBcImJyYW5kXCIgfCBcImdyZWVuXCIgfCBcInllbGxvd1wiIHwgXCJyZWRcIiIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmxldCBCdXR0b25Nb2R1bGVzXHJcblxyXG50eXBlIEJ1dHRvblByb3BzID0ge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICBvbkNsaWNrPzogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yLFxyXG4gICAgd3JhcHBlcj86IGJvb2xlYW4sXHJcbiAgICBsb29rPzogQnV0dG9uTG9vayxcclxuICAgIHNpemU/OiBCdXR0b25TaXplLFxyXG4gICAgaG92ZXJDb2xvcj86IEJ1dHRvbkhvdmVycyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxCdXR0b25Qcm9wcywge2hvdmVyOiBib29sZWFufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6QnV0dG9uUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENvbG9yczpCdXR0b25Db2xvcltdID0gW1wiYnJhbmRcIiwgXCJncmV5XCIsIFwicmVkXCIsIFwiZ3JlZW5cIiwgXCJ5ZWxsb3dcIiwgXCJwcmltYXJ5XCIsIFwibGlua1wiLCBcIndoaXRlXCIsIFwiYmxhY2tcIiwgXCJ0cmFuc3BhcmVudFwiXVxyXG4gICAgc3RhdGljIExvb2tzOkJ1dHRvbkxvb2tbXSA9IFtcImZpbGxlZFwiLCBcImludmVydGVkXCIsIFwib3V0bGluZWRcIiwgXCJnaG9zdFwiLCBcImxpbmtcIiwgXCJibGFua1wiXVxyXG4gICAgc3RhdGljIFNpemVzOkJ1dHRvblNpemVbXSA9IFtcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIiwgXCJ4bGFyZ2VcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJpY29uXCIsIFwibm9uZVwiXVxyXG4gICAgc3RhdGljIEhvdmVyQ29sb3JzOiBCdXR0b25Ib3ZlcnNbXSA9IFtcImRlZmF1bHRcIiwgLi4uQnV0dG9uLkNvbG9yc11cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpeyAvLyBjYWNoaW5nIG1vZHVsZXNcclxuICAgICAgICByZXR1cm4gQnV0dG9uTW9kdWxlcyB8fCAoQnV0dG9uTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIl9ob3Jpem9udGFsXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNvbG9yVHJhbnNwYXJlbnRcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiYnV0dG9uV3JhcHBlclwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJCdXR0b25Db2xvcnNcIl0pLFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgZmxleE1vZHVsZSxcclxuICAgICAgICAgICAgZXVoTW9kdWxlMSxcclxuICAgICAgICAgICAgYnV0dG9uTW9kdWxlLFxyXG4gICAgICAgICAgICBjb2xvcnNNb2R1bGUsXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHM6QnV0dG9uUHJvcHMgPSB7fVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICBpZihcImNvbG9yXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jb2xvciA9IHRoaXMucHJvcHMuY29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImNoaWxkcmVuXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcIm9uQ2xpY2tcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xpY2sgPSB0aGlzLnByb3BzLm9uQ2xpY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcIndyYXBwZXJcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLndyYXBwZXIgPSAhIXRoaXMucHJvcHMud3JhcHBlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwibG9va1wiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMubG9vayA9IHRoaXMucHJvcHMubG9va1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwic2l6ZVwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwiaG92ZXJDb2xvclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IHRoaXMucHJvcHMuaG92ZXJDb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwiZGlzYWJsZWRcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Db2xvcnMuaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMubG9vayl7XHJcbiAgICAgICAgICAgIHByb3BzLmxvb2sgPSBwcm9wcy5sb29rLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uTG9va1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkxvb2tzLmluY2x1ZGVzKHByb3BzLmxvb2spKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSBCdXR0b24uTG9va3NbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5sb29rID0gQnV0dG9uLkxvb2tzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5zaXplKXtcclxuICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IHByb3BzLnNpemUudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25TaXplXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uU2l6ZXMuaW5jbHVkZXMocHJvcHMuc2l6ZSkpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IEJ1dHRvbi5TaXplc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLnNpemUgPSBCdXR0b24uU2l6ZXNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmhvdmVyQ29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvci50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkhvdmVyc1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkhvdmVyQ29sb3JzLmluY2x1ZGVzKHByb3BzLmhvdmVyQ29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSBCdXR0b24uSG92ZXJDb2xvcnNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gQnV0dG9uLkhvdmVyQ29sb3JzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uU2l6ZSA9IHByb3BzLnNpemUgPyBjb2xvcnNNb2R1bGUuQnV0dG9uU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXSB8fCBcIlwiIDogXCJcIlxyXG4gICAgICAgIGlmKGJ1dHRvblNpemUpYnV0dG9uU2l6ZSA9IFwiIFwiICsgYnV0dG9uU2l6ZVxyXG5cclxuICAgICAgICBsZXQgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IgPyBjb2xvcnNNb2R1bGUuQnV0dG9uSG92ZXJzW3Byb3BzLmhvdmVyQ29sb3IudG9VcHBlckNhc2UoKV0gfHwgXCJcIiA6IFwiXCJcclxuICAgICAgICBpZihob3ZlckNvbG9yKWhvdmVyQ29sb3IgPSBcIiBcIiArIGhvdmVyQ29sb3JcclxuXHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMud3JhcHBlciAhPT0gXCJib29sZWFuXCIpcHJvcHMud3JhcHBlciA9IHRydWVcclxuXHJcbiAgICAgICAgbGV0IGhvdmVyID0gdGhpcy5zdGF0ZS5ob3ZlciA/IGV1aE1vZHVsZTEuaGFzSG92ZXIgOiBcIlwiXHJcbiAgICAgICAgaWYoaG92ZXIpaG92ZXIgPSBcIiBcIiArIGhvdmVyXHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtmbGV4TW9kdWxlLmZsZXhDaGlsZH0gJHtldWhNb2R1bGUxLmJ1dHRvbn0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uTG9va3NbcHJvcHMubG9vay50b1VwcGVyQ2FzZSgpXX0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uQ29sb3JzW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldfSR7YnV0dG9uU2l6ZX0ke2hvdmVyQ29sb3J9JHtob3Zlcn0gJHtldWhNb2R1bGUxLmdyb3d9YH0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfSBvbk1vdXNlRW50ZXI9eyhldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWhvdmVyQ29sb3IpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH19IG9uTW91c2VMZWF2ZT17KGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighaG92ZXJDb2xvcilyZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH19IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldWhNb2R1bGUxLmNvbnRlbnRzfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIGlmKHByb3BzLndyYXBwZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2J1dHRvbk1vZHVsZS5idXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGNvbG9yIG9mIEJ1dHRvbi5Db2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGNvbG9ycylcclxuICAgICAgICAgICAgbGV0IGxvb2tzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBsb29rIG9mIEJ1dHRvbi5Mb29rcyl7XHJcbiAgICAgICAgICAgICAgICBsb29rcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsb29rOiBsb29rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2gobG9va3MpXHJcbiAgICAgICAgICAgIGxldCBzaXplcyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgc2l6ZSBvZiBCdXR0b24uU2l6ZXMpe1xyXG4gICAgICAgICAgICAgICAgc2l6ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHNpemVzKVxyXG4gICAgICAgICAgICBsZXQgaG92ZXJzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBob3ZlciBvZiBCdXR0b24uSG92ZXJDb2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgaG92ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IGhvdmVyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goaG92ZXJzKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7Y2hpbGRyZW46IFwiVGVzdCBCdXR0b25cIn1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DbGljazogKCkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe3dyYXBwZXI6IGZhbHNlfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tkaXNhYmxlZDogZmFsc2V9LCB7ZGlzYWJsZWQ6IHRydWV9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbG9yID0gXCJicmFuZFwiIHwgXCJncmV5XCIgfCBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicHJpbWFyeVwiIHwgXCJsaW5rXCIgfCBcIndoaXRlXCIgfCBcImJsYWNrXCIgfCBcInRyYW5zcGFyZW50XCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uTG9vayA9IFwiZmlsbGVkXCIgfCBcImludmVydGVkXCIgfCBcIm91dGxpbmVkXCIgfCBcImdob3N0XCIgfCBcImxpbmtcIiB8IFwiYmxhbmtcIlxyXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gXCJub25lXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJ4bGFyZ2VcIiB8IFwibWluXCIgfCBcIm1heFwiIHwgXCJpY29uXCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uSG92ZXJzID0gXCJkZWZhdWx0XCIgfCBCdXR0b25Db2xvciIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4uL2dlbmVyYWwvVG9vbHRpcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG5jb25zdCBDb25zdGFudHMgPSB7XHJcbiAgICBkZWZhdWx0Q29sb3I6IDEwMDcwNzA5LFxyXG4gICAgYmFzZUNvbG9yczogW1xyXG4gICAgICAgIDE3NTIyMjAsIFxyXG4gICAgICAgIDMwNjY5OTMsIFxyXG4gICAgICAgIDM0NDcwMDMsIFxyXG4gICAgICAgIDEwMTgxMDQ2LCBcclxuICAgICAgICAxNTI3NzY2NywgXHJcbiAgICAgICAgMTU4NDQzNjcsIFxyXG4gICAgICAgIDE1MTA1NTcwLCBcclxuICAgICAgICAxNTE1ODMzMiwgXHJcbiAgICAgICAgOTgwNzI3MCwgXHJcbiAgICAgICAgNjMyMzU5NSwgXHJcbiAgICAgICAgMTE0Njk4NiwgXHJcbiAgICAgICAgMjA2NzI3NiwgXHJcbiAgICAgICAgMjEyMzQxMiwgXHJcbiAgICAgICAgNzQxOTUzMCwgXHJcbiAgICAgICAgMTEzNDI5MzUsIFxyXG4gICAgICAgIDEyNzQ1NzQyLCBcclxuICAgICAgICAxMTAyNzIwMCwgXHJcbiAgICAgICAgMTAwMzg1NjIsIFxyXG4gICAgICAgIDk5MzYwMzEsIFxyXG4gICAgICAgIDU1MzMzMDZcclxuICAgIF1cclxufVxyXG5cclxudHlwZSBDb2xvclBpY2tlclByb3BzID0ge1xyXG4gICAgZGVmYXVsdENvbG9yPzogbnVtYmVyLFxyXG4gICAgY3VzdG9tQ29sb3I/OiBudW1iZXIsXHJcbiAgICBiYXNlQ29sb3JzPzogbnVtYmVyW10sXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIG9uQ2hhbmdlPzogKGNvbG9yOm51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgQ29sb3JQaWNrZXJNb2R1bGVzXHJcbmxldCBpc0ZldGNoaW5nID0gbnVsbFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29sb3JQaWNrZXJQcm9wcywge3ZhbHVlPzpzdHJpbmcsbGFzdENvbG9yOmFueX0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbG9yUGlja2VyUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBsYXN0Q29sb3I6IHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWwpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6Q29sb3JQaWNrZXJQcm9wcyA9IHtcclxuICAgICAgICBkZWZhdWx0Q29sb3I6IENvbnN0YW50cy5kZWZhdWx0Q29sb3IsXHJcbiAgICAgICAgY3VzdG9tQ29sb3I6IG51bGwsXHJcbiAgICAgICAgYmFzZUNvbG9yczogQ29uc3RhbnRzLmJhc2VDb2xvcnMsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQ29sb3JQaWNrZXJNb2R1bGVzIHx8IChDb2xvclBpY2tlck1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiQ29sb3JQaWNrZXJcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbG9yUGlja2VyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgQ29sb3JQaWNrZXJDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGlmKCFDb2xvclBpY2tlckNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgIGlmKGlzRmV0Y2hpbmcpaXNGZXRjaGluZy50aGVuKGUgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKSAvLyBzdXBwb3J0IGZvciBtdWx0aXBsZSBjb2xvciBwaWNrZXJcclxuICAgICAgICAgICAgQ29sb3JQaWNrZXJNb2R1bGVzID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZVxyXG4gICAgICAgICAgICBpc0ZldGNoaW5nID0gbmV3IFByb21pc2UocmVzID0+IChyZXNvbHZlID0gcmVzKSlcclxuICAgICAgICAgICAgY29uc3QgR3VpbGRTZXR0aW5nc1JvbGVzID0gbmV3IChXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZS5pbmNsdWRlcyhcIkd1aWxkU2V0dGluZ3NSb2xlc1wiKSkuZGVmYXVsdCkoKS5yZW5kZXIoKS50eXBlXHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gR3VpbGRTZXR0aW5nc1JvbGVzLnByb3RvdHlwZS5yZW5kZXJSb2xlU2V0dGluZ3MuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWxkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZXI6ICgpID0+IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFJvbGUoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgR3VpbGRSb2xlU2V0dGluZ3MgPSBzZXR0aW5ncy5wcm9wcy5jaGlsZHJlbi50eXBlXHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IEd1aWxkUm9sZVNldHRpbmdzLnByb3RvdHlwZS5yZW5kZXJDb2xvclBpY2tlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlcnlvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnR5cGUoY2hpbGRyZW4ucHJvcHMpLnByb3BzLmNoaWxkcmVuLnR5cGUuX2N0b3IoKS50aGVuKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8Q29sb3JQaWNrZXJDb21wb25lbnQuZGVmYXVsdCBjb2xvcnM9e3RoaXMucHJvcHMuYmFzZUNvbG9yc30gZGVmYXVsdENvbG9yPXt0aGlzLnByb3BzLmRlZmF1bHRDb2xvcn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGN1c3RvbUNvbG9yPXt0aGlzLnByb3BzLmN1c3RvbUNvbG9yfT5cclxuICAgICAgICA8L0NvbG9yUGlja2VyQ29tcG9uZW50LmRlZmF1bHQ+XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sYXN0Q29sb3IgIT09IHRoaXMucHJvcHMudmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0Q29sb3I6IHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xvclBpY2tlcigpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFV0aWxzLkhleENvbG9yVG9EZWNpbWFsKFwiIzcyODlEQVwiKVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGNvbG9yKSA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgaW5mbzogXCJUbyBjb252ZXJ0IGhleCBjb2xvcnMgdG8gZGVjaW1hbCwgeW91IGNhbiBkbyBgTGlnaHRjb3JkLkFwaS5VdGlscy5IZXhDb2xvclRvRGVjaW1hbCgnI3lvdXJjb2xvcicpYCBhbmQgZ28gYmFjayB3aXRoIGBMaWdodGNvcmQuQXBpLlV0aWxzLkRlY2ltYWxDb2xvclRvSGV4KDc1MDYzOTQpYFwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBEcm9wZG93blByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgdmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBvcHRpb25SZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBtdWx0aVZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hhYmxlPzogYm9vbGVhbixcclxuICAgIGNsZWFyYWJsZT86IGJvb2xlYW4sXHJcbiAgICBzdHlsZU92ZXJyaWRlcz86IENTU1Byb3BlcnRpZXMsXHJcbiAgICBsaWdodFRoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgZGFya1RoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgaXNNdWx0aT86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSB0aGVtZU92ZXJyaWRlID0ge1xyXG4gICAgbmV1dHJhbDA6IHN0cmluZyxcclxuICAgIG5ldXRyYWw1OiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMTA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwyMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDMwOiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5MjU6IHN0cmluZyxcclxuICAgIHByaW1hcnk1MDogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBtZW51QmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgbWVudUJvcmRlcjogc3RyaW5nLFxyXG4gICAgc2Nyb2xsQmFyVGh1bWI6IHN0cmluZyxcclxuICAgIG11bHRpT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBEcm9wZG93bk1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJvcGRvd25Qcm9wcywge3ZhbHVlOiBzdHJpbmd8bnVsbH0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkRyb3Bkb3duUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkRyb3Bkb3duUHJvcHMgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5vIG9wdGlvbnMgLSBObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gRHJvcGRvd24uIElmIHlvdSBtZWFudCB0byBwdXQgYW4gZW1wdHkgZHJvcGRvd24sIGlucHV0IGFuIGVtcHR5IGFycmF5LlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdmFsdWVSZW5kZXJlcjogbnVsbCxcclxuICAgICAgICBtdWx0aVZhbHVlUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb3B0aW9uUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IG51bGwsXHJcbiAgICAgICAgbGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGlzTXVsdGk6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gRHJvcGRvd25Nb2R1bGVzIHx8IChEcm9wZG93bk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU2VsZWN0VGVtcFdyYXBwZXJcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgRHJvcGRvd25Db21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSA8RHJvcGRvd25Db21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJBbiBlcnJvciBvY2N1cmVkXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxuXHJcbnR5cGUgUmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBjb2xvcj86IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBkZXNjPzogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzaXplPzogXCJzbWFsbFwifFwibWVkaXVtXCIsXHJcbiAgICBpdGVtVHlwZT86IFwiYmFyXCJ8XCJwYW5lbFwiLFxyXG4gICAgaW5mb0NsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgUmFkaW9Hcm91cE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJhZGlvR3JvdXBQcm9wcywge3ZhbHVlPzogc3RyaW5nfT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpSYWRpb0dyb3VwUHJvcHMgPSB7XHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIk5vIG9wdGlvbnNcIixcclxuICAgICAgICAgICAgZGVzYzogXCJObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gQ2hvaWNlcy4gSWYgeW91IG1lYW50IHRvIGRpc3BsYXkgbm8gb3B0aW9ucyBhdCBhbGwsIHBsZWFzZSBwYXNzIGFuIGVtcHR5IGFycmF5LlwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZjA0NzQ3XCJcclxuICAgICAgICB9XSxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2l6ZTogXCJtZWRpdW1cIixcclxuICAgICAgICBpdGVtVHlwZTogXCJiYXJcIixcclxuICAgICAgICBpbmZvQ2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpSYWRpb0dyb3VwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXYudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBldi52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gUmFkaW9Hcm91cE1vZHVsZSB8fCAoUmFkaW9Hcm91cE1vZHVsZSA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJSYWRpb0dyb3VwXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFJhZGlvR3JvdXBDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPFJhZGlvR3JvdXBDb21wb25lbnQgb3B0aW9ucz17cHJvcHMub3B0aW9uc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IFxyXG4gICAgICAgICAgICBzaXplPXtSYWRpb0dyb3VwQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IGl0ZW1UeXBlPXtSYWRpb0dyb3VwQ29tcG9uZW50Lkl0ZW1UeXBlc1twcm9wcy5pdGVtVHlwZS50b1VwcGVyQ2FzZSgpXX0gXHJcbiAgICAgICAgICAgIGluZm9DbGFzc05hbWU9e3Byb3BzLmluZm9DbGFzc05hbWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKTpzdHJpbmd8bnVsbHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1lZGl1bVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcImJhclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcInBhbmVsXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTd2l0Y2hQcm9wcyA9IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogYm9vbGVhbixcclxuICAgIGZpbGw/OiBzdHJpbmcsXHJcbiAgICB0aGVtZT86IFwiZGVmYXVsdFwifFwiY2xlYXJcIixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIixcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5sZXQgU3dpdGNoTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3dpdGNoUHJvcHMsIHt2YWx1ZTogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlN3aXRjaFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBTd2l0Y2hNb2R1bGVzIHx8IChTd2l0Y2hNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlN3aXRjaFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBTd2l0Y2hDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKDxTd2l0Y2hDb21wb25lbnQgaWQ9e3Byb3BzLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgfHwgZmFsc2V9IGZpbGw9e3Byb3BzLmZpbGx9IFxyXG4gICAgICAgICAgICB0aGVtZT17U3dpdGNoQ29tcG9uZW50LlRoZW1lc1twcm9wcy50aGVtZS50b1VwcGVyQ2FzZSgpXX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHNpemU9e1N3aXRjaENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBzdHlsZT17cHJvcHMuc3R5bGV9Lz4pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIXRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWxsOiBudWxsLFxyXG4gICAgICAgIHRoZW1lOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DaGFuZ2U6ICh2YWx1ZSkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNsZWFyXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy1zd2l0Y2hcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IG51bGxcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGVycm9yOiBcIlRoZSBgY2xlYXJgIG9wdGlvbiBkb2Vzbid0IHdvcmsgd2VsbCBvbiBsaWdodCB0aGVtZS5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dEFyZWFQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW4sXHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbixcclxuICAgIGZsZXg/OiBib29sZWFuLFxyXG4gICAgYXV0b3NpemU/OiBmYWxzZSxcclxuICAgIHJvd3M/OiBudW1iZXIsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uS2V5RG93bj86IChldikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dEFyZWFNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRBcmVhUHJvcHMsIHt2YWx1ZTogc3RyaW5nfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGV4dEFyZWFQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0QXJlYU1vZHVsZXMgfHwgKFRleHRBcmVhTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0QXJlYVwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgbmFtZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldiwgbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2LCBuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbktleURvd24oZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbktleURvd249e3RoaXMub25LZXlEb3dufSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlIHx8IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRBcmVhUHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcclxuICAgICAgICBmbGV4OiBmYWxzZSxcclxuICAgICAgICBhdXRvc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QLFxyXG4gICAgICAgIG9uS2V5RG93bjogTk9PUFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBpLXByZXZpZXctdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbnVsbFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGZsZXg6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGF1dG9zaXplOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvc2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcm93czogM1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAyXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvd3M6IDFcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJFeGFtcGxlIGVycm9yXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogMTAwXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgd2FybjogXCJUaGlzIHNob3VsZCBiZSB1c2VkIGZvciBtdWx0aSBsaW5lIGlucHV0cy5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgc2l6ZT86IFwiZGVmYXVsdFwifFwibWluaVwiXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzTmFtZT86IHN0cmluZ1xyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dElucHV0TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRleHRJbnB1dFByb3BzLCB7dmFsdWU6IHN0cmluZ30+IHtcclxuICAgIGhhc1NldDogYm9vbGVhblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRleHRJbnB1dFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiA5OTksXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dElucHV0TW9kdWxlcyB8fCAoVGV4dElucHV0TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0SW5wdXRcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCBuYW1lLCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMuaGFzU2V0KXJldHVybiAvLyBwcmV2ZW50IGV2ZW50IGlmIHRoZSBvbkNoYW5nZSBoYXMgY2hhbmdlZCB0aGUgdmFsdWUuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gLz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSB8fCBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgICAgICB0aGlzLmhhc1NldCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJhcGktcHJldmlldy10ZXh0aW5wdXRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHNpemU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkV4YW1wbGUgZXJyb3JcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogOTk5XHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0aW5wdXRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIHdhcm46IFwiVGhpcyBzaG91bGQgYmUgdXNlZCBmb3Igc2luZ2xlIGxpbmUgaW5wdXRzLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL21vZHVsZXMvVXRpbHNcIlxyXG5cclxuY29uc3QgTGlnaHRjb3JkQXBpID0ge1xyXG4gICAgV2VicGFja0xvYWRlcjogV2VicGFja0xvYWRlcixcclxuICAgIENvbXBvbmVudHM6IENvbXBvbmVudHMsXHJcbiAgICB1dWlkOiB1dWlkLFxyXG4gICAgVXRpbHM6IFV0aWxzXHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIHZhciBSZWFjdDp0eXBlb2YgaW1wb3J0KFwicmVhY3RcIilcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIExpZ2h0Y29yZDogTGlnaHRjb3JkR2xvYmFsLFxyXG4gICAgICAgIEJETW9kdWxlczoge1xyXG4gICAgICAgICAgICBtb2R1bGVzOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoZmlsdGVyOihtb2Q6YW55KT0+Ym9vbGVhbiwgbW9kdWxlcz86YW55W10pOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoaWQ6bnVtYmVyLCBtb2R1bGVzPzphbnlbXSk6YW55LFxyXG4gICAgICAgICAgICBnZXQoaWRzOiBbbnVtYmVyfCgobW9kOmFueSk9PmJvb2xlYW4pXSwgbW9kdWxlcz86YW55W10pOmFueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBMaWdodGNvcmQ6TGlnaHRjb3JkR2xvYmFsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0Y29yZEFwaVxyXG5cclxuT2JqZWN0LmFzc2lnbih3aW5kb3cuTGlnaHRjb3JkLkFwaSwgTGlnaHRjb3JkQXBpKVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIExpZ2h0Y29yZCBleHBvcnRzLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZGBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRjb3JkR2xvYmFsIHtcclxuICAgIERpc2NvcmRNb2R1bGVzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW50ZXJuYWwgRGlzY29yZCdzIGRpc3BhdGNoZXIgLSBjYW4gYmUgdXNlZCB0byBzdWJzY3JpYmUgdG8gZ2F0ZXdheSBldmVudHMgLyBjbGllbnQgZXZlbnRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BhdGNoZXI6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZERpc3BhdGNoZXJUeXBlc1wiKS5kZWZhdWx0LFxyXG4gICAgICAgIGNvbnN0YW50czogaW1wb3J0KFwiLi90eXBlcy9EaXNjb3JkQ29uc3RhbnRzVHlwZXNcIikuZGVmYXVsdFxyXG4gICAgfSxcclxuICAgIFNldHRpbmdzOiB7XHJcbiAgICAgICAgZGV2TW9kZTogYm9vbGVhbixcclxuICAgICAgICBjYWxsUmluZ2luZ0JlYXQ6IGJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBBcGk6IExpZ2h0Y29yZEFwaUdsb2JhbFxyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gQXBpLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZC5BcGlgXHJcbiAqL1xyXG50eXBlIExpZ2h0Y29yZEFwaUdsb2JhbCA9IGxpZ2h0Y29yZEFwaU1haW5FeHBvcnRzICYgdHlwZW9mIExpZ2h0Y29yZEFwaVxyXG5cclxudHlwZSBsaWdodGNvcmRBcGlNYWluRXhwb3J0cyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgdGhlIGZpcnN0IG1vZHVsZSB0aGF0IG1hdGNoIHRoZSBmaWx0ZXIgZ2V0cyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBUaGUgZmlsdGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBtb2R1bGUgdG8gbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGVuc3VyZUV4cG9ydGVkKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOlByb21pc2U8YW55PixcclxuICAgIC8qKlxyXG4gICAgICogUmVjcmVhdGUgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBgX19wcm90b19fYCBhbmQgYHByb3RvdHlwZWAgcHJvcGVydGllcyAtIHVzZWZ1bGwgZm9yIGJldHRlciBmb3JtYXR0aW5nIGluIGNvbnNvbGUuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gcmVjcmVhdGVcclxuICAgICAqL1xyXG4gICAgY2xvbmVOdWxsUHJvdG88T2JqID0gYW55PihvYmo6T2JqKTpPYmpcclxufSIsImltcG9ydCBjb21wb25lbnRzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIlxyXG5pbXBvcnQgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL3V1aWRcIlxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0cy9UZXh0SW5wdXRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFBsdWdpblV0aWxpdGllcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICByZW5kZXJTZXR0aW5ncyhzZXR0aW5nczpTZXR0aW5nSXRlbVtdKXtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLnJlbmRlclNldHRpbmdzVG9SZWFjdChzZXR0aW5ncylcclxuICAgICAgICBsZXQgZWxlbSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2tleTogdXVpZCgpfSwgaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLlJlYWN0VG9IVE1MRWxlbWVudChlbGVtKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzVG9SZWFjdChzZXR0aW5nczpTZXR0aW5nSXRlbVtdKXtcclxuICAgICAgICBsZXQgaXRlbXMgPSBbXVxyXG4gICAgICAgIHNldHRpbmdzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgaXRlbSAhPT0gXCJvYmplY3RcIilyZXR1cm4gaXRlbXMucHVzaChpdGVtKVxyXG4gICAgICAgICAgICBpZihpdGVtLnByb3BzICYmIFwiY2hpbGRyZW5cIiBpbiBpdGVtLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGl0ZW0ucHJvcHMuY2hpbGRyZW4pKWl0ZW0ucHJvcHMuY2hpbGRyZW4gPSBbaXRlbS5wcm9wcy5jaGlsZHJlbl1cclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJvcHMuY2hpbGRyZW4gPSB0aGlzLnJlbmRlclNldHRpbmdzVG9SZWFjdChpdGVtLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFpdGVtLnByb3BzKWl0ZW0ucHJvcHMgPSB7fVxyXG4gICAgICAgICAgICBpdGVtLnByb3BzLmtleSA9IHV1aWQoKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gVXRpbHMuZ2V0TmVzdGVkUHJvcHMoY29tcG9uZW50cywgaXRlbS5jb21wb25lbnQpXHJcbiAgICAgICAgICAgIGlmKCFjb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHdhcm5pbmcgPSBuZXcgVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFdhcm5pbmc6IE5vIGNvbXBvbmVudCB3YXMgZm91bmQgZm9yOiBcIiR7aXRlbS5jb21wb25lbnR9XCIuIFBsZWFzZSBjb3JyZWN0IHlvdXIgY29kZS5gLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmBcclxuICAgICAgICAgICAgICAgIH0pLnJlbmRlcigpXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHdhcm5pbmcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBPYmplY3QuY3JlYXRlKGl0ZW0ucHJvcHMpKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBpdGVtc1xyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIFNldHRpbmdJdGVtID0ge1xyXG4gICAgY29tcG9uZW50OiBzdHJpbmcsXHJcbiAgICBwcm9wczogQ29tcG9uZW50UHJvcHM8YW55PlxyXG59IiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIilcclxuaW1wb3J0IFBsdWdpblV0aWxpdGllcyBmcm9tIFwiLi9QbHVnaW5VdGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBSZWFjdFRvSFRNTEVsZW1lbnQoUmVhY3RFbGVtZW50OiBSZWFjdEVsZW1lbnQpeyAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdEVsZW1lbnQsIGVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUGx1Z2luVXRpbHMoKXtyZXR1cm4gUGx1Z2luVXRpbGl0aWVzfVxyXG5cclxuICAgIGdldE5lc3RlZFByb3BzKG9iajphbnksIHBhdGg6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi5cIilcclxuICAgICAgICBmb3IobGV0IHNlZyBvZiBzZWdtZW50cyl7XHJcbiAgICAgICAgICAgIG9iaiA9IG9iaiAmJiAoc2VnIGluIG9iaikgPyBvYmpbc2VnXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICB9XHJcblxyXG4gICAgRGVjaW1hbENvbG9yVG9IZXgoY29sb3I6bnVtYmVyKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiK2NvbG9yLnRvU3RyaW5nKDE2KVxyXG4gICAgfVxyXG5cclxuICAgIEhleENvbG9yVG9EZWNpbWFsKGNvbG9yOnN0cmluZyk6bnVtYmVye1xyXG4gICAgICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgvWyM7XS9nLCBcIlwiKVxyXG4gICAgICAgIGxldCByZXMgPSBwYXJzZUludChjb2xvciwgMTYpXHJcbiAgICAgICAgaWYoaXNOYU4ocmVzKSl0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29sb3I6ICR7Y29sb3J9YClcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbn0iLCJjb25zdCBCRE1vZHVsZXMgPSB3aW5kb3cuQkRNb2R1bGVzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgV2VicGFja0xvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBnZXQoaWQ6IG51bWJlcik6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGlkKVxyXG4gICAgfVxyXG4gICAgZmluZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IEJETW9kdWxlcy5nZXQoZmlsdGVyKVswXVxyXG4gICAgICAgIGlmKCFyZXN1bHQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZmlsdGVyLCBcImNvdWxkbid0IGZpbmQgdGhlIG1vZHVsZS5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgZmluZEJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVswXVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueVtde1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGZpbHRlcilcclxuICAgIH1cclxuICAgIGZpbHRlckJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFJlY3JlYXRlIHRoZSBnaXZlbiBvYmplY3Qgd2l0aG91dCB0aGUgX19wcm90b19fLiBVc2VmdWwgZm9yIGJldHRlciBmb3JtYXR0aW5nIHdoZW4gb3V0cHV0IGluIGNvbnNvbGUuXHJcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byByZWNyZWF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVOdWxsUHJvdG88T2JqPWFueT4ob2JqOk9iaik6T2Jqe1xyXG4gICAgbGV0IG8gPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgb1trXSA9IG9ialtrXVxyXG4gICAgfSlcclxuICAgIHJldHVybiBvXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGNsdWRlUHJvcGVydGllczxPYmogPSBhbnk+KG9iajpPYmosIHByb3BzOihrZXlvZiBPYmopW10pOlBhcnRpYWw8T2JqPntcclxuICAgIGxldCBuZXdPYmogPSB7fVxyXG5cclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLmluY2x1ZGVzKGsgYXMga2V5b2YgT2JqKSlyZXR1cm5cclxuICAgICAgICBuZXdPYmpba10gPSBvYmpba11cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG5ld09ialxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTk9PUCgpe30iLCJpbXBvcnQgKiBhcyB1dWlkdjEgZnJvbSBcInV1aWQvdjFcIlxyXG5pbXBvcnQgKiBhcyB1dWlkdjQgZnJvbSBcInV1aWQvdjRcIlxyXG5cclxudHlwZSB1dWlkRnVuYyA9ICgpID0+IHN0cmluZ1xyXG5sZXQgdXVpZDp1dWlkRnVuYyAmIHt2MTogdXVpZEZ1bmMsIHY0OiB1dWlkRnVuY30gPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdXVpZHY0KClcclxufSwge3YxOiAoKSA9PiB1dWlkdjEoKSwgdjQ6ICgpID0+IHV1aWR2NCgpfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV1aWQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3YxXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==