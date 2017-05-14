webpackHotUpdate(0,{

/***/ "./src/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _LoginFormContainer = __webpack_require__("./src/containers/LoginFormContainer.js");

var _LoginFormContainer2 = _interopRequireDefault(_LoginFormContainer);

var _LoginReducer = __webpack_require__("./src/reducers/LoginReducer.js");

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_LoginReducer2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_LoginFormContainer2.default, null)
), document.body);

/***/ }),

/***/ "./src/reducers/LoginFormReducer.js":
false,

/***/ "./src/reducers/LoginReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//import {combineReducers} from 'redux'

var LoginReducer = exports.LoginReducer = function LoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN_SUCCEED':
      {
        return {
          username: action.username,
          isLoginSucceed: action.isLoginSucceed
        };
      }
    case 'LOGIN_FAILED':
      {}
    default:
      {
        return state;
      }
  }
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL0xvZ2luUmVkdWNlci5qcz80MDIyIl0sIm5hbWVzIjpbInN0b3JlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidXNlcm5hbWUiLCJpc0xvZ2luU3VjY2VlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsUUFBUSwrQ0FBWjs7QUFFQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFVLE9BQU9ELEtBQWpCO0FBQ0U7QUFERixDQURGLEVBS0VFLFNBQVNDLElBTFgsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUVPLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsR0FBcUI7QUFBQSxNQUFwQkMsS0FBb0IsdUVBQWQsRUFBYztBQUFBLE1BQVhDLE1BQVc7O0FBQy9DLFVBQU9BLE9BQU9DLElBQWQ7QUFDRSxTQUFLLGVBQUw7QUFDQTtBQUNFLGVBQU87QUFDTEMsb0JBQVVGLE9BQU9FLFFBRFo7QUFFTEMsMEJBQWdCSCxPQUFPRztBQUZsQixTQUFQO0FBSUQ7QUFDRCxTQUFLLGNBQUw7QUFDQSxPQUVDO0FBQ0Q7QUFDQTtBQUNFLGVBQU9KLEtBQVA7QUFDRDtBQWZIO0FBaUJELENBbEJNLEMiLCJmaWxlIjoiMC40MTIzZWZkNzRkMjg0OTE3MGJhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBMb2dpbkZvcm1Db250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lcidcbmltcG9ydCBMb2dpblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9Mb2dpblJlZHVjZXInXG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKExvZ2luUmVkdWNlcilcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8TG9naW5Gb3JtQ29udGFpbmVyLz5cbiAgPC9Qcm92aWRlcj5cbiAgLFxuICBkb2N1bWVudC5ib2R5XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiLy9pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXG5cbmV4cG9ydCBjb25zdCBMb2dpblJlZHVjZXIgPSAoc3RhdGU9e30sYWN0aW9uKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSAnTE9HSU5fU1VDQ0VFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi51c2VybmFtZSxcbiAgICAgICAgaXNMb2dpblN1Y2NlZWQ6IGFjdGlvbi5pc0xvZ2luU3VjY2VlZFxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdMT0dJTl9GQUlMRUQnOlxuICAgIHtcblxuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgIHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL0xvZ2luUmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=