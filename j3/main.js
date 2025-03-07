const num = document.getElementById("num");
const arrayList = document.getElementById("arrayList");
const sumTxt = document.getElementById("sum")
const highestTxt = document.getElementById("highest")
const lowestTxt = document.getElementById("lowest")

let array = [];
let sum = 0;
let highest = 0;
let lowest = 0;



function doStuff(){
    if (!num.value == ""){
        array.push(parseInt(num.value));
        num.value = "";
        sum = 0;
        for (let i = 0; i < array.length; i++){
            sum += array[i];
        }
        highest = 0;
        for (let i = 0; i < array.length; i++){
            if (highest < array[i]){
                highest = array[i];
            }
        }
        lowest = 99999999;
        for (let i = 0; i < array.length; i++){
            if (lowest > array[i]){
                lowest = array[i];
            }
        }
        arrayList.innerHTML = array.join("<br>");
        sumTxt.innerHTML = sum;
        lowestTxt.innerHTML = lowest;
        highestTxt.innerHTML = highest;
    }
}

function deleteAll(){
    array = [];
    arrayList.innerHTML = array.join("<br>");
    sumTxt.innerHTML = "";
    lowestTxt.innerHTML = "";
    highestTxt.innerHTML = "";
}