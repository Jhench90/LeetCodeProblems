var numIslands = function(grid) {
    let islands = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '0') continue
            islands += 1
            clear(i, j)
        }
    }
    function clear (i, j) {
        if (grid[i][j] === '0') return
        grid[i][j] = '0'
        i - 1 >= 0 ? clear(i-1, j) : null
        j - 1 >= 0 ? clear(i, j-1): null
        i + 1 < grid.length ? clear(i+1,j) : null 
        j + 1 < grid[0].length ? clear(i, j+1): null
    }
    return islands
    
};