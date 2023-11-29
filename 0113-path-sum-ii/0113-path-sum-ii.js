var pathSum = function(root, targetSum) {
  const result = [];

  const dfs = (node, sum, path) => {
    if (!node) return;

    path.push(node.val); // Add current node value to the path
    sum -= node.val; // Update the remaining sum

    if (!node.left && !node.right && sum === 0) {
      result.push([...path]); // If it's a leaf node and sum equals targetSum, add path to result
    } else {
      dfs(node.left, sum, path); // Recursively traverse left subtree
      dfs(node.right, sum, path); // Recursively traverse right subtree
    }

    path.pop(); // Remove current node value from path to backtrack
  };

  dfs(root, targetSum, []);

  return result;
};
// Developed by SENYA