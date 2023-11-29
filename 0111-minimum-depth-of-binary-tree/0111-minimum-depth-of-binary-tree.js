function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var minDepth = function(root) {
  if (!root) return 0; // If the root is null, return 0

  if (!root.left && !root.right) return 1; // If the node is a leaf node, return 1

  let min = Number.MAX_VALUE; // Initialize the minimum depth

  // Traverse left subtree if exists
  if (root.left) {
    min = Math.min(min, minDepth(root.left)); // Recursively calculate the minimum depth of the left subtree
  }

  // Traverse right subtree if exists
  if (root.right) {
    min = Math.min(min, minDepth(root.right)); // Recursively calculate the minimum depth of the right subtree
  }

  return min + 1; // Return the minimum depth, adding 1 for the current node
};
// Developed by SENYA