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

// bait typescript into thinking this is not reactDOM so no circular dependency.
window.ReactDOM = (window["Reac" + "tDOM"] || // If in Lightcord
    (() => {
        try {
            return window.BdApi.ReactDOM;
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
            return window.EDApi.ReactDOM;
        }
        catch (e) {
            return null;
        }
    })());
module.exports = window.ReactDOM;


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
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
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
            if ("style" in this.props) {
                props.style = this.props.style;
            }
            else {
                props.style = {};
            }
            if ("onRightClick" in this.props) {
                props.onRightClick = this.props.onRightClick;
            }
            else {
                props.onRightClick = noop_1.default;
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
        let button = React.createElement("button", { type: "button", ref: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${colorsModule.ButtonLooks[props.look.toUpperCase()]} ${colorsModule.ButtonColors[props.color.toUpperCase()]}${buttonSize}${hoverColor}${hover} ${euhModule1.grow}`, style: Object.assign({ flex: "0 1 auto" }, props.style), onClick: () => props.onClick(), onMouseEnter: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: true });
            }, onMouseLeave: (ev) => {
                if (!hoverColor)
                    return;
                this.setState({ hover: false });
            }, disabled: props.disabled, onContextMenu: () => props.onRightClick() },
            React.createElement("div", { className: euhModule1.contents }, props.children));
        if (props.wrapper) {
            return React.createElement("div", { ref: "wrapper", className: buttonModule.buttonWrapper }, button);
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
                return React.createElement(ErrorCatcher, { key: uuid_1.default() }, React.createElement(Class, Object.assign(Object.assign({ ref: "original" }, this.props), { key: uuid_1.default() })));
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
exports.LightcordApiError = void 0;
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
class LightcordApiError extends Error {
    constructor() {
        super(...arguments);
        this.name = "LightcordApiError";
    }
}
exports.LightcordApiError = LightcordApiError;


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
        /** START WEBHOOK PATCH */
        /*
                let usedWebhooks = {}
        
                getModule(e => e && e.Request && e.Request.prototype && e.Request.prototype.end)
                .then(RequestModule => {
                    const end = RequestModule.Request.prototype.end
                    RequestModule.Request.prototype.end = function(){
                        if(this.url.endsWith("/messages") && /\/channels\/\d+\/messages/g.test(this.url) && this.method === "POST"){ // sending message
                            let channelId = this.url.split("/channels/")[1].split("/messages")[0]
                            
                            if(usedWebhooks[channelId]){ // webhook is availlable
                                let webhook = usedWebhooks[channelId]
                                let url = `/webhooks/${webhook.id}/${webhook.token}?wait=true`
                                this.url = url
                            }
                        }
        
                        return end.call(this, ...arguments)
                    }
                })
                getModule(e => e.default && e.default.displayName === "Webhook")
                .then(webhookComponent => {
                    const renderEdit = webhookComponent.default.prototype.renderEdit
                    webhookComponent.default.prototype.renderEdit = function(){
                        const webhook = this.props.webhook
                        let returnValue = renderEdit.call(this, ...arguments)
                        returnValue.props.children = [returnValue.props.children]
                        let message = usedWebhooks[webhook.channel_id] && usedWebhooks[webhook.channel_id].id === webhook.id ? "Stop talking with this webhook" : "Talk with this webhook"
        
                        returnValue.props.children.push(React.createElement(window.Lightcord.Api.Components.inputs.Button, {color: "green", wrapper: false, onClick(){
                            if(usedWebhooks[webhook.channel_id] && usedWebhooks[webhook.channel_id].id === webhook.id){
                                delete usedWebhooks[webhook.channel_id]
                            }else{
                                usedWebhooks[webhook.channel_id] = {
                                    id: webhook.id,
                                    token: webhook.token
                                }
                            }
                            webhookPanels.forEach(e => e())
                        }}, message))
        
                        return returnValue
                    }
                })
        
                let webhookPanels = []
                let getComp = (comp) => {
                    class SettingsWebhooks extends React.PureComponent {
                        constructor(props){
                            super(props)
                        }
        
                        componentWillMount(){
                            this.id = uuid()
                            this.component = new comp(this.props)
                            let func = () => {
                                this.component.forceUpdate()
                            }
                            func.id = this.id
                            webhookPanels.push(func)
                        }
        
                        componentWillUnmount(){
                            this.component = null
                            webhookPanels = webhookPanels.filter(e => e.id !== this.id)
                        }
        
                        render(){
                            return this.component.render()
                        }
        
                        static displayName = "SettingsWebhooks"
                    }
        
                    return SettingsWebhooks
                }
                getModule(e => e.default && e.default.displayName === "FluxContainer(SettingsWebhooks)")
                .then(webhooksComponents => {
                    let comp = webhooksComponents.default
        
                    webhooksComponents.default = getComp(comp)
        
                    WebpackLoader.find(e => e.default && e.default.displayName === "FluxContainer(FluxContainer(SettingsWebhooks))")
                    .forEach(mod => {
                        mod.default = getComp(mod.default)
                    })
                })*/
        /** END WEBHOOK PATCH */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQWxlcnRCb3gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQ29kZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9TZXR0aW5nc1RpdGxlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1RhYnMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVG9vbHRpcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvQ29sb3JQaWNrZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvcHJpdmF0ZS9FcnJvckNhdGNoZXIudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9wcml2YXRlL05vdGljZXMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9CRE1vZHVsZXMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvRGlzY29yZFRvb2xzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1BsdWdpblV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9VbmZyZWV6ZS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9VdGlscy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9XZWJwYWNrTG9hZGVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2Nsb25lTnVsbFByb3RvLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL2Vudmlyb25uZW1lbnQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvZXhjbHVkZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvbm9vcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9wYXRjaGVycy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy91dWlkLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInBvd2VyY29yZC93ZWJwYWNrXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92MVwiIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInV1aWQvdjRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsZ0ZBQWdGO0FBQ2hGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLE1BQU0s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QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZPRiw2REFBaUM7QUFDakMsNkRBQWlDO0FBR2pDLElBQUksSUFBSSxHQUEyQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdELE9BQU8sTUFBTSxFQUFFO0FBQ25CLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQztBQUU1QyxrQkFBZSxJQUFJOzs7Ozs7Ozs7Ozs7QUNSbkIsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgUmVhY3RET01TZWxlY3RvciB9IGZyb20gXCIuL3NlbGVjdG9yc1wiXHJcblxyXG4vLyBiYWl0IHR5cGVzY3JpcHQgaW50byB0aGlua2luZyB0aGlzIGlzIG5vdCByZWFjdERPTSBzbyBubyBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG53aW5kb3cuUmVhY3RET00gPSAod2luZG93W1wiUmVhY1wiK1widERPTVwiXSB8fCAvLyBJZiBpbiBMaWdodGNvcmRcclxuICAgICgoKT0+eyAvLyBJZiBpbiBTdGFuZGFyZCBCZXR0ZXJEaXNjb3JkXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkJkQXBpLlJlYWN0RE9NXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0pKCkgfHxcclxuICAgICgoKT0+eyAvLyBJZiBpbiBQb3dlcmNvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlYnBhY2sgPSByZXF1aXJlKFwicG93ZXJjb3JkL3dlYnBhY2tcIilcclxuICAgICAgICAgICAgcmV0dXJuIHdlYnBhY2suUmVhY3RET01cclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSB8fCBcclxuICAgICgoKT0+eyAvLyBJZiBpbiBFbmhhbmNlZERpc2NvcmRcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRURBcGkuUmVhY3RET01cclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSkoKSkgYXMgdHlwZW9mIGltcG9ydChcInJlYWN0LWRvbVwiKVxyXG5cclxuZXhwb3J0ID0gKHdpbmRvdy5SZWFjdERPTSBhcyBhbnkpIiwiaW1wb3J0IERpc2NvcmRCdXR0b24gZnJvbSBcIi4vaW5wdXRzL0J1dHRvblwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vaW5wdXRzL1N3aXRjaFwiXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuL2lucHV0cy9SYWRpb0dyb3VwXCJcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuL2lucHV0cy9UZXh0QXJlYVwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4vaW5wdXRzL1RleHRJbnB1dFwiXHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9pbnB1dHMvRHJvcGRvd25cIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9UaXRsZVwiXHJcbmltcG9ydCBTZXR0aW5nc1RpdGxlIGZyb20gXCIuL2dlbmVyYWwvU2V0dGluZ3NUaXRsZVwiXHJcbmltcG9ydCBUYWJzLCB7IFRhYiB9IGZyb20gXCIuL2dlbmVyYWwvVGFic1wiXHJcbmltcG9ydCBTZXR0aW5nU3ViVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9TZXR0aW5nU3ViVGl0bGVcIlxyXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuL2dlbmVyYWwvQ29kZUJsb2NrXCJcclxuaW1wb3J0IGNsb25lTnVsbFByb3RvIGZyb20gXCIuLi9tb2R1bGVzL2Nsb25lTnVsbFByb3RvXCJcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vZ2VuZXJhbC9Ub29sdGlwXCJcclxuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuL2lucHV0cy9Db2xvclBpY2tlclwiXHJcbmltcG9ydCBBbGVydEJveCBmcm9tIFwiLi9nZW5lcmFsL0FsZXJ0Qm94XCJcclxuaW1wb3J0IHsgY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyB9IGZyb20gXCIuL3ByaXZhdGUvRXJyb3JDYXRjaGVyXCJcclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBQcm94aWVkID0gY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhSYWRpb0dyb3VwKVxyXG5leHBvcnQgZGVmYXVsdCBjbG9uZU51bGxQcm90byh7XHJcbiAgICBpbnB1dHM6IGNsb25lTnVsbFByb3RvKHtcclxuICAgICAgICBCdXR0b246IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoRGlzY29yZEJ1dHRvbiksXHJcbiAgICAgICAgU3dpdGNoOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFN3aXRjaCksXHJcbiAgICAgICAgQ2hvaWNlczogUmFkaW9Hcm91cFByb3hpZWQsXHJcbiAgICAgICAgUmFkaW9Hcm91cDogUmFkaW9Hcm91cFByb3hpZWQsXHJcbiAgICAgICAgVGV4dEFyZWE6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVGV4dEFyZWEpLFxyXG4gICAgICAgIFRleHRJbnB1dDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUZXh0SW5wdXQpLFxyXG4gICAgICAgIERyb3Bkb3duOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKERyb3Bkb3duKSxcclxuICAgICAgICBDb2xvclBpY2tlcjogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhDb2xvclBpY2tlcilcclxuICAgIH0pLFxyXG4gICAgZ2VuZXJhbDogY2xvbmVOdWxsUHJvdG8oe1xyXG4gICAgICAgIFRpdGxlOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFRpdGxlKSxcclxuICAgICAgICBTZXR0aW5nc1RpdGxlOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKFNldHRpbmdzVGl0bGUpLFxyXG4gICAgICAgIFNldHRpbmdTdWJUaXRsZTogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhTZXR0aW5nU3ViVGl0bGUpLFxyXG4gICAgICAgIFRhYnM6IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MoVGFicyksXHJcbiAgICAgICAgQ29kZUJsb2NrOiBjcmVhdGVQcm94eUVycm9yQ2F0Y2hlckNsYXNzKENvZGVCbG9jayksXHJcbiAgICAgICAgVG9vbHRpcDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhUb29sdGlwKSxcclxuICAgICAgICBBbGVydEJveDogY3JlYXRlUHJveHlFcnJvckNhdGNoZXJDbGFzcyhBbGVydEJveClcclxuICAgIH0pXHJcbn0pIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIEFsZXJ0Qm94UHJvcHMgPSB7XHJcbiAgICB0eXBlOiBcIndhcm5cInxcImluZm9cInxcImRhbmdlclwifFwiZXJyb3JcInxcInN1Y2Nlc3NcIixcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGV8c3RyaW5nXHJcbn1cclxuXHJcbmxldCBBbGVydEJveE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QWxlcnRCb3hQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpBbGVydEJveFByb3BzID0ge1xyXG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQWxlcnRCb3hNb2R1bGVzIHx8IChBbGVydEJveE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiTWFya2Rvd25cIiAmJiBlLmRlZmF1bHQuZGVmYXVsdFByb3BzLnBhcnNlcikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgW1xyXG4gICAgICAgICAgICBNYXJrZG93blxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHdyYXBcclxuICAgICAgICBsZXQgY2hpbGRyZW5cclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIHdyYXAgPSBNYXJrZG93bi5wcm90b3R5cGUucmVuZGVyLmNhbGwoe1xyXG4gICAgICAgICAgICAgICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgfSwgTWFya2Rvd24uZGVmYXVsdFByb3BzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjaGlsZHJlbiA9IHdyYXAucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3JhcCA9IE1hcmtkb3duLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9LCBNYXJrZG93bi5kZWZhdWx0UHJvcHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIH1cclxuICAgICAgICB3cmFwLnByb3BzLmNoaWxkcmVuID0gPGRpdiBjbGFzc05hbWU9e1wibGMtYWxlcnQtYm94IGxjLWFsZXJ0LWJveC1cIit0aGlzLnByb3BzLnR5cGV9PlxyXG4gICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJsYy1ibG9ja3F1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICByZXR1cm4gd3JhcFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCIqKipEaXNjb3JkJ3MqKiogKipNYXJrZG93bioqIF9pc18gW3N1cHBvcnRlZF0oaHR0cHM6Ly9nb29nbGUuY29tKSBvciB5b3UgY2FuIGp1c3QgaW5zZXJ0IHlvdXIgb3duIHJlYWN0IGNoaWxkcy5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbmZvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICBpbmZvOiBcIllvdSBjYW4gaW5zZXJ0IG1hcmtkb3duIChhcyBzdHJpbmcpIG9yIG5vcm1hbCByZWFjdCBjaGlsZHNcIixcclxuICAgICAgICB3YXJuOiBcIkFsbCBzdHJpbmcgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBtYXJrZG93bi4gSWYgeW91IHdhbnQgcmF3IHN0cmluZywgcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdHJpbmcgaW5zaWRlLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcblxyXG50eXBlIENvZGVCbG9ja1Byb3BzID0ge1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxufVxyXG5cclxubGV0IENvZGVCbG9ja01vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZUJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvZGVCbG9ja1Byb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkNvZGVCbG9ja1Byb3BzID0ge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcInBsYWludGV4dFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQ29kZUJsb2NrTW9kdWxlcyB8fCAoQ29kZUJsb2NrTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5tYXJrdXApLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1lc3NhZ2VDb250ZW50KSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5oaWdobGlnaHQpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1hcmdpbkJvdHRvbTgpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtZXNzYWdlTW9kdWxlMSxcclxuICAgICAgICAgICAgbWVzc2FnZU1vZHVsZTIsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhck1vZHVsZTEsXHJcbiAgICAgICAgICAgIGhpZ2h0bGlnaHRKUyxcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlMVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMucHJvcHMubGFuZ3VhZ2UgPT09IFwicGxhaW50ZXh0XCIgPyA8Y29kZSBjbGFzc05hbWU9e2Ake3Njcm9sbGJhck1vZHVsZTEuc2Nyb2xsYmFyR2hvc3RIYWlybGluZX0gaGxqc2B9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxyXG4gICAgICAgIDwvY29kZT4gOiA8Y29kZSBjbGFzc05hbWU9e2Ake3Njcm9sbGJhck1vZHVsZTEuc2Nyb2xsYmFyR2hvc3RIYWlybGluZX0gaGxqc2B9IFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaGlnaHRsaWdodEpTLmhpZ2hsaWdodCh0aGlzLnByb3BzLmxhbmd1YWdlLCB0aGlzLnByb3BzLmNvbnRlbnQpLnZhbHVlfX0gLz5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgJHttZXNzYWdlTW9kdWxlMS5tYXJrdXB9ICR7bWVzc2FnZU1vZHVsZTIubWVzc2FnZUNvbnRlbnR9YH0+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7Y29kZX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXJnaW5Nb2R1bGUxLm1hcmdpbkJvdHRvbTh9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJjb25zb2xlLmxvZyhcXFwiRXhlbXBsZSBjb2RlXFxcIilcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJqc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcInBsYWludGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4uQ29kZUJsb2NrLnByb3RvdHlwZS5tb2R1bGVzWzNdLmxpc3RMYW5ndWFnZXMoKS5maWx0ZXIoZSA9PiBlICE9PSBcImpzXCIpLm1hcChlID0+ICh7bGFuZ3VhZ2U6IGV9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTZXR0aW5nU3ViVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdTdWJUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nU3ViVGl0bGVQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpTZXR0aW5nU3ViVGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLm1hcmdpblRvcDYwID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImg1XCJdKSxcclxuICAgICAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcInNpemUxNFwiXSksXHJcbiAgICAgICAgICAgIHdpbmRvdy5MaWdodGNvcmQuQXBpLldlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclN0YW5kYXJkXCJdKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlLFxyXG4gICAgICAgICAgICB0aXRsZU1vZHVsZSxcclxuICAgICAgICAgICAgc2l6ZU1vZHVsZSxcclxuICAgICAgICAgICAgY29sb3JNb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke2NvbG9yTW9kdWxlLmNvbG9yU3RhbmRhcmR9ICR7c2l6ZU1vZHVsZS5zaXplMTR9ICR7dGl0bGVNb2R1bGUuaDV9ICR7bWFyZ2luTW9kdWxlLm1hcmdpbkJvdHRvbTR9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIFNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NUaXRsZVByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogU2V0dGluZ3NUaXRsZVByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUubWFyZ2luVG9wNjAgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke21hcmdpbk1vZHVsZS5tYXJnaW5Ub3A2MH0gJHttYXJnaW5Nb2R1bGUubWFyZ2luQm90dG9tMjB9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogW1wiXCJdLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCB7IFJlYWN0Tm9kZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxyXG5cclxudHlwZSBUYWJzUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZSxcclxuICAgIHRhYnM6IHtsYWJlbDogc3RyaW5nLCBpZDogc3RyaW5nfVtdLFxyXG4gICAgYWN0aXZlPzogc3RyaW5nXHJcbiAgICBvbkNoYW5nZT86ICh0YWI6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYnNQcm9wcywge1xyXG4gICAgYWN0aXZlOiBzdHJpbmdcclxufT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUYWJzUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgdGFiczogW3tsYWJlbDogXCJObyB0YWJzIHdhcyBwYXNzZWQgdG8gPFRhYnM+LlwiLCBpZDogXCJub25lXCJ9XSxcclxuICAgICAgICBhY3RpdmU6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgc3R5bGU6IHt9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlRhYnNQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZSB8fCBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRhYnNFbGVtZW50czpUYWJbXSA9IFtdXHJcbiAgICBcclxuICAgIGdldCB0YWJzKCk6VGFic1tcInByb3BzXCJdW1widGFic1wiXXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50YWJzIHx8IFtdXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFiKHRhYjpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRhYiA9PT0gdGhpcy5zdGF0ZS5hY3RpdmUpcmV0dXJuXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSl0aGlzLnByb3BzLm9uQ2hhbmdlKHRhYilcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlOiB0YWJcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudGFic0VsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEFjdGl2ZSh0YWIgPT09IGUucHJvcHMuaWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJsYy10YWJXcmFwcGVyXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYm5hdlwiIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy50YWJzLm1hcCh0YWIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwge1RhYkNvbnRhaW5lcjogdGhpcywgdGl0bGU6IHRhYi5sYWJlbCwgaWQ6IHRhYi5pZCwga2V5OiBidG9hKHRhYi5sYWJlbCtcIjpcIit0YWIuaWQpfSlcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYy10YWJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9ICAgXHJcblxyXG4gICAgaXNBY3RpdmUodGFiKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmUgPT09IHRhYlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogKDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzMHB4IDMwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibGMtdGFiLWJveC1zaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5QcmV2aWV3IHRhYnM8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjdGl2ZSB0YWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJVbmFjdGl2ZSB0YWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh0YWJJZCkgPT4ge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XHJcbiAgICBUYWJDb250YWluZXI6IFRhYnMsIFxyXG4gICAgdGl0bGU6IHN0cmluZywgXHJcbiAgICBpZDogc3RyaW5nXHJcbn0sIHtcclxuICAgIGFjdGl2ZTogYm9vbGVhblxyXG59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvcHMuVGFiQ29udGFpbmVyLmlzQWN0aXZlKHByb3BzLmlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5UYWJDb250YWluZXIudGFic0VsZW1lbnRzLnB1c2godGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUoaXNBY3RpdmU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogISFpc0FjdGl2ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBsYy1uYXZJdGVtYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgbGMtbmF2SXRlbUFjdGl2ZWBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgbGMtbmF2SXRlbUluYWN0aXZlYFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuVGFiQ29udGFpbmVyLmNoYW5nZVRhYih0aGlzLnByb3BzLmlkKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGl0bGVQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRpdGxlTW9kdWxlcyB8fCAoVGl0bGVNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiB0eXBlb2YgZS5jb2xvclN0YW5kYXJkID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuc2l6ZTMyID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuaDIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBjb2xvck1vZHVsZSxcclxuICAgICAgICAgICAgc2l6ZU1vZHVsZSxcclxuICAgICAgICAgICAgdGl0bGVNb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke2NvbG9yTW9kdWxlLmNvbG9yU3RhbmRhcmR9ICR7c2l6ZU1vZHVsZS5zaXplMTR9ICR7dGl0bGVNb2R1bGUuaDJ9ICR7dGl0bGVNb2R1bGUuZGVmYXVsdENvbG9yfSAke3RpdGxlTW9kdWxlLmRlZmF1bHRNYXJnaW5oMn1gXHJcbiAgICAgICAgaWYocHJvcHMuY2xhc3NOYW1lKWNsYXNzTmFtZSArPSBcIiBcIitwcm9wcy5jbGFzc05hbWVcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICBjbGFzc05hbWU6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiRXhlbXBsZSB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuLi8uLi9tb2R1bGVzL2V4Y2x1ZGVQcm9wZXJ0aWVzXCJcclxuXHJcbnR5cGUgVG9vbHRpcERhdGEgPSB7XHJcbiAgICBvbkNsaWNrKCk6dm9pZFxyXG4gICAgb25Nb3VzZUVudGVyKCk6dm9pZFxyXG4gICAgb25Nb3VzZUxlYXZlKCk6dm9pZFxyXG4gICAgb25Db250ZXh0TWVudSgpOnZvaWRcclxuICAgIFwiYXJpYS1sYWJlbFwiOiBzdHJpbmdcclxufVxyXG50eXBlIFRvb2x0aXBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOlJlYWN0Tm9kZSxcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIHBvc2l0aW9uPzogVG9vbHRpcFBvc2l0aW9uLFxyXG4gICAgY29sb3I/OiBUb29sdGlwQ29sb3JcclxufVxyXG5cclxubGV0IFRvb2x0aXBNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VG9vbHRpcFByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUb29sdGlwTW9kdWxlcyB8fCAoVG9vbHRpcE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVG9vbHRpcFwiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVG9vbHRpcFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gZXhjbHVkZVByb3BlcnRpZXModGhpcy5wcm9wcywgW1wiY2hpbGRyZW5cIl0pXHJcblxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAuZGVmYXVsdCwgcHJvcHMsIChkYXRhOlRvb2x0aXBEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRvb2x0aXBQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICB0ZXh0OiBcIk5vIHRleHQgd2FzIHBhc3NlZCB0byBUb29sdGlwXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgY29sb3I6IFwiYnJhbmRcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuY3JlYXRlRWxlbWVudCh3aW5kb3cuTGlnaHRjb3JkLkFwaS5Db21wb25lbnRzLmlucHV0cy5CdXR0b24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vazogXCJnaG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LCBcIkhvdmVyIHRoaXMgYnV0dG9uIHRvIHNlZSB0aGUgdG9vbHRpcFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkV4YW1wbGUgVG9vbHRpcCBUZXh0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgIFRvb2x0aXAuQ29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChjb2xvcnMpXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICBUb29sdGlwLlBvc2l0aW9ucy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHBvc2l0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQb3NpdGlvbnM6VG9vbHRpcFBvc2l0aW9uW10gPSBbXCJ0b3BcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJib3R0b21cIl1cclxuICAgIHN0YXRpYyBDb2xvcnM6VG9vbHRpcENvbG9yW10gPSBbXCJibGFja1wiLCBcImdyZXlcIiwgXCJicmFuZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicmVkXCJdXHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5leHBvcnQgdHlwZSBUb29sdGlwUG9zaXRpb24gPSBcInRvcFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImJvdHRvbVwiXHJcbmV4cG9ydCB0eXBlIFRvb2x0aXBDb2xvciA9IFwiYmxhY2tcIiB8IFwiZ3JleVwiIHwgXCJicmFuZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicmVkXCIiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcblxyXG5sZXQgQnV0dG9uTW9kdWxlc1xyXG5cclxudHlwZSBCdXR0b25Qcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWQsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yLFxyXG4gICAgd3JhcHBlcj86IGJvb2xlYW4sXHJcbiAgICBsb29rPzogQnV0dG9uTG9vayxcclxuICAgIHNpemU/OiBCdXR0b25TaXplLFxyXG4gICAgaG92ZXJDb2xvcj86IEJ1dHRvbkhvdmVycyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcyxcclxuICAgIG9uUmlnaHRDbGljaz86ICgpID0+IHZvaWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QnV0dG9uUHJvcHMsIHtob3ZlcjogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkJ1dHRvblByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDb2xvcnM6QnV0dG9uQ29sb3JbXSA9IFtcImJyYW5kXCIsIFwiZ3JleVwiLCBcInJlZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicHJpbWFyeVwiLCBcImxpbmtcIiwgXCJ3aGl0ZVwiLCBcImJsYWNrXCIsIFwidHJhbnNwYXJlbnRcIl1cclxuICAgIHN0YXRpYyBMb29rczpCdXR0b25Mb29rW10gPSBbXCJmaWxsZWRcIiwgXCJpbnZlcnRlZFwiLCBcIm91dGxpbmVkXCIsIFwiZ2hvc3RcIiwgXCJsaW5rXCIsIFwiYmxhbmtcIl1cclxuICAgIHN0YXRpYyBTaXplczpCdXR0b25TaXplW10gPSBbXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCIsIFwieGxhcmdlXCIsIFwibWluXCIsIFwibWF4XCIsIFwiaWNvblwiLCBcIm5vbmVcIl1cclxuICAgIHN0YXRpYyBIb3ZlckNvbG9yczogQnV0dG9uSG92ZXJzW10gPSBbXCJkZWZhdWx0XCIsIC4uLkJ1dHRvbi5Db2xvcnNdXHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXsgLy8gY2FjaGluZyBtb2R1bGVzXHJcbiAgICAgICAgcmV0dXJuIEJ1dHRvbk1vZHVsZXMgfHwgKEJ1dHRvbk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJfaG9yaXpvbnRhbFwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclRyYW5zcGFyZW50XCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImJ1dHRvbldyYXBwZXJcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiQnV0dG9uQ29sb3JzXCJdKSxcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIGZsZXhNb2R1bGUsXHJcbiAgICAgICAgICAgIGV1aE1vZHVsZTEsXHJcbiAgICAgICAgICAgIGJ1dHRvbk1vZHVsZSxcclxuICAgICAgICAgICAgY29sb3JzTW9kdWxlLFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzOkJ1dHRvblByb3BzID0ge31cclxuICAgICAgICBpZih0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgaWYoXCJjb2xvclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJjaGlsZHJlblwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJvbkNsaWNrXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gdGhpcy5wcm9wcy5vbkNsaWNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJ3cmFwcGVyXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy53cmFwcGVyID0gISF0aGlzLnByb3BzLndyYXBwZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImxvb2tcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSB0aGlzLnByb3BzLmxvb2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcInNpemVcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNpemUgPSB0aGlzLnByb3BzLnNpemVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImhvdmVyQ29sb3JcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSB0aGlzLnByb3BzLmhvdmVyQ29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihcImRpc2FibGVkXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJzdHlsZVwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwib25SaWdodENsaWNrXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblJpZ2h0Q2xpY2sgPSB0aGlzLnByb3BzLm9uUmlnaHRDbGlja1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHByb3BzLm9uUmlnaHRDbGljayA9IE5PT1BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Db2xvcnMuaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbG9yID0gQnV0dG9uLkNvbG9yc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMubG9vayl7XHJcbiAgICAgICAgICAgIHByb3BzLmxvb2sgPSBwcm9wcy5sb29rLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uTG9va1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkxvb2tzLmluY2x1ZGVzKHByb3BzLmxvb2spKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmxvb2sgPSBCdXR0b24uTG9va3NbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5sb29rID0gQnV0dG9uLkxvb2tzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5zaXplKXtcclxuICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IHByb3BzLnNpemUudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25TaXplXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uU2l6ZXMuaW5jbHVkZXMocHJvcHMuc2l6ZSkpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2l6ZSA9IEJ1dHRvbi5TaXplc1swXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb3BzLnNpemUgPSBCdXR0b24uU2l6ZXNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmhvdmVyQ29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvci50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkhvdmVyc1xyXG4gICAgICAgICAgICBpZighQnV0dG9uLkhvdmVyQ29sb3JzLmluY2x1ZGVzKHByb3BzLmhvdmVyQ29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhvdmVyQ29sb3IgPSBCdXR0b24uSG92ZXJDb2xvcnNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gQnV0dG9uLkhvdmVyQ29sb3JzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uU2l6ZSA9IHByb3BzLnNpemUgPyBjb2xvcnNNb2R1bGUuQnV0dG9uU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXSB8fCBcIlwiIDogXCJcIlxyXG4gICAgICAgIGlmKGJ1dHRvblNpemUpYnV0dG9uU2l6ZSA9IFwiIFwiICsgYnV0dG9uU2l6ZVxyXG5cclxuICAgICAgICBsZXQgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IgPyBjb2xvcnNNb2R1bGUuQnV0dG9uSG92ZXJzW3Byb3BzLmhvdmVyQ29sb3IudG9VcHBlckNhc2UoKV0gfHwgXCJcIiA6IFwiXCJcclxuICAgICAgICBpZihob3ZlckNvbG9yKWhvdmVyQ29sb3IgPSBcIiBcIiArIGhvdmVyQ29sb3JcclxuXHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMud3JhcHBlciAhPT0gXCJib29sZWFuXCIpcHJvcHMud3JhcHBlciA9IHRydWVcclxuXHJcbiAgICAgICAgbGV0IGhvdmVyID0gdGhpcy5zdGF0ZS5ob3ZlciA/IGV1aE1vZHVsZTEuaGFzSG92ZXIgOiBcIlwiXHJcbiAgICAgICAgaWYoaG92ZXIpaG92ZXIgPSBcIiBcIiArIGhvdmVyXHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtmbGV4TW9kdWxlLmZsZXhDaGlsZH0gJHtldWhNb2R1bGUxLmJ1dHRvbn0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uTG9va3NbcHJvcHMubG9vay50b1VwcGVyQ2FzZSgpXX0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uQ29sb3JzW3Byb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldfSR7YnV0dG9uU2l6ZX0ke2hvdmVyQ29sb3J9JHtob3Zlcn0gJHtldWhNb2R1bGUxLmdyb3d9YH0gXHJcbiAgICAgICAgICAgIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wiLCAuLi5wcm9wcy5zdHlsZX19IG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2soKX0gb25Nb3VzZUVudGVyPXsoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFob3ZlckNvbG9yKXJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IHRydWV9KVxyXG4gICAgICAgICAgICB9fSBvbk1vdXNlTGVhdmU9eyhldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWhvdmVyQ29sb3IpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9fSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IG9uQ29udGV4dE1lbnU9eygpID0+IHByb3BzLm9uUmlnaHRDbGljaygpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V1aE1vZHVsZTEuY29udGVudHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgaWYocHJvcHMud3JhcHBlcil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHJlZj1cIndyYXBwZXJcIiBjbGFzc05hbWU9e2J1dHRvbk1vZHVsZS5idXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGNvbG9yIG9mIEJ1dHRvbi5Db2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGNvbG9ycylcclxuICAgICAgICAgICAgbGV0IGxvb2tzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBsb29rIG9mIEJ1dHRvbi5Mb29rcyl7XHJcbiAgICAgICAgICAgICAgICBsb29rcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsb29rOiBsb29rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2gobG9va3MpXHJcbiAgICAgICAgICAgIGxldCBzaXplcyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgc2l6ZSBvZiBCdXR0b24uU2l6ZXMpe1xyXG4gICAgICAgICAgICAgICAgc2l6ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2l6ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKHNpemVzKVxyXG4gICAgICAgICAgICBsZXQgaG92ZXJzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBob3ZlciBvZiBCdXR0b24uSG92ZXJDb2xvcnMpe1xyXG4gICAgICAgICAgICAgICAgaG92ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyQ29sb3I6IGhvdmVyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goaG92ZXJzKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7Y2hpbGRyZW46IFwiVGVzdCBCdXR0b25cIn1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DbGljazogKCkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe3dyYXBwZXI6IGZhbHNlfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tkaXNhYmxlZDogZmFsc2V9LCB7ZGlzYWJsZWQ6IHRydWV9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbG9yID0gXCJicmFuZFwiIHwgXCJncmV5XCIgfCBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicHJpbWFyeVwiIHwgXCJsaW5rXCIgfCBcIndoaXRlXCIgfCBcImJsYWNrXCIgfCBcInRyYW5zcGFyZW50XCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uTG9vayA9IFwiZmlsbGVkXCIgfCBcImludmVydGVkXCIgfCBcIm91dGxpbmVkXCIgfCBcImdob3N0XCIgfCBcImxpbmtcIiB8IFwiYmxhbmtcIlxyXG5leHBvcnQgdHlwZSBCdXR0b25TaXplID0gXCJub25lXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJ4bGFyZ2VcIiB8IFwibWluXCIgfCBcIm1heFwiIHwgXCJpY29uXCJcclxuZXhwb3J0IHR5cGUgQnV0dG9uSG92ZXJzID0gXCJkZWZhdWx0XCIgfCBCdXR0b25Db2xvciIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4uL2dlbmVyYWwvVG9vbHRpcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcbmltcG9ydCB7IGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3MgfSBmcm9tIFwiLi4vcHJpdmF0ZS9FcnJvckNhdGNoZXJcIlxyXG5cclxuY29uc3QgQ29uc3RhbnRzID0ge1xyXG4gICAgZGVmYXVsdENvbG9yOiAxMDA3MDcwOSxcclxuICAgIGJhc2VDb2xvcnM6IFtcclxuICAgICAgICAxNzUyMjIwLCBcclxuICAgICAgICAzMDY2OTkzLCBcclxuICAgICAgICAzNDQ3MDAzLCBcclxuICAgICAgICAxMDE4MTA0NiwgXHJcbiAgICAgICAgMTUyNzc2NjcsIFxyXG4gICAgICAgIDE1ODQ0MzY3LCBcclxuICAgICAgICAxNTEwNTU3MCwgXHJcbiAgICAgICAgMTUxNTgzMzIsIFxyXG4gICAgICAgIDk4MDcyNzAsIFxyXG4gICAgICAgIDYzMjM1OTUsIFxyXG4gICAgICAgIDExNDY5ODYsIFxyXG4gICAgICAgIDIwNjcyNzYsIFxyXG4gICAgICAgIDIxMjM0MTIsIFxyXG4gICAgICAgIDc0MTk1MzAsIFxyXG4gICAgICAgIDExMzQyOTM1LCBcclxuICAgICAgICAxMjc0NTc0MiwgXHJcbiAgICAgICAgMTEwMjcyMDAsIFxyXG4gICAgICAgIDEwMDM4NTYyLCBcclxuICAgICAgICA5OTM2MDMxLCBcclxuICAgICAgICA1NTMzMzA2XHJcbiAgICBdXHJcbn1cclxuXHJcbnR5cGUgQ29sb3JQaWNrZXJQcm9wcyA9IHtcclxuICAgIGRlZmF1bHRDb2xvcj86IG51bWJlcixcclxuICAgIGN1c3RvbUNvbG9yPzogbnVtYmVyLFxyXG4gICAgYmFzZUNvbG9ycz86IG51bWJlcltdLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBvbkNoYW5nZT86IChjb2xvcjpudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxubGV0IENvbG9yUGlja2VyTW9kdWxlc1xyXG5sZXQgaXNGZXRjaGluZyA9IG51bGxcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVubnQgbmVlZHMgdG8gYmUgbG9hZGVkLiBBcyBhIHJlc3VsdCwgeW91IG1heSBleHBlcmllbmNlIDEwMC0zMDBtcyBsb2FkaW5nIHRoZSBmaXJzdCB0aW1lLlxyXG4gKiBSZW5kZXIgd2lsbCByZXR1cm4gYG51bGxgIGJlZm9yZSBsb2FkZWQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29sb3JQaWNrZXJQcm9wcywge3ZhbHVlPzpzdHJpbmcsbGFzdENvbG9yOmFueX0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNvbG9yUGlja2VyUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBudWxsLFxyXG4gICAgICAgICAgICBsYXN0Q29sb3I6IHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBQcmVsb2FkIHRoZSBjb21wb25lbnQuICovXHJcbiAgICBzdGF0aWMgcHJlbG9hZCgpe1xyXG4gICAgICAgIGlmKENvbG9yUGlja2VyLnByb3RvdHlwZS5tb2R1bGVzWzBdKXJldHVybiAvLyBhbHJlYWR5IGxvYWRlZFxyXG4gICAgICAgIGlmKGlzRmV0Y2hpbmcpcmV0dXJuIC8vIGlzIGZldGNoaW5nIHNvIGRvbid0IGRvdWJsZSBwcmVsb2FkLlxyXG4gICAgICAgIHRyeXsgLy8gSWYgd2UgY2F1Z2h0IGFuIGVycm9yXHJcbiAgICAgICAgICAgIG5ldyBDb2xvclBpY2tlcih7fSkucmVuZGVyKClcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpDb2xvclBpY2tlclByb3BzID0ge1xyXG4gICAgICAgIGRlZmF1bHRDb2xvcjogQ29uc3RhbnRzLmRlZmF1bHRDb2xvcixcclxuICAgICAgICBjdXN0b21Db2xvcjogbnVsbCxcclxuICAgICAgICBiYXNlQ29sb3JzOiBDb25zdGFudHMuYmFzZUNvbG9ycyxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1BcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBDb2xvclBpY2tlck1vZHVsZXMgfHwgKENvbG9yUGlja2VyTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJDb2xvclBpY2tlclwiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29sb3JQaWNrZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBDb2xvclBpY2tlckNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgaWYoIUNvbG9yUGlja2VyQ29tcG9uZW50KXtcclxuICAgICAgICAgICAgaWYoaXNGZXRjaGluZyl7IC8vIHN1cHBvcnQgZm9yIG11bHRpcGxlIGNvbG9yIHBpY2tlclxyXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZy50aGVuKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29sb3JQaWNrZXJNb2R1bGVzID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgcmVzb2x2ZVxyXG4gICAgICAgICAgICBpc0ZldGNoaW5nID0gbmV3IFByb21pc2UocmVzID0+IChyZXNvbHZlID0gcmVzKSlcclxuICAgICAgICAgICAgY29uc3QgR3VpbGRTZXR0aW5nc1JvbGVzID0gbmV3IChXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZS5pbmNsdWRlcyhcIkd1aWxkU2V0dGluZ3NSb2xlc1wiKSkuZGVmYXVsdCkoKS5yZW5kZXIoKS50eXBlXHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gR3VpbGRTZXR0aW5nc1JvbGVzLnByb3RvdHlwZS5yZW5kZXJSb2xlU2V0dGluZ3MuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWxkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZXI6ICgpID0+IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFJvbGUoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXJIZWFkZXI6IEd1aWxkU2V0dGluZ3NSb2xlcy5wcm90b3R5cGUucmVuZGVySGVhZGVyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IEd1aWxkUm9sZVNldHRpbmdzID0gc2V0dGluZ3MucHJvcHMuY2hpbGRyZW5bMV0udHlwZVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBHdWlsZFJvbGVTZXR0aW5ncy5wcm90b3R5cGUucmVuZGVyQ29sb3JQaWNrZXIuY2FsbCh7XHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZXJ5b25lOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICBjaGlsZHJlbi50eXBlKGNoaWxkcmVuLnByb3BzKS5wcm9wcy5jaGlsZHJlbi50eXBlLl9jdG9yKCkudGhlbihjID0+IHtcclxuICAgICAgICAgICAgICAgIENvbG9yUGlja2VyTW9kdWxlcyA9IG51bGxcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPENvbG9yUGlja2VyQ29tcG9uZW50LmRlZmF1bHQgY29sb3JzPXt0aGlzLnByb3BzLmJhc2VDb2xvcnN9IGRlZmF1bHRDb2xvcj17dGhpcy5wcm9wcy5kZWZhdWx0Q29sb3J9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBjdXN0b21Db2xvcj17dGhpcy5wcm9wcy5jdXN0b21Db2xvcn0+XHJcbiAgICAgICAgPC9Db2xvclBpY2tlckNvbXBvbmVudC5kZWZhdWx0PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubGFzdENvbG9yICE9PSB0aGlzLnByb3BzLnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbGFzdENvbG9yOiB0aGlzLnByb3BzLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sb3JQaWNrZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBVdGlscy5IZXhDb2xvclRvRGVjaW1hbChcIiM3Mjg5REFcIilcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChjb2xvcikgPT4ge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoZWxwID0ge1xyXG4gICAgICAgIGluZm86IFwiVG8gY29udmVydCBoZXggY29sb3JzIHRvIGRlY2ltYWwsIHlvdSBjYW4gZG8gYExpZ2h0Y29yZC5BcGkuVXRpbHMuSGV4Q29sb3JUb0RlY2ltYWwoJyM3Mjg5REEnKWAgYW5kIGdvIGJhY2sgd2l0aCBgTGlnaHRjb3JkLkFwaS5VdGlscy5EZWNpbWFsQ29sb3JUb0hleCg3NTA2Mzk0KWBcIixcclxuICAgICAgICB3YXJuOiBcIlRoZSBjb21wb25lbnQgbWF5IG5vdCBhcHBlYXIgaW5zdGFudGx5LiBUaGUgY29tcG9uZW50IG5lZWRzIHRvIGJlIGxvYWRlZCwgc28geW91IGNvdWxkIGV4cGVyaWVuY2UgNTAtMzAwbXMgbG9hZGluZyB0aW1lIGRlcGVuZGluZyBvbiB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24uXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIERyb3Bkb3duUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBsYWJlbDogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICB2YWx1ZVJlbmRlcmVyPzogKGRhdGEpID0+IFJlYWN0Tm9kZSxcclxuICAgIG9wdGlvblJlbmRlcmVyPzogKGRhdGEpID0+IFJlYWN0Tm9kZSxcclxuICAgIG11bHRpVmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGVcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHNlYXJjaGFibGU/OiBib29sZWFuLFxyXG4gICAgY2xlYXJhYmxlPzogYm9vbGVhbixcclxuICAgIHN0eWxlT3ZlcnJpZGVzPzogQ1NTUHJvcGVydGllcyxcclxuICAgIGxpZ2h0VGhlbWVDb2xvck92ZXJyaWRlcz86IHRoZW1lT3ZlcnJpZGUsXHJcbiAgICBkYXJrVGhlbWVDb2xvck92ZXJyaWRlcz86IHRoZW1lT3ZlcnJpZGUsXHJcbiAgICBpc011bHRpPzogYm9vbGVhblxyXG59XHJcblxyXG50eXBlIHRoZW1lT3ZlcnJpZGUgPSB7XHJcbiAgICBuZXV0cmFsMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDU6IHN0cmluZyxcclxuICAgIG5ldXRyYWwxMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDIwOiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMzA6IHN0cmluZyxcclxuICAgIHByaW1hcnk6IHN0cmluZyxcclxuICAgIHByaW1hcnkyNTogc3RyaW5nLFxyXG4gICAgcHJpbWFyeTUwOiBzdHJpbmcsXHJcbiAgICBzZWxlY3RlZE9wdGlvbkJhY2tncm91bmQ6IHN0cmluZyxcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIG1lbnVCYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICBtZW51Qm9yZGVyOiBzdHJpbmcsXHJcbiAgICBzY3JvbGxCYXJUaHVtYjogc3RyaW5nLFxyXG4gICAgbXVsdGlPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmdcclxufVxyXG5cclxubGV0IERyb3Bkb3duTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEcm9wZG93blByb3BzLCB7dmFsdWU6IHN0cmluZ3xudWxsfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6RHJvcGRvd25Qcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6RHJvcGRvd25Qcm9wcyA9IHtcclxuICAgICAgICBjbGFzc05hbWU6IG51bGwsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTm8gb3B0aW9ucyAtIE5vIG9wdGlvbnMgd2FzIHBhc3NlZCB0byBEcm9wZG93bi4gSWYgeW91IG1lYW50IHRvIHB1dCBhbiBlbXB0eSBkcm9wZG93biwgaW5wdXQgYW4gZW1wdHkgYXJyYXkuXCJcclxuICAgICAgICB9XSxcclxuICAgICAgICB2YWx1ZVJlbmRlcmVyOiBudWxsLFxyXG4gICAgICAgIG11bHRpVmFsdWVSZW5kZXJlcjogbnVsbCxcclxuICAgICAgICBvcHRpb25SZW5kZXJlcjogbnVsbCxcclxuICAgICAgICBvbkNoYW5nZTogTk9PUCxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2VhcmNoYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBzdHlsZU92ZXJyaWRlczogbnVsbCxcclxuICAgICAgICBsaWdodFRoZW1lQ29sb3JPdmVycmlkZXM6IG51bGwsXHJcbiAgICAgICAgZGFya1RoZW1lQ29sb3JPdmVycmlkZXM6IG51bGwsXHJcbiAgICAgICAgaXNNdWx0aTogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBEcm9wZG93bk1vZHVsZXMgfHwgKERyb3Bkb3duTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJTZWxlY3RUZW1wV3JhcHBlclwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBEcm9wZG93bkNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IDxEcm9wZG93bkNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkFuIGVycm9yIG9jY3VyZWRcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjFcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRydWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGlzTXVsdGk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGlzTXVsdGk6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG5cclxudHlwZSBSYWRpb0dyb3VwUHJvcHMgPSB7XHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIGNvbG9yPzogc3RyaW5nLFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICAgIGRlc2M/OiBzdHJpbmdcclxuICAgIH1bXSxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHNpemU/OiBcInNtYWxsXCJ8XCJtZWRpdW1cIixcclxuICAgIGl0ZW1UeXBlPzogXCJiYXJcInxcInBhbmVsXCIsXHJcbiAgICBpbmZvQ2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBSYWRpb0dyb3VwTW9kdWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UmFkaW9Hcm91cFByb3BzLCB7dmFsdWU/OiBzdHJpbmd9PiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlJhZGlvR3JvdXBQcm9wcyA9IHtcclxuICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTm8gb3B0aW9uc1wiLFxyXG4gICAgICAgICAgICBkZXNjOiBcIk5vIG9wdGlvbnMgd2FzIHBhc3NlZCB0byBDaG9pY2VzLiBJZiB5b3UgbWVhbnQgdG8gZGlzcGxheSBubyBvcHRpb25zIGF0IGFsbCwgcGxlYXNlIHBhc3MgYW4gZW1wdHkgYXJyYXkuXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmMDQ3NDdcIlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBzaXplOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgIGl0ZW1UeXBlOiBcImJhclwiLFxyXG4gICAgICAgIGluZm9DbGFzc05hbWU6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1BcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlJhZGlvR3JvdXBQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShldil7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldi52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IGV2LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBSYWRpb0dyb3VwTW9kdWxlIHx8IChSYWRpb0dyb3VwTW9kdWxlID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlJhZGlvR3JvdXBcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgUmFkaW9Hcm91cENvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8UmFkaW9Hcm91cENvbXBvbmVudCBvcHRpb25zPXtwcm9wcy5vcHRpb25zfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gXHJcbiAgICAgICAgICAgIHNpemU9e1JhZGlvR3JvdXBDb21wb25lbnQuU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXX0gaXRlbVR5cGU9e1JhZGlvR3JvdXBDb21wb25lbnQuSXRlbVR5cGVzW3Byb3BzLml0ZW1UeXBlLnRvVXBwZXJDYXNlKCldfSBcclxuICAgICAgICAgICAgaW5mb0NsYXNzTmFtZT17cHJvcHMuaW5mb0NsYXNzTmFtZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpOnN0cmluZ3xudWxse1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjFcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHNpemU6IFwibWVkaXVtXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgaXRlbVR5cGU6IFwiYmFyXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaXRlbVR5cGU6IFwicGFuZWxcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFN3aXRjaFByb3BzID0ge1xyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBib29sZWFuLFxyXG4gICAgZmlsbD86IHN0cmluZyxcclxuICAgIHRoZW1lPzogXCJkZWZhdWx0XCJ8XCJjbGVhclwiLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgc2l6ZT86IFwiZGVmYXVsdFwifFwibWluaVwiLFxyXG4gICAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmxldCBTd2l0Y2hNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTd2l0Y2hQcm9wcywge3ZhbHVlOiBib29sZWFufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6U3dpdGNoUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFN3aXRjaE1vZHVsZXMgfHwgKFN3aXRjaE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU3dpdGNoXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFN3aXRjaENvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoPFN3aXRjaENvbXBvbmVudCBpZD17cHJvcHMuaWR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZSB8fCBmYWxzZX0gZmlsbD17cHJvcHMuZmlsbH0gXHJcbiAgICAgICAgICAgIHRoZW1lPXtTd2l0Y2hDb21wb25lbnQuVGhlbWVzW3Byb3BzLnRoZW1lLnRvVXBwZXJDYXNlKCldfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgc2l6ZT17U3dpdGNoQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IHN0eWxlPXtwcm9wcy5zdHlsZX0vPilcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSghdGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6ICF0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpbGw6IG51bGwsXHJcbiAgICAgICAgdGhlbWU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBjbGFzc05hbWU6IG51bGwsXHJcbiAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgc3R5bGU6IHt9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tvbkNoYW5nZTogKHZhbHVlKSA9PiB7fX1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB0aGVtZTogXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiY2xlYXJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGlkOiBcImFwaS1wcmV2aWV3LXN3aXRjaFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZmlsbDogbnVsbFxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHNpemU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwibWluaVwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgZXJyb3I6IFwiVGhlIGBjbGVhcmAgb3B0aW9uIGRvZXNuJ3Qgd29yayB3ZWxsIG9uIGxpZ2h0IHRoZW1lLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBUZXh0QXJlYVByb3BzID0ge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgYXV0b0ZvY3VzPzogYm9vbGVhbixcclxuICAgIHJlc2l6ZWFibGU/OiBib29sZWFuLFxyXG4gICAgZmxleD86IGJvb2xlYW4sXHJcbiAgICBhdXRvc2l6ZT86IGZhbHNlLFxyXG4gICAgcm93cz86IG51bWJlcixcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uQmx1cj86IChldiwgbmFtZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgb25LZXlEb3duPzogKGV2KSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBUZXh0QXJlYU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGV4dEFyZWFQcm9wcywge3ZhbHVlOiBzdHJpbmd9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpUZXh0QXJlYVByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRleHRBcmVhTW9kdWxlcyB8fCAoVGV4dEFyZWFNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlRleHRBcmVhXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlLCBuYW1lKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCBuYW1lKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGV2LCBuYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZXYsIG5hbWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uS2V5RG93bihldil7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXYpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVGV4dEFyZWFDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgcmV0dXJuIDxUZXh0QXJlYUNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfS8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgfHwgXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6VGV4dEFyZWFQcm9wcyA9IHtcclxuICAgICAgICBuYW1lOiBudWxsLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogbnVsbCxcclxuICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgIGZsZXg6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9zaXplOiBmYWxzZSxcclxuICAgICAgICByb3dzOiAzLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG1heExlbmd0aDogbnVsbCxcclxuICAgICAgICBjbGFzc05hbWU6IG51bGwsXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgb25Gb2N1czogTk9PUCxcclxuICAgICAgICBvbkJsdXI6IE5PT1AsXHJcbiAgICAgICAgb25LZXlEb3duOiBOT09QXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJhcGktcHJldmlldy10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBudWxsXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcmVzaXplYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZmxleDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmxleDogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgYXV0b3NpemU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGF1dG9zaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAzXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvd3M6IDJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcm93czogMVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkV4YW1wbGUgZXJyb3JcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAxMDBcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGlkOiBcImFwaS1wcmV2aWV3LXRleHRhcmVhXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGVscCA9IHtcclxuICAgICAgICB3YXJuOiBcIlRoaXMgc2hvdWxkIGJlIHVzZWQgZm9yIG11bHRpIGxpbmUgaW5wdXRzLlwiXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBUZXh0SW5wdXRQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCJcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGlucHV0Q2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uQmx1cj86IChldiwgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBUZXh0SW5wdXRNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGV4dElucHV0UHJvcHMsIHt2YWx1ZTogc3RyaW5nfT4ge1xyXG4gICAgaGFzU2V0OiBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGV4dElucHV0UHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUZXh0SW5wdXRQcm9wcyA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IDk5OSxcclxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgaW5wdXRDbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgb25Gb2N1czogTk9PUCxcclxuICAgICAgICBvbkJsdXI6IE5PT1BcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0SW5wdXRNb2R1bGVzIHx8IChUZXh0SW5wdXRNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlRleHRJbnB1dFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5oYXNTZXQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIG5hbWUsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5oYXNTZXQpcmV0dXJuIC8vIHByZXZlbnQgZXZlbnQgaWYgdGhlIG9uQ2hhbmdlIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZS5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2LCBuYW1lLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxUZXh0QXJlYUNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSAvPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlIHx8IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImFwaS1wcmV2aWV3LXRleHRpbnB1dFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiRXhhbXBsZSBlcnJvclwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA5OTlcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGlkOiBcImFwaS1wcmV2aWV3LXRleHRpbnB1dFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHt9XHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhlbHAgPSB7XHJcbiAgICAgICAgd2FybjogXCJUaGlzIHNob3VsZCBiZSB1c2VkIGZvciBzaW5nbGUgbGluZSBpbnB1dHMuXCJcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiO1xyXG5pbXBvcnQgRGlzY29yZFRvb2xzIGZyb20gXCIuLi8uLi9tb2R1bGVzL0Rpc2NvcmRUb29sc1wiO1xyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCI7XHJcbmltcG9ydCB1dWlkIGZyb20gXCIuLi8uLi9tb2R1bGVzL3V1aWRcIjtcclxuXHJcblxyXG50eXBlIEVycm9yQ2F0Y2hlclByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcbmxldCBFcnJvckNhdGNoZXJNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQ2F0Y2hlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFcnJvckNhdGNoZXJQcm9wcywge2Vycm9yOiBib29sZWFuLCBoYXNTZW50Tm90aWZpY2F0aW9uOiBib29sZWFufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6RXJyb3JDYXRjaGVyUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzU2VudE5vdGlmaWNhdGlvbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKTphbnlbXXtcclxuICAgICAgICByZXR1cm4gRXJyb3JDYXRjaGVyTW9kdWxlcyB8fCAoRXJyb3JDYXRjaGVyTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5lbXB0eVN0YXRlSW1hZ2UgJiYgZS5lbXB0eVN0YXRlKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdFByb3BzOkVycm9yQ2F0Y2hlclByb3BzID0ge1xyXG4gICAgICAgIGNoaWxkcmVuOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIH1lbHNleyAvLyB0cnkgdG8gcmVuZGVyIGEgdXNlci1mcmllbmRseSBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgIGNvbnN0IFtcclxuICAgICAgICAgICAgICAgIGVtcHR5Q2xhc3Nlc1xyXG4gICAgICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcbiAgICAgICAgICAgIGlmKCFlbXB0eUNsYXNzZXMpeyAvLyBJZiB3ZSBjYW4ndCwgcmVuZGVyIG5vdGhpbmcgYW5kIHNob3cgYSBub3RpZmljYXRpb24uXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmhhc1NlbnROb3RpZmljYXRpb24pcmV0dXJuIG51bGwgLy8gSWYgdGhlIG5vdGlmaWNhdGlvbiB3YXMgYWxyZWFkeSBzZW50LCBkb24ndCBzZW5kIG9uZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IERpc2NvcmRUb29scy5zaG93Tm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcIkFuIGVycm9yIG9jY3VyZWQuIFBsZWFzZSBjaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbnMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJodHRwczovL2dpdGh1Yi5jb20vbGlnaHRjb3JkLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IE5PT1AsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZTogTk9PUCxcclxuICAgICAgICAgICAgICAgICAgICBvblNob3c6IE5PT1AsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGlnaHRjb3JkIEluZm9ybWF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzU2VudE5vdGlmaWNhdGlvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2VtcHR5Q2xhc3Nlcy5lbXB0eVN0YXRlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlbXB0eUNsYXNzZXMuZW1wdHlTdGF0ZUltYWdlfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCJcclxuICAgICAgICAgICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VtcHR5Q2xhc3Nlcy5lbXB0eVN0YXRlSGVhZGVyfT5BbiBlcnJvciBvY2N1cmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2VtcHR5Q2xhc3Nlcy5lbXB0eVN0YXRlU3VidGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGNoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9ucy4gSm9pbiBvdXIgwq1zdXBwb3J0IHNlcnZlciBmb3IgbW9yZSBoZWxwLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvckluZm8uY29tcG9uZW50U3RhY2spXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3h5RXJyb3JDYXRjaGVyQ2xhc3M8YmFzZSA9IEZ1bmN0aW9uPihDbGFzczpiYXNlKTpiYXNlICYge1xyXG4gICAgcmVhZG9ubHkgb3JpZ2luYWw6IGJhc2VcclxufXtcclxuICAgIGNvbnN0IENsYXNzQ29weSA9IChjbGFzcyBQcm94aWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvckNhdGNoZXIga2V5PXt1dWlkKCl9PlxyXG4gICAgICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xhc3MgYXMgYW55LCB7cmVmOiBcIm9yaWdpbmFsXCIsIC4uLnRoaXMucHJvcHMsIGtleTogdXVpZCgpfSl9XHJcbiAgICAgICAgICAgIDwvRXJyb3JDYXRjaGVyPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lID0gQ2xhc3NbXCJkaXNwbGF5TmFtZVwiXSB8fCBDbGFzc1tcIm5hbWVcIl1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBvcmlnaW5hbCgpe1xyXG4gICAgICAgICAgICByZXR1cm4gQ2xhc3NcclxuICAgICAgICB9XHJcbiAgICB9KSBhcyBhbnlcclxuICAgIE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKENsYXNzKSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYodmFsdWVbMF0gaW4gQ2xhc3NDb3B5KXJldHVyblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDbGFzc0NvcHksIHZhbHVlWzBdLCB2YWx1ZVsxXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gQ2xhc3NDb3B5XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgbm90aWNlLCBub3RpY2VzLCBldmVudHMgfSBmcm9tIFwiLi9Ob3RpY2VzXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcblxyXG5sZXQgTm90aWNlTW9kdWxlc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdE5vdGljZTpub3RpY2UgPSB7XHJcbiAgICB0ZXh0OiBcIlwiLFxyXG4gICAgaWQ6IFwidW5rbm93biBpZFwiLFxyXG4gICAgb25DbGljazogTk9PUCxcclxuICAgIGJ1dHRvblRleHQ6IG51bGwsXHJcbiAgICB0eXBlOiBcImRlZmF1bHRcIlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxub3RpY2U+IHtcclxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiTGlnaHRjb3JkTm90aWNlXCJcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHM6bm90aWNlID0gZGVmYXVsdE5vdGljZVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIE5vdGljZU1vZHVsZXMgfHwgKE5vdGljZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUubm90aWNlSW5mbylcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBbXHJcbiAgICAgICAgICAgIG5vdGljZUNsYXNzZXNcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vdGljZUNsYXNzZXNbXCJub3RpY2VcIit0aGlzLnByb3BzLnR5cGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSt0aGlzLnByb3BzLnR5cGUuc2xpY2UoMSldXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjbGFzc05hbWUpe1xyXG4gICAgICAgICAgICBub3RpY2VzLnBvcCgpXHJcbiAgICAgICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLnByb3BzLmJ1dHRvblRleHQgPyA8YnV0dG9uIGNsYXNzTmFtZT17bm90aWNlQ2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgbm90aWNlcy5wb3AoKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKVxyXG4gICAgICAgICAgICBldmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgIH19Pnt0aGlzLnByb3BzLmJ1dHRvblRleHR9PC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e25vdGljZUNsYXNzZXMuZGlzbWlzc30gcm9sZT1cImJ1dHRvblwiIHRhYkluZGV4PXswfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RpY2VzLnBvcCgpXHJcbiAgICAgICAgICAgICAgICBldmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxyXG4gICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IE5vdGljZSBmcm9tIFwiLi9Ob3RpY2VcIlxyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtjb250YWluZXI6IGFueX0+IHtcclxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IFwiTGlnaHRjb3JkTm90aWNlc1wiXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge31cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBSZWFkb25seTx7IGNvbnRhaW5lcjogYW55IH0+KXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5ub3RpY2VIYW5kbGVyID0gdGhpcy5ub3RpY2VIYW5kbGVyLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBub3RpY2VIYW5kbGVyKCl7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAgZXZlbnRzLm9uKFwibm90aWNlVXBkYXRlXCIsIHRoaXMubm90aWNlSGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIGV2ZW50cy5vZmYoXCJub3RpY2VVcGRhdGVcIiwgdGhpcy5ub3RpY2VIYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhhc05vdGljZSlyZXR1cm4gbnVsbFxyXG4gICAgICAgIGNvbnN0IG5vdGljZSA9IG5vdGljZXNbMF1cclxuICAgICAgICByZXR1cm4gPE5vdGljZSB7Li4ubm90aWNlfT48L05vdGljZT5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzTm90aWNlKCl7XHJcbiAgICAgICAgcmV0dXJuIG5vdGljZXMubGVuZ3RoID4gMFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWNlczpub3RpY2VbXSA9IFtdXHJcblxyXG5leHBvcnQgdHlwZSBub3RpY2VXaXRob3V0SUQgPSB7XHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBidXR0b25UZXh0Pzogc3RyaW5nLFxyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWQsXHJcbiAgICB0eXBlOiBcImRlZmF1bHRcInxcImluZm9cInxcInN1Y2Nlc3NcInxcImRhbmdlclwifFwic3RyZWFtZXJNb2RlXCJ8XCJkb3dubG9hZFwifFwibm90aWZpY2F0aW9uXCJ8XCJwcmVtaXVtXCJ8XCJyaWNoUHJlc2VuY2VcInxcInByZW1pdW1UaWVyMVwifFwicHJlbWl1bVRpZXIyXCJ8XCJmYWNlYm9va1wifFwiYnJhbmRcInxcInN1cnZleVwifFwic3BvdGlmeVwiXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIG5vdGljZSA9IHtcclxuICAgIGlkOiBzdHJpbmdcclxufSAmIG5vdGljZVdpdGhvdXRJRCIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9tb2R1bGVzL1V0aWxzXCJcclxuaW1wb3J0IERpc2NvcmRUb29scyBmcm9tIFwiLi9tb2R1bGVzL0Rpc2NvcmRUb29sc1wiXHJcbmltcG9ydCAqIGFzIHBhdGNoZXJzIGZyb20gXCIuL21vZHVsZXMvcGF0Y2hlcnNcIlxyXG5pbXBvcnQgZXhjbHVkZVByb3BlcnRpZXMgZnJvbSBcIi4vbW9kdWxlcy9leGNsdWRlUHJvcGVydGllc1wiXHJcbmltcG9ydCBjbG9uZU51bGxQcm90byBmcm9tIFwiLi9tb2R1bGVzL2Nsb25lTnVsbFByb3RvXCJcclxuaW1wb3J0IE5PT1AgZnJvbSBcIi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IHVuZnJlZXplIGZyb20gXCIuL21vZHVsZXMvVW5mcmVlemVcIlxyXG5pbXBvcnQgeyBpc05hdGl2ZSwgaXNJbXBvcnRlZCB9IGZyb20gXCIuL21vZHVsZXMvZW52aXJvbm5lbWVudFwiXHJcbmltcG9ydCAqIGFzIGJhbmRhZ2VkYmRBcGkgZnJvbSBcIkBiYW5kYWdlZGJkL2JkYXBpXCJcclxucGF0Y2hlcnMucGF0Y2goKVxyXG5cclxuY29uc3QgTGlnaHRjb3JkQXBpID0ge1xyXG4gICAgV2VicGFja0xvYWRlcjogV2VicGFja0xvYWRlcixcclxuICAgIENvbXBvbmVudHM6IENvbXBvbmVudHMsXHJcbiAgICB1dWlkOiB1dWlkLFxyXG4gICAgVXRpbHM6IFV0aWxzLFxyXG4gICAgRGlzY29yZFRvb2xzOiBEaXNjb3JkVG9vbHMsXHJcbiAgICBfOiB7XHJcbiAgICAgICAgZXhjbHVkZVByb3BlcnRpZXM6IGV4Y2x1ZGVQcm9wZXJ0aWVzLFxyXG4gICAgICAgIGNsb25lTnVsbFByb3RvOiBjbG9uZU51bGxQcm90byxcclxuICAgICAgICBOT09QOiBOT09QLFxyXG4gICAgICAgIHVuZnJlZXplOiB1bmZyZWV6ZVxyXG4gICAgfSxcclxuICAgIGdldCBpc05hdGl2ZSgpe3JldHVybiBpc05hdGl2ZX0sXHJcbiAgICBnZXQgaXNJbXBvcnRlZCgpe3JldHVybiBpc0ltcG9ydGVkfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgUmVhY3Q6dHlwZW9mIGltcG9ydChcInJlYWN0XCIpXHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMaWdodGNvcmQgaXMgb25seSBhdmFpbGxhaWJsZSBpbiBMaWdodGNvcmQgKG5hdGl2ZSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBMaWdodGNvcmQ6IExpZ2h0Y29yZEdsb2JhbCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCRE1vZHVsZXMgaXMgb25seSBhdmFpbGxhaWJsZSBpbiBMaWdodGNvcmQgKG5hdGl2ZSlcclxuICAgICAgICAgKi9cclxuICAgICAgICBCRE1vZHVsZXM6IHtcclxuICAgICAgICAgICAgbW9kdWxlczphbnlbXSxcclxuICAgICAgICAgICAgZ2V0KGZpbHRlcjoobW9kOmFueSk9PmJvb2xlYW4sIG1vZHVsZXM/OmFueVtdKTphbnlbXSxcclxuICAgICAgICAgICAgZ2V0KGlkOm51bWJlciwgbW9kdWxlcz86YW55W10pOmFueSxcclxuICAgICAgICAgICAgZ2V0KGlkczogW251bWJlcnwoKG1vZDphbnkpPT5ib29sZWFuKV0sIG1vZHVsZXM/OmFueVtdKTphbnlcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJkQXBpOiB0eXBlb2YgYmFuZGFnZWRiZEFwaS5CZEFwaSxcclxuICAgICAgICBFREFwaTogdHlwZW9mIGJhbmRhZ2VkYmRBcGkuQmRBcGlcclxuICAgIH1cclxuICAgIHZhciBMaWdodGNvcmQ6TGlnaHRjb3JkR2xvYmFsXHJcbiAgICB2YXIgQmRBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpXHJcbiAgICB2YXIgRURBcGk6IHR5cGVvZiBiYW5kYWdlZGJkQXBpLkJkQXBpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0Y29yZEFwaVxyXG5cclxuT2JqZWN0LmFzc2lnbih3aW5kb3cuTGlnaHRjb3JkLkFwaSwgTGlnaHRjb3JkQXBpKVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIExpZ2h0Y29yZCBleHBvcnRzLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZGBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRjb3JkR2xvYmFsIHtcclxuICAgIERpc2NvcmRNb2R1bGVzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW50ZXJuYWwgRGlzY29yZCdzIGRpc3BhdGNoZXIgLSBjYW4gYmUgdXNlZCB0byBzdWJzY3JpYmUgdG8gZ2F0ZXdheSBldmVudHMgLyBjbGllbnQgZXZlbnRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BhdGNoZXI6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZERpc3BhdGNoZXJUeXBlc1wiKS5kZWZhdWx0LFxyXG4gICAgICAgIGNvbnN0YW50czogaW1wb3J0KFwiLi90eXBlcy9EaXNjb3JkQ29uc3RhbnRzVHlwZXNcIikuZGVmYXVsdFxyXG4gICAgfSxcclxuICAgIFNldHRpbmdzOiB7XHJcbiAgICAgICAgZGV2TW9kZTogYm9vbGVhbixcclxuICAgICAgICBjYWxsUmluZ2luZ0JlYXQ6IGJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBBcGk6IExpZ2h0Y29yZEFwaUdsb2JhbCxcclxuICAgIEJldHRlckRpc2NvcmQ6IHtcclxuICAgICAgICBCZEFwaTogdHlwZW9mIGJhbmRhZ2VkYmRBcGkuQmRBcGksXHJcbiAgICAgICAgW21vZDpzdHJpbmddOmFueVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gQXBpLiBDYW4gYmUgYWNjZXNzZWQgd2l0aCBgd2luZG93LkxpZ2h0Y29yZC5BcGlgXHJcbiAqL1xyXG50eXBlIExpZ2h0Y29yZEFwaUdsb2JhbCA9IGxpZ2h0Y29yZEFwaU1haW5FeHBvcnRzICYgdHlwZW9mIExpZ2h0Y29yZEFwaVxyXG5cclxudHlwZSBsaWdodGNvcmRBcGlNYWluRXhwb3J0cyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgdGhlIGZpcnN0IG1vZHVsZSB0aGF0IG1hdGNoIHRoZSBmaWx0ZXIgZ2V0cyBleHBvcnRlZFxyXG4gICAgICogQHBhcmFtIGZpbHRlciBUaGUgZmlsdGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBtb2R1bGUgdG8gbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIGVuc3VyZUV4cG9ydGVkKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOlByb21pc2U8YW55PixcclxuICAgIC8qKlxyXG4gICAgICogUmVjcmVhdGUgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBgX19wcm90b19fYCBhbmQgYHByb3RvdHlwZWAgcHJvcGVydGllcyAtIHVzZWZ1bGwgZm9yIGJldHRlciBmb3JtYXR0aW5nIGluIGNvbnNvbGUuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gcmVjcmVhdGVcclxuICAgICAqL1xyXG4gICAgY2xvbmVOdWxsUHJvdG88T2JqID0gYW55PihvYmo6T2JqKTpPYmpcclxufSIsImxldCByZXFcclxuc2V0UmVxKClcclxuZnVuY3Rpb24gZmlsdGVyRGFuZ2Vyb3VzKG1vZHMpe1xyXG4gICAgcmV0dXJuIG1vZHMubWFwKGUgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm90ZWN0KGUpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHByb3RlY3QoZXhwb3J0cyl7XHJcbiAgICBsZXQgdGhlTW9kdWxlID0gZXhwb3J0cy5leHBvcnRzXHJcbiAgICBsZXQgbW9kID0gdGhlTW9kdWxlLmRlZmF1bHRcclxuICAgIGlmKCFtb2QpcmV0dXJuIGV4cG9ydHNcclxuICAgIGlmIChtb2QucmVtb3ZlICYmIG1vZC5zZXQgJiYgbW9kLmNsZWFyICYmIG1vZC5nZXQgJiYgIW1vZC5zb3J0KSByZXR1cm4gbnVsbDtcclxuICAgIGlmICghbW9kLmdldFRva2VuICYmICFtb2QuZ2V0RW1haWwgJiYgIW1vZC5zaG93VG9rZW4pcmV0dXJuIGV4cG9ydHNcclxuXHJcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShtb2QsIHtcclxuICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJnZXRUb2tlblwiIHx8IHByb3AgPT09IFwiZ2V0RW1haWxcIiB8fCBwcm9wID09PSBcInNob3dUb2tlblwiKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbihvYmosIGZ1bmMpIHtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJnZXRUb2tlblwiICYmIG9iai5nZXRUb2tlbikgcmV0dXJuICgpID0+IFwibWZhLlhDbmJLem8wQ0xJcWRKekJuTDBEOFBmRHJ1cWtKTkhqd0hYdHIzOVVVM0Y4aEh4NDNqb2pJU3lpNWpkak81MmU5X2U5TWptYWZaRkZwYy1zZU9NYVwiO1xyXG4gICAgICAgICAgICBpZiAoZnVuYyA9PSBcImdldEVtYWlsXCIgJiYgb2JqLmdldEVtYWlsKSByZXR1cm4gKCkgPT4gXCJwdXBwZXQxMTExMkBnbWFpbC5jb21cIjtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJzaG93VG9rZW5cIiAmJiBvYmouc2hvd1Rva2VuKSByZXR1cm4gKCkgPT4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGZ1bmMgPT0gXCJfX3Byb3RvX19cIiAmJiBvYmouX19wcm90b19fKSByZXR1cm4gcHJveHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gb2JqW2Z1bmNdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBleHBvcnRzLCB7ZXhwb3J0czogT2JqZWN0LmFzc2lnbih7fSwgdGhlTW9kdWxlLCB7ZGVmYXVsdDogcHJveHl9KX0pXHJcbn1cclxuXHJcbmNsYXNzIFdlYnBhY2tsb2FkZXIge1xyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICBpZihyZXEpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyRGFuZ2Vyb3VzKE9iamVjdC52YWx1ZXMocmVxLmMpLmZpbHRlcigoZTphbnkpID0+IGUgJiYgZS5leHBvcnRzKSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0UmVxKClcclxuICAgICAgICAgICAgaWYocmVxKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJEYW5nZXJvdXMoT2JqZWN0LnZhbHVlcyhyZXEuYykuZmlsdGVyKChlOmFueSkgPT4gZSAmJiBlLmV4cG9ydHMpKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KGlkcywgbW9kdWxlcyl7XHJcbiAgICAgICAgaWYodHlwZW9mIGlkcyA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIChtb2R1bGVzIHx8IHRoaXMubW9kdWxlcykubWFwKChtZGwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKG1kbCAmJiB0eXBlb2YgbWRsLmV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZGwuZXhwb3J0c1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuZmlsdGVyKGUgPT4gZSkuZmlsdGVyKGlkcylcclxuICAgICAgICB9ZWxzZSBpZihBcnJheS5pc0FycmF5KGlkcykpe1xyXG4gICAgICAgICAgICBtb2R1bGVzID0gbW9kdWxlcyB8fCB0aGlzLm1vZHVsZXNcclxuICAgICAgICAgICAgcmV0dXJuIGlkcy5tYXAoaWQgPT4gdGhpcy5nZXQoaWQsIG1vZHVsZXMpKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtb2R1bGVzID0gbW9kdWxlcyB8fCB0aGlzLm1vZHVsZXNcclxuICAgICAgICAgICAgbGV0IG1vZHVsZSA9IG1vZHVsZXMuZmlsdGVyKGUgPT4gISFlKS5maW5kKGUgPT4gZS5pID09PSBpZHMpXHJcbiAgICAgICAgICAgIGlmKCFtb2R1bGUpcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZGVmYXVsdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXZWJwYWNrbG9hZGVyKClcclxuXHJcbmZ1bmN0aW9uIHNldFJlcSgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHJlcSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXS5wdXNoKFtbXSwge19fZXh0cmFfaWRfXzogKG1kbCwgZXhwb3J0cywgcmVxKSA9PiBtZGwuZXhwb3J0cyA9IHJlcX0sIFtbXCJfX2V4dHJhX2lkX19cIl1dXSk7XHJcbiAgICAgICAgaWYocmVxKXtcclxuICAgICAgICAgICAgZGVsZXRlIHJlcS5tLl9fZXh0cmFfaWRfXztcclxuICAgICAgICAgICAgZGVsZXRlIHJlcS5jLl9fZXh0cmFfaWRfXztcclxuICAgICAgICB9XHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgcmVxID0gdW5kZWZpbmVkXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBub3RpY2VzLCBub3RpY2VXaXRob3V0SUQsIG5vdGljZSwgZXZlbnRzIGFzIG5vdGljZUV2ZW50cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiO1xyXG5pbXBvcnQgY2xvbmVOdWxsUHJvdG8gZnJvbSBcIi4vY2xvbmVOdWxsUHJvdG9cIjtcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0Tm90aWNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpdmF0ZS9Ob3RpY2VcIjtcclxuaW1wb3J0IGV4Y2x1ZGVQcm9wZXJ0aWVzIGZyb20gXCIuL2V4Y2x1ZGVQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCBOT09QIGZyb20gXCIuL25vb3BcIjtcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIsIHsgV2VicGFja0xvYWRlckVycm9yIH0gZnJvbSBcIi4vV2VicGFja0xvYWRlclwiO1xyXG5cclxubGV0IHNvdW5kTW9kdWxlXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBEaXNjb3JkVG9vbHMge1xyXG4gICAgc2hvd05vdGljZShkYXRhOk5vdGljZURhdGEpOk5vdGljZXtcclxuICAgICAgICBpZih0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZGF0YS50ZXh0ICE9PSBcInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihgVGhpcyBub3RpY2UgaXMgbm90IHZhbGlkLiBHaXZlbjogJHtVdGlscy5mb3JtYXRKU09iamVjdChkYXRhKX1gKVxyXG4gICAgICAgIGxldCBuZXdEYXRhID0gY2xvbmVOdWxsUHJvdG8oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE5vdGljZSwgZGF0YSkpIGFzIG5vdGljZVxyXG4gICAgICAgIG5ld0RhdGEuaWQgPSB1dWlkKClcclxuICAgICAgICBub3RpY2VzLnB1c2gobmV3RGF0YSlcclxuICAgICAgICBub3RpY2VFdmVudHMuZW1pdChcIm5vdGljZVVwZGF0ZVwiKVxyXG4gICAgICAgIGNvbnN0IG5vdGljZSA9IG5ldyBOb3RpY2UobmV3RGF0YSlcclxuICAgICAgICByZXR1cm4gbm90aWNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vdGljZXMoKTpOb3RpY2VbXXtcclxuICAgICAgICByZXR1cm4gbm90aWNlcy5tYXAoZGF0YSA9PiBuZXcgTm90aWNlKGRhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUXVpY2tseSBzZW5kIG5vdGlmaWNhdGlvbiAoRXZlbiB3aGVuIG5vIGZvY3VzZWQuKVxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIG5vdGlmaWNhdGlvbi4gQmUgc3VyZSB0byBpbmNsdWRlIGFsbCBwcm9wZXJ0aWVzIGV4Y2VwdCBmdW5jdGlvbnMgY2F1c2UgdGhleSdyZSBvcHRpb25hbC5cclxuICAgICAqIE5vdGlmaWNhdGlvbnMgaGF2ZSBhIHRpbWVvdXQgb2YgMy01IHNlY29uZHMuXHJcbiAgICAgKiBUaGV5IGxvb2sgbGlrZSB0aGlzOiBodHRwczovL2kuaW1ndXIuY29tL2p6dXhLS3UucG5nXHJcbiAgICAgKi9cclxuICAgIHNob3dOb3RpZmljYXRpb24oZGF0YTpOb3RpZmljYXRpb25EYXRhKTpOb3RpZmljYXRpb257XHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IHdpbmRvdy5Ob3RpZmljYXRpb24oZGF0YS50aXRsZSwgZXhjbHVkZVByb3BlcnRpZXMoZGF0YSwgW1xyXG4gICAgICAgICAgICBcInRpdGxlXCIsXHJcbiAgICAgICAgICAgIFwib25DbGlja1wiLFxyXG4gICAgICAgICAgICBcIm9uQ2xvc2VcIixcclxuICAgICAgICAgICAgXCJvblNob3dcIlxyXG4gICAgICAgIF0pKVxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsaWNrID0gZGF0YS5vbkNsaWNrIHx8IE5PT1BcclxuICAgICAgICBub3RpZmljYXRpb24ub25zaG93ID0gZGF0YS5vblNob3cgfHwgTk9PUFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsb3NlID0gZGF0YS5vbkNsb3NlIHx8IE5PT1BcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU291bmQoc291bmQ6U291bmQpe1xyXG4gICAgICAgIHNvdW5kTW9kdWxlID0gc291bmRNb2R1bGUgfHwgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNyZWF0ZVNvdW5kXCJdKVxyXG4gICAgICAgIGlmKCFzb3VuZE1vZHVsZSl0aHJvdyBuZXcgV2VicGFja0xvYWRlckVycm9yKFwiQ291bGRuJ3QgZmluZCBzb3VuZE1vZHVsZSBoZXJlLlwiKVxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBzb3VuZE1vZHVsZS5jcmVhdGVTb3VuZChzb3VuZClcclxuICAgICAgICByZXR1cm4gY3JlYXRlZFxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTb3VuZChzb3VuZDpTb3VuZCl7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlU291bmQoc291bmQpXHJcbiAgICAgICAgY3JlYXRlZC5wbGF5KClcclxuICAgICAgICByZXR1cm4gY3JlYXRlZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTb3VuZCA9IFwiY2FsbF9jYWxsaW5nXCJ8XCJjYWxsX3JpbmdpbmdcInxcImNhbGxfcmluZ2luZ19iZWF0XCJ8XCJkZHItZG93blwifFwiZGRyLWxlZnRcInxcImRkci1yaWdodFwifFwiZGRyLXVwXCJ8XCJkZWFmZW5cInxcImRpc2NvZG9cInxcImRpc2Nvbm5lY3RcInxcImh1bWFuX21hblwifFwibWVudGlvbjFcInxcIm1lbnRpb24yXCJ8XCJtZW50aW9uM1wifFwibWVzc2FnZTFcInxcIm1lc3NhZ2UyXCJ8XCJtZXNzYWdlM1wifFwibXV0ZVwifFwib3ZlcmxheXVubG9ja1wifFwicHR0X3N0YXJ0XCJ8XCJwdHRfc3RvcFwifFwicmVjb25uZWN0XCJ8XCJyb2JvdF9tYW5cInxcInN0cmVhbV9lbmRlZFwifFwic3RyZWFtX3N0YXJ0ZWRcInxcInN0cmVhbV91c2VyX2pvaW5lZFwifFwic3RyZWFtX3VzZXJfbGVmdFwifFwidW5kZWFmZW5cInxcInVubXV0ZVwifFwidXNlcl9qb2luXCJ8XCJ1c2VyX2xlYXZlXCJ8XCJ1c2VyX21vdmVkXCJcclxuXHJcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkRhdGEgPSB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgYm9keTogc3RyaW5nLFxyXG4gICAgaWNvbjogc3RyaW5nLFxyXG4gICAgb25TaG93PzogKCkgPT4gdm9pZCxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxyXG4gICAgb25DbG9zZT86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTm90aWNlRGF0YSA9IG5vdGljZVdpdGhvdXRJRFxyXG5cclxuY29uc3QgRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKHRoaXMucmVtb3ZlZCAhPT0gdGhpcy5zdGF0ZS5yZW1vdmVkKXtcclxuICAgICAgICBpZih0aGlzLnJlbW92ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJyZW1vdmVkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGhpcy5zaG93aW5nICE9PSB0aGlzLnN0YXRlLnNob3dpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuc2hvd2luZyl7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInNob3dpbmdcIiwgdHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwic2hvd2luZ1wiLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmluZGV4ICE9PSB0aGlzLnN0YXRlLmluZGV4KXtcclxuICAgICAgICB0aGlzLmVtaXQoXCJpbmRleFwiLCB0aGlzLmluZGV4KVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQSBub3RpY2UgaW50ZXJmYWNlIGZvciBtb2RpZnlpbmcgaXQgYW5kIHN1YnNjcmliaW5nIHRvIGV2ZW50cy4gKi9cclxuZXhwb3J0IGNsYXNzIE5vdGljZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZW1vdmVkOiB0aGlzLnJlbW92ZWQsXHJcbiAgICAgICAgICAgIHNob3dpbmc6IHRoaXMuc2hvd2luZyxcclxuICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBldmVudEZ1bmMgPSBFdmVudEhhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5vbihcIm5vdGljZVVwZGF0ZVwiLCBldmVudEZ1bmMpXHJcbiAgICAgICAgdGhpcy5vbihcInJlbW92ZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBub3RpY2VFdmVudHMub2ZmKFwibm90aWNlVXBkYXRlXCIsIGV2ZW50RnVuYylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbSB0aGUgbm90aWNlIGlzIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50OiBcInJlbW92ZWRcIiwgbGlzdGVuZXI6ICgpID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIGlzIHZpc2libGUgb3Igbm90LlxyXG4gICAgICovXHJcbiAgICBvbihldmVudDogXCJzaG93aW5nXCIsIGxpc3RlbmVyOiAoaXNTaG93aW5nOmJvb2xlYW4pID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIHF1ZXVlIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50OiBcImluZGV4XCIsIGxpc3RlbmVyOiAoaW5kZXg6bnVtYmVyKSA9PiB2b2lkKTp0aGlzXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKC4uLmFyZ3M6YW55W10pID0+IHZvaWQpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5vbihldmVudCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGJlIGNhbGxlZCB3aGVtIHRoZSBub3RpY2UgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudDogXCJyZW1vdmVkXCIsIGxpc3RlbmVyOiAoKSA9PiB2b2lkKTp0aGlzXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIG5vdGljZSBpcyB2aXNpYmxlIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudDogXCJzaG93aW5nXCIsIGxpc3RlbmVyOiAoaXNTaG93aW5nOmJvb2xlYW4pID0+IHZvaWQpOnRoaXNcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgbm90aWNlIHF1ZXVlIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQ6IFwiaW5kZXhcIiwgbGlzdGVuZXI6IChpbmRleDpudW1iZXIpID0+IHZvaWQpOnRoaXNcclxuICAgIG9uY2UoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6ICguLi5hcmdzOmFueVtdKSA9PiB2b2lkKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIub25jZShldmVudCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGV2ZW50OiBcInJlbW92ZWRcIiwgbGlzdGVuZXI6ICgpID0+IHZvaWQpOnRoaXNcclxuICAgIG9mZihldmVudDogXCJzaG93aW5nXCIsIGxpc3RlbmVyOiAoaXNTaG93aW5nOmJvb2xlYW4pID0+IHZvaWQpOnRoaXNcclxuICAgIG9mZihldmVudDogXCJpbmRleFwiLCBsaXN0ZW5lcjogKGluZGV4Om51bWJlcikgPT4gdm9pZCk6dGhpc1xyXG4gICAgb2ZmKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoLi4uYXJnczphbnlbXSkgPT4gdm9pZCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9mZihldmVudCwgbGlzdGVuZXIpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGU6e1xyXG4gICAgICAgIHJlbW92ZWQ6Ym9vbGVhbixcclxuICAgICAgICBzaG93aW5nOmJvb2xlYW4sXHJcbiAgICAgICAgaW5kZXg6bnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0VGlja1JlZnJlc2g6Ym9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgZ2V0IHJlbW92ZWQoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiAhbm90aWNlcy5maW5kKGUgPT4gZS5pZCA9PT0gdGhpcy5pZClcclxuICAgIH1cclxuICAgIGdldCBzaG93aW5nKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gMFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbmRleCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gbm90aWNlcy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSB0aGlzLmlkKVxyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pZFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkYXRhOiBQYXJ0aWFsPG5vdGljZT4pe1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIGRhdGEpe1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IFwiaWRcIiljb250aW51ZVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFba2V5XSA9IGRhdGFba2V5XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMubmV4dFRpY2tSZWZyZXNoKXtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VGlja1JlZnJlc2ggPSB0cnVlXHJcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGlja1JlZnJlc2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbm90aWNlRXZlbnRzLmVtaXQoXCJub3RpY2VVcGRhdGVcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnRleHRcclxuICAgIH1cclxuICAgIHNldCB0ZXh0KHRleHQpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnR5cGVcclxuICAgIH1cclxuICAgIHNldCB0eXBlKHR5cGUpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJ1dHRvblRleHQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmJ1dHRvblRleHRcclxuICAgIH1cclxuICAgIHNldCBidXR0b25UZXh0KGJ1dHRvblRleHQ6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBvbkNsaWNrKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5vbkNsaWNrXHJcbiAgICB9XHJcbiAgICBzZXQgb25DbGljayhvbkNsaWNrKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlZClyZXR1cm5cclxuICAgICAgICBub3RpY2VzLnNwbGljZSh0aGlzLmluZGV4LCAxKVxyXG4gICAgICAgIG5vdGljZUV2ZW50cy5lbWl0KFwibm90aWNlVXBkYXRlXCIpXHJcbiAgICB9XHJcbiAgICBkYXRhOm5vdGljZVxyXG59IiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUGx1Z2luVXRpbGl0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzKHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzKVxyXG4gICAgICAgIGxldCBlbGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7a2V5OiB1dWlkKCl9LCBpdGVtcylcclxuICAgICAgICByZXR1cm4gVXRpbHMuUmVhY3RUb0hUTUxFbGVtZW50KGVsZW0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFtdXHJcbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBpdGVtICE9PSBcIm9iamVjdFwiKXJldHVybiBpdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucHJvcHMgJiYgXCJjaGlsZHJlblwiIGluIGl0ZW0ucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoaXRlbS5wcm9wcy5jaGlsZHJlbikpaXRlbS5wcm9wcy5jaGlsZHJlbiA9IFtpdGVtLnByb3BzLmNoaWxkcmVuXVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wcm9wcy5jaGlsZHJlbiA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KGl0ZW0ucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWl0ZW0ucHJvcHMpaXRlbS5wcm9wcyA9IHt9XHJcbiAgICAgICAgICAgIGl0ZW0ucHJvcHMua2V5ID0gdXVpZCgpXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBVdGlscy5nZXROZXN0ZWRQcm9wcyhjb21wb25lbnRzLCBpdGVtLmNvbXBvbmVudClcclxuICAgICAgICAgICAgaWYoIWNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2FybmluZyA9IG5ldyBUZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGBXYXJuaW5nOiBObyBjb21wb25lbnQgd2FzIGZvdW5kIGZvcjogXCIke2l0ZW0uY29tcG9uZW50fVwiLiBQbGVhc2UgY29ycmVjdCB5b3VyIGNvZGUuYFxyXG4gICAgICAgICAgICAgICAgfSkucmVuZGVyKClcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2god2FybmluZylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIE9iamVjdC5jcmVhdGUoaXRlbS5wcm9wcykpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0dGluZ0l0ZW0gPSB7XHJcbiAgICBjb21wb25lbnQ6IHN0cmluZyxcclxuICAgIHByb3BzOiBDb21wb25lbnRQcm9wczxhbnk+XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmZyZWV6ZShvKSB7XHJcbiAgICB2YXIgb28gPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgb28gPSBbXTtcclxuICAgICAgICB2YXIgY2xvbmUgPSBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgIG9vLnB1c2godilcclxuICAgICAgICB9O1xyXG4gICAgICAgIG8uZm9yRWFjaChjbG9uZSk7XHJcbiAgICB9IGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICBvbyA9IG5ldyBTdHJpbmcobykudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG8gPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvbyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG8pIHtcclxuICAgICAgICAgICAgb29bcHJvcGVydHldID0gb1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9vO1xyXG59XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBPYmplY3RDb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgdW5mcmVlemU6IDxUIGV4dGVuZHMgYW55PihvYmo6IFJlYWRvbmx5PFQ+KSA9PiBUXHJcbiAgICB9XHJcbn1cclxuT2JqZWN0LnVuZnJlZXplID0gdW5mcmVlemUiLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKVxyXG5pbXBvcnQgUGx1Z2luVXRpbGl0aWVzIGZyb20gXCIuL1BsdWdpblV0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIFJlYWN0VG9IVE1MRWxlbWVudChSZWFjdEVsZW1lbnQ6IFJlYWN0RWxlbWVudCl7ICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0RWxlbWVudCwgZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQbHVnaW5VdGlscygpe3JldHVybiBQbHVnaW5VdGlsaXRpZXN9XHJcblxyXG4gICAgZ2V0TmVzdGVkUHJvcHMob2JqOmFueSwgcGF0aDogc3RyaW5nKXtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiLlwiKVxyXG4gICAgICAgIGZvcihsZXQgc2VnIG9mIHNlZ21lbnRzKXtcclxuICAgICAgICAgICAgb2JqID0gb2JqICYmIChzZWcgaW4gb2JqKSA/IG9ialtzZWddIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxuXHJcbiAgICBEZWNpbWFsQ29sb3JUb0hleChjb2xvcjpudW1iZXIpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gXCIjXCIrY29sb3IudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuXHJcbiAgICBIZXhDb2xvclRvRGVjaW1hbChjb2xvcjpzdHJpbmcpOm51bWJlcntcclxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoL1sjO10vZywgXCJcIilcclxuICAgICAgICBsZXQgcmVzID0gcGFyc2VJbnQoY29sb3IsIDE2KVxyXG4gICAgICAgIGlmKGlzTmFOKHJlcykpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbG9yOiAke2NvbG9yfWApXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURhKGNsYXNzTmFtZTpzdHJpbmcpOnN0cmluZ3tcclxuICAgICAgICBpZighY2xhc3NOYW1lKXJldHVybiBjbGFzc05hbWVcclxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5maWx0ZXIoZSA9PiAhZS5zdGFydHNXaXRoKFwiZGEtXCIpKS5qb2luKFwiIFwiKVxyXG4gICAgfVxyXG5cclxuICAgIEZpbmRSZWFjdChkb206RWxlbWVudCwgdHJhdmVyc2VVcDpudW1iZXIgPSAwKTpSZWFjdC5Db21wb25lbnR8UmVhY3QuUHVyZUNvbXBvbmVudHtcclxuICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MzIxNzQyL3JlYWN0LWdldHRpbmctYS1jb21wb25lbnQtZnJvbS1hLWRvbS1lbGVtZW50LWZvci1kZWJ1Z2dpbmcjMzkxNjUxMzdcclxuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhkb20pLmZpbmQoa2V5PT5rZXkuc3RhcnRzV2l0aChcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiKSk7XHJcbiAgICAgICAgY29uc3QgZG9tRmliZXIgPSBkb21ba2V5XTtcclxuICAgICAgICBpZiAoZG9tRmliZXIgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgICAgICAvLyByZWFjdCA8MTZcclxuICAgICAgICBpZiAoZG9tRmliZXIuX2N1cnJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wRmliZXIgPSBkb21GaWJlci5fY3VycmVudEVsZW1lbnQuX293bmVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlcnNlVXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29tcEZpYmVyID0gY29tcEZpYmVyLl9jdXJyZW50RWxlbWVudC5fb3duZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBGaWJlci5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gcmVhY3QgMTYrXHJcbiAgICAgICAgY29uc3QgR2V0Q29tcEZpYmVyID0gZmliZXI9PntcclxuICAgICAgICAgICAgLy9yZXR1cm4gZmliZXIuX2RlYnVnT3duZXI7IC8vIHRoaXMgYWxzbyB3b3JrcywgYnV0IGlzIF9fREVWX18gb25seVxyXG4gICAgICAgICAgICBsZXQgcGFyZW50RmliZXIgPSBmaWJlci5yZXR1cm47XHJcbiAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgcGFyZW50RmliZXIudHlwZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRGaWJlciA9IHBhcmVudEZpYmVyLnJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RmliZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY29tcEZpYmVyID0gR2V0Q29tcEZpYmVyKGRvbUZpYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlcnNlVXA7IGkrKykge1xyXG4gICAgICAgICAgICBjb21wRmliZXIgPSBHZXRDb21wRmliZXIoY29tcEZpYmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBGaWJlci5zdGF0ZU5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2xhc3MoY2xhc3NOYW1lczpzdHJpbmcsIGNsYXNzTmFtZTpzdHJpbmcpOmJvb2xlYW57XHJcbiAgICAgICAgaWYoIWNsYXNzTmFtZXMgfHwgIWNsYXNzTmFtZSlyZXR1cm4gZmFsc2VcclxuICAgICAgICBjb25zdCBjbGFzc25hbWVzID0gY2xhc3NOYW1lcy5zcGxpdChcIiBcIilcclxuICAgICAgICBmb3IobGV0IGNsYXNzbmFtZSBvZiB0aGlzLnJlbW92ZURhKGNsYXNzTmFtZSkuc3BsaXQoXCIgXCIpKXtcclxuICAgICAgICAgICAgaWYoIWNsYXNzbmFtZXMuaW5jbHVkZXMoY2xhc3NuYW1lKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRKU09iamVjdChvYmo6YW55KTpzdHJpbmd7XHJcbiAgICAgICAgaWYoW1wic3RyaW5nXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiLCBcImJpZ2ludFwiLCBcInVuZGVmaW5lZFwiXS5pbmNsdWRlcyh0eXBlb2Ygb2JqKSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIGlmKG9iaiA9PT0gbnVsbClyZXR1cm4gXCJudWxsXCJcclxuICAgICAgICBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpcmV0dXJuIFN0cmluZyhvYmopXHJcbiAgICAgICAgaWYodHlwZW9mIG9iaiA9PT0gXCJzeW1ib2xcIilyZXR1cm4gU3RyaW5nKG9iailcclxuXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShvYmopKXtcclxuICAgICAgICAgICAgaWYoIW9iai5sZW5ndGgpcmV0dXJuIFwiW11cIlxyXG4gICAgICAgICAgICByZXR1cm4gYFtcXG4gICAgJHtvYmoubWFwKGUgPT4gdGhpcy5mb3JtYXRKU09iamVjdChlKSkuam9pbihcIixcXG4gICAgXCIpfVxcbl1gXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAgICAgICAgIGlmKGtleXMubGVuZ3RoID09PSAwKXJldHVybiBcInt9XCJcclxuICAgICAgICAgICAgcmV0dXJuIGB7XFxuICAgICR7a2V5cy5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmlnaW5hbCA9IGtleVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIilrZXkgPSBcIltcIitTdHJpbmcoa2V5KStcIl1cIlxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiKWtleSA9IFN0cmluZyhrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc05hTihwYXJzZUludChrZXlbMF0pKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLmZvcm1hdEpTT2JqZWN0KGtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoL1teXFx3XFxkXyRdL2cudGVzdChrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuZm9ybWF0SlNPYmplY3Qoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2tleX06ICR7dGhpcy5mb3JtYXRKU09iamVjdChvYmpbb3JpZ2luYWxdKX1gXHJcbiAgICAgICAgICAgIH0pfVxcbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHRjb3JkQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBuYW1lOnN0cmluZyA9IFwiTGlnaHRjb3JkQXBpRXJyb3JcIlxyXG59IiwiY29uc3QgQkRNb2R1bGVzOnR5cGVvZiB3aW5kb3cuQkRNb2R1bGVzID0gd2luZG93LkJETW9kdWxlcyB8fCByZXF1aXJlKFwiLi9CRE1vZHVsZXNcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBXZWJwYWNrTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIGdldChpZDogbnVtYmVyKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoaWQpXHJcbiAgICB9XHJcbiAgICBmaW5kKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gQkRNb2R1bGVzLmdldChmaWx0ZXIpWzBdXHJcbiAgICAgICAgaWYoIXJlc3VsdCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihmaWx0ZXIsIFwiY291bGRuJ3QgZmluZCB0aGUgbW9kdWxlLlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBmaW5kQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pWzBdXHJcbiAgICB9XHJcbiAgICBmaWx0ZXIoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55W117XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJwYWNrTG9hZGVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOnN0cmluZyA9IFwiXCIpe1xyXG4gICAgICAgIG1lc3NhZ2UgKz0gXCJcXG5cXHRUaGlzIGVycm9yIGlzIHJlbGF0ZWQgdG8gTGlnaHRjb3JkIG5vdCBiZWluZyBhYmxlIHRvIGZpbmQgYSBXZWJwYWNrTW9kdWxlLiBcXG5cXHRQbGVhc2Ugc2hvdyB0aGlzIGVycm9yIGFuZCBhIGZldyBsaW5lcyBvZiBsb2dzIGFib3ZlIHRoaXMgZXJyb3IgdG8gdGhlIGRldnMuIFxcblxcdE9wZW4gYW4gaXNzdWUgb24gaHR0cHM6Ly9naXRodWIuY29tL0xpZ2h0Y29yZC9MaWdodGNvcmQgb3IgaW4gb3VyIGRpc2NvcmQgc2VydmVyLlwiXHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSlcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIldlYnBhY2tMb2FkZXJFcnJvclwiXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogUmVjcmVhdGUgdGhlIGdpdmVuIG9iamVjdCB3aXRob3V0IHRoZSBfX3Byb3RvX18uIFVzZWZ1bCBmb3IgYmV0dGVyIGZvcm1hdHRpbmcgd2hlbiBvdXRwdXQgaW4gY29uc29sZS5cclxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlY3JlYXRlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU51bGxQcm90bzxPYmo9YW55PihvYmo6T2JqKTpPYmp7XHJcbiAgICBsZXQgbyA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IHtcclxuICAgICAgICBvW2tdID0gb2JqW2tdXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9cclxufSIsImV4cG9ydCBjb25zdCBpc05hdGl2ZTpib29sZWFuID0gdHlwZW9mIHdpbmRvdy5CRE1vZHVsZXMgPT09IFwidW5kZWZpbmVkXCJcclxuZXhwb3J0IGNvbnN0IGlzSW1wb3J0ZWQ6Ym9vbGVhbiA9IHR5cGVvZiB3aW5kb3cuQkRNb2R1bGVzICE9PSBcInVuZGVmaW5lZFwiIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhjbHVkZVByb3BlcnRpZXM8T2JqID0gYW55PihvYmo6T2JqLCBwcm9wczooa2V5b2YgT2JqKVtdKTpQYXJ0aWFsPE9iaj57XHJcbiAgICBsZXQgbmV3T2JqID0ge31cclxuXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICBpZihwcm9wcy5pbmNsdWRlcyhrIGFzIGtleW9mIE9iaikpcmV0dXJuXHJcbiAgICAgICAgbmV3T2JqW2tdID0gb2JqW2tdXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBuZXdPYmpcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5PT1AoKXt9IiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCJcclxuaW1wb3J0IE5vdGljZXMsIHsgbm90aWNlcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3ByaXZhdGUvTm90aWNlc1wiXHJcbmltcG9ydCB7IGlzTmF0aXZlIH0gZnJvbSBcIi4vZW52aXJvbm5lbWVudFwiO1xyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi9XZWJwYWNrTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goKXtcclxuICAgIC8qKiBTVEFSVCBOT1RJQ0UgKi9cclxuICAgIGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiQ29ubmVjdGVkQXBwVmlld1wiKVxyXG4gICAgLnRoZW4oYXN5bmMgKG1vZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwcENsYXNzZXMgPSBhd2FpdCBnZXRNb2R1bGUoZSA9PiBlLmhhc05vdGljZSk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRSZW5kZXIgPSBvcmlnaW5hbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gb3JpZ2luYWwuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdjaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKWNoaWxkcmVuID0gW2NoaWxkcmVuXVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBuZXdjaGlsZHJlbi5wdXNoKGNoaWxkcmVuWzBdKVxyXG4gICAgICAgICAgICAgICAgbmV3Y2hpbGRyZW4ucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGljZXMsIHtjb250YWluZXI6IHRoaXN9KSlcclxuICAgICAgICAgICAgICAgIG5ld2NoaWxkcmVuLnB1c2goY2hpbGRyZW5bMV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlblsxXS5wcm9wcy5jaGlsZHJlbiA9IG5ld2NoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuWzJdLnByb3BzLmNoaWxkcmVuWzBdLnByb3BzLnJlbmRlciA9IGJ1aWxkUmVuZGVyQ2hhbm5lbFNpZGViYXIocmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW5bMl0ucHJvcHMuY2hpbGRyZW5bMF0ucHJvcHMucmVuZGVyKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWlsZFJlbmRlckNoYW5uZWxTaWRlYmFyID0gb3JpZ2luYWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyQ2hhbm5lbFNpZGViYXIoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gb3JpZ2luYWwuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc05vdGljZSA9IG5vdGljZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgaWYoIWhhc05vdGljZSlyZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgICAgICAgICAgICAgIGlmKCFVdGlscy5oYXNDbGFzcyhyZXR1cm5WYWx1ZS5wcm9wcy5jbGFzc05hbWUsIGFwcENsYXNzZXMuaGFzTm90aWNlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2xhc3NOYW1lICs9IFwiIFwiK1V0aWxzLnJlbW92ZURhKGFwcENsYXNzZXMuaGFzTm90aWNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vZC5kZWZhdWx0LnByb3RvdHlwZS5yZW5kZXIgPSBidWlsZFJlbmRlcihtb2QuZGVmYXVsdC5wcm90b3R5cGUucmVuZGVyKTtcclxuICAgICAgICAoYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc3QgYmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrVXRpbHMucmVtb3ZlRGEoYXBwQ2xhc3Nlcy5iYXNlKSlcclxuICAgICAgICAgICAgaWYoIWJhc2UpdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBiYXNlIGhlcmVgKVxyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gVXRpbHMuRmluZFJlYWN0KGJhc2UpIGFzIGFueVxyXG4gICAgICAgICAgICBlbGVtLnJlbmRlciA9IGJ1aWxkUmVuZGVyKGVsZW0ucmVuZGVyKVxyXG4gICAgICAgICAgICBlbGVtLmZvcmNlVXBkYXRlKClcclxuICAgICAgICB9KSgpXHJcbiAgICB9KVxyXG4gICAgLyoqIEVORCBOT1RJQ0UgKi9cclxuXHJcbiAgICBpZihpc05hdGl2ZSl7XHJcbiAgICAgICAgLyoqIFNUQVJUIFVTRVJQT1BPVVQgUEFUQ0ggKi9cclxuICAgICAgICBhd2FpdExvZ2luKClcclxuICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBVc2VyUG9wb3V0ID0gYXdhaXQgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJGbHV4Q29udGFpbmVyKEZvcndhcmRSZWYoU3Vic2NyaWJlR3VpbGRNZW1iZXJzQ29udGFpbmVyKFVzZXJQb3BvdXQpKSlcIilcclxuICAgICAgICAgICAgY29uc3QgdXNlck1vZHVsZSA9IGF3YWl0IGdldE1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0Q3VycmVudFVzZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjEgPSBuZXcgVXNlclBvcG91dC5kZWZhdWx0KHt1c2VySWQ6IHVzZXJNb2R1bGUuZGVmYXVsdC5nZXRDdXJyZW50VXNlcigpLmlkLCBndWlsZElkOiBudWxsLCBjaGFubmVsSWQ6IG51bGwsIGRpc2FibGVVc2VyUHJvZmlsZUxpbms6IHRydWV9KS5yZW5kZXIoKVxyXG4gICAgICAgICAgICBjb25zdCBQb3BvdXRQcm9wcyA9IHJlbmRlcjEucHJvcHNcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyMiA9IHJlbmRlcjEudHlwZS5yZW5kZXIoUG9wb3V0UHJvcHMsIG51bGwpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjMgPSBuZXcgcmVuZGVyMi50eXBlKHJlbmRlcjIucHJvcHMpLnJlbmRlcigpXHJcbiAgICAgICAgICAgIGNvbnN0IFVzZXJQb3BvdXRDb21wb25lbnQgPSByZW5kZXIzLnR5cGVcclxuICAgICAgICAgICAgaWYoIVVzZXJQb3BvdXRDb21wb25lbnQpdGhyb3cgbmV3IEVycm9yKGBDb3VsZG4ndCBmaW5kIHRoZSBVc2VyUG9wb3V0Q29tcG9uZW50IGNvbXBvbmVudC5gKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9IFVzZXJQb3BvdXRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlclxyXG4gICAgICAgICAgICBVc2VyUG9wb3V0Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSByZW5kZXIuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHJvcHMuY2hpbGRyZW4ucHJvcHNbXCJkYXRhLXVzZXItaWRcIl0gPSB0aGlzLnByb3BzLnVzZXIuaWRcclxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLyoqIEVORCBVU0VSUE9QT1VUIFBBVENIKi9cclxuICAgIFxyXG4gICAgICAgIC8qKiBTVEFSVCBVU0VSUFJPRklMRSBQQVRDSCAqL1xyXG4gICAgICAgIGF3YWl0TG9naW4oKVxyXG4gICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IFVzZXJQcm9maWxlID0gYXdhaXQgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJVc2VyUHJvZmlsZVwiKVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyTW9kdWxlID0gYXdhaXQgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXRDdXJyZW50VXNlcilcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyMSA9IG5ldyBVc2VyUHJvZmlsZS5kZWZhdWx0KHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJNb2R1bGUuZGVmYXVsdC5nZXRDdXJyZW50VXNlcigpXHJcbiAgICAgICAgICAgIH0pLnJlbmRlcigpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjIgPSBuZXcgcmVuZGVyMS50eXBlKHJlbmRlcjEucHJvcHMpLnJlbmRlcigpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjMgPSByZW5kZXIyLnR5cGUucmVuZGVyKHJlbmRlcjIucHJvcHMsIG51bGwpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcjQgPSBuZXcgcmVuZGVyMy50eXBlKHJlbmRlcjMucHJvcHMpLnJlbmRlcigpXHJcbiAgICAgICAgICAgIGNvbnN0IFVzZXJQcm9maWxlQ29tcG9uZW50ID0gcmVuZGVyNC50eXBlXHJcbiAgICAgICAgICAgIGlmKCFVc2VyUHJvZmlsZUNvbXBvbmVudCl0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgdGhlIFVzZXJQcm9maWxlQ29tcG9uZW50IGNvbXBvbmVudC5gKVxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9IFVzZXJQcm9maWxlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJcclxuICAgICAgICAgICAgVXNlclByb2ZpbGVDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHJlbmRlci5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldHVyblZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlLnByb3BzLmNoaWxkcmVuLnByb3BzW1wiZGF0YS11c2VyLWlkXCJdID0gdGhpcy5wcm9wcy51c2VyLmlkXHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qKiBFTkQgVVNFUlBST0ZJTEUgUEFUQ0ggKi9cclxuXHJcbiAgICAgICAgLyoqIFNUQVJUIFdFQkhPT0sgUEFUQ0ggKi9cclxuLypcclxuICAgICAgICBsZXQgdXNlZFdlYmhvb2tzID0ge31cclxuXHJcbiAgICAgICAgZ2V0TW9kdWxlKGUgPT4gZSAmJiBlLlJlcXVlc3QgJiYgZS5SZXF1ZXN0LnByb3RvdHlwZSAmJiBlLlJlcXVlc3QucHJvdG90eXBlLmVuZClcclxuICAgICAgICAudGhlbihSZXF1ZXN0TW9kdWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW5kID0gUmVxdWVzdE1vZHVsZS5SZXF1ZXN0LnByb3RvdHlwZS5lbmRcclxuICAgICAgICAgICAgUmVxdWVzdE1vZHVsZS5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy51cmwuZW5kc1dpdGgoXCIvbWVzc2FnZXNcIikgJiYgL1xcL2NoYW5uZWxzXFwvXFxkK1xcL21lc3NhZ2VzL2cudGVzdCh0aGlzLnVybCkgJiYgdGhpcy5tZXRob2QgPT09IFwiUE9TVFwiKXsgLy8gc2VuZGluZyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5uZWxJZCA9IHRoaXMudXJsLnNwbGl0KFwiL2NoYW5uZWxzL1wiKVsxXS5zcGxpdChcIi9tZXNzYWdlc1wiKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHVzZWRXZWJob29rc1tjaGFubmVsSWRdKXsgLy8gd2ViaG9vayBpcyBhdmFpbGxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3ZWJob29rID0gdXNlZFdlYmhvb2tzW2NoYW5uZWxJZF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGAvd2ViaG9va3MvJHt3ZWJob29rLmlkfS8ke3dlYmhvb2sudG9rZW59P3dhaXQ9dHJ1ZWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZC5jYWxsKHRoaXMsIC4uLmFyZ3VtZW50cylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ2V0TW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJXZWJob29rXCIpXHJcbiAgICAgICAgLnRoZW4od2ViaG9va0NvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlckVkaXQgPSB3ZWJob29rQ29tcG9uZW50LmRlZmF1bHQucHJvdG90eXBlLnJlbmRlckVkaXRcclxuICAgICAgICAgICAgd2ViaG9va0NvbXBvbmVudC5kZWZhdWx0LnByb3RvdHlwZS5yZW5kZXJFZGl0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlYmhvb2sgPSB0aGlzLnByb3BzLndlYmhvb2tcclxuICAgICAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IHJlbmRlckVkaXQuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlbiA9IFtyZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlbl1cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdXNlZFdlYmhvb2tzW3dlYmhvb2suY2hhbm5lbF9pZF0gJiYgdXNlZFdlYmhvb2tzW3dlYmhvb2suY2hhbm5lbF9pZF0uaWQgPT09IHdlYmhvb2suaWQgPyBcIlN0b3AgdGFsa2luZyB3aXRoIHRoaXMgd2ViaG9va1wiIDogXCJUYWxrIHdpdGggdGhpcyB3ZWJob29rXCJcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZS5wcm9wcy5jaGlsZHJlbi5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQod2luZG93LkxpZ2h0Y29yZC5BcGkuQ29tcG9uZW50cy5pbnB1dHMuQnV0dG9uLCB7Y29sb3I6IFwiZ3JlZW5cIiwgd3JhcHBlcjogZmFsc2UsIG9uQ2xpY2soKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih1c2VkV2ViaG9va3Nbd2ViaG9vay5jaGFubmVsX2lkXSAmJiB1c2VkV2ViaG9va3Nbd2ViaG9vay5jaGFubmVsX2lkXS5pZCA9PT0gd2ViaG9vay5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1c2VkV2ViaG9va3Nbd2ViaG9vay5jaGFubmVsX2lkXVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VkV2ViaG9va3Nbd2ViaG9vay5jaGFubmVsX2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3ZWJob29rLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHdlYmhvb2sudG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3ZWJob29rUGFuZWxzLmZvckVhY2goZSA9PiBlKCkpXHJcbiAgICAgICAgICAgICAgICB9fSwgbWVzc2FnZSkpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgd2ViaG9va1BhbmVscyA9IFtdXHJcbiAgICAgICAgbGV0IGdldENvbXAgPSAoY29tcCkgPT4ge1xyXG4gICAgICAgICAgICBjbGFzcyBTZXR0aW5nc1dlYmhvb2tzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHV1aWQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbmV3IGNvbXAodGhpcy5wcm9wcylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnVuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmlkID0gdGhpcy5pZFxyXG4gICAgICAgICAgICAgICAgICAgIHdlYmhvb2tQYW5lbHMucHVzaChmdW5jKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViaG9va1BhbmVscyA9IHdlYmhvb2tQYW5lbHMuZmlsdGVyKGUgPT4gZS5pZCAhPT0gdGhpcy5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQucmVuZGVyKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIlNldHRpbmdzV2ViaG9va3NcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NXZWJob29rc1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIkZsdXhDb250YWluZXIoU2V0dGluZ3NXZWJob29rcylcIilcclxuICAgICAgICAudGhlbih3ZWJob29rc0NvbXBvbmVudHMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29tcCA9IHdlYmhvb2tzQ29tcG9uZW50cy5kZWZhdWx0XHJcblxyXG4gICAgICAgICAgICB3ZWJob29rc0NvbXBvbmVudHMuZGVmYXVsdCA9IGdldENvbXAoY29tcClcclxuXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiRmx1eENvbnRhaW5lcihGbHV4Q29udGFpbmVyKFNldHRpbmdzV2ViaG9va3MpKVwiKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChtb2QgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kLmRlZmF1bHQgPSBnZXRDb21wKG1vZC5kZWZhdWx0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pKi9cclxuICAgICAgICAvKiogRU5EIFdFQkhPT0sgUEFUQ0ggKi9cclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBBZGQgaW4gYXBwLW5vdGlmaWNhdGlvbnMgLyBjb25maXJtYXRpb25zLlxyXG4gICAgLyoqIFNUQVJUIElOLUFQUCBOT1RJRklDQVRJT05TICovXHJcbiAgICAvL2dldE1vZHVsZShlID0+IHRydWUpXHJcbiAgICAvKiogRU5EIElOLUFQUCBOT1RJRklDQVRJT05TICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZHVsZShmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTpQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICB3aW5kb3cuTGlnaHRjb3JkLkFwaS5lbnN1cmVFeHBvcnRlZChmaWx0ZXIpXHJcbiAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltMSUdIVENPUkRdXCIsIGVyciwgZmlsdGVyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5sZXQgaGFzQ29tcGxldGVkTG9naW4gPSBmYWxzZVxyXG5sZXQgbG9naW5Qcm9taXNlOlByb21pc2U8dm9pZD5cclxuZnVuY3Rpb24gYXdhaXRMb2dpbigpOlByb21pc2U8dm9pZD57XHJcbiAgICBpZihoYXNDb21wbGV0ZWRMb2dpbilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIGlmKGxvZ2luUHJvbWlzZSlyZXR1cm4gbG9naW5Qcm9taXNlXHJcbiAgICAgXHJcbiAgICByZXR1cm4gbG9naW5Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBsZXQgaXNSZXNvbHZlZCA9IGZhbHNlXHJcbiAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5EaXNjb3JkTW9kdWxlcy5kaXNwYXRjaGVyLnN1YnNjcmliZShcIkNPTk5FQ1RJT05fT1BFTlwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYoaXNSZXNvbHZlZClyZXR1cm5cclxuICAgICAgICAgICAgaGFzQ29tcGxldGVkTG9naW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICBpc1Jlc29sdmVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbndpbmRvdy5MaWdodGNvcmQuRGlzY29yZE1vZHVsZXMuZGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJMT0dPVVRcIiwgKGV2KSA9PiB7XHJcbiAgICBoYXNDb21wbGV0ZWRMb2dpbiA9IGZhbHNlXHJcbiAgICBsb2dpblByb21pc2UgPSB1bmRlZmluZWRcclxufSkiLCJpbXBvcnQgKiBhcyB1dWlkdjEgZnJvbSBcInV1aWQvdjFcIlxyXG5pbXBvcnQgKiBhcyB1dWlkdjQgZnJvbSBcInV1aWQvdjRcIlxyXG5cclxudHlwZSB1dWlkRnVuYyA9ICgpID0+IHN0cmluZ1xyXG5sZXQgdXVpZDp1dWlkRnVuYyAmIHt2MTogdXVpZEZ1bmMsIHY0OiB1dWlkRnVuY30gPSBPYmplY3QuYXNzaWduKGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdXVpZHY0KClcclxufSwge3YxOiAoKSA9PiB1dWlkdjEoKSwgdjQ6ICgpID0+IHV1aWR2NCgpfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV1aWQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG93ZXJjb3JkL3dlYnBhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92MVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3Y0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=