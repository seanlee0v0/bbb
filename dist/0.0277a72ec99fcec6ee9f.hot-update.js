webpackHotUpdate(0,{

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

var _LoginAction = __webpack_require__("./src/actions/LoginAction.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ownProps = arguments[1];


  return {
    redirectPath: state.LoginReducer.redirectPath,
    isLoginSucceed: state.LoginReducer.isLoginSucceed,
    errMsg: state.LoginReducer.errMsg
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: function handleSubmit(username, password) {
      dispatch((0, _LoginAction.postLogin)(username, password));
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwicmVkaXJlY3RQYXRoIiwiTG9naW5SZWR1Y2VyIiwiaXNMb2dpblN1Y2NlZWQiLCJlcnJNc2ciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJMb2dpbkZvcm1Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBdUI7QUFBQSxNQUF0QkMsS0FBc0IsdUVBQWhCLEVBQWdCO0FBQUEsTUFBYkMsUUFBYTs7O0FBRTdDLFNBQU87QUFDTEMsa0JBQWNGLE1BQU1HLFlBQU4sQ0FBbUJELFlBRDVCO0FBRUxFLG9CQUFnQkosTUFBTUcsWUFBTixDQUFtQkMsY0FGOUI7QUFHTEMsWUFBUUwsTUFBTUcsWUFBTixDQUFtQkU7QUFIdEIsR0FBUDtBQUtELENBUEQ7QUFRQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQVVOLFFBQVYsRUFBdUI7QUFDaEQsU0FBTztBQUNMTyxrQkFBYyxzQkFBQ0MsUUFBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ25DSCxlQUFTLDRCQUFVRSxRQUFWLEVBQW1CQyxRQUFuQixDQUFUO0FBQ0Q7QUFISSxHQUFQO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxxQkFBcUIseUJBQVFaLGVBQVIsRUFBd0JPLGtCQUF4QixzQkFBM0I7O2tCQUVlSyxrQiIsImZpbGUiOiIwLjAyNzdhNzJlYzk5ZmNlYzZlZTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcbmltcG9ydCB7cG9zdExvZ2lufSBmcm9tICcuLi9hY3Rpb25zL0xvZ2luQWN0aW9uJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU9e30sb3duUHJvcHMpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlZGlyZWN0UGF0aDogc3RhdGUuTG9naW5SZWR1Y2VyLnJlZGlyZWN0UGF0aCxcbiAgICBpc0xvZ2luU3VjY2VlZDogc3RhdGUuTG9naW5SZWR1Y2VyLmlzTG9naW5TdWNjZWVkLFxuICAgIGVyck1zZzogc3RhdGUuTG9naW5SZWR1Y2VyLmVyck1zZ1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTdWJtaXQ6ICh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgZGlzcGF0Y2gocG9zdExvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTG9naW5Gb3JtQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkZvcm0pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==