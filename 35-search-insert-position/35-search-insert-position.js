/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lower = 0
    let upper = nums.length-1
    let mid = Math.floor((lower + upper) / 2)
    
    while (lower <= upper) {
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            lower =  mid + 1
            mid = Math.floor((lower + upper) / 2)
        }
        if (nums[mid] > target) {
            upper =  mid - 1
            mid = Math.floor((lower + upper) / 2)
        }
    }
    return mid + 1
};