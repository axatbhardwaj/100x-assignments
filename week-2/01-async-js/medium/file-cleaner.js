const fs = require("fs")

function cleanFile(filePath) {
    let fileData = fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log("Error : ", err);
        }
        data = data.toString();
        data = data.replace(/\s+/g, ' ');

        fs.writeFile(filePath, data, (err, succ) => {
            if (err) {
                console.log("Error : ", err);
            }
        })
    })


}

cleanFile("/home/axat/personal/100x-assignments/week-2/01-async-js/medium/123.txt")