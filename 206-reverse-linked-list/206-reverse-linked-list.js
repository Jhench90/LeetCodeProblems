/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) {
        return head
    }
    let previous = null
    let current = head
    let next = head.next
    
    while (current !== null) {
        current.next = previous
        
        previous = current
        current = next
        if (next !== null) {
            next = next.next
        }
    }
    return previous
};