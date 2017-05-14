webpackHotUpdate(0,{

/***/ "./node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
        }
    }

    return targetComponent;
};

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__("./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__("./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__("./node_modules/lodash-es/_getRawTag.js");

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__("./node_modules/lodash-es/_objectToString.js");

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__("./node_modules/lodash-es/_overArg.js");

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__("./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__("./node_modules/lodash-es/_freeGlobal.js");

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__("./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__("./node_modules/lodash-es/_getPrototype.js");

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__("./node_modules/lodash-es/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

module.exports = function () {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");

var _warning = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store, storeSubscription: null };
  };

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return Provider;
}(_react.Component);

exports.default = Provider;


if (process.env.NODE_ENV !== 'production') {
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;

    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.propTypes = {
  store: _PropTypes.storeShape.isRequired,
  children: _propTypes2.default.element.isRequired
};
Provider.childContextTypes = {
  store: _PropTypes.storeShape.isRequired,
  storeSubscription: _PropTypes.subscriptionShape
};
Provider.displayName = 'Provider';
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = connectAdvanced;

var _hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__("./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__("./node_modules/react/react.js");

var _Subscription = __webpack_require__("./node_modules/react-redux/es/utils/Subscription.js");

var _Subscription2 = _interopRequireDefault(_Subscription);

var _PropTypes = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(_react.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createConnect = createConnect;

var _connectAdvanced = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _shallowEqual = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mapDispatchToProps = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");

var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

var _mapStateToProps = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");

var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

var _mergeProps = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");

var _mergeProps2 = _interopRequireDefault(_mergeProps);

var _selectorFactory = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");

var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

exports.default = createConnect();

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _wrapMapToProps = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

var _wrapMapToProps = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

var _verifyPlainObject = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _verifySubselectors = __webpack_require__("./node_modules/react-redux/es/connect/verifySubselectors.js");

var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifySubselectors;

var _warning = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = __webpack_require__("./node_modules/react-redux/es/utils/verifyPlainObject.js");

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.connectAdvanced = exports.Provider = undefined;

var _Provider = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");

var _Provider2 = _interopRequireDefault(_Provider);

var _connectAdvanced = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _connect = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider2.default;
exports.connectAdvanced = _connectAdvanced2.default;
exports.connect = _connect2.default;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = exports.subscriptionShape = undefined;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
  trySubscribe: _propTypes2.default.func.isRequired,
  tryUnsubscribe: _propTypes2.default.func.isRequired,
  notifyNestedSubs: _propTypes2.default.func.isRequired,
  isSubscribed: _propTypes2.default.func.isRequired
});

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  dispatch: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyPlainObject;

var _isPlainObject = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__("./node_modules/react-redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject2.default)(value)) {
    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__("./node_modules/redux/es/compose.js");

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux/es/bindActionCreators.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/redux/es/combineReducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__("./node_modules/redux/es/createStore.js");

var _isPlainObject = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__("./node_modules/redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/redux/es/compose.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),

/***/ "./node_modules/redux/es/createStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__("./node_modules/lodash-es/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__("./node_modules/symbol-observable/index.js");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__("./node_modules/redux/es/createStore.js");

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__("./node_modules/redux/es/combineReducers.js");

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__("./node_modules/redux/es/bindActionCreators.js");

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__("./node_modules/redux/es/applyMiddleware.js");

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__("./node_modules/redux/es/compose.js");

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__("./node_modules/redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/redux/es/utils/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/symbol-observable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/symbol-observable/lib/index.js");

/***/ }),

/***/ "./node_modules/symbol-observable/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__("./node_modules/symbol-observable/lib/ponyfill.js");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/lib/ponyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LoginFormContainer = __webpack_require__("./src/containers/LoginFormContainer.js");

var _LoginFormContainer2 = _interopRequireDefault(_LoginFormContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_LoginFormContainer2.default, { handleSubmit: handleSubmit }), document.body);

/***/ }),

