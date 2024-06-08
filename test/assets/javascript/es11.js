// person.js (ES11 module)

// Using let and const for variable declarations
let name = 'John Doe'
const age = 30n // ES11 feature: BigInt

// Arrow function
const greet = (person) => {
	return `Hello, ${person}!`
}

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

// ES11 feature: Optional chaining
let address = person.address?.city || 'Unknown City'
console.log('Address:', address)

// ES11 feature: Nullish coalescing operator
let middleName = person.middleName ?? 'No middle name'
console.log('Middle Name:', middleName)

// ES11 feature: Promise.allSettled
const promise1 = Promise.resolve('Promise 1 resolved')
const promise2 = Promise.reject('Promise 2 rejected')

Promise.allSettled([promise1, promise2]).then((results) => {
	results.forEach((result) => console.log(result.status))
})

// ES11 feature: globalThis
console.log('Global object:', globalThis)
