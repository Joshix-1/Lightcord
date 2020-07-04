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
        throw new DiscordJSError_1.default("Client#login is not supported. DiscordJS on lightcord will use the logged in account.");
    }
    get token() {
        throw new DiscordJSError_1.default("Client#token is not supported. DiscordJS on lightcord will use the logged in account.");
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
    async ban(user, { days = 0, reason = null } = {}) {
        let id = util_1.resolveUserID(user);
        if (!id)
            return Promise.reject(new DiscordJSError_1.default("Given user could not be resolved to an user ID."));
        let result = await DiscordToModules_1.guildModule.banUser(this.id, id, days, reason).catch(err => err);
        if (result instanceof Error || result.status !== 204) {
            let message = result.body;
            if (Array.isArray(message)) {
                message = message[0];
            }
            else {
                if (message.user_id) {
                    message = "User: " + message.user_id[0];
                }
                else if (message.delete_message_days) {
                    message = "Days: " + message.delete_message_days[0];
                }
                else if (message.reason) {
                    message = "Reason: " + message.reason[0];
                }
                else {
                    message = result.text;
                }
            }
            throw new DiscordJSError_1.default(message);
        }
        return id;
    }
    createChannel(name, typeOrOptions = 'text', permissionOverwrites, reason) {
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
exports.default = TextChannel;


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
    TextChannel_1.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vbm9kZV9tb2R1bGVzL0BkaXNjb3JkanMvY29sbGVjdGlvbi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9jbGllbnQvY2xpZW50LnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9CYXNlQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9CYXNlU3RydWN0dXJlLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9zdHJ1Y3R1cmVzL0NsaWVudFVzZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3N0cnVjdHVyZXMvR3VpbGQudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3N0cnVjdHVyZXMvR3VpbGRDaGFubmVsLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9zdHJ1Y3R1cmVzL0d1aWxkTWVtYmVyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy9zdHJ1Y3R1cmVzL01lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3N0cnVjdHVyZXMvUm9sZS50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9UZXh0Q2hhbm5lbC50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvc3RydWN0dXJlcy9Vc2VyLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9EaXNjb3JkSlNFcnJvci50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9EaXNjb3JkVG9Nb2R1bGVzLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL0xhenlMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvU25vd2ZsYWtlLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL21vZHVsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS8uL3NyYy91dGlsL21vZHVsZXMvYWNrbm93bGVkZ2UudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy9jZG4udHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9tb2R1bGVzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC9tb2R1bGVzL2Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy9ndWlsZHMudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy91c2VyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vTGlnaHRjb3JkQXBpLy4vc3JjL3V0aWwvbW9kdWxlcy91c2Vycy50cyIsIndlYnBhY2s6Ly9MaWdodGNvcmRBcGkvLi9zcmMvdXRpbC91dGlsLnRzIiwid2VicGFjazovL0xpZ2h0Y29yZEFwaS9leHRlcm5hbCBcImV2ZW50c1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRDtBQUNqRztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtEQUFrRCxrREFBa0Q7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQiwwQkFBMEIsS0FBSztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25RYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVE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QU8sQ0FBQyxvREFBb0I7QUFDM0MsZUFBZSxtQkFBTyxDQUFDLG9EQUFvQjtBQUMzQyxrQkFBa0IsbUJBQU8sQ0FBQywwREFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNHQSxtQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQSBNYXAgd2l0aCBhZGRpdGlvbmFsIHV0aWxpdHkgbWV0aG9kcy4gVGhpcyBpcyB1c2VkIHRocm91Z2hvdXQgZGlzY29yZC5qcyByYXRoZXIgdGhhbiBBcnJheXMgZm9yIGFueXRoaW5nIHRoYXQgaGFzXG4gKiBhbiBJRCwgZm9yIHNpZ25pZmljYW50bHkgaW1wcm92ZWQgcGVyZm9ybWFuY2UgYW5kIGVhc2Utb2YtdXNlLlxuICogQGV4dGVuZHMge01hcH1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplIC0gVGhlIGFtb3VudCBvZiBlbGVtZW50cyBpbiB0aGlzIGNvbGxlY3Rpb24uXG4gKi9cbmNsYXNzIENvbGxlY3Rpb24gZXh0ZW5kcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKGVudHJpZXMpIHtcbiAgICAgICAgc3VwZXIoZW50cmllcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWNoZWQgYXJyYXkgZm9yIHRoZSBgYXJyYXkoKWAgbWV0aG9kIC0gd2lsbCBiZSByZXNldCB0byBgbnVsbGAgd2hlbmV2ZXIgYHNldCgpYCBvciBgZGVsZXRlKClgIGFyZSBjYWxsZWRcbiAgICAgICAgICogQG5hbWUgQ29sbGVjdGlvbiNfYXJyYXlcbiAgICAgICAgICogQHR5cGUgez9BcnJheX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2FycmF5JywgeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlZCBhcnJheSBmb3IgdGhlIGBrZXlBcnJheSgpYCBtZXRob2QgLSB3aWxsIGJlIHJlc2V0IHRvIGBudWxsYCB3aGVuZXZlciBgc2V0KClgIG9yIGBkZWxldGUoKWAgYXJlIGNhbGxlZFxuICAgICAgICAgKiBAbmFtZSBDb2xsZWN0aW9uI19rZXlBcnJheVxuICAgICAgICAgKiBAdHlwZSB7P0FycmF5fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfa2V5QXJyYXknLCB7IHZhbHVlOiBudWxsLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZGVudGljYWwgdG8gW01hcC5nZXQoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2dldCkuXG4gICAgICogR2V0cyBhbiBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBrZXksIGFuZCByZXR1cm5zIGl0cyB2YWx1ZSwgb3IgYHVuZGVmaW5lZGAgaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXG4gICAgICogQHBhcmFtIHsqfSBrZXkgLSBUaGUga2V5IHRvIGdldCBmcm9tIHRoaXMgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHsqIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZGVudGljYWwgdG8gW01hcC5zZXQoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL3NldCkuXG4gICAgICogU2V0cyBhIG5ldyBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIHNwZWNpZmllZCBrZXkgYW5kIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBhZGRcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuICAgICAqL1xuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2FycmF5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fa2V5QXJyYXkgPSBudWxsO1xuICAgICAgICByZXR1cm4gc3VwZXIuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZGVudGljYWwgdG8gW01hcC5oYXMoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2hhcykuXG4gICAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgZXhpc3RzIGluIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBjaGVjayBmb3JcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBlbGVtZW50IGV4aXN0cywgYGZhbHNlYCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgKi9cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5oYXMoa2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWRlbnRpY2FsIHRvIFtNYXAuZGVsZXRlKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9kZWxldGUpLlxuICAgICAqIERlbGV0ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSB0byBkZWxldGUgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgd2FzIHJlbW92ZWQsIGBmYWxzZWAgaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXG4gICAgICovXG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgICB0aGlzLl9hcnJheSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2tleUFycmF5ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZGVudGljYWwgdG8gW01hcC5jbGVhcigpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvY2xlYXIpLlxuICAgICAqIFJlbW92ZXMgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNsZWFyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb3JkZXJlZCBhcnJheSBvZiB0aGUgdmFsdWVzIG9mIHRoaXMgY29sbGVjdGlvbiwgYW5kIGNhY2hlcyBpdCBpbnRlcm5hbGx5LiBUaGUgYXJyYXkgd2lsbCBvbmx5IGJlXG4gICAgICogcmVjb25zdHJ1Y3RlZCBpZiBhbiBpdGVtIGlzIGFkZGVkIHRvIG9yIHJlbW92ZWQgZnJvbSB0aGUgY29sbGVjdGlvbiwgb3IgaWYgeW91IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVxuICAgICAqIGl0c2VsZi4gSWYgeW91IGRvbid0IHdhbnQgdGhpcyBjYWNoaW5nIGJlaGF2aW9yLCB1c2UgYFsuLi5jb2xsZWN0aW9uLnZhbHVlcygpXWAgb3JcbiAgICAgKiBgQXJyYXkuZnJvbShjb2xsZWN0aW9uLnZhbHVlcygpKWAgaW5zdGVhZC5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgYXJyYXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXJyYXkgfHwgdGhpcy5fYXJyYXkubGVuZ3RoICE9PSB0aGlzLnNpemUpXG4gICAgICAgICAgICB0aGlzLl9hcnJheSA9IFsuLi50aGlzLnZhbHVlcygpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG9yZGVyZWQgYXJyYXkgb2YgdGhlIGtleXMgb2YgdGhpcyBjb2xsZWN0aW9uLCBhbmQgY2FjaGVzIGl0IGludGVybmFsbHkuIFRoZSBhcnJheSB3aWxsIG9ubHkgYmVcbiAgICAgKiByZWNvbnN0cnVjdGVkIGlmIGFuIGl0ZW0gaXMgYWRkZWQgdG8gb3IgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uLCBvciBpZiB5b3UgY2hhbmdlIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XG4gICAgICogaXRzZWxmLiBJZiB5b3UgZG9uJ3Qgd2FudCB0aGlzIGNhY2hpbmcgYmVoYXZpb3IsIHVzZSBgWy4uLmNvbGxlY3Rpb24ua2V5cygpXWAgb3JcbiAgICAgKiBgQXJyYXkuZnJvbShjb2xsZWN0aW9uLmtleXMoKSlgIGluc3RlYWQuXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGtleUFycmF5KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2tleUFycmF5IHx8IHRoaXMuX2tleUFycmF5Lmxlbmd0aCAhPT0gdGhpcy5zaXplKVxuICAgICAgICAgICAgdGhpcy5fa2V5QXJyYXkgPSBbLi4udGhpcy5rZXlzKCldO1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5QXJyYXk7XG4gICAgfVxuICAgIGZpcnN0KGFtb3VudCkge1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgIGlmIChhbW91bnQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdChhbW91bnQgKiAtMSk7XG4gICAgICAgIGFtb3VudCA9IE1hdGgubWluKHRoaXMuc2l6ZSwgYW1vdW50KTtcbiAgICAgICAgY29uc3QgaXRlciA9IHRoaXMudmFsdWVzKCk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCkgPT4gaXRlci5uZXh0KCkudmFsdWUpO1xuICAgIH1cbiAgICBmaXJzdEtleShhbW91bnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5cygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgaWYgKGFtb3VudCA8IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0S2V5KGFtb3VudCAqIC0xKTtcbiAgICAgICAgYW1vdW50ID0gTWF0aC5taW4odGhpcy5zaXplLCBhbW91bnQpO1xuICAgICAgICBjb25zdCBpdGVyID0gdGhpcy5rZXlzKCk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCkgPT4gaXRlci5uZXh0KCkudmFsdWUpO1xuICAgIH1cbiAgICBsYXN0KGFtb3VudCkge1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmFycmF5KCk7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYW1vdW50IDwgMClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0KGFtb3VudCAqIC0xKTtcbiAgICAgICAgaWYgKCFhbW91bnQpXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHJldHVybiBhcnIuc2xpY2UoLWFtb3VudCk7XG4gICAgfVxuICAgIGxhc3RLZXkoYW1vdW50KSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMua2V5QXJyYXkoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhbW91bnQgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RLZXkoYW1vdW50ICogLTEpO1xuICAgICAgICBpZiAoIWFtb3VudClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIGFyci5zbGljZSgtYW1vdW50KTtcbiAgICB9XG4gICAgcmFuZG9tKGFtb3VudCkge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5hcnJheSgpO1xuICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDAgfHwgIWFtb3VudClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgYXJyID0gYXJyLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCkgPT4gYXJyLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKSwgMSlbMF0pO1xuICAgIH1cbiAgICByYW5kb21LZXkoYW1vdW50KSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmtleUFycmF5KCk7XG4gICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCB8fCAhYW1vdW50KVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBhcnIgPSBhcnIuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKSA9PiBhcnIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpLCAxKVswXSk7XG4gICAgfVxuICAgIGZpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChmbih2YWwsIGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBmaW5kS2V5KGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoZm4odmFsLCBrZXksIHRoaXMpKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3dlZXAoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTaXplID0gdGhpcy5zaXplO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYgKGZuKHZhbCwga2V5LCB0aGlzKSlcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1NpemUgLSB0aGlzLnNpemU7XG4gICAgfVxuICAgIGZpbHRlcihmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoZm4odmFsLCBrZXksIHRoaXMpKVxuICAgICAgICAgICAgICAgIHJlc3VsdHMuc2V0KGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgcGFydGl0aW9uKGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG4gICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIHJlbW92aW5nIHRoZSA8SywgVj4gZnJvbSB0aGUgY29uc3RydWN0b3JzIGFmdGVyIFRTIDMuNy4wIGlzIHJlbGVhc2VkLCBhcyBpdCBpbmZlcnMgaXRcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oKSwgbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdKCldO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYgKGZuKHZhbCwga2V5LCB0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbMF0uc2V0KGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbMV0uc2V0KGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgZmxhdE1hcChmbiwgdGhpc0FyZykge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHRoaXMubWFwKGZuLCB0aGlzQXJnKTtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSgpLmNvbmNhdCguLi5jb2xsZWN0aW9ucyk7XG4gICAgfVxuICAgIG1hcChmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBjb25zdCBpdGVyID0gdGhpcy5lbnRyaWVzKCk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLnNpemUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlci5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gZm4odmFsdWUsIGtleSwgdGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYXBWYWx1ZXMoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgY29uc3QgY29sbCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcylcbiAgICAgICAgICAgIGNvbGwuc2V0KGtleSwgZm4odmFsLCBrZXksIHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGNvbGw7XG4gICAgfVxuICAgIHNvbWUoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChmbih2YWwsIGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBldmVyeShmbiwgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYgKCFmbih2YWwsIGtleSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGEgZnVuY3Rpb24gdG8gcHJvZHVjZSBhIHNpbmdsZSB2YWx1ZS4gSWRlbnRpY2FsIGluIGJlaGF2aW9yIHRvXG4gICAgICogW0FycmF5LnJlZHVjZSgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2UpLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHVzZWQgdG8gcmVkdWNlLCB0YWtpbmcgZm91ciBhcmd1bWVudHM7IGBhY2N1bXVsYXRvcmAsIGBjdXJyZW50VmFsdWVgLCBgY3VycmVudEtleWAsXG4gICAgICogYW5kIGBjb2xsZWN0aW9uYFxuICAgICAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gU3RhcnRpbmcgdmFsdWUgZm9yIHRoZSBhY2N1bXVsYXRvclxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBleGFtcGxlIGNvbGxlY3Rpb24ucmVkdWNlKChhY2MsIGd1aWxkKSA9PiBhY2MgKyBndWlsZC5tZW1iZXJDb3VudCwgMCk7XG4gICAgICovXG4gICAgcmVkdWNlKGZuLCBpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgbGV0IGFjY3VtdWxhdG9yO1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpXG4gICAgICAgICAgICAgICAgYWNjdW11bGF0b3IgPSBmbihhY2N1bXVsYXRvciwgdmFsLCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRvciA9IHZhbDtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjdW11bGF0b3IgPSBmbihhY2N1bXVsYXRvciwgdmFsLCBrZXksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIGl0ZW1zIGl0ZXJhdGVkLlxuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBjb2xsZWN0aW9uIHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG4gICAgZWFjaChmbiwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLmZvckVhY2goZm4sIHRoaXNBcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGFwKGZuLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG4gICAgICAgIGZuKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpZGVudGljYWwgc2hhbGxvdyBjb3B5IG9mIHRoaXMgY29sbGVjdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cbiAgICAgKiBAZXhhbXBsZSBjb25zdCBuZXdDb2xsID0gc29tZUNvbGwuY2xvbmUoKTtcbiAgICAgKi9cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tYmluZXMgdGhpcyBjb2xsZWN0aW9uIHdpdGggb3RoZXJzIGludG8gYSBuZXcgY29sbGVjdGlvbi4gTm9uZSBvZiB0aGUgc291cmNlIGNvbGxlY3Rpb25zIGFyZSBtb2RpZmllZC5cbiAgICAgKiBAcGFyYW0gey4uLkNvbGxlY3Rpb259IGNvbGxlY3Rpb25zIENvbGxlY3Rpb25zIHRvIG1lcmdlXG4gICAgICogQHJldHVybnMge0NvbGxlY3Rpb259XG4gICAgICogQGV4YW1wbGUgY29uc3QgbmV3Q29sbCA9IHNvbWVDb2xsLmNvbmNhdChzb21lT3RoZXJDb2xsLCBhbm90aGVyQ29sbCwgb2hCb3lBQ29sbCk7XG4gICAgICovXG4gICAgY29uY2F0KC4uLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbGwgPSB0aGlzLmNsb25lKCk7XG4gICAgICAgIGZvciAoY29uc3QgY29sbCBvZiBjb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGNvbGwpXG4gICAgICAgICAgICAgICAgbmV3Q29sbC5zZXQoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdDb2xsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBjb2xsZWN0aW9uIHNoYXJlcyBpZGVudGljYWwgaXRlbXMgd2l0aCBhbm90aGVyLlxuICAgICAqIFRoaXMgaXMgZGlmZmVyZW50IHRvIGNoZWNraW5nIGZvciBlcXVhbGl0eSB1c2luZyBlcXVhbC1zaWducywgYmVjYXVzZVxuICAgICAqIHRoZSBjb2xsZWN0aW9ucyBtYXkgYmUgZGlmZmVyZW50IG9iamVjdHMsIGJ1dCBjb250YWluIHRoZSBzYW1lIGRhdGEuXG4gICAgICogQHBhcmFtIHtDb2xsZWN0aW9ufSBjb2xsZWN0aW9uIENvbGxlY3Rpb24gdG8gY29tcGFyZSB3aXRoXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGNvbGxlY3Rpb25zIGhhdmUgaWRlbnRpY2FsIGNvbnRlbnRzXG4gICAgICovXG4gICAgZXF1YWxzKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcyA9PT0gY29sbGVjdGlvbilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zaXplICE9PSBjb2xsZWN0aW9uLnNpemUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMpIHtcbiAgICAgICAgICAgIGlmICghY29sbGVjdGlvbi5oYXMoa2V5KSB8fCB2YWx1ZSAhPT0gY29sbGVjdGlvbi5nZXQoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHNvcnQgbWV0aG9kIHNvcnRzIHRoZSBpdGVtcyBvZiBhIGNvbGxlY3Rpb24gaW4gcGxhY2UgYW5kIHJldHVybnMgaXQuXG4gICAgICogVGhlIHNvcnQgaXMgbm90IG5lY2Vzc2FyaWx5IHN0YWJsZS4gVGhlIGRlZmF1bHQgc29ydCBvcmRlciBpcyBhY2NvcmRpbmcgdG8gc3RyaW5nIFVuaWNvZGUgY29kZSBwb2ludHMuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmVGdW5jdGlvbl0gU3BlY2lmaWVzIGEgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzb3J0IG9yZGVyLlxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZCBhY2NvcmRpbmcgdG8gZWFjaCBjaGFyYWN0ZXIncyBVbmljb2RlIGNvZGUgcG9pbnQgdmFsdWUsXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiBlYWNoIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge0NvbGxlY3Rpb259XG4gICAgICogQGV4YW1wbGUgY29sbGVjdGlvbi5zb3J0KCh1c2VyQSwgdXNlckIpID0+IHVzZXJBLmNyZWF0ZWRUaW1lc3RhbXAgLSB1c2VyQi5jcmVhdGVkVGltZXN0YW1wKTtcbiAgICAgKi9cbiAgICBzb3J0KGNvbXBhcmVGdW5jdGlvbiA9ICh4LCB5KSA9PiBOdW1iZXIoeCA+IHkpIHx8IE51bWJlcih4ID09PSB5KSAtIDEpIHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFsuLi50aGlzLmVudHJpZXMoKV07XG4gICAgICAgIGVudHJpZXMuc29ydCgoYSwgYikgPT4gY29tcGFyZUZ1bmN0aW9uKGFbMV0sIGJbMV0sIGFbMF0sIGJbMF0pKTtcbiAgICAgICAgLy8gUGVyZm9ybSBjbGVhbi11cFxuICAgICAgICBzdXBlci5jbGVhcigpO1xuICAgICAgICB0aGlzLl9hcnJheSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2tleUFycmF5ID0gbnVsbDtcbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgZW50cmllc1xuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICBzdXBlci5zZXQoaywgdik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcnNlY3QgbWV0aG9kIHJldHVybnMgYSBuZXcgc3RydWN0dXJlIGNvbnRhaW5pbmcgaXRlbXMgd2hlcmUgdGhlIGtleXMgYXJlIHByZXNlbnQgaW4gYm90aCBvcmlnaW5hbCBzdHJ1Y3R1cmVzLlxuICAgICAqIEBwYXJhbSB7Q29sbGVjdGlvbn0gb3RoZXIgVGhlIG90aGVyIENvbGxlY3Rpb24gdG8gZmlsdGVyIGFnYWluc3RcbiAgICAgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cbiAgICAgKi9cbiAgICBpbnRlcnNlY3Qob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG90aGVyLmZpbHRlcigoXywgaykgPT4gdGhpcy5oYXMoaykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZGlmZmVyZW5jZSBtZXRob2QgcmV0dXJucyBhIG5ldyBzdHJ1Y3R1cmUgY29udGFpbmluZyBpdGVtcyB3aGVyZSB0aGUga2V5IGlzIHByZXNlbnQgaW4gb25lIG9mIHRoZSBvcmlnaW5hbCBzdHJ1Y3R1cmVzIGJ1dCBub3QgdGhlIG90aGVyLlxuICAgICAqIEBwYXJhbSB7Q29sbGVjdGlvbn0gb3RoZXIgVGhlIG90aGVyIENvbGxlY3Rpb24gdG8gZmlsdGVyIGFnYWluc3RcbiAgICAgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cbiAgICAgKi9cbiAgICBkaWZmZXJlbmNlKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBvdGhlci5maWx0ZXIoKF8sIGspID0+ICF0aGlzLmhhcyhrKSkuY29uY2F0KHRoaXMuZmlsdGVyKChfLCBrKSA9PiAhb3RoZXIuaGFzKGspKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBzb3J0ZWQgbWV0aG9kIHNvcnRzIHRoZSBpdGVtcyBvZiBhIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgaXQuXG4gICAgICogVGhlIHNvcnQgaXMgbm90IG5lY2Vzc2FyaWx5IHN0YWJsZS4gVGhlIGRlZmF1bHQgc29ydCBvcmRlciBpcyBhY2NvcmRpbmcgdG8gc3RyaW5nIFVuaWNvZGUgY29kZSBwb2ludHMuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmVGdW5jdGlvbl0gU3BlY2lmaWVzIGEgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzb3J0IG9yZGVyLlxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZCBhY2NvcmRpbmcgdG8gZWFjaCBjaGFyYWN0ZXIncyBVbmljb2RlIGNvZGUgcG9pbnQgdmFsdWUsXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiBlYWNoIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge0NvbGxlY3Rpb259XG4gICAgICogQGV4YW1wbGUgY29sbGVjdGlvbi5zb3J0ZWQoKHVzZXJBLCB1c2VyQikgPT4gdXNlckEuY3JlYXRlZFRpbWVzdGFtcCAtIHVzZXJCLmNyZWF0ZWRUaW1lc3RhbXApO1xuICAgICAqL1xuICAgIHNvcnRlZChjb21wYXJlRnVuY3Rpb24gPSAoeCwgeSkgPT4gTnVtYmVyKHggPiB5KSB8fCBOdW1iZXIoeCA9PT0geSkgLSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc10oWy4uLnRoaXMuZW50cmllcygpXSlcbiAgICAgICAgICAgIC5zb3J0KChhdiwgYnYsIGFrLCBiaykgPT4gY29tcGFyZUZ1bmN0aW9uKGF2LCBidiwgYWssIGJrKSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db2xsZWN0aW9uID0gQ29sbGVjdGlvbjtcbkNvbGxlY3Rpb24uZGVmYXVsdCA9IENvbGxlY3Rpb247XG5leHBvcnRzLmRlZmF1bHQgPSBDb2xsZWN0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMeUlzSW5OdmRYSmpaWE1pT2xzaWFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlJRVHM3T3pzN1IwRkxSenRCUVVOSUxFMUJRVTBzVlVGQmFVSXNVMEZCVVN4SFFVRlRPMGxCVFhaRExGbEJRVzFDTEU5QlFTdERPMUZCUTJwRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVVm1PenM3T3p0WFFVdEhPMUZCUTBnc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlJUTkdPenM3T3p0WFFVdEhPMUZCUTBnc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF5OUdMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFZEJRVWNzUTBGQlF5eEhRVUZOTzFGQlEyaENMRTlCUVU4c1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NSMEZCUnl4RFFVRkRMRWRCUVUwc1JVRkJSU3hMUVVGUk8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM1JDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzUjBGQlJ5eERRVUZETEVkQlFVMDdVVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SFFVRk5PMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNSQ0xFOUJRVThzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEV0QlFVczdVVUZEV0N4UFFVRlBMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzUzBGQlN6dFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSk8xbEJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZGtZc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzQkNMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeFJRVUZSTzFGQlEyUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWs3V1VGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVSaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEZGtJc1EwRkJRenRKUVZWTkxFdEJRVXNzUTBGQlF5eE5RVUZsTzFGQlF6TkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTnlSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEhRVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYmtVc1EwRkJRenRKUVZWTkxGRkJRVkVzUTBGQlF5eE5RVUZsTzFGQlF6bENMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTnVSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETzFsQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEhRVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYmtVc1EwRkJRenRKUVZkTkxFbEJRVWtzUTBGQlF5eE5RVUZsTzFGQlF6RkNMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFOUJRVThzVFVGQlRTeExRVUZMTEZkQlFWYzdXVUZCUlN4UFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpsRUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTTdXVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRMME1zU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVOMlFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU16UWl4RFFVRkRPMGxCVjAwc1QwRkJUeXhEUVVGRExFMUJRV1U3VVVGRE4wSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6VkNMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ6dFpRVUZGTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VRc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF6dFpRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSQ3hKUVVGSkxFTkJRVU1zVFVGQlRUdFpRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFOUJRVThzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZWVFN4TlFVRk5MRU5CUVVNc1RVRkJaVHRSUVVNMVFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRGRrSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWE8xbEJRVVVzVDBGQlR5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRFWXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMDdXVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVNelF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4SFFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGSExFTkJRVU03U1VGVlRTeFRRVUZUTEVOQlFVTXNUVUZCWlR0UlFVTXZRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhPMWxCUVVVc1QwRkJUeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVlzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTA3V1VGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTXpReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEhRVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkhMRU5CUVVNN1NVRmxUU3hKUVVGSkxFTkJRVU1zUlVGQmJVUXNSVUZCUlN4UFFVRnBRanRSUVVOcVJpeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjN1dVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNeFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzFsQlF6bENMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETzFOQlEyNURPMUZCUTBRc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFXRk5MRTlCUVU4c1EwRkJReXhGUVVGdFJDeEZRVUZGTEU5QlFXbENPMUZCUTNCR0xFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NWMEZCVnp0WlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRE9VSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTTdaMEpCUVVVc1QwRkJUeXhIUVVGSExFTkJRVU03VTBGRGJrTTdVVUZEUkN4UFFVRlBMRk5CUVZNc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlZVMHNTMEZCU3l4RFFVRkRMRVZCUVcxRUxFVkJRVVVzVDBGQmFVSTdVVUZEYkVZc1NVRkJTU3hQUVVGUExFOUJRVThzUzBGQlN5eFhRVUZYTzFsQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETVVRc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTXZRaXhMUVVGTExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRk8xbEJRemxDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEZWtNN1VVRkRSQ3hQUVVGUExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGaFRTeE5RVUZOTEVOQlFVTXNSVUZCYlVRc1JVRkJSU3hQUVVGcFFqdFJRVU51Uml4SlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmM3V1VGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU14UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGblFpeERRVUZETzFGQlEzSkZMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1dVRkRPVUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU03WjBKQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZET1VNN1VVRkRSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCV1Uwc1UwRkJVeXhEUVVGRExFVkJRVzFFTEVWQlFVVXNUMEZCYVVJN1VVRkRkRVlzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhPMWxCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzZFVkQlFYVkhPMUZCUTNaSExFMUJRVTBzVDBGQlR5eEhRVUZwUWl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVdkQ0xFVkJRVVVzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlowSXNRMEZCUXl4RFFVRkRPMUZCUXpOSkxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRE9VSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRka0lzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEZWtJN2FVSkJRVTA3WjBKQlEwNHNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRla0k3VTBGRFJEdFJRVU5FTEU5QlFVOHNUMEZCVHl4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGWlRTeFBRVUZQTEVOQlFVa3NSVUZCTkVRc1JVRkJSU3hQUVVGcFFqdFJRVU5vUnl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNeFF5eFBRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFUWkNMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEYkVjc1EwRkJRenRKUVZsTkxFZEJRVWNzUTBGQlNTeEZRVUUyUXl4RlFVRkZMRTlCUVdsQ08xRkJRemRGTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1YwRkJWenRaUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRekZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFJRVU0xUWl4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFZEJRVTBzUlVGQlJUdFpRVU5vUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGRrTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZaVFN4VFFVRlRMRU5CUVVrc1JVRkJOa01zUlVGQlJTeFBRVUZwUWp0UlFVTnVSaXhKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWYzdXVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUUwUWl4RFFVRkRPMUZCUXpsRkxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSk8xbEJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRlpUU3hKUVVGSkxFTkJRVU1zUlVGQmJVUXNSVUZCUlN4UFFVRnBRanRSUVVOcVJpeEpRVUZKTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjN1dVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNeFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTzFsQlF6bENMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzFOQlEzQkRPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRFpDeERRVUZETzBsQldVMHNTMEZCU3l4RFFVRkRMRVZCUVcxRUxFVkJRVVVzVDBGQmFVSTdVVUZEYkVZc1NVRkJTU3hQUVVGUExFOUJRVThzUzBGQlN5eFhRVUZYTzFsQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETVVRc1MwRkJTeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRaUVVNNVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETzJkQ1FVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRM1JETzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJSVVE3T3pzN096czdPMDlCVVVjN1NVRkRTU3hOUVVGTkxFTkJRVWtzUlVGQk5rUXNSVUZCUlN4WlFVRm5RanRSUVVNdlJpeEpRVUZKTEZkQlFXVXNRMEZCUXp0UlFVVndRaXhKUVVGSkxFOUJRVThzV1VGQldTeExRVUZMTEZkQlFWY3NSVUZCUlR0WlFVTjRReXhYUVVGWExFZEJRVWNzV1VGQldTeERRVUZETzFsQlF6TkNMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpPMmRDUVVGRkxGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETjBVc1QwRkJUeXhYUVVGWExFTkJRVU03VTBGRGJrSTdVVUZEUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGFrSXNTMEZCU3l4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlR0WlFVTTVRaXhKUVVGSkxFdEJRVXNzUlVGQlJUdG5Ra0ZEVml4WFFVRlhMRWRCUVVjc1IwRkJiVUlzUTBGQlF6dG5Ra0ZEYkVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dG5Ra0ZEWkN4VFFVRlRPMkZCUTFRN1dVRkRSQ3hYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlF6bERPMUZCUlVRc2NVSkJRWEZDTzFGQlEzSkNMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMVlzVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4clJFRkJhMFFzUTBGQlF5eERRVUZETzFOQlEzaEZPMUZCUlVRc1QwRkJUeXhYUVVGWExFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFXbENUU3hKUVVGSkxFTkJRVU1zUlVGQlowUXNSVUZCUlN4UFFVRnBRanRSUVVNNVJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVdkRUxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEZUVVc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRFlpeERRVUZETzBsQlpVMHNSMEZCUnl4RFFVRkRMRVZCUVRoQ0xFVkJRVVVzVDBGQmFVSTdVVUZETTBRc1NVRkJTU3hQUVVGUExFOUJRVThzUzBGQlN5eFhRVUZYTzFsQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETVVRc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlExUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFdEJRVXM3VVVGRFdDeFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRlRMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWRCUVVjc1YwRkJLMEk3VVVGREwwTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlF6ZENMRXRCUVVzc1RVRkJUU3hKUVVGSkxFbEJRVWtzVjBGQlZ5eEZRVUZGTzFsQlF5OUNMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpPMmRDUVVGRkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pFTzFGQlEwUXNUMEZCVHl4UFFVRlBMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVFMFFqdFJRVU42UXl4SlFVRkpMRU5CUVVNc1ZVRkJWVHRaUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzFGQlF6bENMRWxCUVVrc1NVRkJTU3hMUVVGTExGVkJRVlU3V1VGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0UlFVTnlReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrN1dVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dFJRVU5vUkN4TFFVRkxMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPMWxCUTJoRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFdEJRVXNzUzBGQlN5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU14UkN4UFFVRlBMRXRCUVVzc1EwRkJRenRoUVVOaU8xTkJRMFE3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRkZSRHM3T3pzN096czdUMEZSUnp0SlFVTkpMRWxCUVVrc1EwRkJReXhyUWtGQmQwWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGVkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVONlNpeE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEY0VNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVZVc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlhoRkxHMUNRVUZ0UWp0UlFVTnVRaXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVYwUWl4elFrRkJjMEk3VVVGRGRFSXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTTNRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOb1FqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hUUVVGVExFTkJRVU1zUzBGQmRVSTdVVUZEZGtNc1QwRkJUeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NWVUZCVlN4RFFVRkRMRXRCUVhWQ08xRkJRM2hETEU5QlFVOHNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14Uml4RFFVRkRPMGxCUlVRN096czdPenM3TzA5QlVVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc2EwSkJRWGRHTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJWU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRNMG9zVDBGQlVTeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlZUdGhRVU40UlN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6ZEVMRU5CUVVNN08wRkJSMDhzWjBOQlFWVTdRVUZxYWtKTExHdENRVUZQTEVkQlFYTkNMRlZCUVZVc1EwRkJRenRCUVd0cVFtaEZMR3RDUVVGbExGVkJRVlVzUTBGQlF6dEJRVU14UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjlzYkdWamRHbHZia052Ym5OMGNuVmpkRzl5SUh0Y2JseDBibVYzS0NrNklFTnZiR3hsWTNScGIyNDhkVzVyYm05M2Jpd2dkVzVyYm05M2JqNDdYRzVjZEc1bGR6eExMQ0JXUGlobGJuUnlhV1Z6UHpvZ1VtVmhaRzl1YkhsQmNuSmhlVHh5WldGa2IyNXNlU0JiU3l3Z1ZsMCtJSHdnYm5Wc2JDazZJRU52Ykd4bFkzUnBiMjQ4U3l3Z1ZqNDdYRzVjZEc1bGR6eExMQ0JXUGlocGRHVnlZV0pzWlRvZ1NYUmxjbUZpYkdVOGNtVmhaRzl1YkhrZ1cwc3NJRlpkUGlrNklFTnZiR3hsWTNScGIyNDhTeXdnVmo0N1hHNWNkSEpsWVdSdmJteDVJSEJ5YjNSdmRIbHdaVG9nUTI5c2JHVmpkR2x2Ymp4MWJtdHViM2R1TENCMWJtdHViM2R1UGp0Y2JseDBjbVZoWkc5dWJIa2dXMU41YldKdmJDNXpjR1ZqYVdWelhUb2dRMjlzYkdWamRHbHZia052Ym5OMGNuVmpkRzl5TzF4dWZWeHVYRzR2S2lwY2JpQXFJRUVnVFdGd0lIZHBkR2dnWVdSa2FYUnBiMjVoYkNCMWRHbHNhWFI1SUcxbGRHaHZaSE11SUZSb2FYTWdhWE1nZFhObFpDQjBhSEp2ZFdkb2IzVjBJR1JwYzJOdmNtUXVhbk1nY21GMGFHVnlJSFJvWVc0Z1FYSnlZWGx6SUdadmNpQmhibmwwYUdsdVp5QjBhR0YwSUdoaGMxeHVJQ29nWVc0Z1NVUXNJR1p2Y2lCemFXZHVhV1pwWTJGdWRHeDVJR2x0Y0hKdmRtVmtJSEJsY21admNtMWhibU5sSUdGdVpDQmxZWE5sTFc5bUxYVnpaUzVjYmlBcUlFQmxlSFJsYm1SeklIdE5ZWEI5WEc0Z0tpQkFjSEp2Y0dWeWRIa2dlMjUxYldKbGNuMGdjMmw2WlNBdElGUm9aU0JoYlc5MWJuUWdiMllnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUJqYjJ4c1pXTjBhVzl1TGx4dUlDb3ZYRzVqYkdGemN5QkRiMnhzWldOMGFXOXVQRXNzSUZZK0lHVjRkR1Z1WkhNZ1RXRndQRXNzSUZZK0lIdGNibHgwY0hKcGRtRjBaU0JmWVhKeVlYa2hPaUJXVzEwZ2ZDQnVkV3hzTzF4dVhIUndjbWwyWVhSbElGOXJaWGxCY25KaGVTRTZJRXRiWFNCOElHNTFiR3c3WEc1Y2RIQjFZbXhwWXlCemRHRjBhV01nY21WaFpHOXViSGtnWkdWbVlYVnNkRG9nZEhsd1pXOW1JRU52Ykd4bFkzUnBiMjRnUFNCRGIyeHNaV04wYVc5dU8xeHVYSFJ3ZFdKc2FXTWdXeWRqYjI1emRISjFZM1J2Y2lkZE9pQjBlWEJsYjJZZ1EyOXNiR1ZqZEdsdmJqdGNibHh1WEhSd2RXSnNhV01nWTI5dWMzUnlkV04wYjNJb1pXNTBjbWxsY3o4NklGSmxZV1J2Ym14NVFYSnlZWGs4Y21WaFpHOXViSGtnVzBzc0lGWmRQaUI4SUc1MWJHd3BJSHRjYmx4MFhIUnpkWEJsY2lobGJuUnlhV1Z6S1R0Y2JseHVYSFJjZEM4cUtseHVYSFJjZENBcUlFTmhZMmhsWkNCaGNuSmhlU0JtYjNJZ2RHaGxJR0JoY25KaGVTZ3BZQ0J0WlhSb2IyUWdMU0IzYVd4c0lHSmxJSEpsYzJWMElIUnZJR0J1ZFd4c1lDQjNhR1Z1WlhabGNpQmdjMlYwS0NsZ0lHOXlJR0JrWld4bGRHVW9LV0FnWVhKbElHTmhiR3hsWkZ4dVhIUmNkQ0FxSUVCdVlXMWxJRU52Ykd4bFkzUnBiMjRqWDJGeWNtRjVYRzVjZEZ4MElDb2dRSFI1Y0dVZ2V6OUJjbkpoZVgxY2JseDBYSFFnS2lCQWNISnBkbUYwWlZ4dVhIUmNkQ0FxTDF4dVhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoMGFHbHpMQ0FuWDJGeWNtRjVKeXdnZXlCMllXeDFaVG9nYm5Wc2JDd2dkM0pwZEdGaWJHVTZJSFJ5ZFdVc0lHTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpTQjlLVHRjYmx4dVhIUmNkQzhxS2x4dVhIUmNkQ0FxSUVOaFkyaGxaQ0JoY25KaGVTQm1iM0lnZEdobElHQnJaWGxCY25KaGVTZ3BZQ0J0WlhSb2IyUWdMU0IzYVd4c0lHSmxJSEpsYzJWMElIUnZJR0J1ZFd4c1lDQjNhR1Z1WlhabGNpQmdjMlYwS0NsZ0lHOXlJR0JrWld4bGRHVW9LV0FnWVhKbElHTmhiR3hsWkZ4dVhIUmNkQ0FxSUVCdVlXMWxJRU52Ykd4bFkzUnBiMjRqWDJ0bGVVRnljbUY1WEc1Y2RGeDBJQ29nUUhSNWNHVWdlejlCY25KaGVYMWNibHgwWEhRZ0tpQkFjSEpwZG1GMFpWeHVYSFJjZENBcUwxeHVYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaDBhR2x6TENBblgydGxlVUZ5Y21GNUp5d2dleUIyWVd4MVpUb2diblZzYkN3Z2QzSnBkR0ZpYkdVNklIUnlkV1VzSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlNCOUtUdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJKWkdWdWRHbGpZV3dnZEc4Z1cwMWhjQzVuWlhRb0tWMG9hSFIwY0hNNkx5OWtaWFpsYkc5d1pYSXViVzk2YVd4c1lTNXZjbWN2Wlc0dFZWTXZaRzlqY3k5WFpXSXZTbUYyWVZOamNtbHdkQzlTWldabGNtVnVZMlV2UjJ4dlltRnNYMDlpYW1WamRITXZUV0Z3TDJkbGRDa3VYRzVjZENBcUlFZGxkSE1nWVc0Z1pXeGxiV1Z1ZENCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ2EyVjVMQ0JoYm1RZ2NtVjBkWEp1Y3lCcGRITWdkbUZzZFdVc0lHOXlJR0IxYm1SbFptbHVaV1JnSUdsbUlIUm9aU0JsYkdWdFpXNTBJR1J2WlhNZ2JtOTBJR1Y0YVhOMExseHVYSFFnS2lCQWNHRnlZVzBnZXlwOUlHdGxlU0F0SUZSb1pTQnJaWGtnZEc4Z1oyVjBJR1p5YjIwZ2RHaHBjeUJqYjJ4c1pXTjBhVzl1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHNxSUh3Z2RXNWtaV1pwYm1Wa2ZWeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklHZGxkQ2hyWlhrNklFc3BPaUJXSUh3Z2RXNWtaV1pwYm1Wa0lIdGNibHgwWEhSeVpYUjFjbTRnYzNWd1pYSXVaMlYwS0d0bGVTazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nU1dSbGJuUnBZMkZzSUhSdklGdE5ZWEF1YzJWMEtDbGRLR2gwZEhCek9pOHZaR1YyWld4dmNHVnlMbTF2ZW1sc2JHRXViM0puTDJWdUxWVlRMMlJ2WTNNdlYyVmlMMHBoZG1GVFkzSnBjSFF2VW1WbVpYSmxibU5sTDBkc2IySmhiRjlQWW1wbFkzUnpMMDFoY0M5elpYUXBMbHh1WEhRZ0tpQlRaWFJ6SUdFZ2JtVjNJR1ZzWlcxbGJuUWdhVzRnZEdobElHTnZiR3hsWTNScGIyNGdkMmwwYUNCMGFHVWdjM0JsWTJsbWFXVmtJR3RsZVNCaGJtUWdkbUZzZFdVdVhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ2EyVjVJQzBnVkdobElHdGxlU0J2WmlCMGFHVWdaV3hsYldWdWRDQjBieUJoWkdSY2JseDBJQ29nUUhCaGNtRnRJSHNxZlNCMllXeDFaU0F0SUZSb1pTQjJZV3gxWlNCdlppQjBhR1VnWld4bGJXVnVkQ0IwYnlCaFpHUmNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwTnZiR3hsWTNScGIyNTlYRzVjZENBcUwxeHVYSFJ3ZFdKc2FXTWdjMlYwS0d0bGVUb2dTeXdnZG1Gc2RXVTZJRllwT2lCMGFHbHpJSHRjYmx4MFhIUjBhR2x6TGw5aGNuSmhlU0E5SUc1MWJHdzdYRzVjZEZ4MGRHaHBjeTVmYTJWNVFYSnlZWGtnUFNCdWRXeHNPMXh1WEhSY2RISmxkSFZ5YmlCemRYQmxjaTV6WlhRb2EyVjVMQ0IyWVd4MVpTazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nU1dSbGJuUnBZMkZzSUhSdklGdE5ZWEF1YUdGektDbGRLR2gwZEhCek9pOHZaR1YyWld4dmNHVnlMbTF2ZW1sc2JHRXViM0puTDJWdUxWVlRMMlJ2WTNNdlYyVmlMMHBoZG1GVFkzSnBjSFF2VW1WbVpYSmxibU5sTDBkc2IySmhiRjlQWW1wbFkzUnpMMDFoY0M5b1lYTXBMbHh1WEhRZ0tpQkRhR1ZqYTNNZ2FXWWdZVzRnWld4bGJXVnVkQ0JsZUdsemRITWdhVzRnZEdobElHTnZiR3hsWTNScGIyNHVYRzVjZENBcUlFQndZWEpoYlNCN0tuMGdhMlY1SUMwZ1ZHaGxJR3RsZVNCdlppQjBhR1VnWld4bGJXVnVkQ0IwYnlCamFHVmpheUJtYjNKY2JseDBJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUdCMGNuVmxZQ0JwWmlCMGFHVWdaV3hsYldWdWRDQmxlR2x6ZEhNc0lHQm1ZV3h6WldBZ2FXWWdhWFFnWkc5bGN5QnViM1FnWlhocGMzUXVYRzVjZENBcUwxeHVYSFJ3ZFdKc2FXTWdhR0Z6S0d0bGVUb2dTeWs2SUdKdmIyeGxZVzRnZTF4dVhIUmNkSEpsZEhWeWJpQnpkWEJsY2k1b1lYTW9hMlY1S1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQkpaR1Z1ZEdsallXd2dkRzhnVzAxaGNDNWtaV3hsZEdVb0tWMG9hSFIwY0hNNkx5OWtaWFpsYkc5d1pYSXViVzk2YVd4c1lTNXZjbWN2Wlc0dFZWTXZaRzlqY3k5WFpXSXZTbUYyWVZOamNtbHdkQzlTWldabGNtVnVZMlV2UjJ4dlltRnNYMDlpYW1WamRITXZUV0Z3TDJSbGJHVjBaU2t1WEc1Y2RDQXFJRVJsYkdWMFpYTWdZVzRnWld4bGJXVnVkQ0JtY205dElIUm9aU0JqYjJ4c1pXTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdleXA5SUd0bGVTQXRJRlJvWlNCclpYa2dkRzhnWkdWc1pYUmxJR1p5YjIwZ2RHaGxJR052Ykd4bFkzUnBiMjVjYmx4MElDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJR0IwY25WbFlDQnBaaUIwYUdVZ1pXeGxiV1Z1ZENCM1lYTWdjbVZ0YjNabFpDd2dZR1poYkhObFlDQnBaaUIwYUdVZ1pXeGxiV1Z1ZENCa2IyVnpJRzV2ZENCbGVHbHpkQzVjYmx4MElDb3ZYRzVjZEhCMVlteHBZeUJrWld4bGRHVW9hMlY1T2lCTEtUb2dZbTl2YkdWaGJpQjdYRzVjZEZ4MGRHaHBjeTVmWVhKeVlYa2dQU0J1ZFd4c08xeHVYSFJjZEhSb2FYTXVYMnRsZVVGeWNtRjVJRDBnYm5Wc2JEdGNibHgwWEhSeVpYUjFjbTRnYzNWd1pYSXVaR1ZzWlhSbEtHdGxlU2s3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1NXUmxiblJwWTJGc0lIUnZJRnROWVhBdVkyeGxZWElvS1Ywb2FIUjBjSE02THk5a1pYWmxiRzl3WlhJdWJXOTZhV3hzWVM1dmNtY3ZaVzR0VlZNdlpHOWpjeTlYWldJdlNtRjJZVk5qY21sd2RDOVNaV1psY21WdVkyVXZSMnh2WW1Gc1gwOWlhbVZqZEhNdlRXRndMMk5zWldGeUtTNWNibHgwSUNvZ1VtVnRiM1psY3lCaGJHd2daV3hsYldWdWRITWdabkp2YlNCMGFHVWdZMjlzYkdWamRHbHZiaTVjYmx4MElDb2dRSEpsZEhWeWJuTWdlM1Z1WkdWbWFXNWxaSDFjYmx4MElDb3ZYRzVjZEhCMVlteHBZeUJqYkdWaGNpZ3BPaUIyYjJsa0lIdGNibHgwWEhSeVpYUjFjbTRnYzNWd1pYSXVZMnhsWVhJb0tUdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJEY21WaGRHVnpJR0Z1SUc5eVpHVnlaV1FnWVhKeVlYa2diMllnZEdobElIWmhiSFZsY3lCdlppQjBhR2x6SUdOdmJHeGxZM1JwYjI0c0lHRnVaQ0JqWVdOb1pYTWdhWFFnYVc1MFpYSnVZV3hzZVM0Z1ZHaGxJR0Z5Y21GNUlIZHBiR3dnYjI1c2VTQmlaVnh1WEhRZ0tpQnlaV052Ym5OMGNuVmpkR1ZrSUdsbUlHRnVJR2wwWlcwZ2FYTWdZV1JrWldRZ2RHOGdiM0lnY21WdGIzWmxaQ0JtY205dElIUm9aU0JqYjJ4c1pXTjBhVzl1TENCdmNpQnBaaUI1YjNVZ1kyaGhibWRsSUhSb1pTQnNaVzVuZEdnZ2IyWWdkR2hsSUdGeWNtRjVYRzVjZENBcUlHbDBjMlZzWmk0Z1NXWWdlVzkxSUdSdmJpZDBJSGRoYm5RZ2RHaHBjeUJqWVdOb2FXNW5JR0psYUdGMmFXOXlMQ0IxYzJVZ1lGc3VMaTVqYjJ4c1pXTjBhVzl1TG5aaGJIVmxjeWdwWFdBZ2IzSmNibHgwSUNvZ1lFRnljbUY1TG1aeWIyMG9ZMjlzYkdWamRHbHZiaTUyWVd4MVpYTW9LU2xnSUdsdWMzUmxZV1F1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHRCY25KaGVYMWNibHgwSUNvdlhHNWNkSEIxWW14cFl5QmhjbkpoZVNncE9pQldXMTBnZTF4dVhIUmNkR2xtSUNnaGRHaHBjeTVmWVhKeVlYa2dmSHdnZEdocGN5NWZZWEp5WVhrdWJHVnVaM1JvSUNFOVBTQjBhR2x6TG5OcGVtVXBJSFJvYVhNdVgyRnljbUY1SUQwZ1d5NHVMblJvYVhNdWRtRnNkV1Z6S0NsZE8xeHVYSFJjZEhKbGRIVnliaUIwYUdsekxsOWhjbkpoZVR0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQkRjbVZoZEdWeklHRnVJRzl5WkdWeVpXUWdZWEp5WVhrZ2IyWWdkR2hsSUd0bGVYTWdiMllnZEdocGN5QmpiMnhzWldOMGFXOXVMQ0JoYm1RZ1kyRmphR1Z6SUdsMElHbHVkR1Z5Ym1Gc2JIa3VJRlJvWlNCaGNuSmhlU0IzYVd4c0lHOXViSGtnWW1WY2JseDBJQ29nY21WamIyNXpkSEoxWTNSbFpDQnBaaUJoYmlCcGRHVnRJR2x6SUdGa1pHVmtJSFJ2SUc5eUlISmxiVzkyWldRZ1puSnZiU0IwYUdVZ1kyOXNiR1ZqZEdsdmJpd2diM0lnYVdZZ2VXOTFJR05vWVc1blpTQjBhR1VnYkdWdVozUm9JRzltSUhSb1pTQmhjbkpoZVZ4dVhIUWdLaUJwZEhObGJHWXVJRWxtSUhsdmRTQmtiMjRuZENCM1lXNTBJSFJvYVhNZ1kyRmphR2x1WnlCaVpXaGhkbWx2Y2l3Z2RYTmxJR0JiTGk0dVkyOXNiR1ZqZEdsdmJpNXJaWGx6S0NsZFlDQnZjbHh1WEhRZ0tpQmdRWEp5WVhrdVpuSnZiU2hqYjJ4c1pXTjBhVzl1TG10bGVYTW9LU2xnSUdsdWMzUmxZV1F1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHRCY25KaGVYMWNibHgwSUNvdlhHNWNkSEIxWW14cFl5QnJaWGxCY25KaGVTZ3BPaUJMVzEwZ2UxeHVYSFJjZEdsbUlDZ2hkR2hwY3k1ZmEyVjVRWEp5WVhrZ2ZId2dkR2hwY3k1ZmEyVjVRWEp5WVhrdWJHVnVaM1JvSUNFOVBTQjBhR2x6TG5OcGVtVXBJSFJvYVhNdVgydGxlVUZ5Y21GNUlEMGdXeTR1TG5Sb2FYTXVhMlY1Y3lncFhUdGNibHgwWEhSeVpYUjFjbTRnZEdocGN5NWZhMlY1UVhKeVlYazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVDJKMFlXbHVjeUIwYUdVZ1ptbHljM1FnZG1Gc2RXVW9jeWtnYVc0Z2RHaHBjeUJqYjJ4c1pXTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdXMkZ0YjNWdWRGMGdRVzF2ZFc1MElHOW1JSFpoYkhWbGN5QjBieUJ2WW5SaGFXNGdabkp2YlNCMGFHVWdZbVZuYVc1dWFXNW5YRzVjZENBcUlFQnlaWFIxY201eklIc3FmRUZ5Y21GNVBDbytmU0JCSUhOcGJtZHNaU0IyWVd4MVpTQnBaaUJ1YnlCaGJXOTFiblFnYVhNZ2NISnZkbWxrWldRZ2IzSWdZVzRnWVhKeVlYa2diMllnZG1Gc2RXVnpMQ0J6ZEdGeWRHbHVaeUJtY205dElIUm9aU0JsYm1RZ2FXWmNibHgwSUNvZ1lXMXZkVzUwSUdseklHNWxaMkYwYVhabFhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ1ptbHljM1FvS1RvZ1ZpQjhJSFZ1WkdWbWFXNWxaRHRjYmx4MGNIVmliR2xqSUdacGNuTjBLR0Z0YjNWdWREb2diblZ0WW1WeUtUb2dWbHRkTzF4dVhIUndkV0pzYVdNZ1ptbHljM1FvWVcxdmRXNTBQem9nYm5WdFltVnlLVG9nVmlCOElGWmJYU0I4SUhWdVpHVm1hVzVsWkNCN1hHNWNkRngwYVdZZ0tIUjVjR1Z2WmlCaGJXOTFiblFnUFQwOUlDZDFibVJsWm1sdVpXUW5LU0J5WlhSMWNtNGdkR2hwY3k1MllXeDFaWE1vS1M1dVpYaDBLQ2t1ZG1Gc2RXVTdYRzVjZEZ4MGFXWWdLR0Z0YjNWdWRDQThJREFwSUhKbGRIVnliaUIwYUdsekxteGhjM1FvWVcxdmRXNTBJQ29nTFRFcE8xeHVYSFJjZEdGdGIzVnVkQ0E5SUUxaGRHZ3ViV2x1S0hSb2FYTXVjMmw2WlN3Z1lXMXZkVzUwS1R0Y2JseDBYSFJqYjI1emRDQnBkR1Z5SUQwZ2RHaHBjeTUyWVd4MVpYTW9LVHRjYmx4MFhIUnlaWFIxY200Z1FYSnlZWGt1Wm5KdmJTaDdJR3hsYm1kMGFEb2dZVzF2ZFc1MElIMHNJQ2dwT2lCV0lEMCtJR2wwWlhJdWJtVjRkQ2dwTG5aaGJIVmxLVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCUFluUmhhVzV6SUhSb1pTQm1hWEp6ZENCclpYa29jeWtnYVc0Z2RHaHBjeUJqYjJ4c1pXTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdXMkZ0YjNWdWRGMGdRVzF2ZFc1MElHOW1JR3RsZVhNZ2RHOGdiMkowWVdsdUlHWnliMjBnZEdobElHSmxaMmx1Ym1sdVoxeHVYSFFnS2lCQWNtVjBkWEp1Y3lCN0tueEJjbkpoZVR3cVBuMGdRU0J6YVc1bmJHVWdhMlY1SUdsbUlHNXZJR0Z0YjNWdWRDQnBjeUJ3Y205MmFXUmxaQ0J2Y2lCaGJpQmhjbkpoZVNCdlppQnJaWGx6TENCemRHRnlkR2x1WnlCbWNtOXRJSFJvWlNCbGJtUWdhV1pjYmx4MElDb2dZVzF2ZFc1MElHbHpJRzVsWjJGMGFYWmxYRzVjZENBcUwxeHVYSFJ3ZFdKc2FXTWdabWx5YzNSTFpYa29LVG9nU3lCOElIVnVaR1ZtYVc1bFpEdGNibHgwY0hWaWJHbGpJR1pwY25OMFMyVjVLR0Z0YjNWdWREb2diblZ0WW1WeUtUb2dTMXRkTzF4dVhIUndkV0pzYVdNZ1ptbHljM1JMWlhrb1lXMXZkVzUwUHpvZ2JuVnRZbVZ5S1RvZ1N5QjhJRXRiWFNCOElIVnVaR1ZtYVc1bFpDQjdYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQmhiVzkxYm5RZ1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCeVpYUjFjbTRnZEdocGN5NXJaWGx6S0NrdWJtVjRkQ2dwTG5aaGJIVmxPMXh1WEhSY2RHbG1JQ2hoYlc5MWJuUWdQQ0F3S1NCeVpYUjFjbTRnZEdocGN5NXNZWE4wUzJWNUtHRnRiM1Z1ZENBcUlDMHhLVHRjYmx4MFhIUmhiVzkxYm5RZ1BTQk5ZWFJvTG0xcGJpaDBhR2x6TG5OcGVtVXNJR0Z0YjNWdWRDazdYRzVjZEZ4MFkyOXVjM1FnYVhSbGNpQTlJSFJvYVhNdWEyVjVjeWdwTzF4dVhIUmNkSEpsZEhWeWJpQkJjbkpoZVM1bWNtOXRLSHNnYkdWdVozUm9PaUJoYlc5MWJuUWdmU3dnS0NrNklFc2dQVDRnYVhSbGNpNXVaWGgwS0NrdWRtRnNkV1VwTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFOWlkR0ZwYm5NZ2RHaGxJR3hoYzNRZ2RtRnNkV1VvY3lrZ2FXNGdkR2hwY3lCamIyeHNaV04wYVc5dUxpQlVhR2x6SUhKbGJHbGxjeUJ2YmlCN1FHeHBibXNnUTI5c2JHVmpkR2x2YmlOaGNuSmhlWDBzSUdGdVpDQjBhSFZ6SUhSb1pTQmpZV05vYVc1blhHNWNkQ0FxSUcxbFkyaGhibWx6YlNCaGNIQnNhV1Z6SUdobGNtVWdZWE1nZDJWc2JDNWNibHgwSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0aGJXOTFiblJkSUVGdGIzVnVkQ0J2WmlCMllXeDFaWE1nZEc4Z2IySjBZV2x1SUdaeWIyMGdkR2hsSUdWdVpGeHVYSFFnS2lCQWNtVjBkWEp1Y3lCN0tueEJjbkpoZVR3cVBuMGdRU0J6YVc1bmJHVWdkbUZzZFdVZ2FXWWdibThnWVcxdmRXNTBJR2x6SUhCeWIzWnBaR1ZrSUc5eUlHRnVJR0Z5Y21GNUlHOW1JSFpoYkhWbGN5d2djM1JoY25ScGJtY2dabkp2YlNCMGFHVWdjM1JoY25RZ2FXWmNibHgwSUNvZ1lXMXZkVzUwSUdseklHNWxaMkYwYVhabFhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ2JHRnpkQ2dwT2lCV0lId2dkVzVrWldacGJtVmtPMXh1WEhSd2RXSnNhV01nYkdGemRDaGhiVzkxYm5RNklHNTFiV0psY2lrNklGWmJYVHRjYmx4MGNIVmliR2xqSUd4aGMzUW9ZVzF2ZFc1MFB6b2diblZ0WW1WeUtUb2dWaUI4SUZaYlhTQjhJSFZ1WkdWbWFXNWxaQ0I3WEc1Y2RGeDBZMjl1YzNRZ1lYSnlJRDBnZEdocGN5NWhjbkpoZVNncE8xeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ1lXMXZkVzUwSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnY21WMGRYSnVJR0Z5Y2x0aGNuSXViR1Z1WjNSb0lDMGdNVjA3WEc1Y2RGeDBhV1lnS0dGdGIzVnVkQ0E4SURBcElISmxkSFZ5YmlCMGFHbHpMbVpwY25OMEtHRnRiM1Z1ZENBcUlDMHhLVHRjYmx4MFhIUnBaaUFvSVdGdGIzVnVkQ2tnY21WMGRYSnVJRnRkTzF4dVhIUmNkSEpsZEhWeWJpQmhjbkl1YzJ4cFkyVW9MV0Z0YjNWdWRDazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVDJKMFlXbHVjeUIwYUdVZ2JHRnpkQ0JyWlhrb2N5a2dhVzRnZEdocGN5QmpiMnhzWldOMGFXOXVMaUJVYUdseklISmxiR2xsY3lCdmJpQjdRR3hwYm1zZ1EyOXNiR1ZqZEdsdmJpTnJaWGxCY25KaGVYMHNJR0Z1WkNCMGFIVnpJSFJvWlNCallXTm9hVzVuWEc1Y2RDQXFJRzFsWTJoaGJtbHpiU0JoY0hCc2FXVnpJR2hsY21VZ1lYTWdkMlZzYkM1Y2JseDBJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRnRoYlc5MWJuUmRJRUZ0YjNWdWRDQnZaaUJyWlhseklIUnZJRzlpZEdGcGJpQm1jbTl0SUhSb1pTQmxibVJjYmx4MElDb2dRSEpsZEhWeWJuTWdleXA4UVhKeVlYazhLajU5SUVFZ2MybHVaMnhsSUd0bGVTQnBaaUJ1YnlCaGJXOTFiblFnYVhNZ2NISnZkbWxrWldRZ2IzSWdZVzRnWVhKeVlYa2diMllnYTJWNWN5d2djM1JoY25ScGJtY2dabkp2YlNCMGFHVWdjM1JoY25RZ2FXWmNibHgwSUNvZ1lXMXZkVzUwSUdseklHNWxaMkYwYVhabFhHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ2JHRnpkRXRsZVNncE9pQkxJSHdnZFc1a1pXWnBibVZrTzF4dVhIUndkV0pzYVdNZ2JHRnpkRXRsZVNoaGJXOTFiblE2SUc1MWJXSmxjaWs2SUV0YlhUdGNibHgwY0hWaWJHbGpJR3hoYzNSTFpYa29ZVzF2ZFc1MFB6b2diblZ0WW1WeUtUb2dTeUI4SUV0YlhTQjhJSFZ1WkdWbWFXNWxaQ0I3WEc1Y2RGeDBZMjl1YzNRZ1lYSnlJRDBnZEdocGN5NXJaWGxCY25KaGVTZ3BPMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdZVzF2ZFc1MElEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2NtVjBkWEp1SUdGeWNsdGhjbkl1YkdWdVozUm9JQzBnTVYwN1hHNWNkRngwYVdZZ0tHRnRiM1Z1ZENBOElEQXBJSEpsZEhWeWJpQjBhR2x6TG1acGNuTjBTMlY1S0dGdGIzVnVkQ0FxSUMweEtUdGNibHgwWEhScFppQW9JV0Z0YjNWdWRDa2djbVYwZFhKdUlGdGRPMXh1WEhSY2RISmxkSFZ5YmlCaGNuSXVjMnhwWTJVb0xXRnRiM1Z1ZENrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dUMkowWVdsdWN5QjFibWx4ZFdVZ2NtRnVaRzl0SUhaaGJIVmxLSE1wSUdaeWIyMGdkR2hwY3lCamIyeHNaV04wYVc5dUxpQlVhR2x6SUhKbGJHbGxjeUJ2YmlCN1FHeHBibXNnUTI5c2JHVmpkR2x2YmlOaGNuSmhlWDBzSUdGdVpDQjBhSFZ6SUhSb1pTQmpZV05vYVc1blhHNWNkQ0FxSUcxbFkyaGhibWx6YlNCaGNIQnNhV1Z6SUdobGNtVWdZWE1nZDJWc2JDNWNibHgwSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0aGJXOTFiblJkSUVGdGIzVnVkQ0J2WmlCMllXeDFaWE1nZEc4Z2IySjBZV2x1SUhKaGJtUnZiV3g1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHNxZkVGeWNtRjVQQ28rZlNCQklITnBibWRzWlNCMllXeDFaU0JwWmlCdWJ5QmhiVzkxYm5RZ2FYTWdjSEp2ZG1sa1pXUWdiM0lnWVc0Z1lYSnlZWGtnYjJZZ2RtRnNkV1Z6WEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nY21GdVpHOXRLQ2s2SUZZN1hHNWNkSEIxWW14cFl5QnlZVzVrYjIwb1lXMXZkVzUwT2lCdWRXMWlaWElwT2lCV1cxMDdYRzVjZEhCMVlteHBZeUJ5WVc1a2IyMG9ZVzF2ZFc1MFB6b2diblZ0WW1WeUtUb2dWaUI4SUZaYlhTQjdYRzVjZEZ4MGJHVjBJR0Z5Y2lBOUlIUm9hWE11WVhKeVlYa29LVHRjYmx4MFhIUnBaaUFvZEhsd1pXOW1JR0Z0YjNWdWRDQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElISmxkSFZ5YmlCaGNuSmJUV0YwYUM1bWJHOXZjaWhOWVhSb0xuSmhibVJ2YlNncElDb2dZWEp5TG14bGJtZDBhQ2xkTzF4dVhIUmNkR2xtSUNoaGNuSXViR1Z1WjNSb0lEMDlQU0F3SUh4OElDRmhiVzkxYm5RcElISmxkSFZ5YmlCYlhUdGNibHgwWEhSaGNuSWdQU0JoY25JdWMyeHBZMlVvS1R0Y2JseDBYSFJ5WlhSMWNtNGdRWEp5WVhrdVpuSnZiU2g3SUd4bGJtZDBhRG9nWVcxdmRXNTBJSDBzSUNncE9pQldJRDArSUdGeWNpNXpjR3hwWTJVb1RXRjBhQzVtYkc5dmNpaE5ZWFJvTG5KaGJtUnZiU2dwSUNvZ1lYSnlMbXhsYm1kMGFDa3NJREVwV3pCZEtUdGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJQWW5SaGFXNXpJSFZ1YVhGMVpTQnlZVzVrYjIwZ2EyVjVLSE1wSUdaeWIyMGdkR2hwY3lCamIyeHNaV04wYVc5dUxpQlVhR2x6SUhKbGJHbGxjeUJ2YmlCN1FHeHBibXNnUTI5c2JHVmpkR2x2YmlOclpYbEJjbkpoZVgwc0lHRnVaQ0IwYUhWeklIUm9aU0JqWVdOb2FXNW5YRzVjZENBcUlHMWxZMmhoYm1semJTQmhjSEJzYVdWeklHaGxjbVVnWVhNZ2QyVnNiQzVjYmx4MElDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdGhiVzkxYm5SZElFRnRiM1Z1ZENCdlppQnJaWGx6SUhSdklHOWlkR0ZwYmlCeVlXNWtiMjFzZVZ4dVhIUWdLaUJBY21WMGRYSnVjeUI3S254QmNuSmhlVHdxUG4wZ1FTQnphVzVuYkdVZ2EyVjVJR2xtSUc1dklHRnRiM1Z1ZENCcGN5QndjbTkyYVdSbFpDQnZjaUJoYmlCaGNuSmhlVnh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJSEpoYm1SdmJVdGxlU2dwT2lCTE8xeHVYSFJ3ZFdKc2FXTWdjbUZ1Wkc5dFMyVjVLR0Z0YjNWdWREb2diblZ0WW1WeUtUb2dTMXRkTzF4dVhIUndkV0pzYVdNZ2NtRnVaRzl0UzJWNUtHRnRiM1Z1ZEQ4NklHNTFiV0psY2lrNklFc2dmQ0JMVzEwZ2UxeHVYSFJjZEd4bGRDQmhjbklnUFNCMGFHbHpMbXRsZVVGeWNtRjVLQ2s3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJoYlc5MWJuUWdQVDA5SUNkMWJtUmxabWx1WldRbktTQnlaWFIxY200Z1lYSnlXMDFoZEdndVpteHZiM0lvVFdGMGFDNXlZVzVrYjIwb0tTQXFJR0Z5Y2k1c1pXNW5kR2dwWFR0Y2JseDBYSFJwWmlBb1lYSnlMbXhsYm1kMGFDQTlQVDBnTUNCOGZDQWhZVzF2ZFc1MEtTQnlaWFIxY200Z1cxMDdYRzVjZEZ4MFlYSnlJRDBnWVhKeUxuTnNhV05sS0NrN1hHNWNkRngwY21WMGRYSnVJRUZ5Y21GNUxtWnliMjBvZXlCc1pXNW5kR2c2SUdGdGIzVnVkQ0I5TENBb0tUb2dTeUE5UGlCaGNuSXVjM0JzYVdObEtFMWhkR2d1Wm14dmIzSW9UV0YwYUM1eVlXNWtiMjBvS1NBcUlHRnljaTVzWlc1bmRHZ3BMQ0F4S1Zzd1hTazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVTJWaGNtTm9aWE1nWm05eUlHRWdjMmx1WjJ4bElHbDBaVzBnZDJobGNtVWdkR2hsSUdkcGRtVnVJR1oxYm1OMGFXOXVJSEpsZEhWeWJuTWdZU0IwY25WMGFIa2dkbUZzZFdVdUlGUm9hWE1nWW1Wb1lYWmxjeUJzYVd0bFhHNWNkQ0FxSUZ0QmNuSmhlUzVtYVc1a0tDbGRLR2gwZEhCek9pOHZaR1YyWld4dmNHVnlMbTF2ZW1sc2JHRXViM0puTDJWdUxWVlRMMlJ2WTNNdlYyVmlMMHBoZG1GVFkzSnBjSFF2VW1WbVpYSmxibU5sTDBkc2IySmhiRjlQWW1wbFkzUnpMMEZ5Y21GNUwyWnBibVFwTGx4dVhIUWdLaUE4ZDJGeWJqNUJiR3dnWTI5c2JHVmpkR2x2Ym5NZ2RYTmxaQ0JwYmlCRWFYTmpiM0prTG1weklHRnlaU0J0WVhCd1pXUWdkWE5wYm1jZ2RHaGxhWElnWUdsa1lDQndjbTl3WlhKMGVTd2dZVzVrSUdsbUlIbHZkU0IzWVc1MElIUnZJR1pwYm1RZ1lua2dhV1FnZVc5MVhHNWNkQ0FxSUhOb2IzVnNaQ0IxYzJVZ2RHaGxJR0JuWlhSZ0lHMWxkR2h2WkM0Z1UyVmxYRzVjZENBcUlGdE5SRTVkS0doMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwyVnVMVlZUTDJSdlkzTXZWMlZpTDBwaGRtRlRZM0pwY0hRdlVtVm1aWEpsYm1ObEwwZHNiMkpoYkY5UFltcGxZM1J6TDAxaGNDOW5aWFFwSUdadmNpQmtaWFJoYVd4ekxqd3ZkMkZ5Ymo1Y2JseDBJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWm00Z1ZHaGxJR1oxYm1OMGFXOXVJSFJ2SUhSbGMzUWdkMmwwYUNBb2MyaHZkV3hrSUhKbGRIVnliaUJpYjI5c1pXRnVLVnh1WEhRZ0tpQkFjR0Z5WVcwZ2V5cDlJRnQwYUdselFYSm5YU0JXWVd4MVpTQjBieUIxYzJVZ1lYTWdZSFJvYVhOZ0lIZG9aVzRnWlhobFkzVjBhVzVuSUdaMWJtTjBhVzl1WEc1Y2RDQXFJRUJ5WlhSMWNtNXpJSHNxZlZ4dVhIUWdLaUJBWlhoaGJYQnNaU0JqYjJ4c1pXTjBhVzl1TG1acGJtUW9kWE5sY2lBOVBpQjFjMlZ5TG5WelpYSnVZVzFsSUQwOVBTQW5RbTlpSnlrN1hHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ1ptbHVaQ2htYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHBPaUJXSUh3Z2RXNWtaV1pwYm1Wa08xeHVYSFJ3ZFdKc2FXTWdabWx1WkR4VVBpaG1iam9nS0hSb2FYTTZJRlFzSUhaaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lHSnZiMnhsWVc0c0lIUm9hWE5CY21jNklGUXBPaUJXSUh3Z2RXNWtaV1pwYm1Wa08xeHVYSFJ3ZFdKc2FXTWdabWx1WkNobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRzSUhSb2FYTkJjbWMvT2lCMWJtdHViM2R1S1RvZ1ZpQjhJSFZ1WkdWbWFXNWxaQ0I3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUIwYUdselFYSm5JQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dabTRnUFNCbWJpNWlhVzVrS0hSb2FYTkJjbWNwTzF4dVhIUmNkR1p2Y2lBb1kyOXVjM1FnVzJ0bGVTd2dkbUZzWFNCdlppQjBhR2x6S1NCN1hHNWNkRngwWEhScFppQW9abTRvZG1Gc0xDQnJaWGtzSUhSb2FYTXBLU0J5WlhSMWNtNGdkbUZzTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRk5sWVhKamFHVnpJR1p2Y2lCMGFHVWdhMlY1SUc5bUlHRWdjMmx1WjJ4bElHbDBaVzBnZDJobGNtVWdkR2hsSUdkcGRtVnVJR1oxYm1OMGFXOXVJSEpsZEhWeWJuTWdZU0IwY25WMGFIa2dkbUZzZFdVdUlGUm9hWE1nWW1Wb1lYWmxjeUJzYVd0bFhHNWNkQ0FxSUZ0QmNuSmhlUzVtYVc1a1NXNWtaWGdvS1Ywb2FIUjBjSE02THk5a1pYWmxiRzl3WlhJdWJXOTZhV3hzWVM1dmNtY3ZaVzR0VlZNdlpHOWpjeTlYWldJdlNtRjJZVk5qY21sd2RDOVNaV1psY21WdVkyVXZSMnh2WW1Gc1gwOWlhbVZqZEhNdlFYSnlZWGt2Wm1sdVpFbHVaR1Y0S1N4Y2JseDBJQ29nWW5WMElISmxkSFZ5Ym5NZ2RHaGxJR3RsZVNCeVlYUm9aWElnZEdoaGJpQjBhR1VnY0c5emFYUnBiMjVoYkNCcGJtUmxlQzVjYmx4MElDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnVkdobElHWjFibU4wYVc5dUlIUnZJSFJsYzNRZ2QybDBhQ0FvYzJodmRXeGtJSEpsZEhWeWJpQmliMjlzWldGdUtWeHVYSFFnS2lCQWNHRnlZVzBnZXlwOUlGdDBhR2x6UVhKblhTQldZV3gxWlNCMGJ5QjFjMlVnWVhNZ1lIUm9hWE5nSUhkb1pXNGdaWGhsWTNWMGFXNW5JR1oxYm1OMGFXOXVYRzVjZENBcUlFQnlaWFIxY201eklIc3FmVnh1WEhRZ0tpQkFaWGhoYlhCc1pTQmpiMnhzWldOMGFXOXVMbVpwYm1STFpYa29kWE5sY2lBOVBpQjFjMlZ5TG5WelpYSnVZVzFsSUQwOVBTQW5RbTlpSnlrN1hHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ1ptbHVaRXRsZVNobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRwT2lCTElId2dkVzVrWldacGJtVmtPMXh1WEhSd2RXSnNhV01nWm1sdVpFdGxlVHhVUGlobWJqb2dLSFJvYVhNNklGUXNJSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRzSUhSb2FYTkJjbWM2SUZRcE9pQkxJSHdnZFc1a1pXWnBibVZrTzF4dVhIUndkV0pzYVdNZ1ptbHVaRXRsZVNobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRzSUhSb2FYTkJjbWMvT2lCMWJtdHViM2R1S1RvZ1N5QjhJSFZ1WkdWbWFXNWxaQ0I3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUIwYUdselFYSm5JQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dabTRnUFNCbWJpNWlhVzVrS0hSb2FYTkJjbWNwTzF4dVhIUmNkR1p2Y2lBb1kyOXVjM1FnVzJ0bGVTd2dkbUZzWFNCdlppQjBhR2x6S1NCN1hHNWNkRngwWEhScFppQW9abTRvZG1Gc0xDQnJaWGtzSUhSb2FYTXBLU0J5WlhSMWNtNGdhMlY1TzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRkpsYlc5MlpYTWdhWFJsYlhNZ2RHaGhkQ0J6WVhScGMyWjVJSFJvWlNCd2NtOTJhV1JsWkNCbWFXeDBaWElnWm5WdVkzUnBiMjR1WEc1Y2RDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1p1SUVaMWJtTjBhVzl1SUhWelpXUWdkRzhnZEdWemRDQW9jMmh2ZFd4a0lISmxkSFZ5YmlCaElHSnZiMnhsWVc0cFhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ1czUm9hWE5CY21kZElGWmhiSFZsSUhSdklIVnpaU0JoY3lCZ2RHaHBjMkFnZDJobGJpQmxlR1ZqZFhScGJtY2dablZ1WTNScGIyNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UyNTFiV0psY24wZ1ZHaGxJRzUxYldKbGNpQnZaaUJ5WlcxdmRtVmtJR1Z1ZEhKcFpYTmNibHgwSUNvdlhHNWNkSEIxWW14cFl5QnpkMlZsY0NobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRwT2lCdWRXMWlaWEk3WEc1Y2RIQjFZbXhwWXlCemQyVmxjRHhVUGlobWJqb2dLSFJvYVhNNklGUXNJSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRzSUhSb2FYTkJjbWM2SUZRcE9pQnVkVzFpWlhJN1hHNWNkSEIxWW14cFl5QnpkMlZsY0NobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRzSUhSb2FYTkJjbWMvT2lCMWJtdHViM2R1S1RvZ2JuVnRZbVZ5SUh0Y2JseDBYSFJwWmlBb2RIbHdaVzltSUhSb2FYTkJjbWNnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0JtYmlBOUlHWnVMbUpwYm1Rb2RHaHBjMEZ5WnlrN1hHNWNkRngwWTI5dWMzUWdjSEpsZG1sdmRYTlRhWHBsSUQwZ2RHaHBjeTV6YVhwbE8xeHVYSFJjZEdadmNpQW9ZMjl1YzNRZ1cydGxlU3dnZG1Gc1hTQnZaaUIwYUdsektTQjdYRzVjZEZ4MFhIUnBaaUFvWm00b2RtRnNMQ0JyWlhrc0lIUm9hWE1wS1NCMGFHbHpMbVJsYkdWMFpTaHJaWGtwTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2NISmxkbWx2ZFhOVGFYcGxJQzBnZEdocGN5NXphWHBsTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFbGtaVzUwYVdOaGJDQjBiMXh1WEhRZ0tpQmJRWEp5WVhrdVptbHNkR1Z5S0NsZEtHaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeUxtMXZlbWxzYkdFdWIzSm5MMlZ1TFZWVEwyUnZZM012VjJWaUwwcGhkbUZUWTNKcGNIUXZVbVZtWlhKbGJtTmxMMGRzYjJKaGJGOVBZbXBsWTNSekwwRnljbUY1TDJacGJIUmxjaWtzWEc1Y2RDQXFJR0oxZENCeVpYUjFjbTV6SUdFZ1EyOXNiR1ZqZEdsdmJpQnBibk4wWldGa0lHOW1JR0Z1SUVGeWNtRjVMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1iaUJVYUdVZ1puVnVZM1JwYjI0Z2RHOGdkR1Z6ZENCM2FYUm9JQ2h6YUc5MWJHUWdjbVYwZFhKdUlHSnZiMnhsWVc0cFhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ1czUm9hWE5CY21kZElGWmhiSFZsSUhSdklIVnpaU0JoY3lCZ2RHaHBjMkFnZDJobGJpQmxlR1ZqZFhScGJtY2dablZ1WTNScGIyNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwTnZiR3hsWTNScGIyNTlYRzVjZENBcUlFQmxlR0Z0Y0d4bElHTnZiR3hsWTNScGIyNHVabWxzZEdWeUtIVnpaWElnUFQ0Z2RYTmxjaTUxYzJWeWJtRnRaU0E5UFQwZ0owSnZZaWNwTzF4dVhIUWdLaTljYmx4MGNIVmliR2xqSUdacGJIUmxjaWhtYmpvZ0tIWmhiSFZsT2lCV0xDQnJaWGs2SUVzc0lHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJR0p2YjJ4bFlXNHBPaUIwYUdsek8xeHVYSFJ3ZFdKc2FXTWdabWxzZEdWeVBGUStLR1p1T2lBb2RHaHBjem9nVkN3Z2RtRnNkV1U2SUZZc0lHdGxlVG9nU3l3Z1kyOXNiR1ZqZEdsdmJqb2dkR2hwY3lrZ1BUNGdZbTl2YkdWaGJpd2dkR2hwYzBGeVp6b2dWQ2s2SUhSb2FYTTdYRzVjZEhCMVlteHBZeUJtYVd4MFpYSW9abTQ2SUNoMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQmliMjlzWldGdUxDQjBhR2x6UVhKblB6b2dkVzVyYm05M2JpazZJSFJvYVhNZ2UxeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ2RHaHBjMEZ5WnlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUdadUlEMGdabTR1WW1sdVpDaDBhR2x6UVhKbktUdGNibHgwWEhSamIyNXpkQ0J5WlhOMWJIUnpJRDBnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNKYlUzbHRZbTlzTG5Od1pXTnBaWE5kUEVzc0lGWStLQ2tnWVhNZ2RHaHBjenRjYmx4MFhIUm1iM0lnS0dOdmJuTjBJRnRyWlhrc0lIWmhiRjBnYjJZZ2RHaHBjeWtnZTF4dVhIUmNkRngwYVdZZ0tHWnVLSFpoYkN3Z2EyVjVMQ0IwYUdsektTa2djbVZ6ZFd4MGN5NXpaWFFvYTJWNUxDQjJZV3dwTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2NtVnpkV3gwY3p0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQlFZWEowYVhScGIyNXpJSFJvWlNCamIyeHNaV04wYVc5dUlHbHVkRzhnZEhkdklHTnZiR3hsWTNScGIyNXpJSGRvWlhKbElIUm9aU0JtYVhKemRDQmpiMnhzWldOMGFXOXVYRzVjZENBcUlHTnZiblJoYVc1eklIUm9aU0JwZEdWdGN5QjBhR0YwSUhCaGMzTmxaQ0JoYm1RZ2RHaGxJSE5sWTI5dVpDQmpiMjUwWVdsdWN5QjBhR1VnYVhSbGJYTWdkR2hoZENCbVlXbHNaV1F1WEc1Y2RDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1p1SUVaMWJtTjBhVzl1SUhWelpXUWdkRzhnZEdWemRDQW9jMmh2ZFd4a0lISmxkSFZ5YmlCaElHSnZiMnhsWVc0cFhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ1czUm9hWE5CY21kZElGWmhiSFZsSUhSdklIVnpaU0JoY3lCZ2RHaHBjMkFnZDJobGJpQmxlR1ZqZFhScGJtY2dablZ1WTNScGIyNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwTnZiR3hsWTNScGIyNWJYWDFjYmx4MElDb2dRR1Y0WVcxd2JHVWdZMjl1YzNRZ1cySnBaeXdnYzIxaGJHeGRJRDBnWTI5c2JHVmpkR2x2Ymk1d1lYSjBhWFJwYjI0b1ozVnBiR1FnUFQ0Z1ozVnBiR1F1YldWdFltVnlRMjkxYm5RZ1BpQXlOVEFwTzF4dVhIUWdLaTljYmx4MGNIVmliR2xqSUhCaGNuUnBkR2x2YmlobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUdKdmIyeGxZVzRwT2lCYmRHaHBjeXdnZEdocGMxMDdYRzVjZEhCMVlteHBZeUJ3WVhKMGFYUnBiMjQ4VkQ0b1ptNDZJQ2gwYUdsek9pQlVMQ0IyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCaWIyOXNaV0Z1TENCMGFHbHpRWEpuT2lCVUtUb2dXM1JvYVhNc0lIUm9hWE5kTzF4dVhIUndkV0pzYVdNZ2NHRnlkR2wwYVc5dUtHWnVPaUFvZG1Gc2RXVTZJRllzSUd0bGVUb2dTeXdnWTI5c2JHVmpkR2x2YmpvZ2RHaHBjeWtnUFQ0Z1ltOXZiR1ZoYml3Z2RHaHBjMEZ5Wno4NklIVnVhMjV2ZDI0cE9pQmJkR2hwY3l3Z2RHaHBjMTBnZTF4dVhIUmNkR2xtSUNoMGVYQmxiMllnZEdocGMwRnlaeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJR1p1SUQwZ1ptNHVZbWx1WkNoMGFHbHpRWEpuS1R0Y2JseDBYSFF2THlCVVQwUlBPaUJqYjI1emFXUmxjaUJ5WlcxdmRtbHVaeUIwYUdVZ1BFc3NJRlkrSUdaeWIyMGdkR2hsSUdOdmJuTjBjblZqZEc5eWN5QmhablJsY2lCVVV5QXpMamN1TUNCcGN5QnlaV3hsWVhObFpDd2dZWE1nYVhRZ2FXNW1aWEp6SUdsMFhHNWNkRngwWTI5dWMzUWdjbVZ6ZFd4MGN6b2dXM1JvYVhNc0lIUm9hWE5kSUQwZ1cyNWxkeUIwYUdsekxtTnZibk4wY25WamRHOXlXMU41YldKdmJDNXpjR1ZqYVdWelhUeExMQ0JXUGlncElHRnpJSFJvYVhNc0lHNWxkeUIwYUdsekxtTnZibk4wY25WamRHOXlXMU41YldKdmJDNXpjR1ZqYVdWelhUeExMQ0JXUGlncElHRnpJSFJvYVhOZE8xeHVYSFJjZEdadmNpQW9ZMjl1YzNRZ1cydGxlU3dnZG1Gc1hTQnZaaUIwYUdsektTQjdYRzVjZEZ4MFhIUnBaaUFvWm00b2RtRnNMQ0JyWlhrc0lIUm9hWE1wS1NCN1hHNWNkRngwWEhSY2RISmxjM1ZzZEhOYk1GMHVjMlYwS0d0bGVTd2dkbUZzS1R0Y2JseDBYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFJjZEhKbGMzVnNkSE5iTVYwdWMyVjBLR3RsZVN3Z2RtRnNLVHRjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEZ4MGNtVjBkWEp1SUhKbGMzVnNkSE03WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1RXRndjeUJsWVdOb0lHbDBaVzBnYVc1MGJ5QmhJRU52Ykd4bFkzUnBiMjRzSUhSb1pXNGdhbTlwYm5NZ2RHaGxJSEpsYzNWc2RITWdhVzUwYnlCaElITnBibWRzWlNCRGIyeHNaV04wYVc5dUxpQkpaR1Z1ZEdsallXd2dhVzRnWW1Wb1lYWnBiM0lnZEc5Y2JseDBJQ29nVzBGeWNtRjVMbVpzWVhSTllYQW9LVjBvYUhSMGNITTZMeTlrWlhabGJHOXdaWEl1Ylc5NmFXeHNZUzV2Y21jdlpXNHRWVk12Wkc5amN5OVhaV0l2U21GMllWTmpjbWx3ZEM5U1pXWmxjbVZ1WTJVdlIyeHZZbUZzWDA5aWFtVmpkSE12UVhKeVlYa3ZabXhoZEUxaGNDa3VYRzVjZENBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWnVJRVoxYm1OMGFXOXVJSFJvWVhRZ2NISnZaSFZqWlhNZ1lTQnVaWGNnUTI5c2JHVmpkR2x2Ymx4dVhIUWdLaUJBY0dGeVlXMGdleXA5SUZ0MGFHbHpRWEpuWFNCV1lXeDFaU0IwYnlCMWMyVWdZWE1nWUhSb2FYTmdJSGRvWlc0Z1pYaGxZM1YwYVc1bklHWjFibU4wYVc5dVhHNWNkQ0FxSUVCeVpYUjFjbTV6SUh0RGIyeHNaV04wYVc5dWZWeHVYSFFnS2lCQVpYaGhiWEJzWlNCamIyeHNaV04wYVc5dUxtWnNZWFJOWVhBb1ozVnBiR1FnUFQ0Z1ozVnBiR1F1YldWdFltVnljeWs3WEc1Y2RDQXFMMXh1WEhSd2RXSnNhV01nWm14aGRFMWhjRHhVUGlobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUVOdmJHeGxZM1JwYjI0OFN5d2dWRDRwT2lCRGIyeHNaV04wYVc5dVBFc3NJRlErTzF4dVhIUndkV0pzYVdNZ1pteGhkRTFoY0R4VUxDQlVhR2x6UGlobWJqb2dLSFJvYVhNNklGUm9hWE1zSUhaaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lFTnZiR3hsWTNScGIyNDhTeXdnVkQ0c0lIUm9hWE5CY21jNklGUm9hWE1wT2lCRGIyeHNaV04wYVc5dVBFc3NJRlErTzF4dVhIUndkV0pzYVdNZ1pteGhkRTFoY0R4VVBpaG1iam9nS0haaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lFTnZiR3hsWTNScGIyNDhTeXdnVkQ0c0lIUm9hWE5CY21jL09pQjFibXR1YjNkdUtUb2dRMjlzYkdWamRHbHZianhMTENCVVBpQjdYRzVjZEZ4MFkyOXVjM1FnWTI5c2JHVmpkR2x2Ym5NZ1BTQjBhR2x6TG0xaGNDaG1iaXdnZEdocGMwRnlaeWs3WEc1Y2RGeDBjbVYwZFhKdUlDaHVaWGNnZEdocGN5NWpiMjV6ZEhKMVkzUnZjbHRUZVcxaWIyd3VjM0JsWTJsbGMxMDhTeXdnVkQ0b0tTQmhjeUJEYjJ4c1pXTjBhVzl1UEVzc0lGUStLUzVqYjI1allYUW9MaTR1WTI5c2JHVmpkR2x2Ym5NcE8xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRTFoY0hNZ1pXRmphQ0JwZEdWdElIUnZJR0Z1YjNSb1pYSWdkbUZzZFdVZ2FXNTBieUJoYmlCaGNuSmhlUzRnU1dSbGJuUnBZMkZzSUdsdUlHSmxhR0YyYVc5eUlIUnZYRzVjZENBcUlGdEJjbkpoZVM1dFlYQW9LVjBvYUhSMGNITTZMeTlrWlhabGJHOXdaWEl1Ylc5NmFXeHNZUzV2Y21jdlpXNHRWVk12Wkc5amN5OVhaV0l2U21GMllWTmpjbWx3ZEM5U1pXWmxjbVZ1WTJVdlIyeHZZbUZzWDA5aWFtVmpkSE12UVhKeVlYa3ZiV0Z3S1M1Y2JseDBJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWm00Z1JuVnVZM1JwYjI0Z2RHaGhkQ0J3Y205a2RXTmxjeUJoYmlCbGJHVnRaVzUwSUc5bUlIUm9aU0J1WlhjZ1lYSnlZWGtzSUhSaGEybHVaeUIwYUhKbFpTQmhjbWQxYldWdWRITmNibHgwSUNvZ1FIQmhjbUZ0SUhzcWZTQmJkR2hwYzBGeVoxMGdWbUZzZFdVZ2RHOGdkWE5sSUdGeklHQjBhR2x6WUNCM2FHVnVJR1Y0WldOMWRHbHVaeUJtZFc1amRHbHZibHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdRWEp5WVhsOVhHNWNkQ0FxSUVCbGVHRnRjR3hsSUdOdmJHeGxZM1JwYjI0dWJXRndLSFZ6WlhJZ1BUNGdkWE5sY2k1MFlXY3BPMXh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJRzFoY0R4VVBpaG1iam9nS0haaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lGUXBPaUJVVzEwN1hHNWNkSEIxWW14cFl5QnRZWEE4VkdocGN5d2dWRDRvWm00NklDaDBhR2x6T2lCVWFHbHpMQ0IyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCVUxDQjBhR2x6UVhKbk9pQlVhR2x6S1RvZ1ZGdGRPMXh1WEhSd2RXSnNhV01nYldGd1BGUStLR1p1T2lBb2RtRnNkV1U2SUZZc0lHdGxlVG9nU3l3Z1kyOXNiR1ZqZEdsdmJqb2dkR2hwY3lrZ1BUNGdWQ3dnZEdocGMwRnlaejg2SUhWdWEyNXZkMjRwT2lCVVcxMGdlMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdkR2hwYzBGeVp5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElHWnVJRDBnWm00dVltbHVaQ2gwYUdselFYSm5LVHRjYmx4MFhIUmpiMjV6ZENCcGRHVnlJRDBnZEdocGN5NWxiblJ5YVdWektDazdYRzVjZEZ4MGNtVjBkWEp1SUVGeWNtRjVMbVp5YjIwb2V5QnNaVzVuZEdnNklIUm9hWE11YzJsNlpTQjlMQ0FvS1RvZ1ZDQTlQaUI3WEc1Y2RGeDBYSFJqYjI1emRDQmJhMlY1TENCMllXeDFaVjBnUFNCcGRHVnlMbTVsZUhRb0tTNTJZV3gxWlR0Y2JseDBYSFJjZEhKbGRIVnliaUJtYmloMllXeDFaU3dnYTJWNUxDQjBhR2x6S1R0Y2JseDBYSFI5S1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQk5ZWEJ6SUdWaFkyZ2dhWFJsYlNCMGJ5QmhibTkwYUdWeUlIWmhiSFZsSUdsdWRHOGdZU0JqYjJ4c1pXTjBhVzl1TGlCSlpHVnVkR2xqWVd3Z2FXNGdZbVZvWVhacGIzSWdkRzljYmx4MElDb2dXMEZ5Y21GNUxtMWhjQ2dwWFNob2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTFWVXk5a2IyTnpMMWRsWWk5S1lYWmhVMk55YVhCMEwxSmxabVZ5Wlc1alpTOUhiRzlpWVd4ZlQySnFaV04wY3k5QmNuSmhlUzl0WVhBcExseHVYSFFnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQkdkVzVqZEdsdmJpQjBhR0YwSUhCeWIyUjFZMlZ6SUdGdUlHVnNaVzFsYm5RZ2IyWWdkR2hsSUc1bGR5QmpiMnhzWldOMGFXOXVMQ0IwWVd0cGJtY2dkR2h5WldVZ1lYSm5kVzFsYm5SelhHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ1czUm9hWE5CY21kZElGWmhiSFZsSUhSdklIVnpaU0JoY3lCZ2RHaHBjMkFnZDJobGJpQmxlR1ZqZFhScGJtY2dablZ1WTNScGIyNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwTnZiR3hsWTNScGIyNTlYRzVjZENBcUlFQmxlR0Z0Y0d4bElHTnZiR3hsWTNScGIyNHViV0Z3Vm1Gc2RXVnpLSFZ6WlhJZ1BUNGdkWE5sY2k1MFlXY3BPMXh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJRzFoY0ZaaGJIVmxjenhVUGlobWJqb2dLSFpoYkhWbE9pQldMQ0JyWlhrNklFc3NJR052Ykd4bFkzUnBiMjQ2SUhSb2FYTXBJRDArSUZRcE9pQkRiMnhzWldOMGFXOXVQRXNzSUZRK08xeHVYSFJ3ZFdKc2FXTWdiV0Z3Vm1Gc2RXVnpQRlJvYVhNc0lGUStLR1p1T2lBb2RHaHBjem9nVkdocGN5d2dkbUZzZFdVNklGWXNJR3RsZVRvZ1N5d2dZMjlzYkdWamRHbHZiam9nZEdocGN5a2dQVDRnVkN3Z2RHaHBjMEZ5WnpvZ1ZHaHBjeWs2SUVOdmJHeGxZM1JwYjI0OFN5d2dWRDQ3WEc1Y2RIQjFZbXhwWXlCdFlYQldZV3gxWlhNOFZENG9abTQ2SUNoMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQlVMQ0IwYUdselFYSm5Qem9nZFc1cmJtOTNiaWs2SUVOdmJHeGxZM1JwYjI0OFN5d2dWRDRnZTF4dVhIUmNkR2xtSUNoMGVYQmxiMllnZEdocGMwRnlaeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJR1p1SUQwZ1ptNHVZbWx1WkNoMGFHbHpRWEpuS1R0Y2JseDBYSFJqYjI1emRDQmpiMnhzSUQwZ2JtVjNJSFJvYVhNdVkyOXVjM1J5ZFdOMGIzSmJVM2x0WW05c0xuTndaV05wWlhOZFBFc3NJRlErS0NrZ1lYTWdRMjlzYkdWamRHbHZianhMTENCVVBqdGNibHgwWEhSbWIzSWdLR052Ym5OMElGdHJaWGtzSUhaaGJGMGdiMllnZEdocGN5a2dZMjlzYkM1elpYUW9hMlY1TENCbWJpaDJZV3dzSUd0bGVTd2dkR2hwY3lrcE8xeHVYSFJjZEhKbGRIVnliaUJqYjJ4c08xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRU5vWldOcmN5QnBaaUIwYUdWeVpTQmxlR2x6ZEhNZ1lXNGdhWFJsYlNCMGFHRjBJSEJoYzNObGN5QmhJSFJsYzNRdUlFbGtaVzUwYVdOaGJDQnBiaUJpWldoaGRtbHZjaUIwYjF4dVhIUWdLaUJiUVhKeVlYa3VjMjl0WlNncFhTaG9kSFJ3Y3pvdkwyUmxkbVZzYjNCbGNpNXRiM3BwYkd4aExtOXlaeTlsYmkxVlV5OWtiMk56TDFkbFlpOUtZWFpoVTJOeWFYQjBMMUpsWm1WeVpXNWpaUzlIYkc5aVlXeGZUMkpxWldOMGN5OUJjbkpoZVM5emIyMWxLUzVjYmx4MElDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnUm5WdVkzUnBiMjRnZFhObFpDQjBieUIwWlhOMElDaHphRzkxYkdRZ2NtVjBkWEp1SUdFZ1ltOXZiR1ZoYmlsY2JseDBJQ29nUUhCaGNtRnRJSHNxZlNCYmRHaHBjMEZ5WjEwZ1ZtRnNkV1VnZEc4Z2RYTmxJR0Z6SUdCMGFHbHpZQ0IzYUdWdUlHVjRaV04xZEdsdVp5Qm1kVzVqZEdsdmJseHVYSFFnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4xY2JseDBJQ29nUUdWNFlXMXdiR1VnWTI5c2JHVmpkR2x2Ymk1emIyMWxLSFZ6WlhJZ1BUNGdkWE5sY2k1a2FYTmpjbWx0YVc1aGRHOXlJRDA5UFNBbk1EQXdNQ2NwTzF4dVhIUWdLaTljYmx4MGNIVmliR2xqSUhOdmJXVW9abTQ2SUNoMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQmliMjlzWldGdUtUb2dZbTl2YkdWaGJqdGNibHgwY0hWaWJHbGpJSE52YldVOFZENG9abTQ2SUNoMGFHbHpPaUJVTENCMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQmliMjlzWldGdUxDQjBhR2x6UVhKbk9pQlVLVG9nWW05dmJHVmhianRjYmx4MGNIVmliR2xqSUhOdmJXVW9abTQ2SUNoMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQmliMjlzWldGdUxDQjBhR2x6UVhKblB6b2dkVzVyYm05M2JpazZJR0p2YjJ4bFlXNGdlMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdkR2hwYzBGeVp5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElHWnVJRDBnWm00dVltbHVaQ2gwYUdselFYSm5LVHRjYmx4MFhIUm1iM0lnS0dOdmJuTjBJRnRyWlhrc0lIWmhiRjBnYjJZZ2RHaHBjeWtnZTF4dVhIUmNkRngwYVdZZ0tHWnVLSFpoYkN3Z2EyVjVMQ0IwYUdsektTa2djbVYwZFhKdUlIUnlkV1U3WEc1Y2RGeDBmVnh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCRGFHVmphM01nYVdZZ1lXeHNJR2wwWlcxeklIQmhjM05sY3lCaElIUmxjM1F1SUVsa1pXNTBhV05oYkNCcGJpQmlaV2hoZG1sdmNpQjBiMXh1WEhRZ0tpQmJRWEp5WVhrdVpYWmxjbmtvS1Ywb2FIUjBjSE02THk5a1pYWmxiRzl3WlhJdWJXOTZhV3hzWVM1dmNtY3ZaVzR0VlZNdlpHOWpjeTlYWldJdlNtRjJZVk5qY21sd2RDOVNaV1psY21WdVkyVXZSMnh2WW1Gc1gwOWlhbVZqZEhNdlFYSnlZWGt2WlhabGNua3BMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1iaUJHZFc1amRHbHZiaUIxYzJWa0lIUnZJSFJsYzNRZ0tITm9iM1ZzWkNCeVpYUjFjbTRnWVNCaWIyOXNaV0Z1S1Z4dVhIUWdLaUJBY0dGeVlXMGdleXA5SUZ0MGFHbHpRWEpuWFNCV1lXeDFaU0IwYnlCMWMyVWdZWE1nWUhSb2FYTmdJSGRvWlc0Z1pYaGxZM1YwYVc1bklHWjFibU4wYVc5dVhHNWNkQ0FxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlZ4dVhIUWdLaUJBWlhoaGJYQnNaU0JqYjJ4c1pXTjBhVzl1TG1WMlpYSjVLSFZ6WlhJZ1BUNGdJWFZ6WlhJdVltOTBLVHRjYmx4MElDb3ZYRzVjZEhCMVlteHBZeUJsZG1WeWVTaG1iam9nS0haaGJIVmxPaUJXTENCclpYazZJRXNzSUdOdmJHeGxZM1JwYjI0NklIUm9hWE1wSUQwK0lHSnZiMnhsWVc0cE9pQmliMjlzWldGdU8xeHVYSFJ3ZFdKc2FXTWdaWFpsY25rOFZENG9abTQ2SUNoMGFHbHpPaUJVTENCMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQmliMjlzWldGdUxDQjBhR2x6UVhKbk9pQlVLVG9nWW05dmJHVmhianRjYmx4MGNIVmliR2xqSUdWMlpYSjVLR1p1T2lBb2RtRnNkV1U2SUZZc0lHdGxlVG9nU3l3Z1kyOXNiR1ZqZEdsdmJqb2dkR2hwY3lrZ1BUNGdZbTl2YkdWaGJpd2dkR2hwYzBGeVp6ODZJSFZ1YTI1dmQyNHBPaUJpYjI5c1pXRnVJSHRjYmx4MFhIUnBaaUFvZEhsd1pXOW1JSFJvYVhOQmNtY2dJVDA5SUNkMWJtUmxabWx1WldRbktTQm1iaUE5SUdadUxtSnBibVFvZEdocGMwRnlaeWs3WEc1Y2RGeDBabTl5SUNoamIyNXpkQ0JiYTJWNUxDQjJZV3hkSUc5bUlIUm9hWE1wSUh0Y2JseDBYSFJjZEdsbUlDZ2habTRvZG1Gc0xDQnJaWGtzSUhSb2FYTXBLU0J5WlhSMWNtNGdabUZzYzJVN1hHNWNkRngwZlZ4dVhIUmNkSEpsZEhWeWJpQjBjblZsTzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFRndjR3hwWlhNZ1lTQm1kVzVqZEdsdmJpQjBieUJ3Y205a2RXTmxJR0VnYzJsdVoyeGxJSFpoYkhWbExpQkpaR1Z1ZEdsallXd2dhVzRnWW1Wb1lYWnBiM0lnZEc5Y2JseDBJQ29nVzBGeWNtRjVMbkpsWkhWalpTZ3BYU2hvZEhSd2N6b3ZMMlJsZG1Wc2IzQmxjaTV0YjNwcGJHeGhMbTl5Wnk5bGJpMVZVeTlrYjJOekwxZGxZaTlLWVhaaFUyTnlhWEIwTDFKbFptVnlaVzVqWlM5SGJHOWlZV3hmVDJKcVpXTjBjeTlCY25KaGVTOXlaV1IxWTJVcExseHVYSFFnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCbWJpQkdkVzVqZEdsdmJpQjFjMlZrSUhSdklISmxaSFZqWlN3Z2RHRnJhVzVuSUdadmRYSWdZWEpuZFcxbGJuUnpPeUJnWVdOamRXMTFiR0YwYjNKZ0xDQmdZM1Z5Y21WdWRGWmhiSFZsWUN3Z1lHTjFjbkpsYm5STFpYbGdMRnh1WEhRZ0tpQmhibVFnWUdOdmJHeGxZM1JwYjI1Z1hHNWNkQ0FxSUVCd1lYSmhiU0I3S24wZ1cybHVhWFJwWVd4V1lXeDFaVjBnVTNSaGNuUnBibWNnZG1Gc2RXVWdabTl5SUhSb1pTQmhZMk4xYlhWc1lYUnZjbHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdLbjFjYmx4MElDb2dRR1Y0WVcxd2JHVWdZMjlzYkdWamRHbHZiaTV5WldSMVkyVW9LR0ZqWXl3Z1ozVnBiR1FwSUQwK0lHRmpZeUFySUdkMWFXeGtMbTFsYldKbGNrTnZkVzUwTENBd0tUdGNibHgwSUNvdlhHNWNkSEIxWW14cFl5QnlaV1IxWTJVOFZENG9abTQ2SUNoaFkyTjFiWFZzWVhSdmNqb2dWQ3dnZG1Gc2RXVTZJRllzSUd0bGVUb2dTeXdnWTI5c2JHVmpkR2x2YmpvZ2RHaHBjeWtnUFQ0Z1ZDd2dhVzVwZEdsaGJGWmhiSFZsUHpvZ1ZDazZJRlFnZTF4dVhIUmNkR3hsZENCaFkyTjFiWFZzWVhSdmNpRTZJRlE3WEc1Y2JseDBYSFJwWmlBb2RIbHdaVzltSUdsdWFYUnBZV3hXWVd4MVpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNibHgwWEhSY2RHRmpZM1Z0ZFd4aGRHOXlJRDBnYVc1cGRHbGhiRlpoYkhWbE8xeHVYSFJjZEZ4MFptOXlJQ2hqYjI1emRDQmJhMlY1TENCMllXeGRJRzltSUhSb2FYTXBJR0ZqWTNWdGRXeGhkRzl5SUQwZ1ptNG9ZV05qZFcxMWJHRjBiM0lzSUhaaGJDd2dhMlY1TENCMGFHbHpLVHRjYmx4MFhIUmNkSEpsZEhWeWJpQmhZMk4xYlhWc1lYUnZjanRjYmx4MFhIUjlYRzVjZEZ4MGJHVjBJR1pwY25OMElEMGdkSEoxWlR0Y2JseDBYSFJtYjNJZ0tHTnZibk4wSUZ0clpYa3NJSFpoYkYwZ2IyWWdkR2hwY3lrZ2UxeHVYSFJjZEZ4MGFXWWdLR1pwY25OMEtTQjdYRzVjZEZ4MFhIUmNkR0ZqWTNWdGRXeGhkRzl5SUQwZ2RtRnNJR0Z6SUhWdWEyNXZkMjRnWVhNZ1ZEdGNibHgwWEhSY2RGeDBabWx5YzNRZ1BTQm1ZV3h6WlR0Y2JseDBYSFJjZEZ4MFkyOXVkR2x1ZFdVN1hHNWNkRngwWEhSOVhHNWNkRngwWEhSaFkyTjFiWFZzWVhSdmNpQTlJR1p1S0dGalkzVnRkV3hoZEc5eUxDQjJZV3dzSUd0bGVTd2dkR2hwY3lrN1hHNWNkRngwZlZ4dVhHNWNkRngwTHk4Z1RtOGdhWFJsYlhNZ2FYUmxjbUYwWldRdVhHNWNkRngwYVdZZ0tHWnBjbk4wS1NCN1hHNWNkRngwWEhSMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZFNaV1IxWTJVZ2IyWWdaVzF3ZEhrZ1kyOXNiR1ZqZEdsdmJpQjNhWFJvSUc1dklHbHVhWFJwWVd3Z2RtRnNkV1VuS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdZV05qZFcxMWJHRjBiM0k3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1NXUmxiblJwWTJGc0lIUnZYRzVjZENBcUlGdE5ZWEF1Wm05eVJXRmphQ2dwWFNob2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTFWVXk5a2IyTnpMMWRsWWk5S1lYWmhVMk55YVhCMEwxSmxabVZ5Wlc1alpTOUhiRzlpWVd4ZlQySnFaV04wY3k5TllYQXZabTl5UldGamFDa3NYRzVjZENBcUlHSjFkQ0J5WlhSMWNtNXpJSFJvWlNCamIyeHNaV04wYVc5dUlHbHVjM1JsWVdRZ2IyWWdkVzVrWldacGJtVmtMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1iaUJHZFc1amRHbHZiaUIwYnlCbGVHVmpkWFJsSUdadmNpQmxZV05vSUdWc1pXMWxiblJjYmx4MElDb2dRSEJoY21GdElIc3FmU0JiZEdocGMwRnlaMTBnVm1Gc2RXVWdkRzhnZFhObElHRnpJR0IwYUdsellDQjNhR1Z1SUdWNFpXTjFkR2x1WnlCbWRXNWpkR2x2Ymx4dVhIUWdLaUJBY21WMGRYSnVjeUI3UTI5c2JHVmpkR2x2Ym4xY2JseDBJQ29nUUdWNFlXMXdiR1ZjYmx4MElDb2dZMjlzYkdWamRHbHZibHh1WEhRZ0tpQWdMbVZoWTJnb2RYTmxjaUE5UGlCamIyNXpiMnhsTG14dlp5aDFjMlZ5TG5WelpYSnVZVzFsS1NsY2JseDBJQ29nSUM1bWFXeDBaWElvZFhObGNpQTlQaUIxYzJWeUxtSnZkQ2xjYmx4MElDb2dJQzVsWVdOb0tIVnpaWElnUFQ0Z1kyOXVjMjlzWlM1c2IyY29kWE5sY2k1MWMyVnlibUZ0WlNrcE8xeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklHVmhZMmdvWm00NklDaDJZV3gxWlRvZ1Zpd2dhMlY1T2lCTExDQmpiMnhzWldOMGFXOXVPaUIwYUdsektTQTlQaUIyYjJsa0tUb2dkR2hwY3p0Y2JseDBjSFZpYkdsaklHVmhZMmc4VkQ0b1ptNDZJQ2gwYUdsek9pQlVMQ0IyWVd4MVpUb2dWaXdnYTJWNU9pQkxMQ0JqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCMmIybGtMQ0IwYUdselFYSm5PaUJVS1RvZ2RHaHBjenRjYmx4MGNIVmliR2xqSUdWaFkyZ29abTQ2SUNoMllXeDFaVG9nVml3Z2EyVjVPaUJMTENCamIyeHNaV04wYVc5dU9pQjBhR2x6S1NBOVBpQjJiMmxrTENCMGFHbHpRWEpuUHpvZ2RXNXJibTkzYmlrNklIUm9hWE1nZTF4dVhIUmNkSFJvYVhNdVptOXlSV0ZqYUNobWJpQmhjeUFvZG1Gc2RXVTZJRllzSUd0bGVUb2dTeXdnYldGd09pQk5ZWEE4U3l3Z1ZqNHBJRDArSUhadmFXUXNJSFJvYVhOQmNtY3BPMXh1WEhSY2RISmxkSFZ5YmlCMGFHbHpPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUZKMWJuTWdZU0JtZFc1amRHbHZiaUJ2YmlCMGFHVWdZMjlzYkdWamRHbHZiaUJoYm1RZ2NtVjBkWEp1Y3lCMGFHVWdZMjlzYkdWamRHbHZiaTVjYmx4MElDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnUm5WdVkzUnBiMjRnZEc4Z1pYaGxZM1YwWlZ4dVhIUWdLaUJBY0dGeVlXMGdleXA5SUZ0MGFHbHpRWEpuWFNCV1lXeDFaU0IwYnlCMWMyVWdZWE1nWUhSb2FYTmdJSGRvWlc0Z1pYaGxZM1YwYVc1bklHWjFibU4wYVc5dVhHNWNkQ0FxSUVCeVpYUjFjbTV6SUh0RGIyeHNaV04wYVc5dWZWeHVYSFFnS2lCQVpYaGhiWEJzWlZ4dVhIUWdLaUJqYjJ4c1pXTjBhVzl1WEc1Y2RDQXFJQ0F1ZEdGd0tHTnZiR3dnUFQ0Z1kyOXVjMjlzWlM1c2IyY29ZMjlzYkM1emFYcGxLU2xjYmx4MElDb2dJQzVtYVd4MFpYSW9kWE5sY2lBOVBpQjFjMlZ5TG1KdmRDbGNibHgwSUNvZ0lDNTBZWEFvWTI5c2JDQTlQaUJqYjI1emIyeGxMbXh2WnloamIyeHNMbk5wZW1VcEtWeHVYSFFnS2k5Y2JseDBjSFZpYkdsaklIUmhjQ2htYmpvZ0tHTnZiR3hsWTNScGIyNDZJSFJvYVhNcElEMCtJSFp2YVdRcE9pQjBhR2x6TzF4dVhIUndkV0pzYVdNZ2RHRndQRlErS0dadU9pQW9kR2hwY3pvZ1ZDd2dZMjlzYkdWamRHbHZiam9nZEdocGN5a2dQVDRnZG05cFpDd2dkR2hwYzBGeVp6b2dWQ2s2SUhSb2FYTTdYRzVjZEhCMVlteHBZeUIwWVhBb1ptNDZJQ2hqYjJ4c1pXTjBhVzl1T2lCMGFHbHpLU0E5UGlCMmIybGtMQ0IwYUdselFYSm5Qem9nZFc1cmJtOTNiaWs2SUhSb2FYTWdlMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdkR2hwYzBGeVp5QWhQVDBnSjNWdVpHVm1hVzVsWkNjcElHWnVJRDBnWm00dVltbHVaQ2gwYUdselFYSm5LVHRjYmx4MFhIUm1iaWgwYUdsektUdGNibHgwWEhSeVpYUjFjbTRnZEdocGN6dGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUWdLaUJEY21WaGRHVnpJR0Z1SUdsa1pXNTBhV05oYkNCemFHRnNiRzkzSUdOdmNIa2diMllnZEdocGN5QmpiMnhzWldOMGFXOXVMbHh1WEhRZ0tpQkFjbVYwZFhKdWN5QjdRMjlzYkdWamRHbHZibjFjYmx4MElDb2dRR1Y0WVcxd2JHVWdZMjl1YzNRZ2JtVjNRMjlzYkNBOUlITnZiV1ZEYjJ4c0xtTnNiMjVsS0NrN1hHNWNkQ0FxTDF4dVhIUndkV0pzYVdNZ1kyeHZibVVvS1RvZ2RHaHBjeUI3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUIwYUdsekxtTnZibk4wY25WamRHOXlXMU41YldKdmJDNXpjR1ZqYVdWelhTaDBhR2x6S1NCaGN5QjBhR2x6TzF4dVhIUjlYRzVjYmx4MEx5b3FYRzVjZENBcUlFTnZiV0pwYm1WeklIUm9hWE1nWTI5c2JHVmpkR2x2YmlCM2FYUm9JRzkwYUdWeWN5QnBiblJ2SUdFZ2JtVjNJR052Ykd4bFkzUnBiMjR1SUU1dmJtVWdiMllnZEdobElITnZkWEpqWlNCamIyeHNaV04wYVc5dWN5QmhjbVVnYlc5a2FXWnBaV1F1WEc1Y2RDQXFJRUJ3WVhKaGJTQjdMaTR1UTI5c2JHVmpkR2x2Ym4wZ1kyOXNiR1ZqZEdsdmJuTWdRMjlzYkdWamRHbHZibk1nZEc4Z2JXVnlaMlZjYmx4MElDb2dRSEpsZEhWeWJuTWdlME52Ykd4bFkzUnBiMjU5WEc1Y2RDQXFJRUJsZUdGdGNHeGxJR052Ym5OMElHNWxkME52Ykd3Z1BTQnpiMjFsUTI5c2JDNWpiMjVqWVhRb2MyOXRaVTkwYUdWeVEyOXNiQ3dnWVc1dmRHaGxja052Ykd3c0lHOW9RbTk1UVVOdmJHd3BPMXh1WEhRZ0tpOWNibHgwY0hWaWJHbGpJR052Ym1OaGRDZ3VMaTVqYjJ4c1pXTjBhVzl1Y3pvZ1EyOXNiR1ZqZEdsdmJqeExMQ0JXUGx0ZEtUb2dkR2hwY3lCN1hHNWNkRngwWTI5dWMzUWdibVYzUTI5c2JDQTlJSFJvYVhNdVkyeHZibVVvS1R0Y2JseDBYSFJtYjNJZ0tHTnZibk4wSUdOdmJHd2diMllnWTI5c2JHVmpkR2x2Ym5NcElIdGNibHgwWEhSY2RHWnZjaUFvWTI5dWMzUWdXMnRsZVN3Z2RtRnNYU0J2WmlCamIyeHNLU0J1WlhkRGIyeHNMbk5sZENoclpYa3NJSFpoYkNrN1hHNWNkRngwZlZ4dVhIUmNkSEpsZEhWeWJpQnVaWGREYjJ4c08xeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRU5vWldOcmN5QnBaaUIwYUdseklHTnZiR3hsWTNScGIyNGdjMmhoY21WeklHbGtaVzUwYVdOaGJDQnBkR1Z0Y3lCM2FYUm9JR0Z1YjNSb1pYSXVYRzVjZENBcUlGUm9hWE1nYVhNZ1pHbG1abVZ5Wlc1MElIUnZJR05vWldOcmFXNW5JR1p2Y2lCbGNYVmhiR2wwZVNCMWMybHVaeUJsY1hWaGJDMXphV2R1Y3l3Z1ltVmpZWFZ6WlZ4dVhIUWdLaUIwYUdVZ1kyOXNiR1ZqZEdsdmJuTWdiV0Y1SUdKbElHUnBabVpsY21WdWRDQnZZbXBsWTNSekxDQmlkWFFnWTI5dWRHRnBiaUIwYUdVZ2MyRnRaU0JrWVhSaExseHVYSFFnS2lCQWNHRnlZVzBnZTBOdmJHeGxZM1JwYjI1OUlHTnZiR3hsWTNScGIyNGdRMjlzYkdWamRHbHZiaUIwYnlCamIyMXdZWEpsSUhkcGRHaGNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGZG9aWFJvWlhJZ2RHaGxJR052Ykd4bFkzUnBiMjV6SUdoaGRtVWdhV1JsYm5ScFkyRnNJR052Ym5SbGJuUnpYRzVjZENBcUwxeHVYSFJ3ZFdKc2FXTWdaWEYxWVd4ektHTnZiR3hsWTNScGIyNDZJRU52Ykd4bFkzUnBiMjQ4U3l3Z1ZqNHBPaUJpYjI5c1pXRnVJSHRjYmx4MFhIUnBaaUFvSVdOdmJHeGxZM1JwYjI0cElISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUnBaaUFvZEdocGN5QTlQVDBnWTI5c2JHVmpkR2x2YmlrZ2NtVjBkWEp1SUhSeWRXVTdYRzVjZEZ4MGFXWWdLSFJvYVhNdWMybDZaU0FoUFQwZ1kyOXNiR1ZqZEdsdmJpNXphWHBsS1NCeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEZ4MFptOXlJQ2hqYjI1emRDQmJhMlY1TENCMllXeDFaVjBnYjJZZ2RHaHBjeWtnZTF4dVhIUmNkRngwYVdZZ0tDRmpiMnhzWldOMGFXOXVMbWhoY3loclpYa3BJSHg4SUhaaGJIVmxJQ0U5UFNCamIyeHNaV04wYVc5dUxtZGxkQ2hyWlhrcEtTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RGeDBjbVYwZFhKdUlIUnlkV1U3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ1ZHaGxJSE52Y25RZ2JXVjBhRzlrSUhOdmNuUnpJSFJvWlNCcGRHVnRjeUJ2WmlCaElHTnZiR3hsWTNScGIyNGdhVzRnY0d4aFkyVWdZVzVrSUhKbGRIVnlibk1nYVhRdVhHNWNkQ0FxSUZSb1pTQnpiM0owSUdseklHNXZkQ0J1WldObGMzTmhjbWxzZVNCemRHRmliR1V1SUZSb1pTQmtaV1poZFd4MElITnZjblFnYjNKa1pYSWdhWE1nWVdOamIzSmthVzVuSUhSdklITjBjbWx1WnlCVmJtbGpiMlJsSUdOdlpHVWdjRzlwYm5SekxseHVYSFFnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCYlkyOXRjR0Z5WlVaMWJtTjBhVzl1WFNCVGNHVmphV1pwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUdSbFptbHVaWE1nZEdobElITnZjblFnYjNKa1pYSXVYRzVjZENBcUlFbG1JRzl0YVhSMFpXUXNJSFJvWlNCamIyeHNaV04wYVc5dUlHbHpJSE52Y25SbFpDQmhZMk52Y21ScGJtY2dkRzhnWldGamFDQmphR0Z5WVdOMFpYSW5jeUJWYm1samIyUmxJR052WkdVZ2NHOXBiblFnZG1Gc2RXVXNYRzVjZENBcUlHRmpZMjl5WkdsdVp5QjBieUIwYUdVZ2MzUnlhVzVuSUdOdmJuWmxjbk5wYjI0Z2IyWWdaV0ZqYUNCbGJHVnRaVzUwTGx4dVhIUWdLaUJBY21WMGRYSnVjeUI3UTI5c2JHVmpkR2x2Ym4xY2JseDBJQ29nUUdWNFlXMXdiR1VnWTI5c2JHVmpkR2x2Ymk1emIzSjBLQ2gxYzJWeVFTd2dkWE5sY2tJcElEMCtJSFZ6WlhKQkxtTnlaV0YwWldSVWFXMWxjM1JoYlhBZ0xTQjFjMlZ5UWk1amNtVmhkR1ZrVkdsdFpYTjBZVzF3S1R0Y2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCemIzSjBLR052YlhCaGNtVkdkVzVqZEdsdmJqb2dLR1pwY25OMFZtRnNkV1U2SUZZc0lITmxZMjl1WkZaaGJIVmxPaUJXTENCbWFYSnpkRXRsZVRvZ1N5d2djMlZqYjI1a1MyVjVPaUJMS1NBOVBpQnVkVzFpWlhJZ1BTQW9lQ3dnZVNrNklHNTFiV0psY2lBOVBpQk9kVzFpWlhJb2VDQStJSGtwSUh4OElFNTFiV0psY2loNElEMDlQU0I1S1NBdElERXBPaUIwYUdseklIdGNibHgwWEhSamIyNXpkQ0JsYm5SeWFXVnpJRDBnV3k0dUxuUm9hWE11Wlc1MGNtbGxjeWdwWFR0Y2JseDBYSFJsYm5SeWFXVnpMbk52Y25Rb0tHRXNJR0lwT2lCdWRXMWlaWElnUFQ0Z1kyOXRjR0Z5WlVaMWJtTjBhVzl1S0dGYk1WMHNJR0piTVYwc0lHRmJNRjBzSUdKYk1GMHBLVHRjYmx4dVhIUmNkQzh2SUZCbGNtWnZjbTBnWTJ4bFlXNHRkWEJjYmx4MFhIUnpkWEJsY2k1amJHVmhjaWdwTzF4dVhIUmNkSFJvYVhNdVgyRnljbUY1SUQwZ2JuVnNiRHRjYmx4MFhIUjBhR2x6TGw5clpYbEJjbkpoZVNBOUlHNTFiR3c3WEc1Y2JseDBYSFF2THlCVFpYUWdkR2hsSUc1bGR5QmxiblJ5YVdWelhHNWNkRngwWm05eUlDaGpiMjV6ZENCYmF5d2dkbDBnYjJZZ1pXNTBjbWxsY3lrZ2UxeHVYSFJjZEZ4MGMzVndaWEl1YzJWMEtHc3NJSFlwTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2RHaHBjenRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFnS2lCVWFHVWdhVzUwWlhKelpXTjBJRzFsZEdodlpDQnlaWFIxY201eklHRWdibVYzSUhOMGNuVmpkSFZ5WlNCamIyNTBZV2x1YVc1bklHbDBaVzF6SUhkb1pYSmxJSFJvWlNCclpYbHpJR0Z5WlNCd2NtVnpaVzUwSUdsdUlHSnZkR2dnYjNKcFoybHVZV3dnYzNSeWRXTjBkWEpsY3k1Y2JseDBJQ29nUUhCaGNtRnRJSHREYjJ4c1pXTjBhVzl1ZlNCdmRHaGxjaUJVYUdVZ2IzUm9aWElnUTI5c2JHVmpkR2x2YmlCMGJ5Qm1hV3gwWlhJZ1lXZGhhVzV6ZEZ4dVhIUWdLaUJBY21WMGRYSnVjeUI3UTI5c2JHVmpkR2x2Ym4xY2JseDBJQ292WEc1Y2RIQjFZbXhwWXlCcGJuUmxjbk5sWTNRb2IzUm9aWEk2SUVOdmJHeGxZM1JwYjI0OFN5d2dWajRwT2lCRGIyeHNaV04wYVc5dVBFc3NJRlkrSUh0Y2JseDBYSFJ5WlhSMWNtNGdiM1JvWlhJdVptbHNkR1Z5S0NoZkxDQnJLU0E5UGlCMGFHbHpMbWhoY3locktTazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVkdobElHUnBabVpsY21WdVkyVWdiV1YwYUc5a0lISmxkSFZ5Ym5NZ1lTQnVaWGNnYzNSeWRXTjBkWEpsSUdOdmJuUmhhVzVwYm1jZ2FYUmxiWE1nZDJobGNtVWdkR2hsSUd0bGVTQnBjeUJ3Y21WelpXNTBJR2x1SUc5dVpTQnZaaUIwYUdVZ2IzSnBaMmx1WVd3Z2MzUnlkV04wZFhKbGN5QmlkWFFnYm05MElIUm9aU0J2ZEdobGNpNWNibHgwSUNvZ1FIQmhjbUZ0SUh0RGIyeHNaV04wYVc5dWZTQnZkR2hsY2lCVWFHVWdiM1JvWlhJZ1EyOXNiR1ZqZEdsdmJpQjBieUJtYVd4MFpYSWdZV2RoYVc1emRGeHVYSFFnS2lCQWNtVjBkWEp1Y3lCN1EyOXNiR1ZqZEdsdmJuMWNibHgwSUNvdlhHNWNkSEIxWW14cFl5QmthV1ptWlhKbGJtTmxLRzkwYUdWeU9pQkRiMnhzWldOMGFXOXVQRXNzSUZZK0tUb2dRMjlzYkdWamRHbHZianhMTENCV1BpQjdYRzVjZEZ4MGNtVjBkWEp1SUc5MGFHVnlMbVpwYkhSbGNpZ29YeXdnYXlrZ1BUNGdJWFJvYVhNdWFHRnpLR3NwS1M1amIyNWpZWFFvZEdocGN5NW1hV3gwWlhJb0tGOHNJR3NwSUQwK0lDRnZkR2hsY2k1b1lYTW9heWtwS1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRZ0tpQlVhR1VnYzI5eWRHVmtJRzFsZEdodlpDQnpiM0owY3lCMGFHVWdhWFJsYlhNZ2IyWWdZU0JqYjJ4c1pXTjBhVzl1SUdGdVpDQnlaWFIxY201eklHbDBMbHh1WEhRZ0tpQlVhR1VnYzI5eWRDQnBjeUJ1YjNRZ2JtVmpaWE56WVhKcGJIa2djM1JoWW14bExpQlVhR1VnWkdWbVlYVnNkQ0J6YjNKMElHOXlaR1Z5SUdseklHRmpZMjl5WkdsdVp5QjBieUJ6ZEhKcGJtY2dWVzVwWTI5a1pTQmpiMlJsSUhCdmFXNTBjeTVjYmx4MElDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdXMk52YlhCaGNtVkdkVzVqZEdsdmJsMGdVM0JsWTJsbWFXVnpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQmtaV1pwYm1WeklIUm9aU0J6YjNKMElHOXlaR1Z5TGx4dVhIUWdLaUJKWmlCdmJXbDBkR1ZrTENCMGFHVWdZMjlzYkdWamRHbHZiaUJwY3lCemIzSjBaV1FnWVdOamIzSmthVzVuSUhSdklHVmhZMmdnWTJoaGNtRmpkR1Z5SjNNZ1ZXNXBZMjlrWlNCamIyUmxJSEJ2YVc1MElIWmhiSFZsTEZ4dVhIUWdLaUJoWTJOdmNtUnBibWNnZEc4Z2RHaGxJSE4wY21sdVp5QmpiMjUyWlhKemFXOXVJRzltSUdWaFkyZ2daV3hsYldWdWRDNWNibHgwSUNvZ1FISmxkSFZ5Ym5NZ2UwTnZiR3hsWTNScGIyNTlYRzVjZENBcUlFQmxlR0Z0Y0d4bElHTnZiR3hsWTNScGIyNHVjMjl5ZEdWa0tDaDFjMlZ5UVN3Z2RYTmxja0lwSUQwK0lIVnpaWEpCTG1OeVpXRjBaV1JVYVcxbGMzUmhiWEFnTFNCMWMyVnlRaTVqY21WaGRHVmtWR2x0WlhOMFlXMXdLVHRjYmx4MElDb3ZYRzVjZEhCMVlteHBZeUJ6YjNKMFpXUW9ZMjl0Y0dGeVpVWjFibU4wYVc5dU9pQW9abWx5YzNSV1lXeDFaVG9nVml3Z2MyVmpiMjVrVm1Gc2RXVTZJRllzSUdacGNuTjBTMlY1T2lCTExDQnpaV052Ym1STFpYazZJRXNwSUQwK0lHNTFiV0psY2lBOUlDaDRMQ0I1S1RvZ2JuVnRZbVZ5SUQwK0lFNTFiV0psY2loNElENGdlU2tnZkh3Z1RuVnRZbVZ5S0hnZ1BUMDlJSGtwSUMwZ01TazZJSFJvYVhNZ2UxeHVYSFJjZEhKbGRIVnliaUFvYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNKYlUzbHRZbTlzTG5Od1pXTnBaWE5kS0ZzdUxpNTBhR2x6TG1WdWRISnBaWE1vS1YwcElHRnpJSFJvYVhNcFhHNWNkRngwWEhRdWMyOXlkQ2dvWVhZc0lHSjJMQ0JoYXl3Z1ltc3BJRDArSUdOdmJYQmhjbVZHZFc1amRHbHZiaWhoZGl3Z1luWXNJR0ZyTENCaWF5a3BPMXh1WEhSOVhHNTlYRzVjYm1WNGNHOXlkQ0I3SUVOdmJHeGxZM1JwYjI0Z2ZUdGNibVY0Y0c5eWRDQmtaV1poZFd4MElFTnZiR3hsWTNScGIyNDdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRU52Ykd4bFkzUnBiMjQ3WEc0aVhYMD0iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XHJcbmNvbnN0IERpc2NvcmRKU0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9EaXNjb3JkSlNFcnJvclwiKTtcclxuY29uc3QgY29sbGVjdGlvbl8xID0gcmVxdWlyZShcIkBkaXNjb3JkanMvY29sbGVjdGlvblwiKTtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZFRvTW9kdWxlc1wiKTtcclxuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWwvdXRpbFwiKTtcclxuY29uc3QgQ2xpZW50VXNlcl8xID0gcmVxdWlyZShcIi4uL3N0cnVjdHVyZXMvQ2xpZW50VXNlclwiKTtcclxubGV0IGhhc0luaXQgPSBmYWxzZTtcclxuZnVuY3Rpb24gc2V0dXBFdmVudHMoY2xpZW50KSB7XHJcbiAgICBsZXQgZGlzcGF0Y2hlciA9IERpc2NvcmRUb01vZHVsZXNfMS5EaXNwYXRjaGVyTW9kdWxlO1xyXG4gICAgZGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJDT05ORUNUSU9OX09QRU5cIiwgKCkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5lbWl0KFwic2VsZi5yZWFkeVwiKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJNRVNTQUdFX0NSRUFURVwiLCBhY3Rpb24gPT4ge1xyXG4gICAgICAgIGlmIChhY3Rpb24ub3B0aW1pc3RpYylcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBkaXNhYmxlIG5vdCBzZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgYWN0aW9uLm1lc3NhZ2UgJiYgY2xpZW50LmVtaXQoXCJzZWxmLm1lc3NhZ2VDcmVhdGVcIiwgYWN0aW9uLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn1cclxuY2xhc3MgQ2xpZW50IGV4dGVuZHMgZXZlbnRzXzEuRXZlbnRFbWl0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcclxuICAgICAgICBpZiAoaGFzSW5pdClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IERpc2NvcmRKU0Vycm9yXzEuZGVmYXVsdChcIkNhbm5vdCBpbml0aWFsaXplZCBtb3JlIHRoYW4gb25lIGNsaWVudC5cIik7XHJcbiAgICAgICAgaGFzSW5pdCA9IHRydWU7XHJcbiAgICAgICAgc2V0dXBFdmVudHModGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbihcInNlbGYucmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IENsaWVudFVzZXJfMS5kZWZhdWx0KERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyTW9kdWxlLmdldEN1cnJlbnRVc2VyKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyTW9kdWxlLmdldEN1cnJlbnRVc2VyLCBEaXNjb3JkVG9Nb2R1bGVzXzEuVXNlck1vZHVsZSwgdHlwZW9mIERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyTW9kdWxlLmdldEN1cnJlbnRVc2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJyZWFkeVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uKFwic2VsZi5tZXNzYWdlQ3JlYXRlXCIsIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VDcmVhdGVcIiwgdXRpbF8xLmNyZWF0ZU1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJyb2FkY2FzdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBub3QgZ2l2aW5nIGFueSBzaW5jZSB0aGV5J3JlIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICB9XHJcbiAgICBnZXQgYnJvd3NlcigpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gc2luY2Ugd2UncmUgaW4gZWxlY3Ryb24sIHdlJ3JlIGFsd2F5cyBpbiBicm93c2VyXHJcbiAgICB9XHJcbiAgICBnZXQgY2hhbm5lbHMoKSB7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbHMgPSBPYmplY3QudmFsdWVzKERpc2NvcmRUb01vZHVsZXNfMS5jaGFubmVsc01vZHVsZS5nZXRBbGxDaGFubmVscygpKTtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbGxlY3Rpb25fMS5kZWZhdWx0KGNoYW5uZWxzLm1hcChlID0+IChbZS5pZCwgdXRpbF8xLmNyZWF0ZUNoYW5uZWwoZSldKSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVtb2ppcygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbGxlY3Rpb25fMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZ3VpbGRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5uZWxzID0gT2JqZWN0LnZhbHVlcyhEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuZ2V0QWxsR3VpbGRzKCkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sbGVjdGlvbl8xLmRlZmF1bHQoY2hhbm5lbHMubWFwKGUgPT4gKFtlLmlkLCB1dGlsXzEuY3JlYXRlR3VpbGQoZSldKSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHVzZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gT2JqZWN0LnZhbHVlcyhEaXNjb3JkVG9Nb2R1bGVzXzEuVXNlck1vZHVsZS5nZXRVc2VycygpKTtcclxuICAgICAgICByZXR1cm4gbmV3IGNvbGxlY3Rpb25fMS5kZWZhdWx0KHVzZXJzLm1hcChlID0+IFtlLmlkLCB1dGlsXzEuY3JlYXRlVXNlcihlKV0pKTtcclxuICAgIH1cclxuICAgIC8qKiBXYXJuaW5ncyBhbmQgb3ZlcnJpZGVzIGZvciBmdW5jdGlvbnMgdGhhdCBhcmUgbm90IGNvbXBhdGlibGUuICovXHJcbiAgICBhc3luYyBsb2dpbigpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRGlzY29yZEpTRXJyb3JfMS5kZWZhdWx0KFwiQ2xpZW50I2xvZ2luIGlzIG5vdCBzdXBwb3J0ZWQuIERpc2NvcmRKUyBvbiBsaWdodGNvcmQgd2lsbCB1c2UgdGhlIGxvZ2dlZCBpbiBhY2NvdW50LlwiKTtcclxuICAgIH1cclxuICAgIGdldCB0b2tlbigpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRGlzY29yZEpTRXJyb3JfMS5kZWZhdWx0KFwiQ2xpZW50I3Rva2VuIGlzIG5vdCBzdXBwb3J0ZWQuIERpc2NvcmRKUyBvbiBsaWdodGNvcmQgd2lsbCB1c2UgdGhlIGxvZ2dlZCBpbiBhY2NvdW50LlwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDbGllbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNsaWVudF8xID0gcmVxdWlyZShcIi4vY2xpZW50L2NsaWVudFwiKTtcclxuY29uc3QgY2xpZW50ID0gbmV3IGNsaWVudF8xLmRlZmF1bHQoKTtcclxuY29uc3QgRGlzY29yZEpTRXhwb3JydHMgPSB7XHJcbiAgICBDbGllbnQ6IGNsaWVudF8xLmRlZmF1bHQsXHJcbiAgICBjbGllbnRcclxufTtcclxud2luZG93LkRpc2NvcmRKUyA9IERpc2NvcmRKU0V4cG9ycnRzO1xyXG53aW5kb3cuRGlzY29yZEpTQ2xpZW50ID0gY2xpZW50O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBEaXNjb3JkSlNFeHBvcnJ0cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZFRvTW9kdWxlc1wiKTtcclxuY29uc3QgQmFzZVN0cnVjdHVyZV8xID0gcmVxdWlyZShcIi4vQmFzZVN0cnVjdHVyZVwiKTtcclxuY29uc3QgU25vd2ZsYWtlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9Tbm93Zmxha2VcIik7XHJcbmNsYXNzIEJhc2VDaGFubmVsIGV4dGVuZHMgQmFzZVN0cnVjdHVyZV8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoY2hhbm5lbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGNoYW5uZWwuaWQ7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EaXNjb3JkQ2hhbm5lbCA9IGNoYW5uZWw7XHJcbiAgICB9XHJcbiAgICBnZXQgY3JlYXRlZEF0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmNyZWF0ZWRUaW1lc3RhbXApO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNyZWF0ZWRUaW1lc3RhbXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNub3dmbGFrZV8xLmRlZmF1bHQuZGVjb25zdHJ1Y3QodGhpcy5pZCkudGltZXN0YW1wO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiBEaXNjb3JkVG9Nb2R1bGVzXzEuY2hhbm5lbHNNb2R1bGUuZGVsZXRlKHRoaXMuaWQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJhc2VDaGFubmVsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBCYXNlU3RydWN0dXJlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBnZXQgY2xpZW50KCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuRGlzY29yZEpTQ2xpZW50O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJhc2VTdHJ1Y3R1cmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFVzZXJfMSA9IHJlcXVpcmUoXCIuL1VzZXJcIik7XHJcbmNsYXNzIENsaWVudFVzZXIgZXh0ZW5kcyBVc2VyXzEuZGVmYXVsdCB7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xpZW50VXNlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZFRvTW9kdWxlc1wiKTtcclxuY29uc3QgQmFzZVN0cnVjdHVyZV8xID0gcmVxdWlyZShcIi4vQmFzZVN0cnVjdHVyZVwiKTtcclxuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWwvdXRpbFwiKTtcclxuY29uc3QgY29sbGVjdGlvbl8xID0gcmVxdWlyZShcIkBkaXNjb3JkanMvY29sbGVjdGlvblwiKTtcclxuY29uc3QgU25vd2ZsYWtlXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9Tbm93Zmxha2VcIik7XHJcbmNvbnN0IENvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL3V0aWwvQ29uc3RhbnRzXCIpO1xyXG5jb25zdCBEaXNjb3JkSlNFcnJvcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZEpTRXJyb3JcIik7XHJcbmNsYXNzIEd1aWxkIGV4dGVuZHMgQmFzZVN0cnVjdHVyZV8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EaXNjb3JkR3VpbGQgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5pZDtcclxuICAgIH1cclxuICAgIGdldCBhZmtDaGFubmVsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hZmtDaGFubmVsSUQpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB1dGlsXzEuY3JlYXRlQ2hhbm5lbChEaXNjb3JkVG9Nb2R1bGVzXzEuY2hhbm5lbHNNb2R1bGUuZ2V0Q2hhbm5lbCh0aGlzLmFma0NoYW5uZWxJRCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFma0NoYW5uZWxJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuYWZrQ2hhbm5lbElkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFma1RpbWVvdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLmFma1RpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXBwbGljYXRpb25JRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuYXBwbGljYXRpb25faWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXZhaWxhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNoYW5uZWxzKCkge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmNoYW5uZWxzLmZpbHRlcihjaGFubmVsID0+IGNoYW5uZWwuZ3VpbGRfaWQgPT09IHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBjcmVhdGVkQXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNub3dmbGFrZV8xLmRlZmF1bHQuZGVjb25zdHJ1Y3QodGhpcy5pZCkuZGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBjcmVhdGVkVGltZXN0YW1wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZWRBdC5nZXRUaW1lKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVmYXVsdENoYW5uZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuZ2V0KHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlZmF1bHRNZXNzYWdlTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuZGVmYXVsdE1lc3NhZ2VOb3RpZmljYXRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVtYmVkRW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGdldCBlbW9qaXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmVtb2ppcy5maWx0ZXIoZSA9PiBlLmd1aWxkX2lkID09PSB0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGdldCBleHBsaWNpdENvbnRlbnRGaWx0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLmV4cGxpY2l0Q29udGVudEZpbHRlcjtcclxuICAgIH1cclxuICAgIGdldCBmZWF0dXJlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLkRpc2NvcmRHdWlsZC5mZWF0dXJlcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuaWNvbjtcclxuICAgIH1cclxuICAgIGdldCBpY29uVVJMKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5nZXRJY29uVVJMKCkucmVwbGFjZShcIi53ZWJwXCIsIFwiLmpwZ1wiKTtcclxuICAgIH1cclxuICAgIGdldCBqb2luZWRBdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5EaXNjb3JkR3VpbGQuam9pbmVkQXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGpvaW5lZFRpbWVzdGFtcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuam9pbmVkQXQuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxhcmdlKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLmZpbmQobWVtYmVyID0+IG1lbWJlci5pZCA9PT0gdGhpcy5jbGllbnQudXNlci5pZCk7XHJcbiAgICB9XHJcbiAgICBnZXQgbWVtYmVyQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIERpc2NvcmRUb01vZHVsZXNfMS5ndWlsZE1vZHVsZS5nZXRNZW1iZXJDb3VudCh0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGdldCBtZW1iZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sbGVjdGlvbl8xLmRlZmF1bHQoRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldE1lbWJlcnModGhpcy5pZCkubWFwKG1lbWJlciA9PiBbbWVtYmVyLnVzZXJJZCwgdXRpbF8xLmNyZWF0ZUd1aWxkTWVtYmVyKG1lbWJlcildKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgbWVzc2FnZU5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnN0YW50c18xLk1lc3NhZ2VOb3RpZmljYXRpb25UeXBlW0Rpc2NvcmRUb01vZHVsZXNfMS5ndWlsZE1vZHVsZS5nZXRNZXNzYWdlTm90aWZpY2F0aW9ucyh0aGlzLmlkKV07XHJcbiAgICB9XHJcbiAgICBnZXQgbWZhTGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLm1mYUxldmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vYmlsZVB1c2goKSB7XHJcbiAgICAgICAgcmV0dXJuIERpc2NvcmRUb01vZHVsZXNfMS5ndWlsZE1vZHVsZS5nZXROb3RpZmljYXRpb25zU3RhdGUoKS51c2VyR3VpbGRTZXR0aW5nc1t0aGlzLmlkXS5tb2JpbGVfcHVzaDtcclxuICAgIH1cclxuICAgIGdldCBtdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldE5vdGlmaWNhdGlvbnNTdGF0ZSgpLnVzZXJHdWlsZFNldHRpbmdzW3RoaXMuaWRdLm11dGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLm5hbWU7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZUFjcm9ueW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLmFjcm9ueW07XHJcbiAgICB9XHJcbiAgICBnZXQgb3duZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVycy5nZXQodGhpcy5vd25lcklEKTtcclxuICAgIH1cclxuICAgIGdldCBvd25lcklEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5vd25lcklkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xyXG4gICAgICAgIGxldCBndWlsZFBvc2l0aW9ucyA9IERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyU2V0dGluZ3NNb2R1bGUuZ2V0QWxsU2V0dGluZ3MoKS5ndWlsZFBvc2l0aW9ucztcclxuICAgICAgICBpZiAoIWd1aWxkUG9zaXRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICByZXR1cm4gZ3VpbGRQb3NpdGlvbnMuaW5kZXhPZih0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGdldCBwcmVzZW5jZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb2xsZWN0aW9uXzEuZGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlZ2lvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQucmVnaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvbGVzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgY29sbGVjdGlvbl8xLmRlZmF1bHQoT2JqZWN0LnZhbHVlcyh0aGlzLkRpc2NvcmRHdWlsZC5yb2xlcykubWFwKHJvbGUgPT4gW3JvbGUuaWQsIHV0aWxfMS5jcmVhdGVSb2xlKHJvbGUpXSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNwbGFzaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuc3BsYXNoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNwbGFzaFVSTCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLkNkbk1vZHVsZS5nZXRHdWlsZFNwbGFzaFVSTCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBzcGxhc2g6IHRoaXMuc3BsYXNoLFxyXG4gICAgICAgICAgICBzaXplOiBEaXNjb3JkVG9Nb2R1bGVzXzEuQ29uc3RhbnRzTW9kdWxlLlNQTEFTSF9TSVpFXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3VwcHJlc3NFdmVyeW9uZSgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLmd1aWxkTW9kdWxlLmdldE5vdGlmaWNhdGlvbnNTdGF0ZSgpLnVzZXJHdWlsZFNldHRpbmdzW3RoaXMuaWRdLnN1cHByZXNzX2V2ZXJ5b25lO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN5c3RlbUNoYW5uZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmNoYW5uZWxzLmdldCh0aGlzLnN5c3RlbUNoYW5uZWxJRCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3lzdGVtQ2hhbm5lbElEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRHdWlsZC5zeXN0ZW1DaGFubmVsSWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgdmVyaWZpY2F0aW9uTGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLnZlcmlmaWNhdGlvbkxldmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZlcmlmaWVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKFwiVkVSSUZJRURcIik7XHJcbiAgICB9XHJcbiAgICBnZXQgdm9pY2VDb25uZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJhbm5lcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQuYmFubmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGJhbm5lclVSTCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLkNkbk1vZHVsZS5nZXRHdWlsZEJhbm5lclVSTCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBiYW5uZXI6IHRoaXMuYmFubmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZEd1aWxkLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVtYmVkQ2hhbm5lbCgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBlbWJlZENoYW5uZWxJRCgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBtYXhpbXVtTWVtYmVycygpIHtcclxuICAgICAgICByZXR1cm4gMjUwMDAwO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1heGltdW1QcmVzZW5jZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIDUwMDA7XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkZ2V0RW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkZ2V0Q2hhbm5lbElEKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHdpZGdldENoYW5uZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFuaXR5VVJMQ29kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGQudmFuaXR5VVJMQ29kZTtcclxuICAgIH1cclxuICAgIC8qKiBGVU5DVElPTlMgKi9cclxuICAgIGFzeW5jIGFja25vd2xlZGdlKCkge1xyXG4gICAgICAgIERpc2NvcmRUb01vZHVsZXNfMS5BY2tNb2R1bGUuYnVsa0Fjayh0aGlzLmNoYW5uZWxzLmZpbHRlcihlID0+IGUudHlwZSA9PT0gXCJ0ZXh0XCIpLm1hcChlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWxJZDogZS5pZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogRGlzY29yZFRvTW9kdWxlc18xLmNoYW5uZWxzTW9kdWxlLmxhc3RNZXNzYWdlSWQoZS5pZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBhZGRNZW1iZXIoLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRGlzY29yZEpTRXJyb3JfMS5kZWZhdWx0KFwiVGhpcyBtZXRob2QgaXMgbm90IGF2YWlsYWJsZSBvbiBMaWdodGNvcmQuXCIpKTtcclxuICAgIH1cclxuICAgIGFsbG93RE1zKGFsbG93KSB7XHJcbiAgICAgICAgbGV0IHJlc3RyaWN0ZWQgPSBEaXNjb3JkVG9Nb2R1bGVzXzEuVXNlclNldHRpbmdzTW9kdWxlLmdldEFsbFNldHRpbmdzKCkucmVzdHJpY3RlZEd1aWxkcztcclxuICAgICAgICBpZiAoYWxsb3cpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXN0cmljdGVkLmluY2x1ZGVzKHRoaXMuaWQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IHJlc3RyaWN0ZWQuZmlsdGVyKGUgPT4gZSAhPT0gdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVzdHJpY3RlZC5pbmNsdWRlcyh0aGlzLmlkKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0ZWQucHVzaCh0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERpc2NvcmRUb01vZHVsZXNfMS5Vc2VyU2V0dGluZ3NNb2R1bGUudXBkYXRlUmVtb3RlU2V0dGluZ3Moe1xyXG4gICAgICAgICAgICByZXN0cmljdGVkR3VpbGRzOiByZXN0cmljdGVkXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB0aGlzKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGJhbih1c2VyLCB7IGRheXMgPSAwLCByZWFzb24gPSBudWxsIH0gPSB7fSkge1xyXG4gICAgICAgIGxldCBpZCA9IHV0aWxfMS5yZXNvbHZlVXNlcklEKHVzZXIpO1xyXG4gICAgICAgIGlmICghaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRGlzY29yZEpTRXJyb3JfMS5kZWZhdWx0KFwiR2l2ZW4gdXNlciBjb3VsZCBub3QgYmUgcmVzb2x2ZWQgdG8gYW4gdXNlciBJRC5cIikpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuYmFuVXNlcih0aGlzLmlkLCBpZCwgZGF5cywgcmVhc29uKS5jYXRjaChlcnIgPT4gZXJyKTtcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgcmVzdWx0LnN0YXR1cyAhPT0gMjA0KSB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gcmVzdWx0LmJvZHk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnVzZXJfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJVc2VyOiBcIiArIG1lc3NhZ2UudXNlcl9pZFswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuZGVsZXRlX21lc3NhZ2VfZGF5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkRheXM6IFwiICsgbWVzc2FnZS5kZWxldGVfbWVzc2FnZV9kYXlzWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5yZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJSZWFzb246IFwiICsgbWVzc2FnZS5yZWFzb25bMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVzdWx0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IERpc2NvcmRKU0Vycm9yXzEuZGVmYXVsdChtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2hhbm5lbChuYW1lLCB0eXBlT3JPcHRpb25zID0gJ3RleHQnLCBwZXJtaXNzaW9uT3ZlcndyaXRlcywgcmVhc29uKSB7XHJcbiAgICB9XHJcbiAgICBmZXRjaCgpIHtcclxuICAgICAgICBsZXQgZ3VpbGQgPSBEaXNjb3JkVG9Nb2R1bGVzXzEuZ3VpbGRNb2R1bGUuZ2V0R3VpbGQodGhpcy5pZCk7XHJcbiAgICAgICAgaWYgKCFndWlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkRpc2NvcmRHdWlsZCA9IGd1aWxkO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR3VpbGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEJhc2VDaGFubmVsXzEgPSByZXF1aXJlKFwiLi9CYXNlQ2hhbm5lbFwiKTtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3V0aWwvRGlzY29yZFRvTW9kdWxlc1wiKTtcclxuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWwvdXRpbFwiKTtcclxuY2xhc3MgR3VpbGRDaGFubmVsIGV4dGVuZHMgQmFzZUNoYW5uZWxfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNoYW5uZWwpIHtcclxuICAgICAgICBzdXBlcihjaGFubmVsKTtcclxuICAgIH1cclxuICAgIGdldCBndWlsZCgpIHtcclxuICAgICAgICByZXR1cm4gdXRpbF8xLmNyZWF0ZUd1aWxkKERpc2NvcmRUb01vZHVsZXNfMS5ndWlsZE1vZHVsZS5nZXRHdWlsZCh0aGlzLkRpc2NvcmRDaGFubmVsLmd1aWxkX2lkKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgZ3VpbGRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZENoYW5uZWwuZ3VpbGRfaWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR3VpbGRDaGFubmVsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBCYXNlU3RydWN0dXJlXzEgPSByZXF1aXJlKFwiLi9CYXNlU3RydWN0dXJlXCIpO1xyXG5jbGFzcyBHdWlsZE1lbWJlciBleHRlbmRzIEJhc2VTdHJ1Y3R1cmVfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuRGlzY29yZEd1aWxkTWVtYmVyID0gZGF0YTtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkR3VpbGRNZW1iZXIudXNlcklkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEd1aWxkTWVtYmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBCYXNlU3RydWN0dXJlXzEgPSByZXF1aXJlKFwiLi9CYXNlU3RydWN0dXJlXCIpO1xyXG5jb25zdCBEaXNjb3JkVG9Nb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5jb25zdCBVc2VyXzEgPSByZXF1aXJlKFwiLi9Vc2VyXCIpO1xyXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgQmFzZVN0cnVjdHVyZV8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5EaXNjb3JkTWVzc2FnZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0aG9yKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlcl8xLmRlZmF1bHQoRGlzY29yZFRvTW9kdWxlc18xLlVzZXJNb2R1bGUuZ2V0VXNlcih0aGlzLkRpc2NvcmRNZXNzYWdlLmF1dGhvci5pZCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1lc3NhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEJhc2VTdHJ1Y3R1cmVfMSA9IHJlcXVpcmUoXCIuL0Jhc2VTdHJ1Y3R1cmVcIik7XHJcbmNsYXNzIFJvbGUgZXh0ZW5kcyBCYXNlU3RydWN0dXJlXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLkRpc2NvcmRSb2xlID0gZGF0YTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBSb2xlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBHdWlsZENoYW5uZWxfMSA9IHJlcXVpcmUoXCIuL0d1aWxkQ2hhbm5lbFwiKTtcclxuY29uc3QgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9Db25zdGFudHNcIik7XHJcbmNsYXNzIFRleHRDaGFubmVsIGV4dGVuZHMgR3VpbGRDaGFubmVsXzEuZGVmYXVsdCAvKiBpbXBsZW1lbnRzIFRleHRCYXNlZENoYW5uZWwqLyB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gQ29uc3RhbnRzXzEuQ2hhbm5lbFR5cGVzLlRFWFQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dENoYW5uZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEJhc2VTdHJ1Y3R1cmVfMSA9IHJlcXVpcmUoXCIuL0Jhc2VTdHJ1Y3R1cmVcIik7XHJcbmNvbnN0IERpc2NvcmRUb01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi91dGlsL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlU3RydWN0dXJlXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLkRpc2NvcmRVc2VyID0gZGF0YTtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkVXNlci5pZDtcclxuICAgIH1cclxuICAgIGdldCBhdmF0YXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGlzY29yZFVzZXIuYXZhdGFyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGF2YXRhclVSTCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkVXNlci5hdmF0YXJVUkw7XHJcbiAgICB9XHJcbiAgICBnZXQgYm90KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRpc2NvcmRVc2VyLmJvdDtcclxuICAgIH1cclxuICAgIGdldCBjcmVhdGVkQXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuRGlzY29yZFVzZXIuY3JlYXRlZEF0KTtcclxuICAgIH1cclxuICAgIGdldCBjcmVhdGVkVGltZXN0YW1wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZWRBdC5nZXRUaW1lKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVmYXVsdEF2YXRhclVSTCgpIHtcclxuICAgICAgICByZXR1cm4gRGlzY29yZFRvTW9kdWxlc18xLkNkbk1vZHVsZS5nZXREZWZhdWx0QXZhdGFyVVJMKHRoaXMuZGlzY3JpbWluYXRvcik7XHJcbiAgICB9XHJcbiAgICBnZXQgZGlzY3JpbWluYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EaXNjb3JkVXNlci5kaXNjcmltaW5hdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRpc3BsYXlBdmF0YXJVUkwoKSB7XHJcbiAgICAgICAgcmV0dXJuIERpc2NvcmRUb01vZHVsZXNfMS5DZG5Nb2R1bGUuZ2V0VXNlckF2YXRhclVSTCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBhdmF0YXI6IHRoaXMuYXZhdGFyLFxyXG4gICAgICAgICAgICBib3Q6IHRoaXMuYm90LFxyXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yOiB0aGlzLmRpc2NyaW1pbmF0b3JcclxuICAgICAgICB9LCBcInBuZ1wiLCA0MDk2KTtcclxuICAgIH1cclxuICAgIGdldCBkbUNoYW5uZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmNoYW5uZWxzLmZpbmQoZSA9PiBlLnR5cGUgPT09IFwiZG1cIiAmJiBlLnJlY2lwaWVudC5pZCA9PT0gdGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBnZXQgbGFzdE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgbGFzdE1lc3NhZ2VJRCgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBub3RlKCkge1xyXG4gICAgICAgIGxldCBub3RlID0gRGlzY29yZFRvTW9kdWxlc18xLlVzZXJNb2R1bGUuZ2V0Tm90ZSh0aGlzLmlkKTtcclxuICAgICAgICBpZiAoIW5vdGUgfHwgIW5vdGUubm90ZSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIG5vdGUubm90ZTtcclxuICAgIH1cclxuICAgIGdldCBwcmVzZW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBVc2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFWQVRBUl9TSVpFID0gZXhwb3J0cy5NZXNzYWdlTm90aWZpY2F0aW9uVHlwZSA9IGV4cG9ydHMuQ2hhbm5lbFR5cGVzID0gdm9pZCAwO1xyXG52YXIgQ2hhbm5lbFR5cGVzO1xyXG4oZnVuY3Rpb24gKENoYW5uZWxUeXBlcykge1xyXG4gICAgQ2hhbm5lbFR5cGVzW1wiVEVYVFwiXSA9IFwidGV4dFwiO1xyXG4gICAgQ2hhbm5lbFR5cGVzW1wiRE1cIl0gPSBcImRtXCI7XHJcbiAgICBDaGFubmVsVHlwZXNbXCJWT0lDRVwiXSA9IFwidm9pY2VcIjtcclxuICAgIENoYW5uZWxUeXBlc1tcIkdST1VQX0RNXCJdID0gXCJncm91cFwiO1xyXG4gICAgQ2hhbm5lbFR5cGVzW1wiQ0FURUdPUllcIl0gPSBcImNhdGVnb3J5XCI7XHJcbiAgICBDaGFubmVsVHlwZXNbXCJORVdTXCJdID0gXCJuZXdzXCI7XHJcbiAgICBDaGFubmVsVHlwZXNbXCJTVE9SRVwiXSA9IFwic3RvcmVcIjtcclxufSkoQ2hhbm5lbFR5cGVzID0gZXhwb3J0cy5DaGFubmVsVHlwZXMgfHwgKGV4cG9ydHMuQ2hhbm5lbFR5cGVzID0ge30pKTtcclxudmFyIE1lc3NhZ2VOb3RpZmljYXRpb25UeXBlO1xyXG4oZnVuY3Rpb24gKE1lc3NhZ2VOb3RpZmljYXRpb25UeXBlKSB7XHJcbiAgICBNZXNzYWdlTm90aWZpY2F0aW9uVHlwZVtNZXNzYWdlTm90aWZpY2F0aW9uVHlwZVtcIkVWRVJZVEhJTkdcIl0gPSAwXSA9IFwiRVZFUllUSElOR1wiO1xyXG4gICAgTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbXCJNRU5USU9OU1wiXSA9IDFdID0gXCJNRU5USU9OU1wiO1xyXG4gICAgTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbTWVzc2FnZU5vdGlmaWNhdGlvblR5cGVbXCJOT1RISU5HXCJdID0gMl0gPSBcIk5PVEhJTkdcIjtcclxuICAgIE1lc3NhZ2VOb3RpZmljYXRpb25UeXBlW01lc3NhZ2VOb3RpZmljYXRpb25UeXBlW1wiSU5IRVJJVFwiXSA9IDNdID0gXCJJTkhFUklUXCI7XHJcbn0pKE1lc3NhZ2VOb3RpZmljYXRpb25UeXBlID0gZXhwb3J0cy5NZXNzYWdlTm90aWZpY2F0aW9uVHlwZSB8fCAoZXhwb3J0cy5NZXNzYWdlTm90aWZpY2F0aW9uVHlwZSA9IHt9KSk7XHJcbmV4cG9ydHMuQVZBVEFSX1NJWkUgPSA0MDk2O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBEaXNjb3JkSlNFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkRpc2NvcmRKU0Vycm9yXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRGlzY29yZEpTRXJyb3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRGlzcGF0Y2hlck1vZHVsZSA9IGV4cG9ydHMuQWNrTW9kdWxlID0gZXhwb3J0cy5DZG5Nb2R1bGUgPSBleHBvcnRzLlVzZXJNb2R1bGUgPSBleHBvcnRzLkNvbnN0YW50c01vZHVsZSA9IGV4cG9ydHMuVXNlclNldHRpbmdzTW9kdWxlID0gZXhwb3J0cy5ndWlsZE1vZHVsZSA9IGV4cG9ydHMuY2hhbm5lbHNNb2R1bGUgPSBleHBvcnRzLnJlcXVpcmVNb2R1bGUgPSB2b2lkIDA7XHJcbmNvbnN0IExhenlMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL0xhenlMb2FkZXJcIik7XHJcbmZ1bmN0aW9uIGdldE1vZHVsZShuYW1lKSB7XHJcbiAgICByZXR1cm4gZXhwb3J0c1tuYW1lICsgXCJNb2R1bGVcIl07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0TW9kdWxlO1xyXG5jb25zdCBCRE1vZHVsZXMgPSB3aW5kb3cuQkRNb2R1bGVzO1xyXG5mdW5jdGlvbiByZXF1aXJlTW9kdWxlKGZpbHRlcikge1xyXG4gICAgbGV0IG1vZHVsZSA9IEJETW9kdWxlcy5nZXQoZmlsdGVyKVswXTtcclxuICAgIHJldHVybiBtb2R1bGUgJiYgbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG59XHJcbmV4cG9ydHMucmVxdWlyZU1vZHVsZSA9IHJlcXVpcmVNb2R1bGU7XHJcbmV4cG9ydHMuY2hhbm5lbHNNb2R1bGUgPSBMYXp5TG9hZGVyXzEubGF6eUxvYWQoXCJjaGFubmVsc1wiKTtcclxuZXhwb3J0cy5ndWlsZE1vZHVsZSA9IExhenlMb2FkZXJfMS5sYXp5TG9hZChcImd1aWxkc1wiKTtcclxuZXhwb3J0cy5Vc2VyU2V0dGluZ3NNb2R1bGUgPSBMYXp5TG9hZGVyXzEubGF6eUxvYWQoXCJ1c2VyU2V0dGluZ3NcIik7XHJcbmV4cG9ydHMuQ29uc3RhbnRzTW9kdWxlID0gTGF6eUxvYWRlcl8xLmxhenlMb2FkKFwiY29uc3RhbnRzXCIpO1xyXG5leHBvcnRzLlVzZXJNb2R1bGUgPSBMYXp5TG9hZGVyXzEubGF6eUxvYWQoXCJ1c2Vyc1wiKTtcclxuZXhwb3J0cy5DZG5Nb2R1bGUgPSBMYXp5TG9hZGVyXzEubGF6eUxvYWQoXCJjZG5cIik7XHJcbmV4cG9ydHMuQWNrTW9kdWxlID0gTGF6eUxvYWRlcl8xLmxhenlMb2FkKFwiYWNrbm93bGVkZ2VcIik7XHJcbmV4cG9ydHMuRGlzcGF0Y2hlck1vZHVsZSA9IExhenlMb2FkZXJfMS5sYXp5TG9hZChcImRpc3BhdGNoZXJcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubGF6eUxvYWQgPSB2b2lkIDA7XHJcbmNvbnN0IGNhY2hlID0ge307XHJcbmZ1bmN0aW9uIGxhenlMb2FkKGlkKSB7XHJcbiAgICBpZiAoY2FjaGVbaWRdKVxyXG4gICAgICAgIHJldHVybiBjYWNoZVtpZF07XHJcbiAgICBsZXQgbWRsID0gbnVsbDtcclxuICAgIGxldCBzZXRNb2R1bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZGwpXHJcbiAgICAgICAgICAgIG1kbCA9IHJlcXVpcmUoXCIuL21vZHVsZXMvXCIgKyBpZCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlcnMgPSB7XHJcbiAgICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xyXG4gICAgICAgICAgICBzZXRNb2R1bGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1kbFtwcm9wXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldE1vZHVsZSgpO1xyXG4gICAgICAgICAgICBtZGxbcHJvcF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcclxuICAgICAgICAgICAgc2V0TW9kdWxlKCk7XHJcbiAgICAgICAgICAgIG1kbC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnN0cnVjdCh0YXJnZXQsIGFyZ3MpIHtcclxuICAgICAgICAgICAgc2V0TW9kdWxlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobWRsLnByb3RvdHlwZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmFwcGx5KHRhcmdldCwgcHJvdG90eXBlLCBhcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IHByb3h5ID0gbmV3IFByb3h5KHt9LCBoYW5kbGVycyk7XHJcbiAgICByZXR1cm4gY2FjaGVbaWRdID0gcHJveHk7XHJcbn1cclxuZXhwb3J0cy5sYXp5TG9hZCA9IGxhenlMb2FkO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsL3V0aWxcIik7XHJcbi8vIERpc2NvcmQgZXBvY2ggKDIwMTUtMDEtMDFUMDA6MDA6MDAuMDAwWilcclxuY29uc3QgRVBPQ0ggPSAxNDIwMDcwNDAwMDAwO1xyXG5sZXQgSU5DUkVNRU5UID0gMDtcclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciB1c2VmdWwgc25vd2ZsYWtlLXJlbGF0ZWQgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFNub3dmbGFrZVV0aWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGNsYXNzIG1heSBub3QgYmUgaW5zdGFudGlhdGVkLmApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBIFR3aXR0ZXIgc25vd2ZsYWtlLCBleGNlcHQgdGhlIGVwb2NoIGlzIDIwMTUtMDEtMDFUMDA6MDA6MDAuMDAwWlxyXG4gICAgICogYGBgXHJcbiAgICAgKiBJZiB3ZSBoYXZlIGEgc25vd2ZsYWtlICcyNjYyNDE5NDg4MjQ3NjQ0MTYnIHdlIGNhbiByZXByZXNlbnQgaXQgYXMgYmluYXJ5OlxyXG4gICAgICpcclxuICAgICAqIDY0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIgICAgIDE3ICAgICAxMiAgICAgICAgICAwXHJcbiAgICAgKiAgMDAwMDAwMTExMDExMDAwMTExMTAwMDAxMTAxMDAxMDAwMTAxMDAwMDAwICAwMDAwMSAgMDAwMDAgIDAwMDAwMDAwMDAwMFxyXG4gICAgICogICAgICAgbnVtYmVyIG9mIG1zIHNpbmNlIERpc2NvcmQgZXBvY2ggICAgICAgd29ya2VyICBwaWQgICAgaW5jcmVtZW50XHJcbiAgICAgKiBgYGBcclxuICAgICAqIEB0eXBlZGVmIHtzdHJpbmd9IFNub3dmbGFrZVxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhIERpc2NvcmQgc25vd2ZsYWtlLlxyXG4gICAgICogPGluZm8+VGhpcyBoYXJkY29kZXMgdGhlIHdvcmtlciBJRCBhcyAxIGFuZCB0aGUgcHJvY2VzcyBJRCBhcyAwLjwvaW5mbz5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfERhdGV9IFt0aW1lc3RhbXA9RGF0ZS5ub3coKV0gVGltZXN0YW1wIG9yIGRhdGUgb2YgdGhlIHNub3dmbGFrZSB0byBnZW5lcmF0ZVxyXG4gICAgICogQHJldHVybnMge1Nub3dmbGFrZX0gVGhlIGdlbmVyYXRlZCBzbm93Zmxha2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlKHRpbWVzdGFtcCA9IERhdGUubm93KCkpIHtcclxuICAgICAgICBpZiAodGltZXN0YW1wIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgICAgICAgICAgdGltZXN0YW1wID0gdGltZXN0YW1wLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHRpbWVzdGFtcCAhPT0gJ251bWJlcicgfHwgaXNOYU4odGltZXN0YW1wKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcInRpbWVzdGFtcFwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXIgKHJlY2VpdmVkICR7aXNOYU4odGltZXN0YW1wKSA/ICdOYU4nIDogdHlwZW9mIHRpbWVzdGFtcH0pYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJTkNSRU1FTlQgPj0gNDA5NSlcclxuICAgICAgICAgICAgSU5DUkVNRU5UID0gMDtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgICAgIGNvbnN0IEJJTkFSWSA9IGAkeyh0aW1lc3RhbXAgLSBFUE9DSCkudG9TdHJpbmcoMikucGFkU3RhcnQoNDIsICcwJyl9MDAwMDEwMDAwMCR7KElOQ1JFTUVOVCsrKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMilcclxuICAgICAgICAgICAgLnBhZFN0YXJ0KDEyLCAnMCcpfWA7XHJcbiAgICAgICAgcmV0dXJuIFV0aWwuYmluYXJ5VG9JRChCSU5BUlkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGRlY29uc3RydWN0ZWQgc25vd2ZsYWtlLlxyXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gRGVjb25zdHJ1Y3RlZFNub3dmbGFrZVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVzdGFtcCBUaW1lc3RhbXAgdGhlIHNub3dmbGFrZSB3YXMgY3JlYXRlZFxyXG4gICAgICogQHByb3BlcnR5IHtEYXRlfSBkYXRlIERhdGUgdGhlIHNub3dmbGFrZSB3YXMgY3JlYXRlZFxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHdvcmtlcklEIFdvcmtlciBJRCBpbiB0aGUgc25vd2ZsYWtlXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcHJvY2Vzc0lEIFByb2Nlc3MgSUQgaW4gdGhlIHNub3dmbGFrZVxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGluY3JlbWVudCBJbmNyZW1lbnQgaW4gdGhlIHNub3dmbGFrZVxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJpbmFyeSBCaW5hcnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNub3dmbGFrZVxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIERlY29uc3RydWN0cyBhIERpc2NvcmQgc25vd2ZsYWtlLlxyXG4gICAgICogQHBhcmFtIHtTbm93Zmxha2V9IHNub3dmbGFrZSBTbm93Zmxha2UgdG8gZGVjb25zdHJ1Y3RcclxuICAgICAqIEByZXR1cm5zIHtEZWNvbnN0cnVjdGVkU25vd2ZsYWtlfSBEZWNvbnN0cnVjdGVkIHNub3dmbGFrZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb25zdHJ1Y3Qoc25vd2ZsYWtlKSB7XHJcbiAgICAgICAgY29uc3QgQklOQVJZID0gVXRpbC5pZFRvQmluYXJ5KHNub3dmbGFrZSlcclxuICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgLnBhZFN0YXJ0KDY0LCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBwYXJzZUludChCSU5BUlkuc3Vic3RyaW5nKDAsIDQyKSwgMikgKyBFUE9DSCxcclxuICAgICAgICAgICAgd29ya2VySUQ6IHBhcnNlSW50KEJJTkFSWS5zdWJzdHJpbmcoNDIsIDQ3KSwgMiksXHJcbiAgICAgICAgICAgIHByb2Nlc3NJRDogcGFyc2VJbnQoQklOQVJZLnN1YnN0cmluZyg0NywgNTIpLCAyKSxcclxuICAgICAgICAgICAgaW5jcmVtZW50OiBwYXJzZUludChCSU5BUlkuc3Vic3RyaW5nKDUyLCA2NCksIDIpLFxyXG4gICAgICAgICAgICBiaW5hcnk6IEJJTkFSWSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXMsICdkYXRlJywge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTbm93Zmxha2VVdGlsO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWNrbm93bGVkZ2VcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvYWNrbm93bGVkZ2UudHNcIixcblx0XCIuL2Fja25vd2xlZGdlLnRzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL2Fja25vd2xlZGdlLnRzXCIsXG5cdFwiLi9jZG5cIjogXCIuL3NyYy91dGlsL21vZHVsZXMvY2RuLnRzXCIsXG5cdFwiLi9jZG4udHNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvY2RuLnRzXCIsXG5cdFwiLi9jaGFubmVsc1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9jaGFubmVscy50c1wiLFxuXHRcIi4vY2hhbm5lbHMudHNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvY2hhbm5lbHMudHNcIixcblx0XCIuL2NvbnN0YW50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9jb25zdGFudHMudHNcIixcblx0XCIuL2NvbnN0YW50cy50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9jb25zdGFudHMudHNcIixcblx0XCIuL2Rpc3BhdGNoZXJcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvZGlzcGF0Y2hlci50c1wiLFxuXHRcIi4vZGlzcGF0Y2hlci50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9kaXNwYXRjaGVyLnRzXCIsXG5cdFwiLi9ndWlsZHNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvZ3VpbGRzLnRzXCIsXG5cdFwiLi9ndWlsZHMudHNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvZ3VpbGRzLnRzXCIsXG5cdFwiLi9tZXNzYWdlc1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy9tZXNzYWdlcy50c1wiLFxuXHRcIi4vbWVzc2FnZXMudHNcIjogXCIuL3NyYy91dGlsL21vZHVsZXMvbWVzc2FnZXMudHNcIixcblx0XCIuL3VzZXJTZXR0aW5nc1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy91c2VyU2V0dGluZ3MudHNcIixcblx0XCIuL3VzZXJTZXR0aW5ncy50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy91c2VyU2V0dGluZ3MudHNcIixcblx0XCIuL3VzZXJzXCI6IFwiLi9zcmMvdXRpbC9tb2R1bGVzL3VzZXJzLnRzXCIsXG5cdFwiLi91c2Vycy50c1wiOiBcIi4vc3JjL3V0aWwvbW9kdWxlcy91c2Vycy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy91dGlsL21vZHVsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmxldCBhY2tub3dsZWRnZU1vZHVsZUludGVybmFsMSA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZSAmJiBlLmJ1bGtBY2spO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGJ1bGtBY2s6IGFja25vd2xlZGdlTW9kdWxlSW50ZXJuYWwxLmJ1bGtBY2tcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IERpc2NvcmRUb01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5sZXQgY2RuTW9kdWxlSW50ZXJuYWwxID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldEd1aWxkU3BsYXNoVVJMKTtcclxubGV0IGNkbk1vZHVsZUludGVybmFsMiA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5ERUZBVUxUX0FWQVRBUlMpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldFVzZXJBdmF0YXJVUkw6IGNkbk1vZHVsZUludGVybmFsMS5nZXRVc2VyQXZhdGFyVVJMLFxyXG4gICAgZ2V0R3VpbGRTcGxhc2hVUkw6IGNkbk1vZHVsZUludGVybmFsMS5nZXRHdWlsZFNwbGFzaFVSTCxcclxuICAgIGdldEd1aWxkQmFubmVyVVJMOiBjZG5Nb2R1bGVJbnRlcm5hbDEuZ2V0R3VpbGRCYW5uZXJVUkwsXHJcbiAgICBnZXREZWZhdWx0QXZhdGFyVVJMKGRpc2NyaW1pbmF0b3IpIHtcclxuICAgICAgICBsZXQgYXNzZXQgPSBjZG5Nb2R1bGVJbnRlcm5hbDIuREVGQVVMVF9BVkFUQVJTWyh0eXBlb2YgZGlzY3JpbWluYXRvciA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KGRpc2NyaW1pbmF0b3IpIHx8IDAgOiBpc05hTihkaXNjcmltaW5hdG9yKSA/IDAgOiBkaXNjcmltaW5hdG9yKSAlIGNkbk1vZHVsZUludGVybmFsMi5ERUZBVUxUX0FWQVRBUlMubGVuZ3RoXTtcclxuICAgICAgICByZXR1cm4gYCR7bG9jYXRpb24ucHJvdG9jb2x9Oi8vJHt3aW5kb3dbXCJHTE9CQUxfRU5WXCJdLkFTU0VUX0VORFBPSU5UfS9hc3NldHMvJHthc3NldH1gO1xyXG4gICAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmxldCBjaGFubmVsc01vZHVsZUludGVybmFsMSA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXRDaGFubmVscyAmJiBlLmRlZmF1bHQuZ2V0Q2hhbm5lbCk7XHJcbmxldCBjaGFubmVsc01vZHVsZUludGVybmFsMjtcclxubGV0IGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwzID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0Lmxhc3RNZXNzYWdlSWQpO1xyXG5mdW5jdGlvbiBzZXQzKCkge1xyXG4gICAgaWYgKGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwzKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwzID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0Lmxhc3RNZXNzYWdlSWQpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZ2V0Q2hhbm5lbDogY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDEuZ2V0Q2hhbm5lbCxcclxuICAgIGdldEFsbENoYW5uZWxzOiBjaGFubmVsc01vZHVsZUludGVybmFsMS5nZXRDaGFubmVscyxcclxuICAgIGdldCBkZWxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxzTW9kdWxlSW50ZXJuYWwyID8gY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDIuZGVsZXRlQ2hhbm5lbCA6IChjaGFubmVsc01vZHVsZUludGVybmFsMiA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5kZWxldGVDaGFubmVsKSwgY2hhbm5lbHNNb2R1bGVJbnRlcm5hbDIuZGVsZXRlQ2hhbm5lbCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGxhc3RNZXNzYWdlSWQoKSB7XHJcbiAgICAgICAgc2V0MygpO1xyXG4gICAgICAgIHJldHVybiBjaGFubmVsc01vZHVsZUludGVybmFsMy5sYXN0TWVzc2FnZUlkO1xyXG4gICAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbm1vZHVsZS5leHBvcnRzID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLkFQSV9IT1NUKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IERpc2NvcmRUb01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKG0gPT4gbS5EaXNwYXRjaGVyICYmIG0uZGVmYXVsdCAmJiBtLmRlZmF1bHQuZGlzcGF0Y2gpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmxldCBndWlsZE1vZHVsZUludGVybmFsMSA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXRHdWlsZHMgJiYgZS5kZWZhdWx0LmdldEd1aWxkICYmICFlLmRlZmF1bHQuaXNGZXRjaGluZyk7XHJcbmxldCBndWlsZE1vZHVsZUludGVybmFsMiA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5nZXRNZW1iZXJDb3VudHMgJiYgZS5kZWZhdWx0LmdldE1lbWJlckNvdW50KTtcclxubGV0IGd1aWxkTW9kdWxlSW50ZXJuYWwzID0gRGlzY29yZFRvTW9kdWxlc18xLnJlcXVpcmVNb2R1bGUoZSA9PiBlLmRlZmF1bHQgJiYgZS5kZWZhdWx0LmdldE1lbWJlcnMpO1xyXG5sZXQgZ3VpbGRNb2R1bGVJbnRlcm5hbDQgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuaXNHdWlsZE9yQ2F0ZWdvcnlPckNoYW5uZWxNdXRlZCk7XHJcbmxldCBndWlsZE1vZHVsZUludGVybmFsNSA9IERpc2NvcmRUb01vZHVsZXNfMS5yZXF1aXJlTW9kdWxlKGUgPT4gZS5kZWZhdWx0ICYmIGUuZGVmYXVsdC5iYW5Vc2VyKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBnZXRBbGxHdWlsZHM6IGd1aWxkTW9kdWxlSW50ZXJuYWwxLmdldEd1aWxkcyxcclxuICAgIGdldEd1aWxkOiBndWlsZE1vZHVsZUludGVybmFsMS5nZXRHdWlsZCxcclxuICAgIGdldE1lbWJlckNvdW50OiBndWlsZE1vZHVsZUludGVybmFsMi5nZXRNZW1iZXJDb3VudCxcclxuICAgIGdldE1lbWJlckNvdW50czogZ3VpbGRNb2R1bGVJbnRlcm5hbDIuZ2V0TWVtYmVyQ291bnRzLFxyXG4gICAgZ2V0TWVtYmVyczogZ3VpbGRNb2R1bGVJbnRlcm5hbDMuZ2V0TWVtYmVycyxcclxuICAgIGdldE1lbWJlcjogZ3VpbGRNb2R1bGVJbnRlcm5hbDMuZ2V0TWVtYmVyLFxyXG4gICAgZ2V0TWVtYmVySWRzOiBndWlsZE1vZHVsZUludGVybmFsMy5nZXRNZW1iZXJJZHMsXHJcbiAgICBpc01lbWJlcjogZ3VpbGRNb2R1bGVJbnRlcm5hbDMuaXNNZW1iZXIsXHJcbiAgICBtZW1iZXJPZjogZ3VpbGRNb2R1bGVJbnRlcm5hbDMubWVtYmVyT2YsXHJcbiAgICBnZXROaWNrOiBndWlsZE1vZHVsZUludGVybmFsMy5nZXROaWNrLFxyXG4gICAgZ2V0TWVzc2FnZU5vdGlmaWNhdGlvbnM6IGd1aWxkTW9kdWxlSW50ZXJuYWw0LmdldE1lc3NhZ2VOb3RpZmljYXRpb25zLFxyXG4gICAgZ2V0Tm90aWZpY2F0aW9uc1N0YXRlOiBndWlsZE1vZHVsZUludGVybmFsNC5nZXRTdGF0ZSxcclxuICAgIGJhblVzZXI6IGd1aWxkTW9kdWxlSW50ZXJuYWw1LmJhblVzZXIsXHJcbiAgICBraWNrVXNlcjogZ3VpbGRNb2R1bGVJbnRlcm5hbDUua2lja1VzZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IERpc2NvcmRUb01vZHVsZXNfMSA9IHJlcXVpcmUoXCIuLi9EaXNjb3JkVG9Nb2R1bGVzXCIpO1xyXG5sZXQgdXNlclNldHRpbmdNb2R1bGVJbnRlcm5hbDEgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuaXNHdWlsZFJlc3RyaWN0ZWQpO1xyXG5sZXQgdXNlclNldHRpbmdNb2R1bGVJbnRlcm5hbDIgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQudXBkYXRlTG9jYWxTZXR0aW5ncyk7XHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbih7IGdldEFsbFNldHRpbmdzOiB1c2VyU2V0dGluZ01vZHVsZUludGVybmFsMS5nZXRBbGxTZXR0aW5ncywgZ2V0U2V0dGluZzogKHNldHRpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlclNldHRpbmdNb2R1bGVJbnRlcm5hbDEuZ2V0QWxsU2V0dGluZ3MoKVtzZXR0aW5nXTtcclxuICAgIH0gfSwgdXNlclNldHRpbmdNb2R1bGVJbnRlcm5hbDIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgRGlzY29yZFRvTW9kdWxlc18xID0gcmVxdWlyZShcIi4uL0Rpc2NvcmRUb01vZHVsZXNcIik7XHJcbmxldCB1c2VyTW9kdWxlSW50ZXJhbDEgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0VXNlcik7XHJcbmxldCB1c2VyTW9kdWxlSW50ZXJhbDIgPSBEaXNjb3JkVG9Nb2R1bGVzXzEucmVxdWlyZU1vZHVsZShlID0+IGUuZGVmYXVsdCAmJiBlLmRlZmF1bHQuZ2V0Tm90ZSk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZ2V0VXNlcjogdXNlck1vZHVsZUludGVyYWwxLmdldFVzZXIsXHJcbiAgICBnZXRVc2VyczogdXNlck1vZHVsZUludGVyYWwxLmdldFVzZXJzLFxyXG4gICAgZm9yRWFjaDogdXNlck1vZHVsZUludGVyYWwxLmZvckVhY2gsXHJcbiAgICBmaW5kQnlUYWc6IHVzZXJNb2R1bGVJbnRlcmFsMS5maW5kQnlUYWcsXHJcbiAgICBmaWx0ZXI6IHVzZXJNb2R1bGVJbnRlcmFsMS5maWx0ZXIsXHJcbiAgICBnZXRDdXJyZW50VXNlcjogdXNlck1vZHVsZUludGVyYWwxLmdldEN1cnJlbnRVc2VyLFxyXG4gICAgZ2V0TnVsbGFibGVDdXJyZW50VXNlcjogdXNlck1vZHVsZUludGVyYWwxLmdldE51bGxhYmxlQ3VycmVudFVzZXIsXHJcbiAgICBnZXROb3RlOiB1c2VyTW9kdWxlSW50ZXJhbDIuZ2V0Tm90ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlc29sdmVVc2VySUQgPSBleHBvcnRzLmJpbmFyeVRvSUQgPSBleHBvcnRzLmlkVG9CaW5hcnkgPSBleHBvcnRzLmFwcGx5TWl4aW5zID0gZXhwb3J0cy5jcmVhdGVVc2VyID0gZXhwb3J0cy5jcmVhdGVNZXNzYWdlID0gZXhwb3J0cy5jcmVhdGVSb2xlID0gZXhwb3J0cy5jcmVhdGVHdWlsZE1lbWJlciA9IGV4cG9ydHMuY3JlYXRlR3VpbGQgPSBleHBvcnRzLmNyZWF0ZUNoYW5uZWwgPSB2b2lkIDA7XHJcbmNvbnN0IEJhc2VDaGFubmVsXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9CYXNlQ2hhbm5lbFwiKTtcclxuY29uc3QgR3VpbGRfMSA9IHJlcXVpcmUoXCIuLi9zdHJ1Y3R1cmVzL0d1aWxkXCIpO1xyXG5jb25zdCBUZXh0Q2hhbm5lbF8xID0gcmVxdWlyZShcIi4uL3N0cnVjdHVyZXMvVGV4dENoYW5uZWxcIik7XHJcbmNvbnN0IEd1aWxkTWVtYmVyXzEgPSByZXF1aXJlKFwiLi4vc3RydWN0dXJlcy9HdWlsZE1lbWJlclwiKTtcclxuY29uc3QgUm9sZV8xID0gcmVxdWlyZShcIi4uL3N0cnVjdHVyZXMvUm9sZVwiKTtcclxuY29uc3QgVXNlcl8xID0gcmVxdWlyZShcIi4uL3N0cnVjdHVyZXMvVXNlclwiKTtcclxuY29uc3QgTWVzc2FnZV8xID0gcmVxdWlyZShcIi4uL3N0cnVjdHVyZXMvTWVzc2FnZVwiKTtcclxuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChjaGFubmVsKSB7XHJcbiAgICBsZXQgY29uc3RydWN0b3IgPSBjaGFubmVsc1tjaGFubmVsLnR5cGVdIHx8IEJhc2VDaGFubmVsXzEuZGVmYXVsdDtcclxuICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoY2hhbm5lbCk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVDaGFubmVsID0gY3JlYXRlQ2hhbm5lbDtcclxuY29uc3QgY2hhbm5lbHMgPSBbXHJcbiAgICBUZXh0Q2hhbm5lbF8xLmRlZmF1bHRcclxuXTtcclxuZnVuY3Rpb24gY3JlYXRlR3VpbGQoZ3VpbGQpIHtcclxuICAgIHJldHVybiBuZXcgR3VpbGRfMS5kZWZhdWx0KGd1aWxkKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUd1aWxkID0gY3JlYXRlR3VpbGQ7XHJcbmZ1bmN0aW9uIGNyZWF0ZUd1aWxkTWVtYmVyKG1lbWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBHdWlsZE1lbWJlcl8xLmRlZmF1bHQobWVtYmVyKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUd1aWxkTWVtYmVyID0gY3JlYXRlR3VpbGRNZW1iZXI7XHJcbmZ1bmN0aW9uIGNyZWF0ZVJvbGUocm9sZSkge1xyXG4gICAgcmV0dXJuIG5ldyBSb2xlXzEuZGVmYXVsdChyb2xlKTtcclxufVxyXG5leHBvcnRzLmNyZWF0ZVJvbGUgPSBjcmVhdGVSb2xlO1xyXG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgTWVzc2FnZV8xLmRlZmF1bHQobWVzc2FnZSk7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVNZXNzYWdlID0gY3JlYXRlTWVzc2FnZTtcclxuZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VyKSB7XHJcbiAgICByZXR1cm4gbmV3IFVzZXJfMS5kZWZhdWx0KHVzZXIpO1xyXG59XHJcbmV4cG9ydHMuY3JlYXRlVXNlciA9IGNyZWF0ZVVzZXI7XHJcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yLCBiYXNlQ3RvcnMpIHtcclxuICAgIGJhc2VDdG9ycy5mb3JFYWNoKGJhc2VDdG9yID0+IHtcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICE9PSAnY29uc3RydWN0b3InKSB7XHJcbiAgICAgICAgICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGVbbmFtZV0gPSBiYXNlQ3Rvci5wcm90b3R5cGVbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYXBwbHlNaXhpbnMgPSBhcHBseU1peGlucztcclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYSBzbm93Zmxha2UgZnJvbSBhIGRlY2ltYWwgc3RyaW5nIHRvIGEgYml0IHN0cmluZy5cclxuICogQHBhcmFtICB7c3RyaW5nfSBudW0gU25vd2ZsYWtlIHRvIGJlIHRyYW5zZm9ybWVkXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBpZFRvQmluYXJ5KG51bSkge1xyXG4gICAgbGV0IGJpbiA9ICcnO1xyXG4gICAgbGV0IGhpZ2ggPSBwYXJzZUludChudW0uc2xpY2UoMCwgLTEwKSkgfHwgMDtcclxuICAgIGxldCBsb3cgPSBwYXJzZUludChudW0uc2xpY2UoLTEwKSk7XHJcbiAgICB3aGlsZSAobG93ID4gMCB8fCBoaWdoID4gMCkge1xyXG4gICAgICAgIGJpbiA9IFN0cmluZyhsb3cgJiAxKSArIGJpbjtcclxuICAgICAgICBsb3cgPSBNYXRoLmZsb29yKGxvdyAvIDIpO1xyXG4gICAgICAgIGlmIChoaWdoID4gMCkge1xyXG4gICAgICAgICAgICBsb3cgKz0gNTAwMDAwMDAwMCAqIChoaWdoICUgMik7XHJcbiAgICAgICAgICAgIGhpZ2ggPSBNYXRoLmZsb29yKGhpZ2ggLyAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmluO1xyXG59XHJcbmV4cG9ydHMuaWRUb0JpbmFyeSA9IGlkVG9CaW5hcnk7XHJcbi8qKlxyXG4qIFRyYW5zZm9ybXMgYSBzbm93Zmxha2UgZnJvbSBhIGJpdCBzdHJpbmcgdG8gYSBkZWNpbWFsIHN0cmluZy5cclxuKiBAcGFyYW0gIHtzdHJpbmd9IG51bSBCaXQgc3RyaW5nIHRvIGJlIHRyYW5zZm9ybWVkXHJcbiogQHJldHVybnMge3N0cmluZ31cclxuKiBAcHJpdmF0ZVxyXG4qL1xyXG5mdW5jdGlvbiBiaW5hcnlUb0lEKG51bSkge1xyXG4gICAgbGV0IGRlYyA9ICcnO1xyXG4gICAgd2hpbGUgKG51bS5sZW5ndGggPiA1MCkge1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBwYXJzZUludChudW0uc2xpY2UoMCwgLTMyKSwgMik7XHJcbiAgICAgICAgY29uc3QgbG93ID0gcGFyc2VJbnQoKGhpZ2ggJSAxMCkudG9TdHJpbmcoMikgKyBudW0uc2xpY2UoLTMyKSwgMik7XHJcbiAgICAgICAgZGVjID0gKGxvdyAlIDEwKS50b1N0cmluZygpICsgZGVjO1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IoaGlnaCAvIDEwKS50b1N0cmluZygyKSArXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IobG93IC8gMTApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMilcclxuICAgICAgICAgICAgICAgIC5wYWRTdGFydCgzMiwgJzAnKTtcclxuICAgIH1cclxuICAgIGxldCBudW0yID0gcGFyc2VJbnQobnVtLCAyKTtcclxuICAgIHdoaWxlIChudW0yID4gMCkge1xyXG4gICAgICAgIGRlYyA9IChudW0yICUgMTApLnRvU3RyaW5nKCkgKyBkZWM7XHJcbiAgICAgICAgbnVtMiA9IE1hdGguZmxvb3IobnVtMiAvIDEwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWM7XHJcbn1cclxuZXhwb3J0cy5iaW5hcnlUb0lEID0gYmluYXJ5VG9JRDtcclxuZnVuY3Rpb24gcmVzb2x2ZVVzZXJJRCh1c2VyKSB7XHJcbiAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHVzZXI7IC8vIElEXHJcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIFVzZXJfMS5kZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB1c2VyLmlkOyAvLyBVc2VyXHJcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIE1lc3NhZ2VfMS5kZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB1c2VyLmF1dGhvci5pZDsgLy8gTWVzc2FnZSBBdXRob3JcclxuICAgIGlmICh1c2VyIGluc3RhbmNlb2YgR3VpbGRfMS5kZWZhdWx0KVxyXG4gICAgICAgIHJldHVybiB1c2VyLm93bmVySUQ7IC8vIEd1aWxkXHJcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIEd1aWxkTWVtYmVyXzEuZGVmYXVsdClcclxuICAgICAgICByZXR1cm4gdXNlci5pZDsgLy8gR3VpbGRNZW1iZXJcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmV4cG9ydHMucmVzb2x2ZVVzZXJJRCA9IHJlc29sdmVVc2VySUQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9