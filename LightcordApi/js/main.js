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

const selectors_1 = __webpack_require__(/*! ./selectors */ "./src/alias/selectors.ts");
// bait typescript into thinking this is not reactDOM so no circular dependency.
window.ReactDOM = (window["Reac" + "tDOM"] || // If in Lightcord
    (() => {
        try {
            return window.BdApi.findModule(selectors_1.ReactDOMSelector);
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            const webpack = __webpack_require__(/*! powercord/webpack */ "powercord/webpack");
            return webpack.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })() ||
    (() => {
        try {
            return window.EDApi.findModule(selectors_1.ReactDOMSelector);
        }
        catch (e) {
            return null;
        }
    })());
module.exports = window.ReactDOM;


/***/ }),

/***/ "./src/alias/selectors.ts":
/*!********************************!*\
  !*** ./src/alias/selectors.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactDOMSelector = exports.ReactSelector = void 0;
exports.ReactSelector = mod => !["Component", "PureComponent", "Children", "createElement", "cloneElement"].find(k => !mod[k]);
exports.ReactDOMSelector = mod => mod.findDOMNode;


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
const ErrorCatcher_1 = __webpack_require__(/*! ./private/ErrorCatcher */ "./src/components/private/ErrorCatcher.tsx");
const RadioGroupProxied = ErrorCatcher_1.createProxyErrorCatcherClass(RadioGroup_1.default);
exports.default = cloneNullProto_1.default({
    inputs: cloneNullProto_1.default({
        Button: ErrorCatcher_1.createProxyErrorCatcherClass(Button_1.default),
        Switch: ErrorCatcher_1.createProxyErrorCatcherClass(Switch_1.default),
        Choices: RadioGroupProxied,
        RadioGroup: RadioGroupProxied,
        TextArea: ErrorCatcher_1.createProxyErrorCatcherClass(TextArea_1.default),
        TextInput: ErrorCatcher_1.createProxyErrorCatcherClass(TextInput_1.default),
        Dropdown: ErrorCatcher_1.createProxyErrorCatcherClass(Dropdown_1.default),
        ColorPicker: ErrorCatcher_1.createProxyErrorCatcherClass(ColorPicker_1.default)
    }),
    general: cloneNullProto_1.default({
        Title: ErrorCatcher_1.createProxyErrorCatcherClass(Title_1.default),
        SettingsTitle: ErrorCatcher_1.createProxyErrorCatcherClass(SettingsTitle_1.default),
        SettingSubTitle: ErrorCatcher_1.createProxyErrorCatcherClass(SettingSubTitle_1.default),
        Tabs: ErrorCatcher_1.createProxyErrorCatcherClass(Tabs_1.default),
        CodeBlock: ErrorCatcher_1.createProxyErrorCatcherClass(CodeBlock_1.default),
        Tooltip: ErrorCatcher_1.createProxyErrorCatcherClass(Tooltip_1.default),
        AlertBox: ErrorCatcher_1.createProxyErrorCatcherClass(AlertBox_1.default)
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
            return; // already loaded
        if (isFetching)
            return; // is fetching so don't double preload.
        try { // If we caught an error
            new ColorPicker({}).render();
        }
        catch (e) {
            console.error(e);
        }
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
                },
                renderHeader: GuildSettingsRoles.prototype.renderHeader
            });
            const GuildRoleSettings = settings.props.children[1].type;
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
                ColorPickerModules = null;
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
    info: "To convert hex colors to decimal, you can do `Lightcord.Api.Utils.HexColorToDecimal('#7289DA')` and go back with `Lightcord.Api.Utils.DecimalColorToHex(7506394)`",
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

/***/ "./src/components/private/ErrorCatcher.tsx":
/*!*************************************************!*\
  !*** ./src/components/private/ErrorCatcher.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createProxyErrorCatcherClass = void 0;
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const DiscordTools_1 = __webpack_require__(/*! ../../modules/DiscordTools */ "./src/modules/DiscordTools.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const uuid_1 = __webpack_require__(/*! ../../modules/uuid */ "./src/modules/uuid.ts");
let ErrorCatcherModules;
class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.defaultProps = {
            children: null
        };
        this.state = {
            error: false,
            hasSentNotification: false
        };
    }
    get modules() {
        return ErrorCatcherModules || (ErrorCatcherModules = [
            WebpackLoader_1.default.find(e => e.emptyStateImage && e.emptyState)
        ]);
    }
    render() {
        if (!this.state.error) {
            return this.props.children;
        }
        else { // try to render a user-friendly interface.
            const [emptyClasses] = this.modules;
            if (!emptyClasses) { // If we can't, render nothing and show a notification.
                if (this.state.hasSentNotification)
                    return null; // If the notification was already sent, don't send one.
                const notification = DiscordTools_1.default.showNotification({
                    body: "An error occured. Please check the console for more informations.",
                    icon: "https://github.com/lightcord.png",
                    onClick: noop_1.default,
                    onClose: noop_1.default,
                    onShow: noop_1.default,
                    title: "Lightcord Informations"
                });
                this.setState({
                    hasSentNotification: true
                });
                setTimeout(() => {
                    notification.close();
                }, 2000);
                return null;
            }
            return React.createElement("div", { className: emptyClasses.emptyState },
                React.createElement("div", { className: emptyClasses.emptyStateImage, style: {
                        marginTop: "20px"
                    } }),
                React.createElement("div", { className: emptyClasses.emptyStateHeader }, "An error occured"),
                React.createElement("p", { className: emptyClasses.emptyStateSubtext }, "Please check the console for more informations. Join our \u00ADsupport server for more help."));
        }
    }
    componentDidCatch(error, errorInfo) {
        console.error(errorInfo.componentStack);
        this.setState({
            error: true
        });
    }
}
exports.default = ErrorCatcher;
function createProxyErrorCatcherClass(Class) {
    var _a;
    const ClassCopy = (_a = class Proxied extends React.Component {
            render() {
                return React.createElement(ErrorCatcher, { key: uuid_1.default() }, React.createElement(Class, Object.assign(Object.assign({}, this.props), { key: uuid_1.default() })));
            }
            static get original() {
                return Class;
            }
        },
        _a.displayName = Class["displayName"] || Class["name"],
        _a);
    Object.entries(Object.getOwnPropertyDescriptors(Class)).forEach(value => {
        if (value[0] in ClassCopy)
            return;
        Object.defineProperty(ClassCopy, value[0], value[1]);
    });
    return ClassCopy;
}
exports.createProxyErrorCatcherClass = createProxyErrorCatcherClass;


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
const environnement_1 = __webpack_require__(/*! ./modules/environnement */ "./src/modules/environnement.ts");
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
    },
    get isNative() { return environnement_1.isNative; },
    get isImported() { return environnement_1.isImported; }
};
exports.default = LightcordApi;
Object.assign(window.Lightcord.Api, LightcordApi);


/***/ }),

/***/ "./src/modules/BDModules.ts":
/*!**********************************!*\
  !*** ./src/modules/BDModules.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let req;
setReq();
function filterDangerous(mods) {
    return mods.map(e => {
        return protect(e);
    });
}
function protect(exports) {
    let theModule = exports.exports;
    let mod = theModule.default;
    if (!mod)
        return exports;
    if (mod.remove && mod.set && mod.clear && mod.get && !mod.sort)
        return null;
    if (!mod.getToken && !mod.getEmail && !mod.showToken)
        return exports;
    const proxy = new Proxy(mod, {
        getOwnPropertyDescriptor: function (obj, prop) {
            if (prop === "getToken" || prop === "getEmail" || prop === "showToken")
                return undefined;
            return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function (obj, func) {
            if (func == "getToken" && obj.getToken)
                return () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa";
            if (func == "getEmail" && obj.getEmail)
                return () => "puppet11112@gmail.com";
            if (func == "showToken" && obj.showToken)
                return () => true;
            if (func == "__proto__" && obj.__proto__)
                return proxy;
            return obj[func];
        }
    });
    return Object.assign({}, exports, { exports: Object.assign({}, theModule, { default: proxy }) });
}
class Webpackloader {
    get modules() {
        if (req) {
            return filterDangerous(Object.values(req.c).filter((e) => e && e.exports));
        }
        else {
            setReq();
            if (req) {
                return filterDangerous(Object.values(req.c).filter((e) => e && e.exports));
            }
            else {
                return [];
            }
        }
    }
    get(ids, modules) {
        if (typeof ids === "function") {
            return (modules || this.modules).map((mdl) => {
                if (mdl && typeof mdl.exports !== "undefined") {
                    return mdl.exports;
                }
                else {
                    return null;
                }
            }).filter(e => e).filter(ids);
        }
        else if (Array.isArray(ids)) {
            modules = modules || this.modules;
            return ids.map(id => this.get(id, modules));
        }
        else {
            modules = modules || this.modules;
            let module = modules.filter(e => !!e).find(e => e.i === ids);
            if (!module)
                return undefined;
            return module.exports;
        }
    }
    get default() {
        return this;
    }
}
exports.default = new Webpackloader();
function setReq() {
    try {
        req = window["webpackJsonp"].push([[], { __extra_id__: (mdl, exports, req) => mdl.exports = req }, [["__extra_id__"]]]);
        if (req) {
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;
        }
    }
    catch (e) {
        req = undefined;
    }
}


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
        this.nextTickRefresh = false;
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
    update(data) {
        for (let key in data) {
            if (key === "id")
                continue;
            this.data[key] = data[key];
        }
        if (!this.nextTickRefresh) {
            this.nextTickRefresh = true;
            process.nextTick(() => {
                this.nextTickRefresh = false;
                Notices_1.events.emit("noticeUpdate");
            });
        }
    }
    get text() {
        return this.data.text;
    }
    set text(text) {
        this.update({
            text
        });
    }
    get type() {
        return this.data.type;
    }
    set type(type) {
        this.update({
            type
        });
    }
    get buttonText() {
        return this.data.buttonText;
    }
    set buttonText(buttonText) {
        this.update({
            buttonText
        });
    }
    get onClick() {
        return this.data.onClick;
    }
    set onClick(onClick) {
        this.update({
            onClick
        });
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
const BDModules = window.BDModules || __webpack_require__(/*! ./BDModules */ "./src/modules/BDModules.ts");
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
        message += "\n\tThis error is related to Lightcord not being able to find a WebpackModule. \n\tPlease show this error and a few lines of logs above this error to the devs. \n\tOpen an issue on https://github.com/Lightcord/Lightcord or in our discord server.";
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

/***/ "./src/modules/environnement.ts":
/*!**************************************!*\
  !*** ./src/modules/environnement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isImported = exports.isNative = void 0;
exports.isNative = typeof window.BDModules === "undefined";
exports.isImported = typeof window.BDModules !== "undefined";


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
const environnement_1 = __webpack_require__(/*! ./environnement */ "./src/modules/environnement.ts");
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
    if (environnement_1.isNative) {
        /** START USERPOPOUT PATCH */
        awaitLogin()
            .then(async () => {
            let UserPopout = await getModule(e => e.default && e.default.displayName === "FluxContainer(ForwardRef(SubscribeGuildMembersContainer(UserPopout)))");
            const userModule = await getModule(e => e.default && e.default.getCurrentUser);
            const render1 = new UserPopout.default({ userId: userModule.default.getCurrentUser().id, guildId: null, channelId: null, disableUserProfileLink: true }).render();
            const PopoutProps = render1.props;
            const render2 = render1.type.render(PopoutProps, null);
            const render3 = new render2.type(render2.props).render();
            const UserPopoutComponent = render3.type;
            if (!UserPopoutComponent)
                throw new Error(`Couldn't find the UserPopoutComponent component.`);
            const render = UserPopoutComponent.prototype.render;
            UserPopoutComponent.prototype.render = function () {
                const returnValue = render.call(this, ...arguments);
                try {
                    returnValue.props.children.props["data-user-id"] = this.props.user.id;
                }
                catch (e) {
                    console.error(e);
                }
                return returnValue;
            };
        });
        /** END USERPOPOUT PATCH*/
        /** START USERPROFILE PATCH */
        awaitLogin()
            .then(async () => {
            let UserProfile = await getModule(e => e.default && e.default.displayName === "UserProfile");
            const userModule = await getModule(e => e.default && e.default.getCurrentUser);
            const render1 = new UserProfile.default({
                user: userModule.default.getCurrentUser()
            }).render();
            const render2 = new render1.type(render1.props).render();
            const render3 = render2.type.render(render2.props, null);
            const render4 = new render3.type(render3.props).render();
            const UserProfileComponent = render4.type;
            if (!UserProfileComponent)
                throw new Error(`Couldn't find the UserProfileComponent component.`);
            const render = UserProfileComponent.prototype.render;
            UserProfileComponent.prototype.render = function () {
                const returnValue = render.call(this, ...arguments);
                console.log(returnValue);
                try {
                    returnValue.props.children.props["data-user-id"] = this.props.user.id;
                }
                catch (e) {
                    console.error(e);
                }
                return returnValue;
            };
        });
        /** END USERPROFILE PATCH */
    }
    // TODO: Add in app-notifications / confirmations.
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
let hasCompletedLogin = false;
let loginPromise;
function awaitLogin() {
    if (hasCompletedLogin)
        return Promise.resolve();
    if (loginPromise)
        return loginPromise;
    return loginPromise = new Promise((resolve) => {
        let isResolved = false;
        window.Lightcord.DiscordModules.dispatcher.subscribe("CONNECTION_OPEN", (ev) => {
            if (isResolved)
                return;
            hasCompletedLogin = true;
            resolve();
            isResolved = true;
        });
    });
}
window.Lightcord.DiscordModules.dispatcher.subscribe("LOGOUT", (ev) => {
    hasCompletedLogin = false;
    loginPromise = undefined;
});


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

