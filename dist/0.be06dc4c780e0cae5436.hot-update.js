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

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

var _history = __webpack_require__("./node_modules/history/index.js");

var _LoginFormContainer = __webpack_require__("./src/containers/LoginFormContainer.js");

var _LoginFormContainer2 = _interopRequireDefault(_LoginFormContainer);

var _LoginReducer = __webpack_require__("./src/reducers/LoginReducer.js");

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

var _Home = __webpack_require__("./src/components/Home.js");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_LoginReducer2.default);
var history = (0, _history.createHashHistory)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: history },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginFormContainer2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default })
    )
  )
), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsic3RvcmUiLCJoaXN0b3J5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRLCtDQUFaO0FBQ0EsSUFBSUMsVUFBVSxpQ0FBZDs7QUFFQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFVLE9BQU9GLEtBQWpCO0FBQ0U7QUFBQTtBQUFBLE1BQVEsU0FBU0MsT0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRSwwREFBTyxNQUFLLEdBQVosRUFBZ0IsdUNBQWhCLEdBREY7QUFFRSwwREFBTyxNQUFLLE9BQVosRUFBb0IseUJBQXBCO0FBRkY7QUFERjtBQURGLENBREYsRUFVRUUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQVZGLEUiLCJmaWxlIjoiMC5iZTA2ZGM0Yzc4MGUwY2FlNTQzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQge1JvdXRlcixSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjcmVhdGVIYXNoSGlzdG9yeX0gZnJvbSAnaGlzdG9yeSdcblxuaW1wb3J0IExvZ2luRm9ybUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyJ1xuaW1wb3J0IExvZ2luUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL0xvZ2luUmVkdWNlcidcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJ1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShMb2dpblJlZHVjZXIpXG5sZXQgaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbkZvcm1Db250YWluZXJ9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiAgLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==