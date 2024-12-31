// This is the input class for the linked list nodes. Do not edit.
class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

// Function to find the middle node of a linked list
function middleNode (linkedList) {
  let slow = linkedList // slow pointer
  let fast = linkedList // fast pointer

  // Traverse the linked list
  while (fast !== null && fast.next !== null) {
    slow = slow.next // Move slow pointer by 1 step
    fast = fast.next.next // Move fast pointer by 2 steps
  }

  return slow // Slow pointer is now at the middle node
}

// Helper function to create a linked list from an array
function createLinkedList (values) {
  let head = new LinkedList(values[0])
  let current = head
  for (let i = 1; i < values.length; i++) {
    current.next = new LinkedList(values[i])
    current = current.next
  }
  return head
}

// Helper function to print a linked list
function printLinkedList (head) {
  const result = []
  while (head !== null) {
    result.push(head.value)
    head = head.next
  }
  console.log(result.join(' -> '))
}

// Example usage:
const values = [2, 7, 3, 5] // You can modify this array to test other inputs
const linkedList = createLinkedList(values)

console.log('Original Linked List:')
printLinkedList(linkedList)

const middle = middleNode(linkedList)

console.log('Middle Node and onwards:')
printLinkedList(middle)
