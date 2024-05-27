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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/socket.js":
/*!***************************!*\
  !*** ./context/socket.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketProvider: () => (/* binding */ SocketProvider),\n/* harmony export */   useSocket: () => (/* binding */ useSocket)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useSocket = ()=>{\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);\n    return socket;\n};\nconst SocketProvider = (props)=>{\n    const { children } = props;\n    const [socket, setsocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onetimer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (onetimer.current) {\n            return;\n        }\n        onetimer.current = true;\n        const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:5000\");\n        setsocket(connection);\n        console.log(connection);\n    }, []);\n    socket?.on(\"connect_error\", async (err)=>{\n        console.log(err);\n        await fetch(\"http://localhost:5000\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: socket,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\DEV WORK\\\\Google-meet-clone\\\\context\\\\socket.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRTtBQUN6QztBQUV0QyxNQUFNTSw4QkFBZ0JOLG9EQUFhQSxDQUFDO0FBRTdCLE1BQU1PLFlBQVk7SUFDckIsTUFBTUMsU0FBU1AsaURBQVVBLENBQUNLO0lBQzFCLE9BQU9FO0FBQ1gsRUFBQztBQUNNLE1BQU1DLGlCQUFpQixDQUFDQztJQUMzQixNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHRDtJQUNuQixNQUFNLENBQUNGLFFBQVFJLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTVMsV0FBVVYsNkNBQU1BLENBQUM7SUFDdkJELGdEQUFTQSxDQUFDO1FBQ04sSUFBSVcsU0FBU0MsT0FBTyxFQUFFO1lBQ2xCO1FBQ0Y7UUFDQUQsU0FBU0MsT0FBTyxHQUFHO1FBQ3JCLE1BQU1DLGFBQWFWLG9EQUFFQSxDQUFDVyx1QkFBbUM7UUFDekRKLFVBQVVHO1FBQ2xCSSxRQUFRQyxHQUFHLENBQUNMO0lBQ1IsR0FBRyxFQUFFO0lBQ05QLFFBQVFhLEdBQUcsaUJBQWdCLE9BQU9DO1FBQ2pDSCxRQUFRQyxHQUFHLENBQUNFO1FBQ1gsTUFBTUMsTUFBTVAsdUJBQW1DO0lBQ3BEO0lBRUkscUJBQ0ksOERBQUNWLGNBQWNrQixRQUFRO1FBQUNDLE9BQU9qQjtrQkFDMUJHOzs7Ozs7QUFJYixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZ2xlLW1lZXQtY2xvbmUvLi9jb250ZXh0L3NvY2tldC5qcz9hYjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNvY2tldCA9ICgpPT57XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VDb250ZXh0KFNvY2tldENvbnRleHQpXHJcbiAgICByZXR1cm4gc29ja2V0XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNvY2tldFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHNcclxuICAgIGNvbnN0IFtzb2NrZXQsIHNldHNvY2tldF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3Qgb25ldGltZXIgPXVzZVJlZihmYWxzZSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG9uZXRpbWVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25ldGltZXIuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGlvKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMKVxyXG4gICAgICAgIHNldHNvY2tldChjb25uZWN0aW9uKVxyXG5jb25zb2xlLmxvZyhjb25uZWN0aW9uKVxyXG4gICAgfSwgW10pXHJcbiAgIHNvY2tldD8ub24oJ2Nvbm5lY3RfZXJyb3InLGFzeW5jIChlcnIpID0+e1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMKVxyXG59KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NvY2tldH0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbyIsIlNvY2tldENvbnRleHQiLCJ1c2VTb2NrZXQiLCJzb2NrZXQiLCJTb2NrZXRQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJzZXRzb2NrZXQiLCJvbmV0aW1lciIsImN1cnJlbnQiLCJjb25uZWN0aW9uIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZXJyIiwiZmV0Y2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/socket.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/socket */ \"./context/socket.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket__WEBPACK_IMPORTED_MODULE_1__]);\n_context_socket__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket__WEBPACK_IMPORTED_MODULE_1__.SocketProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\DEV WORK\\\\Google-meet-clone\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\DEV WORK\\\\Google-meet-clone\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 4\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDcEI7QUFFZCxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNDLDhEQUFDSCwyREFBY0E7a0JBQ2QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb29nbGUtbWVldC1jbG9uZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9zb2NrZXQnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybihcbiAgIDxTb2NrZXRQcm92aWRlcj5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Tb2NrZXRQcm92aWRlcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiU29ja2V0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();