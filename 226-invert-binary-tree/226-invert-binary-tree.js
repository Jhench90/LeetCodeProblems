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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const recurse = (r) => {
        let left = r.left
        let right = r.right
        r.left = right
        r.right = left
        if (r.left !== null) {
            recurse(r.left)
        }
        if (r.right !== null) {
            recurse(r.right)
        }
    }
    if (root !== null) {
        recurse(root)    
    }
    
    return root
};