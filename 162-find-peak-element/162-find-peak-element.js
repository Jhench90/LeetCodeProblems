/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    while (left + 1 < right) {
        //if number to left of mid is smaller than mid OR number to right of mid is greater
        //there is a peak on the right side
        if (nums[mid-1] < nums[mid] || nums[mid+1] > nums[mid]) {
            left = mid;
        }
        //if number to right of mid is smaller than mid OR number to left if greater
        //there is a peak on the left side
        else if (nums[mid+1] < nums[mid] || nums[mid-1] > nums[mid]) {
            right = mid;
        } else {
            console.log('left: ', left);
            console.log('right', right);
        }
        mid = Math.floor((left + right) / 2);
    }
    return nums[left] < nums[right] ? right : left; 
};

/*
algo1
determine a midpoint
check if the midpoint is a peak
if not
check the left half and the right half recursively
*/