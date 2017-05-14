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

var LoginForm = function LoginForm(onSubmit) {
  var username = void 0,
      password = void 0;
  return _react2.default.createElement(
    "div",
    { id: "login-form-div" },
    _react2.default.createElement(
      "form",
      { name: "login-form", onSubmit: onSubmit() },
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
                }, value: props.usename })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJvblN1Ym1pdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJub2RlIiwicHJvcHMiLCJ1c2VuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLFFBQUQsRUFBYztBQUM5QixNQUFJQyxpQkFBSjtBQUFBLE1BQWFDLGlCQUFiO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBSyxJQUFHLGdCQUFSO0FBQ0U7QUFBQTtBQUFBLFFBQU0sTUFBSyxZQUFYLEVBQXdCLFVBQVVGLFVBQWxDO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsS0FBSyxtQkFBTTtBQUFDQyw2QkFBU0UsSUFBVDtBQUFjLGlCQUE3RCxFQUErRCxPQUFPQyxNQUFNQyxPQUE1RTtBQUFKLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFIRixXQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksdURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsS0FBSyxtQkFBTTtBQUFDSCw2QkFBU0MsSUFBVDtBQUFjLGlCQUFqRTtBQUFKLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFIRixXQU5GO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUE7QUFBSixhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFRLE1BQUssT0FBYjtBQUFBO0FBQUE7QUFBSixhQUZGO0FBR0U7QUFIRjtBQVhGO0FBREY7QUFERjtBQURGLEdBREY7QUF5QkQsQ0EzQkQ7O2tCQTZCZUosUyIsImZpbGUiOiIwLmYxY2QyNDdlMDEzYThiYTAzOTM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IExvZ2luRm9ybSA9IChvblN1Ym1pdCkgPT4ge1xuICBsZXQgdXNlcm5hbWUscGFzc3dvcmRcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibG9naW4tZm9ybS1kaXZcIj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9e29uU3VibWl0KCl9PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+VXNlciBJRDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcmVmPXtub2RlPT57dXNlcm5hbWU9bm9kZX19IHZhbHVlPXtwcm9wcy51c2VuYW1lfS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5wYXNzd29yZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHJlZj17bm9kZT0+e3Bhc3N3b3JkPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5yZXNldDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==