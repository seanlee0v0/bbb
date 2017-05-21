webpackHotUpdate(0,{

/***/ "./src/actions/LoginAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFailed = exports.loginSucceed = exports.loginProcessing = undefined;

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbImxvZ2luUHJvY2Vzc2luZyIsInR5cGUiLCJpc0xvZ2luUHJvY2Vzc2luZyIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsNENBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQzdCO0FBQ0VDLFVBQU0sa0JBRFI7QUFFRUMsdUJBQW1CO0FBRnJCLEdBRDZCO0FBQUEsQ0FBeEI7QUFNQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRUYsVUFBTSxlQURSO0FBRUVHLG9CQUFnQixJQUZsQjtBQUdFRix1QkFBbUI7QUFIckIsR0FEMEI7QUFBQSxDQUFyQjs7QUFRQSxJQUFNRyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQ7QUFBQSxTQUN6QjtBQUNFTCxVQUFNLGNBRFI7QUFFRUssWUFBUUEsTUFGVjtBQUdFRixvQkFBZ0IsS0FIbEI7QUFJRUYsdUJBQW1CO0FBSnJCLEdBRHlCO0FBQUEsQ0FBcEIsQyIsImZpbGUiOiIwLjQzOTYzZGQ1NmY5NGVmYzg3YzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IGxvZ2luUHJvY2Vzc2luZyA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9QUk9DRVNTSU5HJyxcbiAgICBpc0xvZ2luUHJvY2Vzc2luZzogdHJ1ZVxuICB9XG4pXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZWVkID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX1NVQ0NFRUQnLFxuICAgIGlzTG9naW5TdWNjZWVkOiB0cnVlLFxuICAgIGlzTG9naW5Qcm9jZXNzaW5nOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9IChlcnJNc2cpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9GQUlMRUQnLFxuICAgIGVyck1zZzogZXJyTXNnLFxuICAgIGlzTG9naW5TdWNjZWVkOiBmYWxzZSxcbiAgICBpc0xvZ2luUHJvY2Vzc2luZzogZmFsc2VcbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9