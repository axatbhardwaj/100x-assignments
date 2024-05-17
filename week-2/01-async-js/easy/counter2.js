// function counterWithoutSetinterval(count){
//     // let count =0;
//     while (true) {
//         setTimeout(() => {
//             console.log(count);
//             counterWithoutSetinterval(count+1);
//         }, 1000);
//     }
// }

// counterWithoutSetinterval(0); // 0


function counterWithSetTimeout(count = 0) {
    setTimeout(() => {
        console.log(count);
        counterWithSetTimeout(count + 1);
    }, 1000);
}

counterWithSetTimeout();