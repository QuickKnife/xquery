/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _core = __webpack_require__(2);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_core2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _arr = __webpack_require__(3);

	var _arr2 = _interopRequireDefault(_arr);

	var _document = __webpack_require__(4);

	var _document2 = _interopRequireDefault(_document);

	var _slice2 = __webpack_require__(5);

	var _slice3 = _interopRequireDefault(_slice2);

	var _concat = __webpack_require__(6);

	var _concat2 = _interopRequireDefault(_concat);

	var _push = __webpack_require__(7);

	var _push2 = _interopRequireDefault(_push);

	var _indexOf = __webpack_require__(8);

	var _indexOf2 = _interopRequireDefault(_indexOf);

	var _class2type = __webpack_require__(9);

	var _class2type2 = _interopRequireDefault(_class2type);

	var _toString = __webpack_require__(10);

	var _toString2 = _interopRequireDefault(_toString);

	var _hasOwn = __webpack_require__(11);

	var _hasOwn2 = _interopRequireDefault(_hasOwn);

	var _support = __webpack_require__(12);

	var _support2 = _interopRequireDefault(_support);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var version = "@VERSION",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {

	    // The jQuery object is actually just the init constructor 'enhanced'
	    // Need init if jQuery is called (just allow error to be thrown if not included)
	    return new jQuery.fn.init(selector, context);
	},


	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
	    return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

	    // The current version of jQuery being used
	    jquery: version,

	    constructor: jQuery,

	    // The default length of a jQuery object is 0
	    length: 0,

	    toArray: function toArray() {
	        return _slice3.default.call(this);
	    },

	    // Get the Nth element in the matched element set OR
	    // Get the whole matched element set as a clean array
	    get: function get(num) {
	        return num != null ?

	        // Return just the one element from the set
	        num < 0 ? this[num + this.length] : this[num] :

	        // Return all the elements in a clean array
	        _slice3.default.call(this);
	    },

	    // Take an array of elements and push it onto the stack
	    // (returning the new matched element set)
	    pushStack: function pushStack(elems) {

	        // Build a new jQuery matched element set
	        var ret = jQuery.merge(this.constructor(), elems);

	        // Add the old object onto the stack (as a reference)
	        ret.prevObject = this;

	        // Return the newly-formed element set
	        return ret;
	    },

	    // Execute a callback for every element in the matched set.
	    each: function each(callback) {
	        return jQuery.each(this, callback);
	    },

	    map: function map(callback) {
	        return this.pushStack(jQuery.map(this, function (elem, i) {
	            return callback.call(elem, i, elem);
	        }));
	    },

	    slice: function slice() {
	        return this.pushStack(_slice3.default.apply(this, arguments));
	    },

	    first: function first() {
	        return this.eq(0);
	    },

	    last: function last() {
	        return this.eq(-1);
	    },

	    eq: function eq(i) {
	        var len = this.length,
	            j = +i + (i < 0 ? len : 0);
	        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
	    },

	    end: function end() {
	        return this.prevObject || this.constructor();
	    },

	    // For internal use only.
	    // Behaves like an Array's method, not like a jQuery method.
	    push: _push2.default,
	    sort: _arr2.default.sort,
	    splice: _arr2.default.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
	    var options,
	        name,
	        src,
	        copy,
	        copyIsArray,
	        clone,
	        target = arguments[0] || {},
	        i = 1,
	        length = arguments.length,
	        deep = false;

	    // Handle a deep copy situation
	    if (typeof target === "boolean") {
	        deep = target;

	        // Skip the boolean and the target
	        target = arguments[i] || {};
	        i++;
	    }

	    // Handle case when target is a string or something (possible in deep copy)
	    if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
	        target = {};
	    }

	    // Extend jQuery itself if only one argument is passed
	    if (i === length) {
	        target = this;
	        i--;
	    }

	    for (; i < length; i++) {

	        // Only deal with non-null/undefined values
	        if ((options = arguments[i]) != null) {

	            // Extend the base object
	            for (name in options) {
	                src = target[name];
	                copy = options[name];

	                // Prevent never-ending loop
	                if (target === copy) {
	                    continue;
	                }

	                // Recurse if we're merging plain objects or arrays
	                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

	                    if (copyIsArray) {
	                        copyIsArray = false;
	                        clone = src && jQuery.isArray(src) ? src : [];
	                    } else {
	                        clone = src && jQuery.isPlainObject(src) ? src : {};
	                    }

	                    // Never move original objects, clone them
	                    target[name] = jQuery.extend(deep, clone, copy);

	                    // Don't bring in undefined values
	                } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	            }
	        }
	    }

	    // Return the modified object
	    return target;
	};

	jQuery.extend({

	    // Unique for each copy of jQuery on the page
	    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

	    // Assume jQuery is ready without the ready module
	    isReady: true,

	    error: function error(msg) {
	        throw new Error(msg);
	    },

	    noop: function noop() {},

	    isFunction: function isFunction(obj) {
	        return jQuery.type(obj) === "function";
	    },

	    isArray: Array.isArray,

	    isWindow: function isWindow(obj) {
	        return obj != null && obj === obj.window;
	    },

	    isNumeric: function isNumeric(obj) {

	        // As of jQuery 3.0, isNumeric is limited to
	        // strings and numbers (primitives or objects)
	        // that can be coerced to finite numbers (gh-2662)
	        var type = jQuery.type(obj);
	        return (type === "number" || type === "string") && obj - parseFloat(obj) + 1 >= 0;
	    },

	    isPlainObject: function isPlainObject(obj) {

	        // Not plain objects:
	        // - Any object or value whose internal [[Class]] property is not "[object Object]"
	        // - DOM nodes
	        // - window
	        if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
	            return false;
	        }

	        if (obj.constructor && !_hasOwn2.default.call(obj.constructor.prototype, "isPrototypeOf")) {
	            return false;
	        }

	        // If the function hasn't returned already, we're confident that
	        // |obj| is a plain object, created by {} or constructed with new Object
	        return true;
	    },

	    isEmptyObject: function isEmptyObject(obj) {
	        var name;
	        for (name in obj) {
	            return false;
	        }
	        return true;
	    },

	    type: function type(obj) {
	        if (obj == null) {
	            return obj + "";
	        }

	        // Support: Android<4.0 (functionish RegExp)
	        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? _class2type2.default[_toString2.default.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	    },

	    // Evaluates a script in a global context
	    globalEval: function globalEval(code) {
	        var script = _document2.default.createElement("script");

	        script.text = code;
	        _document2.default.head.appendChild(script).parentNode.removeChild(script);
	    },

	    // Convert dashed to camelCase; used by the css and data modules
	    // Support: IE9-11+
	    // Microsoft forgot to hump their vendor prefix (#9572)
	    camelCase: function camelCase(string) {
	        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	    },

	    nodeName: function nodeName(elem, name) {
	        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	    },

	    each: function each(obj, callback) {
	        var length,
	            i = 0;

	        if (isArrayLike(obj)) {
	            length = obj.length;
	            for (; i < length; i++) {
	                if (callback.call(obj[i], i, obj[i]) === false) {
	                    break;
	                }
	            }
	        } else {
	            for (i in obj) {
	                if (callback.call(obj[i], i, obj[i]) === false) {
	                    break;
	                }
	            }
	        }

	        return obj;
	    },

	    // Support: Android<4.1
	    trim: function trim(text) {
	        return text == null ? "" : (text + "").replace(rtrim, "");
	    },

	    // results is for internal usage only
	    makeArray: function makeArray(arr, results) {
	        var ret = results || [];

	        if (arr != null) {
	            if (isArrayLike(Object(arr))) {
	                jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
	            } else {
	                _push2.default.call(ret, arr);
	            }
	        }

	        return ret;
	    },

	    inArray: function inArray(elem, arr, i) {
	        return arr == null ? -1 : _indexOf2.default.call(arr, elem, i);
	    },

	    // Support: Android<4.1, PhantomJS<2
	    // push.apply(_, arraylike) throws on ancient WebKit
	    merge: function merge(first, second) {
	        var len = +second.length,
	            j = 0,
	            i = first.length;

	        for (; j < len; j++) {
	            first[i++] = second[j];
	        }

	        first.length = i;

	        return first;
	    },

	    grep: function grep(elems, callback, invert) {
	        var callbackInverse,
	            matches = [],
	            i = 0,
	            length = elems.length,
	            callbackExpect = !invert;

	        // Go through the array, only saving the items
	        // that pass the validator function
	        for (; i < length; i++) {
	            callbackInverse = !callback(elems[i], i);
	            if (callbackInverse !== callbackExpect) {
	                matches.push(elems[i]);
	            }
	        }

	        return matches;
	    },

	    // arg is for internal usage only
	    map: function map(elems, callback, arg) {
	        var length,
	            value,
	            i = 0,
	            ret = [];

	        // Go through the array, translating each of the items to their new values
	        if (isArrayLike(elems)) {
	            length = elems.length;
	            for (; i < length; i++) {
	                value = callback(elems[i], i, arg);

	                if (value != null) {
	                    ret.push(value);
	                }
	            }

	            // Go through every key on the object,
	        } else {
	                for (i in elems) {
	                    value = callback(elems[i], i, arg);

	                    if (value != null) {
	                        ret.push(value);
	                    }
	                }
	            }

	        // Flatten any nested arrays
	        return _concat2.default.apply([], ret);
	    },

	    // A global GUID counter for objects
	    guid: 1,

	    // Bind a function to a context, optionally partially applying any
	    // arguments.
	    proxy: function proxy(fn, context) {
	        var tmp, args, proxy;

	        if (typeof context === "string") {
	            tmp = fn[context];
	            context = fn;
	            fn = tmp;
	        }

	        // Quick check to determine if target is callable, in the spec
	        // this throws a TypeError, but we will just return undefined.
	        if (!jQuery.isFunction(fn)) {
	            return undefined;
	        }

	        // Simulated bind
	        args = _slice3.default.call(arguments, 2);
	        proxy = function proxy() {
	            return fn.apply(context || this, args.concat(_slice3.default.call(arguments)));
	        };

	        // Set the guid of unique handler to the same of original handler, so it can be removed
	        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	        return proxy;
	    },

	    now: Date.now,

	    // jQuery.support is not used in Core but other projects attach their
	    // properties to it so it needs to exist.
	    support: _support2.default
	});

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if (typeof Symbol === "function") {
	    jQuery.fn[Symbol.iterator] = _arr2.default[Symbol.iterator];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
	    _class2type2.default["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

	    // Support: iOS 8.2 (not reproducible in simulator)
	    // `in` check used to prevent JIT error (gh-2145)
	    // hasOwn isn't used here due to false negatives
	    // regarding Nodelist length in IE
	    var length = !!obj && "length" in obj && obj.length,
	        type = jQuery.type(obj);

	    if (type === "function" || jQuery.isWindow(obj)) {
	        return false;
	    }

	    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}

	exports.default = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = window.document;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _arr = __webpack_require__(3);

	var _arr2 = _interopRequireDefault(_arr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _arr2.default.slice;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _arr = __webpack_require__(3);

	var _arr2 = _interopRequireDefault(_arr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _arr2.default.concat;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _arr = __webpack_require__(3);

	var _arr2 = _interopRequireDefault(_arr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _arr2.default.push;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _arr = __webpack_require__(3);

	var _arr2 = _interopRequireDefault(_arr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _arr2.default.indexOf;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _class2type = __webpack_require__(9);

	var _class2type2 = _interopRequireDefault(_class2type);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _class2type2.default.toString;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _class2type = __webpack_require__(9);

	var _class2type2 = _interopRequireDefault(_class2type);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _class2type2.default.hasOwnProperty;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// All support tests are defined in their respective modules.

	exports.default = {};

/***/ }
/******/ ]);