/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    //use binary search to quickly find the peak Index
    let lower = 0
    let upper = arr.length-1
    let mid = Math.floor((lower + upper) / 2)
    
    while (lower <= upper) {
        let leftOne = arr[mid-1]
        let midOne = arr[mid]
        let rightOne = arr[mid+1]
        
        if (leftOne < midOne && midOne > rightOne) {
            return mid
        } else if (leftOne > midOne) {
            upper = mid-1
            mid = Math.floor((lower + upper) / 2)
       } else if (midOne < rightOne) {
           lower = mid+1
           mid = Math.floor((lower + upper) / 2)
       }
    }
};