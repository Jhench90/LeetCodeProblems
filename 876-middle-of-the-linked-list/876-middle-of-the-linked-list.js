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
var middleNode = function(head) {
    let storage = []
    let node = head
    let value = head.val
    while (value !== null) {
        storage.push(node)
        node = node.next
        if (node) {
            value = node.val
        } else {
            value = null
        }
    }
    let number = Math.ceil((storage.length - 1) / 2)
    return storage[number]
};