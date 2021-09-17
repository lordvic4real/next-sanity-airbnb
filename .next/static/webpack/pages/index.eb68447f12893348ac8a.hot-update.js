webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanity */ "./sanity.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./utils.js");
/* harmony import */ var _components_DashboardMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DashboardMap */ "./components/DashboardMap.js");



var _jsxFileName = "C:\\airbnb-sanity-frontend-main\\pages\\index.js",
    _this = undefined;






var Home = function Home(_ref) {
  var properties = _ref.properties;
  // console.log(properties)
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: properties && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "feed-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Places Around Abuja"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "feed",
          children: properties.map(function (property) {
            var _property$slug;

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "property/".concat(property === null || property === void 0 ? void 0 : (_property$slug = property.slug) === null || _property$slug === void 0 ? void 0 : _property$slug.current),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: Object(_sanity__WEBPACK_IMPORTED_MODULE_1__["urlFor"])(property.mainImage)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: [property.reviews.length, " review", Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMultiple"])(property.reviews.length)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: property === null || property === void 0 ? void 0 : property.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: ["N", property === null || property === void 0 ? void 0 : property.pricePerNight, "/per Night"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, _this)]
              }, property._id, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "map",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DashboardMap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          properties: properties
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BlcnRpZXMiLCJtYXAiLCJwcm9wZXJ0eSIsInNsdWciLCJjdXJyZW50IiwidXJsRm9yIiwibWFpbkltYWdlIiwicmV2aWV3cyIsImxlbmd0aCIsImlzTXVsdGlwbGUiLCJ0aXRsZSIsInByaWNlUGVyTmlnaHQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDL0I7QUFDQSxzQkFDRTtBQUFBLGNBQ0dBLFVBQVUsaUJBQ1Q7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxvQkFDR0EsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsUUFBRDtBQUFBOztBQUFBLGdDQUNkLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUkscUJBQWNBLFFBQWQsYUFBY0EsUUFBZCx5Q0FBY0EsUUFBUSxDQUFFQyxJQUF4QixtREFBYyxlQUFnQkMsT0FBOUIsQ0FBVjtBQUFBLHFDQUNFO0FBQXdCLHlCQUFTLEVBQUMsTUFBbEM7QUFBQSx3Q0FDRTtBQUFLLHFCQUFHLEVBQUVDLHNEQUFNLENBQUNILFFBQVEsQ0FBQ0ksU0FBVjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSw2QkFDR0osUUFBUSxDQUFDSyxPQUFULENBQWlCQyxNQURwQixhQUVHQyx5REFBVSxDQUFDUCxRQUFRLENBQUNLLE9BQVQsQ0FBaUJDLE1BQWxCLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBTUU7QUFBQSw0QkFBS04sUUFBTCxhQUFLQSxRQUFMLHVCQUFLQSxRQUFRLENBQUVRO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORixlQU9FO0FBQUEseUNBQ0U7QUFBQSxvQ0FBS1IsUUFBTCxhQUFLQSxRQUFMLHVCQUFLQSxRQUFRLENBQUVTLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRjtBQUFBLGlCQUFVVCxRQUFRLENBQUNVLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDRSxxRUFBQyxnRUFBRDtBQUFjLG9CQUFVLEVBQUVaO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBK0JELENBakNEOztLQUFNRCxJOztBQXNEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWI2ODQ0N2YxMjg5MzM0OGFjOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uL3Nhbml0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgaXNNdWx0aXBsZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IERhc2hib2FyZE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmRNYXBcIjtcblxuY29uc3QgSG9tZSA9ICh7IHByb3BlcnRpZXMgfSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcGVydGllcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5QbGFjZXMgQXJvdW5kIEFidWphPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZFwiPlxuICAgICAgICAgICAgICB7cHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YHByb3BlcnR5LyR7cHJvcGVydHk/LnNsdWc/LmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvcGVydHkuX2lkfSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IocHJvcGVydHkubWFpbkltYWdlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb3BlcnR5LnJldmlld3MubGVuZ3RofSByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICB7aXNNdWx0aXBsZShwcm9wZXJ0eS5yZXZpZXdzLmxlbmd0aCl9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntwcm9wZXJ0eT8udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPk57cHJvcGVydHk/LnByaWNlUGVyTmlnaHR9L3BlciBOaWdodDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuICAgICAgICAgICAgPERhc2hib2FyZE1hcCBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9ICcqWyBfdHlwZSA9PSBcInByb3BlcnR5XCJdJztcbiAgY29uc3QgcHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XG5cbiAgaWYgKCFwcm9wZXJ0aWVzPy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcHJvcGVydGllczogW10sXG4gICAgICB9LFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9