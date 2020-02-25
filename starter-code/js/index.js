var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let table = document.querySelector("tbody")
let deleteButton = document.getElementsByClassName("btn-delete");
let createButton = document.getElementById("create");
let calculateButton = document.getElementsByClassName("btn-success");

$calc.onclick = () => calcAll();
createButton.onclick = () => createNew();
calculateButton.onclick = () => calcAll();

function calcAll() {
  let totalAmount = 0;
  let subtotal = 0;
  let total = document.querySelectorAll("h2 span")[0];
  for (let i = 0; i < table.rows.length; i++) {
    subtotal = updateSubtot(i);
    totalAmount += parseInt(subtotal);
  }
  total.innerHTML = totalAmount;
}

function updateSubtot(i) {
  let price = document.querySelectorAll(".pu span");
  let amount = document.querySelectorAll(".qty input");
  let subtotal = document.querySelectorAll(".subtot span");
  let result = price[i].innerHTML * amount[i].value;
  subtotal[i].innerHTML = result;
  return result;
}

function createNew(){
  let name = document.querySelectorAll(".new input")[0].value;
  let value = document.querySelectorAll(".new input")[1].value;
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = value;
  newRow.querySelector(".qty input").value = 0;
  table.appendChild(newRow)
  refresh();
}

function deleteRow(index) {
  table.deleteRow(index);
  refresh();
}

function refresh() {
  for (let i = 0; i < deleteButton.length; i++) {
    updateSubtot(i);
    deleteButton[i].onclick = () => deleteRow(i);
  }
  calcAll();
}

