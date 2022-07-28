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
    var result = [];
    var level = 0;
    traverse(root, level);
    return result;

    function traverse(root, level) {
        if (root === null) {
            return;
        }
        else {
            if (level >= result.length) {
                 result[level] = [];
            }
            result[level].push(root.val);
            traverse(root.left, level + 1);
            traverse(root.right, level + 1);
        }
    }};