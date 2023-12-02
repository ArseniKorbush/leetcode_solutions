/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Function to flatten the binary tree into a linked list
var flatten = function(root) {
    // Check for null or empty tree
    if (!root) return;
    
    let currentNode = root;
    while (currentNode !== null) {
        if (currentNode.left !== null) {
            let rightMost = currentNode.left;
            while (rightMost.right !== null) {
                rightMost = rightMost.right;
            }
            
            rightMost.right = currentNode.right;
            currentNode.right = currentNode.left;
            currentNode.left = null;
        }
        
        currentNode = currentNode.right;
    }
};

// Developed by SENYA
