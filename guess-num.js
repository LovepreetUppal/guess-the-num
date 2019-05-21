var min = 1;
var max = 10;
var x = Math.floor(Math.random() * max) + min;
var score = 0;
var wrong = 0;

function checkVal() {
    var y = document.getElementById('playerNum').value;
    if (x == y) {
        document.getElementById('statement').innerHTML = "You guessed the correct number with " + wrong + " wrong attempts";

    } else if (y > x) {
        wrong++;
        document.getElementById('statement').innerHTML = "Your number is too big";
    } else {
        wrong++;
        document.getElementById('statement').innerHTML = "Your number is too small";
    }
    //    console.log(x);
}



function reset() {
    document.getElementById('playerNum').value = "";
    location.reload();
}

var x = Math.floor(Math.random() * max) + min;
var y = document.getElementById('playerNum').value;

function scoreTrack() {

    if (x == y) {
        document.getElementById('point').innerHTML = score++;
    }
}
