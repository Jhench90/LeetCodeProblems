var findMode = function(node) {
    //edge cases
    if (node === null) return
    // if (node.left === null && node.right === null) return [node.val]
    
    let mode = []
    let current = undefined
    let count = 0
    let max = 0
    
    function inOrder(node) {
        if (node === null) return
        inOrder(node.left)
    
        if (current === node.val) {
            count++
        } else {
            current = node.val
            count = 1
        }
        if (count === max) {
            mode.push(node.val)
        }
        if (count > max) {
            max = count
            mode = [node.val]
        }
        inOrder(node.right)
    }
    inOrder(node)
    
    return mode
};

//preorder solution here