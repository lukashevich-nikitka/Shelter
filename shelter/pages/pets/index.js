const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.close-burger-menu');
const areaUnderActiveMenu = document.querySelector('.area-under-menu');

function pushMenu() {
    burger.classList.toggle('change');
    burgerList.classList.toggle('open-burger-menu');
    areaUnderActiveMenu.classList.toggle('area-under-menu-active');
}
burger.addEventListener('click', pushMenu)