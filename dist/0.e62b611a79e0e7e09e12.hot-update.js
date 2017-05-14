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
var history = (0, _history.createHistory)({
  basename: '/#'
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsic3RvcmUiLCJoaXN0b3J5IiwiYmFzZW5hbWUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsUUFBUSwrQ0FBWjtBQUNBLElBQUlDLFVBQVUsNEJBQWM7QUFDMUJDLFlBQVU7QUFEZ0IsQ0FBZCxDQUFkOztBQUlBLG1CQUFTQyxNQUFULENBQ0U7QUFBQTtBQUFBLElBQVUsT0FBT0gsS0FBakI7QUFDRTtBQUFBO0FBQUEsTUFBUSxTQUFTQyxPQUFqQjtBQUNFLHdEQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLHVDQUF0QjtBQURGO0FBREYsQ0FERixFQU9FRyxTQUFTQyxJQVBYLEUiLCJmaWxlIjoiMC5lNjJiNjExYTc5ZTBlN2UwOWUxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgUm91dGVyLHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjcmVhdGVIaXN0b3J5fSBmcm9tICdoaXN0b3J5J1xuXG5pbXBvcnQgTG9naW5Gb3JtQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXInXG5pbXBvcnQgTG9naW5SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvTG9naW5SZWR1Y2VyJ1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShMb2dpblJlZHVjZXIpXG5sZXQgaGlzdG9yeSA9IGNyZWF0ZUhpc3Rvcnkoe1xuICBiYXNlbmFtZTogJy8jJ1xufSlcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbkZvcm1Db250YWluZXJ9IC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4gICxcbiAgZG9jdW1lbnQuYm9keVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=