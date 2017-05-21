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
  return function (dispatch) {
    dispatch(requestLogin());
    if (!username.trim()) {
      dispatch(loginFailed("username is empty."));
      return;
    }
    if (!password.trim()) {
      dispatch(loginFailed("password is empty."));
      return;
    }
    return (0, _isomorphicFetch2.default)('http://localhost:9000/src/simulateData/loginresult.json').then(function (response) {
      if (response.status != 200) {
        console.log(response.statusText);
      }
      return response.json();
    }).then(function (json) {
      if (json.isLoginSucceed) {
        dispatch(loginSucceed());
      } else {
        dispatch(loginFailed(json.errMsg));
      }
    });
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VDLFVBQU0sZUFEUjtBQUVFQyxvQkFBZ0I7QUFGbEIsR0FEMEI7QUFBQSxDQUFyQjtBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFRixVQUFNLGVBRFI7QUFFRUcsb0JBQWdCLElBRmxCO0FBR0VGLG9CQUFnQjtBQUhsQixHQUQwQjtBQUFBLENBQXJCOztBQVFBLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFNBQ3pCO0FBQ0VMLFVBQU0sY0FEUjtBQUVFSyxZQUFRQSxNQUZWO0FBR0VGLG9CQUFnQixLQUhsQjtBQUlFRixvQkFBZ0I7QUFKbEIsR0FEeUI7QUFBQSxDQUFwQjs7QUFTQSxTQUFTSCxTQUFULENBQW1CUSxRQUFuQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDMUMsU0FBTyxVQUFTQyxRQUFULEVBQWtCO0FBQ3ZCQSxhQUFTVCxjQUFUO0FBQ0EsUUFBRyxDQUFDTyxTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJELGVBQVNKLFlBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxRQUFHLENBQUNHLFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsZUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFdBQU8sMEZBQ05NLElBRE0sQ0FDRCxvQkFBWTtBQUNoQixVQUFHQyxTQUFTQyxNQUFULElBQW1CLEdBQXRCLEVBQTBCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZSCxTQUFTSSxVQUFyQjtBQUNEO0FBQ0QsYUFBT0osU0FBU0ssSUFBVCxFQUFQO0FBQ0QsS0FOTSxFQU9OTixJQVBNLENBT0QsZ0JBQU87QUFDWCxVQUFHTSxLQUFLYixjQUFSLEVBQXVCO0FBQ3JCSyxpQkFBU04sY0FBVDtBQUNELE9BRkQsTUFFSztBQUNITSxpQkFBU0osWUFBWVksS0FBS1gsTUFBakIsQ0FBVDtBQUNEO0FBQ0YsS0FiTSxDQUFQO0FBY0QsR0F4QkQ7QUF5QkQsQyIsImZpbGUiOiIwLjlmYzliZWZjZjg1MzkyMjQyYWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RMb2dpbiA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdSRVFVRVNUX0xPR0lOJyxcbiAgICBpc1JlcXVlc3RMb2dpbjogdHJ1ZVxuICB9XG4pXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZWVkID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX1NVQ0NFRUQnLFxuICAgIGlzTG9naW5TdWNjZWVkOiB0cnVlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9IChlcnJNc2cpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9GQUlMRUQnLFxuICAgIGVyck1zZzogZXJyTXNnLFxuICAgIGlzTG9naW5TdWNjZWVkOiBmYWxzZSxcbiAgICBpc1JlcXVlc3RMb2dpbjogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdExvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKXtcbiAgICBkaXNwYXRjaChyZXF1ZXN0TG9naW4oKSlcbiAgICBpZighdXNlcm5hbWUudHJpbSgpKXtcbiAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwidXNlcm5hbWUgaXMgZW1wdHkuXCIpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmKCFwYXNzd29yZC50cmltKCkpe1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjkwMDAvc3JjL3NpbXVsYXRlRGF0YS9sb2dpbnJlc3VsdC5qc29uYClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKGpzb24gPT57XG4gICAgICBpZihqc29uLmlzTG9naW5TdWNjZWVkKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoanNvbi5lcnJNc2cpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==