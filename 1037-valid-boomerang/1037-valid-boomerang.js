/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
   let point1 = points[0]
   let point2 = points[1]
   let point3 = points[2]
   
   let slope1 = (point2[1]-point1[1])/(point2[0]-point1[0])
   let slope2 = (point3[1]-point2[1])/(point3[0]-point2[0])
   
   if (slope1 === slope2) {
      return false
   }
   if (point1[0] === point2[0] && point1[1] === point2[1] || 
      point2[0] === point3[0] && point2[1] === point3[1] || 
      point1[0] === point3[0] && point1[1] === point3[1]) {
      return false
      }
   if (point1[0] === point2[0] && point2[0] === point3[0]) {
      return false
   }
   if (point1[1] === point2[1] && point2[1] === point3[1]) {
      return false;
   }
   return true
};