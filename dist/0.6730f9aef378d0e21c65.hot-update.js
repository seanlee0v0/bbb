webpackHotUpdate(0,{

/***/ "./src/actions/LoginAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postLogin = exports.loginFailed = exports.loginSucceed = exports.loginProcessing = undefined;

var _isomorphicFetch = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginProcessing = exports.loginProcessing = function loginProcessing() {
  return {
    type: 'LOGIN_PROCESSING',
    isLoginProcessing: true
  };
};
var loginSucceed = exports.loginSucceed = function loginSucceed() {
  return {
    type: 'LOGIN_SUCCEED',
    isLoginSucceed: true,
    isLoginProcessing: false
  };
};

var loginFailed = exports.loginFailed = function loginFailed(errMsg) {
  return {
    type: 'LOGIN_FAILED',
    errMsg: errMsg,
    isLoginSucceed: false,
    isLoginProcessing: false
  };
};

var postLogin = exports.postLogin = function postLogin(username, password) {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbImxvZ2luUHJvY2Vzc2luZyIsInR5cGUiLCJpc0xvZ2luUHJvY2Vzc2luZyIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJwb3N0TG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDRDQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUM3QjtBQUNFQyxVQUFNLGtCQURSO0FBRUVDLHVCQUFtQjtBQUZyQixHQUQ2QjtBQUFBLENBQXhCO0FBTUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VGLFVBQU0sZUFEUjtBQUVFRyxvQkFBZ0IsSUFGbEI7QUFHRUYsdUJBQW1CO0FBSHJCLEdBRDBCO0FBQUEsQ0FBckI7O0FBUUEsSUFBTUcsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsU0FDekI7QUFDRUwsVUFBTSxjQURSO0FBRUVLLFlBQVFBLE1BRlY7QUFHRUYsb0JBQWdCLEtBSGxCO0FBSUVGLHVCQUFtQjtBQUpyQixHQUR5QjtBQUFBLENBQXBCOztBQVNBLElBQU1LLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFVQyxRQUFWLEVBQXVCLENBRS9DLENBRk0sQyIsImZpbGUiOiIwLjY3MzBmOWFlZjM3OGQwZTIxYzY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IGxvZ2luUHJvY2Vzc2luZyA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9QUk9DRVNTSU5HJyxcbiAgICBpc0xvZ2luUHJvY2Vzc2luZzogdHJ1ZVxuICB9XG4pXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZWVkID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX1NVQ0NFRUQnLFxuICAgIGlzTG9naW5TdWNjZWVkOiB0cnVlLFxuICAgIGlzTG9naW5Qcm9jZXNzaW5nOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9IChlcnJNc2cpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9GQUlMRUQnLFxuICAgIGVyck1zZzogZXJyTXNnLFxuICAgIGlzTG9naW5TdWNjZWVkOiBmYWxzZSxcbiAgICBpc0xvZ2luUHJvY2Vzc2luZzogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgcG9zdExvZ2luID0gKHVzZXJuYW1lLHBhc3N3b3JkKSA9PiB7XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9