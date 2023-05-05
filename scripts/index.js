const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupButtonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const inputName = document.querySelector('.input__field_type_name');
const profileName = document.querySelector('.profile__name');
const inputJob = document.querySelector('.input__field_type_job');
const profileJob = document.querySelector('.profile__job');
const inputElement = document.querySelector('.input');

function showPopupContainer() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}
profileButtonEdit.addEventListener('click', showPopupContainer);

function closePopupContainer() {
    popup.classList.remove('popup_opened');
}
popupButtonClose.addEventListener('click', closePopupContainer);

function saveNewDataProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopupContainer();
}
inputElement.addEventListener('submit', saveNewDataProfile);