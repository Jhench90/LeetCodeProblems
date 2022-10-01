/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
   if (root === null) return [];
    if (root.left === null && root.right === null) return [[root.val]];
    
    let node
    let head = {};
   let tail = {};
    head.next = root;
    root.prev = head;
    root.level = 0;
    root.next = tail;
    tail.prev = root;
    let ans = [];
    let levelArr = [];
    let level = -1;
    let move = 'right'
    
    while (head.next !== tail) { 
    // while (level !== 2) {
        LLtoArray(head.next);
              
        node = head.next;
        let myLevel
        
        if (move === 'right') {
            //shift it
            
            node = head.next;
            let myLevel = node.level;
            while (node.level === myLevel) { 
        
            head.next = node.next;
            head.next.prev = head;
            levelArr.push(node.val);
            
            //push its descendants
            //check left
            if (node.left) {
                node.left.level = node.level + 1;
                tail.prev.next = node.left;
                node.left.prev = tail.prev;
                node.left.next = tail;
                tail.prev = node.left;
            }
            //check right
            if (node.right) {
                node.right.level = node.level + 1;
                tail.prev.next = node.right;
                node.right.prev = tail.prev;
                node.right.next = tail;
                tail.prev = node.right;
            }
            if (node.next) node = node.next;
            }
        } else {
            //move equals left
            //pop it
            //------//
            
            node = tail.prev;
            myLevel = node.level;
            while (node.level === myLevel) {            
            node.prev.next = tail;
            tail.prev = node.prev;
            levelArr.push(node.val);
            //unshift its descendants
            //check right
            if (node.right) {
                node.right.level = node.level + 1;
                head.next.prev = node.right;
                node.right.next = head.next;
                head.next = node.right;
                node.right.prev = head;
            }
            //check left
            if (node.left) {
                node.left.level = node.level + 1;
                head.next.prev = node.left;
                node.left.next = head.next;
                head.next = node.left;
                node.left.prev = head;
            }
            if (node.prev) node = node.prev;
        }
        }
        
        if (node.level !== level) {
            ans.push(levelArr);
            levelArr = [];
            level++;
            move = move === 'right' ? 'left' : 'right'; 
        }  
    }
    
    
    
    return ans;
};

const LLtoArray = (LL) => {
    let array = [];
    while (LL.val) {
        array.push(LL.val);
        LL = LL.next;
    }
    console.log(array);
}


//time complexity - O(n) with N is number of nodes.
//start doubleLL;
    //each time start new level;
    //follow LIFO pattern
    //for example: pop from tail, while adding next row to head
    //and alternate between the two