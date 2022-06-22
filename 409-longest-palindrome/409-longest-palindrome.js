/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let c = 0
    let leftover = []
    let sorted = s.split('').sort()
    for (let i = 0; i < sorted.length; i+=1) {
        if (sorted[i] === sorted[i+1]) {
            c += 2
            i += 1
        } else {
            leftover.push(sorted[i])
        }
    }
    console.log('whats left', leftover)
    if (leftover.length > 0) {
        return c + 1
    }
    return c
};