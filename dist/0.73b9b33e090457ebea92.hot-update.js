webpackHotUpdate(0,{

/***/ "./src/components/LoginForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var isLoginSucceed = _ref.isLoginSucceed,
      handleSubmit = _ref.handleSubmit;

  var username = void 0,
      password = void 0;
  console.log("render LoginForm");
  return _react2.default.createElement(
    "div",
    { id: "login-form-div" },
    _react2.default.createElement(
      "form",
      { name: "login-form", onSubmit: function onSubmit(e) {
          e.preventDefault();
          handleSubmit(username.value, password.value);
        } },
      _react2.default.createElement(
        "table",
        null,
        _react2.default.createElement(
          "tbody",
          null,
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              "User ID:"
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement("input", { type: "text", name: "username", ref: function ref(node) {
                  username = node;
                } })
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "span",
                null,
                "*"
              )
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              "password:"
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement("input", { type: "password", name: "password", ref: function ref(node) {
                  password = node;
                } })
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "span",
                null,
                "*"
              )
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "button",
                { type: "submit" },
                "submit"
              )
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "button",
                { type: "reset" },
                "reset"
              )
            ),
            _react2.default.createElement("td", null)
          )
        )
      )
    )
  );
};

exports.default = LoginForm;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJpc0xvZ2luU3VjY2VlZCIsImhhbmRsZVN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQW1DO0FBQUEsTUFBakNDLGNBQWlDLFFBQWpDQSxjQUFpQztBQUFBLE1BQWxCQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQ25ELE1BQUlDLGlCQUFKO0FBQUEsTUFBYUMsaUJBQWI7QUFDQUMsVUFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBSyxJQUFHLGdCQUFSO0FBQ0U7QUFBQTtBQUFBLFFBQU0sTUFBSyxZQUFYLEVBQXdCLFVBQVUsa0JBQUNDLENBQUQsRUFBTztBQUN2Q0EsWUFBRUMsY0FBRjtBQUNBTix1QkFBYUMsU0FBU00sS0FBdEIsRUFBNEJMLFNBQVNLLEtBQXJDO0FBQ0QsU0FIRDtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLEtBQUssbUJBQU07QUFBQ04sNkJBQVNPLElBQVQ7QUFBYyxpQkFBN0Q7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLEtBQUssbUJBQU07QUFBQ04sNkJBQVNNLElBQVQ7QUFBYyxpQkFBakU7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBQUosYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLE9BQWI7QUFBQTtBQUFBO0FBQUosYUFGRjtBQUdFO0FBSEY7QUFYRjtBQURGO0FBSkY7QUFERixHQURGO0FBNEJELENBL0JEOztrQkFpQ2VWLFMiLCJmaWxlIjoiMC43M2I5YjMzZTA5MDQ1N2ViZWE5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoe2lzTG9naW5TdWNjZWVkLGhhbmRsZVN1Ym1pdH0pID0+IHtcbiAgbGV0IHVzZXJuYW1lLHBhc3N3b3JkXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyIExvZ2luRm9ybVwiKVxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJsb2dpbi1mb3JtLWRpdlwiPlxuICAgICAgPGZvcm0gbmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGhhbmRsZVN1Ym1pdCh1c2VybmFtZS52YWx1ZSxwYXNzd29yZC52YWx1ZSlcbiAgICAgIH19PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+VXNlciBJRDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcmVmPXtub2RlPT57dXNlcm5hbWU9bm9kZX19Lz48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PHNwYW4+Kjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPnBhc3N3b3JkOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVmPXtub2RlPT57cGFzc3dvcmQ9bm9kZX19Lz48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PHNwYW4+Kjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJyZXNldFwiPnJlc2V0PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwic291cmNlUm9vdCI6IiJ9