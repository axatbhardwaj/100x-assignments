// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// const path = require('path');
// const filePath = path.join(__dirname, 'package.json');
const filePath = "/home/axat/personal/100x-assignments/week-2/01-async-js/package.json"

const readFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
        if (data) {
            console.log(data)
        } if (err) {
            console.log(`Error: ${err}`)
        }
    })
    // console.log(fileContent);
}

readFile(filePath);