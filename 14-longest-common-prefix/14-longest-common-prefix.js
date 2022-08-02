/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let overlap = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let word = strs[i]
        if (overlap.length > word.length) {
            for (let i = 0; i < overlap.length; i++) {
                if (overlap[i] === word[i]) {
                    continue
                } else {
                    overlap = overlap.slice(0, i)
                    break
                }
            }
        } else {
            for (let i = 0; i < word.length; i++) {
                if (overlap[i] === word[i]) {
                    continue
                } else {
                    overlap = overlap.slice(0, i)
                    break
                }
            }
            
        }
    }
    return overlap
};