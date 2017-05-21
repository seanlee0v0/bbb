webpackHotUpdate(0,{

/***/ "./src/actions/LoginAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFailed = exports.loginSucceed = exports.loginProcessing = undefined;
exports.postLogin = postLogin;

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

function postLogin(username, password) {
  _isomorphicFetch2.default;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsImxvZ2luUHJvY2Vzc2luZyIsInR5cGUiLCJpc0xvZ2luUHJvY2Vzc2luZyIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsNENBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQzdCO0FBQ0VDLFVBQU0sa0JBRFI7QUFFRUMsdUJBQW1CO0FBRnJCLEdBRDZCO0FBQUEsQ0FBeEI7QUFNQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRUYsVUFBTSxlQURSO0FBRUVHLG9CQUFnQixJQUZsQjtBQUdFRix1QkFBbUI7QUFIckIsR0FEMEI7QUFBQSxDQUFyQjs7QUFRQSxJQUFNRyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQ7QUFBQSxTQUN6QjtBQUNFTCxVQUFNLGNBRFI7QUFFRUssWUFBUUEsTUFGVjtBQUdFRixvQkFBZ0IsS0FIbEI7QUFJRUYsdUJBQW1CO0FBSnJCLEdBRHlCO0FBQUEsQ0FBcEI7O0FBU0EsU0FBU0gsU0FBVCxDQUFtQlEsUUFBbkIsRUFBNEJDLFFBQTVCLEVBQXFDO0FBQzFDO0FBQ0QsQyIsImZpbGUiOiIwLmY2NjkzZmY5NjFhZGQxY2QzOWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IGxvZ2luUHJvY2Vzc2luZyA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9QUk9DRVNTSU5HJyxcbiAgICBpc0xvZ2luUHJvY2Vzc2luZzogdHJ1ZVxuICB9XG4pXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZWVkID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX1NVQ0NFRUQnLFxuICAgIGlzTG9naW5TdWNjZWVkOiB0cnVlLFxuICAgIGlzTG9naW5Qcm9jZXNzaW5nOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9IChlcnJNc2cpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9GQUlMRUQnLFxuICAgIGVyck1zZzogZXJyTXNnLFxuICAgIGlzTG9naW5TdWNjZWVkOiBmYWxzZSxcbiAgICBpc0xvZ2luUHJvY2Vzc2luZzogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdExvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKXtcbiAgZmV0Y2hcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==