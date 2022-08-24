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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sum = 0;
    let boolean = false;
    
    (function DFS(root, count) {
        if (root === null || boolean === true) return;
        count += root.val
        if (root.left === null && root.right === null) {
            boolean = count === targetSum ? true : false 
        }
        DFS(root.left, count)
        DFS(root.right, count)
    })(root, 0);
    
    return boolean;    
    //declare sum variable = 0
    //declare boolean var is false
    
    //traverse tree using DFS
    //if encounter a leaf node
    //if sum is target sum
    //boolean is true
    
    //return boolean
};