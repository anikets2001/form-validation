let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
    nameError.innerHTML = "Write your full name (first and last)";
    return false;
  }
  nameError.innerHTML = '<span style="color: green;">Valid</span>';
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value.trim();

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.innerHTML = "Enter a valid 10-digit phone number";
    return false;
  }
  phoneError.innerHTML = '<span style="color: green;">Valid</span>';
  return true;
}

function validateEmail() {
  const email = document.getElementById("contact-email").value.trim();

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerHTML = "Enter a valid email address";
    return false;
  }
  emailError.innerHTML = '<span style="color: green;">Valid</span>';
  return true;
}

function validateMessage() {
  const message = document.getElementById("contact-message").value.trim();

  if (message.length === 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }
  if (message.length < 20) {
    messageError.innerHTML = "Message should be at least 20 characters";
    return false;
  }
  messageError.innerHTML = '<span style="color: green;">Valid</span>';
  return true;
}

function validateForm(e) {
  e.preventDefault();
  const isNameValid = validateName();
  const isPhoneValid = validatePhone();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
    submitError.innerHTML = "Please fix the errors to submit the form";
    return false;
  }

  submitError.innerHTML =
    '<span style="color: green;">Form submitted successfully!</span>';
  return true;
}
