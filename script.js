// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";  //These set variables for different parameters to be included
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var bigletters = letters.toUpperCase();
  var nums = "1234567890"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
