webpackHotUpdate(0,{

/***/ "./src/reducers/LoginReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//import {combineReducers} from 'redux'

var LoginReducer = exports.LoginReducer = function LoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'LOGIN_SUCCEED':
      {
        return {
          username: action.username,
          isLoginSucceed: action.isLoginSucceed
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzPzQwMjIiXSwibmFtZXMiOlsiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInVzZXJuYW1lIiwiaXNMb2dpblN1Y2NlZWQiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxHQUFxQjtBQUFBLE1BQXBCQyxLQUFvQix1RUFBZCxFQUFjO0FBQUEsTUFBWEMsTUFBVzs7QUFDL0NDLFVBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRSxVQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxVQUFPQSxPQUFPRyxJQUFkO0FBQ0UsU0FBSyxlQUFMO0FBQ0E7QUFDRSxlQUFPO0FBQ0xDLG9CQUFVSixPQUFPSSxRQURaO0FBRUxDLDBCQUFnQkwsT0FBT0s7QUFGbEIsU0FBUDtBQUlEO0FBQ0QsU0FBSyxjQUFMO0FBQ0E7QUFDRSxlQUFPO0FBQ0xDLGtCQUFRTixPQUFPTSxNQURWO0FBRUxELDBCQUFnQkwsT0FBT0s7QUFGbEIsU0FBUDtBQUlEO0FBQ0Q7QUFDQTtBQUNFLGVBQU9OLEtBQVA7QUFDRDtBQWxCSDtBQW9CRCxDQXZCTSxDIiwiZmlsZSI6IjAuYmNmMzA0ZDRjNzc5YzhhYjk5YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuXG5leHBvcnQgY29uc3QgTG9naW5SZWR1Y2VyID0gKHN0YXRlPXt9LGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgY29uc29sZS5sb2coYWN0aW9uKVxuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgJ0xPR0lOX1NVQ0NFRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJuYW1lOiBhY3Rpb24udXNlcm5hbWUsXG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWRcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnTE9HSU5fRkFJTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJNc2c6IGFjdGlvbi5lcnJNc2csXG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWRcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9Mb2dpblJlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9