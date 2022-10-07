/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
      ListNode temp = new ListNode();
        temp.next = head;
        ListNode prevNode = temp;
        ListNode firstNode = head;
        ListNode secondNode;
        
        while (firstNode != null) {
            secondNode = firstNode.next;
            
            if (secondNode != null) {
                prevNode.next = secondNode;
                firstNode.next = secondNode.next;
                secondNode.next = firstNode;
                
                prevNode = firstNode;
                firstNode = firstNode.next;
            } else {
                firstNode = null;
            }
            
        }
        
        return temp.next;
    }
}

/*
algorithm

set dummyhead equal to empty list node
dummyhead next equals start of list
set node = dummyhead

while node.next.next is not null
call node next the firstNode
call node next next the secondNode
call node next next next the thirdNode
say node next equals secondNode
say secondNode next equals firstNode
say firstNode next equals thirdNode
node = node next next

return dummyhead.next

*/