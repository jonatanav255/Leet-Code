// Node class represents a single node in the linked list
class Node {
  constructor (data) {
    this.data = data // The data the node stores
    this.next = null // Pointer to the next node (default is null)
  }
}

// LinkedList class represents the entire linked list
class LinkedList {
  constructor () {
    this.head = null // The head of the linked list (starts as null)
    this.size = 0 // Keep track of the size of the list
  }

  // Add a new node at the end of the list - 0(n)
  append (data) {
    const newNode = new Node(data)
    if (this.head === null) {
      // If the list is empty, set the head to the new node
      this.head = newNode
    } else {
      // Otherwise, traverse to the end of the list and add the new node
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++ // Increment the size of the list
  }

  // Print the linked list as an array for easier visualization
  printList () {
    const result = []
    let current = this.head
    while (current !== null) {
      result.push(current.data)
      current = current.next
    }
    console.log(result)
  }

  // Get the size of the list
  getSize () {
    return this.size
  }
}
const myLinkedList = new LinkedList()

// myLinkedList.append(10)
myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(3)



myLinkedList.printList()

console.log('Size of the list:', myLinkedList.getSize())
