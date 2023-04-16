//clear all the value
function clearScreen() {
  document.getElementById("result").value = "";
}

//display the value
function display(value) {
  document.getElementById("result").value += value;
}

//calculate the value
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
