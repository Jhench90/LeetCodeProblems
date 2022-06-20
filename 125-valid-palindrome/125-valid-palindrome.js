/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var s = s.replace(/[^a-z0-9]/gi, '');
    s = s.toLowerCase()
    
    for (let count = 0; count < s.length; count++) {
        if (s[count] !== s[s.length - 1 - count]) {
            return false
        }
    }
    return true
};