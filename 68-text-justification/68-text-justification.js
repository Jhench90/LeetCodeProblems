/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let obj = {}
    let thisLine = []
    let line = 1
    let counter = 0
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]
        if (currentWord.length + counter <= maxWidth) {
            counter += currentWord.length + 1
            thisLine.push(currentWord)
        } else {
            obj[line] = {thisLine: thisLine, counter: counter - 1}
            counter = 0
            line += 1
            thisLine = []
            thisLine.push(currentWord)
            counter += currentWord.length + 1
        }
        if (i === words.length - 1) {
            if (obj[line] === undefined) {
                obj[line] = {thisLine: thisLine, counter: counter - 1}
            }
        }
    }
    let result = []
    for (key in obj) {
        let line = obj[key]['thisLine']
        let counter = obj[key]['counter']
        
        
        for (let i = 0; i < line.length; i++) {
            if (i !==line.length - 1) {
                let word = line[i] += ' '
                line.splice(i, 1, word)
            }
        }
        if (Number(key) === Object.keys(obj).length) {
           while (counter < maxWidth) {
               let lastWord = line[line.length - 1]
               lastWord += ' '
               line.splice(line.length - 1, 1, lastWord)
               counter += 1
           }
            result.push(line.join(''))
            return result
        }
        if (counter === maxWidth) {
            result.push(line.join(''))
            continue
        }
        while (counter <= maxWidth) {
            for (let i = 0; i <= line.length; i++) {
                if (i === line.length - 1 || i === line.length) {
                    i = 0
                }
                if (counter === maxWidth) {
                    result.push(line.join(''))
                    break
                 
                }
                let currentWord = line[i]
                currentWord += ' '
                line.splice(i, 1, currentWord)
                counter +=1
                
            }
            counter +=1
        }
    } 
    return result
};
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],
20))
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"],
16))