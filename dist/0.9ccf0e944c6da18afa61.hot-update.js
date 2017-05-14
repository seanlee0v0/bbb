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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzPzQwMjIiXSwibmFtZXMiOlsiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInVzZXJuYW1lIiwiaXNMb2dpblN1Y2NlZWQiLCJyZWRpcmVjdFBhdGgiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQXFCO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFkLEVBQWM7QUFBQSxNQUFYQyxNQUFXOztBQUN4Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFVBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFVBQU9BLE9BQU9HLElBQWQ7QUFDRSxTQUFLLGVBQUw7QUFDQTtBQUNFLGVBQU87QUFDTEMsb0JBQVVKLE9BQU9JLFFBRFo7QUFFTEMsMEJBQWdCTCxPQUFPSyxjQUZsQjtBQUdMQyx3QkFBYztBQUhULFNBQVA7QUFLRDtBQUNELFNBQUssY0FBTDtBQUNBO0FBQ0UsZUFBTztBQUNMQyxrQkFBUVAsT0FBT08sTUFEVjtBQUVMRiwwQkFBZ0JMLE9BQU9LO0FBRmxCLFNBQVA7QUFJRDtBQUNEO0FBQ0E7QUFDRSxlQUFPTixLQUFQO0FBQ0Q7QUFuQkg7QUFxQkQsQ0F4QkQ7a0JBeUJlRCxZIiwiZmlsZSI6IjAuOWNjZjBlOTQ0YzZkYTE4YWZhNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuXG5jb25zdCBMb2dpblJlZHVjZXIgPSAoc3RhdGU9e30sYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0YXRlKVxuICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSAnTE9HSU5fU1VDQ0VFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi51c2VybmFtZSxcbiAgICAgICAgaXNMb2dpblN1Y2NlZWQ6IGFjdGlvbi5pc0xvZ2luU3VjY2VlZCxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiAnLydcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnTE9HSU5fRkFJTEVEJzpcbiAgICB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJNc2c6IGFjdGlvbi5lcnJNc2csXG4gICAgICAgIGlzTG9naW5TdWNjZWVkOiBhY3Rpb24uaXNMb2dpblN1Y2NlZWRcbiAgICAgIH1cbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICB7XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL0xvZ2luUmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=