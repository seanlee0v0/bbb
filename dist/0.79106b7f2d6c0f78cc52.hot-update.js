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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiaXNMb2dpblN1Y2NlZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInBhc3N3b3JkIiwidHJpbSIsIkxvZ2luRm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUF1QjtBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEIsRUFBZ0I7QUFBQSxNQUFiQyxRQUFhOztBQUM3Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQU87QUFDTEcsY0FBU0osTUFBTUksUUFEVjtBQUVMQyxvQkFBZUwsTUFBTUs7QUFGaEIsR0FBUDtBQUlELENBUEQ7QUFRQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQVVOLFFBQVYsRUFBdUI7QUFDaEQsU0FBTztBQUNMTyxrQkFBYyxzQkFBQ0osUUFBRCxFQUFVSyxRQUFWLEVBQXVCO0FBQ25DUCxjQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBRCxjQUFRQyxHQUFSLENBQVksY0FBWUMsUUFBeEI7QUFDQUYsY0FBUUMsR0FBUixDQUFZLGNBQVlNLFFBQXhCO0FBQ0EsVUFBRyxDQUFDTCxTQUFTTSxJQUFULEVBQUosRUFBb0I7QUFDbEJILGlCQUFTLDhCQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0QsVUFBRyxDQUFDRSxTQUFTQyxJQUFULEVBQUosRUFBb0I7QUFDbEJILGlCQUFTLDhCQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0RBLGVBQVMsK0JBQWFILFFBQWIsQ0FBVDtBQUNEO0FBZEksR0FBUDtBQWdCRCxDQWpCRDs7QUFtQkEsSUFBTU8scUJBQXFCLHlCQUFRWixlQUFSLEVBQXdCTyxrQkFBeEIsc0JBQTNCOztrQkFFZUssa0IiLCJmaWxlIjoiMC43OTEwNmI3ZjJkNmMwZjc4Y2M1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXG5pbXBvcnQge2xvZ2luU3VjY2VlZCxsb2dpbkZhaWxlZH0gZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXt9LG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICBjb25zb2xlLmxvZyhvd25Qcm9wcylcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTpzdGF0ZS51c2VybmFtZSxcbiAgICBpc0xvZ2luU3VjY2VlZDpzdGF0ZS5pc0xvZ2luU3VjY2VlZFxuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTdWJtaXQ6ICh1c2VybmFtZSxwYXNzd29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXQgZm9ybS5cIilcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWU9XCIrdXNlcm5hbWUpXG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkPVwiK3Bhc3N3b3JkKVxuICAgICAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwidXNlcm5hbWUgaXMgZW1wdHkuXCIpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKCFwYXNzd29yZC50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQodXNlcm5hbWUpKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBMb2dpbkZvcm1Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luRm9ybSlcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9