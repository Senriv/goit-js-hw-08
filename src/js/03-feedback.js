import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  userEmail: document.querySelector('.feedback-form input'),
  userMessage: document.querySelector('.feedback-form textarea'),
};

const STORAGY_KEY = 'feedback-msg';
let feedbackFormData = {
  email: '',
  message: '',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.userEmail.addEventListener('input', throttle(onUserEmailInput, 500));
refs.userMessage.addEventListener('input', throttle(onUserMessageInput, 500));

populeteForm();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(feedbackFormData);
  localStorage.removeItem(STORAGY_KEY);
}

function onUserEmailInput(event) {
  feedbackFormData.email = event.target.value;
  localStorage.setItem(STORAGY_KEY, JSON.stringify(feedbackFormData));
}

function onUserMessageInput(event) {
  feedbackFormData.message = event.target.value;
  localStorage.setItem(STORAGY_KEY, JSON.stringify(feedbackFormData));
}

function populeteForm() {
  const savedFeedbackFormData = localStorage.getItem(STORAGY_KEY);
  if (savedFeedbackFormData) {
    const parsedFeedbackFormData = JSON.parse(savedFeedbackFormData);
    feedbackFormData.email = parsedFeedbackFormData.email;
    feedbackFormData.message = parsedFeedbackFormData.message;
    refs.userEmail.value = feedbackFormData.email;
    refs.userMessage.value = feedbackFormData.message;
  }
}
