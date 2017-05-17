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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0UGF0aCIsImlzTG9naW5TdWNjZWVkIiwiZXJyTXNnIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidHJpbSIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFiQyxRQUFhOztBQUM3Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQU87QUFDTEcsa0JBQWNKLE1BQU1JLFlBRGY7QUFFTEMsb0JBQWdCTCxNQUFNSyxjQUZqQjtBQUdMQyxZQUFRTixNQUFNTTtBQUhULEdBQVA7QUFLRCxDQVJEO0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFVUCxRQUFWLEVBQXVCO0FBQ2hELFNBQU87QUFDTFEsa0JBQWMsc0JBQUNDLFFBQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQ1QsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLGNBQVlPLFFBQXhCO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWSxjQUFZUSxRQUF4QjtBQUNBLFVBQUcsQ0FBQ0QsU0FBU0UsSUFBVCxFQUFKLEVBQW9CO0FBQ2xCSixpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFVBQUcsQ0FBQ0csU0FBU0MsSUFBVCxFQUFKLEVBQW9CO0FBQ2xCSixpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNEQSxlQUFTLGdDQUFUO0FBQ0Q7QUFkSSxHQUFQO0FBZ0JELENBakJEOztBQW1CQSxJQUFNSyxxQkFBcUIseUJBQVFkLGVBQVIsRUFBd0JRLGtCQUF4QixzQkFBM0I7O2tCQUVlTSxrQiIsImZpbGUiOiIwLjNiZDQxNDRlYjc2YWQ0OGZiNzczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcbmltcG9ydCB7bG9naW5TdWNjZWVkLGxvZ2luRmFpbGVkfSBmcm9tICcuLi9hY3Rpb25zL0xvZ2luQWN0aW9uJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU9e30sb3duUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUpXG4gIGNvbnNvbGUubG9nKG93blByb3BzKVxuICByZXR1cm4ge1xuICAgIHJlZGlyZWN0UGF0aDogc3RhdGUucmVkaXJlY3RQYXRoLFxuICAgIGlzTG9naW5TdWNjZWVkOiBzdGF0ZS5pc0xvZ2luU3VjY2VlZCxcbiAgICBlcnJNc2c6IHN0YXRlLmVyck1zZ1xuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTdWJtaXQ6ICh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXQgZm9ybS5cIilcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWU9XCIrdXNlcm5hbWUpXG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkPVwiK3Bhc3N3b3JkKVxuICAgICAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwidXNlcm5hbWUgaXMgZW1wdHkuXCIpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKCFwYXNzd29yZC50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQoKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTG9naW5Gb3JtQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkZvcm0pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==