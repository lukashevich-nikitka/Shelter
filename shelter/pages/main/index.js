const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.close-burger-menu');

function pushMenu() {
    burger.classList.toggle('change');
    burgerList.classList.toggle('open-burger-menu');
}
burger.addEventListener('click', pushMenu)