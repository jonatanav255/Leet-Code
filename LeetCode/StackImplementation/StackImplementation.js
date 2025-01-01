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

  // Pop (remove and return the top element of the stack)
  pop () {
    // First check if the stack is empty
    if (this.isEmpty()) {
      throw new Error('Stack is empty') // Prevent popping from an empty stack
    }

    // Use the native `pop` method to remove and return the last element
    return this.items.pop()
  }

  // Peek (return the top element without removing it)
  peek () {
    if (this.isEmpty()) {
      // Prevent peeking when the stack is empty
      throw new Error('Stack is empty')
    }
    // Return the last element
    return this.items[this.items.length - 1]
  }
}

const stack = new Stack()
console.log('--------- Stack --------')

try {
  console.log(stack.pop()) // This will throw an error because the stack is empty
} catch (error) {
  console.error('Error:', error.message) // Handle the error gracefully
}

// stack.push(1)
// stack.push(2)
// stack.push(3)

console.log('Stack:', stack.items)
// console.log('Peek:', stack.peek())

// console.log('Popped:', stack.pop())
// console.log('Popped:', stack.pop())

// console.log('Stack:')
// console.log(stack.items)

console.log('--------- Stack --------')
