// 01 - Comment Your JavaScript Code

// This is an in-line comment.

/* This is a
multi-line comment */

// 02 - Declare JavaScript Variables

// JavaScript provides eight different data types which are undefined, null, boolean, string, 
// symbol, bigint, number, and object.

// Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or 
// start with a number.

// You can declare variables using the var, let, or const keywords. 

// var firstName = 'John';
// var age = 30;
// var isEmployed = true;

// let lastName = 'Doe';
// let height = 180;
// let isStudent = false;

// const PI = 3.14;
// const MAX_VALUE = 100;

// Note that var has function scope, while let and const have block scope. Additionally, var v
// ariables can be reassigned and hoisted (moved to the top of their scope), while let and const 
// variables are block-scoped and cannot be redeclared in the same scope.

// 03 - Storing Values with the Assignment Operator

// you can store a value in a variable with the assignment operator (=).
// myVariable = 5;
// If there are any calculations to the right of the = operator, those are performed before the 
// value is assigned to the variable on the left of the operator.

// 04 - Assigning the Value of One Variable to Another

// After a value is assigned to a variable using the assignment operator, you can assign the value 
// of that variable to another variable using the assignment operator.

//     var myVar;
//     myVar = 5;
//     var myNum;
//     myNum = myVar;

// 05 - Initializing Variables with the Assignment Operator

// It is common to initialize a variable to an initial value in the same line as it is declared.
// var myVar = 0;

// 06 - Declare String Variables

// You can declare a string variable like this:
//      var myName = "your name";
// "your name" is called a string literal. A string literal, or string, is a series of zero or more 
// characters enclosed in single or double quotes.

// 07 - Understanding Uninitialized Variables

// When JavaScript variables are declared, they have an initial value of undefined. If you do a 
// mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
// If you concatenate a string with an undefined variable, you will get a string of undefined.

// 08 - Understanding Case Sensitivity in Variables

// In JavaScript all variables and function names are case sensitive. This means that capitalization 
// matters.MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables 
// with the same name but different casing. It is strongly recommended that for the sake of clarity, 
// you do not use this language feature.
// Best Practice
// Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the 
// first word in lowercase and the first letter of each subsequent word is capitalized.

// 09 - Explore Differences Between the var and let Keywords

// One of the biggest problems with declaring variables with the var keyword is that you can easily 
// overwrite variable declarations. 
//     var camper = "James";
//     var camper = "David";
//     console.log(camper); logs "David";
// A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential 
// issue with the var keyword. 
// If you replace var with let in the code above, it results in an error:
//     let camper = "James";
//     let camper = "David";
// The error can be seen in your browser console.
// So unlike var, when you use let, a variable with the same name can only be declared once.

// 10 - Declare a Read-Only Variable with the const Keyword

// const has all the awesome features that let has, with the added bonus that variables declared using 
// const are read-only. They are a constant value, which means that once a variable is assigned with 
// const, it cannot be reassigned:
//         const FAV_PET = "Cats";
//         FAV_PET = "Dogs";
// The console will display an error due to reassigning the value of FAV_PET.
// You should always name variables you don't want to reassign using the const keyword. This helps when 
// you accidentally attempt to reassign a variable that is meant to stay constant.
// It is common for developers to use uppercase variable identifiers for immutable values and 
// lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, 
// arrays, and immutable and mutable values in later challenges. 

// 11 - Add Two Numbers with JavaScript

// Number is a data type in JavaScript which represents numeric data.
// const myVar = 5 + 10;
// myVar now has the value 15.

// 12 - Subtract One Number from Another with JavaScript

// JavaScript uses the - symbol for subtraction.
// const myVar = 12 - 6;
// myVar would have the value 6.

// 13 - Multiply Two Numbers with JavaScript

// JavaScript uses the * symbol for multiplication of two numbers.
// const myVar = 13 * 13;
// myVar would have the value 169.

// 14 - Divide One Number by Another with JavaScript

// JavaScript uses the / symbol for division.
// const myVar = 16 / 2;
// myVar now has the value 8.

// 15 - Increment a Number with JavaScript

