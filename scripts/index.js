const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupButtonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const formName = document.querySelector('.form__field_type_name');
const profileName = document.querySelector('.profile__name');
const formJob = document.querySelector('.form__field_type_job');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.form');

function showPopupContainer() {
    popup.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formJob.value = profileJob.textContent;
}
profileButtonEdit.addEventListener('click', showPopupContainer);

function closePopupContainer() {
    popup.classList.remove('popup_opened');
}
popupButtonClose.addEventListener('click', closePopupContainer);

function saveNewDataProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profileJob.textContent = formJob.value;
    closePopupContainer();
}
formElement.addEventListener('submit', saveNewDataProfile);