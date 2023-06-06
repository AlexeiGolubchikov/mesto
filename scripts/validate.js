const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  const showInputError = (formEditProfile, formEditName, errorMessage) => {
    const formEditNameError = formEditProfile.querySelector(`.${formEditName.id}-error`);
    formEditName.classList.add('form__field_type_error');
    formEditNameError.classList.add('input-error_active');
    formEditNameError.textContent = errorMessage;
  };
  
  const hideInputError = (formEditProfile, formEditName) => {
    const formEditNameError = formEditProfile.querySelector(`.${formEditName.id}-error`);
    formEditName.classList.remove('form__field_type_error');
    formEditNameError.classList.remove('input-error_active');
    formEditNameError.textContent = '';
  };
  
  const isValid = (formEditProfile, formEditName) => {
    if (!formEditName.validity.valid) {
      showInputError(formEditProfile, formEditName, formEditName.validationMessage);
    } else {
      hideInputError(formEditProfile, formEditName);
    }
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add('form__button_inactive');
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove('form__button_inactive');
    }
  };
  
  const setEventListeners = (formEditProfile) => {
    const buttonElement = formEditProfile.querySelector('.form__button');
    const inputList = Array.from(formEditProfile.querySelectorAll('.form__field'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        toggleButtonState(inputList, buttonElement);
        isValid(formEditProfile, inputElement);
      });
    });
    toggleButtonState(inputList, buttonElement);
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };


  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 