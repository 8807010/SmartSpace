/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_slider.js":
/*!***************************!*\
  !*** ./src/js/_slider.js ***!
  \***************************/
/***/ (() => {

const swiper = new Swiper('.slider-main-block', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/js/_tabs.js":
/*!*************************!*\
  !*** ./src/js/_tabs.js ***!
  \*************************/
/***/ (() => {

// Tabs
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  if (targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }

      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_slider */ "./src/js/_slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tabs */ "./src/js/_tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_1__);
// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';


})();

/******/ })()
;
//# sourceMappingURL=main.js.map