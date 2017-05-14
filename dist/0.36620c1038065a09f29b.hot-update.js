webpackHotUpdate(0,{

/***/ "./src/actions/LoginAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginSucceed = exports.loginSucceed = function loginSucceed(username) {
  return {
    type: 'LOGIN_SUCCEED',
    username: username,
    isLoginSucceed: true
  };
};

var loginFailed = exports.loginFailed = function loginFailed(errMsg) {
  return {
    type: 'LOGIN_FAILED',
    errMsg: errMsg,
    isLoginSucceed: false
  };
};

/***/ }),

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

  console.log(state);
  console.log(ownProps);
  return {
    username: state.username,
    isLoginSucceed: state.isLoginSucceed
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: function handleSubmit(username, password) {
      console.log("submit form.");
      console.log("username=" + username);
      console.log("password=" + password);
      dispatch();
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcz9kZjgxIl0sIm5hbWVzIjpbImxvZ2luU3VjY2VlZCIsInVzZXJuYW1lIiwidHlwZSIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaGFuZGxlU3VibWl0IiwicGFzc3dvcmQiLCJMb2dpbkZvcm1Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxRQUFEO0FBQUEsU0FDMUI7QUFDRUMsVUFBTSxlQURSO0FBRUVELGNBQVVBLFFBRlo7QUFHRUUsb0JBQWdCO0FBSGxCLEdBRDBCO0FBQUEsQ0FBckI7O0FBUUEsSUFBTUMsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsU0FDekI7QUFDRUgsVUFBTSxjQURSO0FBRUVHLFlBQVFBLE1BRlY7QUFHRUYsb0JBQWdCO0FBSGxCLEdBRHlCO0FBQUEsQ0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNSUDs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNRyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQXVCO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQixFQUFnQjtBQUFBLE1BQWJDLFFBQWE7O0FBQzdDQyxVQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsVUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsU0FBTztBQUNMUCxjQUFTTSxNQUFNTixRQURWO0FBRUxFLG9CQUFlSSxNQUFNSjtBQUZoQixHQUFQO0FBSUQsQ0FQRDtBQVFBLElBQU1RLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBVUosUUFBVixFQUF1QjtBQUNoRCxTQUFPO0FBQ0xLLGtCQUFjLHNCQUFDWixRQUFELEVBQVVhLFFBQVYsRUFBdUI7QUFDbkNMLGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxjQUFZVCxRQUF4QjtBQUNBUSxjQUFRQyxHQUFSLENBQVksY0FBWUksUUFBeEI7QUFDQUY7QUFDRDtBQU5JLEdBQVA7QUFRRCxDQVREOztBQVdBLElBQU1HLHFCQUFxQix5QkFBUVQsZUFBUixFQUF3Qkssa0JBQXhCLHNCQUEzQjs7a0JBRWVJLGtCIiwiZmlsZSI6IjAuMzY2MjBjMTAzODA2NWEwOWYyOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsb2dpblN1Y2NlZWQgPSAodXNlcm5hbWUpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9TVUNDRUVEJyxcbiAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHRydWVcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgbG9naW5GYWlsZWQgPSAoZXJyTXNnKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fRkFJTEVEJyxcbiAgICBlcnJNc2c6IGVyck1zZyxcbiAgICBpc0xvZ2luU3VjY2VlZDogZmFsc2VcbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcbmltcG9ydCB7bG9naW5TdWNjZWVkLGxvZ2luRmFpbGVkfSBmcm9tICcuLi9hY3Rpb25zL0xvZ2luQWN0aW9uJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU9e30sb3duUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUpXG4gIGNvbnNvbGUubG9nKG93blByb3BzKVxuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOnN0YXRlLnVzZXJuYW1lLFxuICAgIGlzTG9naW5TdWNjZWVkOnN0YXRlLmlzTG9naW5TdWNjZWVkXG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVN1Ym1pdDogKHVzZXJuYW1lLHBhc3N3b3JkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCBmb3JtLlwiKVxuICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZT1cIit1c2VybmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQ9XCIrcGFzc3dvcmQpXG4gICAgICBkaXNwYXRjaCgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=