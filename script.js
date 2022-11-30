// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
  var characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";  //These set variables for password
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var bigletters = letters.toUpperCase();
  var nums = "1234567890"
  var mixer = "";
  var grabBag = "";
 

  
  var charLength = prompt("How many characters? Pick between 8 and 128!");

  if (charLength >= 8 && charLength <= 128) {
    
  var isUppercase = confirm("Include uppercase letters in this password?");  //confirm() broswer issues confirmation message once button is activated
  var isLowercase = confirm("Include lowercase letters in this password?");
  var isSpecial = confirm("Include special characters in this password?");
  var isNumber = confirm("Include numbers in this password?");
  
  if (!isUppercase && !isLowercase && !isSpecial && !isNumber) {
    alert("You need to pick something!")
    return generatePassword();
  }

  
  if (isSpecial) {
    grabBag = grabBag.concat(characters);
  }
  if (isLowercase) {
    grabBag = grabBag.concat(letters);
  }
  if (isUppercase) {
    grabBag = grabBag.concat(bigletters);
  }
  if (isNumber) {
    grabBag = grabBag.concat(nums);
  }
    


//Grab random letters


for (i = 0; i <= charLength; i++) {                                  // the random index
  var randomIndex = Math.floor(Math.random() * grabBag.length);      // grabbag length is what was accepted
    mixer += grabBag[randomIndex];                                   // random 0-.99 * length || floor makes a whole number
}                                                                    // this becomes the random index that grabs from the grabbag, number of times untill i=0

  
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
