// longest consecutive sequence

var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b);
    let longest = 1;
    let cnt = 0;
    let last_number = Number.MIN_SAFE
    if (nums.length == 0) return 0;
    for (let num of nums) {
        if (num - 1 === last_number) {
            cnt++;
            last_number = num;
        }
        else if (num !== last_number) {
            cnt = 1
            last_number = num;
        }
        longest = Math.max(longest, cnt);

    }
    return longest;
};
