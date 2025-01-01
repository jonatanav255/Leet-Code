class Stack {
  constructor () {
    this.items = [] // Array to store stack elements
  }

  // Check if the stack is empty (custom method)
  isEmpty () {
    return this.items.length === 0
  }

  // Push an element onto the stack
  push (element) {
    this.items.push(element)
  }

}

const stack = new Stack()
console.log(stack)
