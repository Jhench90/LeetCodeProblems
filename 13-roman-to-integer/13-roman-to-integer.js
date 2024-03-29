/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < map[s[i+1]]) {
            sum -= map[s[i]]
            sum += map[s[i+1]]
            i += 1
        } else {
            sum += map[s[i]]
        }
    }
    return sum
};

//time complexity - O(1) (because the constraint of the problem is a max value 
//of 3999)
//space complexity - O(1)

//another approach is to set the intermediate symbols in the map
//this "precomputes" the math operations
//time and space complexity is the same