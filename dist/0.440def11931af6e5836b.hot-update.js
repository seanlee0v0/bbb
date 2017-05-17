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
    handleSubmit: function (username, password) {
      console.lot(undefined.store);
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
    }.bind(undefined)
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0UGF0aCIsImlzTG9naW5TdWNjZWVkIiwiZXJyTXNnIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG90Iiwic3RvcmUiLCJ0cmltIiwiYmluZCIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFiQyxRQUFhOztBQUM3Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQU87QUFDTEcsa0JBQWNKLE1BQU1JLFlBRGY7QUFFTEMsb0JBQWdCTCxNQUFNSyxjQUZqQjtBQUdMQyxZQUFRTixNQUFNTTtBQUhULEdBQVA7QUFLRCxDQVJEO0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFVUCxRQUFWLEVBQXVCO0FBQ2hELFNBQU87QUFDTFEsa0JBQWUsVUFBQ0MsUUFBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ3BDVCxjQUFRVSxHQUFSLENBQVksVUFBS0MsS0FBakI7QUFDQVgsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLGNBQVlPLFFBQXhCO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWSxjQUFZUSxRQUF4QjtBQUNBLFVBQUcsQ0FBQ0QsU0FBU0ksSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTixpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFVBQUcsQ0FBQ0csU0FBU0csSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTixpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNEQSxlQUFTLGdDQUFUO0FBQ0QsS0FkYSxDQWNYTyxJQWRXO0FBRFQsR0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsSUFBTUMscUJBQXFCLHlCQUFRakIsZUFBUixFQUF3QlEsa0JBQXhCLHNCQUEzQjs7a0JBRWVTLGtCIiwiZmlsZSI6IjAuNDQwZGVmMTE5MzFhZjZlNTgzNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJ1xuaW1wb3J0IHtsb2dpblN1Y2NlZWQsbG9naW5GYWlsZWR9IGZyb20gJy4uL2FjdGlvbnMvTG9naW5BY3Rpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZT17fSxvd25Qcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgY29uc29sZS5sb2cob3duUHJvcHMpXG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3RQYXRoOiBzdGF0ZS5yZWRpcmVjdFBhdGgsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHN0YXRlLmlzTG9naW5TdWNjZWVkLFxuICAgIGVyck1zZzogc3RhdGUuZXJyTXNnXG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVN1Ym1pdDogKCh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb3QodGhpcy5zdG9yZSlcbiAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0IGZvcm0uXCIpXG4gICAgICBjb25zb2xlLmxvZyhcInVzZXJuYW1lPVwiK3VzZXJuYW1lKVxuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZD1cIitwYXNzd29yZClcbiAgICAgIGlmKCF1c2VybmFtZS50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInVzZXJuYW1lIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZighcGFzc3dvcmQudHJpbSgpKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgfSkuYmluZCh0aGlzKVxuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=