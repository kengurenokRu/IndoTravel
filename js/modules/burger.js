const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

headerMenuButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu_active');
});

headerMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__item'))
        headerMenu.classList.remove('header__menu_active');
});

document.addEventListener('click', (e) => {
    if (headerMenu.classList.contains('header__menu_active')) {
        if ((!e.target.classList.contains('header__menu-button')) &&
            (!e.target.classList.contains('header__menu'))) {
            headerMenu.classList.remove('header__menu_active');
        }
    }
});