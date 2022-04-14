const burger = document.querySelector('.burger');
function pushMenu() {
    burger.classList.toggle('change')
}
burger.addEventListener('click', pushMenu)