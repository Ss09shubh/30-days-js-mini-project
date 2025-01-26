const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    // Username Validation
    if (usernameValue === "") {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Email Validation
    if (emailValue === "") {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid Email Address');
    } else {
        setSuccess(email);
    }

    // Password Validation
    if (passwordValue === "") {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    // Confirm Password Validation
    if (cPasswordValue === "") {
        setError(cPassword, 'Please confirm your password');
    } else if (cPasswordValue !== passwordValue) {
        setError(cPassword, "Passwords don't match");
    } else {
        setSuccess(cPassword);
    }
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(e) {
    var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return reg.test(e);
}



