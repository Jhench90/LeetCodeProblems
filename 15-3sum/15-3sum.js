/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
    let result = []
    nums.sort((a,b)=>a-b)
    console.log(nums)
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        let low = i + 1
        let high = nums.length - 1
        
        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high]
            if (sum == 0) {
                result.push([nums[i], nums[low], nums[high]])
                while (nums[low] == nums[low+1]) low += 1
                while (nums[high] == nums[high-1]) high -=1
                low += 1
                high += 1
            } else if (sum < 0) low += 1
              else high -= 1
        }
        while (nums[i]==nums[i+1]) i += 1
    }
    return result
}