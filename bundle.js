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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.fa-crown {\n  padding: 0 1rem;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.btn-primary {\n  padding: 1rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: #bd9d73;\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: #a3855c;\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler:hover {\n    background-color: transparent;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n  }\n}\n\n.hero {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 8rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  opacity: 0.8;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 1;\n  }\n}\n.header__popup {\n  margin: 3rem;\n  margin-bottom: 0;\n  background-color: rgba(189, 157, 115, 0.5137254902);\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  width: 40rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__popup-text {\n  font-family: \"Josephin Sans\", sans-serif;\n  font-size: 2rem;\n  font-style: italic;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 8rem;\n  }\n}\n\n.info {\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 10rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n  height: initial;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n    padding: 0;\n  }\n}\n.info-panel--concepts, .info-panel--contact {\n  overflow-y: scroll;\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    padding-bottom: 0;\n    overflow-y: scroll;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: 70vw auto 70vw auto 70vw auto;\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 3;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item:active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 5rem;\n    transform: translateY(-40rem);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(0rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 4rem);\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .content {\n    height: calc(100vh - 8rem);\n  }\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 8rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 12rem);\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_animations.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/base/_img.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_info.scss","webpack://./src/scss/layout/_nav.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes pulse{\n    0%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n\n    50%{\n        transform: scale(1.05);\n    }\n\n    100%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n}","@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.fa-crown {\n  padding: 0 1rem;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.btn-primary {\n  padding: 1rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: #bd9d73;\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: #a3855c;\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler:hover {\n    background-color: transparent;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n  }\n}\n\n.hero {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  background-image: url(/dist/images/hero.jpg);\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 8rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  opacity: 0.8;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 1;\n  }\n}\n.header__popup {\n  margin: 3rem;\n  margin-bottom: 0;\n  background-color: rgba(189, 157, 115, 0.5137254902);\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  width: 40rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header__popup-text {\n  font-family: \"Josephin Sans\", sans-serif;\n  font-size: 2rem;\n  font-style: italic;\n  letter-spacing: 1px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 8rem;\n  }\n}\n\n.info {\n  position: fixed;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 10rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n  height: initial;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n    padding: 0;\n  }\n}\n.info-panel--concepts, .info-panel--contact {\n  overflow-y: scroll;\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    padding-bottom: 0;\n    overflow-y: scroll;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: 70vw auto 70vw auto 70vw auto;\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 3;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item:active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    width: 100%;\n    position: absolute;\n    top: 5rem;\n    transform: translateY(-40rem);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(0rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 4rem);\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .content {\n    height: calc(100vh - 8rem);\n  }\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 8rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 12rem);\n  }\n}","// font-family: 'Meie Script', cursive;\n// font-family: 'Mrs Saint Delafield', cursive;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nli{\n    list-style: none;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n\n    @media only screen and (max-width:610px){\n        font-size: 50%;\n    }\n\n    @media only screen and (max-width:375px){\n        font-size: 42.5%;\n    }\n}\n\nbody{\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 200;\n    font-size: 2.5rem;\n    background-color: rgb(6, 6, 31);\n    color: #fff;\n}\n\n",".img{\n    width: 100%;\n    height: 100%;\n    &__about{\n        object-fit: cover;\n    }\n}",".heading-primary{\n    font-size: 8rem;\n    font-weight: 100;\n\n    &--contact{\n        text-align: center;\n    }\n\n    &--concepts{\n        font-style: italic;\n    }\n\n    @media only screen and (max-width:610px){\n        text-align: center;\n    }\n}\n\n.heading-secondary{\n    margin-bottom: 1.5rem;\n\n    &--contactForm{\n        @media only screen and (max-width:610px){\n            display: none;\n        }\n    }\n}\n\n\np{\n    margin-bottom: 2rem;\n}\n\n.git-handle{\n    color: rgb(114, 37, 191);\n    font-weight: 400;\n}\n\n.heading-concepts{\n    font-size: 5rem;\n    font-weight: 100;\n    font-family: 'Mrs Saint Delafield', cursive;\n\n    &--1{\n        color: red;\n    }\n    &--2{\n        color: white;\n    }\n    &--3{\n        color: green;\n    }\n}\n\n.fa-crown{\n    padding: 0 1rem;\n}",".align-center{\n    display: block;\n    margin: 0 auto;\n}\n\n.no-scroll{\n    overflow: hidden;\n}",".btn-primary{\n    padding: 1rem 2rem;\n    color: #fff;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 3rem;\n    // background-color: rgba(0, 0, 0, 0.565);\n    background-color: #bd9d73;\n    border: 2px solid #fff;\n    border-radius: 3px;\n    z-index: 20;\n\n    &:hover{\n        cursor: pointer;\n        background-color: #a3855c;\n    }\n}\n\n.reserve-btn{\n    padding: 1.5rem;\n    color: black;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 2rem;\n    background-color: #fff;\n    border: none;\n    border-radius: 1px;\n    z-index: 20;\n    display: block;\n    margin: 0 auto;\n    transition: all 200ms;\n    margin-top: 4rem;\n\n    &:hover{\n        cursor: pointer;\n        background-color: tan;\n        transform: translateY(-2px);\n    }\n    &:active{\n        transform: translateY(-1px);\n    }\n}\n\n.btn-contact{\n    border: 1px solid #000;\n\n    @media only screen and (max-width:610px){\n        border-color: #fff;\n    }\n}\n\n.toggler{\n    position: absolute;\n    z-index: 999;\n    right: 1rem;\n    width: 4rem;\n    aspect-ratio: 1;\n    color: rgba(0, 0, 0, 0.666);\n    border: 0;\n    background: 0;\n    display: none;\n\n    &:hover{\n        cursor: pointer;\n        background-color: #edd9bf;\n\n        @media only screen and (max-width:610px){\n            background-color: transparent;\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        display: block;\n    }\n}\n\n.btn-form{\n    @media only screen and (max-width:610px){\n        margin-top: 2.5rem\n    }\n}",".form{\n    // height: calc(100% - 8rem);\n    width: clamp(60rem, 60%, 60rem);\n    background-color: rgba(255, 255, 255, 0.95);\n    padding: 2rem;\n    color: #000;\n    font-size: 2rem;\n    font-weight: 300;\n    // overflow-y: scroll;\n\n    &__group{\n        margin-bottom: 2rem;\n\n        @media only screen and (max-width:610px){\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n        }\n    }\n\n    &__input{\n        width: 100%;\n        padding: 1rem;\n        border: 1px solid #000;\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        color: inherit;\n    }\n\n    &__label{\n        display: block;\n        margin-bottom: .5rem;\n    }\n\n    textarea{\n        resize: none;\n    }\n\n    @media only screen and (max-width:610px){\n        // height: 100%;\n        width: 100%;\n        background-color: transparent;\n        color: #fff;\n        display: flex;\n        flex-direction: column;\n        // overflow-y: hidden;\n        font-size: 3rem;\n    }\n}\n\n\n",".hero{\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    background-image: url(/dist/images/hero.jpg);\n    background-size: cover;\n    background-position: center;\n    z-index: -1;\n}\n\n.header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    // min-height: 100vh;\n    \n    \n    font-family: 'Mrs Saint Delafield', cursive;\n    &__main{\n        font-size: 15rem;\n        margin-bottom: -4rem;\n        user-select: none;\n    }\n\n    &__map-scroller{\n        position: absolute;\n        bottom: 5rem;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: 2s;\n\n        @media only screen and (max-width:610px){\n            bottom: 8rem;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 2rem;\n        }\n\n        &:hover{\n            transform: translateY(-5px);\n\n            @media only screen and (max-width:610px){\n                transform: none;\n            }\n        }\n    }\n\n    &__map-scroller-text{\n        display: inline-block;\n        font-family: 'Josefin Sans', sans-serif;\n        font-size: 2rem;\n        font-weight: 400;\n        text-transform: uppercase;\n        opacity: .8;\n        transition: opacity 1s;\n\n        &:hover{\n            cursor: pointer;\n            opacity: 1;\n            animation: pulse 2s infinite;\n\n            @media only screen and (max-width:610px){\n                animation: none;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n            font-weight: 400;\n            opacity: 1;\n        }\n    }\n\n    &__popup{        \n        \n        margin: 3rem;\n        margin-bottom: 0;\n        background-color: #bd9d7383;\n        padding: .5rem 1rem;\n        border-radius: 5px;\n        width: 40rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    &__popup-text{\n        font-family: 'Josephin Sans', sans-serif;\n        font-size: 2rem;\n        font-style: italic;\n        letter-spacing: 1px;\n        display: flex;\n        align-items: center;\n        margin-bottom: 0;\n    }\n}",".footer{\n    background: #fff;\n    color: #000;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 4rem;\n    z-index: 1;\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__item{\n        padding: 0 10px;\n\n        &--link{\n            margin-left: -10px;\n        }\n\n        &:first-child{\n            @media only screen and (max-width:610px){\n                border-right: 1px solid rgba(0, 0, 0, 0.443);\n            }\n        }\n\n        \n    }\n\n    .odin-logo{\n        height: 3.5rem;\n        margin: 0 -2rem;\n\n        @media only screen and (max-width:610px){\n            margin: 0 -7rem;\n        }\n    }\n\n    .git-cat{\n        height: 3.5rem;\n        transition: all 1s;\n\n        &:hover{\n            transform: rotate(360deg);\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        height: 8rem;\n    }\n}\n\n",".info{\n    position: fixed;\n    // top: 4rem;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .85);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n    min-height: 100vh;\n\n    @media only screen and (max-width:610px){\n        // top: 5rem;\n        height: calc(100vh - 20rem);\n    }\n}\n\n\n.info-panel{\n    height: calc(100vh - 10rem);\n    width: 100%;\n    padding: 4rem;\n    font-size: clamp(1.7rem, 2.6vw , 2.5rem);\n    font-weight: 100;\n    line-height: 1.1;\n    position: relative;\n    // overflow-y: scroll;\n    // top: -4rem;\n\n\n    &__close{\n        position: absolute;\n        font-size: 4rem;\n        color: #fff;\n        top: 3rem;\n        right: 3rem;\n\n        &:hover{\n            cursor: pointer;\n        }\n\n        @media only screen and (max-width:610px){\n            top: 1rem;\n            right: 2.5rem;\n        }\n    }\n\n    &__content{\n        height: 100%;\n        width: 100%;\n        display: flex;\n\n        &--contact{\n            justify-content: center;\n            height: initial;\n        }\n\n        @media only screen and (max-width:610px){\n            flex-direction: column;\n        }\n\n        @media only screen and (min-width: 375px) and (max-width:610px){\n            // height: 50%;\n        }\n    }\n    &__content-main{\n        height: calc(100% - 8rem);\n        width: 50%;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n        }\n    }\n\n    &__content-main--about{\n        @media only screen and (max-width:610px){\n            width: 100%;\n            height: 50%;\n        }\n    }\n\n    &__content-secondary{\n        height: calc(100% - 8rem);\n        width: 50%;\n        padding: 0 4rem;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n            margin-top: 3rem;\n            font-size: 3rem;\n            padding: 0;\n        }\n    }\n\n    &--concepts,\n    &--contact{\n        overflow-y: scroll;\n        // height: calc(100vh - 8rem);\n    }\n\n    &--about{\n        margin: 0;\n    }\n\n    @media only screen and (max-width:610px){\n        padding-bottom: 0;\n        overflow-y: scroll;\n\n    }\n}\n\n.grid{\n    width: 100%;\n\n    display: grid;\n    grid-template-rows: repeat(4, 30vw);\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0;\n\n    &__img-container{\n       padding: 3rem;\n       border: 1px solid #fff;\n\n\n        &--1{\n            grid-row: 1/2;\n            grid-column: 1/2;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n            \n        }\n        &--2{\n            grid-row: 2/4;\n            grid-column: 2/3;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n        &--3{\n            grid-row: 4/5;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            border: 0;\n            padding: 0;\n        }\n    }\n\n    &__img{\n        height: 100%;\n        width: 100%;\n        object-fit: cover;\n        display: block;\n        transition: transform 1s;\n\n        &:hover{\n            transform: scale(1.01);\n            cursor: pointer;\n        }\n    }\n\n    &__textBox--1{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 2/3;\n            grid-column: initial;\n        }\n    }\n    &__textBox--2{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 4/5;\n            grid-column: initial;\n        }\n    }\n    &__textBox--3{\n        margin: 3rem;\n        grid-column: 2/3;\n\n        @media only screen and (max-width:610px){\n            grid-row: initial;\n            grid-column: initial;\n        }\n    }\n\n    &__text{\n        font-size: clamp(1rem, 2vw, 2rem);\n        line-height: 1.2;\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        grid-template-columns: 1fr;\n        grid-template-rows: 70vw auto 70vw auto 70vw auto;\n    }\n}\n\n",".navbar{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    font-size: 1.5rem;\n    top: 0;\n    z-index: 3;\n    background: #fff;\n    width: 100%;\n    color: #000;\n    height: 4rem;\n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        height: 5rem;\n    }\n\n    &__nav-item{\n        align-self: stretch;\n        display: block;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        transition: background-color 250ms;\n        background-color: #fff;\n\n        @media only screen and (max-width:610px){\n            font-weight: 300;\n            font-size: 2rem;\n            padding: 1.5rem;\n            border-top: 1px solid rgba(0, 0, 0, 0.13);\n        }\n\n        &:hover{\n            background-color: #edd9bf;\n        }\n        \n        &:active{\n            background-color: #edd9bf;\n        }\n    }\n\n    &__nav-link{\n        padding: 0 10px;\n        padding-top: 5px;\n        text-transform: uppercase;\n\n        &--italic{\n            font-style: italic;\n        }\n    }\n}\n\n.primary-navigation{\n    display: flex;\n    height: 4rem;\n    \n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        width: 100%;\n        position: absolute;\n        top: 5rem;\n        transform: translateY(-40rem);\n        transition: transform 200ms ease-out;\n    }\n}\n\n@media only screen and (max-width:610px){\n    .primary-navigation[data-visible=\"true\"]{\n        z-index: -1;\n        transform: translateY(0rem);\n    }\n}\n\n\n.fa-instagram{\n    display: inline-block;\n    position: absolute;\n    left: 1rem;\n    -webkit-text-stroke: .5px white;\n\n        &::after{\n            content: \"\";\n            position: absolute;\n            height: 25px;\n            width: 121%;\n            left: -2.5px;\n            top: -13px;\n            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n            border-radius: 6px;\n            z-index: -1;\n\n            @media only screen and (max-width:600px){\n                width: 135%;\n                height: 23px;\n                top: -12px;\n                left: -3px;\n            }\n        }\n\n        &::before{\n            color: #fff;\n        }\n\n        @media only screen and (max-width:600px){\n            left: 2rem;\n        }\n}\n\n","\n\n.content{\n    max-width: 1000px;\n    width: 100%;\n    margin: auto;\n    height: calc(100vh - 4rem);\n    z-index: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 8rem);\n    }\n\n}\n\n.footer-padding{\n    background-color: transparent;\n    height: 4rem;\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: 8rem;\n    }\n   \n}\n\n.map-container{\n    height: calc(100vh - 8rem);\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 12rem);\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsR0FBRyw2Q0FBNkMscUJBQXFCLG1CQUFtQixLQUFLLEdBQUcsb0JBQW9CLCtCQUErQixnQkFBZ0IsR0FBRyw2Q0FBNkMsb0JBQW9CLGtDQUFrQyxLQUFLLEdBQUcsT0FBTyxtbEJBQW1sQixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLDBDQUEwQyxTQUFTLDhCQUE4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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7O0FBR0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakg1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0k0Qjs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFpQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RWhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzBCO0FBQzFCOztBQUV1QztBQUNjO0FBQ2Q7QUFDTTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixxREFBUzs7QUFFaEMsOEJBQThCLDREQUFnQjs7QUFFOUMsMEJBQTBCLDREQUFnQjs7QUFFMUMseUJBQXlCLG1EQUFXOztBQUVwQywwQkFBMEIsd0RBQVk7O0FBRXRDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscURBQXFEOztBQUVyRCx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hYm91dEluZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbmNlcHRzSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcmVzZXJ2YXRpb25zSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Rpc3QvaW1hZ2VzL2hlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0Mi41JTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1nX19hYm91dCB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb250YWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRpbmctcHJpbWFyeS0tY29uY2VwdHMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1zZWNvbmRhcnktLWNvbnRhY3RGb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2l0LWhhbmRsZSB7XFxuICBjb2xvcjogcmdiKDExNCwgMzcsIDE5MSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGluZy1jb25jZXB0cyB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNcnMgU2FpbnQgRGVsYWZpZWxkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5mYS1jcm93biB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5vLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkOWQ3MztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMzg1NWM7XFxufVxcblxcbi5yZXNlcnZlLWJ0biB7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcbi5yZXNlcnZlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcbi5yZXNlcnZlLWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1jb250YWN0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICByaWdodDogMXJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NjYpO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50b2dnbGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50b2dnbGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50b2dnbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5idG4tZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAgd2lkdGg6IGNsYW1wKDYwcmVtLCA2MCUsIDYwcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcbi5mb3JtX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uZm9ybV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGVyX19tYWluIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0OmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19wb3B1cCB7XFxuICBtYXJnaW46IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE1NywgMTE1LCAwLjUxMzcyNTQ5MDIpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19wb3B1cC10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZXBoaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9faXRlbSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5mb290ZXJfX2l0ZW0tLWxpbmsge1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyX19pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0Myk7XFxuICB9XFxufVxcbi5mb290ZXIgLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbjogMCAtMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3RlciAub2Rpbi1sb2dvIHtcXG4gICAgbWFyZ2luOiAwIC03cmVtO1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5naXQtY2F0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG4uZm9vdGVyIC5naXQtY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICB9XFxufVxcblxcbi5pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1wYW5lbCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgMi42dncsIDIuNXJlbSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmluZm8tcGFuZWxfX2Nsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdG9wOiAzcmVtO1xcbiAgcmlnaHQ6IDNyZW07XFxufVxcbi5pbmZvLXBhbmVsX19jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jbG9zZSB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDIuNXJlbTtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC0tY29udGFjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogaW5pdGlhbDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC1tYWluIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LW1haW4tLWFib3V0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnkge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwIDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsLS1jb25jZXB0cywgLmluZm8tcGFuZWwtLWNvbnRhY3Qge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uaW5mby1wYW5lbC0tYWJvdXQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB9XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDMwdncpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTEge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMiB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTMge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTMge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuLmdyaWRfX2ltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMSB7XFxuICBtYXJnaW46IDNyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0Qm94LS0xIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0Qm94LS0yIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTMge1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTMge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzB2dyBhdXRvIDcwdncgYXV0byA3MHZ3IGF1dG87XFxuICB9XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW0ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyX19uYXYtaXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW06YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubmF2YmFyX19uYXYtbGluay0taXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByaW1hcnktbmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcmVtKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT10cnVlXSB7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICB9XFxufVxcbi5mYS1pbnN0YWdyYW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMXJlbTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHdoaXRlO1xcbn1cXG4uZmEtaW5zdGFncmFtOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMjElO1xcbiAgbGVmdDogLTIuNXB4O1xcbiAgdG9wOiAtMTNweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogLTE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEzNSU7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgdG9wOiAtMTJweDtcXG4gICAgbGVmdDogLTNweDtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZmEtaW5zdGFncmFtIHtcXG4gICAgbGVmdDogMnJlbTtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcbiAgei1pbmRleDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB9XFxufVxcblxcbi5mb290ZXItcGFkZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyLXBhZGRpbmcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICB9XFxufVxcblxcbi5tYXAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5tYXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTJyZW0pO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19pbWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL191dGlsaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19pbmZvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUNDTjtFREVFO0lBQ0ksc0JBQUE7RUNBTjtFREdFO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtFQ0ROO0FBQ0Y7QUNUQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QURXSjs7QUNSQTtFQUNJLGdCQUFBO0FEV0o7O0FDUkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QURXSjs7QUNSQTtFQUNJLGdCQUFBO0FEV0o7QUNUSTtFQUhKO0lBSVEsY0FBQTtFRFlOO0FBQ0Y7QUNWSTtFQVBKO0lBUVEsZ0JBQUE7RURhTjtBQUNGOztBQ1ZBO0VBQ0ksc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QURhSjs7QUVqREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRm9ESjtBRW5ESTtFQUNJLGlCQUFBO0FGcURSOztBR3pEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBSDRESjtBRzFESTtFQUNJLGtCQUFBO0FINERSO0FHekRJO0VBQ0ksa0JBQUE7QUgyRFI7QUd4REk7RUFaSjtJQWFRLGtCQUFBO0VIMkROO0FBQ0Y7O0FHeERBO0VBQ0kscUJBQUE7QUgyREo7QUd4RFE7RUFESjtJQUVRLGFBQUE7RUgyRFY7QUFDRjs7QUd0REE7RUFDSSxtQkFBQTtBSHlESjs7QUd0REE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FIeURKOztBR3REQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FIeURKO0FHdkRJO0VBQ0ksVUFBQTtBSHlEUjtBR3ZESTtFQUNJLFlBQUE7QUh5RFI7QUd2REk7RUFDSSxZQUFBO0FIeURSOztBR3JEQTtFQUNJLGVBQUE7QUh3REo7O0FJOUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUppSEo7O0FJOUdBO0VBQ0ksZ0JBQUE7QUppSEo7O0FLdkhBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FMeUhKO0FLdkhJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FMeUhSOztBS3JIQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUx3SEo7QUt0SEk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBTHdIUjtBS3RISTtFQUNJLDJCQUFBO0FMd0hSOztBS3BIQTtFQUNJLHNCQUFBO0FMdUhKO0FLckhJO0VBSEo7SUFJUSxrQkFBQTtFTHdITjtBQUNGOztBS3JIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FMd0hKO0FLdEhJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FMd0hSO0FLdEhRO0VBSko7SUFLUSw2QkFBQTtFTHlIVjtBQUNGO0FLdEhJO0VBcEJKO0lBcUJRLGNBQUE7RUx5SE47QUFDRjs7QUtySEk7RUFESjtJQUVRLGtCQUFBO0VMeUhOO0FBQ0Y7O0FNeE1BO0VBRUksK0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FOME1KO0FNdk1JO0VBQ0ksbUJBQUE7QU55TVI7QU12TVE7RUFISjtJQUlRLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VOME1WO0FBQ0Y7QU12TUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBTnlNUjtBTXRNSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBTndNUjtBTXJNSTtFQUNJLFlBQUE7QU51TVI7QU1wTUk7RUF2Q0o7SUF5Q1EsV0FBQTtJQUNBLDZCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUVBLGVBQUE7RU5xTU47QUFDRjs7QU9yUEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBUHdQSjs7QU9yUEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBSUEsMkNBQUE7QVBxUEo7QU9wUEk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QVBzUFI7QU9uUEk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FQcVBSO0FPblBRO0VBVEo7SUFVUSxZQUFBO0lBQ0Esb0NBQUE7SUFDQSxhQUFBO0VQc1BWO0FBQ0Y7QU9wUFE7RUFDSSwyQkFBQTtBUHNQWjtBT3BQWTtFQUhKO0lBSVEsZUFBQTtFUHVQZDtBQUNGO0FPblBJO0VBQ0kscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FQcVBSO0FPblBRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBUHFQWjtBT25QWTtFQUxKO0lBTVEsZUFBQTtFUHNQZDtBQUNGO0FPblBRO0VBbkJKO0lBb0JRLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VQc1BWO0FBQ0Y7QU9uUEk7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QVBvUFI7QU9qUEk7RUFDSSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QVBtUFI7O0FRbFZBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FScVZKO0FRblZJO0VBQ0ksZUFBQTtBUnFWUjtBUW5WUTtFQUNJLGtCQUFBO0FScVZaO0FRalZZO0VBREo7SUFFUSw0Q0FBQTtFUm9WZDtBQUNGO0FROVVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QVJnVlI7QVE5VVE7RUFKSjtJQUtRLGVBQUE7RVJpVlY7QUFDRjtBUTlVSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBUmdWUjtBUTlVUTtFQUNJLHlCQUFBO0FSZ1ZaO0FRNVVJO0VBL0NKO0lBZ0RRLFlBQUE7RVIrVU47QUFDRjs7QVNoWUE7RUFDSSxlQUFBO0VBRUEsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QVRrWUo7QVNoWUk7RUFYSjtJQWFRLDJCQUFBO0VUa1lOO0FBQ0Y7O0FTOVhBO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FUaVlKO0FTNVhJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FUOFhSO0FTNVhRO0VBQ0ksZUFBQTtBVDhYWjtBUzNYUTtFQVhKO0lBWVEsU0FBQTtJQUNBLGFBQUE7RVQ4WFY7QUFDRjtBUzNYSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBVDZYUjtBUzNYUTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBVDZYWjtBUzFYUTtFQVZKO0lBV1Esc0JBQUE7RVQ2WFY7QUFDRjtBU3ZYSTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtBVHlYUjtBU3ZYUTtFQUpKO0lBS1EsV0FBQTtFVDBYVjtBQUNGO0FTdFhRO0VBREo7SUFFUSxXQUFBO0lBQ0EsV0FBQTtFVHlYVjtBQUNGO0FTdFhJO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBVHdYUjtBU3RYUTtFQUxKO0lBTVEsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7RVR5WFY7QUFDRjtBU3RYSTtFQUVJLGtCQUFBO0FUdVhSO0FTblhJO0VBQ0ksU0FBQTtBVHFYUjtBU2xYSTtFQXRGSjtJQXVGUSxpQkFBQTtJQUNBLGtCQUFBO0VUcVhOO0FBQ0Y7O0FTalhBO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtBVG1YSjtBU2pYSTtFQUNHLGFBQUE7RUFDQSxzQkFBQTtBVG1YUDtBU2hYUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBVGtYWjtBU2hYWTtFQUpKO0lBS1EsaUJBQUE7SUFDQSxvQkFBQTtFVG1YZDtBQUNGO0FTaFhRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FUa1haO0FTaFhZO0VBSko7SUFLUSxpQkFBQTtJQUNBLG9CQUFBO0VUbVhkO0FBQ0Y7QVNqWFE7RUFDSSxhQUFBO0FUbVhaO0FTalhZO0VBSEo7SUFJUSxpQkFBQTtJQUNBLG9CQUFBO0VUb1hkO0FBQ0Y7QVNqWFE7RUFqQ0o7SUFrQ1EsU0FBQTtJQUNBLFVBQUE7RVRvWFY7QUFDRjtBU2pYSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QVRtWFI7QVNqWFE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QVRtWFo7QVMvV0k7RUFDSSxZQUFBO0FUaVhSO0FTL1dRO0VBSEo7SUFJUSxhQUFBO0lBQ0Esb0JBQUE7RVRrWFY7QUFDRjtBU2hYSTtFQUNJLFlBQUE7QVRrWFI7QVNoWFE7RUFISjtJQUlRLGFBQUE7SUFDQSxvQkFBQTtFVG1YVjtBQUNGO0FTalhJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FUbVhSO0FTalhRO0VBSko7SUFLUSxpQkFBQTtJQUNBLG9CQUFBO0VUb1hWO0FBQ0Y7QVNqWEk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FUbVhSO0FTalhRO0VBSko7SUFLUSxpQkFBQTtFVG9YVjtBQUNGO0FTalhJO0VBL0ZKO0lBZ0dRLDBCQUFBO0lBQ0EsaURBQUE7RVRvWE47QUFDRjs7QVVya0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FWd2tCSjtBVXRrQkk7RUFiSjtJQWNRLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RVZ5a0JOO0FBQ0Y7QVV2a0JJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FWeWtCUjtBVXZrQlE7RUFUSjtJQVVRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSx5Q0FBQTtFVjBrQlY7QUFDRjtBVXhrQlE7RUFDSSx5QkFBQTtBVjBrQlo7QVV2a0JRO0VBQ0kseUJBQUE7QVZ5a0JaO0FVcmtCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FWdWtCUjtBVXJrQlE7RUFDSSxrQkFBQTtBVnVrQlo7O0FVbGtCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FWcWtCSjtBVWxrQkk7RUFMSjtJQU1RLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDZCQUFBO0lBQ0Esb0NBQUE7RVZxa0JOO0FBQ0Y7O0FVbGtCQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLDJCQUFBO0VWcWtCTjtBQUNGO0FVamtCQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QVZta0JKO0FVamtCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBVm1rQlo7QVVqa0JZO0VBWEo7SUFZUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VWb2tCZDtBQUNGO0FVamtCUTtFQUNJLFdBQUE7QVZta0JaO0FVaGtCUTtFQTdCUjtJQThCWSxVQUFBO0VWbWtCVjtBQUNGOztBVy9xQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QVhrckJKO0FXaHJCSTtFQVZKO0lBV1EsMEJBQUE7RVhtckJOO0FBQ0Y7O0FXL3FCQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QVhrckJKO0FXaHJCSTtFQUxKO0lBTVEsWUFBQTtFWG1yQk47QUFDRjs7QVcvcUJBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0FYa3JCSjtBV2hyQkk7RUFKSjtJQUtRLDJCQUFBO0VYbXJCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgcHVsc2V7XFxuICAgIDAle1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgNTAle1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgfVxcblxcbiAgICAxMDAle1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG59XCIsXCJAa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDQyLjUlO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMzEpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWdfX2Fib3V0IHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5IHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5oZWFkaW5nLXByaW1hcnktLWNvbnRhY3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb25jZXB0cyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkaW5nLXByaW1hcnkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5oZWFkaW5nLXNlY29uZGFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5naXQtaGFuZGxlIHtcXG4gIGNvbG9yOiByZ2IoMTE0LCAzNywgMTkxKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkaW5nLWNvbmNlcHRzIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkaW5nLWNvbmNlcHRzLS0zIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmZhLWNyb3duIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubm8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQ5ZDczO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzODU1YztcXG59XFxuXFxuLnJlc2VydmUtYnRuIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuLnJlc2VydmUtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuLnJlc2VydmUtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5idG4tY29udGFjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuYnRuLWNvbnRhY3Qge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi50b2dnbGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2Nik7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvZ2dsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRvZ2dsZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRvZ2dsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogY2xhbXAoNjByZW0sIDYwJSwgNjByZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5mb3JtX19ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9ybV9fZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5mb3JtX19sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2ltYWdlcy9oZXJvLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGVyX19tYWluIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMnM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0OmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19wb3B1cCB7XFxuICBtYXJnaW46IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE1NywgMTE1LCAwLjUxMzcyNTQ5MDIpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyX19wb3B1cC10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZXBoaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9faXRlbSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5mb290ZXJfX2l0ZW0tLWxpbmsge1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyX19pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0Myk7XFxuICB9XFxufVxcbi5mb290ZXIgLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbjogMCAtMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3RlciAub2Rpbi1sb2dvIHtcXG4gICAgbWFyZ2luOiAwIC03cmVtO1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5naXQtY2F0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG4uZm9vdGVyIC5naXQtY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICB9XFxufVxcblxcbi5pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1wYW5lbCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgMi42dncsIDIuNXJlbSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmluZm8tcGFuZWxfX2Nsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdG9wOiAzcmVtO1xcbiAgcmlnaHQ6IDNyZW07XFxufVxcbi5pbmZvLXBhbmVsX19jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jbG9zZSB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDIuNXJlbTtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC0tY29udGFjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogaW5pdGlhbDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC1tYWluIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LW1haW4tLWFib3V0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnkge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwIDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsLS1jb25jZXB0cywgLmluZm8tcGFuZWwtLWNvbnRhY3Qge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uaW5mby1wYW5lbC0tYWJvdXQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB9XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDMwdncpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTEge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMiB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTMge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTMge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuLmdyaWRfX2ltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMSB7XFxuICBtYXJnaW46IDNyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0Qm94LS0xIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0Qm94LS0yIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTMge1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTMge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzB2dyBhdXRvIDcwdncgYXV0byA3MHZ3IGF1dG87XFxuICB9XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW0ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyX19uYXYtaXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW06YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubmF2YmFyX19uYXYtbGluay0taXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByaW1hcnktbmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcmVtKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT10cnVlXSB7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSk7XFxuICB9XFxufVxcbi5mYS1pbnN0YWdyYW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMXJlbTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHdoaXRlO1xcbn1cXG4uZmEtaW5zdGFncmFtOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMjElO1xcbiAgbGVmdDogLTIuNXB4O1xcbiAgdG9wOiAtMTNweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogLTE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEzNSU7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgdG9wOiAtMTJweDtcXG4gICAgbGVmdDogLTNweDtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZmEtaW5zdGFncmFtIHtcXG4gICAgbGVmdDogMnJlbTtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcbiAgei1pbmRleDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB9XFxufVxcblxcbi5mb290ZXItcGFkZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyLXBhZGRpbmcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICB9XFxufVxcblxcbi5tYXAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5tYXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTJyZW0pO1xcbiAgfVxcbn1cIixcIi8vIGZvbnQtZmFtaWx5OiAnTWVpZSBTY3JpcHQnLCBjdXJzaXZlO1xcbi8vIGZvbnQtZmFtaWx5OiAnTXJzIFNhaW50IERlbGFmaWVsZCcsIGN1cnNpdmU7XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuaHRtbHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweCl7XFxuICAgICAgICBmb250LXNpemU6IDQyLjUlO1xcbiAgICB9XFxufVxcblxcbmJvZHl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAzMSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cIixcIi5pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICZfX2Fib3V0e1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIH1cXG59XCIsXCIuaGVhZGluZy1wcmltYXJ5e1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgICYtLWNvbnRhY3R7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJi0tY29uY2VwdHN7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uaGVhZGluZy1zZWNvbmRhcnl7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG5cXG4gICAgJi0tY29udGFjdEZvcm17XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxucHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmdpdC1oYW5kbGV7XFxuICAgIGNvbG9yOiByZ2IoMTE0LCAzNywgMTkxKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRpbmctY29uY2VwdHN7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNcnMgU2FpbnQgRGVsYWZpZWxkJywgY3Vyc2l2ZTtcXG5cXG4gICAgJi0tMXtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG4gICAgJi0tMntcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICAmLS0ze1xcbiAgICAgICAgY29sb3I6IGdyZWVuO1xcbiAgICB9XFxufVxcblxcbi5mYS1jcm93bntcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbn1cIixcIi5hbGlnbi1jZW50ZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5vLXNjcm9sbHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XCIsXCIuYnRuLXByaW1hcnl7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTY1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkOWQ3MztcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB6LWluZGV4OiAyMDtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMzg1NWM7XFxuICAgIH1cXG59XFxuXFxuLnJlc2VydmUtYnRue1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICAgIH1cXG4gICAgJjphY3RpdmV7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIH1cXG59XFxuXFxuLmJ0bi1jb250YWN0e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxufVxcblxcbi50b2dnbGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY2KTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbi5idG4tZm9ybXtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbVxcbiAgICB9XFxufVwiLFwiLmZvcm17XFxuICAgIC8vIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCg2MHJlbSwgNjAlLCA2MHJlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICAgJl9fZ3JvdXB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW5wdXR7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgICZfX2xhYmVse1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICB0ZXh0YXJlYXtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG59XFxuXFxuXFxuXCIsXCIuaGVyb3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2ltYWdlcy9oZXJvLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgXFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ01ycyBTYWludCBEZWxhZmllbGQnLCBjdXJzaXZlO1xcbiAgICAmX19tYWlue1xcbiAgICAgICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00cmVtO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJl9fbWFwLXNjcm9sbGVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiA1cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMnM7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGJvdHRvbTogOHJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbWFwLXNjcm9sbGVyLXRleHR7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIG9wYWNpdHk6IC44O1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fcG9wdXB7ICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDlkNzM4MztcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB3aWR0aDogNDByZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICZfX3BvcHVwLXRleHR7XFxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VwaGluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbn1cIixcIi5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAmX19pdGVte1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcblxcbiAgICAgICAgJi0tbGlua3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmZpcnN0LWNoaWxke1xcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDMpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5vZGluLWxvZ297XFxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMCAtMnJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIC03cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5naXQtY2F0e1xcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgfVxcbn1cXG5cXG5cIixcIi5pbmZve1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIC8vIHRvcDogNHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjg1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgLy8gdG9wOiA1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgICB9XFxufVxcblxcblxcbi5pbmZvLXBhbmVse1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHJlbSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgMi42dncgLCAyLjVyZW0pO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgLy8gdG9wOiAtNHJlbTtcXG5cXG5cXG4gICAgJl9fY2xvc2V7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIHRvcDogM3JlbTtcXG4gICAgICAgIHJpZ2h0OiAzcmVtO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHRvcDogMXJlbTtcXG4gICAgICAgICAgICByaWdodDogMi41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnR7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAmLS1jb250YWN0e1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmX19jb250ZW50LW1haW57XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudC1tYWluLS1hYm91dHtcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudC1zZWNvbmRhcnl7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgNHJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLS1jb25jZXB0cyxcXG4gICAgJi0tY29udGFjdHtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgICB9XFxuXFxuICAgICYtLWFib3V0e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICAgfVxcbn1cXG5cXG4uZ3JpZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDMwdncpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAmX19pbWctY29udGFpbmVye1xcbiAgICAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcblxcblxcbiAgICAgICAgJi0tMXtcXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgICYtLTJ7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLS0ze1xcbiAgICAgICAgICAgIGdyaWQtcm93OiA0LzU7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW1ne1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190ZXh0Qm94LS0xe1xcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICZfX3RleHRCb3gtLTJ7XFxuICAgICAgICBtYXJnaW46IDNyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGdyaWQtcm93OiA0LzU7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fdGV4dEJveC0tM3tcXG4gICAgICAgIG1hcmdpbjogM3JlbTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RleHR7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwdncgYXV0byA3MHZ3IGF1dG8gNzB2dyBhdXRvO1xcbiAgICB9XFxufVxcblxcblwiLFwiLm5hdmJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMztcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX25hdi1pdGVte1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICY6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbmF2LWxpbmt7XFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgICYtLWl0YWxpY3tcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnByaW1hcnktbmF2aWdhdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNXJlbTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDByZW0pO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gICAgfVxcbn1cXG5cXG5cXG4uZmEtaW5zdGFncmFte1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogLjVweCB3aGl0ZTtcXG5cXG4gICAgICAgICY6OmFmdGVye1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEyMSU7XFxuICAgICAgICAgICAgbGVmdDogLTIuNXB4O1xcbiAgICAgICAgICAgIHRvcDogLTEzcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzUlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XFxuICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YmVmb3Jle1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcXG4gICAgICAgICAgICBsZWZ0OiAycmVtO1xcbiAgICAgICAgfVxcbn1cXG5cXG5cIixcIlxcblxcbi5jb250ZW50e1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICAgIH1cXG5cXG59XFxuXFxuLmZvb3Rlci1wYWRkaW5ne1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogOHJlbTtcXG4gICAgfVxcbiAgIFxcbn1cXG5cXG4ubWFwLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTJyZW0pO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhYm91dEltYWdlIGZyb20gXCIuL2ltZy9hYm91dC5qcGdcIjtcblxuY29uc3QgYWJvdXRJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1hYm91dCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxBYm91dC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWFib3V0Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jbG9zZScpO1xuICAgIGluZm9QYW5lbENsb3NlLmFwcGVuZCgneCcpO1xuXG4gICAgY29uc3QgaGVhZGluZ1ByaW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctcHJpbWFyeScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnQWJvdXQgVXMnKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudE1haW4uY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudC1tYWluJywgJ2luZm8tcGFuZWxfX2NvbnRlbnQtbWFpbi0tYWJvdXQnKTtcblxuICAgIGNvbnN0IGltZ0Fib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nQWJvdXQuY2xhc3NMaXN0LmFkZCgnaW1nJywgJ2ltZ19fYWJvdXQnKTtcbiAgICBpbWdBYm91dC5zcmMgPSBhYm91dEltYWdlO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnknKTtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLmFwcGVuZCgnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIFF1aSBzdW50IG1haW9yZXMgbm9uIGlzdGUgdmVybyB1dCBlaXVzIGFkaXBpc2NpIGVzdCBxdWFzaSBsaWJlcm8uIEV0IHF1YWVyYXQgdmVybyBuYW0gcmF0aW9uZSBjb25zZXF1YXR1ciB1dCBsYXVkYW50aXVtIHF1b3MgcXVpIHF1aXNxdWFtIHZvbHVwdGF0ZW0gZWEgYWxpYXMgZGlnbmlzc2ltb3MuIEluIHF1YXNpIHBvcnJvIGVzdCBxdWlhIHF1YW0gYXV0IHVsbGFtIFF1aXMgZXQgcmVpY2llbmRpcyB2ZWxpdCByZW0gYWxpYXMgcmVwdWRpYW5kYWUhIEV0IGV4Y2VwdHVyaSBhdXRlbSBzZWQgdm9sdXB0YXRlbSBvZGlvIHF1aSB2aXRhZSBtaW51cyBzZWQgZG9sb3JlbSBjdW1xdWUgZXN0IHZvbHVwdGFzIGN1bHBhIGF1dCBtb2xlc3RpYWUgZmFjZXJlLicpO1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuYXBwZW5kKCdJbiBnYWxpc3VtIHZlbmlhbSBzZWQgaW5jaWR1bnQgcG9zc2ltdXMgaGljIGVpdXMgdW5kZSBlb3MgaW52ZW50b3JlIGRvbG9yIGV0IGRvbG9yZXMgbWFnbmkgaWQgc2ludCBlaXVzIGV0IG5pc2kgdmVsaXQuIFF1aSB2ZXJvIGFsaXF1YW0gcXVpIGF1dGVtIHRlbXBvcmUgYXV0IG1pbmltYSByZXBlbGxlbmR1cyB2ZWwgZGljdGEgZHVjaW11cyBlc3QgaXVzdG8gbW9sbGl0aWEgZXN0IGN1bXF1ZSBxdWlidXNkYW0uJyk7XG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pXG4gICAgaW5mby5hcHBlbmQoaW5mb1BhbmVsQWJvdXQpO1xuICAgIGluZm9QYW5lbEFib3V0LmFwcGVuZChpbmZvUGFuZWxDbG9zZSwgaGVhZGluZ1ByaW1hcnksIGluZm9QYW5lbENvbnRlbnQpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuYXBwZW5kKGluZm9QYW5lbENvbnRlbnRNYWluLCBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5KTtcbiAgICBpbmZvUGFuZWxDb250ZW50TWFpbi5hcHBlbmQoaW1nQWJvdXQpO1xuICAgIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkuYXBwZW5kKHAxLHAyKTtcblxuXG4gICAgaW5mb1BhbmVsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpbmZvLnJlbW92ZSgpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhYm91dEluZm87XG5cblxuXG5cbiIsImltcG9ydCBjb25jZXB0czFJbWFnZSBmcm9tICcuL2ltZy9jb25jZXB0czEuanBnJ1xuaW1wb3J0IGNvbmNlcHRzMkltYWdlIGZyb20gJy4vaW1nL2NvbmNlcHRzMi5qcGcnXG5pbXBvcnQgY29uY2VwdHMzSW1hZ2UgZnJvbSAnLi9pbWcvY29uY2VwdHMzLmpwZydcblxuY29uc3QgY29uY2VwdHNJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1jb25jZXB0cycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29uY2VwdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb25jZXB0cy5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWNvbmNlcHRzJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jbG9zZScpO1xuICAgIGluZm9QYW5lbENsb3NlLmFwcGVuZCgneCcpO1xuXG4gICAgY29uc3QgaGVhZGluZ1ByaW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctcHJpbWFyeScsICdoZWFkaW5nLXByaW1hcnktLWNvbmNlcHRzJyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuYXBwZW5kKCdDb25jZXB0cycpO1xuXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuXG4gICAgY29uc3QgaW1nMUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZzFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nLWNvbnRhaW5lcicsICdncmlkX19pbWctY29udGFpbmVyLS0xJyk7XG5cbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdncmlkX19pbWcnLCAnZ3JpZF9faW1nLS0xJyk7XG4gICAgaW1nMS5zcmMgPSBjb25jZXB0czFJbWFnZTtcblxuICAgIGNvbnN0IGltZzJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZy1jb250YWluZXInLCAnZ3JpZF9faW1nLWNvbnRhaW5lci0tMicpO1xuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZycsICdncmlkX19pbWctLTInKTtcbiAgICBpbWcyLnNyYyA9IGNvbmNlcHRzMkltYWdlO1xuXG4gICAgY29uc3QgaW1nM0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZzNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nLWNvbnRhaW5lcicsICdncmlkX19pbWctY29udGFpbmVyLS0zJyk7XG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzMuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nJywgJ2dyaWRfX2ltZy0tMycpO1xuICAgIGltZzMuc3JjID0gY29uY2VwdHMzSW1hZ2U7XG5cblxuICAgIGNvbnN0IHRleHRCb3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJveDEuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dEJveC0tMScpO1xuXG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcxLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctY29uY2VwdHMnLCAnaGVhZGluZy1jb25jZXB0cy0tMScpO1xuICAgIGhlYWRpbmcxLmFwcGVuZCgnTGl0dGxlIEl0YWx5Jyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0JywgJ2dyaWRfX3RleHQtLTEnKTtcbiAgICB0ZXh0MS5hcHBlbmQoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBOdW5jIGFsaXF1ZXQgYmliZW5kdW0gZW5pbSBmYWNpbGlzaXMgZ3JhdmlkYSBuZXF1ZS4gQ3Vyc3VzIGV1aXNtb2QgcXVpcyB2aXZlcnJhIG5pYmggY3JhcyBwdWx2aW5hci4gJyk7XG5cbiAgICBjb25zdCB0ZXh0Qm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRCb3gyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX3RleHRCb3gtLTInKTtcbiAgICBcbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1zZWNvbmRhcnknLCAnaGVhZGluZy1jb25jZXB0cycsICdoZWFkaW5nLWNvbmNlcHRzLS0yJyk7XG4gICAgaGVhZGluZzIuYXBwZW5kKCdMYSBDYXBpdGFsZScpO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dCcsICdncmlkX190ZXh0LS0yJyk7XG4gICAgdGV4dDIuYXBwZW5kKCdTdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtIGVzdCB1bHRyaWNpZXMgaW50ZWdlciBxdWlzLiBMb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXQgYXVndWUgZWdldCBhcmN1IGRpY3R1bSB2YXJpdXMuIEFtZXQgYWxpcXVhbSBpZCBkaWFtIG1hZWNlbmFzIHVsdHJpY2llcyBtaS4gUGVsbGVudGVzcXVlIG5lYyBuYW0gYWxpcXVhbSBzZW0gZXQgdG9ydG9yIGNvbnNlcXVhdC4nKVxuXG4gICAgY29uc3QgdGV4dEJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94My5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0Qm94LS0zJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzMuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1zZWNvbmRhcnknLCAnaGVhZGluZy1jb25jZXB0cycsICdoZWFkaW5nLWNvbmNlcHRzLS0zJyk7XG4gICAgaGVhZGluZzMuYXBwZW5kKCdMYSBQZXJnb2xhJyk7XG5cbiAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0My5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0JywgJ2dyaWRfX3RleHQtLTMnKTtcbiAgICB0ZXh0My5hcHBlbmQoJ01hbGVzdWFkYSBwZWxsZW50ZXNxdWUgZWxpdCBlZ2V0IGdyYXZpZGEgY3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cy4gVXQgc2VtIG51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbC4gRGlhbSBwaGFzZWxsdXMgdmVzdGlidWx1bSBsb3JlbSBzZWQgcmlzdXMgdWx0cmljaWVzIHRyaXN0aXF1ZSBudWxsYSBhbGlxdWV0LiBOaXNsIHN1c2NpcGl0IGFkaXBpc2NpbmcgYmliZW5kdW0gZXN0LicpO1xuXG5cblxuICAgIG5hdkJhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgaW5mbylcbiAgICBpbmZvLmFwcGVuZChpbmZvUGFuZWxDb25jZXB0cyk7XG4gICAgaW5mb1BhbmVsQ29uY2VwdHMuYXBwZW5kKGluZm9QYW5lbENsb3NlLCBoZWFkaW5nUHJpbWFyeSwgZ3JpZCk7XG4gICAgZ3JpZC5hcHBlbmQoaW1nMUNvbnRhaW5lciwgaW1nMkNvbnRhaW5lciwgaW1nM0NvbnRhaW5lciwgdGV4dEJveDEsIHRleHRCb3gyLCB0ZXh0Qm94Myk7XG4gICAgaW1nMUNvbnRhaW5lci5hcHBlbmQoaW1nMSk7XG4gICAgaW1nMkNvbnRhaW5lci5hcHBlbmQoaW1nMik7XG4gICAgaW1nM0NvbnRhaW5lci5hcHBlbmQoaW1nMyk7XG4gICAgdGV4dEJveDEuYXBwZW5kKGhlYWRpbmcxLCB0ZXh0MSk7XG4gICAgdGV4dEJveDIuYXBwZW5kKGhlYWRpbmcyLCB0ZXh0Mik7XG4gICAgdGV4dEJveDMuYXBwZW5kKGhlYWRpbmczLCB0ZXh0Myk7XG5cblxuICAgIGluZm9QYW5lbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaW5mby5yZW1vdmUoKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29uY2VwdHNJbmZvO1xuXG5cblxuXG4iLCJjb25zdCBjb250YWN0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tY29udGFjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxBYm91dC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWNvbnRhY3QnKTtcblxuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknLCAnaGVhZGluZy1wcmltYXJ5LS1jb250YWN0Jyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuYXBwZW5kKCdDb250YWN0IFVzJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50JywgJ2luZm8tcGFuZWxfX2NvbnRlbnQtLWNvbnRhY3QnKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nU2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctc2Vjb25kYXJ5LS1jb250YWN0Rm9ybScpO1xuICAgIGhlYWRpbmdTZWNvbmRhcnkuYXBwZW5kKCdDb250YWN0IEluZm9ybWF0aW9uJyk7XG5cbiAgICBjb25zdCBmb3JtR3JvdXBOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Hcm91cE5hbWUxLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2dyb3VwJyk7XG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbE5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTEuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTEuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3ROYW1lJyk7XG4gICAgICAgIGZvcm1MYWJlbE5hbWUxLmFwcGVuZCgnRmlyc3QgTmFtZTonKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dE5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUxLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5pZCA9IFwiZmlyc3ROYW1lXCI7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZpcnN0TmFtZScpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0XFwncyB5b3VyIGZpcnN0IG5hbWU/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBOYW1lMi5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpOyBcbiAgICAgICAgY29uc3QgZm9ybUxhYmVsTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMi5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXN0TmFtZScpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMi5hcHBlbmQoJ0xhc3QgTmFtZTonKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5pZCA9IFwibGFzdE5hbWVcIjtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBsYXN0IG5hbWU/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBFbWFpbC5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpOyBcbiAgICAgICAgY29uc3QgZm9ybUxhYmVsRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxFbWFpbC5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxFbWFpbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuICAgICAgICBmb3JtTGFiZWxFbWFpbC5hcHBlbmQoJ0VtYWlsOicpO1xuICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0RW1haWwuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLmlkID0gXCJlbWFpbFwiO1xuICAgICAgICAgICAgZm9ybUlucHV0RW1haWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBlbWFpbD8nKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICBjb25zdCBmb3JtR3JvdXBQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Hcm91cFBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2dyb3VwJyk7IFxuICAgICAgICBjb25zdCBmb3JtTGFiZWxQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbFBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbFBob25lTnVtYmVyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Bob25lTnVtYmVyJyk7XG4gICAgICAgIGZvcm1MYWJlbFBob25lTnVtYmVyLmFwcGVuZCgnUGhvbmUgTnVtYmVyOicpXG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXRQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuaWQgPSBcInBob25lTnVtYmVyXCI7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGVsJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncGhvbmVOdW1iZXInKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dFBob25lTnVtYmVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBwaG9uZSBudW1iZXI/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgaGVhZGluZ1NlY29uZGFyeTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmdTZWNvbmRhcnkyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctc2Vjb25kYXJ5LS1jb250YWN0Rm9ybScpO1xuICAgIGhlYWRpbmdTZWNvbmRhcnkyLmFwcGVuZCgnQ29tbWVudHMnKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpO1xuICAgICAgICBjb25zdCBmb3JtSW5wdXRDb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLmlkID0gXCJjb21tZW50c1wiO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29tbWVudHMnKTtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0hhdmUgYSBzdWdnZXN0aW9uPycpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICAgICAgY29uc3QgZm9ybUxhYmVsQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZm9ybUxhYmVsQ29tbWVudHMuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgICAgIGZvcm1MYWJlbENvbW1lbnRzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NvbW1lbnRzJylcbiAgICAgICAgICAgIGZvcm1MYWJlbENvbW1lbnRzLmFwcGVuZCgnWW91ciBGZWVkYmFjazonKVxuXG4gICAgY29uc3QgYnRuRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkZvcm0uY2xhc3NMaXN0LmFkZCgnYnRuLWZvcm0nLCAnYnRuLXByaW1hcnknLCAnYWxpZ24tY2VudGVyJywgJ2J0bi1jb250YWN0Jyk7XG4gICAgYnRuRm9ybS5hcHBlbmQoJ1N1Ym1pdCcpO1xuXG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pO1xuICAgIGluZm8uYXBwZW5kKGluZm9QYW5lbEFib3V0KTtcbiAgICBpbmZvUGFuZWxBYm91dC5hcHBlbmQoaW5mb1BhbmVsQ2xvc2UsIGhlYWRpbmdQcmltYXJ5LCBpbmZvUGFuZWxDb250ZW50KTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmFwcGVuZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZChoZWFkaW5nU2Vjb25kYXJ5LGZvcm1Hcm91cE5hbWUxLGZvcm1Hcm91cE5hbWUyLGZvcm1Hcm91cEVtYWlsLGZvcm1Hcm91cFBob25lTnVtYmVyLGhlYWRpbmdTZWNvbmRhcnkyLGZvcm1Hcm91cENvbW1lbnRzLGJ0bkZvcm0pO1xuICAgIGZvcm1Hcm91cE5hbWUxLmFwcGVuZChmb3JtTGFiZWxOYW1lMSxmb3JtSW5wdXROYW1lMSk7XG4gICAgZm9ybUdyb3VwTmFtZTIuYXBwZW5kKGZvcm1MYWJlbE5hbWUyLGZvcm1JbnB1dE5hbWUyKTtcbiAgICBmb3JtR3JvdXBFbWFpbC5hcHBlbmQoZm9ybUxhYmVsRW1haWwsZm9ybUlucHV0RW1haWwpO1xuICAgIGZvcm1Hcm91cFBob25lTnVtYmVyLmFwcGVuZChmb3JtTGFiZWxQaG9uZU51bWJlciwgZm9ybUlucHV0UGhvbmVOdW1iZXIpO1xuICAgIGZvcm1Hcm91cENvbW1lbnRzLmFwcGVuZChmb3JtTGFiZWxDb21tZW50cywgZm9ybUlucHV0Q29tbWVudHMpO1xuICAgIFxuXG5cbiAgICBpbmZvUGFuZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RJbmZvO1xuXG5cblxuXG4iLCJpbXBvcnQgcmVzZXJ2YXRpb25zSW1hZ2UgZnJvbSBcIi4vaW1nL3Jlc2VydmF0aW9ucy5qcGdcIjtcblxuY29uc3QgcmVzZXJ2YXRpb25zSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tcmVzZXJ2YXRpb25zJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxBYm91dC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWFib3V0Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jbG9zZScpO1xuICAgIGluZm9QYW5lbENsb3NlLmFwcGVuZCgneCcpO1xuXG4gICAgY29uc3QgaGVhZGluZ1ByaW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctcHJpbWFyeScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnUmVzZXJ2YXRpb25zJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRNYWluLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtbWFpbicpO1xuXG4gICAgY29uc3QgaW1nUmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nUmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2ltZycsICdpbWdfX2Fib3V0Jyk7XG4gICAgaW1nUmVzZXJ2YXRpb25zLnNyYyA9IHJlc2VydmF0aW9uc0ltYWdlO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnknKTtcblxuICAgIGNvbnN0IHJlc2VydmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZlQnRuLmFwcGVuZCgnUmVzZXJ2ZSBhIFRhYmxlJyk7XG4gICAgcmVzZXJ2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlLWJ0bicpXG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5hcHBlbmQoJ00gLSBGOiA5YW0gLSAxMnBtLCAxMmFtIC0gNnBtLicpO1xuICAgIHAxLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJ1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuYXBwZW5kKCdXZWVrZW5kczogOGFtIC0gMTBwbS4nKTtcblxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAzLmFwcGVuZCgnRXQgZG9sb3J1bSByZXJ1bSBhYiB2b2x1cHRhdGVtIHZvbHVwdGF0dW0gZXVtIHZlbGl0IHJlcGVsbGF0PyBJbiBhbGlxdWlkIGV2ZW5pZXQgZXVtIG51bGxhIHZlcml0YXRpcyBzZWQgcXVvZCBuaXNpIHV0IGRpc3RpbmN0aW8gZHVjaW11cyBhZCBsYXVkYW50aXVtIGxhYm9ydW0uJyk7XG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pXG4gICAgaW5mby5hcHBlbmQoaW5mb1BhbmVsQWJvdXQpO1xuICAgIGluZm9QYW5lbEFib3V0LmFwcGVuZChpbmZvUGFuZWxDbG9zZSwgaGVhZGluZ1ByaW1hcnksIGluZm9QYW5lbENvbnRlbnQpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuYXBwZW5kKGluZm9QYW5lbENvbnRlbnRNYWluLCBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5KTtcbiAgICBpbmZvUGFuZWxDb250ZW50TWFpbi5hcHBlbmQoaW1nUmVzZXJ2YXRpb25zKTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmFwcGVuZChwMSwgcDIsIHAzLCByZXNlcnZlQnRuKTtcblxuXG4gICAgaW5mb1BhbmVsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpbmZvLnJlbW92ZSgpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCByZXNlcnZhdGlvbnNJbmZvO1xuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9EZXBlbmRlbmNpZXMgTGlzdFxuaW1wb3J0IFwiLi9zY3NzL21haW4uc2Nzc1wiO1xuLy8gaW1wb3J0IGhlcm9JbWFnZSBmcm9tIFwiLi9pbWcvaGVyby5qcGdcIjtcblxuaW1wb3J0IGFib3V0SW5mbyBmcm9tIFwiLi9hYm91dEluZm8uanNcIjtcbmltcG9ydCByZXNlcnZhdGlvbnNJbmZvIGZyb20gXCIuL3Jlc2VydmF0aW9uc0luZm8uanNcIjtcbmltcG9ydCBjb250YWN0SW5mbyBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgY29uY2VwdHNJbmZvIGZyb20gXCIuL2NvbmNlcHRzSW5mby5qc1wiO1xuXG4vLyBRdWVyeSBTZWxlY3RvcnMgLy9cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbmNvbnN0IHJlc2VydmF0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbnMtYnRuJyk7XG5jb25zdCBuYXZMaW5rQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tYWJvdXQnKTtcbmNvbnN0IG5hdkxpbmtSZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tcmVzZXJ2YXRpb25zJyk7XG5jb25zdCBuYXZMaW5rTG9jYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWxvY2F0aW9ucycpO1xuY29uc3QgbmF2TGlua0NvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tY29udGFjdCcpO1xuY29uc3QgbmF2TGlua0NvbmNlcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWNvbmNlcHRzJyk7XG5jb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5jb25zdCBwcmltYXJ5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1hcnktbmF2aWdhdGlvbicpO1xuY29uc3QgbmF2VG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVyJyk7XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC8vXG5uYXZMaW5rQWJvdXQub25jbGljayA9IGFib3V0SW5mbztcblxubmF2TGlua1Jlc2VydmF0aW9ucy5vbmNsaWNrID0gcmVzZXJ2YXRpb25zSW5mbztcblxucmVzZXJ2YXRpb25zQnRuLm9uY2xpY2sgPSByZXNlcnZhdGlvbnNJbmZvO1xuXG5uYXZMaW5rQ29udGFjdC5vbmNsaWNrID0gY29udGFjdEluZm87XG5cbm5hdkxpbmtDb25jZXB0cy5vbmNsaWNrID0gY29uY2VwdHNJbmZvO1xuXG4vL3Ntb290aCBzY3JvbGxpbmdcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCIjbWFwXCJdJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgIH0pXG59KVxuXG5cbi8vTmF2IFRvZ2dsZXJcblxubmF2VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IHByaW1hcnlOYXYuZ2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnKTtcbiAgICBpZih2aXNpYmlsaXR5ID09PSAnZmFsc2UnKXtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICd0cnVlJyk7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxufSlcblxubGV0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2MTBweCknKTsgICAvL21lZGlhIHF1ZXJ5IGxpc3Rcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaG91bGQgcHJvYmFibHkgdGhyb3R0bGUgdGhpcy4uLlxuICAgIGlmKG1xbC5tYXRjaGVzKXtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICdmYWxzZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cbn0pXG5cblxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19uYXYtaXRlbScpO1xubmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJyk7XG4gICAgfSlcbn0pXG5cblxubmF2TGlua0xvY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBuYXZMaW5rTG9jYXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=