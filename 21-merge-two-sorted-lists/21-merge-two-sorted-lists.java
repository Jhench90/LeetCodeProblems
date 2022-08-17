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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        //if list1 is null
        if (list1 == null) { return list2; }
        if (list2 == null) { return list1; }
        //return list2
        //if list2 is null
        //return list1
        
      //compare list1val with list2val
        //if list1val is less than list2val
        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
        //set list1val's next property to equal the merge of list1val.next with list2val
        //return list1
        //if list2val is less than list1val
        //set list2val next property to equal the merge of list2val.next with list1val
        //return list2
    }
}