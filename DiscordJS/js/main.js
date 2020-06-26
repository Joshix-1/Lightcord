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

/***/ "./node_modules/@discordjs/collection/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@discordjs/collection/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Map with additional utility methods. This is used throughout discord.js rather than Arrays for anything that has
 * an ID, for significantly improved performance and ease-of-use.
 * @extends {Map}
 * @property {number} size - The amount of elements in this collection.
 */
class Collection extends Map {
    constructor(entries) {
        super(entries);
        /**
         * Cached array for the `array()` method - will be reset to `null` whenever `set()` or `delete()` are called
         * @name Collection#_array
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true });
        /**
         * Cached array for the `keyArray()` method - will be reset to `null` whenever `set()` or `delete()` are called
         * @name Collection#_keyArray
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_keyArray', { value: null, writable: true, configurable: true });
    }
    /**
     * Identical to [Map.get()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get).
     * Gets an element with the specified key, and returns its value, or `undefined` if the element does not exist.
     * @param {*} key - The key to get from this collection
     * @returns {* | undefined}
     */
    get(key) {
        return super.get(key);
    }
    /**
     * Identical to [Map.set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set).
     * Sets a new element in the collection with the specified key and value.
     * @param {*} key - The key of the element to add
     * @param {*} value - The value of the element to add
     * @returns {Collection}
     */
    set(key, value) {
        this._array = null;
        this._keyArray = null;
        return super.set(key, value);
    }
    /**
     * Identical to [Map.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has).
     * Checks if an element exists in the collection.
     * @param {*} key - The key of the element to check for
     * @returns {boolean} `true` if the element exists, `false` if it does not exist.
     */
    has(key) {
        return super.has(key);
    }
    /**
     * Identical to [Map.delete()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete).
     * Deletes an element from the collection.
     * @param {*} key - The key to delete from the collection
     * @returns {boolean} `true` if the element was removed, `false` if the element does not exist.
     */
    delete(key) {
        this._array = null;
        this._keyArray = null;
        return super.delete(key);
    }
    /**
     * Identical to [Map.clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear).
     * Removes all elements from the collection.
     * @returns {undefined}
     */
    clear() {
        return super.clear();
    }
    /**
     * Creates an ordered array of the values of this collection, and caches it internally. The array will only be
     * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
     * itself. If you don't want this caching behavior, use `[...collection.values()]` or
     * `Array.from(collection.values())` instead.
     * @returns {Array}
     */
    array() {
        if (!this._array || this._array.length !== this.size)
            this._array = [...this.values()];
        return this._array;
    }
    /**
     * Creates an ordered array of the keys of this collection, and caches it internally. The array will only be
     * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
     * itself. If you don't want this caching behavior, use `[...collection.keys()]` or
     * `Array.from(collection.keys())` instead.
     * @returns {Array}
     */
    keyArray() {
        if (!this._keyArray || this._keyArray.length !== this.size)
            this._keyArray = [...this.keys()];
        return this._keyArray;
    }
    first(amount) {
        if (typeof amount === 'undefined')
            return this.values().next().value;
        if (amount < 0)
            return this.last(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.values();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    firstKey(amount) {
        if (typeof amount === 'undefined')
            return this.keys().next().value;
        if (amount < 0)
            return this.lastKey(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.keys();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    last(amount) {
        const arr = this.array();
        if (typeof amount === 'undefined')
            return arr[arr.length - 1];
        if (amount < 0)
            return this.first(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    lastKey(amount) {
        const arr = this.keyArray();
        if (typeof amount === 'undefined')
            return arr[arr.length - 1];
        if (amount < 0)
            return this.firstKey(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    random(amount) {
        let arr = this.array();
        if (typeof amount === 'undefined')
            return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount)
            return [];
        arr = arr.slice();
        return Array.from({ length: amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    randomKey(amount) {
        let arr = this.keyArray();
        if (typeof amount === 'undefined')
            return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount)
            return [];
        arr = arr.slice();
        return Array.from({ length: amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    find(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return val;
        }
        return undefined;
    }
    findKey(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return key;
        }
        return undefined;
    }
    sweep(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const previousSize = this.size;
        for (const [key, val] of this) {
            if (fn(val, key, this))
                this.delete(key);
        }
        return previousSize - this.size;
    }
    filter(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const results = new this.constructor[Symbol.species]();
        for (const [key, val] of this) {
            if (fn(val, key, this))
                results.set(key, val);
        }
        return results;
    }
    partition(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        // TODO: consider removing the <K, V> from the constructors after TS 3.7.0 is released, as it infers it
        const results = [new this.constructor[Symbol.species](), new this.constructor[Symbol.species]()];
        for (const [key, val] of this) {
            if (fn(val, key, this)) {
                results[0].set(key, val);
            }
            else {
                results[1].set(key, val);
            }
        }
        return results;
    }
    flatMap(fn, thisArg) {
        const collections = this.map(fn, thisArg);
        return new this.constructor[Symbol.species]().concat(...collections);
    }
    map(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const iter = this.entries();
        return Array.from({ length: this.size }, () => {
            const [key, value] = iter.next().value;
            return fn(value, key, this);
        });
    }
    mapValues(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const coll = new this.constructor[Symbol.species]();
        for (const [key, val] of this)
            coll.set(key, fn(val, key, this));
        return coll;
    }
    some(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return true;
        }
        return false;
    }
    every(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (!fn(val, key, this))
                return false;
        }
        return true;
    }
    /**
     * Applies a function to produce a single value. Identical in behavior to
     * [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
     * @param {Function} fn Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
     * and `collection`
     * @param {*} [initialValue] Starting value for the accumulator
     * @returns {*}
     * @example collection.reduce((acc, guild) => acc + guild.memberCount, 0);
     */
    reduce(fn, initialValue) {
        let accumulator;
        if (typeof initialValue !== 'undefined') {
            accumulator = initialValue;
            for (const [key, val] of this)
                accumulator = fn(accumulator, val, key, this);
            return accumulator;
        }
        let first = true;
        for (const [key, val] of this) {
            if (first) {
                accumulator = val;
                first = false;
                continue;
            }
            accumulator = fn(accumulator, val, key, this);
        }
        // No items iterated.
        if (first) {
            throw new TypeError('Reduce of empty collection with no initial value');
        }
        return accumulator;
    }
    each(fn, thisArg) {
        this.forEach(fn, thisArg);
        return this;
    }
    tap(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        fn(this);
        return this;
    }
    /**
     * Creates an identical shallow copy of this collection.
     * @returns {Collection}
     * @example const newColl = someColl.clone();
     */
    clone() {
        return new this.constructor[Symbol.species](this);
    }
    /**
     * Combines this collection with others into a new collection. None of the source collections are modified.
     * @param {...Collection} collections Collections to merge
     * @returns {Collection}
     * @example const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
     */
    concat(...collections) {
        const newColl = this.clone();
        for (const coll of collections) {
            for (const [key, val] of coll)
                newColl.set(key, val);
        }
        return newColl;
    }
    /**
     * Checks if this collection shares identical items with another.
     * This is different to checking for equality using equal-signs, because
     * the collections may be different objects, but contain the same data.
     * @param {Collection} collection Collection to compare with
     * @returns {boolean} Whether the collections have identical contents
     */
    equals(collection) {
        if (!collection)
            return false;
        if (this === collection)
            return true;
        if (this.size !== collection.size)
            return false;
        for (const [key, value] of this) {
            if (!collection.has(key) || value !== collection.get(key)) {
                return false;
            }
        }
        return true;
    }
    /**
     * The sort method sorts the items of a collection in place and returns it.
     * The sort is not necessarily stable. The default sort order is according to string Unicode code points.
     * @param {Function} [compareFunction] Specifies a function that defines the sort order.
     * If omitted, the collection is sorted according to each character's Unicode code point value,
     * according to the string conversion of each element.
     * @returns {Collection}
     * @example collection.sort((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
     */
    sort(compareFunction = (x, y) => Number(x > y) || Number(x === y) - 1) {
        const entries = [...this.entries()];
        entries.sort((a, b) => compareFunction(a[1], b[1], a[0], b[0]));
        // Perform clean-up
        super.clear();
        this._array = null;
        this._keyArray = null;
        // Set the new entries
        for (const [k, v] of entries) {
            super.set(k, v);
        }
        return this;
    }
    /**
     * The intersect method returns a new structure containing items where the keys are present in both original structures.
     * @param {Collection} other The other Collection to filter against
     * @returns {Collection}
     */
    intersect(other) {
        return other.filter((_, k) => this.has(k));
    }
    /**
     * The difference method returns a new structure containing items where the key is present in one of the original structures but not the other.
     * @param {Collection} other The other Collection to filter against
     * @returns {Collection}
     */
    difference(other) {
        return other.filter((_, k) => !this.has(k)).concat(this.filter((_, k) => !other.has(k)));
    }
    /**
     * The sorted method sorts the items of a collection and returns it.
     * The sort is not necessarily stable. The default sort order is according to string Unicode code points.
     * @param {Function} [compareFunction] Specifies a function that defines the sort order.
     * If omitted, the collection is sorted according to each character's Unicode code point value,
     * according to the string conversion of each element.
     * @returns {Collection}
     * @example collection.sorted((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
     */
    sorted(compareFunction = (x, y) => Number(x > y) || Number(x === y) - 1) {
        return new this.constructor[Symbol.species]([...this.entries()])
            .sort((av, bv, ak, bk) => compareFunction(av, bv, ak, bk));
    }
}
exports.Collection = Collection;
Collection.default = Collection;
exports.default = Collection;
module.exports = Collection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBaUIsU0FBUSxHQUFTO0lBTXZDLFlBQW1CLE9BQStDO1FBQ2pFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmOzs7OztXQUtHO1FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTNGOzs7OztXQUtHO1FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FBQyxHQUFNO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksR0FBRyxDQUFDLEdBQU0sRUFBRSxLQUFRO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksR0FBRyxDQUFDLEdBQU07UUFDaEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxHQUFNO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFD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Q29sbGVjdGlvbkNvbnN0cnVjdG9yIHtcblx0bmV3KCk6IENvbGxlY3Rpb248dW5rbm93biwgdW5rbm93bj47XG5cdG5ldzxLLCBWPihlbnRyaWVzPzogUmVhZG9ubHlBcnJheTxyZWFkb25seSBbSywgVl0+IHwgbnVsbCk6IENvbGxlY3Rpb248SywgVj47XG5cdG5ldzxLLCBWPihpdGVyYWJsZTogSXRlcmFibGU8cmVhZG9ubHkgW0ssIFZdPik6IENvbGxlY3Rpb248SywgVj47XG5cdHJlYWRvbmx5IHByb3RvdHlwZTogQ29sbGVjdGlvbjx1bmtub3duLCB1bmtub3duPjtcblx0cmVhZG9ubHkgW1N5bWJvbC5zcGVjaWVzXTogQ29sbGVjdGlvbkNvbnN0cnVjdG9yO1xufVxuXG4vKipcbiAqIEEgTWFwIHdpdGggYWRkaXRpb25hbCB1dGlsaXR5IG1ldGhvZHMuIFRoaXMgaXMgdXNlZCB0aHJvdWdob3V0IGRpc2NvcmQuanMgcmF0aGVyIHRoYW4gQXJyYXlzIGZvciBhbnl0aGluZyB0aGF0IGhhc1xuICogYW4gSUQsIGZvciBzaWduaWZpY2FudGx5IGltcHJvdmVkIHBlcmZvcm1hbmNlIGFuZCBlYXNlLW9mLXVzZS5cbiAqIEBleHRlbmRzIHtNYXB9XG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZSAtIFRoZSBhbW91bnQgb2YgZWxlbWVudHMgaW4gdGhpcyBjb2xsZWN0aW9uLlxuICovXG5jbGFzcyBDb2xsZWN0aW9uPEssIFY+IGV4dGVuZHMgTWFwPEssIFY+IHtcblx0cHJpdmF0ZSBfYXJyYXkhOiBWW10gfCBudWxsO1xuXHRwcml2YXRlIF9rZXlBcnJheSE6IEtbXSB8IG51bGw7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdDogdHlwZW9mIENvbGxlY3Rpb24gPSBDb2xsZWN0aW9uO1xuXHRwdWJsaWMgWydjb25zdHJ1Y3RvciddOiB0eXBlb2YgQ29sbGVjdGlvbjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZW50cmllcz86IFJlYWRvbmx5QXJyYXk8cmVhZG9ubHkgW0ssIFZdPiB8IG51bGwpIHtcblx0XHRzdXBlcihlbnRyaWVzKTtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlZCBhcnJheSBmb3IgdGhlIGBhcnJheSgpYCBtZXRob2QgLSB3aWxsIGJlIHJlc2V0IHRvIGBudWxsYCB3aGVuZXZlciBgc2V0KClgIG9yIGBkZWxldGUoKWAgYXJlIGNhbGxlZFxuXHRcdCAqIEBuYW1lIENvbGxlY3Rpb24jX2FycmF5XG5cdFx0ICogQHR5cGUgez9BcnJheX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2FycmF5JywgeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlZCBhcnJheSBmb3IgdGhlIGBrZXlBcnJheSgpYCBtZXRob2QgLSB3aWxsIGJlIHJlc2V0IHRvIGBudWxsYCB3aGVuZXZlciBgc2V0KClgIG9yIGBkZWxldGUoKWAgYXJlIGNhbGxlZFxuXHRcdCAqIEBuYW1lIENvbGxlY3Rpb24jX2tleUFycmF5XG5cdFx0ICogQHR5cGUgez9BcnJheX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2tleUFycmF5JywgeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZGVudGljYWwgdG8gW01hcC5nZXQoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2dldCkuXG5cdCAqIEdldHMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBhbmQgcmV0dXJucyBpdHMgdmFsdWUsIG9yIGB1bmRlZmluZWRgIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlxuXHQgKiBAcGFyYW0geyp9IGtleSAtIFRoZSBrZXkgdG8gZ2V0IGZyb20gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIEByZXR1cm5zIHsqIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0cHVibGljIGdldChrZXk6IEspOiBWIHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvIFtNYXAuc2V0KCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9zZXQpLlxuXHQgKiBTZXRzIGEgbmV3IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGUgc3BlY2lmaWVkIGtleSBhbmQgdmFsdWUuXG5cdCAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBhZGRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCB0byBhZGRcblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqL1xuXHRwdWJsaWMgc2V0KGtleTogSywgdmFsdWU6IFYpOiB0aGlzIHtcblx0XHR0aGlzLl9hcnJheSA9IG51bGw7XG5cdFx0dGhpcy5fa2V5QXJyYXkgPSBudWxsO1xuXHRcdHJldHVybiBzdXBlci5zZXQoa2V5LCB2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvIFtNYXAuaGFzKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9oYXMpLlxuXHQgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBleGlzdHMgaW4gdGhlIGNvbGxlY3Rpb24uXG5cdCAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBjaGVjayBmb3Jcblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZWxlbWVudCBleGlzdHMsIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG5cdCAqL1xuXHRwdWJsaWMgaGFzKGtleTogSyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdXBlci5oYXMoa2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZGVudGljYWwgdG8gW01hcC5kZWxldGUoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2RlbGV0ZSkuXG5cdCAqIERlbGV0ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0geyp9IGtleSAtIFRoZSBrZXkgdG8gZGVsZXRlIGZyb20gdGhlIGNvbGxlY3Rpb25cblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cblx0ICovXG5cdHB1YmxpYyBkZWxldGUoa2V5OiBLKTogYm9vbGVhbiB7XG5cdFx0dGhpcy5fYXJyYXkgPSBudWxsO1xuXHRcdHRoaXMuX2tleUFycmF5ID0gbnVsbDtcblx0XHRyZXR1cm4gc3VwZXIuZGVsZXRlKGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvIFtNYXAuY2xlYXIoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2NsZWFyKS5cblx0ICogUmVtb3ZlcyBhbGwgZWxlbWVudHMgZnJvbSB0aGUgY29sbGVjdGlvbi5cblx0ICogQHJldHVybnMge3VuZGVmaW5lZH1cblx0ICovXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHRyZXR1cm4gc3VwZXIuY2xlYXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIG9yZGVyZWQgYXJyYXkgb2YgdGhlIHZhbHVlcyBvZiB0aGlzIGNvbGxlY3Rpb24sIGFuZCBjYWNoZXMgaXQgaW50ZXJuYWxseS4gVGhlIGFycmF5IHdpbGwgb25seSBiZVxuXHQgKiByZWNvbnN0cnVjdGVkIGlmIGFuIGl0ZW0gaXMgYWRkZWQgdG8gb3IgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uLCBvciBpZiB5b3UgY2hhbmdlIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XG5cdCAqIGl0c2VsZi4gSWYgeW91IGRvbid0IHdhbnQgdGhpcyBjYWNoaW5nIGJlaGF2aW9yLCB1c2UgYFsuLi5jb2xsZWN0aW9uLnZhbHVlcygpXWAgb3Jcblx0ICogYEFycmF5LmZyb20oY29sbGVjdGlvbi52YWx1ZXMoKSlgIGluc3RlYWQuXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdHB1YmxpYyBhcnJheSgpOiBWW10ge1xuXHRcdGlmICghdGhpcy5fYXJyYXkgfHwgdGhpcy5fYXJyYXkubGVuZ3RoICE9PSB0aGlzLnNpemUpIHRoaXMuX2FycmF5ID0gWy4uLnRoaXMudmFsdWVzKCldO1xuXHRcdHJldHVybiB0aGlzLl9hcnJheTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIG9yZGVyZWQgYXJyYXkgb2YgdGhlIGtleXMgb2YgdGhpcyBjb2xsZWN0aW9uLCBhbmQgY2FjaGVzIGl0IGludGVybmFsbHkuIFRoZSBhcnJheSB3aWxsIG9ubHkgYmVcblx0ICogcmVjb25zdHJ1Y3RlZCBpZiBhbiBpdGVtIGlzIGFkZGVkIHRvIG9yIHJlbW92ZWQgZnJvbSB0aGUgY29sbGVjdGlvbiwgb3IgaWYgeW91IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVxuXHQgKiBpdHNlbGYuIElmIHlvdSBkb24ndCB3YW50IHRoaXMgY2FjaGluZyBiZWhhdmlvciwgdXNlIGBbLi4uY29sbGVjdGlvbi5rZXlzKCldYCBvclxuXHQgKiBgQXJyYXkuZnJvbShjb2xsZWN0aW9uLmtleXMoKSlgIGluc3RlYWQuXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdHB1YmxpYyBrZXlBcnJheSgpOiBLW10ge1xuXHRcdGlmICghdGhpcy5fa2V5QXJyYXkgfHwgdGhpcy5fa2V5QXJyYXkubGVuZ3RoICE9PSB0aGlzLnNpemUpIHRoaXMuX2tleUFycmF5ID0gWy4uLnRoaXMua2V5cygpXTtcblx0XHRyZXR1cm4gdGhpcy5fa2V5QXJyYXk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgZmlyc3QgdmFsdWUocykgaW4gdGhpcyBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2Ftb3VudF0gQW1vdW50IG9mIHZhbHVlcyB0byBvYnRhaW4gZnJvbSB0aGUgYmVnaW5uaW5nXG5cdCAqIEByZXR1cm5zIHsqfEFycmF5PCo+fSBBIHNpbmdsZSB2YWx1ZSBpZiBubyBhbW91bnQgaXMgcHJvdmlkZWQgb3IgYW4gYXJyYXkgb2YgdmFsdWVzLCBzdGFydGluZyBmcm9tIHRoZSBlbmQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgZmlyc3QoKTogViB8IHVuZGVmaW5lZDtcblx0cHVibGljIGZpcnN0KGFtb3VudDogbnVtYmVyKTogVltdO1xuXHRwdWJsaWMgZmlyc3QoYW1vdW50PzogbnVtYmVyKTogViB8IFZbXSB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cdFx0aWYgKGFtb3VudCA8IDApIHJldHVybiB0aGlzLmxhc3QoYW1vdW50ICogLTEpO1xuXHRcdGFtb3VudCA9IE1hdGgubWluKHRoaXMuc2l6ZSwgYW1vdW50KTtcblx0XHRjb25zdCBpdGVyID0gdGhpcy52YWx1ZXMoKTtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpOiBWID0+IGl0ZXIubmV4dCgpLnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW5zIHRoZSBmaXJzdCBrZXkocykgaW4gdGhpcyBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2Ftb3VudF0gQW1vdW50IG9mIGtleXMgdG8gb2J0YWluIGZyb20gdGhlIGJlZ2lubmluZ1xuXHQgKiBAcmV0dXJucyB7KnxBcnJheTwqPn0gQSBzaW5nbGUga2V5IGlmIG5vIGFtb3VudCBpcyBwcm92aWRlZCBvciBhbiBhcnJheSBvZiBrZXlzLCBzdGFydGluZyBmcm9tIHRoZSBlbmQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgZmlyc3RLZXkoKTogSyB8IHVuZGVmaW5lZDtcblx0cHVibGljIGZpcnN0S2V5KGFtb3VudDogbnVtYmVyKTogS1tdO1xuXHRwdWJsaWMgZmlyc3RLZXkoYW1vdW50PzogbnVtYmVyKTogSyB8IEtbXSB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy5rZXlzKCkubmV4dCgpLnZhbHVlO1xuXHRcdGlmIChhbW91bnQgPCAwKSByZXR1cm4gdGhpcy5sYXN0S2V5KGFtb3VudCAqIC0xKTtcblx0XHRhbW91bnQgPSBNYXRoLm1pbih0aGlzLnNpemUsIGFtb3VudCk7XG5cdFx0Y29uc3QgaXRlciA9IHRoaXMua2V5cygpO1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCk6IEsgPT4gaXRlci5uZXh0KCkudmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9idGFpbnMgdGhlIGxhc3QgdmFsdWUocykgaW4gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNhcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiB2YWx1ZXMgdG8gb2J0YWluIGZyb20gdGhlIGVuZFxuXHQgKiBAcmV0dXJucyB7KnxBcnJheTwqPn0gQSBzaW5nbGUgdmFsdWUgaWYgbm8gYW1vdW50IGlzIHByb3ZpZGVkIG9yIGFuIGFycmF5IG9mIHZhbHVlcywgc3RhcnRpbmcgZnJvbSB0aGUgc3RhcnQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgbGFzdCgpOiBWIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgbGFzdChhbW91bnQ6IG51bWJlcik6IFZbXTtcblx0cHVibGljIGxhc3QoYW1vdW50PzogbnVtYmVyKTogViB8IFZbXSB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy5hcnJheSgpO1xuXHRcdGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG5cdFx0aWYgKGFtb3VudCA8IDApIHJldHVybiB0aGlzLmZpcnN0KGFtb3VudCAqIC0xKTtcblx0XHRpZiAoIWFtb3VudCkgcmV0dXJuIFtdO1xuXHRcdHJldHVybiBhcnIuc2xpY2UoLWFtb3VudCk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgbGFzdCBrZXkocykgaW4gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNrZXlBcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiBrZXlzIHRvIG9idGFpbiBmcm9tIHRoZSBlbmRcblx0ICogQHJldHVybnMgeyp8QXJyYXk8Kj59IEEgc2luZ2xlIGtleSBpZiBubyBhbW91bnQgaXMgcHJvdmlkZWQgb3IgYW4gYXJyYXkgb2Yga2V5cywgc3RhcnRpbmcgZnJvbSB0aGUgc3RhcnQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgbGFzdEtleSgpOiBLIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgbGFzdEtleShhbW91bnQ6IG51bWJlcik6IEtbXTtcblx0cHVibGljIGxhc3RLZXkoYW1vdW50PzogbnVtYmVyKTogSyB8IEtbXSB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy5rZXlBcnJheSgpO1xuXHRcdGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG5cdFx0aWYgKGFtb3VudCA8IDApIHJldHVybiB0aGlzLmZpcnN0S2V5KGFtb3VudCAqIC0xKTtcblx0XHRpZiAoIWFtb3VudCkgcmV0dXJuIFtdO1xuXHRcdHJldHVybiBhcnIuc2xpY2UoLWFtb3VudCk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB1bmlxdWUgcmFuZG9tIHZhbHVlKHMpIGZyb20gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNhcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiB2YWx1ZXMgdG8gb2J0YWluIHJhbmRvbWx5XG5cdCAqIEByZXR1cm5zIHsqfEFycmF5PCo+fSBBIHNpbmdsZSB2YWx1ZSBpZiBubyBhbW91bnQgaXMgcHJvdmlkZWQgb3IgYW4gYXJyYXkgb2YgdmFsdWVzXG5cdCAqL1xuXHRwdWJsaWMgcmFuZG9tKCk6IFY7XG5cdHB1YmxpYyByYW5kb20oYW1vdW50OiBudW1iZXIpOiBWW107XG5cdHB1YmxpYyByYW5kb20oYW1vdW50PzogbnVtYmVyKTogViB8IFZbXSB7XG5cdFx0bGV0IGFyciA9IHRoaXMuYXJyYXkoKTtcblx0XHRpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xuXHRcdGlmIChhcnIubGVuZ3RoID09PSAwIHx8ICFhbW91bnQpIHJldHVybiBbXTtcblx0XHRhcnIgPSBhcnIuc2xpY2UoKTtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpOiBWID0+IGFyci5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCksIDEpWzBdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW5zIHVuaXF1ZSByYW5kb20ga2V5KHMpIGZyb20gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNrZXlBcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiBrZXlzIHRvIG9idGFpbiByYW5kb21seVxuXHQgKiBAcmV0dXJucyB7KnxBcnJheTwqPn0gQSBzaW5nbGUga2V5IGlmIG5vIGFtb3VudCBpcyBwcm92aWRlZCBvciBhbiBhcnJheVxuXHQgKi9cblx0cHVibGljIHJhbmRvbUtleSgpOiBLO1xuXHRwdWJsaWMgcmFuZG9tS2V5KGFtb3VudDogbnVtYmVyKTogS1tdO1xuXHRwdWJsaWMgcmFuZG9tS2V5KGFtb3VudD86IG51bWJlcik6IEsgfCBLW10ge1xuXHRcdGxldCBhcnIgPSB0aGlzLmtleUFycmF5KCk7XG5cdFx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcblx0XHRpZiAoYXJyLmxlbmd0aCA9PT0gMCB8fCAhYW1vdW50KSByZXR1cm4gW107XG5cdFx0YXJyID0gYXJyLnNsaWNlKCk7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKTogSyA9PiBhcnIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpLCAxKVswXSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoZXMgZm9yIGEgc2luZ2xlIGl0ZW0gd2hlcmUgdGhlIGdpdmVuIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUuIFRoaXMgYmVoYXZlcyBsaWtlXG5cdCAqIFtBcnJheS5maW5kKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbmQpLlxuXHQgKiA8d2Fybj5BbGwgY29sbGVjdGlvbnMgdXNlZCBpbiBEaXNjb3JkLmpzIGFyZSBtYXBwZWQgdXNpbmcgdGhlaXIgYGlkYCBwcm9wZXJ0eSwgYW5kIGlmIHlvdSB3YW50IHRvIGZpbmQgYnkgaWQgeW91XG5cdCAqIHNob3VsZCB1c2UgdGhlIGBnZXRgIG1ldGhvZC4gU2VlXG5cdCAqIFtNRE5dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9nZXQpIGZvciBkZXRhaWxzLjwvd2Fybj5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRlc3Qgd2l0aCAoc2hvdWxkIHJldHVybiBib29sZWFuKVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmZpbmQodXNlciA9PiB1c2VyLnVzZXJuYW1lID09PSAnQm9iJyk7XG5cdCAqL1xuXHRwdWJsaWMgZmluZChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBWIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZDxUPihmbjogKHRoaXM6IFQsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc6IFQpOiBWIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiB1bmtub3duKTogViB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJykgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSByZXR1cm4gdmFsO1xuXHRcdH1cblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIGZvciB0aGUga2V5IG9mIGEgc2luZ2xlIGl0ZW0gd2hlcmUgdGhlIGdpdmVuIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUuIFRoaXMgYmVoYXZlcyBsaWtlXG5cdCAqIFtBcnJheS5maW5kSW5kZXgoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmluZEluZGV4KSxcblx0ICogYnV0IHJldHVybnMgdGhlIGtleSByYXRoZXIgdGhhbiB0aGUgcG9zaXRpb25hbCBpbmRleC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRlc3Qgd2l0aCAoc2hvdWxkIHJldHVybiBib29sZWFuKVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmZpbmRLZXkodXNlciA9PiB1c2VyLnVzZXJuYW1lID09PSAnQm9iJyk7XG5cdCAqL1xuXHRwdWJsaWMgZmluZEtleShmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBLIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZEtleTxUPihmbjogKHRoaXM6IFQsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc6IFQpOiBLIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZEtleShmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiB1bmtub3duKTogSyB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJykgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSByZXR1cm4ga2V5O1xuXHRcdH1cblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgaXRlbXMgdGhhdCBzYXRpc2Z5IHRoZSBwcm92aWRlZCBmaWx0ZXIgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHVzZWQgdG8gdGVzdCAoc2hvdWxkIHJldHVybiBhIGJvb2xlYW4pXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiByZW1vdmVkIGVudHJpZXNcblx0ICovXG5cdHB1YmxpYyBzd2VlcChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBudW1iZXI7XG5cdHB1YmxpYyBzd2VlcDxUPihmbjogKHRoaXM6IFQsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc6IFQpOiBudW1iZXI7XG5cdHB1YmxpYyBzd2VlcChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiB1bmtub3duKTogbnVtYmVyIHtcblx0XHRpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKSBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG5cdFx0Y29uc3QgcHJldmlvdXNTaXplID0gdGhpcy5zaXplO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSB0aGlzLmRlbGV0ZShrZXkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJldmlvdXNTaXplIC0gdGhpcy5zaXplO1xuXHR9XG5cblx0LyoqXG5cdCAqIElkZW50aWNhbCB0b1xuXHQgKiBbQXJyYXkuZmlsdGVyKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbHRlciksXG5cdCAqIGJ1dCByZXR1cm5zIGEgQ29sbGVjdGlvbiBpbnN0ZWFkIG9mIGFuIEFycmF5LlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGVzdCB3aXRoIChzaG91bGQgcmV0dXJuIGJvb2xlYW4pXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24uZmlsdGVyKHVzZXIgPT4gdXNlci51c2VybmFtZSA9PT0gJ0JvYicpO1xuXHQgKi9cblx0cHVibGljIGZpbHRlcihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiB0aGlzO1xuXHRwdWJsaWMgZmlsdGVyPFQ+KGZuOiAodGhpczogVCwgdmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gYm9vbGVhbiwgdGhpc0FyZzogVCk6IHRoaXM7XG5cdHB1YmxpYyBmaWx0ZXIoZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnPzogdW5rbm93bik6IHRoaXMge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRjb25zdCByZXN1bHRzID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdPEssIFY+KCkgYXMgdGhpcztcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuXHRcdFx0aWYgKGZuKHZhbCwga2V5LCB0aGlzKSkgcmVzdWx0cy5zZXQoa2V5LCB2YWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJ0aXRpb25zIHRoZSBjb2xsZWN0aW9uIGludG8gdHdvIGNvbGxlY3Rpb25zIHdoZXJlIHRoZSBmaXJzdCBjb2xsZWN0aW9uXG5cdCAqIGNvbnRhaW5zIHRoZSBpdGVtcyB0aGF0IHBhc3NlZCBhbmQgdGhlIHNlY29uZCBjb250YWlucyB0aGUgaXRlbXMgdGhhdCBmYWlsZWQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHVzZWQgdG8gdGVzdCAoc2hvdWxkIHJldHVybiBhIGJvb2xlYW4pXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb25bXX1cblx0ICogQGV4YW1wbGUgY29uc3QgW2JpZywgc21hbGxdID0gY29sbGVjdGlvbi5wYXJ0aXRpb24oZ3VpbGQgPT4gZ3VpbGQubWVtYmVyQ291bnQgPiAyNTApO1xuXHQgKi9cblx0cHVibGljIHBhcnRpdGlvbihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBbdGhpcywgdGhpc107XG5cdHB1YmxpYyBwYXJ0aXRpb248VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnOiBUKTogW3RoaXMsIHRoaXNdO1xuXHRwdWJsaWMgcGFydGl0aW9uKGZuOiAodmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gYm9vbGVhbiwgdGhpc0FyZz86IHVua25vd24pOiBbdGhpcywgdGhpc10ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHQvLyBUT0RPOiBjb25zaWRlciByZW1vdmluZyB0aGUgPEssIFY+IGZyb20gdGhlIGNvbnN0cnVjdG9ycyBhZnRlciBUUyAzLjcuMCBpcyByZWxlYXNlZCwgYXMgaXQgaW5mZXJzIGl0XG5cdFx0Y29uc3QgcmVzdWx0czogW3RoaXMsIHRoaXNdID0gW25ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXTxLLCBWPigpIGFzIHRoaXMsIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXTxLLCBWPigpIGFzIHRoaXNdO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSB7XG5cdFx0XHRcdHJlc3VsdHNbMF0uc2V0KGtleSwgdmFsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdHNbMV0uc2V0KGtleSwgdmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHQvKipcblx0ICogTWFwcyBlYWNoIGl0ZW0gaW50byBhIENvbGxlY3Rpb24sIHRoZW4gam9pbnMgdGhlIHJlc3VsdHMgaW50byBhIHNpbmdsZSBDb2xsZWN0aW9uLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cblx0ICogW0FycmF5LmZsYXRNYXAoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmxhdE1hcCkuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYSBuZXcgQ29sbGVjdGlvblxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmZsYXRNYXAoZ3VpbGQgPT4gZ3VpbGQubWVtYmVycyk7XG5cdCAqL1xuXHRwdWJsaWMgZmxhdE1hcDxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IENvbGxlY3Rpb248SywgVD4pOiBDb2xsZWN0aW9uPEssIFQ+O1xuXHRwdWJsaWMgZmxhdE1hcDxULCBUaGlzPihmbjogKHRoaXM6IFRoaXMsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IENvbGxlY3Rpb248SywgVD4sIHRoaXNBcmc6IFRoaXMpOiBDb2xsZWN0aW9uPEssIFQ+O1xuXHRwdWJsaWMgZmxhdE1hcDxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IENvbGxlY3Rpb248SywgVD4sIHRoaXNBcmc/OiB1bmtub3duKTogQ29sbGVjdGlvbjxLLCBUPiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLm1hcChmbiwgdGhpc0FyZyk7XG5cdFx0cmV0dXJuIChuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc108SywgVD4oKSBhcyBDb2xsZWN0aW9uPEssIFQ+KS5jb25jYXQoLi4uY29sbGVjdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1hcHMgZWFjaCBpdGVtIHRvIGFub3RoZXIgdmFsdWUgaW50byBhbiBhcnJheS4gSWRlbnRpY2FsIGluIGJlaGF2aW9yIHRvXG5cdCAqIFtBcnJheS5tYXAoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvbWFwKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBlbGVtZW50IG9mIHRoZSBuZXcgYXJyYXksIHRha2luZyB0aHJlZSBhcmd1bWVudHNcblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24ubWFwKHVzZXIgPT4gdXNlci50YWcpO1xuXHQgKi9cblx0cHVibGljIG1hcDxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IFQpOiBUW107XG5cdHB1YmxpYyBtYXA8VGhpcywgVD4oZm46ICh0aGlzOiBUaGlzLCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBULCB0aGlzQXJnOiBUaGlzKTogVFtdO1xuXHRwdWJsaWMgbWFwPFQ+KGZuOiAodmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gVCwgdGhpc0FyZz86IHVua25vd24pOiBUW10ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRjb25zdCBpdGVyID0gdGhpcy5lbnRyaWVzKCk7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuc2l6ZSB9LCAoKTogVCA9PiB7XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVyLm5leHQoKS52YWx1ZTtcblx0XHRcdHJldHVybiBmbih2YWx1ZSwga2V5LCB0aGlzKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYXBzIGVhY2ggaXRlbSB0byBhbm90aGVyIHZhbHVlIGludG8gYSBjb2xsZWN0aW9uLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cblx0ICogW0FycmF5Lm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGVsZW1lbnQgb2YgdGhlIG5ldyBjb2xsZWN0aW9uLCB0YWtpbmcgdGhyZWUgYXJndW1lbnRzXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24ubWFwVmFsdWVzKHVzZXIgPT4gdXNlci50YWcpO1xuXHQgKi9cblx0cHVibGljIG1hcFZhbHVlczxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IFQpOiBDb2xsZWN0aW9uPEssIFQ+O1xuXHRwdWJsaWMgbWFwVmFsdWVzPFRoaXMsIFQ+KGZuOiAodGhpczogVGhpcywgdmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gVCwgdGhpc0FyZzogVGhpcyk6IENvbGxlY3Rpb248SywgVD47XG5cdHB1YmxpYyBtYXBWYWx1ZXM8VD4oZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBULCB0aGlzQXJnPzogdW5rbm93bik6IENvbGxlY3Rpb248SywgVD4ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRjb25zdCBjb2xsID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdPEssIFQ+KCkgYXMgQ29sbGVjdGlvbjxLLCBUPjtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykgY29sbC5zZXQoa2V5LCBmbih2YWwsIGtleSwgdGhpcykpO1xuXHRcdHJldHVybiBjb2xsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGVyZSBleGlzdHMgYW4gaXRlbSB0aGF0IHBhc3NlcyBhIHRlc3QuIElkZW50aWNhbCBpbiBiZWhhdmlvciB0b1xuXHQgKiBbQXJyYXkuc29tZSgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdXNlZCB0byB0ZXN0IChzaG91bGQgcmV0dXJuIGEgYm9vbGVhbilcblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICogQGV4YW1wbGUgY29sbGVjdGlvbi5zb21lKHVzZXIgPT4gdXNlci5kaXNjcmltaW5hdG9yID09PSAnMDAwMCcpO1xuXHQgKi9cblx0cHVibGljIHNvbWUoZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuKTogYm9vbGVhbjtcblx0cHVibGljIHNvbWU8VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnOiBUKTogYm9vbGVhbjtcblx0cHVibGljIHNvbWUoZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnPzogdW5rbm93bik6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuXHRcdFx0aWYgKGZuKHZhbCwga2V5LCB0aGlzKSkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYWxsIGl0ZW1zIHBhc3NlcyBhIHRlc3QuIElkZW50aWNhbCBpbiBiZWhhdmlvciB0b1xuXHQgKiBbQXJyYXkuZXZlcnkoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZXZlcnkpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB1c2VkIHRvIHRlc3QgKHNob3VsZCByZXR1cm4gYSBib29sZWFuKVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmV2ZXJ5KHVzZXIgPT4gIXVzZXIuYm90KTtcblx0ICovXG5cdHB1YmxpYyBldmVyeShmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBib29sZWFuO1xuXHRwdWJsaWMgZXZlcnk8VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnOiBUKTogYm9vbGVhbjtcblx0cHVibGljIGV2ZXJ5KGZuOiAodmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gYm9vbGVhbiwgdGhpc0FyZz86IHVua25vd24pOiBib29sZWFuIHtcblx0XHRpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKSBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcblx0XHRcdGlmICghZm4odmFsLCBrZXksIHRoaXMpKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byBwcm9kdWNlIGEgc2luZ2xlIHZhbHVlLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cblx0ICogW0FycmF5LnJlZHVjZSgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2UpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB1c2VkIHRvIHJlZHVjZSwgdGFraW5nIGZvdXIgYXJndW1lbnRzOyBgYWNjdW11bGF0b3JgLCBgY3VycmVudFZhbHVlYCwgYGN1cnJlbnRLZXlgLFxuXHQgKiBhbmQgYGNvbGxlY3Rpb25gXG5cdCAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gU3RhcnRpbmcgdmFsdWUgZm9yIHRoZSBhY2N1bXVsYXRvclxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQGV4YW1wbGUgY29sbGVjdGlvbi5yZWR1Y2UoKGFjYywgZ3VpbGQpID0+IGFjYyArIGd1aWxkLm1lbWJlckNvdW50LCAwKTtcblx0ICovXG5cdHB1YmxpYyByZWR1Y2U8VD4oZm46IChhY2N1bXVsYXRvcjogVCwgdmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gVCwgaW5pdGlhbFZhbHVlPzogVCk6IFQge1xuXHRcdGxldCBhY2N1bXVsYXRvciE6IFQ7XG5cblx0XHRpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGFjY3VtdWxhdG9yID0gaW5pdGlhbFZhbHVlO1xuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIGFjY3VtdWxhdG9yID0gZm4oYWNjdW11bGF0b3IsIHZhbCwga2V5LCB0aGlzKTtcblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9XG5cdFx0bGV0IGZpcnN0ID0gdHJ1ZTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuXHRcdFx0aWYgKGZpcnN0KSB7XG5cdFx0XHRcdGFjY3VtdWxhdG9yID0gdmFsIGFzIHVua25vd24gYXMgVDtcblx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRhY2N1bXVsYXRvciA9IGZuKGFjY3VtdWxhdG9yLCB2YWwsIGtleSwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaXRlbXMgaXRlcmF0ZWQuXG5cdFx0aWYgKGZpcnN0KSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgY29sbGVjdGlvbiB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjdW11bGF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvXG5cdCAqIFtNYXAuZm9yRWFjaCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvZm9yRWFjaCksXG5cdCAqIGJ1dCByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGluc3RlYWQgb2YgdW5kZWZpbmVkLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnRcblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICogQGV4YW1wbGVcblx0ICogY29sbGVjdGlvblxuXHQgKiAgLmVhY2godXNlciA9PiBjb25zb2xlLmxvZyh1c2VyLnVzZXJuYW1lKSlcblx0ICogIC5maWx0ZXIodXNlciA9PiB1c2VyLmJvdClcblx0ICogIC5lYWNoKHVzZXIgPT4gY29uc29sZS5sb2codXNlci51c2VybmFtZSkpO1xuXHQgKi9cblx0cHVibGljIGVhY2goZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkKTogdGhpcztcblx0cHVibGljIGVhY2g8VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkLCB0aGlzQXJnOiBUKTogdGhpcztcblx0cHVibGljIGVhY2goZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkLCB0aGlzQXJnPzogdW5rbm93bik6IHRoaXMge1xuXHRcdHRoaXMuZm9yRWFjaChmbiBhcyAodmFsdWU6IFYsIGtleTogSywgbWFwOiBNYXA8SywgVj4pID0+IHZvaWQsIHRoaXNBcmcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJ1bnMgYSBmdW5jdGlvbiBvbiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgY29sbGVjdGlvbi5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gZXhlY3V0ZVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb2xsZWN0aW9uXG5cdCAqICAudGFwKGNvbGwgPT4gY29uc29sZS5sb2coY29sbC5zaXplKSlcblx0ICogIC5maWx0ZXIodXNlciA9PiB1c2VyLmJvdClcblx0ICogIC50YXAoY29sbCA9PiBjb25zb2xlLmxvZyhjb2xsLnNpemUpKVxuXHQgKi9cblx0cHVibGljIHRhcChmbjogKGNvbGxlY3Rpb246IHRoaXMpID0+IHZvaWQpOiB0aGlzO1xuXHRwdWJsaWMgdGFwPFQ+KGZuOiAodGhpczogVCwgY29sbGVjdGlvbjogdGhpcykgPT4gdm9pZCwgdGhpc0FyZzogVCk6IHRoaXM7XG5cdHB1YmxpYyB0YXAoZm46IChjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkLCB0aGlzQXJnPzogdW5rbm93bik6IHRoaXMge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRmbih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGlkZW50aWNhbCBzaGFsbG93IGNvcHkgb2YgdGhpcyBjb2xsZWN0aW9uLlxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICogQGV4YW1wbGUgY29uc3QgbmV3Q29sbCA9IHNvbWVDb2xsLmNsb25lKCk7XG5cdCAqL1xuXHRwdWJsaWMgY2xvbmUoKTogdGhpcyB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSh0aGlzKSBhcyB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbWJpbmVzIHRoaXMgY29sbGVjdGlvbiB3aXRoIG90aGVycyBpbnRvIGEgbmV3IGNvbGxlY3Rpb24uIE5vbmUgb2YgdGhlIHNvdXJjZSBjb2xsZWN0aW9ucyBhcmUgbW9kaWZpZWQuXG5cdCAqIEBwYXJhbSB7Li4uQ29sbGVjdGlvbn0gY29sbGVjdGlvbnMgQ29sbGVjdGlvbnMgdG8gbWVyZ2Vcblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbnN0IG5ld0NvbGwgPSBzb21lQ29sbC5jb25jYXQoc29tZU90aGVyQ29sbCwgYW5vdGhlckNvbGwsIG9oQm95QUNvbGwpO1xuXHQgKi9cblx0cHVibGljIGNvbmNhdCguLi5jb2xsZWN0aW9uczogQ29sbGVjdGlvbjxLLCBWPltdKTogdGhpcyB7XG5cdFx0Y29uc3QgbmV3Q29sbCA9IHRoaXMuY2xvbmUoKTtcblx0XHRmb3IgKGNvbnN0IGNvbGwgb2YgY29sbGVjdGlvbnMpIHtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBjb2xsKSBuZXdDb2xsLnNldChrZXksIHZhbCk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdDb2xsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGlzIGNvbGxlY3Rpb24gc2hhcmVzIGlkZW50aWNhbCBpdGVtcyB3aXRoIGFub3RoZXIuXG5cdCAqIFRoaXMgaXMgZGlmZmVyZW50IHRvIGNoZWNraW5nIGZvciBlcXVhbGl0eSB1c2luZyBlcXVhbC1zaWducywgYmVjYXVzZVxuXHQgKiB0aGUgY29sbGVjdGlvbnMgbWF5IGJlIGRpZmZlcmVudCBvYmplY3RzLCBidXQgY29udGFpbiB0aGUgc2FtZSBkYXRhLlxuXHQgKiBAcGFyYW0ge0NvbGxlY3Rpb259IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiB0byBjb21wYXJlIHdpdGhcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGNvbGxlY3Rpb25zIGhhdmUgaWRlbnRpY2FsIGNvbnRlbnRzXG5cdCAqL1xuXHRwdWJsaWMgZXF1YWxzKGNvbGxlY3Rpb246IENvbGxlY3Rpb248SywgVj4pOiBib29sZWFuIHtcblx0XHRpZiAoIWNvbGxlY3Rpb24pIHJldHVybiBmYWxzZTtcblx0XHRpZiAodGhpcyA9PT0gY29sbGVjdGlvbikgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHRoaXMuc2l6ZSAhPT0gY29sbGVjdGlvbi5zaXplKSByZXR1cm4gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcykge1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLmhhcyhrZXkpIHx8IHZhbHVlICE9PSBjb2xsZWN0aW9uLmdldChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHNvcnQgbWV0aG9kIHNvcnRzIHRoZSBpdGVtcyBvZiBhIGNvbGxlY3Rpb24gaW4gcGxhY2UgYW5kIHJldHVybnMgaXQuXG5cdCAqIFRoZSBzb3J0IGlzIG5vdCBuZWNlc3NhcmlseSBzdGFibGUuIFRoZSBkZWZhdWx0IHNvcnQgb3JkZXIgaXMgYWNjb3JkaW5nIHRvIHN0cmluZyBVbmljb2RlIGNvZGUgcG9pbnRzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyZUZ1bmN0aW9uXSBTcGVjaWZpZXMgYSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNvcnQgb3JkZXIuXG5cdCAqIElmIG9taXR0ZWQsIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZCBhY2NvcmRpbmcgdG8gZWFjaCBjaGFyYWN0ZXIncyBVbmljb2RlIGNvZGUgcG9pbnQgdmFsdWUsXG5cdCAqIGFjY29yZGluZyB0byB0aGUgc3RyaW5nIGNvbnZlcnNpb24gb2YgZWFjaCBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICogQGV4YW1wbGUgY29sbGVjdGlvbi5zb3J0KCh1c2VyQSwgdXNlckIpID0+IHVzZXJBLmNyZWF0ZWRUaW1lc3RhbXAgLSB1c2VyQi5jcmVhdGVkVGltZXN0YW1wKTtcblx0ICovXG5cdHB1YmxpYyBzb3J0KGNvbXBhcmVGdW5jdGlvbjogKGZpcnN0VmFsdWU6IFYsIHNlY29uZFZhbHVlOiBWLCBmaXJzdEtleTogSywgc2Vjb25kS2V5OiBLKSA9PiBudW1iZXIgPSAoeCwgeSk6IG51bWJlciA9PiBOdW1iZXIoeCA+IHkpIHx8IE51bWJlcih4ID09PSB5KSAtIDEpOiB0aGlzIHtcblx0XHRjb25zdCBlbnRyaWVzID0gWy4uLnRoaXMuZW50cmllcygpXTtcblx0XHRlbnRyaWVzLnNvcnQoKGEsIGIpOiBudW1iZXIgPT4gY29tcGFyZUZ1bmN0aW9uKGFbMV0sIGJbMV0sIGFbMF0sIGJbMF0pKTtcblxuXHRcdC8vIFBlcmZvcm0gY2xlYW4tdXBcblx0XHRzdXBlci5jbGVhcigpO1xuXHRcdHRoaXMuX2FycmF5ID0gbnVsbDtcblx0XHR0aGlzLl9rZXlBcnJheSA9IG51bGw7XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBlbnRyaWVzXG5cdFx0Zm9yIChjb25zdCBbaywgdl0gb2YgZW50cmllcykge1xuXHRcdFx0c3VwZXIuc2V0KGssIHYpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgaW50ZXJzZWN0IG1ldGhvZCByZXR1cm5zIGEgbmV3IHN0cnVjdHVyZSBjb250YWluaW5nIGl0ZW1zIHdoZXJlIHRoZSBrZXlzIGFyZSBwcmVzZW50IGluIGJvdGggb3JpZ2luYWwgc3RydWN0dXJlcy5cblx0ICogQHBhcmFtIHtDb2xsZWN0aW9ufSBvdGhlciBUaGUgb3RoZXIgQ29sbGVjdGlvbiB0byBmaWx0ZXIgYWdhaW5zdFxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICovXG5cdHB1YmxpYyBpbnRlcnNlY3Qob3RoZXI6IENvbGxlY3Rpb248SywgVj4pOiBDb2xsZWN0aW9uPEssIFY+IHtcblx0XHRyZXR1cm4gb3RoZXIuZmlsdGVyKChfLCBrKSA9PiB0aGlzLmhhcyhrKSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGRpZmZlcmVuY2UgbWV0aG9kIHJldHVybnMgYSBuZXcgc3RydWN0dXJlIGNvbnRhaW5pbmcgaXRlbXMgd2hlcmUgdGhlIGtleSBpcyBwcmVzZW50IGluIG9uZSBvZiB0aGUgb3JpZ2luYWwgc3RydWN0dXJlcyBidXQgbm90IHRoZSBvdGhlci5cblx0ICogQHBhcmFtIHtDb2xsZWN0aW9ufSBvdGhlciBUaGUgb3RoZXIgQ29sbGVjdGlvbiB0byBmaWx0ZXIgYWdhaW5zdFxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICovXG5cdHB1YmxpYyBkaWZmZXJlbmNlKG90aGVyOiBDb2xsZWN0aW9uPEssIFY+KTogQ29sbGVjdGlvbjxLLCBWPiB7XG5cdFx0cmV0dXJuIG90aGVyLmZpbHRlcigoXywgaykgPT4gIXRoaXMuaGFzKGspKS5jb25jYXQodGhpcy5maWx0ZXIoKF8sIGspID0+ICFvdGhlci5oYXMoaykpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgc29ydGVkIG1ldGhvZCBzb3J0cyB0aGUgaXRlbXMgb2YgYSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIGl0LlxuXHQgKiBUaGUgc29ydCBpcyBub3QgbmVjZXNzYXJpbHkgc3RhYmxlLiBUaGUgZGVmYXVsdCBzb3J0IG9yZGVyIGlzIGFjY29yZGluZyB0byBzdHJpbmcgVW5pY29kZSBjb2RlIHBvaW50cy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmVGdW5jdGlvbl0gU3BlY2lmaWVzIGEgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzb3J0IG9yZGVyLlxuXHQgKiBJZiBvbWl0dGVkLCB0aGUgY29sbGVjdGlvbiBpcyBzb3J0ZWQgYWNjb3JkaW5nIHRvIGVhY2ggY2hhcmFjdGVyJ3MgVW5pY29kZSBjb2RlIHBvaW50IHZhbHVlLFxuXHQgKiBhY2NvcmRpbmcgdG8gdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIGVhY2ggZWxlbWVudC5cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24uc29ydGVkKCh1c2VyQSwgdXNlckIpID0+IHVzZXJBLmNyZWF0ZWRUaW1lc3RhbXAgLSB1c2VyQi5jcmVhdGVkVGltZXN0YW1wKTtcblx0ICovXG5cdHB1YmxpYyBzb3J0ZWQoY29tcGFyZUZ1bmN0aW9uOiAoZmlyc3RWYWx1ZTogViwgc2Vjb25kVmFsdWU6IFYsIGZpcnN0S2V5OiBLLCBzZWNvbmRLZXk6IEspID0+IG51bWJlciA9ICh4LCB5KTogbnVtYmVyID0+IE51bWJlcih4ID4geSkgfHwgTnVtYmVyKHggPT09IHkpIC0gMSk6IHRoaXMge1xuXHRcdHJldHVybiAobmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKFsuLi50aGlzLmVudHJpZXMoKV0pIGFzIHRoaXMpXG5cdFx0XHQuc29ydCgoYXYsIGJ2LCBhaywgYmspID0+IGNvbXBhcmVGdW5jdGlvbihhdiwgYnYsIGFrLCBiaykpO1xuXHR9XG59XG5cbmV4cG9ydCB7IENvbGxlY3Rpb24gfTtcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb247XG4iXX0=

/***/ }),

/***/ "./src/client/client.ts":
/*!******************************!*\
  !*** ./src/client/client.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __webpack_require__(/*! events */ "events");
const DiscordJSError_1 = __webpack_require__(/*! ../util/DiscordJSError */ "./src/util/DiscordJSError.ts");
const collection_1 = __webpack_require__(/*! @discordjs/collection */ "./node_modules/@discordjs/collection/dist/index.js");
const DiscordToModules_1 = __webpack_require__(/*! ../util/DiscordToModules */ "./src/util/DiscordToModules.ts");
const util_1 = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
const ClientUser_1 = __webpack_require__(/*! ../structures/ClientUser */ "./src/structures/ClientUser.ts");
let hasInit = false;
function setupEvents(client) {
    let dispatcher = DiscordToModules_1.DispatcherModule;
    dispatcher.subscribe("CONNECTION_OPEN", () => {
        client.emit("self.ready");
    });
    dispatcher.subscribe("MESSAGE_CREATE", action => {
        if (action.optimistic)
            return; // disable not sent messages
        action.message && client.emit("self.messageCreate", action.message);
    });
}
class Client extends events_1.EventEmitter {
    constructor() {
        super();
        this.user = null;
        if (hasInit)
            throw new DiscordJSError_1.default("Cannot initialized more than one client.");
        hasInit = true;
        setupEvents(this);
        this.on("self.ready", () => {
            try {
                this.user = new ClientUser_1.default(DiscordToModules_1.UserModule.getCurrentUser());
                console.log(this.user);
            }
            catch (e) {
                console.error(e);
                console.log(DiscordToModules_1.UserModule.getCurrentUser, DiscordToModules_1.UserModule, typeof DiscordToModules_1.UserModule.getCurrentUser);
            }
            this.emit("ready");
        });
        this.on("self.messageCreate", (message) => {
            this.emit("messageCreate", util_1.createMessage(message));
        });
    }
    get broadcasts() {
        return []; // not giving any since they're not supported.
    }
    get browser() {
        return true; // since we're in electron, we're always in browser
    }
    get channels() {
        const channels = Object.values(DiscordToModules_1.channelsModule.getAllChannels());
        return new collection_1.default(channels.map(e => ([e.id, util_1.createChannel(e)])));
    }
    get emojis() {
        return new collection_1.default();
    }
    get guilds() {
        const channels = Object.values(DiscordToModules_1.guildModule.getAllGuilds());
        return new collection_1.default(channels.map(e => ([e.id, util_1.createGuild(e)])));
    }
    get users() {
        const users = Object.values(DiscordToModules_1.UserModule.getUsers());
        return new collection_1.default(users.map(e => [e.id, util_1.createUser(e)]));
    }
    /** Warnings and overrides for functions that are not compatible. */
    async login() {
        throw new DiscordJSError_1.default("Client#login is not supported. DiscordJS on lightcord will use the connected account.");
    }
    get token() {
        throw new DiscordJSError_1.default("Client#token is not supported. DiscordJS on lightcord will use the connected account.");
    }
}
exports.default = Client;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __webpack_require__(/*! ./client/client */ "./src/client/client.ts");
const client = new client_1.default();
const DiscordJSExporrts = {
    Client: client_1.default,
    client
};
window.DiscordJS = DiscordJSExporrts;
window.DiscordJSClient = client;
exports.default = DiscordJSExporrts;


/***/ }),

/***/ "./src/structures/BaseChannel.ts":
/*!***************************************!*\
  !*** ./src/structures/BaseChannel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DiscordToModules_1 = __webpack_require__(/*! ../util/DiscordToModules */ "./src/util/DiscordToModules.ts");
const BaseStructure_1 = __webpack_require__(/*! ./BaseStructure */ "./src/structures/BaseStructure.ts");
const Snowflake_1 = __webpack_require__(/*! ../util/Snowflake */ "./src/util/Snowflake.ts");
class BaseChannel extends BaseStructure_1.default {
    constructor(channel) {
        super();
        this.id = channel.id;
        this.deleted = false;
        this.DiscordChannel = channel;
    }
    get createdAt() {
        return new Date(this.createdTimestamp);
    }
    get createdTimestamp() {
        return Snowflake_1.default.deconstruct(this.id).timestamp;
    }
    delete() {
        return DiscordToModules_1.channelsModule.delete(this.id);
    }
}
exports.default = BaseChannel;


/***/ }),

/***/ "./src/structures/BaseStructure.ts":
/*!*****************************************!*\
  !*** ./src/structures/BaseStructure.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseStructure {
    constructor() { }
    get client() {
        return window.DiscordJSClient;
    }
}
exports.default = BaseStructure;


/***/ }),

