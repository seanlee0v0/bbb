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
    redirectPath: state.LoginReducer.redirectPath,
    isLoginSucceed: state.LoginReducer.isLoginSucceed,
    errMsg: state.LoginReducer.errMsg
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwicmVkaXJlY3RQYXRoIiwiTG9naW5SZWR1Y2VyIiwiaXNMb2dpblN1Y2NlZWQiLCJlcnJNc2ciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ3aW5kb3ciLCJ0cmltIiwiTG9naW5Gb3JtQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQXVCO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQixFQUFnQjtBQUFBLE1BQWJDLFFBQWE7OztBQUU3QyxTQUFPO0FBQ0xDLGtCQUFjRixNQUFNRyxZQUFOLENBQW1CRCxZQUQ1QjtBQUVMRSxvQkFBZ0JKLE1BQU1HLFlBQU4sQ0FBbUJDLGNBRjlCO0FBR0xDLFlBQVFMLE1BQU1HLFlBQU4sQ0FBbUJFO0FBSHRCLEdBQVA7QUFLRCxDQVBEO0FBUUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFVTixRQUFWLEVBQXVCO0FBQ2hELFNBQU87QUFDTE8sa0JBQWMsc0JBQUNDLFFBQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQ0MsYUFBT0YsUUFBUCxHQUFrQkEsUUFBbEI7QUFDQSxVQUFHLENBQUNBLFNBQVNHLElBQVQsRUFBSixFQUFvQjtBQUNsQkwsaUJBQVMsOEJBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxVQUFHLENBQUNHLFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkwsaUJBQVMsOEJBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDREEsZUFBUyxnQ0FBVDtBQUNEO0FBWkksR0FBUDtBQWNELENBZkQ7O0FBaUJBLElBQU1NLHFCQUFxQix5QkFBUWQsZUFBUixFQUF3Qk8sa0JBQXhCLHNCQUEzQjs7a0JBRWVPLGtCIiwiZmlsZSI6IjAuNTk1M2E2ZjRhMGIxOTg0ZDFjYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJ1xuaW1wb3J0IHtsb2dpblN1Y2NlZWQsbG9naW5GYWlsZWR9IGZyb20gJy4uL2FjdGlvbnMvTG9naW5BY3Rpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZT17fSxvd25Qcm9wcykgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVkaXJlY3RQYXRoOiBzdGF0ZS5Mb2dpblJlZHVjZXIucmVkaXJlY3RQYXRoLFxuICAgIGlzTG9naW5TdWNjZWVkOiBzdGF0ZS5Mb2dpblJlZHVjZXIuaXNMb2dpblN1Y2NlZWQsXG4gICAgZXJyTXNnOiBzdGF0ZS5Mb2dpblJlZHVjZXIuZXJyTXNnXG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVN1Ym1pdDogKHVzZXJuYW1lLHBhc3N3b3JkKSA9PiB7XG4gICAgICB3aW5kb3cudXNlcm5hbWUgPSB1c2VybmFtZVxuICAgICAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwidXNlcm5hbWUgaXMgZW1wdHkuXCIpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKCFwYXNzd29yZC50cmltKCkpe1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQoKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTG9naW5Gb3JtQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkZvcm0pXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvTG9naW5Gb3JtQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==