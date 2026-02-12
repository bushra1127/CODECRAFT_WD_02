let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {

let h;

if(hours < 10){
    h = "0" + hours;
}else{
    h = hours;
}

let m;

if(minutes < 10){
    m = "0" + minutes;
}else{
    m = minutes;
}

let s;

if(seconds < 10){
    s = "0" + seconds;
}else{
    s = seconds;
}

document.getElementById("display").innerText = h + ":" + m + ":" + s;
}

function start(){
    if (timer !== null) return;

    timer = setInterval(function() {
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap(){
    let lapTime = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
}

    
