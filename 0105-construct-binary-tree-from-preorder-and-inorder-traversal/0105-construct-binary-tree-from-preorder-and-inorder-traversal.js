function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var buildTree = function(preorder, inorder) {
    // Create a map to store the index of elements in inorder traversal
    const indexMap = new Map();
    inorder.forEach((val, index) => {
        indexMap.set(val, index);
    });

    const build = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);

        const rootIndexInorder = indexMap.get(rootVal);
        const leftSubtreeSize = rootIndexInorder - inStart;

        root.left = build(preStart + 1, preStart + leftSubtreeSize, inStart, rootIndexInorder - 1);
        root.right = build(preStart + leftSubtreeSize + 1, preEnd, rootIndexInorder + 1, inEnd);

        return root;
    };

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// Developed by SENYA and Ivan