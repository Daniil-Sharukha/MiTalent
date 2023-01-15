/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// Left side menu toggle
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

// Homepage profile slider

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

profileSlider();

/******/ })()
;
//# sourceMappingURL=bundle.js.map