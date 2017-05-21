webpackHotUpdate(0,{

/***/ "./src/components/MenuTree.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuTree = function MenuTree(_ref) {
  var tree = _ref.tree,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'ul',
    null,
    tree.map(function (node) {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { onClick: function onClick(e) {
              e.preventDefault();
              _onClick(node);
            } },
          node.name
        )
      );
    })
  );
};

exports.default = MenuTree;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51VHJlZS5qcz9jYWUyIl0sIm5hbWVzIjpbIk1lbnVUcmVlIiwidHJlZSIsIm9uQ2xpY2siLCJtYXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJub2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQU9DLFFBQVAsUUFBT0EsT0FBUDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQ0dELFNBQUtFLEdBQUwsQ0FBUztBQUFBLGFBQ1I7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFlBQUcsU0FDTCxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ0xBLGdCQUFFQyxjQUFGO0FBQ0FILHVCQUFRSSxJQUFSO0FBQ0QsYUFKQztBQUtEQSxlQUFLQztBQUxKO0FBQUosT0FEUTtBQUFBLEtBQVQ7QUFESCxHQURlO0FBQUEsQ0FBakI7O2tCQWFlUCxRIiwiZmlsZSI6IjAuNDZjNjAyYWQwNDhiYTdhNDkwMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTWVudVRyZWUgPSAoe3RyZWUsb25DbGlja30pID0+IChcbiAgPHVsPlxuICAgIHt0cmVlLm1hcChub2RlID0+IChcbiAgICAgIDxsaT48YSBvbkNsaWNrPXtcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBvbkNsaWNrKG5vZGUpXG4gICAgICAgIH1cbiAgICAgIH0+e25vZGUubmFtZX08L2E+PC9saT5cbiAgICApKX1cbiAgPC91bD5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWVudVRyZWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01lbnVUcmVlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==