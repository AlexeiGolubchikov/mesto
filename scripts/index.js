const profileBottonEdit = document.querySelector('.profile__edit-botton');
const popupBottonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function showPopupContainer() {
    popup.classList.add('popup__opened');
}
profileBottonEdit.addEventListener('click', showPopupContainer);

function closePopupContainer() {
    popup.classList.remove('popup__opened');
}
popupBottonClose.addEventListener('click', closePopupContainer);

const popupName = document.querySelector('.popup__name');
const profileName = document.querySelector('.profile__name');
const popupJob = document.querySelector('.popup__job');
const profileJob = document.querySelector('.profile__job');

popupName.value = profileName.textContent;
popupJob.value = profileJob.textContent;

const popupBottonSave = document.querySelector('.popup__button');
function saveNewDataProfile() {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    popup.classList.remove('popup__opened');
}
popupBottonSave.addEventListener('click', saveNewDataProfile);