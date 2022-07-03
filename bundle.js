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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 8rem);\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.btn-primary {\n  padding: 1.5rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: rgba(0, 0, 0, 0.565);\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.696);\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  height: calc(100% - 8rem);\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n  overflow-y: scroll;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    height: 100%;\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 9rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 15rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  opacity: 0.5;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 0.8;\n  }\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 8rem;\n  }\n}\n\n.info {\n  position: fixed;\n  top: 4rem;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    top: 5rem;\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 8rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n  overflow-y: scroll;\n  top: -4rem;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n  }\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    height: calc(100vh - 25rem);\n    padding: 5rem 0;\n    top: -12rem;\n    overflow-y: scroll;\n    padding-bottom: 0;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 70vw);\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item.active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    position: absolute;\n    top: -30rem;\n    transform: translateY(0%);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(47rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.hero {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 8rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 20rem);\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_animations.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_base.scss","webpack://./src/scss/base/_img.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/base/_utilities.scss","webpack://./src/scss/components/_button.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/_info.scss","webpack://./src/scss/layout/_nav.scss","webpack://./src/scss/pages/_home.scss"],"names":[],"mappings":"AAAA;EACI;IACI,mBAAA;IACA,gBAAA;ECCN;EDEE;IACI,sBAAA;ECAN;EDGE;IACI,mBAAA;IACA,gBAAA;ECDN;AACF;ACTA;EACI,SAAA;EACA,UAAA;EACA,mBAAA;ADWJ;;ACRA;EACI,gBAAA;ADWJ;;ACRA;EACI,qBAAA;EACA,cAAA;ADWJ;;ACRA;EACI,gBAAA;ADWJ;ACTI;EAHJ;IAIQ,cAAA;EDYN;AACF;ACVI;EAPJ;IAQQ,gBAAA;EDaN;AACF;;ACVA;EACI,sBAAA;EACA,uCAAA;EACA,gBAAA;EACA,iBAAA;EACA,+BAAA;EACA,WAAA;ADaJ;;ACVA;EACI,iBAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;ADaJ;;AE5DA;EACI,WAAA;EACA,YAAA;AF+DJ;AE9DI;EACI,iBAAA;AFgER;;AGpEA;EACI,eAAA;EACA,gBAAA;AHuEJ;AGrEI;EACI,kBAAA;AHuER;AGpEI;EACI,kBAAA;AHsER;AGnEI;EAZJ;IAaQ,kBAAA;EHsEN;AACF;;AGnEA;EACI,qBAAA;AHsEJ;AGnEQ;EADJ;IAEQ,aAAA;EHsEV;AACF;;AGjEA;EACI,mBAAA;AHoEJ;;AGjEA;EACI,wBAAA;EACA,gBAAA;AHoEJ;;AGjEA;EACI,eAAA;EACA,gBAAA;EACA,2CAAA;AHoEJ;AGlEI;EACI,UAAA;AHoER;AGlEI;EACI,YAAA;AHoER;AGlEI;EACI,YAAA;AHoER;;AIrHA;EACI,cAAA;EACA,cAAA;AJwHJ;;AK1HA;EACI,oBAAA;EACA,WAAA;EACA,uCAAA;EACA,gBAAA;EACA,eAAA;EACA,sCAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;AL6HJ;AK3HI;EACI,eAAA;EACA,sCAAA;AL6HR;;AKzHA;EACI,eAAA;EACA,YAAA;EACA,uCAAA;EACA,gBAAA;EACA,eAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;EACA,cAAA;EACA,qBAAA;EACA,gBAAA;AL4HJ;AK1HI;EACI,eAAA;EACA,qBAAA;EACA,2BAAA;AL4HR;AK1HI;EACI,2BAAA;AL4HR;;AKxHA;EACI,sBAAA;AL2HJ;AKzHI;EAHJ;IAIQ,kBAAA;EL4HN;AACF;;AKzHA;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,2BAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;AL4HJ;AK1HI;EACI,eAAA;EACA,yBAAA;AL4HR;AKzHI;EAhBJ;IAiBQ,cAAA;EL4HN;AACF;;AKxHI;EADJ;IAEQ,kBAAA;EL4HN;AACF;;AMtMA;EACI,yBAAA;EACA,+BAAA;EACA,2CAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;ANyMJ;AMvMI;EACI,mBAAA;ANyMR;AMvMQ;EAHJ;IAIQ,aAAA;IACA,sBAAA;IACA,uBAAA;EN0MV;AACF;AMvMI;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;ANyMR;AMtMI;EACI,cAAA;EACA,qBAAA;ANwMR;AMrMI;EACI,YAAA;ANuMR;AMpMI;EAvCJ;IAwCQ,YAAA;IACA,WAAA;IACA,6BAAA;IACA,WAAA;IACA,aAAA;IACA,sBAAA;ENuMN;AACF;;AOrPA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EAIA,2CAAA;APqPJ;AOpPI;EACI,gBAAA;EACA,oBAAA;EACA,iBAAA;APsPR;AOnPI;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;APqPR;AOnPQ;EATJ;IAUQ,YAAA;IACA,oCAAA;IACA,aAAA;EPsPV;AACF;AOpPQ;EAfJ;IAgBQ,aAAA;EPuPV;AACF;AOrPQ;EACI,2BAAA;APuPZ;AOrPY;EAHJ;IAIQ,eAAA;EPwPd;AACF;AOpPI;EACI,qBAAA;EACA,uCAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,YAAA;EACA,sBAAA;APsPR;AOpPQ;EACI,eAAA;EACA,UAAA;EACA,4BAAA;APsPZ;AOpPY;EALJ;IAMQ,eAAA;EPuPd;AACF;AOpPQ;EAnBJ;IAoBQ,iBAAA;IACA,gBAAA;IACA,YAAA;EPuPV;AACF;;AQzTA;EACI,gBAAA;EACA,WAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AR4TJ;AQ1TI;EACI,eAAA;AR4TR;AQ1TQ;EACI,kBAAA;AR4TZ;AQxTY;EADJ;IAEQ,4CAAA;ER2Td;AACF;AQrTI;EACI,cAAA;EACA,eAAA;ARuTR;AQrTQ;EAJJ;IAKQ,eAAA;ERwTV;AACF;AQrTI;EACI,cAAA;EACA,kBAAA;ARuTR;AQrTQ;EACI,yBAAA;ARuTZ;AQnTI;EA/CJ;IAgDQ,YAAA;ERsTN;AACF;;ASvWA;EACI,eAAA;EACA,SAAA;EACA,WAAA;EACA,qCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;AT0WJ;ASxWI;EAXJ;IAYQ,SAAA;IACA,2BAAA;ET2WN;AACF;;ASvWA;EACI,0BAAA;EACA,WAAA;EACA,aAAA;EACA,uCAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AT0WJ;ASvWI;EACI,kBAAA;EACA,eAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;ATyWR;ASvWQ;EACI,eAAA;ATyWZ;AStWQ;EAXJ;IAYQ,SAAA;IACA,aAAA;ETyWV;AACF;AStWI;EACI,YAAA;EACA,WAAA;EACA,aAAA;ATwWR;AStWQ;EACI,uBAAA;ATwWZ;ASrWQ;EATJ;IAUQ,sBAAA;ETwWV;AACF;ASlWI;EACI,yBAAA;EACA,UAAA;AToWR;ASlWQ;EAJJ;IAKQ,WAAA;ETqWV;AACF;ASjWQ;EADJ;IAEQ,WAAA;IACA,WAAA;EToWV;AACF;ASjWI;EACI,yBAAA;EACA,UAAA;EACA,eAAA;ATmWR;ASjWQ;EALJ;IAMQ,WAAA;IACA,gBAAA;IACA,eAAA;EToWV;AACF;AS3VI;EACI,SAAA;AT6VR;AS1VI;EApFJ;IAqFQ,2BAAA;IACA,eAAA;IACA,WAAA;IACA,kBAAA;IACA,iBAAA;ET6VN;AACF;;AS1VA;EACI,WAAA;EAEA,aAAA;EACA,mCAAA;EACA,qCAAA;EACA,UAAA;AT4VJ;AS1VI;EACG,aAAA;EACA,sBAAA;AT4VP;ASzVQ;EACI,aAAA;EACA,gBAAA;AT2VZ;ASzVY;EAJJ;IAKQ,iBAAA;IACA,oBAAA;ET4Vd;AACF;ASzVQ;EACI,aAAA;EACA,gBAAA;AT2VZ;ASzVY;EAJJ;IAKQ,iBAAA;IACA,oBAAA;ET4Vd;AACF;AS1VQ;EACI,aAAA;AT4VZ;AS1VY;EAHJ;IAIQ,iBAAA;IACA,oBAAA;ET6Vd;AACF;AS1VQ;EAjCJ;IAkCQ,SAAA;IACA,UAAA;ET6VV;AACF;AS1VI;EACI,YAAA;EACA,WAAA;EACA,iBAAA;EACA,cAAA;EACA,wBAAA;AT4VR;AS1VQ;EACI,sBAAA;EACA,eAAA;AT4VZ;ASxVI;EACI,YAAA;AT0VR;ASxVQ;EAHJ;IAIQ,aAAA;IACA,oBAAA;ET2VV;AACF;ASzVI;EACI,YAAA;AT2VR;ASzVQ;EAHJ;IAIQ,aAAA;IACA,oBAAA;ET4VV;AACF;AS1VI;EACI,YAAA;EACA,gBAAA;AT4VR;AS1VQ;EAJJ;IAKQ,iBAAA;IACA,oBAAA;ET6VV;AACF;AS1VI;EACI,iCAAA;EACA,gBAAA;AT4VR;AS1VQ;EAJJ;IAKQ,iBAAA;ET6VV;AACF;AS1VI;EA/FJ;IAgGQ,0BAAA;IACA,mCAAA;ET6VN;AACF;;AU9iBA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AVijBJ;AU/iBI;EAbJ;IAcQ,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,YAAA;EVkjBN;AACF;AUhjBI;EACI,mBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kCAAA;EACA,sBAAA;AVkjBR;AUhjBQ;EATJ;IAUQ,gBAAA;IACA,eAAA;IACA,eAAA;IACA,yCAAA;EVmjBV;AACF;AUjjBQ;EACI,yBAAA;AVmjBZ;AUhjBQ;EACI,yBAAA;AVkjBZ;AU9iBI;EACI,eAAA;EACA,gBAAA;EACA,yBAAA;AVgjBR;AU9iBQ;EACI,kBAAA;AVgjBZ;;AU3iBA;EACI,aAAA;EACA,YAAA;AV8iBJ;AU3iBI;EALJ;IAMQ,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,WAAA;IACA,kBAAA;IACA,WAAA;IACA,yBAAA;IACA,oCAAA;EV8iBN;AACF;;AU3iBA;EACI;IACI,WAAA;IACA,4BAAA;EV8iBN;AACF;AU1iBA;EACI,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,gCAAA;AV4iBJ;AU1iBQ;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,8GAAA;EACA,kBAAA;EACA,WAAA;AV4iBZ;AU1iBY;EAXJ;IAYQ,WAAA;IACA,YAAA;IACA,UAAA;IACA,UAAA;EV6iBd;AACF;AU1iBQ;EACI,WAAA;AV4iBZ;AUziBQ;EA7BR;IA8BY,UAAA;EV4iBV;AACF;;AW5pBA;EACI,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,WAAA;AX+pBJ;;AW5pBA;EACI,6BAAA;EACA,YAAA;EACA,WAAA;AX+pBJ;AW7pBI;EALJ;IAMQ,YAAA;EXgqBN;AACF;;AW5pBA;EACI,0BAAA;EACA,WAAA;AX+pBJ;AW7pBI;EAJJ;IAKQ,2BAAA;EXgqBN;AACF","sourcesContent":["@keyframes pulse{\n    0%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n\n    50%{\n        transform: scale(1.05);\n    }\n\n    100%{\n        transform: scale(1);\n        box-shadow: none;\n    }\n}","@keyframes pulse {\n  0% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    box-shadow: none;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media only screen and (max-width: 610px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (max-width: 375px) {\n  html {\n    font-size: 42.5%;\n  }\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 200;\n  font-size: 2.5rem;\n  background-color: rgb(6, 6, 31);\n  color: #fff;\n}\n\n.content {\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n  height: calc(100vh - 8rem);\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.img {\n  width: 100%;\n  height: 100%;\n}\n.img__about {\n  object-fit: cover;\n}\n\n.heading-primary {\n  font-size: 8rem;\n  font-weight: 100;\n}\n.heading-primary--contact {\n  text-align: center;\n}\n.heading-primary--concepts {\n  font-style: italic;\n}\n@media only screen and (max-width: 610px) {\n  .heading-primary {\n    text-align: center;\n  }\n}\n\n.heading-secondary {\n  margin-bottom: 1.5rem;\n}\n@media only screen and (max-width: 610px) {\n  .heading-secondary--contactForm {\n    display: none;\n  }\n}\n\np {\n  margin-bottom: 2rem;\n}\n\n.git-handle {\n  color: rgb(114, 37, 191);\n  font-weight: 400;\n}\n\n.heading-concepts {\n  font-size: 5rem;\n  font-weight: 100;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.heading-concepts--1 {\n  color: red;\n}\n.heading-concepts--2 {\n  color: white;\n}\n.heading-concepts--3 {\n  color: green;\n}\n\n.align-center {\n  display: block;\n  margin: 0 auto;\n}\n\n.btn-primary {\n  padding: 1.5rem 2rem;\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 3rem;\n  background-color: rgba(0, 0, 0, 0.565);\n  border: 2px solid #fff;\n  border-radius: 3px;\n  z-index: 20;\n}\n.btn-primary:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.696);\n}\n\n.reserve-btn {\n  padding: 1.5rem;\n  color: black;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  background-color: #fff;\n  border: none;\n  border-radius: 1px;\n  z-index: 20;\n  display: block;\n  margin: 0 auto;\n  transition: all 200ms;\n  margin-top: 4rem;\n}\n.reserve-btn:hover {\n  cursor: pointer;\n  background-color: tan;\n  transform: translateY(-2px);\n}\n.reserve-btn:active {\n  transform: translateY(-1px);\n}\n\n.btn-contact {\n  border: 1px solid #000;\n}\n@media only screen and (max-width: 610px) {\n  .btn-contact {\n    border-color: #fff;\n  }\n}\n\n.toggler {\n  position: absolute;\n  z-index: 999;\n  right: 1rem;\n  width: 4rem;\n  aspect-ratio: 1;\n  color: rgba(0, 0, 0, 0.666);\n  border: 0;\n  background: 0;\n  display: none;\n}\n.toggler:hover {\n  cursor: pointer;\n  background-color: #edd9bf;\n}\n@media only screen and (max-width: 610px) {\n  .toggler {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .btn-form {\n    margin-top: 2.5rem;\n  }\n}\n\n.form {\n  height: calc(100% - 8rem);\n  width: clamp(60rem, 60%, 60rem);\n  background-color: rgba(255, 255, 255, 0.95);\n  padding: 2rem;\n  color: #000;\n  font-size: 2rem;\n  font-weight: 300;\n  overflow-y: scroll;\n}\n.form__group {\n  margin-bottom: 2rem;\n}\n@media only screen and (max-width: 610px) {\n  .form__group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.form__input {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid #000;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n}\n.form__label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.form textarea {\n  resize: none;\n}\n@media only screen and (max-width: 610px) {\n  .form {\n    height: 100%;\n    width: 100%;\n    background-color: transparent;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Mrs Saint Delafield\", cursive;\n}\n.header__main {\n  font-size: 15rem;\n  margin-bottom: -4rem;\n  user-select: none;\n}\n.header__map-scroller {\n  position: absolute;\n  bottom: 5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 2s;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 9rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller {\n    bottom: 15rem;\n  }\n}\n.header__map-scroller:hover {\n  transform: translateY(-5px);\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller:hover {\n    transform: none;\n  }\n}\n.header__map-scroller-text {\n  display: inline-block;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  opacity: 0.5;\n  transition: opacity 1s;\n}\n.header__map-scroller-text:hover {\n  cursor: pointer;\n  opacity: 1;\n  animation: pulse 2s infinite;\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text:hover {\n    animation: none;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .header__map-scroller-text {\n    font-size: 2.5rem;\n    font-weight: 400;\n    opacity: 0.8;\n  }\n}\n\n.footer {\n  background: #fff;\n  color: #000;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 4rem;\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__item {\n  padding: 0 10px;\n}\n.footer__item--link {\n  margin-left: -10px;\n}\n@media only screen and (max-width: 610px) {\n  .footer__item:first-child {\n    border-right: 1px solid rgba(0, 0, 0, 0.443);\n  }\n}\n.footer .odin-logo {\n  height: 3.5rem;\n  margin: 0 -2rem;\n}\n@media only screen and (max-width: 610px) {\n  .footer .odin-logo {\n    margin: 0 -7rem;\n  }\n}\n.footer .git-cat {\n  height: 3.5rem;\n  transition: all 1s;\n}\n.footer .git-cat:hover {\n  transform: rotate(360deg);\n}\n@media only screen and (max-width: 610px) {\n  .footer {\n    height: 8rem;\n  }\n}\n\n.info {\n  position: fixed;\n  top: 4rem;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.85);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  min-height: 100vh;\n}\n@media only screen and (max-width: 610px) {\n  .info {\n    top: 5rem;\n    height: calc(100vh - 20rem);\n  }\n}\n\n.info-panel {\n  height: calc(100vh - 8rem);\n  width: 100%;\n  padding: 4rem;\n  font-size: clamp(1.7rem, 2.6vw, 2.5rem);\n  font-weight: 100;\n  line-height: 1.1;\n  position: relative;\n  overflow-y: scroll;\n  top: -4rem;\n}\n.info-panel__close {\n  position: absolute;\n  font-size: 4rem;\n  color: #fff;\n  top: 3rem;\n  right: 3rem;\n}\n.info-panel__close:hover {\n  cursor: pointer;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__close {\n    top: 1rem;\n    right: 2.5rem;\n  }\n}\n.info-panel__content {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n.info-panel__content--contact {\n  justify-content: center;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content {\n    flex-direction: column;\n  }\n}\n.info-panel__content-main {\n  height: calc(100% - 8rem);\n  width: 50%;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-main--about {\n    width: 100%;\n    height: 50%;\n  }\n}\n.info-panel__content-secondary {\n  height: calc(100% - 8rem);\n  width: 50%;\n  padding: 0 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel__content-secondary {\n    width: 100%;\n    margin-top: 3rem;\n    font-size: 3rem;\n  }\n}\n.info-panel--about {\n  margin: 0;\n}\n@media only screen and (max-width: 610px) {\n  .info-panel {\n    height: calc(100vh - 25rem);\n    padding: 5rem 0;\n    top: -12rem;\n    overflow-y: scroll;\n    padding-bottom: 0;\n  }\n}\n\n.grid {\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(4, 30vw);\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0;\n}\n.grid__img-container {\n  padding: 3rem;\n  border: 1px solid #fff;\n}\n.grid__img-container--1 {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--1 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--2 {\n  grid-row: 2/4;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--2 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__img-container--3 {\n  grid-row: 4/5;\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid__img-container {\n    border: 0;\n    padding: 0;\n  }\n}\n.grid__img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 1s;\n}\n.grid__img:hover {\n  transform: scale(1.01);\n  cursor: pointer;\n}\n.grid__textBox--1 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--1 {\n    grid-row: 2/3;\n    grid-column: initial;\n  }\n}\n.grid__textBox--2 {\n  margin: 3rem;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--2 {\n    grid-row: 4/5;\n    grid-column: initial;\n  }\n}\n.grid__textBox--3 {\n  margin: 3rem;\n  grid-column: 2/3;\n}\n@media only screen and (max-width: 610px) {\n  .grid__textBox--3 {\n    grid-row: initial;\n    grid-column: initial;\n  }\n}\n.grid__text {\n  font-size: clamp(1rem, 2vw, 2rem);\n  line-height: 1.2;\n}\n@media only screen and (max-width: 610px) {\n  .grid__text {\n    font-size: 2.5rem;\n  }\n}\n@media only screen and (max-width: 610px) {\n  .grid {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 70vw);\n  }\n}\n\n.navbar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  font-size: 1.5rem;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  width: 100%;\n  color: #000;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .navbar {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 5rem;\n  }\n}\n.navbar__nav-item {\n  align-self: stretch;\n  display: block;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: background-color 250ms;\n  background-color: #fff;\n}\n@media only screen and (max-width: 610px) {\n  .navbar__nav-item {\n    font-weight: 300;\n    font-size: 2rem;\n    padding: 1.5rem;\n    border-top: 1px solid rgba(0, 0, 0, 0.13);\n  }\n}\n.navbar__nav-item:hover {\n  background-color: #edd9bf;\n}\n.navbar__nav-item.active {\n  background-color: #edd9bf;\n}\n.navbar__nav-link {\n  padding: 0 10px;\n  padding-top: 5px;\n  text-transform: uppercase;\n}\n.navbar__nav-link--italic {\n  font-style: italic;\n}\n\n.primary-navigation {\n  display: flex;\n  height: 4rem;\n}\n@media only screen and (max-width: 610px) {\n  .primary-navigation {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    position: absolute;\n    top: -30rem;\n    transform: translateY(0%);\n    transition: transform 200ms ease-out;\n  }\n}\n\n@media only screen and (max-width: 610px) {\n  .primary-navigation[data-visible=true] {\n    z-index: -1;\n    transform: translateY(47rem);\n  }\n}\n.fa-instagram {\n  display: inline-block;\n  position: absolute;\n  left: 1rem;\n  -webkit-text-stroke: 0.5px white;\n}\n.fa-instagram::after {\n  content: \"\";\n  position: absolute;\n  height: 25px;\n  width: 121%;\n  left: -2.5px;\n  top: -13px;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  border-radius: 6px;\n  z-index: -1;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram::after {\n    width: 135%;\n    height: 23px;\n    top: -12px;\n    left: -3px;\n  }\n}\n.fa-instagram::before {\n  color: #fff;\n}\n@media only screen and (max-width: 600px) {\n  .fa-instagram {\n    left: 2rem;\n  }\n}\n\n.hero {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: url(/dist/images/hero.jpg);\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n}\n\n.footer-padding {\n  background-color: transparent;\n  height: 4rem;\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .footer-padding {\n    height: 8rem;\n  }\n}\n\n.map-container {\n  height: calc(100vh - 8rem);\n  width: 100%;\n}\n@media only screen and (max-width: 610px) {\n  .map-container {\n    height: calc(100vh - 20rem);\n  }\n}","// font-family: 'Meie Script', cursive;\n// font-family: 'Mrs Saint Delafield', cursive;\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nli{\n    list-style: none;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\nhtml{\n    font-size: 62.5%;\n\n    @media only screen and (max-width:610px){\n        font-size: 50%;\n    }\n\n    @media only screen and (max-width:375px){\n        font-size: 42.5%;\n    }\n}\n\nbody{\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 200;\n    font-size: 2.5rem;\n    background-color: rgb(6, 6, 31);\n    color: #fff;\n}\n\n.content{\n    max-width: 1000px;\n    width: 100%;\n    margin: auto;\n    height: calc(100vh - 8rem);\n    z-index: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    // @media only screen and (max-width:610px){\n    //     height: calc(100vh - 8rem);\n    // }\n\n}",".img{\n    width: 100%;\n    height: 100%;\n    &__about{\n        object-fit: cover;\n    }\n}",".heading-primary{\n    font-size: 8rem;\n    font-weight: 100;\n\n    &--contact{\n        text-align: center;\n    }\n\n    &--concepts{\n        font-style: italic;\n    }\n\n    @media only screen and (max-width:610px){\n        text-align: center;\n    }\n}\n\n.heading-secondary{\n    margin-bottom: 1.5rem;\n\n    &--contactForm{\n        @media only screen and (max-width:610px){\n            display: none;\n        }\n    }\n}\n\n\np{\n    margin-bottom: 2rem;\n}\n\n.git-handle{\n    color: rgb(114, 37, 191);\n    font-weight: 400;\n}\n\n.heading-concepts{\n    font-size: 5rem;\n    font-weight: 100;\n    font-family: 'Mrs Saint Delafield', cursive;\n\n    &--1{\n        color: red;\n    }\n    &--2{\n        color: white;\n    }\n    &--3{\n        color: green;\n    }\n}",".align-center{\n    display: block;\n    margin: 0 auto;\n}",".btn-primary{\n    padding: 1.5rem 2rem;\n    color: #fff;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 3rem;\n    background-color: rgba(0, 0, 0, 0.565);\n    border: 2px solid #fff;\n    border-radius: 3px;\n    z-index: 20;\n\n    &:hover{\n        cursor: pointer;\n        background-color: rgba(0, 0, 0, 0.696);\n    }\n}\n\n.reserve-btn{\n    padding: 1.5rem;\n    color: black;\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: 400;\n    font-size: 2rem;\n    background-color: #fff;\n    border: none;\n    border-radius: 1px;\n    z-index: 20;\n    display: block;\n    margin: 0 auto;\n    transition: all 200ms;\n    margin-top: 4rem;\n\n    &:hover{\n        cursor: pointer;\n        background-color: tan;\n        transform: translateY(-2px);\n    }\n    &:active{\n        transform: translateY(-1px);\n    }\n}\n\n.btn-contact{\n    border: 1px solid #000;\n\n    @media only screen and (max-width:610px){\n        border-color: #fff;\n    }\n}\n\n.toggler{\n    position: absolute;\n    z-index: 999;\n    right: 1rem;\n    width: 4rem;\n    aspect-ratio: 1;\n    color: rgba(0, 0, 0, 0.666);\n    border: 0;\n    background: 0;\n    display: none;\n\n    &:hover{\n        cursor: pointer;\n        background-color: #edd9bf;\n    }\n\n    @media only screen and (max-width:610px){\n        display: block;\n    }\n}\n\n.btn-form{\n    @media only screen and (max-width:610px){\n        margin-top: 2.5rem\n    }\n}",".form{\n    height: calc(100% - 8rem);\n    width: clamp(60rem, 60%, 60rem);\n    background-color: rgba(255, 255, 255, 0.95);\n    padding: 2rem;\n    color: #000;\n    font-size: 2rem;\n    font-weight: 300;\n    overflow-y: scroll;\n\n    &__group{\n        margin-bottom: 2rem;\n\n        @media only screen and (max-width:610px){\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n        }\n    }\n\n    &__input{\n        width: 100%;\n        padding: 1rem;\n        border: 1px solid #000;\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        color: inherit;\n    }\n\n    &__label{\n        display: block;\n        margin-bottom: .5rem;\n    }\n\n    textarea{\n        resize: none;\n    }\n\n    @media only screen and (max-width:610px){\n        height: 100%;\n        width: 100%;\n        background-color: transparent;\n        color: #fff;\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n\n",".header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    // min-height: 100vh;\n    \n    \n    font-family: 'Mrs Saint Delafield', cursive;\n    &__main{\n        font-size: 15rem;\n        margin-bottom: -4rem;\n        user-select: none;\n    }\n\n    &__map-scroller{\n        position: absolute;\n        bottom: 5rem;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: 2s;\n\n        @media only screen and (max-width:610px){\n            bottom: 9rem;\n            background-color: rgba(0, 0, 0, 0.5);\n            padding: 2rem;\n        }\n\n        @media only screen and (max-width:610px){\n            bottom: 15rem;\n        }\n\n        &:hover{\n            transform: translateY(-5px);\n\n            @media only screen and (max-width:610px){\n                transform: none;\n            }\n        }\n    }\n\n    &__map-scroller-text{\n        display: inline-block;\n        font-family: 'Josefin Sans', sans-serif;\n        font-size: 2rem;\n        font-weight: 300;\n        text-transform: uppercase;\n        opacity: .5;\n        transition: opacity 1s;\n\n        &:hover{\n            cursor: pointer;\n            opacity: 1;\n            animation: pulse 2s infinite;\n\n            @media only screen and (max-width:610px){\n                animation: none;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n            font-weight: 400;\n            opacity: .8;\n        }\n    }\n}",".footer{\n    background: #fff;\n    color: #000;\n    font-size: 1.5rem;\n    width: 100%;\n    height: 4rem;\n    z-index: 1;\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__item{\n        padding: 0 10px;\n\n        &--link{\n            margin-left: -10px;\n        }\n\n        &:first-child{\n            @media only screen and (max-width:610px){\n                border-right: 1px solid rgba(0, 0, 0, 0.443);\n            }\n        }\n\n        \n    }\n\n    .odin-logo{\n        height: 3.5rem;\n        margin: 0 -2rem;\n\n        @media only screen and (max-width:610px){\n            margin: 0 -7rem;\n        }\n    }\n\n    .git-cat{\n        height: 3.5rem;\n        transition: all 1s;\n\n        &:hover{\n            transform: rotate(360deg);\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        height: 8rem;\n    }\n}\n\n",".info{\n    position: fixed;\n    top: 4rem;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .85);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    min-height: 100vh;\n\n    @media only screen and (max-width:610px){\n        top: 5rem;\n        height: calc(100vh - 20rem);\n    }\n}\n\n\n.info-panel{\n    height: calc(100vh - 8rem);\n    width: 100%;\n    padding: 4rem;\n    font-size: clamp(1.7rem, 2.6vw , 2.5rem);\n    font-weight: 100;\n    line-height: 1.1;\n    position: relative;\n    overflow-y: scroll;\n    top: -4rem;\n\n\n    &__close{\n        position: absolute;\n        font-size: 4rem;\n        color: #fff;\n        top: 3rem;\n        right: 3rem;\n\n        &:hover{\n            cursor: pointer;\n        }\n\n        @media only screen and (max-width:610px){\n            top: 1rem;\n            right: 2.5rem;\n        }\n    }\n\n    &__content{\n        height: 100%;\n        width: 100%;\n        display: flex;\n\n        &--contact{\n            justify-content: center;\n        }\n\n        @media only screen and (max-width:610px){\n            flex-direction: column;\n        }\n\n        @media only screen and (min-width: 375px) and (max-width:610px){\n            // height: 50%;\n        }\n    }\n    &__content-main{\n        height: calc(100% - 8rem);\n        width: 50%;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n        }\n    }\n\n    &__content-main--about{\n        @media only screen and (max-width:610px){\n            width: 100%;\n            height: 50%;\n        }\n    }\n\n    &__content-secondary{\n        height: calc(100% - 8rem);\n        width: 50%;\n        padding: 0 4rem;\n\n        @media only screen and (max-width:610px){\n            width: 100%;\n            margin-top: 3rem;\n            font-size: 3rem;\n        }\n    }\n\n    &--concepts{\n        @media only screen and (max-width:610px){\n            // overflow-y: scroll !important;\n        }\n    }\n\n    &--about{\n        margin: 0;\n    }\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 25rem);\n        padding: 5rem 0;\n        top: -12rem;\n        overflow-y: scroll;\n        padding-bottom: 0;\n    }\n}\n\n.grid{\n    width: 100%;\n\n    display: grid;\n    grid-template-rows: repeat(4, 30vw);\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0;\n\n    &__img-container{\n       padding: 3rem;\n       border: 1px solid #fff;\n\n\n        &--1{\n            grid-row: 1/2;\n            grid-column: 1/2;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n            \n        }\n        &--2{\n            grid-row: 2/4;\n            grid-column: 2/3;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n        &--3{\n            grid-row: 4/5;\n\n            @media only screen and (max-width:610px){\n                grid-row: initial;\n                grid-column: initial;\n            }\n        }\n\n        @media only screen and (max-width:610px){\n            border: 0;\n            padding: 0;\n        }\n    }\n\n    &__img{\n        height: 100%;\n        width: 100%;\n        object-fit: cover;\n        display: block;\n        transition: transform 1s;\n\n        &:hover{\n            transform: scale(1.01);\n            cursor: pointer;\n        }\n    }\n\n    &__textBox--1{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 2/3;\n            grid-column: initial;\n        }\n    }\n    &__textBox--2{\n        margin: 3rem;\n\n        @media only screen and (max-width:610px){\n            grid-row: 4/5;\n            grid-column: initial;\n        }\n    }\n    &__textBox--3{\n        margin: 3rem;\n        grid-column: 2/3;\n\n        @media only screen and (max-width:610px){\n            grid-row: initial;\n            grid-column: initial;\n        }\n    }\n\n    &__text{\n        font-size: clamp(1rem, 2vw, 2rem);\n        line-height: 1.2;\n\n        @media only screen and (max-width:610px){\n            font-size: 2.5rem;\n        }\n    }\n\n    @media only screen and (max-width:610px){\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(6, 70vw)\n    }\n}\n\n",".navbar{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    font-size: 1.5rem;\n    top: 0;\n    z-index: 2;\n    background: #fff;\n    width: 100%;\n    color: #000;\n    height: 4rem;\n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        height: 5rem;\n    }\n\n    &__nav-item{\n        align-self: stretch;\n        display: block;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        transition: background-color 250ms;\n        background-color: #fff;\n\n        @media only screen and (max-width:610px){\n            font-weight: 300;\n            font-size: 2rem;\n            padding: 1.5rem;\n            border-top: 1px solid rgba(0, 0, 0, 0.13);\n        }\n\n        &:hover{\n            background-color: #edd9bf;\n        }\n        \n        &.active{\n            background-color: #edd9bf;\n        }\n    }\n\n    &__nav-link{\n        padding: 0 10px;\n        padding-top: 5px;\n        text-transform: uppercase;\n\n        &--italic{\n            font-style: italic;\n        }\n    }\n}\n\n.primary-navigation{\n    display: flex;\n    height: 4rem;\n    \n\n    @media only screen and (max-width:610px){\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        position: absolute;\n        top: -30rem;\n        transform: translateY(0%);\n        transition: transform 200ms ease-out;\n    }\n}\n\n@media only screen and (max-width:610px){\n    .primary-navigation[data-visible=\"true\"]{\n        z-index: -1;\n        transform: translateY(47rem);\n    }\n}\n\n\n.fa-instagram{\n    display: inline-block;\n    position: absolute;\n    left: 1rem;\n    -webkit-text-stroke: .5px white;\n\n        &::after{\n            content: \"\";\n            position: absolute;\n            height: 25px;\n            width: 121%;\n            left: -2.5px;\n            top: -13px;\n            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n            border-radius: 6px;\n            z-index: -1;\n\n            @media only screen and (max-width:600px){\n                width: 135%;\n                height: 23px;\n                top: -12px;\n                left: -3px;\n            }\n        }\n\n        &::before{\n            color: #fff;\n        }\n\n        @media only screen and (max-width:600px){\n            left: 2rem;\n        }\n}\n\n",".hero{\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: url(/dist/images/hero.jpg);\n    background-size: cover;\n    background-position: center;\n    z-index: -1;\n}\n\n.footer-padding{\n    background-color: transparent;\n    height: 4rem;\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: 8rem;\n    }\n   \n}\n\n.map-container{\n    height: calc(100vh - 8rem);\n    width: 100%;\n\n    @media only screen and (max-width:610px){\n        height: calc(100vh - 20rem);\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLDBDQUEwQyxTQUFTLDhCQUE4QiwyQkFBMkIsT0FBTyxZQUFZLGlDQUFpQyxPQUFPLGFBQWEsOEJBQThCLDJCQUEyQixPQUFPLEdBQUcscUJBQXFCLFFBQVEsMEJBQTBCLHVCQUF1QixLQUFLLFNBQVMsNkJBQTZCLEtBQUssVUFBVSwwQkFBMEIsdUJBQXVCLEtBQUssR0FBRyxLQUFLLGNBQWMsZUFBZSx3QkFBd0IsR0FBRyxRQUFRLHFCQUFxQixHQUFHLE9BQU8sMEJBQTBCLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsNkNBQTZDLFVBQVUscUJBQXFCLEtBQUssR0FBRyw2Q0FBNkMsVUFBVSx1QkFBdUIsS0FBSyxHQUFHLFVBQVUsMkJBQTJCLDhDQUE4QyxxQkFBcUIsc0JBQXNCLG9DQUFvQyxnQkFBZ0IsR0FBRyxjQUFjLHNCQUFzQixnQkFBZ0IsaUJBQWlCLCtCQUErQixlQUFlLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLHFCQUFxQixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyw4QkFBOEIsdUJBQXVCLEdBQUcsNkNBQTZDLHNCQUFzQix5QkFBeUIsS0FBSyxHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyw2Q0FBNkMscUNBQXFDLG9CQUFvQixLQUFLLEdBQUcsT0FBTyx3QkFBd0IsR0FBRyxpQkFBaUIsNkJBQTZCLHFCQUFxQixHQUFHLHVCQUF1QixvQkFBb0IscUJBQXFCLGtEQUFrRCxHQUFHLHdCQUF3QixlQUFlLEdBQUcsd0JBQXdCLGlCQUFpQixHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxtQkFBbUIsbUJBQW1CLG1CQUFtQixHQUFHLGtCQUFrQix5QkFBeUIsZ0JBQWdCLDhDQUE4QyxxQkFBcUIsb0JBQW9CLDJDQUEyQywyQkFBMkIsdUJBQXVCLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0IsMkNBQTJDLEdBQUcsa0JBQWtCLG9CQUFvQixpQkFBaUIsOENBQThDLHFCQUFxQixvQkFBb0IsMkJBQTJCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLG1CQUFtQixtQkFBbUIsMEJBQTBCLHFCQUFxQixHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRyxrQkFBa0IsMkJBQTJCLEdBQUcsNkNBQTZDLGtCQUFrQix5QkFBeUIsS0FBSyxHQUFHLGNBQWMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQixnQ0FBZ0MsY0FBYyxrQkFBa0Isa0JBQWtCLEdBQUcsa0JBQWtCLG9CQUFvQiw4QkFBOEIsR0FBRyw2Q0FBNkMsY0FBYyxxQkFBcUIsS0FBSyxHQUFHLCtDQUErQyxlQUFlLHlCQUF5QixLQUFLLEdBQUcsV0FBVyw4QkFBOEIsb0NBQW9DLGdEQUFnRCxrQkFBa0IsZ0JBQWdCLG9CQUFvQixxQkFBcUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLDZDQUE2QyxrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsS0FBSyxHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLDJCQUEyQix5QkFBeUIsdUJBQXVCLHlCQUF5QixtQkFBbUIsR0FBRyxnQkFBZ0IsbUJBQW1CLDBCQUEwQixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyw2Q0FBNkMsV0FBVyxtQkFBbUIsa0JBQWtCLG9DQUFvQyxrQkFBa0Isb0JBQW9CLDZCQUE2QixLQUFLLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isa0RBQWtELEdBQUcsaUJBQWlCLHFCQUFxQix5QkFBeUIsc0JBQXNCLEdBQUcseUJBQXlCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLG1CQUFtQixHQUFHLDZDQUE2QywyQkFBMkIsbUJBQW1CLDJDQUEyQyxvQkFBb0IsS0FBSyxHQUFHLDZDQUE2QywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRywrQkFBK0IsZ0NBQWdDLEdBQUcsNkNBQTZDLGlDQUFpQyxzQkFBc0IsS0FBSyxHQUFHLDhCQUE4QiwwQkFBMEIsOENBQThDLG9CQUFvQixxQkFBcUIsOEJBQThCLGlCQUFpQiwyQkFBMkIsR0FBRyxvQ0FBb0Msb0JBQW9CLGVBQWUsaUNBQWlDLEdBQUcsNkNBQTZDLHNDQUFzQyxzQkFBc0IsS0FBSyxHQUFHLDZDQUE2QyxnQ0FBZ0Msd0JBQXdCLHVCQUF1QixtQkFBbUIsS0FBSyxHQUFHLGFBQWEscUJBQXFCLGdCQUFnQixzQkFBc0IsZ0JBQWdCLGlCQUFpQixlQUFlLG9CQUFvQixjQUFjLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyw2Q0FBNkMsK0JBQStCLG1EQUFtRCxLQUFLLEdBQUcsc0JBQXNCLG1CQUFtQixvQkFBb0IsR0FBRyw2Q0FBNkMsd0JBQXdCLHNCQUFzQixLQUFLLEdBQUcsb0JBQW9CLG1CQUFtQix1QkFBdUIsR0FBRywwQkFBMEIsOEJBQThCLEdBQUcsNkNBQTZDLGFBQWEsbUJBQW1CLEtBQUssR0FBRyxXQUFXLG9CQUFvQixjQUFjLGdCQUFnQiwwQ0FBMEMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxzQkFBc0IsR0FBRyw2Q0FBNkMsV0FBVyxnQkFBZ0Isa0NBQWtDLEtBQUssR0FBRyxpQkFBaUIsK0JBQStCLGdCQUFnQixrQkFBa0IsNENBQTRDLHFCQUFxQixxQkFBcUIsdUJBQXVCLHVCQUF1QixlQUFlLEdBQUcsc0JBQXNCLHVCQUF1QixvQkFBb0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLEdBQUcsNEJBQTRCLG9CQUFvQixHQUFHLDZDQUE2Qyx3QkFBd0IsZ0JBQWdCLG9CQUFvQixLQUFLLEdBQUcsd0JBQXdCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLEdBQUcsaUNBQWlDLDRCQUE0QixHQUFHLDZDQUE2QywwQkFBMEIsNkJBQTZCLEtBQUssR0FBRyw2QkFBNkIsOEJBQThCLGVBQWUsR0FBRyw2Q0FBNkMsK0JBQStCLGtCQUFrQixLQUFLLEdBQUcsNkNBQTZDLHNDQUFzQyxrQkFBa0Isa0JBQWtCLEtBQUssR0FBRyxrQ0FBa0MsOEJBQThCLGVBQWUsb0JBQW9CLEdBQUcsNkNBQTZDLG9DQUFvQyxrQkFBa0IsdUJBQXVCLHNCQUFzQixLQUFLLEdBQUcsc0JBQXNCLGNBQWMsR0FBRyw2Q0FBNkMsaUJBQWlCLGtDQUFrQyxzQkFBc0Isa0JBQWtCLHlCQUF5Qix3QkFBd0IsS0FBSyxHQUFHLFdBQVcsZ0JBQWdCLGtCQUFrQix3Q0FBd0MsMENBQTBDLGVBQWUsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQixHQUFHLDJCQUEyQixrQkFBa0IscUJBQXFCLEdBQUcsNkNBQTZDLDZCQUE2Qix3QkFBd0IsMkJBQTJCLEtBQUssR0FBRywyQkFBMkIsa0JBQWtCLHFCQUFxQixHQUFHLDZDQUE2Qyw2QkFBNkIsd0JBQXdCLDJCQUEyQixLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLDZDQUE2Qyw2QkFBNkIsd0JBQXdCLDJCQUEyQixLQUFLLEdBQUcsNkNBQTZDLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEtBQUssR0FBRyxjQUFjLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG1CQUFtQiw2QkFBNkIsR0FBRyxvQkFBb0IsMkJBQTJCLG9CQUFvQixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyw2Q0FBNkMsdUJBQXVCLG9CQUFvQiwyQkFBMkIsS0FBSyxHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyw2Q0FBNkMsdUJBQXVCLG9CQUFvQiwyQkFBMkIsS0FBSyxHQUFHLHFCQUFxQixpQkFBaUIscUJBQXFCLEdBQUcsNkNBQTZDLHVCQUF1Qix3QkFBd0IsMkJBQTJCLEtBQUssR0FBRyxlQUFlLHNDQUFzQyxxQkFBcUIsR0FBRyw2Q0FBNkMsaUJBQWlCLHdCQUF3QixLQUFLLEdBQUcsNkNBQTZDLFdBQVcsaUNBQWlDLDBDQUEwQyxLQUFLLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0JBQXNCLFdBQVcsZUFBZSxxQkFBcUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsR0FBRyw2Q0FBNkMsYUFBYSw2QkFBNkIsOEJBQThCLDBCQUEwQixtQkFBbUIsS0FBSyxHQUFHLHFCQUFxQix3QkFBd0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVDQUF1QywyQkFBMkIsR0FBRyw2Q0FBNkMsdUJBQXVCLHVCQUF1QixzQkFBc0Isc0JBQXNCLGdEQUFnRCxLQUFLLEdBQUcsMkJBQTJCLDhCQUE4QixHQUFHLDRCQUE0Qiw4QkFBOEIsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQiw4QkFBOEIsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcseUJBQXlCLGtCQUFrQixpQkFBaUIsR0FBRyw2Q0FBNkMseUJBQXlCLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGtCQUFrQix5QkFBeUIsa0JBQWtCLGdDQUFnQywyQ0FBMkMsS0FBSyxHQUFHLCtDQUErQyw0Q0FBNEMsa0JBQWtCLG1DQUFtQyxLQUFLLEdBQUcsaUJBQWlCLDBCQUEwQix1QkFBdUIsZUFBZSxxQ0FBcUMsR0FBRyx3QkFBd0Isa0JBQWtCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGlCQUFpQixlQUFlLG1IQUFtSCx1QkFBdUIsZ0JBQWdCLEdBQUcsNkNBQTZDLDBCQUEwQixrQkFBa0IsbUJBQW1CLGlCQUFpQixpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRyw2Q0FBNkMsbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsV0FBVyxvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxpREFBaUQsMkJBQTJCLGdDQUFnQyxnQkFBZ0IsR0FBRyxxQkFBcUIsa0NBQWtDLGlCQUFpQixnQkFBZ0IsR0FBRyw2Q0FBNkMscUJBQXFCLG1CQUFtQixLQUFLLEdBQUcsb0JBQW9CLCtCQUErQixnQkFBZ0IsR0FBRyw2Q0FBNkMsb0JBQW9CLGtDQUFrQyxLQUFLLEdBQUcsMENBQTBDLGlEQUFpRCxNQUFNLGdCQUFnQixpQkFBaUIsMEJBQTBCLEdBQUcsT0FBTyx1QkFBdUIsR0FBRyxNQUFNLDRCQUE0QixxQkFBcUIsR0FBRyxTQUFTLHVCQUF1QixpREFBaUQseUJBQXlCLE9BQU8saURBQWlELDJCQUEyQixPQUFPLEdBQUcsU0FBUyw2QkFBNkIsOENBQThDLHVCQUF1Qix3QkFBd0Isc0NBQXNDLGtCQUFrQixHQUFHLGFBQWEsd0JBQXdCLGtCQUFrQixtQkFBbUIsaUNBQWlDLGlCQUFpQixvQkFBb0IsNkJBQTZCLDhCQUE4QixvREFBb0Qsd0NBQXdDLFVBQVUsS0FBSyxRQUFRLGtCQUFrQixtQkFBbUIsZUFBZSw0QkFBNEIsT0FBTyxHQUFHLG9CQUFvQixzQkFBc0IsdUJBQXVCLG1CQUFtQiw2QkFBNkIsT0FBTyxvQkFBb0IsNkJBQTZCLE9BQU8saURBQWlELDZCQUE2QixPQUFPLEdBQUcsdUJBQXVCLDRCQUE0Qix1QkFBdUIsbURBQW1ELDRCQUE0QixXQUFXLE9BQU8sR0FBRyxRQUFRLDBCQUEwQixHQUFHLGdCQUFnQiwrQkFBK0IsdUJBQXVCLEdBQUcsc0JBQXNCLHNCQUFzQix1QkFBdUIsa0RBQWtELGFBQWEscUJBQXFCLE9BQU8sV0FBVyx1QkFBdUIsT0FBTyxXQUFXLHVCQUF1QixPQUFPLEdBQUcsaUJBQWlCLHFCQUFxQixxQkFBcUIsR0FBRyxnQkFBZ0IsMkJBQTJCLGtCQUFrQiw4Q0FBOEMsdUJBQXVCLHNCQUFzQiw2Q0FBNkMsNkJBQTZCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLDBCQUEwQixpREFBaUQsT0FBTyxHQUFHLGlCQUFpQixzQkFBc0IsbUJBQW1CLDhDQUE4Qyx1QkFBdUIsc0JBQXNCLDZCQUE2QixtQkFBbUIseUJBQXlCLGtCQUFrQixxQkFBcUIscUJBQXFCLDRCQUE0Qix1QkFBdUIsZ0JBQWdCLDBCQUEwQixnQ0FBZ0Msc0NBQXNDLE9BQU8sZUFBZSxzQ0FBc0MsT0FBTyxHQUFHLGlCQUFpQiw2QkFBNkIsaURBQWlELDZCQUE2QixPQUFPLEdBQUcsYUFBYSx5QkFBeUIsbUJBQW1CLGtCQUFrQixrQkFBa0Isc0JBQXNCLGtDQUFrQyxnQkFBZ0Isb0JBQW9CLG9CQUFvQixnQkFBZ0IsMEJBQTBCLG9DQUFvQyxPQUFPLGlEQUFpRCx5QkFBeUIsT0FBTyxHQUFHLGNBQWMsK0NBQStDLG1DQUFtQyxHQUFHLFNBQVMsZ0NBQWdDLHNDQUFzQyxrREFBa0Qsb0JBQW9CLGtCQUFrQixzQkFBc0IsdUJBQXVCLHlCQUF5QixpQkFBaUIsOEJBQThCLHFEQUFxRCw0QkFBNEIscUNBQXFDLHNDQUFzQyxXQUFXLE9BQU8saUJBQWlCLHNCQUFzQix3QkFBd0IsaUNBQWlDLCtCQUErQiw2QkFBNkIsK0JBQStCLHlCQUF5QixPQUFPLGlCQUFpQix5QkFBeUIsK0JBQStCLE9BQU8saUJBQWlCLHVCQUF1QixPQUFPLGlEQUFpRCx1QkFBdUIsc0JBQXNCLHdDQUF3QyxzQkFBc0Isd0JBQXdCLGlDQUFpQyxPQUFPLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQiwyQkFBMkIsOERBQThELGNBQWMsMkJBQTJCLCtCQUErQiw0QkFBNEIsT0FBTyx3QkFBd0IsNkJBQTZCLHVCQUF1QixzQkFBc0Isd0JBQXdCLDhCQUE4QixrQ0FBa0MseUJBQXlCLHFEQUFxRCwyQkFBMkIsbURBQW1ELDRCQUE0QixXQUFXLHFEQUFxRCw0QkFBNEIsV0FBVyxvQkFBb0IsMENBQTBDLHlEQUF5RCxrQ0FBa0MsZUFBZSxXQUFXLE9BQU8sNkJBQTZCLGdDQUFnQyxrREFBa0QsMEJBQTBCLDJCQUEyQixvQ0FBb0Msc0JBQXNCLGlDQUFpQyxvQkFBb0IsOEJBQThCLHlCQUF5QiwyQ0FBMkMseURBQXlELGtDQUFrQyxlQUFlLFdBQVcscURBQXFELGdDQUFnQywrQkFBK0IsMEJBQTBCLFdBQVcsT0FBTyxHQUFHLFdBQVcsdUJBQXVCLGtCQUFrQix3QkFBd0Isa0JBQWtCLG1CQUFtQixpQkFBaUIsc0JBQXNCLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLG9CQUFvQixpQ0FBaUMsV0FBVywwQkFBMEIsdURBQXVELCtEQUErRCxlQUFlLFdBQVcsbUJBQW1CLG1CQUFtQix5QkFBeUIsMEJBQTBCLHFEQUFxRCw4QkFBOEIsV0FBVyxPQUFPLGlCQUFpQix5QkFBeUIsNkJBQTZCLG9CQUFvQix3Q0FBd0MsV0FBVyxPQUFPLGlEQUFpRCx1QkFBdUIsT0FBTyxHQUFHLGFBQWEsc0JBQXNCLGdCQUFnQixrQkFBa0IsMkNBQTJDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGlCQUFpQix3QkFBd0IsaURBQWlELG9CQUFvQixzQ0FBc0MsT0FBTyxHQUFHLGtCQUFrQixpQ0FBaUMsa0JBQWtCLG9CQUFvQiwrQ0FBK0MsdUJBQXVCLHVCQUF1Qix5QkFBeUIseUJBQXlCLGlCQUFpQixtQkFBbUIsNkJBQTZCLDBCQUEwQixzQkFBc0Isb0JBQW9CLHNCQUFzQixvQkFBb0IsOEJBQThCLFdBQVcscURBQXFELHdCQUF3Qiw0QkFBNEIsV0FBVyxPQUFPLG1CQUFtQix1QkFBdUIsc0JBQXNCLHdCQUF3Qix1QkFBdUIsc0NBQXNDLFdBQVcscURBQXFELHFDQUFxQyxXQUFXLDRFQUE0RSw2QkFBNkIsV0FBVyxPQUFPLHNCQUFzQixvQ0FBb0MscUJBQXFCLHFEQUFxRCwwQkFBMEIsV0FBVyxPQUFPLCtCQUErQixtREFBbUQsMEJBQTBCLDBCQUEwQixXQUFXLE9BQU8sNkJBQTZCLG9DQUFvQyxxQkFBcUIsMEJBQTBCLHFEQUFxRCwwQkFBMEIsK0JBQStCLDhCQUE4QixXQUFXLE9BQU8sb0JBQW9CLG1EQUFtRCwrQ0FBK0MsV0FBVyxPQUFPLGlCQUFpQixvQkFBb0IsT0FBTyxpREFBaUQsc0NBQXNDLDBCQUEwQixzQkFBc0IsNkJBQTZCLDRCQUE0QixPQUFPLEdBQUcsVUFBVSxrQkFBa0Isc0JBQXNCLDBDQUEwQyw0Q0FBNEMsaUJBQWlCLHlCQUF5Qix1QkFBdUIsZ0NBQWdDLG1CQUFtQiw0QkFBNEIsK0JBQStCLHlEQUF5RCxvQ0FBb0MsdUNBQXVDLGVBQWUseUJBQXlCLGVBQWUsNEJBQTRCLCtCQUErQix5REFBeUQsb0NBQW9DLHVDQUF1QyxlQUFlLFdBQVcsZUFBZSw0QkFBNEIseURBQXlELG9DQUFvQyx1Q0FBdUMsZUFBZSxXQUFXLHFEQUFxRCx3QkFBd0IseUJBQXlCLFdBQVcsT0FBTyxlQUFlLHVCQUF1QixzQkFBc0IsNEJBQTRCLHlCQUF5QixtQ0FBbUMsb0JBQW9CLHFDQUFxQyw4QkFBOEIsV0FBVyxPQUFPLHNCQUFzQix1QkFBdUIscURBQXFELDRCQUE0QixtQ0FBbUMsV0FBVyxPQUFPLG9CQUFvQix1QkFBdUIscURBQXFELDRCQUE0QixtQ0FBbUMsV0FBVyxPQUFPLG9CQUFvQix1QkFBdUIsMkJBQTJCLHFEQUFxRCxnQ0FBZ0MsbUNBQW1DLFdBQVcsT0FBTyxnQkFBZ0IsNENBQTRDLDJCQUEyQixxREFBcUQsZ0NBQWdDLFdBQVcsT0FBTyxpREFBaUQscUNBQXFDLG9EQUFvRCxHQUFHLGVBQWUsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixhQUFhLGlCQUFpQix1QkFBdUIsa0JBQWtCLGtCQUFrQixtQkFBbUIsaURBQWlELGlDQUFpQyxrQ0FBa0MsOEJBQThCLHVCQUF1QixPQUFPLG9CQUFvQiw4QkFBOEIseUJBQXlCLHdCQUF3QixpQ0FBaUMsa0NBQWtDLDZDQUE2QyxpQ0FBaUMscURBQXFELCtCQUErQiw4QkFBOEIsOEJBQThCLHdEQUF3RCxXQUFXLG9CQUFvQix3Q0FBd0MsV0FBVyw2QkFBNkIsd0NBQXdDLFdBQVcsT0FBTyxvQkFBb0IsMEJBQTBCLDJCQUEyQixvQ0FBb0Msc0JBQXNCLGlDQUFpQyxXQUFXLE9BQU8sR0FBRyx3QkFBd0Isb0JBQW9CLG1CQUFtQix1REFBdUQsaUNBQWlDLGtDQUFrQyw4QkFBOEIsc0JBQXNCLDZCQUE2QixzQkFBc0Isb0NBQW9DLCtDQUErQyxPQUFPLEdBQUcsNkNBQTZDLGlEQUFpRCxzQkFBc0IsdUNBQXVDLE9BQU8sR0FBRyxvQkFBb0IsNEJBQTRCLHlCQUF5QixpQkFBaUIsc0NBQXNDLHFCQUFxQiw0QkFBNEIsaUNBQWlDLDJCQUEyQiwwQkFBMEIsMkJBQTJCLHlCQUF5Qiw2SEFBNkgsaUNBQWlDLDBCQUEwQix5REFBeUQsOEJBQThCLCtCQUErQiw2QkFBNkIsNkJBQTZCLGVBQWUsV0FBVyxzQkFBc0IsMEJBQTBCLFdBQVcscURBQXFELHlCQUF5QixXQUFXLEdBQUcsYUFBYSxzQkFBc0IsYUFBYSxlQUFlLGdCQUFnQixjQUFjLG1EQUFtRCw2QkFBNkIsa0NBQWtDLGtCQUFrQixHQUFHLG9CQUFvQixvQ0FBb0MsbUJBQW1CLGtCQUFrQixpREFBaUQsdUJBQXVCLE9BQU8sUUFBUSxtQkFBbUIsaUNBQWlDLGtCQUFrQixpREFBaUQsc0NBQXNDLE9BQU8sR0FBRyxtQkFBbUI7QUFDOXM4QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFpSjtBQUNqSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSTJGO0FBQ25ILE9BQU8saUVBQWUsMkhBQU8sSUFBSSxrSUFBYyxHQUFHLGtJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBVTs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7OztBQUdBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FdUI7QUFDQTtBQUNBOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsK0NBQWM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBYzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtDQUFjOzs7QUFHN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7O0FBR0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEg1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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L3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Nzcy9tYWluLnNjc3M/NmQyNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hYm91dEluZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbmNlcHRzSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcmVzZXJ2YXRpb25zSW5mby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Rpc3QvaW1hZ2VzL2hlcm8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA0Mi41JTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB6LWluZGV4OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmltZ19fYWJvdXQge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5oZWFkaW5nLXByaW1hcnkge1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLmhlYWRpbmctcHJpbWFyeS0tY29udGFjdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZWFkaW5nLXByaW1hcnktLWNvbmNlcHRzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRpbmctcHJpbWFyeSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRpbmctc2Vjb25kYXJ5LS1jb250YWN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmdpdC1oYW5kbGUge1xcbiAgY29sb3I6IHJnYigxMTQsIDM3LCAxOTEpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRpbmctY29uY2VwdHMge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXJzIFNhaW50IERlbGFmaWVsZFxcXCIsIGN1cnNpdmU7XFxufVxcbi5oZWFkaW5nLWNvbmNlcHRzLS0xIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5oZWFkaW5nLWNvbmNlcHRzLS0yIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhlYWRpbmctY29uY2VwdHMtLTMge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYWxpZ24tY2VudGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NjUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Nik7XFxufVxcblxcbi5yZXNlcnZlLWJ0biB7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcbi5yZXNlcnZlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcbi5yZXNlcnZlLWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uYnRuLWNvbnRhY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmJ0bi1jb250YWN0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4udG9nZ2xlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICByaWdodDogMXJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NjYpO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50b2dnbGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC50b2dnbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5idG4tZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiBjbGFtcCg2MHJlbSwgNjAlLCA2MHJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmZvcm1fX2dyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb3JtX19ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbn1cXG4uZm9ybV9faW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmZvcm1fX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNcnMgU2FpbnQgRGVsYWZpZWxkXFxcIiwgY3Vyc2l2ZTtcXG59XFxuLmhlYWRlcl9fbWFpbiB7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTRyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDJzO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXIge1xcbiAgICBib3R0b206IDlyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyIHtcXG4gICAgYm90dG9tOiAxNXJlbTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dDpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgfVxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3Rlcl9faXRlbSB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5mb290ZXJfX2l0ZW0tLWxpbmsge1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyX19pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0Myk7XFxuICB9XFxufVxcbi5mb290ZXIgLm9kaW4tbG9nbyB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIG1hcmdpbjogMCAtMnJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3RlciAub2Rpbi1sb2dvIHtcXG4gICAgbWFyZ2luOiAwIC03cmVtO1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5naXQtY2F0IHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG4uZm9vdGVyIC5naXQtY2F0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICB9XFxufVxcblxcbi5pbmZvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHJlbSk7XFxuICB9XFxufVxcblxcbi5pbmZvLXBhbmVsIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjdyZW0sIDIuNnZ3LCAyLjVyZW0pO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB0b3A6IC00cmVtO1xcbn1cXG4uaW5mby1wYW5lbF9fY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0b3A6IDNyZW07XFxuICByaWdodDogM3JlbTtcXG59XFxuLmluZm8tcGFuZWxfX2Nsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2Nsb3NlIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICByaWdodDogMi41cmVtO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LS1jb250YWN0IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LW1haW4ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LW1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtbWFpbi0tYWJvdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAgNHJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQtc2Vjb25kYXJ5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWwtLWFib3V0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWwge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXJlbSk7XFxuICAgIHBhZGRpbmc6IDVyZW0gMDtcXG4gICAgdG9wOiAtMTJyZW07XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxufVxcblxcbi5ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDMwdncpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMSB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTEge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0yIHtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lci0tMiB7XFxuICAgIGdyaWQtcm93OiBpbml0aWFsO1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTMge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTMge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuLmdyaWRfX2ltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMSB7XFxuICBtYXJnaW46IDNyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0Qm94LS0xIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0Qm94LS0yIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTIge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmdyaWRfX3RleHRCb3gtLTMge1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX3RleHRCb3gtLTMge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0IHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDcwdncpO1xcbiAgfVxcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzAwMDtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICB9XFxufVxcbi5uYXZiYXJfX25hdi1pdGVtIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLm5hdmJhcl9fbmF2LWl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxuICB9XFxufVxcbi5uYXZiYXJfX25hdi1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGQ5YmY7XFxufVxcbi5uYXZiYXJfX25hdi1pdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbn1cXG4ubmF2YmFyX19uYXYtbGluayB7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm5hdmJhcl9fbmF2LWxpbmstLWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcmltYXJ5LW5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNHJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnByaW1hcnktbmF2aWdhdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zMHJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAucHJpbWFyeS1uYXZpZ2F0aW9uW2RhdGEtdmlzaWJsZT10cnVlXSB7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDdyZW0pO1xcbiAgfVxcbn1cXG4uZmEtaW5zdGFncmFtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCB3aGl0ZTtcXG59XFxuLmZhLWluc3RhZ3JhbTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMTIxJTtcXG4gIGxlZnQ6IC0yLjVweDtcXG4gIHRvcDogLTEzcHg7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZmEtaW5zdGFncmFtOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMzUlO1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIHRvcDogLTEycHg7XFxuICAgIGxlZnQ6IC0zcHg7XFxuICB9XFxufVxcbi5mYS1pbnN0YWdyYW06OmJlZm9yZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZhLWluc3RhZ3JhbSB7XFxuICAgIGxlZnQ6IDJyZW07XFxuICB9XFxufVxcblxcbi5oZXJvIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5mb290ZXItcGFkZGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyLXBhZGRpbmcge1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICB9XFxufVxcblxcbi5tYXAtY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5tYXAtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19hbmltYXRpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19pbWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL191dGlsaXRpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2Zvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19pbmZvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3BhZ2VzL19ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUNDTjtFREVFO0lBQ0ksc0JBQUE7RUNBTjtFREdFO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtFQ0ROO0FBQ0Y7QUNUQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QURXSjs7QUNSQTtFQUNJLGdCQUFBO0FEV0o7O0FDUkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QURXSjs7QUNSQTtFQUNJLGdCQUFBO0FEV0o7QUNUSTtFQUhKO0lBSVEsY0FBQTtFRFlOO0FBQ0Y7QUNWSTtFQVBKO0lBUVEsZ0JBQUE7RURhTjtBQUNGOztBQ1ZBO0VBQ0ksc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdC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LHlCQUFBO0FWZ2pCUjtBVTlpQlE7RUFDSSxrQkFBQTtBVmdqQlo7O0FVM2lCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FWOGlCSjtBVTNpQkk7RUFMSjtJQU1RLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLG9DQUFBO0VWOGlCTjtBQUNGOztBVTNpQkE7RUFDSTtJQUNJLFdBQUE7SUFDQSw0QkFBQTtFVjhpQk47QUFDRjtBVTFpQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FWNGlCSjtBVTFpQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QVY0aUJaO0FVMWlCWTtFQVhKO0lBWVEsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFVjZpQmQ7QUFDRjtBVTFpQlE7RUFDSSxXQUFBO0FWNGlCWjtBVXppQlE7RUE3QlI7SUE4QlksVUFBQTtFVjRpQlY7QUFDRjs7QVc1cEJBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FYK3BCSjs7QVc1cEJBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBWCtwQko7QVc3cEJJO0VBTEo7SUFNUSxZQUFBO0VYZ3FCTjtBQUNGOztBVzVwQkE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7QVgrcEJKO0FXN3BCSTtFQUpKO0lBS1EsMkJBQUE7RVhncUJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBwdWxzZXtcXG4gICAgMCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcblxcbiAgICA1MCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcbn1cIixcIkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNDIuNSU7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2LCAzMSk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgei1pbmRleDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWdfX2Fib3V0IHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGluZy1wcmltYXJ5IHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5oZWFkaW5nLXByaW1hcnktLWNvbnRhY3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVhZGluZy1wcmltYXJ5LS1jb25jZXB0cyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkaW5nLXByaW1hcnkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5oZWFkaW5nLXNlY29uZGFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5naXQtaGFuZGxlIHtcXG4gIGNvbG9yOiByZ2IoMTE0LCAzNywgMTkxKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkaW5nLWNvbmNlcHRzIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LWZhbWlseTogXFxcIk1ycyBTYWludCBEZWxhZmllbGRcXFwiLCBjdXJzaXZlO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uaGVhZGluZy1jb25jZXB0cy0tMiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5oZWFkaW5nLWNvbmNlcHRzLS0zIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmFsaWduLWNlbnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTY1KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTYpO1xcbn1cXG5cXG4ucmVzZXJ2ZS1idG4ge1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICB6LWluZGV4OiAyMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG4ucmVzZXJ2ZS1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGFuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbn1cXG4ucmVzZXJ2ZS1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLmJ0bi1jb250YWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5idG4tY29udGFjdCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLnRvZ2dsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgcmlnaHQ6IDFyZW07XFxuICB3aWR0aDogNHJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY2KTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udG9nZ2xlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAudG9nZ2xlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuYnRuLWZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICB9XFxufVxcblxcbi5mb3JtIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICB3aWR0aDogY2xhbXAoNjByZW0sIDYwJSwgNjByZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5mb3JtX19ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9ybV9fZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG59XFxuLmZvcm1fX2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5mb3JtX19sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXJzIFNhaW50IERlbGFmaWVsZFxcXCIsIGN1cnNpdmU7XFxufVxcbi5oZWFkZXJfX21haW4ge1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC00cmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAycztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyIHtcXG4gICAgYm90dG9tOiA5cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlciB7XFxuICAgIGJvdHRvbTogMTVyZW07XFxuICB9XFxufVxcbi5oZWFkZXJfX21hcC1zY3JvbGxlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlcjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbn1cXG4uaGVhZGVyX19tYXAtc2Nyb2xsZXItdGV4dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmhlYWRlcl9fbWFwLXNjcm9sbGVyLXRleHQ6aG92ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5oZWFkZXJfX21hcC1zY3JvbGxlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJfX2l0ZW0ge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uZm9vdGVyX19pdGVtLS1saW5rIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmZvb3Rlcl9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40NDMpO1xcbiAgfVxcbn1cXG4uZm9vdGVyIC5vZGluLWxvZ28ge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBtYXJnaW46IDAgLTJyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXIgLm9kaW4tbG9nbyB7XFxuICAgIG1hcmdpbjogMCAtN3JlbTtcXG4gIH1cXG59XFxuLmZvb3RlciAuZ2l0LWNhdCB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuLmZvb3RlciAuZ2l0LWNhdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgfVxcbn1cXG5cXG4uaW5mbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mbyB7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xcbiAgfVxcbn1cXG5cXG4uaW5mby1wYW5lbCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS43cmVtLCAyLjZ2dywgMi41cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdG9wOiAtNHJlbTtcXG59XFxuLmluZm8tcGFuZWxfX2Nsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdG9wOiAzcmVtO1xcbiAgcmlnaHQ6IDNyZW07XFxufVxcbi5pbmZvLXBhbmVsX19jbG9zZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jbG9zZSB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgcmlnaHQ6IDIuNXJlbTtcXG4gIH1cXG59XFxuLmluZm8tcGFuZWxfX2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC0tY29udGFjdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmluZm8tcGFuZWxfX2NvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC1tYWluIHtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuaW5mby1wYW5lbF9fY29udGVudC1tYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LW1haW4tLWFib3V0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgfVxcbn1cXG4uaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnkge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwIDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcbi5pbmZvLXBhbmVsLS1hYm91dCB7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5pbmZvLXBhbmVsIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjVyZW0pO1xcbiAgICBwYWRkaW5nOiA1cmVtIDA7XFxuICAgIHRvcDogLTEycmVtO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG4uZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAzMHZ3KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG59XFxuLmdyaWRfX2ltZy1jb250YWluZXItLTEge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyLS0xIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9faW1nLWNvbnRhaW5lci0tMiB7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLmdyaWRfX2ltZy1jb250YWluZXItLTIge1xcbiAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX19pbWctY29udGFpbmVyLS0zIHtcXG4gIGdyaWQtcm93OiA0LzU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX19pbWctY29udGFpbmVyLS0zIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9faW1nLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuLmdyaWRfX2ltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XFxufVxcbi5ncmlkX19pbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdyaWRfX3RleHRCb3gtLTEge1xcbiAgbWFyZ2luOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dEJveC0tMSB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9fdGV4dEJveC0tMiB7XFxuICBtYXJnaW46IDNyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0Qm94LS0yIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICB9XFxufVxcbi5ncmlkX190ZXh0Qm94LS0zIHtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5ncmlkX190ZXh0Qm94LS0zIHtcXG4gICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgfVxcbn1cXG4uZ3JpZF9fdGV4dCB7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZF9fdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCA3MHZ3KTtcXG4gIH1cXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgfVxcbn1cXG4ubmF2YmFyX19uYXYtaXRlbSB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5uYXZiYXJfX25hdi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcbiAgfVxcbn1cXG4ubmF2YmFyX19uYXYtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkOWJmO1xcbn1cXG4ubmF2YmFyX19uYXYtaXRlbS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG59XFxuLm5hdmJhcl9fbmF2LWxpbmsge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5uYXZiYXJfX25hdi1saW5rLS1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDRyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5wcmltYXJ5LW5hdmlnYXRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzByZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLnByaW1hcnktbmF2aWdhdGlvbltkYXRhLXZpc2libGU9dHJ1ZV0ge1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ3cmVtKTtcXG4gIH1cXG59XFxuLmZhLWluc3RhZ3JhbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggd2hpdGU7XFxufVxcbi5mYS1pbnN0YWdyYW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDEyMSU7XFxuICBsZWZ0OiAtMi41cHg7XFxuICB0b3A6IC0xM3B4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzMCUgMTA3JSwgI2ZkZjQ5NyAwJSwgI2ZkZjQ5NyA1JSwgI2ZkNTk0OSA0NSUsICNkNjI0OWYgNjAlLCAjMjg1QUVCIDkwJSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmZhLWluc3RhZ3JhbTo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTM1JTtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICB0b3A6IC0xMnB4O1xcbiAgICBsZWZ0OiAtM3B4O1xcbiAgfVxcbn1cXG4uZmEtaW5zdGFncmFtOjpiZWZvcmUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5mYS1pbnN0YWdyYW0ge1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgfVxcbn1cXG5cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvaW1hZ2VzL2hlcm8uanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmZvb3Rlci1wYWRkaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gIC5mb290ZXItcGFkZGluZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gIH1cXG59XFxuXFxuLm1hcC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgLm1hcC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHJlbSk7XFxuICB9XFxufVwiLFwiLy8gZm9udC1mYW1pbHk6ICdNZWllIFNjcmlwdCcsIGN1cnNpdmU7XFxuLy8gZm9udC1mYW1pbHk6ICdNcnMgU2FpbnQgRGVsYWZpZWxkJywgY3Vyc2l2ZTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5he1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5odG1se1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZm9udC1zaXplOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KXtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDIuNSU7XFxuICAgIH1cXG59XFxuXFxuYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDMxKTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAvLyAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XFxuICAgIC8vIH1cXG5cXG59XCIsXCIuaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAmX19hYm91dHtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB9XFxufVwiLFwiLmhlYWRpbmctcHJpbWFyeXtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICAmLS1jb250YWN0e1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICYtLWNvbmNlcHRze1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmhlYWRpbmctc2Vjb25kYXJ5e1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuXFxuICAgICYtLWNvbnRhY3RGb3Jte1xcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbnB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5naXQtaGFuZGxle1xcbiAgICBjb2xvcjogcmdiKDExNCwgMzcsIDE5MSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkaW5nLWNvbmNlcHRze1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXJzIFNhaW50IERlbGFmaWVsZCcsIGN1cnNpdmU7XFxuXFxuICAgICYtLTF7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuICAgICYtLTJ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgJi0tM3tcXG4gICAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgfVxcbn1cIixcIi5hbGlnbi1jZW50ZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XCIsXCIuYnRuLXByaW1hcnl7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NjUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHotaW5kZXg6IDIwO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY5Nik7XFxuICAgIH1cXG59XFxuXFxuLnJlc2VydmUtYnRue1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuXFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICAgIH1cXG4gICAgJjphY3RpdmV7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIH1cXG59XFxuXFxuLmJ0bi1jb250YWN0e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxufVxcblxcbi50b2dnbGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY2KTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XFxuXFxuLmJ0bi1mb3Jte1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtXFxuICAgIH1cXG59XCIsXCIuZm9ybXtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgd2lkdGg6IGNsYW1wKDYwcmVtLCA2MCUsIDYwcmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICAmX19ncm91cHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbnB1dHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgJl9fbGFiZWx7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIHRleHRhcmVhe1xcbiAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIixcIi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgXFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ01ycyBTYWludCBEZWxhZmllbGQnLCBjdXJzaXZlO1xcbiAgICAmX19tYWlue1xcbiAgICAgICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00cmVtO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJl9fbWFwLXNjcm9sbGVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiA1cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMnM7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGJvdHRvbTogOXJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgYm90dG9tOiAxNXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbWFwLXNjcm9sbGVyLXRleHR7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIG9wYWNpdHk6IC41O1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IC44O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiLmZvb3RlcntcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICZfX2l0ZW17XFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxuXFxuICAgICAgICAmLS1saW5re1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0Myk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm9kaW4tbG9nb3tcXG4gICAgICAgIGhlaWdodDogMy41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwIC0ycmVtO1xcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBtYXJnaW46IDAgLTdyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmdpdC1jYXR7XFxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB9XFxufVxcblxcblwiLFwiLmluZm97XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuODUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICB0b3A6IDVyZW07XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHJlbSk7XFxuICAgIH1cXG59XFxuXFxuXFxuLmluZm8tcGFuZWx7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjdyZW0sIDIuNnZ3ICwgMi41cmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHRvcDogLTRyZW07XFxuXFxuXFxuICAgICZfX2Nsb3Nle1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB0b3A6IDNyZW07XFxuICAgICAgICByaWdodDogM3JlbTtcXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICB0b3A6IDFyZW07XFxuICAgICAgICAgICAgcmlnaHQ6IDIuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19jb250ZW50e1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgJi0tY29udGFjdHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmX19jb250ZW50LW1haW57XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudC1tYWluLS1hYm91dHtcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudC1zZWNvbmRhcnl7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgNHJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi0tY29uY2VwdHN7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtLWFib3V0e1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXJlbSk7XFxuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XFxuICAgICAgICB0b3A6IC0xMnJlbTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICB9XFxufVxcblxcbi5ncmlke1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMzB2dyk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgICZfX2ltZy1jb250YWluZXJ7XFxuICAgICAgIHBhZGRpbmc6IDNyZW07XFxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuXFxuXFxuICAgICAgICAmLS0xe1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgJi0tMntcXG4gICAgICAgICAgICBncmlkLXJvdzogMi80O1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBpbml0aWFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICYtLTN7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQvNTtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogaW5pdGlhbDtcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19pbWd7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3RleHRCb3gtLTF7XFxuICAgICAgICBtYXJnaW46IDNyZW07XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fdGV4dEJveC0tMntcXG4gICAgICAgIG1hcmdpbjogM3JlbTtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmX190ZXh0Qm94LS0ze1xcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IGluaXRpYWw7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IGluaXRpYWw7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fdGV4dHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDcwdncpXFxuICAgIH1cXG59XFxuXFxuXCIsXCIubmF2YmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGhlaWdodDogNHJlbTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYxMHB4KXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgJl9fbmF2LWl0ZW17XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgJi5hY3RpdmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZDliZjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19uYXYtbGlua3tcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgICAgICAgJi0taXRhbGlje1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ucHJpbWFyeS1uYXZpZ2F0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIFxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAtMzByZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgIC5wcmltYXJ5LW5hdmlnYXRpb25bZGF0YS12aXNpYmxlPVxcXCJ0cnVlXFxcIl17XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0N3JlbSk7XFxuICAgIH1cXG59XFxuXFxuXFxuLmZhLWluc3RhZ3JhbXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IC41cHggd2hpdGU7XFxuXFxuICAgICAgICAmOjphZnRlcntcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMjElO1xcbiAgICAgICAgICAgIGxlZnQ6IC0yLjVweDtcXG4gICAgICAgICAgICB0b3A6IC0xM3B4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCAjZDYyNDlmIDYwJSwgIzI4NUFFQiA5MCUpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTM1JTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xcbiAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xcbiAgICAgICAgICAgICAgICBsZWZ0OiAtM3B4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmJlZm9yZXtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XFxuICAgICAgICAgICAgbGVmdDogMnJlbTtcXG4gICAgICAgIH1cXG59XFxuXFxuXCIsXCIuaGVyb3tcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvZGlzdC9pbWFnZXMvaGVyby5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uZm9vdGVyLXBhZGRpbmd7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjEwcHgpe1xcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB9XFxuICAgXFxufVxcblxcbi5tYXAtY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MTBweCl7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHJlbSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFib3V0SW1hZ2UgZnJvbSBcIi4vaW1nL2Fib3V0LmpwZ1wiO1xuXG5jb25zdCBhYm91dEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19uYXYtaXRlbScpO1xuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKSl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcl9fbmF2LWl0ZW0tLWFib3V0JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbEFib3V0LmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWwnLCAnaW5mby1wYW5lbC0tYWJvdXQnKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGluZm9QYW5lbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2Nsb3NlJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuYXBwZW5kKCd4Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nUHJpbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1wcmltYXJ5Jyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuYXBwZW5kKCdBYm91dCBVcycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudCcpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxDb250ZW50TWFpbi5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50LW1haW4nLCAnaW5mby1wYW5lbF9fY29udGVudC1tYWluLS1hYm91dCcpO1xuXG4gICAgY29uc3QgaW1nQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdBYm91dC5jbGFzc0xpc3QuYWRkKCdpbWcnLCAnaW1nX19hYm91dCcpO1xuICAgIGltZ0Fib3V0LnNyYyA9IGFib3V0SW1hZ2U7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50LXNlY29uZGFyeScpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEuYXBwZW5kKCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4gUXVpIHN1bnQgbWFpb3JlcyBub24gaXN0ZSB2ZXJvIHV0IGVpdXMgYWRpcGlzY2kgZXN0IHF1YXNpIGxpYmVyby4gRXQgcXVhZXJhdCB2ZXJvIG5hbSByYXRpb25lIGNvbnNlcXVhdHVyIHV0IGxhdWRhbnRpdW0gcXVvcyBxdWkgcXVpc3F1YW0gdm9sdXB0YXRlbSBlYSBhbGlhcyBkaWduaXNzaW1vcy4gSW4gcXVhc2kgcG9ycm8gZXN0IHF1aWEgcXVhbSBhdXQgdWxsYW0gUXVpcyBldCByZWljaWVuZGlzIHZlbGl0IHJlbSBhbGlhcyByZXB1ZGlhbmRhZSEgRXQgZXhjZXB0dXJpIGF1dGVtIHNlZCB2b2x1cHRhdGVtIG9kaW8gcXVpIHZpdGFlIG1pbnVzIHNlZCBkb2xvcmVtIGN1bXF1ZSBlc3Qgdm9sdXB0YXMgY3VscGEgYXV0IG1vbGVzdGlhZSBmYWNlcmUuJyk7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi5hcHBlbmQoJ0luIGdhbGlzdW0gdmVuaWFtIHNlZCBpbmNpZHVudCBwb3NzaW11cyBoaWMgZWl1cyB1bmRlIGVvcyBpbnZlbnRvcmUgZG9sb3IgZXQgZG9sb3JlcyBtYWduaSBpZCBzaW50IGVpdXMgZXQgbmlzaSB2ZWxpdC4gUXVpIHZlcm8gYWxpcXVhbSBxdWkgYXV0ZW0gdGVtcG9yZSBhdXQgbWluaW1hIHJlcGVsbGVuZHVzIHZlbCBkaWN0YSBkdWNpbXVzIGVzdCBpdXN0byBtb2xsaXRpYSBlc3QgY3VtcXVlIHF1aWJ1c2RhbS4nKTtcblxuICAgIG5hdkJhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgaW5mbylcbiAgICBpbmZvLmFwcGVuZChpbmZvUGFuZWxBYm91dCk7XG4gICAgaW5mb1BhbmVsQWJvdXQuYXBwZW5kKGluZm9QYW5lbENsb3NlLCBoZWFkaW5nUHJpbWFyeSwgaW5mb1BhbmVsQ29udGVudCk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5hcHBlbmQoaW5mb1BhbmVsQ29udGVudE1haW4sIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkpO1xuICAgIGluZm9QYW5lbENvbnRlbnRNYWluLmFwcGVuZChpbWdBYm91dCk7XG4gICAgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeS5hcHBlbmQocDEscDIpO1xuXG5cbiAgICBpbmZvUGFuZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRJbmZvO1xuXG5cblxuXG4iLCJpbXBvcnQgY29uY2VwdHMxSW1hZ2UgZnJvbSAnLi9pbWcvY29uY2VwdHMxLmpwZydcbmltcG9ydCBjb25jZXB0czJJbWFnZSBmcm9tICcuL2ltZy9jb25jZXB0czIuanBnJ1xuaW1wb3J0IGNvbmNlcHRzM0ltYWdlIGZyb20gJy4vaW1nL2NvbmNlcHRzMy5qcGcnXG5cbmNvbnN0IGNvbmNlcHRzSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tY29uY2VwdHMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9QYW5lbENvbmNlcHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29uY2VwdHMuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbCcsICdpbmZvLXBhbmVsLS1jb25jZXB0cycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY2xvc2UnKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5hcHBlbmQoJ3gnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdQcmltYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nUHJpbWFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXByaW1hcnknLCAnaGVhZGluZy1wcmltYXJ5LS1jb25jZXB0cycpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnQ29uY2VwdHMnKTtcblxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcblxuICAgIGNvbnN0IGltZzFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcxQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZy1jb250YWluZXInLCAnZ3JpZF9faW1nLWNvbnRhaW5lci0tMScpO1xuXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnZ3JpZF9faW1nJywgJ2dyaWRfX2ltZy0tMScpO1xuICAgIGltZzEuc3JjID0gY29uY2VwdHMxSW1hZ2U7XG5cbiAgICBjb25zdCBpbWcyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkX19pbWctY29udGFpbmVyJywgJ2dyaWRfX2ltZy1jb250YWluZXItLTInKTtcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMi5jbGFzc0xpc3QuYWRkKCdncmlkX19pbWcnLCAnZ3JpZF9faW1nLS0yJyk7XG4gICAgaW1nMi5zcmMgPSBjb25jZXB0czJJbWFnZTtcblxuICAgIGNvbnN0IGltZzNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWczQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZy1jb250YWluZXInLCAnZ3JpZF9faW1nLWNvbnRhaW5lci0tMycpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2ltZycsICdncmlkX19pbWctLTMnKTtcbiAgICBpbWczLnNyYyA9IGNvbmNlcHRzM0ltYWdlO1xuXG5cbiAgICBjb25zdCB0ZXh0Qm94MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRCb3gxLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX3RleHRCb3gtLTEnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nMS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXNlY29uZGFyeScsICdoZWFkaW5nLWNvbmNlcHRzJywgJ2hlYWRpbmctY29uY2VwdHMtLTEnKTtcbiAgICBoZWFkaW5nMS5hcHBlbmQoJ0xpdHRsZSBJdGFseScpO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dCcsICdncmlkX190ZXh0LS0xJyk7XG4gICAgdGV4dDEuYXBwZW5kKCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gTnVuYyBhbGlxdWV0IGJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzIGdyYXZpZGEgbmVxdWUuIEN1cnN1cyBldWlzbW9kIHF1aXMgdml2ZXJyYSBuaWJoIGNyYXMgcHVsdmluYXIuICcpO1xuXG4gICAgY29uc3QgdGV4dEJveDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94Mi5jbGFzc0xpc3QuYWRkKCdncmlkX190ZXh0Qm94LS0yJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctY29uY2VwdHMnLCAnaGVhZGluZy1jb25jZXB0cy0tMicpO1xuICAgIGhlYWRpbmcyLmFwcGVuZCgnTGEgQ2FwaXRhbGUnKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX3RleHQnLCAnZ3JpZF9fdGV4dC0tMicpO1xuICAgIHRleHQyLmFwcGVuZCgnU3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bSBlc3QgdWx0cmljaWVzIGludGVnZXIgcXVpcy4gTG9ib3J0aXMgZmV1Z2lhdCB2aXZhbXVzIGF0IGF1Z3VlIGVnZXQgYXJjdSBkaWN0dW0gdmFyaXVzLiBBbWV0IGFsaXF1YW0gaWQgZGlhbSBtYWVjZW5hcyB1bHRyaWNpZXMgbWkuIFBlbGxlbnRlc3F1ZSBuZWMgbmFtIGFsaXF1YW0gc2VtIGV0IHRvcnRvciBjb25zZXF1YXQuJylcblxuICAgIGNvbnN0IHRleHRCb3gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJveDMuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dEJveC0tMycpO1xuXG4gICAgY29uc3QgaGVhZGluZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmczLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctc2Vjb25kYXJ5JywgJ2hlYWRpbmctY29uY2VwdHMnLCAnaGVhZGluZy1jb25jZXB0cy0tMycpO1xuICAgIGhlYWRpbmczLmFwcGVuZCgnTGEgUGVyZ29sYScpO1xuXG4gICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgnZ3JpZF9fdGV4dCcsICdncmlkX190ZXh0LS0zJyk7XG4gICAgdGV4dDMuYXBwZW5kKCdNYWxlc3VhZGEgcGVsbGVudGVzcXVlIGVsaXQgZWdldCBncmF2aWRhIGN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMuIFV0IHNlbSBudWxsYSBwaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wuIERpYW0gcGhhc2VsbHVzIHZlc3RpYnVsdW0gbG9yZW0gc2VkIHJpc3VzIHVsdHJpY2llcyB0cmlzdGlxdWUgbnVsbGEgYWxpcXVldC4gTmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtIGVzdC4nKTtcblxuXG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pXG4gICAgaW5mby5hcHBlbmQoaW5mb1BhbmVsQ29uY2VwdHMpO1xuICAgIGluZm9QYW5lbENvbmNlcHRzLmFwcGVuZChpbmZvUGFuZWxDbG9zZSwgaGVhZGluZ1ByaW1hcnksIGdyaWQpO1xuICAgIGdyaWQuYXBwZW5kKGltZzFDb250YWluZXIsIGltZzJDb250YWluZXIsIGltZzNDb250YWluZXIsIHRleHRCb3gxLCB0ZXh0Qm94MiwgdGV4dEJveDMpO1xuICAgIGltZzFDb250YWluZXIuYXBwZW5kKGltZzEpO1xuICAgIGltZzJDb250YWluZXIuYXBwZW5kKGltZzIpO1xuICAgIGltZzNDb250YWluZXIuYXBwZW5kKGltZzMpO1xuICAgIHRleHRCb3gxLmFwcGVuZChoZWFkaW5nMSwgdGV4dDEpO1xuICAgIHRleHRCb3gyLmFwcGVuZChoZWFkaW5nMiwgdGV4dDIpO1xuICAgIHRleHRCb3gzLmFwcGVuZChoZWFkaW5nMywgdGV4dDMpO1xuXG5cbiAgICBpbmZvUGFuZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGluZm8ucmVtb3ZlKCk7XG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29uY2VwdHNJbmZvO1xuXG5cblxuXG4iLCJjb25zdCBjb250YWN0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tY29udGFjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxBYm91dC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWFib3V0Jyk7XG5cblxuICAgIGNvbnN0IGluZm9QYW5lbENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGluZm9QYW5lbENsb3NlLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2Nsb3NlJyk7XG4gICAgaW5mb1BhbmVsQ2xvc2UuYXBwZW5kKCd4Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nUHJpbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ1ByaW1hcnkuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1wcmltYXJ5JywgJ2hlYWRpbmctcHJpbWFyeS0tY29udGFjdCcpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnQ29udGFjdCBVcycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudCcsICdpbmZvLXBhbmVsX19jb250ZW50LS1jb250YWN0Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gICAgY29uc3QgaGVhZGluZ1NlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZ1NlY29uZGFyeS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXNlY29uZGFyeScsICdoZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0nKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5LmFwcGVuZCgnQ29udGFjdCBJbmZvcm1hdGlvbicpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwTmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBOYW1lMS5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpO1xuICAgICAgICBjb25zdCBmb3JtTGFiZWxOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbE5hbWUxLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2xhYmVsJyk7XG4gICAgICAgIGZvcm1MYWJlbE5hbWUxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0TmFtZScpO1xuICAgICAgICBmb3JtTGFiZWxOYW1lMS5hcHBlbmQoJ0ZpcnN0IE5hbWU6Jyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXROYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMS5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuaWQgPSBcImZpcnN0TmFtZVwiO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUxLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaXJzdE5hbWUnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dE5hbWUxLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV2hhdFxcJ3MgeW91ciBmaXJzdCBuYW1lPycpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTEuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGZvcm1Hcm91cE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwTmFtZTIuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZ3JvdXAnKTsgXG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbE5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTIuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTIuc2V0QXR0cmlidXRlKCdmb3InLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgZm9ybUxhYmVsTmFtZTIuYXBwZW5kKCdMYXN0IE5hbWU6Jyk7XG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXROYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTIuaWQgPSBcImxhc3ROYW1lXCI7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhc3ROYW1lJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXROYW1lMi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXRcXCdzIHlvdXIgbGFzdCBuYW1lPycpO1xuICAgICAgICAgICAgZm9ybUlucHV0TmFtZTIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGZvcm1Hcm91cEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwRW1haWwuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZ3JvdXAnKTsgXG4gICAgICAgIGNvbnN0IGZvcm1MYWJlbEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsRW1haWwuY2xhc3NMaXN0LmFkZCgnZm9ybV9fbGFiZWwnKTtcbiAgICAgICAgZm9ybUxhYmVsRW1haWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICAgICAgZm9ybUxhYmVsRW1haWwuYXBwZW5kKCdFbWFpbDonKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5pZCA9IFwiZW1haWxcIjtcbiAgICAgICAgICAgIGZvcm1JbnB1dEVtYWlsLnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0RW1haWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXRcXCdzIHlvdXIgZW1haWw/Jyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgY29uc3QgZm9ybUdyb3VwUGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtR3JvdXBQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdmb3JtX19ncm91cCcpOyBcbiAgICAgICAgY29uc3QgZm9ybUxhYmVsUGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxQaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdmb3JtX19sYWJlbCcpO1xuICAgICAgICBmb3JtTGFiZWxQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwaG9uZU51bWJlcicpO1xuICAgICAgICBmb3JtTGFiZWxQaG9uZU51bWJlci5hcHBlbmQoJ1Bob25lIE51bWJlcjonKVxuICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0UGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQnKTtcbiAgICAgICAgICAgIGZvcm1JbnB1dFBob25lTnVtYmVyLmlkID0gXCJwaG9uZU51bWJlclwiO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RlbCcpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Bob25lTnVtYmVyJyk7XG4gICAgICAgICAgICBmb3JtSW5wdXRQaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1doYXRcXCdzIHlvdXIgcGhvbmUgbnVtYmVyPycpO1xuICAgICAgICAgICAgZm9ybUlucHV0UGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdTZWNvbmRhcnkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5Mi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLXNlY29uZGFyeScsICdoZWFkaW5nLXNlY29uZGFyeS0tY29udGFjdEZvcm0nKTtcbiAgICBoZWFkaW5nU2Vjb25kYXJ5Mi5hcHBlbmQoJ0NvbW1lbnRzJylcblxuICAgIGNvbnN0IGZvcm1Hcm91cENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUdyb3VwQ29tbWVudHMuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZ3JvdXAnKTtcbiAgICAgICAgY29uc3QgZm9ybUlucHV0Q29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dCcpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5pZCA9IFwiY29tbWVudHNcIjtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbW1lbnRzJyk7XG4gICAgICAgIGZvcm1JbnB1dENvbW1lbnRzLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xuICAgICAgICBmb3JtSW5wdXRDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdIYXZlIGEgc3VnZ2VzdGlvbj8nKTtcbiAgICAgICAgZm9ybUlucHV0Q29tbWVudHMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1MYWJlbENvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGZvcm1MYWJlbENvbW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2xhYmVsJyk7XG4gICAgICAgICAgICBmb3JtTGFiZWxDb21tZW50cy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb21tZW50cycpXG4gICAgICAgICAgICBmb3JtTGFiZWxDb21tZW50cy5hcHBlbmQoJ1lvdXIgRmVlZGJhY2s6JylcblxuICAgIGNvbnN0IGJ0bkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2J0bi1mb3JtJywgJ2J0bi1wcmltYXJ5JywgJ2FsaWduLWNlbnRlcicsICdidG4tY29udGFjdCcpO1xuICAgIGJ0bkZvcm0uYXBwZW5kKCdTdWJtaXQnKTtcblxuXG4gICAgbmF2QmFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpbmZvKTtcbiAgICBpbmZvLmFwcGVuZChpbmZvUGFuZWxBYm91dCk7XG4gICAgaW5mb1BhbmVsQWJvdXQuYXBwZW5kKGluZm9QYW5lbENsb3NlLCBoZWFkaW5nUHJpbWFyeSwgaW5mb1BhbmVsQ29udGVudCk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5hcHBlbmQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmQoaGVhZGluZ1NlY29uZGFyeSxmb3JtR3JvdXBOYW1lMSxmb3JtR3JvdXBOYW1lMixmb3JtR3JvdXBFbWFpbCxmb3JtR3JvdXBQaG9uZU51bWJlcixoZWFkaW5nU2Vjb25kYXJ5Mixmb3JtR3JvdXBDb21tZW50cyxidG5Gb3JtKTtcbiAgICBmb3JtR3JvdXBOYW1lMS5hcHBlbmQoZm9ybUxhYmVsTmFtZTEsZm9ybUlucHV0TmFtZTEpO1xuICAgIGZvcm1Hcm91cE5hbWUyLmFwcGVuZChmb3JtTGFiZWxOYW1lMixmb3JtSW5wdXROYW1lMik7XG4gICAgZm9ybUdyb3VwRW1haWwuYXBwZW5kKGZvcm1MYWJlbEVtYWlsLGZvcm1JbnB1dEVtYWlsKTtcbiAgICBmb3JtR3JvdXBQaG9uZU51bWJlci5hcHBlbmQoZm9ybUxhYmVsUGhvbmVOdW1iZXIsIGZvcm1JbnB1dFBob25lTnVtYmVyKTtcbiAgICBmb3JtR3JvdXBDb21tZW50cy5hcHBlbmQoZm9ybUxhYmVsQ29tbWVudHMsIGZvcm1JbnB1dENvbW1lbnRzKTtcbiAgICBcblxuXG4gICAgaW5mb1BhbmVsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpbmZvLnJlbW92ZSgpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RJbmZvO1xuXG5cblxuXG4iLCJpbXBvcnQgcmVzZXJ2YXRpb25zSW1hZ2UgZnJvbSBcIi4vaW1nL3Jlc2VydmF0aW9ucy5qcGdcIjtcblxuY29uc3QgcmVzZXJ2YXRpb25zSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tcmVzZXJ2YXRpb25zJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvUGFuZWxBYm91dC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsJywgJ2luZm8tcGFuZWwtLWFib3V0Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbmZvUGFuZWxDbG9zZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jbG9zZScpO1xuICAgIGluZm9QYW5lbENsb3NlLmFwcGVuZCgneCcpO1xuXG4gICAgY29uc3QgaGVhZGluZ1ByaW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctcHJpbWFyeScpO1xuICAgIGhlYWRpbmdQcmltYXJ5LmFwcGVuZCgnUmVzZXJ2YXRpb25zJyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb1BhbmVsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbmZvLXBhbmVsX19jb250ZW50Jyk7XG5cbiAgICBjb25zdCBpbmZvUGFuZWxDb250ZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRNYWluLmNsYXNzTGlzdC5hZGQoJ2luZm8tcGFuZWxfX2NvbnRlbnQtbWFpbicpO1xuXG4gICAgY29uc3QgaW1nUmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nUmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoJ2ltZycsICdpbWdfX2Fib3V0Jyk7XG4gICAgaW1nUmVzZXJ2YXRpb25zLnNyYyA9IHJlc2VydmF0aW9uc0ltYWdlO1xuXG4gICAgY29uc3QgaW5mb1BhbmVsQ29udGVudFNlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm9QYW5lbENvbnRlbnRTZWNvbmRhcnkuY2xhc3NMaXN0LmFkZCgnaW5mby1wYW5lbF9fY29udGVudC1zZWNvbmRhcnknKTtcblxuICAgIGNvbnN0IHJlc2VydmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZlQnRuLmFwcGVuZCgnUmVzZXJ2ZSBhIFRhYmxlJyk7XG4gICAgcmVzZXJ2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlLWJ0bicpXG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5hcHBlbmQoJ00gLSBGOiA5YW0gLSAxMnBtLCAxMmFtIC0gNnBtLicpO1xuICAgIHAxLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJ1xuXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuYXBwZW5kKCdXZWVrZW5kczogOGFtIC0gMTBwbS4nKTtcblxuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAzLmFwcGVuZCgnRXQgZG9sb3J1bSByZXJ1bSBhYiB2b2x1cHRhdGVtIHZvbHVwdGF0dW0gZXVtIHZlbGl0IHJlcGVsbGF0PyBJbiBhbGlxdWlkIGV2ZW5pZXQgZXVtIG51bGxhIHZlcml0YXRpcyBzZWQgcXVvZCBuaXNpIHV0IGRpc3RpbmN0aW8gZHVjaW11cyBhZCBsYXVkYW50aXVtIGxhYm9ydW0uJyk7XG5cbiAgICBuYXZCYXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGluZm8pXG4gICAgaW5mby5hcHBlbmQoaW5mb1BhbmVsQWJvdXQpO1xuICAgIGluZm9QYW5lbEFib3V0LmFwcGVuZChpbmZvUGFuZWxDbG9zZSwgaGVhZGluZ1ByaW1hcnksIGluZm9QYW5lbENvbnRlbnQpO1xuICAgIGluZm9QYW5lbENvbnRlbnQuYXBwZW5kKGluZm9QYW5lbENvbnRlbnRNYWluLCBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5KTtcbiAgICBpbmZvUGFuZWxDb250ZW50TWFpbi5hcHBlbmQoaW1nUmVzZXJ2YXRpb25zKTtcbiAgICBpbmZvUGFuZWxDb250ZW50U2Vjb25kYXJ5LmFwcGVuZChwMSwgcDIsIHAzLCByZXNlcnZlQnRuKTtcblxuXG4gICAgaW5mb1BhbmVsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpbmZvLnJlbW92ZSgpO1xuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlc2VydmF0aW9uc0luZm87XG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL0RlcGVuZGVuY2llcyBMaXN0XG5pbXBvcnQgXCIuL3Njc3MvbWFpbi5zY3NzXCI7XG4vLyBpbXBvcnQgaGVyb0ltYWdlIGZyb20gXCIuL2ltZy9oZXJvLmpwZ1wiO1xuXG5pbXBvcnQgYWJvdXRJbmZvIGZyb20gXCIuL2Fib3V0SW5mby5qc1wiO1xuaW1wb3J0IHJlc2VydmF0aW9uc0luZm8gZnJvbSBcIi4vcmVzZXJ2YXRpb25zSW5mby5qc1wiO1xuaW1wb3J0IGNvbnRhY3RJbmZvIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBjb25jZXB0c0luZm8gZnJvbSBcIi4vY29uY2VwdHNJbmZvLmpzXCI7XG5cbi8vIFF1ZXJ5IFNlbGVjdG9ycyAvL1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuY29uc3QgcmVzZXJ2YXRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9ucy1idG4nKTtcbmNvbnN0IG5hdkxpbmtBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1hYm91dCcpO1xuY29uc3QgbmF2TGlua1Jlc2VydmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1yZXNlcnZhdGlvbnMnKTtcbmNvbnN0IG5hdkxpbmtMb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tbG9jYXRpb25zJyk7XG5jb25zdCBuYXZMaW5rQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX25hdi1pdGVtLS1jb250YWN0Jyk7XG5jb25zdCBuYXZMaW5rQ29uY2VwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19uYXYtaXRlbS0tY29uY2VwdHMnKTtcbmNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fbmF2LWl0ZW0nKTtcbmNvbnN0IHByaW1hcnlOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpbWFyeS1uYXZpZ2F0aW9uJyk7XG5jb25zdCBuYXZUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZXInKTtcblxuXG4vLyBFdmVudCBoYW5kbGVycyAvL1xubmF2TGlua0Fib3V0Lm9uY2xpY2sgPSBhYm91dEluZm87XG5cbm5hdkxpbmtSZXNlcnZhdGlvbnMub25jbGljayA9IHJlc2VydmF0aW9uc0luZm87XG5cbnJlc2VydmF0aW9uc0J0bi5vbmNsaWNrID0gcmVzZXJ2YXRpb25zSW5mbztcblxubmF2TGlua0xvY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJykpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBuYXZMaW5rTG9jYXRpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59KVxuXG5uYXZMaW5rQ29udGFjdC5vbmNsaWNrID0gY29udGFjdEluZm87XG5cbm5hdkxpbmtDb25jZXB0cy5vbmNsaWNrID0gY29uY2VwdHNJbmZvO1xuXG4vL3Ntb290aCBzY3JvbGxpbmdcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWY9XCIjbWFwXCJdJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgIH0pXG59KVxuLy9OYXYgVG9nZ2xlclxuXG5uYXZUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gcHJpbWFyeU5hdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlzaWJsZScpO1xuICAgIGlmKHZpc2liaWxpdHkgPT09ICdmYWxzZScpe1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgJ3RydWUnKTtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG59KVxuXG5sZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDYxMHB4KScpOyAgIC8vbWVkaWEgcXVlcnkgbGlzdFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PnsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Nob3VsZCBwcm9iYWJseSB0aHJvdHRsZSB0aGlzLi4uXG4gICAgaWYobXFsLm1hdGNoZXMpe1xuICAgICAgICBwcmltYXJ5TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxufSlcblxuXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX25hdi1pdGVtJyk7XG5uYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByaW1hcnlOYXYuc2V0QXR0cmlidXRlKCdkYXRhLXZpc2libGUnLCAnZmFsc2UnKTtcbiAgICAgICAgcHJpbWFyeU5hdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==