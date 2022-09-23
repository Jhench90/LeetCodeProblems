/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let newHead = null;
    let newNode
    let node = head;
    
    //step 1 - create newLL with next property only
    while (node) {
        if (newHead) {
            newNode.next = new ListNode(node.val);
            newNode = newNode.next;
        } else {
            newHead = new ListNode(node.val);
            newNode = newHead;
        }
        node = node.next;
    }
    
    //step 2 - traverse LLs in parallel and connect nodes with beacon property
    //while traversing through newLL, traverse through oldLL in parallel,
    node = head;
    newNode = newHead;
    
    while (node) {
        if (node.random === null) {
            newNode.random = null;
            node = node.next;
            newNode = newNode.next;
            continue;
        }
        node.random.beacon = "lit";
        
        let searchNode = head;
        let newSearchNode = newHead;
        while (searchNode.beacon !== 'lit') {
            searchNode = searchNode.next;
            newSearchNode = newSearchNode.next;
            if (searchNode === null) break;
        }
        newNode.random = newSearchNode;
        delete node.random.beacon;
        
        node = node.next;
        newNode = newNode.next;
    }
    
    return newHead;
};

/*
algorithm
generate newLL using next property, dont worry about random yet

while traversing through newLL
traverse through oldLL in parallel
travel to oldLL.random and mark it with "beacon" property
nest another loop that traverses through newLL and oldLL in parallel until reach "beacon"
set newLL.random equal to newLL current node in parallel with beacon
remove beacon

*/