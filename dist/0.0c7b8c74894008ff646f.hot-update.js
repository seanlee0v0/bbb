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

var LoginForm = function LoginForm(handleSubmit) {
  var username = void 0,
      password = void 0;
  return _react2.default.createElement(
    "div",
    { id: "login-form-div" },
    _react2.default.createElement(
      "form",
      { name: "login-form", onSubmit: handleSubmit() },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibm9kZSIsInByb3BzIiwidXNlbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxZQUFELEVBQWtCO0FBQ2xDLE1BQUlDLGlCQUFKO0FBQUEsTUFBYUMsaUJBQWI7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFLLElBQUcsZ0JBQVI7QUFDRTtBQUFBO0FBQUEsUUFBTSxNQUFLLFlBQVgsRUFBd0IsVUFBVUYsY0FBbEM7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxLQUFLLG1CQUFNO0FBQUNDLDZCQUFTRSxJQUFUO0FBQWMsaUJBQTdELEVBQStELE9BQU9DLE1BQU1DLE9BQTVFO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLFdBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSx1REFBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxLQUFLLG1CQUFNO0FBQUNILDZCQUFTQyxJQUFUO0FBQWMsaUJBQWpFO0FBQUosYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUhGLFdBTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUFKLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxPQUFiO0FBQUE7QUFBQTtBQUFKLGFBRkY7QUFHRTtBQUhGO0FBWEY7QUFERjtBQURGO0FBREYsR0FERjtBQXlCRCxDQTNCRDs7a0JBNkJlSixTIiwiZmlsZSI6IjAuMGM3YjhjNzQ4OTQwMDhmZjY0NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9naW5Gb3JtID0gKGhhbmRsZVN1Ym1pdCkgPT4ge1xuICBsZXQgdXNlcm5hbWUscGFzc3dvcmRcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibG9naW4tZm9ybS1kaXZcIj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgpfT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXIgSUQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlZj17bm9kZT0+e3VzZXJuYW1lPW5vZGV9fSB2YWx1ZT17cHJvcHMudXNlbmFtZX0vPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48c3Bhbj4qPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+cGFzc3dvcmQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiByZWY9e25vZGU9PntwYXNzd29yZD1ub2RlfX0vPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48c3Bhbj4qPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cInJlc2V0XCI+cmVzZXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=