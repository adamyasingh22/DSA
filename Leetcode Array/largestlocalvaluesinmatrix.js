//2373. Largest Local Values in a Matrix


    for (let i=0; i< grid[i].length -2 ; i++){
        for(let j=0; j<grid.length -2 ;j++){

            //find the max in each 3x3 martix
            matrix[i][j] = Math.max( 
                grid[i][j],     grid[i][j+1],   grid[i][j+2],
                grid[i+1][j],  grid[i+1][j+1],  grid[i+1][j+2],
                grid[i+2][j],  grid[i+2][j+1],  grid[i+2][j+2]
                );
            
        }
    }

    return matrix;
