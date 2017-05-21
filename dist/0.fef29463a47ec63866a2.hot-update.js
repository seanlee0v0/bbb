webpackHotUpdate(0,{

/***/ "./src/components/Home.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _MenuTree = __webpack_require__("./src/components/MenuTree.js");

var _MenuTree2 = _interopRequireDefault(_MenuTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'Welcome Home!',
    _react2.default.createElement(_MenuTree2.default, { tree: [{ name: "M1" }, { name: "M2" }], onClick: function onClick(node) {
        console.log(node);
      } })
  );
};

exports.default = Home;

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzPzJjNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudVRyZWUuanM/Y2FlMiJdLCJuYW1lcyI6WyJIb21lIiwibmFtZSIsIm5vZGUiLCJjb25zb2xlIiwibG9nIiwiTWVudVRyZWUiLCJ0cmVlIiwib25DbGljayIsIm1hcCIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsU0FDWDtBQUFBO0FBQUE7QUFBQTtBQUVFLHdEQUFVLE1BQU0sQ0FBQyxFQUFDQyxNQUFLLElBQU4sRUFBRCxFQUFhLEVBQUNBLE1BQUssSUFBTixFQUFiLENBQWhCLEVBQTJDLFNBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUFDQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQWtCLE9BQWpGO0FBRkYsR0FEVztBQUFBLENBQWI7O2tCQVFlRixJOzs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7Ozs7QUFFQSxJQUFNSyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxNQUFPQyxRQUFQLFFBQU9BLE9BQVA7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNHRCxTQUFLRSxHQUFMLENBQVM7QUFBQSxhQUNSO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxZQUFHLFNBQ0wsaUJBQUNDLENBQUQsRUFBTztBQUNMQSxnQkFBRUMsY0FBRjtBQUNBSCx1QkFBUUwsSUFBUjtBQUNELGFBSkM7QUFLREEsZUFBS0Q7QUFMSjtBQUFKLE9BRFE7QUFBQSxLQUFUO0FBREgsR0FEZTtBQUFBLENBQWpCOztrQkFhZUksUSIsImZpbGUiOiIwLmZlZjI5NDYzYTQ3ZWM2Mzg2NmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVudVRyZWUgZnJvbSAnLi9NZW51VHJlZSdcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgV2VsY29tZSBIb21lIVxuICAgIDxNZW51VHJlZSB0cmVlPXtbe25hbWU6XCJNMVwifSx7bmFtZTpcIk0yXCJ9XX0gb25DbGljaz17KG5vZGUpID0+IHtjb25zb2xlLmxvZyhub2RlKX19Lz5cbiAgPC9kaXY+XG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTWVudVRyZWUgPSAoe3RyZWUsb25DbGlja30pID0+IChcbiAgPHVsPlxuICAgIHt0cmVlLm1hcChub2RlID0+IChcbiAgICAgIDxsaT48YSBvbkNsaWNrPXtcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBvbkNsaWNrKG5vZGUpXG4gICAgICAgIH1cbiAgICAgIH0+e25vZGUubmFtZX08L2E+PC9saT5cbiAgICApKX1cbiAgPC91bD5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWVudVRyZWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01lbnVUcmVlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==