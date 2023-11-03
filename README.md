# Password Generator

The goal was to create a random password generator in java. When the button is clicked you will be prompted with questions for how long you want it and if you want lowercase, uppercase, numbers, and/or special character. They must select a number betweeen 8 and 128 for the length. When it is all selected the password should appear on the page with all the criteria selected.

## The process

### What i did
* Created arrays to store all the letters, numbers and special character
* Then I created the function generatePassword that will execute the random password
* I created prompts and confirms to decide the length and what charaters in the password
* I made an if statement for if they put in a value over 128 or under 8 it would tell them to choose between those numbers and an else if to tell them they must choose at least one character type
* Created a long if statement for when the user selects their criteria that outputs what they selected so it could be all 4 or 3 or 2 or just 1
* Created a for loop that will randomly select from the user choices that makes a random password

![The java script used to create a random password](https://github.com/nathan26036/password-generator/blob/main/Assets/Images/password-java.PNG)
  
## Installation 
The final code deployed can be found at 

## Resources
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
