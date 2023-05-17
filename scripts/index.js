const profileButtonEdit = document.querySelector('.profile__edit-button');
const profileButtonAdd = document.querySelector('.profile__add-button');
const popupButtonClose = document.querySelector('.popup__close');
const popupCardButtonClose = document.querySelector('.popup__close_type_card');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formName = document.querySelector('.form__field_type_name');
const formJob = document.querySelector('.form__field_type_job');
const formTitle = document.querySelector('.form__field_type_title');
const formLink = document.querySelector('.form__field_type_link');
const formElement = document.querySelector('.form');
const elements = document.querySelector('.elements');

//функция открытия формы редактирования профиля
function showPopupEditContainer() {
    popupEdit.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formJob.value = profileJob.textContent;
}
//метод открытия формы редактирования профиля
profileButtonEdit.addEventListener('click', showPopupEditContainer);

//функция открытия формы добавления карточки
function showPopupAddCard() {
  popupAdd.classList.add('popup_opened');
}
//метод открытия формы добавления карточки
profileButtonAdd.addEventListener('click', showPopupAddCard);

//функция закрытия формы редактирования профиля
function closePopupContainer() {
    popupEdit.classList.remove('popup_opened');
}
//метод закрытия формы редактирования профиля
popupButtonClose.addEventListener('click', closePopupContainer);

//функция закрытия формы добавления карточки
function closePopupAddCard() {
  popupAdd.classList.remove('popup_opened');
}
//метод закрытия формы добавления карточки
popupCardButtonClose.addEventListener('click', closePopupAddCard);

//функция сохранения введенных данных в форму редактирования профиля
function saveNewDataProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profileJob.textContent = formJob.value;
    closePopupContainer();
}
//метод сохранения введенных данных в форму редактирования профиля
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
  

function addCards(element) {
    const elementTemplate = document.querySelector('#element-template').content;
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = element.name;
    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__image').alt = element.name;
    elements.append(cardElement);
}

initialCards.forEach(addCards);