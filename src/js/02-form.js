const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
}

form.addEventListener('input', event => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    const data = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
