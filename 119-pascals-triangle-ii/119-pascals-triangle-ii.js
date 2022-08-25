/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = []
    let prevRow = [1]
    let aboveLeft
    let above
    console.log(prevRow)
    for (let i = 1; i <= rowIndex; i++) {
        let c = 0
        while (c <= i) {
            aboveLeft = prevRow[c-1] || 0
            above = prevRow[c] || 0
            row[c] = above + aboveLeft
            c++
        }
        prevRow = row
        row = []
    }
    
    return prevRow
};