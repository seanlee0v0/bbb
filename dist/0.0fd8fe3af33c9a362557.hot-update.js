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
        return {
          isLoginSucceed: false,
          errMsg: response.status + "(" + response.statusText + ")"
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VDLFVBQU0sZUFEUjtBQUVFQyxvQkFBZ0I7QUFGbEIsR0FEMEI7QUFBQSxDQUFyQjtBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFRixVQUFNLGVBRFI7QUFFRUcsb0JBQWdCLElBRmxCO0FBR0VGLG9CQUFnQjtBQUhsQixHQUQwQjtBQUFBLENBQXJCOztBQVFBLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFNBQ3pCO0FBQ0VMLFVBQU0sY0FEUjtBQUVFSyxZQUFRQSxNQUZWO0FBR0VGLG9CQUFnQixLQUhsQjtBQUlFRixvQkFBZ0I7QUFKbEIsR0FEeUI7QUFBQSxDQUFwQjs7QUFTQSxTQUFTSCxTQUFULENBQW1CUSxRQUFuQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDMUMsU0FBTyxVQUFTQyxRQUFULEVBQWtCO0FBQ3ZCQSxhQUFTVCxjQUFUO0FBQ0EsUUFBRyxDQUFDTyxTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJELGVBQVNKLFlBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxRQUFHLENBQUNHLFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsZUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFdBQU8sMEZBQ05NLElBRE0sQ0FDRCxvQkFBWTtBQUNoQixVQUFHQyxTQUFTQyxNQUFULElBQW1CLEdBQXRCLEVBQTBCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZSCxTQUFTSSxVQUFyQjtBQUNBLGVBQU87QUFDTFosMEJBQWUsS0FEVjtBQUVMRSxrQkFBT00sU0FBU0MsTUFBVCxHQUFnQixHQUFoQixHQUFvQkQsU0FBU0ksVUFBN0IsR0FBd0M7QUFGMUMsU0FBUDtBQUlEO0FBQ0QsYUFBT0osU0FBU0ssSUFBVCxFQUFQO0FBQ0QsS0FWTSxFQVdOTixJQVhNLENBV0QsZ0JBQU87QUFDWCxVQUFHTSxLQUFLYixjQUFSLEVBQXVCO0FBQ3JCSyxpQkFBU04sY0FBVDtBQUNELE9BRkQsTUFFSztBQUNITSxpQkFBU0osWUFBWVksS0FBS1gsTUFBakIsQ0FBVDtBQUNEO0FBQ0YsS0FqQk0sQ0FBUDtBQWtCRCxHQTVCRDtBQTZCRCxDIiwiZmlsZSI6IjAuMGZkOGZlM2FmMzNjOWEzNjI1NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdExvZ2luID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ1JFUVVFU1RfTE9HSU4nLFxuICAgIGlzUmVxdWVzdExvZ2luOiB0cnVlXG4gIH1cbilcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2NlZWQgPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fU1VDQ0VFRCcsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHRydWUsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKGVyck1zZykgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX0ZBSUxFRCcsXG4gICAgZXJyTXNnOiBlcnJNc2csXG4gICAgaXNMb2dpblN1Y2NlZWQ6IGZhbHNlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0TG9naW4odXNlcm5hbWUscGFzc3dvcmQpe1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpe1xuICAgIGRpc3BhdGNoKHJlcXVlc3RMb2dpbigpKVxuICAgIGlmKCF1c2VybmFtZS50cmltKCkpe1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zcmMvc2ltdWxhdGVEYXRhL2xvZ2lucmVzdWx0Lmpzb25gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzTG9naW5TdWNjZWVkOmZhbHNlLFxuICAgICAgICAgIGVyck1zZzpyZXNwb25zZS5zdGF0dXMrXCIoXCIrcmVzcG9uc2Uuc3RhdHVzVGV4dCtcIilcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAudGhlbihqc29uID0+e1xuICAgICAgaWYoanNvbi5pc0xvZ2luU3VjY2VlZCl7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VlZCgpKVxuICAgICAgfWVsc2V7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKGpzb24uZXJyTXNnKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=