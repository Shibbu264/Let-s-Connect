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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocketProvider: () => (/* binding */ SocketProvider),\n/* harmony export */   useSocket: () => (/* binding */ useSocket)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useSocket = ()=>{\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);\n    return socket;\n};\nconst SocketProvider = (props)=>{\n    const { children } = props;\n    const [socket, setsocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)();\n        setsocket(connection);\n        console.log(connection);\n    }, []);\n    socket?.on(\"connect_error\", async (err)=>{\n        console.log(err);\n        await fetch(\"/api/socket\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: socket,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\DEV WORK\\\\Google-meet-clone\\\\context\\\\socket.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNqQztBQUV0QyxNQUFNSyw4QkFBZ0JMLG9EQUFhQSxDQUFDO0FBRTdCLE1BQU1NLFlBQVk7SUFDckIsTUFBTUMsU0FBU04saURBQVVBLENBQUNJO0lBQzFCLE9BQU9FO0FBQ1gsRUFBQztBQUNNLE1BQU1DLGlCQUFpQixDQUFDQztJQUMzQixNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHRDtJQUNuQixNQUFNLENBQUNGLFFBQVFJLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsYUFBYVIsb0RBQUVBO1FBQ3JCTyxVQUFVQztRQUNsQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNSLEdBQUcsRUFBRTtJQUNOTCxRQUFRUSxHQUFHLGlCQUFnQixPQUFPQztRQUNqQ0gsUUFBUUMsR0FBRyxDQUFDRTtRQUNaLE1BQU1DLE1BQU07SUFBYztJQUUxQixxQkFDSSw4REFBQ1osY0FBY2EsUUFBUTtRQUFDQyxPQUFPWjtrQkFDMUJHOzs7Ozs7QUFJYixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZ2xlLW1lZXQtY2xvbmUvLi9jb250ZXh0L3NvY2tldC5qcz9hYjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3QgU29ja2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTb2NrZXQgPSAoKT0+e1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlQ29udGV4dChTb2NrZXRDb250ZXh0KVxyXG4gICAgcmV0dXJuIHNvY2tldFxyXG59XHJcbmV4cG9ydCBjb25zdCBTb2NrZXRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHByb3BzXHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRzb2NrZXRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBpbygpXHJcbiAgICAgICAgc2V0c29ja2V0KGNvbm5lY3Rpb24pXHJcbmNvbnNvbGUubG9nKGNvbm5lY3Rpb24pXHJcbiAgICB9LCBbXSlcclxuICAgc29ja2V0Py5vbignY29ubmVjdF9lcnJvcicsYXN5bmMgKGVycikgPT57XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICBhd2FpdCBmZXRjaCgnL2FwaS9zb2NrZXQnKX0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU29ja2V0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiU29ja2V0Q29udGV4dCIsInVzZVNvY2tldCIsInNvY2tldCIsIlNvY2tldFByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldHNvY2tldCIsImNvbm5lY3Rpb24iLCJjb25zb2xlIiwibG9nIiwib24iLCJlcnIiLCJmZXRjaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/socket.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/socket */ \"./context/socket.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket__WEBPACK_IMPORTED_MODULE_1__]);\n_context_socket__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket__WEBPACK_IMPORTED_MODULE_1__.SocketProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\DEV WORK\\\\Google-meet-clone\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\DEV WORK\\\\Google-meet-clone\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 4\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDcEI7QUFFZCxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNDLDhEQUFDSCwyREFBY0E7a0JBQ2QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb29nbGUtbWVldC1jbG9uZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9zb2NrZXQnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybihcbiAgIDxTb2NrZXRQcm92aWRlcj5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Tb2NrZXRQcm92aWRlcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiU29ja2V0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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