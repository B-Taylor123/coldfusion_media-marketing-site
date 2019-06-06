webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/full_viewport_section/full-viewport-section.tsx":
/*!***************************************************************************!*\
  !*** ./components/layout/full_viewport_section/full-viewport-section.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/layout/full_viewport_section/full-viewport-section.tsx";



var FullViewportSection = function FullViewportSection(props) {
  if (props.clear === 'header') return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClearHeaderViewportSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, " ", props.children, " ");
  if (props.clear === 'footer') return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ClearFooterViewportSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ", props.children, " ");
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ViewportSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", props.children, " ");
};

var ViewportSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "full-viewport-section__ViewportSection",
  componentId: "rx0j0-0"
})(["width:100%;height:100vh;scroll-snap-align:start;"]);
var ClearHeaderViewportSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewportSection).withConfig({
  displayName: "full-viewport-section__ClearHeaderViewportSection",
  componentId: "rx0j0-1"
})(["height:calc(100vh - var(--header-bar-height));"]);
var ClearFooterViewportSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewportSection).withConfig({
  displayName: "full-viewport-section__ClearFooterViewportSection",
  componentId: "rx0j0-2"
})(["height:calc(100vh - var(--footer-height));"]);
/* harmony default export */ __webpack_exports__["default"] = (FullViewportSection);

/***/ })

})
//# sourceMappingURL=index.js.d695ff984a7430fc7879.hot-update.js.map