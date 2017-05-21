webpackHotUpdate(0,{

/***/ "./src/reducers/LoginReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//import {combineReducers} from 'redux'

var LoginReducer = function LoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];


  switch (action.type) {
    case 'LOGIN_SUCCEED':
      {
        return {
          isLoginSucceed: action.isLoginSucceed,
          redirectPath: '/home'
        };
      }
    case 'LOGIN_FAILED':
      {
        return {
          errMsg: action.errMsg,
          isLoginSucceed: action.isLoginSucceed
        };
      }
    default:
      {
        return state;
      }
  }
};
exports.default = LoginReducer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzPzQwMjIiXSwibmFtZXMiOlsiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNMb2dpblN1Y2NlZWQiLCJyZWRpcmVjdFBhdGgiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQXFCO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFkLEVBQWM7QUFBQSxNQUFYQyxNQUFXOzs7QUFFeEMsVUFBT0EsT0FBT0MsSUFBZDtBQUNFLFNBQUssZUFBTDtBQUNBO0FBQ0UsZUFBTztBQUNMQywwQkFBZ0JGLE9BQU9FLGNBRGxCO0FBRUxDLHdCQUFjO0FBRlQsU0FBUDtBQUlEO0FBQ0QsU0FBSyxjQUFMO0FBQ0E7QUFDRSxlQUFPO0FBQ0xDLGtCQUFRSixPQUFPSSxNQURWO0FBRUxGLDBCQUFnQkYsT0FBT0U7QUFGbEIsU0FBUDtBQUlEO0FBQ0Q7QUFDQTtBQUNFLGVBQU9ILEtBQVA7QUFDRDtBQWxCSDtBQW9CRCxDQXRCRDtrQkF1QmVELFkiLCJmaWxlIjoiMC5hY2MwMWRjOWE4YmJhODFmMTM2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXG5cbmNvbnN0IExvZ2luUmVkdWNlciA9IChzdGF0ZT17fSxhY3Rpb24pID0+IHtcblxuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgJ0xPR0lOX1NVQ0NFRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWQsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9ob21lJ1xuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdMT0dJTl9GQUlMRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVyck1zZzogYWN0aW9uLmVyck1zZyxcbiAgICAgICAgaXNMb2dpblN1Y2NlZWQ6IGFjdGlvbi5pc0xvZ2luU3VjY2VlZFxuICAgICAgfVxuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgIHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5SZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==