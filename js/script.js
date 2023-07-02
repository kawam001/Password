// Assignment Code
var generateBtn = document.querySelector("#generate");
/* 



*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


/*



*/

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let specialCharacters = "!@#$%^&*()_+";
  let numerics = "0123456789"

  var passwordLength;

  var upperCasePrompt;
  var lowerCasePrompt;
  var specialCharsPrompt;
  var numericsPrompt;

  var allCasesRaw;

  /* initialize prompted variables */


  passwordLength = 0;
  upperCasePrompt, lowerCasePrompt, specialCharsPrompt, numericsPrompt = " ";



  generatePassword = function() {

    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(prompt("Enter the desired length of your password - between 8 and 128 characters"));
    }

    /* Though users are required to enter 'y' or 'n', some users may test the module by entering 'yes' or no.
        All cases are converted to lowercase for ease of processing.
    */

    while (upperCasePrompt !== "y" && upperCasePrompt !== "n") 
       {
        upperCasePrompt = prompt("Do you want UPPERCASE letters in your password (Enter \"y\" for \"Yes\" or \"n\" for \"No\"" )
        upperCasePrompt = upperCasePrompt.trim().toLowerCase()

        if (upperCasePrompt === "yes") {
          upperCasePrompt = "y";
       }
       if (upperCasePrompt === "no") {
         upperCasePrompt = "n";
      }
        console.log(upperCasePrompt);

    }

    while (lowerCasePrompt !== "y" && lowerCasePrompt!== "n") 
    {
        lowerCasePrompt = prompt("Do you want lowercase letters in your password (Enter \"y\" for \"Yes\" or \"n\" for \"No\"" )
        lowerCasePrompt = lowerCasePrompt.trim().toLowerCase()

        if (lowerCasePrompt === "yes") {
           lowerCasePrompt = "y";
        }
        if (lowerCasePrompt === "no") {
          lowerCasePrompt = "n";
       }
        console.log(lowerCasePrompt);

    }

        while (specialCharsPrompt !== "y" && specialCharsPrompt!== "n") 
    {
      specialCharsPrompt = prompt("Do you want Special Characters in your password (Enter \"y\" for \"Yes\" or \"n\" for \"No\"" )
      specialCharsPrompt = specialCharsPrompt.trim().toLowerCase()

     if (specialCharsPrompt === "yes") {

        specialCharsPrompt = "y";
     }
     if (specialCharsPrompt === "no") {
         specialCharsPrompt = "n";
    }
        console.log(specialCharsPrompt);

    }

    while (numericsPrompt !== "y" && numericsPrompt!== "n") 
    {
      numericsPrompt = prompt("Do you want Numbers in your password (Enter \"y\" for \"Yes\" or \"n\" for \"No\"" )
      numericsPrompt = numericsPrompt.trim().toLowerCase()


   if (numericsPrompt === "yes") {
        numericsPrompt = "y";
     }
    if (numericsPrompt === "no") {
        numericsPrompt = "n";
    } 
        console.log(numericsPrompt);

    }

    /* Assemble raw data according to prompted selections */

    allCasesRaw = '';

    if (upperCasePrompt === "y") {

      allCasesRaw = allCasesRaw + upperCase;
 
    } 
    if (lowerCasePrompt === "y") {

      allCasesRaw = allCasesRaw + lowerCase;
 
    } 
    if (specialCharsPrompt === "y") {

      allCasesRaw = allCasesRaw + specialCharacters;
 
    } 
    if (numericsPrompt === "y") {

      allCasesRaw = allCasesRaw + numerics;
 
    }
    
    /* 'console.log' are written for debugging */

    console.log ("upperCase = " + upperCasePrompt +" lowerCase = " + lowerCasePrompt +" specialCharacters = " + specialCharsPrompt + " numerics = " + numericsPrompt);
    console.log ("Raw characters = " + allCasesRaw);

    /* Assembled raw data are converted to array */

    let allCasesArray = allCasesRaw.split("");

    console.log ("Array characters = " + allCasesArray + "  **  Length of Array " + allCasesArray.length);



    let finalPasswordArray = [];

    console.log(" Desired Password Length = " + passwordLength);

    for (let finalPasswordIndex = 0; finalPasswordIndex < passwordLength; finalPasswordIndex++) {

      //  a character is generated from the array of promted selections data

      var LastChar = allCasesArray[Math.floor(Math.random() * allCasesArray.length)];
      finalPasswordArray.push(LastChar);
    }
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(finalPasswordArray.join(''));


    console.log(finalPasswordArray);


    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
    

    console.log(LastChar);
    if (upperCasePrompt === "n" && lowerCasePrompt === "n" && specialCharsPrompt === "n" && numericsPrompt === "n") {

      return ("No Password Generated - User did not select any password criteria");
 
      } 
      else {

      return (finalPasswordArray.join(''));
      }
  

  


  }

