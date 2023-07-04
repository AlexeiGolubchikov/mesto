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

    _openImageEventListener() {
        this._imageCardElement.addEventListener('click', () => {
            this._showImage(this._name, this._link);
        });
    };

    _toggleLikeButton () {
        this._likeButton.classList.toggle('element__like_active');
      };

    _likeCardEventListener() {
        this._likeButton.addEventListener('click', () => { 
            this._toggleLikeButton(); 
        });
    };

    _removeClosestElement(evt) {
        evt.target.closest('.element').remove();
    };

    _deleteCardEventListener() {
        this._deleteButton.addEventListener('click', (evt) => {
            this._removeClosestElement(evt);
        });
    };

    _setEventListeners() {
        this._openImageEventListener();
        this._likeCardEventListener();
        this._deleteCardEventListener();
    };
};