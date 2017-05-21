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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Mb2dpbkFjdGlvbi5qcz84NTY0Il0sIm5hbWVzIjpbInBvc3RMb2dpbiIsInJlcXVlc3RMb2dpbiIsInR5cGUiLCJpc1JlcXVlc3RMb2dpbiIsImxvZ2luU3VjY2VlZCIsImlzTG9naW5TdWNjZWVkIiwibG9naW5GYWlsZWQiLCJlcnJNc2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUF5QmdCQSxTLEdBQUFBLFM7O0FBekJoQjs7Ozs7O0FBRU8sSUFBTUMsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQzFCO0FBQ0VDLFVBQU0sZUFEUjtBQUVFQyxvQkFBZ0I7QUFGbEIsR0FEMEI7QUFBQSxDQUFyQjtBQU1BLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUMxQjtBQUNFRixVQUFNLGVBRFI7QUFFRUcsb0JBQWdCLElBRmxCO0FBR0VGLG9CQUFnQjtBQUhsQixHQUQwQjtBQUFBLENBQXJCOztBQVFBLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRDtBQUFBLFNBQ3pCO0FBQ0VMLFVBQU0sY0FEUjtBQUVFSyxZQUFRQSxNQUZWO0FBR0VGLG9CQUFnQixLQUhsQjtBQUlFRixvQkFBZ0I7QUFKbEIsR0FEeUI7QUFBQSxDQUFwQjs7QUFTQSxTQUFTSCxTQUFULENBQW1CUSxRQUFuQixFQUE0QkMsUUFBNUIsRUFBcUM7QUFDMUMsU0FBTyxtRkFDTkMsSUFETSxDQUNEO0FBQUEsV0FBYUMsU0FBU0MsSUFBVCxFQUFiO0FBQUEsR0FEQyxFQUVORixJQUZNLENBRUQsZ0JBQU87QUFDWCxRQUFHRSxLQUFLUCxjQUFSLEVBQXVCO0FBQ3JCUSxlQUFTVCxjQUFUO0FBQ0QsS0FGRCxNQUVLO0FBQ0hTLGVBQVNQLFlBQVlNLEtBQUtMLE1BQWpCLENBQVQ7QUFDRDtBQUNGLEdBUk0sQ0FBUDtBQVNELEMiLCJmaWxlIjoiMC40ZTkyODUxMzc4OTA5NjQ1YzFmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TG9naW4gPSAoKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnUkVRVUVTVF9MT0dJTicsXG4gICAgaXNSZXF1ZXN0TG9naW46IHRydWVcbiAgfVxuKVxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2VlZCA9ICgpID0+IChcbiAge1xuICAgIHR5cGU6ICdMT0dJTl9TVUNDRUVEJyxcbiAgICBpc0xvZ2luU3VjY2VlZDogdHJ1ZSxcbiAgICBpc1JlcXVlc3RMb2dpbjogZmFsc2VcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgbG9naW5GYWlsZWQgPSAoZXJyTXNnKSA9PiAoXG4gIHtcbiAgICB0eXBlOiAnTE9HSU5fRkFJTEVEJyxcbiAgICBlcnJNc2c6IGVyck1zZyxcbiAgICBpc0xvZ2luU3VjY2VlZDogZmFsc2UsXG4gICAgaXNSZXF1ZXN0TG9naW46IGZhbHNlXG4gIH1cbilcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RMb2dpbih1c2VybmFtZSxwYXNzd29yZCl7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2Fsb3N0OjkwMDAvc3JjL3NpbXVsYXRlRGF0YS9sb2dpbi5qc29uYClcbiAgLnRoZW4ocmVzc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oanNvbiA9PntcbiAgICBpZihqc29uLmlzTG9naW5TdWNjZWVkKXtcbiAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VlZCgpKVxuICAgIH1lbHNle1xuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsZWQoanNvbi5lcnJNc2cpKVxuICAgIH1cbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0xvZ2luQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==