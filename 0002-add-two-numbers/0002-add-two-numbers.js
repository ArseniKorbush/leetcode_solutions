/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(); // Create a dummy node to start the result linked list
    let current = dummy; // Pointer for the current node in the result linked list
    let carry = 0; // Variable to store the carry while adding digits
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    
    return dummy.next; // Return the next node after the dummy, which is the actual result
};
