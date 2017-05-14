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
exports.default = LoginReducer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzPzQwMjIiXSwibmFtZXMiOlsiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInVzZXJuYW1lIiwiaXNMb2dpblN1Y2NlZWQiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQXFCO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFkLEVBQWM7QUFBQSxNQUFYQyxNQUFXOztBQUN4Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFVBQU9BLE9BQU9HLElBQWQ7QUFDRSxTQUFLLGVBQUw7QUFDQTtBQUNFLGVBQU87QUFDTEMsb0JBQVVKLE9BQU9JLFFBRFo7QUFFTEMsMEJBQWdCTCxPQUFPSztBQUZsQixTQUFQO0FBSUQ7QUFDRCxTQUFLLGNBQUw7QUFDQTtBQUNFLGVBQU87QUFDTEMsa0JBQVFOLE9BQU9NLE1BRFY7QUFFTEQsMEJBQWdCTCxPQUFPSztBQUZsQixTQUFQO0FBSUQ7QUFDRDtBQUNBO0FBQ0UsZUFBT04sS0FBUDtBQUNEO0FBbEJIO0FBb0JELENBdkJEO2tCQXdCZUQsWSIsImZpbGUiOiIwLjRjNzhkNzkzNjg5ZmRjNDQyYjY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcblxuY29uc3QgTG9naW5SZWR1Y2VyID0gKHN0YXRlPXt9LGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgY29uc29sZS5sb2coYWN0aW9uKVxuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgJ0xPR0lOX1NVQ0NFRUQnOlxuICAgIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJuYW1lOiBhY3Rpb24udXNlcm5hbWUsXG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWRcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnTE9HSU5fRkFJTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJNc2c6IGFjdGlvbi5lcnJNc2csXG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWRcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL0xvZ2luUmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=