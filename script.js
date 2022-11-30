// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";  //These set variables for different parameters to be included
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var bigletters = letters.toUpperCase();
  var nums = "1234567890"
  var grabBag = ""
  var mixer = Math.floor(Math.random() * grabBag.length);
  var pLength = 0

  // YOUR CODE GOES HERE
  
  var charLength = prompt("How many characters? Pick between 8 and 128!")


  if (charLength >= 8 && charLength <= 128) {
    
  var isUppercase = confirm("Include uppercase letters in this password?");  //confirm() broswer issues confirmation message once button is activated
  var isLowercase = confirm("Include lowercase letters in this password?");
  var isSpecial = confirm("Include special characters in this password?");
  var isNumber = confirm("Include numbers in this password?");

  if (isSpecial) {
    grabBag = characters + grabBag
  }
  if (isLowercase) {
    grabBag = letters + grabBag
  }
  if (isUppercase) {
    grabBag = bigletters + grabBag
  }
  if (isNumber) {
    grabBag = nums + grabBag
  }
    console.log(grabBag)

  

//Grab random letters
  return mixer
} 
else {
  alert("Pick between 8 and 128 please!")
  generatePassword()
}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button                   
  //  Up top generateBtn is established as where in HTML is affected, in this instance the generate password button. Then using aEList method, on clicking that item, the function writePassword is initiated.
generateBtn.addEventListener("click", writePassword);
