// COMPLEXITY HIERARCHY (Best → Worst)

// O(1)      ████                          Constant - BEST
// O(log n)  ████████                      Logarithmic
// O(n)      ████████████████              Linear
// O(n log n)████████████████████████      Linearithmic  
// O(n²)     ████████████████████████████████████  Quadratic
// O(2ⁿ)     ████████████████████████████████████████████ Exponential
// O(n!)     ████████████████████████████████████████████████ WORST

// ============================================================
// 📚 TIME & SPACE COMPLEXITY - COMPLETE INTERVIEW GUIDE
// ============================================================

/*
╔══════════════════════════════════════════════════════════════╗
║                    TIME COMPLEXITY                            ║
║  "How FAST does the algorithm run as input grows?"           ║
╠══════════════════════════════════════════════════════════════╣
║  LOW Time Complexity = HIGH Speed = BETTER Performance       ║
╚══════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════╗
║                    SPACE COMPLEXITY                           ║
║  "How much MEMORY does the algorithm use as input grows?"    ║
╠══════════════════════════════════════════════════════════════╣
║  LOW Space Complexity = LESS Memory = BETTER Efficiency      ║
╚══════════════════════════════════════════════════════════════╝
*/


// ============================================================
// 🎯 1. O(1) - CONSTANT TIME & SPACE
// ============================================================
/*
    📌 TIME: Same time regardless of input size
    📌 SPACE: Fixed memory, no extra space needed
    
    🔥 Interview Tip: "Input size doesn't matter - always same performance"
*/

// ✅ O(1) Time Examples
function constantTimeExamples() {
    const arr = [10, 20, 30, 40, 50];
    
    // Example 1: Array access by index
    const firstElement = arr[0];        // O(1) - Direct memory access
    const lastElement = arr[arr.length - 1]; // O(1)
    
    // Example 2: Object property access
    const user = { name: "Rahul", age: 25 };
    const userName = user.name;          // O(1) - Hash table lookup
    
    // Example 3: Push/Pop operations
    arr.push(60);                        // O(1) - Add at end
    arr.pop();                           // O(1) - Remove from end
    
    // Example 4: Arithmetic operations
    const sum = 5 + 10;                  // O(1)
    const isEven = (num) => num % 2 === 0; // O(1)
    
    // Example 5: Map/Set operations
    const map = new Map();
    map.set('key', 'value');             // O(1) average
    map.get('key');                      // O(1) average
    
    return firstElement;
}

// ✅ O(1) Space Example
function swapNumbers(a, b) {
    // Only using fixed variables - no matter input size
    let temp = a;  // 1 variable
    a = b;
    b = temp;
    return [a, b];
    
    // Space: O(1) - Only 'temp' variable used
}

/*
    🎤 INTERVIEW QUESTION: "Why is array access O(1)?"
    
    ✅ ANSWER: Arrays store elements in contiguous memory locations.
    Computer calculates exact memory address using formula:
    address = baseAddress + (index × elementSize)
    This calculation takes constant time regardless of array size.
*/


// ============================================================
// 🎯 2. O(log n) - LOGARITHMIC TIME
// ============================================================
/*
    📌 Input is HALVED at each step
    📌 Very efficient for large datasets
    📌 Base is usually 2 (binary)
    
    🔥 Real Life Example: 
    - Finding word in dictionary (don't read all pages!)
    - Binary Search in sorted array
    
    📊 Growth Pattern:
    n = 8    → log₂(8) = 3 steps
    n = 1024 → log₂(1024) = 10 steps
    n = 1M   → log₂(1M) ≈ 20 steps  ← Very efficient!
*/

// ✅ Binary Search - Classic O(log n) Example
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    
    // Each iteration halves the search space
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (sortedArr[mid] === target) {
            return mid;           // Found!
        } else if (sortedArr[mid] < target) {
            left = mid + 1;       // Search right half
        } else {
            right = mid - 1;      // Search left half
        }
    }
    
    return -1; // Not found
    
    // Time: O(log n) - halving each iteration
    // Space: O(1) - only using pointers
}

// ✅ Finding power using Binary Exponentiation
function power(base, exponent) {
    // Calculate base^exponent in O(log n) time
    if (exponent === 0) return 1;
    
    if (exponent % 2 === 0) {
        const half = power(base, exponent / 2);
        return half * half;           // Reuse calculation
    } else {
        return base * power(base, exponent - 1);
    }
    
    // Time: O(log n) - exponent halved each time
    // Space: O(log n) - recursive call stack
}

