class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
  }
  pop() {
    const deletedNode = this.top
    if (this.length === 1) {
      this.top = null
      this.bottom = null
    } else {
      this.top = deletedNode.next
    }
    this.length--
    return deletedNode
  }
}


const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack)
