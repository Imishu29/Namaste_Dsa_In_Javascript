nums = [1,1,1,2,2,2,3,3,4]
        // k      
// return (final Answer) = [1,2,3,4,1,1,2,2,3]

var removeDuplicate = function(nums){
    let k = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[k]!=nums[i]){
            k++
            nums[k]=nums[i];
        }
    }
    return nums
}

console.log(removeDuplicate(nums))