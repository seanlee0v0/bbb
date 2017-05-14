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
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginFormContainer2.default })
  )
), document.body);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsic3RvcmUiLCJoaXN0b3J5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFFBQVEsK0NBQVo7QUFDQSxJQUFJQyxVQUFVLDZCQUFkOztBQUVBLG1CQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLElBQVUsT0FBT0YsS0FBakI7QUFDRTtBQUFBO0FBQUEsTUFBUSxTQUFTQyxPQUFqQjtBQUNFLHdEQUFPLE1BQUssR0FBWixFQUFnQix1Q0FBaEI7QUFERjtBQURGLENBREYsRUFPRUUsU0FBU0MsSUFQWCxFIiwiZmlsZSI6IjAuM2UwMjAxZTExYTc1ZTUzMjNiMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IFJvdXRlcix7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y3JlYXRlSGlzdG9yeX0gZnJvbSAnaGlzdG9yeSdcblxuaW1wb3J0IExvZ2luRm9ybUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyJ1xuaW1wb3J0IExvZ2luUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL0xvZ2luUmVkdWNlcidcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoTG9naW5SZWR1Y2VyKVxubGV0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbkZvcm1Db250YWluZXJ9IC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4gICxcbiAgZG9jdW1lbnQuYm9keVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=