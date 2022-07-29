/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroes = []
    let prod = 1
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroes.push(i)
            continue
        } 
        prod *= nums[i]
    }
    if (zeroes.length > 1) return Array.from({length: nums.length}, ()=>0)
    nums.forEach((number, i)=>{
         if (zeroes.length > 0) {
             if (i === zeroes[0]) {
                 result[i] = prod
             } else {
                 result[i] = 0
             }
         } else {
             result[i] = prod / number
         }
    })
    return result
};