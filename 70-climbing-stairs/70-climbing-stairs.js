/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   const memoize = (n, memo={1:1, 2:2}) => {
       if (memo[n] !== undefined ) return memo[n]
       memo[n] = memoize(n-1, memo) + memoize(n-2, memo)
       return memo[n]
   }
   return memoize(n)
};