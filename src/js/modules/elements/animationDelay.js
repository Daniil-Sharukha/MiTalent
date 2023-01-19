function animationDelay(itemClass) {
    const itemArr = document.querySelectorAll(itemClass);
    let delay = 0.5;
    
    itemArr.forEach(item => {
            item.style.animationDelay = `${delay}s`;
            delay += 0.5;
    });

}

export default animationDelay;