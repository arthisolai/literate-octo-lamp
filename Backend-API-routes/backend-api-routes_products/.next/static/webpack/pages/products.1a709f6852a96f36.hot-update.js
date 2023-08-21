"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Products() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/products\");\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.description\n                            }, void 0, false, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Price: \",\n                                    product.price,\n                                    \" \",\n                                    product.currency\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"O7L24SjVCPjUDE1oq/fS99LBS0g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDZTtBQUV6QixTQUFTRSxXQUFXOztJQUNqQyxNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxFQUFFRyxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHTiwrQ0FBTUEsQ0FBQztJQUV4QixJQUFJLENBQUNNLE1BQU07UUFDVCxxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFDRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDRDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRTswQkFDRUgsS0FBS0ksR0FBRyxDQUFDLENBQUNDLHdCQUNULDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFJRixRQUFRRyxJQUFJOzs7Ozs7MENBQ2pCLDhEQUFDQzswQ0FBR0osUUFBUUssV0FBVzs7Ozs7OzBDQUN2Qiw4REFBQ0Q7O29DQUFFO29DQUNPSixRQUFRTSxLQUFLO29DQUFDO29DQUFFTixRQUFRTyxRQUFROzs7Ozs7OzBDQUUxQyw4REFBQ0g7O29DQUFFO29DQUFXSixRQUFRUSxRQUFROzs7Ozs7Ozt1QkFOdkJSLFFBQVFQLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZN0IsQ0FBQztHQXpCdUJGOztRQUNQRCxrREFBU0E7UUFFUEQsMkNBQU1BOzs7S0FIREUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/YTJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL3Byb2R1Y3RzXCIpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgPGgyPntwcm9kdWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBQcmljZToge3Byb2R1Y3QucHJpY2V9IHtwcm9kdWN0LmN1cnJlbmN5fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+Q2F0ZWdvcnk6IHtwcm9kdWN0LmNhdGVnb3J5fTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiUHJvZHVjdHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsImgxIiwiZGl2IiwidWwiLCJtYXAiLCJwcm9kdWN0IiwibGkiLCJoMiIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImN1cnJlbmN5IiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n"));

/***/ })

});