/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const numeric = (a,b) => {
        return a-b
    }
    let merged = nums1.concat(nums2).sort(numeric)
    if (merged.length % 2 === 1) {
        let midpoint = Math.floor((merged.length-1)/2)
        return merged[midpoint]
    }
    if (merged.length % 2 === 0) {
        let one = Math.floor((merged.length-1)/2)
        let two = Math.floor((merged.length-1)/2) +1
        return (merged[one] + merged[two])/2
    }
};