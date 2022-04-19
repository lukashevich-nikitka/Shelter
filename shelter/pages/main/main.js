import info from './info.json' assert {type: 'json'}; 

const friendsImagesCollection = document.querySelectorAll('.friends-card-images');
const friendsNamesCollection = document.querySelectorAll('.friends-card-text');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const arrows = [rightArrow, leftArrow];

function pushSlider() {
    friendsImagesCollection.forEach((image, index) => image.src = info[index+3].img);
    friendsNamesCollection.forEach((el, index) => el.textContent = info[index+3].name);
    let removed = info.splice(0, 3);
    info.push(...removed);
}

arrows.forEach((el) => el.addEventListener('click', pushSlider));
