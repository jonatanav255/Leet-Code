// This is an input class. Do not edit.
class LinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

// Helper function to create a linked list from an array
function createLinkedList (array) {
  const head = new LinkedList(array[0])
  let current = head
  for (let i = 1; i < array.length; i++) {
    current.next = new LinkedList(array[i])
    current = current.next
  }
  return head
}

// Helper function to print a linked list
function printLinkedList (head) {
  const result = []
  let current = head
  while (current !== null) {
    result.push(current.value)
    current = current.next
  }
  console.log(result.join(' -> '))
}

function removeDuplicatesFromLinkedList (linkedList) {
  let currentNode = linkedList

  while (currentNode !== null) {
    while (
      currentNode.next !== null &&
      currentNode.value === currentNode.next.value
    ) {
      currentNode.next = currentNode.next.next
    }
    currentNode = currentNode.next
  }

  return linkedList
}

// Test case
const array = [1, 1, 3, 4, 4, 4, 5, 6, 6]
const linkedList = createLinkedList(array)
console.log('Original Linked List:')
printLinkedList(linkedList)

const result = removeDuplicatesFromLinkedList(linkedList)
console.log('Linked List After Removing Duplicates:')
printLinkedList(result)
