/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
       let lower = 0
       let upper = n
       let mid = Math.floor((lower + upper) / 2)
       
       let array = new Array(n)
       let prev
       
       while (lower <= upper) {
           if (isBadVersion(mid) === true) {
               prev = mid
               array[mid] = true
               upper = mid - 1
               mid = Math.floor((lower + upper) / 2)
           }
           if (isBadVersion(mid) === false) {
               prev = mid
               array[mid] = false
               lower = mid + 1
               mid = Math.floor((lower + upper) / 2)
           }
       }
        console.log(array)
       for (let i = mid-5; i < array.length; i++) {
           if (array[i] === false && array[i+1] === true) {
               return i+1
           }
       }
    };
};