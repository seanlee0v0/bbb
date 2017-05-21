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
          errMsg: response.statusText
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1c1RleHQiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VDLFVBQU0sZUFEUjtBQUVFQyxvQkFBZ0I7QUFGbEIsR0FEMEI7QUFBQSxDQUFyQjtBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFRixVQUFNLGVBRFI7QUFFRUcsb0JBQWdCLElBRmxCO0FBR0VGLG9CQUFnQjtBQUhsQixHQUQwQjtBQUFBLENBQXJCOztBQVFBLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFNBQ3pCO0FBQ0VMLFVBQU0sY0FEUjtBQUVFSyxZQUFRQSxNQUZWO0FBR0VGLG9CQUFnQixLQUhsQjtBQUlFRixvQkFBZ0I7QUFKbEIsR0FEeUI7QUFBQSxDQUFwQjs7QUFTQSxTQUFTSCxTQUFULENBQW1CUSxRQUFuQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDMUMsU0FBTyxVQUFTQyxRQUFULEVBQWtCO0FBQ3ZCQSxhQUFTVCxjQUFUO0FBQ0EsUUFBRyxDQUFDTyxTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJELGVBQVNKLFlBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxRQUFHLENBQUNHLFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsZUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFdBQU8sMEZBQ05NLElBRE0sQ0FDRCxvQkFBWTtBQUNoQixVQUFHQyxTQUFTQyxNQUFULElBQW1CLEdBQXRCLEVBQTBCO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZSCxTQUFTSSxVQUFyQjtBQUNBLGVBQU87QUFDTFosMEJBQWUsS0FEVjtBQUVMRSxrQkFBT00sU0FBU0k7QUFGWCxTQUFQO0FBSUQ7QUFDRCxhQUFPSixTQUFTSyxJQUFULEVBQVA7QUFDRCxLQVZNLEVBV05OLElBWE0sQ0FXRCxnQkFBTztBQUNYLFVBQUdNLEtBQUtiLGNBQVIsRUFBdUI7QUFDckJLLGlCQUFTTixjQUFUO0FBQ0QsT0FGRCxNQUVLO0FBQ0hNLGlCQUFTSixZQUFZWSxLQUFLWCxNQUFqQixDQUFUO0FBQ0Q7QUFDRixLQWpCTSxDQUFQO0FBa0JELEdBNUJEO0FBNkJELEMiLCJmaWxlIjoiMC4xMjZiZjUwOTA4MDI0ZDYwYTk0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TG9naW4gPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnUkVRVUVTVF9MT0dJTicsXG4gICAgaXNSZXF1ZXN0TG9naW46IHRydWVcbiAgfVxuKVxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2VlZCA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9TVUNDRUVEJyxcbiAgICBpc0xvZ2luU3VjY2VlZDogdHJ1ZSxcbiAgICBpc1JlcXVlc3RMb2dpbjogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgbG9naW5GYWlsZWQgPSAoZXJyTXNnKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fRkFJTEVEJyxcbiAgICBlcnJNc2c6IGVyck1zZyxcbiAgICBpc0xvZ2luU3VjY2VlZDogZmFsc2UsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RMb2dpbih1c2VybmFtZSxwYXNzd29yZCl7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCl7XG4gICAgZGlzcGF0Y2gocmVxdWVzdExvZ2luKCkpXG4gICAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInVzZXJuYW1lIGlzIGVtcHR5LlwiKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZighcGFzc3dvcmQudHJpbSgpKXtcbiAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwicGFzc3dvcmQgaXMgZW1wdHkuXCIpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3NyYy9zaW11bGF0ZURhdGEvbG9naW5yZXN1bHQuanNvbmApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNMb2dpblN1Y2NlZWQ6ZmFsc2UsXG4gICAgICAgICAgZXJyTXNnOnJlc3BvbnNlLnN0YXR1c1RleHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oanNvbiA9PntcbiAgICAgIGlmKGpzb24uaXNMb2dpblN1Y2NlZWQpe1xuICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQoKSlcbiAgICAgIH1lbHNle1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChqc29uLmVyck1zZykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9