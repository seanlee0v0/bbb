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
    redirectPath: state.redirectPath,
    isLoginSucceed: state.isLoginSucceed,
    errMsg: state.errMsg
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: function handleSubmit(username, password) {
      window.username = username;
      if (!username.trim()) {
        dispatch((0, _LoginAction.loginFailed)("username is empty."));
        return;
      }
      if (!password.trim()) {
        dispatch((0, _LoginAction.loginFailed)("password is empty."));
        return;
      }
      dispatch((0, _LoginAction.loginSucceed)());
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwicmVkaXJlY3RQYXRoIiwiaXNMb2dpblN1Y2NlZWQiLCJlcnJNc2ciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ3aW5kb3ciLCJ0cmltIiwiTG9naW5Gb3JtQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQXVCO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQixFQUFnQjtBQUFBLE1BQWJDLFFBQWE7OztBQUU3QyxTQUFPO0FBQ0xDLGtCQUFjRixNQUFNRSxZQURmO0FBRUxDLG9CQUFnQkgsTUFBTUcsY0FGakI7QUFHTEMsWUFBUUosTUFBTUk7QUFIVCxHQUFQO0FBS0QsQ0FQRDtBQVFBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBVUwsUUFBVixFQUF1QjtBQUNoRCxTQUFPO0FBQ0xNLGtCQUFjLHNCQUFDQyxRQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDbkNDLGFBQU9GLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0EsVUFBRyxDQUFDQSxTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJMLGlCQUFTLDhCQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0QsVUFBRyxDQUFDRyxTQUFTRSxJQUFULEVBQUosRUFBb0I7QUFDbEJMLGlCQUFTLDhCQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0RBLGVBQVMsZ0NBQVQ7QUFDRDtBQVpJLEdBQVA7QUFjRCxDQWZEOztBQWlCQSxJQUFNTSxxQkFBcUIseUJBQVFiLGVBQVIsRUFBd0JNLGtCQUF4QixzQkFBM0I7O2tCQUVlTyxrQiIsImZpbGUiOiIwLmNhNGZjZGMwMGI4NzU4MWY3MGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcbmltcG9ydCB7bG9naW5TdWNjZWVkLGxvZ2luRmFpbGVkfSBmcm9tICcuLi9hY3Rpb25zL0xvZ2luQWN0aW9uJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU9e30sb3duUHJvcHMpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlZGlyZWN0UGF0aDogc3RhdGUucmVkaXJlY3RQYXRoLFxuICAgIGlzTG9naW5TdWNjZWVkOiBzdGF0ZS5pc0xvZ2luU3VjY2VlZCxcbiAgICBlcnJNc2c6IHN0YXRlLmVyck1zZ1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTdWJtaXQ6ICh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgd2luZG93LnVzZXJuYW1lID0gdXNlcm5hbWVcbiAgICAgIGlmKCF1c2VybmFtZS50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInVzZXJuYW1lIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZighcGFzc3dvcmQudHJpbSgpKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=