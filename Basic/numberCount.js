// Write a function that returns the count of digits in a number

/*
  Problem:
  Given a number, return how many digits it contains.

  Examples:
  countDigit(67256373) → 8
  countDigit(-94343)   → 5
  countDigit(0)        → 1
*/

function countDigit(num) {

    // ✅ Corner case: if number is 0, it has exactly one digit
    if (num === 0) return 1;

    // ✅ Handle negative numbers
    // Math.abs converts negative number to positive
    num = Math.abs(num);

    let count = 0;

    // Loop until number becomes 0
    while (num > 0) {
        count++;

        // Remove the last digit
        // JavaScript division returns a floating value
        // Math.trunc removes the decimal part without rounding
        num = Math.trunc(num / 10);
    }

    return count;
}

// Test cases
let result = countDigit(-94343);
console.log(result); // 5

/*
========================
WHY Math.trunc() ?
========================

JavaScript division always returns floating point values.
To remove the last digit, we must remove the decimal part.

Examples:
  67 / 10 = 67.2

  Math.floor(67.2)  → 67
  Math.trunc(67.2)  → 67

Difference for negative numbers:
  Math.floor(-67.2) → -68  ❌ (rounds down)
  Math.trunc(-67.2) → -67  ✅ (just removes decimal)

➡ Math.trunc is safer for DSA problems when negatives are allowed.
*/

/*
========================
CORNER CASES HANDLED
========================

1) num === 0
   - Output should be 1 because 0 has one digit

2) Negative numbers
   - Math.abs is used so the loop works correctly

========================
TIME & SPACE COMPLEXITY
========================

Time Complexity:  O(d)  (d = number of digits)
Space Complexity: O(1)
*/

/*
========================
ONE-LINER (INTERVIEW TRICK)
========================

Not recommended for DSA, but good to mention:

  num.toString().length

Reason:
- Uses extra space
- Avoids numeric manipulation
*/

/*
=================================================
IMPORTANT Math FUNCTIONS FOR DSA (INTERVIEW READY)
=================================================

Below are the most commonly used Math functions in JavaScript
for Data Structures & Algorithms with clear use-cases.
*/

/*
1) Math.abs(x)
----------------
Purpose: Removes sign (negative → positive)

Examples:
  Math.abs(-5)    → 5
  Math.abs(5)     → 5

DSA Use Cases:
- Handling negative numbers
- Distance / difference problems
- Digit based problems
*/

/*
2) Math.trunc(x)  ✅ (DSA Favorite)
-----------------
Purpose: Removes decimal part WITHOUT rounding

Examples:
  Math.trunc(5.9)   → 5
  Math.trunc(-5.9)  → -5

DSA Use Cases:
- Removing last digit
- Integer division
- Safe for negative numbers
*/

/*
3) Math.floor(x)
----------------
Purpose: Rounds DOWN to nearest integer

Examples:
  Math.floor(5.9)   → 5
  Math.floor(-5.1)  → -6

DSA Use Cases:
- Binary search mid
- Index calculations

⚠ Avoid for negatives when removing digits
*/

/*
4) Math.ceil(x)
---------------
Purpose: Rounds UP to nearest integer

Examples:
  Math.ceil(5.1) → 6

DSA Use Cases:
- Minimum required count
- Paging / chunk problems
*/

/*
5) Math.round(x)
----------------
Purpose: Rounds to nearest integer

Examples:
  Math.round(5.4) → 5
  Math.round(5.5) → 6

⚠ Rarely used in DSA
⚠ Avoid for logic based problems
*/

/*
6) Math.max(a, b, ...)
7) Math.min(a, b, ...)
----------------------
Purpose: Find maximum or minimum value

Examples:
  Math.max(2, 5, 1) → 5
  Math.min(2, 5, 1) → 1

DSA Use Cases:
- Greedy algorithms
- Dynamic Programming
- Comparisons
*/

/*
8) Math.pow(a, b)  OR  a ** b
------------------------------
Purpose: Power / exponent

Examples:
  Math.pow(2, 3) → 8
  2 ** 3         → 8

DSA Use Cases:
- Binary to decimal
- Mathematical problems
*/

/*
9) Math.sqrt(x)
---------------
Purpose: Square root

Examples:
  Math.sqrt(36) → 6

DSA Use Cases:
- Prime checking (i <= sqrt(n))
- Geometry problems
*/

/*
10) Math.log2(x)
----------------
Purpose: Log base 2

Examples:
  Math.log2(8) → 3

DSA Use Cases:
- Binary tree height
- Time complexity analysis
*/

/*
11) Math.random()
-----------------
Purpose: Generates random number between 0 and 1

Example:
  Math.floor(Math.random() * 10)

DSA Use Cases:
- Random pivot (QuickSort)
- Shuffling arrays (rare)
*/

/*
=================================================
DSA GOLDEN RULES (INTERVIEW NOTES)
=================================================

✔ Use Math.trunc for digit removal
✔ Use Math.abs for negatives
✔ Avoid Math.round in DSA
✔ Prefer numeric logic over string logic

This file is GitHub + Interview ready 🚀
*/
