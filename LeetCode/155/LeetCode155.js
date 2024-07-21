// 155. Min Stack
// Time complexity 0(1)
// space complexity 0(n)
class MinStack {
  constructor () {
    this.stack = []
    this.minStack = []
  }
  push (value) {
    if (!this.stack.length) {
      this.stack.push(value)
      this.minStack.push(value)
    } else {
      this.stack.push(value)
      this.minStack.push(
        Math.min(this.minStack[this.minStack.length - 1], value)
      )
    }
  }
  pop () {
    if (!this.stack) return null
    this.minStack.pop()
    return this.stack.pop()
  }
  top () {
    if (!this.stack.length) return null
    return this.stack[this.stack.length - 1]
  }
  getMin () {
    if (!this.minStack.length) return null
    return this.minStack[this.minStack.length - 1]
  }
}

// Test the MinStack class
const minStack = new MinStack()
minStack.push(-2)
minStack.push(-5)
// minStack.pop()
console.log(minStack.pop())
console.log(minStack.top())
console.log(minStack.getMin())
