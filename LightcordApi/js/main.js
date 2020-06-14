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

/***/ "./src/components/Discord/Button.tsx":
/*!*******************************************!*\
  !*** ./src/components/Discord/Button.tsx ***!
  \*******************************************/
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
}
exports.default = Button;


/***/ }),

/***/ "./src/components/Discord/Dropdown.tsx":
/*!*********************************************!*\
  !*** ./src/components/Discord/Dropdown.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let DropdownModules;
class Dropdown extends React.Component {
    constructor(props) {
        props = Dropdown.normalizeProps(props);
        super(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }
    static normalizeProps(props) {
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
        return props;
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

/***/ "./src/components/Discord/RadioGroup.tsx":
/*!***********************************************!*\
  !*** ./src/components/Discord/RadioGroup.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
let RadioGroupModule;
class RadioGroup extends React.Component {
    constructor(props) {
        props = RadioGroup.normalizeProps(props);
        super(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
    }
    static normalizeProps(props) {
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
        return props;
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

/***/ "./src/components/Discord/Switch.tsx":
/*!*******************************************!*\
  !*** ./src/components/Discord/Switch.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let SwitchModules;
class Switch extends React.Component {
    constructor(props) {
        props = Switch.normalizeProps(props);
        super(props);
        this.state = Object.create(props);
        this.onChange = this.onChange.bind(this);
    }
    static normalizeProps(props) {
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
        return props;
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

/***/ "./src/components/Discord/TextArea.tsx":
/*!*********************************************!*\
  !*** ./src/components/Discord/TextArea.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextAreaModules;
class TextArea extends React.Component {
    constructor(props) {
        props = TextArea.normalizeProps(props);
        super(props);
        this.state = Object.create(props);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    static normalizeProps(props) {
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
        return props;
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

/***/ "./src/components/Discord/TextInput.tsx":
/*!**********************************************!*\
  !*** ./src/components/Discord/TextInput.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = __webpack_require__(/*! ../../modules/WebpackLoader */ "./src/modules/WebpackLoader.ts");
