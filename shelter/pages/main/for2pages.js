const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.close-burger-menu');
const areaUnderActiveMenu = document.querySelector('.area-under-menu');
const closeItemsArray = [burgerList, burger, areaUnderActiveMenu];

function pushMenu() {
    burger.classList.toggle('change');
    burgerList.classList.toggle('open-burger-menu');
    areaUnderActiveMenu.classList.toggle('area-under-menu-active');
}
closeItemsArray.forEach((el) => el.addEventListener('click', pushMenu));

