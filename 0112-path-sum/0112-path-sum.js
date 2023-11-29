var hasPathSum = function(root, targetSum) {
  if (!root) return false; // If the root is null, return false

  // If the current node is a leaf and its value matches the target sum, return true
  if (!root.left && !root.right && root.val === targetSum) return true;

  // Check recursively for the targetSum in the left and right subtrees
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
// EBoi