/***/ "./src/structures/ClientUser.ts":
/*!**************************************!*\
  !*** ./src/structures/ClientUser.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __webpack_require__(/*! ./User */ "./src/structures/User.ts");
class ClientUser extends User_1.default {
}
exports.default = ClientUser;


/***/ }),

/***/ "./src/structures/Guild.ts":
/*!*********************************!*\
  !*** ./src/structures/Guild.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DiscordToModules_1 = __webpack_require__(/*! ../util/DiscordToModules */ "./src/util/DiscordToModules.ts");
const BaseStructure_1 = __webpack_require__(/*! ./BaseStructure */ "./src/structures/BaseStructure.ts");
const util_1 = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
const collection_1 = __webpack_require__(/*! @discordjs/collection */ "./node_modules/@discordjs/collection/dist/index.js");
const Snowflake_1 = __webpack_require__(/*! ../util/Snowflake */ "./src/util/Snowflake.ts");
const Constants_1 = __webpack_require__(/*! ../util/Constants */ "./src/util/Constants.ts");
const DiscordJSError_1 = __webpack_require__(/*! ../util/DiscordJSError */ "./src/util/DiscordJSError.ts");
class Guild extends BaseStructure_1.default {
    constructor(data) {
        super();
        this.deleted = false;
        this.DiscordGuild = data;
    }
    get id() {
        return this.DiscordGuild.id;
    }
    get afkChannel() {
        if (!this.afkChannelID)
            return null;
        return util_1.createChannel(DiscordToModules_1.channelsModule.getChannel(this.afkChannelID));
    }
    get afkChannelID() {
        return this.DiscordGuild.afkChannelId;
    }
    get afkTimeout() {
        return this.DiscordGuild.afkTimeout;
    }
    get applicationID() {
        return this.DiscordGuild.application_id;
    }
    get available() {
        return true;
    }
    get channels() {
        {
            return this.client.channels.filter(channel => channel.guild_id === this.id);
        }
    }
    get createdAt() {
        return Snowflake_1.default.deconstruct(this.id).date;
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    get defaultChannel() {
        return this.channels.get(this.id);
    }
    get defaultMessageNotifications() {
        return this.DiscordGuild.defaultMessageNotifications;
    }
    get embedEnabled() {
        return true;
    }
    get emojis() {
        return this.client.emojis.filter(e => e.guild_id === this.id);
    }
    get explicitContentFilter() {
        return this.DiscordGuild.explicitContentFilter;
    }
    get features() {
        return Array.from(this.DiscordGuild.features);
    }
    get icon() {
        return this.DiscordGuild.icon;
    }
    get iconURL() {
        return this.DiscordGuild.getIconURL().replace(".webp", ".jpg");
    }
    get joinedAt() {
        return new Date(this.DiscordGuild.joinedAt);
    }
    get joinedTimestamp() {
        return this.DiscordGuild.joinedAt.getTime();
    }
    get large() {
        return false;
    }
    get me() {
        return this.members.find(member => member.id === this.client.user.id);
    }
    get memberCount() {
        return DiscordToModules_1.guildModule.getMemberCount(this.id);
    }
    get members() {
        return new collection_1.default(DiscordToModules_1.guildModule.getMembers(this.id).map(member => [member.userId, util_1.createGuildMember(member)]));
    }
    get messageNotifications() {
        return Constants_1.MessageNotificationType[DiscordToModules_1.guildModule.getMessageNotifications(this.id)];
    }
    get mfaLevel() {
        return this.DiscordGuild.mfaLevel;
    }
    get mobilePush() {
        return DiscordToModules_1.guildModule.getNotificationsState().userGuildSettings[this.id].mobile_push;
    }
    get muted() {
        return DiscordToModules_1.guildModule.getNotificationsState().userGuildSettings[this.id].muted;
    }
    get name() {
        return this.DiscordGuild.name;
    }
    get nameAcronym() {
        return this.DiscordGuild.acronym;
    }
    get owner() {
        return this.members.get(this.ownerID);
    }
    get ownerID() {
        return this.DiscordGuild.ownerId;
    }
    get position() {
        let guildPositions = DiscordToModules_1.UserSettingsModule.getAllSettings().guildPositions;
        if (!guildPositions)
            return 0;
        return guildPositions.indexOf(this.id);
    }
    get presences() {
        return new collection_1.default();
    }
    get region() {
        return this.DiscordGuild.region;
    }
    get roles() {
        return new collection_1.default(Object.values(this.DiscordGuild.roles).map(role => [role.id, util_1.createRole(role)]));
    }
    get splash() {
        return this.DiscordGuild.splash;
    }
    get splashURL() {
        return DiscordToModules_1.CdnModule.getGuildSplashURL({
            id: this.id,
            splash: this.splash,
            size: DiscordToModules_1.ConstantsModule.SPLASH_SIZE
        });
    }
    get suppressEveryone() {
        return DiscordToModules_1.guildModule.getNotificationsState().userGuildSettings[this.id].suppress_everyone;
    }
    get systemChannel() {
        return this.client.channels.get(this.systemChannelID);
    }
    get systemChannelID() {
        return this.DiscordGuild.systemChannelId;
    }
    get verificationLevel() {
        return this.DiscordGuild.verificationLevel;
    }
    get verified() {
        return this.features.includes("VERIFIED");
    }
    get voiceConnection() {
        return null;
    }
    get banner() {
        return this.DiscordGuild.banner;
    }
    get bannerURL() {
        return DiscordToModules_1.CdnModule.getGuildBannerURL({
            id: this.id,
            banner: this.banner
        });
    }
    get description() {
        return this.DiscordGuild.description;
    }
    get embedChannel() {
        return null;
    }
    get embedChannelID() {
        return null;
    }
    get maximumMembers() {
        return 250000;
    }
    get maximumPresences() {
        return 5000;
    }
    get widgetEnabled() {
        return false;
    }
    get widgetChannelID() {
        return null;
    }
    get widgetChannel() {
        return null;
    }
    get vanityURLCode() {
        return this.DiscordGuild.vanityURLCode;
    }
    /** FUNCTIONS */
    async acknowledge() {
        DiscordToModules_1.AckModule.bulkAck(this.channels.filter(e => e.type === "text").map(e => {
            return {
                channelId: e.id,
                messageId: DiscordToModules_1.channelsModule.lastMessageId(e.id)
            };
        }));
    }
    addMember(...args) {
        return Promise.reject(new DiscordJSError_1.default("This method is not available on Lightcord."));
    }
    allowDMs(allow) {
        let restricted = DiscordToModules_1.UserSettingsModule.getAllSettings().restrictedGuilds;
        if (allow) {
            if (!restricted.includes(this.id))
                return Promise.resolve(this);
            restricted = restricted.filter(e => e !== this.id);
        }
        else {
            if (restricted.includes(this.id))
                return Promise.resolve(this);
            restricted.push(this.id);
        }
        return DiscordToModules_1.UserSettingsModule.updateRemoteSettings({
            restrictedGuilds: restricted
        }).then(() => this);
    }
    ban(user, { days = 0, reason = null }) {
        let id = util_1.resolveUserID(user);
        if (!id)
            return Promise.reject(new DiscordJSError_1.default("Given user could not be resolved to an user ID."));
    }
    fetch() {
        let guild = DiscordToModules_1.guildModule.getGuild(this.id);
        if (!guild) {
            this.deleted = true;
            return Promise.resolve(this);
        }
        this.DiscordGuild = guild;
        return Promise.resolve(this);
    }
}
exports.default = Guild;


/***/ }),

/***/ "./src/structures/GuildChannel.ts":
/*!****************************************!*\
  !*** ./src/structures/GuildChannel.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseChannel_1 = __webpack_require__(/*! ./BaseChannel */ "./src/structures/BaseChannel.ts");
const DiscordToModules_1 = __webpack_require__(/*! ../util/DiscordToModules */ "./src/util/DiscordToModules.ts");
const util_1 = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
class GuildChannel extends BaseChannel_1.default {
    constructor(channel) {
        super(channel);
    }
    get guild() {
        return util_1.createGuild(DiscordToModules_1.guildModule.getGuild(this.DiscordChannel.guild_id));
    }
    get guild_id() {
        return this.DiscordChannel.guild_id;
    }
}
exports.default = GuildChannel;


/***/ }),

/***/ "./src/structures/GuildMember.ts":
/*!***************************************!*\
  !*** ./src/structures/GuildMember.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStructure_1 = __webpack_require__(/*! ./BaseStructure */ "./src/structures/BaseStructure.ts");
class GuildMember extends BaseStructure_1.default {
    constructor(data) {
        super();
        this.DiscordGuildMember = data;
    }
    get id() {
        return this.DiscordGuildMember.userId;
    }
}
exports.default = GuildMember;


/***/ }),

/***/ "./src/structures/Message.ts":
/*!***********************************!*\
  !*** ./src/structures/Message.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStructure_1 = __webpack_require__(/*! ./BaseStructure */ "./src/structures/BaseStructure.ts");
const DiscordToModules_1 = __webpack_require__(/*! ../util/DiscordToModules */ "./src/util/DiscordToModules.ts");
const User_1 = __webpack_require__(/*! ./User */ "./src/structures/User.ts");
class Message extends BaseStructure_1.default {
    constructor(data) {
        super();
        this.DiscordMessage = data;
    }
    get author() {
        return new User_1.default(DiscordToModules_1.UserModule.getUser(this.DiscordMessage.author.id));
    }
}
exports.default = Message;


/***/ }),

/***/ "./src/structures/Role.ts":
/*!********************************!*\
  !*** ./src/structures/Role.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStructure_1 = __webpack_require__(/*! ./BaseStructure */ "./src/structures/BaseStructure.ts");
class Role extends BaseStructure_1.default {
    constructor(data) {
        super();
        this.DiscordRole = data;
    }
}
exports.default = Role;


/***/ }),

/***/ "./src/structures/TextChannel.ts":
/*!***************************************!*\
  !*** ./src/structures/TextChannel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextChannel = void 0;
const GuildChannel_1 = __webpack_require__(/*! ./GuildChannel */ "./src/structures/GuildChannel.ts");
const Constants_1 = __webpack_require__(/*! ../util/Constants */ "./src/util/Constants.ts");
class TextChannel extends GuildChannel_1.default /* implements TextBasedChannel*/ {
    constructor(data) {
        super(data);
    }
    get type() {
        return Constants_1.ChannelTypes.TEXT;
    }
}
exports.TextChannel = TextChannel;


/***/ }),

