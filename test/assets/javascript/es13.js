// Example of ES13 JavaScript (not a module)

// Using let and const for variable declarations
let name = 'John Doe'
const age = 30

// Arrow function
const greet = (person) => {
	return `Hello, ${person}!`
}

// Function call
let greeting = greet(name)

// Class declaration with public and private fields (ES13 feature)
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

	// Private method (ES13 feature)
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

// ES13 feature: Array.prototype.findLast()
let lastEven = numbers.findLast((num) => num % 2 === 0)
console.log('Last even number:', lastEven)

// ES13 feature: Array.prototype.findLastIndex()
let lastEvenIndex = numbers.findLastIndex((num) => num % 2 === 0)
console.log('Index of last even number:', lastEvenIndex)

// Top-level await (ES13 feature)
;(async () => {
	const fetchData = async () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('Data fetched')
			}, 1000)
		})
	}

	const data = await fetchData()
	console.log(data)
})()

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
