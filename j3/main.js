const num1Txt = document.getElementById("num1");
const numTxt = document.getElementById("num");
const numTxt1 = document.getElementById("sum");
const numTxt2 = document.getElementById("high");
const numTxt3 = document.getElementById("low");
let num = 0;
let sum = 0;
let high = 0;
let low = 0;

function concatenate() {
    numTxt.innerHTML = num1Txt.value + " ";

}

function concatenate() {
    numTxt1.innerHTML = num1Txt.value + " ";

}

function clearEntries() {
    num1Txt.value = "";
    numTxt.innerHTML = "";
}
