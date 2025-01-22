const display=document.getElementById("display");
let timer=null;
let startTime=0;
let isRunning=false;
let elapse=0;

function start(){
    if(!isRunning){
        startTime=Date.now()-elapse;
        timer=setInterval(update,10);
        isRunning=true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapse=Date.now()-startTime;
        isRunning=false;
    }
}
function reset(){
     timer=null;
     startTime=0;
     isRunning=false;
     elapse=0;
     display.textContent="00:00:00:00";
}

function update(){
    current=Date.now();
    elapse=current-startTime;
    hour=String(Math.floor(elapse/(1000*60*60))).padStart(2,0);
    minute=String(Math.floor(elapse/(1000*60)%60)).padStart(2,0);
    second=String(Math.floor(elapse/1000%60)).padStart(2,0);
    milisecond=String(Math.floor(elapse%1000/10)).padStart(2,0);
    display.textContent=`${hour}:${minute}:${second}:${milisecond}`;
}

