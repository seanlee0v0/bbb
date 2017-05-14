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
  'div',
  null,
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: history },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _LoginFormContainer2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default })
      )
    )
  )
), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsic3RvcmUiLCJoaXN0b3J5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRLCtDQUFaO0FBQ0EsSUFBSUMsVUFBVSxpQ0FBZDs7QUFFQSxtQkFBU0MsTUFBVCxDQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxNQUFVLE9BQU9GLEtBQWpCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsU0FBU0MsT0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRSw0REFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQix1Q0FBdEIsR0FERjtBQUVFLDREQUFPLE1BQUssT0FBWixFQUFvQix5QkFBcEI7QUFGRjtBQURGO0FBREY7QUFERixDQURBLEVBWUVFLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FaRixFIiwiZmlsZSI6IjAuNmEzYjUxN2E2NTI1OWU5ZjU1ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtSb3V0ZXIsUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y3JlYXRlSGFzaEhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknXG5cbmltcG9ydCBMb2dpbkZvcm1Db250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lcidcbmltcG9ydCBMb2dpblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9Mb2dpblJlZHVjZXInXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSdcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoTG9naW5SZWR1Y2VyKVxubGV0IGhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSgpXG5cblJlYWN0RE9NLnJlbmRlcihcbjxkaXY+XG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvZ2luRm9ybUNvbnRhaW5lcn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuPC9kaXY+XG4gICxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=