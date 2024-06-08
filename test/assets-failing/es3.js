// Example of ES3 JavaScript

// Variable declarations
var name = 'John Doe'
var age = 30

// Function declaration
function greet(person) {
	return 'Hello, ' + person + '!'
}

// Function call
var greeting = greet(name)

// Object creation
var person = {
	name: 'Jane Doe',
	age: 25,
	greet: function () {
		return 'Hello, ' + this.name + '!'
	},
}

// Accessing object properties
var personName = person.name
var personGreeting = person.greet()

// Loop (for)
for (var i = 0; i < 5; i++) {
	console.log('Number: ' + i)
}

// Conditional statement (if-else)
if (age > 20) {
	console.log('You are older than 20.')
} else {
	console.log('You are 20 or younger.')
}

// Array
var numbers = [1, 2, 3, 4, 5]

// Loop (while)
var index = 0
while (index < numbers.length) {
	console.log('Number: ' + numbers[index])
	index++
}

// Array manipulation
numbers.push(6) // Adds a number to the end of the array
var firstNumber = numbers.shift() // Removes the first number from the array

console.log(greeting)
console.log(personName)
console.log(personGreeting)
console.log(numbers)
console.log('First number removed from the array: ' + firstNumber)
