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
        SettingsTitle: SettingsTitle_1.default
    }
};


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
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let TitleModules;
class SettingsTitle extends React.Component {
    constructor(props) {
        super(props);
        props = SettingsTitle.normalizeProps(props);
        this.state = Object.create(props);
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props || typeof props !== "object")
            props = { children: [] };
        if (typeof props.className !== "string")
            delete props.className;
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
    }
    get modules() {
        return TitleModules || (TitleModules = [
            WebpackLoader_1.default.find(e => typeof e.marginTop60 === "string")
        ]);
    }
    render() {
        let [marginModule] = this.modules;
        let props = SettingsTitle.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = Object.create(props);
        }
        let className = `${marginModule.marginTop60} ${marginModule.marginBottom20}`;
        if (props.className)
            className = +" " + props.className;
        return React.createElement(Title_1.default, { className }, props.children);
    }
}
exports.default = SettingsTitle;


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
const uuid_1 = __webpack_require__(/*! ../../modules/uuid */ "./src/modules/uuid.ts");
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let TitleModules;
class Title extends React.Component {
    constructor(props) {
        super(props);
        props = Title.normalizeProps(props);
        this.state = Object.create(props);
    }
    get key() {
        return this._key || uuid_1.default();
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props || typeof props !== "object")
            props = { children: [] };
        if (!props.children)
            props.children = [];
        if (typeof props.className !== "string")
            props.className = "";
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
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
        let props = Title.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = props;
        }
        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h2} ${titleModule.defaultColor} ${titleModule.defaultMarginh2}`;
        if (props.className)
            className += " " + props.className;
        return React.createElement("h2", { className, key: this.key }, props.children);
    }
}
exports.default = Title;


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
        if (props.color) {
            props.color = props.color.toLowerCase();
            if (!["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"].includes(props.color)) {
                props.color = "brand";
            }
        }
        else {
            props.color = "brand";
        }
        props.onClick = typeof props.onClick === "function" ? props.onClick : () => { };
        super(props);
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
        return (React.createElement("div", { className: buttonModule.buttonWrapper },
            React.createElement("button", { type: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${euhModule1.lookFilled} ${colorsModule.ButtonColors[this.props.color.toUpperCase()]} ${euhModule1.sizeSmall} ${euhModule1.grow}`, style: { flex: "0 1 auto" }, onClick: this.props.onClick },
                React.createElement("div", { className: euhModule1.contents }, this.props.text))));
    }
    static get AllPreviews() {
        return AllPreviews || (AllPreviews = []);
    }
}
exports.default = Button;


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
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let DropdownModules;
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        props = Dropdown.normalizeProps(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props || typeof props !== "object")
            props = {};
        if (typeof props.className !== "string")
            delete props.className;
        if (typeof props.darkThemeColorOverrides !== "object" || !props.darkThemeColorOverrides)
            delete props.darkThemeColorOverrides;
        if (typeof props.disabled !== "boolean")
            props.disabled = false;
        if (typeof props.error !== "string")
            delete props.error;
        if (typeof props.isMulti !== "boolean")
            props.isMulti = false;
        if (typeof props.lightThemeColorOverrides !== "object" || !props.lightThemeColorOverrides)
            delete props.lightThemeColorOverrides;
        if (typeof props.multiValueRenderer !== "function")
            delete props.multiValueRenderer;
        if (typeof props.valueRenderer !== "function")
            delete props.valueRenderer;
        if (typeof props.optionRenderer !== "function")
            delete props.optionRenderer;
        if (typeof props.onChange !== "function")
            props.onChange = noop_1.default;
        if (!Array.isArray(props.options))
            props.options = [{
                    value: "none",
                    "label": "No options - No options was passed to Dropdown. If you meant to put an empty dropdown, input an empty array."
                }];
        if (typeof props.searchable !== "boolean")
            props.searchable = false;
        if (typeof props.styleOverrides !== "object")
            delete props.styleOverrides;
        if (typeof props.value !== "string")
            props.value = null;
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
    }
    onChange(value) {
        console.log(value);
        this.state.onChange(value);
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
        let props = Dropdown.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = Object.create(props);
        }
        return React.createElement(DropdownComponent, Object.assign({}, this.props, { onChange: this.onChange }));
    }
    get value() {
        return this.state.value;
    }
}
exports.default = Dropdown;


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
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let RadioGroupModule;
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        props = RadioGroup.normalizeProps(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props || typeof props !== "object")
            props = {};
        let defaultOptions = false;
        if (!props.options || !Array.isArray(props.options)) {
            props.options = [{
                    value: "none",
                    name: "No options",
                    desc: "No options was passed to Choices. If you meant to display no options at all, please pass an empty array.",
                    color: "#f04747"
                }];
            defaultOptions = true;
        }
        if (!props.value || typeof props.value !== "string") {
            if (defaultOptions) {
                props.value = "none";
            }
            else {
                props.value = null;
            }
        }
        if (typeof props.disabled !== "boolean")
            props.disabled = false;
        if (typeof props.size !== "string" || !["small", "medium"].includes(props.size.toLowerCase()))
            props.size = "medium";
        if (typeof props.itemType !== "string" || !["bar", "panel"].includes(props.itemType))
            props.itemType = "bar";
        if (typeof props.infoClassName !== "string")
            props.infoClassName = "";
        if (!props.onChange || typeof props.onChange !== "function")
            props.onChange = noop_1.default;
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
    }
    onChange(ev) {
        this.state.onChange(ev.value);
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
        let props = RadioGroup.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = Object.create(props);
        }
        return React.createElement(RadioGroupComponent, { options: props.options, onChange: this.onChange, value: props.value, disabled: props.disabled, size: RadioGroupComponent.Sizes[props.size.toUpperCase()], itemType: RadioGroupComponent.ItemTypes[props.itemType.toUpperCase()], infoClassName: props.infoClassName });
    }
    get value() {
        return this.state.value;
    }
}
exports.default = RadioGroup;


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
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let SwitchModules;
class Switch extends React.Component {
    constructor(props) {
        super(props);
        props = Switch.normalizeProps(props);
        this.state = Object.create(props);
        this.onChange = this.onChange.bind(this);
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props)
            props = {};
        if (!props.id || typeof props.id !== "string")
            props.id = null;
        if (!props.onChange || typeof props.onChange !== "function")
            props.onChange = noop_1.default;
        if (!props.value || typeof props.value !== "boolean")
            props.value = false;
        if (!props.fill || typeof props.fill !== "string")
            props.fill = null;
        if (!props.theme || !["default", "clear"].includes(props.theme.toLowerCase()))
            props.theme = "default";
        if (!("disabled" in props) || typeof props.disabled !== "boolean")
            props.disabled = false;
        if (!props.className || typeof props.className !== "string")
            props.className = "";
        if (!props.size || !["default", "mini"].includes(props.size.toLowerCase()))
            props.size = "default";
        if (!props.style || typeof props.style !== "object")
            props.style = {};
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
    }
    get modules() {
        return SwitchModules || (SwitchModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "Switch").default
        ]);
    }
    render() {
        let [SwitchComponent] = this.modules;
        let props = Switch.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = Object.create(props);
        }
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
}
exports.default = Switch;


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
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let TextAreaModules;
class TextArea extends React.Component {
    constructor(props) {
        super(props);
        props = TextArea.normalizeProps(props);
        this.state = Object.create(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props)
            props = {};
        if (!props.name || typeof props.name !== "string")
            props.name = "";
        if (!props.disabled || typeof props.disabled !== "boolean")
            props.disabled = false;
        if (typeof props.placeholder !== "string")
            props.placeholder = "";
        if (typeof props.autoFocus !== "boolean")
            props.autoFocus = false;
        if (typeof props.resizeable !== "boolean")
            props.resizeable = false;
        if (typeof props.flex !== "boolean")
            props.flex = false;
        if (typeof props.autosize !== "boolean")
            props.autosize = false;
        if (typeof props.rows !== "number")
            props.rows = 3;
        if (typeof props.value !== "string")
            props.value = "";
        if (typeof props.error !== "string")
            props.error = null;
        if (props.maxLength && typeof props.maxLength !== "number")
            props.maxLength = 999;
        if (typeof props.className !== "string")
            props.className = "";
        if (typeof props.id !== "string")
            props.id = null;
        if (typeof props.onChange !== "function")
            props.onChange = noop_1.default;
        if (typeof props.onFocus !== "function")
            props.onFocus = noop_1.default;
        if (typeof props.onBlur !== "function")
            props.onBlur = noop_1.default;
        if (typeof props.onKeyDown !== "function")
            props.onKeyDown = noop_1.default;
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
    }
    get modules() {
        return TextAreaModules || (TextAreaModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextArea").default
        ]);
    }
    onChange(value, name) {
        this.state.onChange(value, name);
        this.setState({
            value
        });
    }
    onFocus(ev, name) {
        this.state.onFocus(ev, name);
    }
    onBlur(ev, name) {
        this.state.onBlur(ev, name);
    }
    onKeyDown(ev) {
        this.state.onKeyDown(ev);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = TextArea.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = Object.create(props);
        }
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown }));
    }
    get value() {
        return this.state.value;
    }
}
exports.default = TextArea;


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
const Utils_1 = __webpack_require__(/*! ../../modules/Utils */ "./src/modules/Utils.ts");
let TextInputModules;
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        props = TextInput.normalizeProps(props);
        this.state = props;
        console.log(this.state);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    static normalizeProps(props) {
        props = Object.create(props);
        if (!props)
            props = {};
        if (!props.name || typeof props.name !== "string")
            props.name = "";
        if (!props.size || !["default", "mini"].includes(props.size))
            props.size = "default";
        if (!props.disabled || typeof props.disabled !== "boolean")
            props.disabled = false;
        if (typeof props.placeholder !== "string")
            props.placeholder = "";
        if (typeof props.value !== "string")
            props.value = "";
        if (typeof props.error !== "string")
            props.error = null;
        if (props.maxLength && typeof props.maxLength !== "number")
            props.maxLength = 999;
        if (typeof props.className !== "string")
            props.className = "";
        if (typeof props.inputClassName !== "string")
            props.inputClassName = "";
        if (typeof props.id !== "string")
            props.id = null;
        if (typeof props.onChange !== "function")
            props.onChange = noop_1.default;
        if (typeof props.onFocus !== "function")
            props.onFocus = noop_1.default;
        if (typeof props.onBlur !== "function")
            props.onBlur = noop_1.default;
        let levels = [props];
        while (Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join("."))) {
            levels.push(Utils_1.default.getNestedProps(props, levels.map(e => "__proto__").join(".")));
        }
        let finals = Object.assign({}, ...levels);
        return finals;
    }
    get modules() {
        return TextInputModules || (TextInputModules = [
            WebpackLoader_1.default.find(e => e.default && e.default.displayName === "TextInput").default
        ]);
    }
    onChange(value, name) {
        this.hasSet = false;
        this.state.onChange(value, name, this);
        if (this.hasSet)
            return; // prevent event if the onChange has changed the value.
        this.setState({
            value
        });
        this.forceUpdate();
    }
    onFocus(ev, name) {
        this.state.onFocus(ev, name, this);
    }
    onBlur(ev, name) {
        this.state.onBlur(ev, name, this);
    }
    render() {
        let [TextAreaComponent] = this.modules;
        let props = TextInput.normalizeProps(this.state || this.props);
        if (!this.state) {
            this.state = props;
        }
        console.log(props);
        return React.createElement(TextAreaComponent, Object.assign({}, props, { onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur }));
    }
    get value() {
        return this.state.value;
    }
    setValue(value) {
        this.setState({
            value: value
        });
        this.forceUpdate();
        this.hasSet = true;
    }
}
exports.default = TextInput;


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
            console.log(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2FsaWFzL3JlYWN0LWRvbS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvU2V0dGluZ3NUaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvUmFkaW9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1N3aXRjaC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvUGx1Z2luVXRpbGl0aWVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1V0aWxzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1dlYnBhY2tMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvbm9vcC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy91dWlkLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcInV1aWQvdjFcIiIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3Y0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGlCQUFTLE1BQU0sQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUErQjs7Ozs7Ozs7Ozs7Ozs7O0FDRDVELGtHQUEyQztBQUMzQyxrR0FBb0M7QUFDcEMsOEdBQTRDO0FBQzVDLHdHQUF3QztBQUN4QywyR0FBMEM7QUFDMUMsd0dBQXdDO0FBQ3hDLGlHQUFtQztBQUNuQyx5SEFBbUQ7QUFFbkQsa0JBQWU7SUFDWCxNQUFNLEVBQUU7UUFDSixNQUFNLEVBQUUsZ0JBQWE7UUFDckIsTUFBTSxFQUFF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RSxFQUFFO1lBQ3pCLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsRUFBQztnQkFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSTtnQkFDcEIsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUM7b0JBQ2xCLElBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7d0JBQUMsU0FBUyxHQUFHLEtBQUs7aUJBQ2hGO2dCQUNELElBQUcsU0FBUztvQkFBQyxPQUFPLElBQUk7YUFDM0I7WUFDRCxLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztnQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO29CQUFDLE9BQU8sS0FBSzthQUNuRTtZQUNELE9BQU8sSUFBSTtRQUNmLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDNUNELFNBQXdCLElBQUksS0FBRyxDQUFDO0FBQWhDLHVCQUFnQzs7Ozs7Ozs7Ozs7Ozs7O0FDQWhDLDZEQUFpQztBQUNqQyw2REFBaUM7QUFHakMsSUFBSSxJQUFJLEdBQTJDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0QsT0FBTyxNQUFNLEVBQUU7QUFDbkIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxDQUFDO0FBRTVDLGtCQUFlLElBQUk7Ozs7Ozs7Ozs7OztBQ1JuQixvQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBiYWl0IHR5cGVzY3JpcHQgaW50byB0aGlua2luZyB0aGlzIGlzIG5vdCByZWFjdERPTSBzbyBubyBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG5leHBvcnQgPSB3aW5kb3dbXCJSZWFjXCIrXCJ0RE9NXCJdIGFzIHR5cGVvZiBpbXBvcnQoXCJyZWFjdC1kb21cIikiLCJpbXBvcnQgRGlzY29yZEJ1dHRvbiBmcm9tIFwiLi9pbnB1dHMvQnV0dG9uXCJcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi9pbnB1dHMvU3dpdGNoXCJcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4vaW5wdXRzL1JhZGlvR3JvdXBcIlxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vaW5wdXRzL1RleHRBcmVhXCJcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9pbnB1dHMvVGV4dElucHV0XCJcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL2lucHV0cy9Ecm9wZG93blwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9nZW5lcmFsL1RpdGxlXCJcclxuaW1wb3J0IFNldHRpbmdzVGl0bGUgZnJvbSBcIi4vZ2VuZXJhbC9TZXR0aW5nc1RpdGxlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGlucHV0czoge1xyXG4gICAgICAgIEJ1dHRvbjogRGlzY29yZEJ1dHRvbixcclxuICAgICAgICBTd2l0Y2g6IFN3aXRjaCxcclxuICAgICAgICBDaG9pY2VzOiBSYWRpb0dyb3VwLFxyXG4gICAgICAgIFJhZGlvR3JvdXA6IFJhZGlvR3JvdXAsXHJcbiAgICAgICAgVGV4dEFyZWE6IFRleHRBcmVhLFxyXG4gICAgICAgIFRleHRJbnB1dDogVGV4dElucHV0LFxyXG4gICAgICAgIERyb3Bkb3duOiBEcm9wZG93blxyXG4gICAgfSxcclxuICAgIGdlbmVyYWw6IHtcclxuICAgICAgICBUaXRsZTogVGl0bGUsXHJcbiAgICAgICAgU2V0dGluZ3NUaXRsZTogU2V0dGluZ3NUaXRsZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9VdGlsc1wiXHJcblxyXG50eXBlIFNldHRpbmdzVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgVGl0bGVNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2V0dGluZ3NUaXRsZVByb3BzLCBTZXR0aW5nc1RpdGxlUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBTZXR0aW5nc1RpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHByb3BzID0gU2V0dGluZ3NUaXRsZS5ub3JtYWxpemVQcm9wcyhwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplUHJvcHMocHJvcHM6IFNldHRpbmdzVGl0bGVQcm9wcyk6U2V0dGluZ3NUaXRsZVByb3Bze1xyXG4gICAgICAgIHByb3BzID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICBpZighcHJvcHMgfHwgdHlwZW9mIHByb3BzICE9PSBcIm9iamVjdFwiKXByb3BzID0ge2NoaWxkcmVuOiBbXX1cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuY2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKWRlbGV0ZSBwcm9wcy5jbGFzc05hbWVcclxuXHJcbiAgICAgICAgbGV0IGxldmVscyA9IFtwcm9wc11cclxuICAgICAgICB3aGlsZShVdGlscy5nZXROZXN0ZWRQcm9wcyhwcm9wcywgbGV2ZWxzLm1hcChlID0+IFwiX19wcm90b19fXCIpLmpvaW4oXCIuXCIpKSl7XHJcbiAgICAgICAgICAgIGxldmVscy5wdXNoKFV0aWxzLmdldE5lc3RlZFByb3BzKHByb3BzLCBsZXZlbHMubWFwKGUgPT4gXCJfX3Byb3RvX19cIikuam9pbihcIi5cIikpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluYWxzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4ubGV2ZWxzKVxyXG5cclxuICAgICAgICByZXR1cm4gZmluYWxzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGl0bGVNb2R1bGVzIHx8IChUaXRsZU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLm1hcmdpblRvcDYwID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbWFyZ2luTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBTZXR0aW5nc1RpdGxlLm5vcm1hbGl6ZVByb3BzKHRoaXMuc3RhdGUgfHwgdGhpcy5wcm9wcylcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGAke21hcmdpbk1vZHVsZS5tYXJnaW5Ub3A2MH0gJHttYXJnaW5Nb2R1bGUubWFyZ2luQm90dG9tMjB9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgPSsgXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtjbGFzc05hbWV9LCBwcm9wcy5jaGlsZHJlbilcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdXVpZCBmcm9tIFwiLi4vLi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGl0bGVQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBUaXRsZU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGl0bGVQcm9wcywgVGl0bGVQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRpdGxlUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHByb3BzID0gVGl0bGUubm9ybWFsaXplUHJvcHMocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgX2tleTogc3RyaW5nXHJcblxyXG4gICAgZ2V0IGtleSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXkgfHwgdXVpZCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZVByb3BzKHByb3BzOiBUaXRsZVByb3BzKTpUaXRsZVByb3Bze1xyXG4gICAgICAgIHByb3BzID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICBpZighcHJvcHMgfHwgdHlwZW9mIHByb3BzICE9PSBcIm9iamVjdFwiKXByb3BzID0ge2NoaWxkcmVuOiBbXX1cclxuICAgICAgICBpZighcHJvcHMuY2hpbGRyZW4pcHJvcHMuY2hpbGRyZW4gPSBbXVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMuY2xhc3NOYW1lID0gXCJcIlxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxzID0gW3Byb3BzXVxyXG4gICAgICAgIHdoaWxlKFV0aWxzLmdldE5lc3RlZFByb3BzKHByb3BzLCBsZXZlbHMubWFwKGUgPT4gXCJfX3Byb3RvX19cIikuam9pbihcIi5cIikpKXtcclxuICAgICAgICAgICAgbGV2ZWxzLnB1c2goVXRpbHMuZ2V0TmVzdGVkUHJvcHMocHJvcHMsIGxldmVscy5tYXAoZSA9PiBcIl9fcHJvdG9fX1wiKS5qb2luKFwiLlwiKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaW5hbHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5sZXZlbHMpXHJcblxyXG4gICAgICAgIHJldHVybiBmaW5hbHNcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUaXRsZU1vZHVsZXMgfHwgKFRpdGxlTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gdHlwZW9mIGUuY29sb3JTdGFuZGFyZCA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLnNpemUzMiA9PT0gXCJzdHJpbmdcIiksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IHR5cGVvZiBlLmgyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgY29sb3JNb2R1bGUsXHJcbiAgICAgICAgICAgIHNpemVNb2R1bGUsXHJcbiAgICAgICAgICAgIHRpdGxlTW9kdWxlXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBUaXRsZS5ub3JtYWxpemVQcm9wcyh0aGlzLnN0YXRlIHx8IHRoaXMucHJvcHMpXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBgJHtjb2xvck1vZHVsZS5jb2xvclN0YW5kYXJkfSAke3NpemVNb2R1bGUuc2l6ZTE0fSAke3RpdGxlTW9kdWxlLmgyfSAke3RpdGxlTW9kdWxlLmRlZmF1bHRDb2xvcn0gJHt0aXRsZU1vZHVsZS5kZWZhdWx0TWFyZ2luaDJ9YFxyXG4gICAgICAgIGlmKHByb3BzLmNsYXNzTmFtZSljbGFzc05hbWUgKz0gXCIgXCIrcHJvcHMuY2xhc3NOYW1lXHJcblxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZSwga2V5OiB0aGlzLmtleX0sIHByb3BzLmNoaWxkcmVuKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmxldCBCdXR0b25Nb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBvbkNsaWNrOiBNb3VzZUV2ZW50SGFuZGxlcixcclxuICAgIGNvbG9yPzogQnV0dG9uQ29sb3JcclxufT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6e1xyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBvbkNsaWNrOiBNb3VzZUV2ZW50SGFuZGxlcixcclxuICAgICAgICBjb2xvcj86IEJ1dHRvbkNvbG9yXHJcbiAgICB9KXtcclxuICAgICAgICBpZihwcm9wcy5jb2xvcil7XHJcbiAgICAgICAgICAgIHByb3BzLmNvbG9yID0gcHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSBhcyBCdXR0b25Db2xvclxyXG4gICAgICAgICAgICBpZighW1wiYnJhbmRcIiwgXCJncmV5XCIsIFwicmVkXCIsIFwiZ3JlZW5cIiwgXCJ5ZWxsb3dcIiwgXCJwcmltYXJ5XCIsIFwibGlua1wiLCBcIndoaXRlXCIsIFwiYmxhY2tcIiwgXCJ0cmFuc3BhcmVudFwiXS5pbmNsdWRlcyhwcm9wcy5jb2xvcikpe1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBcImJyYW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IFwiYnJhbmRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5vbkNsaWNrID0gdHlwZW9mIHByb3BzLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BzLm9uQ2xpY2sgOiAoKSA9PiB7fVxyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7IC8vIGNhY2hpbmcgbW9kdWxlc1xyXG4gICAgICAgIHJldHVybiBCdXR0b25Nb2R1bGVzIHx8IChCdXR0b25Nb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiX2hvcml6b250YWxcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiY29sb3JUcmFuc3BhcmVudFwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJidXR0b25XcmFwcGVyXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIkJ1dHRvbkNvbG9yc1wiXSksXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBmbGV4TW9kdWxlLFxyXG4gICAgICAgICAgICBldWhNb2R1bGUxLFxyXG4gICAgICAgICAgICBidXR0b25Nb2R1bGUsXHJcbiAgICAgICAgICAgIGNvbG9yc01vZHVsZSxcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2J1dHRvbk1vZHVsZS5idXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YCR7ZmxleE1vZHVsZS5mbGV4Q2hpbGR9ICR7ZXVoTW9kdWxlMS5idXR0b259ICR7ZXVoTW9kdWxlMS5sb29rRmlsbGVkfSAke2NvbG9yc01vZHVsZS5CdXR0b25Db2xvcnNbdGhpcy5wcm9wcy5jb2xvci50b1VwcGVyQ2FzZSgpXX0gJHtldWhNb2R1bGUxLnNpemVTbWFsbH0gJHtldWhNb2R1bGUxLmdyb3d9YH0gc3R5bGU9e3tmbGV4OiBcIjAgMSBhdXRvXCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtldWhNb2R1bGUxLmNvbnRlbnRzfT57dGhpcy5wcm9wcy50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFsbFByZXZpZXdzKCl7XHJcbiAgICAgICAgcmV0dXJuIEFsbFByZXZpZXdzIHx8IChBbGxQcmV2aWV3cyA9IFtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25Db2xvciA9IFwiYnJhbmRcIiB8IFwiZ3JleVwiIHwgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IFwieWVsbG93XCIgfCBcInByaW1hcnlcIiB8IFwibGlua1wiIHwgXCJ3aGl0ZVwiIHwgXCJibGFja1wiIHwgXCJ0cmFuc3BhcmVudFwiIiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBEcm9wZG93blByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgdmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBvcHRpb25SZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGUsXHJcbiAgICBtdWx0aVZhbHVlUmVuZGVyZXI/OiAoZGF0YSkgPT4gUmVhY3ROb2RlXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzZWFyY2hhYmxlPzogYm9vbGVhbixcclxuICAgIGNsZWFyYWJsZT86IGJvb2xlYW4sXHJcbiAgICBzdHlsZU92ZXJyaWRlcz86IENTU1Byb3BlcnRpZXMsXHJcbiAgICBsaWdodFRoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgZGFya1RoZW1lQ29sb3JPdmVycmlkZXM/OiB0aGVtZU92ZXJyaWRlLFxyXG4gICAgaXNNdWx0aT86IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSB0aGVtZU92ZXJyaWRlID0ge1xyXG4gICAgbmV1dHJhbDA6IHN0cmluZyxcclxuICAgIG5ldXRyYWw1OiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMTA6IHN0cmluZyxcclxuICAgIG5ldXRyYWwyMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDMwOiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5OiBzdHJpbmcsXHJcbiAgICBwcmltYXJ5MjU6IHN0cmluZyxcclxuICAgIHByaW1hcnk1MDogc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBtZW51QmFja2dyb3VuZDogc3RyaW5nLFxyXG4gICAgbWVudUJvcmRlcjogc3RyaW5nLFxyXG4gICAgc2Nyb2xsQmFyVGh1bWI6IHN0cmluZyxcclxuICAgIG11bHRpT3B0aW9uQmFja2dyb3VuZDogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBEcm9wZG93bk1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJvcGRvd25Qcm9wcywgRHJvcGRvd25Qcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6RHJvcGRvd25Qcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgcHJvcHMgPSBEcm9wZG93bi5ub3JtYWxpemVQcm9wcyhwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHNcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZVByb3BzKHByb3BzOkRyb3Bkb3duUHJvcHMpOkRyb3Bkb3duUHJvcHN7XHJcbiAgICAgICAgcHJvcHMgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIGlmKCFwcm9wcyB8fCB0eXBlb2YgcHJvcHMgIT09IFwib2JqZWN0XCIpcHJvcHMgPSB7fVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgIT09IFwic3RyaW5nXCIpZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5kYXJrVGhlbWVDb2xvck92ZXJyaWRlcyAhPT0gXCJvYmplY3RcIiB8fCAhcHJvcHMuZGFya1RoZW1lQ29sb3JPdmVycmlkZXMpZGVsZXRlIHByb3BzLmRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmRpc2FibGVkICE9PSBcImJvb2xlYW5cIilwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmVycm9yICE9PSBcInN0cmluZ1wiKWRlbGV0ZSBwcm9wcy5lcnJvclxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pc011bHRpICE9PSBcImJvb2xlYW5cIilwcm9wcy5pc011bHRpID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMubGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzICE9PSBcIm9iamVjdFwiIHx8ICFwcm9wcy5saWdodFRoZW1lQ29sb3JPdmVycmlkZXMpZGVsZXRlIHByb3BzLmxpZ2h0VGhlbWVDb2xvck92ZXJyaWRlc1xyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5tdWx0aVZhbHVlUmVuZGVyZXIgIT09IFwiZnVuY3Rpb25cIilkZWxldGUgcHJvcHMubXVsdGlWYWx1ZVJlbmRlcmVyXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnZhbHVlUmVuZGVyZXIgIT09IFwiZnVuY3Rpb25cIilkZWxldGUgcHJvcHMudmFsdWVSZW5kZXJlclxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vcHRpb25SZW5kZXJlciAhPT0gXCJmdW5jdGlvblwiKWRlbGV0ZSBwcm9wcy5vcHRpb25SZW5kZXJlclxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkNoYW5nZSAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQ2hhbmdlID0gTk9PUFxyXG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpKXByb3BzLm9wdGlvbnMgPSBbe1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJObyBvcHRpb25zIC0gTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIERyb3Bkb3duLiBJZiB5b3UgbWVhbnQgdG8gcHV0IGFuIGVtcHR5IGRyb3Bkb3duLCBpbnB1dCBhbiBlbXB0eSBhcnJheS5cIlxyXG4gICAgICAgIH1dXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnNlYXJjaGFibGUgIT09IFwiYm9vbGVhblwiKXByb3BzLnNlYXJjaGFibGUgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5zdHlsZU92ZXJyaWRlcyAhPT0gXCJvYmplY3RcIilkZWxldGUgcHJvcHMuc3R5bGVPdmVycmlkZXNcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMudmFsdWUgIT09IFwic3RyaW5nXCIpcHJvcHMudmFsdWUgPSBudWxsXHJcblxyXG4gICAgICAgIGxldCBsZXZlbHMgPSBbcHJvcHNdXHJcbiAgICAgICAgd2hpbGUoVXRpbHMuZ2V0TmVzdGVkUHJvcHMocHJvcHMsIGxldmVscy5tYXAoZSA9PiBcIl9fcHJvdG9fX1wiKS5qb2luKFwiLlwiKSkpe1xyXG4gICAgICAgICAgICBsZXZlbHMucHVzaChVdGlscy5nZXROZXN0ZWRQcm9wcyhwcm9wcywgbGV2ZWxzLm1hcChlID0+IFwiX19wcm90b19fXCIpLmpvaW4oXCIuXCIpKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFscyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmxldmVscylcclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbmFsc1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICB0aGlzLnN0YXRlLm9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIERyb3Bkb3duTW9kdWxlcyB8fCAoRHJvcGRvd25Nb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlNlbGVjdFRlbXBXcmFwcGVyXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIERyb3Bkb3duQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBEcm9wZG93bi5ub3JtYWxpemVQcm9wcyh0aGlzLnN0YXRlIHx8IHRoaXMucHJvcHMpXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxEcm9wZG93bkNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IE5PT1AgZnJvbSBcIi4uLy4uL21vZHVsZXMvbm9vcFwiXHJcbmltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxuXHJcbnR5cGUgUmFkaW9Hcm91cFByb3BzID0ge1xyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgICBjb2xvcj86IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBkZXNjPzogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBzaXplPzogXCJzbWFsbFwifFwibWVkaXVtXCIsXHJcbiAgICBpdGVtVHlwZT86IFwiYmFyXCJ8XCJwYW5lbFwiLFxyXG4gICAgaW5mb0NsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5sZXQgUmFkaW9Hcm91cE1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFJhZGlvR3JvdXBQcm9wcywgUmFkaW9Hcm91cFByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpSYWRpb0dyb3VwUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHByb3BzID0gUmFkaW9Hcm91cC5ub3JtYWxpemVQcm9wcyhwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHNcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZVByb3BzKHByb3BzOlJhZGlvR3JvdXBQcm9wcyk6UmFkaW9Hcm91cFByb3Bze1xyXG4gICAgICAgIHByb3BzID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICBpZighcHJvcHMgfHwgdHlwZW9mIHByb3BzICE9PSBcIm9iamVjdFwiKXByb3BzID0ge31cclxuICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSBmYWxzZVxyXG4gICAgICAgIGlmKCFwcm9wcy5vcHRpb25zIHx8ICFBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpKXtcclxuICAgICAgICAgICAgcHJvcHMub3B0aW9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5vIG9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIENob2ljZXMuIElmIHlvdSBtZWFudCB0byBkaXNwbGF5IG5vIG9wdGlvbnMgYXQgYWxsLCBwbGVhc2UgcGFzcyBhbiBlbXB0eSBhcnJheS5cIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmMDQ3NDdcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXByb3BzLnZhbHVlIHx8IHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIGlmKGRlZmF1bHRPcHRpb25zKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnZhbHVlID0gXCJub25lXCJcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy52YWx1ZSA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuZGlzYWJsZWQgIT09IFwiYm9vbGVhblwiKXByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuc2l6ZSAhPT0gXCJzdHJpbmdcIiB8fCAhW1wic21hbGxcIiwgXCJtZWRpdW1cIl0uaW5jbHVkZXMocHJvcHMuc2l6ZS50b0xvd2VyQ2FzZSgpKSlwcm9wcy5zaXplID0gXCJtZWRpdW1cIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pdGVtVHlwZSAhPT0gXCJzdHJpbmdcIiB8fCAhW1wiYmFyXCIsIFwicGFuZWxcIl0uaW5jbHVkZXMocHJvcHMuaXRlbVR5cGUpKXByb3BzLml0ZW1UeXBlID0gXCJiYXJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pbmZvQ2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLmluZm9DbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYoIXByb3BzLm9uQ2hhbmdlIHx8IHR5cGVvZiBwcm9wcy5vbkNoYW5nZSAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQ2hhbmdlID0gTk9PUFxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxzID0gW3Byb3BzXVxyXG4gICAgICAgIHdoaWxlKFV0aWxzLmdldE5lc3RlZFByb3BzKHByb3BzLCBsZXZlbHMubWFwKGUgPT4gXCJfX3Byb3RvX19cIikuam9pbihcIi5cIikpKXtcclxuICAgICAgICAgICAgbGV2ZWxzLnB1c2goVXRpbHMuZ2V0TmVzdGVkUHJvcHMocHJvcHMsIGxldmVscy5tYXAoZSA9PiBcIl9fcHJvdG9fX1wiKS5qb2luKFwiLlwiKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaW5hbHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5sZXZlbHMpXHJcblxyXG4gICAgICAgIHJldHVybiBmaW5hbHNcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShldil7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkNoYW5nZShldi52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IGV2LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBSYWRpb0dyb3VwTW9kdWxlIHx8IChSYWRpb0dyb3VwTW9kdWxlID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlJhZGlvR3JvdXBcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgUmFkaW9Hcm91cENvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gUmFkaW9Hcm91cC5ub3JtYWxpemVQcm9wcyh0aGlzLnN0YXRlIHx8IHRoaXMucHJvcHMpXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxSYWRpb0dyb3VwQ29tcG9uZW50IG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17cHJvcHMudmFsdWV9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gXHJcbiAgICAgICAgICAgIHNpemU9e1JhZGlvR3JvdXBDb21wb25lbnQuU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXX0gaXRlbVR5cGU9e1JhZGlvR3JvdXBDb21wb25lbnQuSXRlbVR5cGVzW3Byb3BzLml0ZW1UeXBlLnRvVXBwZXJDYXNlKCldfSBcclxuICAgICAgICAgICAgaW5mb0NsYXNzTmFtZT17cHJvcHMuaW5mb0NsYXNzTmFtZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBTd2l0Y2hQcm9wcyA9IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogYm9vbGVhbixcclxuICAgIGZpbGw/OiBzdHJpbmcsXHJcbiAgICB0aGVtZT86IFwiZGVmYXVsdFwifFwiY2xlYXJcIixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIixcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5sZXQgU3dpdGNoTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3dpdGNoUHJvcHMsIHt2YWx1ZTogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlN3aXRjaFByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBwcm9wcyA9IFN3aXRjaC5ub3JtYWxpemVQcm9wcyhwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQcm9wcyhwcm9wczpTd2l0Y2hQcm9wcyl7XHJcbiAgICAgICAgcHJvcHMgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIGlmKCFwcm9wcylwcm9wcyA9IHt9XHJcbiAgICAgICAgaWYoIXByb3BzLmlkIHx8IHR5cGVvZiBwcm9wcy5pZCAhPT0gXCJzdHJpbmdcIilwcm9wcy5pZCA9IG51bGxcclxuICAgICAgICBpZighcHJvcHMub25DaGFuZ2UgfHwgdHlwZW9mIHByb3BzLm9uQ2hhbmdlICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25DaGFuZ2UgPSBOT09QXHJcbiAgICAgICAgaWYoIXByb3BzLnZhbHVlIHx8IHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gXCJib29sZWFuXCIpcHJvcHMudmFsdWUgPSBmYWxzZVxyXG4gICAgICAgIGlmKCFwcm9wcy5maWxsIHx8IHR5cGVvZiBwcm9wcy5maWxsICE9PSBcInN0cmluZ1wiKXByb3BzLmZpbGwgPSBudWxsXHJcbiAgICAgICAgaWYoIXByb3BzLnRoZW1lIHx8ICFbXCJkZWZhdWx0XCIsIFwiY2xlYXJcIl0uaW5jbHVkZXMocHJvcHMudGhlbWUudG9Mb3dlckNhc2UoKSkpcHJvcHMudGhlbWUgPSBcImRlZmF1bHRcIlxyXG4gICAgICAgIGlmKCEoXCJkaXNhYmxlZFwiIGluIHByb3BzKSB8fCB0eXBlb2YgcHJvcHMuZGlzYWJsZWQgIT09IFwiYm9vbGVhblwiKXByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICBpZighcHJvcHMuY2xhc3NOYW1lIHx8IHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMuY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5zaXplIHx8ICFbXCJkZWZhdWx0XCIsIFwibWluaVwiXS5pbmNsdWRlcyhwcm9wcy5zaXplLnRvTG93ZXJDYXNlKCkpKXByb3BzLnNpemUgPSBcImRlZmF1bHRcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5zdHlsZSB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgIT09IFwib2JqZWN0XCIpcHJvcHMuc3R5bGUgPSB7fVxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxzID0gW3Byb3BzXVxyXG4gICAgICAgIHdoaWxlKFV0aWxzLmdldE5lc3RlZFByb3BzKHByb3BzLCBsZXZlbHMubWFwKGUgPT4gXCJfX3Byb3RvX19cIikuam9pbihcIi5cIikpKXtcclxuICAgICAgICAgICAgbGV2ZWxzLnB1c2goVXRpbHMuZ2V0TmVzdGVkUHJvcHMocHJvcHMsIGxldmVscy5tYXAoZSA9PiBcIl9fcHJvdG9fX1wiKS5qb2luKFwiLlwiKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaW5hbHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5sZXZlbHMpXHJcblxyXG4gICAgICAgIHJldHVybiBmaW5hbHNcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFN3aXRjaE1vZHVsZXMgfHwgKFN3aXRjaE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU3dpdGNoXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFN3aXRjaENvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gU3dpdGNoLm5vcm1hbGl6ZVByb3BzKHRoaXMuc3RhdGUgfHwgdGhpcy5wcm9wcylcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxTd2l0Y2hDb21wb25lbnQgaWQ9e3Byb3BzLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgfHwgZmFsc2V9IGZpbGw9e3Byb3BzLmZpbGx9IFxyXG4gICAgICAgICAgICB0aGVtZT17U3dpdGNoQ29tcG9uZW50LlRoZW1lc1twcm9wcy50aGVtZS50b1VwcGVyQ2FzZSgpXX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHNpemU9e1N3aXRjaENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBzdHlsZT17cHJvcHMuc3R5bGV9Lz4pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIXRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbnR5cGUgVGV4dEFyZWFQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW4sXHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbixcclxuICAgIGZsZXg/OiBib29sZWFuLFxyXG4gICAgYXV0b3NpemU/OiBmYWxzZSxcclxuICAgIHJvd3M/OiBudW1iZXIsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uS2V5RG93bj86IChldikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dEFyZWFNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRBcmVhUHJvcHMsIFRleHRBcmVhUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBwcm9wcyA9IFRleHRBcmVhLm5vcm1hbGl6ZVByb3BzKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplUHJvcHMocHJvcHM6VGV4dEFyZWFQcm9wcyk6VGV4dEFyZWFQcm9wcyB7XHJcbiAgICAgICAgcHJvcHMgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIGlmKCFwcm9wcylwcm9wcyA9IHt9XHJcbiAgICAgICAgaWYoIXByb3BzLm5hbWUgfHwgdHlwZW9mIHByb3BzLm5hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMubmFtZSA9IFwiXCJcclxuICAgICAgICBpZighcHJvcHMuZGlzYWJsZWQgfHwgdHlwZW9mIHByb3BzLmRpc2FibGVkICE9PSBcImJvb2xlYW5cIilwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnBsYWNlaG9sZGVyICE9PSBcInN0cmluZ1wiKXByb3BzLnBsYWNlaG9sZGVyID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5hdXRvRm9jdXMgIT09IFwiYm9vbGVhblwiKXByb3BzLmF1dG9Gb2N1cyA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnJlc2l6ZWFibGUgIT09IFwiYm9vbGVhblwiKXByb3BzLnJlc2l6ZWFibGUgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5mbGV4ICE9PSBcImJvb2xlYW5cIilwcm9wcy5mbGV4ID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuYXV0b3NpemUgIT09IFwiYm9vbGVhblwiKXByb3BzLmF1dG9zaXplID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMucm93cyAhPT0gXCJudW1iZXJcIilwcm9wcy5yb3dzID0gM1xyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gXCJzdHJpbmdcIilwcm9wcy52YWx1ZSA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuZXJyb3IgIT09IFwic3RyaW5nXCIpcHJvcHMuZXJyb3IgPSBudWxsXHJcbiAgICAgICAgaWYocHJvcHMubWF4TGVuZ3RoICYmIHR5cGVvZiBwcm9wcy5tYXhMZW5ndGggIT09IFwibnVtYmVyXCIpcHJvcHMubWF4TGVuZ3RoID0gOTk5XHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmNsYXNzTmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5jbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmlkICE9PSBcInN0cmluZ1wiKXByb3BzLmlkID0gbnVsbFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkNoYW5nZSAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQ2hhbmdlID0gTk9PUFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkZvY3VzICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25Gb2N1cyA9IE5PT1BcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25CbHVyICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25CbHVyID0gTk9PUFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbktleURvd24gIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbktleURvd24gPSBOT09QXHJcblxyXG4gICAgICAgIGxldCBsZXZlbHMgPSBbcHJvcHNdXHJcbiAgICAgICAgd2hpbGUoVXRpbHMuZ2V0TmVzdGVkUHJvcHMocHJvcHMsIGxldmVscy5tYXAoZSA9PiBcIl9fcHJvdG9fX1wiKS5qb2luKFwiLlwiKSkpe1xyXG4gICAgICAgICAgICBsZXZlbHMucHVzaChVdGlscy5nZXROZXN0ZWRQcm9wcyhwcm9wcywgbGV2ZWxzLm1hcChlID0+IFwiX19wcm90b19fXCIpLmpvaW4oXCIuXCIpKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFscyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmxldmVscylcclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbmFsc1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRleHRBcmVhTW9kdWxlcyB8fCAoVGV4dEFyZWFNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlRleHRBcmVhXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlLCBuYW1lKXtcclxuICAgICAgICB0aGlzLnN0YXRlLm9uQ2hhbmdlKHZhbHVlLCBuYW1lKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkZvY3VzKGV2LCBuYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkJsdXIoZXYsIG5hbWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uS2V5RG93bihldil7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbktleURvd24oZXYpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVGV4dEFyZWFDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IFRleHRBcmVhLm5vcm1hbGl6ZVByb3BzKHRoaXMuc3RhdGUgfHwgdGhpcy5wcm9wcylcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxUZXh0QXJlYUNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL21vZHVsZXMvVXRpbHNcIlxyXG5cclxudHlwZSBUZXh0SW5wdXRQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCJcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGlucHV0Q2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uQmx1cj86IChldiwgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBUZXh0SW5wdXRNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGV4dElucHV0UHJvcHMsIFRleHRJbnB1dFByb3BzPiB7XHJcbiAgICBoYXNTZXQ6IGJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUZXh0SW5wdXRQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgcHJvcHMgPSBUZXh0SW5wdXQubm9ybWFsaXplUHJvcHMocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQcm9wcyhwcm9wczpUZXh0SW5wdXRQcm9wcyk6VGV4dElucHV0UHJvcHMge1xyXG4gICAgICAgIHByb3BzID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICBpZighcHJvcHMpcHJvcHMgPSB7fVxyXG4gICAgICAgIGlmKCFwcm9wcy5uYW1lIHx8IHR5cGVvZiBwcm9wcy5uYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLm5hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYoIXByb3BzLnNpemUgfHwgIVtcImRlZmF1bHRcIiwgXCJtaW5pXCJdLmluY2x1ZGVzKHByb3BzLnNpemUpKXByb3BzLnNpemUgPSBcImRlZmF1bHRcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5kaXNhYmxlZCB8fCB0eXBlb2YgcHJvcHMuZGlzYWJsZWQgIT09IFwiYm9vbGVhblwiKXByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMucGxhY2Vob2xkZXIgIT09IFwic3RyaW5nXCIpcHJvcHMucGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnZhbHVlICE9PSBcInN0cmluZ1wiKXByb3BzLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5lcnJvciAhPT0gXCJzdHJpbmdcIilwcm9wcy5lcnJvciA9IG51bGxcclxuICAgICAgICBpZihwcm9wcy5tYXhMZW5ndGggJiYgdHlwZW9mIHByb3BzLm1heExlbmd0aCAhPT0gXCJudW1iZXJcIilwcm9wcy5tYXhMZW5ndGggPSA5OTlcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuY2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLmNsYXNzTmFtZSA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuaW5wdXRDbGFzc05hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMuaW5wdXRDbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmlkICE9PSBcInN0cmluZ1wiKXByb3BzLmlkID0gbnVsbFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkNoYW5nZSAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQ2hhbmdlID0gTk9PUFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkZvY3VzICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25Gb2N1cyA9IE5PT1BcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25CbHVyICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25CbHVyID0gTk9PUFxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxzID0gW3Byb3BzXVxyXG4gICAgICAgIHdoaWxlKFV0aWxzLmdldE5lc3RlZFByb3BzKHByb3BzLCBsZXZlbHMubWFwKGUgPT4gXCJfX3Byb3RvX19cIikuam9pbihcIi5cIikpKXtcclxuICAgICAgICAgICAgbGV2ZWxzLnB1c2goVXRpbHMuZ2V0TmVzdGVkUHJvcHMocHJvcHMsIGxldmVscy5tYXAoZSA9PiBcIl9fcHJvdG9fX1wiKS5qb2luKFwiLlwiKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaW5hbHMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5sZXZlbHMpXHJcblxyXG4gICAgICAgIHJldHVybiBmaW5hbHNcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0SW5wdXRNb2R1bGVzIHx8IChUZXh0SW5wdXRNb2R1bGVzID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlRleHRJbnB1dFwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5oYXNTZXQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3RhdGUub25DaGFuZ2UodmFsdWUsIG5hbWUsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5oYXNTZXQpcmV0dXJuIC8vIHByZXZlbnQgZXZlbnQgaWYgdGhlIG9uQ2hhbmdlIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZS5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25Gb2N1cyhldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25CbHVyKGV2LCBuYW1lLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBUZXh0SW5wdXQubm9ybWFsaXplUHJvcHModGhpcy5zdGF0ZSB8fCB0aGlzLnByb3BzKVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfS8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gdHJ1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vbW9kdWxlcy91dWlkXCJcclxuaW1wb3J0IFBsdWdpblV0aWxpdGllcyBmcm9tIFwiLi9tb2R1bGVzL1BsdWdpblV0aWxpdGllc1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9tb2R1bGVzL1V0aWxzXCJcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzLFxyXG4gICAgdXVpZDogdXVpZCxcclxuICAgIFV0aWxzOiBVdGlsc1xyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgUmVhY3Q6dHlwZW9mIGltcG9ydChcInJlYWN0XCIpXHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBMaWdodGNvcmQ6IHtcclxuICAgICAgICAgICAgRGlzY29yZE1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSW50ZXJuYWwgRGlzY29yZCdzIGRpc3BhdGNoZXIgLSBjYW4gYmUgdXNlZCB0byBzdWJzY3JpYmUgdG8gZ2F0ZXdheSBldmVudHMgLyBjbGllbnQgZXZlbnRzLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3N1YnNjcmlwdGlvbnM6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICBfd2FpdFF1ZXVlOiAoKCkgPT4gdm9pZClbXSxcclxuICAgICAgICAgICAgICAgICAgICBfcHJvY2Vzc2luZ1dhaXRRdWV1ZTogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudERpc3BhdGNoQWN0aW9uVHlwZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBfb3JkZXJlZEFjdGlvbkhhbmRsZXJzOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgX29yZGVyZWRDYWxsYmFja1Rva2VuczogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIF9sYXN0SUQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBfZGVwZW5kZW5jeUdyYXBoOiBhbnlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlzcGF0Y2hpbmcoKTpib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIElmIHRoZSBkaXNwYXRjaGVyIGlzbid0IGRpc3BhdGNoaW5nLCB0aGVuIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVEaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXYWl0IHVudGlsIHRoZSBkaXNwYXRjaGVyIGZpbmlzaGVkIGRpc3BhdGNoaW5nLCB0aGVuIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHlEaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBkaXNwYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiBTYW1lIGFzIGRpc3BhdGNoZXIuZGlzcGF0Y2ggKi9cclxuICAgICAgICAgICAgICAgICAgICBfZGlzcGF0Y2goZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogSW50ZXJjZXB0IGV2ZW50cyBiZWZvcmUgdGhleSBoYXBwZW5zLCBpZiByZXR1cm5pbmcgdHJ1ZSwgdGhlbiB0aGUgZXZlbnQgd2lsbCBiZSBibG9ja2VkIGZyb20gZGlzcGF0Y2hpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJjZXB0b3IoaW50ZXJjZXB0b3I6IChldmVudCkgPT4gYm9vbGVhbik6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXYWl0IHVudGlsIHRoZSBkaXNwYXRjaGVyIGhhcyBmaW5pc2hlZCBkaXNwYXRjaGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHdhaXQod2FpdGluZzogKCkgPT4gdm9pZCk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKiogU3Vic2NyaWJlIHRvIGFuIGV2ZW50ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgZXZlbnQuIFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBhY3Rpb25IYW5kbGVyOiBhbnksIHN0b3JlRGlkQ2hhbmdlOiBhbnkpOnZvaWRcclxuICAgICAgICAgICAgICAgICAgICBhZGREZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgX2ludmFsaWRhdGVDYWNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3NXYWl0UXVldWUsXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbXB1dGVPcmRlcmVkQWN0aW9uSGFuZGxlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbXB1dGVPcmRlcmVkQ2FsbGJhY2tUb2tlbnNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25zdGFudHM6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZENvbnN0YW50c1R5cGVzXCIpLmRlZmF1bHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGRldk1vZGU6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBjYWxsUmluZ2luZ0JlYXQ6IGJvb2xlYW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQXBpOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIExpZ2h0Y29yZCdzIGF1dG9yaXphdGlvbiBmb3IgbGlnaHRjb3JkJ3Mgc2VydmVyc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdhaXRzIHVudGlsIHRoZSBmaXJzdCBtb2R1bGUgdGhhdCBtYXRjaCB0aGUgZmlsdGVyIGdldHMgZXhwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0aGF0IHNwZWNpZmllcyB0aGUgbW9kdWxlIHRvIG1hdGNoLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBlbnN1cmVFeHBvcnRlZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTpQcm9taXNlPGFueT5cclxuICAgICAgICAgICAgfSAmIHR5cGVvZiBMaWdodGNvcmRBcGlcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJETW9kdWxlczoge1xyXG4gICAgICAgICAgICBtb2R1bGVzOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoZmlsdGVyOihtb2Q6YW55KT0+Ym9vbGVhbiwgbW9kdWxlcz86YW55W10pOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoaWQ6bnVtYmVyLCBtb2R1bGVzPzphbnlbXSk6YW55LFxyXG4gICAgICAgICAgICBnZXQoaWRzOiBbbnVtYmVyfCgobW9kOmFueSk9PmJvb2xlYW4pXSwgbW9kdWxlcz86YW55W10pOmFueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRjb3JkQXBpXHJcblxyXG5PYmplY3QuYXNzaWduKHdpbmRvdy5MaWdodGNvcmQuQXBpLCBMaWdodGNvcmRBcGkpIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9VdGlsc1wiXHJcbmltcG9ydCB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vdXVpZFwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRzL1RleHRJbnB1dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUGx1Z2luVXRpbGl0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHJlbmRlclNldHRpbmdzKHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMucmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzKVxyXG4gICAgICAgIGxldCBlbGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7a2V5OiB1dWlkKCl9LCBpdGVtcylcclxuICAgICAgICByZXR1cm4gVXRpbHMuUmVhY3RUb0hUTUxFbGVtZW50KGVsZW0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2V0dGluZ3NUb1JlYWN0KHNldHRpbmdzOlNldHRpbmdJdGVtW10pe1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFtdXHJcbiAgICAgICAgc2V0dGluZ3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAgICAgaWYodHlwZW9mIGl0ZW0gIT09IFwib2JqZWN0XCIpcmV0dXJuIGl0ZW1zLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgaWYoaXRlbS5wcm9wcyAmJiBcImNoaWxkcmVuXCIgaW4gaXRlbS5wcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighQXJyYXkuaXNBcnJheShpdGVtLnByb3BzLmNoaWxkcmVuKSlpdGVtLnByb3BzLmNoaWxkcmVuID0gW2l0ZW0ucHJvcHMuY2hpbGRyZW5dXHJcbiAgICAgICAgICAgICAgICBpdGVtLnByb3BzLmNoaWxkcmVuID0gdGhpcy5yZW5kZXJTZXR0aW5nc1RvUmVhY3QoaXRlbS5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighaXRlbS5wcm9wcylpdGVtLnByb3BzID0ge31cclxuICAgICAgICAgICAgaXRlbS5wcm9wcy5rZXkgPSB1dWlkKClcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IFV0aWxzLmdldE5lc3RlZFByb3BzKGNvbXBvbmVudHMsIGl0ZW0uY29tcG9uZW50KVxyXG4gICAgICAgICAgICBpZighY29tcG9uZW50KXtcclxuICAgICAgICAgICAgICAgIGxldCB3YXJuaW5nID0gbmV3IFRleHRJbnB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBXYXJuaW5nOiBObyBjb21wb25lbnQgd2FzIGZvdW5kIGZvcjogXCIke2l0ZW0uY29tcG9uZW50fVwiLiBQbGVhc2UgY29ycmVjdCB5b3VyIGNvZGUuYCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogYFdhcm5pbmc6IE5vIGNvbXBvbmVudCB3YXMgZm91bmQgZm9yOiBcIiR7aXRlbS5jb21wb25lbnR9XCIuIFBsZWFzZSBjb3JyZWN0IHlvdXIgY29kZS5gXHJcbiAgICAgICAgICAgICAgICB9KS5yZW5kZXIoKVxyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh3YXJuaW5nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgT2JqZWN0LmNyZWF0ZShpdGVtLnByb3BzKSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gaXRlbXNcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBTZXR0aW5nSXRlbSA9IHtcclxuICAgIGNvbXBvbmVudDogc3RyaW5nLFxyXG4gICAgcHJvcHM6IENvbXBvbmVudFByb3BzPGFueT5cclxufSIsImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpXHJcbmltcG9ydCBQbHVnaW5VdGlsaXRpZXMgZnJvbSBcIi4vUGx1Z2luVXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgVXRpbHMge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgUmVhY3RUb0hUTUxFbGVtZW50KFJlYWN0RWxlbWVudDogUmVhY3RFbGVtZW50KXsgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3RFbGVtZW50LCBlbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFBsdWdpblV0aWxzKCl7cmV0dXJuIFBsdWdpblV0aWxpdGllc31cclxuXHJcbiAgICBnZXROZXN0ZWRQcm9wcyhvYmo6YW55LCBwYXRoOiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIuXCIpXHJcbiAgICAgICAgZm9yKGxldCBzZWcgb2Ygc2VnbWVudHMpe1xyXG4gICAgICAgICAgICBvYmogPSBvYmogJiYgKHNlZyBpbiBvYmopID8gb2JqW3NlZ10gOiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG59IiwiY29uc3QgQkRNb2R1bGVzID0gd2luZG93LkJETW9kdWxlc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFdlYnBhY2tMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgZ2V0KGlkOiBudW1iZXIpOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChpZClcclxuICAgIH1cclxuICAgIGZpbmQoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGZpbHRlcilbMF1cclxuICAgIH1cclxuICAgIGZpbmRCeVVuaXF1ZVByb3BlcnRpZXMocHJvcHM6KHN0cmluZ3xudW1iZXIpW10pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZC5fX2VzTW9kdWxlICYmIChcImRlZmF1bHRcIiBpbiBtb2QpKXtcclxuICAgICAgICAgICAgICAgIGxldCBkb2VzTWF0Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLmRlZmF1bHQsIHByb3ApKWRvZXNNYXRjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkb2VzTWF0Y2gpcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIHByb3ApKXJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlbMF1cclxuICAgIH1cclxuICAgIGZpbHRlcihmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnlbXXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeVVuaXF1ZVByb3BlcnRpZXMocHJvcHM6KHN0cmluZ3xudW1iZXIpW10pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZC5fX2VzTW9kdWxlICYmIChcImRlZmF1bHRcIiBpbiBtb2QpKXtcclxuICAgICAgICAgICAgICAgIGxldCBkb2VzTWF0Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLmRlZmF1bHQsIHByb3ApKWRvZXNNYXRjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkb2VzTWF0Y2gpcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIHByb3ApKXJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5PT1AoKXt9IiwiaW1wb3J0ICogYXMgdXVpZHYxIGZyb20gXCJ1dWlkL3YxXCJcclxuaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCJcclxuXHJcbnR5cGUgdXVpZEZ1bmMgPSAoKSA9PiBzdHJpbmdcclxubGV0IHV1aWQ6dXVpZEZ1bmMgJiB7djE6IHV1aWRGdW5jLCB2NDogdXVpZEZ1bmN9ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHV1aWR2NCgpXHJcbn0sIHt2MTogKCkgPT4gdXVpZHYxKCksIHY0OiAoKSA9PiB1dWlkdjQoKX0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dWlkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92MVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3Y0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=