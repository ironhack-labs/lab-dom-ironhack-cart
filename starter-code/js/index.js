var cart = document.querySelector("#cart tbody");
var calc = document.querySelector("#calc");

function updateSubtot() {
  let p = document.querySelector("#unitP").innerText;
  let q = document.querySelector("#unitQ").value;
  document.querySelector("#Subt").innerText = p * q;
  return p * q;
}

function calcAll() {
  updateSubtot();
}
calc.onclick = calcAll;
