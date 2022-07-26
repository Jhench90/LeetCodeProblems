/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts = [0,...horizontalCuts.sort((a,b)=>a-b),h]
    verticalCuts = [0,...verticalCuts.sort((a,b)=>a-b),w]
    let horimax = 1
    let vertimax = 1
    for (let i = 1; i < horizontalCuts.length;i++) {
        horimax = Math.max(horizontalCuts[i] - horizontalCuts[i - 1],horimax)
    }
    for (let i = 1; i < verticalCuts.length;i++) {
        vertimax = Math.max(verticalCuts[i] - verticalCuts[i - 1],vertimax)
    }
    return ( BigInt(vertimax) *  BigInt(horimax)) % 1000000007n
};