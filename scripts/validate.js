const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const showInputError = (formEditProfile, formEditName, settings, errorMessage) => {
  const formEditNameError = formEditProfile.querySelector(`.${formEditName.id}-error`);
  formEditName.classList.add(settings.inputErrorClass);
  formEditNameError.classList.add(settings.ErrorClass);
  formEditNameError.textContent = errorMessage;
};

const hideInputError = (formEditProfile, formEditName, settings) => {
  const formEditNameError = formEditProfile.querySelector(`.${formEditName.id}-error`);
  formEditName.classList.remove(settings.inputErrorClass);
  formEditNameError.classList.remove(settings.ErrorClass);
  formEditNameError.textContent = '';
};

const isValid = (formEditProfile, formEditName, settings) => {
  if (!formEditName.validity.valid) {
    showInputError(formEditProfile, formEditName, settings, formEditName.validationMessage);
  } else {
    hideInputError(formEditProfile, formEditName, settings);
  }
};

const disableButton = (buttonElement, settings) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
}

const enableButton = (buttonElement, settings) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(settings.inactiveButtonClass);
}

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, settings);
  } else {
    enableButton(buttonElement, settings);
  }
};

const setEventListeners = (formEditProfile, settings) => {
  const buttonElement = formEditProfile.querySelector(settings.submitButtonSelector);
  const inputList = Array.from(formEditProfile.querySelectorAll(settings.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleButtonState(inputList, buttonElement, settings);
      isValid(formEditProfile, inputElement, settings);
    });
  });
  toggleButtonState(inputList, buttonElement, settings);
  formEditProfile.addEventListener('reset', () => {
    disableButton(buttonElement, settings)
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'input-error_active'
});