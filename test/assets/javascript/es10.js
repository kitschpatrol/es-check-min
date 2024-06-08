// person.js (ES10 module)

// Using let and const for variable declarations
let name = 'John Doe'
const age = 30

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

// Array example
let numbers = [1, 2, 3, 4, 5]

// ES10 feature: Array.prototype.flat()
let nestedNumbers = [1, [2, 3], [4, [5, 6]]]
let flatNumbers = nestedNumbers.flat(2)
console.log('Flat numbers:', flatNumbers)

// ES10 feature: Array.prototype.flatMap()
let flatMapNumbers = numbers.flatMap((num) => [num, num * 2])
console.log('FlatMap numbers:', flatMapNumbers)

// ES10 feature: Object.fromEntries()
const entries = [
	['name', 'John Doe'],
	['age', 30],
]
const personFromEntries = Object.fromEntries(entries)
console.log('Person from entries:', personFromEntries)

// ES10 feature: String.prototype.trimStart() and String.prototype.trimEnd()
const greetingWithWhitespace = '   Hello, World!   '
console.log('Trimmed start:', `"${greetingWithWhitespace.trimStart()}"`)
console.log('Trimmed end:', `"${greetingWithWhitespace.trimEnd()}"`)

// ES10 feature: Optional catch binding
try {
	throw new Error('Something went wrong')
} catch {
	console.log('Caught an error without binding')
}
