// Example of ES12 JavaScript (not a module)

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

// Using the class and methods
let person = new Person('Jane Doe', 25)

// Logical assignment operators (ES12 feature)
let isLoggedIn = false
let isAdmin = false
isLoggedIn ||= true
isAdmin &&= true
console.log('isLoggedIn:', isLoggedIn)
console.log('isAdmin:', isAdmin)

// Numeric separators (ES12 feature)
const largeNumber = 1_000_000
console.log('Large number with separators:', largeNumber)

// String.prototype.replaceAll (ES12 feature)
const text = 'Hello world! Welcome to the world of JavaScript.'
const newText = text.replaceAll('world', 'universe')
console.log('Replaced text:', newText)

// Promise.any (ES12 feature)
const promise1 = Promise.reject('Promise 1 failed')
const promise2 = Promise.resolve('Promise 2 resolved')
const promise3 = Promise.resolve('Promise 3 resolved')

Promise.any([promise1, promise2, promise3])
	.then((value) => {
		console.log('Promise.any resolved with:', value)
	})
	.catch((error) => {
		console.error('Promise.any rejected with:', error)
	})

// WeakRefs (ES12 feature)
let obj = { name: 'WeakRef example' }
let weakRef = new WeakRef(obj)
console.log('WeakRef deref:', weakRef.deref().name)
obj = null // Now the object is eligible for garbage collection
// After garbage collection, weakRef.deref() may return undefined

// Top-level await (ES12 feature)
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

// Using the class and methods
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
