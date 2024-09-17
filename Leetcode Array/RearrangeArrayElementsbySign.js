//Rearrange Array Elements by Sign

var rearrangeArray = function(nums) {
    let posIndex = 0, negIndex = 1;
    let ans = [];
    for( let i=0; i<nums.length; i++){
        if( nums[i] < 0){
            ans[negIndex] = nums[i];
            negIndex += 2;
        }else{
            ans[posIndex] = nums[i];
            posIndex += 2;
        }
    }
    return ans;
};