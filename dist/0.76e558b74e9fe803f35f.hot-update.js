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
      console.log(response.body);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImJvZHkiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VDLFVBQU0sZUFEUjtBQUVFQyxvQkFBZ0I7QUFGbEIsR0FEMEI7QUFBQSxDQUFyQjtBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFRixVQUFNLGVBRFI7QUFFRUcsb0JBQWdCLElBRmxCO0FBR0VGLG9CQUFnQjtBQUhsQixHQUQwQjtBQUFBLENBQXJCOztBQVFBLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFNBQ3pCO0FBQ0VMLFVBQU0sY0FEUjtBQUVFSyxZQUFRQSxNQUZWO0FBR0VGLG9CQUFnQixLQUhsQjtBQUlFRixvQkFBZ0I7QUFKbEIsR0FEeUI7QUFBQSxDQUFwQjs7QUFTQSxTQUFTSCxTQUFULENBQW1CUSxRQUFuQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDMUMsU0FBTyxVQUFTQyxRQUFULEVBQWtCO0FBQ3ZCQSxhQUFTVCxjQUFUO0FBQ0EsUUFBRyxDQUFDTyxTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJELGVBQVNKLFlBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxRQUFHLENBQUNHLFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsZUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFdBQU8sb0ZBQ05NLElBRE0sQ0FDRCxvQkFBWTtBQUNoQkMsY0FBUUMsR0FBUixDQUFZQyxTQUFTQyxJQUFyQjtBQUNBLGFBQU9ELFFBQVA7QUFDRCxLQUpNLEVBS05ILElBTE0sQ0FLRCxnQkFBTztBQUNYLFVBQUdLLEtBQUtaLGNBQVIsRUFBdUI7QUFDckJLLGlCQUFTTixjQUFUO0FBQ0QsT0FGRCxNQUVLO0FBQ0hNLGlCQUFTSixZQUFZVyxLQUFLVixNQUFqQixDQUFUO0FBQ0Q7QUFDRixLQVhNLENBQVA7QUFZRCxHQXRCRDtBQXVCRCxDIiwiZmlsZSI6IjAuNzZlNTU4Yjc0ZTlmZTgwM2YzNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdExvZ2luID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ1JFUVVFU1RfTE9HSU4nLFxuICAgIGlzUmVxdWVzdExvZ2luOiB0cnVlXG4gIH1cbilcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2NlZWQgPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fU1VDQ0VFRCcsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHRydWUsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKGVyck1zZykgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX0ZBSUxFRCcsXG4gICAgZXJyTXNnOiBlcnJNc2csXG4gICAgaXNMb2dpblN1Y2NlZWQ6IGZhbHNlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0TG9naW4odXNlcm5hbWUscGFzc3dvcmQpe1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpe1xuICAgIGRpc3BhdGNoKHJlcXVlc3RMb2dpbigpKVxuICAgIGlmKCF1c2VybmFtZS50cmltKCkpe1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zcmMvc2ltdWxhdGVEYXRhL2xvZ2luLmpzb25gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmJvZHkpXG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9KVxuICAgIC50aGVuKGpzb24gPT57XG4gICAgICBpZihqc29uLmlzTG9naW5TdWNjZWVkKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoanNvbi5lcnJNc2cpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==