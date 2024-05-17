/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// const performance = require()

function sleep(milliseconds) {
    let busyTime = Date.now() + milliseconds
    return new Promise((resolve, reject) => {
        while (Date.now() < busyTime) {
            console.log("busy");
        }
        resolve();
    })
}

module.exports = sleep;
