// regex patterns for username
// username pattern: 3 characters + @ + 3 characters + . + 2-3 characters
const userNamePattern = /^[0-9a-zA-Z]{3}@[0-9a-zA-Z]{3}\.[0-9a-zA-Z]{2,3}$/;
// regex patterns for password
// password pattern: minimum 1 lowercase, 1 uppercase, 1 number, 1 special character and minimum 8 characters
const lowerCaseLetters = /[a-z]/;
const upperCaseLetters = /[A-Z]/;
const numbers = /[0-9]/;
const specialChars = /[`!@#$£%^&*()_+\-=\[\]{};':"\\|,.<>\/?~äöü]/;

// passwordStrength
const passwordStrength = [0, 0, 0, 0, 0];

// Check form for valid username and password
function checkForm() {
  // get username, password and loginbutton from form
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let loginButton = document.getElementById("loginButton");

  // if username and password are valid, enable login button else disable it
  if (userName.match(userNamePattern) && password.length >= 8) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}


// Check password for lowercase, uppercase, number and length
function checkPassword() {
  const password = document.getElementById("password").value;

  // check for lowercase
  if (password.match(lowerCaseLetters)) {
    passwordStrength[0] = 1;
  } else {
    passwordStrength[0] = 0;
  }

  // check for uppercase
  if (password.match(upperCaseLetters)) {
    passwordStrength[1] = 1;
  } else {
    passwordStrength[1] = 0;
  }

  // check for number
  if (password.match(numbers)) {
    passwordStrength[2] = 1;
  } else {
    passwordStrength[2] = 0;
  }

  // check for special character
  if (password.match(specialChars)) {
    passwordStrength[3] = 1;
  } else {
    passwordStrength[3] = 0;
  }

  // check for length
  if (password.length >= 12) {
    passwordStrength[4] = 1;
  } else {
    passwordStrength[4] = 0;
  }
}

// Check passwordStrength an update the progressBar
function showPasswordValidation() {
  let passwordValidationBar = document.getElementById(
    "passwordValidationProgress"
  );
  let passwordStrengthText = document.getElementById("passwordStrengthText");

  let passwordStrengthCount = 0;

  for (let i = 0; i < passwordStrength.length; i++) {
    if (passwordStrength[i]) {
      passwordStrengthCount++;
    }
  }

  if (passwordStrengthCount == 1) {
    passwordValidationBar.value = 20;
    passwordValidationBar.style.accentColor = "red";
    passwordStrengthText.innerHTML = "schlecht";
    passwordStrengthText.style.color = "red";
  } else if (passwordStrengthCount == 2) {
    passwordValidationBar.value = 40;
    passwordValidationBar.style.accentColor = "red";
    passwordStrengthText.innerHTML = "schlecht";
    passwordStrengthText.style.color = "red";
  } else if (passwordStrengthCount == 3) {
    passwordValidationBar.value = 60;
    passwordValidationBar.style.accentColor = "#cf6405";
    passwordStrengthText.innerHTML = "mässig";
    passwordStrengthText.style.color = "#cf6405";
  } else if (passwordStrengthCount == 4) {
    passwordValidationBar.value = 80;
    passwordValidationBar.style.accentColor = "green";
    passwordStrengthText.innerHTML = "stark";
    passwordStrengthText.style.color = "green";
  } else if (passwordStrengthCount == 5) {
    passwordValidationBar.value = 100;
    passwordValidationBar.style.accentColor = "green";
    passwordStrengthText.innerHTML = "stark";
    passwordStrengthText.style.color = "green";
  } else {
    passwordValidationBar.value = 0;
    passwordValidationBar.style.accentColor = "red";
    passwordStrengthText.innerHTML = "schlecht";
    passwordStrengthText.style.color = "red";
  }
}
