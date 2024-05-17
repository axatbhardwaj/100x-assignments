function timer() {
    let interval = setInterval(() => {
        let moment = Date.now();
        const event = new Date(moment);
        console.log(event.toLocaleTimeString('en-IN'), "  OR  ", event.toLocaleTimeString('it-IN'));
        // console.log();
        // let hours = moment.getHours();
        // let minutes = moment.getMinutes();
        // let secs = moment.getSeconds();

        // console.log(`${hours}:${minutes}:${secs}`);

    }, 1 * 1000)
}

timer()