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

// 35 - Use Bracket Notation to Find the Nth Character in a String

// You can also use bracket notation to get the character at other positions within a string.
// Remember that computers start counting at 0, so the first character is actually the zeroth 
// character.

// Example:
// const firstName = "Ada";
// const secondLetterOfFirstName = firstName[1];
// secondLetterOfFirstName would have a value of the string d.

// PROBLEM:
// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable 
// using bracket notation.

// SOLUTION:
// const lastName = "Lovelace";
// const thirdLetterOfLastName = lastName[2];

// 36 - Use Bracket Notation to Find the Last Character in a String

// In order to get the last letter of a string, you can subtract one from the string's length.
// For example, if const firstName = "Ada", you can get the value of the last letter of the 
// string by using firstName[firstName.length - 1].

// Example:
// const firstName = "Ada";
// const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.

// PROBLEM:
// Use bracket notation to find the last character in the lastName variable.

// SOLUTION:
// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length - 1];

// 37 - Use Bracket Notation to Find the Nth-to-Last Character in a String

// You can use the same principle we just used to retrieve the last character in a string 
// to retrieve the Nth-to-last character.
// Example:
// You can get the value of the third-to-last letter of the const firstName = "Augusta" string 
// by using firstName[firstName.length - 3]

// const firstName = "Augusta";
// const thirdToLastLetter = firstName[firstName.length - 3];
// thirdToLastLetter would have a value of the string s.

// PROBLEM:
// Use bracket notation to find the second-to-last character in the lastName string.

// SOLUTION:
// const lastName = "Lovelace";
// const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 38 - Word Blanks

// You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. 
// You then fill in the missing pieces with words of your choice in a way that the completed 
// sentence makes sense.

// Consider this sentence:
// It was really ____, and we ____ ourselves ____.
// This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words 
// of our choice to complete it. We can then assign the completed sentence to a variable as follows:

// const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

// PROBLEM: We provide you with a noun, a verb, an adjective and an adverb. You need to 
// form a complete sentence using words of your choice, along with the words we provide.
// You will need to use the string concatenation operator + to build a new string, using the 
// provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed 
// string to the wordBlanks variable. You should not change the words assigned to the variables.

// You will also need to account for spaces in your string, so that the final sentence has spaces 
// between all the words. The result should be a complete sentence.

// SOLUTION:
// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks = "My "+ myNoun + " is " + myAdjective + " and " + myVerb + " very " + myAdverb;

// 39 - Store Multiple Values in one Variable using JavaScript Arrays

// With JavaScript array variables, we can store several pieces of data in one place.
// You start an array declaration with an opening square bracket, end it with a closing 
// square bracket, and put a comma between each entry, like this:
// const sandwich = ["peanut butter", "jelly", "bread"];

// PROBLEM: Modify the new array myArray so that it contains both a string and a number (in that order).

// SOLUTION: 
// const myArray = ["Hello", 2];

// 40 - Nest one Array within Another Array

// You can also nest arrays within other arrays, like below:
// const teams = [["Bulls", 23], ["White Sox", 45]];
// This is also called a multi-dimensional array.

// PROBLEM: Create a nested array called myArray.

// SOLUTION:
// const myArray = [[1,2,3],[4,5,6]];

// 41 - Access Array Data with Indexes

// We can access the data inside arrays using indexes.
// Array indexes are written in the same bracket notation that strings use, except that instead of 
// specifying a character, they are specifying an entry in the array. Like strings, arrays use 
// zero-based indexing, so the first element in an array has an index of 0.

// Example
// const array = [50, 60, 70];
// console.log(array[0]);
// const data = array[1];
// The console.log(array[0]) prints 50, and data has the value 60.

// PROBLEM: Create a variable called myData and set it to equal the first value of myArray using 
// bracket notation.
// const myArray = [50, 60, 70];

// SOLUTION: const myData = myArray[0];

// 42 - Modify Array Data With Indexes

// Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array 
// was declared with const.

// Example
// const ourArray = [50, 40, 30];
// ourArray[0] = 15;
// ourArray now has the value [15, 40, 30].
// Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. 
// Although JavaScript is able to process this correctly, this may confuse other programmers reading 
// your code.

// PROBLEM: Modify the data stored at index 0 of myArray to a value of 45. - 
// const myArray = [18, 64, 99];

// SOLUTION: myArray[0] = 45;

// 43 - Access Multi-Dimensional Arrays With Indexes

// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to 
// access your array, the first set of brackets refers to the entries in the outermost (the first level) 
// array, and each additional pair of brackets refers to the next level of entries inside.

// Example:

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// const subarray = arr[3];
// const nestedSubarray = arr[3][0];
// const element = arr[3][0][1];
// In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the 
// value [10, 11, 12], and element has the value 11 .

// Note: There shouldn't be any spaces between the array name and the square brackets, like 
// array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process 
// this correctly, this may confuse other programmers reading your code.

// PROBLEM: Using bracket notation select an element from myArray such that myData is equal to 8.

// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];
  
// SOLUTION: const myData = myArray[2][1];

// 44 - Manipulate Arrays With push Method

// An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.

// Examples:
// const arr1 = [1, 2, 3];
// arr1.push(4);

// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

// PROBLEM: Push ["dog", 3] onto the end of the myArray variable.
// Setup
// const myArray = [["John", 23], ["cat", 2]];

// SOLUTION: myArray.push(["dog", 3]);

// 45 - Manipulate Arrays With pop Method

// Another way to change the data in an array is with the .pop() function.
// .pop() is used to pop a value off of the end of an array. We can store this popped off value 
// by assigning it to a variable. In other words, .pop() removes the last element from an array 
// and returns that element.
// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

// Example:
// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].

// PROBLEM: Use the .pop() function to remove the last item from myArray and assign the popped off 
// value to a new variable, removedFromMyArray.
// const myArray = [["John", 23], ["cat", 2]];

// SOLUTION: const removedFromMyArray = myArray.pop();

// 46 - Manipulate Arrays With shift Method

// pop() always removes the last element of an array. What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(), except it removes the first element 
// instead of the last.

// Example:
// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value 
// to a new variable, removedFromMyArray.

// PROBLEM:
// const myArray = [["John", 23], ["dog", 3]];

// SOLUTION: const removedFromMyArray = myArray.shift();

// 47 - Manipulate Arrays With unshift Method

// Not only can you shift elements off of the beginning of an array, you can also unshift elements 
// to the beginning of an array i.e. add elements in front of the array.
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
// unshift() adds the element at the beginning of the array.

// Example:
// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would 
// have the value ["Happy", "J", "cat"].

// PROBLEM: Add ["Paul", 35] to the beginning of the myArray variable using unshift().
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// SOLUTION: myArray.unshift(["Paul", 35]);

// 48 - Shopping List

// Create a shopping list in the variable myList. The list should be a multi-dimensional array 
// containing several sub-arrays.
// The first element in each sub-array should contain a string with the name of the item. 
// The second element should be a number representing the quantity i.e.
// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.

// const myList = [];

// SOLUTION: 
// const myList = [
//     ["Chocolate Bar", 15],
//     ["Milk", 2],
//     ["Apples", 10],
//     ["Bread", 3],
//     ["Eggs", 12]
//   ];

// 49 - Write Reusable JavaScript with Functions

// In JavaScript, we can divide up our code into reusable parts called functions.
// Here's an example of a function:

// function functionName() {
//   console.log("Hello World");
// }
// You can call or invoke this function by using its name followed by parentheses, like 
// this: functionName(); Each time the function is called it will print out the message Hello World 
// on the dev console. All of the code between the curly braces will be executed every time the 
// function is called.

// PROBLEM: Create a function called reusableFunction which prints the string Hi World to the 
// dev console.
// Call the function.