/***/ "powercord/webpack":
/*!************************************!*\
  !*** external "powercord/webpack" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("powercord/webpack");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvYWxpYXMvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9BbGVydEJveC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9Db2RlQmxvY2sudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvU2V0dGluZ1N1YlRpdGxlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1NldHRpbmdzVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVGFicy50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9Ub29sdGlwLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9CdXR0b24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Db2xvclBpY2tlci50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvUmFkaW9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1N3aXRjaC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9wcml2YXRlL0Vycm9yQ2F0Y2hlci50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2UudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlcy50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL0JETW9kdWxlcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9EaXNjb3JkVG9vbHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvUGx1Z2luVXRpbGl0aWVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1VuZnJlZXplLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1V0aWxzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1dlYnBhY2tMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvY2xvbmVOdWxsUHJvdG8udHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvZW52aXJvbm5lbWVudC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9leGNsdWRlUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9ub29wLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL3BhdGNoZXJzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL3V1aWQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwicG93ZXJjb3JkL3dlYnBhY2tcIiIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3YxXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92NFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQSx1RkFBOEM7QUFFOUMs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QUEsb0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgUmVhY3RET01TZWxlY3RvciB9IGZyb20gXCIuL3NlbGVjdG9yc1wiXHJcblxyXG4vLyBiYWl0IHR5cGVzY3JpcHQgaW50byB0aGlua2luZyB0aGlzIGlzIG5vdCByZWFjdERPTSBzbyBubyBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG53aW5kb3cuUmVhY3RET00gPSAod2luZG93W1wiUmVhY1wiK1widERPTVwiXSB8fCAvLyBJZiBpbiBMaWdodGNvcmRcclxuICAgICgoKT0+eyAvLyBJZiBpbiBTdGFuZGFyZCBCZXR0ZXJEaXNjb3JkXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkJkQXBpLmZpbmRNb2R1bGUoUmVhY3RET01TZWxlY3RvciBhcyBhbnkpXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0pKCkgfHxcclxuICAgICgoKT0+eyAvLyBJZiBpbiBQb3dlcmNvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKFwicG93ZXJjb3JkL3dlYnBhY2tcIilcclxuICAgICAgICAgICAgcmV0dXJuIHdlYnBhY2suUmVhY3RET01cclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSB8fCBcclxuICAgICgoKT0+eyAvLyBJZiBpbiBFbmhhbmNlZERpc2NvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRURBcGkuZmluZE1vZHVsZShSZWFjdERPTVNlbGVjdG9yIGFzIGFueSlcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSkgYXMgdHlwZW9mIGltcG9ydChcInJlYWN0LWRvbVwiKVxyXG5cclxuZXhwb3J0ID0gKHdpbmRvdy5SZWFjdERPTSBhcyBhbnkpIiwiZXhwb3J0IGNvbnN0IFJlYWN0U2VsZWN0b3IgPSBtb2QgPT4gIVtcIkNvbXBvbmVudFwiLCBcIlB1cmVDb21wb25lbnRcIiwgXCJDaGlsZHJlblwiLCBcImNyZWF0ZUVsZW1lbnRcIiwgXCJjbG9uZUVsZW1lbnRcIl0uZmluZChrID0+ICFtb2Rba10pXHJcbmV4cG9ydCBjb25zdCBSZWFjdERPTVNlbGVjdG9yID0gbW9kID0+IG1vZC5maW5kRE9NTm9kZSIsImltcG9ydCBEaXNjb3JkQnV0dG9uIGZyb20gXCIuL2lucHV0cy9CdXR0b25cIlxyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuL2lucHV0cy9Td2l0Y2hcIlxyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi9pbnB1dHMvUmFkaW9Hcm91cFwiXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9pbnB1dHMvVGV4dEFyZWFcIlxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL2lucHV0cy9UZXh0SW5wdXRcIlxyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vaW5wdXRzL0Ryb3Bkb3duXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL2dlbmVyYWwvVGl0bGVcIlxyXG5pbXBvcnQgU2V0dGluZ3NUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1NldHRpbmdzVGl0bGVcIlxyXG5pbXBvcnQgVGFicywgeyBUYWIgfSBmcm9tIFwiLi9nZW5lcmFsL1RhYnNcIlxyXG5pbXBvcnQgU2V0dGluZ1N1YlRpdGxlIGZyb20gXCIuL2dlbmVyYWwvU2V0dGluZ1N1YlRpdGxlXCJcclxuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi9nZW5lcmFsL0NvZGVCbG9ja1wiXHJcbmltcG9ydCBjbG9uZU51bGxQcm90byBmcm9tIFwiLi4vbW9kdWxlcy9jbG9uZU51bGxQcm90b1wiXHJcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL2dlbmVyYWwvVG9vbHRpcFwiXHJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi9pbnB1dHMvQ29sb3JQaWNrZXJcIlxyXG5pbXBvcnQgQWxlcnRCb3ggZnJvbSBcIi4vZ2VuZXJhbC9BbGVydEJveFwiXHJcbmltcG9ydCB7IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MgfSBmcm9tIFwiLi9wcml2YXRlL0Vycm9yQ2F0Y2hlclwiXHJcblxyXG5jb25zdCBSYWRpb0dyb3VwUHJveGllZCA9IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoUmFkaW9Hcm91cClcclxuZXhwb3J0IGRlZmF1bHQgY2xvbmVOdWxsUHJvdG8oe1xyXG4gICAgaW5wdXRzOiBjbG9uZU51bGxQcm90byh7XHJcbiAgICAgICAgQnV0dG9uOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKERpc2NvcmRCdXR0b24pLFxyXG4gICAgICAgIFN3aXRjaDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhTd2l0Y2gpLFxyXG4gICAgICAgIENob2ljZXM6IFJhZGlvR3JvdXBQcm94aWVkLFxyXG4gICAgICAgIFJhZGlvR3JvdXA6IFJhZGlvR3JvdXBQcm94aWVkLFxyXG4gICAgICAgIFRleHRBcmVhOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFRleHRBcmVhKSxcclxuICAgICAgICBUZXh0SW5wdXQ6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVGV4dElucHV0KSxcclxuICAgICAgICBEcm9wZG93bjogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhEcm9wZG93biksXHJcbiAgICAgICAgQ29sb3JQaWNrZXI6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoQ29sb3JQaWNrZXIpXHJcbiAgICB9KSxcclxuICAgIGdlbmVyYWw6IGNsb25lTnVsbFByb3RvKHtcclxuICAgICAgICBUaXRsZTogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUaXRsZSksXHJcbiAgICAgICAgU2V0dGluZ3NUaXRsZTogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhTZXR0aW5nc1RpdGxlKSxcclxuICAgICAgICBTZXR0aW5nU3ViVGl0bGU6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoU2V0dGluZ1N1YlRpdGxlKSxcclxuICAgICAgICBUYWJzOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFRhYnMpLFxyXG4gICAgICAgIENvZGVCbG9jazogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhDb2RlQmxvY2spLFxyXG4gICAgICAgIFRvb2x0aXA6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVG9vbHRpcCksXHJcbiAgICAgICAgQWxlcnRCb3g6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoQWxlcnRCb3gpXHJcbiAgICB9KVxyXG59KSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBBbGVydEJveFByb3BzID0ge1xyXG4gICAgdHlwZTogXCJ3YXJuXCJ8XCJpbmZvXCJ8XCJkYW5nZXJcInxcImVycm9yXCJ8XCJzdWNjZXNzXCIsXHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlfHN0cmluZ1xyXG59XHJcblxyXG5sZXQgQWxlcnRCb3hNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFsZXJ0Qm94UHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6QWxlcnRCb3hQcm9wcyA9IHtcclxuICAgICAgICB0eXBlOiBcImluZm9cIixcclxuICAgICAgICBjaGlsZHJlbjogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsZXJ0Qm94TW9kdWxlcyB8fCAoQWxlcnRCb3hNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIk1hcmtkb3duXCIgJiYgZS5kZWZhdWx0LmRlZmF1bHRQcm9wcy5wYXJzZXIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IFtcclxuICAgICAgICAgICAgTWFya2Rvd25cclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCB3cmFwXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuXHJcbiAgICAgICAgaWYodHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICB3cmFwID0gTWFya2Rvd24ucHJvdG90eXBlLnJlbmRlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIH0sIE1hcmtkb3duLmRlZmF1bHRQcm9wcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSB3cmFwLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHdyYXAgPSBNYXJrZG93bi5wcm90b3R5cGUucmVuZGVyLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSwgTWFya2Rvd24uZGVmYXVsdFByb3BzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgd3JhcC5wcm9wcy5jaGlsZHJlbiA9IDxkaXYgY2xhc3NOYW1lPXtcImxjLWFsZXJ0LWJveCBsYy1hbGVydC1ib3gtXCIrdGhpcy5wcm9wcy50eXBlfT5cclxuICAgICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwibGMtYmxvY2txdW90ZVwiPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgcmV0dXJuIHdyYXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiKioqRGlzY29yZCdzKioqICoqTWFya2Rvd24qKiBfaXNfIFtzdXBwb3J0ZWRdKGh0dHBzOi8vZ29vZ2xlLmNvbSkgb3IgeW91IGNhbiBqdXN0IGluc2VydCB5b3VyIG93biByZWFjdCBjaGlsZHMuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FyblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgaW5mbzogXCJZb3UgY2FuIGluc2VydCBtYXJrZG93biAoYXMgc3RyaW5nKSBvciBub3JtYWwgcmVhY3QgY2hpbGRzXCIsXHJcbiAgICAgICAgd2FybjogXCJBbGwgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgbWFya2Rvd24uIElmIHlvdSB3YW50IHJhdyBzdHJpbmcsIHBhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RyaW5nIGluc2lkZS5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5cclxudHlwZSBDb2RlQmxvY2tQcm9wcyA9IHtcclxuICAgIGxhbmd1YWdlPzogc3RyaW5nLFxyXG4gICAgY29udGVudDogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBDb2RlQmxvY2tNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb2RlQmxvY2tQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpDb2RlQmxvY2tQcm9wcyA9IHtcclxuICAgICAgICBsYW5ndWFnZTogXCJwbGFpbnRleHRcIixcclxuICAgICAgICBjb250ZW50OiBcIlwiXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIENvZGVCbG9ja01vZHVsZXMgfHwgKENvZGVCbG9ja01vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubWFya3VwKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5tZXNzYWdlQ29udGVudCksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuc2Nyb2xsYmFyR2hvc3RIYWlybGluZSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuaGlnaGxpZ2h0KSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5tYXJnaW5Cb3R0b204KVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWVzc2FnZU1vZHVsZTEsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VNb2R1bGUyLFxyXG4gICAgICAgICAgICBzY3JvbGxiYXJNb2R1bGUxLFxyXG4gICAgICAgICAgICBoaWdodGxpZ2h0SlMsXHJcbiAgICAgICAgICAgIG1hcmdpbk1vZHVsZTFcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLnByb3BzLmxhbmd1YWdlID09PSBcInBsYWludGV4dFwiID8gPGNvZGUgY2xhc3NOYW1lPXtgJHtzY3JvbGxiYXJNb2R1bGUxLnNjcm9sbGJhckdob3N0SGFpcmxpbmV9IGhsanNgfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udGVudH1cclxuICAgICAgICA8L2NvZGU+IDogPGNvZGUgY2xhc3NOYW1lPXtgJHtzY3JvbGxiYXJNb2R1bGUxLnNjcm9sbGJhckdob3N0SGFpcmxpbmV9IGhsanNgfSBcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGhpZ2h0bGlnaHRKUy5oaWdobGlnaHQodGhpcy5wcm9wcy5sYW5ndWFnZSwgdGhpcy5wcm9wcy5jb250ZW50KS52YWx1ZX19IC8+XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YCR7bWVzc2FnZU1vZHVsZTEubWFya3VwfSAke21lc3NhZ2VNb2R1bGUyLm1lc3NhZ2VDb250ZW50fWB9PlxyXG4gICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAge2NvZGV9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFyZ2luTW9kdWxlMS5tYXJnaW5Cb3R0b204fT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiY29uc29sZS5sb2coXFxcIkV4ZW1wbGUgY29kZVxcXCIpXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IFwianNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJwbGFpbnRleHRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLkNvZGVCbG9jay5wcm90b3R5cGUubW9kdWxlc1szXS5saXN0TGFuZ3VhZ2VzKCkuZmlsdGVyKGUgPT4gZSAhPT0gXCJqc1wiKS5tYXAoZSA9PiAoe2xhbmd1YWdlOiBlfSkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgU2V0dGluZ1N1YlRpdGxlUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFRpdGxlTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nU3ViVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ1N1YlRpdGxlUHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6U2V0dGluZ1N1YlRpdGxlUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5tYXJnaW5Ub3A2MCA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJoNVwiXSksXHJcbiAgICAgICAgICAgIHdpbmRvdy5MaWdodGNvcmQuQXBpLldlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJzaXplMTRcIl0pLFxyXG4gICAgICAgICAgICB3aW5kb3cuTGlnaHRjb3JkLkFwaS5XZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiY29sb3JTdGFuZGFyZFwiXSlcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIG1hcmdpbk1vZHVsZSxcclxuICAgICAgICAgICAgdGl0bGVNb2R1bGUsXHJcbiAgICAgICAgICAgIHNpemVNb2R1bGUsXHJcbiAgICAgICAgICAgIGNvbG9yTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHtjb2xvck1vZHVsZS5jb2xvclN0YW5kYXJkfSAke3NpemVNb2R1bGUuc2l6ZTE0fSAke3RpdGxlTW9kdWxlLmg1fSAke21hcmdpbk1vZHVsZS5tYXJnaW5Cb3R0b200fWBcclxuICAgICAgICBpZihwcm9wcy5jbGFzc05hbWUpY2xhc3NOYW1lID0rIFwiIFwiK3Byb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDVcIiwge2NsYXNzTmFtZX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBTZXR0aW5nc1RpdGxlUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFRpdGxlTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc1RpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNldHRpbmdzVGl0bGVQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFNldHRpbmdzVGl0bGVQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLm1hcmdpblRvcDYwID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHttYXJnaW5Nb2R1bGUubWFyZ2luVG9wNjB9ICR7bWFyZ2luTW9kdWxlLm1hcmdpbkJvdHRvbTIwfWBcclxuICAgICAgICBpZihwcm9wcy5jbGFzc05hbWUpY2xhc3NOYW1lID0rIFwiIFwiK3Byb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpTZXR0aW5nc1RpdGxlUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IFtcIlwiXSxcclxuICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcclxuXHJcbnR5cGUgVGFic1Byb3BzID0ge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICB0YWJzOiB7bGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZ31bXSxcclxuICAgIGFjdGl2ZT86IHN0cmluZ1xyXG4gICAgb25DaGFuZ2U/OiAodGFiOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJzUHJvcHMsIHtcclxuICAgIGFjdGl2ZTogc3RyaW5nXHJcbn0+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGFic1Byb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxyXG4gICAgICAgIHRhYnM6IFt7bGFiZWw6IFwiTm8gdGFicyB3YXMgcGFzc2VkIHRvIDxUYWJzPi5cIiwgaWQ6IFwibm9uZVwifV0sXHJcbiAgICAgICAgYWN0aXZlOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpUYWJzUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWJzRWxlbWVudHM6VGFiW10gPSBbXVxyXG4gICAgXHJcbiAgICBnZXQgdGFicygpOlRhYnNbXCJwcm9wc1wiXVtcInRhYnNcIl17XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGFicyB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYih0YWI6c3RyaW5nKXtcclxuICAgICAgICBpZih0YWIgPT09IHRoaXMuc3RhdGUuYWN0aXZlKXJldHVyblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpdGhpcy5wcm9wcy5vbkNoYW5nZSh0YWIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGFiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRhYnNFbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBY3RpdmUodGFiID09PSBlLnByb3BzLmlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibGMtdGFiV3JhcHBlclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYy10YWJuYXZcIiBzdHlsZT17e2ZsZXg6IFwiMCAxIGF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMudGFicy5tYXAodGFiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHtUYWJDb250YWluZXI6IHRoaXMsIHRpdGxlOiB0YWIubGFiZWwsIGlkOiB0YWIuaWQsIGtleTogYnRvYSh0YWIubGFiZWwrXCI6XCIrdGFiLmlkKX0pXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGMtdGFiXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGlzQWN0aXZlKHRhYil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlID09PSB0YWJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICg8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KVwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMzBweCAzMHB4XCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImxjLXRhYi1ib3gtc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGU+UHJldmlldyB0YWJzPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY3RpdmUgdGFiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVW5hY3RpdmUgdGFiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogXCIxXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAodGFiSWQpID0+IHt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3NcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xyXG4gICAgVGFiQ29udGFpbmVyOiBUYWJzLCBcclxuICAgIHRpdGxlOiBzdHJpbmcsIFxyXG4gICAgaWQ6IHN0cmluZ1xyXG59LCB7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW5cclxufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IHByb3BzLlRhYkNvbnRhaW5lci5pc0FjdGl2ZShwcm9wcy5pZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuVGFiQ29udGFpbmVyLnRhYnNFbGVtZW50cy5wdXNoKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmU6ICEhaXNBY3RpdmVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgbGMtbmF2SXRlbWBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIGxjLW5hdkl0ZW1BY3RpdmVgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIGxjLW5hdkl0ZW1JbmFjdGl2ZWBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLlRhYkNvbnRhaW5lci5jaGFuZ2VUYWIodGhpcy5wcm9wcy5pZClcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIFRpdGxlUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZSxcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRpdGxlUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUaXRsZVByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuY29sb3JTdGFuZGFyZCA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLnNpemUzMiA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLmgyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgY29sb3JNb2R1bGUsXHJcbiAgICAgICAgICAgIHNpemVNb2R1bGUsXHJcbiAgICAgICAgICAgIHRpdGxlTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHtjb2xvck1vZHVsZS5jb2xvclN0YW5kYXJkfSAke3NpemVNb2R1bGUuc2l6ZTE0fSAke3RpdGxlTW9kdWxlLmgyfSAke3RpdGxlTW9kdWxlLmRlZmF1bHRDb2xvcn0gJHt0aXRsZU1vZHVsZS5kZWZhdWx0TWFyZ2luaDJ9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgKz0gXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcblxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRpdGxlUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBleGNsdWRlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9leGNsdWRlUHJvcGVydGllc1wiXHJcblxyXG50eXBlIFRvb2x0aXBEYXRhID0ge1xyXG4gICAgb25DbGljaygpOnZvaWRcclxuICAgIG9uTW91c2VFbnRlcigpOnZvaWRcclxuICAgIG9uTW91c2VMZWF2ZSgpOnZvaWRcclxuICAgIG9uQ29udGV4dE1lbnUoKTp2b2lkXHJcbiAgICBcImFyaWEtbGFiZWxcIjogc3RyaW5nXHJcbn1cclxudHlwZSBUb29sdGlwUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjpSZWFjdE5vZGUsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbj86IFRvb2x0aXBQb3NpdGlvbixcclxuICAgIGNvbG9yPzogVG9vbHRpcENvbG9yXHJcbn1cclxuXHJcbmxldCBUb29sdGlwTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRvb2x0aXBQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRvb2x0aXBQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVG9vbHRpcE1vZHVsZXMgfHwgKFRvb2x0aXBNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlRvb2x0aXBcIilcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRvb2x0aXBcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IGV4Y2x1ZGVQcm9wZXJ0aWVzKHRoaXMucHJvcHMsIFtcImNoaWxkcmVuXCJdKVxyXG5cclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLmRlZmF1bHQsIHByb3BzLCAoZGF0YTpUb29sdGlwRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUb29sdGlwUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgdGV4dDogXCJObyB0ZXh0IHdhcyBwYXNzZWQgdG8gVG9vbHRpcFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgIGNvbG9yOiBcImJyYW5kXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFJlYWN0LmNyZWF0ZUVsZW1lbnQod2luZG93LkxpZ2h0Y29yZC5BcGkuQ29tcG9uZW50cy5pbnB1dHMuQnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2s6IFwiZ2hvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJIb3ZlciB0aGlzIGJ1dHRvbiB0byBzZWUgdGhlIHRvb2x0aXBcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJFeGFtcGxlIFRvb2x0aXAgVGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBUb29sdGlwLkNvbG9ycy5mb3JFYWNoKGNvbG9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goY29sb3JzKVxyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gW11cclxuICAgICAgICAgICAgVG9vbHRpcC5Qb3NpdGlvbnMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChwb3NpdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUG9zaXRpb25zOlRvb2x0aXBQb3NpdGlvbltdID0gW1widG9wXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCJdXHJcbiAgICBzdGF0aWMgQ29sb3JzOlRvb2x0aXBDb2xvcltdID0gW1wiYmxhY2tcIiwgXCJncmV5XCIsIFwiYnJhbmRcIiwgXCJncmVlblwiLCBcInllbGxvd1wiLCBcInJlZFwiXVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuZXhwb3J0IHR5cGUgVG9vbHRpcFBvc2l0aW9uID0gXCJ0b3BcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJib3R0b21cIlxyXG5leHBvcnQgdHlwZSBUb29sdGlwQ29sb3IgPSBcImJsYWNrXCIgfCBcImdyZXlcIiB8IFwiYnJhbmRcIiB8IFwiZ3JlZW5cIiB8IFwieWVsbG93XCIgfCBcInJlZFwiIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxubGV0IEJ1dHRvbk1vZHVsZXNcclxuXHJcbnR5cGUgQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZSxcclxuICAgIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcixcclxuICAgIGNvbG9yPzogQnV0dG9uQ29sb3IsXHJcbiAgICB3cmFwcGVyPzogYm9vbGVhbixcclxuICAgIGxvb2s/OiBCdXR0b25Mb29rLFxyXG4gICAgc2l6ZT86IEJ1dHRvblNpemUsXHJcbiAgICBob3ZlckNvbG9yPzogQnV0dG9uSG92ZXJzLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEJ1dHRvblByb3BzLCB7aG92ZXI6IGJvb2xlYW59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpCdXR0b25Qcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29sb3JzOkJ1dHRvbkNvbG9yW10gPSBbXCJicmFuZFwiLCBcImdyZXlcIiwgXCJyZWRcIiwgXCJncmVlblwiLCBcInllbGxvd1wiLCBcInByaW1hcnlcIiwgXCJsaW5rXCIsIFwid2hpdGVcIiwgXCJibGFja1wiLCBcInRyYW5zcGFyZW50XCJdXHJcbiAgICBzdGF0aWMgTG9va3M6QnV0dG9uTG9va1tdID0gW1wiZmlsbGVkXCIsIFwiaW52ZXJ0ZWRcIiwgXCJvdXRsaW5lZFwiLCBcImdob3N0XCIsIFwibGlua1wiLCBcImJsYW5rXCJdXHJcbiAgICBzdGF0aWMgU2l6ZXM6QnV0dG9uU2l6ZVtdID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiLCBcInhsYXJnZVwiLCBcIm1pblwiLCBcIm1heFwiLCBcImljb25cIiwgXCJub25lXCJdXHJcbiAgICBzdGF0aWMgSG92ZXJDb2xvcnM6IEJ1dHRvbkhvdmVyc1tdID0gW1wiZGVmYXVsdFwiLCAuLi5CdXR0b24uQ29sb3JzXVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7IC8vIGNhY2hpbmcgbW9kdWxlc1xyXG4gICAgICAgIHJldHVybiBCdXR0b25Nb2R1bGVzIHx8IChCdXR0b25Nb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiX2hvcml6b250YWxcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiY29sb3JUcmFuc3BhcmVudFwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJidXR0b25XcmFwcGVyXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIkJ1dHRvbkNvbG9yc1wiXSksXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBmbGV4TW9kdWxlLFxyXG4gICAgICAgICAgICBldWhNb2R1bGUxLFxyXG4gICAgICAgICAgICBidXR0b25Nb2R1bGUsXHJcbiAgICAgICAgICAgIGNvbG9yc01vZHVsZSxcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wczpCdXR0b25Qcm9wcyA9IHt9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgIGlmKFwiY29sb3JcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gdGhpcy5wcm9wcy5jb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwiY2hpbGRyZW5cIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwib25DbGlja1wiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DbGljayA9IHRoaXMucHJvcHMub25DbGlja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwid3JhcHBlclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMud3JhcHBlciA9ICEhdGhpcy5wcm9wcy53cmFwcGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJsb29rXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5sb29rID0gdGhpcy5wcm9wcy5sb29rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJzaXplXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zaXplID0gdGhpcy5wcm9wcy5zaXplXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJob3ZlckNvbG9yXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gdGhpcy5wcm9wcy5ob3ZlckNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJkaXNhYmxlZFwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5jb2xvcil7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbG9yID0gcHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25Db2xvclxyXG4gICAgICAgICAgICBpZighQnV0dG9uLkNvbG9ycy5pbmNsdWRlcyhwcm9wcy5jb2xvcikpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBCdXR0b24uQ29sb3JzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBCdXR0b24uQ29sb3JzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5sb29rKXtcclxuICAgICAgICAgICAgcHJvcHMubG9vayA9IHByb3BzLmxvb2sudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25Mb29rXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uTG9va3MuaW5jbHVkZXMocHJvcHMubG9vaykpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMubG9vayA9IEJ1dHRvbi5Mb29rc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLmxvb2sgPSBCdXR0b24uTG9va3NbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLnNpemUpe1xyXG4gICAgICAgICAgICBwcm9wcy5zaXplID0gcHJvcHMuc2l6ZS50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvblNpemVcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5TaXplcy5pbmNsdWRlcyhwcm9wcy5zaXplKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zaXplID0gQnV0dG9uLlNpemVzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IEJ1dHRvbi5TaXplc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuaG92ZXJDb2xvcil7XHJcbiAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSBwcm9wcy5ob3ZlckNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uSG92ZXJzXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uSG92ZXJDb2xvcnMuaW5jbHVkZXMocHJvcHMuaG92ZXJDb2xvcikpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IEJ1dHRvbi5Ib3ZlckNvbG9yc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSBCdXR0b24uSG92ZXJDb2xvcnNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBidXR0b25TaXplID0gcHJvcHMuc2l6ZSA/IGNvbG9yc01vZHVsZS5CdXR0b25TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldIHx8IFwiXCIgOiBcIlwiXHJcbiAgICAgICAgaWYoYnV0dG9uU2l6ZSlidXR0b25TaXplID0gXCIgXCIgKyBidXR0b25TaXplXHJcblxyXG4gICAgICAgIGxldCBob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvciA/IGNvbG9yc01vZHVsZS5CdXR0b25Ib3ZlcnNbcHJvcHMuaG92ZXJDb2xvci50b1VwcGVyQ2FzZSgpXSB8fCBcIlwiIDogXCJcIlxyXG4gICAgICAgIGlmKGhvdmVyQ29sb3IpaG92ZXJDb2xvciA9IFwiIFwiICsgaG92ZXJDb2xvclxyXG5cclxuICAgICAgICBwcm9wcy5vbkNsaWNrID0gdHlwZW9mIHByb3BzLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BzLm9uQ2xpY2sgOiAoKSA9PiB7fVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy53cmFwcGVyICE9PSBcImJvb2xlYW5cIilwcm9wcy53cmFwcGVyID0gdHJ1ZVxyXG5cclxuICAgICAgICBsZXQgaG92ZXIgPSB0aGlzLnN0YXRlLmhvdmVyID8gZXVoTW9kdWxlMS5oYXNIb3ZlciA6IFwiXCJcclxuICAgICAgICBpZihob3Zlcilob3ZlciA9IFwiIFwiICsgaG92ZXJcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ZsZXhNb2R1bGUuZmxleENoaWxkfSAke2V1aE1vZHVsZTEuYnV0dG9ufSAke2NvbG9yc01vZHVsZS5CdXR0b25Mb29rc1twcm9wcy5sb29rLnRvVXBwZXJDYXNlKCldfSAke2NvbG9yc01vZHVsZS5CdXR0b25Db2xvcnNbcHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV19JHtidXR0b25TaXplfSR7aG92ZXJDb2xvcn0ke2hvdmVyfSAke2V1aE1vZHVsZTEuZ3Jvd31gfSBcclxuICAgICAgICAgICAgc3R5bGU9e3tmbGV4OiBcIjAgMSBhdXRvXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9IG9uTW91c2VFbnRlcj17KGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighaG92ZXJDb2xvcilyZXR1cm5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyOiB0cnVlfSlcclxuICAgICAgICAgICAgfX0gb25Nb3VzZUxlYXZlPXsoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFob3ZlckNvbG9yKXJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V1aE1vZHVsZTEuY29udGVudHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgaWYocHJvcHMud3JhcHBlcil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YnV0dG9uTW9kdWxlLmJ1dHRvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidXR0b25cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgY29sb3Igb2YgQnV0dG9uLkNvbG9ycyl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goY29sb3JzKVxyXG4gICAgICAgICAgICBsZXQgbG9va3MgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGxvb2sgb2YgQnV0dG9uLkxvb2tzKXtcclxuICAgICAgICAgICAgICAgIGxvb2tzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s6IGxvb2tcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChsb29rcylcclxuICAgICAgICAgICAgbGV0IHNpemVzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBzaXplIG9mIEJ1dHRvbi5TaXplcyl7XHJcbiAgICAgICAgICAgICAgICBzaXplcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBzaXplXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goc2l6ZXMpXHJcbiAgICAgICAgICAgIGxldCBob3ZlcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGhvdmVyIG9mIEJ1dHRvbi5Ib3ZlckNvbG9ycyl7XHJcbiAgICAgICAgICAgICAgICBob3ZlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJDb2xvcjogaG92ZXJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChob3ZlcnMpXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tjaGlsZHJlbjogXCJUZXN0IEJ1dHRvblwifV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tvbkNsaWNrOiAoKSA9PiB7fX1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7d3JhcHBlcjogZmFsc2V9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe2Rpc2FibGVkOiBmYWxzZX0sIHtkaXNhYmxlZDogdHJ1ZX1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQnV0dG9uQ29sb3IgPSBcImJyYW5kXCIgfCBcImdyZXlcIiB8IFwicmVkXCIgfCBcImdyZWVuXCIgfCBcInllbGxvd1wiIHwgXCJwcmltYXJ5XCIgfCBcImxpbmtcIiB8IFwid2hpdGVcIiB8IFwiYmxhY2tcIiB8IFwidHJhbnNwYXJlbnRcIlxyXG5leHBvcnQgdHlwZSBCdXR0b25Mb29rID0gXCJmaWxsZWRcIiB8IFwiaW52ZXJ0ZWRcIiB8IFwib3V0bGluZWRcIiB8IFwiZ2hvc3RcIiB8IFwibGlua1wiIHwgXCJibGFua1wiXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSBcIm5vbmVcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgfCBcInhsYXJnZVwiIHwgXCJtaW5cIiB8IFwibWF4XCIgfCBcImljb25cIlxyXG5leHBvcnQgdHlwZSBCdXR0b25Ib3ZlcnMgPSBcImRlZmF1bHRcIiB8IEJ1dHRvbkNvbG9yIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi4vZ2VuZXJhbC9Ub29sdGlwXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuaW1wb3J0IHsgY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyB9IGZyb20gXCIuLi9wcml2YXRlL0Vycm9yQ2F0Y2hlclwiXHJcblxyXG5jb25zdCBDb25zdGFudHMgPSB7XHJcbiAgICBkZWZhdWx0Q29sb3I6IDEwMDcwNzA5LFxyXG4gICAgYmFzZUNvbG9yczogW1xyXG4gICAgICAgIDE3NTIyMjAsIFxyXG4gICAgICAgIDMwNjY5OTMsIFxyXG4gICAgICAgIDM0NDcwMDMsIFxyXG4gICAgICAgIDEwMTgxMDQ2LCBcclxuICAgICAgICAxNTI3NzY2NywgXHJcbiAgICAgICAgMTU4NDQzNjcsIFxyXG4gICAgICAgIDE1MTA1NTcwLCBcclxuICAgICAgICAxNTE1ODMzMiwgXHJcbiAgICAgICAgOTgwNzI3MCwgXHJcbiAgICAgICAgNjMyMzU5NSwgXHJcbiAgICAgICAgMTE0Njk4NiwgXHJcbiAgICAgICAgMjA2NzI3NiwgXHJcbiAgICAgICAgMjEyMzQxMiwgXHJcbiAgICAgICAgNzQxOTUzMCwgXHJcbiAgICAgICAgMTEzNDI5MzUsIFxyXG4gICAgICAgIDEyNzQ1NzQyLCBcclxuICAgICAgICAxMTAyNzIwMCwgXHJcbiAgICAgICAgMTAwMzg1NjIsIFxyXG4gICAgICAgIDk5MzYwMzEsIFxyXG4gICAgICAgIDU1MzMzMDZcclxuICAgIF1cclxufVxyXG5cclxudHlwZSBDb2xvclBpY2tlclByb3BzID0ge1xyXG4gICAgZGVmYXVsdENvbG9yPzogbnVtYmVyLFxyXG4gICAgY3VzdG9tQ29sb3I/OiBudW1iZXIsXHJcbiAgICBiYXNlQ29sb3JzPzogbnVtYmVyW10sXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIG9uQ2hhbmdlPzogKGNvbG9yOm51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgQ29sb3JQaWNrZXJNb2R1bGVzXHJcbmxldCBpc0ZldGNoaW5nID0gbnVsbFxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW5udCBuZWVkcyB0byBiZSBsb2FkZWQuIEFzIGEgcmVzdWx0LCB5b3UgbWF5IGV4cGVyaWVuY2UgMTAwLTMwMG1zIGxvYWRpbmcgdGhlIGZpcnN0IHRpbWUuXHJcbiAqIFJlbmRlciB3aWxsIHJldHVybiBgbnVsbGAgYmVmb3JlIGxvYWRlZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxDb2xvclBpY2tlclByb3BzLCB7dmFsdWU/OnN0cmluZyxsYXN0Q29sb3I6YW55fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6Q29sb3JQaWNrZXJQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IG51bGwsXHJcbiAgICAgICAgICAgIGxhc3RDb2xvcjogdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFByZWxvYWQgdGhlIGNvbXBvbmVudC4gKi9cclxuICAgIHN0YXRpYyBwcmVsb2FkKCl7XHJcbiAgICAgICAgaWYoQ29sb3JQaWNrZXIucHJvdG90eXBlLm1vZHVsZXNbMF0pcmV0dXJuIC8vIGFscmVhZHkgbG9hZGVkXHJcbiAgICAgICAgaWYoaXNGZXRjaGluZylyZXR1cm4gLy8gaXMgZmV0Y2hpbmcgc28gZG9uJ3QgZG91YmxlIHByZWxvYWQuXHJcbiAgICAgICAgdHJ5eyAvLyBJZiB3ZSBjYXVnaHQgYW4gZXJyb3JcclxuICAgICAgICAgICAgbmV3IENvbG9yUGlja2VyKHt9KS5yZW5kZXIoKVxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWwpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkNvbG9yUGlja2VyUHJvcHMgPSB7XHJcbiAgICAgICAgZGVmYXVsdENvbG9yOiBDb25zdGFudHMuZGVmYXVsdENvbG9yLFxyXG4gICAgICAgIGN1c3RvbUNvbG9yOiBudWxsLFxyXG4gICAgICAgIGJhc2VDb2xvcnM6IENvbnN0YW50cy5iYXNlQ29sb3JzLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIENvbG9yUGlja2VyTW9kdWxlcyB8fCAoQ29sb3JQaWNrZXJNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIkNvbG9yUGlja2VyXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2xvclBpY2tlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIENvbG9yUGlja2VyQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBpZighQ29sb3JQaWNrZXJDb21wb25lbnQpe1xyXG4gICAgICAgICAgICBpZihpc0ZldGNoaW5nKXsgLy8gc3VwcG9ydCBmb3IgbXVsdGlwbGUgY29sb3IgcGlja2VyXHJcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nLnRoZW4oKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDb2xvclBpY2tlck1vZHVsZXMgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCByZXNvbHZlXHJcbiAgICAgICAgICAgIGlzRmV0Y2hpbmcgPSBuZXcgUHJvbWlzZShyZXMgPT4gKHJlc29sdmUgPSByZXMpKVxyXG4gICAgICAgICAgICBjb25zdCBHdWlsZFNldHRpbmdzUm9sZXMgPSBuZXcgKFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lLmluY2x1ZGVzKFwiR3VpbGRTZXR0aW5nc1JvbGVzXCIpKS5kZWZhdWx0KSgpLnJlbmRlcigpLnR5cGVcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBHdWlsZFNldHRpbmdzUm9sZXMucHJvdG90eXBlLnJlbmRlclJvbGVTZXR0aW5ncy5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpbGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPd25lcjogKCkgPT4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkUm9sZSgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckhlYWRlcjogR3VpbGRTZXR0aW5nc1JvbGVzLnByb3RvdHlwZS5yZW5kZXJIZWFkZXJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgR3VpbGRSb2xlU2V0dGluZ3MgPSBzZXR0aW5ncy5wcm9wcy5jaGlsZHJlblsxXS50eXBlXHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IEd1aWxkUm9sZVNldHRpbmdzLnByb3RvdHlwZS5yZW5kZXJDb2xvclBpY2tlci5jYWxsKHtcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlcnlvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnR5cGUoY2hpbGRyZW4ucHJvcHMpLnByb3BzLmNoaWxkcmVuLnR5cGUuX2N0b3IoKS50aGVuKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29sb3JQaWNrZXJNb2R1bGVzID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8Q29sb3JQaWNrZXJDb21wb25lbnQuZGVmYXVsdCBjb2xvcnM9e3RoaXMucHJvcHMuYmFzZUNvbG9yc30gZGVmYXVsdENvbG9yPXt0aGlzLnByb3BzLmRlZmF1bHRDb2xvcn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGN1c3RvbUNvbG9yPXt0aGlzLnByb3BzLmN1c3RvbUNvbG9yfT5cclxuICAgICAgICA8L0NvbG9yUGlja2VyQ29tcG9uZW50LmRlZmF1bHQ+XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5sYXN0Q29sb3IgIT09IHRoaXMucHJvcHMudmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0Q29sb3I6IHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb2xvclBpY2tlcigpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFV0aWxzLkhleENvbG9yVG9EZWNpbWFsKFwiIzcyODlEQVwiKVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGNvbG9yKSA9PiB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgaW5mbzogXCJUbyBjb252ZXJ0IGhleCBjb2xvcnMgdG8gZGVjaW1hbCwgeW91IGNhbiBkbyBgTGlnaHRjb3JkLkFwaS5VdGlscy5IZXhDb2xvclRvRGVjaW1hbCgnIzcyODlEQScpYCBhbmQgZ28gYmFjayB3aXRoIGBMaWdodGNvcmQuQXBpLlV0aWxzLkRlY2ltYWxDb2xvclRvSGV4KDc1MDYzOTQpYFwiLFxyXG4gICAgICAgIHdhcm46IFwiVGhlIGNvbXBvbmVudCBtYXkgbm90IGFwcGVhciBpbnN0YW50bHkuIFRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgbG9hZGVkLCBzbyB5b3UgY291bGQgZXhwZXJpZW5jZSA1MC0zMDBtcyBsb2FkaW5nIHRpbWUgZGVwZW5kaW5nIG9uIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbi5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgRHJvcGRvd25Qcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBzdHJpbmdcclxuICAgIH1bXSxcclxuICAgIHZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlLFxyXG4gICAgb3B0aW9uUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlLFxyXG4gICAgbXVsdGlWYWx1ZVJlbmRlcmVyPzogKGRhdGEpID0+IFJlYWN0Tm9kZVxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgc2VhcmNoYWJsZT86IGJvb2xlYW4sXHJcbiAgICBjbGVhcmFibGU/OiBib29sZWFuLFxyXG4gICAgc3R5bGVPdmVycmlkZXM/OiBDU1NQcm9wZXJ0aWVzLFxyXG4gICAgbGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzPzogdGhlbWVPdmVycmlkZSxcclxuICAgIGRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzPzogdGhlbWVPdmVycmlkZSxcclxuICAgIGlzTXVsdGk/OiBib29sZWFuXHJcbn1cclxuXHJcbnR5cGUgdGhlbWVPdmVycmlkZSA9IHtcclxuICAgIG5ldXRyYWwwOiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsNTogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDEwOiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMjA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwzMDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeTogc3RyaW5nLFxyXG4gICAgcHJpbWFyeTI1OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5NTA6IHN0cmluZyxcclxuICAgIHNlbGVjdGVkT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgbWVudUJhY2tncm91bmQ6IHN0cmluZyxcclxuICAgIG1lbnVCb3JkZXI6IHN0cmluZyxcclxuICAgIHNjcm9sbEJhclRodW1iOiBzdHJpbmcsXHJcbiAgICBtdWx0aU9wdGlvbkJhY2tncm91bmQ6IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgRHJvcGRvd25Nb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERyb3Bkb3duUHJvcHMsIHt2YWx1ZTogc3RyaW5nfG51bGx9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpEcm9wZG93blByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpEcm9wZG93blByb3BzID0ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJObyBvcHRpb25zIC0gTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIERyb3Bkb3duLiBJZiB5b3UgbWVhbnQgdG8gcHV0IGFuIGVtcHR5IGRyb3Bkb3duLCBpbnB1dCBhbiBlbXB0eSBhcnJheS5cIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHZhbHVlUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgbXVsdGlWYWx1ZVJlbmRlcmVyOiBudWxsLFxyXG4gICAgICAgIG9wdGlvblJlbmRlcmVyOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZSxcclxuICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHN0eWxlT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGxpZ2h0VGhlbWVDb2xvck92ZXJyaWRlczogbnVsbCxcclxuICAgICAgICBkYXJrVGhlbWVDb2xvck92ZXJyaWRlczogbnVsbCxcclxuICAgICAgICBpc011bHRpOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIERyb3Bkb3duTW9kdWxlcyB8fCAoRHJvcGRvd25Nb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlNlbGVjdFRlbXBXcmFwcGVyXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIERyb3Bkb3duQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlID0gPERyb3Bkb3duQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfS8+XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiQW4gZXJyb3Igb2NjdXJlZFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaXNNdWx0aTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaXNNdWx0aTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcblxyXG50eXBlIFJhZGlvR3JvdXBQcm9wcyA9IHtcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgZGVzYz86IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgc2l6ZT86IFwic21hbGxcInxcIm1lZGl1bVwiLFxyXG4gICAgaXRlbVR5cGU/OiBcImJhclwifFwicGFuZWxcIixcclxuICAgIGluZm9DbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFJhZGlvR3JvdXBNb2R1bGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSYWRpb0dyb3VwUHJvcHMsIHt2YWx1ZT86IHN0cmluZ30+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6UmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgbmFtZTogXCJObyBvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIGRlc2M6IFwiTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIENob2ljZXMuIElmIHlvdSBtZWFudCB0byBkaXNwbGF5IG5vIG9wdGlvbnMgYXQgYWxsLCBwbGVhc2UgcGFzcyBhbiBlbXB0eSBhcnJheS5cIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI2YwNDc0N1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNpemU6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgaXRlbVR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgaW5mb0NsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUFxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6UmFkaW9Hcm91cFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2KXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogZXYudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFJhZGlvR3JvdXBNb2R1bGUgfHwgKFJhZGlvR3JvdXBNb2R1bGUgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiUmFkaW9Hcm91cFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBSYWRpb0dyb3VwQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxSYWRpb0dyb3VwQ29tcG9uZW50IG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBcclxuICAgICAgICAgICAgc2l6ZT17UmFkaW9Hcm91cENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBpdGVtVHlwZT17UmFkaW9Hcm91cENvbXBvbmVudC5JdGVtVHlwZXNbcHJvcHMuaXRlbVR5cGUudG9VcHBlckNhc2UoKV19IFxyXG4gICAgICAgICAgICBpbmZvQ2xhc3NOYW1lPXtwcm9wcy5pbmZvQ2xhc3NOYW1lfS8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCk6c3RyaW5nfG51bGx7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtZWRpdW1cIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogXCJiYXJcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVHlwZTogXCJwYW5lbFwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuLi8uLi9tb2R1bGVzL3V1aWRcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgU3dpdGNoUHJvcHMgPSB7XHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IGJvb2xlYW4sXHJcbiAgICBmaWxsPzogc3RyaW5nLFxyXG4gICAgdGhlbWU/OiBcImRlZmF1bHRcInxcImNsZWFyXCIsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCIsXHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcclxufVxyXG5cclxubGV0IFN3aXRjaE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN3aXRjaFByb3BzLCB7dmFsdWU6IGJvb2xlYW59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpTd2l0Y2hQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gU3dpdGNoTW9kdWxlcyB8fCAoU3dpdGNoTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJTd2l0Y2hcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgU3dpdGNoQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuICg8U3dpdGNoQ29tcG9uZW50IGlkPXtwcm9wcy5pZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlIHx8IGZhbHNlfSBmaWxsPXtwcm9wcy5maWxsfSBcclxuICAgICAgICAgICAgdGhlbWU9e1N3aXRjaENvbXBvbmVudC5UaGVtZXNbcHJvcHMudGhlbWUudG9VcHBlckNhc2UoKV19IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IFxyXG4gICAgICAgICAgICBzaXplPXtTd2l0Y2hDb21wb25lbnQuU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXX0gc3R5bGU9e3Byb3BzLnN0eWxlfS8+KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCF0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogIXRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgZmlsbDogbnVsbCxcclxuICAgICAgICB0aGVtZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBzaXplOiBcImRlZmF1bHRcIixcclxuICAgICAgICBzdHlsZToge31cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe29uQ2hhbmdlOiAodmFsdWUpID0+IHt9fV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJjbGVhclwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYXBpLXByZXZpZXctc3dpdGNoXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBudWxsXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge31cclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICBlcnJvcjogXCJUaGUgYGNsZWFyYCBvcHRpb24gZG9lc24ndCB3b3JrIHdlbGwgb24gbGlnaHQgdGhlbWUuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFRleHRBcmVhUHJvcHMgPSB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXHJcbiAgICBhdXRvRm9jdXM/OiBib29sZWFuLFxyXG4gICAgcmVzaXplYWJsZT86IGJvb2xlYW4sXHJcbiAgICBmbGV4PzogYm9vbGVhbixcclxuICAgIGF1dG9zaXplPzogZmFsc2UsXHJcbiAgICByb3dzPzogbnVtYmVyLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgb25Gb2N1cz86IChldiwgbmFtZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgb25CbHVyPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbktleURvd24/OiAoZXYpID0+IHZvaWRcclxufVxyXG5cclxubGV0IFRleHRBcmVhTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUZXh0QXJlYVByb3BzLCB7dmFsdWU6IHN0cmluZ30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlRleHRBcmVhUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dEFyZWFNb2R1bGVzIHx8IChUZXh0QXJlYU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVGV4dEFyZWFcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIG5hbWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZXYsIG5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldiwgbmFtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25LZXlEb3duKGV2KXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gPFRleHRBcmVhQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZSB8fCBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUZXh0QXJlYVByb3BzID0ge1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBudWxsLFxyXG4gICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXHJcbiAgICAgICAgcmVzaXplYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZmxleDogZmFsc2UsXHJcbiAgICAgICAgYXV0b3NpemU6IGZhbHNlLFxyXG4gICAgICAgIHJvd3M6IDMsXHJcbiAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgbWF4TGVuZ3RoOiBudWxsLFxyXG4gICAgICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICBvbkZvY3VzOiBOT09QLFxyXG4gICAgICAgIG9uQmx1cjogTk9PUCxcclxuICAgICAgICBvbktleURvd246IE5PT1BcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImFwaS1wcmV2aWV3LXRleHRhcmVhXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG51bGxcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICByZXNpemVhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBhdXRvc2l6ZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYXV0b3NpemU6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHJvd3M6IDNcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcm93czogMlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAxXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiRXhhbXBsZSBlcnJvclwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDEwMFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYXBpLXByZXZpZXctdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIHdhcm46IFwiVGhpcyBzaG91bGQgYmUgdXNlZCBmb3IgbXVsdGkgbGluZSBpbnB1dHMuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFRleHRJbnB1dFByb3BzID0ge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIlxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaW5wdXRDbGFzc05hbWU/OiBzdHJpbmdcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkLFxyXG4gICAgb25Gb2N1cz86IChldiwgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkLFxyXG4gICAgb25CbHVyPzogKGV2LCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWRcclxufVxyXG5cclxubGV0IFRleHRJbnB1dE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxUZXh0SW5wdXRQcm9wcywge3ZhbHVlOiBzdHJpbmd9PiB7XHJcbiAgICBoYXNTZXQ6IGJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXh0SW5wdXRQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRJbnB1dFByb3BzID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG1heExlbmd0aDogOTk5LFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICBpbnB1dENsYXNzTmFtZTogXCJcIixcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICBvbkZvY3VzOiBOT09QLFxyXG4gICAgICAgIG9uQmx1cjogTk9PUFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRleHRJbnB1dE1vZHVsZXMgfHwgKFRleHRJbnB1dE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVGV4dElucHV0XCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlLCBuYW1lKXtcclxuICAgICAgICB0aGlzLmhhc1NldCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgbmFtZSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLmhhc1NldClyZXR1cm4gLy8gcHJldmVudCBldmVudCBpZiB0aGUgb25DaGFuZ2UgaGFzIGNoYW5nZWQgdGhlIHZhbHVlLlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2LCBuYW1lLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVGV4dEFyZWFDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPFRleHRBcmVhQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IC8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgfHwgXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgdGhpcy5oYXNTZXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBpLXByZXZpZXctdGV4dGlucHV0XCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJFeGFtcGxlIGVycm9yXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDk5OVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYXBpLXByZXZpZXctdGV4dGlucHV0XCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge31cclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICB3YXJuOiBcIlRoaXMgc2hvdWxkIGJlIHVzZWQgZm9yIHNpbmdsZSBsaW5lIGlucHV0cy5cIlxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCI7XHJcbmltcG9ydCBEaXNjb3JkVG9vbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvRGlzY29yZFRvb2xzXCI7XHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIjtcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiO1xyXG5cclxuXHJcbnR5cGUgRXJyb3JDYXRjaGVyUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbn1cclxubGV0IEVycm9yQ2F0Y2hlck1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JDYXRjaGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEVycm9yQ2F0Y2hlclByb3BzLCB7ZXJyb3I6IGJvb2xlYW4sIGhhc1NlbnROb3RpZmljYXRpb246IGJvb2xlYW59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpFcnJvckNhdGNoZXJQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNTZW50Tm90aWZpY2F0aW9uOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpOmFueVtde1xyXG4gICAgICAgIHJldHVybiBFcnJvckNhdGNoZXJNb2R1bGVzIHx8IChFcnJvckNhdGNoZXJNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmVtcHR5U3RhdGVJbWFnZSAmJiBlLmVtcHR5U3RhdGUpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0UHJvcHM6RXJyb3JDYXRjaGVyUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5lcnJvcil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgfWVsc2V7IC8vIHRyeSB0byByZW5kZXIgYSB1c2VyLWZyaWVuZGx5IGludGVyZmFjZS5cclxuICAgICAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICAgICAgZW1wdHlDbGFzc2VzXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuICAgICAgICAgICAgaWYoIWVtcHR5Q2xhc3Nlcyl7IC8vIElmIHdlIGNhbid0LCByZW5kZXIgbm90aGluZyBhbmQgc2hvdyBhIG5vdGlmaWNhdGlvbi5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaGFzU2VudE5vdGlmaWNhdGlvbilyZXR1cm4gbnVsbCAvLyBJZiB0aGUgbm90aWZpY2F0aW9uIHdhcyBhbHJlYWR5IHNlbnQsIGRvbid0IHNlbmQgb25lLlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gRGlzY29yZFRvb2xzLnNob3dOb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiQW4gZXJyb3Igb2NjdXJlZC4gUGxlYXNlIGNoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9ucy5cIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9saWdodGNvcmQucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogTk9PUCxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlOiBOT09QLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2hvdzogTk9PUCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJMaWdodGNvcmQgSW5mb3JtYXRpb25zXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNTZW50Tm90aWZpY2F0aW9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VtcHR5Q2xhc3Nlcy5lbXB0eVN0YXRlSW1hZ2V9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGVIZWFkZXJ9PkFuIGVycm9yIG9jY3VyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17ZW1wdHlDbGFzc2VzLmVtcHR5U3RhdGVTdWJ0ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb25zLiBKb2luIG91ciDCrXN1cHBvcnQgc2VydmVyIGZvciBtb3JlIGhlbHAuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9ySW5mby5jb21wb25lbnRTdGFjaylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzczxiYXNlID0gRnVuY3Rpb24+KENsYXNzOmJhc2UpOmJhc2UgJiB7XHJcbiAgICByZWFkb25seSBvcmlnaW5hbDogYmFzZVxyXG59e1xyXG4gICAgY29uc3QgQ2xhc3NDb3B5ID0gKGNsYXNzIFByb3hpZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yQ2F0Y2hlciBrZXk9e3V1aWQoKX0+XHJcbiAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChDbGFzcyBhcyBhbnksIHsuLi50aGlzLnByb3BzLCBrZXk6IHV1aWQoKX0pfVxyXG4gICAgICAgICAgICA8L0Vycm9yQ2F0Y2hlcj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IENsYXNzW1wiZGlzcGxheU5hbWVcIl0gfHwgQ2xhc3NbXCJuYW1lXCJdXHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgb3JpZ2luYWwoKXtcclxuICAgICAgICAgICAgcmV0dXJuIENsYXNzXHJcbiAgICAgICAgfVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhDbGFzcykpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgIGlmKHZhbHVlWzBdIGluIENsYXNzQ29weSlyZXR1cm5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xhc3NDb3B5LCB2YWx1ZVswXSwgdmFsdWVbMV0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIENsYXNzQ29weVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IG5vdGljZSwgbm90aWNlcywgZXZlbnRzIH0gZnJvbSBcIi4vTm90aWNlc1wiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5cclxubGV0IE5vdGljZU1vZHVsZXNcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHROb3RpY2U6bm90aWNlID0ge1xyXG4gICAgdGV4dDogXCJcIixcclxuICAgIGlkOiBcInVua25vd24gaWRcIixcclxuICAgIG9uQ2xpY2s6IE5PT1AsXHJcbiAgICBidXR0b25UZXh0OiBudWxsLFxyXG4gICAgdHlwZTogXCJkZWZhdWx0XCJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8bm90aWNlPiB7XHJcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIkxpZ2h0Y29yZE5vdGljZVwiXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOm5vdGljZSA9IGRlZmF1bHROb3RpY2VcclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBOb3RpY2VNb2R1bGVzIHx8IChOb3RpY2VNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm5vdGljZUluZm8pXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBub3RpY2VDbGFzc2VzXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub3RpY2VDbGFzc2VzW1wibm90aWNlXCIrdGhpcy5wcm9wcy50eXBlLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkrdGhpcy5wcm9wcy50eXBlLnNsaWNlKDEpXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZighY2xhc3NOYW1lKXtcclxuICAgICAgICAgICAgbm90aWNlcy5wb3AoKVxyXG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5wcm9wcy5idXR0b25UZXh0ID8gPGJ1dHRvbiBjbGFzc05hbWU9e25vdGljZUNsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGljZXMucG9wKClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICB9fT57dGhpcy5wcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPiA6IG51bGxcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtub3RpY2VDbGFzc2VzLmRpc21pc3N9IHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD17MH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90aWNlcy5wb3AoKVxyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cclxuICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSIsImltcG9ydCBOb3RpY2UgZnJvbSBcIi4vTm90aWNlXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7Y29udGFpbmVyOiBhbnl9PiB7XHJcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIkxpZ2h0Y29yZE5vdGljZXNcIlxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUmVhZG9ubHk8eyBjb250YWluZXI6IGFueSB9Pil7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMubm90aWNlSGFuZGxlciA9IHRoaXMubm90aWNlSGFuZGxlci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgbm90aWNlSGFuZGxlcigpe1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIGV2ZW50cy5vbihcIm5vdGljZVVwZGF0ZVwiLCB0aGlzLm5vdGljZUhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBldmVudHMub2ZmKFwibm90aWNlVXBkYXRlXCIsIHRoaXMubm90aWNlSGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5oYXNOb3RpY2UpcmV0dXJuIG51bGxcclxuICAgICAgICBjb25zdCBub3RpY2UgPSBub3RpY2VzWzBdXHJcbiAgICAgICAgcmV0dXJuIDxOb3RpY2Ugey4uLm5vdGljZX0+PC9Ob3RpY2U+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc05vdGljZSgpe1xyXG4gICAgICAgIHJldHVybiBub3RpY2VzLmxlbmd0aCA+IDBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGljZXM6bm90aWNlW10gPSBbXVxyXG5cclxuZXhwb3J0IHR5cGUgbm90aWNlV2l0aG91dElEID0ge1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgYnV0dG9uVGV4dD86IHN0cmluZyxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxyXG4gICAgdHlwZTogXCJkZWZhdWx0XCJ8XCJpbmZvXCJ8XCJzdWNjZXNzXCJ8XCJkYW5nZXJcInxcInN0cmVhbWVyTW9kZVwifFwiZG93bmxvYWRcInxcIm5vdGlmaWNhdGlvblwifFwicHJlbWl1bVwifFwicmljaFByZXNlbmNlXCJ8XCJwcmVtaXVtVGllcjFcInxcInByZW1pdW1UaWVyMlwifFwiZmFjZWJvb2tcInxcImJyYW5kXCJ8XCJzdXJ2ZXlcInxcInNwb3RpZnlcIlxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBub3RpY2UgPSB7XHJcbiAgICBpZDogc3RyaW5nXHJcbn0gJiBub3RpY2VXaXRob3V0SUQiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi9tb2R1bGVzL3V1aWRcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vbW9kdWxlcy9VdGlsc1wiXHJcbmltcG9ydCBEaXNjb3JkVG9vbHMgZnJvbSBcIi4vbW9kdWxlcy9EaXNjb3JkVG9vbHNcIlxyXG5pbXBvcnQgKiBhcyBwYXRjaGVycyBmcm9tIFwiLi9tb2R1bGVzL3BhdGNoZXJzXCJcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuL21vZHVsZXMvZXhjbHVkZVByb3BlcnRpZXNcIlxyXG5pbXBvcnQgY2xvbmVOdWxsUHJvdG8gZnJvbSBcIi4vbW9kdWxlcy9jbG9uZU51bGxQcm90b1wiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCB1bmZyZWV6ZSBmcm9tIFwiLi9tb2R1bGVzL1VuZnJlZXplXCJcclxuaW1wb3J0IHsgaXNOYXRpdmUsIGlzSW1wb3J0ZWQgfSBmcm9tIFwiLi9tb2R1bGVzL2Vudmlyb25uZW1lbnRcIlxyXG5pbXBvcnQgKiBhcyBiYW5kYWdlZGJkQXBpIGZyb20gXCJAYmFuZGFnZWRiZC9iZGFwaVwiXHJcbnBhdGNoZXJzLnBhdGNoKClcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzLFxyXG4gICAgdXVpZDogdXVpZCxcclxuICAgIFV0aWxzOiBVdGlscyxcclxuICAgIERpc2NvcmRUb29sczogRGlzY29yZFRvb2xzLFxyXG4gICAgXzoge1xyXG4gICAgICAgIGV4Y2x1ZGVQcm9wZXJ0aWVzOiBleGNsdWRlUHJvcGVydGllcyxcclxuICAgICAgICBjbG9uZU51bGxQcm90bzogY2xvbmVOdWxsUHJvdG8sXHJcbiAgICAgICAgTk9PUDogTk9PUCxcclxuICAgICAgICB1bmZyZWV6ZTogdW5mcmVlemVcclxuICAgIH0sXHJcbiAgICBnZXQgaXNOYXRpdmUoKXtyZXR1cm4gaXNOYXRpdmV9LFxyXG4gICAgZ2V0IGlzSW1wb3J0ZWQoKXtyZXR1cm4gaXNJbXBvcnRlZH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgdmFyIFJlYWN0OnR5cGVvZiBpbXBvcnQoXCJyZWFjdFwiKVxyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGlnaHRjb3JkIGlzIG9ubHkgYXZhaWxsYWlibGUgaW4gTGlnaHRjb3JkIChuYXRpdmUpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgTGlnaHRjb3JkOiBMaWdodGNvcmRHbG9iYWwsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQkRNb2R1bGVzIGlzIG9ubHkgYXZhaWxsYWlibGUgaW4gTGlnaHRjb3JkIChuYXRpdmUpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgQkRNb2R1bGVzOiB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6YW55W10sXHJcbiAgICAgICAgICAgIGdldChmaWx0ZXI6KG1vZDphbnkpPT5ib29sZWFuLCBtb2R1bGVzPzphbnlbXSk6YW55W10sXHJcbiAgICAgICAgICAgIGdldChpZDpudW1iZXIsIG1vZHVsZXM/OmFueVtdKTphbnksXHJcbiAgICAgICAgICAgIGdldChpZHM6IFtudW1iZXJ8KChtb2Q6YW55KT0+Ym9vbGVhbildLCBtb2R1bGVzPzphbnlbXSk6YW55XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCZEFwaTogdHlwZW9mIGJhbmRhZ2VkYmRBcGkuQmRBcGksXHJcbiAgICAgICAgRURBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpXHJcbiAgICB9XHJcbiAgICB2YXIgTGlnaHRjb3JkOkxpZ2h0Y29yZEdsb2JhbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWdodGNvcmRBcGlcclxuXHJcbk9iamVjdC5hc3NpZ24od2luZG93LkxpZ2h0Y29yZC5BcGksIExpZ2h0Y29yZEFwaSlcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBMaWdodGNvcmQgZXhwb3J0cy4gQ2FuIGJlIGFjY2Vzc2VkIHdpdGggYHdpbmRvdy5MaWdodGNvcmRgXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0Y29yZEdsb2JhbCB7XHJcbiAgICBEaXNjb3JkTW9kdWxlczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludGVybmFsIERpc2NvcmQncyBkaXNwYXRjaGVyIC0gY2FuIGJlIHVzZWQgdG8gc3Vic2NyaWJlIHRvIGdhdGV3YXkgZXZlbnRzIC8gY2xpZW50IGV2ZW50cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNwYXRjaGVyOiBpbXBvcnQoXCIuL3R5cGVzL0Rpc2NvcmREaXNwYXRjaGVyVHlwZXNcIikuZGVmYXVsdCxcclxuICAgICAgICBjb25zdGFudHM6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZENvbnN0YW50c1R5cGVzXCIpLmRlZmF1bHRcclxuICAgIH0sXHJcbiAgICBTZXR0aW5nczoge1xyXG4gICAgICAgIGRldk1vZGU6IGJvb2xlYW4sXHJcbiAgICAgICAgY2FsbFJpbmdpbmdCZWF0OiBib29sZWFuXHJcbiAgICB9LFxyXG4gICAgQXBpOiBMaWdodGNvcmRBcGlHbG9iYWwsXHJcbiAgICBCZXR0ZXJEaXNjb3JkOiB7XHJcbiAgICAgICAgQmRBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpLFxyXG4gICAgICAgIFttb2Q6c3RyaW5nXTphbnlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIEFwaS4gQ2FuIGJlIGFjY2Vzc2VkIHdpdGggYHdpbmRvdy5MaWdodGNvcmQuQXBpYFxyXG4gKi9cclxudHlwZSBMaWdodGNvcmRBcGlHbG9iYWwgPSBsaWdodGNvcmRBcGlNYWluRXhwb3J0cyAmIHR5cGVvZiBMaWdodGNvcmRBcGlcclxuXHJcbnR5cGUgbGlnaHRjb3JkQXBpTWFpbkV4cG9ydHMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFdhaXRzIHVudGlsIHRoZSBmaXJzdCBtb2R1bGUgdGhhdCBtYXRjaCB0aGUgZmlsdGVyIGdldHMgZXhwb3J0ZWRcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0aGF0IHNwZWNpZmllcyB0aGUgbW9kdWxlIHRvIG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBlbnN1cmVFeHBvcnRlZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTpQcm9taXNlPGFueT4sXHJcbiAgICAvKipcclxuICAgICAqIFJlY3JlYXRlIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYF9fcHJvdG9fX2AgYW5kIGBwcm90b3R5cGVgIHByb3BlcnRpZXMgLSB1c2VmdWxsIGZvciBiZXR0ZXIgZm9ybWF0dGluZyBpbiBjb25zb2xlLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlY3JlYXRlXHJcbiAgICAgKi9cclxuICAgIGNsb25lTnVsbFByb3RvPE9iaiA9IGFueT4ob2JqOk9iaik6T2JqXHJcbn0iLCJsZXQgcmVxXHJcbnNldFJlcSgpXHJcbmZ1bmN0aW9uIGZpbHRlckRhbmdlcm91cyhtb2RzKXtcclxuICAgIHJldHVybiBtb2RzLm1hcChlID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvdGVjdChlKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBwcm90ZWN0KGV4cG9ydHMpe1xyXG4gICAgbGV0IHRoZU1vZHVsZSA9IGV4cG9ydHMuZXhwb3J0c1xyXG4gICAgbGV0IG1vZCA9IHRoZU1vZHVsZS5kZWZhdWx0XHJcbiAgICBpZighbW9kKXJldHVybiBleHBvcnRzXHJcbiAgICBpZiAobW9kLnJlbW92ZSAmJiBtb2Quc2V0ICYmIG1vZC5jbGVhciAmJiBtb2QuZ2V0ICYmICFtb2Quc29ydCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIW1vZC5nZXRUb2tlbiAmJiAhbW9kLmdldEVtYWlsICYmICFtb2Quc2hvd1Rva2VuKXJldHVybiBleHBvcnRzXHJcblxyXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkobW9kLCB7XHJcbiAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbihvYmosIHByb3ApIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiZ2V0VG9rZW5cIiB8fCBwcm9wID09PSBcImdldEVtYWlsXCIgfHwgcHJvcCA9PT0gXCJzaG93VG9rZW5cIikgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24ob2JqLCBmdW5jKSB7XHJcbiAgICAgICAgICAgIGlmIChmdW5jID09IFwiZ2V0VG9rZW5cIiAmJiBvYmouZ2V0VG9rZW4pIHJldHVybiAoKSA9PiBcIm1mYS5YQ25iS3pvMENMSXFkSnpCbkwwRDhQZkRydXFrSk5IandIWHRyMzlVVTNGOGhIeDQzam9qSVN5aTVqZGpPNTJlOV9lOU1qbWFmWkZGcGMtc2VPTWFcIjtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJnZXRFbWFpbFwiICYmIG9iai5nZXRFbWFpbCkgcmV0dXJuICgpID0+IFwicHVwcGV0MTExMTJAZ21haWwuY29tXCI7XHJcbiAgICAgICAgICAgIGlmIChmdW5jID09IFwic2hvd1Rva2VuXCIgJiYgb2JqLnNob3dUb2tlbikgcmV0dXJuICgpID0+IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChmdW5jID09IFwiX19wcm90b19fXCIgJiYgb2JqLl9fcHJvdG9fXykgcmV0dXJuIHByb3h5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtmdW5jXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZXhwb3J0cywge2V4cG9ydHM6IE9iamVjdC5hc3NpZ24oe30sIHRoZU1vZHVsZSwge2RlZmF1bHQ6IHByb3h5fSl9KVxyXG59XHJcblxyXG5jbGFzcyBXZWJwYWNrbG9hZGVyIHtcclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgaWYocmVxKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckRhbmdlcm91cyhPYmplY3QudmFsdWVzKHJlcS5jKS5maWx0ZXIoKGU6YW55KSA9PiBlICYmIGUuZXhwb3J0cykpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFJlcSgpXHJcbiAgICAgICAgICAgIGlmKHJlcSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyRGFuZ2Vyb3VzKE9iamVjdC52YWx1ZXMocmVxLmMpLmZpbHRlcigoZTphbnkpID0+IGUgJiYgZS5leHBvcnRzKSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldChpZHMsIG1vZHVsZXMpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBpZHMgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIHJldHVybiAobW9kdWxlcyB8fCB0aGlzLm1vZHVsZXMpLm1hcCgobWRsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihtZGwgJiYgdHlwZW9mIG1kbC5leHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWRsLmV4cG9ydHNcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmZpbHRlcihlID0+IGUpLmZpbHRlcihpZHMpXHJcbiAgICAgICAgfWVsc2UgaWYoQXJyYXkuaXNBcnJheShpZHMpKXtcclxuICAgICAgICAgICAgbW9kdWxlcyA9IG1vZHVsZXMgfHwgdGhpcy5tb2R1bGVzXHJcbiAgICAgICAgICAgIHJldHVybiBpZHMubWFwKGlkID0+IHRoaXMuZ2V0KGlkLCBtb2R1bGVzKSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbW9kdWxlcyA9IG1vZHVsZXMgfHwgdGhpcy5tb2R1bGVzXHJcbiAgICAgICAgICAgIGxldCBtb2R1bGUgPSBtb2R1bGVzLmZpbHRlcihlID0+ICEhZSkuZmluZChlID0+IGUuaSA9PT0gaWRzKVxyXG4gICAgICAgICAgICBpZighbW9kdWxlKXJldHVybiB1bmRlZmluZWRcclxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGRlZmF1bHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgV2VicGFja2xvYWRlcigpXHJcblxyXG5mdW5jdGlvbiBzZXRSZXEoKXtcclxuICAgIHRyeXtcclxuICAgICAgICByZXEgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0ucHVzaChbW10sIHtfX2V4dHJhX2lkX186IChtZGwsIGV4cG9ydHMsIHJlcSkgPT4gbWRsLmV4cG9ydHMgPSByZXF9LCBbW1wiX19leHRyYV9pZF9fXCJdXV0pO1xyXG4gICAgICAgIGlmKHJlcSl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXEubS5fX2V4dHJhX2lkX187XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXEuYy5fX2V4dHJhX2lkX187XHJcbiAgICAgICAgfVxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIHJlcSA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgbm90aWNlcywgbm90aWNlV2l0aG91dElELCBub3RpY2UsIGV2ZW50cyBhcyBub3RpY2VFdmVudHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcml2YXRlL05vdGljZXNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL3V1aWRcIjtcclxuaW1wb3J0IGNsb25lTnVsbFByb3RvIGZyb20gXCIuL2Nsb25lTnVsbFByb3RvXCI7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcclxuaW1wb3J0IHsgZGVmYXVsdE5vdGljZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlXCI7XHJcbmltcG9ydCBleGNsdWRlUHJvcGVydGllcyBmcm9tIFwiLi9leGNsdWRlUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi9ub29wXCI7XHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyLCB7IFdlYnBhY2tMb2FkZXJFcnJvciB9IGZyb20gXCIuL1dlYnBhY2tMb2FkZXJcIjtcclxuXHJcbmxldCBzb3VuZE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgRGlzY29yZFRvb2xzIHtcclxuICAgIHNob3dOb3RpY2UoZGF0YTpOb3RpY2VEYXRhKTpOb3RpY2V7XHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGRhdGEudGV4dCAhPT0gXCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoYFRoaXMgbm90aWNlIGlzIG5vdCB2YWxpZC4gR2l2ZW46ICR7VXRpbHMuZm9ybWF0SlNPYmplY3QoZGF0YSl9YClcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IGNsb25lTnVsbFByb3RvKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHROb3RpY2UsIGRhdGEpKSBhcyBub3RpY2VcclxuICAgICAgICBuZXdEYXRhLmlkID0gdXVpZCgpXHJcbiAgICAgICAgbm90aWNlcy5wdXNoKG5ld0RhdGEpXHJcbiAgICAgICAgbm90aWNlRXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICBjb25zdCBub3RpY2UgPSBuZXcgTm90aWNlKG5ld0RhdGEpXHJcbiAgICAgICAgcmV0dXJuIG5vdGljZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3RpY2VzKCk6Tm90aWNlW117XHJcbiAgICAgICAgcmV0dXJuIG5vdGljZXMubWFwKGRhdGEgPT4gbmV3IE5vdGljZShkYXRhKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFF1aWNrbHkgc2VuZCBub3RpZmljYXRpb24gKEV2ZW4gd2hlbiBubyBmb2N1c2VkLilcclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBub3RpZmljYXRpb24uIEJlIHN1cmUgdG8gaW5jbHVkZSBhbGwgcHJvcGVydGllcyBleGNlcHQgZnVuY3Rpb25zIGNhdXNlIHRoZXkncmUgb3B0aW9uYWwuXHJcbiAgICAgKiBOb3RpZmljYXRpb25zIGhhdmUgYSB0aW1lb3V0IG9mIDMtNSBzZWNvbmRzLlxyXG4gICAgICogVGhleSBsb29rIGxpa2UgdGhpczogaHR0cHM6Ly9pLmltZ3VyLmNvbS9qenV4S0t1LnBuZ1xyXG4gICAgICovXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKGRhdGE6Tm90aWZpY2F0aW9uRGF0YSk6Tm90aWZpY2F0aW9ue1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyB3aW5kb3cuTm90aWZpY2F0aW9uKGRhdGEudGl0bGUsIGV4Y2x1ZGVQcm9wZXJ0aWVzKGRhdGEsIFtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiLFxyXG4gICAgICAgICAgICBcIm9uQ2xpY2tcIixcclxuICAgICAgICAgICAgXCJvbkNsb3NlXCIsXHJcbiAgICAgICAgICAgIFwib25TaG93XCJcclxuICAgICAgICBdKSlcclxuICAgICAgICBub3RpZmljYXRpb24ub25jbGljayA9IGRhdGEub25DbGljayB8fCBOT09QXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9uc2hvdyA9IGRhdGEub25TaG93IHx8IE5PT1BcclxuICAgICAgICBub3RpZmljYXRpb24ub25jbG9zZSA9IGRhdGEub25DbG9zZSB8fCBOT09QXHJcbiAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNvdW5kKHNvdW5kOlNvdW5kKXtcclxuICAgICAgICBzb3VuZE1vZHVsZSA9IHNvdW5kTW9kdWxlIHx8IFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjcmVhdGVTb3VuZFwiXSlcclxuICAgICAgICBpZighc291bmRNb2R1bGUpdGhyb3cgbmV3IFdlYnBhY2tMb2FkZXJFcnJvcihcIkNvdWxkbid0IGZpbmQgc291bmRNb2R1bGUgaGVyZS5cIilcclxuICAgICAgICBjb25zdCBjcmVhdGVkID0gc291bmRNb2R1bGUuY3JlYXRlU291bmQoc291bmQpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U291bmQoc291bmQ6U291bmQpe1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZVNvdW5kKHNvdW5kKVxyXG4gICAgICAgIGNyZWF0ZWQucGxheSgpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU291bmQgPSBcImNhbGxfY2FsbGluZ1wifFwiY2FsbF9yaW5naW5nXCJ8XCJjYWxsX3JpbmdpbmdfYmVhdFwifFwiZGRyLWRvd25cInxcImRkci1sZWZ0XCJ8XCJkZHItcmlnaHRcInxcImRkci11cFwifFwiZGVhZmVuXCJ8XCJkaXNjb2RvXCJ8XCJkaXNjb25uZWN0XCJ8XCJodW1hbl9tYW5cInxcIm1lbnRpb24xXCJ8XCJtZW50aW9uMlwifFwibWVudGlvbjNcInxcIm1lc3NhZ2UxXCJ8XCJtZXNzYWdlMlwifFwibWVzc2FnZTNcInxcIm11dGVcInxcIm92ZXJsYXl1bmxvY2tcInxcInB0dF9zdGFydFwifFwicHR0X3N0b3BcInxcInJlY29ubmVjdFwifFwicm9ib3RfbWFuXCJ8XCJzdHJlYW1fZW5kZWRcInxcInN0cmVhbV9zdGFydGVkXCJ8XCJzdHJlYW1fdXNlcl9qb2luZWRcInxcInN0cmVhbV91c2VyX2xlZnRcInxcInVuZGVhZmVuXCJ8XCJ1bm11dGVcInxcInVzZXJfam9pblwifFwidXNlcl9sZWF2ZVwifFwidXNlcl9tb3ZlZFwiXHJcblxyXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25EYXRhID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGJvZHk6IHN0cmluZyxcclxuICAgIGljb246IHN0cmluZyxcclxuICAgIG9uU2hvdz86ICgpID0+IHZvaWQsXHJcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZCxcclxuICAgIG9uQ2xvc2U/OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5vdGljZURhdGEgPSBub3RpY2VXaXRob3V0SURcclxuXHJcbmNvbnN0IEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBpZih0aGlzLnJlbW92ZWQgIT09IHRoaXMuc3RhdGUucmVtb3ZlZCl7XHJcbiAgICAgICAgaWYodGhpcy5yZW1vdmVkKXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwicmVtb3ZlZFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHRoaXMuc2hvd2luZyAhPT0gdGhpcy5zdGF0ZS5zaG93aW5nKXtcclxuICAgICAgICBpZih0aGlzLnNob3dpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJzaG93aW5nXCIsIHRydWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInNob3dpbmdcIiwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pbmRleCAhPT0gdGhpcy5zdGF0ZS5pbmRleCl7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwiaW5kZXhcIiwgdGhpcy5pbmRleClcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEEgbm90aWNlIGludGVyZmFjZSBmb3IgbW9kaWZ5aW5nIGl0IGFuZCBzdWJzY3JpYmluZyB0byBldmVudHMuICovXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVtb3ZlZDogdGhpcy5yZW1vdmVkLFxyXG4gICAgICAgICAgICBzaG93aW5nOiB0aGlzLnNob3dpbmcsXHJcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZXZlbnRGdW5jID0gRXZlbnRIYW5kbGVyLmJpbmQodGhpcylcclxuICAgICAgICBub3RpY2VFdmVudHMub24oXCJub3RpY2VVcGRhdGVcIiwgZXZlbnRGdW5jKVxyXG4gICAgICAgIHRoaXMub24oXCJyZW1vdmVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbm90aWNlRXZlbnRzLm9mZihcIm5vdGljZVVwZGF0ZVwiLCBldmVudEZ1bmMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW0gdGhlIG5vdGljZSBpcyByZW1vdmVkLlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogXCJyZW1vdmVkXCIsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBpcyB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQ6IFwic2hvd2luZ1wiLCBsaXN0ZW5lcjogKGlzU2hvd2luZzpib29sZWFuKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBxdWV1ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogXCJpbmRleFwiLCBsaXN0ZW5lcjogKGluZGV4Om51bWJlcikgPT4gdm9pZCk6dGhpc1xyXG4gICAgb24oZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6ICguLi5hcmdzOmFueVtdKSA9PiB2b2lkKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIub24oZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbSB0aGUgbm90aWNlIGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQ6IFwicmVtb3ZlZFwiLCBsaXN0ZW5lcjogKCkgPT4gdm9pZCk6dGhpc1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBub3RpY2UgaXMgdmlzaWJsZSBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQ6IFwic2hvd2luZ1wiLCBsaXN0ZW5lcjogKGlzU2hvd2luZzpib29sZWFuKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBxdWV1ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50OiBcImluZGV4XCIsIGxpc3RlbmVyOiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvbmNlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczphbnlbXSkgPT4gdm9pZCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIG9mZihldmVudDogXCJyZW1vdmVkXCIsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvZmYoZXZlbnQ6IFwic2hvd2luZ1wiLCBsaXN0ZW5lcjogKGlzU2hvd2luZzpib29sZWFuKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvZmYoZXZlbnQ6IFwiaW5kZXhcIiwgbGlzdGVuZXI6IChpbmRleDpudW1iZXIpID0+IHZvaWQpOnRoaXNcclxuICAgIG9mZihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKC4uLmFyZ3M6YW55W10pID0+IHZvaWQpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5vZmYoZXZlbnQsIGxpc3RlbmVyKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlOntcclxuICAgICAgICByZW1vdmVkOmJvb2xlYW4sXHJcbiAgICAgICAgc2hvd2luZzpib29sZWFuLFxyXG4gICAgICAgIGluZGV4Om51bWJlclxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFRpY2tSZWZyZXNoOmJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGdldCByZW1vdmVkKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gIW5vdGljZXMuZmluZChlID0+IGUuaWQgPT09IHRoaXMuaWQpXHJcbiAgICB9XHJcbiAgICBnZXQgc2hvd2luZygpOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IDBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5kZXgoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIG5vdGljZXMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gdGhpcy5pZClcclxuICAgIH1cclxuICAgIGdldCBpZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaWRcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGF0YTogUGFydGlhbDxub3RpY2U+KXtcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBkYXRhKXtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSBcImlkXCIpY29udGludWVcclxuICAgICAgICAgICAgdGhpcy5kYXRhW2tleV0gPSBkYXRhW2tleV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLm5leHRUaWNrUmVmcmVzaCl7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRpY2tSZWZyZXNoID0gdHJ1ZVxyXG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpY2tSZWZyZXNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0ZXh0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS50ZXh0XHJcbiAgICB9XHJcbiAgICBzZXQgdGV4dCh0ZXh0KXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0eXBlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS50eXBlXHJcbiAgICB9XHJcbiAgICBzZXQgdHlwZSh0eXBlKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBidXR0b25UZXh0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5idXR0b25UZXh0XHJcbiAgICB9XHJcbiAgICBzZXQgYnV0dG9uVGV4dChidXR0b25UZXh0OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBidXR0b25UZXh0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25DbGljaygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEub25DbGlja1xyXG4gICAgfVxyXG4gICAgc2V0IG9uQ2xpY2sob25DbGljayl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBvbkNsaWNrXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICBpZih0aGlzLnJlbW92ZWQpcmV0dXJuXHJcbiAgICAgICAgbm90aWNlcy5zcGxpY2UodGhpcy5pbmRleCwgMSlcclxuICAgICAgICBub3RpY2VFdmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgfVxyXG4gICAgZGF0YTpub3RpY2VcclxufSIsImltcG9ydCBjb21wb25lbnRzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIlxyXG5pbXBvcnQgeyBDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL3V1aWRcIlxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0cy9UZXh0SW5wdXRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFBsdWdpblV0aWxpdGllcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICByZW5kZXJTZXR0aW5ncyhzZXR0aW5nczpTZXR0aW5nSXRlbVtdKXtcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLnJlbmRlclNldHRpbmdzVG9SZWFjdChzZXR0aW5ncylcclxuICAgICAgICBsZXQgZWxlbSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2tleTogdXVpZCgpfSwgaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLlJlYWN0VG9IVE1MRWxlbWVudChlbGVtKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzVG9SZWFjdChzZXR0aW5nczpTZXR0aW5nSXRlbVtdKXtcclxuICAgICAgICBsZXQgaXRlbXMgPSBbXVxyXG4gICAgICAgIHNldHRpbmdzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgaXRlbSAhPT0gXCJvYmplY3RcIilyZXR1cm4gaXRlbXMucHVzaChpdGVtKVxyXG4gICAgICAgICAgICBpZihpdGVtLnByb3BzICYmIFwiY2hpbGRyZW5cIiBpbiBpdGVtLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFBcnJheS5pc0FycmF5KGl0ZW0ucHJvcHMuY2hpbGRyZW4pKWl0ZW0ucHJvcHMuY2hpbGRyZW4gPSBbaXRlbS5wcm9wcy5jaGlsZHJlbl1cclxuICAgICAgICAgICAgICAgIGl0ZW0ucHJvcHMuY2hpbGRyZW4gPSB0aGlzLnJlbmRlclNldHRpbmdzVG9SZWFjdChpdGVtLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFpdGVtLnByb3BzKWl0ZW0ucHJvcHMgPSB7fVxyXG4gICAgICAgICAgICBpdGVtLnByb3BzLmtleSA9IHV1aWQoKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gVXRpbHMuZ2V0TmVzdGVkUHJvcHMoY29tcG9uZW50cywgaXRlbS5jb21wb25lbnQpXHJcbiAgICAgICAgICAgIGlmKCFjb21wb25lbnQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHdhcm5pbmcgPSBuZXcgVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFdhcm5pbmc6IE5vIGNvbXBvbmVudCB3YXMgZm91bmQgZm9yOiBcIiR7aXRlbS5jb21wb25lbnR9XCIuIFBsZWFzZSBjb3JyZWN0IHlvdXIgY29kZS5gLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmBcclxuICAgICAgICAgICAgICAgIH0pLnJlbmRlcigpXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHdhcm5pbmcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBPYmplY3QuY3JlYXRlKGl0ZW0ucHJvcHMpKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBpdGVtc1xyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIFNldHRpbmdJdGVtID0ge1xyXG4gICAgY29tcG9uZW50OiBzdHJpbmcsXHJcbiAgICBwcm9wczogQ29tcG9uZW50UHJvcHM8YW55PlxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5mcmVlemUobykge1xyXG4gICAgdmFyIG9vID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKG8gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIG9vID0gW107XHJcbiAgICAgICAgdmFyIGNsb25lID0gZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICBvby5wdXNoKHYpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvLmZvckVhY2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIGlmIChvIGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgICAgb28gPSBuZXcgU3RyaW5nKG8pLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgb28gPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvKSB7XHJcbiAgICAgICAgICAgIG9vW3Byb3BlcnR5XSA9IG9bcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvbztcclxufVxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgT2JqZWN0Q29uc3RydWN0b3Ige1xyXG4gICAgICAgIHVuZnJlZXplOiA8VCBleHRlbmRzIGFueT4ob2JqOiBSZWFkb25seTxUPikgPT4gVFxyXG4gICAgfVxyXG59XHJcbk9iamVjdC51bmZyZWV6ZSA9IHVuZnJlZXplIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIilcclxuaW1wb3J0IFBsdWdpblV0aWxpdGllcyBmcm9tIFwiLi9QbHVnaW5VdGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBVdGlscyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBSZWFjdFRvSFRNTEVsZW1lbnQoUmVhY3RFbGVtZW50OiBSZWFjdEVsZW1lbnQpeyAgICBcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdEVsZW1lbnQsIGVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUGx1Z2luVXRpbHMoKXtyZXR1cm4gUGx1Z2luVXRpbGl0aWVzfVxyXG5cclxuICAgIGdldE5lc3RlZFByb3BzKG9iajphbnksIHBhdGg6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi5cIilcclxuICAgICAgICBmb3IobGV0IHNlZyBvZiBzZWdtZW50cyl7XHJcbiAgICAgICAgICAgIG9iaiA9IG9iaiAmJiAoc2VnIGluIG9iaikgPyBvYmpbc2VnXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICB9XHJcblxyXG4gICAgRGVjaW1hbENvbG9yVG9IZXgoY29sb3I6bnVtYmVyKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiK2NvbG9yLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgSGV4Q29sb3JUb0RlY2ltYWwoY29sb3I6c3RyaW5nKTpudW1iZXJ7XHJcbiAgICAgICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKC9bIztdL2csIFwiXCIpXHJcbiAgICAgICAgbGV0IHJlcyA9IHBhcnNlSW50KGNvbG9yLCAxNilcclxuICAgICAgICBpZihpc05hTihyZXMpKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb2xvcjogJHtjb2xvcn1gKVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVEYShjbGFzc05hbWU6c3RyaW5nKTpzdHJpbmd7XHJcbiAgICAgICAgaWYoIWNsYXNzTmFtZSlyZXR1cm4gY2xhc3NOYW1lXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuZmlsdGVyKGUgPT4gIWUuc3RhcnRzV2l0aChcImRhLVwiKSkuam9pbihcIiBcIilcclxuICAgIH1cclxuXHJcbiAgICBGaW5kUmVhY3QoZG9tOkVsZW1lbnQsIHRyYXZlcnNlVXA6bnVtYmVyID0gMCk6UmVhY3QuQ29tcG9uZW50fFJlYWN0LlB1cmVDb21wb25lbnR7XHJcbiAgICAgICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTMyMTc0Mi9yZWFjdC1nZXR0aW5nLWEtY29tcG9uZW50LWZyb20tYS1kb20tZWxlbWVudC1mb3ItZGVidWdnaW5nIzM5MTY1MTM3XHJcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZG9tKS5maW5kKGtleT0+a2V5LnN0YXJ0c1dpdGgoXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIikpO1xyXG4gICAgICAgIGNvbnN0IGRvbUZpYmVyID0gZG9tW2tleV07XHJcbiAgICAgICAgaWYgKGRvbUZpYmVyID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgLy8gcmVhY3QgPDE2XHJcbiAgICAgICAgaWYgKGRvbUZpYmVyLl9jdXJyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcEZpYmVyID0gZG9tRmliZXIuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZXJzZVVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbXBGaWJlciA9IGNvbXBGaWJlci5fY3VycmVudEVsZW1lbnQuX293bmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wRmliZXIuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIHJlYWN0IDE2K1xyXG4gICAgICAgIGNvbnN0IEdldENvbXBGaWJlciA9IGZpYmVyPT57XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGZpYmVyLl9kZWJ1Z093bmVyOyAvLyB0aGlzIGFsc28gd29ya3MsIGJ1dCBpcyBfX0RFVl9fIG9ubHlcclxuICAgICAgICAgICAgbGV0IHBhcmVudEZpYmVyID0gZmliZXIucmV0dXJuO1xyXG4gICAgICAgICAgICB3aGlsZSAodHlwZW9mIHBhcmVudEZpYmVyLnR5cGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RmliZXIgPSBwYXJlbnRGaWJlci5yZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEZpYmVyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNvbXBGaWJlciA9IEdldENvbXBGaWJlcihkb21GaWJlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZXJzZVVwOyBpKyspIHtcclxuICAgICAgICAgICAgY29tcEZpYmVyID0gR2V0Q29tcEZpYmVyKGNvbXBGaWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wRmliZXIuc3RhdGVOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NsYXNzKGNsYXNzTmFtZXM6c3RyaW5nLCBjbGFzc05hbWU6c3RyaW5nKTpib29sZWFue1xyXG4gICAgICAgIGlmKCFjbGFzc05hbWVzIHx8ICFjbGFzc05hbWUpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgY29uc3QgY2xhc3NuYW1lcyA9IGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgZm9yKGxldCBjbGFzc25hbWUgb2YgdGhpcy5yZW1vdmVEYShjbGFzc05hbWUpLnNwbGl0KFwiIFwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFjbGFzc25hbWVzLmluY2x1ZGVzKGNsYXNzbmFtZSkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0SlNPYmplY3Qob2JqOmFueSk6c3RyaW5ne1xyXG4gICAgICAgIGlmKFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIiwgXCJiaWdpbnRcIiwgXCJ1bmRlZmluZWRcIl0uaW5jbHVkZXModHlwZW9mIG9iaikpcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICBpZihvYmogPT09IG51bGwpcmV0dXJuIFwibnVsbFwiXHJcbiAgICAgICAgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKXJldHVybiBTdHJpbmcob2JqKVxyXG4gICAgICAgIGlmKHR5cGVvZiBvYmogPT09IFwic3ltYm9sXCIpcmV0dXJuIFN0cmluZyhvYmopXHJcblxyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSl7XHJcbiAgICAgICAgICAgIGlmKCFvYmoubGVuZ3RoKXJldHVybiBcIltdXCJcclxuICAgICAgICAgICAgcmV0dXJuIGBbXFxuICAgICR7b2JqLm1hcChlID0+IHRoaXMuZm9ybWF0SlNPYmplY3QoZSkpLmpvaW4oXCIsXFxuICAgIFwiKX1cXG5dYFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxyXG4gICAgICAgICAgICBpZihrZXlzLmxlbmd0aCA9PT0gMClyZXR1cm4gXCJ7fVwiXHJcbiAgICAgICAgICAgIHJldHVybiBge1xcbiAgICAke2tleXMubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JpZ2luYWwgPSBrZXlcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpa2V5ID0gXCJbXCIrU3RyaW5nKGtleSkrXCJdXCJcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gXCJudW1iZXJcIilrZXkgPSBTdHJpbmcoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNOYU4ocGFyc2VJbnQoa2V5WzBdKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5mb3JtYXRKU09iamVjdChrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKC9bXlxcd1xcZF8kXS9nLnRlc3Qoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmZvcm1hdEpTT2JqZWN0KGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtrZXl9OiAke3RoaXMuZm9ybWF0SlNPYmplY3Qob2JqW29yaWdpbmFsXSl9YFxyXG4gICAgICAgICAgICB9KX1cXG59YFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImNvbnN0IEJETW9kdWxlczp0eXBlb2Ygd2luZG93LkJETW9kdWxlcyA9IHdpbmRvdy5CRE1vZHVsZXMgfHwgcmVxdWlyZShcIi4vQkRNb2R1bGVzXCIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgV2VicGFja0xvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBnZXQoaWQ6IG51bWJlcik6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGlkKVxyXG4gICAgfVxyXG4gICAgZmluZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IEJETW9kdWxlcy5nZXQoZmlsdGVyKVswXVxyXG4gICAgICAgIGlmKCFyZXN1bHQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZmlsdGVyLCBcImNvdWxkbid0IGZpbmQgdGhlIG1vZHVsZS5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgZmluZEJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVswXVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueVtde1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGZpbHRlcilcclxuICAgIH1cclxuICAgIGZpbHRlckJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2VicGFja0xvYWRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTpzdHJpbmcgPSBcIlwiKXtcclxuICAgICAgICBtZXNzYWdlICs9IFwiXFxuXFx0VGhpcyBlcnJvciBpcyByZWxhdGVkIHRvIExpZ2h0Y29yZCBub3QgYmVpbmcgYWJsZSB0byBmaW5kIGEgV2VicGFja01vZHVsZS4gXFxuXFx0UGxlYXNlIHNob3cgdGhpcyBlcnJvciBhbmQgYSBmZXcgbGluZXMgb2YgbG9ncyBhYm92ZSB0aGlzIGVycm9yIHRvIHRoZSBkZXZzLiBcXG5cXHRPcGVuIGFuIGlzc3VlIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9MaWdodGNvcmQvTGlnaHRjb3JkIG9yIGluIG91ciBkaXNjb3JkIHNlcnZlci5cIlxyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpXHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJXZWJwYWNrTG9hZGVyRXJyb3JcIlxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFJlY3JlYXRlIHRoZSBnaXZlbiBvYmplY3Qgd2l0aG91dCB0aGUgX19wcm90b19fLiBVc2VmdWwgZm9yIGJldHRlciBmb3JtYXR0aW5nIHdoZW4gb3V0cHV0IGluIGNvbnNvbGUuXHJcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byByZWNyZWF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVOdWxsUHJvdG88T2JqPWFueT4ob2JqOk9iaik6T2Jqe1xyXG4gICAgbGV0IG8gPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgb1trXSA9IG9ialtrXVxyXG4gICAgfSlcclxuICAgIHJldHVybiBvXHJcbn0iLCJleHBvcnQgY29uc3QgaXNOYXRpdmU6Ym9vbGVhbiA9IHR5cGVvZiB3aW5kb3cuQkRNb2R1bGVzID09PSBcInVuZGVmaW5lZFwiXHJcbmV4cG9ydCBjb25zdCBpc0ltcG9ydGVkOmJvb2xlYW4gPSB0eXBlb2Ygd2luZG93LkJETW9kdWxlcyAhPT0gXCJ1bmRlZmluZWRcIiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4Y2x1ZGVQcm9wZXJ0aWVzPE9iaiA9IGFueT4ob2JqOk9iaiwgcHJvcHM6KGtleW9mIE9iailbXSk6UGFydGlhbDxPYmo+e1xyXG4gICAgbGV0IG5ld09iaiA9IHt9XHJcblxyXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHMuaW5jbHVkZXMoayBhcyBrZXlvZiBPYmopKXJldHVyblxyXG4gICAgICAgIG5ld09ialtrXSA9IG9ialtrXVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbmV3T2JqXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOT09QKCl7fSIsImltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCBOb3RpY2VzLCB7IG5vdGljZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcml2YXRlL05vdGljZXNcIlxyXG5pbXBvcnQgeyBpc05hdGl2ZSB9IGZyb20gXCIuL2Vudmlyb25uZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaCgpe1xyXG4gICAgLyoqIFNUQVJUIE5PVElDRSAqL1xyXG4gICAgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJDb25uZWN0ZWRBcHBWaWV3XCIpXHJcbiAgICAudGhlbihhc3luYyAobW9kKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXBwQ2xhc3NlcyA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuaGFzTm90aWNlKTtcclxuICAgICAgICBjb25zdCBidWlsZFJlbmRlciA9IG9yaWdpbmFsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBvcmlnaW5hbC5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld2NoaWxkcmVuID0gW11cclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICBpZighQXJyYXkuaXNBcnJheShjaGlsZHJlbikpY2hpbGRyZW4gPSBbY2hpbGRyZW5dXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIG5ld2NoaWxkcmVuLnB1c2goY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICBuZXdjaGlsZHJlbi5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWNlcywge2NvbnRhaW5lcjogdGhpc30pKVxyXG4gICAgICAgICAgICAgICAgbmV3Y2hpbGRyZW4ucHVzaChjaGlsZHJlblsxXSlcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuID0gbmV3Y2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW5bMl0ucHJvcHMuY2hpbGRyZW5bMF0ucHJvcHMucmVuZGVyID0gYnVpbGRSZW5kZXJDaGFubmVsU2lkZWJhcihyZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlblsyXS5wcm9wcy5jaGlsZHJlblswXS5wcm9wcy5yZW5kZXIpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1aWxkUmVuZGVyQ2hhbm5lbFNpZGViYXIgPSBvcmlnaW5hbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXJDaGFubmVsU2lkZWJhcigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBvcmlnaW5hbC5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzTm90aWNlID0gbm90aWNlcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICBpZighaGFzTm90aWNlKXJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYoIVV0aWxzLmhhc0NsYXNzKHJldHVyblZhbHVlLnByb3BzLmNsYXNzTmFtZSwgYXBwQ2xhc3Nlcy5oYXNOb3RpY2UpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jbGFzc05hbWUgKz0gXCIgXCIrVXRpbHMucmVtb3ZlRGEoYXBwQ2xhc3Nlcy5oYXNOb3RpY2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kLmRlZmF1bHQucHJvdG90eXBlLnJlbmRlciA9IGJ1aWxkUmVuZGVyKG1vZC5kZWZhdWx0LnByb3RvdHlwZS5yZW5kZXIpO1xyXG4gICAgICAgIChhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIitVdGlscy5yZW1vdmVEYShhcHBDbGFzc2VzLmJhc2UpKVxyXG4gICAgICAgICAgICBpZighYmFzZSl0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGJhc2UgaGVyZWApXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBVdGlscy5GaW5kUmVhY3QoYmFzZSkgYXMgYW55XHJcbiAgICAgICAgICAgIGVsZW0ucmVuZGVyID0gYnVpbGRSZW5kZXIoZWxlbS5yZW5kZXIpXHJcbiAgICAgICAgICAgIGVsZW0uZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgIH0pKClcclxuICAgIH0pXHJcbiAgICAvKiogRU5EIE5PVElDRSAqL1xyXG5cclxuICAgIGlmKGlzTmF0aXZlKXtcclxuICAgICAgICAvKiogU1RBUlQgVVNFUlBPUE9VVCBQQVRDSCAqL1xyXG4gICAgICAgIGF3YWl0TG9naW4oKVxyXG4gICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IFVzZXJQb3BvdXQgPSBhd2FpdCBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIkZsdXhDb250YWluZXIoRm9yd2FyZFJlZihTdWJzY3JpYmVHdWlsZE1lbWJlcnNDb250YWluZXIoVXNlclBvcG91dCkpKVwiKVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyTW9kdWxlID0gYXdhaXQgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXRDdXJyZW50VXNlcilcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyMSA9IG5ldyBVc2VyUG9wb3V0LmRlZmF1bHQoe3VzZXJJZDogdXNlck1vZHVsZS5kZWZhdWx0LmdldEN1cnJlbnRVc2VyKCkuaWQsIGd1aWxkSWQ6IG51bGwsIGNoYW5uZWxJZDogbnVsbCwgZGlzYWJsZVVzZXJQcm9maWxlTGluazogdHJ1ZX0pLnJlbmRlcigpXHJcbiAgICAgICAgICAgIGNvbnN0IFBvcG91dFByb3BzID0gcmVuZGVyMS5wcm9wc1xyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIyID0gcmVuZGVyMS50eXBlLnJlbmRlcihQb3BvdXRQcm9wcywgbnVsbClcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyMyA9IG5ldyByZW5kZXIyLnR5cGUocmVuZGVyMi5wcm9wcykucmVuZGVyKClcclxuICAgICAgICAgICAgY29uc3QgVXNlclBvcG91dENvbXBvbmVudCA9IHJlbmRlcjMudHlwZVxyXG4gICAgICAgICAgICBpZighVXNlclBvcG91dENvbXBvbmVudCl0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgdGhlIFVzZXJQb3BvdXRDb21wb25lbnQgY29tcG9uZW50LmApXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gVXNlclBvcG91dENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyXHJcbiAgICAgICAgICAgIFVzZXJQb3BvdXRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHJlbmRlci5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlbi5wcm9wc1tcImRhdGEtdXNlci1pZFwiXSA9IHRoaXMucHJvcHMudXNlci5pZFxyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKiogRU5EIFVTRVJQT1BPVVQgUEFUQ0gqL1xyXG4gICAgXHJcbiAgICAgICAgLyoqIFNUQVJUIFVTRVJQUk9GSUxFIFBBVENIICovXHJcbiAgICAgICAgYXdhaXRMb2dpbigpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgVXNlclByb2ZpbGUgPSBhd2FpdCBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlVzZXJQcm9maWxlXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJNb2R1bGUgPSBhd2FpdCBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldEN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXIxID0gbmV3IFVzZXJQcm9maWxlLmRlZmF1bHQoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlck1vZHVsZS5kZWZhdWx0LmdldEN1cnJlbnRVc2VyKClcclxuICAgICAgICAgICAgfSkucmVuZGVyKClcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyMiA9IG5ldyByZW5kZXIxLnR5cGUocmVuZGVyMS5wcm9wcykucmVuZGVyKClcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyMyA9IHJlbmRlcjIudHlwZS5yZW5kZXIocmVuZGVyMi5wcm9wcywgbnVsbClcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyNCA9IG5ldyByZW5kZXIzLnR5cGUocmVuZGVyMy5wcm9wcykucmVuZGVyKClcclxuICAgICAgICAgICAgY29uc3QgVXNlclByb2ZpbGVDb21wb25lbnQgPSByZW5kZXI0LnR5cGVcclxuICAgICAgICAgICAgaWYoIVVzZXJQcm9maWxlQ29tcG9uZW50KXRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgZmluZCB0aGUgVXNlclByb2ZpbGVDb21wb25lbnQgY29tcG9uZW50LmApXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gVXNlclByb2ZpbGVDb21wb25lbnQucHJvdG90eXBlLnJlbmRlclxyXG4gICAgICAgICAgICBVc2VyUHJvZmlsZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gcmVuZGVyLmNhbGwodGhpcywgLi4uYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0dXJuVmFsdWUpXHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW4ucHJvcHNbXCJkYXRhLXVzZXItaWRcIl0gPSB0aGlzLnByb3BzLnVzZXIuaWRcclxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLyoqIEVORCBVU0VSUFJPRklMRSBQQVRDSCAqL1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IEFkZCBpbiBhcHAtbm90aWZpY2F0aW9ucyAvIGNvbmZpcm1hdGlvbnMuXHJcbiAgICAvKiogU1RBUlQgSU4tQVBQIE5PVElGSUNBVElPTlMgKi9cclxuICAgIC8vZ2V0TW9kdWxlKGUgPT4gdHJ1ZSlcclxuICAgIC8qKiBFTkQgSU4tQVBQIE5PVElGSUNBVElPTlMgKi9cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kdWxlKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOlByb21pc2U8YW55PntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5MaWdodGNvcmQuQXBpLmVuc3VyZUV4cG9ydGVkKGZpbHRlcilcclxuICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW0xJR0hUQ09SRF1cIiwgZXJyLCBmaWx0ZXIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmxldCBoYXNDb21wbGV0ZWRMb2dpbiA9IGZhbHNlXHJcbmxldCBsb2dpblByb21pc2U6UHJvbWlzZTx2b2lkPlxyXG5mdW5jdGlvbiBhd2FpdExvZ2luKCk6UHJvbWlzZTx2b2lkPntcclxuICAgIGlmKGhhc0NvbXBsZXRlZExvZ2luKXJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgaWYobG9naW5Qcm9taXNlKXJldHVybiBsb2dpblByb21pc2VcclxuICAgICBcclxuICAgIHJldHVybiBsb2dpblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGxldCBpc1Jlc29sdmVkID0gZmFsc2VcclxuICAgICAgICB3aW5kb3cuTGlnaHRjb3JkLkRpc2NvcmRNb2R1bGVzLmRpc3BhdGNoZXIuc3Vic2NyaWJlKFwiQ09OTkVDVElPTl9PUEVOXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICBpZihpc1Jlc29sdmVkKXJldHVyblxyXG4gICAgICAgICAgICBoYXNDb21wbGV0ZWRMb2dpbiA9IHRydWVcclxuICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIGlzUmVzb2x2ZWQgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxud2luZG93LkxpZ2h0Y29yZC5EaXNjb3JkTW9kdWxlcy5kaXNwYXRjaGVyLnN1YnNjcmliZShcIkxPR09VVFwiLCAoZXYpID0+IHtcclxuICAgIGhhc0NvbXBsZXRlZExvZ2luID0gZmFsc2VcclxuICAgIGxvZ2luUHJvbWlzZSA9IHVuZGVmaW5lZFxyXG59KSIsImltcG9ydCAqIGFzIHV1aWR2MSBmcm9tIFwidXVpZC92MVwiXHJcbmltcG9ydCAqIGFzIHV1aWR2NCBmcm9tIFwidXVpZC92NFwiXHJcblxyXG50eXBlIHV1aWRGdW5jID0gKCkgPT4gc3RyaW5nXHJcbmxldCB1dWlkOnV1aWRGdW5jICYge3YxOiB1dWlkRnVuYywgdjQ6IHV1aWRGdW5jfSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB1dWlkdjQoKVxyXG59LCB7djE6ICgpID0+IHV1aWR2MSgpLCB2NDogKCkgPT4gdXVpZHY0KCl9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXVpZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb3dlcmNvcmQvd2VicGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3YxXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==