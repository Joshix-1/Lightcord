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
exports.default = {
    inputs: {
        Button: Button_1.default,
        Switch: Switch_1.default,
        Choices: RadioGroup_1.default,
        RadioGroup: RadioGroup_1.default,
        TextArea: TextArea_1.default,
        TextInput: TextInput_1.default,
        Dropdown: Dropdown_1.default
    },
    general: {
        Title: Title_1.default,
        SettingsTitle: SettingsTitle_1.default,
        SettingSubTitle: SettingSubTitle_1.default,
        Tabs: Tabs_1.default,
        CodeBlock: CodeBlock_1.default
    }
};


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
        return (React.createElement("div", { className: "lc-tabWrapper" },
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
    tabs: { label: "No tabs was passed to <Tabs>.", id: "none" },
    active: null,
    onChange: noop_1.default
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
            } },
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
        return BDModules.get(filter)[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQ29kZUJsb2NrLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1NldHRpbmdTdWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9TZXR0aW5nc1RpdGxlLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL1RhYnMudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvVGl0bGUudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9CdXR0b24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1JhZGlvR3JvdXAudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1BsdWdpblV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9VdGlscy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9XZWJwYWNrTG9hZGVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL25vb3AudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvdXVpZC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3YxXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92NFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pGQSxpQkFBUyxNQUFNLENBQUMsTUFBTSxHQUFD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Q0FBQyxFQUFDO2dCQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJO2dCQUNwQixLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztvQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt3QkFBQyxTQUFTLEdBQUcsS0FBSztpQkFDaEY7Z0JBQ0QsSUFBRyxTQUFTO29CQUFDLE9BQU8sSUFBSTthQUMzQjtZQUNELEtBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFDO2dCQUNsQixJQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7b0JBQUMsT0FBTyxLQUFLO2FBQ25FO1lBQ0QsT0FBTyxJQUFJO1FBQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q0QsU0FBd0IsSUFBSSxLQUFHLENBQUM7QUFBaEMsdUJBQWdDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEMsNkRBQWlDO0FBQ2pDLDZEQUFpQztBQUdqQyxJQUFJLElBQUksR0FBMkMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3RCxPQUFPLE1BQU0sRUFBRTtBQUNuQixDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7QUFFNUMsa0JBQWUsSUFBSTs7Ozs7Ozs7Ozs7O0FDUm5CLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIGJhaXQgdHlwZXNjcmlwdCBpbnRvIHRoaW5raW5nIHRoaXMgaXMgbm90IHJlYWN0RE9NIHNvIG5vIGNpcmN1bGFyIGRlcGVuZGVuY3kuXHJcbmV4cG9ydCA9IHdpbmRvd1tcIlJlYWNcIitcInRET01cIl0gYXMgdHlwZW9mIGltcG9ydChcInJlYWN0LWRvbVwiKSIsImltcG9ydCBEaXNjb3JkQnV0dG9uIGZyb20gXCIuL2lucHV0cy9CdXR0b25cIlxyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuL2lucHV0cy9Td2l0Y2hcIlxyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi9pbnB1dHMvUmFkaW9Hcm91cFwiXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9pbnB1dHMvVGV4dEFyZWFcIlxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL2lucHV0cy9UZXh0SW5wdXRcIlxyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vaW5wdXRzL0Ryb3Bkb3duXCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL2dlbmVyYWwvVGl0bGVcIlxyXG5pbXBvcnQgU2V0dGluZ3NUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1NldHRpbmdzVGl0bGVcIlxyXG5pbXBvcnQgVGFicywgeyBUYWIgfSBmcm9tIFwiLi9nZW5lcmFsL1RhYnNcIlxyXG5pbXBvcnQgU2V0dGluZ1N1YlRpdGxlIGZyb20gXCIuL2dlbmVyYWwvU2V0dGluZ1N1YlRpdGxlXCJcclxuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi9nZW5lcmFsL0NvZGVCbG9ja1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbnB1dHM6IHtcclxuICAgICAgICBCdXR0b246IERpc2NvcmRCdXR0b24sXHJcbiAgICAgICAgU3dpdGNoOiBTd2l0Y2gsXHJcbiAgICAgICAgQ2hvaWNlczogUmFkaW9Hcm91cCxcclxuICAgICAgICBSYWRpb0dyb3VwOiBSYWRpb0dyb3VwLFxyXG4gICAgICAgIFRleHRBcmVhOiBUZXh0QXJlYSxcclxuICAgICAgICBUZXh0SW5wdXQ6IFRleHRJbnB1dCxcclxuICAgICAgICBEcm9wZG93bjogRHJvcGRvd25cclxuICAgIH0sXHJcbiAgICBnZW5lcmFsOiB7XHJcbiAgICAgICAgVGl0bGU6IFRpdGxlLFxyXG4gICAgICAgIFNldHRpbmdzVGl0bGU6IFNldHRpbmdzVGl0bGUsXHJcbiAgICAgICAgU2V0dGluZ1N1YlRpdGxlOiBTZXR0aW5nU3ViVGl0bGUsXHJcbiAgICAgICAgVGFiczogVGFicyxcclxuICAgICAgICBDb2RlQmxvY2s6IENvZGVCbG9ja1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcblxyXG50eXBlIENvZGVCbG9ja1Byb3BzID0ge1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxufVxyXG5cclxubGV0IENvZGVCbG9ja01vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZUJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENvZGVCbG9ja1Byb3BzPiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkNvZGVCbG9ja1Byb3BzID0ge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcInBsYWludGV4dFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gQ29kZUJsb2NrTW9kdWxlcyB8fCAoQ29kZUJsb2NrTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5tYXJrdXApLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1lc3NhZ2VDb250ZW50KSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5zY3JvbGxiYXJHaG9zdEhhaXJsaW5lKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5oaWdobGlnaHQpLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLm1hcmdpbkJvdHRvbTgpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtZXNzYWdlTW9kdWxlMSxcclxuICAgICAgICAgICAgbWVzc2FnZU1vZHVsZTIsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhck1vZHVsZTEsXHJcbiAgICAgICAgICAgIGhpZ2h0bGlnaHRKUyxcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlMVxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMucHJvcHMubGFuZ3VhZ2UgPT09IFwicGxhaW50ZXh0XCIgPyA8Y29kZSBjbGFzc05hbWU9e2Ake3Njcm9sbGJhck1vZHVsZTEuc2Nyb2xsYmFyR2hvc3RIYWlybGluZX0gaGxqc2B9PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxyXG4gICAgICAgIDwvY29kZT4gOiA8Y29kZSBjbGFzc05hbWU9e2Ake3Njcm9sbGJhck1vZHVsZTEuc2Nyb2xsYmFyR2hvc3RIYWlybGluZX0gaGxqc2B9IFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaGlnaHRsaWdodEpTLmhpZ2hsaWdodCh0aGlzLnByb3BzLmxhbmd1YWdlLCB0aGlzLnByb3BzLmNvbnRlbnQpLnZhbHVlfX0gLz5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgJHttZXNzYWdlTW9kdWxlMS5tYXJrdXB9ICR7bWVzc2FnZU1vZHVsZTIubWVzc2FnZUNvbnRlbnR9YH0+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7Y29kZX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXJnaW5Nb2R1bGUxLm1hcmdpbkJvdHRvbTh9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzID0gW11cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJjb25zb2xlLmxvZyhcXFwiRXhlbXBsZSBjb2RlXFxcIilcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJqc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcInBsYWludGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4uQ29kZUJsb2NrLnByb3RvdHlwZS5tb2R1bGVzWzNdLmxpc3RMYW5ndWFnZXMoKS5maWx0ZXIoZSA9PiBlICE9PSBcImpzXCIpLm1hcChlID0+ICh7bGFuZ3VhZ2U6IGV9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTZXR0aW5nU3ViVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdTdWJUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTZXR0aW5nU3ViVGl0bGVQcm9wcz4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpTZXR0aW5nU3ViVGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLm1hcmdpblRvcDYwID09PSBcInN0cmluZ1wiKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImg1XCJdKSxcclxuICAgICAgICAgICAgd2luZG93LkxpZ2h0Y29yZC5BcGkuV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcInNpemUxNFwiXSksXHJcbiAgICAgICAgICAgIHdpbmRvdy5MaWdodGNvcmQuQXBpLldlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclN0YW5kYXJkXCJdKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlLFxyXG4gICAgICAgICAgICB0aXRsZU1vZHVsZSxcclxuICAgICAgICAgICAgc2l6ZU1vZHVsZSxcclxuICAgICAgICAgICAgY29sb3JNb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke2NvbG9yTW9kdWxlLmNvbG9yU3RhbmRhcmR9ICR7c2l6ZU1vZHVsZS5zaXplMTR9ICR7dGl0bGVNb2R1bGUuaDV9ICR7bWFyZ2luTW9kdWxlLm1hcmdpbkJvdHRvbTR9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCB7Y2xhc3NOYW1lfSwgcHJvcHMuY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIFNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NUaXRsZVByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogU2V0dGluZ3NUaXRsZVByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUubWFyZ2luVG9wNjAgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBtYXJnaW5Nb2R1bGVcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke21hcmdpbk1vZHVsZS5tYXJnaW5Ub3A2MH0gJHttYXJnaW5Nb2R1bGUubWFyZ2luQm90dG9tMjB9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogW1wiXCJdLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJFeGVtcGxlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGUsXHJcbiAgICB0YWJzOiB7bGFiZWw6IHN0cmluZywgaWQ6IHN0cmluZ31bXSxcclxuICAgIGFjdGl2ZT86IHN0cmluZ1xyXG4gICAgb25DaGFuZ2U/OiAodGFiOiBzdHJpbmcpID0+IHZvaWRcclxufSwge1xyXG4gICAgYWN0aXZlOiBzdHJpbmdcclxufT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcclxuICAgICAgICB0YWJzOiB7bGFiZWw6IFwiTm8gdGFicyB3YXMgcGFzc2VkIHRvIDxUYWJzPi5cIiwgaWQ6IFwibm9uZVwifSxcclxuICAgICAgICBhY3RpdmU6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1BcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWJzRWxlbWVudHM6VGFiW10gPSBbXVxyXG4gICAgXHJcbiAgICBnZXQgdGFicygpOlRhYnNbXCJwcm9wc1wiXVtcInRhYnNcIl17XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGFicyB8fCBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYih0YWI6c3RyaW5nKXtcclxuICAgICAgICBpZih0YWIgPT09IHRoaXMuc3RhdGUuYWN0aXZlKXJldHVyblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpdGhpcy5wcm9wcy5vbkNoYW5nZSh0YWIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdGFiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnRhYnNFbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBY3RpdmUodGFiID09PSBlLnByb3BzLmlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibGMtdGFiV3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxjLXRhYm5hdlwiIHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy50YWJzLm1hcCh0YWIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwge1RhYkNvbnRhaW5lcjogdGhpcywgdGl0bGU6IHRhYi5sYWJlbCwgaWQ6IHRhYi5pZCwga2V5OiBidG9hKHRhYi5sYWJlbCtcIjpcIit0YWIuaWQpfSlcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYy10YWJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9ICAgXHJcblxyXG4gICAgaXNBY3RpdmUodGFiKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hY3RpdmUgPT09IHRhYlxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogKDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBtYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzMHB4IDMwcHhcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibGMtdGFiLWJveC1zaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZT5QcmV2aWV3IHRhYnM8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFjdGl2ZSB0YWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJVbmFjdGl2ZSB0YWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBcIjFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh0YWJJZCkgPT4ge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3c1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XHJcbiAgICBUYWJDb250YWluZXI6IFRhYnMsIFxyXG4gICAgdGl0bGU6IHN0cmluZywgXHJcbiAgICBpZDogc3RyaW5nXHJcbn0sIHtcclxuICAgIGFjdGl2ZTogYm9vbGVhblxyXG59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvcHMuVGFiQ29udGFpbmVyLmlzQWN0aXZlKHByb3BzLmlkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5UYWJDb250YWluZXIudGFic0VsZW1lbnRzLnB1c2godGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUoaXNBY3RpdmU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogISFpc0FjdGl2ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBsYy1uYXZJdGVtYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgbGMtbmF2SXRlbUFjdGl2ZWBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgbGMtbmF2SXRlbUluYWN0aXZlYFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuVGFiQ29udGFpbmVyLmNoYW5nZVRhYih0aGlzLnByb3BzLmlkKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFRpdGxlUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZSxcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRpdGxlUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUaXRsZVByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuY29sb3JTdGFuZGFyZCA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLnNpemUzMiA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLmgyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgY29sb3JNb2R1bGUsXHJcbiAgICAgICAgICAgIHNpemVNb2R1bGUsXHJcbiAgICAgICAgICAgIHRpdGxlTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHtjb2xvck1vZHVsZS5jb2xvclN0YW5kYXJkfSAke3NpemVNb2R1bGUuc2l6ZTE0fSAke3RpdGxlTW9kdWxlLmgyfSAke3RpdGxlTW9kdWxlLmRlZmF1bHRDb2xvcn0gJHt0aXRsZU1vZHVsZS5kZWZhdWx0TWFyZ2luaDJ9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgKz0gXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcblxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRpdGxlUHJvcHMgPSB7XHJcbiAgICAgICAgY2hpbGRyZW46IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIkV4ZW1wbGUgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxubGV0IEJ1dHRvbk1vZHVsZXNcclxuXHJcbnR5cGUgQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZSxcclxuICAgIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcixcclxuICAgIGNvbG9yPzogQnV0dG9uQ29sb3IsXHJcbiAgICB3cmFwcGVyPzogYm9vbGVhbixcclxuICAgIGxvb2s/OiBCdXR0b25Mb29rLFxyXG4gICAgc2l6ZT86IEJ1dHRvblNpemUsXHJcbiAgICBob3ZlckNvbG9yPzogQnV0dG9uSG92ZXJzXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEJ1dHRvblByb3BzLCB7aG92ZXI6IGJvb2xlYW59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpCdXR0b25Qcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29sb3JzOkJ1dHRvbkNvbG9yW10gPSBbXCJicmFuZFwiLCBcImdyZXlcIiwgXCJyZWRcIiwgXCJncmVlblwiLCBcInllbGxvd1wiLCBcInByaW1hcnlcIiwgXCJsaW5rXCIsIFwid2hpdGVcIiwgXCJibGFja1wiLCBcInRyYW5zcGFyZW50XCJdXHJcbiAgICBzdGF0aWMgTG9va3M6QnV0dG9uTG9va1tdID0gW1wiZmlsbGVkXCIsIFwiaW52ZXJ0ZWRcIiwgXCJvdXRsaW5lZFwiLCBcImdob3N0XCIsIFwibGlua1wiLCBcImJsYW5rXCJdXHJcbiAgICBzdGF0aWMgU2l6ZXM6QnV0dG9uU2l6ZVtdID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiLCBcInhsYXJnZVwiLCBcIm1pblwiLCBcIm1heFwiLCBcImljb25cIiwgXCJub25lXCJdXHJcbiAgICBzdGF0aWMgSG92ZXJDb2xvcnM6IEJ1dHRvbkhvdmVyc1tdID0gW1wiZGVmYXVsdFwiLCAuLi5CdXR0b24uQ29sb3JzXVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7IC8vIGNhY2hpbmcgbW9kdWxlc1xyXG4gICAgICAgIHJldHVybiBCdXR0b25Nb2R1bGVzIHx8IChCdXR0b25Nb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiX2hvcml6b250YWxcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiY29sb3JUcmFuc3BhcmVudFwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJidXR0b25XcmFwcGVyXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIkJ1dHRvbkNvbG9yc1wiXSksXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBmbGV4TW9kdWxlLFxyXG4gICAgICAgICAgICBldWhNb2R1bGUxLFxyXG4gICAgICAgICAgICBidXR0b25Nb2R1bGUsXHJcbiAgICAgICAgICAgIGNvbG9yc01vZHVsZSxcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wczpCdXR0b25Qcm9wcyA9IHt9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgIGlmKFwiY29sb3JcIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gdGhpcy5wcm9wcy5jb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwiY2hpbGRyZW5cIiBpbiB0aGlzLnByb3BzKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwib25DbGlja1wiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DbGljayA9IHRoaXMucHJvcHMub25DbGlja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKFwid3JhcHBlclwiIGluIHRoaXMucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMud3JhcHBlciA9ICEhdGhpcy5wcm9wcy53cmFwcGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJsb29rXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5sb29rID0gdGhpcy5wcm9wcy5sb29rXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJzaXplXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zaXplID0gdGhpcy5wcm9wcy5zaXplXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoXCJob3ZlckNvbG9yXCIgaW4gdGhpcy5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gdGhpcy5wcm9wcy5ob3ZlckNvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmNvbG9yKXtcclxuICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBwcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkNvbG9yXHJcbiAgICAgICAgICAgIGlmKCFCdXR0b24uQ29sb3JzLmluY2x1ZGVzKHByb3BzLmNvbG9yKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jb2xvciA9IEJ1dHRvbi5Db2xvcnNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IEJ1dHRvbi5Db2xvcnNbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb3BzLmxvb2spe1xyXG4gICAgICAgICAgICBwcm9wcy5sb29rID0gcHJvcHMubG9vay50b0xvd2VyQ2FzZSgpIGFzIEJ1dHRvbkxvb2tcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Mb29rcy5pbmNsdWRlcyhwcm9wcy5sb29rKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5sb29rID0gQnV0dG9uLkxvb2tzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMubG9vayA9IEJ1dHRvbi5Mb29rc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocHJvcHMuc2l6ZSl7XHJcbiAgICAgICAgICAgIHByb3BzLnNpemUgPSBwcm9wcy5zaXplLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uU2l6ZVxyXG4gICAgICAgICAgICBpZighQnV0dG9uLlNpemVzLmluY2x1ZGVzKHByb3BzLnNpemUpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNpemUgPSBCdXR0b24uU2l6ZXNbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5zaXplID0gQnV0dG9uLlNpemVzWzBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9wcy5ob3ZlckNvbG9yKXtcclxuICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25Ib3ZlcnNcclxuICAgICAgICAgICAgaWYoIUJ1dHRvbi5Ib3ZlckNvbG9ycy5pbmNsdWRlcyhwcm9wcy5ob3ZlckNvbG9yKSl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID0gQnV0dG9uLkhvdmVyQ29sb3JzWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA9IEJ1dHRvbi5Ib3ZlckNvbG9yc1swXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvblNpemUgPSBwcm9wcy5zaXplID8gY29sb3JzTW9kdWxlLkJ1dHRvblNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV0gfHwgXCJcIiA6IFwiXCJcclxuICAgICAgICBpZihidXR0b25TaXplKWJ1dHRvblNpemUgPSBcIiBcIiArIGJ1dHRvblNpemVcclxuXHJcbiAgICAgICAgbGV0IGhvdmVyQ29sb3IgPSBwcm9wcy5ob3ZlckNvbG9yID8gY29sb3JzTW9kdWxlLkJ1dHRvbkhvdmVyc1twcm9wcy5ob3ZlckNvbG9yLnRvVXBwZXJDYXNlKCldIHx8IFwiXCIgOiBcIlwiXHJcbiAgICAgICAgaWYoaG92ZXJDb2xvcilob3ZlckNvbG9yID0gXCIgXCIgKyBob3ZlckNvbG9yXHJcblxyXG4gICAgICAgIHByb3BzLm9uQ2xpY2sgPSB0eXBlb2YgcHJvcHMub25DbGljayA9PT0gXCJmdW5jdGlvblwiID8gcHJvcHMub25DbGljayA6ICgpID0+IHt9XHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLndyYXBwZXIgIT09IFwiYm9vbGVhblwiKXByb3BzLndyYXBwZXIgPSB0cnVlXHJcblxyXG4gICAgICAgIGxldCBob3ZlciA9IHRoaXMuc3RhdGUuaG92ZXIgPyBldWhNb2R1bGUxLmhhc0hvdmVyIDogXCJcIlxyXG4gICAgICAgIGlmKGhvdmVyKWhvdmVyID0gXCIgXCIgKyBob3ZlclxyXG5cclxuICAgICAgICBsZXQgYnV0dG9uID0gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZmxleE1vZHVsZS5mbGV4Q2hpbGR9ICR7ZXVoTW9kdWxlMS5idXR0b259ICR7Y29sb3JzTW9kdWxlLkJ1dHRvbkxvb2tzW3Byb3BzLmxvb2sudG9VcHBlckNhc2UoKV19ICR7Y29sb3JzTW9kdWxlLkJ1dHRvbkNvbG9yc1twcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXX0ke2J1dHRvblNpemV9JHtob3ZlckNvbG9yfSR7aG92ZXJ9ICR7ZXVoTW9kdWxlMS5ncm93fWB9IFxyXG4gICAgICAgICAgICBzdHlsZT17e2ZsZXg6IFwiMCAxIGF1dG9cIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gb25Nb3VzZUVudGVyPXsoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFob3ZlckNvbG9yKXJldHVyblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IHRydWV9KVxyXG4gICAgICAgICAgICB9fSBvbk1vdXNlTGVhdmU9eyhldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWhvdmVyQ29sb3IpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V1aE1vZHVsZTEuY29udGVudHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBpZihwcm9wcy53cmFwcGVyKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtidXR0b25Nb2R1bGUuYnV0dG9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW11cclxuICAgICAgICAgICAgZm9yKGxldCBjb2xvciBvZiBCdXR0b24uQ29sb3JzKXtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChjb2xvcnMpXHJcbiAgICAgICAgICAgIGxldCBsb29rcyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgbG9vayBvZiBCdXR0b24uTG9va3Mpe1xyXG4gICAgICAgICAgICAgICAgbG9va3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vazogbG9va1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGxvb2tzKVxyXG4gICAgICAgICAgICBsZXQgc2l6ZXMgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IHNpemUgb2YgQnV0dG9uLlNpemVzKXtcclxuICAgICAgICAgICAgICAgIHNpemVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChzaXplcylcclxuICAgICAgICAgICAgbGV0IGhvdmVycyA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgaG92ZXIgb2YgQnV0dG9uLkhvdmVyQ29sb3JzKXtcclxuICAgICAgICAgICAgICAgIGhvdmVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBob3ZlckNvbG9yOiBob3ZlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKGhvdmVycylcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe2NoaWxkcmVuOiBcIlRlc3QgQnV0dG9uXCJ9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe29uQ2xpY2s6ICgpID0+IHt9fV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3t3cmFwcGVyOiBmYWxzZX1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQnV0dG9uQ29sb3IgPSBcImJyYW5kXCIgfCBcImdyZXlcIiB8IFwicmVkXCIgfCBcImdyZWVuXCIgfCBcInllbGxvd1wiIHwgXCJwcmltYXJ5XCIgfCBcImxpbmtcIiB8IFwid2hpdGVcIiB8IFwiYmxhY2tcIiB8IFwidHJhbnNwYXJlbnRcIlxyXG5leHBvcnQgdHlwZSBCdXR0b25Mb29rID0gXCJmaWxsZWRcIiB8IFwiaW52ZXJ0ZWRcIiB8IFwib3V0bGluZWRcIiB8IFwiZ2hvc3RcIiB8IFwibGlua1wiIHwgXCJibGFua1wiXHJcbmV4cG9ydCB0eXBlIEJ1dHRvblNpemUgPSBcIm5vbmVcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgfCBcInhsYXJnZVwiIHwgXCJtaW5cIiB8IFwibWF4XCIgfCBcImljb25cIlxyXG5leHBvcnQgdHlwZSBCdXR0b25Ib3ZlcnMgPSBcImRlZmF1bHRcIiB8IEJ1dHRvbkNvbG9yIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5pbXBvcnQgdW5mcmVlemUgZnJvbSBcIi4uLy4uL21vZHVsZXMvVW5mcmVlemVcIlxyXG5cclxudHlwZSBEcm9wZG93blByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgdmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBvcHRpb25SZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBtdWx0aVZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hhYmxlPzogYm9vbGVhbixcclxuICAgIGNsZWFyYWJsZT86IGJvb2xlYW4sXHJcbiAgICBzdHlsZU92ZXJyaWRlcz86IENTU1Byb3BlcnRpZXMsXHJcbiAgICBsaWdodFRoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgZGFya1RoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgaXNNdWx0aT86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSB0aGVtZU92ZXJyaWRlID0ge1xyXG4gICAgbmV1dHJhbDA6IHN0cmluZyxcclxuICAgIG5ldXRyYWw1OiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMTA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwyMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDMwOiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5MjU6IHN0cmluZyxcclxuICAgIHByaW1hcnk1MDogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBtZW51QmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgbWVudUJvcmRlcjogc3RyaW5nLFxyXG4gICAgc2Nyb2xsQmFyVGh1bWI6IHN0cmluZyxcclxuICAgIG11bHRpT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBEcm9wZG93bk1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJvcGRvd25Qcm9wcywge3ZhbHVlOiBzdHJpbmd8bnVsbH0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkRyb3Bkb3duUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOkRyb3Bkb3duUHJvcHMgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIG9wdGlvbnM6IFt7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5vIG9wdGlvbnMgLSBObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gRHJvcGRvd24uIElmIHlvdSBtZWFudCB0byBwdXQgYW4gZW1wdHkgZHJvcGRvd24sIGlucHV0IGFuIGVtcHR5IGFycmF5LlwiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgdmFsdWVSZW5kZXJlcjogbnVsbCxcclxuICAgICAgICBtdWx0aVZhbHVlUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb3B0aW9uUmVuZGVyZXI6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVPdmVycmlkZXM6IG51bGwsXHJcbiAgICAgICAgbGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzOiBudWxsLFxyXG4gICAgICAgIGlzTXVsdGk6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gRHJvcGRvd25Nb2R1bGVzIHx8IChEcm9wZG93bk1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU2VsZWN0VGVtcFdyYXBwZXJcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgRHJvcGRvd25Db21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSA8RHJvcGRvd25Db21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJBbiBlcnJvciBvY2N1cmVkXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3B0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBpc011bHRpOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxuXHJcbnR5cGUgUmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBjb2xvcj86IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBkZXNjPzogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzaXplPzogXCJzbWFsbFwifFwibWVkaXVtXCIsXHJcbiAgICBpdGVtVHlwZT86IFwiYmFyXCJ8XCJwYW5lbFwiLFxyXG4gICAgaW5mb0NsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgUmFkaW9Hcm91cE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJhZGlvR3JvdXBQcm9wcywge3ZhbHVlPzogc3RyaW5nfT4ge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpSYWRpb0dyb3VwUHJvcHMgPSB7XHJcbiAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIk5vIG9wdGlvbnNcIixcclxuICAgICAgICAgICAgZGVzYzogXCJObyBvcHRpb25zIHdhcyBwYXNzZWQgdG8gQ2hvaWNlcy4gSWYgeW91IG1lYW50IHRvIGRpc3BsYXkgbm8gb3B0aW9ucyBhdCBhbGwsIHBsZWFzZSBwYXNzIGFuIGVtcHR5IGFycmF5LlwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZjA0NzQ3XCJcclxuICAgICAgICB9XSxcclxuICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgc2l6ZTogXCJtZWRpdW1cIixcclxuICAgICAgICBpdGVtVHlwZTogXCJiYXJcIixcclxuICAgICAgICBpbmZvQ2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpSYWRpb0dyb3VwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXYudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBldi52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gUmFkaW9Hcm91cE1vZHVsZSB8fCAoUmFkaW9Hcm91cE1vZHVsZSA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJSYWRpb0dyb3VwXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFJhZGlvR3JvdXBDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPFJhZGlvR3JvdXBDb21wb25lbnQgb3B0aW9ucz17cHJvcHMub3B0aW9uc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IFxyXG4gICAgICAgICAgICBzaXplPXtSYWRpb0dyb3VwQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IGl0ZW1UeXBlPXtSYWRpb0dyb3VwQ29tcG9uZW50Lkl0ZW1UeXBlc1twcm9wcy5pdGVtVHlwZS50b1VwcGVyQ2FzZSgpXX0gXHJcbiAgICAgICAgICAgIGluZm9DbGFzc05hbWU9e3Byb3BzLmluZm9DbGFzc05hbWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKTpzdHJpbmd8bnVsbHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3B0aW9uIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJkZXNjcmlwdGlvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwib3B0aW9uMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk9wdGlvbiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzY3JpcHRpb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm9wdGlvbjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcHRpb24gM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2NyaXB0aW9uIDNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJvcHRpb24xXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1lZGl1bVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcImJhclwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1UeXBlOiBcInBhbmVsXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIHJldHVybiBBbGxQcmV2aWV3c1xyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxufVxyXG5sZXQgQWxsUHJldmlld3MiLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTd2l0Y2hQcm9wcyA9IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogYm9vbGVhbixcclxuICAgIGZpbGw/OiBzdHJpbmcsXHJcbiAgICB0aGVtZT86IFwiZGVmYXVsdFwifFwiY2xlYXJcIixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIixcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5sZXQgU3dpdGNoTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3dpdGNoUHJvcHMsIHt2YWx1ZTogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlN3aXRjaFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBTd2l0Y2hNb2R1bGVzIHx8IChTd2l0Y2hNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlN3aXRjaFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBTd2l0Y2hDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKDxTd2l0Y2hDb21wb25lbnQgaWQ9e3Byb3BzLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgfHwgZmFsc2V9IGZpbGw9e3Byb3BzLmZpbGx9IFxyXG4gICAgICAgICAgICB0aGVtZT17U3dpdGNoQ29tcG9uZW50LlRoZW1lc1twcm9wcy50aGVtZS50b1VwcGVyQ2FzZSgpXX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHNpemU9e1N3aXRjaENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBzdHlsZT17cHJvcHMuc3R5bGV9Lz4pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIXRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWxsOiBudWxsLFxyXG4gICAgICAgIHRoZW1lOiBcImRlZmF1bHRcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIHN0eWxlOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7b25DaGFuZ2U6ICh2YWx1ZSkgPT4ge319XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBcImNsZWFyXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy1zd2l0Y2hcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGZpbGw6IG51bGxcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIm1pbmlcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfVxyXG59XHJcbmxldCBBbGxQcmV2aWV3cyIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dEFyZWFQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW4sXHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbixcclxuICAgIGZsZXg/OiBib29sZWFuLFxyXG4gICAgYXV0b3NpemU/OiBmYWxzZSxcclxuICAgIHJvd3M/OiBudW1iZXIsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uS2V5RG93bj86IChldikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dEFyZWFNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRBcmVhUHJvcHMsIHt2YWx1ZTogc3RyaW5nfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6VGV4dEFyZWFQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0QXJlYU1vZHVsZXMgfHwgKFRleHRBcmVhTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0QXJlYVwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSwgbmFtZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldiwgbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2LCBuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbktleURvd24oZXYpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGV2KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbktleURvd249e3RoaXMub25LZXlEb3dufSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlIHx8IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOlRleHRBcmVhUHJvcHMgPSB7XHJcbiAgICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcclxuICAgICAgICBmbGV4OiBmYWxzZSxcclxuICAgICAgICBhdXRvc2l6ZTogZmFsc2UsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBOT09QLFxyXG4gICAgICAgIG9uRm9jdXM6IE5PT1AsXHJcbiAgICAgICAgb25CbHVyOiBOT09QLFxyXG4gICAgICAgIG9uS2V5RG93bjogTk9PUFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCBBbGxQcmV2aWV3cygpe1xyXG4gICAgICAgIHJldHVybiBBbGxQcmV2aWV3cyB8fCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cyA9IFtdXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiYXBpLXByZXZpZXctdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbnVsbFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZWFibGU6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGZsZXg6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGF1dG9zaXplOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvc2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgQWxsUHJldmlld3MucHVzaChbe1xyXG4gICAgICAgICAgICAgICAgcm93czogM1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICByb3dzOiAyXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvd3M6IDFcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJFeGFtcGxlIGVycm9yXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogMTAwXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIEFsbFByZXZpZXdzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lOiBcIlwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJhcGktcHJldmlldy10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBUZXh0SW5wdXRQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCJcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGlucHV0Q2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uQmx1cj86IChldiwgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBUZXh0SW5wdXRNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGV4dElucHV0UHJvcHMsIHt2YWx1ZTogc3RyaW5nfT4ge1xyXG4gICAgaGFzU2V0OiBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVGV4dElucHV0UHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wczpUZXh0SW5wdXRQcm9wcyA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBtYXhMZW5ndGg6IDk5OSxcclxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgaW5wdXRDbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgb25DaGFuZ2U6IE5PT1AsXHJcbiAgICAgICAgb25Gb2N1czogTk9PUCxcclxuICAgICAgICBvbkJsdXI6IE5PT1BcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0SW5wdXRNb2R1bGVzIHx8IChUZXh0SW5wdXRNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlRleHRJbnB1dFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5oYXNTZXQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIG5hbWUsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5oYXNTZXQpcmV0dXJuIC8vIHByZXZlbnQgZXZlbnQgaWYgdGhlIG9uQ2hhbmdlIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZS5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGV2LCBuYW1lLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxUZXh0QXJlYUNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSAvPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlIHx8IFwiXCJcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgQWxsUHJldmlld3MoKXtcclxuICAgICAgICByZXR1cm4gQWxsUHJldmlld3MgfHwgKCgpID0+IHtcclxuICAgICAgICAgICAgQWxsUHJldmlld3MgPSBbXVxyXG4gICAgICAgICAgICBBbGxQcmV2aWV3cy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImFwaS1wcmV2aWV3LXRleHRpbnB1dFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiRXhhbXBsZSBlcnJvclwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA5OTlcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCJcclxuICAgICAgICAgICAgfV0sIFt7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzTmFtZTogXCJcIlxyXG4gICAgICAgICAgICB9XSwgW3tcclxuICAgICAgICAgICAgICAgIGlkOiBcImFwaS1wcmV2aWV3LXRleHRpbnB1dFwiXHJcbiAgICAgICAgICAgIH1dLCBbe1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHt9XHJcbiAgICAgICAgICAgIH1dKVxyXG4gICAgICAgICAgICByZXR1cm4gQWxsUHJldmlld3NcclxuICAgICAgICB9KSgpXHJcbiAgICB9XHJcbn1cclxubGV0IEFsbFByZXZpZXdzIiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IFBsdWdpblV0aWxpdGllcyBmcm9tIFwiLi9tb2R1bGVzL1BsdWdpblV0aWxpdGllc1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzLFxyXG4gICAgdXVpZDogdXVpZCxcclxuICAgIFV0aWxzOiBVdGlsc1xyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgUmVhY3Q6dHlwZW9mIGltcG9ydChcInJlYWN0XCIpXHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBMaWdodGNvcmQ6IHtcclxuICAgICAgICAgICAgRGlzY29yZE1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSW50ZXJuYWwgRGlzY29yZCdzIGRpc3BhdGNoZXIgLSBjYW4gYmUgdXNlZCB0byBzdWJzY3JpYmUgdG8gZ2F0ZXdheSBldmVudHMgLyBjbGllbnQgZXZlbnRzLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3N1YnNjcmlwdGlvbnM6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICBfd2FpdFF1ZXVlOiAoKCkgPT4gdm9pZClbXSxcclxuICAgICAgICAgICAgICAgICAgICBfcHJvY2Vzc2luZ1dhaXRRdWV1ZTogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudERpc3BhdGNoQWN0aW9uVHlwZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBfb3JkZXJlZEFjdGlvbkhhbmRsZXJzOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgX29yZGVyZWRDYWxsYmFja1Rva2VuczogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIF9sYXN0SUQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBfZGVwZW5kZW5jeUdyYXBoOiBhbnlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlzcGF0Y2hpbmcoKTpib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIElmIHRoZSBkaXNwYXRjaGVyIGlzbid0IGRpc3BhdGNoaW5nLCB0aGVuIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVEaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXYWl0IHVudGlsIHRoZSBkaXNwYXRjaGVyIGZpbmlzaGVkIGRpc3BhdGNoaW5nLCB0aGVuIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHlEaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBkaXNwYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiBTYW1lIGFzIGRpc3BhdGNoZXIuZGlzcGF0Y2ggKi9cclxuICAgICAgICAgICAgICAgICAgICBfZGlzcGF0Y2goZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogSW50ZXJjZXB0IGV2ZW50cyBiZWZvcmUgdGhleSBoYXBwZW5zLCBpZiByZXR1cm5pbmcgdHJ1ZSwgdGhlbiB0aGUgZXZlbnQgd2lsbCBiZSBibG9ja2VkIGZyb20gZGlzcGF0Y2hpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJjZXB0b3IoaW50ZXJjZXB0b3I6IChldmVudCkgPT4gYm9vbGVhbik6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXYWl0IHVudGlsIHRoZSBkaXNwYXRjaGVyIGhhcyBmaW5pc2hlZCBkaXNwYXRjaGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHdhaXQod2FpdGluZzogKCkgPT4gdm9pZCk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKiogU3Vic2NyaWJlIHRvIGFuIGV2ZW50ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgZXZlbnQuIFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBhY3Rpb25IYW5kbGVyOiBhbnksIHN0b3JlRGlkQ2hhbmdlOiBhbnkpOnZvaWRcclxuICAgICAgICAgICAgICAgICAgICBhZGREZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgX2ludmFsaWRhdGVDYWNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3NXYWl0UXVldWUsXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbXB1dGVPcmRlcmVkQWN0aW9uSGFuZGxlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbXB1dGVPcmRlcmVkQ2FsbGJhY2tUb2tlbnNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25zdGFudHM6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZENvbnN0YW50c1R5cGVzXCIpLmRlZmF1bHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGRldk1vZGU6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBjYWxsUmluZ2luZ0JlYXQ6IGJvb2xlYW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQXBpOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIExpZ2h0Y29yZCdzIGF1dG9yaXphdGlvbiBmb3IgbGlnaHRjb3JkJ3Mgc2VydmVyc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdhaXRzIHVudGlsIHRoZSBmaXJzdCBtb2R1bGUgdGhhdCBtYXRjaCB0aGUgZmlsdGVyIGdldHMgZXhwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0aGF0IHNwZWNpZmllcyB0aGUgbW9kdWxlIHRvIG1hdGNoLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBlbnN1cmVFeHBvcnRlZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTpQcm9taXNlPGFueT5cclxuICAgICAgICAgICAgfSAmIHR5cGVvZiBMaWdodGNvcmRBcGlcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJETW9kdWxlczoge1xyXG4gICAgICAgICAgICBtb2R1bGVzOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoZmlsdGVyOihtb2Q6YW55KT0+Ym9vbGVhbiwgbW9kdWxlcz86YW55W10pOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoaWQ6bnVtYmVyLCBtb2R1bGVzPzphbnlbXSk6YW55LFxyXG4gICAgICAgICAgICBnZXQoaWRzOiBbbnVtYmVyfCgobW9kOmFueSk9PmJvb2xlYW4pXSwgbW9kdWxlcz86YW55W10pOmFueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRjb3JkQXBpXHJcblxyXG5PYmplY3QuYXNzaWduKHdpbmRvdy5MaWdodGNvcmQuQXBpLCBMaWdodGNvcmRBcGkpIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUGx1Z2luVXRpbGl0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzKHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzKVxyXG4gICAgICAgIGxldCBlbGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7a2V5OiB1dWlkKCl9LCBpdGVtcylcclxuICAgICAgICByZXR1cm4gVXRpbHMuUmVhY3RUb0hUTUxFbGVtZW50KGVsZW0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFtdXHJcbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBpdGVtICE9PSBcIm9iamVjdFwiKXJldHVybiBpdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgIGlmKGl0ZW0ucHJvcHMgJiYgXCJjaGlsZHJlblwiIGluIGl0ZW0ucHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkoaXRlbS5wcm9wcy5jaGlsZHJlbikpaXRlbS5wcm9wcy5jaGlsZHJlbiA9IFtpdGVtLnByb3BzLmNoaWxkcmVuXVxyXG4gICAgICAgICAgICAgICAgaXRlbS5wcm9wcy5jaGlsZHJlbiA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KGl0ZW0ucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWl0ZW0ucHJvcHMpaXRlbS5wcm9wcyA9IHt9XHJcbiAgICAgICAgICAgIGl0ZW0ucHJvcHMua2V5ID0gdXVpZCgpXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBVdGlscy5nZXROZXN0ZWRQcm9wcyhjb21wb25lbnRzLCBpdGVtLmNvbXBvbmVudClcclxuICAgICAgICAgICAgaWYoIWNvbXBvbmVudCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2FybmluZyA9IG5ldyBUZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgV2FybmluZzogTm8gY29tcG9uZW50IHdhcyBmb3VuZCBmb3I6IFwiJHtpdGVtLmNvbXBvbmVudH1cIi4gUGxlYXNlIGNvcnJlY3QgeW91ciBjb2RlLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGBXYXJuaW5nOiBObyBjb21wb25lbnQgd2FzIGZvdW5kIGZvcjogXCIke2l0ZW0uY29tcG9uZW50fVwiLiBQbGVhc2UgY29ycmVjdCB5b3VyIGNvZGUuYFxyXG4gICAgICAgICAgICAgICAgfSkucmVuZGVyKClcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2god2FybmluZylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIE9iamVjdC5jcmVhdGUoaXRlbS5wcm9wcykpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0dGluZ0l0ZW0gPSB7XHJcbiAgICBjb21wb25lbnQ6IHN0cmluZyxcclxuICAgIHByb3BzOiBDb21wb25lbnRQcm9wczxhbnk+XHJcbn0iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKVxyXG5pbXBvcnQgUGx1Z2luVXRpbGl0aWVzIGZyb20gXCIuL1BsdWdpblV0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFV0aWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIFJlYWN0VG9IVE1MRWxlbWVudChSZWFjdEVsZW1lbnQ6IFJlYWN0RWxlbWVudCl7ICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0RWxlbWVudCwgZWxlbWVudClcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQbHVnaW5VdGlscygpe3JldHVybiBQbHVnaW5VdGlsaXRpZXN9XHJcblxyXG4gICAgZ2V0TmVzdGVkUHJvcHMob2JqOmFueSwgcGF0aDogc3RyaW5nKXtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiLlwiKVxyXG4gICAgICAgIGZvcihsZXQgc2VnIG9mIHNlZ21lbnRzKXtcclxuICAgICAgICAgICAgb2JqID0gb2JqICYmIChzZWcgaW4gb2JqKSA/IG9ialtzZWddIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxufSIsImNvbnN0IEJETW9kdWxlcyA9IHdpbmRvdy5CRE1vZHVsZXNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBXZWJwYWNrTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIGdldChpZDogbnVtYmVyKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoaWQpXHJcbiAgICB9XHJcbiAgICBmaW5kKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChmaWx0ZXIpWzBdXHJcbiAgICB9XHJcbiAgICBmaW5kQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pWzBdXHJcbiAgICB9XHJcbiAgICBmaWx0ZXIoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55W117XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOT09QKCl7fSIsImltcG9ydCAqIGFzIHV1aWR2MSBmcm9tIFwidXVpZC92MVwiXHJcbmltcG9ydCAqIGFzIHV1aWR2NCBmcm9tIFwidXVpZC92NFwiXHJcblxyXG50eXBlIHV1aWRGdW5jID0gKCkgPT4gc3RyaW5nXHJcbmxldCB1dWlkOnV1aWRGdW5jICYge3YxOiB1dWlkRnVuYywgdjQ6IHV1aWRGdW5jfSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB1dWlkdjQoKVxyXG59LCB7djE6ICgpID0+IHV1aWR2MSgpLCB2NDogKCkgPT4gdXVpZHY0KCl9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXVpZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9