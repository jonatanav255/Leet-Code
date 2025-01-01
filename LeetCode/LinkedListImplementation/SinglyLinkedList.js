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
    if (data === null) {
      console.error('Null values are not allowed in the linked list.')
      return // Exit the method without adding the node
    }

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

  // Add a new node at the beginning of the list O(1)
  prepend (data) {
    const newNode = new Node(data)
    newNode.next = this.head // Point the new node to the current head
    this.head = newNode // Update the head to the new node
    this.size++
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

  // Remove a node by value O(n)
  remove (data) {
    if (this.head === null) {
      console.log('List is empty!')
      return
    }

    // If the head node holds the value to be removed
    if (this.head.data === data) {
      this.head = this.head.next // Move the head to the next node
      this.size--
      return
    }

    // Traverse the list to find the node to remove
    let current = this.head
    let previous = null

    while (current !== null && current.data !== data) {
      previous = current
      current = current.next
    }

    if (current === null) {
      console.log('Value not found in the list!')
      return
    }

    // Remove the node by skipping it in the chain
    previous.next = current.next
    this.size--
  }
}

const myLinkedList = new LinkedList()

myLinkedList.prepend(4)
myLinkedList.prepend(3)
myLinkedList.prepend(2)
myLinkedList.prepend(1)
myLinkedList.remove(3);

myLinkedList.printList()

console.log('Size of the list:', myLinkedList.getSize())
