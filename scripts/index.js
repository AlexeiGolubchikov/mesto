const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
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

const popup = document.querySelectorAll('.popup');

//функция открытия модального окна
function openPopup(popup) {
  console.log('open')
  popup.classList.add('popup_opened');
};

//функция закрытия модального окна
const popupButtonClose = document.querySelectorAll('.popup__close');
function closePopup() {
  console.log('close')
  popup.forEach((item) => {
    item.classList.remove('popup_opened');
  });
};
popupButtonClose.forEach((btn) => {
  btn.addEventListener('click', closePopup);
});

//открытие формы редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  formEditName.value = profileName.textContent;
  formEditJob.value = profileJob.textContent;
});

//открытие формы добавления карточки
buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

//сохранение введенных данных в форму редактирования профиля
function saveNewDataProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formEditName.value;
    profileJob.textContent = formEditJob.value;
    closePopup();
};
formEditProfile.addEventListener('submit', saveNewDataProfile);

//функция удаления карточек
function deleteCard(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}

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
    openPopup(popupShowImage);
  });
  return cardElement;
};

//import { initialCards } from "./constants.js";
initialCards.reverse().forEach(createCard);

//добавление карточек через popup
function addCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: formAddTitleCard.value,
    link: formAddLinkCard.value
  };
  createCard(cardData);
  closePopup();
}
formAddCard.addEventListener('submit', addCard);