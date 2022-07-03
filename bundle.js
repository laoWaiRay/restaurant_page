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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 4rem);\n  z-index: 0;\n}\n@media only screen and (max-width: 610px) {\n  .content {\n    height: calc(100vh - 9rem);\n  }\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.btn-primary {\n  padding: 1.5rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: rgba(0, 0, 0, 0.565);\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.696);\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  height: calc(100% - 8rem);\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n  overflow-y: scroll;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    height: 100%;\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 9rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 15rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  opacity: 0.5;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 0.8;\n  }\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 9rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 15rem;\n  }\n}\n\n.info {\n  position: fixed;\n  top: 4rem;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    top: 5rem;\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 8rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n  overflow-y: scroll;\n  top: -4rem;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n  }\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    height: calc(100vh - 25rem);\n    padding: 5rem 0;\n    top: -12rem;\n    overflow-y: scroll;\n    padding-bottom: 0;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 70vw);\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item.active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    position: absolute;\n    top: -30rem;\n    transform: translateY(0%);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(47rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.hero {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 15rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 20rem);\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_animations.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/base/_img.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_info.scss","webpack://./src/scss/layout/_nav.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes pulse{\n    0%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n\n    50%{\n        transform: scale(1.05);\n    }\n\n    100%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n}","@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 4rem);\n  z-index: 0;\n}\n@media only screen and (max-width: 610px) {\n  .content {\n    height: calc(100vh - 9rem);\n  }\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.btn-primary {\n  padding: 1.5rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: rgba(0, 0, 0, 0.565);\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.696);\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  height: calc(100% - 8rem);\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n  overflow-y: scroll;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    height: 100%;\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 9rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 15rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  opacity: 0.5;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 0.8;\n  }\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 9rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 15rem;\n  }\n}\n\n.info {\n  position: fixed;\n  top: 4rem;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    top: 5rem;\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 8rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n  overflow-y: scroll;\n  top: -4rem;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n  }\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    height: calc(100vh - 25rem);\n    padding: 5rem 0;\n    top: -12rem;\n    overflow-y: scroll;\n    padding-bottom: 0;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 70vw);\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item.active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    position: absolute;\n    top: -30rem;\n    transform: translateY(0%);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(47rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.hero {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: url(/dist/images/hero.jpg);\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 15rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 20rem);\n  }\n}","// font-family: 'Meie Script', cursive;\n// font-family: 'Mrs Saint Delafield', cursive;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nli{\n    list-style: none;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n\n    @media only screen and (max-width:610px){\n        font-size: 50%;\n    }\n\n    @media only screen and (max-width:375px){\n        font-size: 42.5%;\n    }\n}\n\nbody{\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 200;\n    font-size: 2.5rem;\n    background-color: rgb(6, 6, 31);\n    color: #fff;\n}\n\n.content{\n    max-width: 1000px;\n    width: 100%;\n    margin: auto;\n    height: calc(100vh - 4rem);\n    z-index: 0;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 9rem);\n    }\n\n}",".img{\n    width: 100%;\n    height: 100%;\n    &__about{\n        object-fit: cover;\n    }\n}",".heading-primary{\n    font-size: 8rem;\n    font-weight: 100;\n\n    &--contact{\n        text-align: center;\n    }\n\n    &--concepts{\n        font-style: italic;\n    }\n\n    @media only screen and (max-width:610px){\n        text-align: center;\n    }\n}\n\n.heading-secondary{\n    margin-bottom: 1.5rem;\n\n    &--contactForm{\n        @media only screen and (max-width:610px){\n            display: none;\n        }\n    }\n}\n\n\np{\n    margin-bottom: 2rem;\n}\n\n.git-handle{\n    color: rgb(114, 37, 191);\n    font-weight: 400;\n}\n\n.heading-concepts{\n    font-size: 5rem;\n    font-weight: 100;\n    font-family: 'Mrs Saint Delafield', cursive;\n\n    &--1{\n        color: red;\n    }\n    &--2{\n        color: white;\n    }\n    &--3{\n        color: green;\n    }\n}",".align-center{\n    display: block;\n    margin: 0 auto;\n}",".btn-primary{\n    padding: 1.5rem 2rem;\n    color: #fff;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 3rem;\n    background-color: rgba(0, 0, 0, 0.565);\n    border: 2px solid #fff;\n    border-radius: 3px;\n    z-index: 20;\n\n    &:hover{\n        cursor: pointer;\n        background-color: rgba(0, 0, 0, 0.696);\n    }\n}\n\n.reserve-btn{\n    padding: 1.5rem;\n    color: black;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 2rem;\n    background-color: #fff;\n    border: none;\n    border-radius: 1px;\n    z-index: 20;\n    display: block;\n    margin: 0 auto;\n    transition: all 200ms;\n    margin-top: 4rem;\n\n    &:hover{\n        cursor: pointer;\n        background-color: tan;\n        transform: translateY(-2px);\n    }\n    &:active{\n        transform: translateY(-1px);\n    }\n}\n\n.btn-contact{\n    border: 1px solid #000;\n\n    @media only screen and (max-width:610px){\n        border-color: #fff;\n    }\n}\n\n.toggler{\n    position: absolute;\n    z-index: 999;\n    right: 1rem;\n    width: 4rem;\n    aspect-ratio: 1;\n    color: rgba(0, 0, 0, 0.666);\n    border: 0;\n    background: 0;\n    display: none;\n\n    &:hover{\n        cursor: pointer;\n        background-color: #edd9bf;\n    }\n\n    @media only screen and (max-width:610px){\n        display: block;\n    }\n}\n\n.btn-form{\n    @media only screen and (max-width:610px){\n        margin-top: 2.5rem\n    }\n}",".form{\n    height: calc(100% - 8rem);\n    width: clamp(60rem, 60%, 60rem);\n    background-color: rgba(255, 255, 255, 0.95);\n    padding: 2rem;\n    color: #000;\n    font-size: 2rem;\n    font-weight: 300;\n    overflow-y: scroll;\n\n    &__group{\n        margin-bottom: 2rem;\n\n        @media only screen and (max-width:610px){\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n        }\n    }\n\n    &__input{\n        width: 100%;\n        padding: 1rem;\n        border: 1px solid #000;\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        color: inherit;\n    }\n\n    &__label{\n        display: block;\n        margin-bottom: .5rem;\n    }\n\n    textarea{\n        resize: none;\n    }\n\n    @media only screen and (max-width:610px){\n        height: 100%;\n        width: 100%;\n        background-color: transparent;\n        color: #fff;\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n\n",".header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    \n    \n    font-family: 'Mrs Saint Delafield', cursive;\n    &__main{\n        font-size: 15rem;\n        margin-bottom: -4rem;\n        user-select: none;\n    }\n\n    &__map-scroller{\n        position: absolute;\n        bottom: 5rem;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: 2s;\n\n        @media only screen and (max-width:610px){\n            bottom: 9rem;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 2rem;\n        }\n\n        @media only screen and (max-width:610px){\n            bottom: 15rem;\n        }\n\n        &:hover{\n            transform: translateY(-5px);\n\n            @media only screen and (max-width:610px){\n                transform: none;\n            }\n        }\n    }\n\n    &__map-scroller-text{\n        display: inline-block;\n        font-family: 'Josefin Sans', sans-serif;\n        font-size: 2rem;\n        font-weight: 300;\n        text-transform: uppercase;\n        opacity: .5;\n        transition: opacity 1s;\n\n        &:hover{\n            cursor: pointer;\n            opacity: 1;\n            animation: pulse 2s infinite;\n\n            @media only screen and (max-width:610px){\n                animation: none;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n            font-weight: 400;\n            opacity: .8;\n        }\n    }\n}",".footer{\n    background: #fff;\n    color: #000;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 4rem;\n    z-index: 1;\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__item{\n        padding: 0 10px;\n\n        &--link{\n            margin-left: -10px;\n        }\n\n        &:first-child{\n            @media only screen and (max-width:610px){\n                border-right: 1px solid rgba(0, 0, 0, 0.443);\n            }\n        }\n\n        \n    }\n\n    .odin-logo{\n        height: 3.5rem;\n        margin: 0 -2rem;\n\n        @media only screen and (max-width:610px){\n            margin: 0 -7rem;\n        }\n    }\n\n    .git-cat{\n        height: 3.5rem;\n        transition: all 1s;\n\n        &:hover{\n            transform: rotate(360deg);\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        height: 9rem;\n    }\n\n    @media only screen and (max-width:610px){\n        height: 15rem;\n    }\n}\n\n",".info{\n    position: fixed;\n    top: 4rem;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .85);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    min-height: 100vh;\n\n    @media only screen and (max-width:610px){\n        top: 5rem;\n        height: calc(100vh - 20rem);\n    }\n}\n\n\n.info-panel{\n    height: calc(100vh - 8rem);\n    width: 100%;\n    padding: 4rem;\n    font-size: clamp(1.7rem, 2.6vw , 2.5rem);\n    font-weight: 100;\n    line-height: 1.1;\n    position: relative;\n    overflow-y: scroll;\n    top: -4rem;\n\n\n    &__close{\n        position: absolute;\n        font-size: 4rem;\n        color: #fff;\n        top: 3rem;\n        right: 3rem;\n\n        &:hover{\n            cursor: pointer;\n        }\n\n        @media only screen and (max-width:610px){\n            top: 1rem;\n            right: 2.5rem;\n        }\n    }\n\n    &__content{\n        height: 100%;\n        width: 100%;\n        display: flex;\n\n        &--contact{\n            justify-content: center;\n        }\n\n        @media only screen and (max-width:610px){\n            flex-direction: column;\n        }\n\n        @media only screen and (min-width: 375px) and (max-width:610px){\n            // height: 50%;\n        }\n    }\n    &__content-main{\n        height: calc(100% - 8rem);\n        width: 50%;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n        }\n    }\n\n    &__content-main--about{\n        @media only screen and (max-width:610px){\n            width: 100%;\n            height: 50%;\n        }\n    }\n\n    &__content-secondary{\n        height: calc(100% - 8rem);\n        width: 50%;\n        padding: 0 4rem;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n            margin-top: 3rem;\n            font-size: 3rem;\n        }\n    }\n\n    &--concepts{\n        @media only screen and (max-width:610px){\n            // overflow-y: scroll !important;\n        }\n    }\n\n    &--about{\n        margin: 0;\n    }\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 25rem);\n        padding: 5rem 0;\n        top: -12rem;\n        overflow-y: scroll;\n        padding-bottom: 0;\n    }\n}\n\n.grid{\n    width: 100%;\n\n    display: grid;\n    grid-template-rows: repeat(4, 30vw);\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0;\n\n    &__img-container{\n       padding: 3rem;\n       border: 1px solid #fff;\n\n\n        &--1{\n            grid-row: 1/2;\n            grid-column: 1/2;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n            \n        }\n        &--2{\n            grid-row: 2/4;\n            grid-column: 2/3;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n        &--3{\n            grid-row: 4/5;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            border: 0;\n            padding: 0;\n        }\n    }\n\n    &__img{\n        height: 100%;\n        width: 100%;\n        object-fit: cover;\n        display: block;\n        transition: transform 1s;\n\n        &:hover{\n            transform: scale(1.01);\n            cursor: pointer;\n        }\n    }\n\n    &__textBox--1{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 2/3;\n            grid-column: initial;\n        }\n    }\n    &__textBox--2{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 4/5;\n            grid-column: initial;\n        }\n    }\n    &__textBox--3{\n        margin: 3rem;\n        grid-column: 2/3;\n\n        @media only screen and (max-width:610px){\n            grid-row: initial;\n            grid-column: initial;\n        }\n    }\n\n    &__text{\n        font-size: clamp(1rem, 2vw, 2rem);\n        line-height: 1.2;\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(6, 70vw)\n    }\n}\n\n",".navbar{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    font-size: 1.5rem;\n    top: 0;\n    z-index: 2;\n    background: #fff;\n    width: 100%;\n    color: #000;\n    height: 4rem;\n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        height: 5rem;\n    }\n\n    &__nav-item{\n        align-self: stretch;\n        display: block;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        transition: background-color 250ms;\n        background-color: #fff;\n\n        @media only screen and (max-width:610px){\n            font-weight: 300;\n            font-size: 2rem;\n            padding: 1.5rem;\n            border-top: 1px solid rgba(0, 0, 0, 0.13);\n        }\n\n        &:hover{\n            background-color: #edd9bf;\n        }\n        \n        &.active{\n            background-color: #edd9bf;\n        }\n    }\n\n    &__nav-link{\n        padding: 0 10px;\n        padding-top: 5px;\n        text-transform: uppercase;\n\n        &--italic{\n            font-style: italic;\n        }\n    }\n}\n\n.primary-navigation{\n    display: flex;\n    height: 4rem;\n    \n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        position: absolute;\n        top: -30rem;\n        transform: translateY(0%);\n        transition: transform 200ms ease-out;\n    }\n}\n\n@media only screen and (max-width:610px){\n    .primary-navigation[data-visible=\"true\"]{\n        z-index: -1;\n        transform: translateY(47rem);\n    }\n}\n\n\n.fa-instagram{\n    display: inline-block;\n    position: absolute;\n    left: 1rem;\n    -webkit-text-stroke: .5px white;\n\n        &::after{\n            content: \"\";\n            position: absolute;\n            height: 25px;\n            width: 121%;\n            left: -2.5px;\n            top: -13px;\n            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n            border-radius: 6px;\n            z-index: -1;\n\n            @media only screen and (max-width:600px){\n                width: 135%;\n                height: 23px;\n                top: -12px;\n                left: -3px;\n            }\n        }\n\n        &::before{\n            color: #fff;\n        }\n\n        @media only screen and (max-width:600px){\n            left: 2rem;\n        }\n}\n\n",".hero{\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: url(/dist/images/hero.jpg);\n    background-size: cover;\n    background-position: center;\n    z-index: -1;\n}\n\n.footer-padding{\n    background-color: transparent;\n    height: 4rem;\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: 15rem;\n    }\n   \n}\n\n.map-container{\n    height: calc(100vh - 8rem);\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 20rem);\n    }\n}"],"sourceRoot":""}]);
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
    infoPanelAbout.classList.add('info-panel', 'info-panel--about');


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

navLinkLocations.addEventListener('click', ()=>{
    navItems.forEach(item => {
        item.classList.remove('active');
    })
    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }
    navLinkLocations.classList.add('active')
})

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
        console.log('clicked')
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7OztBQUdBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FdUI7QUFDQTtBQUNBOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsK0NBQWM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBYzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFjOzs7QUFHN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7O0FBR0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEg1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7O0FBR0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJNEI7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixrREFBaUI7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7OztBQUdBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNFaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEI7QUFDMUI7O0FBRXVDO0FBQ2M7QUFDZDtBQUNNOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHVCQUF1QixxREFBUzs7QUFFaEMsOEJBQThCLDREQUFnQjs7QUFFOUMsMEJBQTBCLDREQUFnQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx5QkFBeUIsbURBQVc7O0FBRXBDLDBCQUEwQix3REFBWTs7QUFFdEM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsS0FBSztBQUNMLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQscURBQXFEOztBQUVyRCx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hYm91dEluZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbmNlcHRzSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcmVzZXJ2YXRpb25zSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Rpc3QvaW1hZ2VzL2hlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0Mi41JTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDlyZW0pO1xcbiAgfVxcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1nX19hYm91dCB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb250YWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRpbmctcHJpbWFyeS0tY29uY2VwdHMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1zZWNvbmRhcnktLWNvbnRhY3RGb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2l0LWhhbmRsZSB7XFxuICBjb2xvcjogcmdiKDExNCwgMzcsIDE5MSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGluZy1jb25jZXB0cyB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNcnMgU2FpbnQgRGVsYWZpZWxkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2NSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogMjA7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk2KTtcXG59XFxuXFxuLnJlc2VydmUtYnRuIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuLnJlc2VydmUtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuLnJlc2VydmUtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5idG4tY29udGFjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuYnRuLWNvbnRhY3Qge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi50b2dnbGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2Nik7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvZ2dsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRvZ2dsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IGNsYW1wKDYwcmVtLCA2MCUsIDYwcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcbi5mb3JtX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uZm9ybV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXJzIFNhaW50IERlbGFmaWVsZFxcXCIsIGN1cnNpdmU7XFxufVxcbi5oZWFkZXJfX21haW4ge1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC00cmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyIHtcXG4gICAgYm90dG9tOiA5cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogMTVyZW07XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2l0ZW0ge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uZm9vdGVyX19pdGVtLS1saW5rIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3Rlcl9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDMpO1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW46IDAgLTJyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXIgLm9kaW4tbG9nbyB7XFxuICAgIG1hcmdpbjogMCAtN3JlbTtcXG4gIH1cXG59XFxuLmZvb3RlciAuZ2l0LWNhdCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuLmZvb3RlciAuZ2l0LWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA5cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gIH1cXG59XFxuXFxuLmluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8ge1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcXG4gIH1cXG59XFxuXFxuLmluZm8tcGFuZWwge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgMi42dncsIDIuNXJlbSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHRvcDogLTRyZW07XFxufVxcbi5pbmZvLXBhbmVsX19jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRvcDogM3JlbTtcXG4gIHJpZ2h0OiAzcmVtO1xcbn1cXG4uaW5mby1wYW5lbF9fY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY2xvc2Uge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAyLjVyZW07XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQtLWNvbnRhY3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbiB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1tYWluLS1hYm91dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5IHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMCA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbC0tYWJvdXQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbCB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1cmVtKTtcXG4gICAgcGFkZGluZzogNXJlbSAwO1xcbiAgICB0b3A6IC0xMnJlbTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzB2dyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0xIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTIge1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICBncmlkLXJvdzogNC81O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbi5ncmlkX19pbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbn1cXG4uZ3JpZF9faW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkX190ZXh0Qm94LS0xIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTEge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgbWFyZ2luOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMiB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMyB7XFxuICBtYXJnaW46IDNyZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHQge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgNzB2dyk7XFxuICB9XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW0ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyX19uYXYtaXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubmF2YmFyX19uYXYtbGluay0taXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByaW1hcnktbmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPXRydWVdIHtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0N3JlbSk7XFxuICB9XFxufVxcbi5mYS1pbnN0YWdyYW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMXJlbTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHdoaXRlO1xcbn1cXG4uZmEtaW5zdGFncmFtOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMjElO1xcbiAgbGVmdDogLTIuNXB4O1xcbiAgdG9wOiAtMTNweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogLTE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEzNSU7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgdG9wOiAtMTJweDtcXG4gICAgbGVmdDogLTNweDtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZmEtaW5zdGFncmFtIHtcXG4gICAgbGVmdDogMnJlbTtcXG4gIH1cXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmZvb3Rlci1wYWRkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXItcGFkZGluZyB7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICB9XFxufVxcblxcbi5tYXAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5tYXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19pbWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL191dGlsaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19pbmZvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUNDTjtF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O0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QVh1cUJKOztBV3BxQkE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FYdXFCSjtBV3JxQkk7RUFMSjtJQU1RLGFBQUE7RVh3cUJOO0FBQ0Y7O0FXcHFCQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBWHVxQko7QVdycUJJO0VBSko7SUFLUSwyQkFBQTtFWHdxQk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHB1bHNle1xcbiAgICAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB9XFxuXFxuICAgIDUwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB9XFxufVwiLFwiQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0Mi41JTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNHJlbSk7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDlyZW0pO1xcbiAgfVxcbn1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1nX19hYm91dCB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRpbmctcHJpbWFyeSB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb250YWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRpbmctcHJpbWFyeS0tY29uY2VwdHMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGluZy1zZWNvbmRhcnkge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGluZy1zZWNvbmRhcnktLWNvbnRhY3RGb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2l0LWhhbmRsZSB7XFxuICBjb2xvcjogcmdiKDExNCwgMzcsIDE5MSk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGluZy1jb25jZXB0cyB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNcnMgU2FpbnQgRGVsYWZpZWxkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5hbGlnbi1jZW50ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2NSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgei1pbmRleDogMjA7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjk2KTtcXG59XFxuXFxuLnJlc2VydmUtYnRuIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgei1pbmRleDogMjA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuLnJlc2VydmUtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRhbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuLnJlc2VydmUtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5idG4tY29udGFjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuYnRuLWNvbnRhY3Qge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblxcbi50b2dnbGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2Nik7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvZ2dsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnRvZ2dsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IGNsYW1wKDYwcmVtLCA2MCUsIDYwcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uZm9ybV9fZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm1fX2dyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxufVxcbi5mb3JtX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uZm9ybV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXJzIFNhaW50IERlbGFmaWVsZFxcXCIsIGN1cnNpdmU7XFxufVxcbi5oZWFkZXJfX21haW4ge1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC00cmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyIHtcXG4gICAgYm90dG9tOiA5cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogMTVyZW07XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2l0ZW0ge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uZm9vdGVyX19pdGVtLS1saW5rIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3Rlcl9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDMpO1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW46IDAgLTJyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXIgLm9kaW4tbG9nbyB7XFxuICAgIG1hcmdpbjogMCAtN3JlbTtcXG4gIH1cXG59XFxuLmZvb3RlciAuZ2l0LWNhdCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuLmZvb3RlciAuZ2l0LWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA5cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gIH1cXG59XFxuXFxuLmluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8ge1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcXG4gIH1cXG59XFxuXFxuLmluZm8tcGFuZWwge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgMi42dncsIDIuNXJlbSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHRvcDogLTRyZW07XFxufVxcbi5pbmZvLXBhbmVsX19jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRvcDogM3JlbTtcXG4gIHJpZ2h0OiAzcmVtO1xcbn1cXG4uaW5mby1wYW5lbF9fY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY2xvc2Uge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHJpZ2h0OiAyLjVyZW07XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQtLWNvbnRhY3Qge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbiB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1tYWluLS1hYm91dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5IHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMCA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbC0tYWJvdXQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbCB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI1cmVtKTtcXG4gICAgcGFkZGluZzogNXJlbSAwO1xcbiAgICB0b3A6IC0xMnJlbTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzB2dyk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0xIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTIge1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICBncmlkLXJvdzogNC81O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbi5ncmlkX19pbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbn1cXG4uZ3JpZF9faW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkX190ZXh0Qm94LS0xIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTEge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgbWFyZ2luOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMiB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMyB7XFxuICBtYXJnaW46IDNyZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMyB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHQge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgNzB2dyk7XFxuICB9XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW0ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubmF2YmFyX19uYXYtaXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gIH1cXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWl0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4ubmF2YmFyX19uYXYtbGluay0taXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByaW1hcnktbmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPXRydWVdIHtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0N3JlbSk7XFxuICB9XFxufVxcbi5mYS1pbnN0YWdyYW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMXJlbTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHdoaXRlO1xcbn1cXG4uZmEtaW5zdGFncmFtOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAxMjElO1xcbiAgbGVmdDogLTIuNXB4O1xcbiAgdG9wOiAtMTNweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogLTE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gICAgd2lkdGg6IDEzNSU7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgdG9wOiAtMTJweDtcXG4gICAgbGVmdDogLTNweDtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbTo6YmVmb3JlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZmEtaW5zdGFncmFtIHtcXG4gICAgbGVmdDogMnJlbTtcXG4gIH1cXG59XFxuXFxuLmhlcm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2ltYWdlcy9oZXJvLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5mb290ZXItcGFkZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyLXBhZGRpbmcge1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgfVxcbn1cXG5cXG4ubWFwLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAubWFwLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcXG4gIH1cXG59XCIsXCIvLyBmb250LWZhbWlseTogJ01laWUgU2NyaXB0JywgY3Vyc2l2ZTtcXG4vLyBmb250LWZhbWlseTogJ01ycyBTYWludCBEZWxhZmllbGQnLCBjdXJzaXZlO1xcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmh0bWx7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBmb250LXNpemU6IDUwJTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpe1xcbiAgICAgICAgZm9udC1zaXplOiA0Mi41JTtcXG4gICAgfVxcbn1cXG5cXG5ib2R5e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgNiwgMzEpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDlyZW0pO1xcbiAgICB9XFxuXFxufVwiLFwiLmltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgJl9fYWJvdXR7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcbn1cIixcIi5oZWFkaW5nLXByaW1hcnl7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgJi0tY29udGFjdHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmLS1jb25jZXB0c3tcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5oZWFkaW5nLXNlY29uZGFyeXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcblxcbiAgICAmLS1jb250YWN0Rm9ybXtcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG5we1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZ2l0LWhhbmRsZXtcXG4gICAgY29sb3I6IHJnYigxMTQsIDM3LCAxOTEpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGluZy1jb25jZXB0c3tcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LWZhbWlseTogJ01ycyBTYWludCBEZWxhZmllbGQnLCBjdXJzaXZlO1xcblxcbiAgICAmLS0xe1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbiAgICAmLS0ye1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgICYtLTN7XFxuICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgIH1cXG59XCIsXCIuYWxpZ24tY2VudGVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVwiLFwiLmJ0bi1wcmltYXJ5e1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTY1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB6LWluZGV4OiAyMDtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTYpO1xcbiAgICB9XFxufVxcblxcbi5yZXNlcnZlLWJ0bntcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGFuO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgICB9XFxuICAgICY6YWN0aXZle1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgICB9XFxufVxcblxcbi5idG4tY29udGFjdHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgfVxcbn1cXG5cXG4udG9nZ2xlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2Nik7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbi5idG4tZm9ybXtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbVxcbiAgICB9XFxufVwiLFwiLmZvcm17XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCg2MHJlbSwgNjAlLCA2MHJlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICAgJl9fZ3JvdXB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW5wdXR7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgICZfX2xhYmVse1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICB0ZXh0YXJlYXtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuXFxuXCIsXCIuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIFxcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdNcnMgU2FpbnQgRGVsYWZpZWxkJywgY3Vyc2l2ZTtcXG4gICAgJl9fbWFpbntcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgICZfX21hcC1zY3JvbGxlcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogNXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IDJzO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBib3R0b206IDlyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGJvdHRvbTogMTVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX21hcC1zY3JvbGxlci10ZXh0e1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBvcGFjaXR5OiAuNTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIi5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAmX19pdGVte1xcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcblxcbiAgICAgICAgJi0tbGlua3tcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmZpcnN0LWNoaWxke1xcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDMpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5vZGluLWxvZ297XFxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMCAtMnJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIC03cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5naXQtY2F0e1xcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgfVxcbn1cXG5cXG5cIixcIi5pbmZve1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjg1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgdG9wOiA1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgICB9XFxufVxcblxcblxcbi5pbmZvLXBhbmVse1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCAyLjZ2dyAsIDIuNXJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICB0b3A6IC00cmVtO1xcblxcblxcbiAgICAmX19jbG9zZXtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgdG9wOiAzcmVtO1xcbiAgICAgICAgcmlnaHQ6IDNyZW07XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgdG9wOiAxcmVtO1xcbiAgICAgICAgICAgIHJpZ2h0OiAyLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICYtLWNvbnRhY3R7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MCU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fY29udGVudC1tYWlue1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQtbWFpbi0tYWJvdXR7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRlbnQtc2Vjb25kYXJ5e1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBwYWRkaW5nOiAwIDRyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtLWNvbmNlcHRze1xcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLS1hYm91dHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjVyZW0pO1xcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xcbiAgICAgICAgdG9wOiAtMTJyZW07XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgfVxcbn1cXG5cXG4uZ3JpZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDMwdncpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAmX19pbWctY29udGFpbmVye1xcbiAgICAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcblxcblxcbiAgICAgICAgJi0tMXtcXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgICYtLTJ7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLS0ze1xcbiAgICAgICAgICAgIGdyaWQtcm93OiA0LzU7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9faW1ne1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcblxcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX190ZXh0Qm94LS0xe1xcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICZfX3RleHRCb3gtLTJ7XFxuICAgICAgICBtYXJnaW46IDNyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGdyaWQtcm93OiA0LzU7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fdGV4dEJveC0tM3tcXG4gICAgICAgIG1hcmdpbjogM3JlbTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RleHR7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCA3MHZ3KVxcbiAgICB9XFxufVxcblxcblwiLFwiLm5hdmJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB9XFxuXFxuICAgICZfX25hdi1pdGVte1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICYuYWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbmF2LWxpbmt7XFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICAgICAgICYtLWl0YWxpY3tcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnByaW1hcnktbmF2aWdhdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogLTMwcmVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAucHJpbWFyeS1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT1cXFwidHJ1ZVxcXCJde1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDdyZW0pO1xcbiAgICB9XFxufVxcblxcblxcbi5mYS1pbnN0YWdyYW17XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAuNXB4IHdoaXRlO1xcblxcbiAgICAgICAgJjo6YWZ0ZXJ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICB3aWR0aDogMTIxJTtcXG4gICAgICAgICAgICBsZWZ0OiAtMi41cHg7XFxuICAgICAgICAgICAgdG9wOiAtMTNweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgICAgICAgei1pbmRleDogLTE7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzNSU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcXG4gICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcXG4gICAgICAgICAgICAgICAgbGVmdDogLTNweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjpiZWZvcmV7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xcbiAgICAgICAgICAgIGxlZnQ6IDJyZW07XFxuICAgICAgICB9XFxufVxcblxcblwiLFwiLmhlcm97XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvaW1hZ2VzL2hlcm8uanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmZvb3Rlci1wYWRkaW5ne1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogMTVyZW07XFxuICAgIH1cXG4gICBcXG59XFxuXFxuLm1hcC1jb250YWluZXJ7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWJvdXRJbWFnZSBmcm9tIFwiLi9pbWcvYWJvdXQuanBnXCI7XG5cbmNvbnN0IGFib3V0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tYWJvdXQnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQWJvdXQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbCcsICdpbmZvLXBhbmVsLS1hYm91dCcpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5hcHBlbmQoJ0Fib3V0IFVzJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRNYWluLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtbWFpbicsICdpbmZvLXBhbmVsX19jb250ZW50LW1haW4tLWFib3V0Jyk7XG5cbiAgICBjb25zdCBpbWdBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ0Fib3V0LmNsYXNzTGlzdC5hZGQoJ2ltZycsICdpbWdfX2Fib3V0Jyk7XG4gICAgaW1nQWJvdXQuc3JjID0gYWJvdXRJbWFnZTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5Jyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5hcHBlbmQoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBRdWkgc3VudCBtYWlvcmVzIG5vbiBpc3RlIHZlcm8gdXQgZWl1cyBhZGlwaXNjaSBlc3QgcXVhc2kgbGliZXJvLiBFdCBxdWFlcmF0IHZlcm8gbmFtIHJhdGlvbmUgY29uc2VxdWF0dXIgdXQgbGF1ZGFudGl1bSBxdW9zIHF1aSBxdWlzcXVhbSB2b2x1cHRhdGVtIGVhIGFsaWFzIGRpZ25pc3NpbW9zLiBJbiBxdWFzaSBwb3JybyBlc3QgcXVpYSBxdWFtIGF1dCB1bGxhbSBRdWlzIGV0IHJlaWNpZW5kaXMgdmVsaXQgcmVtIGFsaWFzIHJlcHVkaWFuZGFlISBFdCBleGNlcHR1cmkgYXV0ZW0gc2VkIHZvbHVwdGF0ZW0gb2RpbyBxdWkgdml0YWUgbWludXMgc2VkIGRvbG9yZW0gY3VtcXVlIGVzdCB2b2x1cHRhcyBjdWxwYSBhdXQgbW9sZXN0aWFlIGZhY2VyZS4nKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAyLmFwcGVuZCgnSW4gZ2FsaXN1bSB2ZW5pYW0gc2VkIGluY2lkdW50IHBvc3NpbXVzIGhpYyBlaXVzIHVuZGUgZW9zIGludmVudG9yZSBkb2xvciBldCBkb2xvcmVzIG1hZ25pIGlkIHNpbnQgZWl1cyBldCBuaXNpIHZlbGl0LiBRdWkgdmVybyBhbGlxdWFtIHF1aSBhdXRlbSB0ZW1wb3JlIGF1dCBtaW5pbWEgcmVwZWxsZW5kdXMgdmVsIGRpY3RhIGR1Y2ltdXMgZXN0IGl1c3RvIG1vbGxpdGlhIGVzdCBjdW1xdWUgcXVpYnVzZGFtLicpO1xuXG4gICAgbmF2QmFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpbmZvKVxuICAgIGluZm8uYXBwZW5kKGluZm9QYW5lbEFib3V0KTtcbiAgICBpbmZvUGFuZWxBYm91dC5hcHBlbmQoaW5mb1BhbmVsQ2xvc2UsIGhlYWRpbmdQcmltYXJ5LCBpbmZvUGFuZWxDb250ZW50KTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmFwcGVuZChpbmZvUGFuZWxDb250ZW50TWFpbiwgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeSk7XG4gICAgaW5mb1BhbmVsQ29udGVudE1haW4uYXBwZW5kKGltZ0Fib3V0KTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmFwcGVuZChwMSxwMik7XG5cblxuICAgIGluZm9QYW5lbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaW5mby5yZW1vdmUoKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhYm91dEluZm87XG5cblxuXG5cbiIsImltcG9ydCBjb25jZXB0czFJbWFnZSBmcm9tICcuL2ltZy9jb25jZXB0czEuanBnJ1xuaW1wb3J0IGNvbmNlcHRzMkltYWdlIGZyb20gJy4vaW1nL2NvbmNlcHRzMi5qcGcnXG5pbXBvcnQgY29uY2VwdHMzSW1hZ2UgZnJvbSAnLi9pbWcvY29uY2VwdHMzLmpwZydcblxuY29uc3QgY29uY2VwdHNJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1jb25jZXB0cycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29uY2VwdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb25jZXB0cy5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWNvbmNlcHRzJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jbG9zZScpO1xuICAgIGluZm9QYW5lbENsb3NlLmFwcGVuZCgneCcpO1xuXG4gICAgY29uc3QgaGVhZGluZ1ByaW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctcHJpbWFyeScsICdoZWFkaW5nLXByaW1hcnktLWNvbmNlcHRzJyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuYXBwZW5kKCdDb25jZXB0cycpO1xuXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuXG4gICAgY29uc3QgaW1nMUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZzFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nLWNvbnRhaW5lcicsICdncmlkX19pbWctY29udGFpbmVyLS0xJyk7XG5cbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdncmlkX19pbWcnLCAnZ3JpZF9faW1nLS0xJyk7XG4gICAgaW1nMS5zcmMgPSBjb25jZXB0czFJbWFnZTtcblxuICAgIGNvbnN0IGltZzJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZy1jb250YWluZXInLCAnZ3JpZF9faW1nLWNvbnRhaW5lci0tMicpO1xuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZycsICdncmlkX19pbWctLTInKTtcbiAgICBpbWcyLnNyYyA9IGNvbmNlcHRzMkltYWdlO1xuXG4gICAgY29uc3QgaW1nM0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZzNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nLWNvbnRhaW5lcicsICdncmlkX19pbWctY29udGFpbmVyLS0zJyk7XG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzMuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nJywgJ2dyaWRfX2ltZy0tMycpO1xuICAgIGltZzMuc3JjID0gY29uY2VwdHMzSW1hZ2U7XG5cblxuICAgIGNvbnN0IHRleHRCb3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJveDEuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dEJveC0tMScpO1xuXG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcxLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctY29uY2VwdHMnLCAnaGVhZGluZy1jb25jZXB0cy0tMScpO1xuICAgIGhlYWRpbmcxLmFwcGVuZCgnTGl0dGxlIEl0YWx5Jyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0JywgJ2dyaWRfX3RleHQtLTEnKTtcbiAgICB0ZXh0MS5hcHBlbmQoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBOdW5jIGFsaXF1ZXQgYmliZW5kdW0gZW5pbSBmYWNpbGlzaXMgZ3JhdmlkYSBuZXF1ZS4gQ3Vyc3VzIGV1aXNtb2QgcXVpcyB2aXZlcnJhIG5pYmggY3JhcyBwdWx2aW5hci4gJyk7XG5cbiAgICBjb25zdCB0ZXh0Qm94MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRCb3gyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX3RleHRCb3gtLTInKTtcbiAgICBcbiAgICBjb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1zZWNvbmRhcnknLCAnaGVhZGluZy1jb25jZXB0cycsICdoZWFkaW5nLWNvbmNlcHRzLS0yJyk7XG4gICAgaGVhZGluZzIuYXBwZW5kKCdMYSBDYXBpdGFsZScpO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dCcsICdncmlkX190ZXh0LS0yJyk7XG4gICAgdGV4dDIuYXBwZW5kKCdTdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtIGVzdCB1bHRyaWNpZXMgaW50ZWdlciBxdWlzLiBMb2JvcnRpcyBmZXVnaWF0IHZpdmFtdXMgYXQgYXVndWUgZWdldCBhcmN1IGRpY3R1bSB2YXJpdXMuIEFtZXQgYWxpcXVhbSBpZCBkaWFtIG1hZWNlbmFzIHVsdHJpY2llcyBtaS4gUGVsbGVudGVzcXVlIG5lYyBuYW0gYWxpcXVhbSBzZW0gZXQgdG9ydG9yIGNvbnNlcXVhdC4nKVxuXG4gICAgY29uc3QgdGV4dEJveDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94My5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0Qm94LS0zJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZzMuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1zZWNvbmRhcnknLCAnaGVhZGluZy1jb25jZXB0cycsICdoZWFkaW5nLWNvbmNlcHRzLS0zJyk7XG4gICAgaGVhZGluZzMuYXBwZW5kKCdMYSBQZXJnb2xhJyk7XG5cbiAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0My5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0JywgJ2dyaWRfX3RleHQtLTMnKTtcbiAgICB0ZXh0My5hcHBlbmQoJ01hbGVzdWFkYSBwZWxsZW50ZXNxdWUgZWxpdCBlZ2V0IGdyYXZpZGEgY3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cy4gVXQgc2VtIG51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbC4gRGlhbSBwaGFzZWxsdXMgdmVzdGlidWx1bSBsb3JlbSBzZWQgcmlzdXMgdWx0cmljaWVzIHRyaXN0aXF1ZSBudWxsYSBhbGlxdWV0LiBOaXNsIHN1c2NpcGl0IGFkaXBpc2NpbmcgYmliZW5kdW0gZXN0LicpO1xuXG5cblxuICAgIG5hdkJhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgaW5mbylcbiAgICBpbmZvLmFwcGVuZChpbmZvUGFuZWxDb25jZXB0cyk7XG4gICAgaW5mb1BhbmVsQ29uY2VwdHMuYXBwZW5kKGluZm9QYW5lbENsb3NlLCBoZWFkaW5nUHJpbWFyeSwgZ3JpZCk7XG4gICAgZ3JpZC5hcHBlbmQoaW1nMUNvbnRhaW5lciwgaW1nMkNvbnRhaW5lciwgaW1nM0NvbnRhaW5lciwgdGV4dEJveDEsIHRleHRCb3gyLCB0ZXh0Qm94Myk7XG4gICAgaW1nMUNvbnRhaW5lci5hcHBlbmQoaW1nMSk7XG4gICAgaW1nMkNvbnRhaW5lci5hcHBlbmQoaW1nMik7XG4gICAgaW1nM0NvbnRhaW5lci5hcHBlbmQoaW1nMyk7XG4gICAgdGV4dEJveDEuYXBwZW5kKGhlYWRpbmcxLCB0ZXh0MSk7XG4gICAgdGV4dEJveDIuYXBwZW5kKGhlYWRpbmcyLCB0ZXh0Mik7XG4gICAgdGV4dEJveDMuYXBwZW5kKGhlYWRpbmczLCB0ZXh0Myk7XG5cblxuICAgIGluZm9QYW5lbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaW5mby5yZW1vdmUoKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25jZXB0c0luZm87XG5cblxuXG5cbiIsImNvbnN0IGNvbnRhY3RJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1jb250YWN0JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbEFib3V0LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwnLCAnaW5mby1wYW5lbC0tYWJvdXQnKTtcblxuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknLCAnaGVhZGluZy1wcmltYXJ5LS1jb250YWN0Jyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuYXBwZW5kKCdDb250YWN0IFVzJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50JywgJ2luZm8tcGFuZWxfX2NvbnRlbnQtLWNvbnRhY3QnKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nU2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctc2Vjb25kYXJ5LS1jb250YWN0Rm9ybScpO1xuICAgIGhlYWRpbmdTZWNvbmRhcnkuYXBwZW5kKCdDb250YWN0IEluZm9ybWF0aW9uJyk7XG5cbiAgICBjb25zdCBmb3JtR3JvdXBOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Hcm91cE5hbWUxLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2dyb3VwJyk7XG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbE5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTEuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTEuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3ROYW1lJyk7XG4gICAgICAgIGZvcm1MYWJlbE5hbWUxLmFwcGVuZCgnRmlyc3QgTmFtZTonKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dE5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUxLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5pZCA9IFwiZmlyc3ROYW1lXCI7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZpcnN0TmFtZScpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXaGF0XFwncyB5b3VyIGZpcnN0IG5hbWU/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBOYW1lMi5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpOyBcbiAgICAgICAgY29uc3QgZm9ybUxhYmVsTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMi5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXN0TmFtZScpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMi5hcHBlbmQoJ0xhc3QgTmFtZTonKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5pZCA9IFwibGFzdE5hbWVcIjtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBsYXN0IG5hbWU/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBFbWFpbC5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpOyBcbiAgICAgICAgY29uc3QgZm9ybUxhYmVsRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxFbWFpbC5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxFbWFpbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuICAgICAgICBmb3JtTGFiZWxFbWFpbC5hcHBlbmQoJ0VtYWlsOicpO1xuICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0RW1haWwuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLmlkID0gXCJlbWFpbFwiO1xuICAgICAgICAgICAgZm9ybUlucHV0RW1haWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBlbWFpbD8nKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICBjb25zdCBmb3JtR3JvdXBQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Hcm91cFBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2dyb3VwJyk7IFxuICAgICAgICBjb25zdCBmb3JtTGFiZWxQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbFBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbFBob25lTnVtYmVyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Bob25lTnVtYmVyJyk7XG4gICAgICAgIGZvcm1MYWJlbFBob25lTnVtYmVyLmFwcGVuZCgnUGhvbmUgTnVtYmVyOicpXG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXRQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuaWQgPSBcInBob25lTnVtYmVyXCI7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGVsJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncGhvbmVOdW1iZXInKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dFBob25lTnVtYmVyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBwaG9uZSBudW1iZXI/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgaGVhZGluZ1NlY29uZGFyeTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmdTZWNvbmRhcnkyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctc2Vjb25kYXJ5LS1jb250YWN0Rm9ybScpO1xuICAgIGhlYWRpbmdTZWNvbmRhcnkyLmFwcGVuZCgnQ29tbWVudHMnKVxuXG4gICAgY29uc3QgZm9ybUdyb3VwQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpO1xuICAgICAgICBjb25zdCBmb3JtSW5wdXRDb21tZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLmlkID0gXCJjb21tZW50c1wiO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29tbWVudHMnKTtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0hhdmUgYSBzdWdnZXN0aW9uPycpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICAgICAgY29uc3QgZm9ybUxhYmVsQ29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZm9ybUxhYmVsQ29tbWVudHMuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgICAgIGZvcm1MYWJlbENvbW1lbnRzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NvbW1lbnRzJylcbiAgICAgICAgICAgIGZvcm1MYWJlbENvbW1lbnRzLmFwcGVuZCgnWW91ciBGZWVkYmFjazonKVxuXG4gICAgY29uc3QgYnRuRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkZvcm0uY2xhc3NMaXN0LmFkZCgnYnRuLWZvcm0nLCAnYnRuLXByaW1hcnknLCAnYWxpZ24tY2VudGVyJywgJ2J0bi1jb250YWN0Jyk7XG4gICAgYnRuRm9ybS5hcHBlbmQoJ1N1Ym1pdCcpO1xuXG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pO1xuICAgIGluZm8uYXBwZW5kKGluZm9QYW5lbEFib3V0KTtcbiAgICBpbmZvUGFuZWxBYm91dC5hcHBlbmQoaW5mb1BhbmVsQ2xvc2UsIGhlYWRpbmdQcmltYXJ5LCBpbmZvUGFuZWxDb250ZW50KTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmFwcGVuZChmb3JtKTtcbiAgICBmb3JtLmFwcGVuZChoZWFkaW5nU2Vjb25kYXJ5LGZvcm1Hcm91cE5hbWUxLGZvcm1Hcm91cE5hbWUyLGZvcm1Hcm91cEVtYWlsLGZvcm1Hcm91cFBob25lTnVtYmVyLGhlYWRpbmdTZWNvbmRhcnkyLGZvcm1Hcm91cENvbW1lbnRzLGJ0bkZvcm0pO1xuICAgIGZvcm1Hcm91cE5hbWUxLmFwcGVuZChmb3JtTGFiZWxOYW1lMSxmb3JtSW5wdXROYW1lMSk7XG4gICAgZm9ybUdyb3VwTmFtZTIuYXBwZW5kKGZvcm1MYWJlbE5hbWUyLGZvcm1JbnB1dE5hbWUyKTtcbiAgICBmb3JtR3JvdXBFbWFpbC5hcHBlbmQoZm9ybUxhYmVsRW1haWwsZm9ybUlucHV0RW1haWwpO1xuICAgIGZvcm1Hcm91cFBob25lTnVtYmVyLmFwcGVuZChmb3JtTGFiZWxQaG9uZU51bWJlciwgZm9ybUlucHV0UGhvbmVOdW1iZXIpO1xuICAgIGZvcm1Hcm91cENvbW1lbnRzLmFwcGVuZChmb3JtTGFiZWxDb21tZW50cywgZm9ybUlucHV0Q29tbWVudHMpO1xuICAgIFxuXG5cbiAgICBpbmZvUGFuZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdEluZm87XG5cblxuXG5cbiIsImltcG9ydCByZXNlcnZhdGlvbnNJbWFnZSBmcm9tIFwiLi9pbWcvcmVzZXJ2YXRpb25zLmpwZ1wiO1xuXG5jb25zdCByZXNlcnZhdGlvbnNJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1yZXNlcnZhdGlvbnMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbEFib3V0LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwnLCAnaW5mby1wYW5lbC0tYWJvdXQnKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGluZm9QYW5lbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2Nsb3NlJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuYXBwZW5kKCd4Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nUHJpbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1wcmltYXJ5Jyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuYXBwZW5kKCdSZXNlcnZhdGlvbnMnKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbnRlbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudE1haW4uY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudC1tYWluJyk7XG5cbiAgICBjb25zdCBpbWdSZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdSZXNlcnZhdGlvbnMuY2xhc3NMaXN0LmFkZCgnaW1nJywgJ2ltZ19fYWJvdXQnKTtcbiAgICBpbWdSZXNlcnZhdGlvbnMuc3JjID0gcmVzZXJ2YXRpb25zSW1hZ2U7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeScpO1xuXG4gICAgY29uc3QgcmVzZXJ2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2VydmVCdG4uYXBwZW5kKCdSZXNlcnZlIGEgVGFibGUnKTtcbiAgICByZXNlcnZlQnRuLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmUtYnRuJylcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLmFwcGVuZCgnTSAtIEY6IDlhbSAtIDEycG0sIDEyYW0gLSA2cG0uJyk7XG4gICAgcDEuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnXG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi5hcHBlbmQoJ1dlZWtlbmRzOiA4YW0gLSAxMHBtLicpO1xuXG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDMuYXBwZW5kKCdFdCBkb2xvcnVtIHJlcnVtIGFiIHZvbHVwdGF0ZW0gdm9sdXB0YXR1bSBldW0gdmVsaXQgcmVwZWxsYXQ/IEluIGFsaXF1aWQgZXZlbmlldCBldW0gbnVsbGEgdmVyaXRhdGlzIHNlZCBxdW9kIG5pc2kgdXQgZGlzdGluY3RpbyBkdWNpbXVzIGFkIGxhdWRhbnRpdW0gbGFib3J1bS4nKTtcblxuICAgIG5hdkJhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgaW5mbylcbiAgICBpbmZvLmFwcGVuZChpbmZvUGFuZWxBYm91dCk7XG4gICAgaW5mb1BhbmVsQWJvdXQuYXBwZW5kKGluZm9QYW5lbENsb3NlLCBoZWFkaW5nUHJpbWFyeSwgaW5mb1BhbmVsQ29udGVudCk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5hcHBlbmQoaW5mb1BhbmVsQ29udGVudE1haW4sIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkpO1xuICAgIGluZm9QYW5lbENvbnRlbnRNYWluLmFwcGVuZChpbWdSZXNlcnZhdGlvbnMpO1xuICAgIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkuYXBwZW5kKHAxLCBwMiwgcDMsIHJlc2VydmVCdG4pO1xuXG5cbiAgICBpbmZvUGFuZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25zSW5mbztcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vRGVwZW5kZW5jaWVzIExpc3RcbmltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbi8vIGltcG9ydCBoZXJvSW1hZ2UgZnJvbSBcIi4vaW1nL2hlcm8uanBnXCI7XG5cbmltcG9ydCBhYm91dEluZm8gZnJvbSBcIi4vYWJvdXRJbmZvLmpzXCI7XG5pbXBvcnQgcmVzZXJ2YXRpb25zSW5mbyBmcm9tIFwiLi9yZXNlcnZhdGlvbnNJbmZvLmpzXCI7XG5pbXBvcnQgY29udGFjdEluZm8gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IGNvbmNlcHRzSW5mbyBmcm9tIFwiLi9jb25jZXB0c0luZm8uanNcIjtcblxuLy8gUXVlcnkgU2VsZWN0b3JzIC8vXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5jb25zdCByZXNlcnZhdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25zLWJ0bicpO1xuY29uc3QgbmF2TGlua0Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWFib3V0Jyk7XG5jb25zdCBuYXZMaW5rUmVzZXJ2YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLXJlc2VydmF0aW9ucycpO1xuY29uc3QgbmF2TGlua0xvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1sb2NhdGlvbnMnKTtcbmNvbnN0IG5hdkxpbmtDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWNvbnRhY3QnKTtcbmNvbnN0IG5hdkxpbmtDb25jZXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1jb25jZXB0cycpO1xuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19uYXYtaXRlbScpO1xuY29uc3QgcHJpbWFyeU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmltYXJ5LW5hdmlnYXRpb24nKTtcbmNvbnN0IG5hdlRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlcicpO1xuXG5cbi8vIEV2ZW50IGhhbmRsZXJzIC8vXG5uYXZMaW5rQWJvdXQub25jbGljayA9IGFib3V0SW5mbztcblxubmF2TGlua1Jlc2VydmF0aW9ucy5vbmNsaWNrID0gcmVzZXJ2YXRpb25zSW5mbztcblxucmVzZXJ2YXRpb25zQnRuLm9uY2xpY2sgPSByZXNlcnZhdGlvbnNJbmZvO1xuXG5uYXZMaW5rTG9jYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIG5hdkxpbmtMb2NhdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn0pXG5cbm5hdkxpbmtDb250YWN0Lm9uY2xpY2sgPSBjb250YWN0SW5mbztcblxubmF2TGlua0NvbmNlcHRzLm9uY2xpY2sgPSBjb25jZXB0c0luZm87XG5cbi8vc21vb3RoIHNjcm9sbGluZ1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZj1cIiNtYXBcIl0nKS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgfSlcbn0pXG4vL05hdiBUb2dnbGVyXG5cbm5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBwcmltYXJ5TmF2LmdldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJyk7XG4gICAgaWYodmlzaWJpbGl0eSA9PT0gJ2ZhbHNlJyl7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAndHJ1ZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICdmYWxzZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cbn0pXG5cbmxldCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjEwcHgpJyk7ICAgLy9tZWRpYSBxdWVyeSBsaXN0XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+eyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2hvdWxkIHByb2JhYmx5IHRocm90dGxlIHRoaXMuLi5cbiAgICBpZihtcWwubWF0Y2hlcyl7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG59KVxuXG5cbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScsICdmYWxzZScpO1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgfSlcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9