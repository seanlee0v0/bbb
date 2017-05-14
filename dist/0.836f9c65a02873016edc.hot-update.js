webpackHotUpdate(0,{

/***/ "./src/components/LoginForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var isLoginSucceed = _ref.isLoginSucceed,
      redirectPath = _ref.redirectPath,
      errMsg = _ref.errMsg,
      handleSubmit = _ref.handleSubmit;

  var username = void 0,
      password = void 0;
  console.log("render LoginForm");
  console.log(isLoginSucceed);
  console.log(redirectPath);
  console.log(errMsg);
  console.log(handleSubmit);

  return isLoginSucceed ? _react2.default.createElement(_reactRouter.Redirect, { to: redirectPath }) : _react2.default.createElement(
    'div',
    { id: 'login-form-div' },
    _react2.default.createElement(
      'div',
      { style: { display: !errMsg ? 'none' : '' } },
      _react2.default.createElement(
        'span',
        null,
        errMsg
      )
    ),
    _react2.default.createElement(
      'form',
      { name: 'login-form', onSubmit: function onSubmit(e) {
          e.preventDefault();
          handleSubmit(username.value, password.value);
        } },
      _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              'User ID:'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('input', { type: 'text', name: 'username', ref: function ref(node) {
                  username = node;
                } })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'span',
                null,
                '*'
              )
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              'password:'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('input', { type: 'password', name: 'password', ref: function ref(node) {
                  password = node;
                } })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'span',
                null,
                '*'
              )
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'button',
                { type: 'submit' },
                'submit'
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'button',
                { type: 'reset' },
                'reset'
              )
            ),
            _react2.default.createElement('td', null)
          )
        )
      )
    )
  );
};

exports.default = LoginForm;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJpc0xvZ2luU3VjY2VlZCIsInJlZGlyZWN0UGF0aCIsImVyck1zZyIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxPQUF1RDtBQUFBLE1BQXJEQyxjQUFxRCxRQUFyREEsY0FBcUQ7QUFBQSxNQUF0Q0MsWUFBc0MsUUFBdENBLFlBQXNDO0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQ3ZFLE1BQUlDLGlCQUFKO0FBQUEsTUFBYUMsaUJBQWI7QUFDQUMsVUFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0FELFVBQVFDLEdBQVIsQ0FBWVAsY0FBWjtBQUNBTSxVQUFRQyxHQUFSLENBQVlOLFlBQVo7QUFDQUssVUFBUUMsR0FBUixDQUFZTCxNQUFaO0FBQ0FJLFVBQVFDLEdBQVIsQ0FBWUosWUFBWjs7QUFFQSxTQUFPSCxpQkFBZ0IsdURBQVUsSUFBSUMsWUFBZCxHQUFoQixHQUNMO0FBQUE7QUFBQSxNQUFLLElBQUcsZ0JBQVI7QUFDRTtBQUFBO0FBQUEsUUFBSyxPQUFPLEVBQUNPLFNBQVMsQ0FBQ04sTUFBRCxHQUFRLE1BQVIsR0FBZSxFQUF6QixFQUFaO0FBQTJDO0FBQUE7QUFBQTtBQUFPQTtBQUFQO0FBQTNDLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxNQUFLLFlBQVgsRUFBd0IsVUFBVSxrQkFBQ08sQ0FBRCxFQUFPO0FBQ3ZDQSxZQUFFQyxjQUFGO0FBQ0FQLHVCQUFhQyxTQUFTTyxLQUF0QixFQUE0Qk4sU0FBU00sS0FBckM7QUFDRCxTQUhEO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsS0FBSyxtQkFBTTtBQUFDUCw2QkFBU1EsSUFBVDtBQUFjLGlCQUE3RDtBQUFKLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFIRixXQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksdURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsS0FBSyxtQkFBTTtBQUFDUCw2QkFBU08sSUFBVDtBQUFjLGlCQUFqRTtBQUFKLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFIRixXQU5GO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUE7QUFBSixhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFRLE1BQUssT0FBYjtBQUFBO0FBQUE7QUFBSixhQUZGO0FBR0U7QUFIRjtBQVhGO0FBREY7QUFKRjtBQUZGLEdBREY7QUE2QkQsQ0FyQ0Q7O2tCQXVDZWIsUyIsImZpbGUiOiIwLjgzNmY5YzY1YTAyODczMDE2ZWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1JlZGlyZWN0fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNvbnN0IExvZ2luRm9ybSA9ICh7aXNMb2dpblN1Y2NlZWQscmVkaXJlY3RQYXRoLGVyck1zZyxoYW5kbGVTdWJtaXR9KSA9PiB7XG4gIGxldCB1c2VybmFtZSxwYXNzd29yZFxuICBjb25zb2xlLmxvZyhcInJlbmRlciBMb2dpbkZvcm1cIilcbiAgY29uc29sZS5sb2coaXNMb2dpblN1Y2NlZWQpXG4gIGNvbnNvbGUubG9nKHJlZGlyZWN0UGF0aClcbiAgY29uc29sZS5sb2coZXJyTXNnKVxuICBjb25zb2xlLmxvZyhoYW5kbGVTdWJtaXQpXG5cbiAgcmV0dXJuIGlzTG9naW5TdWNjZWVkPyg8UmVkaXJlY3QgdG89e3JlZGlyZWN0UGF0aH0gLz4pOihcbiAgICA8ZGl2IGlkPVwibG9naW4tZm9ybS1kaXZcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OighZXJyTXNnPydub25lJzonJyl9fT48c3Bhbj57ZXJyTXNnfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBoYW5kbGVTdWJtaXQodXNlcm5hbWUudmFsdWUscGFzc3dvcmQudmFsdWUpXG4gICAgICB9fT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXIgSUQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlZj17bm9kZT0+e3VzZXJuYW1lPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5wYXNzd29yZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHJlZj17bm9kZT0+e3Bhc3N3b3JkPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5yZXNldDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==