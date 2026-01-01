/* 
==========================================
  ARRAY DSA CHEAT SHEET (JAVASCRIPT)
  Best Patterns Every Question Solved
==========================================
*/

// ===============================
// 1️⃣ Basic Traversal / Max / Min
// ===============================
function maxElement(arr) {
  let max = -Infinity;
  for (let num of arr) max = Math.max(max, num);
  return max;
}

function minElement(arr) {
  let min = Infinity;
  for (let num of arr) min = Math.min(min, num);
  return min;
}

// ===============================
// 2️⃣ Frequency / Hashing (MOST IMPORTANT 🔥)
// ===============================
// Used in → duplicates, majority element, anagram, count pairs
function frequencyMap(arr) {
  const map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
}

// Example - find first duplicate
function firstDuplicate(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return -1;
}

// ===============================
// 3️⃣ Two Pointer Technique
// ===============================
// Used in → sorted arrays, sum problems, remove duplicates
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    sum < target ? left++ : right--;
  }
  return [];
}

// ===============================
// 4️⃣ Sliding Window Technique
// ===============================
// Used in → Subarray sum, longest substring, max sum window
function maxSumSubarray(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];

  let maxSum = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// ===============================
// 5️⃣ Prefix Sum (Very Important)
// ===============================
// Used in → range queries, subarray sum equals target
function prefixSum(arr) {
  const prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }
  return prefix;
}

// ===============================
// 6️⃣ Kadane’s Algorithm (Max Subarray Sum)
// ===============================
function kadane(arr) {
  let maxSoFar = arr[0];
  let current = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    maxSoFar = Math.max(maxSoFar, current);
  }
  return maxSoFar;
}

// ===============================
// 7️⃣ Binary Search (On Sorted Arrays)
// ===============================
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? left = mid + 1 : right = mid - 1;
  }
  return -1;
}

// ===============================
// 8️⃣ Sorting Tricks
// ===============================
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// ===============================
// 9️⃣ Remove Duplicates
// ===============================
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// ===============================
// 🔟 Dutch National Flag (0,1,2 Sort)
// ===============================
function sort012(arr) {
  let low = 0, mid = 0, high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) [arr[low], arr[mid]] = [arr[mid], arr[low]], low++, mid++;
    else if (arr[mid] === 1) mid++;
    else [arr[mid], arr[high]] = [arr[high], arr[mid]], high--;
  }

  return arr;
}

// ===============================
// 1️⃣1️⃣ Reverse Array
// ===============================
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// ===============================
// 1️⃣2️⃣ Check Sorted
// ===============================
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

// ===============================
// ⭐ Final Tip
// ⭐ Learn patterns, not questions
// ⭐ 90% Array DSA =
//   ✔ Two Pointer
//   ✔ Sliding Window
//   ✔ Hashing
//   ✔ Binary Search
//   ✔ Prefix/Kadane
// ===============================

console.log("ARRAY DSA CHEATSHEET LOADED SUCCESSFULLY 🚀");
