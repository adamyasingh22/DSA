//maximum consecutive ones

var findMaxConsecutiveOnes = function(nums) {
    let maxi = 0;
    let counter = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            counter++;
            maxi = Math.max(maxi,counter);
        }else{
            counter = 0;
        }
    }
    return maxi;
};