const chalk = require('chalk')
const notes = require('./notes.js')

// const msg = notes()

// console.log(msg)

// const greenMsg = chalk.red.inverse.bold('Success')
// console.log(greenMsg)

// console.log(process.argv[2])


const command = process.argv[2]

if( command === 'add') {
    console.log('Adding note')
} else if (command === 'remove') {
    console.log('Removing notes')
}
console.log(process.argv[3])