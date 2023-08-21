"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Products() {\n    const fetcher = (url)=>fetch(url).then((res)=>res.json());\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/products\", fetcher);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.description\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Price: \",\n                                    product.price,\n                                    \" \",\n                                    product.currency\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNlO0FBRXpCLFNBQVNFLFdBQVc7SUFDakMsTUFBTUMsVUFBVSxDQUFDQyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUMxRCxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdWLCtDQUFNQSxDQUFDLGlCQUFpQkc7SUFFaEQsSUFBSSxDQUFDTSxNQUFNO1FBQ1QscUJBQU8sOERBQUNFO3NCQUFHOzs7Ozs7SUFDYixDQUFDO0lBQ0QsSUFBSUQsT0FBTyxxQkFBTyw4REFBQ0U7O1lBQUk7WUFBUUYsTUFBTUcsT0FBTzs7Ozs7OztJQUM1QyxxQkFDRSw4REFBQ0Q7OzBCQUNDLDhEQUFDRDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRzswQkFDRUwsS0FBS00sR0FBRyxDQUFDLENBQUNDLHdCQUNULDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFJRixRQUFRRyxJQUFJOzs7Ozs7MENBQ2pCLDhEQUFDQzswQ0FBR0osUUFBUUssV0FBVzs7Ozs7OzBDQUN2Qiw4REFBQ0Q7O29DQUFFO29DQUNPSixRQUFRTSxLQUFLO29DQUFDO29DQUFFTixRQUFRTyxRQUFROzs7Ozs7OzBDQUUxQyw4REFBQ0g7O29DQUFFO29DQUFXSixRQUFRUSxRQUFROzs7Ozs7Ozt1QkFOdkJSLFFBQVFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtYXBpLXJvdXRlc19wcm9kdWN0cy8uL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzP2EyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvcHJvZHVjdHNcIiwgZmV0Y2hlcik7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG4gIH1cbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UHJvZHVjdHM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgIDxoMj57cHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUHJpY2U6IHtwcm9kdWN0LnByaWNlfSB7cHJvZHVjdC5jdXJyZW5jeX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPkNhdGVnb3J5OiB7cHJvZHVjdC5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVJvdXRlciIsIlByb2R1Y3RzIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJoMSIsImRpdiIsIm1lc3NhZ2UiLCJ1bCIsIm1hcCIsInByb2R1Y3QiLCJsaSIsImgyIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY3VycmVuY3kiLCJjYXRlZ29yeSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/index.js"));
module.exports = __webpack_exports__;

})();