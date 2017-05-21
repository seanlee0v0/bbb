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

  return isLoginSucceed ? _react2.default.createElement(_reactRouter.Redirect, { to: redirectPath }) : _react2.default.createElement(
    'div',
    { id: 'login-form-div' },
    _react2.default.createElement(
      'div',
      { id: 'errMsg', style: { display: !errMsg ? 'none' : '' } },
      _react2.default.createElement(
        'span',
        null,
        errMsg
      )
    ),
    _react2.default.createElement(
      'form',
      { id: 'login-form', name: 'login-form', onSubmit: function onSubmit(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJpc0xvZ2luU3VjY2VlZCIsInJlZGlyZWN0UGF0aCIsImVyck1zZyIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQXVEO0FBQUEsTUFBckRDLGNBQXFELFFBQXJEQSxjQUFxRDtBQUFBLE1BQXRDQyxZQUFzQyxRQUF0Q0EsWUFBc0M7QUFBQSxNQUF6QkMsTUFBeUIsUUFBekJBLE1BQXlCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDdkUsTUFBSUMsaUJBQUo7QUFBQSxNQUFhQyxpQkFBYjs7QUFFQSxTQUFPTCxpQkFBZ0IsdURBQVUsSUFBSUMsWUFBZCxHQUFoQixHQUNMO0FBQUE7QUFBQSxNQUFLLElBQUcsZ0JBQVI7QUFDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLFFBQVIsRUFBaUIsT0FBTyxFQUFDSyxTQUFTLENBQUNKLE1BQUQsR0FBUSxNQUFSLEdBQWUsRUFBekIsRUFBeEI7QUFBdUQ7QUFBQTtBQUFBO0FBQU9BO0FBQVA7QUFBdkQsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLElBQUcsWUFBVCxFQUFzQixNQUFLLFlBQTNCLEVBQXdDLFVBQVUsa0JBQUNLLENBQUQsRUFBTztBQUN2REEsWUFBRUMsY0FBRjtBQUNBTCx1QkFBYUMsU0FBU0ssS0FBdEIsRUFBNEJKLFNBQVNJLEtBQXJDO0FBQ0QsU0FIRDtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLEtBQUssbUJBQU07QUFBQ0wsNkJBQVNNLElBQVQ7QUFBYyxpQkFBN0Q7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLEtBQUssbUJBQU07QUFBQ0wsNkJBQVNLLElBQVQ7QUFBYyxpQkFBakU7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBQUosYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLE9BQWI7QUFBQTtBQUFBO0FBQUosYUFGRjtBQUdFO0FBSEY7QUFYRjtBQURGO0FBSkY7QUFGRixHQURGO0FBNkJELENBaENEOztrQkFrQ2VYLFMiLCJmaWxlIjoiMC5iMmY4MDZlMTk1MWUyNjAzMDYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoe2lzTG9naW5TdWNjZWVkLHJlZGlyZWN0UGF0aCxlcnJNc2csaGFuZGxlU3VibWl0fSkgPT4ge1xuICBsZXQgdXNlcm5hbWUscGFzc3dvcmRcblxuICByZXR1cm4gaXNMb2dpblN1Y2NlZWQ/KDxSZWRpcmVjdCB0bz17cmVkaXJlY3RQYXRofSAvPik6KFxuICAgIDxkaXYgaWQ9XCJsb2dpbi1mb3JtLWRpdlwiPlxuICAgICAgPGRpdiBpZD1cImVyck1zZ1wiIHN0eWxlPXt7ZGlzcGxheTooIWVyck1zZz8nbm9uZSc6JycpfX0+PHNwYW4+e2Vyck1zZ308L3NwYW4+PC9kaXY+XG4gICAgICA8Zm9ybSBpZD1cImxvZ2luLWZvcm1cIiBuYW1lPVwibG9naW4tZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaGFuZGxlU3VibWl0KHVzZXJuYW1lLnZhbHVlLHBhc3N3b3JkLnZhbHVlKVxuICAgICAgfX0+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Vc2VyIElEOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiByZWY9e25vZGU9Pnt1c2VybmFtZT1ub2RlfX0vPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48c3Bhbj4qPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+cGFzc3dvcmQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiByZWY9e25vZGU9PntwYXNzd29yZD1ub2RlfX0vPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48c3Bhbj4qPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cInJlc2V0XCI+cmVzZXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=