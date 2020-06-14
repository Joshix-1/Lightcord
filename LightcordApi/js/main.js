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
exports.default = {
    inputs: {
        Button: Button_1.default,
        Switch: Switch_1.default,
        Choices: RadioGroup_1.default,
        RadioGroup: RadioGroup_1.default,
        TextArea: TextArea_1.default,
        TextInput: TextInput_1.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvRGlzY29yZC9CdXR0b24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvUmFkaW9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvRGlzY29yZC9Td2l0Y2gudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvVGV4dEFyZWEudHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL0Rpc2NvcmQvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvbW9kdWxlcy9XZWJwYWNrTG9hZGVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL25vb3AudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL21vZHVsZXMvdXVpZC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvZXh0ZXJuYWwgXCJ1dWlkL3YxXCIiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpL2V4dGVybmFsIFwidXVpZC92NFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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Q3BCLElBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRO1lBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJO1FBQzVELElBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxVQUFVO1lBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxjQUFJO1FBQ2hGLElBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ3ZFLElBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRO1lBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2xFLElBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVM7UUFDcEcsSUFBRyxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTO1lBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ3ZGLElBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLE9BQU8sS0FBSyxDQUFDLFNBQVMsS0FBSyxRQUFRO1lBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFO1FBQy9FLElBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVM7UUFDaEcsSUFBRyxDQUFDLEtBQUssQ0FB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QUFDLE1BQU0sQ0FBQztJQUM3RCxPQUFPLE1BQU0sRUFBRTtBQUNuQixDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7QUFFNUMsa0JBQWUsSUFBSTs7Ozs7Ozs7Ozs7O0FDUm5CLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5sZXQgQnV0dG9uTW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yXHJcbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOntcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICAgICAgY29sb3I/OiBCdXR0b25Db2xvclxyXG4gICAgfSl7XHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIVtcImJyYW5kXCIsIFwiZ3JleVwiLCBcInJlZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicHJpbWFyeVwiLCBcImxpbmtcIiwgXCJ3aGl0ZVwiLCBcImJsYWNrXCIsIFwidHJhbnNwYXJlbnRcIl0uaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gXCJicmFuZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBcImJyYW5kXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kdWxlcygpeyAvLyBjYWNoaW5nIG1vZHVsZXNcclxuICAgICAgICByZXR1cm4gQnV0dG9uTW9kdWxlcyB8fCAoQnV0dG9uTW9kdWxlcyA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIl9ob3Jpem9udGFsXCJdKSxcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcImNvbG9yVHJhbnNwYXJlbnRcIl0pLFxyXG4gICAgICAgICAgICBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiYnV0dG9uV3JhcHBlclwiXSksXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJCdXR0b25Db2xvcnNcIl0pLFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgZmxleE1vZHVsZSxcclxuICAgICAgICAgICAgZXVoTW9kdWxlMSxcclxuICAgICAgICAgICAgYnV0dG9uTW9kdWxlLFxyXG4gICAgICAgICAgICBjb2xvcnNNb2R1bGUsXHJcbiAgICAgICAgXSA9IHRoaXMubW9kdWxlc1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtidXR0b25Nb2R1bGUuYnV0dG9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Ake2ZsZXhNb2R1bGUuZmxleENoaWxkfSAke2V1aE1vZHVsZTEuYnV0dG9ufSAke2V1aE1vZHVsZTEubG9va0ZpbGxlZH0gJHtjb2xvcnNNb2R1bGUuQnV0dG9uQ29sb3JzW3RoaXMucHJvcHMuY29sb3IudG9VcHBlckNhc2UoKV19ICR7ZXVoTW9kdWxlMS5zaXplU21hbGx9ICR7ZXVoTW9kdWxlMS5ncm93fWB9IHN0eWxlPXt7ZmxleDogXCIwIDEgYXV0b1wifX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXVoTW9kdWxlMS5jb250ZW50c30+e3RoaXMucHJvcHMudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbG9yID0gXCJicmFuZFwiIHwgXCJncmV5XCIgfCBcInJlZFwiIHwgXCJncmVlblwiIHwgXCJ5ZWxsb3dcIiB8IFwicHJpbWFyeVwiIHwgXCJsaW5rXCIgfCBcIndoaXRlXCIgfCBcImJsYWNrXCIgfCBcInRyYW5zcGFyZW50XCIiLCJpbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcblxyXG5cclxudHlwZSBDaG9pY2VzUHJvcHMgPSB7XHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAgIGNvbG9yPzogc3RyaW5nLFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICAgIGRlc2M/OiBzdHJpbmdcclxuICAgIH1bXSxcclxuICAgIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcclxuICAgIHNpemU/OiBcInNtYWxsXCJ8XCJtZWRpdW1cIixcclxuICAgIGl0ZW1UeXBlPzogXCJiYXJcInxcInBhbmVsXCIsXHJcbiAgICBpbmZvQ2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmxldCBSYWRpb0dyb3VwTW9kdWxlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2hvaWNlc1Byb3BzLCBDaG9pY2VzUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkNob2ljZXNQcm9wcyl7XHJcbiAgICAgICAgcHJvcHMgPSBSYWRpb0dyb3VwLm5vcm1hbGl6ZVByb3BzKHByb3BzKVxyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wc1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplUHJvcHMocHJvcHM6Q2hvaWNlc1Byb3BzKTpDaG9pY2VzUHJvcHN7XHJcbiAgICAgICAgaWYoIXByb3BzIHx8IHR5cGVvZiBwcm9wcyAhPT0gXCJvYmplY3RcIilwcm9wcyA9IHt9XHJcbiAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0gZmFsc2VcclxuICAgICAgICBpZighcHJvcHMub3B0aW9ucyB8fCAhQXJyYXkuaXNBcnJheShwcm9wcy5vcHRpb25zKSl7XHJcbiAgICAgICAgICAgIHByb3BzLm9wdGlvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJObyBvcHRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIk5vIG9wdGlvbnMgd2FzIHBhc3NlZCB0byBDaG9pY2VzLiBJZiB5b3UgbWVhbnQgdG8gZGlzcGxheSBubyBvcHRpb25zIGF0IGFsbCwgcGxlYXNlIHBhc3MgYW4gZW1wdHkgYXJyYXkuXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZjA0NzQ3XCJcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwcm9wcy52YWx1ZSB8fCB0eXBlb2YgcHJvcHMudmFsdWUgIT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICBpZihkZWZhdWx0T3B0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy52YWx1ZSA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudmFsdWUgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmRpc2FibGVkICE9PSBcImJvb2xlYW5cIilwcm9wcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnNpemUgIT09IFwic3RyaW5nXCIgfHwgIVtcInNtYWxsXCIsIFwibWVkaXVtXCJdLmluY2x1ZGVzKHByb3BzLnNpemUudG9Mb3dlckNhc2UoKSkpcHJvcHMuc2l6ZSA9IFwibWVkaXVtXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuaXRlbVR5cGUgIT09IFwic3RyaW5nXCIgfHwgIVtcImJhclwiLCBcInBhbmVsXCJdLmluY2x1ZGVzKHByb3BzLml0ZW1UeXBlKSlwcm9wcy5pdGVtVHlwZSA9IFwiYmFyXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuaW5mb0NsYXNzTmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5pbmZvQ2xhc3NOYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5vbkNoYW5nZSB8fCB0eXBlb2YgcHJvcHMub25DaGFuZ2UgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkNoYW5nZSA9IE5PT1BcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3BzXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXYpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25DaGFuZ2UoZXYudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBldi52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gUmFkaW9Hcm91cE1vZHVsZSB8fCAoUmFkaW9Hcm91cE1vZHVsZSA9IFtcclxuICAgICAgICAgICAgV2VicGFja0xvYWRlci5maW5kKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kaXNwbGF5TmFtZSA9PT0gXCJSYWRpb0dyb3VwXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFJhZGlvR3JvdXBDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IFJhZGlvR3JvdXAubm9ybWFsaXplUHJvcHModGhpcy5zdGF0ZSB8fCB0aGlzLnByb3BzKVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8UmFkaW9Hcm91cENvbXBvbmVudCBvcHRpb25zPXtwcm9wcy5vcHRpb25zfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3Byb3BzLnZhbHVlfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9IFxyXG4gICAgICAgICAgICBzaXplPXtSYWRpb0dyb3VwQ29tcG9uZW50LlNpemVzW3Byb3BzLnNpemUudG9VcHBlckNhc2UoKV19IGl0ZW1UeXBlPXtSYWRpb0dyb3VwQ29tcG9uZW50Lkl0ZW1UeXBlc1twcm9wcy5pdGVtVHlwZS50b1VwcGVyQ2FzZSgpXX0gXHJcbiAgICAgICAgICAgIGluZm9DbGFzc05hbWU9e3Byb3BzLmluZm9DbGFzc05hbWV9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4uLy4uL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuLi8uLi9tb2R1bGVzL3V1aWRcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuXHJcbnR5cGUgU3dpdGNoUHJvcHMgPSB7XHJcbiAgICBpZD86IHN0cmluZyxcclxuICAgIG9uQ2hhbmdlPzogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgICB2YWx1ZT86IGJvb2xlYW4sXHJcbiAgICBmaWxsPzogc3RyaW5nLFxyXG4gICAgdGhlbWU/OiBcImRlZmF1bHRcInxcImNsZWFyXCIsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBzaXplPzogXCJkZWZhdWx0XCJ8XCJtaW5pXCIsXHJcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcclxufVxyXG5cclxubGV0IFN3aXRjaE1vZHVsZXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN3aXRjaFByb3BzLCB7dmFsdWU6IGJvb2xlYW59PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpTd2l0Y2hQcm9wcyl7XHJcbiAgICAgICAgcHJvcHMgPSBTd2l0Y2gubm9ybWFsaXplUHJvcHMocHJvcHMpXHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplUHJvcHMocHJvcHM6U3dpdGNoUHJvcHMpe1xyXG4gICAgICAgIGlmKCFwcm9wcylwcm9wcyA9IHt9XHJcbiAgICAgICAgaWYoIXByb3BzLmlkIHx8IHR5cGVvZiBwcm9wcy5pZCAhPT0gXCJzdHJpbmdcIilwcm9wcy5pZCA9IG51bGxcclxuICAgICAgICBpZighcHJvcHMub25DaGFuZ2UgfHwgdHlwZW9mIHByb3BzLm9uQ2hhbmdlICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25DaGFuZ2UgPSBOT09QXHJcbiAgICAgICAgaWYoIXByb3BzLnZhbHVlIHx8IHR5cGVvZiBwcm9wcy52YWx1ZSAhPT0gXCJib29sZWFuXCIpcHJvcHMudmFsdWUgPSBmYWxzZVxyXG4gICAgICAgIGlmKCFwcm9wcy5maWxsIHx8IHR5cGVvZiBwcm9wcy5maWxsICE9PSBcInN0cmluZ1wiKXByb3BzLmZpbGwgPSBudWxsXHJcbiAgICAgICAgaWYoIXByb3BzLnRoZW1lIHx8ICFbXCJkZWZhdWx0XCIsIFwiY2xlYXJcIl0uaW5jbHVkZXMocHJvcHMudGhlbWUudG9Mb3dlckNhc2UoKSkpcHJvcHMudGhlbWUgPSBcImRlZmF1bHRcIlxyXG4gICAgICAgIGlmKCEoXCJkaXNhYmxlZFwiIGluIHByb3BzKSB8fCB0eXBlb2YgcHJvcHMuZGlzYWJsZWQgIT09IFwiYm9vbGVhblwiKXByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICBpZighcHJvcHMuY2xhc3NOYW1lIHx8IHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMuY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5zaXplIHx8ICFbXCJkZWZhdWx0XCIsIFwibWluaVwiXS5pbmNsdWRlcyhwcm9wcy5zaXplLnRvTG93ZXJDYXNlKCkpKXByb3BzLnNpemUgPSBcImRlZmF1bHRcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5zdHlsZSB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgIT09IFwib2JqZWN0XCIpcHJvcHMuc3R5bGUgPSB7fVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvcHNcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFN3aXRjaE1vZHVsZXMgfHwgKFN3aXRjaE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiU3dpdGNoXCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIFN3aXRjaENvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gU3dpdGNoLm5vcm1hbGl6ZVByb3BzKHRoaXMuc3RhdGUgfHwgdGhpcy5wcm9wcylcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxTd2l0Y2hDb21wb25lbnQgaWQ9e3Byb3BzLmlkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgfHwgZmFsc2V9IGZpbGw9e3Byb3BzLmZpbGx9IFxyXG4gICAgICAgICAgICB0aGVtZT17U3dpdGNoQ29tcG9uZW50LlRoZW1lc1twcm9wcy50aGVtZS50b1VwcGVyQ2FzZSgpXX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gXHJcbiAgICAgICAgICAgIHNpemU9e1N3aXRjaENvbXBvbmVudC5TaXplc1twcm9wcy5zaXplLnRvVXBwZXJDYXNlKCldfSBzdHlsZT17cHJvcHMuc3R5bGV9Lz4pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoIXRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAhdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuXHJcbnR5cGUgVGV4dEFyZWFQcm9wcyA9IHtcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGF1dG9Gb2N1cz86IGJvb2xlYW4sXHJcbiAgICByZXNpemVhYmxlPzogYm9vbGVhbixcclxuICAgIGZsZXg/OiBib29sZWFuLFxyXG4gICAgYXV0b3NpemU/OiBmYWxzZSxcclxuICAgIHJvd3M/OiBudW1iZXIsXHJcbiAgICB2YWx1ZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoPzogbnVtYmVyLFxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZykgPT4gdm9pZCxcclxuICAgIG9uS2V5RG93bj86IChldikgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dEFyZWFNb2R1bGVzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRleHRBcmVhUHJvcHMsIFRleHRBcmVhUHJvcHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBwcm9wcyA9IFRleHRBcmVhLm5vcm1hbGl6ZVByb3BzKHByb3BzKVxyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplUHJvcHMocHJvcHM6VGV4dEFyZWFQcm9wcyk6VGV4dEFyZWFQcm9wcyB7XHJcbiAgICAgICAgaWYoIXByb3BzKXByb3BzID0ge31cclxuICAgICAgICBpZighcHJvcHMubmFtZSB8fCB0eXBlb2YgcHJvcHMubmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5uYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKCFwcm9wcy5kaXNhYmxlZCB8fCB0eXBlb2YgcHJvcHMuZGlzYWJsZWQgIT09IFwiYm9vbGVhblwiKXByb3BzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMucGxhY2Vob2xkZXIgIT09IFwic3RyaW5nXCIpcHJvcHMucGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmF1dG9Gb2N1cyAhPT0gXCJib29sZWFuXCIpcHJvcHMuYXV0b0ZvY3VzID0gZmFsc2VcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMucmVzaXplYWJsZSAhPT0gXCJib29sZWFuXCIpcHJvcHMucmVzaXplYWJsZSA9IGZhbHNlXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmZsZXggIT09IFwiYm9vbGVhblwiKXByb3BzLmZsZXggPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5hdXRvc2l6ZSAhPT0gXCJib29sZWFuXCIpcHJvcHMuYXV0b3NpemUgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5yb3dzICE9PSBcIm51bWJlclwiKXByb3BzLnJvd3MgPSAzXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLnZhbHVlICE9PSBcInN0cmluZ1wiKXByb3BzLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5lcnJvciAhPT0gXCJzdHJpbmdcIilwcm9wcy5lcnJvciA9IG51bGxcclxuICAgICAgICBpZihwcm9wcy5tYXhMZW5ndGggJiYgdHlwZW9mIHByb3BzLm1heExlbmd0aCAhPT0gXCJudW1iZXJcIilwcm9wcy5tYXhMZW5ndGggPSA5OTlcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuY2xhc3NOYW1lICE9PSBcInN0cmluZ1wiKXByb3BzLmNsYXNzTmFtZSA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuaWQgIT09IFwic3RyaW5nXCIpcHJvcHMuaWQgPSBudWxsXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uQ2hhbmdlICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25DaGFuZ2UgPSBOT09QXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uRm9jdXMgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkZvY3VzID0gTk9PUFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkJsdXIgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkJsdXIgPSBOT09QXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uS2V5RG93biAhPT0gXCJmdW5jdGlvblwiKXByb3BzLm9uS2V5RG93biA9IE5PT1BcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb3BzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZXMoKXtcclxuICAgICAgICByZXR1cm4gVGV4dEFyZWFNb2R1bGVzIHx8IChUZXh0QXJlYU1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVGV4dEFyZWFcIikuZGVmYXVsdFxyXG4gICAgICAgIF0pXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUub25DaGFuZ2UodmFsdWUsIG5hbWUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnN0YXRlLm9uRm9jdXMoZXYsIG5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKGV2LCBuYW1lKXtcclxuICAgICAgICB0aGlzLnN0YXRlLm9uQmx1cihldiwgbmFtZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25LZXlEb3duKGV2KXtcclxuICAgICAgICB0aGlzLnN0YXRlLm9uS2V5RG93bihldilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBUZXh0QXJlYUNvbXBvbmVudFxyXG4gICAgICAgIF0gPSB0aGlzLm1vZHVsZXNcclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gVGV4dEFyZWEubm9ybWFsaXplUHJvcHModGhpcy5zdGF0ZSB8fCB0aGlzLnByb3BzKVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5jcmVhdGUocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8VGV4dEFyZWFDb21wb25lbnQgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbktleURvd249e3RoaXMub25LZXlEb3dufS8+XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgTk9PUCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9ub29wXCJcclxuXHJcbnR5cGUgVGV4dElucHV0UHJvcHMgPSB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgc2l6ZT86IFwiZGVmYXVsdFwifFwibWluaVwiXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIHZhbHVlPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgICBpbnB1dENsYXNzTmFtZT86IHN0cmluZ1xyXG4gICAgaWQ/OiBzdHJpbmcsXHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkZvY3VzPzogKGV2LCBuYW1lOiBzdHJpbmcsIGlucHV0OiBUZXh0SW5wdXQpID0+IHZvaWQsXHJcbiAgICBvbkJsdXI/OiAoZXYsIG5hbWU6IHN0cmluZywgaW5wdXQ6IFRleHRJbnB1dCkgPT4gdm9pZFxyXG59XHJcblxyXG5sZXQgVGV4dElucHV0TW9kdWxlc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRleHRJbnB1dFByb3BzLCBUZXh0SW5wdXRQcm9wcz4ge1xyXG4gICAgaGFzU2V0OiBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgcHJvcHMgPSBUZXh0SW5wdXQubm9ybWFsaXplUHJvcHMocHJvcHMpXHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHByb3BzXHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemVQcm9wcyhwcm9wczpUZXh0SW5wdXRQcm9wcyk6VGV4dElucHV0UHJvcHMge1xyXG4gICAgICAgIGlmKCFwcm9wcylwcm9wcyA9IHt9XHJcbiAgICAgICAgaWYoIXByb3BzLm5hbWUgfHwgdHlwZW9mIHByb3BzLm5hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMubmFtZSA9IFwiXCJcclxuICAgICAgICBpZighcHJvcHMuc2l6ZSB8fCAhW1wiZGVmYXVsdFwiLCBcIm1pbmlcIl0uaW5jbHVkZXMocHJvcHMuc2l6ZSkpcHJvcHMuc2l6ZSA9IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgaWYoIXByb3BzLmRpc2FibGVkIHx8IHR5cGVvZiBwcm9wcy5kaXNhYmxlZCAhPT0gXCJib29sZWFuXCIpcHJvcHMuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5wbGFjZWhvbGRlciAhPT0gXCJzdHJpbmdcIilwcm9wcy5wbGFjZWhvbGRlciA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMudmFsdWUgIT09IFwic3RyaW5nXCIpcHJvcHMudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLmVycm9yICE9PSBcInN0cmluZ1wiKXByb3BzLmVycm9yID0gbnVsbFxyXG4gICAgICAgIGlmKHByb3BzLm1heExlbmd0aCAmJiB0eXBlb2YgcHJvcHMubWF4TGVuZ3RoICE9PSBcIm51bWJlclwiKXByb3BzLm1heExlbmd0aCA9IDk5OVxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgIT09IFwic3RyaW5nXCIpcHJvcHMuY2xhc3NOYW1lID0gXCJcIlxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5pbnB1dENsYXNzTmFtZSAhPT0gXCJzdHJpbmdcIilwcm9wcy5pbnB1dENsYXNzTmFtZSA9IFwiXCJcclxuICAgICAgICBpZih0eXBlb2YgcHJvcHMuaWQgIT09IFwic3RyaW5nXCIpcHJvcHMuaWQgPSBudWxsXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uQ2hhbmdlICE9PSBcImZ1bmN0aW9uXCIpcHJvcHMub25DaGFuZ2UgPSBOT09QXHJcbiAgICAgICAgaWYodHlwZW9mIHByb3BzLm9uRm9jdXMgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkZvY3VzID0gTk9PUFxyXG4gICAgICAgIGlmKHR5cGVvZiBwcm9wcy5vbkJsdXIgIT09IFwiZnVuY3Rpb25cIilwcm9wcy5vbkJsdXIgPSBOT09QXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9wc1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb2R1bGVzKCl7XHJcbiAgICAgICAgcmV0dXJuIFRleHRJbnB1dE1vZHVsZXMgfHwgKFRleHRJbnB1dE1vZHVsZXMgPSBbXHJcbiAgICAgICAgICAgIFdlYnBhY2tMb2FkZXIuZmluZChlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZGlzcGxheU5hbWUgPT09IFwiVGV4dElucHV0XCIpLmRlZmF1bHRcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlLCBuYW1lKXtcclxuICAgICAgICB0aGlzLmhhc1NldCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkNoYW5nZSh2YWx1ZSwgbmFtZSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLmhhc1NldClyZXR1cm4gLy8gcHJldmVudCBldmVudCBpZiB0aGUgb25DaGFuZ2UgaGFzIGNoYW5nZWQgdGhlIHZhbHVlLlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cyhldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkZvY3VzKGV2LCBuYW1lLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cihldiwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vbkJsdXIoZXYsIG5hbWUsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgVGV4dEFyZWFDb21wb25lbnRcclxuICAgICAgICBdID0gdGhpcy5tb2R1bGVzXHJcblxyXG4gICAgICAgIGxldCBwcm9wcyA9IFRleHRJbnB1dC5ub3JtYWxpemVQcm9wcyh0aGlzLnN0YXRlIHx8IHRoaXMucHJvcHMpXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmNyZWF0ZShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxUZXh0QXJlYUNvbXBvbmVudCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9Lz5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgdGhpcy5oYXNTZXQgPSB0cnVlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGlzY29yZEJ1dHRvbiBmcm9tIFwiLi9EaXNjb3JkL0J1dHRvblwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vRGlzY29yZC9Td2l0Y2hcIlxyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi9EaXNjb3JkL1JhZGlvR3JvdXBcIlxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vRGlzY29yZC9UZXh0QXJlYVwiXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4vRGlzY29yZC9UZXh0SW5wdXRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5wdXRzOiB7XHJcbiAgICAgICAgQnV0dG9uOiBEaXNjb3JkQnV0dG9uLFxyXG4gICAgICAgIFN3aXRjaDogU3dpdGNoLFxyXG4gICAgICAgIENob2ljZXM6IFJhZGlvR3JvdXAsXHJcbiAgICAgICAgUmFkaW9Hcm91cDogUmFkaW9Hcm91cCxcclxuICAgICAgICBUZXh0QXJlYTogVGV4dEFyZWEsXHJcbiAgICAgICAgVGV4dElucHV0OiBUZXh0SW5wdXRcclxuICAgIH1cclxufSIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuL21vZHVsZXMvV2VicGFja0xvYWRlclwiXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50c1wiXHJcbmltcG9ydCB1dWlkIGZyb20gXCIuL21vZHVsZXMvdXVpZFwiXHJcblxyXG5jb25zdCBMaWdodGNvcmRBcGkgPSB7XHJcbiAgICBXZWJwYWNrTG9hZGVyOiBXZWJwYWNrTG9hZGVyLFxyXG4gICAgQ29tcG9uZW50czogQ29tcG9uZW50cyxcclxuICAgIHV1aWQ6IHV1aWRcclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgdmFyIFJlYWN0OnR5cGVvZiBpbXBvcnQoXCJyZWFjdFwiKVxyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgTGlnaHRjb3JkOiB7XHJcbiAgICAgICAgICAgIERpc2NvcmRNb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEludGVybmFsIERpc2NvcmQncyBkaXNwYXRjaGVyIC0gY2FuIGJlIHVzZWQgdG8gc3Vic2NyaWJlIHRvIGdhdGV3YXkgZXZlbnRzIC8gY2xpZW50IGV2ZW50cy5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zdWJzY3JpcHRpb25zOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgX3dhaXRRdWV1ZTogKCgpID0+IHZvaWQpW10sXHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3NpbmdXYWl0UXVldWU6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnREaXNwYXRjaEFjdGlvblR5cGU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgX29yZGVyZWRBY3Rpb25IYW5kbGVyczogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIF9vcmRlcmVkQ2FsbGJhY2tUb2tlbnM6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICBfbGFzdElEOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgX2RlcGVuZGVuY3lHcmFwaDogYW55XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc3BhdGNoaW5nKCk6Ym9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBJZiB0aGUgZGlzcGF0Y2hlciBpc24ndCBkaXNwYXRjaGluZywgdGhlbiBkaXNwYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIG1heWJlRGlzcGF0Y2goZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2FpdCB1bnRpbCB0aGUgZGlzcGF0Y2hlciBmaW5pc2hlZCBkaXNwYXRjaGluZywgdGhlbiBkaXNwYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5RGlzcGF0Y2goZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogZGlzcGF0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKiogU2FtZSBhcyBkaXNwYXRjaGVyLmRpc3BhdGNoICovXHJcbiAgICAgICAgICAgICAgICAgICAgX2Rpc3BhdGNoKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIEludGVyY2VwdCBldmVudHMgYmVmb3JlIHRoZXkgaGFwcGVucywgaWYgcmV0dXJuaW5nIHRydWUsIHRoZW4gdGhlIGV2ZW50IHdpbGwgYmUgYmxvY2tlZCBmcm9tIGRpc3BhdGNoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEludGVyY2VwdG9yKGludGVyY2VwdG9yOiAoZXZlbnQpID0+IGJvb2xlYW4pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2FpdCB1bnRpbCB0aGUgZGlzcGF0Y2hlciBoYXMgZmluaXNoZWQgZGlzcGF0Y2hpbmdcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB3YWl0KHdhaXRpbmc6ICgpID0+IHZvaWQpOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqIFN1YnNjcmliZSB0byBhbiBldmVudCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KSA9PiB2b2lkKTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGV2ZW50LiBcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KSA9PiB2b2lkKTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgYWN0aW9uSGFuZGxlcjogYW55LCBzdG9yZURpZENoYW5nZTogYW55KTp2b2lkXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGVwZW5kZW5jaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9pbnZhbGlkYXRlQ2FjaGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzV2FpdFF1ZXVlLFxyXG4gICAgICAgICAgICAgICAgICAgIF9jb21wdXRlT3JkZXJlZEFjdGlvbkhhbmRsZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9jb21wdXRlT3JkZXJlZENhbGxiYWNrVG9rZW5zXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29uc3RhbnRzOiBpbXBvcnQoXCIuL3R5cGVzL0Rpc2NvcmRDb25zdGFudHNUeXBlc1wiKS5kZWZhdWx0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBkZXZNb2RlOiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgY2FsbFJpbmdpbmdCZWF0OiBib29sZWFuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEFwaToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBMaWdodGNvcmQncyBhdXRvcml6YXRpb24gZm9yIGxpZ2h0Y29yZCdzIHNlcnZlcnNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXYWl0cyB1bnRpbCB0aGUgZmlyc3QgbW9kdWxlIHRoYXQgbWF0Y2ggdGhlIGZpbHRlciBnZXRzIGV4cG9ydGVkXHJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gZmlsdGVyIFRoZSBmaWx0ZXIgdGhhdCBzcGVjaWZpZXMgdGhlIG1vZHVsZSB0byBtYXRjaC5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZW5zdXJlRXhwb3J0ZWQoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6UHJvbWlzZTxhbnk+XHJcbiAgICAgICAgICAgIH0gJiB0eXBlb2YgTGlnaHRjb3JkQXBpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCRE1vZHVsZXM6IHtcclxuICAgICAgICAgICAgbW9kdWxlczphbnlbXSxcclxuICAgICAgICAgICAgZ2V0KGZpbHRlcjoobW9kOmFueSk9PmJvb2xlYW4sIG1vZHVsZXM/OmFueVtdKTphbnlbXSxcclxuICAgICAgICAgICAgZ2V0KGlkOm51bWJlciwgbW9kdWxlcz86YW55W10pOmFueSxcclxuICAgICAgICAgICAgZ2V0KGlkczogW251bWJlcnwoKG1vZDphbnkpPT5ib29sZWFuKV0sIG1vZHVsZXM/OmFueVtdKTphbnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0Y29yZEFwaVxyXG5cclxuT2JqZWN0LmFzc2lnbih3aW5kb3cuTGlnaHRjb3JkLkFwaSwgTGlnaHRjb3JkQXBpKSIsImNvbnN0IEJETW9kdWxlcyA9IHdpbmRvdy5CRE1vZHVsZXNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBXZWJwYWNrTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIGdldChpZDogbnVtYmVyKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoaWQpXHJcbiAgICB9XHJcbiAgICBmaW5kKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueXtcclxuICAgICAgICByZXR1cm4gQkRNb2R1bGVzLmdldChmaWx0ZXIpWzBdXHJcbiAgICB9XHJcbiAgICBmaW5kQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pWzBdXHJcbiAgICB9XHJcbiAgICBmaWx0ZXIoZmlsdGVyOiAobW9kOmFueSkgPT4gYm9vbGVhbik6YW55W117XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoZmlsdGVyKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyQnlVbmlxdWVQcm9wZXJ0aWVzKHByb3BzOihzdHJpbmd8bnVtYmVyKVtdKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICBpZihtb2QuX19lc01vZHVsZSAmJiAoXCJkZWZhdWx0XCIgaW4gbW9kKSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9lc01hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZC5kZWZhdWx0LCBwcm9wKSlkb2VzTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZG9lc01hdGNoKXJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBwcm9wIG9mIHByb3BzKXtcclxuICAgICAgICAgICAgICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBwcm9wKSlyZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOT09QKCl7fSIsImltcG9ydCAqIGFzIHV1aWR2MSBmcm9tIFwidXVpZC92MVwiXHJcbmltcG9ydCAqIGFzIHV1aWR2NCBmcm9tIFwidXVpZC92NFwiXHJcblxyXG50eXBlIHV1aWRGdW5jID0gKCkgPT4gc3RyaW5nXHJcbmxldCB1dWlkOnV1aWRGdW5jICYge3YxOiB1dWlkRnVuYywgdjQ6IHV1aWRGdW5jfSA9IE9iamVjdC5hc3NpZ24oZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB1dWlkdjQoKVxyXG59LCB7djE6ICgpID0+IHV1aWR2MSgpLCB2NDogKCkgPT4gdXVpZHY0KCl9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXVpZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9