/*
    🎤 INTERVIEW QUESTION: "When do you use Binary Search?"
    
    ✅ ANSWER: 
    1. Data must be SORTED
    2. Need to find element or insertion point
    3. Want O(log n) instead of O(n) linear search
    4. Examples: Search in rotated array, find peak element
*/


// ============================================================
// 🎯 3. O(n) - LINEAR TIME
// ============================================================
/*
    📌 Time grows proportionally with input size
    📌 Must visit each element at least once
    📌 Most common complexity
    
    🔥 Interview Tip: "If you must look at every element, 
       you can't do better than O(n)"
*/

// ✅ Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
    
    // Time: O(n) - worst case checks all elements
    // Space: O(1) - only using index variable
}

// ✅ Find Maximum Element
function findMax(arr) {
    let max = arr[0];           // O(1) space
    
    for (let i = 1; i < arr.length; i++) {  // O(n) time
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
    // Time: O(n) | Space: O(1)
}

// ✅ Sum of Array
function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
    
    // Time: O(n) | Space: O(1)
}

// ✅ O(n) Space Example - Creating new array
function doubleElements(arr) {
    const result = [];          // New array - O(n) space
    
    for (const num of arr) {
        result.push(num * 2);
    }
    
    return result;
    // Time: O(n) | Space: O(n) - new array same size as input
}

// ✅ Two Pointer Technique - Still O(n)
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Swap elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr;
    // Time: O(n/2) = O(n) - constants dropped
    // Space: O(1) - in-place reversal
}

/*
    🎤 INTERVIEW QUESTION: "Is O(2n) same as O(n)?"
    
    ✅ ANSWER: YES! In Big-O notation, we drop constants.
    O(2n), O(3n), O(100n) all simplify to O(n)
    Because we care about GROWTH RATE, not exact count.
*/


// ============================================================
// 🎯 4. O(n log n) - LINEARITHMIC TIME
// ============================================================
/*
    📌 Common in efficient sorting algorithms
    📌 Better than O(n²) for large inputs
    📌 Often involves divide-and-conquer
    
    📊 Comparison (n = 1000):
    O(n²) = 1,000,000 operations
    O(n log n) = 10,000 operations  ← 100x faster!
*/

// ✅ Merge Sort - Classic O(n log n)
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;
    
    // Divide - O(log n) levels
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    // Conquer - O(n) merge at each level
    return merge(left, right);
    
    // Time: O(n log n) - n work at each of log n levels
    // Space: O(n) - temporary arrays during merge
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return [...result, ...left.slice(i), ...right.slice(j)];
}

// ✅ Quick Sort
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
    
    // Time: O(n log n) average, O(n²) worst case
    // Space: O(log n) - recursive call stack
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

/*
    🎤 INTERVIEW QUESTION: "Why is Merge Sort O(n log n)?"
    
    ✅ ANSWER:
    - We divide array into halves → log n levels
    - At each level, we merge n elements → n work
    - Total: n × log n = O(n log n)
    
    Visual:
    Level 0: [8 elements]           → n work to merge
    Level 1: [4] [4]                → n work to merge  
    Level 2: [2] [2] [2] [2]        → n work to merge
    Level 3: [1][1][1][1][1][1][1][1] → n work to merge
             ↑ log₂(8) = 3 levels
*/


// ============================================================
// 🎯 5. O(n²) - QUADRATIC TIME
// ============================================================
/*
    📌 Nested loops over input
    📌 Often seen in brute-force solutions
    📌 Becomes slow for large inputs (n > 10,000)
    
    ⚠️ Interview Red Flag: If you write O(n²), interviewer 
       will likely ask "Can you optimize this?"
*/

// ✅ Bubble Sort - Classic O(n²)
function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {           // Outer loop: n times
        for (let j = 0; j < n - i - 1; j++) {   // Inner loop: n times
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
    // Time: O(n²) - n × n iterations
    // Space: O(1) - in-place sorting
}

// ✅ Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {  // Find minimum
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
    return arr;
    // Time: O(n²) | Space: O(1)
}

