/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          let number1 = nums[i]
          let number2 = nums[j]
          if (number1 + number2 === target) {
              if (i != j) {
                return [i, j]    
              }
              
           
          }
      }
  }
};