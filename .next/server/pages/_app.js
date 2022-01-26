"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/theme.tsx


const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
const fonts = {
    mono: `'Menlo', monospace`
};
const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em"
});
const theme = (0,react_.extendTheme)({
    styles: {
        global: {
            a: {
                _hover: {
                    color: "gray.300",
                    boxShadow: "xl"
                }
            }
        }
    },
    colors: {
        black: "#16161D"
    },
    fonts,
    breakpoints
});
/* harmony default export */ const src_theme = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        resetCSS: true,
        theme: src_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(698));
module.exports = __webpack_exports__;

})();