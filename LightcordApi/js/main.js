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
    render() {
        let flexModule = WebpackLoader_1.default.findByUniqueProperties(["_horizontal"]);
        let euhModule1 = WebpackLoader_1.default.findByUniqueProperties(["colorTransparent"]);
        let buttonModule = WebpackLoader_1.default.findByUniqueProperties(["buttonWrapper"]);
        let colorsModule = WebpackLoader_1.default.findByUniqueProperties(["ButtonColors"]);
        return (React.createElement("div", { className: buttonModule.buttonWrapper },
            React.createElement("button", { type: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${euhModule1.lookFilled} ${colorsModule.ButtonColors[this.props.color.toUpperCase()]} ${euhModule1.sizeSmall} ${euhModule1.grow}`, style: { flex: "0 1 auto" }, onClick: this.props.onClick },
                React.createElement("div", { className: euhModule1.contents }, this.props.text))));
    }
}
exports.default = Button;


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
exports.default = {
    Discord: {
        Button: Button_1.default
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
const LightcordApi = {
    WebpackLoader: WebpackLoader_1.default,
    Components: components_1.default
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2NvbXBvbmVudHMvRGlzY29yZC9CdXR0b24udHN4Iiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9tb2R1bGVzL1dlYnBhY2tMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxpSEFBdUQ7QUFHdkQsTUFBcUIsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUl4QztJQUNFLFlBQVksS0FJWDtRQUNHLElBQUcsS0FBSyxDQUFDLEtBQUssRUFBQztZQUNYLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQWlCO1lBQ3RELElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQ3RILEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTzthQUN4QjtTQUNKO2FBQUk7WUFDRCxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU87U0FDeEI7UUFDRCxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUM7UUFDOUUsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksVUFBVSxHQUFHLHVCQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLFVBQVUsR0FBRyx1QkFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzRSxJQUFJLFlBQVksR0FBRyx1QkFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUUsSUFBSSxZQUFZLEdBQUcsdUJBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXpFLE9BQU8sQ0FBQyw2QkFBSyxTQUFTLEVBQUUsWUFBWSxDQUFDLGFBQWE7WUFDMUMsZ0NBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsR0FBRyxVQUFVLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQ3BRLDZCQUFLLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFPLENBQ3ZELENBQ1AsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWxDRCx5QkFrQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRCxvR0FBNEM7QUFFNUMsa0JBQWU7SUFDWCxPQUFPLEVBQUU7UUFDTCxNQUFNLEVBQUUsZ0JBQWE7S0FDeEI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDTkQsNkdBQW1EO0FBQ25ELDBHQUFnRDtBQUVoRCxNQUFNLFlBQVksR0FBRztJQUNqQixhQUFhLEVBQUUsdUJBQWE7SUFDNUIsVUFBVSxFQUFFLG9CQUFVO0NBQ3pCO0FBbUZELGtCQUFlLFlBQVk7QUFFM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNGakQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7QUFFbEMsa0JBQWUsSUFBSSxNQUFNLGFBQWE7SUFDbEMsZ0JBQWMsQ0FBQztJQUVmLEdBQUcsQ0FBQyxFQUFVO1FBQ1YsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxDQUFDLE1BQTRCO1FBQzdCLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHNCQUFzQixDQUFDLEtBQXVCO1FBQzFDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3pCLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsRUFBQztnQkFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSTtnQkFDcEIsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUM7b0JBQ2xCLElBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7d0JBQUMsU0FBUyxHQUFHLEtBQUs7aUJBQ2hGO2dCQUNELElBQUcsU0FBUztvQkFBQyxPQUFPLElBQUk7YUFDM0I7WUFDRCxLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztnQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO29CQUFDLE9BQU8sS0FBSzthQUNuRTtZQUNELE9BQU8sSUFBSTtRQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCxNQUFNLENBQUMsTUFBNEI7UUFDL0IsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsd0JBQXdCLENBQUMsS0FBdUI7UUFDNUMsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDekIsSUFBRyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFDO2dCQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJO2dCQUNwQixLQUFJLElBQUksSUFBSSxJQUFJLEtBQUssRUFBQztvQkFDbEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt3QkFBQyxTQUFTLEdBQUcsS0FBSztpQkFDaEY7Z0JBQ0QsSUFBRyxTQUFTO29CQUFDLE9BQU8sSUFBSTthQUMzQjtZQUNELEtBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFDO2dCQUNsQixJQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7b0JBQUMsT0FBTyxLQUFLO2FBQ25FO1lBQ0QsT0FBTyxJQUFJO1FBQ2YsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBXZWJwYWNrTG9hZGVyIGZyb20gXCIuLi8uLi9tb2R1bGVzL1dlYnBhY2tMb2FkZXJcIlxyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICBjb2xvcj86IEJ1dHRvbkNvbG9yXHJcbn0+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOntcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXIsXHJcbiAgICAgICAgY29sb3I/OiBCdXR0b25Db2xvclxyXG4gICAgfSl7XHJcbiAgICAgICAgaWYocHJvcHMuY29sb3Ipe1xyXG4gICAgICAgICAgICBwcm9wcy5jb2xvciA9IHByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkgYXMgQnV0dG9uQ29sb3JcclxuICAgICAgICAgICAgaWYoIVtcImJyYW5kXCIsIFwiZ3JleVwiLCBcInJlZFwiLCBcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicHJpbWFyeVwiLCBcImxpbmtcIiwgXCJ3aGl0ZVwiLCBcImJsYWNrXCIsIFwidHJhbnNwYXJlbnRcIl0uaW5jbHVkZXMocHJvcHMuY29sb3IpKXtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbG9yID0gXCJicmFuZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvcHMuY29sb3IgPSBcImJyYW5kXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMub25DbGljayA9IHR5cGVvZiBwcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wcy5vbkNsaWNrIDogKCkgPT4ge31cclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgZmxleE1vZHVsZSA9IFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJfaG9yaXpvbnRhbFwiXSlcclxuICAgICAgICBsZXQgZXVoTW9kdWxlMSA9IFdlYnBhY2tMb2FkZXIuZmluZEJ5VW5pcXVlUHJvcGVydGllcyhbXCJjb2xvclRyYW5zcGFyZW50XCJdKVxyXG4gICAgICAgIGxldCBidXR0b25Nb2R1bGUgPSBXZWJwYWNrTG9hZGVyLmZpbmRCeVVuaXF1ZVByb3BlcnRpZXMoW1wiYnV0dG9uV3JhcHBlclwiXSlcclxuICAgICAgICBsZXQgY29sb3JzTW9kdWxlID0gV2VicGFja0xvYWRlci5maW5kQnlVbmlxdWVQcm9wZXJ0aWVzKFtcIkJ1dHRvbkNvbG9yc1wiXSlcclxuXHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YnV0dG9uTW9kdWxlLmJ1dHRvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtmbGV4TW9kdWxlLmZsZXhDaGlsZH0gJHtldWhNb2R1bGUxLmJ1dHRvbn0gJHtldWhNb2R1bGUxLmxvb2tGaWxsZWR9ICR7Y29sb3JzTW9kdWxlLkJ1dHRvbkNvbG9yc1t0aGlzLnByb3BzLmNvbG9yLnRvVXBwZXJDYXNlKCldfSAke2V1aE1vZHVsZTEuc2l6ZVNtYWxsfSAke2V1aE1vZHVsZTEuZ3Jvd31gfSBzdHlsZT17e2ZsZXg6IFwiMCAxIGF1dG9cIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V1aE1vZHVsZTEuY29udGVudHN9Pnt0aGlzLnByb3BzLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25Db2xvciA9IFwiYnJhbmRcIiB8IFwiZ3JleVwiIHwgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IFwieWVsbG93XCIgfCBcInByaW1hcnlcIiB8IFwibGlua1wiIHwgXCJ3aGl0ZVwiIHwgXCJibGFja1wiIHwgXCJ0cmFuc3BhcmVudFwiIiwiaW1wb3J0IERpc2NvcmRCdXR0b24gZnJvbSBcIi4vRGlzY29yZC9CdXR0b25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgRGlzY29yZDoge1xyXG4gICAgICAgIEJ1dHRvbjogRGlzY29yZEJ1dHRvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdlYnBhY2tMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9XZWJwYWNrTG9hZGVyXCJcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IExpZ2h0Y29yZEFwaSA9IHtcclxuICAgIFdlYnBhY2tMb2FkZXI6IFdlYnBhY2tMb2FkZXIsXHJcbiAgICBDb21wb25lbnRzOiBDb21wb25lbnRzXHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIHZhciBSZWFjdDp0eXBlb2YgaW1wb3J0KFwicmVhY3RcIilcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIExpZ2h0Y29yZDoge1xyXG4gICAgICAgICAgICBEaXNjb3JkTW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBJbnRlcm5hbCBEaXNjb3JkJ3MgZGlzcGF0Y2hlciAtIGNhbiBiZSB1c2VkIHRvIHN1YnNjcmliZSB0byBnYXRld2F5IGV2ZW50cyAvIGNsaWVudCBldmVudHMuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBfc3Vic2NyaXB0aW9uczogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIF93YWl0UXVldWU6ICgoKSA9PiB2b2lkKVtdLFxyXG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzaW5nV2FpdFF1ZXVlOiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50RGlzcGF0Y2hBY3Rpb25UeXBlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIF9vcmRlcmVkQWN0aW9uSGFuZGxlcnM6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICBfb3JkZXJlZENhbGxiYWNrVG9rZW5zOiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgX2xhc3RJRDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIF9kZXBlbmRlbmN5R3JhcGg6IGFueVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNwYXRjaGluZygpOmJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogSWYgdGhlIGRpc3BhdGNoZXIgaXNuJ3QgZGlzcGF0Y2hpbmcsIHRoZW4gZGlzcGF0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBtYXliZURpc3BhdGNoKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdhaXQgdW50aWwgdGhlIGRpc3BhdGNoZXIgZmluaXNoZWQgZGlzcGF0Y2hpbmcsIHRoZW4gZGlzcGF0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBkaXJ0eURpc3BhdGNoKGV2ZW50OiB7dHlwZTogc3RyaW5nLCBbazogc3RyaW5nXTphbnl9KTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIGRpc3BhdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZXZlbnQ6IHt0eXBlOiBzdHJpbmcsIFtrOiBzdHJpbmddOmFueX0pOnZvaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqIFNhbWUgYXMgZGlzcGF0Y2hlci5kaXNwYXRjaCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIF9kaXNwYXRjaChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBJbnRlcmNlcHQgZXZlbnRzIGJlZm9yZSB0aGV5IGhhcHBlbnMsIGlmIHJldHVybmluZyB0cnVlLCB0aGVuIHRoZSBldmVudCB3aWxsIGJlIGJsb2NrZWQgZnJvbSBkaXNwYXRjaGluZy5cclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcmNlcHRvcihpbnRlcmNlcHRvcjogKGV2ZW50KSA9PiBib29sZWFuKTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdhaXQgdW50aWwgdGhlIGRpc3BhdGNoZXIgaGFzIGZpbmlzaGVkIGRpc3BhdGNoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgd2FpdCh3YWl0aW5nOiAoKSA9PiB2b2lkKTp2b2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qKiBTdWJzY3JpYmUgdG8gYW4gZXZlbnQgKi9cclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSkgPT4gdm9pZCk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBldmVudC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IChldmVudDoge3R5cGU6IHN0cmluZywgW2s6IHN0cmluZ106YW55fSkgPT4gdm9pZCk6dm9pZCxcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGFjdGlvbkhhbmRsZXI6IGFueSwgc3RvcmVEaWRDaGFuZ2U6IGFueSk6dm9pZFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZERlcGVuZGVuY2llcyxcclxuICAgICAgICAgICAgICAgICAgICBfaW52YWxpZGF0ZUNhY2hlcyxcclxuICAgICAgICAgICAgICAgICAgICBfcHJvY2Vzc1dhaXRRdWV1ZSxcclxuICAgICAgICAgICAgICAgICAgICBfY29tcHV0ZU9yZGVyZWRBY3Rpb25IYW5kbGVycyxcclxuICAgICAgICAgICAgICAgICAgICBfY29tcHV0ZU9yZGVyZWRDYWxsYmFja1Rva2Vuc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnN0YW50czogaW1wb3J0KFwiLi90eXBlcy9EaXNjb3JkQ29uc3RhbnRzVHlwZXNcIikuZGVmYXVsdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBTZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgZGV2TW9kZTogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGNhbGxSaW5naW5nQmVhdDogYm9vbGVhblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBcGk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogTGlnaHRjb3JkJ3MgYXV0b3JpemF0aW9uIGZvciBsaWdodGNvcmQncyBzZXJ2ZXJzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2FpdHMgdW50aWwgdGhlIGZpcnN0IG1vZHVsZSB0aGF0IG1hdGNoIHRoZSBmaWx0ZXIgZ2V0cyBleHBvcnRlZFxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIGZpbHRlciBUaGUgZmlsdGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBtb2R1bGUgdG8gbWF0Y2guXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGVuc3VyZUV4cG9ydGVkKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOlByb21pc2U8YW55PlxyXG4gICAgICAgICAgICB9ICYgdHlwZW9mIExpZ2h0Y29yZEFwaVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQkRNb2R1bGVzOiB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6YW55W10sXHJcbiAgICAgICAgICAgIGdldChmaWx0ZXI6KG1vZDphbnkpPT5ib29sZWFuLCBtb2R1bGVzPzphbnlbXSk6YW55W10sXHJcbiAgICAgICAgICAgIGdldChpZDpudW1iZXIsIG1vZHVsZXM/OmFueVtdKTphbnksXHJcbiAgICAgICAgICAgIGdldChpZHM6IFtudW1iZXJ8KChtb2Q6YW55KT0+Ym9vbGVhbildLCBtb2R1bGVzPzphbnlbXSk6YW55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWdodGNvcmRBcGlcclxuXHJcbk9iamVjdC5hc3NpZ24od2luZG93LkxpZ2h0Y29yZC5BcGksIExpZ2h0Y29yZEFwaSkiLCJjb25zdCBCRE1vZHVsZXMgPSB3aW5kb3cuQkRNb2R1bGVzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgV2VicGFja0xvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBnZXQoaWQ6IG51bWJlcik6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGlkKVxyXG4gICAgfVxyXG4gICAgZmluZChmaWx0ZXI6IChtb2Q6YW55KSA9PiBib29sZWFuKTphbnl7XHJcbiAgICAgICAgcmV0dXJuIEJETW9kdWxlcy5nZXQoZmlsdGVyKVswXVxyXG4gICAgfVxyXG4gICAgZmluZEJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVswXVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGZpbHRlcjogKG1vZDphbnkpID0+IGJvb2xlYW4pOmFueVtde1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KGZpbHRlcilcclxuICAgIH1cclxuICAgIGZpbHRlckJ5VW5pcXVlUHJvcGVydGllcyhwcm9wczooc3RyaW5nfG51bWJlcilbXSk6YW55e1xyXG4gICAgICAgIHJldHVybiBCRE1vZHVsZXMuZ2V0KChtb2QpID0+IHtcclxuICAgICAgICAgICAgaWYobW9kLl9fZXNNb2R1bGUgJiYgKFwiZGVmYXVsdFwiIGluIG1vZCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvZXNNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QuZGVmYXVsdCwgcHJvcCkpZG9lc01hdGNoID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRvZXNNYXRjaClyZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBvZiBwcm9wcyl7XHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgcHJvcCkpcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==