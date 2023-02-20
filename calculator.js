let inputDisplay = document.getElementById("input-display");
let resultDisplay = document.getElementById("result-display");
let input = "";
let result = "";

function addToInputDisplay(value) {
    input += value;
    inputDisplay.value = input;
}

function clearInputDisplay() {
    input = "";
    result = "";
    inputDisplay.value = "";
    resultDisplay.value = "";
}

function calculate() {
    result = eval(input);
    resultDisplay.value = result;
    input = "";
}
