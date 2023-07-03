export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)); 
        this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    };

    _showInputError(inputElement, errorMessage) {
        this._formError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validationConfig.inputErrorClass);
        this._formError.classList.add(this._validationConfig.errorClass);
        this._formError.textContent = errorMessage;
    };
      
    _hideInputError(inputElement) {
        this._formError = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
        this._formError.classList.remove(this._validationConfig.errorClass);
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
        this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
    };
      
    _enableButton() {
        this._buttonElement.disabled = false;
        this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
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
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    };

    validationConfig() {
        this._setEventListeners();
    };
};