/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
        //0 0
        //1 1
        //2 10
        //3 11
        //4 100
        //5 101
        //6 110
        //7 111
        //8 1000
        // 1110
        //    1
        // i 3
        // j 0
        // i 2
        // j -1
     let i = a.length - 1
    let j = b.length - 1
    let carry = 0
    let ans = ''
    while (i >= 0 || j >= 0) {
        let first = Number(a[i]) || 0
        let second = Number(b[j]) || 0
        i--
        j--
        if (first + second + carry === 0) {
            ans = '0' + ans
            carry = 0
        } else if (first + second + carry === 1) {
            ans = '1' + ans
            carry = 0
        } else if (first + second + carry === 2) {
            ans = '0' + ans
            carry = 1
        } else {       
            ans = '1' + ans
            carry = 1
        }
    }
    if (carry === 1) {
        ans = '1' + ans
    }
    return ans    
};