const profileButtonEdit = document.querySelector('.profile__edit-button');
const profileButtonAdd = document.querySelector('.profile__add-button');
const popupProfileEditButtonClose = document.querySelector('.popup__close_type_edit');
const popupCardButtonClose = document.querySelector('.popup__close_type_card');
const popupImageButtonClose =document.querySelector('.popup__close_type_image');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupShowImage = document.querySelector('.popup_type_image');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formEditName = document.querySelector('.form__field_type_name');
const formEditJob = document.querySelector('.form__field_type_job');
const formAddTitleCard = document.querySelector('.form__field_type_title');
const formAddLinkCard = document.querySelector('.form__field_type_link');
const formEditProfile = document.querySelector('.form');
const formAddCard = document.querySelector('.form_type_add');
const cards = document.querySelector('.elements');
const captionPopupImage = popupShowImage.querySelector('.popup__caption');
const popupCard = popupShowImage.querySelector('.popup__image');
const elementTemplate = document.querySelector('#element-template').content;

//открытие формы редактирования профиля
function showPopupEditProfile() {
  popupEditProfile.classList.add('popup_opened');
  formEditName.value = profileName.textContent;
  formEditJob.value = profileJob.textContent;
}
profileButtonEdit.addEventListener('click', showPopupEditProfile);

//открытие формы добавления карточки
function showPopupAddCard() {
  popupAddCard.classList.add('popup_opened');
}
profileButtonAdd.addEventListener('click', showPopupAddCard);

//закрытие формы редактирования профиля
function closePopupEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}
popupProfileEditButtonClose.addEventListener('click', closePopupEditProfile);

//закрытие формы добавления карточки
function closePopupAddCard() {
  popupAddCard.classList.remove('popup_opened');
}
popupCardButtonClose.addEventListener('click', closePopupAddCard);

// закрытие окна просмотра фотографий
function closePopupImage() {
  popupShowImage.classList.remove('popup_opened');
}
popupImageButtonClose.addEventListener('click', closePopupImage);

//сохранение введенных данных в форму редактирования профиля
function saveNewDataProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formEditName.value;
    profileJob.textContent = formEditJob.value;
    closePopupEditProfile();
};
formEditProfile.addEventListener('submit', saveNewDataProfile);

//функция удаления карточек
function deleteCard(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}

//открытие окна просмотра фотографий
function showPopupImage() {
  popupShowImage.classList.add('popup_opened');
};

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

//функция создания карточки
function createCard(item) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const imageCardElement = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = item.name;
  imageCardElement.src = item.link;
  imageCardElement.alt = item.name;
  cards.prepend(cardElement);
  cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  cardElement.querySelector('.element__delete') .addEventListener('click', deleteCard);
  imageCardElement.addEventListener('click', () => {
    captionPopupImage.textContent = item.name;     
    popupCard.src = item.link; 
    popupCard.alt = item.name; 
    showPopupImage();
  });
  console.log(cardElement);
  return cardElement;
};

//import { initialCards } from "./constants.js";
initialCards.reverse().forEach(createCard);

//добавление карточек через popup
function addCard(evt) {
  evt.preventDefault();
  const objCard = {
    name: formAddTitleCard.value,
    link: formAddLinkCard.value
  };
  createCard(objCard);
  closePopupAddCard();
}
formAddCard.addEventListener('submit', addCard);  