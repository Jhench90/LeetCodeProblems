/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // while (tokens.length > 1) {
        for (let i = 0; i < tokens.length; i++) {
            // console.log(tokens)
            let twoBack = Number(tokens[i-2])
            let oneBack = Number(tokens[i-1])
            let current = tokens[i]
            if (current === '+' || current === '-' || current === '*' || current === '/') {
                console.log(tokens)
                if (current === '+') {
                    let sum = twoBack + oneBack
                    tokens.splice(i-2, 3, sum)
                }
                if (current === '-') {
                    let diff = twoBack - oneBack
                    tokens.splice(i-2, 3, diff)
                }
                if (current === '*') {
                    let times = twoBack * oneBack
                    tokens.splice(i-2, 3, times)
                }
                if (current === '/') {
                    let remainder = twoBack / oneBack
                    
                    if (Math.floor(remainder) !== remainder) {
                        remainder = remainder.toString()
                        let cut = remainder.indexOf('.')
                        remainder = remainder.slice(0, cut+1)
                        console.log('remainder: ', remainder)
                        remainder = Number(remainder)
                    }
                    
                    
                    
                    // console.log('newRemainder: ', remainder)
                    tokens.splice(i-2, 3, remainder)
                }
                i-=2
            }
        }
    return Math.floor(tokens[0])
    // }
};
// console.log('9: ', evalRPN(["2","1","+","3","*"])) //9
// console.log('6: ', evalRPN(["4","13","5","/","+"])) //6
// console.log('22: ', evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log('-7', evalRPN(["4","-2","/","2","-3","-","-"]))