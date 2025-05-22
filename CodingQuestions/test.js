// 1. Write a Program to reverse a string in JavaScript.

// const reverseString = (str) => {
//   const reverse = str.split("").reverse().join("");
//   return reverse;
// };

// const result = reverseString("aadil");
// console.log(result);

// 2. Write a Program to check whether a string is a palindrome string.

// const isPalindrome = (str) => {
//   const reverse = str.split("").reverse().join("");

//   return str === reverse;
// };

// const result = isPalindrome("GFG");
// console.log(result);

// 3. Find the largest number in an array in JavaScript.

// const largestNumnber = (arr) => {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = largestNumnber([1, 2]);
// console.log(result);

// 4. How Remove the first element from an array in JavaScript?

// const removeElement = (arr) => {
//   arr.shift();
//   return arr;
// };

// const result = removeElement([1, 2, 3, 4, 5]);
// console.log(result);

// 5. Write a Program to use a callback function?

// function greet(name, callback) {
//   callback(`Hello , ${name}`);
// }

// greet("Greet", (mesaage) => console.log(mesaage));

// 6. Write a code to create an arrow function?

// const arrowFunction = (str) => {
//   const arrow = str.length;
//   return arrow;
// };

// const result = arrowFunction("name");
// console.log(result);

// 7. Write a Program to add a property to an object?

// const obj = { name: "user" };
// obj.age = 21;
// console.log(obj);

// 8. Write a Program to delete a property from an object?

// const obj = { name: "user", age: "21" };
// delete obj.age;
// console.log(obj);

// 9. What will be the output of the given code?

// console.log([1, 2, 3].reduce((a, b) => a + b));
//adds numbers in the array, together using the reduce method

// 10. What will be the output of the given code?
// console.log("gfg".repeat(3));

// 11. What will be the output of the given code?
// console.log(1 + "2");

// 12. What will be the output of the given code?
// console.log("6" - 1);

// 15. Write a Program to find a sum of an array?

// const sumOfArray = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const result = sumOfArray([1, 2, 3, 4, 5]);
// console.log(result);

// 16. Write a Program to check if a number is prime or not?

// const primeNumber = (arr) => {

// }

// const result = primeNumber(7)
// console.log(result)

// 18. Write a Program to find factorial of a number?

// const factorial = (num) => {
//   let answer = 1;
//   for (let i = 2; i < num; i++) {
//     answer *= i;
//   }
//   return answer;
// };

// const result = factorial(2);
// console.log(result);

// 19. Write a Program to count the occurrences
//  of a character in a string in JavaScript?

// const countOccurenceses = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countOccurenceses("banana", "a");
// console.log(result);

// 20. Write a Program to convert Celsius to Fahrenheit in JavaScript?

// function CelsiusToFerenheiht(Celsius) {
//   return (Celsius * 9) / 5 + 32;
// }

// console.log(CelsiusToFerenheiht(20));
// 21. Write a Program to sort an array in Ascending Order in JavaScript?

// const sortArrayInAscendingOrder = (arr) => {
//   const Array = arr.sort();
//   return Array;
// };

// const result = sortArrayInAscendingOrder([5, 3, 1, 4, 2]);
// console.log(result);

// 22. write a Program to sort an array in Descending Order in JavaScript?

// const sortArrayInAscendingOrder = (arr) => {
//   return arr.sort((a,b) => b-a)
// };

// const result = sortArrayInAscendingOrder([1,2,3,4,5]);
// console.log(result);

// 23. Write a Program to merge two arrays in JavaScript?

// const arr1 = ["my", "name", "is"];
// const arr2 = ["Aadil", "Khan"];

// const allArrays = arr1.concat(arr2);
// console.log(allArrays);

// 24. Find the Union of Two Arrays in JavaScript?

// function arrUnion(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

// console.log(arrUnion([1, 2, 3], [2, 3, 4]));

// 25. Check if a Number is Even or Odd in JavaScript?

// const evenNumber = (num) => {
//   return num % 2 === 0;
// };

// const result = evenNumber(10);
// console.log(result);

// 26. Write a Program to find the minimum value in an array in JavaScript?

// const minimumValue = (arr) => {
//   const value = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < value) {
//       value = arr[i];
//     }
//   }
//   return value;
// };

// const result = minimumValue([1, 2, 3, 4, 5]);
// console.log(result);
