const myArray = ["Luis", "Lalo", "David", "Pedro", "Jose"]
const myArrayNotCleaned = ["1", "2", "1", "4"]
const arrayOfNumbers = myArrayNotCleaned.map(Number);
const unique = [...new Set(myArrayNotCleaned)]
const uniqueNumbers = [...new Set(arrayOfNumbers)]

const myFilteredArray = myArray.filter(name => name[0] === "L" ? name : "")

console.log(myFilteredArray)
console.log(unique)
console.log(uniqueNumbers)

console.log(arrayOfNumbers)