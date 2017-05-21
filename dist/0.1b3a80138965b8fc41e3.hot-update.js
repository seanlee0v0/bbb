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
    return (0, _isomorphicFetch2.default)('http://localhost:9000/src/simulateData/login.json').then(function (ressponse) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBeUJnQkEsUyxHQUFBQSxTOztBQXpCaEI7Ozs7OztBQUVPLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFQyxVQUFNLGVBRFI7QUFFRUMsb0JBQWdCO0FBRmxCLEdBRDBCO0FBQUEsQ0FBckI7QUFNQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRUYsVUFBTSxlQURSO0FBRUVHLG9CQUFnQixJQUZsQjtBQUdFRixvQkFBZ0I7QUFIbEIsR0FEMEI7QUFBQSxDQUFyQjs7QUFRQSxJQUFNRyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQ7QUFBQSxTQUN6QjtBQUNFTCxVQUFNLGNBRFI7QUFFRUssWUFBUUEsTUFGVjtBQUdFRixvQkFBZ0IsS0FIbEI7QUFJRUYsb0JBQWdCO0FBSmxCLEdBRHlCO0FBQUEsQ0FBcEI7O0FBU0EsU0FBU0gsU0FBVCxDQUFtQlEsUUFBbkIsRUFBNEJDLFFBQTVCLEVBQXFDO0FBQzFDLFNBQU8sVUFBU0MsUUFBVCxFQUFrQjtBQUN2QkEsYUFBU1QsY0FBVDtBQUNBLFFBQUcsQ0FBQ08sU0FBU0csSUFBVCxFQUFKLEVBQW9CO0FBQ2xCRCxlQUFTSixZQUFZLG9CQUFaLENBQVQ7QUFDQTtBQUNEO0FBQ0QsUUFBRyxDQUFDRyxTQUFTRSxJQUFULEVBQUosRUFBb0I7QUFDbEJELGVBQVNKLFlBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxXQUFPLG9GQUNOTSxJQURNLENBQ0Q7QUFBQSxhQUFhQyxTQUFTQyxJQUFULEVBQWI7QUFBQSxLQURDLEVBRU5GLElBRk0sQ0FFRCxnQkFBTztBQUNYLFVBQUdFLEtBQUtULGNBQVIsRUFBdUI7QUFDckJLLGlCQUFTTixjQUFUO0FBQ0QsT0FGRCxNQUVLO0FBQ0hNLGlCQUFTSixZQUFZUSxLQUFLUCxNQUFqQixDQUFUO0FBQ0Q7QUFDRixLQVJNLENBQVA7QUFTRCxHQW5CRDtBQW9CRCxDIiwiZmlsZSI6IjAuMWIzYTgwMTM4OTY1YjhmYzQxZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdExvZ2luID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ1JFUVVFU1RfTE9HSU4nLFxuICAgIGlzUmVxdWVzdExvZ2luOiB0cnVlXG4gIH1cbilcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2NlZWQgPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fU1VDQ0VFRCcsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHRydWUsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKGVyck1zZykgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX0ZBSUxFRCcsXG4gICAgZXJyTXNnOiBlcnJNc2csXG4gICAgaXNMb2dpblN1Y2NlZWQ6IGZhbHNlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0TG9naW4odXNlcm5hbWUscGFzc3dvcmQpe1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpe1xuICAgIGRpc3BhdGNoKHJlcXVlc3RMb2dpbigpKVxuICAgIGlmKCF1c2VybmFtZS50cmltKCkpe1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChcInBhc3N3b3JkIGlzIGVtcHR5LlwiKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zcmMvc2ltdWxhdGVEYXRhL2xvZ2luLmpzb25gKVxuICAgIC50aGVuKHJlc3Nwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PntcbiAgICAgIGlmKGpzb24uaXNMb2dpblN1Y2NlZWQpe1xuICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2NlZWQoKSlcbiAgICAgIH1lbHNle1xuICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChqc29uLmVyck1zZykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9