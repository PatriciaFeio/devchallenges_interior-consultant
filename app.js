const buttonOpenMenu = document.querySelector('.overlay-menu-open');
const buttonCloseMenu = document.querySelector('.overlay-menu-close');
const overlayMenuNav = document.querySelector('.main-nav__primary');
const menuOverlay = document.querySelector('.main-nav--overlay');



buttonOpenMenu.addEventListener('click', openMenu);
buttonCloseMenu.addEventListener('click', closeMenu);

function openMenu() {
    menuOverlay.style.width = '100%';
    overlayMenuNav.style.opacity = '1';
}

function closeMenu() {
    menuOverlay.style.width = '0%';
    overlayMenuNav.style.opacity = '0';
}