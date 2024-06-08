// Example of ES14 JavaScript (not a module)

// Using let and const for variable declarations
let name = 'John Doe'
const age = 30

// Arrow function
const greet = (person) => {
	return `Hello, ${person}!`
}

// Function call
let greeting = greet(name)

// Class declaration
class Person {
	#privateAge // Private field (ES13 feature)

	constructor(name, age) {
		this.name = name
		this.#privateAge = age
	}

	greet() {
		return `Hello, ${this.name}!`
	}

	get fullName() {
		return `${this.name} (age ${this.#privateAge})`
	}

	// Private method
	#incrementAge() {
		this.#privateAge += 1
	}

	birthday() {
		this.#incrementAge()
	}
}

// Using the class and methods
let person = new Person('Jane Doe', 25)

// Accessing public methods
person.birthday()
console.log(person.greet())
console.log(`Full Name: ${person.fullName}`)

// Array example
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ES14 feature: Array.prototype.toSorted()
let sortedNumbers = numbers.toSorted((a, b) => b - a)
console.log('Sorted numbers (descending):', sortedNumbers)

// ES14 feature: Array.prototype.toReversed()
let reversedNumbers = numbers.toReversed()
console.log('Reversed numbers:', reversedNumbers)

// ES14 feature: Array.prototype.toSpliced()
let splicedNumbers = numbers.toSpliced(2, 3, 99, 100)
console.log('Spliced numbers:', splicedNumbers)

// ES14 feature: Array.prototype.with()
let newNumbers = numbers.with(0, 99)
console.log('Numbers with new first element:', newNumbers)

// ES14 feature: Set methods
const setA = new Set([1, 2, 3, 4])
const setB = new Set([3, 4, 5, 6])

const intersection = setA.intersection(setB)
console.log('Intersection:', [...intersection])

const difference = setA.difference(setB)
console.log('Difference:', [...difference])

const union = setA.union(setB)
console.log('Union:', [...union])

const symmetricDifference = setA.symmetricDifference(setB)
console.log('Symmetric Difference:', [...symmetricDifference])

// Using template literals and logging results
console.log(`Greeting: ${greeting}`)
console.log(`Name: ${name}`)
console.log(`Age: ${age}`)

// Loop (for-of)
for (let num of numbers) {
	console.log(`Number: ${num}`)
}

// Spread operator
let moreNumbers = [...numbers, 11, 12, 13]
console.log(`More Numbers: ${moreNumbers}`)

// Destructuring assignment
let [first, second, ...rest] = numbers
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`)

// Default parameters
const multiply = (a, b = 2) => a * b
console.log(`Multiply: ${multiply(5)}`)