/***/ "./src/structures/User.ts":
/*!********************************!*\
  !*** ./src/structures/User.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStructure_1 = __webpack_require__(/*! ./BaseStructure */ "./src/structures/BaseStructure.ts");
const DiscordToModules_1 = __webpack_require__(/*! ../util/DiscordToModules */ "./src/util/DiscordToModules.ts");
class User extends BaseStructure_1.default {
    constructor(data) {
        super();
        this.DiscordUser = data;
    }
    get id() {
        return this.DiscordUser.id;
    }
    get avatar() {
        return this.DiscordUser.avatar;
    }
    get avatarURL() {
        return this.DiscordUser.avatarURL;
    }
    get bot() {
        return this.DiscordUser.bot;
    }
    get createdAt() {
        return new Date(this.DiscordUser.createdAt);
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    get defaultAvatarURL() {
        return DiscordToModules_1.CdnModule.getDefaultAvatarURL(this.discriminator);
    }
    get discriminator() {
        return this.DiscordUser.discriminator;
    }
    get displayAvatarURL() {
        return DiscordToModules_1.CdnModule.getUserAvatarURL({
            id: this.id,
            avatar: this.avatar,
            bot: this.bot,
            discriminator: this.discriminator
        }, "png", 4096);
    }
    get dmChannel() {
        return this.client.channels.find(e => e.type === "dm" && e.recipient.id === this.id);
    }
    get lastMessage() {
        return null;
    }
    get lastMessageID() {
        return null;
    }
    get note() {
        let note = DiscordToModules_1.UserModule.getNote(this.id);
        if (!note || !note.note)
            return null;
        return note.note;
    }
    get presence() {
        return null;
    }
}
exports.default = User;


/***/ }),

/***/ "./src/util/Constants.ts":
/*!*******************************!*\
  !*** ./src/util/Constants.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AVATAR_SIZE = exports.MessageNotificationType = exports.ChannelTypes = void 0;
var ChannelTypes;
(function (ChannelTypes) {
    ChannelTypes["TEXT"] = "text";
    ChannelTypes["DM"] = "dm";
    ChannelTypes["VOICE"] = "voice";
    ChannelTypes["GROUP_DM"] = "group";
    ChannelTypes["CATEGORY"] = "category";
    ChannelTypes["NEWS"] = "news";
    ChannelTypes["STORE"] = "store";
})(ChannelTypes = exports.ChannelTypes || (exports.ChannelTypes = {}));
var MessageNotificationType;
(function (MessageNotificationType) {
    MessageNotificationType[MessageNotificationType["EVERYTHING"] = 0] = "EVERYTHING";
    MessageNotificationType[MessageNotificationType["MENTIONS"] = 1] = "MENTIONS";
    MessageNotificationType[MessageNotificationType["NOTHING"] = 2] = "NOTHING";
    MessageNotificationType[MessageNotificationType["INHERIT"] = 3] = "INHERIT";
})(MessageNotificationType = exports.MessageNotificationType || (exports.MessageNotificationType = {}));
exports.AVATAR_SIZE = 4096;


/***/ }),

/***/ "./src/util/DiscordJSError.ts":
/*!************************************!*\
  !*** ./src/util/DiscordJSError.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DiscordJSError extends Error {
    constructor(message) {
        super(message);
        this.name = "DiscordJSError";
    }
}
exports.default = DiscordJSError;


/***/ }),

/***/ "./src/util/DiscordToModules.ts":
/*!**************************************!*\
  !*** ./src/util/DiscordToModules.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatcherModule = exports.AckModule = exports.CdnModule = exports.UserModule = exports.ConstantsModule = exports.UserSettingsModule = exports.guildModule = exports.channelsModule = exports.requireModule = void 0;
const LazyLoader_1 = __webpack_require__(/*! ./LazyLoader */ "./src/util/LazyLoader.ts");
function getModule(name) {
    return exports[name + "Module"];
}
exports.default = getModule;
const BDModules = window.BDModules;
function requireModule(filter) {
    let module = BDModules.get(filter)[0];
    return module && module.default || module;
}
exports.requireModule = requireModule;
exports.channelsModule = LazyLoader_1.lazyLoad("channels");
exports.guildModule = LazyLoader_1.lazyLoad("guilds");
exports.UserSettingsModule = LazyLoader_1.lazyLoad("userSettings");
exports.ConstantsModule = LazyLoader_1.lazyLoad("constants");
exports.UserModule = LazyLoader_1.lazyLoad("users");
exports.CdnModule = LazyLoader_1.lazyLoad("cdn");
exports.AckModule = LazyLoader_1.lazyLoad("acknowledge");
exports.DispatcherModule = LazyLoader_1.lazyLoad("dispatcher");


/***/ }),

/***/ "./src/util/LazyLoader.ts":
/*!********************************!*\
  !*** ./src/util/LazyLoader.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyLoad = void 0;
const cache = {};
function lazyLoad(id) {
    if (cache[id])
        return cache[id];
    let mdl = null;
    let setModule = () => {
        if (!mdl)
            mdl = __webpack_require__("./src/util/modules sync recursive ^\\.\\/.*$")("./" + id);
    };
    const handlers = {
        get(target, prop) {
            setModule();
            return mdl[prop];
        },
        set(target, prop, value) {
            setModule();
            mdl[prop] = value;
            return true;
        },
        apply(target, thisArg, args) {
            setModule();
            mdl.apply(this, args);
        },
        construct(target, args) {
            setModule();
            const prototype = Object.create(mdl.prototype);
            handlers.apply(target, prototype, args);
            return prototype;
        }
    };
    let proxy = new Proxy({}, handlers);
    return cache[id] = proxy;
}
exports.lazyLoad = lazyLoad;


/***/ }),

/***/ "./src/util/Snowflake.ts":
/*!*******************************!*\
  !*** ./src/util/Snowflake.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");
// Discord epoch (2015-01-01T00:00:00.000Z)
const EPOCH = 1420070400000;
let INCREMENT = 0;
/**
 * A container for useful snowflake-related methods.
 */
class SnowflakeUtil {
    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }
    /**
     * A Twitter snowflake, except the epoch is 2015-01-01T00:00:00.000Z
     * ```
     * If we have a snowflake '266241948824764416' we can represent it as binary:
     *
     * 64                                          22     17     12          0
     *  000000111011000111100001101001000101000000  00001  00000  000000000000
     *       number of ms since Discord epoch       worker  pid    increment
     * ```
     * @typedef {string} Snowflake
     */
    /**
     * Generates a Discord snowflake.
     * <info>This hardcodes the worker ID as 1 and the process ID as 0.</info>
     * @param {number|Date} [timestamp=Date.now()] Timestamp or date of the snowflake to generate
     * @returns {Snowflake} The generated snowflake
     */
    static generate(timestamp = Date.now()) {
        if (timestamp instanceof Date)
            timestamp = timestamp.getTime();
        if (typeof timestamp !== 'number' || isNaN(timestamp)) {
            throw new TypeError(`"timestamp" argument must be a number (received ${isNaN(timestamp) ? 'NaN' : typeof timestamp})`);
        }
        if (INCREMENT >= 4095)
            INCREMENT = 0;
        // eslint-disable-next-line max-len
        const BINARY = `${(timestamp - EPOCH).toString(2).padStart(42, '0')}0000100000${(INCREMENT++)
            .toString(2)
            .padStart(12, '0')}`;
        return Util.binaryToID(BINARY);
    }
    /**
     * A deconstructed snowflake.
     * @typedef {Object} DeconstructedSnowflake
     * @property {number} timestamp Timestamp the snowflake was created
     * @property {Date} date Date the snowflake was created
     * @property {number} workerID Worker ID in the snowflake
     * @property {number} processID Process ID in the snowflake
     * @property {number} increment Increment in the snowflake
     * @property {string} binary Binary representation of the snowflake
     */
    /**
     * Deconstructs a Discord snowflake.
     * @param {Snowflake} snowflake Snowflake to deconstruct
     * @returns {DeconstructedSnowflake} Deconstructed snowflake
     */
    static deconstruct(snowflake) {
        const BINARY = Util.idToBinary(snowflake)
            .toString()
            .padStart(64, '0');
        const res = {
            timestamp: parseInt(BINARY.substring(0, 42), 2) + EPOCH,
            workerID: parseInt(BINARY.substring(42, 47), 2),
            processID: parseInt(BINARY.substring(47, 52), 2),
            increment: parseInt(BINARY.substring(52, 64), 2),
            binary: BINARY,
        };
        Object.defineProperty(res, 'date', {
            get: function get() {
                return new Date(this.timestamp);
            },
            enumerable: true,
        });
        return res;
    }
}
exports.default = SnowflakeUtil;


/***/ }),

/***/ "./src/util/modules sync recursive ^\\.\\/.*$":
/*!****************************************!*\
  !*** ./src/util/modules sync ^\.\/.*$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./acknowledge": "./src/util/modules/acknowledge.ts",
	"./acknowledge.ts": "./src/util/modules/acknowledge.ts",
	"./cdn": "./src/util/modules/cdn.ts",
	"./cdn.ts": "./src/util/modules/cdn.ts",
	"./channels": "./src/util/modules/channels.ts",
	"./channels.ts": "./src/util/modules/channels.ts",
	"./constants": "./src/util/modules/constants.ts",
	"./constants.ts": "./src/util/modules/constants.ts",
	"./dispatcher": "./src/util/modules/dispatcher.ts",
	"./dispatcher.ts": "./src/util/modules/dispatcher.ts",
	"./guilds": "./src/util/modules/guilds.ts",
	"./guilds.ts": "./src/util/modules/guilds.ts",
	"./messages": "./src/util/modules/messages.ts",
	"./messages.ts": "./src/util/modules/messages.ts",
	"./userSettings": "./src/util/modules/userSettings.ts",
	"./userSettings.ts": "./src/util/modules/userSettings.ts",
	"./users": "./src/util/modules/users.ts",
	"./users.ts": "./src/util/modules/users.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/util/modules sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/util/modules/acknowledge.ts":
/*!*****************************************!*\
  !*** ./src/util/modules/acknowledge.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
let acknowledgeModuleInternal1 = DiscordToModules_1.requireModule(e => e && e.bulkAck);
module.exports = {
    bulkAck: acknowledgeModuleInternal1.bulkAck
};


/***/ }),

/***/ "./src/util/modules/cdn.ts":
/*!*********************************!*\
  !*** ./src/util/modules/cdn.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
let cdnModuleInternal1 = DiscordToModules_1.requireModule(e => e.default && e.default.getGuildSplashURL);
let cdnModuleInternal2 = DiscordToModules_1.requireModule(e => e.default && e.default.DEFAULT_AVATARS);
module.exports = {
    getUserAvatarURL: cdnModuleInternal1.getUserAvatarURL,
    getGuildSplashURL: cdnModuleInternal1.getGuildSplashURL,
    getGuildBannerURL: cdnModuleInternal1.getGuildBannerURL,
    getDefaultAvatarURL(discriminator) {
        let asset = cdnModuleInternal2.DEFAULT_AVATARS[(typeof discriminator === "string" ? parseInt(discriminator) || 0 : isNaN(discriminator) ? 0 : discriminator) % cdnModuleInternal2.DEFAULT_AVATARS.length];
        return `${location.protocol}://${window["GLOBAL_ENV"].ASSET_ENDPOINT}/assets/${asset}`;
    }
};


/***/ }),

/***/ "./src/util/modules/channels.ts":
/*!**************************************!*\
  !*** ./src/util/modules/channels.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
let channelsModuleInternal1 = DiscordToModules_1.requireModule(e => e.default && e.default.getChannels && e.default.getChannel);
let channelsModuleInternal2;
let channelsModuleInternal3 = DiscordToModules_1.requireModule(e => e.default && e.default.lastMessageId);
function set3() {
    if (channelsModuleInternal3)
        return;
    channelsModuleInternal3 = DiscordToModules_1.requireModule(e => e.default && e.default.lastMessageId);
}
module.exports = {
    getChannel: channelsModuleInternal1.getChannel,
    getAllChannels: channelsModuleInternal1.getChannels,
    get delete() {
        return channelsModuleInternal2 ? channelsModuleInternal2.deleteChannel : (channelsModuleInternal2 = DiscordToModules_1.requireModule(e => e.default && e.default.deleteChannel), channelsModuleInternal2.deleteChannel);
    },
    get lastMessageId() {
        set3();
        return channelsModuleInternal3.lastMessageId;
    }
};


/***/ }),

/***/ "./src/util/modules/constants.ts":
/*!***************************************!*\
  !*** ./src/util/modules/constants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
module.exports = DiscordToModules_1.requireModule(e => e.API_HOST);


/***/ }),

/***/ "./src/util/modules/dispatcher.ts":
/*!****************************************!*\
  !*** ./src/util/modules/dispatcher.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
module.exports = DiscordToModules_1.requireModule(m => m.Dispatcher && m.default && m.default.dispatch);


/***/ }),

/***/ "./src/util/modules/guilds.ts":
/*!************************************!*\
  !*** ./src/util/modules/guilds.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
let guildModuleInternal1 = DiscordToModules_1.requireModule(e => e.default && e.default.getGuilds && e.default.getGuild && !e.default.isFetching);
let guildModuleInternal2 = DiscordToModules_1.requireModule(e => e.default && e.default.getMemberCounts && e.default.getMemberCount);
let guildModuleInternal3 = DiscordToModules_1.requireModule(e => e.default && e.default.getMembers);
let guildModuleInternal4 = DiscordToModules_1.requireModule(e => e.default && e.default.isGuildOrCategoryOrChannelMuted);
let guildModuleInternal5 = DiscordToModules_1.requireModule(e => e.default && e.default.banUser);
module.exports = {
    getAllGuilds: guildModuleInternal1.getGuilds,
    getGuild: guildModuleInternal1.getGuild,
    getMemberCount: guildModuleInternal2.getMemberCount,
    getMemberCounts: guildModuleInternal2.getMemberCounts,
    getMembers: guildModuleInternal3.getMembers,
    getMember: guildModuleInternal3.getMember,
    getMemberIds: guildModuleInternal3.getMemberIds,
    isMember: guildModuleInternal3.isMember,
    memberOf: guildModuleInternal3.memberOf,
    getNick: guildModuleInternal3.getNick,
    getMessageNotifications: guildModuleInternal4.getMessageNotifications,
    getNotificationsState: guildModuleInternal4.getState,
    banUser: guildModuleInternal5.banUser,
    kickUser: guildModuleInternal5.kickUser
};


/***/ }),

/***/ "./src/util/modules/messages.ts":
/*!**************************************!*\
  !*** ./src/util/modules/messages.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/util/modules/userSettings.ts":
/*!******************************************!*\
  !*** ./src/util/modules/userSettings.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
let userSettingModuleInternal1 = DiscordToModules_1.requireModule(e => e.default && e.default.isGuildRestricted);
let userSettingModuleInternal2 = DiscordToModules_1.requireModule(e => e.default && e.default.updateLocalSettings);
module.exports = Object.assign({ getAllSettings: userSettingModuleInternal1.getAllSettings, getSetting: (setting) => {
        return userSettingModuleInternal1.getAllSettings()[setting];
    } }, userSettingModuleInternal2);


/***/ }),

/***/ "./src/util/modules/users.ts":
/*!***********************************!*\
  !*** ./src/util/modules/users.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const DiscordToModules_1 = __webpack_require__(/*! ../DiscordToModules */ "./src/util/DiscordToModules.ts");
let userModuleInteral1 = DiscordToModules_1.requireModule(e => e.default && e.default.getUser);
let userModuleInteral2 = DiscordToModules_1.requireModule(e => e.default && e.default.getNote);
module.exports = {
    getUser: userModuleInteral1.getUser,
    getUsers: userModuleInteral1.getUsers,
    forEach: userModuleInteral1.forEach,
    findByTag: userModuleInteral1.findByTag,
    filter: userModuleInteral1.filter,
    getCurrentUser: userModuleInteral1.getCurrentUser,
    getNullableCurrentUser: userModuleInteral1.getNullableCurrentUser,
    getNote: userModuleInteral2.getNote
};


/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveUserID = exports.binaryToID = exports.idToBinary = exports.applyMixins = exports.createUser = exports.createMessage = exports.createRole = exports.createGuildMember = exports.createGuild = exports.createChannel = void 0;
const BaseChannel_1 = __webpack_require__(/*! ../structures/BaseChannel */ "./src/structures/BaseChannel.ts");
const Guild_1 = __webpack_require__(/*! ../structures/Guild */ "./src/structures/Guild.ts");
const TextChannel_1 = __webpack_require__(/*! ../structures/TextChannel */ "./src/structures/TextChannel.ts");
const GuildMember_1 = __webpack_require__(/*! ../structures/GuildMember */ "./src/structures/GuildMember.ts");
const Role_1 = __webpack_require__(/*! ../structures/Role */ "./src/structures/Role.ts");
const User_1 = __webpack_require__(/*! ../structures/User */ "./src/structures/User.ts");
const Message_1 = __webpack_require__(/*! ../structures/Message */ "./src/structures/Message.ts");
function createChannel(channel) {
    let constructor = channels[channel.type] || BaseChannel_1.default;
    return new constructor(channel);
}
exports.createChannel = createChannel;
const channels = [
    TextChannel_1.TextChannel
];
function createGuild(guild) {
    return new Guild_1.default(guild);
}
exports.createGuild = createGuild;
function createGuildMember(member) {
    return new GuildMember_1.default(member);
}
exports.createGuildMember = createGuildMember;
function createRole(role) {
    return new Role_1.default(role);
}
exports.createRole = createRole;
function createMessage(message) {
    return new Message_1.default(message);
}
exports.createMessage = createMessage;
function createUser(user) {
    return new User_1.default(user);
}
exports.createUser = createUser;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
exports.applyMixins = applyMixins;
/**
 * Transforms a snowflake from a decimal string to a bit string.
 * @param  {string} num Snowflake to be transformed
 * @returns {string}
 * @private
 */
function idToBinary(num) {
    let bin = '';
    let high = parseInt(num.slice(0, -10)) || 0;
    let low = parseInt(num.slice(-10));
    while (low > 0 || high > 0) {
        bin = String(low & 1) + bin;
        low = Math.floor(low / 2);
        if (high > 0) {
            low += 5000000000 * (high % 2);
            high = Math.floor(high / 2);
        }
    }
    return bin;
}
exports.idToBinary = idToBinary;
/**
* Transforms a snowflake from a bit string to a decimal string.
* @param  {string} num Bit string to be transformed
* @returns {string}
* @private
*/
function binaryToID(num) {
    let dec = '';
    while (num.length > 50) {
        const high = parseInt(num.slice(0, -32), 2);
        const low = parseInt((high % 10).toString(2) + num.slice(-32), 2);
        dec = (low % 10).toString() + dec;
        num = Math.floor(high / 10).toString(2) +
            Math.floor(low / 10)
                .toString(2)
                .padStart(32, '0');
    }
    let num2 = parseInt(num, 2);
    while (num2 > 0) {
        dec = (num2 % 10).toString() + dec;
        num2 = Math.floor(num2 / 10);
    }
    return dec;
}
exports.binaryToID = binaryToID;
function resolveUserID(user) {
    if (typeof user === "string")
        return user; // ID
    if (user instanceof User_1.default)
        return user.id; // User
    if (user instanceof Message_1.default)
        return user.author.id; // Message Author
    if (user instanceof Guild_1.default)
        return user.ownerID; // Guild
    if (user instanceof GuildMember_1.default)
        return user.id; // GuildMember
    return null;
}
exports.resolveUserID = resolveUserID;


