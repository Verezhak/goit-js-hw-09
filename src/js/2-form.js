

const formData = {
    email: "",
    message: "",
}

const formContainer = document.querySelector('.form-container');

formContainer.innerHTML = createFormMarkup();

function createFormMarkup() {
    return `
  <form class="feedback-form" autocomplete="off">
    <label>
        Email
        <input type="email" name="email" autofocus />
    </label>
    <label>
        Message
        <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
</form>
    `;
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleFormInput);

function handleFormInput(event) {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedFormData) {
        formData.email = savedFormData.email || "";
        formData.message = savedFormData.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
}




