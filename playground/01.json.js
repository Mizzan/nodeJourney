const fs = require('fs')

// making the json file with fs

// const myBook = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const myBookJson = JSON.stringify(myBook)

// fs.writeFileSync('01.json.json', myBookJson)


// accessing the file with fs
// const dataBuffer = fs.readFileSync('01.json.json') // it is giving us the buffer data

// const dataJSON = dataBuffer.toString() // converting it to the string data

// const data = JSON.parse(dataJSON)
// console.log(data.title);


// challenge time : work with JSON and file system 💪💪💪💪
// 1. Load and parse the json data
// 2. Change the name and age property with my info
// 3. Stringify the change object and overwrite the original data
// 4. Testing the result.


const bufferData = fs.readFileSync('01.json.json')
const dataJSON = bufferData.toString()

const userData = JSON.parse(dataJSON)

userData.name = 'Mizan'
userData.age = 23

const userDataString = JSON.stringify(userData)

fs.writeFileSync('01.json.json', userDataString)