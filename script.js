var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var sec = 0;
var min = 0;
var hrs = 0;
var t;
function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

//correction
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
            + ":" + (min > 9 ? min : "0" + min)
            + ":" + (sec > 9 ? sec : "0" + sec);
    go();
}

function go() {
    t = setTimeout(add, 1000);
}

go();
start.onclick = go;
stop.onclick = function() {
    clearTimeout(t);
}

reset.onclick = function() {
    h1.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}