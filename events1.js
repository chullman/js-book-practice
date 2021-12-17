window.onload = pageLoadedHandler;

function pageLoadedHandler() {
    alert("I'm alive!");
}

var tick = true;
function ticker() {
    if (tick) {
        console.log("Tick");
        tick = false;
    } else {
        console.log("Tock");
        tick = true;
    }
}

var tickerTimer = setInterval(ticker, 1000);

function stopIntervalTimer() {
    alert("stop");
    clearInterval(tickerTimer);
}

setTimeout(stopIntervalTimer, 5000);