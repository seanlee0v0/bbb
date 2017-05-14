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
    }
  };
};

var LoginFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

exports.default = LoginFormContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dpbkZvcm1Db250YWluZXIuanM/ZGY4MSJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiaXNMb2dpblN1Y2NlZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsInBhc3N3b3JkIiwiTG9naW5Gb3JtQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQXVCO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQixFQUFnQjtBQUFBLE1BQWJDLFFBQWE7O0FBQzdDQyxVQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsVUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsU0FBTztBQUNMRyxjQUFTSixNQUFNSSxRQURWO0FBRUxDLG9CQUFlTCxNQUFNSztBQUZoQixHQUFQO0FBSUQsQ0FQRDtBQVFBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBVU4sUUFBVixFQUF1QjtBQUNoRCxTQUFPO0FBQ0xPLGtCQUFjLHNCQUFDSixRQUFELEVBQVVLLFFBQVYsRUFBdUI7QUFDbkNQLGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxjQUFZQyxRQUF4QjtBQUNBRixjQUFRQyxHQUFSLENBQVksY0FBWU0sUUFBeEI7QUFDRDtBQUxJLEdBQVA7QUFPRCxDQVJEOztBQVVBLElBQU1DLHFCQUFxQix5QkFBUVgsZUFBUixFQUF3Qk8sa0JBQXhCLHNCQUEzQjs7a0JBRWVJLGtCIiwiZmlsZSI6IjAuYjU3YjFkMGZiMDAyZDAyNzY5YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU9e30sb3duUHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUpXG4gIGNvbnNvbGUubG9nKG93blByb3BzKVxuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOnN0YXRlLnVzZXJuYW1lLFxuICAgIGlzTG9naW5TdWNjZWVkOnN0YXRlLmlzTG9naW5TdWNjZWVkXG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCxvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhbmRsZVN1Ym1pdDogKHVzZXJuYW1lLHBhc3N3b3JkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdCBmb3JtLlwiKVxuICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZT1cIit1c2VybmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQ9XCIrcGFzc3dvcmQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Gb3JtKVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Db250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0xvZ2luRm9ybUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=