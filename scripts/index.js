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




const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  

function addImage(element) {
    const elements = document.querySelector('.elements');
    const elementTemplate = document.querySelector('#element-template').content;
    const imageElement = elementTemplate.querySelector('.element').cloneNode(true);
    imageElement.querySelector('.element__title').textContent = element.name;
    imageElement.querySelector('.element__image').src = element.link;
    imageElement.querySelector('.element__image').alt = element.name;
    elements.append(imageElement);
}

initialCards.forEach(addImage);