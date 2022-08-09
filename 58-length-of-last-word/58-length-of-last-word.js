/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordsArr = s.split(' ')
    let lastWord
    wordsArr.forEach((word)=>{
        if (word.length > 0) {
            lastWord = word
        }
    })
    return lastWord.length
};