//My variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
//My Code
function generatePassword() {

  //The prompt windows
  var passwordLength = window.prompt("How many characters would you like your password? Choose a number betweeen 8 and 128");
  console.log(passwordLength);
 if (!passwordLength) {
   alert("Please select a number between 8 and 128");
 } else if (passwordLength < 8 || passwordLength > 128) {
   passwordLength = window.prompt("You must choose a number between 8 and 128");
 } else { 
   var confirmLower = window.confirm("Click OK if you would like lower case letters");
   console.log(confirmLower);
   var confirmUpper = window.confirm("Click OK if you would like upper case letters");
   console.log(confirmUpper);
   var confirmNumber = window.confirm("Click OK if you would like any numbers");
   console.log(confirmNumber);
   var confirmSpecial = window.confirm("Click OK if you would like any special characters");
   console.log(confirmSpecial);
 };
 

 //Gathers if you want numbers, letters and special characters
 if (!confirmLower && !confirmNumber && !confirmSpecial && !confirmUpper) {
   window.alert("You must select at least 1")
 }
 else if (confirmLower && confirmNumber && confirmSpecial && confirmUpper) {
   var userchoice = lowerCase.concat(special, numbers, upperCase)
 } 
 else if (confirmLower && confirmNumber && confirmSpecial) {
   userchoice = lowerCase.concat(special, numbers)
 } 
 else if (confirmLower && confirmNumber && confirmUpper) {
   userchoice = lowerCase.concat(numbers, upperCase)
 }
 else if (confirmLower && confirmSpecial && confirmUpper) {
   userchoice = lowerCase.concat(special, upperCase)
 }
 else if (confirmNumber && confirmSpecial && confirmUpper) {
   userchoice = special.concat(numbers, upperCase)
 }
 else if (confirmLower && confirmNumber) {
   userchoice = lowerCase.concat(numbers)
 }
 else if (confirmLower && confirmUpper) {
   var userchoice = lowerCase.concat(upperCase)
 }
 else if (confirmLower && confirmSpecial) {
   var userchoice = lowerCase.concat(special)
 }
 else if (confirmNumber && confirmSpecial) {
   var userchoice = numbers.concat(special)
 }
 else if (confirmSpecial && confirmUpper) {
   var userchoice = special.concat(upperCase)
 }
 else if (confirmNumber && confirmUpper) {
   var userchoice = numbers.concat(upperCase)
 }
 else if (confirmLower) {
   var userchoice = lowerCase
 }
 else if (confirmNumber) {
   var userchoice = numbers
 }
 else if (confirmSpecial) {
   var userchoice = special
 }
 else if (confirmUpper) {
   var userchoice = upperCase
 };
console.log(userchoice);
 //Created the random password
 var randomPassword = ""
      
 for (var i = 0; i < passwordLength; i++) {
   randomPassword = randomPassword + userchoice[Math.floor(Math.random() * userchoice.length)];
 } 
 console.log(randomPassword);
 return randomPassword;

 };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


