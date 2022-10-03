/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let maxMinuteCount = -Infinity;
    let freshCount = 0;
    let queue = [];
    let i = 0;
    
    const BFS = () => {
        while (i < queue.length) {
           
            let row = queue[i][0];
            let col = queue[i][1];
            let count = queue[i][2];
             if (grid[row][col] === 3 ) { i++; continue; }
            if (count > maxMinuteCount) {
                console.log(count);
                maxMinuteCount = count;
            }
            if (grid[row][col] === 1 ) {
               grid[row][col] = 3;
                if (freshCount > 0) freshCount--;
            }
            
        
            //left
             if (col - 1 >= 0) {
                if (grid[row][col - 1] === 1) {
                    queue.push([row, col - 1, count+1])
                }
            }
            //right
            if (col + 1 < grid[0].length) {
                if (grid[row][col+1] === 1) {
                    queue.push([row, col + 1, count+1])
                }
            }
            //up
            if (row - 1 >= 0) {
                if (grid[row-1][col] === 1) {
                    queue.push([row-1, col, count+1])
                }
            }
            //down
            if (row + 1 < grid.length) {
                if (grid[row+1][col] === 1) {
                    queue.push([row+1, col, count+1])
                }
            }
            i++;
        }
    }
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let square = grid[row][col];
            if (square === 1) {
                freshCount++;
            } else if (square === 2) {
                queue.push([row, col, 0])
            } else {
                //square is 0
            }
        }
    }
    BFS();
    if (freshCount > 0) {
        return -1
    } else {
        if (maxMinuteCount === -Infinity) {
            return 0;
        } else {
            return maxMinuteCount;
        }
    }   

//find a rotten orange
//perform BFS rotting of adjacent oranges
//for everyadjacent orange rotted
//decrement freshOrangeCount
//increment the MinuteCount at each level
//if minuteCount is greater than maxMinuteCount
//maxMinuteCount equals minuteCount

//at the end, if we still have some freshOranges leftover
//return -1
//else
//return minuteCount;
    
};

//initiate a maxMinuteCount

//iterate thru grid
//when find a freshOrange
//increment freshOrangeCount

//find a rotten orange
//perform BFS rotting of adjacent oranges
//for everyadjacent orange rotted
//decrement freshOrangeCount
//increment the MinuteCount at each level
//if minuteCount is greater than maxMinuteCount
//maxMinuteCount equals minuteCount

//at the end, if we still have some freshOranges leftover
//return -1
//else
//return minuteCount;