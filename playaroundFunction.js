// playaroundFunction.js

// ------------------------------------
// Function to add two numbers
// ------------------------------------
function add(a, b) {
    return a + b;
}

let result = add(5, 9);
console.log("Addition Result:", result); // 14

// ------------------------------------
// Function to print multiplication table
// ------------------------------------
function table(a) {
    for (let i = 1; i <= 10; i++) {
        // Using template literals for cleaner output
        console.log(`${a} * ${i} = ${a * i}`);
    }
}

// Print table of 199
table(199);

// ------------------------------------
// Notes:
// 1. "add" returns the sum of two numbers.
// 2. "table" prints a multiplication table (does not return anything).
// 3. If you use console.log(table(199)), it will print the table and then "undefined"
//    because the function has no return statement.
// 4. String Template Literals:
//    Instead of writing: a + " * " + i + " = " + (a * i)
//    We can use: `${a} * ${i} = ${a * i}`
//    -> This is shorter, cleaner, and easier to read.
// ------------------------------------
