var findMode = function(node) {
    //edge cases
    if (node === null) return
    
    let mode = []
    let prev = undefined
    let count = 0
    let max = 0
    
    function inOrder(node) {
        if (node === null) return
        inOrder(node.left)
    
        if (prev === node.val) {
            count++
        } else {
            prev = node.val
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