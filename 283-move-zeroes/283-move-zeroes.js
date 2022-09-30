/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    if (nums.length === 1) return nums;
    
    let pointer = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[pointer];
            nums[pointer] = nums[i];
            nums[i] = temp;
            pointer = pointer + 1;
        } 
    }
    
    return nums;
};