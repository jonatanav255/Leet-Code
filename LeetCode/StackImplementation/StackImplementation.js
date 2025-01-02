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

  min() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return Math.min(...this.items)
  }
  max(){
    if(this.isEmpty()){
      throw new Error("Stack is empty")
    }
    return Math.max(...this.items)
  }
}

const stack = new Stack()
console.log('--------- Stack --------')

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.min())
console.log(stack.max())

console.log('--------- Stack --------')
