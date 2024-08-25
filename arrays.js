// //What are arrays?

// // Arrays are a type of data structure that allows you to store multiple values in a single variable.

// // Example:

// // let fruits = ["Apple", "Banana", "Mango", "Orange"];
// // console.log(fruits);

// // let numbers = [1, 2, 3, 4, 5];

// // let mixed = ["Apple", 1, "Banana", 2, "Mango", 3, {
// //     name: "John",
// //     age: 30
// // }];
// // console.log(mixed);

// //Arrays are zero-indexed, which means that the first element in the array is at index 0, the second element is at index 1, and so on.

// //Example:

// // let fruits = ["Apple", "Banana", "Mango", "Orange"];
// // console.log(fruits[0]); // Apple
// // console.log(fruits[1]); // Banana
// // console.log(fruits[2]); // Mango

// //You can also access the elements of an array using a loop.

// //Example:

// let numbers = [1, 2, 3, 4, 5];

// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// // }

// let length = numbers.length

// // console.log(length);


// // Arrays methods

// // 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.

// // Example:

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// // fruits.push("Grapes"); // push method changes the original array
// // console.log(fruits);

// // 2. pop() - Removes the last element from an array and returns that element.

// // fruits.pop(); // pop method changes the original array
// // console.log(fruits);

// // 3. shift() - Removes the first element from an array and returns that element.

// // fruits.shift(); // shift method changes the original array
// // console.log(fruits);

// // 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.

// // fruits.unshift("Pineapple"); // unshift method changes the original array
// // console.log(fruits);

// // 5. splice() - Adds or removes elements from an array.

// // Example:

// // fruits.splice(2, 1, "Grapes"); // splice method changes the original array

// // console.log(fruits);

// // 6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.

// let newFruits = fruits.slice(2); // slice method does not change the original array
// console.log(newFruits);

// // 7. concat() - Combines two or more arrays.

// let vegetables = ["Carrot", "Potato", "Tomato"];

// let food = fruits.concat(vegetables); // concat method does not change the original array

// console.log(food);

// // 8. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// let index = food.indexOf("Tomato");
// console.log(index);



// 9. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.includes(9);
// console.log(result);

// // 10. reverse() - Reverses the elements in an array in place.

// numbers.reverse();
// console.log(numbers);


//Iterating over an array

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let index = 0

// for (let fruit of fruits) {
//     console.log(fruit);
//     index++
//     console.log(index);
// }

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }



//Array Destructuring

let numbers = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);