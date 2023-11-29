function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var isBalanced = function(root) {
  const getHeight = (node) => {
    if (!node) return 0;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    // If subtree is unbalanced or height difference > 1, return -1
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    // Return height of the current node
    return 1 + Math.max(leftHeight, rightHeight);
  };

  const isBalancedHelper = (node) => {
    if (!node) return true;

    // Check if left and right subtrees are balanced
    const leftBalanced = isBalancedHelper(node.left);
    const rightBalanced = isBalancedHelper(node.right);

    // If any subtree is unbalanced, return false
    if (!leftBalanced || !rightBalanced) return false;

    // Check balance condition for the current node
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return Math.abs(leftHeight - rightHeight) <= 1;
  };

  return isBalancedHelper(root);
};
// Developed by SENYA