// ✅ Find All Pairs (Brute Force)
function findPairsWithSum(arr, target) {
    const pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {  // Nested loop
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    
    return pairs;
    // Time: O(n²) | Space: O(k) where k = number of pairs
}

// ✅ OPTIMIZED VERSION using HashMap - O(n)
function findPairsOptimized(arr, target) {
    const pairs = [];
    const seen = new Set();
    
    for (const num of arr) {
        const complement = target - num;
        
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }
    
    return pairs;
    // Time: O(n) - single pass
    // Space: O(n) - HashSet storage
    
    // 🎯 Trade-off: More space, but much faster!
}

/*
    🎤 INTERVIEW QUESTION: "How to optimize O(n²) to O(n)?"
    
    ✅ COMMON TECHNIQUES:
    1. Use HashMap/HashSet for O(1) lookups
    2. Two Pointer technique (for sorted arrays)
    3. Sliding Window (for contiguous subarrays)
    4. Sorting + Binary Search = O(n log n)
*/


// ============================================================
// 🎯 6. O(2ⁿ) - EXPONENTIAL TIME
// ============================================================
/*
    📌 Doubles with each additional input
    📌 Common in recursive solutions without memoization
    📌 Very slow - avoid for n > 30
    
    📊 Growth:
    n = 10  → 2¹⁰ = 1,024
    n = 20  → 2²⁰ = 1,048,576
    n = 30  → 2³⁰ = 1,073,741,824 ← Over 1 billion!
*/

// ❌ BAD: Recursive Fibonacci - O(2ⁿ)
function fibonacciBad(n) {
    if (n <= 1) return n;
    
    // Each call creates 2 more calls - exponential explosion!
    return fibonacciBad(n - 1) + fibonacciBad(n - 2);
    
    // Time: O(2ⁿ) - exponential
    // Space: O(n) - max call stack depth
}

/*
    Call tree for fib(5):
                    fib(5)
                   /      \
              fib(4)      fib(3)
             /    \       /    \
         fib(3)  fib(2) fib(2) fib(1)
         /   \
     fib(2) fib(1)
     
    Same values calculated multiple times! Wasteful.
*/

// ✅ GOOD: Memoized Fibonacci - O(n)
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];  // Return cached result
    if (n <= 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
    
    // Time: O(n) - each value calculated once
    // Space: O(n) - memo object + call stack
}

// ✅ BEST: Iterative Fibonacci - O(n) time, O(1) space
function fibonacciIterative(n) {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
    // Time: O(n) | Space: O(1) - only 2 variables!
}

// ✅ Subsets Generation - O(2ⁿ) but necessary
function generateSubsets(arr) {
    const result = [];
    
    function backtrack(index, current) {
        if (index === arr.length) {
            result.push([...current]);
            return;
        }
        
        // Don't include current element
        backtrack(index + 1, current);
        
        // Include current element
        current.push(arr[index]);
        backtrack(index + 1, current);
        current.pop();
    }
    
    backtrack(0, []);
    return result;
    
    // Time: O(2ⁿ) - 2 choices for each element
    // Space: O(n) - recursion depth
    // Note: This is optimal - we MUST generate 2ⁿ subsets!
}

/*
    🎤 INTERVIEW QUESTION: "How to identify exponential complexity?"
    
    ✅ ANSWER: Look for:
    1. Recursion with multiple branches (like fib calling itself twice)
    2. Problems involving "all subsets" or "all combinations"
    3. Decision trees where each level doubles possibilities
    
    🎯 Optimization: Use Dynamic Programming (Memoization/Tabulation)
*/


// ============================================================
// 🎯 7. O(n!) - FACTORIAL TIME
// ============================================================
/*
    📌 All possible arrangements/permutations
    📌 Extremely slow - avoid if possible
    📌 n = 10 → 3,628,800 operations
    📌 n = 20 → 2.4 × 10¹⁸ operations (years to compute!)
*/

// ✅ Generate All Permutations - O(n!)
function permutations(arr) {
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            
            const newRemaining = [
                ...remaining.slice(0, i),
                ...remaining.slice(i + 1)
            ];
            
            backtrack(current, newRemaining);
            current.pop();
        }
    }
    
    backtrack([], arr);
    return result;
    
    // Time: O(n!) - n × (n-1) × (n-2) × ... × 1
    // Space: O(n) - recursion depth
}

