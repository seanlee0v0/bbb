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
  var handleSubmit = _ref.handleSubmit;

  var username = void 0,
      password = void 0;
  return _react2.default.createElement(
    "div",
    { id: "login-form-div" },
    _react2.default.createElement(
      "form",
      { name: "login-form", onSubmit: function onSubmit(e) {
          e.preventDefault();
          undefined.props.handleSubmit();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDg3ZCJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJoYW5kbGVTdWJtaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQW9CO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFDcEMsTUFBSUMsaUJBQUo7QUFBQSxNQUFhQyxpQkFBYjtBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQSxRQUFNLE1BQUssWUFBWCxFQUF3QixVQUFVLGtCQUFDQyxDQUFELEVBQU87QUFDdkNBLFlBQUVDLGNBQUY7QUFDQSxvQkFBS0MsS0FBTCxDQUFXTCxZQUFYO0FBQ0QsU0FIRDtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLEtBQUssbUJBQU07QUFBQ0MsNkJBQVNLLElBQVQ7QUFBYyxpQkFBN0Q7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJLHVEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLEtBQUssbUJBQU07QUFBQ0osNkJBQVNJLElBQVQ7QUFBYyxpQkFBakU7QUFBSixhQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBSEYsV0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBQUosYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLE9BQWI7QUFBQTtBQUFBO0FBQUosYUFGRjtBQUdFO0FBSEY7QUFYRjtBQURGO0FBSkY7QUFERixHQURGO0FBNEJELENBOUJEOztrQkFnQ2VQLFMiLCJmaWxlIjoiMC5iZTdjOThjNTIzYTIxY2FmMzI1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoe2hhbmRsZVN1Ym1pdH0pID0+IHtcbiAgbGV0IHVzZXJuYW1lLHBhc3N3b3JkXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxvZ2luLWZvcm0tZGl2XCI+XG4gICAgICA8Zm9ybSBuYW1lPVwibG9naW4tZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQoKVxuICAgICAgfX0+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5Vc2VyIElEOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiByZWY9e25vZGU9Pnt1c2VybmFtZT1ub2RlfX0vPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48c3Bhbj4qPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+cGFzc3dvcmQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiByZWY9e25vZGU9PntwYXNzd29yZD1ub2RlfX0vPjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48c3Bhbj4qPC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cInJlc2V0XCI+cmVzZXQ8L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=