import info from './info.json' assert {type: 'json'};

const friendsImagesCollection = document.querySelectorAll('.friends-card-images');
const rightArrow = document.querySelector('.arrow-button');
const activeButton = document.querySelector('.arrow-button-active');
let stack = new Set;
let arrayStacks = [];
let page = 1;

function pushPagination() {
    if (stack.size !== info.length) {
        let randomNumber = Math.floor(Math.random() * info.length);
        stack.add(info[randomNumber])
        pushPagination()
    }
    else continuePagination()
}

function continuePagination() {
    arrayStacks.unshift(...stack);
    friendsImagesCollection.forEach((image, index) => image.src = arrayStacks[index].img);
    stack.clear()
    if (arrayStacks.length !== 48) {
        pushPagination()
    }
    else activeButton.textContent = page;
}

function arrowNavigate() {
    if (page === 6) {
        rightArrow.removeEventListener('click', arrowNavigate);
    }
    else activeButton.textContent = ++page
}

rightArrow.addEventListener('click', arrowNavigate);
window.addEventListener('DOMContentLoaded', pushPagination);


