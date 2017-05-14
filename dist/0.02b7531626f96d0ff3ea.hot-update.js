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
      { style: { display: !errMsg.trim() ? 'none' : '' } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJpc0xvZ2luU3VjY2VlZCIsInJlZGlyZWN0UGF0aCIsImVyck1zZyIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsInRyaW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksT0FBdUQ7QUFBQSxNQUFyREMsY0FBcUQsUUFBckRBLGNBQXFEO0FBQUEsTUFBdENDLFlBQXNDLFFBQXRDQSxZQUFzQztBQUFBLE1BQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUN2RSxNQUFJQyxpQkFBSjtBQUFBLE1BQWFDLGlCQUFiO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBRCxVQUFRQyxHQUFSLENBQVlQLGNBQVo7QUFDQU0sVUFBUUMsR0FBUixDQUFZTixZQUFaO0FBQ0FLLFVBQVFDLEdBQVIsQ0FBWUwsTUFBWjtBQUNBSSxVQUFRQyxHQUFSLENBQVlKLFlBQVo7O0FBRUEsU0FBT0gsaUJBQWdCLHVEQUFVLElBQUlDLFlBQWQsR0FBaEIsR0FDTDtBQUFBO0FBQUEsTUFBSyxJQUFHLGdCQUFSO0FBQ0U7QUFBQTtBQUFBLFFBQUssT0FBTyxFQUFDTyxTQUFRLENBQUNOLE9BQU9PLElBQVAsRUFBRCxHQUFlLE1BQWYsR0FBc0IsRUFBL0IsRUFBWjtBQUFnRDtBQUFBO0FBQUE7QUFBT1A7QUFBUDtBQUFoRCxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sTUFBSyxZQUFYLEVBQXdCLFVBQVUsa0JBQUNRLENBQUQsRUFBTztBQUN2Q0EsWUFBRUMsY0FBRjtBQUNBUix1QkFBYUMsU0FBU1EsS0FBdEIsRUFBNEJQLFNBQVNPLEtBQXJDO0FBQ0QsU0FIRDtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLEtBQUssbUJBQU07QUFBQ1IsNkJBQVNTLElBQVQ7QUFBYyxpQkFBN0Q7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLEtBQUssbUJBQU07QUFBQ1IsNkJBQVNRLElBQVQ7QUFBYyxpQkFBakU7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBQUosYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLE9BQWI7QUFBQTtBQUFBO0FBQUosYUFGRjtBQUdFO0FBSEY7QUFYRjtBQURGO0FBSkY7QUFGRixHQURGO0FBNkJELENBckNEOztrQkF1Q2VkLFMiLCJmaWxlIjoiMC4wMmI3NTMxNjI2Zjk2ZDBmZjNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoe2lzTG9naW5TdWNjZWVkLHJlZGlyZWN0UGF0aCxlcnJNc2csaGFuZGxlU3VibWl0fSkgPT4ge1xuICBsZXQgdXNlcm5hbWUscGFzc3dvcmRcbiAgY29uc29sZS5sb2coXCJyZW5kZXIgTG9naW5Gb3JtXCIpXG4gIGNvbnNvbGUubG9nKGlzTG9naW5TdWNjZWVkKVxuICBjb25zb2xlLmxvZyhyZWRpcmVjdFBhdGgpXG4gIGNvbnNvbGUubG9nKGVyck1zZylcbiAgY29uc29sZS5sb2coaGFuZGxlU3VibWl0KVxuXG4gIHJldHVybiBpc0xvZ2luU3VjY2VlZD8oPFJlZGlyZWN0IHRvPXtyZWRpcmVjdFBhdGh9IC8+KTooXG4gICAgPGRpdiBpZD1cImxvZ2luLWZvcm0tZGl2XCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTohZXJyTXNnLnRyaW0oKT8nbm9uZSc6Jyd9fT48c3Bhbj57ZXJyTXNnfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBoYW5kbGVTdWJtaXQodXNlcm5hbWUudmFsdWUscGFzc3dvcmQudmFsdWUpXG4gICAgICB9fT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXIgSUQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlZj17bm9kZT0+e3VzZXJuYW1lPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5wYXNzd29yZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHJlZj17bm9kZT0+e3Bhc3N3b3JkPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5yZXNldDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==