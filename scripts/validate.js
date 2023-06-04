const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  const showInputError = (formPopup, formEditName, errorMessage) => {
    const formEditNameError = formPopup.querySelector(`.${formEditName.id}-error`);
    formEditName.classList.add('form__field_type_error');
    formEditNameError.classList.add('input-error_active');
    formEditNameError.textContent = errorMessage;
  };
  
  const hideInputError = (formPopup, formEditName) => {
    const formEditNameError = formPopup.querySelector(`.${formEditName.id}-error`);
    formEditName.classList.remove('form__field_type_error');
    formEditNameError.classList.remove('input-error_active');
    formEditNameError.textContent = '';
  };
  
  const isValid = (formPopup, formEditName) => {
    if (!formEditName.validity.valid) {
      showInputError(formPopup, formEditName, formEditName.validationMessage);
    } else {
      hideInputError(formPopup, formEditName);
    }
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('form__button_inactive');
    } else {
      buttonElement.classList.remove('form__button_inactive');
    }
  };
  
  const setEventListeners = (formPopup) => {
    const buttonElement = formPopup.querySelector('.form__button');
    const inputList = Array.from(formPopup.querySelectorAll('.form__field'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        toggleButtonState(inputList, buttonElement);
        isValid(formPopup, inputElement);
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
  
  enableValidation();