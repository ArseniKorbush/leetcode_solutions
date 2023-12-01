/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

var inorderTraversal = function(root) {
    const result = [];

    // Helper function to perform inorder traversal
    const inorder = (node) => {
        if (node === null) {
            return;
        }

        inorder(node.left); // Traverse left subtree
        result.push(node.val); // Process current node
        inorder(node.right); // Traverse right subtree
    };

    inorder(root); // Start the inorder traversal from the root

    return result;
};
// Developed by SENYA