// Example: Traveling Salesman Problem (Brute Force)
function tspBruteForce(distances) {
    const n = distances.length;
    const cities = Array.from({ length: n }, (_, i) => i);
    
    let minDistance = Infinity;
    
    // Generate all permutations and find minimum
    const allRoutes = permutations(cities);
    
    for (const route of allRoutes) {
        let distance = 0;
        for (let i = 0; i < route.length - 1; i++) {
            distance += distances[route[i]][route[i + 1]];
        }
        distance += distances[route[route.length - 1]][route[0]]; // Return
        
        minDistance = Math.min(minDistance, distance);
    }
    
    return minDistance;
    
    // Time: O(n!) - check all permutations
    // This is why TSP is NP-hard!
}


// ============================================================
// 📊 COMPLEXITY COMPARISON CHART
// ============================================================
/*
╔═══════════════╦════════════════════════════════════════════════╗
║  COMPLEXITY   ║  n=10    n=100    n=1000    n=10000            ║
╠═══════════════╬════════════════════════════════════════════════╣
║  O(1)         ║  1       1        1         1         ⚡ BEST  ║
║  O(log n)     ║  3       7        10        13        ✅ GREAT ║
║  O(n)         ║  10      100      1000      10000     ✅ GOOD  ║
║  O(n log n)   ║  33      664      9966      132877    ✅ OK    ║
║  O(n²)        ║  100     10000    10⁶       10⁸       ⚠️ SLOW  ║
║  O(2ⁿ)        ║  1024    10³⁰     ∞         ∞         ❌ BAD   ║
║  O(n!)        ║  3.6M    ∞        ∞         ∞         ❌ WORST ║
╚═══════════════╩════════════════════════════════════════════════╝
*/


// ============================================================
// 🧠 SPACE COMPLEXITY DEEP DIVE
// ============================================================

// ✅ O(1) Space - In-place operations
function reverseString(str) {
    const arr = str.split('');  // Need this for modification
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr.join('');
    // Space: O(n) because strings are immutable in JS
    // In languages with mutable strings, this would be O(1)
}

// ✅ O(n) Space - Linear growth
function cloneArray(arr) {
    return [...arr];  // New array same size as input
    // Space: O(n)
}

// ✅ O(n²) Space - Matrix/2D array
function createMatrix(n) {
    const matrix = [];
    
    for (let i = 0; i < n; i++) {
        matrix.push(new Array(n).fill(0));
    }
    
    return matrix;
    // Space: O(n²) - n rows × n columns
}

// ✅ Recursive Space Complexity
function recursiveSum(n) {
    if (n <= 0) return 0;
    return n + recursiveSum(n - 1);
    
    // Time: O(n)
    // Space: O(n) - call stack holds n frames
    
    /*
        Call Stack for n=5:
        ┌─────────────────┐
        │ recursiveSum(1) │ ← Top
        │ recursiveSum(2) │
        │ recursiveSum(3) │
        │ recursiveSum(4) │
        │ recursiveSum(5) │ ← Bottom
        └─────────────────┘
        5 frames = O(n) space
    */
}

// ✅ Tail Recursion (can be optimized by compiler)
function tailRecursiveSum(n, accumulator = 0) {
    if (n <= 0) return accumulator;
    return tailRecursiveSum(n - 1, accumulator + n);
    
    // Note: JS doesn't optimize tail calls in most engines
    // But in theory: O(1) space with tail call optimization
}


// ============================================================
// 🎯 INTERVIEW TIPS & TRICKS
// ============================================================
/*
╔══════════════════════════════════════════════════════════════╗
║                    TOP INTERVIEW TIPS                         ║
╠══════════════════════════════════════════════════════════════╣
║ 1. Always state complexity BEFORE coding                     ║
║    "My approach will be O(n) time and O(1) space"            ║
║                                                               ║
║ 2. Know the TRADE-OFFS                                       ║
║    "We can reduce time from O(n²) to O(n) by using           ║
║     extra O(n) space for a HashMap"                          ║
║                                                               ║
║ 3. Drop CONSTANTS and LOWER ORDER terms                      ║
║    O(2n + 100) → O(n)                                        ║
║    O(n² + n) → O(n²)                                         ║
║                                                               ║
║ 4. Consider BEST, AVERAGE, WORST cases                       ║
║    QuickSort: Best O(n log n), Worst O(n²)                   ║
║                                                               ║
║ 5. Know when O(n²) is ACCEPTABLE                             ║
║    Small input (n < 100) → O(n²) is fine                     ║
║    Large input (n > 10000) → Need O(n) or O(n log n)         ║
╚══════════════════════════════════════════════════════════════╝
*/


