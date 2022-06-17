/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map()
    map.set("(", ")")
    map.set("{", "}")
    map.set("[", "]")
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        if (map.has(current)) {
            stack.push(current)
        } else {
            if (current === map.get(stack[stack.length - 1])) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    let answer
    (stack.length == 0) ? answer = true : answer = false 
    return answer
};