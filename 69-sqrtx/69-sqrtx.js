/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let int = undefined
    let count = 0
    while (int === undefined) {
        count++
        let product = count * count
        if (product === x) {
            int = count
        }
        if (product > x) {
            int = count - 1
        }
    }
    return int
};

console.log('expect 5, actual: ', mySqrt(25))
console.log('expect 10, actual: ', mySqrt(100))
console.log('expect 31, actual: ', mySqrt(1000))
//30 * 30 = 900
//31 * 31 = 961
//32 * 32 = 1024
