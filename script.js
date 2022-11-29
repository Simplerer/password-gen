// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";  //These set variables for different parameters to be included
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var bigletters = letters.toUpperCase();
  var nums = "1234567890"

  // YOUR CODE GOES HERE
  var isUppercase = confirm("Include uppercase letters in this password?");  //confirm() broswer issues confirmation message once button is activated
  var isLowercase = confirm("Include uppercase letters in this password?");
  var isSpecial = confirm("Include special characters in this password?");
  var isNumber = confirm("Include numbers in this password?");

  if (isSpecial) {
    console.log(characters)
  }
  if (isLowercase) {
    console.log(letters)
  }
  if (isUppercase) {
    console.log(bigletters)  //if log true, which the confirm achieves, then run console.log of that associated variable
  }
  if (isNumber) {
    console.log(nums)
  }


//Grab random letters
  return 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
