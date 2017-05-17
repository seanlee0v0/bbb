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

  console.log(state);
  console.log(ownProps);
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
      dispatch((0, _LoginAction.loginSucceed)());
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0UGF0aCIsImlzTG9naW5TdWNjZWVkIiwiZXJyTXNnIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwid2luZG93IiwidHJpbSIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFiQyxRQUFhOztBQUM3Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQU87QUFDTEcsa0JBQWNKLE1BQU1JLFlBRGY7QUFFTEMsb0JBQWdCTCxNQUFNSyxjQUZqQjtBQUdMQyxZQUFRTixNQUFNTTtBQUhULEdBQVA7QUFLRCxDQVJEO0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFVUCxRQUFWLEVBQXVCO0FBQ2hELFNBQU87QUFDTFEsa0JBQWMsc0JBQUNDLFFBQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQ0MsYUFBT0YsUUFBUCxHQUFrQkEsUUFBbEI7QUFDQVIsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLGNBQVlPLFFBQXhCO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWSxjQUFZUSxRQUF4QjtBQUNBLFVBQUcsQ0FBQ0QsU0FBU0csSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTCxpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFVBQUcsQ0FBQ0csU0FBU0UsSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTCxpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNEQSxlQUFTLGdDQUFUO0FBQ0Q7QUFmSSxHQUFQO0FBaUJELENBbEJEOztBQW9CQSxJQUFNTSxxQkFBcUIseUJBQVFmLGVBQVIsRUFBd0JRLGtCQUF4QixzQkFBM0I7O2tCQUVlTyxrQiIsImZpbGUiOiIwLjRiYjNiZWNkYjRmODVlYTliZDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcbmltcG9ydCB7bG9naW5TdWNjZWVkLGxvZ2luRmFpbGVkfSBmcm9tICcuLi9hY3Rpb25zL0xvZ2luQWN0aW9uJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU9e30sb3duUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUpXG4gIGNvbnNvbGUubG9nKG93blByb3BzKVxuICByZXR1cm4ge1xuICAgIHJlZGlyZWN0UGF0aDogc3RhdGUucmVkaXJlY3RQYXRoLFxuICAgIGlzTG9naW5TdWNjZWVkOiBzdGF0ZS5pc0xvZ2luU3VjY2VlZCxcbiAgICBlcnJNc2c6IHN0YXRlLmVyck1zZ1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTdWJtaXQ6ICh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgd2luZG93LnVzZXJuYW1lID0gdXNlcm5hbWVcbiAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0IGZvcm0uXCIpXG4gICAgICBjb25zb2xlLmxvZyhcInVzZXJuYW1lPVwiK3VzZXJuYW1lKVxuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZD1cIitwYXNzd29yZClcbiAgICAgIGlmKCF1c2VybmFtZS50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInVzZXJuYW1lIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZighcGFzc3dvcmQudHJpbSgpKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=