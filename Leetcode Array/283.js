// move zeroes to last

var moveZeroes = function(nums) {
    let seen = 0;
    for( let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
           let temp = nums[i];
           nums[i] = nums[seen];
           nums[seen] = temp;
           seen++;
        }
    }
};