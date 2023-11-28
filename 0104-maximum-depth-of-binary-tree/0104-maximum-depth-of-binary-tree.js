var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const maxDepthHelper = (node) => {
        if (!node) {
            return 0;
        }

        const leftDepth = maxDepthHelper(node.left);
        const rightDepth = maxDepthHelper(node.right);

        return Math.max(leftDepth, rightDepth) + 1;
    };

    return maxDepthHelper(root);
};
// Developed by SENYA