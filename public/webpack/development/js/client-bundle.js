"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["client-bundle"],{

/***/ "./client/app/components/HelloWorld.jsx":
/*!**********************************************!*\
  !*** ./client/app/components/HelloWorld.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Connor/Desktop/Made By 8ight/madeby8ight/client/app/components/HelloWorld.jsx";



// Super simple example of the simplest possible React component
class HelloWorld extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static propTypes = (() => ({
    helloWorldData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }).isRequired
  }))();

  // Not necessary if we only call super, but we'll need to initialize state, etc.
  constructor(props) {
    super(props);
    this.state = props.helloWorldData;
    this.setNameDomRef = this.setNameDomRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    const name = this.nameDomRef.value;
    this.setState({
      name
    });
  }
  setNameDomRef(nameDomNode) {
    this.nameDomRef = nameDomNode;
  }
  render() {
    console.log('HelloWorld demonstrating a call to console.log in ' + 'spec/dummy/client/app/components/HelloWorld.jsx:18');
    const {
      name
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, "Hello, ", name, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, "Say hello to:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      ref: this.setNameDomRef,
      defaultValue: name,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ "./client/app/components/Test.jsx":
/*!****************************************!*\
  !*** ./client/app/components/Test.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/Connor/Desktop/Made By 8ight/madeby8ight/client/app/components/Test.jsx";

const Test = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "Hello, World!");
};
/* harmony default export */ __webpack_exports__["default"] = (Test);

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
/* harmony import */ var _components_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Test */ "./client/app/components/Test.jsx");

// Components for CSR


react_on_rails__WEBPACK_IMPORTED_MODULE_0___default().register({
  HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"],
  Test: _components_Test__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-on-rails_node_package_lib_ReactOn-4d3ae8"], function() { return __webpack_exec__("./client/app/packs/client-bundle.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=client-bundle.js.map