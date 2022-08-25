/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        
        targetSum -= root.val;
        
        if ((root.left == null) && (root.right == null)) {
            return (targetSum == 0);
        }
        
        return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);     
    }
}
/*
check if root is null, return if so
subtract val from targetSum
if root left and root right are both null
return if targetSum = 0
return recursively searching left or right subtrees returning true
*/
