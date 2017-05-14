webpackHotUpdate(0,{

/***/ "./src/reducers/LoginFormReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//import {combineReducers} from 'redux'

var LoginReducer = exports.LoginReducer = function LoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN_SUCCEED':
      {
        return {
          username: action.username,
          isLoginSucceed: action.isLoginSucceed
        };
      }
    case 'LOGIN_FAILED':
      {}
    default:
      {
        return state;
      }
  }
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5Gb3JtUmVkdWNlci5qcz80OTQxIl0sIm5hbWVzIjpbIkxvZ2luUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVzZXJuYW1lIiwiaXNMb2dpblN1Y2NlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxHQUFxQjtBQUFBLE1BQXBCQyxLQUFvQix1RUFBZCxFQUFjO0FBQUEsTUFBWEMsTUFBVzs7QUFDL0MsVUFBT0EsT0FBT0MsSUFBZDtBQUNFLFNBQUssZUFBTDtBQUNBO0FBQ0UsZUFBTztBQUNMQyxvQkFBVUYsT0FBT0UsUUFEWjtBQUVMQywwQkFBZ0JILE9BQU9HO0FBRmxCLFNBQVA7QUFJRDtBQUNELFNBQUssY0FBTDtBQUNBLE9BRUM7QUFDRDtBQUNBO0FBQ0UsZUFBT0osS0FBUDtBQUNEO0FBZkg7QUFpQkQsQ0FsQk0sQyIsImZpbGUiOiIwLjJkYTU0NjgzMzFiNGUyNjhiYmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcblxuZXhwb3J0IGNvbnN0IExvZ2luUmVkdWNlciA9IChzdGF0ZT17fSxhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlICdMT0dJTl9TVUNDRUVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VybmFtZTogYWN0aW9uLnVzZXJuYW1lLFxuICAgICAgICBpc0xvZ2luU3VjY2VlZDogYWN0aW9uLmlzTG9naW5TdWNjZWVkXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgJ0xPR0lOX0ZBSUxFRCc6XG4gICAge1xuXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvTG9naW5Gb3JtUmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=