export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    };

    _getTemplate() {
        return document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
    };
      
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._imageCardElement = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name;
        this._imageCardElement.src = this._link;
        this._imageCardElement.alt = this._name;
        return this._element;
    };

    _handleOpenPopup() {
        const popup = document.querySelector('.popup_type_image');
        const captionPopupImage = document.querySelector('.popup__caption');
        const popupCard = document.querySelector('.popup__image');
        captionPopupImage.textContent = this._name;
        popupCard.src = this._link;
        popupCard.alt = this._name;
        popup.classList.add('popup_opened');    
    };

    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        this._element.querySelector('.element__like').addEventListener('click', function(evt) {
            evt.target.classList.toggle('element__like_active');
        });
        this._element.querySelector('.element__delete') .addEventListener('click', function(evt) {
            const item = evt.target.closest('.element');
            item.remove();  
        });
    };
};