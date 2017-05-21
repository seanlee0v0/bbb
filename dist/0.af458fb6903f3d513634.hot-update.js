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
    return (0, _isomorphicFetch2.default)('http://localhost:9000/src/simulateData/login.json').then(function (response) {
      console.log(response);
      return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQXlCZ0JBLFMsR0FBQUEsUzs7QUF6QmhCOzs7Ozs7QUFFTyxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRUMsVUFBTSxlQURSO0FBRUVDLG9CQUFnQjtBQUZsQixHQUQwQjtBQUFBLENBQXJCO0FBTUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VGLFVBQU0sZUFEUjtBQUVFRyxvQkFBZ0IsSUFGbEI7QUFHRUYsb0JBQWdCO0FBSGxCLEdBRDBCO0FBQUEsQ0FBckI7O0FBUUEsSUFBTUcsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsU0FDekI7QUFDRUwsVUFBTSxjQURSO0FBRUVLLFlBQVFBLE1BRlY7QUFHRUYsb0JBQWdCLEtBSGxCO0FBSUVGLG9CQUFnQjtBQUpsQixHQUR5QjtBQUFBLENBQXBCOztBQVNBLFNBQVNILFNBQVQsQ0FBbUJRLFFBQW5CLEVBQTRCQyxRQUE1QixFQUFxQztBQUMxQyxTQUFPLFVBQVNDLFFBQVQsRUFBa0I7QUFDdkJBLGFBQVNULGNBQVQ7QUFDQSxRQUFHLENBQUNPLFNBQVNHLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsZUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFFBQUcsQ0FBQ0csU0FBU0UsSUFBVCxFQUFKLEVBQW9CO0FBQ2xCRCxlQUFTSixZQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0QsV0FBTyxvRkFDTk0sSUFETSxDQUNELG9CQUFZO0FBQ2hCQyxjQUFRQyxHQUFSLENBQVlDLFFBQVo7QUFDQSxhQUFPQSxRQUFQO0FBQ0QsS0FKTSxFQUtOSCxJQUxNLENBS0QsZ0JBQU87QUFDWCxVQUFHSSxLQUFLWCxjQUFSLEVBQXVCO0FBQ3JCSyxpQkFBU04sY0FBVDtBQUNELE9BRkQsTUFFSztBQUNITSxpQkFBU0osWUFBWVUsS0FBS1QsTUFBakIsQ0FBVDtBQUNEO0FBQ0YsS0FYTSxDQUFQO0FBWUQsR0F0QkQ7QUF1QkQsQyIsImZpbGUiOiIwLmFmNDU4ZmI2OTAzZjNkNTEzNjM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RMb2dpbiA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdSRVFVRVNUX0xPR0lOJyxcbiAgICBpc1JlcXVlc3RMb2dpbjogdHJ1ZVxuICB9XG4pXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZWVkID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX1NVQ0NFRUQnLFxuICAgIGlzTG9naW5TdWNjZWVkOiB0cnVlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9IChlcnJNc2cpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9GQUlMRUQnLFxuICAgIGVyck1zZzogZXJyTXNnLFxuICAgIGlzTG9naW5TdWNjZWVkOiBmYWxzZSxcbiAgICBpc1JlcXVlc3RMb2dpbjogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdExvZ2luKHVzZXJuYW1lLHBhc3N3b3JkKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKXtcbiAgICBkaXNwYXRjaChyZXF1ZXN0TG9naW4oKSlcbiAgICBpZighdXNlcm5hbWUudHJpbSgpKXtcbiAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwidXNlcm5hbWUgaXMgZW1wdHkuXCIpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmKCFwYXNzd29yZC50cmltKCkpe1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjkwMDAvc3JjL3NpbXVsYXRlRGF0YS9sb2dpbi5qc29uYClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0pXG4gICAgLnRoZW4oanNvbiA9PntcbiAgICAgIGlmKGpzb24uaXNMb2dpblN1Y2NlZWQpe1xuICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQoKSlcbiAgICAgIH1lbHNle1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChqc29uLmVyck1zZykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9