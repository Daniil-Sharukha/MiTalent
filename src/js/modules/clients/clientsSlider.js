function clientsSlider() {
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

export default clientsSlider;