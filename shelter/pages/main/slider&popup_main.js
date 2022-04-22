import info from './info.json' assert {type: 'json'}; 

const friendsImagesCollection = document.querySelectorAll('.friends-card-images');
const friendsNamesCollection = document.querySelectorAll('.friends-card-text');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const arrows = [rightArrow, leftArrow];
const popupCards = document.querySelectorAll('.friends-card');

/*slider*/

function pushSlider() {
    friendsImagesCollection.forEach((image, index) => image.src = info[index+3].img);
    friendsNamesCollection.forEach((el, index) => el.textContent = info[index+3].name);
    let removed = info.splice(0, 3);
    info.push(...removed);
}

arrows.forEach((el) => el.addEventListener('click', pushSlider));

/*------------------------------------------------------------------------------------*/

const closePopup = document.querySelector('.modale-window-close');
const modaleImage = document.querySelector('.modale-image');
const modaleTitle = document.querySelector('.modale-title');
const modaleText = document.querySelector('.modale-text');
const modaleParameters = document.querySelector('.modale-parameters');
const closePopupButton = document.querySelector('.popup-out');
const areaUnderActiveMenu = document.querySelector('.area-under-menu');
const body = document.querySelector('body');
const closePopupArray = [areaUnderActiveMenu, closePopupButton];

/*popup*/

function pushPopup(event) {
    closePopup.classList.toggle('modale-window-active');
    body.classList.add('delete-scroll');
    areaUnderActiveMenu.classList.add('area-under-menu-active');
    if (event.currentTarget.classList.contains('friends-card')) {
        let link = event.currentTarget.firstElementChild.nextElementSibling.textContent
                for (let i = 0; i < info.length; i++) {
            if (info[i].name === link) {
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

