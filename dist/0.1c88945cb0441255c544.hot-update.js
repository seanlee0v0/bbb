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
  if (!username.trim()) {
    dispatch(loginFailed("username is empty."));
    return;
  }
  if (!password.trim()) {
    dispatch(loginFailed("password is empty."));
    return;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJ0cmltIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBeUJnQkEsUyxHQUFBQSxTOztBQXpCaEI7Ozs7OztBQUVPLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFQyxVQUFNLGVBRFI7QUFFRUMsb0JBQWdCO0FBRmxCLEdBRDBCO0FBQUEsQ0FBckI7QUFNQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsU0FDMUI7QUFDRUYsVUFBTSxlQURSO0FBRUVHLG9CQUFnQixJQUZsQjtBQUdFRixvQkFBZ0I7QUFIbEIsR0FEMEI7QUFBQSxDQUFyQjs7QUFRQSxJQUFNRyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQ7QUFBQSxTQUN6QjtBQUNFTCxVQUFNLGNBRFI7QUFFRUssWUFBUUEsTUFGVjtBQUdFRixvQkFBZ0IsS0FIbEI7QUFJRUYsb0JBQWdCO0FBSmxCLEdBRHlCO0FBQUEsQ0FBcEI7O0FBU0EsU0FBU0gsU0FBVCxDQUFtQlEsUUFBbkIsRUFBNEJDLFFBQTVCLEVBQXFDO0FBQzFDQyxXQUFTVCxjQUFUO0FBQ0EsTUFBRyxDQUFDTyxTQUFTRyxJQUFULEVBQUosRUFBb0I7QUFDbEJELGFBQVNKLFlBQVksb0JBQVosQ0FBVDtBQUNBO0FBQ0Q7QUFDRCxNQUFHLENBQUNHLFNBQVNFLElBQVQsRUFBSixFQUFvQjtBQUNsQkQsYUFBU0osWUFBWSxvQkFBWixDQUFUO0FBQ0E7QUFDRDtBQUNELFNBQU8sbUZBQ05NLElBRE0sQ0FDRDtBQUFBLFdBQWFDLFNBQVNDLElBQVQsRUFBYjtBQUFBLEdBREMsRUFFTkYsSUFGTSxDQUVELGdCQUFPO0FBQ1gsUUFBR0UsS0FBS1QsY0FBUixFQUF1QjtBQUNyQkssZUFBU04sY0FBVDtBQUNELEtBRkQsTUFFSztBQUNITSxlQUFTSixZQUFZUSxLQUFLUCxNQUFqQixDQUFUO0FBQ0Q7QUFDRixHQVJNLENBQVA7QUFTRCxDIiwiZmlsZSI6IjAuMWM4ODk0NWNiMDQ0MTI1NWM1NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdExvZ2luID0gKCkgPT4gKFxuICB7XG4gICAgdHlwZTogJ1JFUVVFU1RfTE9HSU4nLFxuICAgIGlzUmVxdWVzdExvZ2luOiB0cnVlXG4gIH1cbilcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2NlZWQgPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fU1VDQ0VFRCcsXG4gICAgaXNMb2dpblN1Y2NlZWQ6IHRydWUsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKGVyck1zZykgPT4gKFxuICB7XG4gICAgdHlwZTogJ0xPR0lOX0ZBSUxFRCcsXG4gICAgZXJyTXNnOiBlcnJNc2csXG4gICAgaXNMb2dpblN1Y2NlZWQ6IGZhbHNlLFxuICAgIGlzUmVxdWVzdExvZ2luOiBmYWxzZVxuICB9XG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0TG9naW4odXNlcm5hbWUscGFzc3dvcmQpe1xuICBkaXNwYXRjaChyZXF1ZXN0TG9naW4oKSlcbiAgaWYoIXVzZXJuYW1lLnRyaW0oKSl7XG4gICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJ1c2VybmFtZSBpcyBlbXB0eS5cIikpXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYoIXBhc3N3b3JkLnRyaW0oKSl7XG4gICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoXCJwYXNzd29yZCBpcyBlbXB0eS5cIikpXG4gICAgcmV0dXJuXG4gIH1cbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxvc3Q6OTAwMC9zcmMvc2ltdWxhdGVEYXRhL2xvZ2luLmpzb25gKVxuICAudGhlbihyZXNzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihqc29uID0+e1xuICAgIGlmKGpzb24uaXNMb2dpblN1Y2NlZWQpe1xuICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZWVkKCkpXG4gICAgfWVsc2V7XG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWxlZChqc29uLmVyck1zZykpXG4gICAgfVxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvTG9naW5BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9