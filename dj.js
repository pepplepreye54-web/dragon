// ------------------------------
// STRING MANIPULATION FUNCTIONS
// ------------------------------

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Reverse String:", reverseString("hello")); // "olleh"

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}
console.log("Character Count:", countCharacters("hello world")); // 11

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
console.log("Capitalized:", capitalizeWords("hello world")); // "Hello World"


// ------------------------------
// ARRAY FUNCTIONS
// ------------------------------

// 1. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}
// Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}
console.log("Max Value:", findMax([5, 2, 9, 1, 5, 6])); // 9
console.log("Min Value:", findMin([5, 2, 9, 1, 5, 6])); // 1

// 2. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Array Sum:", sumArray([1, 2, 3, 4])); // 10

// 3. Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}
// Example: Keep numbers greater than 2
console.log("Filtered Array:", filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]


// ------------------------------
// MATHEMATICAL FUNCTIONS
// ------------------------------

// 1. Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); // 120

// 2. Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 7 Prime?", isPrime(7)); // true
console.log("Is 10 Prime?", isPrime(10)); // false

// 3. Fibonacci Sequence
function fibonacci(terms) {
  let sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, terms);
}
console.log("Fibonacci Sequence:", fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]