/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let matrix = new Array(numRows)
    
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(i + 1)
        for (let j = 0; j < matrix[i].length; j++) {
            let aboveLeft = 0
            let above = 0
            
            if (i === 0) {
                matrix[i][j] = 1
                continue;
            }
            aboveLeft = matrix[i-1][j-1] || 0
            above = matrix[i-1][j] || 0
            
            matrix[i][j] = above + aboveLeft            
        }
    }
    
    console.log(matrix)
    return matrix
};