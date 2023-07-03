export class Card {
    constructor(data, templateSelector, showImage) {
        this._showImage = showImage;
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
        this._imageCardElement = this._element.querySelector('.element__image');
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._imageCardElement.src = this._link;
        this._imageCardElement.alt = this._name;
        return this._element;
    };

    _handleOpenPopup(name, link) {
        this._showImage(name, link);
    };

    _openImageEventListener() {
        this._imageCardElement.addEventListener('click', () => {
            this._handleOpenPopup(this._name, this._link);
        });
    };

    _likeCardEventListener() {
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('element__like_active');
        });
    };

    _deleteCardEventListener() {
        this._deleteButton.addEventListener('click', function(evt) {
            const item = evt.target.closest('.element');
            item.remove();  
        });
    };

    _setEventListeners() {
        this._openImageEventListener();
        this._likeCardEventListener();
        this._deleteCardEventListener();
    };
};