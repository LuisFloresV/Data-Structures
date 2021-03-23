class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  peek() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }
  dequeue() {
    if (this.length === 1) {
      this.last = null
      this.first = null
    } else { this.first = this.first.next }
    this.length--
  }
  // pop() {
  //   const deletedNode = this.top
  //   if (this.length === 1) {
  //     this.top = null
  //     this.bottom = null
  //   } else {
  //     this.top = deletedNode.next
  //   }
  //   this.length--
  //   return deletedNode
  // }
}


const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.peek())
console.log(myQueue)
