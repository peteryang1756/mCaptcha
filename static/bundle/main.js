/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./templates/api/v1/routes.js":
/*!************************************!*\
  !*** ./templates/api/v1/routes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ROUTES = {\n  registerUser: '/api/v1/signup',\n\n  loginUser: '/api/v1/signin',\n\n  signoutUser: '/api/v1/signout',\n\n  deleteAccount: '/api/v1/account/delete',\n\n  usernameExists: '/api/v1/account/username/exists',\n\n  emailExists: '/api/v1/account/email/exists',\n\n  healthCheck: '/api/v1/meta/health',\n\n  buildDetails: '/api/v1/meta/build',\n\n  addDomain: '/api/v1/mcaptcha/domain/add',\n\n  challengeDomain: '/api/v1/mcaptcha/domain/domain/verify/challenge/get',\n\n  proveDomain: '/api/v1/mcaptcha/domain/domain/verify/challenge/prove',\n\n  deleteDomain: '/api/v1/mcaptcha/domain/delete',\n\n  addToken: '/api/v1/mcaptcha/domain/token/add',\n\n  updateTokenKey: '/api/v1/mcaptcha/domain/token/update',\n\n  getTokenKey: '/api/v1/mcaptcha/domain/token/get',\n\n  deleteToken: '/api/v1/mcaptcha/domain/token/delete',\n\n  addTokenLevels: '/api/v1/mcaptcha/domain/token/levels/add',\n\n  updateTokenLevels: '/api/v1/mcaptcha/domain/token/levels/update',\n\n  deleteTokenLevels: '/api/v1/mcaptcha/domain/token/levels/delete',\n\n  getTokenLevels: '/api/v1/mcaptcha/domain/token/levels/get',\n\n  getTokenDuration: '/api/v1/mcaptcha/domain/token/token/get',\n\n  updateTokenDuration: '/api/v1/mcaptcha/domain/token/token/update',\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROUTES);\n\n\n//# sourceURL=webpack:///./templates/api/v1/routes.js?");

/***/ }),

/***/ "./templates/auth/login/index.js":
/*!***************************************!*\
  !*** ./templates/auth/login/index.js ***!
  \***************************************/
/*! exports provided: index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony import */ var _api_v1_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/v1/routes */ \"./templates/api/v1/routes.js\");\n/* harmony import */ var _views_v1_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/v1/routes */ \"./templates/views/v1/routes.js\");\n/* harmony import */ var _utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/genJsonPayload */ \"./templates/utils/genJsonPayload.js\");\n\n\n\n\n\n\n//import '../forms.scss';\n\nconst login = e => {\n  e.preventDefault();\n  let username = document.getElementById('username').value;\n  Object(_utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, username, 'username');\n\n  let password = document.getElementById('password').value;\n  let payload = {\n    username,\n    password,\n  };\n\n  fetch(_api_v1_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loginUser, Object(_utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(payload)).then(res => {\n    if (res.ok) {\n      alert('success');\n      window.location.assign(_views_v1_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].panelHome);\n    } else {\n      res.json().then(err => alert(`error: ${err.error}`));\n    }\n  });\n};\n\nconst index = () => {\n  let form = document.getElementById('form');\n  form.addEventListener('submit', login, true);\n};\n\n\n//# sourceURL=webpack:///./templates/auth/login/index.js?");

/***/ }),

/***/ "./templates/auth/register/emailExists.js":
/*!************************************************!*\
  !*** ./templates/auth/register/emailExists.js ***!
  \************************************************/
/*! exports provided: checkEmailExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkEmailExists\", function() { return checkEmailExists; });\n/* harmony import */ var _api_v1_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/v1/routes */ \"./templates/api/v1/routes.js\");\n/* harmony import */ var _utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/genJsonPayload */ \"./templates/utils/genJsonPayload.js\");\n\n\n\n\nconst checkEmailExists = async () => {\n  let email = document.getElementById('email');\n  let val = email.value;\n  let payload = {\n    val,\n  };\n\n  //  return fetch(ROUTES.emailExists, genJsonPayload(payload)).then(res => {\n  //    if (res.ok) {\n  //      res.json().then(data => {\n  //        if (data.exists) {\n  //          console.log(email.className);\n  //          email.className += ' form__in-field--warn';\n  //          alert('Email taken');\n  //        }\n  //\n  //        return data.exists;\n  //      });\n  //    } else {\n  //      res.json().then(err => alert(`error: ${err.error}`));\n  //    }\n  //  });\n  //\n\n  let res = await fetch(_api_v1_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emailExists, Object(_utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(payload));\n  if (res.ok) {\n    let data = await res.json();\n    if (data.exists) {\n      email.className += ' form__in-field--warn';\n      alert('Email taken');\n    }\n    return data.exists;\n  } else {\n    let err = await res.json();\n    alert(`error: ${err.error}`);\n  }\n};\n\n\n\n\n//# sourceURL=webpack:///./templates/auth/register/emailExists.js?");

