/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) {
        return null
    }
    let list3 = {}
    
    let node1 = list1
    let node2 = list2
    let referenceNode = list3
    
    while (node1 !== null || node2 !== null) {
        if (node1 && node2) {
            if (node1.val <= node2.val) {
                 referenceNode.val = node1.val
                node1 = node1.next
            } else {
                 referenceNode.val = node2.val
                node2 = node2.next
            } 
        } else {
            if (node1) {
                referenceNode.val = node1.val
                node1 = node1.next
            }
            if (node2) {
                 referenceNode.val = node2.val
                node2 = node2.next
            }
        }
        if (!node1 && !node2) {
            referenceNode.next = null
        } else {
            referenceNode.next = {}
            referenceNode = referenceNode.next     
        }
       
    }
    referenceNode.next = null
    return list3
};