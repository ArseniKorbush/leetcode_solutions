function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var sortedListToBST = function(head) {
  if (!head) return null;

  const findMiddle = (start, end) => {
    let slow = start;
    let fast = start;
    while (fast !== end && fast.next !== end) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };

  const buildBST = (start, end) => {
    if (start === end) return null;

    const mid = findMiddle(start, end);
    const root = new TreeNode(mid.val);

    root.left = buildBST(start, mid);
    root.right = buildBST(mid.next, end);

    return root;
  };

  return buildBST(head, null);
};
// Developed by SENYA