// You can easily increment or add one to a variable with the ++ operator.
// i++;
// is the equivalent of
// i = i + 1;
// Note: The entire line becomes i++;, eliminating the need for the equal sign.

// 16 - Decrement a Number with JavaScript

// You can easily decrement or decrease a variable by one with the -- operator.
// i--;
// is the equivalent of
// i = i - 1;
// Note: The entire line becomes i--;, eliminating the need for the equal sign.

// 17 - Create Decimal Numbers with JavaScript

// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as 
// floating point numbers or floats.
// Note: when you compute numbers, they are computed with finite precision. Operations using 
// floating points may lead to different results than the desired outcome.
// const ourDecimal = 5.7;

// 18 - Multiply Two Decimals with JavaScript

// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
// Let's multiply two decimals together to get their product.
// const product = 2.0 * 2.5;

// 19 - Divide One Decimal by Another with JavaScript

// Now let's divide one decimal by another.
// const quotient = 4.4 / 2.0;

// 20 - Finding a Remainder in JavaScript

// The remainder operator % gives the remainder of the division of two numbers.
//     5 % 2 = 1
//     5 / 2 = 2 remainder 1
// USAGE: In mathematics, a number can be checked to be even or odd by checking the remainder of the division 
// of the number by 2. Even numbers have a remainder of 0, while odd numbers a remainder of 1.
//     17 % 2 = 1
//     48 % 2 = 0
// Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is 
// very similar to modulus, but does not work properly with negative numbers.

// 21 - Compound Assignment With Augmented Addition

// In programming, it is common to use assignments to modify the contents of a variable. Remember that 
// everything to the right of the equals sign is evaluated first, so we can say:
//     myVar = myVar + 5;
// to add 5 to myVar. Since this is such a common pattern, there are operators which do both a 
// mathematical operation and assignment in one step.

// One such operator is the += operator.
//     let myVar = 1;
//     myVar += 5;
//     console.log(myVar);
// 6 would be displayed in the console.

// 22 - Compound Assignment With Augmented Subtraction

// Like the += operator, -= subtracts a number from a variable.
//     myVar = myVar - 5;
// will subtract 5 from myVar. This can be rewritten as:
//     myVar -= 5;

// 23 - Compound Assignment With Augmented Multiplication

// The *= operator multiplies a variable by a number.
//     myVar = myVar * 5;
// will multiply myVar by 5. This can be rewritten as:
//     myVar *= 5;

// 24 - Compound Assignment With Augmented Division

// The /= operator divides a variable by another number.
//     myVar = myVar / 5;
// Will divide myVar by 5. This can be rewritten as:
//     myVar /= 5;

// 25 - Escaping Literal Quotes in Strings

// When you are defining a string you must start and end with a single or double quote. What happens 
// when you need a literal quote: " or ' inside of your string?
// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a 
// backslash (\) in front of the quote.
//     const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
// This signals to JavaScript that the following quote is not the end of the string, but should 
// instead appear inside the string. So if you were to print this to the console, you would get:
//     Alan said, "Peter is learning JavaScript".
// Solution:   const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 26 - Quoting Strings with Single Quotes

// String values in JavaScript may be written with single or double quotes, as long as you start and 
// end with the same type of quote. Unlike some other programming languages, single and double quotes 
// work the same in JavaScript.
//     const doubleQuoteStr = "This is a string"; 
//     const singleQuoteStr = 'This is also a string';
// The reason why you might want to use one type of quote over the other is if you want to use both 
// in a string. This might happen if you want to save a conversation in a string and have the 
// conversation in quotes. Another use for it would be saving an <a> tag with various attributes in 
// quotes, all within a string.
//     const conversation = 'Finn exclaims to Jake, "Algebraic!"';
// However, this becomes a problem if you need to use the outermost quotes within it. Remember, a 
// string has the same kind of quote at the beginning and end. But if you have that same quote 
// somewhere in the middle, the string will stop early and throw an error.
//     const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//     const badStr = 'Finn responds, "Let's go!"';
// Here badStr will throw an error.
// In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.
// Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.
// PROBLEM: const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
// SOLUTION: const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27 -  Escape Sequences in Strings

// Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you 
// to use characters you may not otherwise be able to use in a string.

// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	backspace
// \f	form feed
// Note that the backslash itself must be escaped in order to display as a backslash.

// PROBLEM: Assign the following three lines of text into the single variable myStr using escape 
// sequences.
// FirstLine
//     \SecondLine
// ThirdLine
// SOLUTION: const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// 28 - Concatenating Strings with Plus Operator

// When the + operator is used with a String value, it is called the concatenation operator. You can 
// build a new string out of other strings by concatenating them together.

// Example
// 'My name is Alan,' + ' I concatenate.'
// Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll 
// need to add them yourself.

// Example:
// const ourStr = "I come first. " + "I come second.";
// The string I come first. I come second. would be displayed in the console.

// PROBLEM: Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to 
// include a space between the two strings.
// SOLUTION: const myStr = "This is the start. " + "This is the end.";

// 29 - Concatenating Strings with the Plus Equals Operator

// We can also use the += operator to concatenate a string onto the end of an existing string variable. 
// This can be very helpful to break a long string over several lines.
// Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll 
// need to add them yourself.

// Example:
// let ourStr = "I come first. ";
// ourStr += "I come second.";
// ourStr now has a value of the string I come first. I come second..

// PROBLEM: Build myStr over several lines by concatenating these two strings: 
// This is the first sentence. and This is the second sentence. 
// Using the += operator. Use the += operator similar to how it is shown in the example and be sure to 
// include a space between the two strings. Start by assigning the first string to myStr, then add on 
// the second string.
// SOLUTION: 
// let myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";

// 30 - Constructing Strings with Variables

// Sometimes you will need to build a string. By using the concatenation operator (+), you can insert 
// one or more variables into a string you're building.

// Example:
// const ourName = "freeCodeCamp";
// const ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?.

// PROBLEM: Set myName to a string equal to your name and build myStr with myName between the strings 
// My name is and and I am well!
// SOLUTION: 
// const myName = "FEDE";
// const myStr = "My name is " + myName + " and I am well!";

//31 - Appending Variables to Strings

// Just as we can build a string over multiple lines out of string literals, we can also append 
// variables to a string using the plus equals (+=) operator.

// Example:
// const anAdjective = "awesome!";
// let ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
// ourStr would have the value freeCodeCamp is awesome!.

// PROBLEM: Set someAdjective to a string of at least 3 characters and append it to myStr using 
// the += operator.
// SOLUTION: 
// const someAdjective = "genius";
// let myStr = "Iam a ";
// myStr += someAdjective;

// 32 - Find the Length of a String

// You can find the length of a String value by writing .length after the string variable or string 
// literal.
// console.log("Alan Peter".length);
// The value 10 would be displayed in the console. Note that the space character between "Alan" and 
// "Peter" is also counted.
// For example, if we created a variable const firstName = "Ada", we could find out how long the 
// string Ada is by using the firstName.length property.

// PROBLEM: Use the .length property to set lastNameLength to the number of characters in lastName.
// SOLUTION:
// let lastNameLength = 0;
// const lastName = "Lovelace";
// lastNameLength = lastName.length;

// 33 - Use Bracket Notation to Find the First Character in a String

// Bracket notation is a way to get a character at a specific index within a string.
// Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They 
// start at 0. This is referred to as Zero-based indexing.
// For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", 
// you can get the value of the first letter of the string by using firstName[0].

// Example:
// const firstName = "Charles";
// const firstLetter = firstName[0];
// firstLetter would have a value of the string C.

// PROBLEM: Use bracket notation to find the first character in the lastName variable and assign it to 
// firstLetterOfLastName.

// SOLUTION:
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";
// firstLetterOfLastName = lastName[0];

// 34 - Understand String Immutability

// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// Example:
// The following code will produce an error because the letter B in the string Bob cannot 
// be changed to the letter J:
//     let myStr = "Bob";
//     myStr[0] = "J";
// Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would 
// be to assign it with a new value, like this:
//     let myStr = "Bob";
//     myStr = "Job";

// PROBLEM: Correct the assignment to myStr so it contains the string value of Hello World using the 
// approach shown in the example above.

// SOLUTION:
//     let myStr = "Jello World";
//     myStr = "Hello World";

// 35 - 

console.log(myStr);