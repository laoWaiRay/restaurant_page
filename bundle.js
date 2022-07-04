/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/images/hero.jpg */ "./dist/images/hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.fa-crown {\n  padding: 0 1rem;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.btn-primary {\n  padding: 1rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: #bd9d73;\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: #a3855c;\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler:hover {\n    background-color: transparent;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n  }\n}\n\n.hero {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 8rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  opacity: 0.8;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 1;\n  }\n}\n.header__popup {\n  margin: 3rem;\n  margin-bottom: 0;\n  background-color: rgba(189, 157, 115, 0.5137254902);\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  width: 40rem;\n}\n.header__popup-text {\n  font-family: \"Josephin Sans\", sans-serif;\n  font-size: 2rem;\n  font-style: italic;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 8rem;\n  }\n}\n\n.info {\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 10rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n  height: initial;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n    padding: 0;\n  }\n}\n.info-panel--concepts, .info-panel--contact {\n  overflow-y: scroll;\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    padding-bottom: 0;\n    overflow-y: scroll;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: 70vw auto 70vw auto 70vw auto;\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 3;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item:active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 5rem;\n    transform: translateY(-40rem);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(0rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 4rem);\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .content {\n    height: calc(100vh - 8rem);\n  }\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 8rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 12rem);\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_animations.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/base/_img.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_info.scss","webpack://./src/scss/layout/_nav.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes pulse{\n    0%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n\n    50%{\n        transform: scale(1.05);\n    }\n\n    100%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n}","@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.fa-crown {\n  padding: 0 1rem;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.btn-primary {\n  padding: 1rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: #bd9d73;\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: #a3855c;\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler:hover {\n    background-color: transparent;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n  }\n}\n\n.hero {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-image: url(/dist/images/hero.jpg);\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 8rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  opacity: 0.8;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 1;\n  }\n}\n.header__popup {\n  margin: 3rem;\n  margin-bottom: 0;\n  background-color: rgba(189, 157, 115, 0.5137254902);\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  width: 40rem;\n}\n.header__popup-text {\n  font-family: \"Josephin Sans\", sans-serif;\n  font-size: 2rem;\n  font-style: italic;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 8rem;\n  }\n}\n\n.info {\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 10rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n  height: initial;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n    padding: 0;\n  }\n}\n.info-panel--concepts, .info-panel--contact {\n  overflow-y: scroll;\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    padding-bottom: 0;\n    overflow-y: scroll;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: 70vw auto 70vw auto 70vw auto;\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 3;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item:active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 5rem;\n    transform: translateY(-40rem);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(0rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 4rem);\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .content {\n    height: calc(100vh - 8rem);\n  }\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 8rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 12rem);\n  }\n}","// font-family: 'Meie Script', cursive;\n// font-family: 'Mrs Saint Delafield', cursive;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nli{\n    list-style: none;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n\n    @media only screen and (max-width:610px){\n        font-size: 50%;\n    }\n\n    @media only screen and (max-width:375px){\n        font-size: 42.5%;\n    }\n}\n\nbody{\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 200;\n    font-size: 2.5rem;\n    background-color: rgb(6, 6, 31);\n    color: #fff;\n}\n\n",".img{\n    width: 100%;\n    height: 100%;\n    &__about{\n        object-fit: cover;\n    }\n}",".heading-primary{\n    font-size: 8rem;\n    font-weight: 100;\n\n    &--contact{\n        text-align: center;\n    }\n\n    &--concepts{\n        font-style: italic;\n    }\n\n    @media only screen and (max-width:610px){\n        text-align: center;\n    }\n}\n\n.heading-secondary{\n    margin-bottom: 1.5rem;\n\n    &--contactForm{\n        @media only screen and (max-width:610px){\n            display: none;\n        }\n    }\n}\n\n\np{\n    margin-bottom: 2rem;\n}\n\n.git-handle{\n    color: rgb(114, 37, 191);\n    font-weight: 400;\n}\n\n.heading-concepts{\n    font-size: 5rem;\n    font-weight: 100;\n    font-family: 'Mrs Saint Delafield', cursive;\n\n    &--1{\n        color: red;\n    }\n    &--2{\n        color: white;\n    }\n    &--3{\n        color: green;\n    }\n}\n\n.fa-crown{\n    padding: 0 1rem;\n}",".align-center{\n    display: block;\n    margin: 0 auto;\n}\n\n.no-scroll{\n    overflow: hidden;\n}",".btn-primary{\n    padding: 1rem 2rem;\n    color: #fff;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 3rem;\n    // background-color: rgba(0, 0, 0, 0.565);\n    background-color: #bd9d73;\n    border: 2px solid #fff;\n    border-radius: 3px;\n    z-index: 20;\n\n    &:hover{\n        cursor: pointer;\n        background-color: #a3855c;\n    }\n}\n\n.reserve-btn{\n    padding: 1.5rem;\n    color: black;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 2rem;\n    background-color: #fff;\n    border: none;\n    border-radius: 1px;\n    z-index: 20;\n    display: block;\n    margin: 0 auto;\n    transition: all 200ms;\n    margin-top: 4rem;\n\n    &:hover{\n        cursor: pointer;\n        background-color: tan;\n        transform: translateY(-2px);\n    }\n    &:active{\n        transform: translateY(-1px);\n    }\n}\n\n.btn-contact{\n    border: 1px solid #000;\n\n    @media only screen and (max-width:610px){\n        border-color: #fff;\n    }\n}\n\n.toggler{\n    position: absolute;\n    z-index: 999;\n    right: 1rem;\n    width: 4rem;\n    aspect-ratio: 1;\n    color: rgba(0, 0, 0, 0.666);\n    border: 0;\n    background: 0;\n    display: none;\n\n    &:hover{\n        cursor: pointer;\n        background-color: #edd9bf;\n\n        @media only screen and (max-width:610px){\n            background-color: transparent;\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        display: block;\n    }\n}\n\n.btn-form{\n    @media only screen and (max-width:610px){\n        margin-top: 2.5rem\n    }\n}",".form{\n    // height: calc(100% - 8rem);\n    width: clamp(60rem, 60%, 60rem);\n    background-color: rgba(255, 255, 255, 0.95);\n    padding: 2rem;\n    color: #000;\n    font-size: 2rem;\n    font-weight: 300;\n    // overflow-y: scroll;\n\n    &__group{\n        margin-bottom: 2rem;\n\n        @media only screen and (max-width:610px){\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n        }\n    }\n\n    &__input{\n        width: 100%;\n        padding: 1rem;\n        border: 1px solid #000;\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        color: inherit;\n    }\n\n    &__label{\n        display: block;\n        margin-bottom: .5rem;\n    }\n\n    textarea{\n        resize: none;\n    }\n\n    @media only screen and (max-width:610px){\n        // height: 100%;\n        width: 100%;\n        background-color: transparent;\n        color: #fff;\n        display: flex;\n        flex-direction: column;\n        // overflow-y: hidden;\n        font-size: 3rem;\n    }\n}\n\n\n",".hero{\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    background-image: url(/dist/images/hero.jpg);\n    background-size: cover;\n    background-position: center;\n    z-index: -1;\n}\n\n.header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    // min-height: 100vh;\n    \n    \n    font-family: 'Mrs Saint Delafield', cursive;\n    &__main{\n        font-size: 15rem;\n        margin-bottom: -4rem;\n        user-select: none;\n    }\n\n    &__map-scroller{\n        position: absolute;\n        bottom: 5rem;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: 2s;\n\n        @media only screen and (max-width:610px){\n            bottom: 8rem;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 2rem;\n        }\n\n        &:hover{\n            transform: translateY(-5px);\n\n            @media only screen and (max-width:610px){\n                transform: none;\n            }\n        }\n    }\n\n    &__map-scroller-text{\n        display: inline-block;\n        font-family: 'Josefin Sans', sans-serif;\n        font-size: 2rem;\n        font-weight: 400;\n        text-transform: uppercase;\n        opacity: .8;\n        transition: opacity 1s;\n\n        &:hover{\n            cursor: pointer;\n            opacity: 1;\n            animation: pulse 2s infinite;\n\n            @media only screen and (max-width:610px){\n                animation: none;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n            font-weight: 400;\n            opacity: 1;\n        }\n    }\n\n    &__popup{        \n        \n        margin: 3rem;\n        margin-bottom: 0;\n        background-color: #bd9d7383;\n        padding: .5rem 1rem;\n        border-radius: 5px;\n        width: 40rem;\n    }\n\n    &__popup-text{\n        font-family: 'Josephin Sans', sans-serif;\n        font-size: 2rem;\n        font-style: italic;\n        letter-spacing: 1px;\n        display: flex;\n        align-items: center;\n        margin-bottom: 0;\n    }\n}",".footer{\n    background: #fff;\n    color: #000;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 4rem;\n    z-index: 1;\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__item{\n        padding: 0 10px;\n\n        &--link{\n            margin-left: -10px;\n        }\n\n        &:first-child{\n            @media only screen and (max-width:610px){\n                border-right: 1px solid rgba(0, 0, 0, 0.443);\n            }\n        }\n\n        \n    }\n\n    .odin-logo{\n        height: 3.5rem;\n        margin: 0 -2rem;\n\n        @media only screen and (max-width:610px){\n            margin: 0 -7rem;\n        }\n    }\n\n    .git-cat{\n        height: 3.5rem;\n        transition: all 1s;\n\n        &:hover{\n            transform: rotate(360deg);\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        height: 8rem;\n    }\n}\n\n",".info{\n    position: fixed;\n    // top: 4rem;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .85);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n    min-height: 100vh;\n\n    @media only screen and (max-width:610px){\n        // top: 5rem;\n        height: calc(100vh - 20rem);\n    }\n}\n\n\n.info-panel{\n    height: calc(100vh - 10rem);\n    width: 100%;\n    padding: 4rem;\n    font-size: clamp(1.7rem, 2.6vw , 2.5rem);\n    font-weight: 100;\n    line-height: 1.1;\n    position: relative;\n    // overflow-y: scroll;\n    // top: -4rem;\n\n\n    &__close{\n        position: absolute;\n        font-size: 4rem;\n        color: #fff;\n        top: 3rem;\n        right: 3rem;\n\n        &:hover{\n            cursor: pointer;\n        }\n\n        @media only screen and (max-width:610px){\n            top: 1rem;\n            right: 2.5rem;\n        }\n    }\n\n    &__content{\n        height: 100%;\n        width: 100%;\n        display: flex;\n\n        &--contact{\n            justify-content: center;\n            height: initial;\n        }\n\n        @media only screen and (max-width:610px){\n            flex-direction: column;\n        }\n\n        @media only screen and (min-width: 375px) and (max-width:610px){\n            // height: 50%;\n        }\n    }\n    &__content-main{\n        height: calc(100% - 8rem);\n        width: 50%;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n        }\n    }\n\n    &__content-main--about{\n        @media only screen and (max-width:610px){\n            width: 100%;\n            height: 50%;\n        }\n    }\n\n    &__content-secondary{\n        height: calc(100% - 8rem);\n        width: 50%;\n        padding: 0 4rem;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n            margin-top: 3rem;\n            font-size: 3rem;\n            padding: 0;\n        }\n    }\n\n    &--concepts,\n    &--contact{\n        overflow-y: scroll;\n        // height: calc(100vh - 8rem);\n    }\n\n    &--about{\n        margin: 0;\n    }\n\n    @media only screen and (max-width:610px){\n        padding-bottom: 0;\n        overflow-y: scroll;\n\n    }\n}\n\n.grid{\n    width: 100%;\n\n    display: grid;\n    grid-template-rows: repeat(4, 30vw);\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0;\n\n    &__img-container{\n       padding: 3rem;\n       border: 1px solid #fff;\n\n\n        &--1{\n            grid-row: 1/2;\n            grid-column: 1/2;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n            \n        }\n        &--2{\n            grid-row: 2/4;\n            grid-column: 2/3;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n        &--3{\n            grid-row: 4/5;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            border: 0;\n            padding: 0;\n        }\n    }\n\n    &__img{\n        height: 100%;\n        width: 100%;\n        object-fit: cover;\n        display: block;\n        transition: transform 1s;\n\n        &:hover{\n            transform: scale(1.01);\n            cursor: pointer;\n        }\n    }\n\n    &__textBox--1{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 2/3;\n            grid-column: initial;\n        }\n    }\n    &__textBox--2{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 4/5;\n            grid-column: initial;\n        }\n    }\n    &__textBox--3{\n        margin: 3rem;\n        grid-column: 2/3;\n\n        @media only screen and (max-width:610px){\n            grid-row: initial;\n            grid-column: initial;\n        }\n    }\n\n    &__text{\n        font-size: clamp(1rem, 2vw, 2rem);\n        line-height: 1.2;\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        grid-template-columns: 1fr;\n        grid-template-rows: 70vw auto 70vw auto 70vw auto;\n    }\n}\n\n",".navbar{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    font-size: 1.5rem;\n    top: 0;\n    z-index: 3;\n    background: #fff;\n    width: 100%;\n    color: #000;\n    height: 4rem;\n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        height: 5rem;\n    }\n\n    &__nav-item{\n        align-self: stretch;\n        display: block;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        transition: background-color 250ms;\n        background-color: #fff;\n\n        @media only screen and (max-width:610px){\n            font-weight: 300;\n            font-size: 2rem;\n            padding: 1.5rem;\n            border-top: 1px solid rgba(0, 0, 0, 0.13);\n        }\n\n        &:hover{\n            background-color: #edd9bf;\n        }\n        \n        &:active{\n            background-color: #edd9bf;\n        }\n    }\n\n    &__nav-link{\n        padding: 0 10px;\n        padding-top: 5px;\n        text-transform: uppercase;\n\n        &--italic{\n            font-style: italic;\n        }\n    }\n}\n\n.primary-navigation{\n    display: flex;\n    height: 4rem;\n    \n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        width: 100%;\n        position: absolute;\n        top: 5rem;\n        transform: translateY(-40rem);\n        transition: transform 200ms ease-out;\n    }\n}\n\n@media only screen and (max-width:610px){\n    .primary-navigation[data-visible=\"true\"]{\n        z-index: -1;\n        transform: translateY(0rem);\n    }\n}\n\n\n.fa-instagram{\n    display: inline-block;\n    position: absolute;\n    left: 1rem;\n    -webkit-text-stroke: .5px white;\n\n        &::after{\n            content: \"\";\n            position: absolute;\n            height: 25px;\n            width: 121%;\n            left: -2.5px;\n            top: -13px;\n            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n            border-radius: 6px;\n            z-index: -1;\n\n            @media only screen and (max-width:600px){\n                width: 135%;\n                height: 23px;\n                top: -12px;\n                left: -3px;\n            }\n        }\n\n        &::before{\n            color: #fff;\n        }\n\n        @media only screen and (max-width:600px){\n            left: 2rem;\n        }\n}\n\n","\n\n.content{\n    max-width: 1000px;\n    width: 100%;\n    margin: auto;\n    height: calc(100vh - 4rem);\n    z-index: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 8rem);\n    }\n\n}\n\n.footer-padding{\n    background-color: transparent;\n    height: 4rem;\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: 8rem;\n    }\n   \n}\n\n.map-container{\n    height: calc(100vh - 8rem);\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 12rem);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutInfo.js":
/*!**************************!*\
  !*** ./src/aboutInfo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/about.jpg */ "./src/img/about.jpg");


const aboutInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    document.querySelector('.navbar__nav-item--about').classList.add('active');

    const navBar = document.querySelector('.navbar');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoPanelAbout = document.createElement('div');
    infoPanelAbout.classList.add('info-panel', 'info-panel--about');

    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary');
    headingPrimary.append('About Us');

    const infoPanelContent = document.createElement('div');
    infoPanelContent.classList.add('info-panel__content');

    const infoPanelContentMain = document.createElement('div');
    infoPanelContentMain.classList.add('info-panel__content-main', 'info-panel__content-main--about');

    const imgAbout = document.createElement('img');
    imgAbout.classList.add('img', 'img__about');
    imgAbout.src = _img_about_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const infoPanelContentSecondary = document.createElement('div');
    infoPanelContentSecondary.classList.add('info-panel__content-secondary');

    const p1 = document.createElement('p');
    p1.append('Lorem ipsum dolor sit amet. Qui sunt maiores non iste vero ut eius adipisci est quasi libero. Et quaerat vero nam ratione consequatur ut laudantium quos qui quisquam voluptatem ea alias dignissimos. In quasi porro est quia quam aut ullam Quis et reiciendis velit rem alias repudiandae! Et excepturi autem sed voluptatem odio qui vitae minus sed dolorem cumque est voluptas culpa aut molestiae facere.');

    const p2 = document.createElement('p');
    p2.append('In galisum veniam sed incidunt possimus hic eius unde eos inventore dolor et dolores magni id sint eius et nisi velit. Qui vero aliquam qui autem tempore aut minima repellendus vel dicta ducimus est iusto mollitia est cumque quibusdam.');

    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);
    infoPanelContent.append(infoPanelContentMain, infoPanelContentSecondary);
    infoPanelContentMain.append(imgAbout);
    infoPanelContentSecondary.append(p1,p2);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
            document.body.classList.remove('no-scroll');
        })
    })
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutInfo);






/***/ }),

/***/ "./src/conceptsInfo.js":
/*!*****************************!*\
  !*** ./src/conceptsInfo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_concepts1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/concepts1.jpg */ "./src/img/concepts1.jpg");
/* harmony import */ var _img_concepts2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/concepts2.jpg */ "./src/img/concepts2.jpg");
/* harmony import */ var _img_concepts3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/concepts3.jpg */ "./src/img/concepts3.jpg");




const conceptsInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    document.querySelector('.navbar__nav-item--concepts').classList.add('active');

    const navBar = document.querySelector('.navbar');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoPanelConcepts = document.createElement('div');
    infoPanelConcepts.classList.add('info-panel', 'info-panel--concepts');

    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary', 'heading-primary--concepts');
    headingPrimary.append('Concepts');

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const img1Container = document.createElement('div');
    img1Container.classList.add('grid__img-container', 'grid__img-container--1');

    const img1 = document.createElement('img');
    img1.classList.add('grid__img', 'grid__img--1');
    img1.src = _img_concepts1_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const img2Container = document.createElement('div');
    img2Container.classList.add('grid__img-container', 'grid__img-container--2');
    const img2 = document.createElement('img');
    img2.classList.add('grid__img', 'grid__img--2');
    img2.src = _img_concepts2_jpg__WEBPACK_IMPORTED_MODULE_1__;

    const img3Container = document.createElement('div');
    img3Container.classList.add('grid__img-container', 'grid__img-container--3');
    const img3 = document.createElement('img');
    img3.classList.add('grid__img', 'grid__img--3');
    img3.src = _img_concepts3_jpg__WEBPACK_IMPORTED_MODULE_2__;


    const textBox1 = document.createElement('div');
    textBox1.classList.add('grid__textBox--1');

    const heading1 = document.createElement('h2');
    heading1.classList.add('heading-secondary', 'heading-concepts', 'heading-concepts--1');
    heading1.append('Little Italy');

    const text1 = document.createElement('p');
    text1.classList.add('grid__text', 'grid__text--1');
    text1.append('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque. Cursus euismod quis viverra nibh cras pulvinar. ');

    const textBox2 = document.createElement('div');
    textBox2.classList.add('grid__textBox--2');
    
    const heading2 = document.createElement('h2');
    heading2.classList.add('heading-secondary', 'heading-concepts', 'heading-concepts--2');
    heading2.append('La Capitale');

    const text2 = document.createElement('p');
    text2.classList.add('grid__text', 'grid__text--2');
    text2.append('Suscipit adipiscing bibendum est ultricies integer quis. Lobortis feugiat vivamus at augue eget arcu dictum varius. Amet aliquam id diam maecenas ultricies mi. Pellentesque nec nam aliquam sem et tortor consequat.')

    const textBox3 = document.createElement('div');
    textBox3.classList.add('grid__textBox--3');

    const heading3 = document.createElement('h2');
    heading3.classList.add('heading-secondary', 'heading-concepts', 'heading-concepts--3');
    heading3.append('La Pergola');

    const text3 = document.createElement('p');
    text3.classList.add('grid__text', 'grid__text--3');
    text3.append('Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ut sem nulla pharetra diam sit amet nisl. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Nisl suscipit adipiscing bibendum est.');



    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelConcepts);
    infoPanelConcepts.append(infoPanelClose, headingPrimary, grid);
    grid.append(img1Container, img2Container, img3Container, textBox1, textBox2, textBox3);
    img1Container.append(img1);
    img2Container.append(img2);
    img3Container.append(img3);
    textBox1.append(heading1, text1);
    textBox2.append(heading2, text2);
    textBox3.append(heading3, text3);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
            document.body.classList.remove('no-scroll');
        })
    })
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conceptsInfo);






