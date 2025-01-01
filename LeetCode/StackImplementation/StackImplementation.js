class Stack {
  constructor () {
    this.items = []
  }

  push (element) {
    this.items.push(element)
  }
}

const stack = new Stack()
console.log(stack)
