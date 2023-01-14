/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function toggleOffcanvasMenu() {
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

toggleOffcanvasMenu();
/******/ })()
;
//# sourceMappingURL=bundle.js.map