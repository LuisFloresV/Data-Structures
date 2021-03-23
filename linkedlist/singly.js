// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)
    const firstPointer = this.getTheIndex(index - 1)
    const holdingPointer = firstPointer.next
    firstPointer.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this
  }

  delete(index) {
    if (index > this.length || index < 0) {
      console.error("Index out of bounds");
    } else {
      if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return;
      } else {
        const holding = this.getTheIndex(index - 1)
        const removed = holding.next
        holding.next = removed.next
        this.length--
        this
      }
    }


  }

  getTheIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
}

let myLinkedList = new MySinglyLinkedList(0)
myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.delete(-1)
console.log(myLinkedList)