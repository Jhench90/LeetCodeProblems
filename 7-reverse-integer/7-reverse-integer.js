/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = []
    let digit
    let neg = x < 0 ? true : false
    x = Math.abs(x)
    
    while (x > 0) {
        digit = x % 10
        arr.push(digit)
        x -= digit
        x /= 10
    }
    digit = 0
    for (let i = 0; i < arr.length; i++) {
        digit += arr[i]
        if (i < arr.length - 1) {
            digit *= 10
        }
    }
    if (digit > 2147483647) return 0
    return neg ? -digit : digit
};