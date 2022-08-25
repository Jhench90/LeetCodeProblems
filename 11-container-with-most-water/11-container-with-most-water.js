/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = -Infinity
    let area
    let h
    let w
    
    while(left < right) {
        //less height * width
        h = Math.min(height[left], height[right])
        w = right - left
        area = h * w
        maxArea = Math.max(maxArea, area)
        
        //move left or right?
        if (height[left] < height[right]) {
            left += 1
        } else { right -= 1 }
    }
    return maxArea
    
};

//alg1 - brute force
//iterate thru height
//iterate thru height again index + 1 to determine max volumes
//O(n^2)

//alg2 - 2 pointer
//left and right
//calculate area, determine max
//since the shorter pointer is the limiting factor, move the shorter pointer inwards
//O(n)
