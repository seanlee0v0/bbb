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
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0UGF0aCIsImlzTG9naW5TdWNjZWVkIiwiZXJyTXNnIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG90Iiwic3RvcmUiLCJ0cmltIiwiTG9naW5Gb3JtQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQXVCO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQixFQUFnQjtBQUFBLE1BQWJDLFFBQWE7O0FBQzdDQyxVQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsVUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsU0FBTztBQUNMRyxrQkFBY0osTUFBTUksWUFEZjtBQUVMQyxvQkFBZ0JMLE1BQU1LLGNBRmpCO0FBR0xDLFlBQVFOLE1BQU1NO0FBSFQsR0FBUDtBQUtELENBUkQ7QUFTQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQVVQLFFBQVYsRUFBdUI7QUFDaEQsU0FBTztBQUNMUSxrQkFBYyxzQkFBQ0MsUUFBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ25DVCxjQUFRVSxHQUFSLENBQVksVUFBS0MsS0FBakI7QUFDQVgsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLGNBQVlPLFFBQXhCO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBWSxjQUFZUSxRQUF4QjtBQUNBLFVBQUcsQ0FBQ0QsU0FBU0ksSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTixpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFVBQUcsQ0FBQ0csU0FBU0csSUFBVCxFQUFKLEVBQW9CO0FBQ2xCTixpQkFBUyw4QkFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNEQSxlQUFTLGdDQUFUO0FBQ0Q7QUFmSSxHQUFQO0FBaUJELENBbEJEOztBQW9CQSxJQUFNTyxxQkFBcUIseUJBQVFoQixlQUFSLEVBQXdCUSxrQkFBeEIsc0JBQTNCOztrQkFFZVEsa0IiLCJmaWxlIjoiMC43MzU1MDc0MDE5ZDllNzE2MjZjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nXG5pbXBvcnQge2xvZ2luU3VjY2VlZCxsb2dpbkZhaWxlZH0gZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXt9LG93blByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICBjb25zb2xlLmxvZyhvd25Qcm9wcylcbiAgcmV0dXJuIHtcbiAgICByZWRpcmVjdFBhdGg6IHN0YXRlLnJlZGlyZWN0UGF0aCxcbiAgICBpc0xvZ2luU3VjY2VlZDogc3RhdGUuaXNMb2dpblN1Y2NlZWQsXG4gICAgZXJyTXNnOiBzdGF0ZS5lcnJNc2dcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGFuZGxlU3VibWl0OiAodXNlcm5hbWUscGFzc3dvcmQpID0+IHtcbiAgICAgIGNvbnNvbGUubG90KHRoaXMuc3RvcmUpXG4gICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCBmb3JtLlwiKVxuICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZT1cIit1c2VybmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQ9XCIrcGFzc3dvcmQpXG4gICAgICBpZighdXNlcm5hbWUudHJpbSgpKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwicGFzc3dvcmQgaXMgZW1wdHkuXCIpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VlZCgpKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBMb2dpbkZvcm1Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luRm9ybSlcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9