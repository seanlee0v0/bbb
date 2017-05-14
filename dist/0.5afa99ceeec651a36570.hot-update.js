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
      if (!username.trim()) {
        dispatch((0, _LoginAction.loginFailed)("username is empty."));
        return;
      }
      if (!password.trim()) {
        dispatch((0, _LoginAction.loginFailed)("password is empty."));
        return;
      }
      dispatch((0, _LoginAction.loginSucceed)(username));
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwidXNlcm5hbWUiLCJpc0xvZ2luU3VjY2VlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaGFuZGxlU3VibWl0IiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidHJpbSIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFiQyxRQUFhOztBQUM3QyxTQUFPO0FBQ0xDLGNBQVNGLE1BQU1FLFFBRFY7QUFFTEMsb0JBQWVILE1BQU1HO0FBRmhCLEdBQVA7QUFJRCxDQUxEO0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFVSixRQUFWLEVBQXVCO0FBQ2hELFNBQU87QUFDTEssa0JBQWMsc0JBQUNKLFFBQUQsRUFBVUssUUFBVixFQUF1QjtBQUNuQ0MsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLGNBQVlQLFFBQXhCO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWSxjQUFZRixRQUF4QjtBQUNBLFVBQUcsQ0FBQ0wsU0FBU1EsSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTCxpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFVBQUcsQ0FBQ0UsU0FBU0csSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTCxpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNEQSxlQUFTLCtCQUFhSCxRQUFiLENBQVQ7QUFDRDtBQWRJLEdBQVA7QUFnQkQsQ0FqQkQ7O0FBbUJBLElBQU1TLHFCQUFxQix5QkFBUVosZUFBUixFQUF3Qkssa0JBQXhCLHNCQUEzQjs7a0JBRWVPLGtCIiwiZmlsZSI6IjAuNWFmYTk5Y2VlZWM2NTFhMzY1NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJ1xuaW1wb3J0IHtsb2dpblN1Y2NlZWQsbG9naW5GYWlsZWR9IGZyb20gJy4uL2FjdGlvbnMvTG9naW5BY3Rpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZT17fSxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOnN0YXRlLnVzZXJuYW1lLFxuICAgIGlzTG9naW5TdWNjZWVkOnN0YXRlLmlzTG9naW5TdWNjZWVkXG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVN1Ym1pdDogKHVzZXJuYW1lLHBhc3N3b3JkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCBmb3JtLlwiKVxuICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZT1cIit1c2VybmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQ9XCIrcGFzc3dvcmQpXG4gICAgICBpZighdXNlcm5hbWUudHJpbSgpKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwicGFzc3dvcmQgaXMgZW1wdHkuXCIpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VlZCh1c2VybmFtZSkpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=