const noop_1 = __webpack_require__(/*! ../../modules/noop */ "./src/modules/noop.ts");
let TextInputModules;
class TextInput extends React.PureComponent {
    constructor(props) {
        props = TextInput.normalizeProps(props);
        super(props);
        this.state = props;
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    static normalizeProps(props) {
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
        return props;
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
            this.state = Object.create(props);
        }
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

/***/ "./src/components/components.ts":
/*!**************************************!*\
  !*** ./src/components/components.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __webpack_require__(/*! ./Discord/Button */ "./src/components/Discord/Button.tsx");
const Switch_1 = __webpack_require__(/*! ./Discord/Switch */ "./src/components/Discord/Switch.tsx");
const RadioGroup_1 = __webpack_require__(/*! ./Discord/RadioGroup */ "./src/components/Discord/RadioGroup.tsx");
const TextArea_1 = __webpack_require__(/*! ./Discord/TextArea */ "./src/components/Discord/TextArea.tsx");
const TextInput_1 = __webpack_require__(/*! ./Discord/TextInput */ "./src/components/Discord/TextInput.tsx");
const Dropdown_1 = __webpack_require__(/*! ./Discord/Dropdown */ "./src/components/Discord/Dropdown.tsx");
exports.default = {
    inputs: {
        Button: Button_1.default,
        Switch: Switch_1.default,
        Choices: RadioGroup_1.default,
        RadioGroup: RadioGroup_1.default,
        TextArea: TextArea_1.default,
        TextInput: TextInput_1.default,
        Dropdown: Dropdown_1.default
    }
};


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
const LightcordApi = {
    WebpackLoader: WebpackLoader_1.default,
    Components: components_1.default,
    uuid: uuid_1.default
};
exports.default = LightcordApi;
Object.assign(window.Lightcord.Api, LightcordApi);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvRGlzY29yZC9CdXR0b24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvRHJvcGRvd24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvUmFkaW9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvRGlzY29yZC9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvVGV4dEFyZWEudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9XZWJwYWNrTG9hZGVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL25vb3AudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvdXVpZC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3YxXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92NFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUFHLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFDO2dCQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJO2dCQUNwQixLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztvQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt3QkFBQyxTQUFTLEdBQUcsS0FBSztpQkFDaEY7Z0JBQ0QsSUFBRyxTQUFTO29CQUFDLE9BQU8sSUFBSTthQUMzQjtZQUNELEtBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFDO2dCQUNsQixJQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7b0JBQUMsT0FBTyxLQUFLO2FBQ25FO1lBQ0QsT0FBTyxJQUFJO1FBQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q0QsU0FBd0IsSUFBSSxLQUFHLENBQUM7QUFBaEMsdUJBQWdDOzs7Ozs7Ozs7Ozs7Ozs7QUNBaEMsNkRBQWlDO0FBQ2pDLDZEQUFpQztBQUdqQyxJQUFJLElBQUksR0FBMkMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3RCxPQUFPLE1BQU0sRUFBRTtBQUNuQixDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7QUFFNUMsa0JBQWUsSUFBSTs7Ozs7Ozs7Ozs7O0FDUm5CLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5sZXQgQnV0dG9uTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yXHJcbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOntcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICAgICAgY29sb3I/OiBCdXR0b25Db2xvclxyXG4gICAgfSl7XHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIVtcImJyYW5kXCIsIFwiZ3JleVwiLCBcInJlZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicHJpbWFyeVwiLCBcImxpbmtcIiwgXCJ3aGl0ZVwiLCBcImJsYWNrXCIsIFwidHJhbnNwYXJlbnRcIl0uaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gXCJicmFuZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBcImJyYW5kXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpeyAvLyBjYWNoaW5nIG1vZHVsZXNcclxuICAgICAgICByZXR1cm4gQnV0dG9uTW9kdWxlcyB8fCAoQnV0dG9uTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIl9ob3Jpem9udGFsXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNvbG9yVHJhbnNwYXJlbnRcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiYnV0dG9uV3JhcHBlclwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJCdXR0b25Db2xvcnNcIl0pLFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgZmxleE1vZHVsZSxcclxuICAgICAgICAgICAgZXVoTW9kdWxlMSxcclxuICAgICAgICAgICAgYnV0dG9uTW9kdWxlLFxyXG4gICAgICAgICAgICBjb2xvcnNNb2R1bGUsXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtidXR0b25Nb2R1bGUuYnV0dG9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Ake2ZsZXhNb2R1bGUuZmxleENoaWxkfSAke2V1aE1vZHVsZTEuYnV0dG9ufSAke2V1aE1vZHVsZTEubG9va0ZpbGxlZH0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uQ29sb3JzW3RoaXMucHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV19ICR7ZXVoTW9kdWxlMS5zaXplU21hbGx9ICR7ZXVoTW9kdWxlMS5ncm93fWB9IHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXVoTW9kdWxlMS5jb250ZW50c30+e3RoaXMucHJvcHMudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbG9yID0gXCJicmFuZFwiIHwgXCJncmV5XCIgfCBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicHJpbWFyeVwiIHwgXCJsaW5rXCIgfCBcIndoaXRlXCIgfCBcImJsYWNrXCIgfCBcInRyYW5zcGFyZW50XCIiLCJpbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG50eXBlIERyb3Bkb3duUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgICBsYWJlbDogc3RyaW5nXHJcbiAgICB9W10sXHJcbiAgICB2YWx1ZVJlbmRlcmVyPzogKGRhdGEpID0+IFJlYWN0Tm9kZSxcclxuICAgIG9wdGlvblJlbmRlcmVyPzogKGRhdGEpID0+IFJlYWN0Tm9kZSxcclxuICAgIG11bHRpVmFsdWVSZW5kZXJlcj86IChkYXRhKSA9PiBSZWFjdE5vZGVcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHNlYXJjaGFibGU/OiBib29sZWFuLFxyXG4gICAgY2xlYXJhYmxlPzogYm9vbGVhbixcclxuICAgIHN0eWxlT3ZlcnJpZGVzPzogQ1NTUHJvcGVydGllcyxcclxuICAgIGxpZ2h0VGhlbWVDb2xvck92ZXJyaWRlcz86IHRoZW1lT3ZlcnJpZGUsXHJcbiAgICBkYXJrVGhlbWVDb2xvck92ZXJyaWRlcz86IHRoZW1lT3ZlcnJpZGUsXHJcbiAgICBpc011bHRpPzogYm9vbGVhblxyXG59XHJcblxyXG50eXBlIHRoZW1lT3ZlcnJpZGUgPSB7XHJcbiAgICBuZXV0cmFsMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDU6IHN0cmluZyxcclxuICAgIG5ldXRyYWwxMDogc3RyaW5nLFxyXG4gICAgbmV1dHJhbDIwOiBzdHJpbmcsXHJcbiAgICBuZXV0cmFsMzA6IHN0cmluZyxcclxuICAgIHByaW1hcnk6IHN0cmluZyxcclxuICAgIHByaW1hcnkyNTogc3RyaW5nLFxyXG4gICAgcHJpbWFyeTUwOiBzdHJpbmcsXHJcbiAgICBzZWxlY3RlZE9wdGlvbkJhY2tncm91bmQ6IHN0cmluZyxcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIG1lbnVCYWNrZ3JvdW5kOiBzdHJpbmcsXHJcbiAgICBtZW51Qm9yZGVyOiBzdHJpbmcsXHJcbiAgICBzY3JvbGxCYXJUaHVtYjogc3RyaW5nLFxyXG4gICAgbXVsdGlPcHRpb25CYWNrZ3JvdW5kOiBzdHJpbmdcclxufVxyXG5cclxubGV0IERyb3Bkb3duTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEcm9wZG93blByb3BzLCBEcm9wZG93blByb3BzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpEcm9wZG93blByb3BzKXtcclxuICAgICAgICBwcm9wcyA9IERyb3Bkb3duLm5vcm1hbGl6ZVByb3BzKHByb3BzKVxyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wc1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplUHJvcHMocHJvcHM6RHJvcGRvd25Qcm9wcyk6RHJvcGRvd25Qcm9wc3tcclxuICAgICAgICBpZighcHJvcHMgfHwgdHlwZW9mIHByb3BzICE9PSBcIm9iamVjdFwiKXByb3BzID0ge31cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuY2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKWRlbGV0ZSBwcm9wcy5jbGFzc05hbWVcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuZGFya1RoZW1lQ29sb3JPdmVycmlkZXMgIT09IFwib2JqZWN0XCIgfHwgIXByb3BzLmRhcmtUaGVtZUNvbG9yT3ZlcnJpZGVzKWRlbGV0ZSBwcm9wcy5kYXJrVGhlbWVDb2xvck92ZXJyaWRlc1xyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5kaXNhYmxlZCAhPT0gXCJib29sZWFuXCIpcHJvcHMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5lcnJvciAhPT0gXCJzdHJpbmdcIilkZWxldGUgcHJvcHMuZXJyb3JcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuaXNNdWx0aSAhPT0gXCJib29sZWFuXCIpcHJvcHMuaXNNdWx0aSA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmxpZ2h0VGhlbWVDb2xvck92ZXJyaWRlcyAhPT0gXCJvYmplY3RcIiB8fCAhcHJvcHMubGlnaHRUaGVtZUNvbG9yT3ZlcnJpZGVzKWRlbGV0ZSBwcm9wcy5saWdodFRoZW1lQ29sb3JPdmVycmlkZXNcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMubXVsdGlWYWx1ZVJlbmRlcmVyICE9PSBcImZ1bmN0aW9uXCIpZGVsZXRlIHByb3BzLm11bHRpVmFsdWVSZW5kZXJlclxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy52YWx1ZVJlbmRlcmVyICE9PSBcImZ1bmN0aW9uXCIpZGVsZXRlIHByb3BzLnZhbHVlUmVuZGVyZXJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub3B0aW9uUmVuZGVyZXIgIT09IFwiZnVuY3Rpb25cIilkZWxldGUgcHJvcHMub3B0aW9uUmVuZGVyZXJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25DaGFuZ2UgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkNoYW5nZSA9IE5PT1BcclxuICAgICAgICBpZighQXJyYXkuaXNBcnJheShwcm9wcy5vcHRpb25zKSlwcm9wcy5vcHRpb25zID0gW3tcclxuICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTm8gb3B0aW9ucyAtIE5vIG9wdGlvbnMgd2FzIHBhc3NlZCB0byBEcm9wZG93bi4gSWYgeW91IG1lYW50IHRvIHB1dCBhbiBlbXB0eSBkcm9wZG93biwgaW5wdXQgYW4gZW1wdHkgYXJyYXkuXCJcclxuICAgICAgICB9XVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5zZWFyY2hhYmxlICE9PSBcImJvb2xlYW5cIilwcm9wcy5zZWFyY2hhYmxlID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuc3R5bGVPdmVycmlkZXMgIT09IFwib2JqZWN0XCIpZGVsZXRlIHByb3BzLnN0eWxlT3ZlcnJpZGVzXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnZhbHVlICE9PSBcInN0cmluZ1wiKXByb3BzLnZhbHVlID0gbnVsbFxyXG5cclxuICAgICAgICByZXR1cm4gcHJvcHNcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkNoYW5nZSh2YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBEcm9wZG93bk1vZHVsZXMgfHwgKERyb3Bkb3duTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJTZWxlY3RUZW1wV3JhcHBlclwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBEcm9wZG93bkNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gRHJvcGRvd24ubm9ybWFsaXplUHJvcHModGhpcy5zdGF0ZSB8fCB0aGlzLnByb3BzKVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8RHJvcGRvd25Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5pbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuXHJcblxyXG50eXBlIFJhZGlvR3JvdXBQcm9wcyA9IHtcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgZGVzYz86IHN0cmluZ1xyXG4gICAgfVtdLFxyXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgc2l6ZT86IFwic21hbGxcInxcIm1lZGl1bVwiLFxyXG4gICAgaXRlbVR5cGU/OiBcImJhclwifFwicGFuZWxcIixcclxuICAgIGluZm9DbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxubGV0IFJhZGlvR3JvdXBNb2R1bGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSYWRpb0dyb3VwUHJvcHMsIFJhZGlvR3JvdXBQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6UmFkaW9Hcm91cFByb3BzKXtcclxuICAgICAgICBwcm9wcyA9IFJhZGlvR3JvdXAubm9ybWFsaXplUHJvcHMocHJvcHMpXHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQcm9wcyhwcm9wczpSYWRpb0dyb3VwUHJvcHMpOlJhZGlvR3JvdXBQcm9wc3tcclxuICAgICAgICBpZighcHJvcHMgfHwgdHlwZW9mIHByb3BzICE9PSBcIm9iamVjdFwiKXByb3BzID0ge31cclxuICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSBmYWxzZVxyXG4gICAgICAgIGlmKCFwcm9wcy5vcHRpb25zIHx8ICFBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpKXtcclxuICAgICAgICAgICAgcHJvcHMub3B0aW9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5vIG9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm8gb3B0aW9ucyB3YXMgcGFzc2VkIHRvIENob2ljZXMuIElmIHlvdSBtZWFudCB0byBkaXNwbGF5IG5vIG9wdGlvbnMgYXQgYWxsLCBwbGVhc2UgcGFzcyBhbiBlbXB0eSBhcnJheS5cIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmMDQ3NDdcIlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXByb3BzLnZhbHVlIHx8IHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIGlmKGRlZmF1bHRPcHRpb25zKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLnZhbHVlID0gXCJub25lXCJcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy52YWx1ZSA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuZGlzYWJsZWQgIT09IFwiYm9vbGVhblwiKXByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuc2l6ZSAhPT0gXCJzdHJpbmdcIiB8fCAhW1wic21hbGxcIiwgXCJtZWRpdW1cIl0uaW5jbHVkZXMocHJvcHMuc2l6ZS50b0xvd2VyQ2FzZSgpKSlwcm9wcy5zaXplID0gXCJtZWRpdW1cIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pdGVtVHlwZSAhPT0gXCJzdHJpbmdcIiB8fCAhW1wiYmFyXCIsIFwicGFuZWxcIl0uaW5jbHVkZXMocHJvcHMuaXRlbVR5cGUpKXByb3BzLml0ZW1UeXBlID0gXCJiYXJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pbmZvQ2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLmluZm9DbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYoIXByb3BzLm9uQ2hhbmdlIHx8IHR5cGVvZiBwcm9wcy5vbkNoYW5nZSAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQ2hhbmdlID0gTk9PUFxyXG5cclxuICAgICAgICByZXR1cm4gcHJvcHNcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShldil7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkNoYW5nZShldi52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IGV2LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBSYWRpb0dyb3VwTW9kdWxlIHx8IChSYWRpb0dyb3VwTW9kdWxlID0gW1xyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmQoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRpc3BsYXlOYW1lID09PSBcIlJhZGlvR3JvdXBcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgUmFkaW9Hcm91cENvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gUmFkaW9Hcm91cC5ub3JtYWxpemVQcm9wcyh0aGlzLnN0YXRlIHx8IHRoaXMucHJvcHMpXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxSYWRpb0dyb3VwQ29tcG9uZW50IG9wdGlvbnM9e3Byb3BzLm9wdGlvbnN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17cHJvcHMudmFsdWV9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gXHJcbiAgICAgICAgICAgIHNpemU9e1JhZGlvR3JvdXBDb21wb25lbnQuU2l6ZXNbcHJvcHMuc2l6ZS50b1VwcGVyQ2FzZSgpXX0gaXRlbVR5cGU9e1JhZGlvR3JvdXBDb21wb25lbnQuSXRlbVR5cGVzW3Byb3BzLml0ZW1UeXBlLnRvVXBwZXJDYXNlKCldfSBcclxuICAgICAgICAgICAgaW5mb0NsYXNzTmFtZT17cHJvcHMuaW5mb0NsYXNzTmFtZX0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2VicGFja0xvYWRlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4uLy4uL21vZHVsZXMvdXVpZFwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5cclxudHlwZSBTd2l0Y2hQcm9wcyA9IHtcclxuICAgIGlkPzogc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCxcclxuICAgIHZhbHVlPzogYm9vbGVhbixcclxuICAgIGZpbGw/OiBzdHJpbmcsXHJcbiAgICB0aGVtZT86IFwiZGVmYXVsdFwifFwiY2xlYXJcIixcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIHNpemU/OiBcImRlZmF1bHRcInxcIm1pbmlcIixcclxuICAgIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xyXG59XHJcblxyXG5sZXQgU3dpdGNoTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3dpdGNoUHJvcHMsIHt2YWx1ZTogYm9vbGVhbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlN3aXRjaFByb3BzKXtcclxuICAgICAgICBwcm9wcyA9IFN3aXRjaC5ub3JtYWxpemVQcm9wcyhwcm9wcylcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQcm9wcyhwcm9wczpTd2l0Y2hQcm9wcyl7XHJcbiAgICAgICAgaWYoIXByb3BzKXByb3BzID0ge31cclxuICAgICAgICBpZighcHJvcHMuaWQgfHwgdHlwZW9mIHByb3BzLmlkICE9PSBcInN0cmluZ1wiKXByb3BzLmlkID0gbnVsbFxyXG4gICAgICAgIGlmKCFwcm9wcy5vbkNoYW5nZSB8fCB0eXBlb2YgcHJvcHMub25DaGFuZ2UgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkNoYW5nZSA9IE5PT1BcclxuICAgICAgICBpZighcHJvcHMudmFsdWUgfHwgdHlwZW9mIHByb3BzLnZhbHVlICE9PSBcImJvb2xlYW5cIilwcm9wcy52YWx1ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYoIXByb3BzLmZpbGwgfHwgdHlwZW9mIHByb3BzLmZpbGwgIT09IFwic3RyaW5nXCIpcHJvcHMuZmlsbCA9IG51bGxcclxuICAgICAgICBpZighcHJvcHMudGhlbWUgfHwgIVtcImRlZmF1bHRcIiwgXCJjbGVhclwiXS5pbmNsdWRlcyhwcm9wcy50aGVtZS50b0xvd2VyQ2FzZSgpKSlwcm9wcy50aGVtZSA9IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgaWYoIShcImRpc2FibGVkXCIgaW4gcHJvcHMpIHx8IHR5cGVvZiBwcm9wcy5kaXNhYmxlZCAhPT0gXCJib29sZWFuXCIpcHJvcHMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmKCFwcm9wcy5jbGFzc05hbWUgfHwgdHlwZW9mIHByb3BzLmNsYXNzTmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5jbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYoIXByb3BzLnNpemUgfHwgIVtcImRlZmF1bHRcIiwgXCJtaW5pXCJdLmluY2x1ZGVzKHByb3BzLnNpemUudG9Mb3dlckNhc2UoKSkpcHJvcHMuc2l6ZSA9IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgaWYoIXByb3BzLnN0eWxlIHx8IHR5cGVvZiBwcm9wcy5zdHlsZSAhPT0gXCJvYmplY3RcIilwcm9wcy5zdHlsZSA9IHt9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9wc1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gU3dpdGNoTW9kdWxlcyB8fCAoU3dpdGNoTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJTd2l0Y2hcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgU3dpdGNoQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBTd2l0Y2gubm9ybWFsaXplUHJvcHModGhpcy5zdGF0ZSB8fCB0aGlzLnByb3BzKVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPFN3aXRjaENvbXBvbmVudCBpZD17cHJvcHMuaWR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZSB8fCBmYWxzZX0gZmlsbD17cHJvcHMuZmlsbH0gXHJcbiAgICAgICAgICAgIHRoZW1lPXtTd2l0Y2hDb21wb25lbnQuVGhlbWVzW3Byb3BzLnRoZW1lLnRvVXBwZXJDYXNlKCldfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBcclxuICAgICAgICAgICAgc2l6ZT17U3dpdGNoQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IHN0eWxlPXtwcm9wcy5zdHlsZX0vPilcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSghdGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6ICF0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5cclxudHlwZSBUZXh0QXJlYVByb3BzID0ge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgYXV0b0ZvY3VzPzogYm9vbGVhbixcclxuICAgIHJlc2l6ZWFibGU/OiBib29sZWFuLFxyXG4gICAgZmxleD86IGJvb2xlYW4sXHJcbiAgICBhdXRvc2l6ZT86IGZhbHNlLFxyXG4gICAgcm93cz86IG51bWJlcixcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uQmx1cj86IChldiwgbmFtZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgb25LZXlEb3duPzogKGV2KSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBUZXh0QXJlYU1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VGV4dEFyZWFQcm9wcywgVGV4dEFyZWFQcm9wcz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHByb3BzID0gVGV4dEFyZWEubm9ybWFsaXplUHJvcHMocHJvcHMpXHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQcm9wcyhwcm9wczpUZXh0QXJlYVByb3BzKTpUZXh0QXJlYVByb3BzIHtcclxuICAgICAgICBpZighcHJvcHMpcHJvcHMgPSB7fVxyXG4gICAgICAgIGlmKCFwcm9wcy5uYW1lIHx8IHR5cGVvZiBwcm9wcy5uYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLm5hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYoIXByb3BzLmRpc2FibGVkIHx8IHR5cGVvZiBwcm9wcy5kaXNhYmxlZCAhPT0gXCJib29sZWFuXCIpcHJvcHMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5wbGFjZWhvbGRlciAhPT0gXCJzdHJpbmdcIilwcm9wcy5wbGFjZWhvbGRlciA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuYXV0b0ZvY3VzICE9PSBcImJvb2xlYW5cIilwcm9wcy5hdXRvRm9jdXMgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5yZXNpemVhYmxlICE9PSBcImJvb2xlYW5cIilwcm9wcy5yZXNpemVhYmxlID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuZmxleCAhPT0gXCJib29sZWFuXCIpcHJvcHMuZmxleCA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmF1dG9zaXplICE9PSBcImJvb2xlYW5cIilwcm9wcy5hdXRvc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnJvd3MgIT09IFwibnVtYmVyXCIpcHJvcHMucm93cyA9IDNcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMudmFsdWUgIT09IFwic3RyaW5nXCIpcHJvcHMudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmVycm9yICE9PSBcInN0cmluZ1wiKXByb3BzLmVycm9yID0gbnVsbFxyXG4gICAgICAgIGlmKHByb3BzLm1heExlbmd0aCAmJiB0eXBlb2YgcHJvcHMubWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKXByb3BzLm1heExlbmd0aCA9IDk5OVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMuY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pZCAhPT0gXCJzdHJpbmdcIilwcm9wcy5pZCA9IG51bGxcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25DaGFuZ2UgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkNoYW5nZSA9IE5PT1BcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25Gb2N1cyAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uRm9jdXMgPSBOT09QXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uQmx1ciAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQmx1ciA9IE5PT1BcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25LZXlEb3duICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25LZXlEb3duID0gTk9PUFxyXG5cclxuICAgICAgICByZXR1cm4gcHJvcHNcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpe1xyXG4gICAgICAgIHJldHVybiBUZXh0QXJlYU1vZHVsZXMgfHwgKFRleHRBcmVhTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0QXJlYVwiKS5kZWZhdWx0XHJcbiAgICAgICAgXSlcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkNoYW5nZSh2YWx1ZSwgbmFtZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25Gb2N1cyhldiwgbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoZXYsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25CbHVyKGV2LCBuYW1lKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbktleURvd24oZXYpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25LZXlEb3duKGV2KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFRleHRBcmVhQ29tcG9uZW50XHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICBsZXQgcHJvcHMgPSBUZXh0QXJlYS5ub3JtYWxpemVQcm9wcyh0aGlzLnN0YXRlIHx8IHRoaXMucHJvcHMpXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxUZXh0QXJlYUNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBOT09QIGZyb20gXCIuLi8uLi9tb2R1bGVzL25vb3BcIlxyXG5cclxudHlwZSBUZXh0SW5wdXRQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCJcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZyxcclxuICAgIG1heExlbmd0aD86IG51bWJlcixcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcclxuICAgIGlucHV0Q2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uRm9jdXM/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZCxcclxuICAgIG9uQmx1cj86IChldiwgbmFtZTogc3RyaW5nLCBpbnB1dDogVGV4dElucHV0KSA9PiB2b2lkXHJcbn1cclxuXHJcbmxldCBUZXh0SW5wdXRNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGV4dElucHV0UHJvcHMsIFRleHRJbnB1dFByb3BzPiB7XHJcbiAgICBoYXNTZXQ6IGJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBwcm9wcyA9IFRleHRJbnB1dC5ub3JtYWxpemVQcm9wcyhwcm9wcylcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHNcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZVByb3BzKHByb3BzOlRleHRJbnB1dFByb3BzKTpUZXh0SW5wdXRQcm9wcyB7XHJcbiAgICAgICAgaWYoIXByb3BzKXByb3BzID0ge31cclxuICAgICAgICBpZighcHJvcHMubmFtZSB8fCB0eXBlb2YgcHJvcHMubmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5uYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5zaXplIHx8ICFbXCJkZWZhdWx0XCIsIFwibWluaVwiXS5pbmNsdWRlcyhwcm9wcy5zaXplKSlwcm9wcy5zaXplID0gXCJkZWZhdWx0XCJcclxuICAgICAgICBpZighcHJvcHMuZGlzYWJsZWQgfHwgdHlwZW9mIHByb3BzLmRpc2FibGVkICE9PSBcImJvb2xlYW5cIilwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnBsYWNlaG9sZGVyICE9PSBcInN0cmluZ1wiKXByb3BzLnBsYWNlaG9sZGVyID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gXCJzdHJpbmdcIilwcm9wcy52YWx1ZSA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuZXJyb3IgIT09IFwic3RyaW5nXCIpcHJvcHMuZXJyb3IgPSBudWxsXHJcbiAgICAgICAgaWYocHJvcHMubWF4TGVuZ3RoICYmIHR5cGVvZiBwcm9wcy5tYXhMZW5ndGggIT09IFwibnVtYmVyXCIpcHJvcHMubWF4TGVuZ3RoID0gOTk5XHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmNsYXNzTmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5jbGFzc05hbWUgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmlucHV0Q2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLmlucHV0Q2xhc3NOYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pZCAhPT0gXCJzdHJpbmdcIilwcm9wcy5pZCA9IG51bGxcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25DaGFuZ2UgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkNoYW5nZSA9IE5PT1BcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMub25Gb2N1cyAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uRm9jdXMgPSBOT09QXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uQmx1ciAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uQmx1ciA9IE5PT1BcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3BzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dElucHV0TW9kdWxlcyB8fCAoVGV4dElucHV0TW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJUZXh0SW5wdXRcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaGFzU2V0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN0YXRlLm9uQ2hhbmdlKHZhbHVlLCBuYW1lLCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMuaGFzU2V0KXJldHVybiAvLyBwcmV2ZW50IGV2ZW50IGlmIHRoZSBvbkNoYW5nZSBoYXMgY2hhbmdlZCB0aGUgdmFsdWUuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnN0YXRlLm9uRm9jdXMoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnN0YXRlLm9uQmx1cihldiwgbmFtZSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gVGV4dElucHV0Lm5vcm1hbGl6ZVByb3BzKHRoaXMuc3RhdGUgfHwgdGhpcy5wcm9wcylcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPFRleHRBcmVhQ29tcG9uZW50IHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0vPlxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgICAgICB0aGlzLmhhc1NldCA9IHRydWVcclxuICAgIH1cclxufSIsImltcG9ydCBEaXNjb3JkQnV0dG9uIGZyb20gXCIuL0Rpc2NvcmQvQnV0dG9uXCJcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi9EaXNjb3JkL1N3aXRjaFwiXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuL0Rpc2NvcmQvUmFkaW9Hcm91cFwiXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9EaXNjb3JkL1RleHRBcmVhXCJcclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9EaXNjb3JkL1RleHRJbnB1dFwiXHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9EaXNjb3JkL0Ryb3Bkb3duXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGlucHV0czoge1xyXG4gICAgICAgIEJ1dHRvbjogRGlzY29yZEJ1dHRvbixcclxuICAgICAgICBTd2l0Y2g6IFN3aXRjaCxcclxuICAgICAgICBDaG9pY2VzOiBSYWRpb0dyb3VwLFxyXG4gICAgICAgIFJhZGlvR3JvdXA6IFJhZGlvR3JvdXAsXHJcbiAgICAgICAgVGV4dEFyZWE6IFRleHRBcmVhLFxyXG4gICAgICAgIFRleHRJbnB1dDogVGV4dElucHV0LFxyXG4gICAgICAgIERyb3Bkb3duOiBEcm9wZG93blxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCJcclxuaW1wb3J0IHV1aWQgZnJvbSBcIi4vbW9kdWxlcy91dWlkXCJcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzLFxyXG4gICAgdXVpZDogdXVpZFxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgUmVhY3Q6dHlwZW9mIGltcG9ydChcInJlYWN0XCIpXHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBMaWdodGNvcmQ6IHtcclxuICAgICAgICAgICAgRGlzY29yZE1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogSW50ZXJuYWwgRGlzY29yZCdzIGRpc3BhdGNoZXIgLSBjYW4gYmUgdXNlZCB0byBzdWJzY3JpYmUgdG8gZ2F0ZXdheSBldmVudHMgLyBjbGllbnQgZXZlbnRzLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3N1YnNjcmlwdGlvbnM6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICBfd2FpdFF1ZXVlOiAoKCkgPT4gdm9pZClbXSxcclxuICAgICAgICAgICAgICAgICAgICBfcHJvY2Vzc2luZ1dhaXRRdWV1ZTogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICBfY3VycmVudERpc3BhdGNoQWN0aW9uVHlwZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBfb3JkZXJlZEFjdGlvbkhhbmRsZXJzOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgX29yZGVyZWRDYWxsYmFja1Rva2VuczogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIF9sYXN0SUQ6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBfZGVwZW5kZW5jeUdyYXBoOiBhbnlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlzcGF0Y2hpbmcoKTpib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIElmIHRoZSBkaXNwYXRjaGVyIGlzbid0IGRpc3BhdGNoaW5nLCB0aGVuIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVEaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXYWl0IHVudGlsIHRoZSBkaXNwYXRjaGVyIGZpbmlzaGVkIGRpc3BhdGNoaW5nLCB0aGVuIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHlEaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBkaXNwYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiBTYW1lIGFzIGRpc3BhdGNoZXIuZGlzcGF0Y2ggKi9cclxuICAgICAgICAgICAgICAgICAgICBfZGlzcGF0Y2goZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogSW50ZXJjZXB0IGV2ZW50cyBiZWZvcmUgdGhleSBoYXBwZW5zLCBpZiByZXR1cm5pbmcgdHJ1ZSwgdGhlbiB0aGUgZXZlbnQgd2lsbCBiZSBibG9ja2VkIGZyb20gZGlzcGF0Y2hpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJjZXB0b3IoaW50ZXJjZXB0b3I6IChldmVudCkgPT4gYm9vbGVhbik6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXYWl0IHVudGlsIHRoZSBkaXNwYXRjaGVyIGhhcyBmaW5pc2hlZCBkaXNwYXRjaGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHdhaXQod2FpdGluZzogKCkgPT4gdm9pZCk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKiogU3Vic2NyaWJlIHRvIGFuIGV2ZW50ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgZXZlbnQuIFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBhY3Rpb25IYW5kbGVyOiBhbnksIHN0b3JlRGlkQ2hhbmdlOiBhbnkpOnZvaWRcclxuICAgICAgICAgICAgICAgICAgICBhZGREZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgX2ludmFsaWRhdGVDYWNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3NXYWl0UXVldWUsXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbXB1dGVPcmRlcmVkQWN0aW9uSGFuZGxlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgX2NvbXB1dGVPcmRlcmVkQ2FsbGJhY2tUb2tlbnNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25zdGFudHM6IGltcG9ydChcIi4vdHlwZXMvRGlzY29yZENvbnN0YW50c1R5cGVzXCIpLmRlZmF1bHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGRldk1vZGU6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBjYWxsUmluZ2luZ0JlYXQ6IGJvb2xlYW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQXBpOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIExpZ2h0Y29yZCdzIGF1dG9yaXphdGlvbiBmb3IgbGlnaHRjb3JkJ3Mgc2VydmVyc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdhaXRzIHVudGlsIHRoZSBmaXJzdCBtb2R1bGUgdGhhdCBtYXRjaCB0aGUgZmlsdGVyIGdldHMgZXhwb3J0ZWRcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0aGF0IHNwZWNpZmllcyB0aGUgbW9kdWxlIHRvIG1hdGNoLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBlbnN1cmVFeHBvcnRlZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTpQcm9taXNlPGFueT5cclxuICAgICAgICAgICAgfSAmIHR5cGVvZiBMaWdodGNvcmRBcGlcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJETW9kdWxlczoge1xyXG4gICAgICAgICAgICBtb2R1bGVzOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoZmlsdGVyOihtb2Q6YW55KT0+Ym9vbGVhbiwgbW9kdWxlcz86YW55W10pOmFueVtdLFxyXG4gICAgICAgICAgICBnZXQoaWQ6bnVtYmVyLCBtb2R1bGVzPzphbnlbXSk6YW55LFxyXG4gICAgICAgICAgICBnZXQoaWRzOiBbbnVtYmVyfCgobW9kOmFueSk9PmJvb2xlYW4pXSwgbW9kdWxlcz86YW55W10pOmFueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRjb3JkQXBpXHJcblxyXG5PYmplY3QuYXNzaWduKHdpbmRvdy5MaWdodGNvcmQuQXBpLCBMaWdodGNvcmRBcGkpIiwiY29uc3QgQkRNb2R1bGVzID0gd2luZG93LkJETW9kdWxlc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IGNsYXNzIFdlYnBhY2tMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgZ2V0KGlkOiBudW1iZXIpOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChpZClcclxuICAgIH1cclxuICAgIGZpbmQoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGZpbHRlcilbMF1cclxuICAgIH1cclxuICAgIGZpbmRCeVVuaXF1ZVByb3BlcnRpZXMocHJvcHM6KHN0cmluZ3xudW1iZXIpW10pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZC5fX2VzTW9kdWxlICYmIChcImRlZmF1bHRcIiBpbiBtb2QpKXtcclxuICAgICAgICAgICAgICAgIGxldCBkb2VzTWF0Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLmRlZmF1bHQsIHByb3ApKWRvZXNNYXRjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkb2VzTWF0Y2gpcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIHByb3ApKXJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlbMF1cclxuICAgIH1cclxuICAgIGZpbHRlcihmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnlbXXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChmaWx0ZXIpXHJcbiAgICB9XHJcbiAgICBmaWx0ZXJCeVVuaXF1ZVByb3BlcnRpZXMocHJvcHM6KHN0cmluZ3xudW1iZXIpW10pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZC5fX2VzTW9kdWxlICYmIChcImRlZmF1bHRcIiBpbiBtb2QpKXtcclxuICAgICAgICAgICAgICAgIGxldCBkb2VzTWF0Y2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLmRlZmF1bHQsIHByb3ApKWRvZXNNYXRjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkb2VzTWF0Y2gpcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IHByb3Agb2YgcHJvcHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIHByb3ApKXJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5PT1AoKXt9IiwiaW1wb3J0ICogYXMgdXVpZHYxIGZyb20gXCJ1dWlkL3YxXCJcclxuaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCJcclxuXHJcbnR5cGUgdXVpZEZ1bmMgPSAoKSA9PiBzdHJpbmdcclxubGV0IHV1aWQ6dXVpZEZ1bmMgJiB7djE6IHV1aWRGdW5jLCB2NDogdXVpZEZ1bmN9ID0gT2JqZWN0LmFzc2lnbihmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHV1aWR2NCgpXHJcbn0sIHt2MTogKCkgPT4gdXVpZHYxKCksIHY0OiAoKSA9PiB1dWlkdjQoKX0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dWlkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92MVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3Y0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=