webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DashboardMap.js":
/*!************************************!*\
  !*** ./components/DashboardMap.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_airbnb_sanity_frontend_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");




var _jsxFileName = "C:\\airbnb-sanity-frontend-main\\components\\DashboardMap.js",
    _this = undefined,
    _s = $RefreshSig$();




var DashboardMap = function DashboardMap(_ref) {
  _s();

  var _properties$0$locatio, _properties$0$locatio2, _properties$0$locatio3, _properties$0$locatio4;

  var properties = _ref.properties;

  var _useJsApiLoader = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["useJsApiLoader"])({
    id: "google-map-script",
    googleMapsApiKey: process.env.googlePlacesAPI
  }),
      isLoaded = _useJsApiLoader.isLoaded;

  console.log((_properties$0$locatio = properties[0].location) === null || _properties$0$locatio === void 0 ? void 0 : _properties$0$locatio.lat);
  console.log((_properties$0$locatio2 = properties[0].location) === null || _properties$0$locatio2 === void 0 ? void 0 : _properties$0$locatio2.lat);
  var containerStyle = {
    width: "100%",
    height: "100vh"
  };
  var center = {
    lat: (_properties$0$locatio3 = properties[0].location) === null || _properties$0$locatio3 === void 0 ? void 0 : _properties$0$locatio3.lat,
    lng: (_properties$0$locatio4 = properties[0].location) === null || _properties$0$locatio4 === void 0 ? void 0 : _properties$0$locatio4.lng
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(C_airbnb_sanity_frontend_main_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      map = _React$useState2[0],
      setMap = _React$useState2[1];

  var onLoad = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function callback(map) {
    var bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  var onUnmount = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function callback(map) {
    setMap(null);
  }, []);
  var image = "https://goo.gl/maps/NunYsazmNC9FBzY8A";
  return isLoaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
    mapContainerStyle: containerStyle,
    center: center,
    zoom: 10,
    onLoad: onLoad,
    onUnmount: onUnmount,
    children: [properties && properties.map(function (property, index) {
      var _property$location, _property$location2;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
        position: {
          lat: property === null || property === void 0 ? void 0 : (_property$location = property.location) === null || _property$location === void 0 ? void 0 : _property$location.lat,
          lng: property === null || property === void 0 ? void 0 : (_property$location2 = property.location) === null || _property$location2 === void 0 ? void 0 : _property$location2.lng
        },
        icon: {
          url: image,
          anchor: new google.maps.Point(5, 58)
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
};

_s(DashboardMap, "sc/DS85Udqb0HC94DVNruSImuio=", false, function () {
  return [_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__["useJsApiLoader"]];
});

_c = DashboardMap;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(DashboardMap));

var _c, _c2;

$RefreshReg$(_c, "DashboardMap");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmRNYXAuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkTWFwIiwicHJvcGVydGllcyIsInVzZUpzQXBpTG9hZGVyIiwiaWQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsImdvb2dsZVBsYWNlc0FQSSIsImlzTG9hZGVkIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwibGF0IiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNlbnRlciIsImxuZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJtYXAiLCJzZXRNYXAiLCJvbkxvYWQiLCJ1c2VDYWxsYmFjayIsImNhbGxiYWNrIiwiYm91bmRzIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIkxhdExuZ0JvdW5kcyIsImZpdEJvdW5kcyIsIm9uVW5tb3VudCIsImltYWdlIiwicHJvcGVydHkiLCJpbmRleCIsInVybCIsImFuY2hvciIsIlBvaW50IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLHdCQUNsQkMsNkVBQWMsQ0FBQztBQUNsQ0MsTUFBRSxFQUFFLG1CQUQ4QjtBQUVsQ0Msb0JBQWdCLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUZJLEdBQUQsQ0FESTtBQUFBLE1BQy9CQyxRQUQrQixtQkFDL0JBLFFBRCtCOztBQU12Q0MsU0FBTyxDQUFDQyxHQUFSLDBCQUFZVCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFFBQTFCLDBEQUFZLHNCQUF3QkMsR0FBcEM7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLDJCQUFZVCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFFBQTFCLDJEQUFZLHVCQUF3QkMsR0FBcEM7QUFDQSxNQUFNQyxjQUFjLEdBQUc7QUFDckJDLFNBQUssRUFBRSxNQURjO0FBRXJCQyxVQUFNLEVBQUU7QUFGYSxHQUF2QjtBQUtBLE1BQU1DLE1BQU0sR0FBRztBQUNiSixPQUFHLDRCQUFFWCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFFBQWhCLDJEQUFFLHVCQUF3QkMsR0FEaEI7QUFFYkssT0FBRyw0QkFBRWhCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1UsUUFBaEIsMkRBQUUsdUJBQXdCTTtBQUZoQixHQUFmOztBQWJ1Qyx3QkFrQmpCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQWxCaUI7QUFBQTtBQUFBLE1Ba0JoQ0MsR0FsQmdDO0FBQUEsTUFrQjNCQyxNQWxCMkI7O0FBb0J2QyxNQUFNQyxNQUFNLEdBQUdKLDRDQUFLLENBQUNLLFdBQU4sQ0FBa0IsU0FBU0MsUUFBVCxDQUFrQkosR0FBbEIsRUFBdUI7QUFDdEQsUUFBTUssTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxZQUF2QixFQUFmO0FBQ0FULE9BQUcsQ0FBQ1UsU0FBSixDQUFjTCxNQUFkO0FBQ0FKLFVBQU0sQ0FBQ0QsR0FBRCxDQUFOO0FBQ0QsR0FKYyxFQUlaLEVBSlksQ0FBZjtBQU1BLE1BQU1XLFNBQVMsR0FBR2IsNENBQUssQ0FBQ0ssV0FBTixDQUFrQixTQUFTQyxRQUFULENBQWtCSixHQUFsQixFQUF1QjtBQUN6REMsVUFBTSxDQUFDLElBQUQsQ0FBTjtBQUNELEdBRmlCLEVBRWYsRUFGZSxDQUFsQjtBQUlBLE1BQU1XLEtBQUssR0FBRyx1Q0FBZDtBQUVBLFNBQU94QixRQUFRLGdCQUNiLHFFQUFDLGdFQUFEO0FBQ0UscUJBQWlCLEVBQUVLLGNBRHJCO0FBRUUsVUFBTSxFQUFFRyxNQUZWO0FBR0UsUUFBSSxFQUFFLEVBSFI7QUFJRSxVQUFNLEVBQUVNLE1BSlY7QUFLRSxhQUFTLEVBQUVTLFNBTGI7QUFBQSxlQU9HOUIsVUFBVSxJQUNUQSxVQUFVLENBQUNtQixHQUFYLENBQWUsVUFBQ2EsUUFBRCxFQUFXQyxLQUFYO0FBQUE7O0FBQUEsMEJBQ2IscUVBQUMsNkRBQUQ7QUFDRSxnQkFBUSxFQUFFO0FBQ1J0QixhQUFHLEVBQUVxQixRQUFGLGFBQUVBLFFBQUYsNkNBQUVBLFFBQVEsQ0FBRXRCLFFBQVosdURBQUUsbUJBQW9CQyxHQURqQjtBQUVSSyxhQUFHLEVBQUVnQixRQUFGLGFBQUVBLFFBQUYsOENBQUVBLFFBQVEsQ0FBRXRCLFFBQVosd0RBQUUsb0JBQW9CTTtBQUZqQixTQURaO0FBS0UsWUFBSSxFQUFFO0FBQ0prQixhQUFHLEVBQUVILEtBREQ7QUFFSkksZ0JBQU0sRUFBRSxJQUFJVCxNQUFNLENBQUNDLElBQVAsQ0FBWVMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsRUFBekI7QUFGSjtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWYsQ0FSSixlQW9CRSx1SkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGEsZ0JBd0JiLHVKQXhCRjtBQTBCRCxDQTFERDs7R0FBTXJDLFk7VUFDaUJFLHFFOzs7S0FEakJGLFk7QUE0RFMsa0ZBQUFrQiw0Q0FBSyxDQUFDb0IsSUFBTixDQUFXdEMsWUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNkYjdjNzkxYmI3YjFhNDQwYjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIHVzZUpzQXBpTG9hZGVyLCBNYXJrZXIgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuXG5jb25zdCBEYXNoYm9hcmRNYXAgPSAoeyBwcm9wZXJ0aWVzIH0pID0+IHtcbiAgY29uc3QgeyBpc0xvYWRlZCB9ID0gdXNlSnNBcGlMb2FkZXIoe1xuICAgIGlkOiBcImdvb2dsZS1tYXAtc2NyaXB0XCIsXG4gICAgZ29vZ2xlTWFwc0FwaUtleTogcHJvY2Vzcy5lbnYuZ29vZ2xlUGxhY2VzQVBJLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzWzBdLmxvY2F0aW9uPy5sYXQpO1xuICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzWzBdLmxvY2F0aW9uPy5sYXQpO1xuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIH07XG5cbiAgY29uc3QgY2VudGVyID0ge1xuICAgIGxhdDogcHJvcGVydGllc1swXS5sb2NhdGlvbj8ubGF0LFxuICAgIGxuZzogcHJvcGVydGllc1swXS5sb2NhdGlvbj8ubG5nLFxuICB9O1xuXG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvbkxvYWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiBjYWxsYmFjayhtYXApIHtcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgIG1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICBzZXRNYXAobWFwKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVW5tb3VudCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIGNhbGxiYWNrKG1hcCkge1xuICAgIHNldE1hcChudWxsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGltYWdlID0gXCJodHRwczovL2dvby5nbC9tYXBzL051bllzYXptTkM5RkJ6WThBXCI7XG5cbiAgcmV0dXJuIGlzTG9hZGVkID8gKFxuICAgIDxHb29nbGVNYXBcbiAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgIGNlbnRlcj17Y2VudGVyfVxuICAgICAgem9vbT17MTB9XG4gICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgIG9uVW5tb3VudD17b25Vbm1vdW50fVxuICAgID5cbiAgICAgIHtwcm9wZXJ0aWVzICYmXG4gICAgICAgIHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgICBsYXQ6IHByb3BlcnR5Py5sb2NhdGlvbj8ubGF0LFxuICAgICAgICAgICAgICBsbmc6IHByb3BlcnR5Py5sb2NhdGlvbj8ubG5nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGljb249e3tcbiAgICAgICAgICAgICAgdXJsOiBpbWFnZSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoNSwgNTgpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDw+PC8+XG4gICAgPC9Hb29nbGVNYXA+XG4gICkgOiAoXG4gICAgPD48Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRGFzaGJvYXJkTWFwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=