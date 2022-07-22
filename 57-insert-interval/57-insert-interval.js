/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
   let result = []
   let needToAdd = true
   
   for (let i = 0; i < intervals.length; i++) {
       let interval = intervals[i]
       if (interval[1] < newInterval[0]) {
           result.push(interval)
       } else if (newInterval[1] < interval[0]) {
           if (needToAdd) {
               result.push(newInterval)
               needToAdd = false
           } 
           result.push(interval)
       } else {
           newInterval[0] = Math.min(interval[0], newInterval[0])
           newInterval[1] = Math.max(interval[1], newInterval[1])
       }
   }
    if (needToAdd) {
        result.push(newInterval)
    }
   return result
};
