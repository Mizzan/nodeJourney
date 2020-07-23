// first we need to require the modules through 'require' method ( can be core, npm, own modules)

const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node JS.')

// fs.writeFileSync and writeFile are responsible for writing data to a file.
// if the file does not exist it will be created, if exist then it will overwrite.


// Challenge : Append A message to notes.txt
// using appendFileSync and the check the file for results.

fs.appendFileSync('notes.txt', 'I am currently learning node js.')