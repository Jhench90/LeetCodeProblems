/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const numeric = (a,b)=>{
        return a-b
    }
    nums.forEach((number, i) => {
        let squarednumber = number * number
        nums.splice(i, 1, squarednumber)
    })
    return nums.sort(numeric)
};