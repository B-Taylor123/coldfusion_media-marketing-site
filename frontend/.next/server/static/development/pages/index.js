module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/full_viewport_section/full-viewport-section.tsx":
/*!***************************************************************************!*\
  !*** ./components/layout/full_viewport_section/full-viewport-section.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
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

var ViewportSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "full-viewport-section__ViewportSection",
  componentId: "rx0j0-0"
})(["width:100%;height:100vh;scroll-snap-align:start;"]);
var ClearHeaderViewportSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ViewportSection).withConfig({
  displayName: "full-viewport-section__ClearHeaderViewportSection",
  componentId: "rx0j0-1"
})(["height:calc(100vh - var(--header-bar-height));"]);
var ClearFooterViewportSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ViewportSection).withConfig({
  displayName: "full-viewport-section__ClearFooterViewportSection",
  componentId: "rx0j0-2"
})(["height:calc(100vh - var(--footer-height));"]);
/* harmony default export */ __webpack_exports__["default"] = (FullViewportSection);

/***/ }),

/***/ "./components/layout/full_viewport_section/index.ts":
/*!**********************************************************!*\
  !*** ./components/layout/full_viewport_section/index.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _full_viewport_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-viewport-section */ "./components/layout/full_viewport_section/full-viewport-section.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_full_viewport_section__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/base/footer/footer.tsx":
/*!*************************************************!*\
  !*** ./components/pages/base/footer/footer.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/base/footer/footer.tsx";

 // import Icon from '../../../ui/icon';

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SocialIcons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\xA9 2019 Coldfusion Media"));
};

var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "footer__StyledFooter",
  componentId: "sc-1674q8o-0"
})(["height:var(--footer-height);width:100%;padding-left:2%;padding-right:2%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:var(--secondary-bg-colour);color:var(--font-colour-dark);font-size:var(--font-size-s);"]);
var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer__SocialIcons",
  componentId: "sc-1674q8o-1"
})(["width:150px;height:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/pages/base/footer/index.ts":
/*!***********************************************!*\
  !*** ./components/pages/base/footer/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./components/pages/base/footer/footer.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_footer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home-page.tsx":
/*!**************************************************!*\
  !*** ./components/pages/home_page/home-page.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_full_viewport_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/full_viewport_section */ "./components/layout/full_viewport_section/index.ts");
/* harmony import */ var _base_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/footer */ "./components/pages/base/footer/index.ts");
/* harmony import */ var _home_page_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home_page_cta */ "./components/pages/home_page/home_page_cta/index.ts");
/* harmony import */ var _home_page_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home_page_services */ "./components/pages/home_page/home_page_services/index.ts");
/* harmony import */ var _home_page_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home_page_contact */ "./components/pages/home_page/home_page_contact/index.ts");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home-page.tsx";


 // import HeaderBar from '../base/header_bar';







var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    universal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MainContentColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout_full_viewport_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_cta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout_full_viewport_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_services__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_layout_full_viewport_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clear: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_base_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

var MainContentColumn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home-page__MainContentColumn",
  componentId: "sc-18cyjb5-0"
})(["width:100%;height:auto;max-width:1920px;"]);
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/contact_form/contact-form.tsx":
/*!************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/contact_form/contact-form.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/http-service */ "./services/http-service.ts");
/* harmony import */ var _form_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form_row */ "./components/pages/home_page/home_page_contact/contact_form/form_row/index.ts");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form_input */ "./components/pages/home_page/home_page_contact/contact_form/form_input/index.ts");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/button */ "./components/ui/button/index.ts");


var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_contact/contact_form/contact-form.tsx";








var ContactForm = function ContactForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    firstName: {
      value: ''
    },
    lastName: {
      value: ''
    },
    email: {
      value: ''
    },
    role: {
      value: ''
    },
    companyName: {
      value: ''
    },
    companyWebsite: {
      value: ''
    },
    message: {
      value: ''
    }
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      contactForm = _useState2[0],
      setContactFormState = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Form, {
    onSubmit: function onSubmit(e) {
      return submit(e, contactForm);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " Get in touch ")), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    doubleItemRow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    placeholder: "First name*",
    value: contactForm.firstName.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'firstName', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    placeholder: "Last name*",
    value: contactForm.lastName.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'lastName', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "email",
    placeholder: "Email*",
    value: contactForm.email.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'email', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    doubleItemRow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    placeholder: "Company name",
    value: contactForm.companyName.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'companyName', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    placeholder: "Role",
    value: contactForm.role.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'role', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    placeholder: "Company website",
    value: contactForm.companyWebsite.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'companyWebsite', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "text",
    placeholder: "Message*",
    value: contactForm.message.value,
    onChange: function onChange(e) {
      return updateContactFormState(e.currentTarget.value, 'message', contactForm, setContactFormState);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, " Submit ")));
};

var updateContactFormState = function updateContactFormState(value, key, contactForm, setContactFormState) {
  var contactFormCopy = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contactForm);

  contactFormCopy[key].value = value;
  setContactFormState(contactFormCopy);
};

var submit = function submit(e, contactForm) {
  e.preventDefault();
  var request = {};

  for (var key in contactForm) {
    request[key] = contactForm[key].value;
  }

  console.log('submit request =', request);
  Object(_services_http_service__WEBPACK_IMPORTED_MODULE_4__["post"])('http://localhost:5000/email/contact', request);
};

var Form = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.form.withConfig({
  displayName: "contact-form__Form",
  componentId: "e2x83c-0"
})(["width:33%;height:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;"]);
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/contact_form/form_input/form-input.tsx":
/*!*********************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/contact_form/form_input/form-input.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_contact/contact_form/form_input/form-input.tsx";



var FormInput = function FormInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Input, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

var Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "form-input__Input",
  componentId: "sc-14vvfk9-0"
})(["width:100%;height:40px;padding:5px 10px 5px 10px;border:1px solid white;background-color:rgba(0,0,0,0);border-radius:4px;color:white;font-size:var(--font-size-m);"]);
/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/contact_form/form_input/index.ts":
/*!***************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/contact_form/form_input/index.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-input */ "./components/pages/home_page/home_page_contact/contact_form/form_input/form-input.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_form_input__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/contact_form/form_row/form-row.tsx":
/*!*****************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/contact_form/form_row/form-row.tsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_contact/contact_form/form_row/form-row.tsx";



var FormRow = function FormRow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Row, {
    className: props.doubleItemRow && 'double-item-row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.children);
};

var Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "form-row__Row",
  componentId: "sc-14fuu8f-0"
})(["width:100%;height:auto;display:flex;flex-direction:row;justify-content:space-between;padding:1rem 0 1rem 0;&.double-item-row{input{width:49%;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (FormRow);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/contact_form/form_row/index.ts":
/*!*************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/contact_form/form_row/index.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-row */ "./components/pages/home_page/home_page_contact/contact_form/form_row/form-row.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_form_row__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/contact_form/index.ts":
/*!****************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/contact_form/index.ts ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-form */ "./components/pages/home_page/home_page_contact/contact_form/contact-form.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_contact_form__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/home-page-contact.tsx":
/*!****************************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/home-page-contact.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact_form */ "./components/pages/home_page/home_page_contact/contact_form/index.ts");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_contact/home-page-contact.tsx";




var HomePageContact = function HomePageContact() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HomePageContactWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_contact_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

var HomePageContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home-page-contact__HomePageContactWrapper",
  componentId: "sc-1q7vqjm-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (HomePageContact);

/***/ }),

/***/ "./components/pages/home_page/home_page_contact/index.ts":
/*!***************************************************************!*\
  !*** ./components/pages/home_page/home_page_contact/index.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-contact */ "./components/pages/home_page/home_page_contact/home-page-contact.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_home_page_contact__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/hero_text/hero-text.tsx":
