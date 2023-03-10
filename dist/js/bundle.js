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

/***/ "./src/js/modules/clients/clientsSlider.js":
/*!*************************************************!*\
  !*** ./src/js/modules/clients/clientsSlider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clientsSlider() {
    if (document.querySelector('.talent__item-wrapper')) {
        const sidebarArr = ["01", "02", "03", "04"],
          carouselWrapper = document.querySelector('.talent__item-wrapper'),
          slideUp = document.querySelector('.talent__right-switch-up'),
          slideDown = document.querySelector('.talent__right-switch-down'),
          number = document.querySelector('#clients__sidebar-number');

    let i = 0;

    slideDown.addEventListener('click', () => {
        let currentState = window.getComputedStyle(carouselWrapper).getPropertyValue('top'),
        currentWrapperHeight = window.getComputedStyle(carouselWrapper).getPropertyValue('height');
        carouselWrapper.style.top = `${+currentState.slice(0, -2) - (+currentWrapperHeight.slice(0, -2) / 4 )}px`;

        ++i;

        if (carouselWrapper.style.top.slice(0, -2) < -(+currentWrapperHeight.slice(0, -2) - +currentWrapperHeight.slice(0, -2) / 4 ) && i > 3) {
            carouselWrapper.style.top = 0;
            i = 0;
        }
        number.innerHTML = sidebarArr[i];
        
    });

    slideUp.addEventListener('click', () => {
        let currentState = window.getComputedStyle(carouselWrapper).getPropertyValue('top'),
        currentWrapperHeight = window.getComputedStyle(carouselWrapper).getPropertyValue('height');
        carouselWrapper.style.top = `${+currentState.slice(0, -2) + (+currentWrapperHeight.slice(0, -2) / 4 )}px`;

        i--;

        if (carouselWrapper.style.top.slice(0, -2) > 0 && i < 0) {
            carouselWrapper.style.top = `${-(+currentWrapperHeight.slice(0, -2) - +currentWrapperHeight.slice(0, -2) / 4  )}px`;

            i = 3;
        }
        number.innerHTML = sidebarArr[i];
    });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientsSlider);

/***/ }),

/***/ "./src/js/modules/elements/animationDelay.js":
/*!***************************************************!*\
  !*** ./src/js/modules/elements/animationDelay.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function animationDelay(itemClass) {
    const itemArr = document.querySelectorAll(itemClass);
    let delay = 0.5;
    
    itemArr.forEach(item => {
            item.style.animationDelay = `${delay}s`;
            delay += 0.5;
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationDelay);

/***/ }),

/***/ "./src/js/modules/elements/modal.js":
/*!******************************************!*\
  !*** ./src/js/modules/elements/modal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toggleModal() {
    setTimeout(() => {
        const homepageNewsLinks = document.querySelectorAll('.homepage__news__item-link'),
              clientsNewsLinks = document.querySelectorAll('.news__preview-item'),
              newsLink = document.querySelectorAll('.news__item'),
              homepageBtn = document.querySelector('.homepage__promo__btn'),
              modal = document.querySelector('.modal');
        let profileLinks = document.querySelectorAll('.table__item-link');

        function modalOpen() {

            function addModalActive(link) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    modal.classList.add('modal-active');
                    document.body.style.overflow = 'hidden';
                });
            }

            document.addEventListener('click', function(e) {
                if (e.target.className == 'table__tab' || 'table__tab table__tab-active') {
                    setTimeout(() => {
                        profileLinks = document.querySelectorAll('.table__item-link');
                        profileLinks.forEach(link => {
                            addModalActive(link);
                        });
                    }, 1000);     
                }
            });

            profileLinks.forEach(link => {
                addModalActive(link);
            });

            homepageNewsLinks.forEach(link => {
                addModalActive(link);
            });

            clientsNewsLinks.forEach(link => {
                addModalActive(link);
            });

            newsLink.forEach(link => {
                addModalActive(link);
            });

            if(homepageBtn) {
                homepageBtn.addEventListener('click', (event) => {
                event.preventDefault();
                modal.classList.add('modal-active');
                document.body.style.overflow = 'hidden';
                });
            }
        }

        function modalClose() {
            const modalExit = document.querySelector('.modal__close'),
                  modalBtn = document.querySelector('.modal__btn');
                
            modalExit.addEventListener('click', () => {
                modal.classList.remove('modal-active');
                document.body.style.overflow = '';
            });
    
            modalBtn.addEventListener('click', () => {
                modal.classList.remove('modal-active');
                document.body.style.overflow = '';
            });

            document.addEventListener('keydown', (e) => {
                if(e.code === 'Escape') {
                    modal.classList.remove('modal-active');
                document.body.style.overflow = '';
                }
            });
        }

        modalOpen();
        modalClose();
    }, 1000);

    

    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleModal);

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
/* harmony import */ var _elements_animationDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/animationDelay */ "./src/js/modules/elements/animationDelay.js");




function homepageTable() {
    if (document.querySelector('.table__wrapper')) {
        //get data from database
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('https://my-json-server.typicode.com/Daniil-Sharukha/MiTalent-db/clients')
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
                data.forEach(({
                    img1,
                    name,
                    profession,
                    link
                }) => {
                    new _classes_tableItem__WEBPACK_IMPORTED_MODULE_1__["default"](img1, name, profession, link, ".table__wrapper").render();
                    (0,_elements_animationDelay__WEBPACK_IMPORTED_MODULE_2__["default"])('.table__item');
                });
            });
    }
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
    if(document.querySelector('#homepage_name')) {
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
              currentSidebarNumber = document.querySelector('#homepage__sidebar-number');
    
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
/* harmony import */ var _elements_animationDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/animationDelay */ "./src/js/modules/elements/animationDelay.js");







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
    
                (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('https://my-json-server.typicode.com/Daniil-Sharukha/MiTalent-db/clients')
                .then(data => {
                    let arr = [];
                    data.forEach(obj => {
                        if (event.target.innerText == obj.key) {
                            arr.push(obj);
                        }
                    });
    
                    arr.forEach(({img1, name, key, profession, link}) => {
                        new _classes_tableItem__WEBPACK_IMPORTED_MODULE_1__["default"](img1, name, profession, link, ".table__wrapper", key).render();
                        (0,_elements_animationDelay__WEBPACK_IMPORTED_MODULE_3__["default"])('.table__item');
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
/* harmony import */ var _modules_clients_clientsSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clients/clientsSlider */ "./src/js/modules/clients/clientsSlider.js");
/* harmony import */ var _modules_elements_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/elements/modal */ "./src/js/modules/elements/modal.js");







// import animationDelay from "./modules/elements/animationDelay";
// import homepageTableItem from "./modules/classes/tableItem";



window.addEventListener('DOMContentLoaded', function() {
    (0,_modules_elements_offcanvasMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_homepage_profileSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_homepage_homepageTable__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_homepage_sortingTableTabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_clients_clientsSlider__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_elements_modal__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map