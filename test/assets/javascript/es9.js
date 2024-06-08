// person.js (ES9 module)

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

// Async function (ES8 feature)
const fetchData = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Data fetched')
		}, 1000)
	})
}

// Using Object.entries and Object.values (ES8 features)
const personInfo = {
	name: 'Jane Doe',
	age: 25,
	city: 'New York',
}

const entries = Object.entries(personInfo)
const values = Object.values(personInfo)

console.log('Object.entries:', entries)
console.log('Object.values:', values)

// Using rest/spread properties for objects (ES9 feature)
const personWithContact = {
	...personInfo,
	email: 'jane.doe@example.com',
}

const { city, ...rest } = personWithContact
console.log('City:', city)
console.log('Rest:', rest)

// Using Promise.prototype.finally (ES9 feature)
fetchData()
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		console.error(error)
	})
	.finally(() => {
		console.log('Fetch operation completed.')
	})
