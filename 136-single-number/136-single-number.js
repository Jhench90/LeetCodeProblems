/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = []
  
  for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] === undefined) {
          obj[nums[i]] = 1
      } else {
          delete obj[nums[i]]
      }
  }
    return Object.keys(obj)[0]
  
};

//object keys method --> linear extra space
//sort array --> nlogn time

//object keys method --> linear space, but when other key is found, delete the pair 