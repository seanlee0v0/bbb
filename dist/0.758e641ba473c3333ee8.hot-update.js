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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_LoginReducer2.default);
var history = (0, _history.createHashHistory)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: history },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginFormContainer2.default })
  )
), document.body);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsic3RvcmUiLCJoaXN0b3J5IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxRQUFRLCtDQUFaO0FBQ0EsSUFBSUMsVUFBVSxpQ0FBZDs7QUFFQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFVLE9BQU9GLEtBQWpCO0FBQ0U7QUFBQTtBQUFBLE1BQVEsU0FBU0MsT0FBakI7QUFDRSx3REFBTyxNQUFLLEdBQVosRUFBZ0IsdUNBQWhCO0FBREY7QUFERixDQURGLEVBT0VFLFNBQVNDLElBUFgsRSIsImZpbGUiOiIwLjc1OGU2NDFiYTQ3M2MzMzMzZWU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7Um91dGVyLFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2NyZWF0ZUhhc2hIaXN0b3J5fSBmcm9tICdoaXN0b3J5J1xuXG5pbXBvcnQgTG9naW5Gb3JtQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXInXG5pbXBvcnQgTG9naW5SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvTG9naW5SZWR1Y2VyJ1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShMb2dpblJlZHVjZXIpXG5sZXQgaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KClcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbkZvcm1Db250YWluZXJ9IC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4gICxcbiAgZG9jdW1lbnQuYm9keVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=