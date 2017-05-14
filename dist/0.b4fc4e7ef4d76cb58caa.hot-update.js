webpackHotUpdate(0,{

/***/ "./node_modules/history/DOMUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/history/LocationUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _resolvePathname = __webpack_require__("./node_modules/resolve-pathname/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__("./node_modules/value-equal/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/PathUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
  return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  pathname = decodeURI(pathname);

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = encodeURI(pathname || '/');

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/createBrowserHistory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__("./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__("./node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__("./node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__("./node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return _extends({}, (0, _PathUtils.parsePath)(path), {
      state: state,
      key: key
    });
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "./node_modules/history/createHashHistory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__("./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__("./node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__("./node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__("./node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return (0, _PathUtils.parsePath)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "./node_modules/history/createMemoryHistory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

var _LocationUtils = __webpack_require__("./node_modules/history/LocationUtils.js");

var _createTransitionManager = __webpack_require__("./node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/createTransitionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/history/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__("./node_modules/history/LocationUtils.js");

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__("./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__("./node_modules/history/createHashHistory.js");

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__("./node_modules/history/createMemoryHistory.js");

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),

/***/ "./node_modules/react-router/es/MemoryRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createMemoryHistory = __webpack_require__("./node_modules/history/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _Router = __webpack_require__("./node_modules/react-router/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

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

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(_react2.default.Component);

MemoryRouter.propTypes = {
  initialEntries: _propTypes2.default.array,
  initialIndex: _propTypes2.default.number,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = MemoryRouter;

/***/ }),

/***/ "./node_modules/react-router/es/Prompt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(_react2.default.Component);

Prompt.propTypes = {
  when: _propTypes2.default.bool,
  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      block: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};

exports.default = Prompt;

/***/ }),

/***/ "./node_modules/react-router/es/Redirect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

/**
 * The public API for updating the location programatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(_react2.default.Component);

Redirect.propTypes = {
  push: _propTypes2.default.bool,
  from: _propTypes2.default.string,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired
    }).isRequired,
    staticContext: _propTypes2.default.object
  }).isRequired
};

exports.default = Redirect;

/***/ }),

/***/ "./node_modules/react-router/es/Route.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _matchPath = __webpack_require__("./node_modules/react-router/es/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

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

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact;
    var route = _ref2.route;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    var pathname = (location || route.location).pathname;

    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        component = _props.component,
        render = _props.render,
        children = _props.children;

    (0, _warning2.default)(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    (0, _warning2.default)(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    (0, _warning2.default)(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props2 = this.props,
        children = _props2.children,
        component = _props2.component,
        render = _props2.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
    _react2.default.Children.only(children) : null : null;
  };

  return Route;
}(_react2.default.Component);

Route.propTypes = {
  computedMatch: _propTypes2.default.object, // private, from <Switch>
  path: _propTypes2.default.string,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  component: _propTypes2.default.func,
  render: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
  location: _propTypes2.default.object
};
Route.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.object.isRequired,
    route: _propTypes2.default.object.isRequired,
    staticContext: _propTypes2.default.object
  })
};
Route.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Route;

/***/ }),

/***/ "./node_modules/react-router/es/Router.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__("./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? _react2.default.Children.only(children) : null;
  };

  return Router;
}(_react2.default.Component);

Router.propTypes = {
  history: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
};
Router.contextTypes = {
  router: _propTypes2.default.object
};
Router.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = Router;

/***/ }),

/***/ "./node_modules/react-router/es/StaticRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _invariant = __webpack_require__("./node_modules/invariant/browser.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

var _Router = __webpack_require__("./node_modules/react-router/es/Router.js");

var _Router2 = _interopRequireDefault(_Router);

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

var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = (0, _PathUtils.addLeadingSlash)(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(_react2.default.Component);

StaticRouter.propTypes = {
  basename: _propTypes2.default.string,
  context: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: _propTypes2.default.object.isRequired
};

exports.default = StaticRouter;

/***/ }),

/***/ "./node_modules/react-router/es/Switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _matchPath = __webpack_require__("./node_modules/react-router/es/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

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

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    _react2.default.Children.forEach(children, function (element) {
      if (!_react2.default.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
      }
    });

    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(_react2.default.Component);

Switch.contextTypes = {
  router: _propTypes2.default.shape({
    route: _propTypes2.default.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: _propTypes2.default.node,
  location: _propTypes2.default.object
};

exports.default = Switch;

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = undefined;

var _MemoryRouter2 = __webpack_require__("./node_modules/react-router/es/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _Prompt2 = __webpack_require__("./node_modules/react-router/es/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__("./node_modules/react-router/es/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__("./node_modules/react-router/es/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__("./node_modules/react-router/es/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__("./node_modules/react-router/es/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__("./node_modules/react-router/es/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _matchPath2 = __webpack_require__("./node_modules/react-router/es/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__("./node_modules/react-router/es/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MemoryRouter = _MemoryRouter3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router/es/matchPath.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToRegexp = __webpack_require__("./node_modules/react-router/node_modules/path-to-regexp/index.js");

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict;

  var _compilePath = compilePath(path, { end: exact, strict: strict }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

exports.default = matchPath;

/***/ }),

/***/ "./node_modules/react-router/es/withRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _Route = __webpack_require__("./node_modules/react-router/es/Route.js");

var _Route2 = _interopRequireDefault(_Route);

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

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  };

  return (0, _hoistNonReactStatics2.default)(C, Component);
};

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isarray = __webpack_require__("./node_modules/react-router/node_modules/isarray/index.js");

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),

/***/ "./node_modules/value-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
    return valueEqual(item, b[index]);
  });

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
};

exports.default = valueEqual;

/***/ }),

/***/ "./node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _history = __webpack_require__("./node_modules/history/index.js");

var _LoginFormContainer = __webpack_require__("./src/containers/LoginFormContainer.js");

var _LoginFormContainer2 = _interopRequireDefault(_LoginFormContainer);

