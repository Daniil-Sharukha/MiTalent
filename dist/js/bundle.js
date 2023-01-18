/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/classes/tableItem.js":
/*!*********************************************!*\
  !*** ./src/js/modules/classes/tableItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class homepageTableItem{
    constructor(img1, name, profession, link, parentSelector, key, ...classes) {
        this.img = img1;
        this.alt = name;
        this.name = name;
        this.profession = profession;
        this.link = link;

        this.key = key;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.classes = "table__item";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <a href=${this.link} class="table__item-link">
                <img src=${this.img} alt=${this.alt}>
                <div class="table__item-profile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                </div>
                <div class="table__item-name">${this.name}</div>
                <div class="table__item-job">${this.profession}</div>
            </a>
        `;
        this.parent.append(element);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageTableItem);

/***/ }),

/***/ "./src/js/modules/elements/offcanvasMenu.js":
/*!**************************************************!*\
  !*** ./src/js/modules/elements/offcanvasMenu.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function offcanvasMenu() {
    const menuOpen = document.querySelector('.burger'),
          menuClose = document.querySelector('.offcanvas__menu-close'),
          menuStatus = document.querySelector('.offcanvas');

    menuOpen.addEventListener('click', () => {
        menuStatus.classList.add('offcanvas-active');
        document.body.style.overflow = 'hidden';

    });
    menuClose.addEventListener('click', () => {
        menuStatus.classList.remove('offcanvas-active');
        document.body.style.overflow = '';
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (offcanvasMenu);

/***/ }),

/***/ "./src/js/modules/homepage/homepageTable.js":
/*!**************************************************!*\
  !*** ./src/js/modules/homepage/homepageTable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _classes_tableItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/tableItem */ "./src/js/modules/classes/tableItem.js");



function homepageTable() {
    //get data from database
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('http://localhost:8000/clients')
    .then(data => {
        // randomize data
        function shuffle(data) {
            for (let i = data.length - 1; i > 0; i--) {
                const a = Math.floor(Math.random() * (i + 1));
                [data[i], data[a]] = [data[a], data[i]];
            }
        }
        shuffle(data);
        //create table item
        data.forEach(({img1, name, profession, link}) => {
            new _classes_tableItem__WEBPACK_IMPORTED_MODULE_1__["default"](img1, name, profession, link, ".table__wrapper").render();
        });
    });
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageTable);

/***/ }),

/***/ "./src/js/modules/homepage/profileSlider.js":
/*!**************************************************!*\
  !*** ./src/js/modules/homepage/profileSlider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function profileSlider() {

    const imagesArr = ["https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"],
          namesArr = ["Georgina Alson", "Kelia Sophy", "Anna Lionel", "Yan Preben"],
          meritsArr = ["Young Model 2022", "Compositor", "Stand-up Comedian", "Actor"],
          sidebarArr = ["01", "02", "03", "04"];
    
    const currentName = document.querySelector('#homepage_name'),
          currentMerit = document.querySelector('#homepage_merit'),
          currentImage = document.querySelector('#homepage_image'),
          currentSidebarNumber = document.querySelector('.sidebar__number');

    let i = 0;

    setTimeout(flipAnim, 6700);

    function flipAnim () {
        currentName.classList.add('flip-anim');
        currentMerit.classList.add('flip-anim');
        currentImage.classList.add('flip-anim');
    }

    setInterval(() => {

        i++;

        if (i === 4) {
            i = 0;
        }

        currentSidebarNumber.innerText = sidebarArr[i];
        currentName.innerText = namesArr[i];
        currentMerit.innerText = meritsArr[i];
        currentImage.src = imagesArr[i];
        
        setTimeout(() => {
            currentName.classList.remove('flip-anim');
            currentMerit.classList.remove('flip-anim');
            currentImage.classList.remove('flip-anim');
        }, 1000);

        setTimeout(flipAnim, 6700);
                
    }, 7000);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileSlider);

/***/ }),

/***/ "./src/js/modules/homepage/sortingTableTabs.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/homepage/sortingTableTabs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services */ "./src/js/services/services.js");
/* harmony import */ var _classes_tableItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/tableItem */ "./src/js/modules/classes/tableItem.js");
/* harmony import */ var _homepageTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepageTable */ "./src/js/modules/homepage/homepageTable.js");






function sortingTableItems() {
    const sortingTabs = document.querySelectorAll('.table__tab');

    sortingTabs.forEach(tab =>
        tab.addEventListener('click', (event) => {
            const tableItem = document.querySelectorAll('.table__item');
            
            if(event.target.classList.contains('table__tab-active')) {
                sortingTabs.forEach(tab => tab.classList.remove('table__tab-active'));
                tableItem.forEach(item => {
                    item.remove();
                });
                (0,_homepageTable__WEBPACK_IMPORTED_MODULE_2__["default"])();
            } else {
                sortingTabs.forEach(tab => tab.classList.remove('table__tab-active'));
                event.target.classList.add('table__tab-active');

                tableItem.forEach(item => {
                    item.remove();
                });
    
                (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('http://localhost:8000/clients')
                .then(data => {
                    let arr = [];
                    data.forEach(obj => {
                        if (event.target.innerText == obj.key) {
                            arr.push(obj);
                        }
                    });
    
                    arr.forEach(({img1, name, key, profession, link}) => {
                        new _classes_tableItem__WEBPACK_IMPORTED_MODULE_1__["default"](img1, name, profession, link, ".table__wrapper", key).render();
                    });
                                    
                });
            }

            


        })
    );
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortingTableItems);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourse": () => (/* binding */ getResourse)
/* harmony export */ });
async function getResourse(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_elements_offcanvasMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/elements/offcanvasMenu */ "./src/js/modules/elements/offcanvasMenu.js");
/* harmony import */ var _modules_homepage_homepageTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage/homepageTable */ "./src/js/modules/homepage/homepageTable.js");
/* harmony import */ var _modules_homepage_profileSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homepage/profileSlider */ "./src/js/modules/homepage/profileSlider.js");
/* harmony import */ var _modules_homepage_sortingTableTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/homepage/sortingTableTabs */ "./src/js/modules/homepage/sortingTableTabs.js");




// import homepageTableItem from "./modules/classes/tableItem";

(0,_modules_elements_offcanvasMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_homepage_profileSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_homepage_homepageTable__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_homepage_sortingTableTabs__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map