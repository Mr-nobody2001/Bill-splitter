// Declaração de variáveis

let inputs = document.querySelectorAll("input");

let screenInformation = document.querySelectorAll(".liEspecial");

let resetButton = document.querySelector("#resetButton");

let alert = document.querySelectorAll(".alert");

let tipFixed = document.querySelectorAll(".tipFixed");

let tipFixedValue = 0;

let cont = 0;

// Calculation

function calcFixedTip() {
    let tipAmount;

    let data = {};

    let total;

    data.bill = parseFloat(inputs[0].value);

    data.people = parseFloat(inputs[2].value);

    if (data.bill > 0 && data.people > 0) {
        tipAmount = (data.bill * tipFixedValue) / data.people;

        total = (data.bill + (tipAmount * data.people)) / data.people;

        print(tipAmount, total);
    }
}

function getFixedTipValue() {
    tipFixedValue = this.getAttribute("value");

    calcFixedTip();
}

function calcCustomTip() {
    let tipAmount;

    let data = {};

    let total;

    data.bill = parseFloat(inputs[0].value);

    data.tipCustom = parseInt(inputs[1].value) / 100;

    data.people = parseFloat(inputs[2].value);

    if (data.bill > 0 && data.people > 0 && data.tipCustom >= 0) {
        tipAmount = (data.bill * data.tipCustom) / data.people;

        total = (data.bill + (tipAmount * data.people)) / data.people;

        print(tipAmount, total, data.tipCustom);
    }
}

// Print informations on screen
function print(tipAmount, total, tipCustom) {
    if (total <= 999 && tipAmount <= 999) {
        screenInformation[0].innerHTML = `$${tipAmount.toFixed(2)}`;

        screenInformation[1].innerHTML = `$${total.toFixed(2)}`;
     } else {
        if (tipCustom > 0 || tipFixed != 0) {
            screenInformation[0].innerHTML = `NotFit`;

            screenInformation[1].innerHTML = `NotFit`;  
        } else {
            screenInformation[0].innerHTML = `$0.00`;

            screenInformation[1].innerHTML = `$0.00`;
        }
    }

    alert[0].innerHTML = "";

    alert[1].innerHTML = "";

}

// Exception Treatment
function exceptionTreatment() {
    if (inputs[0].value <= 0 || inputs[2].value <= 0) {
        screenInformation[0].innerHTML = `$0.00`

        screenInformation[1].innerHTML = `$0.00`

        if (inputs[0].value == 0) {
             alert[0].innerHTML = "Can't be zero";
        } else {
            if (inputs[0].value > 0) {
                alert[0].innerHTML = "";
            } else {
                alert[0].innerHTML = "Invalid";
            }
        }
    
        if ( inputs[2].value == 0) {
            alert[1].innerHTML = "Can't be zero";
        } else {
            if (inputs[2].value > 0) {
                alert[1].innerHTML = "";
            } else {
                alert[1].innerHTML = "Invalid";
            }
        }

    } 
}

// Reset button
function reloadPage() {
    location.reload();
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", calcFixedTip);
}

for (var i = 0; i < tipFixed.length; i++) {
    tipFixed[i].addEventListener("click", getFixedTipValue);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", calcCustomTip);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", exceptionTreatment);
}

resetButton.addEventListener("click", reloadPage);

