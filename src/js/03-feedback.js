import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(getFormData, 500));

populateForm();

function getFormData() {
  const formData = {
    email: input.value,
    message: textarea.value,
  };
  const stringData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: input.value, message: textarea.value });
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (parsedData) {
    textarea.value = parsedData.message || '';
    input.value = parsedData.email || '';
  }
}
