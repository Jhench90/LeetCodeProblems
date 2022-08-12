var maximumSwap = function(num) {
    let arr = []
    // debugger;
    
    while (num !== 0) {
        let digit = num % 10
        arr.unshift(digit)
        if (num >= 10) {
            num -= digit
            num /= 10
        } else {
            num -= digit
        }   
    }
    console.log(arr)
    
    //loop through arr
    //if exists a num on the right side larger
    //swap the largest one on right side

    for (let i = 0; i < arr.length; i++) {
        // debugger;
        let num1 = arr[i]
        let max = num1
        let maxI
        for (let j = i+1; j <arr.length; j++) {
            let num2 = arr[j]
            if (num2 >= max) {
                max = num2
                maxI = j
            }
        }
        if (max === arr[i]) continue
        if (maxI !== undefined) {
            let temp = arr[i]
            arr[i] = arr[maxI]
            arr[maxI] = temp
            return Number(arr.join(''))
        }
    }
    return Number(arr.join(''))
};