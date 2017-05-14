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

  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'LOGIN_SUCCEED':
      {
        return {
          isLoginSucceed: action.isLoginSucceed,
          redirectPath: '/'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzPzQwMjIiXSwibmFtZXMiOlsiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImlzTG9naW5TdWNjZWVkIiwicmVkaXJlY3RQYXRoIiwiZXJyTXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxHQUFxQjtBQUFBLE1BQXBCQyxLQUFvQix1RUFBZCxFQUFjO0FBQUEsTUFBWEMsTUFBVzs7QUFDeENDLFVBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRSxVQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxVQUFPQSxPQUFPRyxJQUFkO0FBQ0UsU0FBSyxlQUFMO0FBQ0E7QUFDRSxlQUFPO0FBQ0xDLDBCQUFnQkosT0FBT0ksY0FEbEI7QUFFTEMsd0JBQWM7QUFGVCxTQUFQO0FBSUQ7QUFDRCxTQUFLLGNBQUw7QUFDQTtBQUNFLGVBQU87QUFDTEMsa0JBQVFOLE9BQU9NLE1BRFY7QUFFTEYsMEJBQWdCSixPQUFPSTtBQUZsQixTQUFQO0FBSUQ7QUFDRDtBQUNBO0FBQ0UsZUFBT0wsS0FBUDtBQUNEO0FBbEJIO0FBb0JELENBdkJEO2tCQXdCZUQsWSIsImZpbGUiOiIwLmZjNGZmYzE5ZjBkNWY4ZjIyMTc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcblxuY29uc3QgTG9naW5SZWR1Y2VyID0gKHN0YXRlPXt9LGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgY29uc29sZS5sb2coYWN0aW9uKVxuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgJ0xPR0lOX1NVQ0NFRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWQsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy8nXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgJ0xPR0lOX0ZBSUxFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyTXNnOiBhY3Rpb24uZXJyTXNnLFxuICAgICAgICBpc0xvZ2luU3VjY2VlZDogYWN0aW9uLmlzTG9naW5TdWNjZWVkXG4gICAgICB9XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpblJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9Mb2dpblJlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9