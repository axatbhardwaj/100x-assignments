function Counter() {
    let counter=0;
    let intervalset = setInterval(() => {
        console.log(counter);
        counter++;
    }, 1000);
}
Counter();