// ============================================================
// 📝 COMMON INTERVIEW QUESTIONS WITH ANSWERS
// ============================================================

/*
❓ Q1: "What's the time complexity of JavaScript's built-in sort?"
✅ A1: O(n log n) - Uses Timsort (hybrid of merge sort and insertion sort)

❓ Q2: "Array.push() vs Array.unshift() - which is faster?"
✅ A2: push() is O(1), unshift() is O(n) because it shifts all elements

❓ Q3: "HashMap get() vs Array.includes() - which is faster?"
✅ A3: HashMap get() is O(1) average, Array.includes() is O(n)

❓ Q4: "How to identify if algorithm is O(log n)?"
✅ A4: Look for:
   - Input being halved each iteration
   - Binary search pattern
   - Tree traversal going only left/right (not both)

❓ Q5: "What's amortized time complexity?"
✅ A5: Average time per operation over many operations.
   Example: ArrayList/dynamic array push is O(1) amortized
   even though resizing occasionally costs O(n)

❓ Q6: "Space complexity of recursive vs iterative?"
✅ A6: Recursive uses O(depth) for call stack
   Iterative usually uses O(1) extra space
   Example: Recursive DFS uses O(n) stack, iterative BFS uses O(n) queue
*/


// ============================================================
// 🔥 QUICK REFERENCE - COMPLEXITY OF COMMON OPERATIONS
// ============================================================
/*
╔═══════════════════════════════════════════════════════════════╗
║                    ARRAY OPERATIONS                            ║
╠═══════════════════════════════════════════════════════════════╣
║  Access by index         arr[i]              O(1)             ║
║  Push (end)              arr.push(x)         O(1)             ║
║  Pop (end)               arr.pop()           O(1)             ║
║  Unshift (start)         arr.unshift(x)      O(n)             ║
║  Shift (start)           arr.shift()         O(n)             ║
║  Insert (middle)         arr.splice(i,0,x)   O(n)             ║
║  Delete (middle)         arr.splice(i,1)     O(n)             ║
║  Search (unsorted)       arr.includes(x)     O(n)             ║
║  Search (sorted)         binarySearch        O(log n)         ║
║  Sort                    arr.sort()          O(n log n)       ║
╠═══════════════════════════════════════════════════════════════╣
║                    OBJECT/MAP OPERATIONS                       ║
╠═══════════════════════════════════════════════════════════════╣
║  Get                     obj[key] / map.get  O(1) avg         ║
║  Set                     obj[key] / map.set  O(1) avg         ║
║  Delete                  delete / map.delete O(1) avg         ║
║  Has                     'key' in / map.has  O(1) avg         ║
╠═══════════════════════════════════════════════════════════════╣
║                    SET OPERATIONS                              ║
╠═══════════════════════════════════════════════════════════════╣
║  Add                     set.add(x)          O(1) avg         ║
║  Has                     set.has(x)          O(1) avg         ║
║  Delete                  set.delete(x)       O(1) avg         ║
╠═══════════════════════════════════════════════════════════════╣
║                    STRING OPERATIONS                           ║
╠═══════════════════════════════════════════════════════════════╣
║  Access char             str[i]              O(1)             ║
║  Concatenation           str1 + str2         O(n+m)           ║
║  Substring               str.slice(i,j)      O(j-i)           ║
║  Search                  str.indexOf(x)      O(n*m)           ║
╚═══════════════════════════════════════════════════════════════╝
*/


// ============================================================
// 🏆 FINAL SUMMARY
// ============================================================
/*
    ⚡ SPEED RANKING (Fastest to Slowest):
    O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2ⁿ) > O(n!)
    
    💾 SPACE vs TIME TRADE-OFF:
    - Often can reduce time by using more space
    - HashMap: O(n) space → O(1) lookup
    - Memoization: O(n) space → avoid recomputation
    
    🎯 INTERVIEW STRATEGY:
    1. Start with brute force, state complexity
    2. Optimize step by step
    3. Explain trade-offs clearly
    4. Know when "good enough" is acceptable
    
    
    Remember: "Premature optimization is the root of all evil"
              - Donald Knuth
              
    But also: "Know your complexities!"
              - Every Interviewer Ever
*/

console.log("🚀 Time & Space Complexity Guide Loaded!");
console.log("📚 Study these patterns before interviews!");