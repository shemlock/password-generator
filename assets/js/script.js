// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
function getPasswordOptions() {
    // Prompt the user for how long they want the password
    // Convert their input to an int
    // Alert for if they choose an incorrect character length
    var length = parseInt(prompt("How long would you like your password to be. (Please choose between 8 to 128 characters)"));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters.Please try again.");
      return null;
    }
  
    // Create variables for each character type
    // Store the users character preference
    var hasSpecialCharacters = confirm("Would you like your password to include special characters? Click OK for YES. Click CANCEL for NO.");
    var hasNumericCharacters = confirm("Would you like your password to include numbers? Click OK for YES. Click CANCEL for NO.");
    var hasLowerCasedCharacters = confirm("Would you like your password to include lowercase characters. Click OK for YES. Click CANCEL for NO.");
    var hasUpperCasedCharacters = confirm("Would you like your password to include uppercase characters. Click OK for YES. Click CANCEL for NO.");
  
    // Alert for if the user selects no character types
    if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
      alert("Please select at least one character type!");
      return null;
    }
  
    // Return an object containing the users password options
    return {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  }

  // Function for getting a random element from an array
  // Use math.floor the make the final number be rounded down to a whole number
  // Multiply math.random by the length of the array to make the range be 0 to the size of the array 
  // Return the array element at the random index. 
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  

// Function to generate password with user input
// Create a variable called options and store the getPasswordOptions function in it
// If there's no options, return an empty string
function generatePassword() {
    var options = getPasswordOptions();
    if (!options) return '';
  
    // Create 2 variables for possible & guaranteed characters
    // Set them as empty arrays
    var possibleCharacters = [];
    var guaranteedCharacters = [];
  
    // Check if the password should have special characters
    // If yes, concatenate them to the possibleCharacters array
    // Then push a random one to the guranteedCharacters array
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
  
    // Check if the password should have numbers
    // If yes, concatenate them to the possibleCharacters array
    // Then push a random one to the guranteedCharacters array
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
   
    // Check if the password should have lower case characters
    // If yes, concatenate them to the possibleCharacters array
    // Then push a random one to the guranteedCharacters array
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    
    // Check if the password should have upper case characters
    // If yes, concatenate them to the possibleCharacters array
    // Then push a random one to the guranteedCharacters array
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
  
    // Create a variable called random password and store a empty string in it
    var randomPassword = '';
    // Use a for loop to iterate over the password length
    // If there's still guranteed characters to add, add them the random password variable
    // Otherwise add random characters from the possibleCharacters array
    for (var i = 0; i < options.length; i++) {
      if (i < guaranteedCharacters.length) {
        randomPassword += guaranteedCharacters[i];
      } else {
        randomPassword += getRandom(possibleCharacters);
      }
    }
    
    // return random password
    return randomPassword;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  