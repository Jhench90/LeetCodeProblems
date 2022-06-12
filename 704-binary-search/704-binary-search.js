/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lower = 0
    let upper = nums.length-1
    let midpoint = Math.floor((lower + upper) / 2)
    
    //make a while loop which runs while upper > lower
    while (upper >= lower) {
        if (nums[midpoint] === target) {
            return midpoint
        }
        if (nums[midpoint] < target) {
            lower = midpoint + 1
            midpoint = Math.floor((lower + upper) / 2)
            
        }
        if (nums[midpoint] > target) {
            upper = midpoint - 1
            midpoint = Math.floor((lower + upper) / 2)
            
        }
    }
    return -1
};