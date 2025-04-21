let timerDisplay = document.querySelector(".timer-display");
let start = document.getElementById("start-btn");
let stop = document.getElementById("stop-btn");
let reset = document.getElementById("reset-btn");


let msecs = 0;
let secs = 0;
let mins = 0;


let timerId = null;

start.addEventListener("click",function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId = setInterval(startTimer,10);
});

stop.addEventListener("click",function(){
        clearInterval(timerId);
});
reset.addEventListener("click",function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`
    msecs = secs = mins = 0;

})

function startTimer (){
    msecs++;
    if(msecs == 100){
        msecs = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }


    let msecsString = msecs < 10 ? `0${msecs}` : msecs;
    let secsString = secs< 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecsString}`;
}


