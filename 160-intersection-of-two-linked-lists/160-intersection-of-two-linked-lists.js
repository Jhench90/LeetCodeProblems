/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let node = headA
    while (node !== null) {
        node.seen = true
        node = node.next
    }
    node = headB
    while (node !== null) {
        if (node.seen === true) {
            return node
        }
        node = node.next
    }
    return null
};

//iterate thru list1
//mark each node

//iterate thru list2
//check all nodes if marked
//if marked
//return node immediately