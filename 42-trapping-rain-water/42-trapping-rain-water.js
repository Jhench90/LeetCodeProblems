/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMaxes = [];
    let rightMaxes = [];
    let max = -Infinity;
    let trappedWater = 0;
    
    const findMaxes = (array, value, id) => {
         if (value > max) { max = value; }
         array.push(max);
    }
    
    for (let i = 0; i < height.length; i++) {
        findMaxes(leftMaxes, height[i], 1);        
    }
    max = -Infinity;
    for (let i = height.length - 1; i >= 0; i--) {
        findMaxes(rightMaxes, height[i], 2);
    };
    
    for (let i = 0; i < leftMaxes.length; i++) {
        let column = Math.min(leftMaxes[i], rightMaxes[height.length -1 - i]) - height[i];
        trappedWater += column;
    }
    return trappedWater;
}