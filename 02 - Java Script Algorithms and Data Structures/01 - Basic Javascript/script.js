01 - Comment Your JavaScript Code

// This is an in-line comment.

/* This is a
multi-line comment */

02 - Declare JavaScript Variables

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

03 - Storing Values with the Assignment Operator

// you can store a value in a variable with the assignment operator (=).
// myVariable = 5;
// If there are any calculations to the right of the = operator, those are performed before the 
// value is assigned to the variable on the left of the operator.

04 - Assigning the Value of One Variable to Another

// After a value is assigned to a variable using the assignment operator, you can assign the value 
// of that variable to another variable using the assignment operator.

//     var myVar;
//     myVar = 5;
//     var myNum;
//     myNum = myVar;

05 - Initializing Variables with the Assignment Operator

// It is common to initialize a variable to an initial value in the same line as it is declared.
// var myVar = 0;

06 - Declare String Variables

// You can declare a string variable like this:
//      var myName = "your name";
// "your name" is called a string literal. A string literal, or string, is a series of zero or more 
// characters enclosed in single or double quotes.

07 - Understanding Uninitialized Variables

// When JavaScript variables are declared, they have an initial value of undefined. If you do a 
// mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
// If you concatenate a string with an undefined variable, you will get a string of undefined.

08 - Understanding Case Sensitivity in Variables

// In JavaScript all variables and function names are case sensitive. This means that capitalization 
// matters.MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables 
// with the same name but different casing. It is strongly recommended that for the sake of clarity, 
// you do not use this language feature.
// Best Practice
// Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the 
// first word in lowercase and the first letter of each subsequent word is capitalized.

09 - Explore Differences Between the var and let Keywords

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

10 - Declare a Read-Only Variable with the const Keyword

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

11 - Add Two Numbers with JavaScript

// Number is a data type in JavaScript which represents numeric data.
// const myVar = 5 + 10;
// myVar now has the value 15.

12 - Subtract One Number from Another with JavaScript

// JavaScript uses the - symbol for subtraction.
// const myVar = 12 - 6;
// myVar would have the value 6.

13 - Multiply Two Numbers with JavaScript

// JavaScript uses the * symbol for multiplication of two numbers.
// const myVar = 13 * 13;
// myVar would have the value 169.

14 - Divide One Number by Another with JavaScript

// JavaScript uses the / symbol for division.
// const myVar = 16 / 2;
// myVar now has the value 8.

15 - Increment a Number with JavaScript

// You can easily increment or add one to a variable with the ++ operator.
// i++;
// is the equivalent of
// i = i + 1;
// Note: The entire line becomes i++;, eliminating the need for the equal sign.

16 - Decrement a Number with JavaScript

// You can easily decrement or decrease a variable by one with the -- operator.
// i--;
// is the equivalent of
// i = i - 1;
// Note: The entire line becomes i--;, eliminating the need for the equal sign.

17 - Create Decimal Numbers with JavaScript

// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as 
// floating point numbers or floats.
// Note: when you compute numbers, they are computed with finite precision. Operations using 
// floating points may lead to different results than the desired outcome.
// const ourDecimal = 5.7;

18 - Multiply Two Decimals with JavaScript

// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
// Let's multiply two decimals together to get their product.
// const product = 2.0 * 2.5;

19 - Divide One Decimal by Another with JavaScript

// Now let's divide one decimal by another.
// const quotient = 4.4 / 2.0;

20 - 