// rotate matrix by 90 degrees

var rotate = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    for( let i=0; i<n-1; i++){
        for( let j=i+1; j<n; j++){
                    let temp = matrix[i][j];
                    matrix[i][j] = matrix[j][i];
                    matrix[j][i] = temp;
        }
    }
    for( let i=0; i<n ; i++){
        for(let j=0; j<n/2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-j-1];
            matrix[i][n-j-1] = temp;
    }
    }
};