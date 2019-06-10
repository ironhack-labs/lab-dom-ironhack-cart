var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime() {
    setInterval(() => {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}, 1000)
}

function printMinutes() {}
function printSeconds() {}
function printMilliseconds() {}
function printSplit() {}

function clearSplits() {
    chronometer.resetClick();
}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {
    $btnRight.classList.add('reset')
    $btnRight.classList.remove('split')
    $btnRight.innerText = "Reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', function (){
    if (btnLeft.className === 'btn start') { 
        btnLeft.className = 'btn stop'
        btnLeft.innerHTML = "STOP"
        chronometer.startClick();
        printTime();
      } else {
        btnLeft.className = 'btn start'
        btnLeft.innerHTML = "START"
        chronometer.stopClick(); 
}});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    clearSplits()
});
