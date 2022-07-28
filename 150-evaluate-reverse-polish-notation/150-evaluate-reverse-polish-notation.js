/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let operations = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b,
        '/': (a,b)=> a/b >= 0 ? Math.floor(a/b) : Math.ceil(a/b) 
    }
    
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        if (operations[token]) {
            let num1 = Number(stack.pop())
            let num2 = Number(stack.pop())
            let result = operations[token](num2, num1)
            stack.push(result)
        } else {
            stack.push(token)
        }
    }
    return stack[0]
}



// var evalRPN = function(tokens) {
//         for (let i = 0; i < tokens.length; i++) {
//             let twoBack = Number(tokens[i-2])
//             let oneBack = Number(tokens[i-1])
//             let current = tokens[i]
//             if (current === '+' || current === '-' || current === '*' || current === '/') {
//                 if (current === '+') {
//                     let sum = twoBack + oneBack
//                     tokens.splice(i-2, 3, sum)
//                 }
//                 if (current === '-') {
//                     let diff = twoBack - oneBack
//                     tokens.splice(i-2, 3, diff)
//                 }
//                 if (current === '*') {
//                     let times = twoBack * oneBack
//                     tokens.splice(i-2, 3, times)
//                 }
//                 if (current === '/') {
//                     let remainder = twoBack / oneBack
                    
//                     if (Math.floor(remainder) !== remainder) {
//                         remainder = remainder.toString()
//                         let cut = remainder.indexOf('.')
//                         remainder = remainder.slice(0, cut+1)
//                         remainder = Number(remainder)
//                     }
//                     tokens.splice(i-2, 3, remainder)
//                 }
//                 i-=2
//             }
//         }
//     return Math.floor(tokens[0])
// };
// console.log('9: ', evalRPN(["2","1","+","3","*"])) //9
// console.log('6: ', evalRPN(["4","13","5","/","+"])) //6
// console.log('22: ', evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log('-7', evalRPN(["4","-2","/","2","-3","-","-"]))