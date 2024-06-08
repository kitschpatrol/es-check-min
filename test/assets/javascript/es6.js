// Example of ES6 JavaScript

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
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	greet() {
		return `Hello, ${this.name}!`
	}

	get fullName() {
		return `${this.name} (age ${this.age})`
	}
}

// Creating an instance of the class
let person = new Person('Jane Doe', 25)

// Accessing properties and methods
let personName = person.name
let personGreeting = person.greet()
let personFullName = person.fullName

// Template literals
console.log(`Greeting: ${greeting}`)
console.log(`Name: ${personName}`)
console.log(`Personal Greeting: ${personGreeting}`)
console.log(`Full Name: ${personFullName}`)

// Loop (for-of)
let numbers = [1, 2, 3, 4, 5]
for (let num of numbers) {
	console.log(`Number: ${num}`)
}

// Spread operator
let moreNumbers = [...numbers, 6, 7, 8]
console.log(`More Numbers: ${moreNumbers}`)

// Destructuring assignment
let [first, second, ...rest] = numbers
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`)

// Default parameters
const multiply = (a, b = 2) => a * b
console.log(`Multiply: ${multiply(5)}`)

// Promises
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched')
		}, 1000)
	})
}

fetchData()
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		console.error(error)
	})
