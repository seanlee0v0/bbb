webpackHotUpdate(0,{

/***/ "./src/reducers/LoginReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvTG9naW5SZWR1Y2VyLmpzPzQwMjIiXSwibmFtZXMiOlsiTG9naW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNMb2dpblN1Y2NlZWQiLCJyZWRpcmVjdFBhdGgiLCJlcnJNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQXFCO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFkLEVBQWM7QUFBQSxNQUFYQyxNQUFXOzs7QUFFeEMsVUFBT0EsT0FBT0MsSUFBZDtBQUNFLFNBQUssZUFBTDtBQUNBO0FBQ0UsZUFBTztBQUNMQywwQkFBZ0JGLE9BQU9FLGNBRGxCO0FBRUxDLHdCQUFjO0FBRlQsU0FBUDtBQUlEO0FBQ0QsU0FBSyxjQUFMO0FBQ0E7QUFDRSxlQUFPO0FBQ0xDLGtCQUFRSixPQUFPSSxNQURWO0FBRUxGLDBCQUFnQkYsT0FBT0U7QUFGbEIsU0FBUDtBQUlEO0FBQ0Q7QUFDQTtBQUNFLGVBQU9ILEtBQVA7QUFDRDtBQWxCSDtBQW9CRCxDQXRCRDtrQkF1QmVELFkiLCJmaWxlIjoiMC45NDU5YzM1NzJhYWY3OGU2NTA4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTG9naW5SZWR1Y2VyID0gKHN0YXRlPXt9LGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSAnTE9HSU5fU1VDQ0VFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNMb2dpblN1Y2NlZWQ6IGFjdGlvbi5pc0xvZ2luU3VjY2VlZCxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiAnL2hvbWUnXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgJ0xPR0lOX0ZBSUxFRCc6XG4gICAge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyTXNnOiBhY3Rpb24uZXJyTXNnLFxuICAgICAgICBpc0xvZ2luU3VjY2VlZDogYWN0aW9uLmlzTG9naW5TdWNjZWVkXG4gICAgICB9XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpblJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9Mb2dpblJlZHVjZXIuanMiXSwic291cmNlUm9vdCI6IiJ9