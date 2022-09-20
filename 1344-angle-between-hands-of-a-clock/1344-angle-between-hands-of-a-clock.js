/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    
    hour = hour === 12 ? 0 : hour
    let minuteRatio = minutes / 60;
    let minutesDegrees = minuteRatio * 360
    
    let hoursDegrees = hour * 30 + minutesDegrees / 12
    
    let distance = Math.abs(minutesDegrees - hoursDegrees)
    return distance > 180 ? 360 - distance : distance
};

/*
Algorithm
calculate distance of minute hand from 0 position as ratio of 1.0
calculate distance of hour hand from 0 position as ratio of 1.0 + minute hand ratio * 30

calculate first - second math abs
calculate second - first math abs

take the lesser of the two angles calculated

multiply it by 360 and return the number
*/