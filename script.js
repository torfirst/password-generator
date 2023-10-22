var specialChars = ['@', '%', '+', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCased = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCased = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getPasswordChoices() {
  var hasSpecialChars = confirm('Click ok to confirm special characters in your password.');
  var hasUpperChars = confirm('Click ok to confirm uppercase characters in your password.');
  var hasLowerChars = confirm('Click ok to confirm lowercase characters in your password.');
  var hasNumericChars = confirm('Click ok to confirm numeric characters in your password.');

  if (hasSpecialChars === false && hasUpperChars === false && hasLowerChars === false && hasNumericChars === false) {
    alert('Must select one option.');
    return;
  }
  // assigning the above local variables to keys within an object
  var options = {
    hasLowerChars: hasLowerChars,
    hasNumericChars: hasNumericChars,
    hasUpperChars: hasUpperChars,
    hasSpecialChars: hasSpecialChars,
  };
  return options;
}

function generatePassword() {
  var newPassword = "";
  var passwordLength = prompt("How many characters would you like your password to be?");

  while (!Number.isInteger(Number(passwordLength)) || (passwordLength < 8 || passwordLength > 128)) {
    passwordLength = prompt("Password length must be a number between 8 - 128. Please enter a new one.");
  };

  var passwordOptions = getPasswordChoices();
  var charBank = [];

  if (passwordOptions.hasSpecialChars) {
    charBank = charBank.concat(specialChars);
  };
  if (passwordOptions.hasNumericChars) {
    charBank = charBank.concat(numbers);
  };
  if (passwordOptions.hasLowerChars) {
    charBank = charBank.concat(lowerCased);
  };
  if (passwordOptions.hasUpperChars) {
    charBank = charBank.concat(upperCased);
  };

  for (let i = 0; i < passwordLength; i++) {
    const randomValue = Math.floor(Math.random() * charBank.length);
    let newRandomChar = charBank[randomValue];
    newPassword = newPassword.concat(newRandomChar);
  }
  console.log(newPassword);
  return newPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
