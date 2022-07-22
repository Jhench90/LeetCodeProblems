/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if (k >= points.length) {
        return points
    }
    for (let i = 0; i < points.length; i++) {
        let x = points[i][0]
        let y = points[i][1]
        let result = x**2 + y**2
        points[i] = {point: points[i], distance: result}
    }
    console.log('points: ', points)
    // [{point: [1, 2], distance: 3},{},{}]
    
   function quickSort(points) {
       if (points.length === 0) {
           return points
       }
       let mid = Math.floor(points.length / 2)
       let left = []
       let middle = []
       let right = []
       for (let i = 0; i < points.length; i++) {
           if (points[i].distance < points[mid].distance) {
               left.push(points[i])
           } else if (points[i].distance > points[mid].distance) {
               right.push(points[i])
           } else {
               middle.push(points[i])
           }
       }
       return [...quickSort(left), ...middle, ...quickSort(right)]
   }
    let array = quickSort(points)

    return array.slice(0,k).map((obj, i)=> obj.point)
};