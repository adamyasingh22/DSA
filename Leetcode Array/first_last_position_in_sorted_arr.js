// Find First and Last Position of Element in Sorted Array

var searchRange = function(nums, target) {
    let low = 0, high = nums.length - 1, first = -1, last = -1;

    while( low <= high){
        let mid = Math.floor((low + high)/2);
        if( nums[mid] == target){
            first = mid;
            high = mid -1
        }else if(nums[mid] < target){
            low = mid + 1;
        }else high = mid - 1;
    };
    low = 0; high = nums.length - 1
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if( nums[mid] == target){
            last = mid;
            low = mid + 1
        }else if(nums[mid] < target){
            low = mid + 1;
        }else high = mid - 1;
    };

    if(first == -1) return [-1,-1];
    return [first,last];

};