/***/ }),

/***/ "./templates/auth/register/index.js":
/*!******************************************!*\
  !*** ./templates/auth/register/index.js ***!
  \******************************************/
/*! exports provided: index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony import */ var _api_v1_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/v1/routes */ \"./templates/api/v1/routes.js\");\n/* harmony import */ var _views_v1_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/v1/routes */ \"./templates/views/v1/routes.js\");\n/* harmony import */ var _utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/genJsonPayload */ \"./templates/utils/genJsonPayload.js\");\n/* harmony import */ var _userExists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userExists */ \"./templates/auth/register/userExists.js\");\n/* harmony import */ var _emailExists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emailExists */ \"./templates/auth/register/emailExists.js\");\n\n\n\n\n\n\n\n\n\n//import '../forms.scss';\n\nconst registerUser = async e => {\n  e.preventDefault();\n\n  let username = document.getElementById('username').value;\n  Object(_utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, username, 'username');\n\n  let password = document.getElementById('password').value;\n  let passwordCheck = document.getElementById('password-check').value;\n  if (password != passwordCheck) {\n    return alert(\"passwords don't match, check again!\");\n  }\n\n  let exists = await Object(_userExists__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  if (exists) {\n    return;\n  }\n\n  let email = document.getElementById('email').value;\n  if (!email.replace(/\\s/g, '').length) {\n    email = null;\n  } else {\n    exists = await Object(_emailExists__WEBPACK_IMPORTED_MODULE_4__[\"checkEmailExists\"])();\n    if (exists) {\n      return;\n    }\n  }\n\n  let payload = {\n    username,\n    password,\n    email,\n  };\n\n  let res = await fetch(_api_v1_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerUser, Object(_utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(payload));\n  if (res.ok) {\n    alert('success');\n    window.location.assign(_views_v1_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginUser);\n  } else {\n    let err = await res.json();\n    alert(`error: ${err.error}`);\n  }\n};\n\nconst index = () => {\n  let form = document.getElementById('form');\n  form.addEventListener('submit', registerUser, true);\n\n  let username = document.getElementById('username');\n  username.addEventListener('input', _userExists__WEBPACK_IMPORTED_MODULE_3__[\"default\"], false);\n};\n\n\n//# sourceURL=webpack:///./templates/auth/register/index.js?");

/***/ }),

/***/ "./templates/auth/register/userExists.js":
/*!***********************************************!*\
  !*** ./templates/auth/register/userExists.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_v1_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/v1/routes */ \"./templates/api/v1/routes.js\");\n/* harmony import */ var _utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/genJsonPayload */ \"./templates/utils/genJsonPayload.js\");\n\n\n\n\n\n//export const checkUsernameExists = async () => {\nasync function userExists()  {\n  let username = document.getElementById('username');\n  let val = username.value;\n  let payload = {\n    val,\n  };\n\n  //  return fetch(ROUTES.usernameExists, genJsonPayload(payload)).then(res => {\n  //    if (res.ok) {\n  //      res.json().then(data => {\n  //        if (data.exists) {\n  //          username.className += ' form__in-field--warn';\n  //          alert('Username taken');\n  //        }\n  //        return data.exists;\n  //      });\n  //    } else {\n  //      res.json().then(err => alert(`error: ${err.error}`));\n  //    }\n  //  });\n  //\n\n  let res = await fetch(_api_v1_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].usernameExists, Object(_utils_genJsonPayload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(payload));\n  if (res.ok) {\n    let data = await res.json();\n    if (data.exists) {\n      username.className += ' form__in-field--warn';\n      alert('Username taken');\n    }\n    return data.exists;\n  } else {\n    let err = await res.json();\n    alert(`error: ${err.error}`);\n  }\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userExists);\n\n\n//# sourceURL=webpack:///./templates/auth/register/userExists.js?");

