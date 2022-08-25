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
    console.log('array:', this.array)
    console.log('size:', this.size)
    if (this.array.length < this.size) {
        this.array.push(val)
    } else {
        this.array.shift()
        this.array.push(val)
    }
    
    let sum = this.array.reduce((acc, num)=>{
       return acc + num
    }, 0)   
    console.log(sum)
    return sum / this.array.length
    //reduce and calc avg
};



/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */