/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let ans = [];
    let str = '';
    let index = 0;
    
    let mappings = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n','o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    
    const recurse = (index) => {
        let letters = mappings[digits[index]];
        letters.forEach((letter)=>{
            str += letter;
            if (digits[index + 1] !== undefined) {
                recurse(index + 1);
            }
            if (str.length === digits.length) { ans.push(str); }
            str = str.slice(0, index);
        })
    }
    if (digits.length > 0) { recurse(0); }
    
    
    return ans;
};

/*
algo1 - back tracking brute force
write a mapping of numbers to letters with an array


*/