//rotate array by k

var rotate = function(nums, k) {
    let temp = [];
    k = k%nums.length;
    for( let i=0; i<nums.length; i++){
        temp[i] = nums[i];
    }
    for(let i=k; i<nums.length; i++){
       // temp[i-k] = nums[i];
        nums[i] = temp[i - k];
    }
        for(let i = 0; i < k; i++){
        nums[i] = temp[nums.length - k + i];
    //for( let i = nums.length-k; i<nums.length; i++){
     //   nums[i] = temp[i-(nums.length-k)];
    }
    return temp;
};