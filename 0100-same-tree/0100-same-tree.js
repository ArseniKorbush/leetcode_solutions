var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    let queue = [root.left, root.right];

    while (queue.length > 0) {
        let left = queue.shift();
        let right = queue.shift();

        if (!left && !right) {
            continue;
        }

        if (!left || !right || left.val !== right.val) {
            return false;
        }

        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }

    return true;
};
// Developed by SENYA