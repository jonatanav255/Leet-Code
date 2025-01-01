class Stack {
  constructor () {
    this.items = [] // Array to store stack elements
  }

  // Check if the stack is empty
  isEmpty () {
    return this.items.length === 0
  }

  // Push an element onto the stack
  push (element) {
    this.items.push(element)
  }
}

const stack = new Stack()
console.log('--------- Stack --------')
console.log('Is stack empty? ', stack.isEmpty()) // Output: false

stack.push(1)
stack.push(2)
stack.push(3)

console.log('Is stack empty? ', stack.isEmpty()) // Output: false

console.log('Stack:')
console.log(stack.items)

console.log('--------- Stack --------')
