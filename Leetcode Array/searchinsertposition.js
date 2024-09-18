// search inseart position

var searchInsert = function(nums, target) {
    let low = 0, high = nums.length - 1;
    let ans = nums.length;
    while( low <= high){
        let mid = Math.floor((low+high)/2);
        if( nums[mid] >= target){
            ans = mid;
            high = mid - 1;
        }else {
            low = mid + 1
        }

    }
    return ans;
};