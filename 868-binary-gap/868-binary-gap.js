/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary = n.toString(2)
    let count = 0
    let distance = 0
    let array = binary.split('')
    for (let i = 1; i <array.length; i++) {
        let num = array[i]
        count +=1 
        if (num === '1') {
            if (count > distance) {
                distance = count
            }
            count = 0
        }
    }
    return distance
};