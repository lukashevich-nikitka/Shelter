import info from './info.json' assert {type: 'json'};

const friendsNamesCollection = document.querySelectorAll('.friends-card-text');
const friendsImagesCollection = document.querySelectorAll('.friends-card-images');
const rightArrow = document.querySelector('.right-arrow-button');
const activeButton = document.querySelector('.arrow-button-active');
const doubleRightArrow = document.querySelector('.double-right-arrow-button');
const leftArrow = document.querySelector('.left-arrow-button');
const doubleLeftArrow = document.querySelector('.double-left-arrow-button');

let stack = new Set;
let arrayStacks = [];
let page = 1;
let lastPage;
let countOfImages;

function maxPage() {
    if (screen.width < 1280 && screen.width > 767) {
        countOfImages = 6;
        lastPage = 8;
    }
    else if (screen.width > 1279) {
        countOfImages = 8;
        lastPage = 6;
    }
    else if (screen.width < 768) {
        countOfImages = 3;
        lastPage = 16;
    }
}

function pushPagination() {
    if (stack.size !== info.length) {
        let randomNumber = Math.floor(Math.random() * info.length);
        stack.add(info[randomNumber]);
        pushPagination()
    }
    else continuePagination()
}

function continuePagination() {
    arrayStacks.unshift(...stack);
    friendsNamesCollection.forEach((name,index) => name.textContent = arrayStacks[index].name);
    friendsImagesCollection.forEach((img, index) => img.src = arrayStacks[index].img);
    stack.clear()
    if (arrayStacks.length !== 48) {
        pushPagination()
    }
    else activeButton.textContent = page;
}

function arrowsNavigation() {
    if (page === lastPage) {
        rightArrow.removeEventListener('click', moveRight);
        rightArrow.classList.remove('right-arrow-button')
        rightArrow.classList.add('disabled');
        doubleRightArrow.removeEventListener('click', moveRight);
        doubleRightArrow.classList.remove('double-right-arrow-button');
        doubleRightArrow.classList.add('disabled');
        doubleLeftArrow.classList.add('double-right-arrow-button');
        doubleLeftArrow.classList.remove('double-left-arrow-button');
        leftArrow.classList.remove('left-arrow-button');
        leftArrow.classList.add('double-right-arrow-button');
        leftArrow.addEventListener('click', moveLeft);
        doubleLeftArrow.addEventListener('click', moveDobleLeft);
    }
    else if (page > 1) {
        doubleLeftArrow.classList.add('double-right-arrow-button');
        doubleLeftArrow.classList.remove('double-left-arrow-button');
        leftArrow.classList.remove('left-arrow-button');
        leftArrow.classList.add('double-right-arrow-button');
        rightArrow.classList.add('right-arrow-button')
        rightArrow.classList.remove('disabled');
        doubleRightArrow.classList.add('double-right-arrow-button');
        doubleRightArrow.classList.remove('disabled');
        leftArrow.addEventListener('click', moveLeft);
        doubleLeftArrow.addEventListener('click', moveDobleLeft);
        rightArrow.addEventListener('click', moveRight);
        doubleRightArrow.addEventListener('click', moveDoubleRight);
    }
    else if (page === 1) {
        doubleLeftArrow.classList.add('double-left-arrow-button');
        doubleLeftArrow.classList.remove('double-right-arrow-button');
        leftArrow.classList.add('left-arrow-button');
        leftArrow.classList.remove('disabled');
        rightArrow.classList.add('right-arrow-button')
        rightArrow.classList.remove('disabled');
        doubleRightArrow.classList.add('double-right-arrow-button');
        doubleRightArrow.classList.remove('disabled');
        rightArrow.addEventListener('click', moveRight);
        doubleRightArrow.addEventListener('click', moveDoubleRight);
        leftArrow.removeEventListener('click', moveLeft);
        doubleLeftArrow.removeEventListener('click', moveDobleLeft);
    }
}

maxPage()

function moveRight() {
    activeButton.textContent = ++page;
    let currentElements = arrayStacks.slice(page * countOfImages - countOfImages, page * countOfImages);
    let friendsNamesArray = [...friendsNamesCollection].slice(0, countOfImages);
    let friendsImagesArray = [...friendsImagesCollection].slice(0, countOfImages);
    friendsNamesArray.forEach((name, index) => name.textContent = currentElements[index].name);
    friendsImagesArray.forEach((image, index) => image.src = currentElements[index].img);
    arrowsNavigation();
}

