// This function clear all the values
function clearScreen() {
    document.getElementById("input").value = "";
}

function remove(){
    var p = document.getElementById("input").value;
    var q = p.slice(0, -1);
    document.getElementById("input").value = q;
}
 
// This function display values
function display(value) {
    document.getElementById("input").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
}