import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const textareaRef = document.querySelector('[name="message"]');
const LOCAL_FORM_DATA = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(LOCAL_FORM_DATA)) || {};

setSavedData();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
     formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_FORM_DATA, JSON.stringify(formData));
};

function setSavedData() {
    const savedValues = localStorage.getItem(LOCAL_FORM_DATA);
    if (savedValues) {
        const parsedValues = JSON.parse(savedValues);
        emailRef.value = parsedValues.email || '';
        textareaRef.value = parsedValues.message || '';
    }
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_FORM_DATA);
    formData = {};
};
