// search in 2D matrix 2

var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0, col = m-1;
    while( row < n && col >= 0 ){
        if(matrix[row][col] == target){
            return true;
        }else if( matrix[row][col] < target){
            row ++;
        }else col --;
    }
    return false;
};
