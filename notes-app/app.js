const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const msg = notes()

// console.log(msg)

// const greenMsg = chalk.red.inverse.bold('Success')
// console.log(greenMsg)

// console.log(process.argv[2])


// yargs version control
yargs.version('1.1.0')

// customizing yargs for add, remove, read, list command

// creating add command 
yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title: {
            descripe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            descripe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(`Title : ${argv.title}`)
        console.log(`Body : ${argv.body}`)
    }
})

// creating remove command 

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function() {
        console.log('Removing the notes.')
    }
})


// creating read command 

yargs.command({
    command: 'read',
    description: 'Read the note',
    handler: function() {
        console.log('Reading the notes accordingly.')
    }
})

// crating list command 

yargs.command({
    command: 'list',
    description: 'List the notes',
    handler: function() {
        console.log('Listing the notes accordingly.')
    }
})

yargs.parse()