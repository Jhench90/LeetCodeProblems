/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = ''
    let thisString = ''
    let leftPointer = 0
    let rightPointer = 0
    let obj = {} 
    while (rightPointer < s.length) {
        if (obj[s[rightPointer]] === 1) {
            leftPointer += 1
            rightPointer = leftPointer
            thisString = s[rightPointer]
            obj = {}
            obj[s[rightPointer]] = 1
        } else {
            thisString += s[rightPointer]
            obj[s[rightPointer]] = 1
            if (thisString.length > longest.length) {
                longest = thisString
            }
        }
        rightPointer += 1
    }
    return longest.length
};