/***/ }),

/***/ "./templates/index.js":
/*!****************************!*\
  !*** ./templates/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./templates/router.js\");\n/* harmony import */ var _auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/login */ \"./templates/auth/login/index.js\");\n/* harmony import */ var _auth_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/register */ \"./templates/auth/register/index.js\");\n/* harmony import */ var _panel_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel/index */ \"./templates/panel/index.js\");\n\n\n\n\n\n\nconst router = new _router__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\n\nrouter.register('/', _auth_login__WEBPACK_IMPORTED_MODULE_1__[\"index\"]);\nrouter.register('/join', _auth_register__WEBPACK_IMPORTED_MODULE_2__[\"index\"]);\nrouter.register('/panel/', _panel_index__WEBPACK_IMPORTED_MODULE_3__[\"index\"]);\nrouter.register('/panel/layout.html/', _panel_index__WEBPACK_IMPORTED_MODULE_3__[\"index\"]);\n\nrouter.route();\n\n\n//# sourceURL=webpack:///./templates/index.js?");

/***/ }),

/***/ "./templates/panel/index.js":
/*!**********************************!*\
  !*** ./templates/panel/index.js ***!
  \**********************************/
/*! exports provided: index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/*\nimport './main.scss';\nimport './nav/main.scss';\n*/\n\n\n//import './main.scss';\n\nconst index = () => {\n  //  const html = document.documentElement;\n  //  const body = document.body;\n  //  const menuLinks = document.querySelectorAll('.admin-menu a');\n  //  const collapseBtn = document.querySelector('.admin-menu .collapse-btn');\n  //  const toggleMobileMenu = document.querySelector('.toggle-mob-menu');\n  //  const switchInput = document.querySelector('.switch input');\n  //  const switchLabel = document.querySelector('.switch label');\n  //  const switchLabelText = switchLabel.querySelector('span:last-child');\n  //  const collapsedClass = 'collapsed';\n  //  const lightModeClass = 'light-mode';\n  //\n  //  /*TOGGLE HEADER STATE*/\n  //  collapseBtn.addEventListener('click', function() {\n  //    body.classList.toggle(collapsedClass);\n  //    this.getAttribute('aria-expanded') == 'true'\n  //      ? this.setAttribute('aria-expanded', 'false')\n  //      : this.setAttribute('aria-expanded', 'true');\n  //    this.getAttribute('aria-label') == 'collapse menu'\n  //      ? this.setAttribute('aria-label', 'expand menu')\n  //      : this.setAttribute('aria-label', 'collapse menu');\n  //  });\n  //\n  //  /*TOGGLE MOBILE MENU*/\n  //  toggleMobileMenu.addEventListener('click', function() {\n  //    body.classList.toggle('mob-menu-opened');\n  //    this.getAttribute('aria-expanded') == 'true'\n  //      ? this.setAttribute('aria-expanded', 'false')\n  //      : this.setAttribute('aria-expanded', 'true');\n  //    this.getAttribute('aria-label') == 'open menu'\n  //      ? this.setAttribute('aria-label', 'close menu')\n  //      : this.setAttribute('aria-label', 'open menu');\n  //  });\n  //\n  //  /*SHOW TOOLTIP ON MENU LINK HOVER*/\n  //  for (const link of menuLinks) {\n  //    link.addEventListener('mouseenter', function() {\n  //      if (\n  //        body.classList.contains(collapsedClass) &&\n  //        window.matchMedia('(min-width: 768px)').matches\n  //      ) {\n  //        const tooltip = this.querySelector('span').textContent;\n  //        this.setAttribute('title', tooltip);\n  //      } else {\n  //        this.removeAttribute('title');\n  //      }\n  //    });\n  //  }\n  //\n  //  /*TOGGLE LIGHT/DARK MODE*/\n  //  if (localStorage.getItem('dark-mode') === 'false') {\n  //    html.classList.add(lightModeClass);\n  //    switchInput.checked = false;\n  //    switchLabelText.textContent = 'Light';\n  //  }\n  //\n  //  switchInput.addEventListener('input', function() {\n  //    html.classList.toggle(lightModeClass);\n  //    if (html.classList.contains(lightModeClass)) {\n  //      switchLabelText.textContent = 'Light';\n  //      localStorage.setItem('dark-mode', 'false');\n  //    } else {\n  //      switchLabelText.textContent = 'Dark';\n  //      localStorage.setItem('dark-mode', 'true');\n  //    }\n  //  });\n  //\n  let a;\n};\n\n\n//# sourceURL=webpack:///./templates/panel/index.js?");

