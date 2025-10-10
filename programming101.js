// programming101.js

// Variables with let
let a = 10;
let b = "Abhishek Rout";
let c = false;

// ----------------------------
// Arrays in JavaScript
// ----------------------------
let d = [10, 20, "Abhishek"];
console.log(d);         // Prints the entire array
console.log(d[1]);      // Prints 20 (arrays are 0-indexed)

// ----------------------------
// Objects in JavaScript
// ----------------------------
let obj = {
    name: "Abhishek",
    a: 1
};

console.log(obj);        // Prints the whole object
console.log(obj.name);   // Accessing value using the key 'name'

// ----------------------------
// Notes:
// 1. Use `const` when the value of a variable should not be reassigned.
// 2. Use `let` when you might want to change the value later.
// 3. Arrays and Objects in `const` can still have their contents modified!
// ----------------------------
