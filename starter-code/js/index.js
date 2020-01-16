var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $create = document.getElementById("create");

var $delete = document
  .querySelectorAll(".rm > button")
  .forEach(function(button) {
    button.onclick = deleteProduct;
  });

function updateSubtot(element) {
  // Iteration 1.1
  let subTotal;
  let cost = element.querySelector(".pu > span").innerText;
  let quantity = element.querySelector(".qty > label > input").value;
  let subtotDiv = element.querySelector(" td.subtot > span");

  subtotDiv.innerHTML = cost * quantity;
  return cost * quantity;
}

function calcAll() {
  let totalValue = 0;
  // Iteration 1.2
  document.querySelectorAll("#cart > tbody > tr").forEach(element => {
    totalValue += updateSubtot(element);
  });

  document.querySelector("body > h2 > span").innerHTML = totalValue;
}

function deleteProduct(event) {
  let currentEventTarget = event.currentTarget; //the delete button you clıcked on

  if (currentEventTarget.parentNode) {
    currentEventTarget.parentNode.parentNode.parentNode.removeChild(
      currentEventTarget.parentNode.parentNode
    );
  }
}

function addRow() {
  var tableRef = document
    .getElementsByClassName("#cart")
    .getElementsByTagName("tbody")[2];

  var newRow = tableRef.insertRow(tableRef.rows.length);
  return newRow;
}

$calc.onclick = calcAll;
$create.onclick = addRow;