/***/ "./src/containers/LoginFormContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _LoginForm = __webpack_require__("./src/components/LoginForm.js");

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ownProps = arguments[1];

  console.log(state);
  console.log(ownProps);
  return {
    username: state.username,
    isLoginSucceed: state.isLoginSucceed
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: function handleSubmit(username, password) {
      console.log("submit form.");
      console.log("username=" + username);
      console.log("password=" + password);
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)()(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzPzc3OWIiLCJ3ZWJwYWNrOi8vLy4vfi9pbnZhcmlhbnQvYnJvd3Nlci5qcz85NTIwIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19TeW1ib2wuanM/NjRjNCIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcz9kYmJiIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzPzMwNTMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcz83NzM1Iiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19nZXRSYXdUYWcuanM/MzcyZiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanM/ODkyZSIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fb3ZlckFyZy5qcz8wYTYwIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19yb290LmpzPzAyZmYiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzPzRhZWEiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qcz9mNWE2Iiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanM/MzM2OCIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvaW5kZXguanM/MTMxNyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanM/YjhjYiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzP2EyNmMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2Nvbm5lY3QuanM/MGJhMiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLmpzPzM4MDMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcz9mYTE1Iiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tZXJnZVByb3BzLmpzP2EzMzIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qcz81YThiIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanM/NTc4NCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMuanM/MWVlZSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzPzViYzUiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9lcy91dGlscy9Qcm9wVHlwZXMuanM/YzM2ZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2VzL3V0aWxzL1N1YnNjcmlwdGlvbi5qcz9kNjM3Iiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzP2NhMjciLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9lcy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC5qcz9hYWU1Iiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcz81ZGNjIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvYXBwbHlNaWRkbGV3YXJlLmpzPzcwMWMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanM/M2Q0YSIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcz9hM2Y1Iiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvY29tcG9zZS5qcz80MWQ2Iiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvY3JlYXRlU3RvcmUuanM/OGMzZiIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2luZGV4LmpzPzA3ODQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzPzk4NTMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcz82OTgyIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzPzYzMWYiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanM/NTA1ZCIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcz9jM2MyIiwid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwibmFtZSIsImxlbmd0aCIsInByb3RvdHlwZSIsImNhbGxlciIsImFyZ3VtZW50cyIsImFyaXR5IiwiaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJ0YXJnZXRDb21wb25lbnQiLCJzb3VyY2VDb21wb25lbnQiLCJjdXN0b21TdGF0aWNzIiwia2V5cyIsImdldE93blByb3BlcnR5TmFtZXMiLCJjb25jYXQiLCJpIiwiZXJyb3IiLCJpbnZhcmlhbnQiLCJjb25kaXRpb24iLCJmb3JtYXQiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ1bmRlZmluZWQiLCJFcnJvciIsImFyZ3MiLCJhcmdJbmRleCIsInJlcGxhY2UiLCJmcmFtZXNUb1BvcCIsIlN5bWJvbCIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsInZhbHVlIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImdldFByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0UHJvdG8iLCJoYXNPd25Qcm9wZXJ0eSIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJnZXRSYXdUYWciLCJpc093biIsImNhbGwiLCJ0YWciLCJ1bm1hc2tlZCIsInJlc3VsdCIsIm9iamVjdFRvU3RyaW5nIiwib3ZlckFyZyIsImZ1bmMiLCJ0cmFuc2Zvcm0iLCJhcmciLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJpc09iamVjdExpa2UiLCJvYmplY3RUYWciLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJvYmplY3RDdG9yU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsInByb3RvIiwiQ3RvciIsImNvbnN0cnVjdG9yIiwiZW1wdHlGdW5jdGlvbiIsInJlcXVpcmUiLCJzaGltIiwiaXNSZXF1aXJlZCIsImdldFNoaW0iLCJSZWFjdFByb3BUeXBlcyIsImFycmF5IiwiYm9vbCIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsInN5bWJvbCIsImFueSIsImFycmF5T2YiLCJlbGVtZW50IiwiaW5zdGFuY2VPZiIsIm5vZGUiLCJvYmplY3RPZiIsIm9uZU9mIiwib25lT2ZUeXBlIiwic2hhcGUiLCJjaGVja1Byb3BUeXBlcyIsIlByb3BUeXBlcyIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsImZvciIsImlzVmFsaWRFbGVtZW50IiwiJCR0eXBlb2YiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpZFdhcm5BYm91dFJlY2VpdmluZ1N0b3JlIiwid2FybkFib3V0UmVjZWl2aW5nU3RvcmUiLCJQcm92aWRlciIsIl9Db21wb25lbnQiLCJnZXRDaGlsZENvbnRleHQiLCJzdG9yZSIsInN0b3JlU3Vic2NyaXB0aW9uIiwicHJvcHMiLCJjb250ZXh0IiwiX3RoaXMiLCJyZW5kZXIiLCJvbmx5IiwiY2hpbGRyZW4iLCJkZWZhdWx0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIm5leHRTdG9yZSIsImNvbm5lY3RBZHZhbmNlZCIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwia2V5IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqIiwiaW5kZXhPZiIsImhvdFJlbG9hZGluZ1ZlcnNpb24iLCJkdW1teVN0YXRlIiwibm9vcCIsIm1ha2VTZWxlY3RvclN0YXRlZnVsIiwic291cmNlU2VsZWN0b3IiLCJzZWxlY3RvciIsInJ1biIsInJ1bkNvbXBvbmVudFNlbGVjdG9yIiwiZ2V0U3RhdGUiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJzZWxlY3RvckZhY3RvcnkiLCJfY29udGV4dFR5cGVzIiwiX2NoaWxkQ29udGV4dFR5cGVzIiwiX3JlZiIsIl9yZWYkZ2V0RGlzcGxheU5hbWUiLCJnZXREaXNwbGF5TmFtZSIsIl9yZWYkbWV0aG9kTmFtZSIsIm1ldGhvZE5hbWUiLCJfcmVmJHJlbmRlckNvdW50UHJvcCIsInJlbmRlckNvdW50UHJvcCIsIl9yZWYkc2hvdWxkSGFuZGxlU3RhdCIsInNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyIsIl9yZWYkc3RvcmVLZXkiLCJzdG9yZUtleSIsIl9yZWYkd2l0aFJlZiIsIndpdGhSZWYiLCJjb25uZWN0T3B0aW9ucyIsInN1YnNjcmlwdGlvbktleSIsInZlcnNpb24iLCJ3cmFwV2l0aENvbm5lY3QiLCJXcmFwcGVkQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIndyYXBwZWRDb21wb25lbnROYW1lIiwic2VsZWN0b3JGYWN0b3J5T3B0aW9ucyIsIkNvbm5lY3QiLCJzdGF0ZSIsInJlbmRlckNvdW50IiwicHJvcHNNb2RlIiwiQm9vbGVhbiIsInNldFdyYXBwZWRJbnN0YW5jZSIsImJpbmQiLCJpbml0U2VsZWN0b3IiLCJpbml0U3Vic2NyaXB0aW9uIiwiX3JlZjIiLCJzdWJzY3JpcHRpb24iLCJjb21wb25lbnREaWRNb3VudCIsInRyeVN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ0cnlVbnN1YnNjcmliZSIsIm5vdGlmeU5lc3RlZFN1YnMiLCJnZXRXcmFwcGVkSW5zdGFuY2UiLCJ3cmFwcGVkSW5zdGFuY2UiLCJyZWYiLCJkaXNwYXRjaCIsInBhcmVudFN1YiIsIm9uU3RhdGVDaGFuZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGUiLCJzZXRTdGF0ZSIsImlzU3Vic2NyaWJlZCIsImFkZEV4dHJhUHJvcHMiLCJ3aXRoRXh0cmFzIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsImNyZWF0ZUNvbm5lY3QiLCJtYXRjaCIsImZhY3RvcmllcyIsIm9wdGlvbnMiLCJzdHJpY3RFcXVhbCIsIl9yZWYkY29ubmVjdEhPQyIsImNvbm5lY3RIT0MiLCJfcmVmJG1hcFN0YXRlVG9Qcm9wc0YiLCJtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMiLCJfcmVmJG1hcERpc3BhdGNoVG9Qcm8iLCJtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMiLCJfcmVmJG1lcmdlUHJvcHNGYWN0b3IiLCJtZXJnZVByb3BzRmFjdG9yaWVzIiwiX3JlZiRzZWxlY3RvckZhY3RvcnkiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWVyZ2VQcm9wcyIsIl9yZWYyJHB1cmUiLCJwdXJlIiwiX3JlZjIkYXJlU3RhdGVzRXF1YWwiLCJhcmVTdGF0ZXNFcXVhbCIsIl9yZWYyJGFyZU93blByb3BzRXF1YSIsImFyZU93blByb3BzRXF1YWwiLCJfcmVmMiRhcmVTdGF0ZVByb3BzRXEiLCJhcmVTdGF0ZVByb3BzRXF1YWwiLCJfcmVmMiRhcmVNZXJnZWRQcm9wc0UiLCJhcmVNZXJnZWRQcm9wc0VxdWFsIiwiZXh0cmFPcHRpb25zIiwiaW5pdE1hcFN0YXRlVG9Qcm9wcyIsImluaXRNYXBEaXNwYXRjaFRvUHJvcHMiLCJpbml0TWVyZ2VQcm9wcyIsIndoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uIiwid2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZyIsIndoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc09iamVjdCIsIndoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIiwid2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZyIsImRlZmF1bHRNZXJnZVByb3BzIiwid3JhcE1lcmdlUHJvcHNGdW5jIiwid2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uIiwid2hlbk1lcmdlUHJvcHNJc09taXR0ZWQiLCJzdGF0ZVByb3BzIiwiZGlzcGF0Y2hQcm9wcyIsIm93blByb3BzIiwiaW5pdE1lcmdlUHJvcHNQcm94eSIsImhhc1J1bk9uY2UiLCJtZXJnZWRQcm9wcyIsIm1lcmdlUHJvcHNQcm94eSIsIm5leHRNZXJnZWRQcm9wcyIsImltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkiLCJwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSIsImZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkiLCJpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3IiLCJoYXNSdW5BdExlYXN0T25jZSIsImhhbmRsZUZpcnN0Q2FsbCIsImZpcnN0U3RhdGUiLCJmaXJzdE93blByb3BzIiwiaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSIsImRlcGVuZHNPbk93blByb3BzIiwiaGFuZGxlTmV3UHJvcHMiLCJoYW5kbGVOZXdTdGF0ZSIsIm5leHRTdGF0ZVByb3BzIiwic3RhdGVQcm9wc0NoYW5nZWQiLCJoYW5kbGVTdWJzZXF1ZW50Q2FsbHMiLCJuZXh0U3RhdGUiLCJuZXh0T3duUHJvcHMiLCJwcm9wc0NoYW5nZWQiLCJzdGF0ZUNoYW5nZWQiLCJwdXJlRmluYWxQcm9wc1NlbGVjdG9yIiwidmVyaWZ5U3Vic2VsZWN0b3JzIiwidmVyaWZ5Iiwid3JhcE1hcFRvUHJvcHNDb25zdGFudCIsImdldERlcGVuZHNPbk93blByb3BzIiwid3JhcE1hcFRvUHJvcHNGdW5jIiwiZ2V0Q29uc3RhbnQiLCJpbml0Q29uc3RhbnRTZWxlY3RvciIsImNvbnN0YW50IiwiY29uc3RhbnRTZWxlY3RvciIsIm1hcFRvUHJvcHMiLCJpbml0UHJveHlTZWxlY3RvciIsInByb3h5IiwibWFwVG9Qcm9wc1Byb3h5Iiwic3RhdGVPckRpc3BhdGNoIiwiZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSIsInN1YnNjcmlwdGlvblNoYXBlIiwic3RvcmVTaGFwZSIsInN1YnNjcmliZSIsIkNMRUFSRUQiLCJudWxsTGlzdGVuZXJzIiwibm90aWZ5IiwiY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uIiwiY3VycmVudCIsIm5leHQiLCJjbGVhciIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwic2xpY2UiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJzcGxpY2UiLCJTdWJzY3JpcHRpb24iLCJhZGROZXN0ZWRTdWIiLCJzaGFsbG93RXF1YWwiLCJoYXNPd24iLCJpcyIsIngiLCJ5Iiwib2JqQSIsIm9iakIiLCJrZXlzQSIsImtleXNCIiwidmVyaWZ5UGxhaW5PYmplY3QiLCJ3YXJuaW5nIiwibWVzc2FnZSIsImNvbnNvbGUiLCJhcHBseU1pZGRsZXdhcmUiLCJfbGVuIiwibWlkZGxld2FyZXMiLCJBcnJheSIsIl9rZXkiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJwcmVsb2FkZWRTdGF0ZSIsImVuaGFuY2VyIiwiX2Rpc3BhdGNoIiwiY2hhaW4iLCJtaWRkbGV3YXJlQVBJIiwiYWN0aW9uIiwibWFwIiwibWlkZGxld2FyZSIsImFwcGx5IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYmluZEFjdGlvbkNyZWF0b3IiLCJhY3Rpb25DcmVhdG9yIiwiYWN0aW9uQ3JlYXRvcnMiLCJib3VuZEFjdGlvbkNyZWF0b3JzIiwiY29tYmluZVJlZHVjZXJzIiwiZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UiLCJhY3Rpb25UeXBlIiwiYWN0aW9uTmFtZSIsImdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UiLCJpbnB1dFN0YXRlIiwicmVkdWNlcnMiLCJ1bmV4cGVjdGVkS2V5Q2FjaGUiLCJyZWR1Y2VyS2V5cyIsImFyZ3VtZW50TmFtZSIsIklOSVQiLCJqb2luIiwidW5leHBlY3RlZEtleXMiLCJmaWx0ZXIiLCJmb3JFYWNoIiwiYXNzZXJ0UmVkdWNlclNhbml0eSIsImluaXRpYWxTdGF0ZSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJzcGxpdCIsImZpbmFsUmVkdWNlcnMiLCJmaW5hbFJlZHVjZXJLZXlzIiwic2FuaXR5RXJyb3IiLCJjb21iaW5hdGlvbiIsIndhcm5pbmdNZXNzYWdlIiwiaGFzQ2hhbmdlZCIsInByZXZpb3VzU3RhdGVGb3JLZXkiLCJuZXh0U3RhdGVGb3JLZXkiLCJlcnJvck1lc3NhZ2UiLCJjb21wb3NlIiwiZnVuY3MiLCJsYXN0IiwicmVzdCIsInJlZHVjZVJpZ2h0IiwiY29tcG9zZWQiLCJBY3Rpb25UeXBlcyIsImN1cnJlbnRSZWR1Y2VyIiwiY3VycmVudFN0YXRlIiwiY3VycmVudExpc3RlbmVycyIsIm5leHRMaXN0ZW5lcnMiLCJpc0Rpc3BhdGNoaW5nIiwiZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycyIsImluZGV4IiwicmVwbGFjZVJlZHVjZXIiLCJuZXh0UmVkdWNlciIsIm9ic2VydmFibGUiLCJvdXRlclN1YnNjcmliZSIsIm9ic2VydmVyIiwib2JzZXJ2ZVN0YXRlIiwiaXNDcnVzaGVkIiwiZGVmaW5lUHJvcGVydHkiLCJfcG9ueWZpbGwiLCJfcG9ueWZpbGwyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJ3aW5kb3ciLCJzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwiLCJfU3ltYm9sIiwiZyIsImV2YWwiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImdldCIsImwiLCJoYW5kbGVTdWJtaXQiLCJkb2N1bWVudCIsImJvZHkiLCJsb2ciLCJ1c2VybmFtZSIsImlzTG9naW5TdWNjZWVkIiwicGFzc3dvcmQiLCJMb2dpbkZvcm1Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBSUE7O0FBRUEsSUFBSUEsZ0JBQWdCO0FBQ2hCQyx1QkFBbUIsSUFESDtBQUVoQkMsa0JBQWMsSUFGRTtBQUdoQkMsa0JBQWMsSUFIRTtBQUloQkMsaUJBQWEsSUFKRztBQUtoQkMscUJBQWlCLElBTEQ7QUFNaEJDLFlBQVEsSUFOUTtBQU9oQkMsZUFBVyxJQVBLO0FBUWhCQyxVQUFNO0FBUlUsQ0FBcEI7O0FBV0EsSUFBSUMsZ0JBQWdCO0FBQ2hCQyxVQUFNLElBRFU7QUFFaEJDLFlBQVEsSUFGUTtBQUdoQkMsZUFBVyxJQUhLO0FBSWhCQyxZQUFRLElBSlE7QUFLaEJDLGVBQVcsSUFMSztBQU1oQkMsV0FBTztBQU5TLENBQXBCOztBQVNBLElBQUlDLG1DQUFtQyxPQUFPQyxPQUFPQyxxQkFBZCxLQUF3QyxVQUEvRTs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxvQkFBVCxDQUE4QkMsZUFBOUIsRUFBK0NDLGVBQS9DLEVBQWdFQyxhQUFoRSxFQUErRTtBQUM1RixRQUFJ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QUFDQTVGLGNBQVEyRixHQUFSLENBQVksY0FBWUcsUUFBeEI7QUFDRDtBQUxJLEdBQVA7QUFPRCxDQVJEOztBQVVBLElBQU1DLHFCQUFxQiwrQ0FBM0I7O2tCQUVlQSxrQiIsImZpbGUiOiIwLmNjM2UxZGUzODM3ZjExY2JjZGNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBjdXN0b21TdGF0aWNzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5c1tpXV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5c1tpXV0gJiYgKCFjdXN0b21TdGF0aWNzIHx8ICFjdXN0b21TdGF0aWNzW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudFtrZXlzW2ldXSA9IHNvdXJjZUNvbXBvbmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19TeW1ib2wuanMiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICBmdW5jdGlvbiBzaGltKCkge1xuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcHJvcC10eXBlcy9pbmRleC5qcyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzdG9yZVNoYXBlLCBzdWJzY3JpcHRpb25TaGFwZSB9IGZyb20gJy4uL3V0aWxzL1Byb3BUeXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxudmFyIGRpZFdhcm5BYm91dFJlY2VpdmluZ1N0b3JlID0gZmFsc2U7XG5mdW5jdGlvbiB3YXJuQWJvdXRSZWNlaXZpbmdTdG9yZSgpIHtcbiAgaWYgKGRpZFdhcm5BYm91dFJlY2VpdmluZ1N0b3JlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRpZFdhcm5BYm91dFJlY2VpdmluZ1N0b3JlID0gdHJ1ZTtcblxuICB3YXJuaW5nKCc8UHJvdmlkZXI+IGRvZXMgbm90IHN1cHBvcnQgY2hhbmdpbmcgYHN0b3JlYCBvbiB0aGUgZmx5LiAnICsgJ0l0IGlzIG1vc3QgbGlrZWx5IHRoYXQgeW91IHNlZSB0aGlzIGVycm9yIGJlY2F1c2UgeW91IHVwZGF0ZWQgdG8gJyArICdSZWR1eCAyLnggYW5kIFJlYWN0IFJlZHV4IDIueCB3aGljaCBubyBsb25nZXIgaG90IHJlbG9hZCByZWR1Y2VycyAnICsgJ2F1dG9tYXRpY2FsbHkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yZWR1eC9yZWxlYXNlcy8nICsgJ3RhZy92Mi4wLjAgZm9yIHRoZSBtaWdyYXRpb24gaW5zdHJ1Y3Rpb25zLicpO1xufVxuXG52YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMuc3RvcmUsIHN0b3JlU3Vic2NyaXB0aW9uOiBudWxsIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5zdG9yZSA9IHByb3BzLnN0b3JlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBQcm92aWRlciBhcyBkZWZhdWx0IH07XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5zdG9yZTtcbiAgICB2YXIgbmV4dFN0b3JlID0gbmV4dFByb3BzLnN0b3JlO1xuXG5cbiAgICBpZiAoc3RvcmUgIT09IG5leHRTdG9yZSkge1xuICAgICAgd2FybkFib3V0UmVjZWl2aW5nU3RvcmUoKTtcbiAgICB9XG4gIH07XG59XG5cblByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IHN0b3JlU2hhcGUuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRcbn07XG5Qcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgc3RvcmU6IHN0b3JlU2hhcGUuaXNSZXF1aXJlZCxcbiAgc3RvcmVTdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvblNoYXBlXG59O1xuUHJvdmlkZXIuZGlzcGxheU5hbWUgPSAnUHJvdmlkZXInO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgc3RvcmVTaGFwZSwgc3Vic2NyaXB0aW9uU2hhcGUgfSBmcm9tICcuLi91dGlscy9Qcm9wVHlwZXMnO1xuXG52YXIgaG90UmVsb2FkaW5nVmVyc2lvbiA9IDA7XG52YXIgZHVtbXlTdGF0ZSA9IHt9O1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5mdW5jdGlvbiBtYWtlU2VsZWN0b3JTdGF0ZWZ1bChzb3VyY2VTZWxlY3Rvciwgc3RvcmUpIHtcbiAgLy8gd3JhcCB0aGUgc2VsZWN0b3IgaW4gYW4gb2JqZWN0IHRoYXQgdHJhY2tzIGl0cyByZXN1bHRzIGJldHdlZW4gcnVucy5cbiAgdmFyIHNlbGVjdG9yID0ge1xuICAgIHJ1bjogZnVuY3Rpb24gcnVuQ29tcG9uZW50U2VsZWN0b3IocHJvcHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXh0UHJvcHMgPSBzb3VyY2VTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCBwcm9wcyk7XG4gICAgICAgIGlmIChuZXh0UHJvcHMgIT09IHNlbGVjdG9yLnByb3BzIHx8IHNlbGVjdG9yLmVycm9yKSB7XG4gICAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3Rvci5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgICAgICBzZWxlY3Rvci5lcnJvciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNlbGVjdG9yLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIHNlbGVjdG9yLmVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEFkdmFuY2VkKFxuLypcbiAgc2VsZWN0b3JGYWN0b3J5IGlzIGEgZnVuYyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHVzZWQgdG9cbiAgY29tcHV0ZSBuZXcgcHJvcHMgZnJvbSBzdGF0ZSwgcHJvcHMsIGFuZCBkaXNwYXRjaC4gRm9yIGV4YW1wbGU6XG4gICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3RBZHZhbmNlZCgoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChzdGF0ZSwgcHJvcHMpID0+ICh7XG4gICAgICB0aGluZzogc3RhdGUudGhpbmdzW3Byb3BzLnRoaW5nSWRdLFxuICAgICAgc2F2ZVRoaW5nOiBmaWVsZHMgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2F2ZVRoaW5nKHByb3BzLnRoaW5nSWQsIGZpZWxkcykpLFxuICAgIH0pKShZb3VyQ29tcG9uZW50KVxuICAgQWNjZXNzIHRvIGRpc3BhdGNoIGlzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IHNvIHNlbGVjdG9yRmFjdG9yaWVzIGNhbiBiaW5kIGFjdGlvbkNyZWF0b3JzXG4gIG91dHNpZGUgb2YgdGhlaXIgc2VsZWN0b3IgYXMgYW4gb3B0aW1pemF0aW9uLiBPcHRpb25zIHBhc3NlZCB0byBjb25uZWN0QWR2YW5jZWQgYXJlIHBhc3NlZCB0b1xuICB0aGUgc2VsZWN0b3JGYWN0b3J5LCBhbG9uZyB3aXRoIGRpc3BsYXlOYW1lIGFuZCBXcmFwcGVkQ29tcG9uZW50LCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgTm90ZSB0aGF0IHNlbGVjdG9yRmFjdG9yeSBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGNhY2hpbmcvbWVtb2l6YXRpb24gb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmRcbiAgcHJvcHMuIERvIG5vdCB1c2UgY29ubmVjdEFkdmFuY2VkIGRpcmVjdGx5IHdpdGhvdXQgbWVtb2l6aW5nIHJlc3VsdHMgYmV0d2VlbiBjYWxscyB0byB5b3VyXG4gIHNlbGVjdG9yLCBvdGhlcndpc2UgdGhlIENvbm5lY3QgY29tcG9uZW50IHdpbGwgcmUtcmVuZGVyIG9uIGV2ZXJ5IHN0YXRlIG9yIHByb3BzIGNoYW5nZS5cbiovXG5zZWxlY3RvckZhY3RvcnkpIHtcbiAgdmFyIF9jb250ZXh0VHlwZXMsIF9jaGlsZENvbnRleHRUeXBlcztcblxuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICBfcmVmJGdldERpc3BsYXlOYW1lID0gX3JlZi5nZXREaXNwbGF5TmFtZSxcbiAgICAgIGdldERpc3BsYXlOYW1lID0gX3JlZiRnZXREaXNwbGF5TmFtZSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gJ0Nvbm5lY3RBZHZhbmNlZCgnICsgbmFtZSArICcpJztcbiAgfSA6IF9yZWYkZ2V0RGlzcGxheU5hbWUsXG4gICAgICBfcmVmJG1ldGhvZE5hbWUgPSBfcmVmLm1ldGhvZE5hbWUsXG4gICAgICBtZXRob2ROYW1lID0gX3JlZiRtZXRob2ROYW1lID09PSB1bmRlZmluZWQgPyAnY29ubmVjdEFkdmFuY2VkJyA6IF9yZWYkbWV0aG9kTmFtZSxcbiAgICAgIF9yZWYkcmVuZGVyQ291bnRQcm9wID0gX3JlZi5yZW5kZXJDb3VudFByb3AsXG4gICAgICByZW5kZXJDb3VudFByb3AgPSBfcmVmJHJlbmRlckNvdW50UHJvcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogX3JlZiRyZW5kZXJDb3VudFByb3AsXG4gICAgICBfcmVmJHNob3VsZEhhbmRsZVN0YXQgPSBfcmVmLnNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyA9IF9yZWYkc2hvdWxkSGFuZGxlU3RhdCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkc2hvdWxkSGFuZGxlU3RhdCxcbiAgICAgIF9yZWYkc3RvcmVLZXkgPSBfcmVmLnN0b3JlS2V5LFxuICAgICAgc3RvcmVLZXkgPSBfcmVmJHN0b3JlS2V5ID09PSB1bmRlZmluZWQgPyAnc3RvcmUnIDogX3JlZiRzdG9yZUtleSxcbiAgICAgIF9yZWYkd2l0aFJlZiA9IF9yZWYud2l0aFJlZixcbiAgICAgIHdpdGhSZWYgPSBfcmVmJHdpdGhSZWYgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiR3aXRoUmVmLFxuICAgICAgY29ubmVjdE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydnZXREaXNwbGF5TmFtZScsICdtZXRob2ROYW1lJywgJ3JlbmRlckNvdW50UHJvcCcsICdzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMnLCAnc3RvcmVLZXknLCAnd2l0aFJlZiddKTtcblxuICB2YXIgc3Vic2NyaXB0aW9uS2V5ID0gc3RvcmVLZXkgKyAnU3Vic2NyaXB0aW9uJztcbiAgdmFyIHZlcnNpb24gPSBob3RSZWxvYWRpbmdWZXJzaW9uKys7XG5cbiAgdmFyIGNvbnRleHRUeXBlcyA9IChfY29udGV4dFR5cGVzID0ge30sIF9jb250ZXh0VHlwZXNbc3RvcmVLZXldID0gc3RvcmVTaGFwZSwgX2NvbnRleHRUeXBlc1tzdWJzY3JpcHRpb25LZXldID0gc3Vic2NyaXB0aW9uU2hhcGUsIF9jb250ZXh0VHlwZXMpO1xuICB2YXIgY2hpbGRDb250ZXh0VHlwZXMgPSAoX2NoaWxkQ29udGV4dFR5cGVzID0ge30sIF9jaGlsZENvbnRleHRUeXBlc1tzdWJzY3JpcHRpb25LZXldID0gc3Vic2NyaXB0aW9uU2hhcGUsIF9jaGlsZENvbnRleHRUeXBlcyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBXaXRoQ29ubmVjdChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ID09ICdmdW5jdGlvbicsICdZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSAnICsgKCdjb25uZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICcgKyBKU09OLnN0cmluZ2lmeShXcmFwcGVkQ29tcG9uZW50KSkpO1xuXG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICB3aXRoUmVmOiB3aXRoUmVmLFxuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgd3JhcHBlZENvbXBvbmVudE5hbWU6IHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudDogV3JhcHBlZENvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgdmFyIENvbm5lY3QgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKENvbm5lY3QsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBDb25uZWN0KHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgICBfdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgX3RoaXMucmVuZGVyQ291bnQgPSAwO1xuICAgICAgICBfdGhpcy5zdG9yZSA9IHByb3BzW3N0b3JlS2V5XSB8fCBjb250ZXh0W3N0b3JlS2V5XTtcbiAgICAgICAgX3RoaXMucHJvcHNNb2RlID0gQm9vbGVhbihwcm9wc1tzdG9yZUtleV0pO1xuICAgICAgICBfdGhpcy5zZXRXcmFwcGVkSW5zdGFuY2UgPSBfdGhpcy5zZXRXcmFwcGVkSW5zdGFuY2UuYmluZChfdGhpcyk7XG5cbiAgICAgICAgaW52YXJpYW50KF90aGlzLnN0b3JlLCAnQ291bGQgbm90IGZpbmQgXCInICsgc3RvcmVLZXkgKyAnXCIgaW4gZWl0aGVyIHRoZSBjb250ZXh0IG9yIHByb3BzIG9mICcgKyAoJ1wiJyArIGRpc3BsYXlOYW1lICsgJ1wiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCAnKSArICgnb3IgZXhwbGljaXRseSBwYXNzIFwiJyArIHN0b3JlS2V5ICsgJ1wiIGFzIGEgcHJvcCB0byBcIicgKyBkaXNwbGF5TmFtZSArICdcIi4nKSk7XG5cbiAgICAgICAgX3RoaXMuaW5pdFNlbGVjdG9yKCk7XG4gICAgICAgIF90aGlzLmluaXRTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHZhciBfcmVmMjtcblxuICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCByZWNlaXZlZCBzdG9yZSBmcm9tIHByb3BzLCBpdHMgc3Vic2NyaXB0aW9uIHNob3VsZCBiZSB0cmFuc3BhcmVudFxuICAgICAgICAvLyB0byBhbnkgZGVzY2VuZGFudHMgcmVjZWl2aW5nIHN0b3JlK3N1YnNjcmlwdGlvbiBmcm9tIGNvbnRleHQ7IGl0IHBhc3NlcyBhbG9uZ1xuICAgICAgICAvLyBzdWJzY3JpcHRpb24gcGFzc2VkIHRvIGl0LiBPdGhlcndpc2UsIGl0IHNoYWRvd3MgdGhlIHBhcmVudCBzdWJzY3JpcHRpb24sIHdoaWNoIGFsbG93c1xuICAgICAgICAvLyBDb25uZWN0IHRvIGNvbnRyb2wgb3JkZXJpbmcgb2Ygbm90aWZpY2F0aW9ucyB0byBmbG93IHRvcC1kb3duLlxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5wcm9wc01vZGUgPyBudWxsIDogdGhpcy5zdWJzY3JpcHRpb247XG4gICAgICAgIHJldHVybiBfcmVmMiA9IHt9LCBfcmVmMltzdWJzY3JpcHRpb25LZXldID0gc3Vic2NyaXB0aW9uIHx8IHRoaXMuY29udGV4dFtzdWJzY3JpcHRpb25LZXldLCBfcmVmMjtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm47XG5cbiAgICAgICAgLy8gY29tcG9uZW50V2lsbE1vdW50IGZpcmVzIGR1cmluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGJ1dCBjb21wb25lbnREaWRNb3VudCBhbmRcbiAgICAgICAgLy8gY29tcG9uZW50V2lsbFVubW91bnQgZG8gbm90LiBCZWNhdXNlIG9mIHRoaXMsIHRyeVN1YnNjcmliZSBoYXBwZW5zIGR1cmluZyAuLi5kaWRNb3VudC5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB1bnN1YnNjcmlwdGlvbiB3b3VsZCBuZXZlciB0YWtlIHBsYWNlIGR1cmluZyBTU1IsIGNhdXNpbmcgYSBtZW1vcnkgbGVhay5cbiAgICAgICAgLy8gVG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGEgY2hpbGQgY29tcG9uZW50IG1heSBoYXZlIHRyaWdnZXJlZCBhIHN0YXRlIGNoYW5nZSBieVxuICAgICAgICAvLyBkaXNwYXRjaGluZyBhbiBhY3Rpb24gaW4gaXRzIGNvbXBvbmVudFdpbGxNb3VudCwgd2UgaGF2ZSB0byByZS1ydW4gdGhlIHNlbGVjdCBhbmQgbWF5YmVcbiAgICAgICAgLy8gcmUtcmVuZGVyLlxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4odGhpcy5wcm9wcyk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdG9yLnNob3VsZENvbXBvbmVudFVwZGF0ZSkgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IucnVuKG5leHRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdG9yLnNob3VsZENvbXBvbmVudFVwZGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikgdGhpcy5zdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm5vdGlmeU5lc3RlZFN1YnMgPSBub29wO1xuICAgICAgICB0aGlzLnN0b3JlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4gPSBub29wO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuZ2V0V3JhcHBlZEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgICBpbnZhcmlhbnQod2l0aFJlZiwgJ1RvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgeW91IG5lZWQgdG8gc3BlY2lmeSAnICsgKCd7IHdpdGhSZWY6IHRydWUgfSBpbiB0aGUgb3B0aW9ucyBhcmd1bWVudCBvZiB0aGUgJyArIG1ldGhvZE5hbWUgKyAnKCkgY2FsbC4nKSk7XG4gICAgICAgIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLnNldFdyYXBwZWRJbnN0YW5jZSA9IGZ1bmN0aW9uIHNldFdyYXBwZWRJbnN0YW5jZShyZWYpIHtcbiAgICAgICAgdGhpcy53cmFwcGVkSW5zdGFuY2UgPSByZWY7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5pbml0U2VsZWN0b3IgPSBmdW5jdGlvbiBpbml0U2VsZWN0b3IoKSB7XG4gICAgICAgIHZhciBzb3VyY2VTZWxlY3RvciA9IHNlbGVjdG9yRmFjdG9yeSh0aGlzLnN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IG1ha2VTZWxlY3RvclN0YXRlZnVsKHNvdXJjZVNlbGVjdG9yLCB0aGlzLnN0b3JlKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4odGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5pbml0U3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gaW5pdFN1YnNjcmlwdGlvbigpIHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjtcblxuICAgICAgICAvLyBwYXJlbnRTdWIncyBzb3VyY2Ugc2hvdWxkIG1hdGNoIHdoZXJlIHN0b3JlIGNhbWUgZnJvbTogcHJvcHMgdnMuIGNvbnRleHQuIEEgY29tcG9uZW50XG4gICAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUgdmlhIHByb3BzIHNob3VsZG4ndCB1c2Ugc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dCwgb3IgdmljZSB2ZXJzYS5cbiAgICAgICAgdmFyIHBhcmVudFN1YiA9ICh0aGlzLnByb3BzTW9kZSA/IHRoaXMucHJvcHMgOiB0aGlzLmNvbnRleHQpW3N1YnNjcmlwdGlvbktleV07XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbih0aGlzLnN0b3JlLCBwYXJlbnRTdWIsIHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBgbm90aWZ5TmVzdGVkU3Vic2AgaXMgZHVwbGljYXRlZCB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGNvbXBvbmVudCBpcyAgdW5tb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLCB3aGVyZSBgdGhpcy5zdWJzY3JpcHRpb25gIHdpbGwgdGhlbiBiZSBudWxsLiBBblxuICAgICAgICAvLyBleHRyYSBudWxsIGNoZWNrIGV2ZXJ5IGNoYW5nZSBjYW4gYmUgYXZvaWRlZCBieSBjb3B5aW5nIHRoZSBtZXRob2Qgb250byBgdGhpc2AgYW5kIHRoZW5cbiAgICAgICAgLy8gcmVwbGFjaW5nIGl0IHdpdGggYSBuby1vcCBvbiB1bm1vdW50LiBUaGlzIGNhbiBwcm9iYWJseSBiZSBhdm9pZGVkIGlmIFN1YnNjcmlwdGlvbidzXG4gICAgICAgIC8vIGxpc3RlbmVycyBsb2dpYyBpcyBjaGFuZ2VkIHRvIG5vdCBjYWxsIGxpc3RlbmVycyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlXG4gICAgICAgIC8vIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicyA9IHRoaXMuc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMuYmluZCh0aGlzLnN1YnNjcmlwdGlvbik7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5vblN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4odGhpcy5wcm9wcyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdG9yLnNob3VsZENvbXBvbmVudFVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlID0gdGhpcy5ub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShkdW1teVN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUubm90aWZ5TmVzdGVkU3Vic09uQ29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3Vic09uQ29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAvLyBgY29tcG9uZW50RGlkVXBkYXRlYCBpcyBjb25kaXRpb25hbGx5IGltcGxlbWVudGVkIHdoZW4gYG9uU3RhdGVDaGFuZ2VgIGRldGVybWluZXMgaXRcbiAgICAgICAgLy8gbmVlZHMgdG8gbm90aWZ5IG5lc3RlZCBzdWJzLiBPbmNlIGNhbGxlZCwgaXQgdW5pbXBsZW1lbnRzIGl0c2VsZiB1bnRpbCBmdXJ0aGVyIHN0YXRlXG4gICAgICAgIC8vIGNoYW5nZXMgb2NjdXIuIERvaW5nIGl0IHRoaXMgd2F5IHZzIGhhdmluZyBhIHBlcm1hbmVudCBgY29tcG9uZW50RGlkTW91bnRgIHRoYXQgZG9lc1xuICAgICAgICAvLyBhIGJvb2xlYW4gY2hlY2sgZXZlcnkgdGltZSBhdm9pZHMgYW4gZXh0cmEgbWV0aG9kIGNhbGwgbW9zdCBvZiB0aGUgdGltZSwgcmVzdWx0aW5nXG4gICAgICAgIC8vIGluIHNvbWUgcGVyZiBib29zdC5cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnN1YnNjcmlwdGlvbikgJiYgdGhpcy5zdWJzY3JpcHRpb24uaXNTdWJzY3JpYmVkKCk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5hZGRFeHRyYVByb3BzID0gZnVuY3Rpb24gYWRkRXh0cmFQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAoIXdpdGhSZWYgJiYgIXJlbmRlckNvdW50UHJvcCAmJiAhKHRoaXMucHJvcHNNb2RlICYmIHRoaXMuc3Vic2NyaXB0aW9uKSkgcmV0dXJuIHByb3BzO1xuICAgICAgICAvLyBtYWtlIGEgc2hhbGxvdyBjb3B5IHNvIHRoYXQgZmllbGRzIGFkZGVkIGRvbid0IGxlYWsgdG8gdGhlIG9yaWdpbmFsIHNlbGVjdG9yLlxuICAgICAgICAvLyB0aGlzIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IGZvciAncmVmJyBzaW5jZSB0aGF0J3MgYSByZWZlcmVuY2UgYmFjayB0byB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIGluc3RhbmNlLiBhIHNpbmdsZXRvbiBtZW1vaXplZCBzZWxlY3RvciB3b3VsZCB0aGVuIGJlIGhvbGRpbmcgYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgICAgIC8vIGluc3RhbmNlLCBwcmV2ZW50aW5nIHRoZSBpbnN0YW5jZSBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkLCBhbmQgdGhhdCB3b3VsZCBiZSBiYWRcbiAgICAgICAgdmFyIHdpdGhFeHRyYXMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuICAgICAgICBpZiAod2l0aFJlZikgd2l0aEV4dHJhcy5yZWYgPSB0aGlzLnNldFdyYXBwZWRJbnN0YW5jZTtcbiAgICAgICAgaWYgKHJlbmRlckNvdW50UHJvcCkgd2l0aEV4dHJhc1tyZW5kZXJDb3VudFByb3BdID0gdGhpcy5yZW5kZXJDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5wcm9wc01vZGUgJiYgdGhpcy5zdWJzY3JpcHRpb24pIHdpdGhFeHRyYXNbc3Vic2NyaXB0aW9uS2V5XSA9IHRoaXMuc3Vic2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gd2l0aEV4dHJhcztcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgc2VsZWN0b3IuZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5hZGRFeHRyYVByb3BzKHNlbGVjdG9yLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb25uZWN0O1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIENvbm5lY3QuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcbiAgICBDb25uZWN0LmNvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcbiAgICBDb25uZWN0LnByb3BUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgLy8gV2UgYXJlIGhvdCByZWxvYWRpbmchXG4gICAgICAgIGlmICh0aGlzLnZlcnNpb24gIT09IHZlcnNpb24pIHtcbiAgICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdG9yKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHRoaXMuc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgdGhpcy5pbml0U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgdGhpcy5zdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4uL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmltcG9ydCBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwRGlzcGF0Y2hUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwU3RhdGVUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyBmcm9tICcuL21lcmdlUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9zZWxlY3RvckZhY3RvcnknO1xuXG4vKlxuICBjb25uZWN0IGlzIGEgZmFjYWRlIG92ZXIgY29ubmVjdEFkdmFuY2VkLiBJdCB0dXJucyBpdHMgYXJncyBpbnRvIGEgY29tcGF0aWJsZVxuICBzZWxlY3RvckZhY3RvcnksIHdoaWNoIGhhcyB0aGUgc2lnbmF0dXJlOlxuXG4gICAgKGRpc3BhdGNoLCBvcHRpb25zKSA9PiAobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpID0+IG5leHRGaW5hbFByb3BzXG4gIFxuICBjb25uZWN0IHBhc3NlcyBpdHMgYXJncyB0byBjb25uZWN0QWR2YW5jZWQgYXMgb3B0aW9ucywgd2hpY2ggd2lsbCBpbiB0dXJuIHBhc3MgdGhlbSB0b1xuICBzZWxlY3RvckZhY3RvcnkgZWFjaCB0aW1lIGEgQ29ubmVjdCBjb21wb25lbnQgaW5zdGFuY2UgaXMgaW5zdGFudGlhdGVkIG9yIGhvdCByZWxvYWRlZC5cblxuICBzZWxlY3RvckZhY3RvcnkgcmV0dXJucyBhIGZpbmFsIHByb3BzIHNlbGVjdG9yIGZyb20gaXRzIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgbWVyZ2VQcm9wcyxcbiAgbWVyZ2VQcm9wc0ZhY3RvcmllcywgYW5kIHB1cmUgYXJncy5cblxuICBUaGUgcmVzdWx0aW5nIGZpbmFsIHByb3BzIHNlbGVjdG9yIGlzIGNhbGxlZCBieSB0aGUgQ29ubmVjdCBjb21wb25lbnQgaW5zdGFuY2Ugd2hlbmV2ZXJcbiAgaXQgcmVjZWl2ZXMgbmV3IHByb3BzIG9yIHN0b3JlIHN0YXRlLlxuICovXG5cbmZ1bmN0aW9uIG1hdGNoKGFyZywgZmFjdG9yaWVzLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSBmYWN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFjdG9yaWVzW2ldKGFyZyk7XG4gICAgaWYgKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgb2YgdHlwZSAnICsgdHlwZW9mIGFyZyArICcgZm9yICcgKyBuYW1lICsgJyBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50ICcgKyBvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lICsgJy4nKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuLy8gY3JlYXRlQ29ubmVjdCB3aXRoIGRlZmF1bHQgYXJncyBidWlsZHMgdGhlICdvZmZpY2lhbCcgY29ubmVjdCBiZWhhdmlvci4gQ2FsbGluZyBpdCB3aXRoXG4vLyBkaWZmZXJlbnQgb3B0aW9ucyBvcGVucyB1cCBzb21lIHRlc3RpbmcgYW5kIGV4dGVuc2liaWxpdHkgc2NlbmFyaW9zXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgX3JlZiRjb25uZWN0SE9DID0gX3JlZi5jb25uZWN0SE9DLFxuICAgICAgY29ubmVjdEhPQyA9IF9yZWYkY29ubmVjdEhPQyA9PT0gdW5kZWZpbmVkID8gY29ubmVjdEFkdmFuY2VkIDogX3JlZiRjb25uZWN0SE9DLFxuICAgICAgX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID0gX3JlZi5tYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YsXG4gICAgICBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPSBfcmVmLm1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwRGlzcGF0Y2hUb1BybyxcbiAgICAgIF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9IF9yZWYubWVyZ2VQcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1lcmdlUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIDogX3JlZiRtZXJnZVByb3BzRmFjdG9yLFxuICAgICAgX3JlZiRzZWxlY3RvckZhY3RvcnkgPSBfcmVmLnNlbGVjdG9yRmFjdG9yeSxcbiAgICAgIHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYkc2VsZWN0b3JGYWN0b3J5ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IDogX3JlZiRzZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpIHtcbiAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9LFxuICAgICAgICBfcmVmMiRwdXJlID0gX3JlZjIucHVyZSxcbiAgICAgICAgcHVyZSA9IF9yZWYyJHB1cmUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRwdXJlLFxuICAgICAgICBfcmVmMiRhcmVTdGF0ZXNFcXVhbCA9IF9yZWYyLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYyJGFyZVN0YXRlc0VxdWFsID09PSB1bmRlZmluZWQgPyBzdHJpY3RFcXVhbCA6IF9yZWYyJGFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBfcmVmMiRhcmVPd25Qcm9wc0VxdWEgPSBfcmVmMi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZjIkYXJlT3duUHJvcHNFcXVhID09PSB1bmRlZmluZWQgPyBzaGFsbG93RXF1YWwgOiBfcmVmMiRhcmVPd25Qcm9wc0VxdWEsXG4gICAgICAgIF9yZWYyJGFyZVN0YXRlUHJvcHNFcSA9IF9yZWYyLmFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZjIkYXJlU3RhdGVQcm9wc0VxID09PSB1bmRlZmluZWQgPyBzaGFsbG93RXF1YWwgOiBfcmVmMiRhcmVTdGF0ZVByb3BzRXEsXG4gICAgICAgIF9yZWYyJGFyZU1lcmdlZFByb3BzRSA9IF9yZWYyLmFyZU1lcmdlZFByb3BzRXF1YWwsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmMiRhcmVNZXJnZWRQcm9wc0UgPT09IHVuZGVmaW5lZCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYyJGFyZU1lcmdlZFByb3BzRSxcbiAgICAgICAgZXh0cmFPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbJ3B1cmUnLCAnYXJlU3RhdGVzRXF1YWwnLCAnYXJlT3duUHJvcHNFcXVhbCcsICdhcmVTdGF0ZVByb3BzRXF1YWwnLCAnYXJlTWVyZ2VkUHJvcHNFcXVhbCddKTtcblxuICAgIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWF0Y2gobWFwU3RhdGVUb1Byb3BzLCBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hdGNoKG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNZXJnZVByb3BzID0gbWF0Y2gobWVyZ2VQcm9wcywgbWVyZ2VQcm9wc0ZhY3RvcmllcywgJ21lcmdlUHJvcHMnKTtcblxuICAgIHJldHVybiBjb25uZWN0SE9DKHNlbGVjdG9yRmFjdG9yeSwgX2V4dGVuZHMoe1xuICAgICAgLy8gdXNlZCBpbiBlcnJvciBtZXNzYWdlc1xuICAgICAgbWV0aG9kTmFtZTogJ2Nvbm5lY3QnLFxuXG4gICAgICAvLyB1c2VkIHRvIGNvbXB1dGUgQ29ubmVjdCdzIGRpc3BsYXlOYW1lIGZyb20gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZGlzcGxheU5hbWUuXG4gICAgICBnZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gJ0Nvbm5lY3QoJyArIG5hbWUgKyAnKSc7XG4gICAgICB9LFxuXG4gICAgICAvLyBpZiBtYXBTdGF0ZVRvUHJvcHMgaXMgZmFsc3ksIHRoZSBDb25uZWN0IGNvbXBvbmVudCBkb2Vzbid0IHN1YnNjcmliZSB0byBzdG9yZSBzdGF0ZSBjaGFuZ2VzXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKSxcblxuICAgICAgLy8gcGFzc2VkIHRocm91Z2ggdG8gc2VsZWN0b3JGYWN0b3J5XG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzOiBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wczogaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzOiBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIHB1cmU6IHB1cmUsXG4gICAgICBhcmVTdGF0ZXNFcXVhbDogYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsOiBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsOiBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsOiBhcmVNZXJnZWRQcm9wc0VxdWFsXG5cbiAgICB9LCBleHRyYU9wdGlvbnMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbihtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nKG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHsgZGlzcGF0Y2g6IGRpc3BhdGNoIH07XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpO1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3RdO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmcobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3duUHJvcHMsIHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuXG4gICAgdmFyIGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICB2YXIgbWVyZ2VkUHJvcHMgPSB2b2lkIDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICB2YXIgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghcHVyZSB8fCAhYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSkgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24obWVyZ2VQcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1lcmdlUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWVyZ2VQcm9wc0Z1bmMobWVyZ2VQcm9wcykgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZChtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1lcmdlUHJvcHM7XG4gIH0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IHZlcmlmeVN1YnNlbGVjdG9ycyBmcm9tICcuL3ZlcmlmeVN1YnNlbGVjdG9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW1wdXJlRmluYWxQcm9wc1NlbGVjdG9yKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiBtZXJnZVByb3BzKG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpLCBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSwgb3duUHJvcHMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG5cbiAgdmFyIGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIHZhciBzdGF0ZSA9IHZvaWQgMDtcbiAgdmFyIG93blByb3BzID0gdm9pZCAwO1xuICB2YXIgc3RhdGVQcm9wcyA9IHZvaWQgMDtcbiAgdmFyIGRpc3BhdGNoUHJvcHMgPSB2b2lkIDA7XG4gIHZhciBtZXJnZWRQcm9wcyA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcblxuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcblxuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuXG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdTdGF0ZSgpIHtcbiAgICB2YXIgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVQcm9wc0NoYW5nZWQgPSAhYXJlU3RhdGVQcm9wc0VxdWFsKG5leHRTdGF0ZVByb3BzLCBzdGF0ZVByb3BzKTtcbiAgICBzdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG5cbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICB2YXIgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgdmFyIHN0YXRlQ2hhbmdlZCA9ICFhcmVTdGF0ZXNFcXVhbChuZXh0U3RhdGUsIHN0YXRlKTtcbiAgICBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IG5leHRPd25Qcm9wcztcblxuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG5cbi8vIFRPRE86IEFkZCBtb3JlIGNvbW1lbnRzXG5cbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsnaW5pdE1hcFN0YXRlVG9Qcm9wcycsICdpbml0TWFwRGlzcGF0Y2hUb1Byb3BzJywgJ2luaXRNZXJnZVByb3BzJ10pO1xuXG4gIHZhciBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgdmFyIG1hcERpc3BhdGNoVG9Qcm9wcyA9IGluaXRNYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWVyZ2VQcm9wcyA9IGluaXRNZXJnZVByb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucy5kaXNwbGF5TmFtZSk7XG4gIH1cblxuICB2YXIgc2VsZWN0b3JGYWN0b3J5ID0gb3B0aW9ucy5wdXJlID8gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkgOiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5O1xuXG4gIHJldHVybiBzZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSwgZGlzcGxheU5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCB2YWx1ZSBmb3IgJyArIG1ldGhvZE5hbWUgKyAnIGluICcgKyBkaXNwbGF5TmFtZSArICcuJyk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIXNlbGVjdG9yLmhhc093blByb3BlcnR5KCdkZXBlbmRzT25Pd25Qcm9wcycpKSB7XG4gICAgICB3YXJuaW5nKCdUaGUgc2VsZWN0b3IgZm9yICcgKyBtZXRob2ROYW1lICsgJyBvZiAnICsgZGlzcGxheU5hbWUgKyAnIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy5qcyIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHZhciBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn1cblxuLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vLyBcbi8vIEEgbGVuZ3RoIG9mIG9uZSBzaWduYWxzIHRoYXQgbWFwVG9Qcm9wcyBkb2VzIG5vdCBkZXBlbmQgb24gcHJvcHMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbi8vIEEgbGVuZ3RoIG9mIHplcm8gaXMgYXNzdW1lZCB0byBtZWFuIG1hcFRvUHJvcHMgaXMgZ2V0dGluZyBhcmdzIHZpYSBhcmd1bWVudHMgb3IgLi4uYXJncyBhbmRcbi8vIHRoZXJlZm9yZSBub3QgcmVwb3J0aW5nIGl0cyBsZW5ndGggYWNjdXJhdGVseS4uXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gbnVsbCAmJiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSB1bmRlZmluZWQgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59XG5cbi8vIFVzZWQgYnkgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24gYW5kIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLFxuLy8gdGhpcyBmdW5jdGlvbiB3cmFwcyBtYXBUb1Byb3BzIGluIGEgcHJveHkgZnVuY3Rpb24gd2hpY2ggZG9lcyBzZXZlcmFsIHRoaW5nczpcbi8vIFxuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy8gICAgXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy8gICAgXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCB2ZXJpZmllcyB0aGUgZmlyc3QgcmVzdWx0IGlzIGEgcGxhaW4gb2JqZWN0LCBpbiBvcmRlciB0byB3YXJuXG4vLyAgICB0aGUgZGV2ZWxvcGVyIHRoYXQgdGhlaXIgbWFwVG9Qcm9wcyBmdW5jdGlvbiBpcyBub3QgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0LlxuLy8gICAgXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZTtcblxuICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gpO1xuICAgIH07XG5cbiAgICAvLyBhbGxvdyBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5IHRvIGdldCBvd25Qcm9wc1xuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIHZhciBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMuanMiLCJpbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyJztcbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdCc7XG5cbmV4cG9ydCB7IFByb3ZpZGVyLCBjb25uZWN0QWR2YW5jZWQsIGNvbm5lY3QgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IHZhciBzdWJzY3JpcHRpb25TaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHRyeVN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJ5VW5zdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG5vdGlmeU5lc3RlZFN1YnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzU3Vic2NyaWJlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufSk7XG5cbmV4cG9ydCB2YXIgc3RvcmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL3V0aWxzL1Byb3BUeXBlcy5qcyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIGVuY2Fwc3VsYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxvZ2ljIGZvciBjb25uZWN0aW5nIGEgY29tcG9uZW50IHRvIHRoZSByZWR1eCBzdG9yZSwgYXNcbi8vIHdlbGwgYXMgbmVzdGluZyBzdWJzY3JpcHRpb25zIG9mIGRlc2NlbmRhbnQgY29tcG9uZW50cywgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZVxuLy8gYW5jZXN0b3IgY29tcG9uZW50cyByZS1yZW5kZXIgYmVmb3JlIGRlc2NlbmRhbnRzXG5cbnZhciBDTEVBUkVEID0gbnVsbDtcbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHt9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIC8vIHRoZSBjdXJyZW50L25leHQgcGF0dGVybiBpcyBjb3BpZWQgZnJvbSByZWR1eCdzIGNyZWF0ZVN0b3JlIGNvZGUuXG4gIC8vIFRPRE86IHJlZmFjdG9yK2V4cG9zZSB0aGF0IGNvZGUgdG8gYmUgcmV1c2FibGUgaGVyZT9cbiAgdmFyIGN1cnJlbnQgPSBbXTtcbiAgdmFyIG5leHQgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIG5leHQgPSBDTEVBUkVEO1xuICAgICAgY3VycmVudCA9IENMRUFSRUQ7XG4gICAgfSxcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50ID0gbmV4dDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIG5leHQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICBuZXh0LnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGN1cnJlbnQgPT09IENMRUFSRUQpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG5leHQgPT09IGN1cnJlbnQpIG5leHQgPSBjdXJyZW50LnNsaWNlKCk7XG4gICAgICAgIG5leHQuc3BsaWNlKG5leHQuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViLCBvblN0YXRlQ2hhbmdlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1YnNjcmlwdGlvbik7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5wYXJlbnRTdWIgPSBwYXJlbnRTdWI7XG4gICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gb25TdGF0ZUNoYW5nZTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gIH1cblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZE5lc3RlZFN1YiA9IGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRoaXMudHJ5U3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH07XG5cbiAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5ub3RpZnlOZXN0ZWRTdWJzID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfTtcblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuc3Vic2NyaWJlKTtcbiAgfTtcblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnBhcmVudFN1YiA/IHRoaXMucGFyZW50U3ViLmFkZE5lc3RlZFN1Yih0aGlzLm9uU3RhdGVDaGFuZ2UpIDogdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5vblN0YXRlQ2hhbmdlKTtcblxuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59KCk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBkZWZhdWx0IH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanMiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQbGFpbk9iamVjdCh2YWx1ZSwgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIHdhcm5pbmcobWV0aG9kTmFtZSArICcoKSBpbiAnICsgZGlzcGxheU5hbWUgKyAnIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICcgKyB2YWx1ZSArICcuJyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwiLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgJyArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsImltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbk5hbWUgPSBhY3Rpb25UeXBlICYmICdcIicgKyBhY3Rpb25UeXBlLnRvU3RyaW5nKCkgKyAnXCInIHx8ICdhbiBhY3Rpb24nO1xuXG4gIHJldHVybiAnR2l2ZW4gYWN0aW9uICcgKyBhY3Rpb25OYW1lICsgJywgcmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnICsgJ1RvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4nO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2FuaXR5KHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2FuaXR5RXJyb3I7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNhbml0eShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNhbml0eUVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNhbml0eUVycm9yKSB7XG4gICAgICB0aHJvdyBzYW5pdHlFcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGZpbmFsUmVkdWNlcktleXNbaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNba2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICB2YXIgbGFzdCA9IGZ1bmNzW2Z1bmNzLmxlbmd0aCAtIDFdO1xuICB2YXIgcmVzdCA9IGZ1bmNzLnNsaWNlKDAsIC0xKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzdC5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY29tcG9zZWQsIGYpIHtcbiAgICAgIHJldHVybiBmKGNvbXBvc2VkKTtcbiAgICB9LCBsYXN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy9jb21wb3NlLmpzIiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG5leHBvcnQgdmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL2NvbWJpbmVSZWR1Y2Vycyc7XG5pbXBvcnQgYmluZEFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYmluZEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCBhcHBseU1pZGRsZXdhcmUgZnJvbSAnLi9hcHBseU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbi8qXG4qIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuKi9cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvaW5kZXguanMiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcG9ueWZpbGwgPSByZXF1aXJlKCcuL3BvbnlmaWxsJyk7XG5cbnZhciBfcG9ueWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ueWZpbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciByb290OyAvKiBnbG9iYWwgd2luZG93ICovXG5cblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gKDAsIF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXN1bHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXInXG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxMb2dpbkZvcm0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9Lz4sXG4gIGRvY3VtZW50LmJvZHlcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXt9LG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICBjb25zb2xlLmxvZyhvd25Qcm9wcylcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTpzdGF0ZS51c2VybmFtZSxcbiAgICBpc0xvZ2luU3VjY2VlZDpzdGF0ZS5pc0xvZ2luU3VjY2VlZFxuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTdWJtaXQ6ICh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXQgZm9ybS5cIilcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWU9XCIrdXNlcm5hbWUpXG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkPVwiK3Bhc3N3b3JkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBMb2dpbkZvcm1Db250YWluZXIgPSBjb25uZWN0KCkoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=