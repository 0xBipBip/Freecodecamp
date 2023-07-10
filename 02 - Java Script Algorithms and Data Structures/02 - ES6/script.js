/* 
ES6
ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this 
specification, the terms ECMAScript and JavaScript are interchangeable.
Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized 
in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new 
features are released every year.
ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn 
these new features, including arrow functions, destructuring, classes, promises, and modules.

01 - Compare Scopes of the var and let Keywords
If you are unfamiliar with let, check out this challenge about the difference between let and var.
When you declare a variable with the var keyword, it is declared globally, or locally if declared 
inside a function.
The let keyword behaves similarly, but with some extra features. When you declare a variable with 
the let keyword inside a block, statement, or expression, its scope is limited to that block, 
statement, or expression.

For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. 
This code is similar to the following:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
Here the console will display the values [0, 1, 2] and 3.

This behavior will cause problems if you were to create a function and store it for later use inside a 
for loop that uses the i variable. This is because the stored function will always refer to the 
value of the updated global i variable.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
Here the console will display the value 3.

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was 
updated and the printNumTwo() returns the global i and not the value i had when the function was 
created in the for loop. The let keyword does not follow this behavior:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
Here the console will display the value 2, and an error that i is not defined.
i is not defined because it was not declared in the global scope. It is only declared within the 
for loop statement. printNumTwo() returned the correct value because three different i variables 
with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

PROBLEM: Fix the code so that i declared in the if statement is a separate variable than i declared 
in the first line of the function. Be certain not to use the var keyword anywhere in your code.
This exercise is designed to illustrate the difference between how var and let keywords assign 
scope to the declared variable. When programming a function similar to the one used in this 
exercise, it is often better to use different variable names to avoid confusion.

SOLUTION: 
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
console.log(checkScope());
*/

/*02 - Mutate an Array Declared with const
If you are unfamiliar with const, check out this challenge about the const keyword.
The const declaration has many use cases in modern JavaScript.
Some developers prefer to assign all their variables using const by default, unless they know they 
will need to reassign the value. Only in that case, they use let.
However, it is important to understand that objects (including arrays and functions) assigned to a 
variable using const are still mutable. Using the const declaration only prevents reassignment of 
the variable identifier.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
s = [1, 2, 3] will result in an error. After commenting out that line, the console.log will 
display the value [5, 6, 45].

As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to 
the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because 
const was used, you cannot use the variable identifier s to point to a different array using the 
assignment operator.

PROBLEM: An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using 
various element assignments.

SOLUTION:
const s = [5, 7, 2];
function editInPlace() {
  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
}
console.log(editInPlace());
*/

/* 03 - Prevent Object Mutation
As seen in the previous challenge, const declaration alone doesn't really protect your data from 
mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent 
data mutation.
Any attempt at changing the object will be rejected, with an error thrown if the script is running in 
strict mode.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
The obj.review and obj.newProp assignments will result in errors, because our editor runs in strict 
mode by default, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

PROBLEM: In this challenge you are going to use Object.freeze to prevent mathematical constants 
from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the 
value of PI, add, or delete properties.

SOLUTION:
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS); // Freeze desired object
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
*/

/* 04 - Use Arrow Functions to Write Concise Anonymous Functions
In JavaScript, we often don't need to name our functions, especially when passing a function as an 
argument to another function. Instead, we create inline functions. We don't need to name these 
functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, 
you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, arrow function syntax allows you to omit the 
keyword return as well as the brackets surrounding the code. This helps simplify smaller functions 
into one-line statements:

const myFunc = () => "value";
This code will still return the string value by default.

PROBLEM: Rewrite the function assigned to the variable magic which returns a new Date() to use arrow 
function syntax. Also, make sure nothing is defined using the keyword var.
var magic = function() {
  return new Date();
};

SOLUTION:
const magic = () => new Date();
*/

/* 05 - Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function.
const doubler = (item) => item * 2;
doubler(4);
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) would return the value 8.

PROBLEM: Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function 
uses arrow function syntax.
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

SOLUTION:
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
*/

/*06 - Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
The console will display the strings Hello John and Hello Anonymous.
The default parameter kicks in when the argument is not specified (it is undefined). As you can see 
in the example above, the parameter name will receive its default value Anonymous when you do not 
provide a value for the parameter. You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to number if value 
is not specified.

SOLUTION:
const increment = (number, value = 1) => number + value;
*/

/* 07 - Use the Rest Parameter with Function Parameters
In order to help us create more flexible functions, ES6 introduces the rest parameter for function 
parameters. With the rest parameter, you can create functions that take a variable number of 
arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to use the arguments object and allows us to use array 
methods on the array of parameters passed to the function howMany.

PROBLEM: Modify the function sum using the rest parameter in such a way that the function sum is able to 
take any number of arguments and return their sum.
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(2, 4, 5)); //11

SOLUTION:
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
    }
console.log(sum(2, 4, 5)); //11
*/

/* 08 - Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places 
where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximus would have a value of 89.
We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects 
comma-separated arguments, but not an array. The spread operator makes this syntax much better 
to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximus would have a value of 89.

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator 
only works in-place, like in an argument to a function or in an array literal. For example:

const spreaded = [...arr];
However, the following code will not work:

const spreaded = ...arr;

PROBLEM: Copy all contents of arr1 into another array arr2 using the spread operator.

SOLUTION:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
arr2 = [...arr1]
console.log(arr2);
*/
/* 09 - Use Destructuring Assignment to Extract Values from Objects
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken 
directly from an object.

Consider the following ES5 code:
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { name, age } = user;
Again, name would have a value of the string John Doe, and age would have the number 34.
Here, the name and age variables will be created and assigned the values of their respective 
values from the user object. You can see how much cleaner this is.
You can extract as many or few values from the object as you want.

PROBLEM:Replace the two assignments with an equivalent destructuring assignment. It should still 
assign the variables today and tomorrow the values of today and tomorrow from the 
HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

SOLUTION:
const {today, tomorrow} = HIGH_TEMPERATURES
console.log(today);
*/

/*10 - Use Destructuring Assignment to Assign Variables from Objects
Destructuring allows you to assign a new variable name when extracting values. You can do this by 
putting the new name after a colon when assigning the value.

Using the same object from the last example:
const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
You may read it as "get the value of user.name and assign it to a new variable named userName" and 
so on. The value of userName would be the string John Doe, and the value of userAge would be the 
number 34.

PROBLEM: Replace the two assignments with an equivalent destructuring assignment. It should still 
assign the variables highToday and highTomorrow the values of today and tomorrow from 
the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);
*/

/*11 - Use Destructuring Assignment to Assign Variables from Nested Objects
You can use the same principles from the previous two lessons to destructure values from nested objects.
Using an object similar to previous examples:
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
- Here's how to extract the values of object properties and assign them to variables with the same name:
const { johnDoe: { age, email }} = user;
- And here's how you can assign an object properties' values to variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;

PROBLEM: Replace the two assignments with an equivalent destructuring assignment. It should still 
assign the variables lowToday and highToday the values of today.low and today.high from 
the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

SOLUTION:
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
*/

/*12 - Use Destructuring Assignment to Assign Variables from Arrays
ES6 makes destructuring arrays as easy as destructuring objects.
One key difference between the spread operator and array destructuring is that the spread 
operator unpacks all contents of an array into a comma-separated list. Consequently, you 
cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
The console will display the values of a and b as 1, 2.
The variable a is assigned the first value of the array, and b is assigned the second value of the 
array. We can also access the value at any index in an array with destructuring by using commas 
to reach the desired index:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
The console will display the values of a, b, and c as 1, 2, 5.

PROBLEM: Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, 
and b receives the value stored in a.
let a = 8, b = 6;
SOLUTION
[a, b] = [b, a];
console.log(a, b);
*/

/*13 - Destructuring via rest elements
In some situations involving array destructuring, we might want to collect the rest of the elements 
into a separate array.
The result is similar to Array.prototype.slice(), as shown below:
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a and b take the first and second values from the array. After that, because of the rest 
syntax presence, arr gets the rest of the values in the form of an array. The rest element only works 
correctly as the last variable in the list. As in, you cannot use the rest syntax to catch a subarray 
that leaves out the last element of the original array.

PROBLEM: Use a destructuring assignment with the rest syntax to emulate the behavior 
of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with 
the first two elements omitted.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

function removeFirstTwo(list) {
  // Mi Solución
  // const [a, b, ...arr] = list;
  // const shorterList = [...arr];

  // MEJOR
  const [a, b, ...shorterList] = list; 
    return shorterList;
}
console.log(removeFirstTwo(source));
*/

/*14 - Use Destructuring Assignment to Pass an Object as a Function's Parameters
In some cases, you can destructure the object in a function argument itself.

Consider the code below:
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}
This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {
}
When profileData is passed to the above function, the values are destructured from the function 
parameter for use within the function.

PROBLEM: Use destructuring assignment within the argument to the function half to send only max 
and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

SOLUTION:
const half = ({max, min}) => (max + min)/2.0;
console.log(half(stats));
*/

/*15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 */
