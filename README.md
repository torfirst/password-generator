# Password Generator

## Description

I was provided with a prebuilt HTML page and a script.js file with some starter code, and was then tasked to build a password generator. The password generator allows a user to choose between different parameters to generate a random password. 

I'm not yet familiar with the capabilities of JS, so I really had to think differently than I normally do. I tend to overthink and overcomplicate what needs to be done, only to realize that the solution is much simpler than what I first thought it to be. 

## Installation

Access the password generator [here](https://torfirst.github.io/password-generator/). A web browser is required to access the password generator. 

## Usage

Go to https://torfirst.github.io/password-generator/ to view the password generator. To begin, click on "Generate Password." If non-numerical characters are entered in the first prompt, you will be asked again to enter a number that's between 8 and 128 characters. 

![This is what it looks like if you enter non-numerical characters in the first prompt](/assets/images/try%20again%20prompt.png)

## Credits

Lines 62 to the end is starter code that was provided for this assignment. Used the global variables and getPasswordChoices function (lines 1-26) that our teacher, Farish Kashefinejad, demonstrated/provided to us during office hours. I also received some guidance from a BCS tutor, David Elutilo, to set up the character bank which I'd need for the generatePassword function (lines 28-30 and 37-51). 

I used [this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) to ensure that only numbers were being passed for the first prompt. I also used [this link](https://www.kirupa.com/html5/picking_random_item_from_array.htm]) to figure out how to pick a random array value in the generateFunction for loop.

## License

License located in the repo. 