/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vbm9kZV9tb2R1bGVzL0BkaXNjb3JkanMvY29sbGVjdGlvbi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jbGllbnQvY2xpZW50LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9CYXNlQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9CYXNlU3RydWN0dXJlLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9zdHJ1Y3R1cmVzL0NsaWVudFVzZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3N0cnVjdHVyZXMvR3VpbGQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3N0cnVjdHVyZXMvR3VpbGRDaGFubmVsLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9zdHJ1Y3R1cmVzL0d1aWxkTWVtYmVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9zdHJ1Y3R1cmVzL01lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3N0cnVjdHVyZXMvUm9sZS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9UZXh0Q2hhbm5lbC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9Vc2VyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9EaXNjb3JkSlNFcnJvci50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9EaXNjb3JkVG9Nb2R1bGVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL0xhenlMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvU25vd2ZsYWtlLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL21vZHVsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL21vZHVsZXMvYWNrbm93bGVkZ2UudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy9jZG4udHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9tb2R1bGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9tb2R1bGVzL2Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy9ndWlsZHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy91c2VyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy91c2Vycy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC91dGlsLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcImV2ZW50c1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRDtBQUNqRztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtEQUFrRCxrREFBa0Q7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0dBLG1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBBIE1hcCB3aXRoIGFkZGl0aW9uYWwgdXRpbGl0eSBtZXRob2RzLiBUaGlzIGlzIHVzZWQgdGhyb3VnaG91dCBkaXNjb3JkLmpzIHJhdGhlciB0aGFuIEFycmF5cyBmb3IgYW55dGhpbmcgdGhhdCBoYXNcbiAqIGFuIElELCBmb3Igc2lnbmlmaWNhbnRseSBpbXByb3ZlZCBwZXJmb3JtYW5jZSBhbmQgZWFzZS1vZi11c2UuXG4gKiBAZXh0ZW5kcyB7TWFwfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpemUgLSBUaGUgYW1vdW50IG9mIGVsZW1lbnRzIGluIHRoaXMgY29sbGVjdGlvbi5cbiAqL1xuY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoZW50cmllcykge1xuICAgICAgICBzdXBlcihlbnRyaWVzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlZCBhcnJheSBmb3IgdGhlIGBhcnJheSgpYCBtZXRob2QgLSB3aWxsIGJlIHJlc2V0IHRvIGBudWxsYCB3aGVuZXZlciBgc2V0KClgIG9yIGBkZWxldGUoKWAgYXJlIGNhbGxlZFxuICAgICAgICAgKiBAbmFtZSBDb2xsZWN0aW9uI19hcnJheVxuICAgICAgICAgKiBAdHlwZSB7P0FycmF5fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfYXJyYXknLCB7IHZhbHVlOiBudWxsLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGVkIGFycmF5IGZvciB0aGUgYGtleUFycmF5KClgIG1ldGhvZCAtIHdpbGwgYmUgcmVzZXQgdG8gYG51bGxgIHdoZW5ldmVyIGBzZXQoKWAgb3IgYGRlbGV0ZSgpYCBhcmUgY2FsbGVkXG4gICAgICAgICAqIEBuYW1lIENvbGxlY3Rpb24jX2tleUFycmF5XG4gICAgICAgICAqIEB0eXBlIHs/QXJyYXl9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19rZXlBcnJheScsIHsgdmFsdWU6IG51bGwsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElkZW50aWNhbCB0byBbTWFwLmdldCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvZ2V0KS5cbiAgICAgKiBHZXRzIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleSwgYW5kIHJldHVybnMgaXRzIHZhbHVlLCBvciBgdW5kZWZpbmVkYCBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cbiAgICAgKiBAcGFyYW0geyp9IGtleSAtIFRoZSBrZXkgdG8gZ2V0IGZyb20gdGhpcyBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybnMgeyogfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElkZW50aWNhbCB0byBbTWFwLnNldCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvc2V0KS5cbiAgICAgKiBTZXRzIGEgbmV3IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGUgc3BlY2lmaWVkIGtleSBhbmQgdmFsdWUuXG4gICAgICogQHBhcmFtIHsqfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBlbGVtZW50IHRvIGFkZFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgdG8gYWRkXG4gICAgICogQHJldHVybnMge0NvbGxlY3Rpb259XG4gICAgICovXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXJyYXkgPSBudWxsO1xuICAgICAgICB0aGlzLl9rZXlBcnJheSA9IG51bGw7XG4gICAgICAgIHJldHVybiBzdXBlci5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElkZW50aWNhbCB0byBbTWFwLmhhcygpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvaGFzKS5cbiAgICAgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBleGlzdHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHsqfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBlbGVtZW50IHRvIGNoZWNrIGZvclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgZXhpc3RzLCBgZmFsc2VgIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqL1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhcyhrZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZGVudGljYWwgdG8gW01hcC5kZWxldGUoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2RlbGV0ZSkuXG4gICAgICogRGVsZXRlcyBhbiBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHsqfSBrZXkgLSBUaGUga2V5IHRvIGRlbGV0ZSBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cbiAgICAgKi9cbiAgICBkZWxldGUoa2V5KSB7XG4gICAgICAgIHRoaXMuX2FycmF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fa2V5QXJyYXkgPSBudWxsO1xuICAgICAgICByZXR1cm4gc3VwZXIuZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElkZW50aWNhbCB0byBbTWFwLmNsZWFyKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9jbGVhcikuXG4gICAgICogUmVtb3ZlcyBhbGwgZWxlbWVudHMgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY2xlYXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvcmRlcmVkIGFycmF5IG9mIHRoZSB2YWx1ZXMgb2YgdGhpcyBjb2xsZWN0aW9uLCBhbmQgY2FjaGVzIGl0IGludGVybmFsbHkuIFRoZSBhcnJheSB3aWxsIG9ubHkgYmVcbiAgICAgKiByZWNvbnN0cnVjdGVkIGlmIGFuIGl0ZW0gaXMgYWRkZWQgdG8gb3IgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uLCBvciBpZiB5b3UgY2hhbmdlIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XG4gICAgICogaXRzZWxmLiBJZiB5b3UgZG9uJ3Qgd2FudCB0aGlzIGNhY2hpbmcgYmVoYXZpb3IsIHVzZSBgWy4uLmNvbGxlY3Rpb24udmFsdWVzKCldYCBvclxuICAgICAqIGBBcnJheS5mcm9tKGNvbGxlY3Rpb24udmFsdWVzKCkpYCBpbnN0ZWFkLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBhcnJheSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hcnJheSB8fCB0aGlzLl9hcnJheS5sZW5ndGggIT09IHRoaXMuc2l6ZSlcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gWy4uLnRoaXMudmFsdWVzKCldO1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb3JkZXJlZCBhcnJheSBvZiB0aGUga2V5cyBvZiB0aGlzIGNvbGxlY3Rpb24sIGFuZCBjYWNoZXMgaXQgaW50ZXJuYWxseS4gVGhlIGFycmF5IHdpbGwgb25seSBiZVxuICAgICAqIHJlY29uc3RydWN0ZWQgaWYgYW4gaXRlbSBpcyBhZGRlZCB0byBvciByZW1vdmVkIGZyb20gdGhlIGNvbGxlY3Rpb24sIG9yIGlmIHlvdSBjaGFuZ2UgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcbiAgICAgKiBpdHNlbGYuIElmIHlvdSBkb24ndCB3YW50IHRoaXMgY2FjaGluZyBiZWhhdmlvciwgdXNlIGBbLi4uY29sbGVjdGlvbi5rZXlzKCldYCBvclxuICAgICAqIGBBcnJheS5mcm9tKGNvbGxlY3Rpb24ua2V5cygpKWAgaW5zdGVhZC5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAga2V5QXJyYXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5fa2V5QXJyYXkgfHwgdGhpcy5fa2V5QXJyYXkubGVuZ3RoICE9PSB0aGlzLnNpemUpXG4gICAgICAgICAgICB0aGlzLl9rZXlBcnJheSA9IFsuLi50aGlzLmtleXMoKV07XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlBcnJheTtcbiAgICB9XG4gICAgZmlyc3QoYW1vdW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgaWYgKGFtb3VudCA8IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0KGFtb3VudCAqIC0xKTtcbiAgICAgICAgYW1vdW50ID0gTWF0aC5taW4odGhpcy5zaXplLCBhbW91bnQpO1xuICAgICAgICBjb25zdCBpdGVyID0gdGhpcy52YWx1ZXMoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKSA9PiBpdGVyLm5leHQoKS52YWx1ZSk7XG4gICAgfVxuICAgIGZpcnN0S2V5KGFtb3VudCkge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICBpZiAoYW1vdW50IDwgMClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RLZXkoYW1vdW50ICogLTEpO1xuICAgICAgICBhbW91bnQgPSBNYXRoLm1pbih0aGlzLnNpemUsIGFtb3VudCk7XG4gICAgICAgIGNvbnN0IGl0ZXIgPSB0aGlzLmtleXMoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKSA9PiBpdGVyLm5leHQoKS52YWx1ZSk7XG4gICAgfVxuICAgIGxhc3QoYW1vdW50KSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhbW91bnQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3QoYW1vdW50ICogLTEpO1xuICAgICAgICBpZiAoIWFtb3VudClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIGFyci5zbGljZSgtYW1vdW50KTtcbiAgICB9XG4gICAgbGFzdEtleShhbW91bnQpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5rZXlBcnJheSgpO1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFtb3VudCA8IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJzdEtleShhbW91bnQgKiAtMSk7XG4gICAgICAgIGlmICghYW1vdW50KVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICByZXR1cm4gYXJyLnNsaWNlKC1hbW91bnQpO1xuICAgIH1cbiAgICByYW5kb20oYW1vdW50KSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmFycmF5KCk7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCB8fCAhYW1vdW50KVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBhcnIgPSBhcnIuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKSA9PiBhcnIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpLCAxKVswXSk7XG4gICAgfVxuICAgIHJhbmRvbUtleShhbW91bnQpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMua2V5QXJyYXkoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwIHx8ICFhbW91bnQpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIGFyciA9IGFyci5zbGljZSgpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpID0+IGFyci5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCksIDEpWzBdKTtcbiAgICB9XG4gICAgZmluZChmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYgKGZuKHZhbCwga2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZpbmRLZXkoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChmbih2YWwsIGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzd2VlcChmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBjb25zdCBwcmV2aW91c1NpemUgPSB0aGlzLnNpemU7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoZm4odmFsLCBrZXksIHRoaXMpKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzU2l6ZSAtIHRoaXMuc2l6ZTtcbiAgICB9XG4gICAgZmlsdGVyKGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChmbih2YWwsIGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBwYXJ0aXRpb24oZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgcmVtb3ZpbmcgdGhlIDxLLCBWPiBmcm9tIHRoZSBjb25zdHJ1Y3RvcnMgYWZ0ZXIgVFMgMy43LjAgaXMgcmVsZWFzZWQsIGFzIGl0IGluZmVycyBpdFxuICAgICAgICBjb25zdCByZXN1bHRzID0gW25ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSgpLCBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oKV07XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoZm4odmFsLCBrZXksIHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1swXS5zZXQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1sxXS5zZXQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBmbGF0TWFwKGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gdGhpcy5tYXAoZm4sIHRoaXNBcmcpO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKCkuY29uY2F0KC4uLmNvbGxlY3Rpb25zKTtcbiAgICB9XG4gICAgbWFwKGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG4gICAgICAgIGNvbnN0IGl0ZXIgPSB0aGlzLmVudHJpZXMoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuc2l6ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBmbih2YWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1hcFZhbHVlcyhmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBjb25zdCBjb2xsID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKVxuICAgICAgICAgICAgY29sbC5zZXQoa2V5LCBmbih2YWwsIGtleSwgdGhpcykpO1xuICAgICAgICByZXR1cm4gY29sbDtcbiAgICB9XG4gICAgc29tZShmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYgKGZuKHZhbCwga2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGV2ZXJ5KGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoIWZuKHZhbCwga2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byBwcm9kdWNlIGEgc2luZ2xlIHZhbHVlLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cbiAgICAgKiBbQXJyYXkucmVkdWNlKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZSkuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdXNlZCB0byByZWR1Y2UsIHRha2luZyBmb3VyIGFyZ3VtZW50czsgYGFjY3VtdWxhdG9yYCwgYGN1cnJlbnRWYWx1ZWAsIGBjdXJyZW50S2V5YCxcbiAgICAgKiBhbmQgYGNvbGxlY3Rpb25gXG4gICAgICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBTdGFydGluZyB2YWx1ZSBmb3IgdGhlIGFjY3VtdWxhdG9yXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQGV4YW1wbGUgY29sbGVjdGlvbi5yZWR1Y2UoKGFjYywgZ3VpbGQpID0+IGFjYyArIGd1aWxkLm1lbWJlckNvdW50LCAwKTtcbiAgICAgKi9cbiAgICByZWR1Y2UoZm4sIGluaXRpYWxWYWx1ZSkge1xuICAgICAgICBsZXQgYWNjdW11bGF0b3I7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYWNjdW11bGF0b3IgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcylcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRvciA9IGZuKGFjY3VtdWxhdG9yLCB2YWwsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgIGFjY3VtdWxhdG9yID0gdmFsO1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2N1bXVsYXRvciA9IGZuKGFjY3VtdWxhdG9yLCB2YWwsIGtleSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gaXRlbXMgaXRlcmF0ZWQuXG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGNvbGxlY3Rpb24gd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cbiAgICBlYWNoKGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMuZm9yRWFjaChmbiwgdGhpc0FyZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0YXAoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgZm4odGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGlkZW50aWNhbCBzaGFsbG93IGNvcHkgb2YgdGhpcyBjb2xsZWN0aW9uLlxuICAgICAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuICAgICAqIEBleGFtcGxlIGNvbnN0IG5ld0NvbGwgPSBzb21lQ29sbC5jbG9uZSgpO1xuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21iaW5lcyB0aGlzIGNvbGxlY3Rpb24gd2l0aCBvdGhlcnMgaW50byBhIG5ldyBjb2xsZWN0aW9uLiBOb25lIG9mIHRoZSBzb3VyY2UgY29sbGVjdGlvbnMgYXJlIG1vZGlmaWVkLlxuICAgICAqIEBwYXJhbSB7Li4uQ29sbGVjdGlvbn0gY29sbGVjdGlvbnMgQ29sbGVjdGlvbnMgdG8gbWVyZ2VcbiAgICAgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cbiAgICAgKiBAZXhhbXBsZSBjb25zdCBuZXdDb2xsID0gc29tZUNvbGwuY29uY2F0KHNvbWVPdGhlckNvbGwsIGFub3RoZXJDb2xsLCBvaEJveUFDb2xsKTtcbiAgICAgKi9cbiAgICBjb25jYXQoLi4uY29sbGVjdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbmV3Q29sbCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgZm9yIChjb25zdCBjb2xsIG9mIGNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgY29sbClcbiAgICAgICAgICAgICAgICBuZXdDb2xsLnNldChrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0NvbGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIGNvbGxlY3Rpb24gc2hhcmVzIGlkZW50aWNhbCBpdGVtcyB3aXRoIGFub3RoZXIuXG4gICAgICogVGhpcyBpcyBkaWZmZXJlbnQgdG8gY2hlY2tpbmcgZm9yIGVxdWFsaXR5IHVzaW5nIGVxdWFsLXNpZ25zLCBiZWNhdXNlXG4gICAgICogdGhlIGNvbGxlY3Rpb25zIG1heSBiZSBkaWZmZXJlbnQgb2JqZWN0cywgYnV0IGNvbnRhaW4gdGhlIHNhbWUgZGF0YS5cbiAgICAgKiBAcGFyYW0ge0NvbGxlY3Rpb259IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiB0byBjb21wYXJlIHdpdGhcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgY29sbGVjdGlvbnMgaGF2ZSBpZGVudGljYWwgY29udGVudHNcbiAgICAgKi9cbiAgICBlcXVhbHMoY29sbGVjdGlvbikge1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzID09PSBjb2xsZWN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNpemUgIT09IGNvbGxlY3Rpb24uc2l6ZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYgKCFjb2xsZWN0aW9uLmhhcyhrZXkpIHx8IHZhbHVlICE9PSBjb2xsZWN0aW9uLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgc29ydCBtZXRob2Qgc29ydHMgdGhlIGl0ZW1zIG9mIGEgY29sbGVjdGlvbiBpbiBwbGFjZSBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBUaGUgc29ydCBpcyBub3QgbmVjZXNzYXJpbHkgc3RhYmxlLiBUaGUgZGVmYXVsdCBzb3J0IG9yZGVyIGlzIGFjY29yZGluZyB0byBzdHJpbmcgVW5pY29kZSBjb2RlIHBvaW50cy5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyZUZ1bmN0aW9uXSBTcGVjaWZpZXMgYSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNvcnQgb3JkZXIuXG4gICAgICogSWYgb21pdHRlZCwgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkIGFjY29yZGluZyB0byBlYWNoIGNoYXJhY3RlcidzIFVuaWNvZGUgY29kZSBwb2ludCB2YWx1ZSxcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIGVhY2ggZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cbiAgICAgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLnNvcnQoKHVzZXJBLCB1c2VyQikgPT4gdXNlckEuY3JlYXRlZFRpbWVzdGFtcCAtIHVzZXJCLmNyZWF0ZWRUaW1lc3RhbXApO1xuICAgICAqL1xuICAgIHNvcnQoY29tcGFyZUZ1bmN0aW9uID0gKHgsIHkpID0+IE51bWJlcih4ID4geSkgfHwgTnVtYmVyKHggPT09IHkpIC0gMSkge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gWy4uLnRoaXMuZW50cmllcygpXTtcbiAgICAgICAgZW50cmllcy5zb3J0KChhLCBiKSA9PiBjb21wYXJlRnVuY3Rpb24oYVsxXSwgYlsxXSwgYVswXSwgYlswXSkpO1xuICAgICAgICAvLyBQZXJmb3JtIGNsZWFuLXVwXG4gICAgICAgIHN1cGVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2FycmF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fa2V5QXJyYXkgPSBudWxsO1xuICAgICAgICAvLyBTZXQgdGhlIG5ldyBlbnRyaWVzXG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldChrLCB2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGludGVyc2VjdCBtZXRob2QgcmV0dXJucyBhIG5ldyBzdHJ1Y3R1cmUgY29udGFpbmluZyBpdGVtcyB3aGVyZSB0aGUga2V5cyBhcmUgcHJlc2VudCBpbiBib3RoIG9yaWdpbmFsIHN0cnVjdHVyZXMuXG4gICAgICogQHBhcmFtIHtDb2xsZWN0aW9ufSBvdGhlciBUaGUgb3RoZXIgQ29sbGVjdGlvbiB0byBmaWx0ZXIgYWdhaW5zdFxuICAgICAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuICAgICAqL1xuICAgIGludGVyc2VjdChvdGhlcikge1xuICAgICAgICByZXR1cm4gb3RoZXIuZmlsdGVyKChfLCBrKSA9PiB0aGlzLmhhcyhrKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBkaWZmZXJlbmNlIG1ldGhvZCByZXR1cm5zIGEgbmV3IHN0cnVjdHVyZSBjb250YWluaW5nIGl0ZW1zIHdoZXJlIHRoZSBrZXkgaXMgcHJlc2VudCBpbiBvbmUgb2YgdGhlIG9yaWdpbmFsIHN0cnVjdHVyZXMgYnV0IG5vdCB0aGUgb3RoZXIuXG4gICAgICogQHBhcmFtIHtDb2xsZWN0aW9ufSBvdGhlciBUaGUgb3RoZXIgQ29sbGVjdGlvbiB0byBmaWx0ZXIgYWdhaW5zdFxuICAgICAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuICAgICAqL1xuICAgIGRpZmZlcmVuY2Uob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG90aGVyLmZpbHRlcigoXywgaykgPT4gIXRoaXMuaGFzKGspKS5jb25jYXQodGhpcy5maWx0ZXIoKF8sIGspID0+ICFvdGhlci5oYXMoaykpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHNvcnRlZCBtZXRob2Qgc29ydHMgdGhlIGl0ZW1zIG9mIGEgY29sbGVjdGlvbiBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBUaGUgc29ydCBpcyBub3QgbmVjZXNzYXJpbHkgc3RhYmxlLiBUaGUgZGVmYXVsdCBzb3J0IG9yZGVyIGlzIGFjY29yZGluZyB0byBzdHJpbmcgVW5pY29kZSBjb2RlIHBvaW50cy5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyZUZ1bmN0aW9uXSBTcGVjaWZpZXMgYSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNvcnQgb3JkZXIuXG4gICAgICogSWYgb21pdHRlZCwgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkIGFjY29yZGluZyB0byBlYWNoIGNoYXJhY3RlcidzIFVuaWNvZGUgY29kZSBwb2ludCB2YWx1ZSxcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlIHN0cmluZyBjb252ZXJzaW9uIG9mIGVhY2ggZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cbiAgICAgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLnNvcnRlZCgodXNlckEsIHVzZXJCKSA9PiB1c2VyQS5jcmVhdGVkVGltZXN0YW1wIC0gdXNlckIuY3JlYXRlZFRpbWVzdGFtcCk7XG4gICAgICovXG4gICAgc29ydGVkKGNvbXBhcmVGdW5jdGlvbiA9ICh4LCB5KSA9PiBOdW1iZXIoeCA+IHkpIHx8IE51bWJlcih4ID09PSB5KSAtIDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShbLi4udGhpcy5lbnRyaWVzKCldKVxuICAgICAgICAgICAgLnNvcnQoKGF2LCBidiwgYWssIGJrKSA9PiBjb21wYXJlRnVuY3Rpb24oYXYsIGJ2LCBhaywgYmspKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbGxlY3Rpb24gPSBDb2xsZWN0aW9uO1xuQ29sbGVjdGlvbi5kZWZhdWx0ID0gQ29sbGVjdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxlY3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUx5SXNJbk52ZFhKalpYTWlPbHNpYVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUlFUczdPenM3UjBGTFJ6dEJRVU5JTEUxQlFVMHNWVUZCYVVJc1UwRkJVU3hIUVVGVE8wbEJUWFpETEZsQlFXMUNMRTlCUVN0RE8xRkJRMnBGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVWbU96czdPenRYUVV0SE8xRkJRMGdzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxGbEJRVmtzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUlROR096czdPenRYUVV0SE8xRkJRMGdzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxGbEJRVmtzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXk5R0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEVkQlFVY3NRMEZCUXl4SFFVRk5PMUZCUTJoQ0xFOUJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1IwRkJSeXhEUVVGRExFZEJRVTBzUlVGQlJTeExRVUZSTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzUkNMRTlCUVU4c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRPVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NSMEZCUnl4RFFVRkRMRWRCUVUwN1VVRkRhRUlzVDBGQlR5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhIUVVGTk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM1JDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRXRCUVVzN1VVRkRXQ3hQUVVGUExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3p0UlFVTllMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTzFsQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRka1lzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4UlFVRlJPMUZCUTJRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVazdXVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNNVJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRka0lzUTBGQlF6dEpRVlZOTEV0QlFVc3NRMEZCUXl4TlFVRmxPMUZCUXpOQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOeVJTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRek5DTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4SFFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRia1VzUTBGQlF6dEpRVlZOTEZGQlFWRXNRMEZCUXl4TlFVRmxPMUZCUXpsQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVOdVJTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4SFFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRia1VzUTBGQlF6dEpRVmROTEVsQlFVa3NRMEZCUXl4TlFVRmxPMUZCUXpGQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVONlFpeEpRVUZKTEU5QlFVOHNUVUZCVFN4TFFVRkxMRmRCUVZjN1dVRkJSU3hQUVVGUExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemxFTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNN1dVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGREwwTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF6dFJRVU4yUWl4UFFVRlBMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wbEJWMDBzVDBGQlR5eERRVUZETEUxQlFXVTdVVUZETjBJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnp0WlFVRkZMRTlCUVU4c1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXp0WlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1JDeEpRVUZKTEVOQlFVTXNUVUZCVFR0WlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM1pDTEU5QlFVOHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRlZUU3hOUVVGTkxFTkJRVU1zVFVGQlpUdFJRVU0xUWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTzFsQlFVVXNUMEZCVHl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZEVZc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1dVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF6dFJRVU16UXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEyeENMRTlCUVU4c1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hIUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZITEVOQlFVTTdTVUZWVFN4VFFVRlRMRU5CUVVNc1RVRkJaVHRSUVVNdlFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE1VSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWE8xbEJRVVVzVDBGQlR5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFWXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVNelF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4SFFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGSExFTkJRVU03U1VGbFRTeEpRVUZKTEVOQlFVTXNSVUZCYlVRc1JVRkJSU3hQUVVGcFFqdFJRVU5xUml4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmM3V1VGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU14UkN4TFFVRkxMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRE8yZENRVUZGTEU5QlFVOHNSMEZCUnl4RFFVRkRPMU5CUTI1RE8xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVdGTkxFOUJRVThzUTBGQlF5eEZRVUZ0UkN4RlFVRkZMRTlCUVdsQ08xRkJRM0JHTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1YwRkJWenRaUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRekZFTEV0QlFVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZET1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNN1owSkJRVVVzVDBGQlR5eEhRVUZITEVOQlFVTTdVMEZEYmtNN1VVRkRSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCVlUwc1MwRkJTeXhEUVVGRExFVkJRVzFFTEVWQlFVVXNUMEZCYVVJN1VVRkRiRVlzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhPMWxCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVFVGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVNdlFpeExRVUZMTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzFsQlF6bENMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRla003VVVGRFJDeFBRVUZQTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZoVFN4TlFVRk5MRU5CUVVNc1JVRkJiVVFzUlVGQlJTeFBRVUZwUWp0UlFVTnVSaXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWYzdXVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZuUWl4RFFVRkRPMUZCUTNKRkxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRE9VSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTTdaMEpCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRPVU03VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJXVTBzVTBGQlV5eERRVUZETEVWQlFXMUVMRVZCUVVVc1QwRkJhVUk3VVVGRGRFWXNTVUZCU1N4UFFVRlBMRTlCUVU4c1MwRkJTeXhYUVVGWE8xbEJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRE1VUXNkVWRCUVhWSE8xRkJRM1pITEUxQlFVMHNUMEZCVHl4SFFVRnBRaXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRV2RDTEVWQlFVVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCWjBJc1EwRkJReXhEUVVGRE8xRkJRek5KTEV0QlFVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZET1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRla0k3YVVKQlFVMDdaMEpCUTA0c1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRGVrSTdVMEZEUkR0UlFVTkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZaVFN4UFFVRlBMRU5CUVVrc1JVRkJORVFzUlVGQlJTeFBRVUZwUWp0UlFVTm9SeXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU14UXl4UFFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVRaQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRiRWNzUTBGQlF6dEpRVmxOTEVkQlFVY3NRMEZCU1N4RlFVRTJReXhGUVVGRkxFOUJRV2xDTzFGQlF6ZEZMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVjBGQlZ6dFpRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlF6RkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTTFRaXhQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVkQlFVMHNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZGtNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRlpUU3hUUVVGVExFTkJRVWtzUlVGQk5rTXNSVUZCUlN4UFFVRnBRanRSUVVOdVJpeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjN1dVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNeFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRTBRaXhEUVVGRE8xRkJRemxGTEV0QlFVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTzFsQlFVVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOaUxFTkJRVU03U1VGWlRTeEpRVUZKTEVOQlFVTXNSVUZCYlVRc1JVRkJSU3hQUVVGcFFqdFJRVU5xUml4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmM3V1VGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU14UkN4TFFVRkxMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRE8yZENRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMU5CUTNCRE8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEWkN4RFFVRkRPMGxCV1Uwc1MwRkJTeXhEUVVGRExFVkJRVzFFTEVWQlFVVXNUMEZCYVVJN1VVRkRiRVlzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhPMWxCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzUzBGQlN5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJUdFpRVU01UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzFOQlEzUkRPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUTdPenM3T3pzN08wOUJVVWM3U1VGRFNTeE5RVUZOTEVOQlFVa3NSVUZCTmtRc1JVRkJSU3haUVVGblFqdFJRVU12Uml4SlFVRkpMRmRCUVdVc1EwRkJRenRSUVVWd1FpeEpRVUZKTEU5QlFVOHNXVUZCV1N4TFFVRkxMRmRCUVZjc1JVRkJSVHRaUVVONFF5eFhRVUZYTEVkQlFVY3NXVUZCV1N4RFFVRkRPMWxCUXpOQ0xFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSk8yZENRVUZGTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkROMFVzVDBGQlR5eFhRVUZYTEVOQlFVTTdVMEZEYmtJN1VVRkRSQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYWtJc1MwRkJTeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRaUVVNNVFpeEpRVUZKTEV0QlFVc3NSVUZCUlR0blFrRkRWaXhYUVVGWExFZEJRVWNzUjBGQmJVSXNRMEZCUXp0blFrRkRiRU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkRaQ3hUUVVGVE8yRkJRMVE3V1VGRFJDeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsRE8xRkJSVVFzY1VKQlFYRkNPMUZCUTNKQ0xFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExWXNUVUZCVFN4SlFVRkpMRk5CUVZNc1EwRkJReXhyUkVGQmEwUXNRMEZCUXl4RFFVRkRPMU5CUTNoRk8xRkJSVVFzVDBGQlR5eFhRVUZYTEVOQlFVTTdTVUZEY0VJc1EwRkJRenRKUVdsQ1RTeEpRVUZKTEVOQlFVTXNSVUZCWjBRc1JVRkJSU3hQUVVGcFFqdFJRVU01UlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRV2RFTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRlRVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCWlUwc1IwRkJSeXhEUVVGRExFVkJRVGhDTEVWQlFVVXNUMEZCYVVJN1VVRkRNMFFzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhPMWxCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTFRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEV0QlFVczdVVUZEV0N4UFFVRlBMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGVExFTkJRVU03U1VGRE0wUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFZEJRVWNzVjBGQkswSTdVVUZETDBNc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUXpkQ0xFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NWMEZCVnl4RlFVRkZPMWxCUXk5Q0xFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSk8yZENRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFOQlEzSkVPMUZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUUwUWp0UlFVTjZReXhKUVVGSkxFTkJRVU1zVlVGQlZUdFpRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzU1VGQlNTeExRVUZMTEZWQlFWVTdXVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWs3V1VGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXp0UlFVTm9SQ3hMUVVGTExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRk8xbEJRMmhETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEV0QlFVc3NTMEZCU3l4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTXhSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dGhRVU5pTzFOQlEwUTdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOaUxFTkJRVU03U1VGRlJEczdPenM3T3pzN1QwRlJSenRKUVVOSkxFbEJRVWtzUTBGQlF5eHJRa0ZCZDBZc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZWTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU42U2l4TlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRjRU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVlVzUlVGQlJTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSWGhGTEcxQ1FVRnRRanRSUVVOdVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVjBRaXh6UWtGQmMwSTdVVUZEZEVJc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVNM1FpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5vUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMklzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeFRRVUZUTEVOQlFVTXNTMEZCZFVJN1VVRkRka01zVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1ZVRkJWU3hEUVVGRExFdEJRWFZDTzFGQlEzaERMRTlCUVU4c1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhSaXhEUVVGRE8wbEJSVVE3T3pzN096czdPMDlCVVVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zYTBKQlFYZEdMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlZTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRE0wb3NUMEZCVVN4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCVlR0aFFVTjRSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpkRUxFTkJRVU03TzBGQlIwOHNaME5CUVZVN1FVRnFha0pMTEd0Q1FVRlBMRWRCUVhOQ0xGVkJRVlVzUTBGQlF6dEJRV3RxUW1oRkxHdENRVUZsTEZWQlFWVXNRMEZCUXp0QlFVTXhRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXNiR1ZqZEdsdmJrTnZibk4wY25WamRHOXlJSHRjYmx4MGJtVjNLQ2s2SUVOdmJHeGxZM1JwYjI0OGRXNXJibTkzYml3Z2RXNXJibTkzYmo0N1hHNWNkRzVsZHp4TExDQldQaWhsYm5SeWFXVnpQem9nVW1WaFpHOXViSGxCY25KaGVUeHlaV0ZrYjI1c2VTQmJTeXdnVmwwK0lId2diblZzYkNrNklFTnZiR3hsWTNScGIyNDhTeXdnVmo0N1hHNWNkRzVsZHp4TExDQldQaWhwZEdWeVlXSnNaVG9nU1hSbGNtRmliR1U4Y21WaFpHOXViSGtnVzBzc0lGWmRQaWs2SUVOdmJHeGxZM1JwYjI0OFN5d2dWajQ3WEc1Y2RISmxZV1J2Ym14NUlIQnliM1J2ZEhsd1pUb2dRMjlzYkdWamRHbHZiangxYm10dWIzZHVMQ0IxYm10dWIzZHVQanRjYmx4MGNtVmhaRzl1YkhrZ1cxTjViV0p2YkM1emNHVmphV1Z6WFRvZ1EyOXNiR1ZqZEdsdmJrTnZibk4wY25WamRHOXlPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFRWdUV0Z3SUhkcGRHZ2dZV1JrYVhScGIyNWhiQ0IxZEdsc2FYUjVJRzFsZEdodlpITXVJRlJvYVhNZ2FYTWdkWE5sWkNCMGFISnZkV2RvYjNWMElHUnBjMk52Y21RdWFuTWdjbUYwYUdWeUlIUm9ZVzRnUVhKeVlYbHpJR1p2Y2lCaGJubDBhR2x1WnlCMGFHRjBJR2hoYzF4dUlDb2dZVzRnU1VRc0lHWnZjaUJ6YVdkdWFXWnBZMkZ1ZEd4NUlHbHRjSEp2ZG1Wa0lIQmxjbVp2Y20xaGJtTmxJR0Z1WkNCbFlYTmxMVzltTFhWelpTNWNiaUFxSUVCbGVIUmxibVJ6SUh0TllYQjlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UyNTFiV0psY24wZ2MybDZaU0F0SUZSb1pTQmhiVzkxYm5RZ2IyWWdaV3hsYldWdWRITWdhVzRnZEdocGN5QmpiMnhzWldOMGFXOXVMbHh1SUNvdlhHNWpiR0Z6Y3lCRGIyeHNaV04wYVc5dVBFc3NJRlkrSUdWNGRHVnVaSE1nVFdGd1BFc3NJRlkrSUh0Y2JseDBjSEpwZG1GMFpTQmZZWEp5WVhraE9pQldXMTBnZkNCdWRXeHNPMXh1WEhSd2NtbDJZWFJsSUY5clpYbEJjbkpoZVNFNklFdGJYU0I4SUc1MWJHdzdYRzVjZEhCMVlteHBZeUJ6ZEdGMGFXTWdjbVZoWkc5dWJIa2daR1ZtWVhWc2REb2dkSGx3Wlc5bUlFTnZiR3hsWTNScGIyNGdQU0JEYjJ4c1pXTjBhVzl1TzF4dVhIUndkV0pzYVdNZ1d5ZGpiMjV6ZEhKMVkzUnZjaWRkT2lCMGVYQmxiMllnUTI5c2JHVmpkR2x2Ymp0Y2JseHVYSFJ3ZFdKc2FXTWdZMjl1YzNSeWRXTjBiM0lvWlc1MGNtbGxjejg2SUZKbFlXUnZibXg1UVhKeVlYazhjbVZoWkc5dWJIa2dXMHNzSUZaZFBpQjhJRzUxYkd3cElIdGNibHgwWEhSemRYQmxjaWhsYm5SeWFXVnpLVHRjYmx4dVhIUmNkQzhxS2x4dVhIUmNkQ0FxSUVOaFkyaGxaQ0JoY25KaGVTQm1iM0lnZEdobElHQmhjbkpoZVNncFlDQnRaWFJvYjJRZ0xTQjNhV3hzSUdKbElISmxjMlYwSUhSdklHQnVkV3hzWUNCM2FHVnVaWFpsY2lCZ2MyVjBLQ2xnSUc5eUlHQmtaV3hsZEdVb0tXQWdZWEpsSUdOaGJHeGxaRnh1WEhSY2RDQXFJRUJ1WVcxbElFTnZiR3hsWTNScGIyNGpYMkZ5Y21GNVhHNWNkRngwSUNvZ1FIUjVjR1VnZXo5QmNuSmhlWDFjYmx4MFhIUWdLaUJBY0hKcGRtRjBaVnh1WEhSY2RDQXFMMXh1WEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2gwYUdsekxDQW5YMkZ5Y21GNUp5d2dleUIyWVd4MVpUb2diblZzYkN3Z2QzSnBkR0ZpYkdVNklIUnlkV1VzSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlNCOUtUdGNibHh1WEhSY2RDOHFLbHh1WEhSY2RDQXFJRU5oWTJobFpDQmhjbkpoZVNCbWIzSWdkR2hsSUdCclpYbEJjbkpoZVNncFlDQnRaWFJvYjJRZ0xTQjNhV3hzSUdKbElISmxjMlYwSUhSdklHQnVkV3hzWUNCM2FHVnVaWFpsY2lCZ2MyVjBLQ2xnSUc5eUlHQmtaV3hsZEdVb0tXQWdZWEpsSUdOaGJHeGxaRnh1WEhSY2RDQXFJRUJ1WVcxbElFTnZiR3hsWTNScGIyNGpYMnRsZVVGeWNtRjVYRzVjZEZ4MElDb2dRSFI1Y0dVZ2V6OUJjbkpoZVgxY2JseDBYSFFnS2lCQWNISnBkbUYwWlZ4dVhIUmNkQ0FxTDF4dVhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoMGFHbHpMQ0FuWDJ0bGVVRnljbUY1Snl3Z2V5QjJZV3gxWlRvZ2JuVnNiQ3dnZDNKcGRHRmliR1U2SUhSeWRXVXNJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaU0I5S1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQkpaR1Z1ZEdsallXd2dkRzhnVzAxaGNDNW5aWFFvS1Ywb2FIUjBjSE02THk5a1pYWmxiRzl3WlhJdWJXOTZhV3hzWVM1dmNtY3ZaVzR0VlZNdlpHOWpjeTlYWldJdlNtRjJZVk5qY21sd2RDOVNaV1psY21WdVkyVXZSMnh2WW1Gc1gwOWlhbVZqZEhNdlRXRndMMmRsZENrdVhHNWNkQ0FxSUVkbGRITWdZVzRnWld4bGJXVnVkQ0IzYVhSb0lIUm9aU0J6Y0dWamFXWnBaV1FnYTJWNUxDQmhibVFnY21WMGRYSnVjeUJwZEhNZ2RtRnNkV1VzSUc5eUlHQjFibVJsWm1sdVpXUmdJR2xtSUhSb1pTQmxiR1Z0Wlc1MElHUnZaWE1nYm05MElHVjRhWE4wTGx4dVhIUWdLaUJBY0dGeVlXMGdleXA5SUd0bGVTQXRJRlJvWlNCclpYa2dkRzhnWjJWMElHWnliMjBnZEdocGN5QmpiMnhzWldOMGFXOXVYRzVjZENBcUlFQnlaWFIxY201eklIc3FJSHdnZFc1a1pXWnBibVZrZlZ4dVhIUWdLaTljYmx4MGNIVmliR2xqSUdkbGRDaHJaWGs2SUVzcE9pQldJSHdnZFc1a1pXWnBibVZrSUh0Y2JseDBYSFJ5WlhSMWNtNGdjM1Z3WlhJdVoyVjBLR3RsZVNrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dTV1JsYm5ScFkyRnNJSFJ2SUZ0TllYQXVjMlYwS0NsZEtHaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwwMWhjQzl6WlhRcExseHVYSFFnS2lCVFpYUnpJR0VnYm1WM0lHVnNaVzFsYm5RZ2FXNGdkR2hsSUdOdmJHeGxZM1JwYjI0Z2QybDBhQ0IwYUdVZ2MzQmxZMmxtYVdWa0lHdGxlU0JoYm1RZ2RtRnNkV1V1WEc1Y2RDQXFJRUJ3WVhKaGJTQjdLbjBnYTJWNUlDMGdWR2hsSUd0bGVTQnZaaUIwYUdVZ1pXeGxiV1Z1ZENCMGJ5QmhaR1JjYmx4MElDb2dRSEJoY21GdElIc3FmU0IyWVd4MVpTQXRJRlJvWlNCMllXeDFaU0J2WmlCMGFHVWdaV3hsYldWdWRDQjBieUJoWkdSY2JseDBJQ29nUUhKbGRIVnlibk1nZTBOdmJHeGxZM1JwYjI1OVhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ2MyVjBLR3RsZVRvZ1N5d2dkbUZzZFdVNklGWXBPaUIwYUdseklIdGNibHgwWEhSMGFHbHpMbDloY25KaGVTQTlJRzUxYkd3N1hHNWNkRngwZEdocGN5NWZhMlY1UVhKeVlYa2dQU0J1ZFd4c08xeHVYSFJjZEhKbGRIVnliaUJ6ZFhCbGNpNXpaWFFvYTJWNUxDQjJZV3gxWlNrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dTV1JsYm5ScFkyRnNJSFJ2SUZ0TllYQXVhR0Z6S0NsZEtHaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwwMWhjQzlvWVhNcExseHVYSFFnS2lCRGFHVmphM01nYVdZZ1lXNGdaV3hsYldWdWRDQmxlR2x6ZEhNZ2FXNGdkR2hsSUdOdmJHeGxZM1JwYjI0dVhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ2EyVjVJQzBnVkdobElHdGxlU0J2WmlCMGFHVWdaV3hsYldWdWRDQjBieUJqYUdWamF5Qm1iM0pjYmx4MElDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJR0IwY25WbFlDQnBaaUIwYUdVZ1pXeGxiV1Z1ZENCbGVHbHpkSE1zSUdCbVlXeHpaV0FnYVdZZ2FYUWdaRzlsY3lCdWIzUWdaWGhwYzNRdVhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ2FHRnpLR3RsZVRvZ1N5azZJR0p2YjJ4bFlXNGdlMXh1WEhSY2RISmxkSFZ5YmlCemRYQmxjaTVvWVhNb2EyVjVLVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCSlpHVnVkR2xqWVd3Z2RHOGdXMDFoY0M1a1pXeGxkR1VvS1Ywb2FIUjBjSE02THk5a1pYWmxiRzl3WlhJdWJXOTZhV3hzWVM1dmNtY3ZaVzR0VlZNdlpHOWpjeTlYWldJdlNtRjJZVk5qY21sd2RDOVNaV1psY21WdVkyVXZSMnh2WW1Gc1gwOWlhbVZqZEhNdlRXRndMMlJsYkdWMFpTa3VYRzVjZENBcUlFUmxiR1YwWlhNZ1lXNGdaV3hsYldWdWRDQm1jbTl0SUhSb1pTQmpiMnhzWldOMGFXOXVMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2V5cDlJR3RsZVNBdElGUm9aU0JyWlhrZ2RHOGdaR1ZzWlhSbElHWnliMjBnZEdobElHTnZiR3hsWTNScGIyNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlHQjBjblZsWUNCcFppQjBhR1VnWld4bGJXVnVkQ0IzWVhNZ2NtVnRiM1psWkN3Z1lHWmhiSE5sWUNCcFppQjBhR1VnWld4bGJXVnVkQ0JrYjJWeklHNXZkQ0JsZUdsemRDNWNibHgwSUNvdlhHNWNkSEIxWW14cFl5QmtaV3hsZEdVb2EyVjVPaUJMS1RvZ1ltOXZiR1ZoYmlCN1hHNWNkRngwZEdocGN5NWZZWEp5WVhrZ1BTQnVkV3hzTzF4dVhIUmNkSFJvYVhNdVgydGxlVUZ5Y21GNUlEMGdiblZzYkR0Y2JseDBYSFJ5WlhSMWNtNGdjM1Z3WlhJdVpHVnNaWFJsS0d0bGVTazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nU1dSbGJuUnBZMkZzSUhSdklGdE5ZWEF1WTJ4bFlYSW9LVjBvYUhSMGNITTZMeTlrWlhabGJHOXdaWEl1Ylc5NmFXeHNZUzV2Y21jdlpXNHRWVk12Wkc5amN5OVhaV0l2U21GMllWTmpjbWx3ZEM5U1pXWmxjbVZ1WTJVdlIyeHZZbUZzWDA5aWFtVmpkSE12VFdGd0wyTnNaV0Z5S1M1Y2JseDBJQ29nVW1WdGIzWmxjeUJoYkd3Z1pXeGxiV1Z1ZEhNZ1puSnZiU0IwYUdVZ1kyOXNiR1ZqZEdsdmJpNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UzVnVaR1ZtYVc1bFpIMWNibHgwSUNvdlhHNWNkSEIxWW14cFl5QmpiR1ZoY2lncE9pQjJiMmxrSUh0Y2JseDBYSFJ5WlhSMWNtNGdjM1Z3WlhJdVkyeGxZWElvS1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQkRjbVZoZEdWeklHRnVJRzl5WkdWeVpXUWdZWEp5WVhrZ2IyWWdkR2hsSUhaaGJIVmxjeUJ2WmlCMGFHbHpJR052Ykd4bFkzUnBiMjRzSUdGdVpDQmpZV05vWlhNZ2FYUWdhVzUwWlhKdVlXeHNlUzRnVkdobElHRnljbUY1SUhkcGJHd2diMjVzZVNCaVpWeHVYSFFnS2lCeVpXTnZibk4wY25WamRHVmtJR2xtSUdGdUlHbDBaVzBnYVhNZ1lXUmtaV1FnZEc4Z2IzSWdjbVZ0YjNabFpDQm1jbTl0SUhSb1pTQmpiMnhzWldOMGFXOXVMQ0J2Y2lCcFppQjViM1VnWTJoaGJtZGxJSFJvWlNCc1pXNW5kR2dnYjJZZ2RHaGxJR0Z5Y21GNVhHNWNkQ0FxSUdsMGMyVnNaaTRnU1dZZ2VXOTFJR1J2YmlkMElIZGhiblFnZEdocGN5QmpZV05vYVc1bklHSmxhR0YyYVc5eUxDQjFjMlVnWUZzdUxpNWpiMnhzWldOMGFXOXVMblpoYkhWbGN5Z3BYV0FnYjNKY2JseDBJQ29nWUVGeWNtRjVMbVp5YjIwb1kyOXNiR1ZqZEdsdmJpNTJZV3gxWlhNb0tTbGdJR2x1YzNSbFlXUXVYRzVjZENBcUlFQnlaWFIxY201eklIdEJjbkpoZVgxY2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCaGNuSmhlU2dwT2lCV1cxMGdlMXh1WEhSY2RHbG1JQ2doZEdocGN5NWZZWEp5WVhrZ2ZId2dkR2hwY3k1ZllYSnlZWGt1YkdWdVozUm9JQ0U5UFNCMGFHbHpMbk5wZW1VcElIUm9hWE11WDJGeWNtRjVJRDBnV3k0dUxuUm9hWE11ZG1Gc2RXVnpLQ2xkTzF4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TGw5aGNuSmhlVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCRGNtVmhkR1Z6SUdGdUlHOXlaR1Z5WldRZ1lYSnlZWGtnYjJZZ2RHaGxJR3RsZVhNZ2IyWWdkR2hwY3lCamIyeHNaV04wYVc5dUxDQmhibVFnWTJGamFHVnpJR2wwSUdsdWRHVnlibUZzYkhrdUlGUm9aU0JoY25KaGVTQjNhV3hzSUc5dWJIa2dZbVZjYmx4MElDb2djbVZqYjI1emRISjFZM1JsWkNCcFppQmhiaUJwZEdWdElHbHpJR0ZrWkdWa0lIUnZJRzl5SUhKbGJXOTJaV1FnWm5KdmJTQjBhR1VnWTI5c2JHVmpkR2x2Yml3Z2IzSWdhV1lnZVc5MUlHTm9ZVzVuWlNCMGFHVWdiR1Z1WjNSb0lHOW1JSFJvWlNCaGNuSmhlVnh1WEhRZ0tpQnBkSE5sYkdZdUlFbG1JSGx2ZFNCa2IyNG5kQ0IzWVc1MElIUm9hWE1nWTJGamFHbHVaeUJpWldoaGRtbHZjaXdnZFhObElHQmJMaTR1WTI5c2JHVmpkR2x2Ymk1clpYbHpLQ2xkWUNCdmNseHVYSFFnS2lCZ1FYSnlZWGt1Wm5KdmJTaGpiMnhzWldOMGFXOXVMbXRsZVhNb0tTbGdJR2x1YzNSbFlXUXVYRzVjZENBcUlFQnlaWFIxY201eklIdEJjbkpoZVgxY2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCclpYbEJjbkpoZVNncE9pQkxXMTBnZTF4dVhIUmNkR2xtSUNnaGRHaHBjeTVmYTJWNVFYSnlZWGtnZkh3Z2RHaHBjeTVmYTJWNVFYSnlZWGt1YkdWdVozUm9JQ0U5UFNCMGFHbHpMbk5wZW1VcElIUm9hWE11WDJ0bGVVRnljbUY1SUQwZ1d5NHVMblJvYVhNdWEyVjVjeWdwWFR0Y2JseDBYSFJ5WlhSMWNtNGdkR2hwY3k1ZmEyVjVRWEp5WVhrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dUMkowWVdsdWN5QjBhR1VnWm1seWMzUWdkbUZzZFdVb2N5a2dhVzRnZEdocGN5QmpiMnhzWldOMGFXOXVMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1cyRnRiM1Z1ZEYwZ1FXMXZkVzUwSUc5bUlIWmhiSFZsY3lCMGJ5QnZZblJoYVc0Z1puSnZiU0IwYUdVZ1ltVm5hVzV1YVc1blhHNWNkQ0FxSUVCeVpYUjFjbTV6SUhzcWZFRnljbUY1UENvK2ZTQkJJSE5wYm1kc1pTQjJZV3gxWlNCcFppQnVieUJoYlc5MWJuUWdhWE1nY0hKdmRtbGtaV1FnYjNJZ1lXNGdZWEp5WVhrZ2IyWWdkbUZzZFdWekxDQnpkR0Z5ZEdsdVp5Qm1jbTl0SUhSb1pTQmxibVFnYVdaY2JseDBJQ29nWVcxdmRXNTBJR2x6SUc1bFoyRjBhWFpsWEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nWm1seWMzUW9LVG9nVmlCOElIVnVaR1ZtYVc1bFpEdGNibHgwY0hWaWJHbGpJR1pwY25OMEtHRnRiM1Z1ZERvZ2JuVnRZbVZ5S1RvZ1ZsdGRPMXh1WEhSd2RXSnNhV01nWm1seWMzUW9ZVzF2ZFc1MFB6b2diblZ0WW1WeUtUb2dWaUI4SUZaYlhTQjhJSFZ1WkdWbWFXNWxaQ0I3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJoYlc5MWJuUWdQVDA5SUNkMWJtUmxabWx1WldRbktTQnlaWFIxY200Z2RHaHBjeTUyWVd4MVpYTW9LUzV1WlhoMEtDa3VkbUZzZFdVN1hHNWNkRngwYVdZZ0tHRnRiM1Z1ZENBOElEQXBJSEpsZEhWeWJpQjBhR2x6TG14aGMzUW9ZVzF2ZFc1MElDb2dMVEVwTzF4dVhIUmNkR0Z0YjNWdWRDQTlJRTFoZEdndWJXbHVLSFJvYVhNdWMybDZaU3dnWVcxdmRXNTBLVHRjYmx4MFhIUmpiMjV6ZENCcGRHVnlJRDBnZEdocGN5NTJZV3gxWlhNb0tUdGNibHgwWEhSeVpYUjFjbTRnUVhKeVlYa3Vabkp2YlNoN0lHeGxibWQwYURvZ1lXMXZkVzUwSUgwc0lDZ3BPaUJXSUQwK0lHbDBaWEl1Ym1WNGRDZ3BMblpoYkhWbEtUdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJQWW5SaGFXNXpJSFJvWlNCbWFYSnpkQ0JyWlhrb2N5a2dhVzRnZEdocGN5QmpiMnhzWldOMGFXOXVMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1cyRnRiM1Z1ZEYwZ1FXMXZkVzUwSUc5bUlHdGxlWE1nZEc4Z2IySjBZV2x1SUdaeWIyMGdkR2hsSUdKbFoybHVibWx1WjF4dVhIUWdLaUJBY21WMGRYSnVjeUI3S254QmNuSmhlVHdxUG4wZ1FTQnphVzVuYkdVZ2EyVjVJR2xtSUc1dklHRnRiM1Z1ZENCcGN5QndjbTkyYVdSbFpDQnZjaUJoYmlCaGNuSmhlU0J2WmlCclpYbHpMQ0J6ZEdGeWRHbHVaeUJtY205dElIUm9aU0JsYm1RZ2FXWmNibHgwSUNvZ1lXMXZkVzUwSUdseklHNWxaMkYwYVhabFhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ1ptbHljM1JMWlhrb0tUb2dTeUI4SUhWdVpHVm1hVzVsWkR0Y2JseDBjSFZpYkdsaklHWnBjbk4wUzJWNUtHRnRiM1Z1ZERvZ2JuVnRZbVZ5S1RvZ1MxdGRPMXh1WEhSd2RXSnNhV01nWm1seWMzUkxaWGtvWVcxdmRXNTBQem9nYm5WdFltVnlLVG9nU3lCOElFdGJYU0I4SUhWdVpHVm1hVzVsWkNCN1hHNWNkRngwYVdZZ0tIUjVjR1Z2WmlCaGJXOTFiblFnUFQwOUlDZDFibVJsWm1sdVpXUW5LU0J5WlhSMWNtNGdkR2hwY3k1clpYbHpLQ2t1Ym1WNGRDZ3BMblpoYkhWbE8xeHVYSFJjZEdsbUlDaGhiVzkxYm5RZ1BDQXdLU0J5WlhSMWNtNGdkR2hwY3k1c1lYTjBTMlY1S0dGdGIzVnVkQ0FxSUMweEtUdGNibHgwWEhSaGJXOTFiblFnUFNCTllYUm9MbTFwYmloMGFHbHpMbk5wZW1Vc0lHRnRiM1Z1ZENrN1hHNWNkRngwWTI5dWMzUWdhWFJsY2lBOUlIUm9hWE11YTJWNWN5Z3BPMXh1WEhSY2RISmxkSFZ5YmlCQmNuSmhlUzVtY205dEtIc2diR1Z1WjNSb09pQmhiVzkxYm5RZ2ZTd2dLQ2s2SUVzZ1BUNGdhWFJsY2k1dVpYaDBLQ2t1ZG1Gc2RXVXBPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUU5aWRHRnBibk1nZEdobElHeGhjM1FnZG1Gc2RXVW9jeWtnYVc0Z2RHaHBjeUJqYjJ4c1pXTjBhVzl1TGlCVWFHbHpJSEpsYkdsbGN5QnZiaUI3UUd4cGJtc2dRMjlzYkdWamRHbHZiaU5oY25KaGVYMHNJR0Z1WkNCMGFIVnpJSFJvWlNCallXTm9hVzVuWEc1Y2RDQXFJRzFsWTJoaGJtbHpiU0JoY0hCc2FXVnpJR2hsY21VZ1lYTWdkMlZzYkM1Y2JseDBJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRnRoYlc5MWJuUmRJRUZ0YjNWdWRDQnZaaUIyWVd4MVpYTWdkRzhnYjJKMFlXbHVJR1p5YjIwZ2RHaGxJR1Z1WkZ4dVhIUWdLaUJBY21WMGRYSnVjeUI3S254QmNuSmhlVHdxUG4wZ1FTQnphVzVuYkdVZ2RtRnNkV1VnYVdZZ2JtOGdZVzF2ZFc1MElHbHpJSEJ5YjNacFpHVmtJRzl5SUdGdUlHRnljbUY1SUc5bUlIWmhiSFZsY3l3Z2MzUmhjblJwYm1jZ1puSnZiU0IwYUdVZ2MzUmhjblFnYVdaY2JseDBJQ29nWVcxdmRXNTBJR2x6SUc1bFoyRjBhWFpsWEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nYkdGemRDZ3BPaUJXSUh3Z2RXNWtaV1pwYm1Wa08xeHVYSFJ3ZFdKc2FXTWdiR0Z6ZENoaGJXOTFiblE2SUc1MWJXSmxjaWs2SUZaYlhUdGNibHgwY0hWaWJHbGpJR3hoYzNRb1lXMXZkVzUwUHpvZ2JuVnRZbVZ5S1RvZ1ZpQjhJRlpiWFNCOElIVnVaR1ZtYVc1bFpDQjdYRzVjZEZ4MFkyOXVjM1FnWVhKeUlEMGdkR2hwY3k1aGNuSmhlU2dwTzF4dVhIUmNkR2xtSUNoMGVYQmxiMllnWVcxdmRXNTBJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2djbVYwZFhKdUlHRnljbHRoY25JdWJHVnVaM1JvSUMwZ01WMDdYRzVjZEZ4MGFXWWdLR0Z0YjNWdWRDQThJREFwSUhKbGRIVnliaUIwYUdsekxtWnBjbk4wS0dGdGIzVnVkQ0FxSUMweEtUdGNibHgwWEhScFppQW9JV0Z0YjNWdWRDa2djbVYwZFhKdUlGdGRPMXh1WEhSY2RISmxkSFZ5YmlCaGNuSXVjMnhwWTJVb0xXRnRiM1Z1ZENrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dUMkowWVdsdWN5QjBhR1VnYkdGemRDQnJaWGtvY3lrZ2FXNGdkR2hwY3lCamIyeHNaV04wYVc5dUxpQlVhR2x6SUhKbGJHbGxjeUJ2YmlCN1FHeHBibXNnUTI5c2JHVmpkR2x2YmlOclpYbEJjbkpoZVgwc0lHRnVaQ0IwYUhWeklIUm9aU0JqWVdOb2FXNW5YRzVjZENBcUlHMWxZMmhoYm1semJTQmhjSEJzYVdWeklHaGxjbVVnWVhNZ2QyVnNiQzVjYmx4MElDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdGhiVzkxYm5SZElFRnRiM1Z1ZENCdlppQnJaWGx6SUhSdklHOWlkR0ZwYmlCbWNtOXRJSFJvWlNCbGJtUmNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2V5cDhRWEp5WVhrOEtqNTlJRUVnYzJsdVoyeGxJR3RsZVNCcFppQnVieUJoYlc5MWJuUWdhWE1nY0hKdmRtbGtaV1FnYjNJZ1lXNGdZWEp5WVhrZ2IyWWdhMlY1Y3l3Z2MzUmhjblJwYm1jZ1puSnZiU0IwYUdVZ2MzUmhjblFnYVdaY2JseDBJQ29nWVcxdmRXNTBJR2x6SUc1bFoyRjBhWFpsWEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nYkdGemRFdGxlU2dwT2lCTElId2dkVzVrWldacGJtVmtPMXh1WEhSd2RXSnNhV01nYkdGemRFdGxlU2hoYlc5MWJuUTZJRzUxYldKbGNpazZJRXRiWFR0Y2JseDBjSFZpYkdsaklHeGhjM1JMWlhrb1lXMXZkVzUwUHpvZ2JuVnRZbVZ5S1RvZ1N5QjhJRXRiWFNCOElIVnVaR1ZtYVc1bFpDQjdYRzVjZEZ4MFkyOXVjM1FnWVhKeUlEMGdkR2hwY3k1clpYbEJjbkpoZVNncE8xeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ1lXMXZkVzUwSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnY21WMGRYSnVJR0Z5Y2x0aGNuSXViR1Z1WjNSb0lDMGdNVjA3WEc1Y2RGeDBhV1lnS0dGdGIzVnVkQ0E4SURBcElISmxkSFZ5YmlCMGFHbHpMbVpwY25OMFMyVjVLR0Z0YjNWdWRDQXFJQzB4S1R0Y2JseDBYSFJwWmlBb0lXRnRiM1Z1ZENrZ2NtVjBkWEp1SUZ0ZE8xeHVYSFJjZEhKbGRIVnliaUJoY25JdWMyeHBZMlVvTFdGdGIzVnVkQ2s3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1QySjBZV2x1Y3lCMWJtbHhkV1VnY21GdVpHOXRJSFpoYkhWbEtITXBJR1p5YjIwZ2RHaHBjeUJqYjJ4c1pXTjBhVzl1TGlCVWFHbHpJSEpsYkdsbGN5QnZiaUI3UUd4cGJtc2dRMjlzYkdWamRHbHZiaU5oY25KaGVYMHNJR0Z1WkNCMGFIVnpJSFJvWlNCallXTm9hVzVuWEc1Y2RDQXFJRzFsWTJoaGJtbHpiU0JoY0hCc2FXVnpJR2hsY21VZ1lYTWdkMlZzYkM1Y2JseDBJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRnRoYlc5MWJuUmRJRUZ0YjNWdWRDQnZaaUIyWVd4MVpYTWdkRzhnYjJKMFlXbHVJSEpoYm1SdmJXeDVYRzVjZENBcUlFQnlaWFIxY201eklIc3FmRUZ5Y21GNVBDbytmU0JCSUhOcGJtZHNaU0IyWVd4MVpTQnBaaUJ1YnlCaGJXOTFiblFnYVhNZ2NISnZkbWxrWldRZ2IzSWdZVzRnWVhKeVlYa2diMllnZG1Gc2RXVnpYRzVjZENBcUwxeHVYSFJ3ZFdKc2FXTWdjbUZ1Wkc5dEtDazZJRlk3WEc1Y2RIQjFZbXhwWXlCeVlXNWtiMjBvWVcxdmRXNTBPaUJ1ZFcxaVpYSXBPaUJXVzEwN1hHNWNkSEIxWW14cFl5QnlZVzVrYjIwb1lXMXZkVzUwUHpvZ2JuVnRZbVZ5S1RvZ1ZpQjhJRlpiWFNCN1hHNWNkRngwYkdWMElHRnljaUE5SUhSb2FYTXVZWEp5WVhrb0tUdGNibHgwWEhScFppQW9kSGx3Wlc5bUlHRnRiM1Z1ZENBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUhKbGRIVnliaUJoY25KYlRXRjBhQzVtYkc5dmNpaE5ZWFJvTG5KaGJtUnZiU2dwSUNvZ1lYSnlMbXhsYm1kMGFDbGRPMXh1WEhSY2RHbG1JQ2hoY25JdWJHVnVaM1JvSUQwOVBTQXdJSHg4SUNGaGJXOTFiblFwSUhKbGRIVnliaUJiWFR0Y2JseDBYSFJoY25JZ1BTQmhjbkl1YzJ4cFkyVW9LVHRjYmx4MFhIUnlaWFIxY200Z1FYSnlZWGt1Wm5KdmJTaDdJR3hsYm1kMGFEb2dZVzF2ZFc1MElIMHNJQ2dwT2lCV0lEMCtJR0Z5Y2k1emNHeHBZMlVvVFdGMGFDNW1iRzl2Y2loTllYUm9MbkpoYm1SdmJTZ3BJQ29nWVhKeUxteGxibWQwYUNrc0lERXBXekJkS1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQlBZblJoYVc1eklIVnVhWEYxWlNCeVlXNWtiMjBnYTJWNUtITXBJR1p5YjIwZ2RHaHBjeUJqYjJ4c1pXTjBhVzl1TGlCVWFHbHpJSEpsYkdsbGN5QnZiaUI3UUd4cGJtc2dRMjlzYkdWamRHbHZiaU5yWlhsQmNuSmhlWDBzSUdGdVpDQjBhSFZ6SUhSb1pTQmpZV05vYVc1blhHNWNkQ0FxSUcxbFkyaGhibWx6YlNCaGNIQnNhV1Z6SUdobGNtVWdZWE1nZDJWc2JDNWNibHgwSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0aGJXOTFiblJkSUVGdGIzVnVkQ0J2WmlCclpYbHpJSFJ2SUc5aWRHRnBiaUJ5WVc1a2IyMXNlVnh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdLbnhCY25KaGVUd3FQbjBnUVNCemFXNW5iR1VnYTJWNUlHbG1JRzV2SUdGdGIzVnVkQ0JwY3lCd2NtOTJhV1JsWkNCdmNpQmhiaUJoY25KaGVWeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklISmhibVJ2YlV0bGVTZ3BPaUJMTzF4dVhIUndkV0pzYVdNZ2NtRnVaRzl0UzJWNUtHRnRiM1Z1ZERvZ2JuVnRZbVZ5S1RvZ1MxdGRPMXh1WEhSd2RXSnNhV01nY21GdVpHOXRTMlY1S0dGdGIzVnVkRDg2SUc1MWJXSmxjaWs2SUVzZ2ZDQkxXMTBnZTF4dVhIUmNkR3hsZENCaGNuSWdQU0IwYUdsekxtdGxlVUZ5Y21GNUtDazdYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQmhiVzkxYm5RZ1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCeVpYUjFjbTRnWVhKeVcwMWhkR2d1Wm14dmIzSW9UV0YwYUM1eVlXNWtiMjBvS1NBcUlHRnljaTVzWlc1bmRHZ3BYVHRjYmx4MFhIUnBaaUFvWVhKeUxteGxibWQwYUNBOVBUMGdNQ0I4ZkNBaFlXMXZkVzUwS1NCeVpYUjFjbTRnVzEwN1hHNWNkRngwWVhKeUlEMGdZWEp5TG5Oc2FXTmxLQ2s3WEc1Y2RGeDBjbVYwZFhKdUlFRnljbUY1TG1aeWIyMG9leUJzWlc1bmRHZzZJR0Z0YjNWdWRDQjlMQ0FvS1RvZ1N5QTlQaUJoY25JdWMzQnNhV05sS0UxaGRHZ3VabXh2YjNJb1RXRjBhQzV5WVc1a2IyMG9LU0FxSUdGeWNpNXNaVzVuZEdncExDQXhLVnN3WFNrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dVMlZoY21Ob1pYTWdabTl5SUdFZ2MybHVaMnhsSUdsMFpXMGdkMmhsY21VZ2RHaGxJR2RwZG1WdUlHWjFibU4wYVc5dUlISmxkSFZ5Ym5NZ1lTQjBjblYwYUhrZ2RtRnNkV1V1SUZSb2FYTWdZbVZvWVhabGN5QnNhV3RsWEc1Y2RDQXFJRnRCY25KaGVTNW1hVzVrS0NsZEtHaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwwRnljbUY1TDJacGJtUXBMbHh1WEhRZ0tpQThkMkZ5Ymo1QmJHd2dZMjlzYkdWamRHbHZibk1nZFhObFpDQnBiaUJFYVhOamIzSmtMbXB6SUdGeVpTQnRZWEJ3WldRZ2RYTnBibWNnZEdobGFYSWdZR2xrWUNCd2NtOXdaWEowZVN3Z1lXNWtJR2xtSUhsdmRTQjNZVzUwSUhSdklHWnBibVFnWW5rZ2FXUWdlVzkxWEc1Y2RDQXFJSE5vYjNWc1pDQjFjMlVnZEdobElHQm5aWFJnSUcxbGRHaHZaQzRnVTJWbFhHNWNkQ0FxSUZ0TlJFNWRLR2gwZEhCek9pOHZaR1YyWld4dmNHVnlMbTF2ZW1sc2JHRXViM0puTDJWdUxWVlRMMlJ2WTNNdlYyVmlMMHBoZG1GVFkzSnBjSFF2VW1WbVpYSmxibU5sTDBkc2IySmhiRjlQWW1wbFkzUnpMMDFoY0M5blpYUXBJR1p2Y2lCa1pYUmhhV3h6TGp3dmQyRnliajVjYmx4MElDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnVkdobElHWjFibU4wYVc5dUlIUnZJSFJsYzNRZ2QybDBhQ0FvYzJodmRXeGtJSEpsZEhWeWJpQmliMjlzWldGdUtWeHVYSFFnS2lCQWNHRnlZVzBnZXlwOUlGdDBhR2x6UVhKblhTQldZV3gxWlNCMGJ5QjFjMlVnWVhNZ1lIUm9hWE5nSUhkb1pXNGdaWGhsWTNWMGFXNW5JR1oxYm1OMGFXOXVYRzVjZENBcUlFQnlaWFIxY201eklIc3FmVnh1WEhRZ0tpQkFaWGhoYlhCc1pTQmpiMnhzWldOMGFXOXVMbVpwYm1Rb2RYTmxjaUE5UGlCMWMyVnlMblZ6WlhKdVlXMWxJRDA5UFNBblFtOWlKeWs3WEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nWm1sdVpDaG1iam9nS0haaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lHSnZiMnhsWVc0cE9pQldJSHdnZFc1a1pXWnBibVZrTzF4dVhIUndkV0pzYVdNZ1ptbHVaRHhVUGlobWJqb2dLSFJvYVhNNklGUXNJSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRzSUhSb2FYTkJjbWM2SUZRcE9pQldJSHdnZFc1a1pXWnBibVZrTzF4dVhIUndkV0pzYVdNZ1ptbHVaQ2htYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHNJSFJvYVhOQmNtYy9PaUIxYm10dWIzZHVLVG9nVmlCOElIVnVaR1ZtYVc1bFpDQjdYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQjBhR2x6UVhKbklDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ1ptNGdQU0JtYmk1aWFXNWtLSFJvYVhOQmNtY3BPMXh1WEhSY2RHWnZjaUFvWTI5dWMzUWdXMnRsZVN3Z2RtRnNYU0J2WmlCMGFHbHpLU0I3WEc1Y2RGeDBYSFJwWmlBb1ptNG9kbUZzTENCclpYa3NJSFJvYVhNcEtTQnlaWFIxY200Z2RtRnNPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlGTmxZWEpqYUdWeklHWnZjaUIwYUdVZ2EyVjVJRzltSUdFZ2MybHVaMnhsSUdsMFpXMGdkMmhsY21VZ2RHaGxJR2RwZG1WdUlHWjFibU4wYVc5dUlISmxkSFZ5Ym5NZ1lTQjBjblYwYUhrZ2RtRnNkV1V1SUZSb2FYTWdZbVZvWVhabGN5QnNhV3RsWEc1Y2RDQXFJRnRCY25KaGVTNW1hVzVrU1c1a1pYZ29LVjBvYUhSMGNITTZMeTlrWlhabGJHOXdaWEl1Ylc5NmFXeHNZUzV2Y21jdlpXNHRWVk12Wkc5amN5OVhaV0l2U21GMllWTmpjbWx3ZEM5U1pXWmxjbVZ1WTJVdlIyeHZZbUZzWDA5aWFtVmpkSE12UVhKeVlYa3ZabWx1WkVsdVpHVjRLU3hjYmx4MElDb2dZblYwSUhKbGRIVnlibk1nZEdobElHdGxlU0J5WVhSb1pYSWdkR2hoYmlCMGFHVWdjRzl6YVhScGIyNWhiQ0JwYm1SbGVDNWNibHgwSUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1ptNGdWR2hsSUdaMWJtTjBhVzl1SUhSdklIUmxjM1FnZDJsMGFDQW9jMmh2ZFd4a0lISmxkSFZ5YmlCaWIyOXNaV0Z1S1Z4dVhIUWdLaUJBY0dGeVlXMGdleXA5SUZ0MGFHbHpRWEpuWFNCV1lXeDFaU0IwYnlCMWMyVWdZWE1nWUhSb2FYTmdJSGRvWlc0Z1pYaGxZM1YwYVc1bklHWjFibU4wYVc5dVhHNWNkQ0FxSUVCeVpYUjFjbTV6SUhzcWZWeHVYSFFnS2lCQVpYaGhiWEJzWlNCamIyeHNaV04wYVc5dUxtWnBibVJMWlhrb2RYTmxjaUE5UGlCMWMyVnlMblZ6WlhKdVlXMWxJRDA5UFNBblFtOWlKeWs3WEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nWm1sdVpFdGxlU2htYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHBPaUJMSUh3Z2RXNWtaV1pwYm1Wa08xeHVYSFJ3ZFdKc2FXTWdabWx1WkV0bGVUeFVQaWhtYmpvZ0tIUm9hWE02SUZRc0lIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHNJSFJvYVhOQmNtYzZJRlFwT2lCTElId2dkVzVrWldacGJtVmtPMXh1WEhSd2RXSnNhV01nWm1sdVpFdGxlU2htYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHNJSFJvYVhOQmNtYy9PaUIxYm10dWIzZHVLVG9nU3lCOElIVnVaR1ZtYVc1bFpDQjdYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQjBhR2x6UVhKbklDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ1ptNGdQU0JtYmk1aWFXNWtLSFJvYVhOQmNtY3BPMXh1WEhSY2RHWnZjaUFvWTI5dWMzUWdXMnRsZVN3Z2RtRnNYU0J2WmlCMGFHbHpLU0I3WEc1Y2RGeDBYSFJwWmlBb1ptNG9kbUZzTENCclpYa3NJSFJvYVhNcEtTQnlaWFIxY200Z2EyVjVPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlGSmxiVzkyWlhNZ2FYUmxiWE1nZEdoaGRDQnpZWFJwYzJaNUlIUm9aU0J3Y205MmFXUmxaQ0JtYVd4MFpYSWdablZ1WTNScGIyNHVYRzVjZENBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWnVJRVoxYm1OMGFXOXVJSFZ6WldRZ2RHOGdkR1Z6ZENBb2MyaHZkV3hrSUhKbGRIVnliaUJoSUdKdmIyeGxZVzRwWEc1Y2RDQXFJRUJ3WVhKaGJTQjdLbjBnVzNSb2FYTkJjbWRkSUZaaGJIVmxJSFJ2SUhWelpTQmhjeUJnZEdocGMyQWdkMmhsYmlCbGVHVmpkWFJwYm1jZ1puVnVZM1JwYjI1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTI1MWJXSmxjbjBnVkdobElHNTFiV0psY2lCdlppQnlaVzF2ZG1Wa0lHVnVkSEpwWlhOY2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCemQyVmxjQ2htYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHBPaUJ1ZFcxaVpYSTdYRzVjZEhCMVlteHBZeUJ6ZDJWbGNEeFVQaWhtYmpvZ0tIUm9hWE02SUZRc0lIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHNJSFJvYVhOQmNtYzZJRlFwT2lCdWRXMWlaWEk3WEc1Y2RIQjFZbXhwWXlCemQyVmxjQ2htYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHNJSFJvYVhOQmNtYy9PaUIxYm10dWIzZHVLVG9nYm5WdFltVnlJSHRjYmx4MFhIUnBaaUFvZEhsd1pXOW1JSFJvYVhOQmNtY2dJVDA5SUNkMWJtUmxabWx1WldRbktTQm1iaUE5SUdadUxtSnBibVFvZEdocGMwRnlaeWs3WEc1Y2RGeDBZMjl1YzNRZ2NISmxkbWx2ZFhOVGFYcGxJRDBnZEdocGN5NXphWHBsTzF4dVhIUmNkR1p2Y2lBb1kyOXVjM1FnVzJ0bGVTd2dkbUZzWFNCdlppQjBhR2x6S1NCN1hHNWNkRngwWEhScFppQW9abTRvZG1Gc0xDQnJaWGtzSUhSb2FYTXBLU0IwYUdsekxtUmxiR1YwWlNoclpYa3BPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnY0hKbGRtbHZkWE5UYVhwbElDMGdkR2hwY3k1emFYcGxPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUVsa1pXNTBhV05oYkNCMGIxeHVYSFFnS2lCYlFYSnlZWGt1Wm1sc2RHVnlLQ2xkS0doMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwyVnVMVlZUTDJSdlkzTXZWMlZpTDBwaGRtRlRZM0pwY0hRdlVtVm1aWEpsYm1ObEwwZHNiMkpoYkY5UFltcGxZM1J6TDBGeWNtRjVMMlpwYkhSbGNpa3NYRzVjZENBcUlHSjFkQ0J5WlhSMWNtNXpJR0VnUTI5c2JHVmpkR2x2YmlCcGJuTjBaV0ZrSUc5bUlHRnVJRUZ5Y21GNUxseHVYSFFnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQlVhR1VnWm5WdVkzUnBiMjRnZEc4Z2RHVnpkQ0IzYVhSb0lDaHphRzkxYkdRZ2NtVjBkWEp1SUdKdmIyeGxZVzRwWEc1Y2RDQXFJRUJ3WVhKaGJTQjdLbjBnVzNSb2FYTkJjbWRkSUZaaGJIVmxJSFJ2SUhWelpTQmhjeUJnZEdocGMyQWdkMmhsYmlCbGVHVmpkWFJwYm1jZ1puVnVZM1JwYjI1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTBOdmJHeGxZM1JwYjI1OVhHNWNkQ0FxSUVCbGVHRnRjR3hsSUdOdmJHeGxZM1JwYjI0dVptbHNkR1Z5S0hWelpYSWdQVDRnZFhObGNpNTFjMlZ5Ym1GdFpTQTlQVDBnSjBKdllpY3BPMXh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJR1pwYkhSbGNpaG1iam9nS0haaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lHSnZiMnhsWVc0cE9pQjBhR2x6TzF4dVhIUndkV0pzYVdNZ1ptbHNkR1Z5UEZRK0tHWnVPaUFvZEdocGN6b2dWQ3dnZG1Gc2RXVTZJRllzSUd0bGVUb2dTeXdnWTI5c2JHVmpkR2x2YmpvZ2RHaHBjeWtnUFQ0Z1ltOXZiR1ZoYml3Z2RHaHBjMEZ5WnpvZ1ZDazZJSFJvYVhNN1hHNWNkSEIxWW14cFl5Qm1hV3gwWlhJb1ptNDZJQ2gyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCaWIyOXNaV0Z1TENCMGFHbHpRWEpuUHpvZ2RXNXJibTkzYmlrNklIUm9hWE1nZTF4dVhIUmNkR2xtSUNoMGVYQmxiMllnZEdocGMwRnlaeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJR1p1SUQwZ1ptNHVZbWx1WkNoMGFHbHpRWEpuS1R0Y2JseDBYSFJqYjI1emRDQnlaWE4xYkhSeklEMGdibVYzSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0piVTNsdFltOXNMbk53WldOcFpYTmRQRXNzSUZZK0tDa2dZWE1nZEdocGN6dGNibHgwWEhSbWIzSWdLR052Ym5OMElGdHJaWGtzSUhaaGJGMGdiMllnZEdocGN5a2dlMXh1WEhSY2RGeDBhV1lnS0dadUtIWmhiQ3dnYTJWNUxDQjBhR2x6S1NrZ2NtVnpkV3gwY3k1elpYUW9hMlY1TENCMllXd3BPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnY21WemRXeDBjenRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCUVlYSjBhWFJwYjI1eklIUm9aU0JqYjJ4c1pXTjBhVzl1SUdsdWRHOGdkSGR2SUdOdmJHeGxZM1JwYjI1eklIZG9aWEpsSUhSb1pTQm1hWEp6ZENCamIyeHNaV04wYVc5dVhHNWNkQ0FxSUdOdmJuUmhhVzV6SUhSb1pTQnBkR1Z0Y3lCMGFHRjBJSEJoYzNObFpDQmhibVFnZEdobElITmxZMjl1WkNCamIyNTBZV2x1Y3lCMGFHVWdhWFJsYlhNZ2RHaGhkQ0JtWVdsc1pXUXVYRzVjZENBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWnVJRVoxYm1OMGFXOXVJSFZ6WldRZ2RHOGdkR1Z6ZENBb2MyaHZkV3hrSUhKbGRIVnliaUJoSUdKdmIyeGxZVzRwWEc1Y2RDQXFJRUJ3WVhKaGJTQjdLbjBnVzNSb2FYTkJjbWRkSUZaaGJIVmxJSFJ2SUhWelpTQmhjeUJnZEdocGMyQWdkMmhsYmlCbGVHVmpkWFJwYm1jZ1puVnVZM1JwYjI1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTBOdmJHeGxZM1JwYjI1YlhYMWNibHgwSUNvZ1FHVjRZVzF3YkdVZ1kyOXVjM1FnVzJKcFp5d2djMjFoYkd4ZElEMGdZMjlzYkdWamRHbHZiaTV3WVhKMGFYUnBiMjRvWjNWcGJHUWdQVDRnWjNWcGJHUXViV1Z0WW1WeVEyOTFiblFnUGlBeU5UQXBPMXh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJSEJoY25ScGRHbHZiaWhtYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHBPaUJiZEdocGN5d2dkR2hwYzEwN1hHNWNkSEIxWW14cFl5QndZWEowYVhScGIyNDhWRDRvWm00NklDaDBhR2x6T2lCVUxDQjJZV3gxWlRvZ1Zpd2dhMlY1T2lCTExDQmpiMnhzWldOMGFXOXVPaUIwYUdsektTQTlQaUJpYjI5c1pXRnVMQ0IwYUdselFYSm5PaUJVS1RvZ1czUm9hWE1zSUhSb2FYTmRPMXh1WEhSd2RXSnNhV01nY0dGeWRHbDBhVzl1S0dadU9pQW9kbUZzZFdVNklGWXNJR3RsZVRvZ1N5d2dZMjlzYkdWamRHbHZiam9nZEdocGN5a2dQVDRnWW05dmJHVmhiaXdnZEdocGMwRnlaejg2SUhWdWEyNXZkMjRwT2lCYmRHaHBjeXdnZEdocGMxMGdlMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdkR2hwYzBGeVp5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElHWnVJRDBnWm00dVltbHVaQ2gwYUdselFYSm5LVHRjYmx4MFhIUXZMeUJVVDBSUE9pQmpiMjV6YVdSbGNpQnlaVzF2ZG1sdVp5QjBhR1VnUEVzc0lGWStJR1p5YjIwZ2RHaGxJR052Ym5OMGNuVmpkRzl5Y3lCaFpuUmxjaUJVVXlBekxqY3VNQ0JwY3lCeVpXeGxZWE5sWkN3Z1lYTWdhWFFnYVc1bVpYSnpJR2wwWEc1Y2RGeDBZMjl1YzNRZ2NtVnpkV3gwY3pvZ1czUm9hWE1zSUhSb2FYTmRJRDBnVzI1bGR5QjBhR2x6TG1OdmJuTjBjblZqZEc5eVcxTjViV0p2YkM1emNHVmphV1Z6WFR4TExDQldQaWdwSUdGeklIUm9hWE1zSUc1bGR5QjBhR2x6TG1OdmJuTjBjblZqZEc5eVcxTjViV0p2YkM1emNHVmphV1Z6WFR4TExDQldQaWdwSUdGeklIUm9hWE5kTzF4dVhIUmNkR1p2Y2lBb1kyOXVjM1FnVzJ0bGVTd2dkbUZzWFNCdlppQjBhR2x6S1NCN1hHNWNkRngwWEhScFppQW9abTRvZG1Gc0xDQnJaWGtzSUhSb2FYTXBLU0I3WEc1Y2RGeDBYSFJjZEhKbGMzVnNkSE5iTUYwdWMyVjBLR3RsZVN3Z2RtRnNLVHRjYmx4MFhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUmNkSEpsYzNWc2RITmJNVjB1YzJWMEtHdGxlU3dnZG1Gc0tUdGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkRngwY21WMGRYSnVJSEpsYzNWc2RITTdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVFdGd2N5QmxZV05vSUdsMFpXMGdhVzUwYnlCaElFTnZiR3hsWTNScGIyNHNJSFJvWlc0Z2FtOXBibk1nZEdobElISmxjM1ZzZEhNZ2FXNTBieUJoSUhOcGJtZHNaU0JEYjJ4c1pXTjBhVzl1TGlCSlpHVnVkR2xqWVd3Z2FXNGdZbVZvWVhacGIzSWdkRzljYmx4MElDb2dXMEZ5Y21GNUxtWnNZWFJOWVhBb0tWMG9hSFIwY0hNNkx5OWtaWFpsYkc5d1pYSXViVzk2YVd4c1lTNXZjbWN2Wlc0dFZWTXZaRzlqY3k5WFpXSXZTbUYyWVZOamNtbHdkQzlTWldabGNtVnVZMlV2UjJ4dlltRnNYMDlpYW1WamRITXZRWEp5WVhrdlpteGhkRTFoY0NrdVhHNWNkQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdadUlFWjFibU4wYVc5dUlIUm9ZWFFnY0hKdlpIVmpaWE1nWVNCdVpYY2dRMjlzYkdWamRHbHZibHh1WEhRZ0tpQkFjR0Z5WVcwZ2V5cDlJRnQwYUdselFYSm5YU0JXWVd4MVpTQjBieUIxYzJVZ1lYTWdZSFJvYVhOZ0lIZG9aVzRnWlhobFkzVjBhVzVuSUdaMWJtTjBhVzl1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHREYjJ4c1pXTjBhVzl1ZlZ4dVhIUWdLaUJBWlhoaGJYQnNaU0JqYjJ4c1pXTjBhVzl1TG1ac1lYUk5ZWEFvWjNWcGJHUWdQVDRnWjNWcGJHUXViV1Z0WW1WeWN5azdYRzVjZENBcUwxeHVYSFJ3ZFdKc2FXTWdabXhoZEUxaGNEeFVQaWhtYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJRU52Ykd4bFkzUnBiMjQ4U3l3Z1ZENHBPaUJEYjJ4c1pXTjBhVzl1UEVzc0lGUStPMXh1WEhSd2RXSnNhV01nWm14aGRFMWhjRHhVTENCVWFHbHpQaWhtYmpvZ0tIUm9hWE02SUZSb2FYTXNJSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUVOdmJHeGxZM1JwYjI0OFN5d2dWRDRzSUhSb2FYTkJjbWM2SUZSb2FYTXBPaUJEYjJ4c1pXTjBhVzl1UEVzc0lGUStPMXh1WEhSd2RXSnNhV01nWm14aGRFMWhjRHhVUGlobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUVOdmJHeGxZM1JwYjI0OFN5d2dWRDRzSUhSb2FYTkJjbWMvT2lCMWJtdHViM2R1S1RvZ1EyOXNiR1ZqZEdsdmJqeExMQ0JVUGlCN1hHNWNkRngwWTI5dWMzUWdZMjlzYkdWamRHbHZibk1nUFNCMGFHbHpMbTFoY0NobWJpd2dkR2hwYzBGeVp5azdYRzVjZEZ4MGNtVjBkWEp1SUNodVpYY2dkR2hwY3k1amIyNXpkSEoxWTNSdmNsdFRlVzFpYjJ3dWMzQmxZMmxsYzEwOFN5d2dWRDRvS1NCaGN5QkRiMnhzWldOMGFXOXVQRXNzSUZRK0tTNWpiMjVqWVhRb0xpNHVZMjlzYkdWamRHbHZibk1wTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFMWhjSE1nWldGamFDQnBkR1Z0SUhSdklHRnViM1JvWlhJZ2RtRnNkV1VnYVc1MGJ5QmhiaUJoY25KaGVTNGdTV1JsYm5ScFkyRnNJR2x1SUdKbGFHRjJhVzl5SUhSdlhHNWNkQ0FxSUZ0QmNuSmhlUzV0WVhBb0tWMG9hSFIwY0hNNkx5OWtaWFpsYkc5d1pYSXViVzk2YVd4c1lTNXZjbWN2Wlc0dFZWTXZaRzlqY3k5WFpXSXZTbUYyWVZOamNtbHdkQzlTWldabGNtVnVZMlV2UjJ4dlltRnNYMDlpYW1WamRITXZRWEp5WVhrdmJXRndLUzVjYmx4MElDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnUm5WdVkzUnBiMjRnZEdoaGRDQndjbTlrZFdObGN5QmhiaUJsYkdWdFpXNTBJRzltSUhSb1pTQnVaWGNnWVhKeVlYa3NJSFJoYTJsdVp5QjBhSEpsWlNCaGNtZDFiV1Z1ZEhOY2JseDBJQ29nUUhCaGNtRnRJSHNxZlNCYmRHaHBjMEZ5WjEwZ1ZtRnNkV1VnZEc4Z2RYTmxJR0Z6SUdCMGFHbHpZQ0IzYUdWdUlHVjRaV04xZEdsdVp5Qm1kVzVqZEdsdmJseHVYSFFnS2lCQWNtVjBkWEp1Y3lCN1FYSnlZWGw5WEc1Y2RDQXFJRUJsZUdGdGNHeGxJR052Ykd4bFkzUnBiMjR1YldGd0tIVnpaWElnUFQ0Z2RYTmxjaTUwWVdjcE8xeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklHMWhjRHhVUGlobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUZRcE9pQlVXMTA3WEc1Y2RIQjFZbXhwWXlCdFlYQThWR2hwY3l3Z1ZENG9abTQ2SUNoMGFHbHpPaUJVYUdsekxDQjJZV3gxWlRvZ1Zpd2dhMlY1T2lCTExDQmpiMnhzWldOMGFXOXVPaUIwYUdsektTQTlQaUJVTENCMGFHbHpRWEpuT2lCVWFHbHpLVG9nVkZ0ZE8xeHVYSFJ3ZFdKc2FXTWdiV0Z3UEZRK0tHWnVPaUFvZG1Gc2RXVTZJRllzSUd0bGVUb2dTeXdnWTI5c2JHVmpkR2x2YmpvZ2RHaHBjeWtnUFQ0Z1ZDd2dkR2hwYzBGeVp6ODZJSFZ1YTI1dmQyNHBPaUJVVzEwZ2UxeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ2RHaHBjMEZ5WnlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUdadUlEMGdabTR1WW1sdVpDaDBhR2x6UVhKbktUdGNibHgwWEhSamIyNXpkQ0JwZEdWeUlEMGdkR2hwY3k1bGJuUnlhV1Z6S0NrN1hHNWNkRngwY21WMGRYSnVJRUZ5Y21GNUxtWnliMjBvZXlCc1pXNW5kR2c2SUhSb2FYTXVjMmw2WlNCOUxDQW9LVG9nVkNBOVBpQjdYRzVjZEZ4MFhIUmpiMjV6ZENCYmEyVjVMQ0IyWVd4MVpWMGdQU0JwZEdWeUxtNWxlSFFvS1M1MllXeDFaVHRjYmx4MFhIUmNkSEpsZEhWeWJpQm1iaWgyWVd4MVpTd2dhMlY1TENCMGFHbHpLVHRjYmx4MFhIUjlLVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCTllYQnpJR1ZoWTJnZ2FYUmxiU0IwYnlCaGJtOTBhR1Z5SUhaaGJIVmxJR2x1ZEc4Z1lTQmpiMnhzWldOMGFXOXVMaUJKWkdWdWRHbGpZV3dnYVc0Z1ltVm9ZWFpwYjNJZ2RHOWNibHgwSUNvZ1cwRnljbUY1TG0xaGNDZ3BYU2hvZEhSd2N6b3ZMMlJsZG1Wc2IzQmxjaTV0YjNwcGJHeGhMbTl5Wnk5bGJpMVZVeTlrYjJOekwxZGxZaTlLWVhaaFUyTnlhWEIwTDFKbFptVnlaVzVqWlM5SGJHOWlZV3hmVDJKcVpXTjBjeTlCY25KaGVTOXRZWEFwTGx4dVhIUWdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtYmlCR2RXNWpkR2x2YmlCMGFHRjBJSEJ5YjJSMVkyVnpJR0Z1SUdWc1pXMWxiblFnYjJZZ2RHaGxJRzVsZHlCamIyeHNaV04wYVc5dUxDQjBZV3RwYm1jZ2RHaHlaV1VnWVhKbmRXMWxiblJ6WEc1Y2RDQXFJRUJ3WVhKaGJTQjdLbjBnVzNSb2FYTkJjbWRkSUZaaGJIVmxJSFJ2SUhWelpTQmhjeUJnZEdocGMyQWdkMmhsYmlCbGVHVmpkWFJwYm1jZ1puVnVZM1JwYjI1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTBOdmJHeGxZM1JwYjI1OVhHNWNkQ0FxSUVCbGVHRnRjR3hsSUdOdmJHeGxZM1JwYjI0dWJXRndWbUZzZFdWektIVnpaWElnUFQ0Z2RYTmxjaTUwWVdjcE8xeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklHMWhjRlpoYkhWbGN6eFVQaWhtYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJRlFwT2lCRGIyeHNaV04wYVc5dVBFc3NJRlErTzF4dVhIUndkV0pzYVdNZ2JXRndWbUZzZFdWelBGUm9hWE1zSUZRK0tHWnVPaUFvZEdocGN6b2dWR2hwY3l3Z2RtRnNkV1U2SUZZc0lHdGxlVG9nU3l3Z1kyOXNiR1ZqZEdsdmJqb2dkR2hwY3lrZ1BUNGdWQ3dnZEdocGMwRnlaem9nVkdocGN5azZJRU52Ykd4bFkzUnBiMjQ4U3l3Z1ZENDdYRzVjZEhCMVlteHBZeUJ0WVhCV1lXeDFaWE04VkQ0b1ptNDZJQ2gyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCVUxDQjBhR2x6UVhKblB6b2dkVzVyYm05M2JpazZJRU52Ykd4bFkzUnBiMjQ4U3l3Z1ZENGdlMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdkR2hwYzBGeVp5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElHWnVJRDBnWm00dVltbHVaQ2gwYUdselFYSm5LVHRjYmx4MFhIUmpiMjV6ZENCamIyeHNJRDBnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNKYlUzbHRZbTlzTG5Od1pXTnBaWE5kUEVzc0lGUStLQ2tnWVhNZ1EyOXNiR1ZqZEdsdmJqeExMQ0JVUGp0Y2JseDBYSFJtYjNJZ0tHTnZibk4wSUZ0clpYa3NJSFpoYkYwZ2IyWWdkR2hwY3lrZ1kyOXNiQzV6WlhRb2EyVjVMQ0JtYmloMllXd3NJR3RsZVN3Z2RHaHBjeWtwTzF4dVhIUmNkSEpsZEhWeWJpQmpiMnhzTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFTm9aV05yY3lCcFppQjBhR1Z5WlNCbGVHbHpkSE1nWVc0Z2FYUmxiU0IwYUdGMElIQmhjM05sY3lCaElIUmxjM1F1SUVsa1pXNTBhV05oYkNCcGJpQmlaV2hoZG1sdmNpQjBiMXh1WEhRZ0tpQmJRWEp5WVhrdWMyOXRaU2dwWFNob2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTFWVXk5a2IyTnpMMWRsWWk5S1lYWmhVMk55YVhCMEwxSmxabVZ5Wlc1alpTOUhiRzlpWVd4ZlQySnFaV04wY3k5QmNuSmhlUzl6YjIxbEtTNWNibHgwSUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1ptNGdSblZ1WTNScGIyNGdkWE5sWkNCMGJ5QjBaWE4wSUNoemFHOTFiR1FnY21WMGRYSnVJR0VnWW05dmJHVmhiaWxjYmx4MElDb2dRSEJoY21GdElIc3FmU0JiZEdocGMwRnlaMTBnVm1Gc2RXVWdkRzhnZFhObElHRnpJR0IwYUdsellDQjNhR1Z1SUdWNFpXTjFkR2x1WnlCbWRXNWpkR2x2Ymx4dVhIUWdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjFjYmx4MElDb2dRR1Y0WVcxd2JHVWdZMjlzYkdWamRHbHZiaTV6YjIxbEtIVnpaWElnUFQ0Z2RYTmxjaTVrYVhOamNtbHRhVzVoZEc5eUlEMDlQU0FuTURBd01DY3BPMXh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJSE52YldVb1ptNDZJQ2gyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCaWIyOXNaV0Z1S1RvZ1ltOXZiR1ZoYmp0Y2JseDBjSFZpYkdsaklITnZiV1U4VkQ0b1ptNDZJQ2gwYUdsek9pQlVMQ0IyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCaWIyOXNaV0Z1TENCMGFHbHpRWEpuT2lCVUtUb2dZbTl2YkdWaGJqdGNibHgwY0hWaWJHbGpJSE52YldVb1ptNDZJQ2gyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCaWIyOXNaV0Z1TENCMGFHbHpRWEpuUHpvZ2RXNXJibTkzYmlrNklHSnZiMnhsWVc0Z2UxeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ2RHaHBjMEZ5WnlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUdadUlEMGdabTR1WW1sdVpDaDBhR2x6UVhKbktUdGNibHgwWEhSbWIzSWdLR052Ym5OMElGdHJaWGtzSUhaaGJGMGdiMllnZEdocGN5a2dlMXh1WEhSY2RGeDBhV1lnS0dadUtIWmhiQ3dnYTJWNUxDQjBhR2x6S1NrZ2NtVjBkWEp1SUhSeWRXVTdYRzVjZEZ4MGZWeHVYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJEYUdWamEzTWdhV1lnWVd4c0lHbDBaVzF6SUhCaGMzTmxjeUJoSUhSbGMzUXVJRWxrWlc1MGFXTmhiQ0JwYmlCaVpXaGhkbWx2Y2lCMGIxeHVYSFFnS2lCYlFYSnlZWGt1WlhabGNua29LVjBvYUhSMGNITTZMeTlrWlhabGJHOXdaWEl1Ylc5NmFXeHNZUzV2Y21jdlpXNHRWVk12Wkc5amN5OVhaV0l2U21GMllWTmpjbWx3ZEM5U1pXWmxjbVZ1WTJVdlIyeHZZbUZzWDA5aWFtVmpkSE12UVhKeVlYa3ZaWFpsY25rcExseHVYSFFnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQkdkVzVqZEdsdmJpQjFjMlZrSUhSdklIUmxjM1FnS0hOb2IzVnNaQ0J5WlhSMWNtNGdZU0JpYjI5c1pXRnVLVnh1WEhRZ0tpQkFjR0Z5WVcwZ2V5cDlJRnQwYUdselFYSm5YU0JXWVd4MVpTQjBieUIxYzJVZ1lYTWdZSFJvYVhOZ0lIZG9aVzRnWlhobFkzVjBhVzVuSUdaMWJtTjBhVzl1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmVnh1WEhRZ0tpQkFaWGhoYlhCc1pTQmpiMnhzWldOMGFXOXVMbVYyWlhKNUtIVnpaWElnUFQ0Z0lYVnpaWEl1WW05MEtUdGNibHgwSUNvdlhHNWNkSEIxWW14cFl5QmxkbVZ5ZVNobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRwT2lCaWIyOXNaV0Z1TzF4dVhIUndkV0pzYVdNZ1pYWmxjbms4VkQ0b1ptNDZJQ2gwYUdsek9pQlVMQ0IyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCaWIyOXNaV0Z1TENCMGFHbHpRWEpuT2lCVUtUb2dZbTl2YkdWaGJqdGNibHgwY0hWaWJHbGpJR1YyWlhKNUtHWnVPaUFvZG1Gc2RXVTZJRllzSUd0bGVUb2dTeXdnWTI5c2JHVmpkR2x2YmpvZ2RHaHBjeWtnUFQ0Z1ltOXZiR1ZoYml3Z2RHaHBjMEZ5Wno4NklIVnVhMjV2ZDI0cE9pQmliMjlzWldGdUlIdGNibHgwWEhScFppQW9kSGx3Wlc5bUlIUm9hWE5CY21jZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NCbWJpQTlJR1p1TG1KcGJtUW9kR2hwYzBGeVp5azdYRzVjZEZ4MFptOXlJQ2hqYjI1emRDQmJhMlY1TENCMllXeGRJRzltSUhSb2FYTXBJSHRjYmx4MFhIUmNkR2xtSUNnaFptNG9kbUZzTENCclpYa3NJSFJvYVhNcEtTQnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RGeDBmVnh1WEhSY2RISmxkSFZ5YmlCMGNuVmxPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUVGd2NHeHBaWE1nWVNCbWRXNWpkR2x2YmlCMGJ5QndjbTlrZFdObElHRWdjMmx1WjJ4bElIWmhiSFZsTGlCSlpHVnVkR2xqWVd3Z2FXNGdZbVZvWVhacGIzSWdkRzljYmx4MElDb2dXMEZ5Y21GNUxuSmxaSFZqWlNncFhTaG9kSFJ3Y3pvdkwyUmxkbVZzYjNCbGNpNXRiM3BwYkd4aExtOXlaeTlsYmkxVlV5OWtiMk56TDFkbFlpOUtZWFpoVTJOeWFYQjBMMUpsWm1WeVpXNWpaUzlIYkc5aVlXeGZUMkpxWldOMGN5OUJjbkpoZVM5eVpXUjFZMlVwTGx4dVhIUWdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtYmlCR2RXNWpkR2x2YmlCMWMyVmtJSFJ2SUhKbFpIVmpaU3dnZEdGcmFXNW5JR1p2ZFhJZ1lYSm5kVzFsYm5Sek95QmdZV05qZFcxMWJHRjBiM0pnTENCZ1kzVnljbVZ1ZEZaaGJIVmxZQ3dnWUdOMWNuSmxiblJMWlhsZ0xGeHVYSFFnS2lCaGJtUWdZR052Ykd4bFkzUnBiMjVnWEc1Y2RDQXFJRUJ3WVhKaGJTQjdLbjBnVzJsdWFYUnBZV3hXWVd4MVpWMGdVM1JoY25ScGJtY2dkbUZzZFdVZ1ptOXlJSFJvWlNCaFkyTjFiWFZzWVhSdmNseHVYSFFnS2lCQWNtVjBkWEp1Y3lCN0tuMWNibHgwSUNvZ1FHVjRZVzF3YkdVZ1kyOXNiR1ZqZEdsdmJpNXlaV1IxWTJVb0tHRmpZeXdnWjNWcGJHUXBJRDArSUdGall5QXJJR2QxYVd4a0xtMWxiV0psY2tOdmRXNTBMQ0F3S1R0Y2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCeVpXUjFZMlU4VkQ0b1ptNDZJQ2hoWTJOMWJYVnNZWFJ2Y2pvZ1ZDd2dkbUZzZFdVNklGWXNJR3RsZVRvZ1N5d2dZMjlzYkdWamRHbHZiam9nZEdocGN5a2dQVDRnVkN3Z2FXNXBkR2xoYkZaaGJIVmxQem9nVkNrNklGUWdlMXh1WEhSY2RHeGxkQ0JoWTJOMWJYVnNZWFJ2Y2lFNklGUTdYRzVjYmx4MFhIUnBaaUFvZEhsd1pXOW1JR2x1YVhScFlXeFdZV3gxWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JseDBYSFJjZEdGalkzVnRkV3hoZEc5eUlEMGdhVzVwZEdsaGJGWmhiSFZsTzF4dVhIUmNkRngwWm05eUlDaGpiMjV6ZENCYmEyVjVMQ0IyWVd4ZElHOW1JSFJvYVhNcElHRmpZM1Z0ZFd4aGRHOXlJRDBnWm00b1lXTmpkVzExYkdGMGIzSXNJSFpoYkN3Z2EyVjVMQ0IwYUdsektUdGNibHgwWEhSY2RISmxkSFZ5YmlCaFkyTjFiWFZzWVhSdmNqdGNibHgwWEhSOVhHNWNkRngwYkdWMElHWnBjbk4wSUQwZ2RISjFaVHRjYmx4MFhIUm1iM0lnS0dOdmJuTjBJRnRyWlhrc0lIWmhiRjBnYjJZZ2RHaHBjeWtnZTF4dVhIUmNkRngwYVdZZ0tHWnBjbk4wS1NCN1hHNWNkRngwWEhSY2RHRmpZM1Z0ZFd4aGRHOXlJRDBnZG1Gc0lHRnpJSFZ1YTI1dmQyNGdZWE1nVkR0Y2JseDBYSFJjZEZ4MFptbHljM1FnUFNCbVlXeHpaVHRjYmx4MFhIUmNkRngwWTI5dWRHbHVkV1U3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJoWTJOMWJYVnNZWFJ2Y2lBOUlHWnVLR0ZqWTNWdGRXeGhkRzl5TENCMllXd3NJR3RsZVN3Z2RHaHBjeWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBMeThnVG04Z2FYUmxiWE1nYVhSbGNtRjBaV1F1WEc1Y2RGeDBhV1lnS0dacGNuTjBLU0I3WEc1Y2RGeDBYSFIwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkU1pXUjFZMlVnYjJZZ1pXMXdkSGtnWTI5c2JHVmpkR2x2YmlCM2FYUm9JRzV2SUdsdWFYUnBZV3dnZG1Gc2RXVW5LVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z1lXTmpkVzExYkdGMGIzSTdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nU1dSbGJuUnBZMkZzSUhSdlhHNWNkQ0FxSUZ0TllYQXVabTl5UldGamFDZ3BYU2hvZEhSd2N6b3ZMMlJsZG1Wc2IzQmxjaTV0YjNwcGJHeGhMbTl5Wnk5bGJpMVZVeTlrYjJOekwxZGxZaTlLWVhaaFUyTnlhWEIwTDFKbFptVnlaVzVqWlM5SGJHOWlZV3hmVDJKcVpXTjBjeTlOWVhBdlptOXlSV0ZqYUNrc1hHNWNkQ0FxSUdKMWRDQnlaWFIxY201eklIUm9aU0JqYjJ4c1pXTjBhVzl1SUdsdWMzUmxZV1FnYjJZZ2RXNWtaV1pwYm1Wa0xseHVYSFFnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQkdkVzVqZEdsdmJpQjBieUJsZUdWamRYUmxJR1p2Y2lCbFlXTm9JR1ZzWlcxbGJuUmNibHgwSUNvZ1FIQmhjbUZ0SUhzcWZTQmJkR2hwYzBGeVoxMGdWbUZzZFdVZ2RHOGdkWE5sSUdGeklHQjBhR2x6WUNCM2FHVnVJR1Y0WldOMWRHbHVaeUJtZFc1amRHbHZibHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdRMjlzYkdWamRHbHZibjFjYmx4MElDb2dRR1Y0WVcxd2JHVmNibHgwSUNvZ1kyOXNiR1ZqZEdsdmJseHVYSFFnS2lBZ0xtVmhZMmdvZFhObGNpQTlQaUJqYjI1emIyeGxMbXh2WnloMWMyVnlMblZ6WlhKdVlXMWxLU2xjYmx4MElDb2dJQzVtYVd4MFpYSW9kWE5sY2lBOVBpQjFjMlZ5TG1KdmRDbGNibHgwSUNvZ0lDNWxZV05vS0hWelpYSWdQVDRnWTI5dWMyOXNaUzVzYjJjb2RYTmxjaTUxYzJWeWJtRnRaU2twTzF4dVhIUWdLaTljYmx4MGNIVmliR2xqSUdWaFkyZ29abTQ2SUNoMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQjJiMmxrS1RvZ2RHaHBjenRjYmx4MGNIVmliR2xqSUdWaFkyZzhWRDRvWm00NklDaDBhR2x6T2lCVUxDQjJZV3gxWlRvZ1Zpd2dhMlY1T2lCTExDQmpiMnhzWldOMGFXOXVPaUIwYUdsektTQTlQaUIyYjJsa0xDQjBhR2x6UVhKbk9pQlVLVG9nZEdocGN6dGNibHgwY0hWaWJHbGpJR1ZoWTJnb1ptNDZJQ2gyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCMmIybGtMQ0IwYUdselFYSm5Qem9nZFc1cmJtOTNiaWs2SUhSb2FYTWdlMXh1WEhSY2RIUm9hWE11Wm05eVJXRmphQ2htYmlCaGN5QW9kbUZzZFdVNklGWXNJR3RsZVRvZ1N5d2diV0Z3T2lCTllYQThTeXdnVmo0cElEMCtJSFp2YVdRc0lIUm9hWE5CY21jcE8xeHVYSFJjZEhKbGRIVnliaUIwYUdsek8xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRkoxYm5NZ1lTQm1kVzVqZEdsdmJpQnZiaUIwYUdVZ1kyOXNiR1ZqZEdsdmJpQmhibVFnY21WMGRYSnVjeUIwYUdVZ1kyOXNiR1ZqZEdsdmJpNWNibHgwSUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1ptNGdSblZ1WTNScGIyNGdkRzhnWlhobFkzVjBaVnh1WEhRZ0tpQkFjR0Z5WVcwZ2V5cDlJRnQwYUdselFYSm5YU0JXWVd4MVpTQjBieUIxYzJVZ1lYTWdZSFJvYVhOZ0lIZG9aVzRnWlhobFkzVjBhVzVuSUdaMWJtTjBhVzl1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHREYjJ4c1pXTjBhVzl1ZlZ4dVhIUWdLaUJBWlhoaGJYQnNaVnh1WEhRZ0tpQmpiMnhzWldOMGFXOXVYRzVjZENBcUlDQXVkR0Z3S0dOdmJHd2dQVDRnWTI5dWMyOXNaUzVzYjJjb1kyOXNiQzV6YVhwbEtTbGNibHgwSUNvZ0lDNW1hV3gwWlhJb2RYTmxjaUE5UGlCMWMyVnlMbUp2ZENsY2JseDBJQ29nSUM1MFlYQW9ZMjlzYkNBOVBpQmpiMjV6YjJ4bExteHZaeWhqYjJ4c0xuTnBlbVVwS1Z4dVhIUWdLaTljYmx4MGNIVmliR2xqSUhSaGNDaG1iam9nS0dOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lIWnZhV1FwT2lCMGFHbHpPMXh1WEhSd2RXSnNhV01nZEdGd1BGUStLR1p1T2lBb2RHaHBjem9nVkN3Z1kyOXNiR1ZqZEdsdmJqb2dkR2hwY3lrZ1BUNGdkbTlwWkN3Z2RHaHBjMEZ5WnpvZ1ZDazZJSFJvYVhNN1hHNWNkSEIxWW14cFl5QjBZWEFvWm00NklDaGpiMnhzWldOMGFXOXVPaUIwYUdsektTQTlQaUIyYjJsa0xDQjBhR2x6UVhKblB6b2dkVzVyYm05M2JpazZJSFJvYVhNZ2UxeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ2RHaHBjMEZ5WnlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUdadUlEMGdabTR1WW1sdVpDaDBhR2x6UVhKbktUdGNibHgwWEhSbWJpaDBhR2x6S1R0Y2JseDBYSFJ5WlhSMWNtNGdkR2hwY3p0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQkRjbVZoZEdWeklHRnVJR2xrWlc1MGFXTmhiQ0J6YUdGc2JHOTNJR052Y0hrZ2IyWWdkR2hwY3lCamIyeHNaV04wYVc5dUxseHVYSFFnS2lCQWNtVjBkWEp1Y3lCN1EyOXNiR1ZqZEdsdmJuMWNibHgwSUNvZ1FHVjRZVzF3YkdVZ1kyOXVjM1FnYm1WM1EyOXNiQ0E5SUhOdmJXVkRiMnhzTG1Oc2IyNWxLQ2s3WEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nWTJ4dmJtVW9LVG9nZEdocGN5QjdYRzVjZEZ4MGNtVjBkWEp1SUc1bGR5QjBhR2x6TG1OdmJuTjBjblZqZEc5eVcxTjViV0p2YkM1emNHVmphV1Z6WFNoMGFHbHpLU0JoY3lCMGFHbHpPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUVOdmJXSnBibVZ6SUhSb2FYTWdZMjlzYkdWamRHbHZiaUIzYVhSb0lHOTBhR1Z5Y3lCcGJuUnZJR0VnYm1WM0lHTnZiR3hsWTNScGIyNHVJRTV2Ym1VZ2IyWWdkR2hsSUhOdmRYSmpaU0JqYjJ4c1pXTjBhVzl1Y3lCaGNtVWdiVzlrYVdacFpXUXVYRzVjZENBcUlFQndZWEpoYlNCN0xpNHVRMjlzYkdWamRHbHZibjBnWTI5c2JHVmpkR2x2Ym5NZ1EyOXNiR1ZqZEdsdmJuTWdkRzhnYldWeVoyVmNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwTnZiR3hsWTNScGIyNTlYRzVjZENBcUlFQmxlR0Z0Y0d4bElHTnZibk4wSUc1bGQwTnZiR3dnUFNCemIyMWxRMjlzYkM1amIyNWpZWFFvYzI5dFpVOTBhR1Z5UTI5c2JDd2dZVzV2ZEdobGNrTnZiR3dzSUc5b1FtOTVRVU52Ykd3cE8xeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklHTnZibU5oZENndUxpNWpiMnhzWldOMGFXOXVjem9nUTI5c2JHVmpkR2x2Ymp4TExDQldQbHRkS1RvZ2RHaHBjeUI3WEc1Y2RGeDBZMjl1YzNRZ2JtVjNRMjlzYkNBOUlIUm9hWE11WTJ4dmJtVW9LVHRjYmx4MFhIUm1iM0lnS0dOdmJuTjBJR052Ykd3Z2IyWWdZMjlzYkdWamRHbHZibk1wSUh0Y2JseDBYSFJjZEdadmNpQW9ZMjl1YzNRZ1cydGxlU3dnZG1Gc1hTQnZaaUJqYjJ4c0tTQnVaWGREYjJ4c0xuTmxkQ2hyWlhrc0lIWmhiQ2s3WEc1Y2RGeDBmVnh1WEhSY2RISmxkSFZ5YmlCdVpYZERiMnhzTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFTm9aV05yY3lCcFppQjBhR2x6SUdOdmJHeGxZM1JwYjI0Z2MyaGhjbVZ6SUdsa1pXNTBhV05oYkNCcGRHVnRjeUIzYVhSb0lHRnViM1JvWlhJdVhHNWNkQ0FxSUZSb2FYTWdhWE1nWkdsbVptVnlaVzUwSUhSdklHTm9aV05yYVc1bklHWnZjaUJsY1hWaGJHbDBlU0IxYzJsdVp5QmxjWFZoYkMxemFXZHVjeXdnWW1WallYVnpaVnh1WEhRZ0tpQjBhR1VnWTI5c2JHVmpkR2x2Ym5NZ2JXRjVJR0psSUdScFptWmxjbVZ1ZENCdlltcGxZM1J6TENCaWRYUWdZMjl1ZEdGcGJpQjBhR1VnYzJGdFpTQmtZWFJoTGx4dVhIUWdLaUJBY0dGeVlXMGdlME52Ykd4bFkzUnBiMjU5SUdOdmJHeGxZM1JwYjI0Z1EyOXNiR1ZqZEdsdmJpQjBieUJqYjIxd1lYSmxJSGRwZEdoY2JseDBJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZkb1pYUm9aWElnZEdobElHTnZiR3hsWTNScGIyNXpJR2hoZG1VZ2FXUmxiblJwWTJGc0lHTnZiblJsYm5SelhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ1pYRjFZV3h6S0dOdmJHeGxZM1JwYjI0NklFTnZiR3hsWTNScGIyNDhTeXdnVmo0cE9pQmliMjlzWldGdUlIdGNibHgwWEhScFppQW9JV052Ykd4bFkzUnBiMjRwSUhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhScFppQW9kR2hwY3lBOVBUMGdZMjlzYkdWamRHbHZiaWtnY21WMGRYSnVJSFJ5ZFdVN1hHNWNkRngwYVdZZ0tIUm9hWE11YzJsNlpTQWhQVDBnWTI5c2JHVmpkR2x2Ymk1emFYcGxLU0J5WlhSMWNtNGdabUZzYzJVN1hHNWNkRngwWm05eUlDaGpiMjV6ZENCYmEyVjVMQ0IyWVd4MVpWMGdiMllnZEdocGN5a2dlMXh1WEhSY2RGeDBhV1lnS0NGamIyeHNaV04wYVc5dUxtaGhjeWhyWlhrcElIeDhJSFpoYkhWbElDRTlQU0JqYjJ4c1pXTjBhVzl1TG1kbGRDaHJaWGtwS1NCN1hHNWNkRngwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVkdobElITnZjblFnYldWMGFHOWtJSE52Y25SeklIUm9aU0JwZEdWdGN5QnZaaUJoSUdOdmJHeGxZM1JwYjI0Z2FXNGdjR3hoWTJVZ1lXNWtJSEpsZEhWeWJuTWdhWFF1WEc1Y2RDQXFJRlJvWlNCemIzSjBJR2x6SUc1dmRDQnVaV05sYzNOaGNtbHNlU0J6ZEdGaWJHVXVJRlJvWlNCa1pXWmhkV3gwSUhOdmNuUWdiM0prWlhJZ2FYTWdZV05qYjNKa2FXNW5JSFJ2SUhOMGNtbHVaeUJWYm1samIyUmxJR052WkdVZ2NHOXBiblJ6TGx4dVhIUWdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JiWTI5dGNHRnlaVVoxYm1OMGFXOXVYU0JUY0dWamFXWnBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJR1JsWm1sdVpYTWdkR2hsSUhOdmNuUWdiM0prWlhJdVhHNWNkQ0FxSUVsbUlHOXRhWFIwWldRc0lIUm9aU0JqYjJ4c1pXTjBhVzl1SUdseklITnZjblJsWkNCaFkyTnZjbVJwYm1jZ2RHOGdaV0ZqYUNCamFHRnlZV04wWlhJbmN5QlZibWxqYjJSbElHTnZaR1VnY0c5cGJuUWdkbUZzZFdVc1hHNWNkQ0FxSUdGalkyOXlaR2x1WnlCMGJ5QjBhR1VnYzNSeWFXNW5JR052Ym5abGNuTnBiMjRnYjJZZ1pXRmphQ0JsYkdWdFpXNTBMbHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdRMjlzYkdWamRHbHZibjFjYmx4MElDb2dRR1Y0WVcxd2JHVWdZMjlzYkdWamRHbHZiaTV6YjNKMEtDaDFjMlZ5UVN3Z2RYTmxja0lwSUQwK0lIVnpaWEpCTG1OeVpXRjBaV1JVYVcxbGMzUmhiWEFnTFNCMWMyVnlRaTVqY21WaGRHVmtWR2x0WlhOMFlXMXdLVHRjYmx4MElDb3ZYRzVjZEhCMVlteHBZeUJ6YjNKMEtHTnZiWEJoY21WR2RXNWpkR2x2YmpvZ0tHWnBjbk4wVm1Gc2RXVTZJRllzSUhObFkyOXVaRlpoYkhWbE9pQldMQ0JtYVhKemRFdGxlVG9nU3l3Z2MyVmpiMjVrUzJWNU9pQkxLU0E5UGlCdWRXMWlaWElnUFNBb2VDd2dlU2s2SUc1MWJXSmxjaUE5UGlCT2RXMWlaWElvZUNBK0lIa3BJSHg4SUU1MWJXSmxjaWg0SUQwOVBTQjVLU0F0SURFcE9pQjBhR2x6SUh0Y2JseDBYSFJqYjI1emRDQmxiblJ5YVdWeklEMGdXeTR1TG5Sb2FYTXVaVzUwY21sbGN5Z3BYVHRjYmx4MFhIUmxiblJ5YVdWekxuTnZjblFvS0dFc0lHSXBPaUJ1ZFcxaVpYSWdQVDRnWTI5dGNHRnlaVVoxYm1OMGFXOXVLR0ZiTVYwc0lHSmJNVjBzSUdGYk1GMHNJR0piTUYwcEtUdGNibHh1WEhSY2RDOHZJRkJsY21admNtMGdZMnhsWVc0dGRYQmNibHgwWEhSemRYQmxjaTVqYkdWaGNpZ3BPMXh1WEhSY2RIUm9hWE11WDJGeWNtRjVJRDBnYm5Wc2JEdGNibHgwWEhSMGFHbHpMbDlyWlhsQmNuSmhlU0E5SUc1MWJHdzdYRzVjYmx4MFhIUXZMeUJUWlhRZ2RHaGxJRzVsZHlCbGJuUnlhV1Z6WEc1Y2RGeDBabTl5SUNoamIyNXpkQ0JiYXl3Z2RsMGdiMllnWlc1MGNtbGxjeWtnZTF4dVhIUmNkRngwYzNWd1pYSXVjMlYwS0dzc0lIWXBPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnZEdocGN6dGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJVYUdVZ2FXNTBaWEp6WldOMElHMWxkR2h2WkNCeVpYUjFjbTV6SUdFZ2JtVjNJSE4wY25WamRIVnlaU0JqYjI1MFlXbHVhVzVuSUdsMFpXMXpJSGRvWlhKbElIUm9aU0JyWlhseklHRnlaU0J3Y21WelpXNTBJR2x1SUdKdmRHZ2diM0pwWjJsdVlXd2djM1J5ZFdOMGRYSmxjeTVjYmx4MElDb2dRSEJoY21GdElIdERiMnhzWldOMGFXOXVmU0J2ZEdobGNpQlVhR1VnYjNSb1pYSWdRMjlzYkdWamRHbHZiaUIwYnlCbWFXeDBaWElnWVdkaGFXNXpkRnh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdRMjlzYkdWamRHbHZibjFjYmx4MElDb3ZYRzVjZEhCMVlteHBZeUJwYm5SbGNuTmxZM1FvYjNSb1pYSTZJRU52Ykd4bFkzUnBiMjQ4U3l3Z1ZqNHBPaUJEYjJ4c1pXTjBhVzl1UEVzc0lGWStJSHRjYmx4MFhIUnlaWFIxY200Z2IzUm9aWEl1Wm1sc2RHVnlLQ2hmTENCcktTQTlQaUIwYUdsekxtaGhjeWhyS1NrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dWR2hsSUdScFptWmxjbVZ1WTJVZ2JXVjBhRzlrSUhKbGRIVnlibk1nWVNCdVpYY2djM1J5ZFdOMGRYSmxJR052Ym5SaGFXNXBibWNnYVhSbGJYTWdkMmhsY21VZ2RHaGxJR3RsZVNCcGN5QndjbVZ6Wlc1MElHbHVJRzl1WlNCdlppQjBhR1VnYjNKcFoybHVZV3dnYzNSeWRXTjBkWEpsY3lCaWRYUWdibTkwSUhSb1pTQnZkR2hsY2k1Y2JseDBJQ29nUUhCaGNtRnRJSHREYjJ4c1pXTjBhVzl1ZlNCdmRHaGxjaUJVYUdVZ2IzUm9aWElnUTI5c2JHVmpkR2x2YmlCMGJ5Qm1hV3gwWlhJZ1lXZGhhVzV6ZEZ4dVhIUWdLaUJBY21WMGRYSnVjeUI3UTI5c2JHVmpkR2x2Ym4xY2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCa2FXWm1aWEpsYm1ObEtHOTBhR1Z5T2lCRGIyeHNaV04wYVc5dVBFc3NJRlkrS1RvZ1EyOXNiR1ZqZEdsdmJqeExMQ0JXUGlCN1hHNWNkRngwY21WMGRYSnVJRzkwYUdWeUxtWnBiSFJsY2lnb1h5d2dheWtnUFQ0Z0lYUm9hWE11YUdGektHc3BLUzVqYjI1allYUW9kR2hwY3k1bWFXeDBaWElvS0Y4c0lHc3BJRDArSUNGdmRHaGxjaTVvWVhNb2F5a3BLVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCVWFHVWdjMjl5ZEdWa0lHMWxkR2h2WkNCemIzSjBjeUIwYUdVZ2FYUmxiWE1nYjJZZ1lTQmpiMnhzWldOMGFXOXVJR0Z1WkNCeVpYUjFjbTV6SUdsMExseHVYSFFnS2lCVWFHVWdjMjl5ZENCcGN5QnViM1FnYm1WalpYTnpZWEpwYkhrZ2MzUmhZbXhsTGlCVWFHVWdaR1ZtWVhWc2RDQnpiM0owSUc5eVpHVnlJR2x6SUdGalkyOXlaR2x1WnlCMGJ5QnpkSEpwYm1jZ1ZXNXBZMjlrWlNCamIyUmxJSEJ2YVc1MGN5NWNibHgwSUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1cyTnZiWEJoY21WR2RXNWpkR2x2YmwwZ1UzQmxZMmxtYVdWeklHRWdablZ1WTNScGIyNGdkR2hoZENCa1pXWnBibVZ6SUhSb1pTQnpiM0owSUc5eVpHVnlMbHh1WEhRZ0tpQkpaaUJ2YldsMGRHVmtMQ0IwYUdVZ1kyOXNiR1ZqZEdsdmJpQnBjeUJ6YjNKMFpXUWdZV05qYjNKa2FXNW5JSFJ2SUdWaFkyZ2dZMmhoY21GamRHVnlKM01nVlc1cFkyOWtaU0JqYjJSbElIQnZhVzUwSUhaaGJIVmxMRnh1WEhRZ0tpQmhZMk52Y21ScGJtY2dkRzhnZEdobElITjBjbWx1WnlCamIyNTJaWEp6YVc5dUlHOW1JR1ZoWTJnZ1pXeGxiV1Z1ZEM1Y2JseDBJQ29nUUhKbGRIVnlibk1nZTBOdmJHeGxZM1JwYjI1OVhHNWNkQ0FxSUVCbGVHRnRjR3hsSUdOdmJHeGxZM1JwYjI0dWMyOXlkR1ZrS0NoMWMyVnlRU3dnZFhObGNrSXBJRDArSUhWelpYSkJMbU55WldGMFpXUlVhVzFsYzNSaGJYQWdMU0IxYzJWeVFpNWpjbVZoZEdWa1ZHbHRaWE4wWVcxd0tUdGNibHgwSUNvdlhHNWNkSEIxWW14cFl5QnpiM0owWldRb1kyOXRjR0Z5WlVaMWJtTjBhVzl1T2lBb1ptbHljM1JXWVd4MVpUb2dWaXdnYzJWamIyNWtWbUZzZFdVNklGWXNJR1pwY25OMFMyVjVPaUJMTENCelpXTnZibVJMWlhrNklFc3BJRDArSUc1MWJXSmxjaUE5SUNoNExDQjVLVG9nYm5WdFltVnlJRDArSUU1MWJXSmxjaWg0SUQ0Z2VTa2dmSHdnVG5WdFltVnlLSGdnUFQwOUlIa3BJQzBnTVNrNklIUm9hWE1nZTF4dVhIUmNkSEpsZEhWeWJpQW9ibVYzSUhSb2FYTXVZMjl1YzNSeWRXTjBiM0piVTNsdFltOXNMbk53WldOcFpYTmRLRnN1TGk1MGFHbHpMbVZ1ZEhKcFpYTW9LVjBwSUdGeklIUm9hWE1wWEc1Y2RGeDBYSFF1YzI5eWRDZ29ZWFlzSUdKMkxDQmhheXdnWW1zcElEMCtJR052YlhCaGNtVkdkVzVqZEdsdmJpaGhkaXdnWW5Zc0lHRnJMQ0JpYXlrcE8xeHVYSFI5WEc1OVhHNWNibVY0Y0c5eWRDQjdJRU52Ykd4bFkzUnBiMjRnZlR0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVOdmJHeGxZM1JwYjI0N1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFTnZiR3hsWTNScGIyNDdYRzRpWFgwPSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcclxuY29uc3QgRGlzY29yZEpTRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi91dGlsL0Rpc2NvcmRKU0Vycm9yXCIpO1xyXG5jb25zdCBjb2xsZWN0aW9uXzEgPSByZXF1aXJlKFwiQGRpc2NvcmRqcy9jb2xsZWN0aW9uXCIpO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi4vdXRpbC91dGlsXCIpO1xyXG5jb25zdCBDbGllbnRVc2VyXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9DbGllbnRVc2VyXCIpO1xyXG5sZXQgaGFzSW5pdCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBzZXR1cEV2ZW50cyhjbGllbnQpIHtcclxuICAgIGxldCBkaXNwYXRjaGVyID0gRGlzY29yZFRvTW9kdWxlc18xLkRpc3BhdGNoZXJNb2R1bGU7XHJcbiAgICBkaXNwYXRjaGVyLnN1YnNjcmliZShcIkNPTk5FQ1RJT05fT1BFTlwiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xpZW50LmVtaXQoXCJzZWxmLnJlYWR5XCIpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaGVyLnN1YnNjcmliZShcIk1FU1NBR0VfQ1JFQVRFXCIsIGFjdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5vcHRpbWlzdGljKVxyXG4gICAgICAgICAgICByZXR1cm47IC8vIGRpc2FibGUgbm90IHNlbnQgbWVzc2FnZXNcclxuICAgICAgICBhY3Rpb24ubWVzc2FnZSAmJiBjbGllbnQuZW1pdChcInNlbGYubWVzc2FnZUNyZWF0ZVwiLCBhY3Rpb24ubWVzc2FnZSk7XHJcbiAgICB9KTtcclxufVxyXG5jbGFzcyBDbGllbnQgZXh0ZW5kcyBldmVudHNfMS5FdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG4gICAgICAgIGlmIChoYXNJbml0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRGlzY29yZEpTRXJyb3JfMS5kZWZhdWx0KFwiQ2Fubm90IGluaXRpYWxpemVkIG1vcmUgdGhhbiBvbmUgY2xpZW50LlwiKTtcclxuICAgICAgICBoYXNJbml0ID0gdHJ1ZTtcclxuICAgICAgICBzZXR1cEV2ZW50cyh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uKFwic2VsZi5yZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgQ2xpZW50VXNlcl8xLmRlZmF1bHQoRGlzY29yZFRvTW9kdWxlc18xLlVzZXJNb2R1bGUuZ2V0Q3VycmVudFVzZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRGlzY29yZFRvTW9kdWxlc18xLlVzZXJNb2R1bGUuZ2V0Q3VycmVudFVzZXIsIERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyTW9kdWxlLCB0eXBlb2YgRGlzY29yZFRvTW9kdWxlc18xLlVzZXJNb2R1bGUuZ2V0Q3VycmVudFVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInJlYWR5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub24oXCJzZWxmLm1lc3NhZ2VDcmVhdGVcIiwgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZUNyZWF0ZVwiLCB1dGlsXzEuY3JlYXRlTWVzc2FnZShtZXNzYWdlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYnJvYWRjYXN0cygpIHtcclxuICAgICAgICByZXR1cm4gW107IC8vIG5vdCBnaXZpbmcgYW55IHNpbmNlIHRoZXkncmUgbm90IHN1cHBvcnRlZC5cclxuICAgIH1cclxuICAgIGdldCBicm93c2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBzaW5jZSB3ZSdyZSBpbiBlbGVjdHJvbiwgd2UncmUgYWx3YXlzIGluIGJyb3dzZXJcclxuICAgIH1cclxuICAgIGdldCBjaGFubmVscygpIHtcclxuICAgICAgICBjb25zdCBjaGFubmVscyA9IE9iamVjdC52YWx1ZXMoRGlzY29yZFRvTW9kdWxlc18xLmNoYW5uZWxzTW9kdWxlLmdldEFsbENoYW5uZWxzKCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sbGVjdGlvbl8xLmRlZmF1bHQoY2hhbm5lbHMubWFwKGUgPT4gKFtlLmlkLCB1dGlsXzEuY3JlYXRlQ2hhbm5lbChlKV0pKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgZW1vamlzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sbGVjdGlvbl8xLmRlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGdldCBndWlsZHMoKSB7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbHMgPSBPYmplY3QudmFsdWVzKERpc2NvcmRUb01vZHVsZXNfMS5ndWlsZE1vZHVsZS5nZXRBbGxHdWlsZHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb2xsZWN0aW9uXzEuZGVmYXVsdChjaGFubmVscy5tYXAoZSA9PiAoW2UuaWQsIHV0aWxfMS5jcmVhdGVHdWlsZChlKV0pKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdXNlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBPYmplY3QudmFsdWVzKERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyTW9kdWxlLmdldFVzZXJzKCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sbGVjdGlvbl8xLmRlZmF1bHQodXNlcnMubWFwKGUgPT4gW2UuaWQsIHV0aWxfMS5jcmVhdGVVc2VyKGUpXSkpO1xyXG4gICAgfVxyXG4gICAgLyoqIFdhcm5pbmdzIGFuZCBvdmVycmlkZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IGFyZSBub3QgY29tcGF0aWJsZS4gKi9cclxuICAgIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBEaXNjb3JkSlNFcnJvcl8xLmRlZmF1bHQoXCJDbGllbnQjbG9naW4gaXMgbm90IHN1cHBvcnRlZC4gRGlzY29yZEpTIG9uIGxpZ2h0Y29yZCB3aWxsIHVzZSB0aGUgY29ubmVjdGVkIGFjY291bnQuXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRva2VuKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBEaXNjb3JkSlNFcnJvcl8xLmRlZmF1bHQoXCJDbGllbnQjdG9rZW4gaXMgbm90IHN1cHBvcnRlZC4gRGlzY29yZEpTIG9uIGxpZ2h0Y29yZCB3aWxsIHVzZSB0aGUgY29ubmVjdGVkIGFjY291bnQuXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENsaWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY2xpZW50XzEgPSByZXF1aXJlKFwiLi9jbGllbnQvY2xpZW50XCIpO1xyXG5jb25zdCBjbGllbnQgPSBuZXcgY2xpZW50XzEuZGVmYXVsdCgpO1xyXG5jb25zdCBEaXNjb3JkSlNFeHBvcnJ0cyA9IHtcclxuICAgIENsaWVudDogY2xpZW50XzEuZGVmYXVsdCxcclxuICAgIGNsaWVudFxyXG59O1xyXG53aW5kb3cuRGlzY29yZEpTID0gRGlzY29yZEpTRXhwb3JydHM7XHJcbndpbmRvdy5EaXNjb3JkSlNDbGllbnQgPSBjbGllbnQ7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERpc2NvcmRKU0V4cG9ycnRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5jb25zdCBCYXNlU3RydWN0dXJlXzEgPSByZXF1aXJlKFwiLi9CYXNlU3RydWN0dXJlXCIpO1xyXG5jb25zdCBTbm93Zmxha2VfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1Nub3dmbGFrZVwiKTtcclxuY2xhc3MgQmFzZUNoYW5uZWwgZXh0ZW5kcyBCYXNlU3RydWN0dXJlXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjaGFubmVsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlkID0gY2hhbm5lbC5pZDtcclxuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkRpc2NvcmRDaGFubmVsID0gY2hhbm5lbDtcclxuICAgIH1cclxuICAgIGdldCBjcmVhdGVkQXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuY3JlYXRlZFRpbWVzdGFtcCk7XHJcbiAgICB9XHJcbiAgICBnZXQgY3JlYXRlZFRpbWVzdGFtcCgpIHtcclxuICAgICAgICByZXR1cm4gU25vd2ZsYWtlXzEuZGVmYXVsdC5kZWNvbnN0cnVjdCh0aGlzLmlkKS50aW1lc3RhbXA7XHJcbiAgICB9XHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIERpc2NvcmRUb01vZHVsZXNfMS5jaGFubmVsc01vZHVsZS5kZWxldGUodGhpcy5pZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZUNoYW5uZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEJhc2VTdHJ1Y3R1cmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIGdldCBjbGllbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5EaXNjb3JkSlNDbGllbnQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZVN0cnVjdHVyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgVXNlcl8xID0gcmVxdWlyZShcIi4vVXNlclwiKTtcclxuY2xhc3MgQ2xpZW50VXNlciBleHRlbmRzIFVzZXJfMS5kZWZhdWx0IHtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDbGllbnRVc2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5jb25zdCBCYXNlU3RydWN0dXJlXzEgPSByZXF1aXJlKFwiLi9CYXNlU3RydWN0dXJlXCIpO1xyXG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi4vdXRpbC91dGlsXCIpO1xyXG5jb25zdCBjb2xsZWN0aW9uXzEgPSByZXF1aXJlKFwiQGRpc2NvcmRqcy9jb2xsZWN0aW9uXCIpO1xyXG5jb25zdCBTbm93Zmxha2VfMSA9IHJlcXVpcmUoXCIuLi91dGlsL1Nub3dmbGFrZVwiKTtcclxuY29uc3QgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9Db25zdGFudHNcIik7XHJcbmNvbnN0IERpc2NvcmRKU0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9EaXNjb3JkSlNFcnJvclwiKTtcclxuY2xhc3MgR3VpbGQgZXh0ZW5kcyBCYXNlU3RydWN0dXJlXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkRpc2NvcmRHdWlsZCA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLmlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFma0NoYW5uZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFma0NoYW5uZWxJRClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5jcmVhdGVDaGFubmVsKERpc2NvcmRUb01vZHVsZXNfMS5jaGFubmVsc01vZHVsZS5nZXRDaGFubmVsKHRoaXMuYWZrQ2hhbm5lbElEKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYWZrQ2hhbm5lbElEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5hZmtDaGFubmVsSWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYWZrVGltZW91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuYWZrVGltZW91dDtcclxuICAgIH1cclxuICAgIGdldCBhcHBsaWNhdGlvbklEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5hcHBsaWNhdGlvbl9pZDtcclxuICAgIH1cclxuICAgIGdldCBhdmFpbGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBnZXQgY2hhbm5lbHMoKSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQuY2hhbm5lbHMuZmlsdGVyKGNoYW5uZWwgPT4gY2hhbm5lbC5ndWlsZF9pZCA9PT0gdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGNyZWF0ZWRBdCgpIHtcclxuICAgICAgICByZXR1cm4gU25vd2ZsYWtlXzEuZGVmYXVsdC5kZWNvbnN0cnVjdCh0aGlzLmlkKS5kYXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNyZWF0ZWRUaW1lc3RhbXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlZEF0LmdldFRpbWUoKTtcclxuICAgIH1cclxuICAgIGdldCBkZWZhdWx0Q2hhbm5lbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5nZXQodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5kZWZhdWx0TWVzc2FnZU5vdGlmaWNhdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQgZW1iZWRFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVtb2ppcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQuZW1vamlzLmZpbHRlcihlID0+IGUuZ3VpbGRfaWQgPT09IHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4cGxpY2l0Q29udGVudEZpbHRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuZXhwbGljaXRDb250ZW50RmlsdGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZlYXR1cmVzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuRGlzY29yZEd1aWxkLmZlYXR1cmVzKTtcclxuICAgIH1cclxuICAgIGdldCBpY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5pY29uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGljb25VUkwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLmdldEljb25VUkwoKS5yZXBsYWNlKFwiLndlYnBcIiwgXCIuanBnXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGpvaW5lZEF0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLkRpc2NvcmRHdWlsZC5qb2luZWRBdCk7XHJcbiAgICB9XHJcbiAgICBnZXQgam9pbmVkVGltZXN0YW1wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5qb2luZWRBdC5nZXRUaW1lKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgbGFyZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMuZmluZChtZW1iZXIgPT4gbWVtYmVyLmlkID09PSB0aGlzLmNsaWVudC51c2VyLmlkKTtcclxuICAgIH1cclxuICAgIGdldCBtZW1iZXJDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldE1lbWJlckNvdW50KHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1lbWJlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb2xsZWN0aW9uXzEuZGVmYXVsdChEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuZ2V0TWVtYmVycyh0aGlzLmlkKS5tYXAobWVtYmVyID0+IFttZW1iZXIudXNlcklkLCB1dGlsXzEuY3JlYXRlR3VpbGRNZW1iZXIobWVtYmVyKV0pKTtcclxuICAgIH1cclxuICAgIGdldCBtZXNzYWdlTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gQ29uc3RhbnRzXzEuTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldE1lc3NhZ2VOb3RpZmljYXRpb25zKHRoaXMuaWQpXTtcclxuICAgIH1cclxuICAgIGdldCBtZmFMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQubWZhTGV2ZWw7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9iaWxlUHVzaCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldE5vdGlmaWNhdGlvbnNTdGF0ZSgpLnVzZXJHdWlsZFNldHRpbmdzW3RoaXMuaWRdLm1vYmlsZV9wdXNoO1xyXG4gICAgfVxyXG4gICAgZ2V0IG11dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuZ2V0Tm90aWZpY2F0aW9uc1N0YXRlKCkudXNlckd1aWxkU2V0dGluZ3NbdGhpcy5pZF0ubXV0ZWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQubmFtZTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lQWNyb255bSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuYWNyb255bTtcclxuICAgIH1cclxuICAgIGdldCBvd25lcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLmdldCh0aGlzLm93bmVySUQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG93bmVySUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLm93bmVySWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICAgICAgbGV0IGd1aWxkUG9zaXRpb25zID0gRGlzY29yZFRvTW9kdWxlc18xLlVzZXJTZXR0aW5nc01vZHVsZS5nZXRBbGxTZXR0aW5ncygpLmd1aWxkUG9zaXRpb25zO1xyXG4gICAgICAgIGlmICghZ3VpbGRQb3NpdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBndWlsZFBvc2l0aW9ucy5pbmRleE9mKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHByZXNlbmNlcygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbGxlY3Rpb25fMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVnaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5yZWdpb247XHJcbiAgICB9XHJcbiAgICBnZXQgcm9sZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb2xsZWN0aW9uXzEuZGVmYXVsdChPYmplY3QudmFsdWVzKHRoaXMuRGlzY29yZEd1aWxkLnJvbGVzKS5tYXAocm9sZSA9PiBbcm9sZS5pZCwgdXRpbF8xLmNyZWF0ZVJvbGUocm9sZSldKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3BsYXNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5zcGxhc2g7XHJcbiAgICB9XHJcbiAgICBnZXQgc3BsYXNoVVJMKCkge1xyXG4gICAgICAgIHJldHVybiBEaXNjb3JkVG9Nb2R1bGVzXzEuQ2RuTW9kdWxlLmdldEd1aWxkU3BsYXNoVVJMKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHNwbGFzaDogdGhpcy5zcGxhc2gsXHJcbiAgICAgICAgICAgIHNpemU6IERpc2NvcmRUb01vZHVsZXNfMS5Db25zdGFudHNNb2R1bGUuU1BMQVNIX1NJWkVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBzdXBwcmVzc0V2ZXJ5b25lKCkge1xyXG4gICAgICAgIHJldHVybiBEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuZ2V0Tm90aWZpY2F0aW9uc1N0YXRlKCkudXNlckd1aWxkU2V0dGluZ3NbdGhpcy5pZF0uc3VwcHJlc3NfZXZlcnlvbmU7XHJcbiAgICB9XHJcbiAgICBnZXQgc3lzdGVtQ2hhbm5lbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQuY2hhbm5lbHMuZ2V0KHRoaXMuc3lzdGVtQ2hhbm5lbElEKTtcclxuICAgIH1cclxuICAgIGdldCBzeXN0ZW1DaGFubmVsSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLnN5c3RlbUNoYW5uZWxJZDtcclxuICAgIH1cclxuICAgIGdldCB2ZXJpZmljYXRpb25MZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQudmVyaWZpY2F0aW9uTGV2ZWw7XHJcbiAgICB9XHJcbiAgICBnZXQgdmVyaWZpZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuaW5jbHVkZXMoXCJWRVJJRklFRFwiKTtcclxuICAgIH1cclxuICAgIGdldCB2b2ljZUNvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgYmFubmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5iYW5uZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgYmFubmVyVVJMKCkge1xyXG4gICAgICAgIHJldHVybiBEaXNjb3JkVG9Nb2R1bGVzXzEuQ2RuTW9kdWxlLmdldEd1aWxkQmFubmVyVVJMKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGJhbm5lcjogdGhpcy5iYW5uZXJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgZW1iZWRDaGFubmVsKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVtYmVkQ2hhbm5lbElEKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1heGltdW1NZW1iZXJzKCkge1xyXG4gICAgICAgIHJldHVybiAyNTAwMDA7XHJcbiAgICB9XHJcbiAgICBnZXQgbWF4aW11bVByZXNlbmNlcygpIHtcclxuICAgICAgICByZXR1cm4gNTAwMDtcclxuICAgIH1cclxuICAgIGdldCB3aWRnZXRFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCB3aWRnZXRDaGFubmVsSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkZ2V0Q2hhbm5lbCgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCB2YW5pdHlVUkxDb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC52YW5pdHlVUkxDb2RlO1xyXG4gICAgfVxyXG4gICAgLyoqIEZVTkNUSU9OUyAqL1xyXG4gICAgYXN5bmMgYWNrbm93bGVkZ2UoKSB7XHJcbiAgICAgICAgRGlzY29yZFRvTW9kdWxlc18xLkFja01vZHVsZS5idWxrQWNrKHRoaXMuY2hhbm5lbHMuZmlsdGVyKGUgPT4gZS50eXBlID09PSBcInRleHRcIikubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbElkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBEaXNjb3JkVG9Nb2R1bGVzXzEuY2hhbm5lbHNNb2R1bGUubGFzdE1lc3NhZ2VJZChlLmlkKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGFkZE1lbWJlciguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBEaXNjb3JkSlNFcnJvcl8xLmRlZmF1bHQoXCJUaGlzIG1ldGhvZCBpcyBub3QgYXZhaWxhYmxlIG9uIExpZ2h0Y29yZC5cIikpO1xyXG4gICAgfVxyXG4gICAgYWxsb3dETXMoYWxsb3cpIHtcclxuICAgICAgICBsZXQgcmVzdHJpY3RlZCA9IERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyU2V0dGluZ3NNb2R1bGUuZ2V0QWxsU2V0dGluZ3MoKS5yZXN0cmljdGVkR3VpbGRzO1xyXG4gICAgICAgIGlmIChhbGxvdykge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3RyaWN0ZWQuaW5jbHVkZXModGhpcy5pZCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICByZXN0cmljdGVkID0gcmVzdHJpY3RlZC5maWx0ZXIoZSA9PiBlICE9PSB0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN0cmljdGVkLmluY2x1ZGVzKHRoaXMuaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICAgICAgcmVzdHJpY3RlZC5wdXNoKHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLlVzZXJTZXR0aW5nc01vZHVsZS51cGRhdGVSZW1vdGVTZXR0aW5ncyh7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0ZWRHdWlsZHM6IHJlc3RyaWN0ZWRcclxuICAgICAgICB9KS50aGVuKCgpID0+IHRoaXMpO1xyXG4gICAgfVxyXG4gICAgYmFuKHVzZXIsIHsgZGF5cyA9IDAsIHJlYXNvbiA9IG51bGwgfSkge1xyXG4gICAgICAgIGxldCBpZCA9IHV0aWxfMS5yZXNvbHZlVXNlcklEKHVzZXIpO1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRGlzY29yZEpTRXJyb3JfMS5kZWZhdWx0KFwiR2l2ZW4gdXNlciBjb3VsZCBub3QgYmUgcmVzb2x2ZWQgdG8gYW4gdXNlciBJRC5cIikpO1xyXG4gICAgfVxyXG4gICAgZmV0Y2goKSB7XHJcbiAgICAgICAgbGV0IGd1aWxkID0gRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldEd1aWxkKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmICghZ3VpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5EaXNjb3JkR3VpbGQgPSBndWlsZDtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEd1aWxkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBCYXNlQ2hhbm5lbF8xID0gcmVxdWlyZShcIi4vQmFzZUNoYW5uZWxcIik7XHJcbmNvbnN0IERpc2NvcmRUb01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmNvbnN0IHV0aWxfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3V0aWxcIik7XHJcbmNsYXNzIEd1aWxkQ2hhbm5lbCBleHRlbmRzIEJhc2VDaGFubmVsXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjaGFubmVsKSB7XHJcbiAgICAgICAgc3VwZXIoY2hhbm5lbCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZ3VpbGQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxfMS5jcmVhdGVHdWlsZChEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuZ2V0R3VpbGQodGhpcy5EaXNjb3JkQ2hhbm5lbC5ndWlsZF9pZCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGd1aWxkX2lkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRDaGFubmVsLmd1aWxkX2lkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEd1aWxkQ2hhbm5lbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQmFzZVN0cnVjdHVyZV8xID0gcmVxdWlyZShcIi4vQmFzZVN0cnVjdHVyZVwiKTtcclxuY2xhc3MgR3VpbGRNZW1iZXIgZXh0ZW5kcyBCYXNlU3RydWN0dXJlXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLkRpc2NvcmRHdWlsZE1lbWJlciA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkTWVtYmVyLnVzZXJJZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBHdWlsZE1lbWJlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQmFzZVN0cnVjdHVyZV8xID0gcmVxdWlyZShcIi4vQmFzZVN0cnVjdHVyZVwiKTtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZFRvTW9kdWxlc1wiKTtcclxuY29uc3QgVXNlcl8xID0gcmVxdWlyZShcIi4vVXNlclwiKTtcclxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIEJhc2VTdHJ1Y3R1cmVfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuRGlzY29yZE1lc3NhZ2UgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IGF1dGhvcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVzZXJfMS5kZWZhdWx0KERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyTW9kdWxlLmdldFVzZXIodGhpcy5EaXNjb3JkTWVzc2FnZS5hdXRob3IuaWQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBNZXNzYWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBCYXNlU3RydWN0dXJlXzEgPSByZXF1aXJlKFwiLi9CYXNlU3RydWN0dXJlXCIpO1xyXG5jbGFzcyBSb2xlIGV4dGVuZHMgQmFzZVN0cnVjdHVyZV8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5EaXNjb3JkUm9sZSA9IGRhdGE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUm9sZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UZXh0Q2hhbm5lbCA9IHZvaWQgMDtcclxuY29uc3QgR3VpbGRDaGFubmVsXzEgPSByZXF1aXJlKFwiLi9HdWlsZENoYW5uZWxcIik7XHJcbmNvbnN0IENvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL3V0aWwvQ29uc3RhbnRzXCIpO1xyXG5jbGFzcyBUZXh0Q2hhbm5lbCBleHRlbmRzIEd1aWxkQ2hhbm5lbF8xLmRlZmF1bHQgLyogaW1wbGVtZW50cyBUZXh0QmFzZWRDaGFubmVsKi8ge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnN0YW50c18xLkNoYW5uZWxUeXBlcy5URVhUO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGV4dENoYW5uZWwgPSBUZXh0Q2hhbm5lbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQmFzZVN0cnVjdHVyZV8xID0gcmVxdWlyZShcIi4vQmFzZVN0cnVjdHVyZVwiKTtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZFRvTW9kdWxlc1wiKTtcclxuY2xhc3MgVXNlciBleHRlbmRzIEJhc2VTdHJ1Y3R1cmVfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuRGlzY29yZFVzZXIgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRVc2VyLmlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGF2YXRhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkVXNlci5hdmF0YXI7XHJcbiAgICB9XHJcbiAgICBnZXQgYXZhdGFyVVJMKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRVc2VyLmF2YXRhclVSTDtcclxuICAgIH1cclxuICAgIGdldCBib3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZFVzZXIuYm90O1xyXG4gICAgfVxyXG4gICAgZ2V0IGNyZWF0ZWRBdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5EaXNjb3JkVXNlci5jcmVhdGVkQXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNyZWF0ZWRUaW1lc3RhbXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlZEF0LmdldFRpbWUoKTtcclxuICAgIH1cclxuICAgIGdldCBkZWZhdWx0QXZhdGFyVVJMKCkge1xyXG4gICAgICAgIHJldHVybiBEaXNjb3JkVG9Nb2R1bGVzXzEuQ2RuTW9kdWxlLmdldERlZmF1bHRBdmF0YXJVUkwodGhpcy5kaXNjcmltaW5hdG9yKTtcclxuICAgIH1cclxuICAgIGdldCBkaXNjcmltaW5hdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRVc2VyLmRpc2NyaW1pbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgZGlzcGxheUF2YXRhclVSTCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLkNkbk1vZHVsZS5nZXRVc2VyQXZhdGFyVVJMKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGF2YXRhcjogdGhpcy5hdmF0YXIsXHJcbiAgICAgICAgICAgIGJvdDogdGhpcy5ib3QsXHJcbiAgICAgICAgICAgIGRpc2NyaW1pbmF0b3I6IHRoaXMuZGlzY3JpbWluYXRvclxyXG4gICAgICAgIH0sIFwicG5nXCIsIDQwOTYpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRtQ2hhbm5lbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQuY2hhbm5lbHMuZmluZChlID0+IGUudHlwZSA9PT0gXCJkbVwiICYmIGUucmVjaXBpZW50LmlkID09PSB0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGdldCBsYXN0TWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBsYXN0TWVzc2FnZUlEKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vdGUoKSB7XHJcbiAgICAgICAgbGV0IG5vdGUgPSBEaXNjb3JkVG9Nb2R1bGVzXzEuVXNlck1vZHVsZS5nZXROb3RlKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmICghbm90ZSB8fCAhbm90ZS5ub3RlKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gbm90ZS5ub3RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHByZXNlbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFVzZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQVZBVEFSX1NJWkUgPSBleHBvcnRzLk1lc3NhZ2VOb3RpZmljYXRpb25UeXBlID0gZXhwb3J0cy5DaGFubmVsVHlwZXMgPSB2b2lkIDA7XHJcbnZhciBDaGFubmVsVHlwZXM7XHJcbihmdW5jdGlvbiAoQ2hhbm5lbFR5cGVzKSB7XHJcbiAgICBDaGFubmVsVHlwZXNbXCJURVhUXCJdID0gXCJ0ZXh0XCI7XHJcbiAgICBDaGFubmVsVHlwZXNbXCJETVwiXSA9IFwiZG1cIjtcclxuICAgIENoYW5uZWxUeXBlc1tcIlZPSUNFXCJdID0gXCJ2b2ljZVwiO1xyXG4gICAgQ2hhbm5lbFR5cGVzW1wiR1JPVVBfRE1cIl0gPSBcImdyb3VwXCI7XHJcbiAgICBDaGFubmVsVHlwZXNbXCJDQVRFR09SWVwiXSA9IFwiY2F0ZWdvcnlcIjtcclxuICAgIENoYW5uZWxUeXBlc1tcIk5FV1NcIl0gPSBcIm5ld3NcIjtcclxuICAgIENoYW5uZWxUeXBlc1tcIlNUT1JFXCJdID0gXCJzdG9yZVwiO1xyXG59KShDaGFubmVsVHlwZXMgPSBleHBvcnRzLkNoYW5uZWxUeXBlcyB8fCAoZXhwb3J0cy5DaGFubmVsVHlwZXMgPSB7fSkpO1xyXG52YXIgTWVzc2FnZU5vdGlmaWNhdGlvblR5cGU7XHJcbihmdW5jdGlvbiAoTWVzc2FnZU5vdGlmaWNhdGlvblR5cGUpIHtcclxuICAgIE1lc3NhZ2VOb3RpZmljYXRpb25UeXBlW01lc3NhZ2VOb3RpZmljYXRpb25UeXBlW1wiRVZFUllUSElOR1wiXSA9IDBdID0gXCJFVkVSWVRISU5HXCI7XHJcbiAgICBNZXNzYWdlTm90aWZpY2F0aW9uVHlwZVtNZXNzYWdlTm90aWZpY2F0aW9uVHlwZVtcIk1FTlRJT05TXCJdID0gMV0gPSBcIk1FTlRJT05TXCI7XHJcbiAgICBNZXNzYWdlTm90aWZpY2F0aW9uVHlwZVtNZXNzYWdlTm90aWZpY2F0aW9uVHlwZVtcIk5PVEhJTkdcIl0gPSAyXSA9IFwiTk9USElOR1wiO1xyXG4gICAgTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbXCJJTkhFUklUXCJdID0gM10gPSBcIklOSEVSSVRcIjtcclxufSkoTWVzc2FnZU5vdGlmaWNhdGlvblR5cGUgPSBleHBvcnRzLk1lc3NhZ2VOb3RpZmljYXRpb25UeXBlIHx8IChleHBvcnRzLk1lc3NhZ2VOb3RpZmljYXRpb25UeXBlID0ge30pKTtcclxuZXhwb3J0cy5BVkFUQVJfU0laRSA9IDQwOTY7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIERpc2NvcmRKU0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiRGlzY29yZEpTRXJyb3JcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBEaXNjb3JkSlNFcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5EaXNwYXRjaGVyTW9kdWxlID0gZXhwb3J0cy5BY2tNb2R1bGUgPSBleHBvcnRzLkNkbk1vZHVsZSA9IGV4cG9ydHMuVXNlck1vZHVsZSA9IGV4cG9ydHMuQ29uc3RhbnRzTW9kdWxlID0gZXhwb3J0cy5Vc2VyU2V0dGluZ3NNb2R1bGUgPSBleHBvcnRzLmd1aWxkTW9kdWxlID0gZXhwb3J0cy5jaGFubmVsc01vZHVsZSA9IGV4cG9ydHMucmVxdWlyZU1vZHVsZSA9IHZvaWQgMDtcclxuY29uc3QgTGF6eUxvYWRlcl8xID0gcmVxdWlyZShcIi4vTGF6eUxvYWRlclwiKTtcclxuZnVuY3Rpb24gZ2V0TW9kdWxlKG5hbWUpIHtcclxuICAgIHJldHVybiBleHBvcnRzW25hbWUgKyBcIk1vZHVsZVwiXTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRNb2R1bGU7XHJcbmNvbnN0IEJETW9kdWxlcyA9IHdpbmRvdy5CRE1vZHVsZXM7XHJcbmZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUoZmlsdGVyKSB7XHJcbiAgICBsZXQgbW9kdWxlID0gQkRNb2R1bGVzLmdldChmaWx0ZXIpWzBdO1xyXG4gICAgcmV0dXJuIG1vZHVsZSAmJiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbn1cclxuZXhwb3J0cy5yZXF1aXJlTW9kdWxlID0gcmVxdWlyZU1vZHVsZTtcclxuZXhwb3J0cy5jaGFubmVsc01vZHVsZSA9IExhenlMb2FkZXJfMS5sYXp5TG9hZChcImNoYW5uZWxzXCIpO1xyXG5leHBvcnRzLmd1aWxkTW9kdWxlID0gTGF6eUxvYWRlcl8xLmxhenlMb2FkKFwiZ3VpbGRzXCIpO1xyXG5leHBvcnRzLlVzZXJTZXR0aW5nc01vZHVsZSA9IExhenlMb2FkZXJfMS5sYXp5TG9hZChcInVzZXJTZXR0aW5nc1wiKTtcclxuZXhwb3J0cy5Db25zdGFudHNNb2R1bGUgPSBMYXp5TG9hZGVyXzEubGF6eUxvYWQoXCJjb25zdGFudHNcIik7XHJcbmV4cG9ydHMuVXNlck1vZHVsZSA9IExhenlMb2FkZXJfMS5sYXp5TG9hZChcInVzZXJzXCIpO1xyXG5leHBvcnRzLkNkbk1vZHVsZSA9IExhenlMb2FkZXJfMS5sYXp5TG9hZChcImNkblwiKTtcclxuZXhwb3J0cy5BY2tNb2R1bGUgPSBMYXp5TG9hZGVyXzEubGF6eUxvYWQoXCJhY2tub3dsZWRnZVwiKTtcclxuZXhwb3J0cy5EaXNwYXRjaGVyTW9kdWxlID0gTGF6eUxvYWRlcl8xLmxhenlMb2FkKFwiZGlzcGF0Y2hlclwiKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5sYXp5TG9hZCA9IHZvaWQgMDtcclxuY29uc3QgY2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gbGF6eUxvYWQoaWQpIHtcclxuICAgIGlmIChjYWNoZVtpZF0pXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlW2lkXTtcclxuICAgIGxldCBtZGwgPSBudWxsO1xyXG4gICAgbGV0IHNldE1vZHVsZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIW1kbClcclxuICAgICAgICAgICAgbWRsID0gcmVxdWlyZShcIi4vbW9kdWxlcy9cIiArIGlkKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IHtcclxuICAgICAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XHJcbiAgICAgICAgICAgIHNldE1vZHVsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWRsW3Byb3BdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0TW9kdWxlKCk7XHJcbiAgICAgICAgICAgIG1kbFtwcm9wXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJncykge1xyXG4gICAgICAgICAgICBzZXRNb2R1bGUoKTtcclxuICAgICAgICAgICAgbWRsLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uc3RydWN0KHRhcmdldCwgYXJncykge1xyXG4gICAgICAgICAgICBzZXRNb2R1bGUoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShtZGwucHJvdG90eXBlKTtcclxuICAgICAgICAgICAgaGFuZGxlcnMuYXBwbHkodGFyZ2V0LCBwcm90b3R5cGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgcHJveHkgPSBuZXcgUHJveHkoe30sIGhhbmRsZXJzKTtcclxuICAgIHJldHVybiBjYWNoZVtpZF0gPSBwcm94eTtcclxufVxyXG5leHBvcnRzLmxhenlMb2FkID0gbGF6eUxvYWQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4uL3V0aWwvdXRpbFwiKTtcclxuLy8gRGlzY29yZCBlcG9jaCAoMjAxNS0wMS0wMVQwMDowMDowMC4wMDBaKVxyXG5jb25zdCBFUE9DSCA9IDE0MjAwNzA0MDAwMDA7XHJcbmxldCBJTkNSRU1FTlQgPSAwO1xyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIHVzZWZ1bCBzbm93Zmxha2UtcmVsYXRlZCBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU25vd2ZsYWtlVXRpbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gY2xhc3MgbWF5IG5vdCBiZSBpbnN0YW50aWF0ZWQuYCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgVHdpdHRlciBzbm93Zmxha2UsIGV4Y2VwdCB0aGUgZXBvY2ggaXMgMjAxNS0wMS0wMVQwMDowMDowMC4wMDBaXHJcbiAgICAgKiBgYGBcclxuICAgICAqIElmIHdlIGhhdmUgYSBzbm93Zmxha2UgJzI2NjI0MTk0ODgyNDc2NDQxNicgd2UgY2FuIHJlcHJlc2VudCBpdCBhcyBiaW5hcnk6XHJcbiAgICAgKlxyXG4gICAgICogNjQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMiAgICAgMTcgICAgIDEyICAgICAgICAgIDBcclxuICAgICAqICAwMDAwMDAxMTEwMTEwMDAxMTExMDAwMDExMDEwMDEwMDAxMDEwMDAwMDAgIDAwMDAxICAwMDAwMCAgMDAwMDAwMDAwMDAwXHJcbiAgICAgKiAgICAgICBudW1iZXIgb2YgbXMgc2luY2UgRGlzY29yZCBlcG9jaCAgICAgICB3b3JrZXIgIHBpZCAgICBpbmNyZW1lbnRcclxuICAgICAqIGBgYFxyXG4gICAgICogQHR5cGVkZWYge3N0cmluZ30gU25vd2ZsYWtlXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgRGlzY29yZCBzbm93Zmxha2UuXHJcbiAgICAgKiA8aW5mbz5UaGlzIGhhcmRjb2RlcyB0aGUgd29ya2VyIElEIGFzIDEgYW5kIHRoZSBwcm9jZXNzIElEIGFzIDAuPC9pbmZvPlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ8RGF0ZX0gW3RpbWVzdGFtcD1EYXRlLm5vdygpXSBUaW1lc3RhbXAgb3IgZGF0ZSBvZiB0aGUgc25vd2ZsYWtlIHRvIGdlbmVyYXRlXHJcbiAgICAgKiBAcmV0dXJucyB7U25vd2ZsYWtlfSBUaGUgZ2VuZXJhdGVkIHNub3dmbGFrZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUodGltZXN0YW1wID0gRGF0ZS5ub3coKSkge1xyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgaW5zdGFuY2VvZiBEYXRlKVxyXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSB0aW1lc3RhbXAuZ2V0VGltZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGltZXN0YW1wICE9PSAnbnVtYmVyJyB8fCBpc05hTih0aW1lc3RhbXApKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFwidGltZXN0YW1wXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlciAocmVjZWl2ZWQgJHtpc05hTih0aW1lc3RhbXApID8gJ05hTicgOiB0eXBlb2YgdGltZXN0YW1wfSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElOQ1JFTUVOVCA+PSA0MDk1KVxyXG4gICAgICAgICAgICBJTkNSRU1FTlQgPSAwO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgICAgY29uc3QgQklOQVJZID0gYCR7KHRpbWVzdGFtcCAtIEVQT0NIKS50b1N0cmluZygyKS5wYWRTdGFydCg0MiwgJzAnKX0wMDAwMTAwMDAwJHsoSU5DUkVNRU5UKyspXHJcbiAgICAgICAgICAgIC50b1N0cmluZygyKVxyXG4gICAgICAgICAgICAucGFkU3RhcnQoMTIsICcwJyl9YDtcclxuICAgICAgICByZXR1cm4gVXRpbC5iaW5hcnlUb0lEKEJJTkFSWSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgZGVjb25zdHJ1Y3RlZCBzbm93Zmxha2UuXHJcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWNvbnN0cnVjdGVkU25vd2ZsYWtlXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZXN0YW1wIFRpbWVzdGFtcCB0aGUgc25vd2ZsYWtlIHdhcyBjcmVhdGVkXHJcbiAgICAgKiBAcHJvcGVydHkge0RhdGV9IGRhdGUgRGF0ZSB0aGUgc25vd2ZsYWtlIHdhcyBjcmVhdGVkXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gd29ya2VySUQgV29ya2VyIElEIGluIHRoZSBzbm93Zmxha2VcclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcm9jZXNzSUQgUHJvY2VzcyBJRCBpbiB0aGUgc25vd2ZsYWtlXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5jcmVtZW50IEluY3JlbWVudCBpbiB0aGUgc25vd2ZsYWtlXHJcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gYmluYXJ5IEJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc25vd2ZsYWtlXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICogRGVjb25zdHJ1Y3RzIGEgRGlzY29yZCBzbm93Zmxha2UuXHJcbiAgICAgKiBAcGFyYW0ge1Nub3dmbGFrZX0gc25vd2ZsYWtlIFNub3dmbGFrZSB0byBkZWNvbnN0cnVjdFxyXG4gICAgICogQHJldHVybnMge0RlY29uc3RydWN0ZWRTbm93Zmxha2V9IERlY29uc3RydWN0ZWQgc25vd2ZsYWtlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvbnN0cnVjdChzbm93Zmxha2UpIHtcclxuICAgICAgICBjb25zdCBCSU5BUlkgPSBVdGlsLmlkVG9CaW5hcnkoc25vd2ZsYWtlKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAucGFkU3RhcnQoNjQsICcwJyk7XHJcbiAgICAgICAgY29uc3QgcmVzID0ge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHBhcnNlSW50KEJJTkFSWS5zdWJzdHJpbmcoMCwgNDIpLCAyKSArIEVQT0NILFxyXG4gICAgICAgICAgICB3b3JrZXJJRDogcGFyc2VJbnQoQklOQVJZLnN1YnN0cmluZyg0MiwgNDcpLCAyKSxcclxuICAgICAgICAgICAgcHJvY2Vzc0lEOiBwYXJzZUludChCSU5BUlkuc3Vic3RyaW5nKDQ3LCA1MiksIDIpLFxyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6IHBhcnNlSW50KEJJTkFSWS5zdWJzdHJpbmcoNTIsIDY0KSwgMiksXHJcbiAgICAgICAgICAgIGJpbmFyeTogQklOQVJZLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywgJ2RhdGUnLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudGltZXN0YW1wKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNub3dmbGFrZVV0aWw7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hY2tub3dsZWRnZVwiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9hY2tub3dsZWRnZS50c1wiLFxuXHRcIi4vYWNrbm93bGVkZ2UudHNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvYWNrbm93bGVkZ2UudHNcIixcblx0XCIuL2NkblwiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9jZG4udHNcIixcblx0XCIuL2Nkbi50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9jZG4udHNcIixcblx0XCIuL2NoYW5uZWxzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL2NoYW5uZWxzLnRzXCIsXG5cdFwiLi9jaGFubmVscy50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9jaGFubmVscy50c1wiLFxuXHRcIi4vY29uc3RhbnRzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL2NvbnN0YW50cy50c1wiLFxuXHRcIi4vY29uc3RhbnRzLnRzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL2NvbnN0YW50cy50c1wiLFxuXHRcIi4vZGlzcGF0Y2hlclwiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9kaXNwYXRjaGVyLnRzXCIsXG5cdFwiLi9kaXNwYXRjaGVyLnRzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL2Rpc3BhdGNoZXIudHNcIixcblx0XCIuL2d1aWxkc1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9ndWlsZHMudHNcIixcblx0XCIuL2d1aWxkcy50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9ndWlsZHMudHNcIixcblx0XCIuL21lc3NhZ2VzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL21lc3NhZ2VzLnRzXCIsXG5cdFwiLi9tZXNzYWdlcy50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9tZXNzYWdlcy50c1wiLFxuXHRcIi4vdXNlclNldHRpbmdzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL3VzZXJTZXR0aW5ncy50c1wiLFxuXHRcIi4vdXNlclNldHRpbmdzLnRzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL3VzZXJTZXR0aW5ncy50c1wiLFxuXHRcIi4vdXNlcnNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvdXNlcnMudHNcIixcblx0XCIuL3VzZXJzLnRzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL3VzZXJzLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3V0aWwvbW9kdWxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vRGlzY29yZFRvTW9kdWxlc1wiKTtcclxubGV0IGFja25vd2xlZGdlTW9kdWxlSW50ZXJuYWwxID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlICYmIGUuYnVsa0Fjayk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgYnVsa0FjazogYWNrbm93bGVkZ2VNb2R1bGVJbnRlcm5hbDEuYnVsa0Fja1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmxldCBjZG5Nb2R1bGVJbnRlcm5hbDEgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0R3VpbGRTcGxhc2hVUkwpO1xyXG5sZXQgY2RuTW9kdWxlSW50ZXJuYWwyID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LkRFRkFVTFRfQVZBVEFSUyk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZ2V0VXNlckF2YXRhclVSTDogY2RuTW9kdWxlSW50ZXJuYWwxLmdldFVzZXJBdmF0YXJVUkwsXHJcbiAgICBnZXRHdWlsZFNwbGFzaFVSTDogY2RuTW9kdWxlSW50ZXJuYWwxLmdldEd1aWxkU3BsYXNoVVJMLFxyXG4gICAgZ2V0R3VpbGRCYW5uZXJVUkw6IGNkbk1vZHVsZUludGVybmFsMS5nZXRHdWlsZEJhbm5lclVSTCxcclxuICAgIGdldERlZmF1bHRBdmF0YXJVUkwoZGlzY3JpbWluYXRvcikge1xyXG4gICAgICAgIGxldCBhc3NldCA9IGNkbk1vZHVsZUludGVybmFsMi5ERUZBVUxUX0FWQVRBUlNbKHR5cGVvZiBkaXNjcmltaW5hdG9yID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoZGlzY3JpbWluYXRvcikgfHwgMCA6IGlzTmFOKGRpc2NyaW1pbmF0b3IpID8gMCA6IGRpc2NyaW1pbmF0b3IpICUgY2RuTW9kdWxlSW50ZXJuYWwyLkRFRkFVTFRfQVZBVEFSUy5sZW5ndGhdO1xyXG4gICAgICAgIHJldHVybiBgJHtsb2NhdGlvbi5wcm90b2NvbH06Ly8ke3dpbmRvd1tcIkdMT0JBTF9FTlZcIl0uQVNTRVRfRU5EUE9JTlR9L2Fzc2V0cy8ke2Fzc2V0fWA7XHJcbiAgICB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vRGlzY29yZFRvTW9kdWxlc1wiKTtcclxubGV0IGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwxID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldENoYW5uZWxzICYmIGUuZGVmYXVsdC5nZXRDaGFubmVsKTtcclxubGV0IGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwyO1xyXG5sZXQgY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDMgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQubGFzdE1lc3NhZ2VJZCk7XHJcbmZ1bmN0aW9uIHNldDMoKSB7XHJcbiAgICBpZiAoY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDMgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQubGFzdE1lc3NhZ2VJZCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBnZXRDaGFubmVsOiBjaGFubmVsc01vZHVsZUludGVybmFsMS5nZXRDaGFubmVsLFxyXG4gICAgZ2V0QWxsQ2hhbm5lbHM6IGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwxLmdldENoYW5uZWxzLFxyXG4gICAgZ2V0IGRlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDIgPyBjaGFubmVsc01vZHVsZUludGVybmFsMi5kZWxldGVDaGFubmVsIDogKGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwyID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmRlbGV0ZUNoYW5uZWwpLCBjaGFubmVsc01vZHVsZUludGVybmFsMi5kZWxldGVDaGFubmVsKTtcclxuICAgIH0sXHJcbiAgICBnZXQgbGFzdE1lc3NhZ2VJZCgpIHtcclxuICAgICAgICBzZXQzKCk7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwzLmxhc3RNZXNzYWdlSWQ7XHJcbiAgICB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vRGlzY29yZFRvTW9kdWxlc1wiKTtcclxubW9kdWxlLmV4cG9ydHMgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuQVBJX0hPU1QpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbm1vZHVsZS5leHBvcnRzID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUobSA9PiBtLkRpc3BhdGNoZXIgJiYgbS5kZWZhdWx0ICYmIG0uZGVmYXVsdC5kaXNwYXRjaCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vRGlzY29yZFRvTW9kdWxlc1wiKTtcclxubGV0IGd1aWxkTW9kdWxlSW50ZXJuYWwxID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldEd1aWxkcyAmJiBlLmRlZmF1bHQuZ2V0R3VpbGQgJiYgIWUuZGVmYXVsdC5pc0ZldGNoaW5nKTtcclxubGV0IGd1aWxkTW9kdWxlSW50ZXJuYWwyID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldE1lbWJlckNvdW50cyAmJiBlLmRlZmF1bHQuZ2V0TWVtYmVyQ291bnQpO1xyXG5sZXQgZ3VpbGRNb2R1bGVJbnRlcm5hbDMgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0TWVtYmVycyk7XHJcbmxldCBndWlsZE1vZHVsZUludGVybmFsNCA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5pc0d1aWxkT3JDYXRlZ29yeU9yQ2hhbm5lbE11dGVkKTtcclxubGV0IGd1aWxkTW9kdWxlSW50ZXJuYWw1ID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmJhblVzZXIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldEFsbEd1aWxkczogZ3VpbGRNb2R1bGVJbnRlcm5hbDEuZ2V0R3VpbGRzLFxyXG4gICAgZ2V0R3VpbGQ6IGd1aWxkTW9kdWxlSW50ZXJuYWwxLmdldEd1aWxkLFxyXG4gICAgZ2V0TWVtYmVyQ291bnQ6IGd1aWxkTW9kdWxlSW50ZXJuYWwyLmdldE1lbWJlckNvdW50LFxyXG4gICAgZ2V0TWVtYmVyQ291bnRzOiBndWlsZE1vZHVsZUludGVybmFsMi5nZXRNZW1iZXJDb3VudHMsXHJcbiAgICBnZXRNZW1iZXJzOiBndWlsZE1vZHVsZUludGVybmFsMy5nZXRNZW1iZXJzLFxyXG4gICAgZ2V0TWVtYmVyOiBndWlsZE1vZHVsZUludGVybmFsMy5nZXRNZW1iZXIsXHJcbiAgICBnZXRNZW1iZXJJZHM6IGd1aWxkTW9kdWxlSW50ZXJuYWwzLmdldE1lbWJlcklkcyxcclxuICAgIGlzTWVtYmVyOiBndWlsZE1vZHVsZUludGVybmFsMy5pc01lbWJlcixcclxuICAgIG1lbWJlck9mOiBndWlsZE1vZHVsZUludGVybmFsMy5tZW1iZXJPZixcclxuICAgIGdldE5pY2s6IGd1aWxkTW9kdWxlSW50ZXJuYWwzLmdldE5pY2ssXHJcbiAgICBnZXRNZXNzYWdlTm90aWZpY2F0aW9uczogZ3VpbGRNb2R1bGVJbnRlcm5hbDQuZ2V0TWVzc2FnZU5vdGlmaWNhdGlvbnMsXHJcbiAgICBnZXROb3RpZmljYXRpb25zU3RhdGU6IGd1aWxkTW9kdWxlSW50ZXJuYWw0LmdldFN0YXRlLFxyXG4gICAgYmFuVXNlcjogZ3VpbGRNb2R1bGVJbnRlcm5hbDUuYmFuVXNlcixcclxuICAgIGtpY2tVc2VyOiBndWlsZE1vZHVsZUludGVybmFsNS5raWNrVXNlclxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmxldCB1c2VyU2V0dGluZ01vZHVsZUludGVybmFsMSA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5pc0d1aWxkUmVzdHJpY3RlZCk7XHJcbmxldCB1c2VyU2V0dGluZ01vZHVsZUludGVybmFsMiA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC51cGRhdGVMb2NhbFNldHRpbmdzKTtcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKHsgZ2V0QWxsU2V0dGluZ3M6IHVzZXJTZXR0aW5nTW9kdWxlSW50ZXJuYWwxLmdldEFsbFNldHRpbmdzLCBnZXRTZXR0aW5nOiAoc2V0dGluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyU2V0dGluZ01vZHVsZUludGVybmFsMS5nZXRBbGxTZXR0aW5ncygpW3NldHRpbmddO1xyXG4gICAgfSB9LCB1c2VyU2V0dGluZ01vZHVsZUludGVybmFsMik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vRGlzY29yZFRvTW9kdWxlc1wiKTtcclxubGV0IHVzZXJNb2R1bGVJbnRlcmFsMSA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXRVc2VyKTtcclxubGV0IHVzZXJNb2R1bGVJbnRlcmFsMiA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXROb3RlKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBnZXRVc2VyOiB1c2VyTW9kdWxlSW50ZXJhbDEuZ2V0VXNlcixcclxuICAgIGdldFVzZXJzOiB1c2VyTW9kdWxlSW50ZXJhbDEuZ2V0VXNlcnMsXHJcbiAgICBmb3JFYWNoOiB1c2VyTW9kdWxlSW50ZXJhbDEuZm9yRWFjaCxcclxuICAgIGZpbmRCeVRhZzogdXNlck1vZHVsZUludGVyYWwxLmZpbmRCeVRhZyxcclxuICAgIGZpbHRlcjogdXNlck1vZHVsZUludGVyYWwxLmZpbHRlcixcclxuICAgIGdldEN1cnJlbnRVc2VyOiB1c2VyTW9kdWxlSW50ZXJhbDEuZ2V0Q3VycmVudFVzZXIsXHJcbiAgICBnZXROdWxsYWJsZUN1cnJlbnRVc2VyOiB1c2VyTW9kdWxlSW50ZXJhbDEuZ2V0TnVsbGFibGVDdXJyZW50VXNlcixcclxuICAgIGdldE5vdGU6IHVzZXJNb2R1bGVJbnRlcmFsMi5nZXROb3RlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVzb2x2ZVVzZXJJRCA9IGV4cG9ydHMuYmluYXJ5VG9JRCA9IGV4cG9ydHMuaWRUb0JpbmFyeSA9IGV4cG9ydHMuYXBwbHlNaXhpbnMgPSBleHBvcnRzLmNyZWF0ZVVzZXIgPSBleHBvcnRzLmNyZWF0ZU1lc3NhZ2UgPSBleHBvcnRzLmNyZWF0ZVJvbGUgPSBleHBvcnRzLmNyZWF0ZUd1aWxkTWVtYmVyID0gZXhwb3J0cy5jcmVhdGVHdWlsZCA9IGV4cG9ydHMuY3JlYXRlQ2hhbm5lbCA9IHZvaWQgMDtcclxuY29uc3QgQmFzZUNoYW5uZWxfMSA9IHJlcXVpcmUoXCIuLi9zdHJ1Y3R1cmVzL0Jhc2VDaGFubmVsXCIpO1xyXG5jb25zdCBHdWlsZF8xID0gcmVxdWlyZShcIi4uL3N0cnVjdHVyZXMvR3VpbGRcIik7XHJcbmNvbnN0IFRleHRDaGFubmVsXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9UZXh0Q2hhbm5lbFwiKTtcclxuY29uc3QgR3VpbGRNZW1iZXJfMSA9IHJlcXVpcmUoXCIuLi9zdHJ1Y3R1cmVzL0d1aWxkTWVtYmVyXCIpO1xyXG5jb25zdCBSb2xlXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9Sb2xlXCIpO1xyXG5jb25zdCBVc2VyXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9Vc2VyXCIpO1xyXG5jb25zdCBNZXNzYWdlXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9NZXNzYWdlXCIpO1xyXG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKGNoYW5uZWwpIHtcclxuICAgIGxldCBjb25zdHJ1Y3RvciA9IGNoYW5uZWxzW2NoYW5uZWwudHlwZV0gfHwgQmFzZUNoYW5uZWxfMS5kZWZhdWx0O1xyXG4gICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcihjaGFubmVsKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUNoYW5uZWwgPSBjcmVhdGVDaGFubmVsO1xyXG5jb25zdCBjaGFubmVscyA9IFtcclxuICAgIFRleHRDaGFubmVsXzEuVGV4dENoYW5uZWxcclxuXTtcclxuZnVuY3Rpb24gY3JlYXRlR3VpbGQoZ3VpbGQpIHtcclxuICAgIHJldHVybiBuZXcgR3VpbGRfMS5kZWZhdWx0KGd1aWxkKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUd1aWxkID0gY3JlYXRlR3VpbGQ7XHJcbmZ1bmN0aW9uIGNyZWF0ZUd1aWxkTWVtYmVyKG1lbWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBHdWlsZE1lbWJlcl8xLmRlZmF1bHQobWVtYmVyKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUd1aWxkTWVtYmVyID0gY3JlYXRlR3VpbGRNZW1iZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZVJvbGUocm9sZSkge1xyXG4gICAgcmV0dXJuIG5ldyBSb2xlXzEuZGVmYXVsdChyb2xlKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVJvbGUgPSBjcmVhdGVSb2xlO1xyXG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgTWVzc2FnZV8xLmRlZmF1bHQobWVzc2FnZSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVNZXNzYWdlID0gY3JlYXRlTWVzc2FnZTtcclxuZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IFVzZXJfMS5kZWZhdWx0KHVzZXIpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlVXNlciA9IGNyZWF0ZVVzZXI7XHJcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yLCBiYXNlQ3RvcnMpIHtcclxuICAgIGJhc2VDdG9ycy5mb3JFYWNoKGJhc2VDdG9yID0+IHtcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSAnY29uc3RydWN0b3InKSB7XHJcbiAgICAgICAgICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGVbbmFtZV0gPSBiYXNlQ3Rvci5wcm90b3R5cGVbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYXBwbHlNaXhpbnMgPSBhcHBseU1peGlucztcclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYSBzbm93Zmxha2UgZnJvbSBhIGRlY2ltYWwgc3RyaW5nIHRvIGEgYml0IHN0cmluZy5cclxuICogQHBhcmFtICB7c3RyaW5nfSBudW0gU25vd2ZsYWtlIHRvIGJlIHRyYW5zZm9ybWVkXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBpZFRvQmluYXJ5KG51bSkge1xyXG4gICAgbGV0IGJpbiA9ICcnO1xyXG4gICAgbGV0IGhpZ2ggPSBwYXJzZUludChudW0uc2xpY2UoMCwgLTEwKSkgfHwgMDtcclxuICAgIGxldCBsb3cgPSBwYXJzZUludChudW0uc2xpY2UoLTEwKSk7XHJcbiAgICB3aGlsZSAobG93ID4gMCB8fCBoaWdoID4gMCkge1xyXG4gICAgICAgIGJpbiA9IFN0cmluZyhsb3cgJiAxKSArIGJpbjtcclxuICAgICAgICBsb3cgPSBNYXRoLmZsb29yKGxvdyAvIDIpO1xyXG4gICAgICAgIGlmIChoaWdoID4gMCkge1xyXG4gICAgICAgICAgICBsb3cgKz0gNTAwMDAwMDAwMCAqIChoaWdoICUgMik7XHJcbiAgICAgICAgICAgIGhpZ2ggPSBNYXRoLmZsb29yKGhpZ2ggLyAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmluO1xyXG59XHJcbmV4cG9ydHMuaWRUb0JpbmFyeSA9IGlkVG9CaW5hcnk7XHJcbi8qKlxyXG4qIFRyYW5zZm9ybXMgYSBzbm93Zmxha2UgZnJvbSBhIGJpdCBzdHJpbmcgdG8gYSBkZWNpbWFsIHN0cmluZy5cclxuKiBAcGFyYW0gIHtzdHJpbmd9IG51bSBCaXQgc3RyaW5nIHRvIGJlIHRyYW5zZm9ybWVkXHJcbiogQHJldHVybnMge3N0cmluZ31cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG5mdW5jdGlvbiBiaW5hcnlUb0lEKG51bSkge1xyXG4gICAgbGV0IGRlYyA9ICcnO1xyXG4gICAgd2hpbGUgKG51bS5sZW5ndGggPiA1MCkge1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBwYXJzZUludChudW0uc2xpY2UoMCwgLTMyKSwgMik7XHJcbiAgICAgICAgY29uc3QgbG93ID0gcGFyc2VJbnQoKGhpZ2ggJSAxMCkudG9TdHJpbmcoMikgKyBudW0uc2xpY2UoLTMyKSwgMik7XHJcbiAgICAgICAgZGVjID0gKGxvdyAlIDEwKS50b1N0cmluZygpICsgZGVjO1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IoaGlnaCAvIDEwKS50b1N0cmluZygyKSArXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IobG93IC8gMTApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMilcclxuICAgICAgICAgICAgICAgIC5wYWRTdGFydCgzMiwgJzAnKTtcclxuICAgIH1cclxuICAgIGxldCBudW0yID0gcGFyc2VJbnQobnVtLCAyKTtcclxuICAgIHdoaWxlIChudW0yID4gMCkge1xyXG4gICAgICAgIGRlYyA9IChudW0yICUgMTApLnRvU3RyaW5nKCkgKyBkZWM7XHJcbiAgICAgICAgbnVtMiA9IE1hdGguZmxvb3IobnVtMiAvIDEwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWM7XHJcbn1cclxuZXhwb3J0cy5iaW5hcnlUb0lEID0gYmluYXJ5VG9JRDtcclxuZnVuY3Rpb24gcmVzb2x2ZVVzZXJJRCh1c2VyKSB7XHJcbiAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHVzZXI7IC8vIElEXHJcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIFVzZXJfMS5kZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB1c2VyLmlkOyAvLyBVc2VyXHJcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIE1lc3NhZ2VfMS5kZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB1c2VyLmF1dGhvci5pZDsgLy8gTWVzc2FnZSBBdXRob3JcclxuICAgIGlmICh1c2VyIGluc3RhbmNlb2YgR3VpbGRfMS5kZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB1c2VyLm93bmVySUQ7IC8vIEd1aWxkXHJcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIEd1aWxkTWVtYmVyXzEuZGVmYXVsdClcclxuICAgICAgICByZXR1cm4gdXNlci5pZDsgLy8gR3VpbGRNZW1iZXJcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydHMucmVzb2x2ZVVzZXJJRCA9IHJlc29sdmVVc2VySUQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9