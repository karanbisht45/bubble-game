var hitt = 0;
function getHit(){
    hitt = Math.floor(Math.random()*10);
    document.querySelector("#hits").textContent = hitt;
}

function myBubble() {
    var clutter = "";

    for (var i = 1; i <= 108; i++) {
        var n = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${n}</div>`
    }

    document.querySelector(".pbottom").innerHTML = clutter;
}


var timer=60;
function runTimer(){
    var t = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(t);
            document.querySelector(".pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

var score = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbottom").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitt){
        increaseScore();
        myBubble();
        getHit();
    }
})

getHit();
runTimer();
myBubble();
increaseScore();