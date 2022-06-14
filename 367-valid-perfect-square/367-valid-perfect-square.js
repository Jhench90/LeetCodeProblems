/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let lower = 0
    let upper = num
    let mid = Math.floor((lower + upper) / 2)
    
    while (lower <= upper) {
        if (mid * mid === num) {
            return true
        }
        if (mid * mid > num) {
            upper = mid - 1
            mid = Math.floor((lower + upper) / 2)
        }
        if (mid * mid < num) {
            lower = mid + 1
            mid = Math.floor((lower + upper) / 2)
        }
    }
    return false
};