webpackHotUpdate(0,{

/***/ "./src/actions/LoginAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFailed = exports.loginSucceed = exports.requestLogin = undefined;
exports.postLogin = postLogin;

var _isomorphicFetch = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestLogin = exports.requestLogin = function requestLogin() {
  return {
    type: 'REQUEST_LOGIN',
    isRequestLogin: true
  };
};
var loginSucceed = exports.loginSucceed = function loginSucceed() {
  return {
    type: 'LOGIN_SUCCEED',
    isLoginSucceed: true,
    isRequestLogin: false
  };
};

var loginFailed = exports.loginFailed = function loginFailed(errMsg) {
  return {
    type: 'LOGIN_FAILED',
    errMsg: errMsg,
    isLoginSucceed: false,
    isRequestLogin: false
  };
};

function postLogin(username, password) {
  dispatch(requestLogin());
  return (0, _isomorphicFetch2.default)('http://localost:9000/src/simulateData/login.json').then(function (ressponse) {
    return response.json();
  }).then(function (json) {
    if (json.isLoginSucceed) {
      dispatch(loginSucceed());
    } else {
      dispatch(loginFailed(json.errMsg));
    }
  });
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VDLFVBQU0sZUFEUjtBQUVFQyxvQkFBZ0I7QUFGbEIsR0FEMEI7QUFBQSxDQUFyQjtBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFRixVQUFNLGVBRFI7QUFFRUcsb0JBQWdCLElBRmxCO0FBR0VGLG9CQUFnQjtBQUhsQixHQUQwQjtBQUFBLENBQXJCOztBQVFBLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFNBQ3pCO0FBQ0VMLFVBQU0sY0FEUjtBQUVFSyxZQUFRQSxNQUZWO0FBR0VGLG9CQUFnQixLQUhsQjtBQUlFRixvQkFBZ0I7QUFKbEIsR0FEeUI7QUFBQSxDQUFwQjs7QUFTQSxTQUFTSCxTQUFULENBQW1CUSxRQUFuQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDMUNDLFdBQVNULGNBQVQ7QUFDQSxTQUFPLG1GQUNOVSxJQURNLENBQ0Q7QUFBQSxXQUFhQyxTQUFTQyxJQUFULEVBQWI7QUFBQSxHQURDLEVBRU5GLElBRk0sQ0FFRCxnQkFBTztBQUNYLFFBQUdFLEtBQUtSLGNBQVIsRUFBdUI7QUFDckJLLGVBQVNOLGNBQVQ7QUFDRCxLQUZELE1BRUs7QUFDSE0sZUFBU0osWUFBWU8sS0FBS04sTUFBakIsQ0FBVDtBQUNEO0FBQ0YsR0FSTSxDQUFQO0FBU0QsQyIsImZpbGUiOiIwLjI3NzcyNjEyZjY1ZDQ1MTIzYmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RMb2dpbiA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdSRVFVRVNUX0xPR0lOJyxcbiAgICBpc1JlcXVlc3RMb2dpbjogdHJ1ZVxuICB9XG4pXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZWVkID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX1NVQ0NFRUQnLFxuICAgIGlzTG9naW5TdWNjZWVkOiB0cnVlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9IChlcnJNc2cpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9GQUlMRUQnLFxuICAgIGVyck1zZzogZXJyTXNnLFxuICAgIGlzTG9naW5TdWNjZWVkOiBmYWxzZSxcbiAgICBpc1JlcXVlc3RMb2dpbjogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdExvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKXtcbiAgZGlzcGF0Y2gocmVxdWVzdExvZ2luKCkpXG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2Fsb3N0OjkwMDAvc3JjL3NpbXVsYXRlRGF0YS9sb2dpbi5qc29uYClcbiAgLnRoZW4ocmVzc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oanNvbiA9PntcbiAgICBpZihqc29uLmlzTG9naW5TdWNjZWVkKXtcbiAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VlZCgpKVxuICAgIH1lbHNle1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoanNvbi5lcnJNc2cpKVxuICAgIH1cbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==