function moveLeft() {
    activeButton.textContent = --page;
    let currentElements = arrayStacks.slice(page * countOfImages - countOfImages, page * countOfImages);
    let friendsNamesArray = [...friendsNamesCollection].slice(0, countOfImages);
    let friendsImagesArray = [...friendsImagesCollection].slice(0, countOfImages);
    friendsNamesArray.forEach((name, index) => name.textContent = currentElements[index].name);
    friendsImagesArray.forEach((image, index) => image.src = currentElements[index].img);
    arrowsNavigation();
}

function moveDoubleRight() {
    activeButton.textContent = page = lastPage;
    let currentElements = arrayStacks.slice(page * countOfImages - countOfImages, page * countOfImages);
    let friendsNamesArray = [...friendsNamesCollection].slice(0, countOfImages);
    let friendsImagesArray = [...friendsImagesCollection].slice(0, countOfImages);
    friendsNamesArray.forEach((name, index) => name.textContent = currentElements[index].name);
    friendsImagesArray.forEach((image, index) => image.src = currentElements[index].img);
    arrowsNavigation();
}

function moveDobleLeft() {
    activeButton.textContent = page = 1;
    let currentElements = arrayStacks.slice(page * countOfImages - countOfImages, page * countOfImages);
    let friendsNamesArray = [...friendsNamesCollection].slice(0, countOfImages);
    let friendsImagesArray = [...friendsImagesCollection].slice(0, countOfImages);
    friendsNamesArray.forEach((name, index) => name.textContent = currentElements[index].name);
    friendsImagesArray.forEach((image, index) => image.src = currentElements[index].img);
    arrowsNavigation();
}

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
doubleRightArrow.addEventListener('click', moveDoubleRight);
doubleLeftArrow.addEventListener('click', moveDobleLeft);
window.addEventListener('DOMContentLoaded', pushPagination);

/*----------------------------popup---------------------------------------*/

const closePopup = document.querySelector('.modale-window-close');
const modaleImage = document.querySelector('.modale-image');
const modaleTitle = document.querySelector('.modale-title');
const modaleText = document.querySelector('.modale-text');
const modaleParameters = document.querySelector('.modale-parameters');
const closePopupButton = document.querySelector('.popup-out');
const areaUnderActiveMenu = document.querySelector('.area-under-menu');
const popupCards = document.querySelectorAll('.friends-card');
const body = document.querySelector('body');
const closePopupArray = [areaUnderActiveMenu, closePopupButton];

function pushPopup(event) {
    closePopup.classList.toggle('modale-window-active');
    body.classList.add('delete-scroll');
    areaUnderActiveMenu.classList.add('area-under-menu-active');
    if (event.currentTarget.classList.contains('friends-card')) {
        let name = event.currentTarget.firstElementChild.nextElementSibling.textContent
                for (let i = 0; i < info.length; i++) {
            if (info[i].name === name) {
                modaleImage.src = info[i].img;
                modaleTitle.firstElementChild.textContent = info[i].name;
                modaleTitle.lastElementChild.textContent = `${info[i].type + ` - ` + info[i].breed}`;
                modaleText.textContent = info[i].description;
                modaleParameters.firstElementChild.textContent = `${'Age: ' + info[i].age}`;
                modaleParameters.firstElementChild.nextElementSibling.textContent = `${'Inoculations: ' + info[i].inoculations}`;
                modaleParameters.lastElementChild.previousElementSibling.textContent = `${'Diseases: ' + info[i].diseases}`;
                modaleParameters.lastElementChild.textContent = `${'Parasites: ' + info[i].parasites}`;
            }
        }
    }
};

function closeModaleWindow() {
    closePopup.classList.toggle('modale-window-active');
    areaUnderActiveMenu.classList.remove('area-under-menu-active');
    body.classList.remove('delete-scroll');
}

popupCards.forEach((el) => el.addEventListener('click', pushPopup))
closePopupArray.forEach((el) => el.addEventListener('click', closeModaleWindow))


