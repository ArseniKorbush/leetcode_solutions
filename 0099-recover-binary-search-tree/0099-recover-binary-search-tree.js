var recoverTree = function(root) {
    let first = null, second = null, prev = new TreeNode(-Infinity);
    
    // Function to perform in-order traversal
    const inorder = function(node) {
        if (node === null) return;
        
        inorder(node.left);
        
        // Check for misplaced nodes
        if (first === null && prev.val >= node.val) {
            first = prev;
        }
        if (first !== null && prev.val >= node.val) {
            second = node;
        }
        prev = node;
        
        inorder(node.right);
    };
    
    // Start in-order traversal
    inorder(root);
    
    // Swap the values of the misplaced nodes
    [first.val, second.val] = [second.val, first.val];
};
// Developed by SENYA