/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) { return 0 }
    let index = -1
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    break
                }
                
                //base case
                if (j === needle.length - 1) {
                    return i
                }
            }    
        }
    }
    return index
};
console.log('expect 4, actual: ', strStr('mississippi', 'issip'))