var Solution = function(nums) {
    this.array = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.array
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let newArray = [];
    let tempArray = this.array.slice()

    while (newArray.length !== this.array.length) {
      let randomIndex = Math.floor(Math.random() * tempArray.length)
      newArray.push(tempArray[randomIndex])
      tempArray.splice(randomIndex, 1)     
    }
    return newArray    
};