/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    document.querySelector('.navbar__nav-item--contact').classList.add('active');

    const navBar = document.querySelector('.navbar');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoPanelAbout = document.createElement('div');
    infoPanelAbout.classList.add('info-panel', 'info-panel--contact');


    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary', 'heading-primary--contact');
    headingPrimary.append('Contact Us');

    const infoPanelContent = document.createElement('div');
    infoPanelContent.classList.add('info-panel__content', 'info-panel__content--contact');

    const form = document.createElement('form');
    form.classList.add('form');

    const headingSecondary = document.createElement('h2');
    headingSecondary.classList.add('heading-secondary', 'heading-secondary--contactForm');
    headingSecondary.append('Contact Information');

    const formGroupName1 = document.createElement('div');
    formGroupName1.classList.add('form__group');
        const formLabelName1 = document.createElement('label');
        formLabelName1.classList.add('form__label');
        formLabelName1.setAttribute('for', 'firstName');
        formLabelName1.append('First Name:');
            const formInputName1 = document.createElement('input');
            formInputName1.classList.add('form__input');
            formInputName1.id = "firstName";
            formInputName1.setAttribute('type', 'text');
            formInputName1.setAttribute('name', 'firstName');
            formInputName1.setAttribute('placeholder', 'What\'s your first name?');
            formInputName1.setAttribute('required', '');

    const formGroupName2 = document.createElement('div');
    formGroupName2.classList.add('form__group'); 
        const formLabelName2 = document.createElement('label');
        formLabelName2.classList.add('form__label');
        formLabelName2.setAttribute('for', 'lastName');
        formLabelName2.append('Last Name:');
            const formInputName2 = document.createElement('input');
            formInputName2.classList.add('form__input');
            formInputName2.id = "lastName";
            formInputName2.setAttribute('type', 'text');
            formInputName2.setAttribute('name', 'lastName');
            formInputName2.setAttribute('placeholder', 'What\'s your last name?');
            formInputName2.setAttribute('required', '');

    const formGroupEmail = document.createElement('div');
    formGroupEmail.classList.add('form__group'); 
        const formLabelEmail = document.createElement('label');
        formLabelEmail.classList.add('form__label');
        formLabelEmail.setAttribute('for', 'email');
        formLabelEmail.append('Email:');
            const formInputEmail = document.createElement('input');
            formInputEmail.classList.add('form__input');
            formInputEmail.id = "email";
            formInputEmail.setAttribute('type', 'email');
            formInputEmail.setAttribute('name', 'email');
            formInputEmail.setAttribute('placeholder', 'What\'s your email?');
            formInputEmail.setAttribute('required', '');

    const formGroupPhoneNumber = document.createElement('div');
    formGroupPhoneNumber.classList.add('form__group'); 
        const formLabelPhoneNumber = document.createElement('label');
        formLabelPhoneNumber.classList.add('form__label');
        formLabelPhoneNumber.setAttribute('for', 'phoneNumber');
        formLabelPhoneNumber.append('Phone Number:')
            const formInputPhoneNumber = document.createElement('input');
            formInputPhoneNumber.classList.add('form__input');
            formInputPhoneNumber.id = "phoneNumber";
            formInputPhoneNumber.setAttribute('type', 'tel');
            formInputPhoneNumber.setAttribute('name', 'phoneNumber');
            formInputPhoneNumber.setAttribute('placeholder', 'What\'s your phone number?');
            formInputPhoneNumber.setAttribute('required', '');

    const headingSecondary2 = document.createElement('h2');
    headingSecondary2.classList.add('heading-secondary', 'heading-secondary--contactForm');
    headingSecondary2.append('Comments')

    const formGroupComments = document.createElement('div');
    formGroupComments.classList.add('form__group');
        const formInputComments = document.createElement('textarea');
        formInputComments.classList.add('form__input');
        formInputComments.id = "comments";
        formInputComments.setAttribute('name', 'comments');
        formInputComments.setAttribute('cols', '30');
        formInputComments.setAttribute('rows', '10');
        formInputComments.setAttribute('placeholder', 'Have a suggestion?');
        formInputComments.setAttribute('required', '');
            const formLabelComments = document.createElement('label');
            formLabelComments.classList.add('form__label');
            formLabelComments.setAttribute('for', 'comments')
            formLabelComments.append('Your Feedback:')

    const btnForm = document.createElement('button');
    btnForm.classList.add('btn-form', 'btn-primary', 'align-center', 'btn-contact');
    btnForm.append('Submit');


    navBar.insertAdjacentElement('afterend', info);
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);
    infoPanelContent.append(form);
    form.append(headingSecondary,formGroupName1,formGroupName2,formGroupEmail,formGroupPhoneNumber,headingSecondary2,formGroupComments,btnForm);
    formGroupName1.append(formLabelName1,formInputName1);
    formGroupName2.append(formLabelName2,formInputName2);
    formGroupEmail.append(formLabelEmail,formInputEmail);
    formGroupPhoneNumber.append(formLabelPhoneNumber, formInputPhoneNumber);
    formGroupComments.append(formLabelComments, formInputComments);
    


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
            document.body.classList.remove('no-scroll');
        })
    })
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactInfo);






/***/ }),

/***/ "./src/reservationsInfo.js":
/*!*********************************!*\
  !*** ./src/reservationsInfo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_reservations_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/reservations.jpg */ "./src/img/reservations.jpg");


const reservationsInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    document.querySelector('.navbar__nav-item--reservations').classList.add('active');
    
    const navBar = document.querySelector('.navbar');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoPanelAbout = document.createElement('div');
    infoPanelAbout.classList.add('info-panel', 'info-panel--about');

    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary');
    headingPrimary.append('Reservations');

    const infoPanelContent = document.createElement('div');
    infoPanelContent.classList.add('info-panel__content');

    const infoPanelContentMain = document.createElement('div');
    infoPanelContentMain.classList.add('info-panel__content-main');

    const imgReservations = document.createElement('img');
    imgReservations.classList.add('img', 'img__about');
    imgReservations.src = _img_reservations_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const infoPanelContentSecondary = document.createElement('div');
    infoPanelContentSecondary.classList.add('info-panel__content-secondary');

    const reserveBtn = document.createElement('button');
    reserveBtn.append('Reserve a Table');
    reserveBtn.classList.add('reserve-btn')

    const p1 = document.createElement('p');
    p1.append('M - F: 9am - 12pm, 12am - 6pm.');
    p1.style.whiteSpace = 'nowrap'

    const p2 = document.createElement('p');
    p2.append('Weekends: 8am - 10pm.');

    const p3 = document.createElement('p');
    p3.append('Et dolorum rerum ab voluptatem voluptatum eum velit repellat? In aliquid eveniet eum nulla veritatis sed quod nisi ut distinctio ducimus ad laudantium laborum.');

    navBar.insertAdjacentElement('afterend', info)
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);
    infoPanelContent.append(infoPanelContentMain, infoPanelContentSecondary);
    infoPanelContentMain.append(imgReservations);
    infoPanelContentSecondary.append(p1, p2, p3, reserveBtn);


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
            document.body.classList.remove('no-scroll');
        })
    })
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationsInfo);






/***/ }),

/***/ "./dist/images/hero.jpg":
/*!******************************!*\
  !*** ./dist/images/hero.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/hero.jpg";

/***/ }),

/***/ "./src/img/about.jpg":
/*!***************************!*\
  !*** ./src/img/about.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/about.jpg";

/***/ }),

/***/ "./src/img/concepts1.jpg":
/*!*******************************!*\
  !*** ./src/img/concepts1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/concepts1.jpg";

/***/ }),

/***/ "./src/img/concepts2.jpg":
/*!*******************************!*\
  !*** ./src/img/concepts2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/concepts2.jpg";

/***/ }),

/***/ "./src/img/concepts3.jpg":
/*!*******************************!*\
  !*** ./src/img/concepts3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/concepts3.jpg";

/***/ }),

/***/ "./src/img/reservations.jpg":
/*!**********************************!*\
  !*** ./src/img/reservations.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/reservations.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _aboutInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutInfo.js */ "./src/aboutInfo.js");
/* harmony import */ var _reservationsInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservationsInfo.js */ "./src/reservationsInfo.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _conceptsInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conceptsInfo.js */ "./src/conceptsInfo.js");
//Dependencies List

// import heroImage from "./img/hero.jpg";






// Query Selectors //
const navBar = document.querySelector('.navbar');
const reservationsBtn = document.querySelector('.reservations-btn');
const navLinkAbout = document.querySelector('.navbar__nav-item--about');
const navLinkReservations = document.querySelector('.navbar__nav-item--reservations');
const navLinkLocations = document.querySelector('.navbar__nav-item--locations');
const navLinkContact = document.querySelector('.navbar__nav-item--contact');
const navLinkConcepts = document.querySelector('.navbar__nav-item--concepts');
const navItems = document.querySelectorAll('.navbar__nav-item');
const primaryNav = document.querySelector('.primary-navigation');
const navToggler = document.querySelector('.toggler');

// Event handlers //
navLinkAbout.onclick = _aboutInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"];

navLinkReservations.onclick = _reservationsInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"];

reservationsBtn.onclick = _reservationsInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"];

navLinkContact.onclick = _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"];

navLinkConcepts.onclick = _conceptsInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"];

//smooth scrolling


document.querySelectorAll('a[href="#map"]').forEach(link => {
    link.addEventListener('click', function (e){
        e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
    })
})


//Nav Toggler

navToggler.addEventListener('click', ()=>{
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', 'true');
        primaryNav.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        primaryNav.setAttribute('aria-expanded', 'false');
    }
})

let mql = window.matchMedia('(max-width: 610px)');   //media query list

window.addEventListener('resize', ()=>{                                 //should probably throttle this...
    if(mql.matches){
        primaryNav.setAttribute('data-visible', 'false');
        primaryNav.setAttribute('aria-expanded', 'false');
    }
})


const navLinks = document.querySelectorAll('.navbar__nav-item');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', 'false');
        primaryNav.setAttribute('aria-expanded', 'false');
        document.body.classList.add('no-scroll');
    })
})


navLinkLocations.addEventListener('click', ()=>{
    navItems.forEach(item => {
        item.classList.remove('active');
    })
    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }
    navLinkLocations.classList.add('active')
    document.body.classList.remove('no-scroll');
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsK0hBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDREQUE0RCxRQUFRLDBCQUEwQix1QkFBdUIsS0FBSyxTQUFTLDZCQUE2QixLQUFLLFVBQVUsMEJBQTBCLHVCQUF1QixLQUFLLEdBQUcsS0FBSyxjQUFjLGVBQWUsd0JBQXdCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxPQUFPLDBCQUEwQixtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLDZDQUE2QyxVQUFVLHFCQUFxQixLQUFLLEdBQUcsNkNBQTZDLFVBQVUsdUJBQXVCLEtBQUssR0FBRyxVQUFVLDJCQUEyQiw4Q0FBOEMscUJBQXFCLHNCQUFzQixvQ0FBb0MsZ0JBQWdCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLHFCQUFxQixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyw4QkFBOEIsdUJBQXVCLEdBQUcsNkNBQTZDLHNCQUFzQix5QkFBeUIsS0FBSyxHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyw2Q0FBNkMscUNBQXFDLG9CQUFvQixLQUFLLEdBQUcsT0FBTyx3QkFBd0IsR0FBRyxpQkFBaUIsNkJBQTZCLHFCQUFxQixHQUFHLHVCQUF1QixvQkFBb0IscUJBQXFCLGtEQUFrRCxHQUFHLHdCQUF3QixlQUFlLEdBQUcsd0JBQXdCLGlCQUFpQixHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLEdBQUcsZ0JBQWdCLHFCQUFxQixHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLDhDQUE4QyxxQkFBcUIsb0JBQW9CLDhCQUE4QiwyQkFBMkIsdUJBQXVCLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsOENBQThDLHFCQUFxQixvQkFBb0IsMkJBQTJCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLG1CQUFtQixtQkFBbUIsMEJBQTBCLHFCQUFxQixHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsNkNBQTZDLGtCQUFrQix5QkFBeUIsS0FBSyxHQUFHLGNBQWMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQixnQ0FBZ0MsY0FBYyxrQkFBa0Isa0JBQWtCLEdBQUcsa0JBQWtCLG9CQUFvQiw4QkFBOEIsR0FBRyw2Q0FBNkMsb0JBQW9CLG9DQUFvQyxLQUFLLEdBQUcsNkNBQTZDLGNBQWMscUJBQXFCLEtBQUssR0FBRywrQ0FBK0MsZUFBZSx5QkFBeUIsS0FBSyxHQUFHLFdBQVcsb0NBQW9DLGdEQUFnRCxrQkFBa0IsZ0JBQWdCLG9CQUFvQixxQkFBcUIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsNkNBQTZDLGtCQUFrQixvQkFBb0IsNkJBQTZCLDhCQUE4QixLQUFLLEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHlCQUF5Qix1QkFBdUIseUJBQXlCLG1CQUFtQixHQUFHLGdCQUFnQixtQkFBbUIsMEJBQTBCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLDZDQUE2QyxXQUFXLGtCQUFrQixvQ0FBb0Msa0JBQWtCLG9CQUFvQiw2QkFBNkIsc0JBQXNCLEtBQUssR0FBRyxXQUFXLHVCQUF1QixrQkFBa0IsZ0JBQWdCLHNFQUFzRSwyQkFBMkIsZ0NBQWdDLGdCQUFnQixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGtEQUFrRCxHQUFHLGlCQUFpQixxQkFBcUIseUJBQXlCLHNCQUFzQixHQUFHLHlCQUF5Qix1QkFBdUIsaUJBQWlCLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixtQkFBbUIsR0FBRyw2Q0FBNkMsMkJBQTJCLG1CQUFtQiwyQ0FBMkMsb0JBQW9CLEtBQUssR0FBRywrQkFBK0IsZ0NBQWdDLEdBQUcsNkNBQTZDLGlDQUFpQyxzQkFBc0IsS0FBSyxHQUFHLDhCQUE4QiwwQkFBMEIsOENBQThDLG9CQUFvQixxQkFBcUIsOEJBQThCLGlCQUFpQiwyQkFBMkIsR0FBRyxvQ0FBb0Msb0JBQW9CLGVBQWUsaUNBQWlDLEdBQUcsNkNBQTZDLHNDQUFzQyxzQkFBc0IsS0FBSyxHQUFHLDZDQUE2QyxnQ0FBZ0Msd0JBQXdCLHVCQUF1QixpQkFBaUIsS0FBSyxHQUFHLGtCQUFrQixpQkFBaUIscUJBQXFCLHdEQUF3RCx5QkFBeUIsdUJBQXVCLGlCQUFpQixHQUFHLHVCQUF1QiwrQ0FBK0Msb0JBQW9CLHVCQUF1Qix3QkFBd0Isa0JBQWtCLHdCQUF3QixxQkFBcUIsR0FBRyxhQUFhLHFCQUFxQixnQkFBZ0Isc0JBQXNCLGdCQUFnQixpQkFBaUIsZUFBZSxvQkFBb0IsY0FBYyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsNkNBQTZDLCtCQUErQixtREFBbUQsS0FBSyxHQUFHLHNCQUFzQixtQkFBbUIsb0JBQW9CLEdBQUcsNkNBQTZDLHdCQUF3QixzQkFBc0IsS0FBSyxHQUFHLG9CQUFvQixtQkFBbUIsdUJBQXVCLEdBQUcsMEJBQTBCLDhCQUE4QixHQUFHLDZDQUE2QyxhQUFhLG1CQUFtQixLQUFLLEdBQUcsV0FBVyxvQkFBb0IsZ0JBQWdCLDBDQUEwQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixlQUFlLHNCQUFzQixHQUFHLDZDQUE2QyxXQUFXLGtDQUFrQyxLQUFLLEdBQUcsaUJBQWlCLGdDQUFnQyxnQkFBZ0Isa0JBQWtCLDRDQUE0QyxxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIsb0JBQW9CLGdCQUFnQixjQUFjLGdCQUFnQixHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyw2Q0FBNkMsd0JBQXdCLGdCQUFnQixvQkFBb0IsS0FBSyxHQUFHLHdCQUF3QixpQkFBaUIsZ0JBQWdCLGtCQUFrQixHQUFHLGlDQUFpQyw0QkFBNEIsb0JBQW9CLEdBQUcsNkNBQTZDLDBCQUEwQiw2QkFBNkIsS0FBSyxHQUFHLDZCQUE2Qiw4QkFBOEIsZUFBZSxHQUFHLDZDQUE2QywrQkFBK0Isa0JBQWtCLEtBQUssR0FBRyw2Q0FBNkMsc0NBQXNDLGtCQUFrQixrQkFBa0IsS0FBSyxHQUFHLGtDQUFrQyw4QkFBOEIsZUFBZSxvQkFBb0IsR0FBRyw2Q0FBNkMsb0NBQW9DLGtCQUFrQix1QkFBdUIsc0JBQXNCLGlCQUFpQixLQUFLLEdBQUcsK0NBQStDLHVCQUF1QixHQUFHLHNCQUFzQixjQUFjLEdBQUcsNkNBQTZDLGlCQUFpQix3QkFBd0IseUJBQXlCLEtBQUssR0FBRyxXQUFXLGdCQUFnQixrQkFBa0Isd0NBQXdDLDBDQUEwQyxlQUFlLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRywyQkFBMkIsa0JBQWtCLHFCQUFxQixHQUFHLDZDQUE2Qyw2QkFBNkIsd0JBQXdCLDJCQUEyQixLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQixxQkFBcUIsR0FBRyw2Q0FBNkMsNkJBQTZCLHdCQUF3QiwyQkFBMkIsS0FBSyxHQUFHLDJCQUEyQixrQkFBa0IsR0FBRyw2Q0FBNkMsNkJBQTZCLHdCQUF3QiwyQkFBMkIsS0FBSyxHQUFHLDZDQUE2QywwQkFBMEIsZ0JBQWdCLGlCQUFpQixLQUFLLEdBQUcsY0FBYyxpQkFBaUIsZ0JBQWdCLHNCQUFzQixtQkFBbUIsNkJBQTZCLEdBQUcsb0JBQW9CLDJCQUEyQixvQkFBb0IsR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcsNkNBQTZDLHVCQUF1QixvQkFBb0IsMkJBQTJCLEtBQUssR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcsNkNBQTZDLHVCQUF1QixvQkFBb0IsMkJBQTJCLEtBQUssR0FBRyxxQkFBcUIsaUJBQWlCLHFCQUFxQixHQUFHLDZDQUE2Qyx1QkFBdUIsd0JBQXdCLDJCQUEyQixLQUFLLEdBQUcsZUFBZSxzQ0FBc0MscUJBQXFCLEdBQUcsNkNBQTZDLGlCQUFpQix3QkFBd0IsS0FBSyxHQUFHLDZDQUE2QyxXQUFXLGlDQUFpQyx3REFBd0QsS0FBSyxHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLHNCQUFzQixXQUFXLGVBQWUscUJBQXFCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLEdBQUcsNkNBQTZDLGFBQWEsNkJBQTZCLDhCQUE4QiwwQkFBMEIsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUIsd0JBQXdCLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix1Q0FBdUMsMkJBQTJCLEdBQUcsNkNBQTZDLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHNCQUFzQixnREFBZ0QsS0FBSyxHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyw0QkFBNEIsOEJBQThCLEdBQUcscUJBQXFCLG9CQUFvQixxQkFBcUIsOEJBQThCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHlCQUF5QixrQkFBa0IsaUJBQWlCLEdBQUcsNkNBQTZDLHlCQUF5Qiw2QkFBNkIsa0JBQWtCLHlCQUF5QixnQkFBZ0Isb0NBQW9DLDJDQUEyQyxLQUFLLEdBQUcsK0NBQStDLDRDQUE0QyxrQkFBa0Isa0NBQWtDLEtBQUssR0FBRyxpQkFBaUIsMEJBQTBCLHVCQUF1QixlQUFlLHFDQUFxQyxHQUFHLHdCQUF3QixrQkFBa0IsdUJBQXVCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGVBQWUsbUhBQW1ILHVCQUF1QixnQkFBZ0IsR0FBRyw2Q0FBNkMsMEJBQTBCLGtCQUFrQixtQkFBbUIsaUJBQWlCLGlCQUFpQixLQUFLLEdBQUcseUJBQXlCLGdCQUFnQixHQUFHLDZDQUE2QyxtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxjQUFjLHNCQUFzQixnQkFBZ0IsaUJBQWlCLCtCQUErQixlQUFlLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcsNkNBQTZDLGNBQWMsaUNBQWlDLEtBQUssR0FBRyxxQkFBcUIsa0NBQWtDLGlCQUFpQixnQkFBZ0IsR0FBRyw2Q0FBNkMscUJBQXFCLG1CQUFtQixLQUFLLEdBQUcsb0JBQW9CLCtCQUErQixnQkFBZ0IsR0FBRyw2Q0FBNkMsb0JBQW9CLGtDQUFrQyxLQUFLLEdBQUcsT0FBTyxtbEJBQW1sQixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLDBDQUEwQyxTQUFTLDhCQUE4QiwyQkFBMkIsT0FBTyxZQUFZLGlDQUFpQyxPQUFPLGFBQWEs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7O0FBR0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakg1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0k0Qjs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFpQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RWhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzBCO0FBQzFCOztBQUV1QztBQUNjO0FBQ2Q7QUFDTTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixxREFBUzs7QUFFaEMsOEJBQThCLDREQUFnQjs7QUFFOUMsMEJBQTBCLDREQUFnQjs7QUFFMUMseUJBQXlCLG1EQUFXOztBQUVwQywwQkFBMEIsd0RBQVk7O0FBRXRDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscURBQXFEOztBQUVyRCx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hYm91dEluZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbmNlcHRzSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcmVzZXJ2YXRpb25zSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Rpc3QvaW1hZ2VzL2hlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0Mi41JTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1nX19hYm91dCB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb250YWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRpbmctcHJpbWFyeS0tY29uY2VwdHMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1zZWNvbmRhcnktLWNvbnRhY3RGb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2l0LWhhbmRsZSB7XFxuICBjb2xvcjogcmdiKDExNCwgMzcsIDE5MSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGluZy1jb25jZXB0cyB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNcnMgU2FpbnQgRGVsYWZpZWxkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mYS1jcm93biB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5vLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkOWQ3MztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMzg1NWM7XFxufVxcblxcbi5yZXNlcnZlLWJ0biB7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcbi5yZXNlcnZlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcbi5yZXNlcnZlLWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1jb250YWN0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICByaWdodDogMXJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NjYpO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50b2dnbGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50b2dnbGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50b2dnbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5idG4tZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAgd2lkdGg6IGNsYW1wKDYwcmVtLCA2MCUsIDYwcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcbi5mb3JtX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uZm9ybV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGVyX19tYWluIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0OmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19wb3B1cCB7XFxuICBtYXJnaW46IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE1NywgMTE1LCAwLjUxMzcyNTQ5MDIpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNDByZW07XFxufVxcbi5oZWFkZXJfX3BvcHVwLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlcGhpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyX19pdGVtIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmZvb3Rlcl9faXRlbS0tbGluayB7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXJfX2l0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQzKTtcXG4gIH1cXG59XFxuLmZvb3RlciAub2Rpbi1sb2dvIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luOiAwIC0ycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIC5vZGluLWxvZ28ge1xcbiAgICBtYXJnaW46IDAgLTdyZW07XFxuICB9XFxufVxcbi5mb290ZXIgLmdpdC1jYXQge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcbi5mb290ZXIgLmdpdC1jYXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gIH1cXG59XFxuXFxuLmluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHJlbSk7XFxuICB9XFxufVxcblxcbi5pbmZvLXBhbmVsIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcmVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCAyLjZ2dywgMi41cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5mby1wYW5lbF9fY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0b3A6IDNyZW07XFxuICByaWdodDogM3JlbTtcXG59XFxuLmluZm8tcGFuZWxfX2Nsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2Nsb3NlIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMi41cmVtO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LS1jb250YWN0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LW1haW4ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LW1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbi0tYWJvdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAgNHJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWwtLWNvbmNlcHRzLCAuaW5mby1wYW5lbC0tY29udGFjdCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5pbmZvLXBhbmVsLS1hYm91dCB7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzB2dyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0xIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTIge1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICBncmlkLXJvdzogNC81O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbi5ncmlkX19pbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbn1cXG4uZ3JpZF9faW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkX190ZXh0Qm94LS0xIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTEge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgbWFyZ2luOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMiB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMyB7XFxuICBtYXJnaW46IDNyZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHQge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHZ3IGF1dG8gNzB2dyBhdXRvIDcwdncgYXV0bztcXG4gIH1cXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgfVxcbn1cXG4ubmF2YmFyX19uYXYtaXRlbSB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5uYXZiYXJfX25hdi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbiAgfVxcbn1cXG4ubmF2YmFyX19uYXYtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbn1cXG4ubmF2YmFyX19uYXYtaXRlbTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWxpbmsge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rLS1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDByZW0pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPXRydWVdIHtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggd2hpdGU7XFxufVxcbi5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDEyMSU7XFxuICBsZWZ0OiAtMi41cHg7XFxuICB0b3A6IC0xM3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZhLWluc3RhZ3JhbTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTM1JTtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICB0b3A6IC0xMnB4O1xcbiAgICBsZWZ0OiAtM3B4O1xcbiAgfVxcbn1cXG4uZmEtaW5zdGFncmFtOjpiZWZvcmUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW0ge1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XFxuICB6LWluZGV4OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlci1wYWRkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXItcGFkZGluZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gIH1cXG59XFxuXFxuLm1hcC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLm1hcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMnJlbSk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2ltZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX3V0aWxpdGllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX2luZm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19uYXYuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvcGFnZXMvX2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtFQ0NOO0VERUU7SUFDSSxzQkFBQTtFQ0FOO0VER0U7SUFDSSxtQkFBQTtJQUNBLGdCQUFBO0VDRE47QUFDRjtBQ1RBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBRFdKOztBQ1JBO0VBQ0ksZ0JBQUE7QURXSjs7QUNSQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRFdKOztBQ1JBO0VBQ0ksZ0JBQUE7QURXSjtBQ1RJO0VBSEo7SUFJUSxjQUFBO0VEWU47QUFDRjtB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QUxKO0lBTVEsWUFBQTtFWGdyQk47QUFDRjs7QVc1cUJBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0FYK3FCSjtBVzdxQkk7RUFKSjtJQUtRLDJCQUFBO0VYZ3JCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgcHVsc2V7XFxuICAgIDAle1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgNTAle1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgfVxcblxcbiAgICAxMDAle1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG59XCIsXCJAa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDQyLjUlO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMzEpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWdfX2Fib3V0IHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5IHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5oZWFkaW5nLXByaW1hcnktLWNvbnRhY3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb25jZXB0cyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkaW5nLXByaW1hcnkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5oZWFkaW5nLXNlY29uZGFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5naXQtaGFuZGxlIHtcXG4gIGNvbG9yOiByZ2IoMTE0LCAzNywgMTkxKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkaW5nLWNvbmNlcHRzIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkaW5nLWNvbmNlcHRzLS0zIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmZhLWNyb3duIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubm8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ5ZDczO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzODU1YztcXG59XFxuXFxuLnJlc2VydmUtYnRuIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuLnJlc2VydmUtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuLnJlc2VydmUtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5idG4tY29udGFjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuYnRuLWNvbnRhY3Qge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi50b2dnbGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2Nik7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvZ2dsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRvZ2dsZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRvZ2dsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogY2xhbXAoNjByZW0sIDYwJSwgNjByZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5mb3JtX19ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9ybV9fZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5mb3JtX19sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2ltYWdlcy9oZXJvLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGVyX19tYWluIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0OmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19wb3B1cCB7XFxuICBtYXJnaW46IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE1NywgMTE1LCAwLjUxMzcyNTQ5MDIpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNDByZW07XFxufVxcbi5oZWFkZXJfX3BvcHVwLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlcGhpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyX19pdGVtIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmZvb3Rlcl9faXRlbS0tbGluayB7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXJfX2l0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQzKTtcXG4gIH1cXG59XFxuLmZvb3RlciAub2Rpbi1sb2dvIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgbWFyZ2luOiAwIC0ycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIC5vZGluLWxvZ28ge1xcbiAgICBtYXJnaW46IDAgLTdyZW07XFxuICB9XFxufVxcbi5mb290ZXIgLmdpdC1jYXQge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcbi5mb290ZXIgLmdpdC1jYXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3RlciB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gIH1cXG59XFxuXFxuLmluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHJlbSk7XFxuICB9XFxufVxcblxcbi5pbmZvLXBhbmVsIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcmVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCAyLjZ2dywgMi41cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaW5mby1wYW5lbF9fY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0b3A6IDNyZW07XFxuICByaWdodDogM3JlbTtcXG59XFxuLmluZm8tcGFuZWxfX2Nsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2Nsb3NlIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMi41cmVtO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LS1jb250YWN0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LW1haW4ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LW1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbi0tYWJvdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAgNHJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWwtLWNvbmNlcHRzLCAuaW5mby1wYW5lbC0tY29udGFjdCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5pbmZvLXBhbmVsLS1hYm91dCB7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzB2dyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0xIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTIge1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICBncmlkLXJvdzogNC81O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbi5ncmlkX19pbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbn1cXG4uZ3JpZF9faW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkX190ZXh0Qm94LS0xIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTEge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgbWFyZ2luOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMiB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMyB7XFxuICBtYXJnaW46IDNyZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHQge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHZ3IGF1dG8gNzB2dyBhdXRvIDcwdncgYXV0bztcXG4gIH1cXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgfVxcbn1cXG4ubmF2YmFyX19uYXYtaXRlbSB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5uYXZiYXJfX25hdi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbiAgfVxcbn1cXG4ubmF2YmFyX19uYXYtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbn1cXG4ubmF2YmFyX19uYXYtaXRlbTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWxpbmsge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rLS1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDByZW0pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPXRydWVdIHtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggd2hpdGU7XFxufVxcbi5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDEyMSU7XFxuICBsZWZ0OiAtMi41cHg7XFxuICB0b3A6IC0xM3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZhLWluc3RhZ3JhbTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTM1JTtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICB0b3A6IC0xMnB4O1xcbiAgICBsZWZ0OiAtM3B4O1xcbiAgfVxcbn1cXG4uZmEtaW5zdGFncmFtOjpiZWZvcmUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW0ge1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XFxuICB6LWluZGV4OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gIH1cXG59XFxuXFxuLmZvb3Rlci1wYWRkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXItcGFkZGluZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gIH1cXG59XFxuXFxuLm1hcC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLm1hcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMnJlbSk7XFxuICB9XFxufVwiLFwiLy8gZm9udC1mYW1pbHk6ICdNZWllIFNjcmlwdCcsIGN1cnNpdmU7XFxuLy8gZm9udC1mYW1pbHk6ICdNcnMgU2FpbnQgRGVsYWZpZWxkJywgY3Vyc2l2ZTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5he1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZm9udC1zaXplOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KXtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDIuNSU7XFxuICAgIH1cXG59XFxuXFxuYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcblwiLFwiLmltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgJl9fYWJvdXR7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcbn1cIixcIi5oZWFkaW5nLXByaW1hcnl7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgJi0tY29udGFjdHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmLS1jb25jZXB0c3tcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5oZWFkaW5nLXNlY29uZGFyeXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcblxcbiAgICAmLS1jb250YWN0Rm9ybXtcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG5we1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2l0LWhhbmRsZXtcXG4gICAgY29sb3I6IHJnYigxMTQsIDM3LCAxOTEpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGluZy1jb25jZXB0c3tcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LWZhbWlseTogJ01ycyBTYWludCBEZWxhZmllbGQnLCBjdXJzaXZlO1xcblxcbiAgICAmLS0xe1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgICAmLS0ye1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgICYtLTN7XFxuICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgIH1cXG59XFxuXFxuLmZhLWNyb3due1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxufVwiLFwiLmFsaWduLWNlbnRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubm8tc2Nyb2xse1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIixcIi5idG4tcHJpbWFyeXtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ5ZDczO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDIwO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzODU1YztcXG4gICAgfVxcbn1cXG5cXG4ucmVzZXJ2ZS1idG57XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgfVxcbn1cXG5cXG4uYnRuLWNvbnRhY3R7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLnRvZ2dsZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NjYpO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XFxuXFxuLmJ0bi1mb3Jte1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtXFxuICAgIH1cXG59XCIsXCIuZm9ybXtcXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgd2lkdGg6IGNsYW1wKDYwcmVtLCA2MCUsIDYwcmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICAmX19ncm91cHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbnB1dHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgJl9fbGFiZWx7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIHRleHRhcmVhe1xcbiAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8vIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIixcIi5oZXJve1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvaW1hZ2VzL2hlcm8uanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8vIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnTXJzIFNhaW50IERlbGFmaWVsZCcsIGN1cnNpdmU7XFxuICAgICZfX21haW57XFxuICAgICAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRyZW07XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmX19tYXAtc2Nyb2xsZXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDVyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAycztcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgYm90dG9tOiA4cmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19tYXAtc2Nyb2xsZXItdGV4dHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgb3BhY2l0eTogLjg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19wb3B1cHsgICAgICAgIFxcbiAgICAgICAgXFxuICAgICAgICBtYXJnaW46IDNyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkOWQ3MzgzO1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgfVxcblxcbiAgICAmX19wb3B1cC10ZXh0e1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlcGhpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG59XCIsXCIuZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJl9faXRlbXtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gICAgICAgICYtLWxpbmt7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQzKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAub2Rpbi1sb2dve1xcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgICBtYXJnaW46IDAgLTJyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAtN3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZ2l0LWNhdHtcXG4gICAgICAgIGhlaWdodDogMy41cmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgIH1cXG59XFxuXFxuXCIsXCIuaW5mb3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAvLyB0b3A6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIC8vIHRvcDogNXJlbTtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcXG4gICAgfVxcbn1cXG5cXG5cXG4uaW5mby1wYW5lbHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTByZW0pO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjdyZW0sIDIuNnZ3ICwgMi41cmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIC8vIHRvcDogLTRyZW07XFxuXFxuXFxuICAgICZfX2Nsb3Nle1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB0b3A6IDNyZW07XFxuICAgICAgICByaWdodDogM3JlbTtcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICB0b3A6IDFyZW07XFxuICAgICAgICAgICAgcmlnaHQ6IDIuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50e1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgJi0tY29udGFjdHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MCU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fY29udGVudC1tYWlue1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQtbWFpbi0tYWJvdXR7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQtc2Vjb25kYXJ5e1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBwYWRkaW5nOiAwIDRyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi0tY29uY2VwdHMsXFxuICAgICYtLWNvbnRhY3R7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gICAgfVxcblxcbiAgICAmLS1hYm91dHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgIH1cXG59XFxuXFxuLmdyaWR7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAzMHZ3KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgJl9faW1nLWNvbnRhaW5lcntcXG4gICAgICAgcGFkZGluZzogM3JlbTtcXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG5cXG5cXG4gICAgICAgICYtLTF7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAmLS0ye1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi0tM3tcXG4gICAgICAgICAgICBncmlkLXJvdzogNC81O1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2ltZ3tcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGV4dEJveC0tMXtcXG4gICAgICAgIG1hcmdpbjogM3JlbTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmX190ZXh0Qm94LS0ye1xcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBncmlkLXJvdzogNC81O1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICZfX3RleHRCb3gtLTN7XFxuICAgICAgICBtYXJnaW46IDNyZW07XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190ZXh0e1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHZ3IGF1dG8gNzB2dyBhdXRvIDcwdncgYXV0bztcXG4gICAgfVxcbn1cXG5cXG5cIixcIi5uYXZiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAmX19uYXYtaXRlbXtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAmOmFjdGl2ZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX25hdi1saW5re1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgICAgICAmLS1pdGFsaWN7XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5wcmltYXJ5LW5hdmlnYXRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgXFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDVyZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcmVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAucHJpbWFyeS1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT1cXFwidHJ1ZVxcXCJde1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICAgIH1cXG59XFxuXFxuXFxuLmZhLWluc3RhZ3JhbXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IC41cHggd2hpdGU7XFxuXFxuICAgICAgICAmOjphZnRlcntcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMjElO1xcbiAgICAgICAgICAgIGxlZnQ6IC0yLjVweDtcXG4gICAgICAgICAgICB0b3A6IC0xM3B4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTM1JTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xcbiAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAtM3B4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmJlZm9yZXtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XFxuICAgICAgICAgICAgbGVmdDogMnJlbTtcXG4gICAgICAgIH1cXG59XFxuXFxuXCIsXCJcXG5cXG4uY29udGVudHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgICB9XFxuXFxufVxcblxcbi5mb290ZXItcGFkZGluZ3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBoZWlnaHQ6IDhyZW07XFxuICAgIH1cXG4gICBcXG59XFxuXFxuLm1hcC1jb250YWluZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEycmVtKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWJvdXRJbWFnZSBmcm9tIFwiLi9pbWcvYWJvdXQuanBnXCI7XG5cbmNvbnN0IGFib3V0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tYWJvdXQnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQWJvdXQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbCcsICdpbmZvLXBhbmVsLS1hYm91dCcpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5hcHBlbmQoJ0Fib3V0IFVzJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRNYWluLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtbWFpbicsICdpbmZvLXBhbmVsX19jb250ZW50LW1haW4tLWFib3V0Jyk7XG5cbiAgICBjb25zdCBpbWdBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ0Fib3V0LmNsYXNzTGlzdC5hZGQoJ2ltZycsICdpbWdfX2Fib3V0Jyk7XG4gICAgaW1nQWJvdXQuc3JjID0gYWJvdXRJbWFnZTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5Jyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5hcHBlbmQoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBRdWkgc3VudCBtYWlvcmVzIG5vbiBpc3RlIHZlcm8gdXQgZWl1cyBhZGlwaXNjaSBlc3QgcXVhc2kgbGliZXJvLiBFdCBxdWFlcmF0IHZlcm8gbmFtIHJhdGlvbmUgY29uc2VxdWF0dXIgdXQgbGF1ZGFudGl1bSBxdW9zIHF1aSBxdWlzcXVhbSB2b2x1cHRhdGVtIGVhIGFsaWFzIGRpZ25pc3NpbW9zLiBJbiBxdWFzaSBwb3JybyBlc3QgcXVpYSBxdWFtIGF1dCB1bGxhbSBRdWlzIGV0IHJlaWNpZW5kaXMgdmVsaXQgcmVtIGFsaWFzIHJlcHVkaWFuZGFlISBFdCBleGNlcHR1cmkgYXV0ZW0gc2VkIHZvbHVwdGF0ZW0gb2RpbyBxdWkgdml0YWUgbWludXMgc2VkIGRvbG9yZW0gY3VtcXVlIGVzdCB2b2x1cHRhcyBjdWxwYSBhdXQgbW9sZXN0aWFlIGZhY2VyZS4nKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLmFwcGVuZCgnSW4gZ2FsaXN1bSB2ZW5pYW0gc2VkIGluY2lkdW50IHBvc3NpbXVzIGhpYyBlaXVzIHVuZGUgZW9zIGludmVudG9yZSBkb2xvciBldCBkb2xvcmVzIG1hZ25pIGlkIHNpbnQgZWl1cyBldCBuaXNpIHZlbGl0LiBRdWkgdmVybyBhbGlxdWFtIHF1aSBhdXRlbSB0ZW1wb3JlIGF1dCBtaW5pbWEgcmVwZWxsZW5kdXMgdmVsIGRpY3RhIGR1Y2ltdXMgZXN0IGl1c3RvIG1vbGxpdGlhIGVzdCBjdW1xdWUgcXVpYnVzZGFtLicpO1xuXG4gICAgbmF2QmFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpbmZvKVxuICAgIGluZm8uYXBwZW5kKGluZm9QYW5lbEFib3V0KTtcbiAgICBpbmZvUGFuZWxBYm91dC5hcHBlbmQoaW5mb1BhbmVsQ2xvc2UsIGhlYWRpbmdQcmltYXJ5LCBpbmZvUGFuZWxDb250ZW50KTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmFwcGVuZChpbmZvUGFuZWxDb250ZW50TWFpbiwgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeSk7XG4gICAgaW5mb1BhbmVsQ29udGVudE1haW4uYXBwZW5kKGltZ0Fib3V0KTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmFwcGVuZChwMSxwMik7XG5cblxuICAgIGluZm9QYW5lbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaW5mby5yZW1vdmUoKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRJbmZvO1xuXG5cblxuXG4iLCJpbXBvcnQgY29uY2VwdHMxSW1hZ2UgZnJvbSAnLi9pbWcvY29uY2VwdHMxLmpwZydcbmltcG9ydCBjb25jZXB0czJJbWFnZSBmcm9tICcuL2ltZy9jb25jZXB0czIuanBnJ1xuaW1wb3J0IGNvbmNlcHRzM0ltYWdlIGZyb20gJy4vaW1nL2NvbmNlcHRzMy5qcGcnXG5cbmNvbnN0IGNvbmNlcHRzSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tY29uY2VwdHMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbmNlcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29uY2VwdHMuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbCcsICdpbmZvLXBhbmVsLS1jb25jZXB0cycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknLCAnaGVhZGluZy1wcmltYXJ5LS1jb25jZXB0cycpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnQ29uY2VwdHMnKTtcblxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcblxuICAgIGNvbnN0IGltZzFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcxQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZy1jb250YWluZXInLCAnZ3JpZF9faW1nLWNvbnRhaW5lci0tMScpO1xuXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nJywgJ2dyaWRfX2ltZy0tMScpO1xuICAgIGltZzEuc3JjID0gY29uY2VwdHMxSW1hZ2U7XG5cbiAgICBjb25zdCBpbWcyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkX19pbWctY29udGFpbmVyJywgJ2dyaWRfX2ltZy1jb250YWluZXItLTInKTtcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMi5jbGFzc0xpc3QuYWRkKCdncmlkX19pbWcnLCAnZ3JpZF9faW1nLS0yJyk7XG4gICAgaW1nMi5zcmMgPSBjb25jZXB0czJJbWFnZTtcblxuICAgIGNvbnN0IGltZzNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWczQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZy1jb250YWluZXInLCAnZ3JpZF9faW1nLWNvbnRhaW5lci0tMycpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZycsICdncmlkX19pbWctLTMnKTtcbiAgICBpbWczLnNyYyA9IGNvbmNlcHRzM0ltYWdlO1xuXG5cbiAgICBjb25zdCB0ZXh0Qm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRCb3gxLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX3RleHRCb3gtLTEnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nMS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXNlY29uZGFyeScsICdoZWFkaW5nLWNvbmNlcHRzJywgJ2hlYWRpbmctY29uY2VwdHMtLTEnKTtcbiAgICBoZWFkaW5nMS5hcHBlbmQoJ0xpdHRsZSBJdGFseScpO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dCcsICdncmlkX190ZXh0LS0xJyk7XG4gICAgdGV4dDEuYXBwZW5kKCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gTnVuYyBhbGlxdWV0IGJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzIGdyYXZpZGEgbmVxdWUuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMgcHVsdmluYXIuICcpO1xuXG4gICAgY29uc3QgdGV4dEJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94Mi5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0Qm94LS0yJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctY29uY2VwdHMnLCAnaGVhZGluZy1jb25jZXB0cy0tMicpO1xuICAgIGhlYWRpbmcyLmFwcGVuZCgnTGEgQ2FwaXRhbGUnKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX3RleHQnLCAnZ3JpZF9fdGV4dC0tMicpO1xuICAgIHRleHQyLmFwcGVuZCgnU3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bSBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcy4gTG9ib3J0aXMgZmV1Z2lhdCB2aXZhbXVzIGF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW0gdmFyaXVzLiBBbWV0IGFsaXF1YW0gaWQgZGlhbSBtYWVjZW5hcyB1bHRyaWNpZXMgbWkuIFBlbGxlbnRlc3F1ZSBuZWMgbmFtIGFsaXF1YW0gc2VtIGV0IHRvcnRvciBjb25zZXF1YXQuJylcblxuICAgIGNvbnN0IHRleHRCb3gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJveDMuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dEJveC0tMycpO1xuXG4gICAgY29uc3QgaGVhZGluZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmczLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctY29uY2VwdHMnLCAnaGVhZGluZy1jb25jZXB0cy0tMycpO1xuICAgIGhlYWRpbmczLmFwcGVuZCgnTGEgUGVyZ29sYScpO1xuXG4gICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dCcsICdncmlkX190ZXh0LS0zJyk7XG4gICAgdGV4dDMuYXBwZW5kKCdNYWxlc3VhZGEgcGVsbGVudGVzcXVlIGVsaXQgZWdldCBncmF2aWRhIGN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMuIFV0IHNlbSBudWxsYSBwaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wuIERpYW0gcGhhc2VsbHVzIHZlc3RpYnVsdW0gbG9yZW0gc2VkIHJpc3VzIHVsdHJpY2llcyB0cmlzdGlxdWUgbnVsbGEgYWxpcXVldC4gTmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtIGVzdC4nKTtcblxuXG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pXG4gICAgaW5mby5hcHBlbmQoaW5mb1BhbmVsQ29uY2VwdHMpO1xuICAgIGluZm9QYW5lbENvbmNlcHRzLmFwcGVuZChpbmZvUGFuZWxDbG9zZSwgaGVhZGluZ1ByaW1hcnksIGdyaWQpO1xuICAgIGdyaWQuYXBwZW5kKGltZzFDb250YWluZXIsIGltZzJDb250YWluZXIsIGltZzNDb250YWluZXIsIHRleHRCb3gxLCB0ZXh0Qm94MiwgdGV4dEJveDMpO1xuICAgIGltZzFDb250YWluZXIuYXBwZW5kKGltZzEpO1xuICAgIGltZzJDb250YWluZXIuYXBwZW5kKGltZzIpO1xuICAgIGltZzNDb250YWluZXIuYXBwZW5kKGltZzMpO1xuICAgIHRleHRCb3gxLmFwcGVuZChoZWFkaW5nMSwgdGV4dDEpO1xuICAgIHRleHRCb3gyLmFwcGVuZChoZWFkaW5nMiwgdGV4dDIpO1xuICAgIHRleHRCb3gzLmFwcGVuZChoZWFkaW5nMywgdGV4dDMpO1xuXG5cbiAgICBpbmZvUGFuZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmNlcHRzSW5mbztcblxuXG5cblxuIiwiY29uc3QgY29udGFjdEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19uYXYtaXRlbScpO1xuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWNvbnRhY3QnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQWJvdXQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbCcsICdpbmZvLXBhbmVsLS1jb250YWN0Jyk7XG5cblxuICAgIGNvbnN0IGluZm9QYW5lbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGluZm9QYW5lbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2Nsb3NlJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuYXBwZW5kKCd4Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nUHJpbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1wcmltYXJ5JywgJ2hlYWRpbmctcHJpbWFyeS0tY29udGFjdCcpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnQ29udGFjdCBVcycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudCcsICdpbmZvLXBhbmVsX19jb250ZW50LS1jb250YWN0Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gICAgY29uc3QgaGVhZGluZ1NlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZ1NlY29uZGFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXNlY29uZGFyeScsICdoZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0nKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5LmFwcGVuZCgnQ29udGFjdCBJbmZvcm1hdGlvbicpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwTmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBOYW1lMS5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpO1xuICAgICAgICBjb25zdCBmb3JtTGFiZWxOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbE5hbWUxLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbE5hbWUxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0TmFtZScpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMS5hcHBlbmQoJ0ZpcnN0IE5hbWU6Jyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXROYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuaWQgPSBcImZpcnN0TmFtZVwiO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUxLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaXJzdE5hbWUnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUxLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBmaXJzdCBuYW1lPycpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGZvcm1Hcm91cE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwTmFtZTIuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZ3JvdXAnKTsgXG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTIuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTIuc2V0QXR0cmlidXRlKCdmb3InLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTIuYXBwZW5kKCdMYXN0IE5hbWU6Jyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXROYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTIuaWQgPSBcImxhc3ROYW1lXCI7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhc3ROYW1lJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXRcXCdzIHlvdXIgbGFzdCBuYW1lPycpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGZvcm1Hcm91cEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwRW1haWwuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZ3JvdXAnKTsgXG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsRW1haWwuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsRW1haWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICAgICAgZm9ybUxhYmVsRW1haWwuYXBwZW5kKCdFbWFpbDonKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5pZCA9IFwiZW1haWxcIjtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0RW1haWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXRcXCdzIHlvdXIgZW1haWw/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwUGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpOyBcbiAgICAgICAgY29uc3QgZm9ybUxhYmVsUGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwaG9uZU51bWJlcicpO1xuICAgICAgICBmb3JtTGFiZWxQaG9uZU51bWJlci5hcHBlbmQoJ1Bob25lIE51bWJlcjonKVxuICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0UGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dFBob25lTnVtYmVyLmlkID0gXCJwaG9uZU51bWJlclwiO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RlbCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Bob25lTnVtYmVyJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXRcXCdzIHlvdXIgcGhvbmUgbnVtYmVyPycpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdTZWNvbmRhcnkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5Mi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXNlY29uZGFyeScsICdoZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0nKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5Mi5hcHBlbmQoJ0NvbW1lbnRzJylcblxuICAgIGNvbnN0IGZvcm1Hcm91cENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwQ29tbWVudHMuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZ3JvdXAnKTtcbiAgICAgICAgY29uc3QgZm9ybUlucHV0Q29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5pZCA9IFwiY29tbWVudHNcIjtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbW1lbnRzJyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdIYXZlIGEgc3VnZ2VzdGlvbj8nKTtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1MYWJlbENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGZvcm1MYWJlbENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2xhYmVsJyk7XG4gICAgICAgICAgICBmb3JtTGFiZWxDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb21tZW50cycpXG4gICAgICAgICAgICBmb3JtTGFiZWxDb21tZW50cy5hcHBlbmQoJ1lvdXIgRmVlZGJhY2s6JylcblxuICAgIGNvbnN0IGJ0bkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2J0bi1mb3JtJywgJ2J0bi1wcmltYXJ5JywgJ2FsaWduLWNlbnRlcicsICdidG4tY29udGFjdCcpO1xuICAgIGJ0bkZvcm0uYXBwZW5kKCdTdWJtaXQnKTtcblxuXG4gICAgbmF2QmFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpbmZvKTtcbiAgICBpbmZvLmFwcGVuZChpbmZvUGFuZWxBYm91dCk7XG4gICAgaW5mb1BhbmVsQWJvdXQuYXBwZW5kKGluZm9QYW5lbENsb3NlLCBoZWFkaW5nUHJpbWFyeSwgaW5mb1BhbmVsQ29udGVudCk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5hcHBlbmQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmQoaGVhZGluZ1NlY29uZGFyeSxmb3JtR3JvdXBOYW1lMSxmb3JtR3JvdXBOYW1lMixmb3JtR3JvdXBFbWFpbCxmb3JtR3JvdXBQaG9uZU51bWJlcixoZWFkaW5nU2Vjb25kYXJ5Mixmb3JtR3JvdXBDb21tZW50cyxidG5Gb3JtKTtcbiAgICBmb3JtR3JvdXBOYW1lMS5hcHBlbmQoZm9ybUxhYmVsTmFtZTEsZm9ybUlucHV0TmFtZTEpO1xuICAgIGZvcm1Hcm91cE5hbWUyLmFwcGVuZChmb3JtTGFiZWxOYW1lMixmb3JtSW5wdXROYW1lMik7XG4gICAgZm9ybUdyb3VwRW1haWwuYXBwZW5kKGZvcm1MYWJlbEVtYWlsLGZvcm1JbnB1dEVtYWlsKTtcbiAgICBmb3JtR3JvdXBQaG9uZU51bWJlci5hcHBlbmQoZm9ybUxhYmVsUGhvbmVOdW1iZXIsIGZvcm1JbnB1dFBob25lTnVtYmVyKTtcbiAgICBmb3JtR3JvdXBDb21tZW50cy5hcHBlbmQoZm9ybUxhYmVsQ29tbWVudHMsIGZvcm1JbnB1dENvbW1lbnRzKTtcbiAgICBcblxuXG4gICAgaW5mb1BhbmVsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpbmZvLnJlbW92ZSgpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0SW5mbztcblxuXG5cblxuIiwiaW1wb3J0IHJlc2VydmF0aW9uc0ltYWdlIGZyb20gXCIuL2ltZy9yZXNlcnZhdGlvbnMuanBnXCI7XG5cbmNvbnN0IHJlc2VydmF0aW9uc0luZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19uYXYtaXRlbScpO1xuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLXJlc2VydmF0aW9ucycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIFxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQWJvdXQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbCcsICdpbmZvLXBhbmVsLS1hYm91dCcpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5hcHBlbmQoJ1Jlc2VydmF0aW9ucycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudCcpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50TWFpbi5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50LW1haW4nKTtcblxuICAgIGNvbnN0IGltZ1Jlc2VydmF0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ1Jlc2VydmF0aW9ucy5jbGFzc0xpc3QuYWRkKCdpbWcnLCAnaW1nX19hYm91dCcpO1xuICAgIGltZ1Jlc2VydmF0aW9ucy5zcmMgPSByZXNlcnZhdGlvbnNJbWFnZTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5Jyk7XG5cbiAgICBjb25zdCByZXNlcnZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2ZUJ0bi5hcHBlbmQoJ1Jlc2VydmUgYSBUYWJsZScpO1xuICAgIHJlc2VydmVCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXJ2ZS1idG4nKVxuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEuYXBwZW5kKCdNIC0gRjogOWFtIC0gMTJwbSwgMTJhbSAtIDZwbS4nKTtcbiAgICBwMS5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCdcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLmFwcGVuZCgnV2Vla2VuZHM6IDhhbSAtIDEwcG0uJyk7XG5cbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMy5hcHBlbmQoJ0V0IGRvbG9ydW0gcmVydW0gYWIgdm9sdXB0YXRlbSB2b2x1cHRhdHVtIGV1bSB2ZWxpdCByZXBlbGxhdD8gSW4gYWxpcXVpZCBldmVuaWV0IGV1bSBudWxsYSB2ZXJpdGF0aXMgc2VkIHF1b2QgbmlzaSB1dCBkaXN0aW5jdGlvIGR1Y2ltdXMgYWQgbGF1ZGFudGl1bSBsYWJvcnVtLicpO1xuXG4gICAgbmF2QmFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpbmZvKVxuICAgIGluZm8uYXBwZW5kKGluZm9QYW5lbEFib3V0KTtcbiAgICBpbmZvUGFuZWxBYm91dC5hcHBlbmQoaW5mb1BhbmVsQ2xvc2UsIGhlYWRpbmdQcmltYXJ5LCBpbmZvUGFuZWxDb250ZW50KTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmFwcGVuZChpbmZvUGFuZWxDb250ZW50TWFpbiwgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeSk7XG4gICAgaW5mb1BhbmVsQ29udGVudE1haW4uYXBwZW5kKGltZ1Jlc2VydmF0aW9ucyk7XG4gICAgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeS5hcHBlbmQocDEsIHAyLCBwMywgcmVzZXJ2ZUJ0bik7XG5cblxuICAgIGluZm9QYW5lbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaW5mby5yZW1vdmUoKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25zSW5mbztcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vRGVwZW5kZW5jaWVzIExpc3RcbmltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbi8vIGltcG9ydCBoZXJvSW1hZ2UgZnJvbSBcIi4vaW1nL2hlcm8uanBnXCI7XG5cbmltcG9ydCBhYm91dEluZm8gZnJvbSBcIi4vYWJvdXRJbmZvLmpzXCI7XG5pbXBvcnQgcmVzZXJ2YXRpb25zSW5mbyBmcm9tIFwiLi9yZXNlcnZhdGlvbnNJbmZvLmpzXCI7XG5pbXBvcnQgY29udGFjdEluZm8gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IGNvbmNlcHRzSW5mbyBmcm9tIFwiLi9jb25jZXB0c0luZm8uanNcIjtcblxuLy8gUXVlcnkgU2VsZWN0b3JzIC8vXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5jb25zdCByZXNlcnZhdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25zLWJ0bicpO1xuY29uc3QgbmF2TGlua0Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWFib3V0Jyk7XG5jb25zdCBuYXZMaW5rUmVzZXJ2YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLXJlc2VydmF0aW9ucycpO1xuY29uc3QgbmF2TGlua0xvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1sb2NhdGlvbnMnKTtcbmNvbnN0IG5hdkxpbmtDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWNvbnRhY3QnKTtcbmNvbnN0IG5hdkxpbmtDb25jZXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1jb25jZXB0cycpO1xuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19uYXYtaXRlbScpO1xuY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdmlnYXRpb24nKTtcbmNvbnN0IG5hdlRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlcicpO1xuXG4vLyBFdmVudCBoYW5kbGVycyAvL1xubmF2TGlua0Fib3V0Lm9uY2xpY2sgPSBhYm91dEluZm87XG5cbm5hdkxpbmtSZXNlcnZhdGlvbnMub25jbGljayA9IHJlc2VydmF0aW9uc0luZm87XG5cbnJlc2VydmF0aW9uc0J0bi5vbmNsaWNrID0gcmVzZXJ2YXRpb25zSW5mbztcblxubmF2TGlua0NvbnRhY3Qub25jbGljayA9IGNvbnRhY3RJbmZvO1xuXG5uYXZMaW5rQ29uY2VwdHMub25jbGljayA9IGNvbmNlcHRzSW5mbztcblxuLy9zbW9vdGggc2Nyb2xsaW5nXG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmPVwiI21hcFwiXScpLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KTtcbiAgICB9KVxufSlcblxuXG4vL05hdiBUb2dnbGVyXG5cbm5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBwcmltYXJ5TmF2LmdldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJyk7XG4gICAgaWYodmlzaWJpbGl0eSA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAndHJ1ZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICdmYWxzZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cbn0pXG5cbmxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjEwcHgpJyk7ICAgLy9tZWRpYSBxdWVyeSBsaXN0XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+eyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2hvdWxkIHByb2JhYmx5IHRocm90dGxlIHRoaXMuLi5cbiAgICBpZihtcWwubWF0Y2hlcyl7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG59KVxuXG5cbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICdmYWxzZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgIH0pXG59KVxuXG5cbm5hdkxpbmtMb2NhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgbmF2TGlua0xvY2F0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9