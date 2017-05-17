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

var store = (0, _redux.createStore)(_LoginReducer2.default, window.STATE_FROM_SERVER);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsic3RvcmUiLCJ3aW5kb3ciLCJTVEFURV9GUk9NX1NFUlZFUiIsImhpc3RvcnkiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFFBQVEsZ0RBQXlCQyxPQUFPQyxpQkFBaEMsQ0FBWjtBQUNBLElBQUlDLFVBQVUsaUNBQWQ7O0FBRUEsbUJBQVNDLE1BQVQsQ0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsTUFBVSxPQUFPSixLQUFqQjtBQUNFO0FBQUE7QUFBQSxRQUFRLFNBQVNHLE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNERBQU8sV0FBUCxFQUFhLE1BQUssR0FBbEIsRUFBc0IsdUNBQXRCLEdBREY7QUFFRSw0REFBTyxNQUFLLE9BQVosRUFBb0IseUJBQXBCO0FBRkY7QUFERjtBQURGO0FBREYsQ0FEQSxFQVlFRSxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBWkYsRSIsImZpbGUiOiIwLjlkOTljNmYxMjFjYmZhNWRjMTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7Um91dGVyLFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2NyZWF0ZUhhc2hIaXN0b3J5fSBmcm9tICdoaXN0b3J5J1xuXG5pbXBvcnQgTG9naW5Gb3JtQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXInXG5pbXBvcnQgTG9naW5SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvTG9naW5SZWR1Y2VyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnXG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKExvZ2luUmVkdWNlcix3aW5kb3cuU1RBVEVfRlJPTV9TRVJWRVIpXG5sZXQgaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KClcblxuUmVhY3RET00ucmVuZGVyKFxuPGRpdj5cbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TG9naW5Gb3JtQ29udGFpbmVyfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG48L2Rpdj5cbiAgLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==