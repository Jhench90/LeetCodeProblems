/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    if (hour < 0 || minutes < 0 || hour > 12 || minutes > 59) return
    hour = hour === 12 ? 0 : hour
    let minutesRatio = minutes / 60;
    let hourRatio = hour / 12 + minutesRatio / 12
    
//     console.log(hour, hourRatio)
//     console.log(minutes, minutesRatio)
    
    let minutesDeg = minutesRatio * 360
    let hourDeg = hourRatio * 360
    
    // console.log(minutesDeg, hourDeg)
    let diff = Math.abs(minutesDeg - hourDeg)
    return diff > 180 ? 360 - diff : diff
    
   
};
console.log('expect 165, actual: ', angleClock(12, 30))
console.log('expect 75, actual: ', angleClock(3, 30))

/*
Algorithm
edge cases
hours or minutes < 0
hours > 13
minutes > 59

calculate ratio of minute hand from 0 position
calculate ratio of hour hand from 0 position

subtract the ratios
multiply by 360

if answer is greater than 180, return 360 - answer, else return answer






Algorithm
calculate distance of minute hand from 0 position as ratio of 1.0
calculate distance of hour hand from 0 position as ratio of 1.0 + minute hand ratio * 30

calculate first - second math abs
calculate second - first math abs

take the lesser of the two angles calculated

multiply it by 360 and return the number

solution
 hour = hour === 12 ? 0 : hour
    let minuteRatio = minutes / 60;
    let minutesDegrees = minuteRatio * 360
    
    let hoursDegrees = hour * 30 + minutesDegrees / 12
    
    let distance = Math.abs(minutesDegrees - hoursDegrees)
    return distance > 180 ? 360 - distance : distance

*/