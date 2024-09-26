//347. Top K Frequent Elements


var topKFrequent = function(nums, k) {
    const maxCount = 0;
    
    const map = {};
    const freqs = [];
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    for (const key in map) {
        freqs.push([key, map[key]]);
    }
    const result = freqs.sort((a, b) => b[1] - a[1]).map(arr => parseInt(arr[0]));


    return result.slice(0, k);   
};