/***/ }),

/***/ "./templates/router.js":
/*!*****************************!*\
  !*** ./templates/router.js ***!
  \*****************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\nconst normalizeUri = uri => {\n  if (!uri) {\n    throw new Error('uri is empty');\n  }\n\n  if (typeof uri !== 'string') {\n    throw new TypeError('URI must be a string');\n  }\n\n  let uriLength = uri.length;\n  if (uri[uriLength - 1] == '/') {\n    uri = uri.slice(0, uriLength - 1);\n  }\n  return uri;\n};\n\nclass Router {\n  constructor() {\n    this.routes = [];\n  }\n\n  register(uri, fn) {\n    // typechecks\n    if (!uri) {\n      throw new Error('uri is empty');\n    }\n\n    if (!fn) {\n      throw new Error('fn is empty');\n    }\n    if (typeof uri !== 'string') {\n      throw new TypeError('URI must be a string');\n    }\n\n    if (typeof fn !== 'function') {\n      throw new TypeError('a callback fn must be provided');\n    }\n\n    this.routes.forEach(route => {\n      if (route.uri == uri) {\n        throw new Error(\n          `URI exists. provided URI: ${uri}, registered config: ${route}`,\n        );\n      }\n    });\n\n    uri = normalizeUri(uri);\n\n    const route = {\n      uri,\n      fn,\n    };\n    this.routes.push(route);\n  }\n\n  route() {\n    this.routes.forEach(route => {\n      // normalize for trailing slash\n      let pattern = new RegExp(`^${route.uri}$`);\n      let path = window.location.pathname;\n      path = normalizeUri(path);\n      if (path.match(pattern)) {\n        return route.fn.call();\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./templates/router.js?");

/***/ }),

/***/ "./templates/utils/genJsonPayload.js":
/*!*******************************************!*\
  !*** ./templates/utils/genJsonPayload.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst genJsonPayload = payload => {\n  let value = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(payload),\n  };\n  return value;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (genJsonPayload);\n\n\n//# sourceURL=webpack:///./templates/utils/genJsonPayload.js?");

/***/ }),

/***/ "./templates/views/v1/routes.js":
/*!**************************************!*\
  !*** ./templates/views/v1/routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ROUTES = {\n  registerUser: '/join/',\n\n  loginUser: '/',\n\n  signoutUser: '/api/v1/signout',\n\n  panelHome: '/panel/',\n\n  docsHome: '/docs/',\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ROUTES);\n\n\n//  deleteAccount: '/api/v1/account/delete',\n//\n//  usernameExists: '/api/v1/account/username/exists',\n//\n//  emailExists: '/api/v1/account/email/exists',\n//\n//  healthCheck: '/api/v1/meta/health',\n//\n//  buildDetails: '/api/v1/meta/build',\n//\n//  addDomain: '/api/v1/mcaptcha/domain/add',\n//\n//  challengeDomain: '/api/v1/mcaptcha/domain/domain/verify/challenge/get',\n//\n//  proveDomain: '/api/v1/mcaptcha/domain/domain/verify/challenge/prove',\n//\n//  deleteDomain: '/api/v1/mcaptcha/domain/delete',\n//\n//  addToken: '/api/v1/mcaptcha/domain/token/add',\n//\n//  updateTokenKey: '/api/v1/mcaptcha/domain/token/update',\n//\n//  getTokenKey: '/api/v1/mcaptcha/domain/token/get',\n//\n//  deleteToken: '/api/v1/mcaptcha/domain/token/delete',\n//\n//  addTokenLevels: '/api/v1/mcaptcha/domain/token/levels/add',\n//\n//  updateTokenLevels: '/api/v1/mcaptcha/domain/token/levels/update',\n//\n//  deleteTokenLevels: '/api/v1/mcaptcha/domain/token/levels/delete',\n//\n//  getTokenLevels: '/api/v1/mcaptcha/domain/token/levels/get',\n//\n//  getTokenDuration: '/api/v1/mcaptcha/domain/token/token/get',\n//\n//  updateTokenDuration: '/api/v1/mcaptcha/domain/token/token/update',\n//\n\n\n//# sourceURL=webpack:///./templates/views/v1/routes.js?");

/***/ })

/******/ });