var _LoginReducer = __webpack_require__("./src/reducers/LoginReducer.js");

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_LoginReducer2.default);
var history = (0, _history.createHistory)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter2.default,
    { history: history },
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _LoginFormContainer2.default })
  )
), document.body);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvRE9NVXRpbHMuanM/NmNiMiIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvTG9jYXRpb25VdGlscy5qcz8zMTY1Iiwid2VicGFjazovLy8uL34vaGlzdG9yeS9QYXRoVXRpbHMuanM/ZWMyZiIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanM/NmFjZiIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvY3JlYXRlSGFzaEhpc3RvcnkuanM/OGI5ZSIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvY3JlYXRlTWVtb3J5SGlzdG9yeS5qcz8xMjg2Iiwid2VicGFjazovLy8uL34vaGlzdG9yeS9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcz9jNDQyIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9pbmRleC5qcz8zMzUxIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2VzL01lbW9yeVJvdXRlci5qcz9iZjIxIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2VzL1Byb21wdC5qcz8wZGY1Iiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2VzL1JlZGlyZWN0LmpzPzdiMmMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvZXMvUm91dGUuanM/Mzc2NiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9lcy9Sb3V0ZXIuanM/YTRhYSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9lcy9TdGF0aWNSb3V0ZXIuanM/MjAwYyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9lcy9Td2l0Y2guanM/MWMwNCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcz84ZTE4Iiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2VzL21hdGNoUGF0aC5qcz84NmNmIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2VzL3dpdGhSb3V0ZXIuanM/ZDFjYyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9+L2lzYXJyYXkvaW5kZXguanM/ZWJiNCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9+L3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzPzkzMTIiLCJ3ZWJwYWNrOi8vLy4vfi9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzP2ZkOTgiLCJ3ZWJwYWNrOi8vLy4vfi92YWx1ZS1lcXVhbC9pbmRleC5qcz82OGFiIiwid2VicGFjazovLy8uL34vd2FybmluZy9icm93c2VyLmpzPzI2ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz83YWM5Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiY2FuVXNlRE9NIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJldmVudCIsImxpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJnZXRDb25maXJtYXRpb24iLCJtZXNzYWdlIiwiY2FsbGJhY2siLCJjb25maXJtIiwic3VwcG9ydHNIaXN0b3J5IiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaGlzdG9yeSIsInN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UiLCJzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCIsImlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQiLCJzdGF0ZSIsInVuZGVmaW5lZCIsImxvY2F0aW9uc0FyZUVxdWFsIiwiY3JlYXRlTG9jYXRpb24iLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfcmVzb2x2ZVBhdGhuYW1lIiwicmVxdWlyZSIsIl9yZXNvbHZlUGF0aG5hbWUyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl92YWx1ZUVxdWFsIiwiX3ZhbHVlRXF1YWwyIiwiX1BhdGhVdGlscyIsIm9iaiIsImRlZmF1bHQiLCJwYXRoIiwiY3VycmVudExvY2F0aW9uIiwibG9jYXRpb24iLCJwYXJzZVBhdGgiLCJwYXRobmFtZSIsInNlYXJjaCIsImNoYXJBdCIsImhhc2giLCJhIiwiYiIsImFkZExlYWRpbmdTbGFzaCIsInN0cmlwTGVhZGluZ1NsYXNoIiwic3Vic3RyIiwic3RyaXBQcmVmaXgiLCJwcmVmaXgiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJzbGljZSIsImhhc2hJbmRleCIsInNlYXJjaEluZGV4IiwiZGVjb2RlVVJJIiwiY3JlYXRlUGF0aCIsImVuY29kZVVSSSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiX3dhcm5pbmciLCJfd2FybmluZzIiLCJfaW52YXJpYW50IiwiX2ludmFyaWFudDIiLCJfTG9jYXRpb25VdGlscyIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciIsIl9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIiLCJfRE9NVXRpbHMiLCJQb3BTdGF0ZUV2ZW50IiwiSGFzaENoYW5nZUV2ZW50IiwiZ2V0SGlzdG9yeVN0YXRlIiwiZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwicHJvcHMiLCJnbG9iYWxIaXN0b3J5IiwiY2FuVXNlSGlzdG9yeSIsIm5lZWRzSGFzaENoYW5nZUxpc3RlbmVyIiwiX3Byb3BzJGZvcmNlUmVmcmVzaCIsImZvcmNlUmVmcmVzaCIsIl9wcm9wcyRnZXRVc2VyQ29uZmlybSIsImdldFVzZXJDb25maXJtYXRpb24iLCJfcHJvcHMka2V5TGVuZ3RoIiwia2V5TGVuZ3RoIiwiYmFzZW5hbWUiLCJnZXRET01Mb2NhdGlvbiIsImhpc3RvcnlTdGF0ZSIsIl9yZWYiLCJfd2luZG93JGxvY2F0aW9uIiwiY3JlYXRlS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwidHJhbnNpdGlvbk1hbmFnZXIiLCJzZXRTdGF0ZSIsIm5leHRTdGF0ZSIsIm5vdGlmeUxpc3RlbmVycyIsImFjdGlvbiIsImhhbmRsZVBvcFN0YXRlIiwiaGFuZGxlUG9wIiwiaGFuZGxlSGFzaENoYW5nZSIsImZvcmNlTmV4dFBvcCIsImNvbmZpcm1UcmFuc2l0aW9uVG8iLCJvayIsInJldmVydFBvcCIsImZyb21Mb2NhdGlvbiIsInRvTG9jYXRpb24iLCJ0b0luZGV4IiwiYWxsS2V5cyIsImZyb21JbmRleCIsImRlbHRhIiwiZ28iLCJpbml0aWFsTG9jYXRpb24iLCJjcmVhdGVIcmVmIiwicHVzaCIsImhyZWYiLCJwdXNoU3RhdGUiLCJwcmV2SW5kZXgiLCJuZXh0S2V5cyIsInJlcGxhY2UiLCJyZXBsYWNlU3RhdGUiLCJuIiwiZ29CYWNrIiwiZ29Gb3J3YXJkIiwibGlzdGVuZXJDb3VudCIsImNoZWNrRE9NTGlzdGVuZXJzIiwiaXNCbG9ja2VkIiwiYmxvY2siLCJwcm9tcHQiLCJ1bmJsb2NrIiwic2V0UHJvbXB0IiwibGlzdGVuIiwidW5saXN0ZW4iLCJhcHBlbmRMaXN0ZW5lciIsIkhhc2hQYXRoQ29kZXJzIiwiaGFzaGJhbmciLCJlbmNvZGVQYXRoIiwiZGVjb2RlUGF0aCIsIm5vc2xhc2giLCJzbGFzaCIsImdldEhhc2hQYXRoIiwic3Vic3RyaW5nIiwicHVzaEhhc2hQYXRoIiwicmVwbGFjZUhhc2hQYXRoIiwiY3JlYXRlSGFzaEhpc3RvcnkiLCJjYW5Hb1dpdGhvdXRSZWxvYWQiLCJfcHJvcHMkaGFzaFR5cGUiLCJoYXNoVHlwZSIsIl9IYXNoUGF0aENvZGVycyRoYXNoVCIsImlnbm9yZVBhdGgiLCJlbmNvZGVkUGF0aCIsInByZXZMb2NhdGlvbiIsImFsbFBhdGhzIiwibGFzdEluZGV4T2YiLCJoYXNoQ2hhbmdlZCIsIm5leHRQYXRocyIsImNsYW1wIiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJtaW4iLCJtYXgiLCJjcmVhdGVNZW1vcnlIaXN0b3J5IiwiX3Byb3BzJGluaXRpYWxFbnRyaWVzIiwiaW5pdGlhbEVudHJpZXMiLCJfcHJvcHMkaW5pdGlhbEluZGV4IiwiaW5pdGlhbEluZGV4IiwiZW50cmllcyIsImluZGV4IiwibWFwIiwiZW50cnkiLCJuZXh0SW5kZXgiLCJuZXh0RW50cmllcyIsInNwbGljZSIsImNhbkdvIiwiY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIiLCJuZXh0UHJvbXB0IiwicmVzdWx0IiwibGlzdGVuZXJzIiwiZm4iLCJpc0FjdGl2ZSIsImFwcGx5IiwiZmlsdGVyIiwiaXRlbSIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiZm9yRWFjaCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIl9jcmVhdGVCcm93c2VySGlzdG9yeTIiLCJfY3JlYXRlQnJvd3Nlckhpc3RvcnkzIiwiX2NyZWF0ZUhhc2hIaXN0b3J5MiIsIl9jcmVhdGVIYXNoSGlzdG9yeTMiLCJfY3JlYXRlTWVtb3J5SGlzdG9yeTIiLCJfY3JlYXRlTWVtb3J5SGlzdG9yeTMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJNZW1vcnlSb3V0ZXIiLCJfUmVhY3QkQ29tcG9uZW50IiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJjb25jYXQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwibnVtYmVyIiwiZnVuYyIsIlByb21wdCIsImVuYWJsZSIsImNvbnRleHQiLCJyb3V0ZXIiLCJkaXNhYmxlIiwiY29tcG9uZW50V2lsbE1vdW50Iiwid2hlbiIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImJvb2wiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwic2hhcGUiLCJSZWRpcmVjdCIsImlzU3RhdGljIiwic3RhdGljQ29udGV4dCIsInBlcmZvcm0iLCJjb21wb25lbnREaWRNb3VudCIsIl9wcm9wcyIsInRvIiwiZnJvbSIsIm9iamVjdCIsIlJvdXRlIiwibWF0Y2giLCJjb21wdXRlTWF0Y2giLCJnZXRDaGlsZENvbnRleHQiLCJyb3V0ZSIsIl9yZWYyIiwiY29tcHV0ZWRNYXRjaCIsInN0cmljdCIsImV4YWN0IiwiY29tcG9uZW50IiwibmV4dENvbnRleHQiLCJfcHJvcHMyIiwiX2NvbnRleHQkcm91dGVyIiwiaXNBcnJheSIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkQ29udGV4dFR5cGVzIiwiUm91dGVyIiwidXJsIiwicGFyYW1zIiwiaXNFeGFjdCIsIl90aGlzMiIsImNvdW50IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwia2V5cyIsIm5vcm1hbGl6ZUxvY2F0aW9uIiwiX29iamVjdCRwYXRobmFtZSIsIl9vYmplY3Qkc2VhcmNoIiwiX29iamVjdCRoYXNoIiwiYWRkQmFzZW5hbWUiLCJzdHJpcEJhc2VuYW1lIiwiYmFzZSIsImNyZWF0ZVVSTCIsInN0YXRpY0hhbmRsZXIiLCJtZXRob2ROYW1lIiwibm9vcCIsIlN0YXRpY1JvdXRlciIsImhhbmRsZVB1c2giLCJfdGhpcyRwcm9wcyIsImhhbmRsZVJlcGxhY2UiLCJfdGhpcyRwcm9wczIiLCJoYW5kbGVMaXN0ZW4iLCJoYW5kbGVCbG9jayIsIlN3aXRjaCIsImNoaWxkIiwiZWxlbWVudCIsImlzVmFsaWRFbGVtZW50IiwiX2VsZW1lbnQkcHJvcHMiLCJwYXRoUHJvcCIsImNsb25lRWxlbWVudCIsIm1hdGNoUGF0aCIsIndpdGhSb3V0ZXIiLCJwYXR0ZXJuQ2FjaGUiLCJjYWNoZUxpbWl0IiwiY2FjaGVDb3VudCIsImNvbXBpbGVQYXRoIiwicGF0dGVybiIsIm9wdGlvbnMiLCJjYWNoZUtleSIsImVuZCIsImNhY2hlIiwicmUiLCJjb21waWxlZFBhdHRlcm4iLCJfb3B0aW9ucyIsIl9vcHRpb25zJHBhdGgiLCJfb3B0aW9ucyRleGFjdCIsIl9vcHRpb25zJHN0cmljdCIsIl9jb21waWxlUGF0aCIsImV4ZWMiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJtZW1vIiwibmFtZSIsIkMiLCJ3cmFwcGVkQ29tcG9uZW50UmVmIiwicmVtYWluaW5nUHJvcHMiLCJyb3V0ZUNvbXBvbmVudFByb3BzIiwicmVmIiwiZGlzcGxheU5hbWUiLCJXcmFwcGVkQ29tcG9uZW50IiwibW9kdWxlIiwiYXJyIiwiaXNhcnJheSIsInBhdGhUb1JlZ2V4cCIsInBhcnNlIiwiY29tcGlsZSIsInRva2Vuc1RvRnVuY3Rpb24iLCJ0b2tlbnNUb1JlZ0V4cCIsIlBBVEhfUkVHRVhQIiwiUmVnRXhwIiwiam9pbiIsInN0ciIsInRva2VucyIsImRlZmF1bHREZWxpbWl0ZXIiLCJkZWxpbWl0ZXIiLCJyZXMiLCJtIiwiZXNjYXBlZCIsIm9mZnNldCIsIm5leHQiLCJjYXB0dXJlIiwiZ3JvdXAiLCJtb2RpZmllciIsImFzdGVyaXNrIiwicGFydGlhbCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlR3JvdXAiLCJlc2NhcGVTdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnRQcmV0dHkiLCJjIiwiY2hhckNvZGVBdCIsInRvVXBwZXJDYXNlIiwiZW5jb2RlQXN0ZXJpc2siLCJtYXRjaGVzIiwib3B0cyIsImRhdGEiLCJlbmNvZGUiLCJwcmV0dHkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0b2tlbiIsInNlZ21lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiaiIsInRlc3QiLCJhdHRhY2hLZXlzIiwiZmxhZ3MiLCJzZW5zaXRpdmUiLCJyZWdleHBUb1JlZ2V4cCIsImdyb3VwcyIsImFycmF5VG9SZWdleHAiLCJwYXJ0cyIsInJlZ2V4cCIsInN0cmluZ1RvUmVnZXhwIiwiZW5kc1dpdGhEZWxpbWl0ZXIiLCJpc0Fic29sdXRlIiwic3BsaWNlT25lIiwibGlzdCIsImsiLCJwb3AiLCJyZXNvbHZlUGF0aG5hbWUiLCJ0b1BhcnRzIiwic3BsaXQiLCJmcm9tUGFydHMiLCJpc1RvQWJzIiwiaXNGcm9tQWJzIiwibXVzdEVuZEFicyIsImhhc1RyYWlsaW5nU2xhc2giLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsInZhbHVlRXF1YWwiLCJldmVyeSIsImFUeXBlIiwiYlR5cGUiLCJhVmFsdWUiLCJ2YWx1ZU9mIiwiYlZhbHVlIiwiYUtleXMiLCJiS2V5cyIsIndhcm5pbmciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25kaXRpb24iLCJmb3JtYXQiLCJsZW4iLCJFcnJvciIsImFyZ0luZGV4IiwiY29uc29sZSIsImVycm9yIiwieCIsInN0b3JlIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUFBLFFBQVFDLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxJQUFJQyxZQUFZRixRQUFRRSxTQUFSLEdBQW9CLENBQUMsRUFBRSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxRQUF4QyxJQUFvREQsT0FBT0MsUUFBUCxDQUFnQkMsYUFBdEUsQ0FBckM7O0FBRUEsSUFBSUMsbUJBQW1CTixRQUFRTSxnQkFBUixHQUEyQixTQUFTQSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpRDtBQUNqRyxTQUFPRixLQUFLRCxnQkFBTCxHQUF3QkMsS0FBS0QsZ0JBQUwsQ0FBc0JFLEtBQXRCLEVBQTZCQyxRQUE3QixFQUF1QyxLQUF2QyxDQUF4QixHQUF3RUYsS0FBS0csV0FBTCxDQUFpQixPQUFPRixLQUF4QixFQUErQkMsUUFBL0IsQ0FBL0U7QUFDRCxDQUZEOztBQUlBLElBQUlFLHNCQUFzQlgsUUFBUVcsbUJBQVIsR0FBOEIsU0FBU0EsbUJBQVQsQ0FBNkJKLElBQTdCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsUUFBMUMs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NThjYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2hpc3RvcnkvRE9NVXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUgPSByZXF1aXJlKCdyZXNvbHZlLXBhdGhuYW1lJyk7XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVQYXRobmFtZSk7XG5cbnZhciBfdmFsdWVFcXVhbCA9IHJlcXVpcmUoJ3ZhbHVlLWVxdWFsJyk7XG5cbnZhciBfdmFsdWVFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZUVxdWFsKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlTG9jYXRpb24gPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbiA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIC8vIFR3by1hcmcgZm9ybTogcHVzaChwYXRoLCBzdGF0ZSlcbiAgICBsb2NhdGlvbiA9ICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkocGF0aCk7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmUtYXJnIGZvcm06IHB1c2gobG9jYXRpb24pXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGF0aCk7XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24ucGF0aG5hbWUgPSAnJztcblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2guY2hhckF0KDApICE9PSAnPycpIGxvY2F0aW9uLnNlYXJjaCA9ICc/JyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBsb2NhdGlvbi5oYXNoID0gJyMnICsgbG9jYXRpb24uaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICBsb2NhdGlvbi5rZXkgPSBrZXk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgIC8vIFJlc29sdmUgaW5jb21wbGV0ZS9yZWxhdGl2ZSBwYXRobmFtZSByZWxhdGl2ZSB0byBjdXJyZW50IGxvY2F0aW9uLlxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gKDAsIF9yZXNvbHZlUGF0aG5hbWUyLmRlZmF1bHQpKGxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbnZhciBsb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgKDAsIF92YWx1ZUVxdWFsMi5kZWZhdWx0KShhLnN0YXRlLCBiLnN0YXRlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9oaXN0b3J5L0xvY2F0aW9uVXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYWRkTGVhZGluZ1NsYXNoID0gZXhwb3J0cy5hZGRMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufTtcblxudmFyIHN0cmlwTGVhZGluZ1NsYXNoID0gZXhwb3J0cy5zdHJpcExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG59O1xuXG52YXIgc3RyaXBQcmVmaXggPSBleHBvcnRzLnN0cmlwUHJlZml4ID0gZnVuY3Rpb24gc3RyaXBQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YocHJlZml4KSA9PT0gMCA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHBhdGhuYW1lID0gZGVjb2RlVVJJKHBhdGhuYW1lKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCA9PT0gJz8nID8gJycgOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCA9PT0gJyMnID8gJycgOiBoYXNoXG4gIH07XG59O1xuXG52YXIgY3JlYXRlUGF0aCA9IGV4cG9ydHMuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICBoYXNoID0gbG9jYXRpb24uaGFzaDtcblxuXG4gIHZhciBwYXRoID0gZW5jb2RlVVJJKHBhdGhuYW1lIHx8ICcvJyk7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9oaXN0b3J5L1BhdGhVdGlscy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbnZhciBnZXRIaXN0b3J5U3RhdGUgPSBmdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9oaXN0b3J5L3B1bGwvMjg5XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGluY2x1ZGluZ1xuICogcHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQuXG4gKi9cbnZhciBjcmVhdGVCcm93c2VySGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShfRE9NVXRpbHMuY2FuVXNlRE9NLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhblVzZUhpc3RvcnkgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSkoKTtcbiAgdmFyIG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyID0gISgwLCBfRE9NVXRpbHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSkoKTtcblxuICB2YXIgX3Byb3BzJGZvcmNlUmVmcmVzaCA9IHByb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IHByb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB1bmRlZmluZWQgPyBfRE9NVXRpbHMuZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IHByb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHVuZGVmaW5lZCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuXG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gKDAsIF9QYXRoVXRpbHMuc3RyaXBUcmFpbGluZ1NsYXNoKSgoMCwgX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gpKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICB2YXIgZ2V0RE9NTG9jYXRpb24gPSBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuXG5cbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcblxuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLnN0cmlwUHJlZml4KShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkocGF0aCksIHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIGtleToga2V5XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUtleSA9IGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmICgoMCwgX0RPTVV0aWxzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQpKGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSkpO1xuICB9O1xuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICB2YXIgaGFuZGxlUG9wID0gZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG5cbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJldmVydFBvcCA9IGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIGtleXMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3Iga2V5cyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxLZXlzLmluZGV4T2YodG9Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcblxuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcblxuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSk7XG4gIHZhciBhbGxLZXlzID0gW2luaXRpYWxMb2NhdGlvbi5rZXldO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcblxuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG5cbiAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsS2V5c1twcmV2SW5kZXhdID0gbG9jYXRpb24ua2V5O1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICB2YXIgY2hlY2tET01MaXN0ZW5lcnMgPSBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSkge1xuICAgICAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICB2YXIgYmxvY2sgPSBmdW5jdGlvbiBibG9jaygpIHtcbiAgICB2YXIgcHJvbXB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIEhhc2hQYXRoQ29kZXJzID0ge1xuICBoYXNoYmFuZzoge1xuICAgIGVuY29kZVBhdGg6IGZ1bmN0aW9uIGVuY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoIDogJyEvJyArICgwLCBfUGF0aFV0aWxzLnN0cmlwTGVhZGluZ1NsYXNoKShwYXRoKTtcbiAgICB9LFxuICAgIGRlY29kZVBhdGg6IGZ1bmN0aW9uIGRlY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG4gICAgfVxuICB9LFxuICBub3NsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogX1BhdGhVdGlscy5zdHJpcExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaFxuICB9LFxuICBzbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoXG4gIH1cbn07XG5cbnZhciBnZXRIYXNoUGF0aCA9IGZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBoYXNoSW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGhhc2hJbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc3Vic3RyaW5nKGhhc2hJbmRleCArIDEpO1xufTtcblxudmFyIHB1c2hIYXNoUGF0aCA9IGZ1bmN0aW9uIHB1c2hIYXNoUGF0aChwYXRoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59O1xuXG52YXIgcmVwbGFjZUhhc2hQYXRoID0gZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgdmFyIGhhc2hJbmRleCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcblxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBoYXNoSW5kZXggPj0gMCA/IGhhc2hJbmRleCA6IDApICsgJyMnICsgcGF0aCk7XG59O1xuXG52YXIgY3JlYXRlSGFzaEhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoX0RPTVV0aWxzLmNhblVzZURPTSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpO1xuXG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Hb1dpdGhvdXRSZWxvYWQgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKSgpO1xuXG4gIHZhciBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdW5kZWZpbmVkID8gX0RPTVV0aWxzLmdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRoYXNoVHlwZSA9IHByb3BzLmhhc2hUeXBlLFxuICAgICAgaGFzaFR5cGUgPSBfcHJvcHMkaGFzaFR5cGUgPT09IHVuZGVmaW5lZCA/ICdzbGFzaCcgOiBfcHJvcHMkaGFzaFR5cGU7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBfSGFzaFBhdGhDb2RlcnMkaGFzaFQgPSBIYXNoUGF0aENvZGVyc1toYXNoVHlwZV0sXG4gICAgICBlbmNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmVuY29kZVBhdGgsXG4gICAgICBkZWNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmRlY29kZVBhdGg7XG5cblxuICB2YXIgZ2V0RE9NTG9jYXRpb24gPSBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGRlY29kZVBhdGgoZ2V0SGFzaFBhdGgoKSk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcFByZWZpeCkocGF0aCwgYmFzZW5hbWUpO1xuXG4gICAgcmV0dXJuICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkocGF0aCk7XG4gIH07XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICB2YXIgaWdub3JlUGF0aCA9IG51bGw7XG5cbiAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIGhhdmUgYSBwcm9wZXJseS1lbmNvZGVkIGhhc2guXG4gICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICAgICAgdmFyIHByZXZMb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAgIGlmICghZm9yY2VOZXh0UG9wICYmICgwLCBfTG9jYXRpb25VdGlscy5sb2NhdGlvbnNBcmVFcXVhbCkocHJldkxvY2F0aW9uLCBsb2NhdGlvbikpIHJldHVybjsgLy8gQSBoYXNoY2hhbmdlIGRvZXNuJ3QgYWx3YXlzID09IGxvY2F0aW9uIGNoYW5nZS5cblxuICAgICAgaWYgKGlnbm9yZVBhdGggPT09ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBJZ25vcmUgdGhpcyBjaGFuZ2U7IHdlIGFscmVhZHkgc2V0U3RhdGUgaW4gcHVzaC9yZXBsYWNlLlxuXG4gICAgICBpZ25vcmVQYXRoID0gbnVsbDtcblxuICAgICAgaGFuZGxlUG9wKGxvY2F0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcCA9IGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuXG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXZlcnRQb3AgPSBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuXG4gICAgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBwYXRocyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBwYXRocyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKSh0b0xvY2F0aW9uKSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGZyb21Mb2NhdGlvbikpO1xuXG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG5cbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBFbnN1cmUgdGhlIGhhc2ggaXMgZW5jb2RlZCBwcm9wZXJseSBiZWZvcmUgZG9pbmcgYW55dGhpbmcgZWxzZS5cbiAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgdmFyIGFsbFBhdGhzID0gWygwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGluaXRpYWxMb2NhdGlvbildO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gJyMnICsgZW5jb2RlUGF0aChiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKSk7XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIHBhdGggPSAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUFVTSCwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcHVzaEhhc2hQYXRoKGVuY29kZWRQYXRoKTtcblxuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoaGlzdG9yeS5sb2NhdGlvbikpO1xuICAgICAgICB2YXIgbmV4dFBhdGhzID0gYWxsUGF0aHMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcblxuICAgICAgICBuZXh0UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgYWxsUGF0aHMgPSBuZXh0UGF0aHM7XG5cbiAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgUFVTSCB0aGUgc2FtZSBwYXRoOyBhIG5ldyBlbnRyeSB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaycpO1xuXG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIHBhdGggPSAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUkVQTEFDRSwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoaGlzdG9yeS5sb2NhdGlvbikpO1xuXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsUGF0aHNbcHJldkluZGV4XSA9IHBhdGg7XG5cbiAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShjYW5Hb1dpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKTtcblxuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICB2YXIgY2hlY2tET01MaXN0ZW5lcnMgPSBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSkge1xuICAgICAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhhc2hIaXN0b3J5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeS5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG4sIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgc3RvcmVzIGxvY2F0aW9ucyBpbiBtZW1vcnkuXG4gKi9cbnZhciBjcmVhdGVNZW1vcnlIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gcHJvcHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsRW50cmllcyA9IF9wcm9wcyRpbml0aWFsRW50cmllcyA9PT0gdW5kZWZpbmVkID8gWycvJ10gOiBfcHJvcHMkaW5pdGlhbEVudHJpZXMsXG4gICAgICBfcHJvcHMkaW5pdGlhbEluZGV4ID0gcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgaW5pdGlhbEluZGV4ID0gX3Byb3BzJGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wcm9wcyRpbml0aWFsSW5kZXgsXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9O1xuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShlbnRyeSwgdW5kZWZpbmVkLCBjcmVhdGVLZXkoKSkgOiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKGVudHJ5LCB1bmRlZmluZWQsIGVudHJ5LmtleSB8fCBjcmVhdGVLZXkoKSk7XG4gIH0pO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IF9QYXRoVXRpbHMuY3JlYXRlUGF0aDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgIHZhciBuZXh0RW50cmllcyA9IGhpc3RvcnkuZW50cmllcy5zbGljZSgwKTtcbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICBoaXN0b3J5LmVudHJpZXNbaGlzdG9yeS5pbmRleF0gPSBsb2NhdGlvbjtcblxuICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gY2xhbXAoaGlzdG9yeS5pbmRleCArIG4sIDAsIGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAob2spIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBpbmRleDogbmV4dEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWltaWMgdGhlIGJlaGF2aW9yIG9mIERPTSBoaXN0b3JpZXMgYnlcbiAgICAgICAgLy8gY2F1c2luZyBhIHJlbmRlciBhZnRlciBhIGNhbmNlbGxlZCBQT1AuXG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBjYW5HbyA9IGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZW50cmllcy5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogZW50cmllc1tpbmRleF0sXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGNhbkdvOiBjYW5HbyxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9oaXN0b3J5L2NyZWF0ZU1lbW9yeUhpc3RvcnkuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgdmFyIHNldFByb21wdCA9IGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJyk7XG5cbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9tcHQgPT09IG5leHRQcm9tcHQpIHByb21wdCA9IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY29uZmlybVRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBJZiBhbm90aGVyIHRyYW5zaXRpb24gc3RhcnRzIHdoaWxlIHdlJ3JlIHN0aWxsIGNvbmZpcm1pbmdcbiAgICAvLyB0aGUgcHJldmlvdXMgb25lLCB3ZSBtYXkgZW5kIHVwIGluIGEgd2VpcmQgc3RhdGUuIEZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gYmVzdCB3YXkgdG8gaGFuZGxlIHRoaXMuXG4gICAgaWYgKHByb21wdCAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHByb21wdCA9PT0gJ2Z1bmN0aW9uJyA/IHByb21wdChsb2NhdGlvbiwgYWN0aW9uKSA6IHByb21wdDtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VXNlckNvbmZpcm1hdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFVzZXJDb25maXJtYXRpb24ocmVzdWx0LCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0EgaGlzdG9yeSBuZWVkcyBhIGdldFVzZXJDb25maXJtYXRpb24gZnVuY3Rpb24gaW4gb3JkZXIgdG8gdXNlIGEgcHJvbXB0IG1lc3NhZ2UnKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIHZhciBhcHBlbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyKGZuKSB7XG4gICAgdmFyIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgaWYgKGlzQWN0aXZlKSBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVBhdGggPSBleHBvcnRzLnBhcnNlUGF0aCA9IGV4cG9ydHMubG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gZXhwb3J0cy5jcmVhdGVNZW1vcnlIaXN0b3J5ID0gZXhwb3J0cy5jcmVhdGVIYXNoSGlzdG9yeSA9IGV4cG9ydHMuY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSB1bmRlZmluZWQ7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdsb2NhdGlvbnNBcmVFcXVhbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Mb2NhdGlvblV0aWxzLmxvY2F0aW9uc0FyZUVxdWFsO1xuICB9XG59KTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3BhcnNlUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9QYXRoVXRpbHMucGFyc2VQYXRoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9QYXRoVXRpbHMuY3JlYXRlUGF0aDtcbiAgfVxufSk7XG5cbnZhciBfY3JlYXRlQnJvd3Nlckhpc3RvcnkyID0gcmVxdWlyZSgnLi9jcmVhdGVCcm93c2VySGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJyb3dzZXJIaXN0b3J5Mik7XG5cbnZhciBfY3JlYXRlSGFzaEhpc3RvcnkyID0gcmVxdWlyZSgnLi9jcmVhdGVIYXNoSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhhc2hIaXN0b3J5Mik7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTIgPSByZXF1aXJlKCcuL2NyZWF0ZU1lbW9yeUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU1lbW9yeUhpc3RvcnkyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5jcmVhdGVCcm93c2VySGlzdG9yeSA9IF9jcmVhdGVCcm93c2VySGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlSGFzaEhpc3RvcnkgPSBfY3JlYXRlSGFzaEhpc3RvcnkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBfY3JlYXRlTWVtb3J5SGlzdG9yeTMuZGVmYXVsdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2hpc3RvcnkvaW5kZXguanMiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9Sb3V0ZXInO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgc3RvcmVzIGxvY2F0aW9uIGluIG1lbW9yeS5cbiAqL1xuXG52YXIgTWVtb3J5Um91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbW9yeVJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVtb3J5Um91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVtb3J5Um91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGlzdG9yeShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTWVtb3J5Um91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1lbW9yeVJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuTWVtb3J5Um91dGVyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbEVudHJpZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5pdGlhbEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVtb3J5Um91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3Qtcm91dGVyL2VzL01lbW9yeVJvdXRlci5qcyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHByb21wdGluZyB0aGUgdXNlciBiZWZvcmUgbmF2aWdhdGluZyBhd2F5XG4gKiBmcm9tIGEgc2NyZWVuIHdpdGggYSBjb21wb25lbnQuXG4gKi9cblxudmFyIFByb21wdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm9tcHQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFByb21wdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvbXB0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnVuYmxvY2spIHRoaXMudW5ibG9jaygpO1xuXG4gICAgdGhpcy51bmJsb2NrID0gdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5LmJsb2NrKG1lc3NhZ2UpO1xuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKHRoaXMudW5ibG9jaykge1xuICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICB0aGlzLnVuYmxvY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy53aGVuKSB0aGlzLmVuYWJsZSh0aGlzLnByb3BzLm1lc3NhZ2UpO1xuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy53aGVuKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMud2hlbiB8fCB0aGlzLnByb3BzLm1lc3NhZ2UgIT09IG5leHRQcm9wcy5tZXNzYWdlKSB0aGlzLmVuYWJsZShuZXh0UHJvcHMubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH07XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFByb21wdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUHJvbXB0LnByb3BUeXBlcyA9IHtcbiAgd2hlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSkuaXNSZXF1aXJlZFxufTtcblByb21wdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHdoZW46IHRydWVcbn07XG5Qcm9tcHQuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGJsb2NrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFByb21wdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJvdXRlci9lcy9Qcm9tcHQuanMiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciB1cGRhdGluZyB0aGUgbG9jYXRpb24gcHJvZ3JhbWF0aWNhbGx5XG4gKiB3aXRoIGEgY29tcG9uZW50LlxuICovXG5cbnZhciBSZWRpcmVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWRpcmVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZGlyZWN0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmlzU3RhdGljID0gZnVuY3Rpb24gaXNTdGF0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIgJiYgdGhpcy5jb250ZXh0LnJvdXRlci5zdGF0aWNDb250ZXh0O1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuaXNTdGF0aWMoKSkgdGhpcy5wZXJmb3JtKCk7XG4gIH07XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzU3RhdGljKCkpIHRoaXMucGVyZm9ybSgpO1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5wZXJmb3JtID0gZnVuY3Rpb24gcGVyZm9ybSgpIHtcbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHVzaCA9IF9wcm9wcy5wdXNoLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuXG4gICAgaWYgKHB1c2gpIHtcbiAgICAgIGhpc3RvcnkucHVzaCh0byk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZSh0byk7XG4gICAgfVxuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJlZGlyZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gIHB1c2g6IFByb3BUeXBlcy5ib29sLFxuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pXG59O1xuUmVkaXJlY3QuZGVmYXVsdFByb3BzID0ge1xuICBwdXNoOiBmYWxzZVxufTtcblJlZGlyZWN0LmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBwdXNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVwbGFjZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3RhdGljQ29udGV4dDogUHJvcFR5cGVzLm9iamVjdFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3Qtcm91dGVyL2VzL1JlZGlyZWN0LmpzIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1hdGNoUGF0aCBmcm9tICcuL21hdGNoUGF0aCc7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgc2luZ2xlIHBhdGggYW5kIHJlbmRlcmluZy5cbiAqL1xuXG52YXIgUm91dGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm91dGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJvdXRlKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgbWF0Y2g6IF90aGlzLmNvbXB1dGVNYXRjaChfdGhpcy5wcm9wcywgX3RoaXMuY29udGV4dC5yb3V0ZXIpXG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBSb3V0ZS5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZXI6IF9leHRlbmRzKHt9LCB0aGlzLmNvbnRleHQucm91dGVyLCB7XG4gICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb24gfHwgdGhpcy5jb250ZXh0LnJvdXRlci5yb3V0ZS5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaDogdGhpcy5zdGF0ZS5tYXRjaFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH07XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXB1dGVNYXRjaCA9IGZ1bmN0aW9uIGNvbXB1dGVNYXRjaChfcmVmLCBfcmVmMikge1xuICAgIHZhciBjb21wdXRlZE1hdGNoID0gX3JlZi5jb21wdXRlZE1hdGNoLFxuICAgICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICAgIHBhdGggPSBfcmVmLnBhdGgsXG4gICAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgICBleGFjdCA9IF9yZWYuZXhhY3Q7XG4gICAgdmFyIHJvdXRlID0gX3JlZjIucm91dGU7XG5cbiAgICBpZiAoY29tcHV0ZWRNYXRjaCkgcmV0dXJuIGNvbXB1dGVkTWF0Y2g7IC8vIDxTd2l0Y2g+IGFscmVhZHkgY29tcHV0ZWQgdGhlIG1hdGNoIGZvciB1c1xuXG4gICAgdmFyIHBhdGhuYW1lID0gKGxvY2F0aW9uIHx8IHJvdXRlLmxvY2F0aW9uKS5wYXRobmFtZTtcblxuICAgIHJldHVybiBwYXRoID8gbWF0Y2hQYXRoKHBhdGhuYW1lLCB7IHBhdGg6IHBhdGgsIHN0cmljdDogc3RyaWN0LCBleGFjdDogZXhhY3QgfSkgOiByb3V0ZS5tYXRjaDtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICByZW5kZXIgPSBfcHJvcHMucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuXG4gICAgd2FybmluZyghKGNvbXBvbmVudCAmJiByZW5kZXIpLCAnWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgcmVuZGVyPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkJyk7XG5cbiAgICB3YXJuaW5nKCEoY29tcG9uZW50ICYmIGNoaWxkcmVuKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgY29tcG9uZW50PiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWQnKTtcblxuICAgIHdhcm5pbmcoIShyZW5kZXIgJiYgY2hpbGRyZW4pLCAnWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSByZW5kZXI+IGFuZCA8Um91dGUgY2hpbGRyZW4+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgd2FybmluZyghKG5leHRQcm9wcy5sb2NhdGlvbiAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG5cbiAgICB3YXJuaW5nKCEoIW5leHRQcm9wcy5sb2NhdGlvbiAmJiB0aGlzLnByb3BzLmxvY2F0aW9uKSwgJzxSb3V0ZT4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSBjb250cm9sbGVkIHRvIHVuY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBwcm92aWRlZCBhIFwibG9jYXRpb25cIiBwcm9wIGluaXRpYWxseSBidXQgb21pdHRlZCBpdCBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXRjaDogdGhpcy5jb21wdXRlTWF0Y2gobmV4dFByb3BzLCBuZXh0Q29udGV4dC5yb3V0ZXIpXG4gICAgfSk7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgbWF0Y2ggPSB0aGlzLnN0YXRlLm1hdGNoO1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBfcHJvcHMyLmNvbXBvbmVudCxcbiAgICAgICAgcmVuZGVyID0gX3Byb3BzMi5yZW5kZXI7XG4gICAgdmFyIF9jb250ZXh0JHJvdXRlciA9IHRoaXMuY29udGV4dC5yb3V0ZXIsXG4gICAgICAgIGhpc3RvcnkgPSBfY29udGV4dCRyb3V0ZXIuaGlzdG9yeSxcbiAgICAgICAgcm91dGUgPSBfY29udGV4dCRyb3V0ZXIucm91dGUsXG4gICAgICAgIHN0YXRpY0NvbnRleHQgPSBfY29udGV4dCRyb3V0ZXIuc3RhdGljQ29udGV4dDtcblxuICAgIHZhciBsb2NhdGlvbiA9IHRoaXMucHJvcHMubG9jYXRpb24gfHwgcm91dGUubG9jYXRpb247XG4gICAgdmFyIHByb3BzID0geyBtYXRjaDogbWF0Y2gsIGxvY2F0aW9uOiBsb2NhdGlvbiwgaGlzdG9yeTogaGlzdG9yeSwgc3RhdGljQ29udGV4dDogc3RhdGljQ29udGV4dCB9O1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudCA/IC8vIGNvbXBvbmVudCBwcm9wIGdldHMgZmlyc3QgcHJpb3JpdHksIG9ubHkgY2FsbGVkIGlmIHRoZXJlJ3MgYSBtYXRjaFxuICAgIG1hdGNoID8gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKSA6IG51bGwgOiByZW5kZXIgPyAvLyByZW5kZXIgcHJvcCBpcyBuZXh0LCBvbmx5IGNhbGxlZCBpZiB0aGVyZSdzIGEgbWF0Y2hcbiAgICBtYXRjaCA/IHJlbmRlcihwcm9wcykgOiBudWxsIDogY2hpbGRyZW4gPyAvLyBjaGlsZHJlbiBjb21lIGxhc3QsIGFsd2F5cyBjYWxsZWRcbiAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbihwcm9wcykgOiAhQXJyYXkuaXNBcnJheShjaGlsZHJlbikgfHwgY2hpbGRyZW4ubGVuZ3RoID8gLy8gUHJlYWN0IGRlZmF1bHRzIHRvIGVtcHR5IGNoaWxkcmVuIGFycmF5XG4gICAgUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUm91dGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcHV0ZWRNYXRjaDogUHJvcFR5cGVzLm9iamVjdCwgLy8gcHJpdmF0ZSwgZnJvbSA8U3dpdGNoPlxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGFjdDogUHJvcFR5cGVzLmJvb2wsXG4gIHN0cmljdDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3Rcbn07XG5Sb3V0ZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzdGF0aWNDb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pXG59O1xuUm91dGUuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3Qtcm91dGVyL2VzL1JvdXRlLmpzIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBwdXR0aW5nIGhpc3Rvcnkgb24gY29udGV4dC5cbiAqL1xuXG52YXIgUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hdGNoOiBfdGhpcy5jb21wdXRlTWF0Y2goX3RoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSlcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIFJvdXRlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZXI6IF9leHRlbmRzKHt9LCB0aGlzLmNvbnRleHQucm91dGVyLCB7XG4gICAgICAgIGhpc3Rvcnk6IHRoaXMucHJvcHMuaGlzdG9yeSxcbiAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICBsb2NhdGlvbjogdGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoOiB0aGlzLnN0YXRlLm1hdGNoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNvbXB1dGVNYXRjaCA9IGZ1bmN0aW9uIGNvbXB1dGVNYXRjaChwYXRobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHBhcmFtczoge30sXG4gICAgICBpc0V4YWN0OiBwYXRobmFtZSA9PT0gJy8nXG4gICAgfTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaGlzdG9yeSA9IF9wcm9wcy5oaXN0b3J5O1xuXG5cbiAgICBpbnZhcmlhbnQoY2hpbGRyZW4gPT0gbnVsbCB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEsICdBIDxSb3V0ZXI+IG1heSBoYXZlIG9ubHkgb25lIGNoaWxkIGVsZW1lbnQnKTtcblxuICAgIC8vIERvIHRoaXMgaGVyZSBzbyB3ZSBjYW4gc2V0U3RhdGUgd2hlbiBhIDxSZWRpcmVjdD4gY2hhbmdlcyB0aGVcbiAgICAvLyBsb2NhdGlvbiBpbiBjb21wb25lbnRXaWxsTW91bnQuIFRoaXMgaGFwcGVucyBlLmcuIHdoZW4gZG9pbmdcbiAgICAvLyBzZXJ2ZXIgcmVuZGVyaW5nIHVzaW5nIGEgPFN0YXRpY1JvdXRlcj4uXG4gICAgdGhpcy51bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIG1hdGNoOiBfdGhpczIuY29tcHV0ZU1hdGNoKGhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHdhcm5pbmcodGhpcy5wcm9wcy5oaXN0b3J5ID09PSBuZXh0UHJvcHMuaGlzdG9yeSwgJ1lvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT4nKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bmxpc3RlbigpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICByZXR1cm4gY2hpbGRyZW4gPyBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5Sb3V0ZXIuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5Sb3V0ZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJvdXRlci9lcy9Sb3V0ZXIuanMiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBhZGRMZWFkaW5nU2xhc2gsIGNyZWF0ZVBhdGgsIHBhcnNlUGF0aCB9IGZyb20gJ2hpc3RvcnkvUGF0aFV0aWxzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9Sb3V0ZXInO1xuXG52YXIgbm9ybWFsaXplTG9jYXRpb24gPSBmdW5jdGlvbiBub3JtYWxpemVMb2NhdGlvbihvYmplY3QpIHtcbiAgdmFyIF9vYmplY3QkcGF0aG5hbWUgPSBvYmplY3QucGF0aG5hbWUsXG4gICAgICBwYXRobmFtZSA9IF9vYmplY3QkcGF0aG5hbWUgPT09IHVuZGVmaW5lZCA/ICcvJyA6IF9vYmplY3QkcGF0aG5hbWUsXG4gICAgICBfb2JqZWN0JHNlYXJjaCA9IG9iamVjdC5zZWFyY2gsXG4gICAgICBzZWFyY2ggPSBfb2JqZWN0JHNlYXJjaCA9PT0gdW5kZWZpbmVkID8gJycgOiBfb2JqZWN0JHNlYXJjaCxcbiAgICAgIF9vYmplY3QkaGFzaCA9IG9iamVjdC5oYXNoLFxuICAgICAgaGFzaCA9IF9vYmplY3QkaGFzaCA9PT0gdW5kZWZpbmVkID8gJycgOiBfb2JqZWN0JGhhc2g7XG5cblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCA9PT0gJz8nID8gJycgOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCA9PT0gJyMnID8gJycgOiBoYXNoXG4gIH07XG59O1xuXG52YXIgYWRkQmFzZW5hbWUgPSBmdW5jdGlvbiBhZGRCYXNlbmFtZShiYXNlbmFtZSwgbG9jYXRpb24pIHtcbiAgaWYgKCFiYXNlbmFtZSkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICBwYXRobmFtZTogYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKSArIGxvY2F0aW9uLnBhdGhuYW1lXG4gIH0pO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG5cbiAgdmFyIGJhc2UgPSBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpO1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKGJhc2UpICE9PSAwKSByZXR1cm4gbG9jYXRpb247XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoYmFzZS5sZW5ndGgpXG4gIH0pO1xufTtcblxudmFyIGNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycgPyBwYXJzZVBhdGgobG9jYXRpb24pIDogbm9ybWFsaXplTG9jYXRpb24obG9jYXRpb24pO1xufTtcblxudmFyIGNyZWF0ZVVSTCA9IGZ1bmN0aW9uIGNyZWF0ZVVSTChsb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJyA/IGxvY2F0aW9uIDogY3JlYXRlUGF0aChsb2NhdGlvbik7XG59O1xuXG52YXIgc3RhdGljSGFuZGxlciA9IGZ1bmN0aW9uIHN0YXRpY0hhbmRsZXIobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGludmFyaWFudChmYWxzZSwgJ1lvdSBjYW5ub3QgJXMgd2l0aCA8U3RhdGljUm91dGVyPicsIG1ldGhvZE5hbWUpO1xuICB9O1xufTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbi8qKlxuICogVGhlIHB1YmxpYyB0b3AtbGV2ZWwgQVBJIGZvciBhIFwic3RhdGljXCIgPFJvdXRlcj4sIHNvLWNhbGxlZCBiZWNhdXNlIGl0XG4gKiBjYW4ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGN1cnJlbnQgbG9jYXRpb24uIEluc3RlYWQsIGl0IGp1c3QgcmVjb3Jkc1xuICogbG9jYXRpb24gY2hhbmdlcyBpbiBhIGNvbnRleHQgb2JqZWN0LiBVc2VmdWwgbWFpbmx5IGluIHRlc3RpbmcgYW5kXG4gKiBzZXJ2ZXItcmVuZGVyaW5nIHNjZW5hcmlvcy5cbiAqL1xuXG52YXIgU3RhdGljUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0YXRpY1JvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3RhdGljUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jcmVhdGVIcmVmID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nU2xhc2goX3RoaXMucHJvcHMuYmFzZW5hbWUgKyBjcmVhdGVVUkwocGF0aCkpO1xuICAgIH0sIF90aGlzLmhhbmRsZVB1c2ggPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGJhc2VuYW1lID0gX3RoaXMkcHJvcHMuYmFzZW5hbWUsXG4gICAgICAgICAgY29udGV4dCA9IF90aGlzJHByb3BzLmNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQuYWN0aW9uID0gJ1BVU0gnO1xuICAgICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpO1xuICAgICAgY29udGV4dC51cmwgPSBjcmVhdGVVUkwoY29udGV4dC5sb2NhdGlvbik7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVwbGFjZSA9IGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGJhc2VuYW1lID0gX3RoaXMkcHJvcHMyLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wczIuY29udGV4dDtcblxuICAgICAgY29udGV4dC5hY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgICBjb250ZXh0LmxvY2F0aW9uID0gYWRkQmFzZW5hbWUoYmFzZW5hbWUsIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSk7XG4gICAgICBjb250ZXh0LnVybCA9IGNyZWF0ZVVSTChjb250ZXh0LmxvY2F0aW9uKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVMaXN0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbm9vcDtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlcjoge1xuICAgICAgICBzdGF0aWNDb250ZXh0OiB0aGlzLnByb3BzLmNvbnRleHRcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIFN0YXRpY1JvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBiYXNlbmFtZSA9IF9wcm9wcy5iYXNlbmFtZSxcbiAgICAgICAgY29udGV4dCA9IF9wcm9wcy5jb250ZXh0LFxuICAgICAgICBsb2NhdGlvbiA9IF9wcm9wcy5sb2NhdGlvbixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2Jhc2VuYW1lJywgJ2NvbnRleHQnLCAnbG9jYXRpb24nXSk7XG5cbiAgICB2YXIgaGlzdG9yeSA9IHtcbiAgICAgIGNyZWF0ZUhyZWY6IHRoaXMuY3JlYXRlSHJlZixcbiAgICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgICBsb2NhdGlvbjogc3RyaXBCYXNlbmFtZShiYXNlbmFtZSwgY3JlYXRlTG9jYXRpb24obG9jYXRpb24pKSxcbiAgICAgIHB1c2g6IHRoaXMuaGFuZGxlUHVzaCxcbiAgICAgIHJlcGxhY2U6IHRoaXMuaGFuZGxlUmVwbGFjZSxcbiAgICAgIGdvOiBzdGF0aWNIYW5kbGVyKCdnbycpLFxuICAgICAgZ29CYWNrOiBzdGF0aWNIYW5kbGVyKCdnb0JhY2snKSxcbiAgICAgIGdvRm9yd2FyZDogc3RhdGljSGFuZGxlcignZ29Gb3J3YXJkJyksXG4gICAgICBsaXN0ZW46IHRoaXMuaGFuZGxlTGlzdGVuLFxuICAgICAgYmxvY2s6IHRoaXMuaGFuZGxlQmxvY2tcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgaGlzdG9yeTogaGlzdG9yeSB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRpY1JvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3RhdGljUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKVxufTtcblN0YXRpY1JvdXRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhc2VuYW1lOiAnJyxcbiAgbG9jYXRpb246ICcvJ1xufTtcblN0YXRpY1JvdXRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljUm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3Qtcm91dGVyL2VzL1N0YXRpY1JvdXRlci5qcyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBtYXRjaFBhdGggZnJvbSAnLi9tYXRjaFBhdGgnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgdGhlIGZpcnN0IDxSb3V0ZT4gdGhhdCBtYXRjaGVzLlxuICovXG5cbnZhciBTd2l0Y2ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3dpdGNoLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2goKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXRjaCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgd2FybmluZyghKG5leHRQcm9wcy5sb2NhdGlvbiAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpO1xuXG4gICAgd2FybmluZyghKCFuZXh0UHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG4gIH07XG5cbiAgU3dpdGNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJvdXRlID0gdGhpcy5jb250ZXh0LnJvdXRlci5yb3V0ZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCByb3V0ZS5sb2NhdGlvbjtcblxuICAgIHZhciBtYXRjaCA9IHZvaWQgMCxcbiAgICAgICAgY2hpbGQgPSB2b2lkIDA7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHJldHVybjtcblxuICAgICAgdmFyIF9lbGVtZW50JHByb3BzID0gZWxlbWVudC5wcm9wcyxcbiAgICAgICAgICBwYXRoUHJvcCA9IF9lbGVtZW50JHByb3BzLnBhdGgsXG4gICAgICAgICAgZXhhY3QgPSBfZWxlbWVudCRwcm9wcy5leGFjdCxcbiAgICAgICAgICBzdHJpY3QgPSBfZWxlbWVudCRwcm9wcy5zdHJpY3QsXG4gICAgICAgICAgZnJvbSA9IF9lbGVtZW50JHByb3BzLmZyb207XG5cbiAgICAgIHZhciBwYXRoID0gcGF0aFByb3AgfHwgZnJvbTtcblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgY2hpbGQgPSBlbGVtZW50O1xuICAgICAgICBtYXRjaCA9IHBhdGggPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIHsgcGF0aDogcGF0aCwgZXhhY3Q6IGV4YWN0LCBzdHJpY3Q6IHN0cmljdCB9KSA6IHJvdXRlLm1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoID8gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGxvY2F0aW9uOiBsb2NhdGlvbiwgY29tcHV0ZWRNYXRjaDogbWF0Y2ggfSkgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBTd2l0Y2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblN3aXRjaC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJvdXRlci9lcy9Td2l0Y2guanMiLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tICcuL01lbW9yeVJvdXRlcic7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSAnLi9Qcm9tcHQnO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSAnLi9SZWRpcmVjdCc7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSAnLi9Sb3V0ZSc7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gJy4vUm91dGVyJztcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tICcuL1N0YXRpY1JvdXRlcic7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSAnLi9Td2l0Y2gnO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gJy4vbWF0Y2hQYXRoJztcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSAnLi93aXRoUm91dGVyJztcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyIsImltcG9ydCBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuXG52YXIgcGF0dGVybkNhY2hlID0ge307XG52YXIgY2FjaGVMaW1pdCA9IDEwMDAwO1xudmFyIGNhY2hlQ291bnQgPSAwO1xuXG52YXIgY29tcGlsZVBhdGggPSBmdW5jdGlvbiBjb21waWxlUGF0aChwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIHZhciBjYWNoZUtleSA9ICcnICsgb3B0aW9ucy5lbmQgKyBvcHRpb25zLnN0cmljdDtcbiAgdmFyIGNhY2hlID0gcGF0dGVybkNhY2hlW2NhY2hlS2V5XSB8fCAocGF0dGVybkNhY2hlW2NhY2hlS2V5XSA9IHt9KTtcblxuICBpZiAoY2FjaGVbcGF0dGVybl0pIHJldHVybiBjYWNoZVtwYXR0ZXJuXTtcblxuICB2YXIga2V5cyA9IFtdO1xuICB2YXIgcmUgPSBwYXRoVG9SZWdleHAocGF0dGVybiwga2V5cywgb3B0aW9ucyk7XG4gIHZhciBjb21waWxlZFBhdHRlcm4gPSB7IHJlOiByZSwga2V5czoga2V5cyB9O1xuXG4gIGlmIChjYWNoZUNvdW50IDwgY2FjaGVMaW1pdCkge1xuICAgIGNhY2hlW3BhdHRlcm5dID0gY29tcGlsZWRQYXR0ZXJuO1xuICAgIGNhY2hlQ291bnQrKztcbiAgfVxuXG4gIHJldHVybiBjb21waWxlZFBhdHRlcm47XG59O1xuXG4vKipcbiAqIFB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgVVJMIHBhdGhuYW1lIHRvIGEgcGF0aCBwYXR0ZXJuLlxuICovXG52YXIgbWF0Y2hQYXRoID0gZnVuY3Rpb24gbWF0Y2hQYXRoKHBhdGhuYW1lKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyBwYXRoOiBvcHRpb25zIH07XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBhdGggPSBfb3B0aW9ucy5wYXRoLFxuICAgICAgcGF0aCA9IF9vcHRpb25zJHBhdGggPT09IHVuZGVmaW5lZCA/ICcvJyA6IF9vcHRpb25zJHBhdGgsXG4gICAgICBfb3B0aW9ucyRleGFjdCA9IF9vcHRpb25zLmV4YWN0LFxuICAgICAgZXhhY3QgPSBfb3B0aW9ucyRleGFjdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyRleGFjdCxcbiAgICAgIF9vcHRpb25zJHN0cmljdCA9IF9vcHRpb25zLnN0cmljdCxcbiAgICAgIHN0cmljdCA9IF9vcHRpb25zJHN0cmljdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyRzdHJpY3Q7XG5cbiAgdmFyIF9jb21waWxlUGF0aCA9IGNvbXBpbGVQYXRoKHBhdGgsIHsgZW5kOiBleGFjdCwgc3RyaWN0OiBzdHJpY3QgfSksXG4gICAgICByZSA9IF9jb21waWxlUGF0aC5yZSxcbiAgICAgIGtleXMgPSBfY29tcGlsZVBhdGgua2V5cztcblxuICB2YXIgbWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcblxuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICB2YXIgdXJsID0gbWF0Y2hbMF0sXG4gICAgICB2YWx1ZXMgPSBtYXRjaC5zbGljZSgxKTtcblxuICB2YXIgaXNFeGFjdCA9IHBhdGhuYW1lID09PSB1cmw7XG5cbiAgaWYgKGV4YWN0ICYmICFpc0V4YWN0KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgsIC8vIHRoZSBwYXRoIHBhdHRlcm4gdXNlZCB0byBtYXRjaFxuICAgIHVybDogcGF0aCA9PT0gJy8nICYmIHVybCA9PT0gJycgPyAnLycgOiB1cmwsIC8vIHRoZSBtYXRjaGVkIHBvcnRpb24gb2YgdGhlIFVSTFxuICAgIGlzRXhhY3Q6IGlzRXhhY3QsIC8vIHdoZXRoZXIgb3Igbm90IHdlIG1hdGNoZWQgZXhhY3RseVxuICAgIHBhcmFtczoga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIGtleSwgaW5kZXgpIHtcbiAgICAgIG1lbW9ba2V5Lm5hbWVdID0gdmFsdWVzW2luZGV4XTtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH0sIHt9KVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hQYXRoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3Qtcm91dGVyL2VzL21hdGNoUGF0aC5qcyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL1JvdXRlJztcblxuLyoqXG4gKiBBIHB1YmxpYyBoaWdoZXItb3JkZXIgY29tcG9uZW50IHRvIGFjY2VzcyB0aGUgaW1wZXJhdGl2ZSBBUElcbiAqL1xudmFyIHdpdGhSb3V0ZXIgPSBmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvbmVudCkge1xuICB2YXIgQyA9IGZ1bmN0aW9uIEMocHJvcHMpIHtcbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudFJlZiA9IHByb3BzLndyYXBwZWRDb21wb25lbnRSZWYsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3dyYXBwZWRDb21wb25lbnRSZWYnXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihyb3V0ZUNvbXBvbmVudFByb3BzKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHJlbWFpbmluZ1Byb3BzLCByb3V0ZUNvbXBvbmVudFByb3BzLCB7IHJlZjogd3JhcHBlZENvbXBvbmVudFJlZiB9KSk7XG4gICAgICB9IH0pO1xuICB9O1xuXG4gIEMuZGlzcGxheU5hbWUgPSAnd2l0aFJvdXRlcignICsgKENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSkgKyAnKSc7XG4gIEMuV3JhcHBlZENvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgQy5wcm9wVHlwZXMgPSB7XG4gICAgd3JhcHBlZENvbXBvbmVudFJlZjogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICByZXR1cm4gaG9pc3RTdGF0aWNzKEMsIENvbXBvbmVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVhY3Qtcm91dGVyL2VzL3dpdGhSb3V0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlYWN0LXJvdXRlci9+L2lzYXJyYXkvaW5kZXguanMiLCJ2YXIgaXNhcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoVG9SZWdleHBcbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2Vcbm1vZHVsZS5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvblxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIga2V5ID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBwYXRoID0gJydcbiAgdmFyIGRlZmF1bHREZWxpbWl0ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJ1xuICB2YXIgcmVzXG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF1cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XVxuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeFxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8IGRlZmF1bHREZWxpbWl0ZXJcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleClcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKVxuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge31cbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzXG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKVxuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgcGFydGlhbDogZmFsc2UsXG4gICAgICAgIGFzdGVyaXNrOiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgcm91dGUgPSAnJ1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeClcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknXG5cbiAgICAgIGtleXMucHVzaCh0b2tlbilcblxuICAgICAgaWYgKHRva2VuLnJlcGVhdCkge1xuICAgICAgICBjYXB0dXJlICs9ICcoPzonICsgcHJlZml4ICsgY2FwdHVyZSArICcpKidcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyk/J1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpJ1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlXG4gICAgfVxuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLycpXG4gIHZhciBlbmRzV2l0aERlbGltaXRlciA9IHJvdXRlLnNsaWNlKC1kZWxpbWl0ZXIubGVuZ3RoKSA9PT0gZGVsaW1pdGVyXG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPydcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCdcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiBub24tZW5kaW5nIG1vZGUsIHdlIG5lZWQgdGhlIGNhcHR1cmluZyBncm91cHMgdG8gbWF0Y2ggYXMgbXVjaCBhc1xuICAgIC8vIHBvc3NpYmxlIGJ5IHVzaW5nIGEgcG9zaXRpdmUgbG9va2FoZWFkIHRvIHRoZSBlbmQgb3IgbmV4dCBwYXRoIHNlZ21lbnQuXG4gICAgcm91dGUgKz0gc3RyaWN0ICYmIGVuZHNXaXRoRGVsaW1pdGVyID8gJycgOiAnKD89JyArIGRlbGltaXRlciArICd8JCknXG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpc2FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWFjdC1yb3V0ZXIvfi9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGUgPSBmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIEFib3V0IDEuNXggZmFzdGVyIHRoYW4gdGhlIHR3by1hcmcgdmVyc2lvbiBvZiBBcnJheSNzcGxpY2UoKVxudmFyIHNwbGljZU9uZSA9IGZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfWxpc3QucG9wKCk7XG59O1xuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxudmFyIHJlc29sdmVQYXRobmFtZSA9IGZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZSh0bykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgdmFyIHRvUGFydHMgPSB0byAmJiB0by5zcGxpdCgnLycpIHx8IFtdO1xuICB2YXIgZnJvbVBhcnRzID0gZnJvbSAmJiBmcm9tLnNwbGl0KCcvJykgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gIH1pZiAobXVzdEVuZEFicyAmJiBmcm9tUGFydHNbMF0gIT09ICcnICYmICghZnJvbVBhcnRzWzBdIHx8ICFpc0Fic29sdXRlKGZyb21QYXJ0c1swXSkpKSBmcm9tUGFydHMudW5zaGlmdCgnJyk7XG5cbiAgdmFyIHJlc3VsdCA9IGZyb21QYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgcmVzdWx0LnN1YnN0cigtMSkgIT09ICcvJykgcmVzdWx0ICs9ICcvJztcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXNvbHZlUGF0aG5hbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciB2YWx1ZUVxdWFsID0gZnVuY3Rpb24gdmFsdWVFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gdmFsdWVFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gIH0pO1xuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHZhbHVlRXF1YWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93YXJuaW5nL2Jyb3dzZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBSb3V0ZXIse1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2NyZWF0ZUhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknXG5cbmltcG9ydCBMb2dpbkZvcm1Db250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lcidcbmltcG9ydCBMb2dpblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9Mb2dpblJlZHVjZXInXG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKExvZ2luUmVkdWNlcilcbmxldCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TG9naW5Gb3JtQ29udGFpbmVyfSAvPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuICAsXG4gIGRvY3VtZW50LmJvZHlcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9