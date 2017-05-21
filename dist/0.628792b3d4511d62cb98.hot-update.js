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
    return (0, _isomorphicFetch2.default)('http://localhost:9000/src/simulateData/login.json').then(function (responseToText) {
      console.log(responseToText);
      return responseToText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZVRvVGV4dCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQXlCZ0JBLFMsR0FBQUEsUzs7QUF6QmhCOzs7Ozs7QUFFTyxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRUMsVUFBTSxlQURSO0FBRUVDLG9CQUFnQjtBQUZsQixHQUQwQjtBQUFBLENBQXJCO0FBTUEsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VGLFVBQU0sZUFEUjtBQUVFRyxvQkFBZ0IsSUFGbEI7QUFHRUYsb0JBQWdCO0FBSGxCLEdBRDBCO0FBQUEsQ0FBckI7O0FBUUEsSUFBTUcsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsU0FDekI7QUFDRUwsVUFBTSxjQURSO0FBRUVLLFlBQVFBLE1BRlY7QUFHRUYsb0JBQWdCLEtBSGxCO0FBSUVGLG9CQUFnQjtBQUpsQixHQUR5QjtBQUFBLENBQXBCOztBQVNBLFNBQVNILFNBQVQsQ0FBbUJRLFFBQW5CLEVBQTRCQyxRQUE1QixFQUFxQztBQUMxQyxTQUFPLFVBQVNDLFFBQVQsRUFBa0I7QUFDdkJBLGFBQVNULGNBQVQ7QUFDQSxRQUFHLENBQUNPLFNBQVNHLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsZUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFFBQUcsQ0FBQ0csU0FBU0UsSUFBVCxFQUFKLEVBQW9CO0FBQ2xCRCxlQUFTSixZQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0QsV0FBTyxvRkFDTk0sSUFETSxDQUNELDBCQUFrQjtBQUN0QkMsY0FBUUMsR0FBUixDQUFZQyxjQUFaO0FBQ0EsYUFBT0EsY0FBUDtBQUNELEtBSk0sRUFLTkgsSUFMTSxDQUtELGdCQUFPO0FBQ1gsVUFBR0ksS0FBS1gsY0FBUixFQUF1QjtBQUNyQkssaUJBQVNOLGNBQVQ7QUFDRCxPQUZELE1BRUs7QUFDSE0saUJBQVNKLFlBQVlVLEtBQUtULE1BQWpCLENBQVQ7QUFDRDtBQUNGLEtBWE0sQ0FBUDtBQVlELEdBdEJEO0FBdUJELEMiLCJmaWxlIjoiMC42Mjg3OTJiM2Q0NTExZDYyY2I5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TG9naW4gPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnUkVRVUVTVF9MT0dJTicsXG4gICAgaXNSZXF1ZXN0TG9naW46IHRydWVcbiAgfVxuKVxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2VlZCA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9TVUNDRUVEJyxcbiAgICBpc0xvZ2luU3VjY2VlZDogdHJ1ZSxcbiAgICBpc1JlcXVlc3RMb2dpbjogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgbG9naW5GYWlsZWQgPSAoZXJyTXNnKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fRkFJTEVEJyxcbiAgICBlcnJNc2c6IGVyck1zZyxcbiAgICBpc0xvZ2luU3VjY2VlZDogZmFsc2UsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RMb2dpbih1c2VybmFtZSxwYXNzd29yZCl7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCl7XG4gICAgZGlzcGF0Y2gocmVxdWVzdExvZ2luKCkpXG4gICAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInVzZXJuYW1lIGlzIGVtcHR5LlwiKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZighcGFzc3dvcmQudHJpbSgpKXtcbiAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbGVkKFwicGFzc3dvcmQgaXMgZW1wdHkuXCIpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3NyYy9zaW11bGF0ZURhdGEvbG9naW4uanNvbmApXG4gICAgLnRoZW4ocmVzcG9uc2VUb1RleHQgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VUb1RleHQpXG4gICAgICByZXR1cm4gcmVzcG9uc2VUb1RleHRcbiAgICB9KVxuICAgIC50aGVuKGpzb24gPT57XG4gICAgICBpZihqc29uLmlzTG9naW5TdWNjZWVkKXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoanNvbi5lcnJNc2cpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==