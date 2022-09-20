/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   let reference = [{val: 1000, char: 'M'},
                   {val: 900, char: 'CM'},
                   {val: 500, char: 'D'},
                   {val: 400, char: 'CD'},
                   {val: 100, char: 'C'},
                   {val: 90, char: 'XC'},
                   {val: 50, char: 'L'},
                   {val: 40, char: 'XL'},
                   {val: 10, char: 'X'},
                   {val: 9, char: 'IX'},
                   {val: 5, char: 'V'},
                   {val: 4, char: 'IV'},
                   {val: 1, char: 'I'}]
   let string = ''
   
       for (let i = 0; i < reference.length; i++) {
           let current = reference[i]
           while (current.val <= num) {
               string += current.char;
               num -= current.val
           }
       }
    
   return string
};

/*
Solution: Greedy algorithm: Make best possible decision at current time (
taking out highest symbol)
1. Find highest symbol can be subtracted from Integer, subtract it and add to answer
2. Find highest symbol can be subtracted from remainder, subtract it and add to answer

notes:
how to pick among ambiguous representation?
 --> select the representation with largest possible symbols at the start
 CXL is better than CXXXX
 C  XL(40) <-- pick this one
 C  X(10)
*/