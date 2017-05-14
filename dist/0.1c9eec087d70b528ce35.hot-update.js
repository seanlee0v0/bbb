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
  console.log(handleSubmit);

  return isLoginSucceed ? _react2.default.createElement(_reactRouter.Redirect, { to: redirectPath }) : _react2.default.createElement(
    'div',
    { id: 'login-form-div' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJpc0xvZ2luU3VjY2VlZCIsInJlZGlyZWN0UGF0aCIsImVyck1zZyIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQXVEO0FBQUEsTUFBckRDLGNBQXFELFFBQXJEQSxjQUFxRDtBQUFBLE1BQXRDQyxZQUFzQyxRQUF0Q0EsWUFBc0M7QUFBQSxNQUF6QkMsTUFBeUIsUUFBekJBLE1BQXlCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDdkUsTUFBSUMsaUJBQUo7QUFBQSxNQUFhQyxpQkFBYjtBQUNBQyxVQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDQUQsVUFBUUMsR0FBUixDQUFZSixZQUFaOztBQUVBLFNBQU9ILGlCQUFnQix1REFBVSxJQUFJQyxZQUFkLEdBQWhCLEdBQ0w7QUFBQTtBQUFBLE1BQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQSxRQUFNLE1BQUssWUFBWCxFQUF3QixVQUFVLGtCQUFDTyxDQUFELEVBQU87QUFDdkNBLFlBQUVDLGNBQUY7QUFDQU4sdUJBQWFDLFNBQVNNLEtBQXRCLEVBQTRCTCxTQUFTSyxLQUFyQztBQUNELFNBSEQ7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxLQUFLLG1CQUFNO0FBQUNOLDZCQUFTTyxJQUFUO0FBQWMsaUJBQTdEO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSx1REFBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxLQUFLLG1CQUFNO0FBQUNOLDZCQUFTTSxJQUFUO0FBQWMsaUJBQWpFO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLFdBTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUFKLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxPQUFiO0FBQUE7QUFBQTtBQUFKLGFBRkY7QUFHRTtBQUhGO0FBWEY7QUFERjtBQUpGO0FBREYsR0FERjtBQTRCRCxDQWpDRDs7a0JBbUNlWixTIiwiZmlsZSI6IjAuMWM5ZWVjMDg3ZDcwYjUyOGNlMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgTG9naW5Gb3JtID0gKHtpc0xvZ2luU3VjY2VlZCxyZWRpcmVjdFBhdGgsZXJyTXNnLGhhbmRsZVN1Ym1pdH0pID0+IHtcbiAgbGV0IHVzZXJuYW1lLHBhc3N3b3JkXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyIExvZ2luRm9ybVwiKVxuICBjb25zb2xlLmxvZyhoYW5kbGVTdWJtaXQpXG5cbiAgcmV0dXJuIGlzTG9naW5TdWNjZWVkPyg8UmVkaXJlY3QgdG89e3JlZGlyZWN0UGF0aH0gLz4pOihcbiAgICA8ZGl2IGlkPVwibG9naW4tZm9ybS1kaXZcIj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBoYW5kbGVTdWJtaXQodXNlcm5hbWUudmFsdWUscGFzc3dvcmQudmFsdWUpXG4gICAgICB9fT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXIgSUQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlZj17bm9kZT0+e3VzZXJuYW1lPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5wYXNzd29yZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHJlZj17bm9kZT0+e3Bhc3N3b3JkPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5yZXNldDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==