// function que limpia los valores
function clearScreen() {
    document.getElementById("result").value = "";
}

// function que muestra los valores

function display(value) {
    document.getElementById("result").value += value;
}

// function que calcula la expresion y la regresa 
function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}