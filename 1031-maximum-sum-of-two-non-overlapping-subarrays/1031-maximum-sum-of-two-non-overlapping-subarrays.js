var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    let firstMaxes = []
    let secondMaxes = []
    let sum = 0
    let sum2 = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        sum2 += nums[i]
        if (i < firstLen - 1) {
            firstMaxes.push(0)
        }
        if (i >= firstLen - 1) {
            firstMaxes.push(sum)
            sum-=nums[i-firstLen+1]
        }
        //-----//
        if (i < secondLen - 1) {
            secondMaxes.push(0)
        }
        if (i >= secondLen - 1) {
            secondMaxes.push(sum2)
            sum2-=nums[i-secondLen+1]
        }
    }
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        let max1 = firstMaxes[i]
        let max2 = Math.max(...secondMaxes.slice(0, i-firstLen + 1).concat(secondMaxes.slice(i+secondLen)))
        max = Math.max(max, max1 + max2)
    }
    return max
};