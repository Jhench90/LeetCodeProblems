/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lower = 0
    let upper = n
    let mid = Math.floor((lower + upper) / 2)
    while (lower <= upper) {
        if (guess(mid) === 0) {
            return mid
        }
        if (guess(mid) === -1) {
            upper = mid - 1
            mid = Math.floor((upper + lower ) / 2)
        }
        if (guess(mid) === 1) {
            lower = mid + 1
            mid = Math.floor((upper + lower ) / 2)
        }
    }
};