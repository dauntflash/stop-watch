
const seconds= document.getElementById("seconds")
const minutes= document.getElementById("minutes")
const hours= document.getElementById("hours")

const pause=document.getElementById('pause')
const play=document.getElementById('play')
const reload=document.getElementById('reload')

let interval=0

let secondsElapsed=0

function padder(number){
    return String(number).padStart(2,'0')
}
function showTime(){
    secondsElapsed++
    time()
}
function time(){
    const Getseconds=secondsElapsed %60
    const Getminutes= (Math.floor(secondsElapsed/60)) % 60
    const Gethours= Math.floor(secondsElapsed/3600)

    seconds.innerHTML= padder(Getseconds)
    minutes.innerHTML= padder(Getminutes)
    hours.innerHTML=padder(Gethours)
}

function icons(icon1,icon2){
    icon1.style.display='none'
    icon1.style.position='absolute'
    icon2.style.display='block'
    icon2.style.position='relative'
}

function startTime(){
    if (interval) stopClock()
    interval=setInterval(showTime, 1000)
    
    icons(play,pause)
}
function stopClock(){
    clearInterval(interval)
    icons(pause,play)
}
function reloadClock(){
    clearInterval(interval)
    icons(pause,play)
    secondsElapsed=0
    time()
}

