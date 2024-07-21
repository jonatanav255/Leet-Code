// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Helper function to convert an array to a linked list
function arrayToList(array) {
    let head = null;
    let current = null;
    for (let val of array) {
        if (head === null) {
            head = new ListNode(val);
            current = head;
        } else {
            current.next = new ListNode(val);
            current = current.next;
        }
    }
    return head;
}


var reverseList = function (head) {
    // [1, 2, 3, 4, 5]
    let previous = null
    while (head) {
        let nextNode = head.next;
        console.log(nextNode)
        head.next = previous;
        console.log(head.next)
        previous = head;
        console.log(previous)
        head = nextNode
        console.log(head)
    }
    return previous

};

// Helper function to convert a linked list to an array (for easy output)
function listToArray(head) {
    let array = [];
    while (head) {
        array.push(head.val);
        head = head.next;
    }
    return array;
}
// console.log(reverseList(head))
let head = arrayToList([1, 2, 3, 4, 5]);

let reversedHead = reverseList(head);
let listToArrayFinal = listToArray(reversedHead)
console.log(listToArrayFinal)