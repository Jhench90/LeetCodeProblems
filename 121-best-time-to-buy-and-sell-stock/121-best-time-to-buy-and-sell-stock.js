/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let low = prices[0]
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i]
        }
        if (prices[i] - low > profit) {
            profit = prices[i] - low
        }
    }
    if (profit > 0) {
        return profit
    }
    return 0
};