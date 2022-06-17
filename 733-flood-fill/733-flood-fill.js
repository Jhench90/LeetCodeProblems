/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let startingPixelColor = image[sr][sc]
    if (startingPixelColor === color) {
        return image
    }
    const recurse = (image, row, column) => {
        image[row][column] = color
        
        //up
        if (image[row-1]) {
            console.log('up once')
            if (image[row-1][column] === startingPixelColor) {
                recurse(image, row-1, column)
            }
        }
        //down
        if (image[row+1]) {
            if (image[row+1][column] === startingPixelColor) {
                recurse(image, row+1, column)
            }
        }
        //left
         if (image[row][column-1] !== undefined) {
            if (image[row][column-1] === startingPixelColor) {
                recurse(image, row, column-1)
            }
        }
        //right
        if (image[row][column+1] !== undefined) {
            console.log('right 4x')
            if (image[row][column+1] === startingPixelColor) {
                recurse(image, row, column+1)
            }
        }
    }
    recurse(image, sr, sc)
    return image
};
// console.log(floodFill([
// [0,1,1],
// [1,1,0],
// [1,1,0]], 1, 1, 2))
// console.log(floodFill([[0,0,0],[0,0,0]],
// 1, 0, 2))