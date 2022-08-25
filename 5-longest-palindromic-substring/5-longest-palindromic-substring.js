/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return ''
    if (s.length === 1) return s
    let longest = ''
    
    for (let i = 0; i < s.length; i++) {
        //first case: midpoint is index
        let word = s[i]
        if (word.length > longest.length) longest = word
        let c = 1
        let condition = word[0] === word[word.length - 1]
        while (condition) {
            let left = s[i-c]
            let right = s[i+c]
            condition = left === right
            if (left !== undefined && right !== undefined) {
                if (left === right) {
                    word = left + word + right
                    if (word.length > longest.length) longest = word
                }                
            } else { break }
            c++
        }    
    
        //second case: midpoint is inbetween index and index + 1
        //only runs if index < s.length - 1
        if (i < s.length - 1) {
            let word = s[i] + s[i+1]
            let c = 1
            let condition = word[0] === word[word.length - 1]
            if (condition) {
                    if (word.length > longest.length) longest = word
                }
            while (condition) {
                let left = s[i-c]
                let right = s[i+c+1]
                condition = left === right
                
                if (left !== undefined && right !== undefined) {
                     if (left === right) {
                         word = left + word + right
                         if (word.length > longest.length) longest = word
                    }                
                } else { break }
                c++
             }    
        }
    }
    return longest   
};
// console.log('expect bbb, actual: ', longestPalindrome('abbb'))
// console.log('expect bbbb, actual: ', longestPalindrome('abbbb'))
// console.log('expect bb, actual: ', longestPalindrome('cbbd'))

//brute force solution?
    //iterate through string s
    //determine every possible substring
    //check all substrings for longest + palindrome
    //O(n) * O(n) * O(n) = O(n^3)
    
    //better algorithm?
    //iterate thru string s
    //set a midpoint for middle of palindrome
    //check 1 by 1 outer chars to see if palindrome
    
    //O(n) * O(n) = O(n^2)
    
    /*
    a
    a | 
    b
    b |
    c
    c |
    d
    d |
    e
    */