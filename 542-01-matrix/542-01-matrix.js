var updateMatrix = function(mat) {
    let height = mat.length
    let width = mat[0].length
    //iterate forwards
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (mat[i][j] == 0) continue
            mat[i][j] = Infinity
            //check up
            if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], mat[i-1][j] + 1)
            //check left
            if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], mat[i][j-1] + 1)
        }
    }    
    //iterate backwards
    for (let i = height - 1; i >= 0; i--) {
        for (let j = width - 1; j >= 0; j--) {
            if (mat[i][j] == 0) continue
            //check right
            if (j + 1 < width) mat[i][j] = Math.min(mat[i][j], mat[i][j+1] + 1)
            //check down
            if (i + 1 < height) mat[i][j] = Math.min(mat[i][j], mat[i+1][j] + 1)
        }
    }
    return mat
}
