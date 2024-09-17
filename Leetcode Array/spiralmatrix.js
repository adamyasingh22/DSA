// spiral matrix

var spiralOrder = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let top = 0, right = m - 1;
    let left = 0, bottom = n - 1;
    let ans = [];

    while (top <= bottom && left <= right) {
        //right
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }
    return ans;
};