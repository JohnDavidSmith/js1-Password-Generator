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


function generatePassword() {
// Prompt user for password criteria
let passwordLength = prompt("How many characters would you like your password to be? (Choose a length between 8 and 128)");
let includeLowercase = confirm("Do you want to include lowercase characters?");
let includeUppercase = confirm("Do you want to include uppercase characters?");
let includeNumbers = confirm("Do you want to include numeric characters?");
let includeSpecial = confirm("Do you want to include special characters?");

// Validate user input
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please choose a length between 8 and 128 characters.");
  return null;
} else if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
  alert("Please select at least one character type to include in your password.");
  return null;
} else {
  // Making new password based on user criteria
  let passwordSet = "";
  if (includeLowercase) {
    passwordSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    passwordSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    passwordSet += "0123456789";
  }
  if (includeSpecial) {
    passwordSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  
  // Display new password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
  }
  return password;
}
}

  









