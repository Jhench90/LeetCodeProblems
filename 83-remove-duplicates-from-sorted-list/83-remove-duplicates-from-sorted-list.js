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
var deleteDuplicates = function(head) {
    let node = head
    if (head === null) { return head }
    if (node.next === null) { return head }
    let nextNode = node.next
    
    while (node !== null) {
        while (node.val === nextNode.val) {
           nextNode = nextNode.next
           if (nextNode === null) {
               node.next = null
               return head
           } else if (node.val !== nextNode.val) {
               node.next = nextNode
           }
        }
        node = node.next;
        nextNode = node.next;
        if (nextNode === null) { return head }
    }
};