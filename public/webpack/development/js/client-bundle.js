"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["client-bundle"],{

/***/ "./client/app/components/HelloWorld.jsx":
/*!**********************************************!*\
  !*** ./client/app/components/HelloWorld.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Connor/Desktop/Made By 8ight/madeby8ight/client/app/components/HelloWorld.jsx";



// Super simple example of the simplest possible React component
const HelloWorld = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "This is a simple test!");
};
/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ "./client/app/packs/client-bundle.js":
/*!*******************************************!*\
  !*** ./client/app/packs/client-bundle.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-on-rails */ "./node_modules/react-on-rails/node_package/lib/ReactOnRails.full.js");
/* harmony import */ var react_on_rails__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_on_rails__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HelloWorld */ "./client/app/components/HelloWorld.jsx");
// import basic


react_on_rails__WEBPACK_IMPORTED_MODULE_0___default().register({
  HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-on-rails_node_package_lib_ReactOnRails_full_js"], function() { return __webpack_exec__("./client/app/packs/client-bundle.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=client-bundle.js.map