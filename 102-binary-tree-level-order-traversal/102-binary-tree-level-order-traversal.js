/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   let result = []
   
   function DFS (r, c) {
       if (r == null) return
       if (result[c] == undefined) result[c] = []
       result[c].push(r.val)
       DFS(r.left, c+1)
       DFS(r.right, c+1)
   }
    DFS(root, 0)
   
   return result
}