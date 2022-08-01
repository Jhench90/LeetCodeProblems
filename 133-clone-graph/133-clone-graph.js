/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node===null){
        return null
    }
  let q = []
  let map = {}
  let mapOldNodes = {}
  q.push(node)

  while (q.length > 0) {
    let first = q.shift()
    if (map[first.val] === undefined) {
      let newNode = new Node(first.val, [])
      map[first.val] = newNode
      mapOldNodes[first.val] = first
      first.neighbors.forEach((neighbor)=>{
        if (map[neighbor.val] === undefined) {
          q.push(neighbor)
        }
      })
    }
    
  }
  for (var k in map) {
    mapOldNodes[k].neighbors.forEach((neighbor)=>{
      map[k].neighbors.push(map[neighbor.val])
    })
  }
  return map[1] 
};