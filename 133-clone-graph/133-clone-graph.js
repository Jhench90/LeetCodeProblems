function cloneGraph(root) {
    if (root === null) return null
    let q = []
    let newMap = {}
    let oldMap = {}
    q.push(root)

    while (q.length > 0) {
        let node = q.shift()
        let newNode = new Node(node.val, [])
        oldMap[node.val] = node
        newMap[node.val] = newNode
        node.neighbors.forEach((neighbor)=>{
            if (newMap[neighbor.val] === undefined) {
                q.push(neighbor)
            }
        })
    }
    for (var key in oldMap) {
        oldMap[key].neighbors.forEach((neighbor)=>{
            newMap[key].neighbors.push(newMap[neighbor.val])
        })
    }
    
    return newMap[1]
}