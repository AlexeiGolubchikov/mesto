const profileButtonEdit = document.querySelector('.profile__edit-button');
const profileButtonAdd = document.querySelector('.profile__add-button');
const popupButtonClose = document.querySelector('.popup__close');
const popupCardButtonClose = document.querySelector('.popup__close_type_card');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formName = document.querySelector('.form__field_type_name');
const formJob = document.querySelector('.form__field_type_job');
const formTitle = document.querySelector('.form__field_type_title');
const formLink = document.querySelector('.form__field_type_link');
const formElement = document.querySelector('.form');
const formElementAdd = document.querySelector('.form_type_add');
const elements = document.querySelector('.elements');

//открытие формы редактирования профиля
function showPopupEditContainer() {
    popupEdit.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formJob.value = profileJob.textContent;
}
profileButtonEdit.addEventListener('click', showPopupEditContainer);

//открытие формы добавления карточки
function showPopupAddCard() {
  popupAdd.classList.add('popup_opened');
}
profileButtonAdd.addEventListener('click', showPopupAddCard);

//закрытие формы редактирования профиля
function closePopupContainer() {
    popupEdit.classList.remove('popup_opened');
}
popupButtonClose.addEventListener('click', closePopupContainer);

//закрытие формы добавления карточки
function closePopupAddCard() {
  popupAdd.classList.remove('popup_opened');
}
popupCardButtonClose.addEventListener('click', closePopupAddCard);

//сохранение введенных данных в форму редактирования профиля
function saveNewDataProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profileJob.textContent = formJob.value;
    closePopupContainer();
};
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
  
//функция удаления карточек
function deleteImage(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}

//открытие просмотра фотографий
function shouPopupImage() {
  popupImage.classList.add('popup_opened');
};

//добавление карточек при открытии страницы
function addCards(element) {
    const elementTemplate = document.querySelector('#element-template').content;
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__title').textContent = element.name;
    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__image').alt = element.name;
    cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    });
    cardElement.querySelector('.element__delete').addEventListener('click', deleteImage);
    cardElement.querySelector('.element__image').addEventListener('click', shouPopupImage);
    elements.append(cardElement);
};
initialCards.forEach(addCards);


//добваление карточек через popup
function addNewCard(evt) {
  evt.preventDefault();
  const elementTemplate = document.querySelector('#element-template').content;
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = formTitle.value;
  cardElement.querySelector('.element__image').alt = formTitle.value;
  cardElement.querySelector('.element__image').src = formLink.value;
  cardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elements.prepend(cardElement);
  closePopupAddCard();
  cardElement.querySelector('.element__delete').addEventListener('click', deleteImage);
  cardElement.querySelector('.element__image').addEventListener('click', shouPopupImage);
};
formElementAdd.addEventListener('submit', addNewCard);