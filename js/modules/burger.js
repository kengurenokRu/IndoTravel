const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

let startTime = NaN;
let durationOpacity = 300;
let hide = 0;

const zindexOn = () => {
    if (hide === 0) {
        headerMenu.style.zIndex = '1';
    }
}

const clickMenu = (timestamp) => {
    startTime ||= timestamp;
    const progress = (timestamp - startTime) / durationOpacity;
    if (hide === 0) {
        headerMenu.style.opacity = progress;        
    }
    else {
        headerMenu.style.opacity = 1 - progress;        
    }
    if (progress <= 1) {
        requestAnimationFrame(clickMenu);
    }
    else {
        if (hide === 0) { hide = 1; }
        else { hide = 0; headerMenu.style.zIndex = '-1'; };
        startTime = NaN;
    }
}


headerMenuButton.addEventListener('click', () => {
    zindexOn();
    requestAnimationFrame(clickMenu);
});

headerMenu.addEventListener('click', (e) => {
    zindexOn();
    requestAnimationFrame(clickMenu);
});

document.addEventListener('click', (e) => {    
    if (headerMenu.style.opacity > 0) {
        if ((!e.target.classList.contains('header__menu-button')) &&
            (!e.target.classList.contains('header__menu'))) {
            zindexOn();
            requestAnimationFrame(clickMenu);
        }
    }
});