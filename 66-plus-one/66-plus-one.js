/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0
    let leftover = 0
    let i = digits.length - 1 //0
    let sum = digits[i] + 1 //10
    
    if (sum >= 10) {
        calculateCarryAndLeftover()
    } else {
        digits[i] = sum;
    }
    function calculateCarryAndLeftover() {
        leftover = sum - 10 //0
        carry = 1 //1
        carryHelp()
    }
    
    function carryHelp() {
        digits[i] = leftover //[0]
        i-- //-1
        if (i < 0) { 
            sum = carry //1
        } else {
            sum = digits[i] + carry   
        }
        if (sum >= 10) {
           calculateCarryAndLeftover()
        } else {
            if (i < 0) {
                digits.unshift(sum) //[1,0]
            } else {
                digits[i] = sum;            
            }
        }   
    }    
    return digits
};