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

var handleSubmit = function handleSubmit(username, password) {
  console.log("submit form.");
  console.log("username=" + username);
  console.log("password=" + password);
  if (!username.trim()) {
    dispatch((0, _LoginAction.loginFailed)("username is empty."));
    return;
  }
  if (!password.trim()) {
    dispatch((0, _LoginAction.loginFailed)("password is empty."));
    return;
  }
  dispatch((0, _LoginAction.loginSucceed)(username));
};

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
    handleSubmit: handleSubmit
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInRyaW0iLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJpc0xvZ2luU3VjY2VlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBVUMsUUFBVixFQUF1QjtBQUMxQ0MsVUFBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsVUFBUUMsR0FBUixDQUFZLGNBQVlILFFBQXhCO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWSxjQUFZRixRQUF4QjtBQUNBLE1BQUcsQ0FBQ0QsU0FBU0ksSUFBVCxFQUFKLEVBQW9CO0FBQ2xCQyxhQUFTLDhCQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0QsTUFBRyxDQUFDSixTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJDLGFBQVMsOEJBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDREEsV0FBUywrQkFBYUwsUUFBYixDQUFUO0FBQ0QsQ0FiRDs7QUFlQSxJQUFNTSxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQXVCO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQixFQUFnQjtBQUFBLE1BQWJDLFFBQWE7O0FBQzdDTixVQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDQUwsVUFBUUMsR0FBUixDQUFZSyxRQUFaO0FBQ0EsU0FBTztBQUNMUixjQUFTTyxNQUFNUCxRQURWO0FBRUxTLG9CQUFlRixNQUFNRTtBQUZoQixHQUFQO0FBSUQsQ0FQRDs7QUFTQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDTCxRQUFELEVBQVVHLFFBQVYsRUFBdUI7QUFDaEQsU0FBTztBQUNMVCxrQkFBY0E7QUFEVCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNWSxxQkFBcUIseUJBQVFMLGVBQVIsRUFBd0JJLGtCQUF4QixzQkFBM0I7O2tCQUVlQyxrQiIsImZpbGUiOiIwLjcyYTFhOTkzYzI0ZDhkZGYxZGNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcbmltcG9ydCB7bG9naW5TdWNjZWVkLGxvZ2luRmFpbGVkfSBmcm9tICcuLi9hY3Rpb25zL0xvZ2luQWN0aW9uJ1xuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSAodXNlcm5hbWUscGFzc3dvcmQpID0+IHtcbiAgY29uc29sZS5sb2coXCJzdWJtaXQgZm9ybS5cIilcbiAgY29uc29sZS5sb2coXCJ1c2VybmFtZT1cIit1c2VybmFtZSlcbiAgY29uc29sZS5sb2coXCJwYXNzd29yZD1cIitwYXNzd29yZClcbiAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgcmV0dXJuXG4gIH1cbiAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKHVzZXJuYW1lKSlcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXt9LG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICBjb25zb2xlLmxvZyhvd25Qcm9wcylcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTpzdGF0ZS51c2VybmFtZSxcbiAgICBpc0xvZ2luU3VjY2VlZDpzdGF0ZS5pc0xvZ2luU3VjY2VlZFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0XG4gIH1cbn1cblxuY29uc3QgTG9naW5Gb3JtQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkZvcm0pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==