/*!**************************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/hero_text/hero-text.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_cta/hero_text/hero-text.tsx";



var HeroText = function HeroText() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeroTextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeroTextH1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, " ColdFusion Media "), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeroTextP, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " Crafting digital experiences and tools that excite and empower the user "));
};

var HeroTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "hero-text__HeroTextWrapper",
  componentId: "sc-8ccz27-0"
})([""]);
var HeroTextH1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "hero-text__HeroTextH1",
  componentId: "sc-8ccz27-1"
})(["font-size:var(--font-size-xl);text-align:center;max-width:95%;margin-top:60px;margin-bottom:60px;"]);
var HeroTextP = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "hero-text__HeroTextP",
  componentId: "sc-8ccz27-2"
})(["font-size:var(--font-size-l);font-weight:bold;text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (HeroText);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/home-page-cta.tsx":
/*!********************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/home-page-cta.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hero_text_hero_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero_text/hero-text */ "./components/pages/home_page/home_page_cta/hero_text/hero-text.tsx");
/* harmony import */ var _scroll_indicator_scroll_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll_indicator/scroll-indicator */ "./components/pages/home_page/home_page_cta/scroll_indicator/scroll-indicator.tsx");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_cta/home-page-cta.tsx";





var HomePageCTA = function HomePageCTA() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Hero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hero_text_hero_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_scroll_indicator_scroll_indicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

var Hero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home-page-cta__Hero",
  componentId: "sc-4hie8j-0"
})(["width:100%;height:100%;padding:2%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (HomePageCTA);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/index.ts":
/*!***********************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/index.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_cta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-cta */ "./components/pages/home_page/home_page_cta/home-page-cta.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_home_page_cta__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/desktop-scroll-indicator.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/desktop-scroll-indicator.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/desktop-scroll-indicator.tsx";



var DesktopScrollIndicator = function DesktopScrollIndicator() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Mouse, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 76 130",
    preserveAspectRatio: "xMidYmid meet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    width: "70",
    height: "118",
    x: "1.5",
    y: "1.5",
    stroke: "#FFF",
    strokeWidth: "3",
    rx: "36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MouseScroll, {
    cx: "36.5",
    cy: "31.5",
    r: "4.5",
    fill: "#FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

var Mouse = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "desktop-scroll-indicator__Mouse",
  componentId: "a2vv9i-0"
})(["max-width:2.5rem;width:100%;height:auto;"]);
var scroll = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%,20%{transform:translateY(0) scaleY(1);}10%{opacity:1;}100%{transform:translateY(36px) scaleY(2);opacity:0.01;}"]);
var MouseScroll = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.circle.withConfig({
  displayName: "desktop-scroll-indicator__MouseScroll",
  componentId: "a2vv9i-1"
})(["animation-name:", ";animation-duration:1.5s;animation-timing-function:cubic-bezier(0.650,-0.550,0.250,1.500);animation-iteration-count:infinite;transform-origin:50% 20.5px;will-change:transform;"], scroll);
/* harmony default export */ __webpack_exports__["default"] = (DesktopScrollIndicator);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/index.ts":
/*!*****************************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desktop_scroll_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-scroll-indicator */ "./components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/desktop-scroll-indicator.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_desktop_scroll_indicator__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/index.ts":
/*!****************************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobile_scroll_indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-scroll-indicator */ "./components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/mobile-scroll-indicator.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_mobile_scroll_indicator__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/mobile-scroll-indicator.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/mobile-scroll-indicator.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/mobile-scroll-indicator.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    0%, 20% {\n        transform: translateY(0) scaleY(1);\n    }\n\n    10% {\n        opacity: 1;\n    }\n\n    100% {\n        transform: translateY(36px) scaleY(2);\n        opacity: 0.01;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var MobileScrollIndicator = function MobileScrollIndicator() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Mouse, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 76 130",
    preserveAspectRatio: "xMidYmid meet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("rect", {
    width: "70",
    height: "118",
    x: "1.5",
    y: "1.5",
    stroke: "#FFF",
    strokeWidth: "3",
    rx: "36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MouseScroll, {
    cx: "36.5",
    cy: "31.5",
    r: "4.5",
    fill: "#FFF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

