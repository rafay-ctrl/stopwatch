
var min=0;
var sec=0;
var milisec=0;
var minheading=document.getElementById("min")
var secheading=document.getElementById("sec")
var milisecheading=document.getElementById("milisec")
var interval;
function timer(){
    milisec++
    milisecheading.innerHTML=milisec;
    if(milisec>=100){
        sec++
        secheading.innerHTML=sec;
        milisec=0;
    }else if(sec>=60){
        min++
        sec=0;
        minheading.innerHTML=min;
    }
}

function start(){
    interval = setInterval(timer,10) ;
    document.getElementById("btn").disabled=true;
    
}
function stop(){
    clearInterval(interval);
    document.getElementById("btn").disabled=false;
}
function reset(){
    min=0;
    sec=0;
    milisec=0;
    minheading.innerHTML=min;
    secheading.innerHTML=sec;
    milisecheading.innerHTML=milisec;
    stop()
}
function againstart(){

}


