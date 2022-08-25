/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.array = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.array.length < this.size) {
        this.array.push(val)
    } else {
        this.array.shift()
        this.array.push(val)
    }
    
    let sum = this.array.reduce((acc, num)=>{
       return acc + num
    }, 0)
    return sum / this.array.length
};



/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */