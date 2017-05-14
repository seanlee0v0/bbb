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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJpc0xvZ2luU3VjY2VlZCIsInJlZGlyZWN0UGF0aCIsImVyck1zZyIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQXVEO0FBQUEsTUFBckRDLGNBQXFELFFBQXJEQSxjQUFxRDtBQUFBLE1BQXRDQyxZQUFzQyxRQUF0Q0EsWUFBc0M7QUFBQSxNQUF6QkMsTUFBeUIsUUFBekJBLE1BQXlCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDdkUsTUFBSUMsaUJBQUo7QUFBQSxNQUFhQyxpQkFBYjtBQUNBQyxVQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDQUQsVUFBUUMsR0FBUixDQUFZUCxjQUFaO0FBQ0FNLFVBQVFDLEdBQVIsQ0FBWU4sWUFBWjtBQUNBSyxVQUFRQyxHQUFSLENBQVlMLE1BQVo7QUFDQUksVUFBUUMsR0FBUixDQUFZSixZQUFaOztBQUVBLFNBQU9ILGlCQUFnQix1REFBVSxJQUFJQyxZQUFkLEdBQWhCLEdBQ0w7QUFBQTtBQUFBLE1BQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQSxRQUFNLE1BQUssWUFBWCxFQUF3QixVQUFVLGtCQUFDTyxDQUFELEVBQU87QUFDdkNBLFlBQUVDLGNBQUY7QUFDQU4sdUJBQWFDLFNBQVNNLEtBQXRCLEVBQTRCTCxTQUFTSyxLQUFyQztBQUNELFNBSEQ7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxLQUFLLG1CQUFNO0FBQUNOLDZCQUFTTyxJQUFUO0FBQWMsaUJBQTdEO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSx1REFBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxLQUFLLG1CQUFNO0FBQUNOLDZCQUFTTSxJQUFUO0FBQWMsaUJBQWpFO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLFdBTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUFKLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxPQUFiO0FBQUE7QUFBQTtBQUFKLGFBRkY7QUFHRTtBQUhGO0FBWEY7QUFERjtBQUpGO0FBREYsR0FERjtBQTRCRCxDQXBDRDs7a0JBc0NlWixTIiwiZmlsZSI6IjAuN2FhYWFiMjZhYTllMzc1NzVlMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgTG9naW5Gb3JtID0gKHtpc0xvZ2luU3VjY2VlZCxyZWRpcmVjdFBhdGgsZXJyTXNnLGhhbmRsZVN1Ym1pdH0pID0+IHtcbiAgbGV0IHVzZXJuYW1lLHBhc3N3b3JkXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyIExvZ2luRm9ybVwiKVxuICBjb25zb2xlLmxvZyhpc0xvZ2luU3VjY2VlZClcbiAgY29uc29sZS5sb2cocmVkaXJlY3RQYXRoKVxuICBjb25zb2xlLmxvZyhlcnJNc2cpXG4gIGNvbnNvbGUubG9nKGhhbmRsZVN1Ym1pdClcblxuICByZXR1cm4gaXNMb2dpblN1Y2NlZWQ/KDxSZWRpcmVjdCB0bz17cmVkaXJlY3RQYXRofSAvPik6KFxuICAgIDxkaXYgaWQ9XCJsb2dpbi1mb3JtLWRpdlwiPlxuICAgICAgPGZvcm0gbmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGhhbmRsZVN1Ym1pdCh1c2VybmFtZS52YWx1ZSxwYXNzd29yZC52YWx1ZSlcbiAgICAgIH19PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+VXNlciBJRDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcmVmPXtub2RlPT57dXNlcm5hbWU9bm9kZX19Lz48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PHNwYW4+Kjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPnBhc3N3b3JkOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVmPXtub2RlPT57cGFzc3dvcmQ9bm9kZX19Lz48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PHNwYW4+Kjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJyZXNldFwiPnJlc2V0PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwic291cmNlUm9vdCI6IiJ9