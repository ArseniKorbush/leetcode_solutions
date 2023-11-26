function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var rotateRight = function(head, k) {
    if (!head || k === 0) return head;

    // Calculate the length of the list
    let length = 1;
    let current = head;
    while (current.next !== null) {
        length++;
        current = current.next;
    }

    // Calculate the actual rotation amount
    k = k % length;
    if (k === 0) return head;

    // Find the new tail (the node at position length - k)
    let newTailPos = length - k;
    current.next = head; // Connect the original list to form a loop

    // Traverse to the new tail position
    for (let i = 0; i < newTailPos; i++) {
        current = current.next;
    }

    // Break the loop at the new tail position
    let newHead = current.next;
    current.next = null;

    return newHead;
};
