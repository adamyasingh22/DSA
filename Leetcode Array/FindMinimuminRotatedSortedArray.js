//153. Find Minimum in Rotated Sorted Array

var findMin = function(nums) {
    let low = 0, high = nums.length -1, ans = Number.MAX_VALUE;
    while( low <= high){
        let mid = Math.floor((low + high)/1);
        if( nums[low] <= nums[mid]){
            ans = Math.min( ans , nums[low]);
            low = mid + 1;
        }else{
            ans = Math.min( ans , nums[mid]);
            high = mid -1;
        }
    }
    return ans;
};
