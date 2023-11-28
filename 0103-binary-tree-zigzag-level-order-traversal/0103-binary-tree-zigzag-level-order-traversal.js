var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    let leftToRight = true;
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (leftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
        leftToRight = !leftToRight;
    }

    return result;
};
// Developed by SENYA and Willy