// SOLUTION:
// function reusableFunction () {
//     console.log("Hi World");
// }
// reusableFunction();

// 50 - Passing Values to Functions with Arguments

// Parameters are variables that act as placeholders for the values that are to be input to a function 
// when it is called. When a function is defined, it is typically defined along with one or more 
// parameters. The actual values that are input (or "passed") into a function when it is called are 
// known as arguments.

// Example:
// Here is a function with two parameters, param1 and param2:
// function testFun(param1, param2) {
//   console.log(param1, param2);
// }
// Then we can call testFun like this: testFun("Hello", "World");. We have passed two string 
// arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 
// will equal the string World. Note that you could call testFun again with different arguments 
// and the parameters would take on the value of the new arguments.

// PROBLEM: Create a function called functionWithArgs that accepts two arguments and outputs their 
// sum to the dev console.
// Call the function with two numbers as arguments.

// SOLUTION:
// function functionWithArgs(param1, param2) {
//     console.log(param1 + param2);
// }
// functionWithArgs(4, 6);

// 51 - Return a Value from a Function with Return

// We can pass values into a function with arguments. You can use a return statement to send a value 
// back out of a function.

// Example:
// function plusThree(num) {
//   return num + 3;
// }
// const answer = plusThree(5);
// answer has the value 8.
// plusThree takes an argument for num and returns a value equal to num + 3.

// PROBLEM: Create a function timesFive that accepts one argument, multiplies it by 5, and returns 
// the new value.

// SOLUION:
// function timesFive(arg) {
//     return arg*5;
// };
// timesFive(5);

// 52 - Global Scope and Functions

// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of 
// a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
// Variables which are declared without the let or const keywords are automatically created in the 
// global scope. This can create unintended consequences elsewhere in your code or when running a 
// function again. You should always declare your variables with let or const.

// PROBLEM: 
// Using let or const, declare a global variable named myGlobal outside of any function. Initialize 
// it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// SOLUTION: 
// let myGlobal = 10;
// function fun1() {
//     oopsGlobal = 5;
// };

// The return statement is used to return a value from a function. If you don't need to return a value 
// from the function or use the function's result elsewhere in your code, then you don't need to include 
// a return statement.

// 53 - Local Scope and Functions

// Variables which are declared within a function, as well as the function parameters, have local scope. 
// That means they are only visible within that function.

// Example:
// Here is a function myTest with a local variable called loc.
// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc);
// The myTest() function call will display the string foo in the console. The console.log(loc) 
// line (outside of the myTest function) will throw an error, as loc is not defined outside of the 
// function.

// PROBLEM:The editor has two console.logs to help you see what is happening. Check the console as 
// you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the 
// tests.

// Note: The console will still display ReferenceError: myVar is not defined, but this will not 
// cause the tests to fail.

// SOLUTION: 
// function myLocalScope() {
//     let myVar = "";
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
//   console.log('outside myLocalScope', myVar);

/*
Function parameters and function arguments are related concepts in JavaScript, but they have distinct 
meanings.

Function Parameters: Function parameters are the placeholders defined in the function declaration. 
They are used to specify the input values that a function expects to receive when it is called. 
Parameters are listed inside the parentheses of the function declaration, separated by commas. They 
act as local variables within the function's scope, representing the values passed to the function 
during invocation.
Example:
function greet(name) {
  console.log("Hello, " + name + "!");
}
In the above example, name is a parameter of the greet function.

Function Arguments: Function arguments, on the other hand, are the actual values passed to a function 
when it is invoked or called. They correspond to the function parameters, filling in the values for 
the placeholders. Arguments are passed inside the parentheses of the function call, separated by 
commas.
Example:
greet("Alice");
In the above example, "Alice" is an argument passed to the greet function.

To summarize, parameters are the placeholders defined in the function declaration, while arguments 
are the actual values passed to the function when it is called. Parameters are used within the 
function's body to refer to the arguments supplied during invocation. */

54 - 