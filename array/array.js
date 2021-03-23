class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  myDelete(index) {
    const item = this.data[index]
    this.shiftIndex(index)
    return item
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = item
    this.length++
    return this.data
  }

  shift() {
    delete this.data[0]
    this.shiftIndex(0)
    return this.data
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}


const myArray = new MyArray()
myArray.push("Luis")
myArray.push("Pedro")
myArray.push("Jose")
myArray.push("Jos")
myArray.push("Jo")
myArray.push("Joe")
myArray.shift()
console.log(myArray)