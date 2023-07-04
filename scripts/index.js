import {initialCards, validationConfig} from "./constants.js"
import {Card} from "./Card.js"
import {FormValidator} from "./FormValidator.js";
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupImageOfCard = document.querySelector('.popup_type_image');
const captionPopupImage = document.querySelector('.popup__caption');
const popupCard = document.querySelector('.popup__image');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cards = document.querySelector('.elements');
const formEditProfile = document.forms.editProfile;
const formAddCard = document.forms.addCard;
const formEditName = formEditProfile.elements.name;
const formEditJob = formEditProfile.elements.job;
const formAddTitleCard = formAddCard.elements.addTitleCard;
const formAddLinkCard = formAddCard.elements.addLinkCard;

//функция закрытия модального окна через нажатие на клавишу Escape
function closePopupPressEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

//функция открытия модального окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupPressEscape);
};

//функция закрытия модального окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupPressEscape);
};

//закрытие модального окна через крестик или через клик на оверлей
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('mouseup', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
  });
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
    closePopup(popupEditProfile);
};
formEditProfile.addEventListener('submit', saveNewDataProfile);

function showImage(name, link) {
  captionPopupImage.textContent = name;
  popupCard.src = link;
  popupCard.alt = name;
  openPopup(popupImageOfCard);
}

function createCard(item) {
  const card = new Card(item, '#element-template', showImage);
  return card.generateCard();
}

initialCards.forEach((item) => {
  cards.append(createCard(item));
});

//добавление новой карточки
function addCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: formAddTitleCard.value,
    link: formAddLinkCard.value
  };
  createCard(cardData)
  cards.prepend(createCard(cardData));
  closePopup(popupAddCard);
  formAddCard.reset()
}
formAddCard.addEventListener('submit', addCard);

const formValidatorEdit = new FormValidator(validationConfig, formEditProfile);
formValidatorEdit.validationConfig();

const formValidatorAdd = new FormValidator(validationConfig, formAddCard);
formValidatorAdd.validationConfig();