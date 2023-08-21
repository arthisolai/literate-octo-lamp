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
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction ProductDetails() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    const fetcher = (url)=>fetch(url).then((res)=>res.json());\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id ? `/api/products/${id}` : null, fetcher);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/[id].js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/[id].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.description\n            }, void 0, false, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: \",\n                    data.price,\n                    \" \",\n                    data.currency\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/[id].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Category: \",\n                    data.category\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/[id].js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Arthi/Desktop/spiced-bootcamp/challenges/Backend-API-routes/backend-api-routes_products/pages/products/[id].js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2Y7QUFFVixTQUFTRSxpQkFBaUI7SUFDdkMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUksR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTUMsVUFBVSxDQUFDQyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUMxRCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHWCwrQ0FBTUEsQ0FBQ0csS0FBSyxDQUFDLGNBQWMsRUFBRUEsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFRTtJQUUzRCxJQUFJLENBQUNNLE1BQU07UUFDVCxxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDRDswQkFBSUQsS0FBS0csSUFBSTs7Ozs7OzBCQUNkLDhEQUFDQzswQkFBR0osS0FBS0ssV0FBVzs7Ozs7OzBCQUNwQiw4REFBQ0Q7O29CQUFFO29CQUNPSixLQUFLTSxLQUFLO29CQUFDO29CQUFFTixLQUFLTyxRQUFROzs7Ozs7OzBCQUVwQyw4REFBQ0g7O29CQUFFO29CQUFXSixLQUFLUSxRQUFROzs7Ozs7Ozs7Ozs7O0FBR2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWFwaS1yb3V0ZXNfcHJvZHVjdHMvLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzPzk4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbHMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGlkID8gYC9hcGkvcHJvZHVjdHMvJHtpZH1gIDogbnVsbCwgZmV0Y2hlcik7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHA+XG4gICAgICAgIFByaWNlOiB7ZGF0YS5wcmljZX0ge2RhdGEuY3VycmVuY3l9XG4gICAgICA8L3A+XG4gICAgICA8cD5DYXRlZ29yeToge2RhdGEuY2F0ZWdvcnl9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIlByb2R1Y3REZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImgxIiwiZGl2IiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY3VycmVuY3kiLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].js"));
module.exports = __webpack_exports__;

})();