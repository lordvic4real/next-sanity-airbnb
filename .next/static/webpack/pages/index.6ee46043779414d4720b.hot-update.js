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
    googleMapsApiKey: process.env.googlePlacesAPI // googleMapsApiKey: process.env.googlePlacesAPI,

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
        lineNumber: 47,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmRNYXAuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkTWFwIiwicHJvcGVydGllcyIsInVzZUpzQXBpTG9hZGVyIiwiaWQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsImdvb2dsZVBsYWNlc0FQSSIsImlzTG9hZGVkIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwibGF0IiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNlbnRlciIsImxuZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJtYXAiLCJzZXRNYXAiLCJvbkxvYWQiLCJ1c2VDYWxsYmFjayIsImNhbGxiYWNrIiwiYm91bmRzIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIkxhdExuZ0JvdW5kcyIsImZpdEJvdW5kcyIsIm9uVW5tb3VudCIsImltYWdlIiwicHJvcGVydHkiLCJpbmRleCIsInVybCIsImFuY2hvciIsIlBvaW50IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLHdCQUNsQkMsNkVBQWMsQ0FBQztBQUNsQ0MsTUFBRSxFQUFFLG1CQUQ4QjtBQUVsQ0Msb0JBQWdCLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUZJLENBR2xDOztBQUhrQyxHQUFELENBREk7QUFBQSxNQUMvQkMsUUFEK0IsbUJBQy9CQSxRQUQrQjs7QUFPdkNDLFNBQU8sQ0FBQ0MsR0FBUiwwQkFBWVQsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjVSxRQUExQiwwREFBWSxzQkFBd0JDLEdBQXBDO0FBQ0FILFNBQU8sQ0FBQ0MsR0FBUiwyQkFBWVQsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjVSxRQUExQiwyREFBWSx1QkFBd0JDLEdBQXBDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxTQUFLLEVBQUUsTUFEYztBQUVyQkMsVUFBTSxFQUFFO0FBRmEsR0FBdkI7QUFLQSxNQUFNQyxNQUFNLEdBQUc7QUFDYkosT0FBRyw0QkFBRVgsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjVSxRQUFoQiwyREFBRSx1QkFBd0JDLEdBRGhCO0FBRWJLLE9BQUcsNEJBQUVoQixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFFBQWhCLDJEQUFFLHVCQUF3Qk07QUFGaEIsR0FBZjs7QUFkdUMsd0JBbUJqQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FuQmlCO0FBQUE7QUFBQSxNQW1CaENDLEdBbkJnQztBQUFBLE1BbUIzQkMsTUFuQjJCOztBQXFCdkMsTUFBTUMsTUFBTSxHQUFHSiw0Q0FBSyxDQUFDSyxXQUFOLENBQWtCLFNBQVNDLFFBQVQsQ0FBa0JKLEdBQWxCLEVBQXVCO0FBQ3RELFFBQU1LLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsWUFBdkIsRUFBZjtBQUNBVCxPQUFHLENBQUNVLFNBQUosQ0FBY0wsTUFBZDtBQUNBSixVQUFNLENBQUNELEdBQUQsQ0FBTjtBQUNELEdBSmMsRUFJWixFQUpZLENBQWY7QUFNQSxNQUFNVyxTQUFTLEdBQUdiLDRDQUFLLENBQUNLLFdBQU4sQ0FBa0IsU0FBU0MsUUFBVCxDQUFrQkosR0FBbEIsRUFBdUI7QUFDekRDLFVBQU0sQ0FBQyxJQUFELENBQU47QUFDRCxHQUZpQixFQUVmLEVBRmUsQ0FBbEI7QUFJQSxNQUFNVyxLQUFLLEdBQUcsdUNBQWQ7QUFFQSxTQUFPeEIsUUFBUSxnQkFDYixxRUFBQyxnRUFBRDtBQUNFLHFCQUFpQixFQUFFSyxjQURyQjtBQUVFLFVBQU0sRUFBRUcsTUFGVjtBQUdFLFFBQUksRUFBRSxFQUhSO0FBSUUsVUFBTSxFQUFFTSxNQUpWO0FBS0UsYUFBUyxFQUFFUyxTQUxiO0FBQUEsZUFPRzlCLFVBQVUsSUFDVEEsVUFBVSxDQUFDbUIsR0FBWCxDQUFlLFVBQUNhLFFBQUQsRUFBV0MsS0FBWDtBQUFBOztBQUFBLDBCQUNiLHFFQUFDLDZEQUFEO0FBQ0UsZ0JBQVEsRUFBRTtBQUNSdEIsYUFBRyxFQUFFcUIsUUFBRixhQUFFQSxRQUFGLDZDQUFFQSxRQUFRLENBQUV0QixRQUFaLHVEQUFFLG1CQUFvQkMsR0FEakI7QUFFUkssYUFBRyxFQUFFZ0IsUUFBRixhQUFFQSxRQUFGLDhDQUFFQSxRQUFRLENBQUV0QixRQUFaLHdEQUFFLG9CQUFvQk07QUFGakIsU0FEWjtBQUtFLFlBQUksRUFBRTtBQUNKa0IsYUFBRyxFQUFFSCxLQUREO0FBRUpJLGdCQUFNLEVBQUUsSUFBSVQsTUFBTSxDQUFDQyxJQUFQLENBQVlTLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCLEVBQXpCO0FBRko7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFmLENBUkosZUFvQkUsdUpBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhLGdCQXdCYix1SkF4QkY7QUEwQkQsQ0EzREQ7O0dBQU1yQyxZO1VBQ2lCRSxxRTs7O0tBRGpCRixZO0FBNkRTLGtGQUFBa0IsNENBQUssQ0FBQ29CLElBQU4sQ0FBV3RDLFlBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZWU0NjA0Mzc3OTQxNGQ0NzIwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VKc0FwaUxvYWRlciwgTWFya2VyIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcblxuY29uc3QgRGFzaGJvYXJkTWFwID0gKHsgcHJvcGVydGllcyB9KSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkZWQgfSA9IHVzZUpzQXBpTG9hZGVyKHtcbiAgICBpZDogXCJnb29nbGUtbWFwLXNjcmlwdFwiLFxuICAgIGdvb2dsZU1hcHNBcGlLZXk6IHByb2Nlc3MuZW52Lmdvb2dsZVBsYWNlc0FQSSxcbiAgICAvLyBnb29nbGVNYXBzQXBpS2V5OiBwcm9jZXNzLmVudi5nb29nbGVQbGFjZXNBUEksXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHByb3BlcnRpZXNbMF0ubG9jYXRpb24/LmxhdCk7XG4gIGNvbnNvbGUubG9nKHByb3BlcnRpZXNbMF0ubG9jYXRpb24/LmxhdCk7XG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgfTtcblxuICBjb25zdCBjZW50ZXIgPSB7XG4gICAgbGF0OiBwcm9wZXJ0aWVzWzBdLmxvY2F0aW9uPy5sYXQsXG4gICAgbG5nOiBwcm9wZXJ0aWVzWzBdLmxvY2F0aW9uPy5sbmcsXG4gIH07XG5cbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIGNhbGxiYWNrKG1hcCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgbWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgIHNldE1hcChtYXApO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25Vbm1vdW50ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgc2V0TWFwKG51bGwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaW1hZ2UgPSBcImh0dHBzOi8vZ29vLmdsL21hcHMvTnVuWXNhem1OQzlGQnpZOEFcIjtcblxuICByZXR1cm4gaXNMb2FkZWQgPyAoXG4gICAgPEdvb2dsZU1hcFxuICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e2NvbnRhaW5lclN0eWxlfVxuICAgICAgY2VudGVyPXtjZW50ZXJ9XG4gICAgICB6b29tPXsxMH1cbiAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgb25Vbm1vdW50PXtvblVubW91bnR9XG4gICAgPlxuICAgICAge3Byb3BlcnRpZXMgJiZcbiAgICAgICAgcHJvcGVydGllcy5tYXAoKHByb3BlcnR5LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgIGxhdDogcHJvcGVydHk/LmxvY2F0aW9uPy5sYXQsXG4gICAgICAgICAgICAgIGxuZzogcHJvcGVydHk/LmxvY2F0aW9uPy5sbmcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaWNvbj17e1xuICAgICAgICAgICAgICB1cmw6IGltYWdlLFxuICAgICAgICAgICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCg1LCA1OCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPD48Lz5cbiAgICA8L0dvb2dsZU1hcD5cbiAgKSA6IChcbiAgICA8PjwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEYXNoYm9hcmRNYXApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==