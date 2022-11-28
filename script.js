// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";  //These set variables for different parameters to be included
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var bigletters = letters.toUpperCase();
  var nums = "1234567890"

  // YOUR CODE GOES HERE
  var isUppercase = confirm("Would you like to use uppercase?");  //confirm() broswer issues confirmation message once button is activated
  var isLowercase = false;
  var isSpecial = false;
  var isNumber = false;

  if (isUppercase) {
    console.log('uppercase')
  }

//Grab random letters
  return ";"

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
