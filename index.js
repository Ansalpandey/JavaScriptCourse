//Operators in JS are used to perform operations on variables and values.

//Types of Operators in JS:
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Bitwise Operators
//6. String Operators
//7. Conditional (Ternary) Operator
//8. Comma Operator
//9. Unary Operators
//10. Relational Operators


//1. Arithmetic Operators

//Arithmetic operators are used to perform arithmetic operations on numbers.

//Example:

// let x = 10;
// let y = 5;

// console.log(x + y); //Addition
// console.log(x - y); //Subtraction
// console.log(x * y); //Multiplication
// console.log(x / y); //Division
// console.log(x % y); //Modulus
// console.log(x ** y); //Exponentiation

//2. Assignment Operators

//Assignment operators are used to assign values to variables.

//Example:

// let a = 10;
// let b = 5;

// a += b; //a = a + b
// console.log(a);


//3. Comparison Operators

//Comparison operators are used to compare two values.

//Example:

let c = 10;
let d = 10;

// console.log(c == d); //Equal to

// console.log(c === d); //Equal value and equal type

// 4. Logical Operators

//Logical operators are used to determine the logic between variables or values.

//Example:

let e = 10;
let f = 5;

// console.log(e > f && e < f); //AND:- Returns true if both conditions are true

// console.log(e > f || e < f); //OR:- Returns true if one of the conditions is true

// console.log(!(e > f)); //NOT:- Returns false if the condition is true

//5. Bitwise Operators

//Bitwise operators are used to perform bitwise operations on variables.

//Example:

// let g = 10; // 1010
// let h = 5; // 0101

// console.log(g & h); //AND:- Returns a 1 in each bit position for which the corresponding bits of both operands are 1

// console.log(g | h); //OR:- Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1

// console.log(g ^ h); //XOR:- Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1

//6. String Operators

//String operators are used to concatenate strings.

//Example:

// let i = "Hello";
// let j = "World";

// console.log(i + " " + j); //Concatenation :- Adds two strings = Hello + World = Hello World

//7. Conditional (Ternary) Operator

//Conditional operators are used to assign a value to a variable based on some condition.

//Example:

// let k = 10;
// let l = 15;

// let result = (k > l) ? "Greater" : "Smaller";
// console.log(result);

//8. Comma Operator

//Comma operators are used to evaluate multiple expressions.

//Example:

// let m = 10, n = 15, o = 20;

// console.log(m, n, o);

//9. Unary Operators

//Unary operators are used to perform operations on a single operand.

//Example:

// let p = 10;

// console.log(-p); //Negation

//10. Relational Operators

//Relational operators are used to determine the relationship between two variables or values.

//Example:

// let q = 10;
// let r = 15;

// console.log(q > r); //Greater than

// console.log(q < r); //Less than

// console.log(q >= r); //Greater than or equal to

// console.log(q <= r); //Less than or equal to

// console.log(q != r); //Not equal to

// console.log(q !== r); //Not equal value or not equal type


// Conditional Statements in JS

//Conditional statements are used to perform different actions based on different conditions.

//Types of Conditional Statements in JS:
//1. If Statement
//2. If...Else Statement
//3. If...Else If...Else Statement
//4. Switch Statement

//1. If Statement

//The if statement is used to execute a block of code if a condition is true.

//Example:

// let s = 25;

// if (s > 25) {
//     console.log("Greater");
//   }

//   else if(s==25){
//     console.log("Equal");
//   }

// else{
//     console.log("Smaller");
// }

// //Switch Statement

// //The switch statement is used to select one of many code blocks to be executed.

// //Example:

// let t = 2;

// switch (t) {
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   default:
//     console.log("Invalid Number");
//     break;
// }



// Program to check if the person can vote or not

// let age = 120;

// if (age >= 18 && age <= 120) {
//   console.log("You can vote");
// }
// else if(age <= 0){
//   console.log("Invalid Age");
// }
// else if (age > 120) {
//   console.log("Invalid Age");
// }
// else{
//   console.log("You cannot vote");
// }


// Loops in JS

//Loops are used to execute the same block of code again and again, as long as a certain condition is true.

//Types of Loops in JS:
//1. For Loop
//2. While Loop
//3. Do...While Loop
//4. For...In Loop
//5. For...Of Loop

//1. For Loop

//The for loop is used to execute a block of code a number of times.

//Example:

// let i = 1;

// for (i; i <= 70; i++) {
//   // Syntax of for loop: for(initialization; condition; increment/decrement)
//   console.log(i);
// }

//2. While Loop

//The while loop is used to execute a block of code as long as a condition is true.

//Example:

// let j = 1;

// while (j <= 5) { // Infinite Loop
//   console.log(j);
//   j++;
// }


//3. Do...While Loop

//The do...while loop is used to execute a block of code once, and then repeat the loop as long as a condition is true.

//Example:

// let k = 1;

// do {
//   console.log(k);
//   k++;
// }while (k >= 5); //false

//4. For...In Loop

//The for...in loop is used to loop through the properties of an object.

//Example:

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   bloodGroup: "B+",
//   job: "Developer"
// };

// for (let x in person) { // iterates over the properties of an object
//   console.log("key= ", x, "value= ", person[x]);
// }

//5. For...Of Loop

//The for...of loop is used to loop through the values of an iterable object.

// let name = "John";

// for (let y of name) { // iterates over the values of an iterable object
//   console.log(y);
// }


// Ques1. Program to print the numbers from 1 to 100

// let num = 1;

// for (num; num <= 100; num++) {
//   console.log(num);
// }

// Ques2. Program to print the numbers which are even

// let nums = 0;

// for(nums; nums <= 100; nums++){
//   if(nums % 2 !== 0) {
//     console.log(nums);
//   }
//   else{

//   }
// }


//Ques3. Multiplication table print

// let start = 5;

// for(let i = 1; i <=10; i++) {
//   const table = start * i;

  // console.log(`${start} * ${i} = ${table}`); // String Interpolation
  
// }




// let name = "Ansal Pandey"
// let name2 = 'Ansal Pandey'

// name = "Ansal"

// console.log(name);

//String Methods and properties

let student = "          Ansal Pandey         "

// ['Ansal', 'Pandey']

// let length = student.length

// console.log(length);

// student = student.replaceAll("y", "e")

// student = student.split(" ")

// student = student.slice(5, 12)

// student = student.toUpperCase()

// student = student.charAt(6)

// let age = 15;
// console.log(typeof age);

// age = age.toString()

// student = student.trim()

//Concatination = string + string

let firstName = "Ansal"
let endName = "Pandey"

// console.log(firstName + " " + endName);
// console.log(firstName, endName, "This is something something.");

console.log(`${firstName} ${endName} This is something something.`);
// console.log(student);
