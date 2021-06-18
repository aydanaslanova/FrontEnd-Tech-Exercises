function countDown(timer) {
    let interval = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(interval)
            console.log("DONE!")
        }
        else {
            console.log(interval);
        }
    }, 1000)
}

function randomGame() {
    let number;
    let times = 0;
    let timer = setInterval(function () {
        number = Math.random();
        times++
        if (number > .75) {
            clearInterval(timer);
            console.log("It took " + times + " try/tries.");
        }
    }, 1000)
}




