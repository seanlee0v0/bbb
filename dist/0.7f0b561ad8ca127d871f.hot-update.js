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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0UGF0aCIsImlzTG9naW5TdWNjZWVkIiwiZXJyTXNnIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidHJpbSIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFiQyxRQUFhOztBQUM3Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQU87QUFDTEcsa0JBQWNKLE1BQU1JLFlBRGY7QUFFTEMsb0JBQWdCTCxNQUFNSyxjQUZqQjtBQUdMQyxZQUFRTixNQUFNTTtBQUhULEdBQVA7QUFLRCxDQVJEO0FBU0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFVUCxRQUFWLEVBQXVCO0FBQ2hELFNBQU87QUFDTFEsa0JBQWMsc0JBQUNDLFFBQUQsRUFBVUMsUUFBVixFQUF1Qjs7QUFFbkNULGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxjQUFZTyxRQUF4QjtBQUNBUixjQUFRQyxHQUFSLENBQVksY0FBWVEsUUFBeEI7QUFDQSxVQUFHLENBQUNELFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkosaUJBQVMsOEJBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxVQUFHLENBQUNHLFNBQVNDLElBQVQsRUFBSixFQUFvQjtBQUNsQkosaUJBQVMsOEJBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDREEsZUFBUyxnQ0FBVDtBQUNEO0FBZkksR0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsSUFBTUsscUJBQXFCLHlCQUFRZCxlQUFSLEVBQXdCUSxrQkFBeEIsc0JBQTNCOztrQkFFZU0sa0IiLCJmaWxlIjoiMC43ZjBiNTYxYWQ4Y2ExMjdkODcxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXG5pbXBvcnQge2xvZ2luU3VjY2VlZCxsb2dpbkZhaWxlZH0gZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXt9LG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICBjb25zb2xlLmxvZyhvd25Qcm9wcylcbiAgcmV0dXJuIHtcbiAgICByZWRpcmVjdFBhdGg6IHN0YXRlLnJlZGlyZWN0UGF0aCxcbiAgICBpc0xvZ2luU3VjY2VlZDogc3RhdGUuaXNMb2dpblN1Y2NlZWQsXG4gICAgZXJyTXNnOiBzdGF0ZS5lcnJNc2dcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGFuZGxlU3VibWl0OiAodXNlcm5hbWUscGFzc3dvcmQpID0+IHtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXQgZm9ybS5cIilcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWU9XCIrdXNlcm5hbWUpXG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkPVwiK3Bhc3N3b3JkKVxuICAgICAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwidXNlcm5hbWUgaXMgZW1wdHkuXCIpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKCFwYXNzd29yZC50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQoKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTG9naW5Gb3JtQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkZvcm0pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==