console.log('utility.js') // what we are doing in this file will happen first where we import it

const name = 'Messi'

const add = function(a, b) {
    return a + b
}

// variable name can be different but mentioned accordingly
// but we can manually exports things

module.exports = add;