// Find the Smallest Divisor Given a Threshold

function sum(arr, div) {
    let sum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum = sum + Math.ceil(arr[i] / div);
    }
    return sum;
}

function max(arr) {
    return Math.max(...arr);
}

var smallestDivisor = function (nums, threshold) {
    let low = 0, high = max(nums);
    while(low <=high ){
        let mid = Math.floor((low + high)/2);
        if( sum(nums,mid) <= threshold ){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
    return low;
};

