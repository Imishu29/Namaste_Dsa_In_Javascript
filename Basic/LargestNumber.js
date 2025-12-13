function largest(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
       if(arr[i]>max){
        max=arr[i]
       }
    }
    return max;
}

let arr = [2, 1, 10, 33, 32, 22, 7];
console.log(largest(arr)); // 33
 

// 2nd Method Using Math.max + Spread Operator (BEST & CLEANEST)

// const largest = (arr) => Math.max(...arr);

// console.log(largest([2,1,10,33,32,22,7])); // 33


// 3. Using Array.reduce()
// const largest = (arr) => arr.reduce((max, num) => 
//     num > max ? num : max
// );

// console.log(largest([2,1,10,33,32,22,7])); // 33

// 5. Using for..of loop (Clean & Readable)

// function largest(arr) {
//     let max = arr[0];
//     for (let num of arr) {
//         if (num > max) max = num;
//     }
//     return max;
// }

// console.log(largest([2,1,10,33,32,22,7])); // 33

