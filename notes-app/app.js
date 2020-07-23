const validator = require('validator')

const notes = require('./notes.js')

const message = notes()

console.log(message)


console.log(validator.isEmail('mizan@gmail.com'))
console.log(validator.isEmail('mizan@gmail'))
console.log(validator.isURL('github'))
console.log(validator.isURL('https://github.com'))