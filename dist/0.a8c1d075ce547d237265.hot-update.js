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
      { name: "login-form", onSubmit: function onSubmit(e) {
          e.preventDefault();
          handleSubmit();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxZQUFELEVBQWtCO0FBQ2xDLE1BQUlDLGlCQUFKO0FBQUEsTUFBYUMsaUJBQWI7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFLLElBQUcsZ0JBQVI7QUFDRTtBQUFBO0FBQUEsUUFBTSxNQUFLLFlBQVgsRUFBd0IsVUFBVSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ3ZDQSxZQUFFQyxjQUFGO0FBQ0FKO0FBQ0QsU0FIRDtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLEtBQUssbUJBQU07QUFBQ0MsNkJBQVNJLElBQVQ7QUFBYyxpQkFBN0Q7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLEtBQUssbUJBQU07QUFBQ0gsNkJBQVNHLElBQVQ7QUFBYyxpQkFBakU7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBQUosYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLE9BQWI7QUFBQTtBQUFBO0FBQUosYUFGRjtBQUdFO0FBSEY7QUFYRjtBQURGO0FBSkY7QUFERixHQURGO0FBNEJELENBOUJEOztrQkFnQ2VOLFMiLCJmaWxlIjoiMC5hOGMxZDA3NWNlNTQ3ZDIzNzI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoaGFuZGxlU3VibWl0KSA9PiB7XG4gIGxldCB1c2VybmFtZSxwYXNzd29yZFxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJsb2dpbi1mb3JtLWRpdlwiPlxuICAgICAgPGZvcm0gbmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGhhbmRsZVN1Ym1pdCgpXG4gICAgICB9fT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlVzZXIgSUQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlZj17bm9kZT0+e3VzZXJuYW1lPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5wYXNzd29yZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHJlZj17bm9kZT0+e3Bhc3N3b3JkPW5vZGV9fS8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxzcGFuPio8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5yZXNldDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==