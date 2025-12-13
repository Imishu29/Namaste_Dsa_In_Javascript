// Second Largest number

function secondLargestNumber(arr){
    let max = -Infinity;
    let secondmax = -Infinity;
    for (i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max;
            max=arr[i]
        }
        else if(arr[i]>secondmax){
            secondmax=arr[i]
        }
    }

    return secondmax
}

let arr = [10 , 1, 22, 33, 44, 101 , 21, 23]

let result = secondLargestNumber(arr)

console.log(result)