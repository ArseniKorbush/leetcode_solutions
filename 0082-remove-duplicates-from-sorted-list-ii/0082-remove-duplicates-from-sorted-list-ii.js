// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var deleteDuplicates = function(head) {
    // Create a dummy node to handle cases where the head itself is a duplicate
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current !== null) {
        // If current node has duplicates
        while (current.next !== null && current.val === current.next.val) {
            current = current.next; // Move current pointer to the last duplicate node
        }

        // No duplicates found
        if (prev.next === current) {
            prev = prev.next; // Move prev pointer ahead
        } else {
            prev.next = current.next; // Remove duplicates by updating pointers
        }

        current = current.next; // Move current pointer to the next node
    }

    return dummy.next; // Return the modified list without duplicates
};
// Developed by SENYA