var Mouse = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.svg.withConfig({
  displayName: "mobile-scroll-indicator__Mouse",
  componentId: "rmmt53-0"
})(["max-width:2.5rem;width:100%;height:auto;"]);
var scroll = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var MouseScroll = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.circle.withConfig({
  displayName: "mobile-scroll-indicator__MouseScroll",
  componentId: "rmmt53-1"
})(["animation-name:", ";animation-duration:1.5s;animation-timing-function:cubic-bezier(0.650,-0.550,0.250,1.500);animation-iteration-count:infinite;transform-origin:50% 20.5px;will-change:transform;"], scroll);
/* harmony default export */ __webpack_exports__["default"] = (MobileScrollIndicator);

/***/ }),

/***/ "./components/pages/home_page/home_page_cta/scroll_indicator/scroll-indicator.tsx":
/*!****************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_cta/scroll_indicator/scroll-indicator.tsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _desktop_scroll_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop_scroll_indicator */ "./components/pages/home_page/home_page_cta/scroll_indicator/desktop_scroll_indicator/index.ts");
/* harmony import */ var _mobile_scroll_indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile_scroll_indicator */ "./components/pages/home_page/home_page_cta/scroll_indicator/mobile_scroll_indicator/index.ts");

var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_cta/scroll_indicator/scroll-indicator.tsx";






var ScrollIndicator = function ScrollIndicator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isMobile = _useState2[0],
      setIsMobile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isMobile === null) setIsMobile(false);
    if (!show) setTimeout(function () {
      return setShow(true);
    }, 1000);
  });
  if (!show) return null;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ScrollIndicatorWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, !isMobile ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_desktop_scroll_indicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mobile_scroll_indicator__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

var ScrollIndicatorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "scroll-indicator__ScrollIndicatorWrapper",
  componentId: "sc-1yp2pdl-0"
})(["position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);"]);
/* harmony default export */ __webpack_exports__["default"] = (ScrollIndicator);

/***/ }),

/***/ "./components/pages/home_page/home_page_services/home-page-services.tsx":
/*!******************************************************************************!*\
  !*** ./components/pages/home_page/home_page_services/home-page-services.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home_page_service */ "./components/pages/home_page/home_page_services/home_page_service/index.ts");
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/icon */ "./components/ui/icon/index.ts");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_services/home-page-services.tsx";





var HomePageServices = function HomePageServices() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HomePageServicesWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Software Development",
    shortBody: "We have a wealth of commercial experiance creating everything from promotional websites to enterprise grade web applications and mobile apps which we can apply to creating your perfect application.",
    iconName: _ui_icon__WEBPACK_IMPORTED_MODULE_3__["Icons"].laptopCodeSolid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Process Refinement",
    shortBody: "We can analyze your business or manufacturing processes and advise you on the most meaningful optimisations and automations and where apropriate craft bespoke software and hardware to... [WHAT WILL IT DO]",
    iconName: _ui_icon__WEBPACK_IMPORTED_MODULE_3__["Icons"].chartLineSolid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Social Media Marketing",
    shortBody: "We can ensure your next social media marketing campmaign is a sucess, either by advising on the execution of existing plans and campains or designing a slick new campaign tailored to your target audience.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_page_service__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Photo & Video",
    shortBody: "We can provide anything from product photgraphy, corporate headshots and real estate photgraphy to... [VIDEO PRODUCTS]",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

var HomePageServicesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home-page-services__HomePageServicesWrapper",
  componentId: "sc-10dqt2t-0"
})(["width:90%;height:100%;margin:0 5% 0 5%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (HomePageServices);

/***/ }),

/***/ "./components/pages/home_page/home_page_services/home_page_service/home-page-service.tsx":
/*!***********************************************************************************************!*\
  !*** ./components/pages/home_page/home_page_services/home_page_service/home-page-service.tsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/icon */ "./components/ui/icon/index.ts");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/pages/home_page/home_page_services/home_page_service/home-page-service.tsx";




var HomePageService = function HomePageService(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HomePageServiceWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HomePageServiceHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ui_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scale: "2x",
    iconName: props.iconName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.shortBody));
};

var HomePageServiceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home-page-service__HomePageServiceWrapper",
  componentId: "o3u8fd-0"
})(["width:20%;height:50%;padding:2rem 1rem 1rem 1rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border:1px solid white;background-color:rgba(0,0,0,0);border-radius:8px;color:white;font-size:var(--font-size-s);"]);
var HomePageServiceHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "home-page-service__HomePageServiceHeading",
  componentId: "o3u8fd-1"
})(["width:100%;height:30%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;font-size:var(--font-size-m);h3{text-align:center}"]);
/* harmony default export */ __webpack_exports__["default"] = (HomePageService);

/***/ }),

/***/ "./components/pages/home_page/home_page_services/home_page_service/index.ts":
/*!**********************************************************************************!*\
  !*** ./components/pages/home_page/home_page_services/home_page_service/index.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-service */ "./components/pages/home_page/home_page_services/home_page_service/home-page-service.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_home_page_service__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/pages/home_page/home_page_services/index.ts":
/*!****************************************************************!*\
  !*** ./components/pages/home_page/home_page_services/index.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-services */ "./components/pages/home_page/home_page_services/home-page-services.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_home_page_services__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/ui/button/button.tsx":
/*!*****************************************!*\
  !*** ./components/ui/button/button.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/ui/button/button.tsx";



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), props.children);
};

var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1xoic2o-0"
})(["width:150px;height:40px;border:1px solid white;background-color:rgba(0,0,0,0);border-radius:4px;color:white;font-size:var(--font-size-m);"]);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/ui/button/index.ts":
/*!***************************************!*\
  !*** ./components/ui/button/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./components/ui/button/button.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_button__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/ui/icon/icon.tsx":
/*!*************************************!*\
  !*** ./components/ui/icon/icon.tsx ***!
  \*************************************/
/*! exports provided: default, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/components/ui/icon/icon.tsx";




var Icons;

(function (Icons) {
  Icons[Icons["laptopCodeSolid"] = 0] = "laptopCodeSolid";
  Icons[Icons["chartLineSolid"] = 1] = "chartLineSolid";
})(Icons || (Icons = {}));

var Icon = function Icon(props) {
  if (typeof props.iconName === 'undefined') return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconPlaceholder, {
    className: props.scale === '2x' ? 'x2' : 'x1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  });
  var icon = getIcon(props.iconName);
  if (!icon) return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconPlaceholder, {
    className: props.scale === '2x' ? 'x2' : 'x1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    size: props.scale,
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  });
};

var getIcon = function getIcon(iconName) {
  switch (iconName) {
    case Icons.laptopCodeSolid:
      return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLaptopCode"];

    case Icons.chartLineSolid:
      return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChartLine"];

    default:
      return null;
  }
};

var IconPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "icon__IconPlaceholder",
  componentId: "sc-1wjnthp-0"
})(["background-color:rgba(0,0,0,.3);border-radius:50%;&.x1{--size:30px;width:var(--size);min-width:var(--size);max-width:var(--size);height:var(--size);min-height:var(--size);max-height:var(--size);}&.x2{--size:60px;width:var(--size);min-width:var(--size);max-width:var(--size);height:var(--size);min-height:var(--size);max-height:var(--size);}"]);
/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./components/ui/icon/index.ts":
/*!*************************************!*\
  !*** ./components/ui/icon/index.ts ***!
  \*************************************/
/*! exports provided: default, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./components/ui/icon/icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["Icons"]; });


/* harmony default export */ __webpack_exports__["default"] = (_icon__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pages_home_page_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pages/home_page/home-page */ "./components/pages/home_page/home-page.tsx");
var _jsxFileName = "/home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/pages/index.tsx";



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_home_page_home_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./services/http-service.ts":
/*!**********************************!*\
  !*** ./services/http-service.ts ***!
  \**********************************/
/*! exports provided: post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var post = function post(url, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data).then(function (res) {
    return console.log('res.data', res.data);
  });
};



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ben/Projects/ColdFusion_Media/coldfusion_media-marketing-site/frontend/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map