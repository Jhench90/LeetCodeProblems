/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let highestNum
    let highestCount = 0
    let storage = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (storage[nums[i]] === undefined) {
            storage[nums[i]] = 1
        } else {
            storage[nums[i]] += 1
        }
        if (storage[nums[i]] > highestCount) {
            highestNum = nums[i]
            highestCount = storage[nums[i]]
        }
    }
    
    return highestNum
};