// Challenge Time
// creating separate notes.js file and a function which would print 'My notes to the console'
const notesFile = require('./notes.js')

const notes = notesFile()

console.log(notes)


// // require('./utility.js') // it will log out first because it happening first.
// // const lastName = require('./utility.js') // it will log out first because it happening first.
// const addNum = require('./utility.js') // it will log out first because it happening first.

// // const name = 'Mizan'

// const sum = addNum(5, 4)

// // console.log(lastName) // it will log out later because it happening later.
// console.log(sum) // it will log out later because it happening later.

// // modules have their own scopes. 
// // app.js can not access variables from utility.js
