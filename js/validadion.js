import {stringLengthMax, stringLengthMin} from './util.js';
const form = document.querySelector('.img-upload__form');
const description = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

function commentCheck(text) {
  return (stringLengthMin(text, 19) && stringLengthMax(text, 140));
}

pristine.addValidator(description, commentCheck(), 'Comment length shouldn\'t be less than 20 or more than 140 symbols');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
