export class FormValidator {
    constructor(enableValidation, formElement) {
        this._enableValidation = enableValidation;
        this._formElement = formElement;
        this._formSelector = document.querySelector(this._enableValidation.formSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._enableValidation.inputSelector)); 
        this._buttonElement = this._formElement.querySelector(this._enableValidation.submitButtonSelector);
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    };

    _showInputError(inputElement, errorMessage) {
        this._formError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._enableValidation.inputErrorClass);
        this._formError.classList.add(this._enableValidation.errorClass);
        this._formError.textContent = errorMessage;
    };
      
    _hideInputError(inputElement) {
        this._formError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._enableValidation.inputErrorClass);
        this._formError.classList.remove(this._enableValidation.errorClass);
        this._formError.textContent = '';
    };
      
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }        
    };

    _disableButton() {
        this._buttonElement.disabled = true;
        this._buttonElement.classList.add(this._enableValidation.inactiveButtonClass);
    };
      
    _enableButton() {
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove(this._enableValidation.inactiveButtonClass);
    };
      
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    };

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._toggleButtonState();
                this._isValid(inputElement);
            });
        });
        this._toggleButtonState();
        this._formElement.addEventListener('reset', () => {
            this._disableButton()
        });
    };

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
};