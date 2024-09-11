// missing number

var missingNumber = function(nums) {
    let xor1 = 0, xor2 = 0;

    let N = nums.length;
    for(let i=0; i<N; i++){
        xor2 = xor2 ^   nums[i];
        xor1 = xor1 ^ (i+1);
    }
    // xor1 = xor1^ N;
    return xor1 ^ xor2
};