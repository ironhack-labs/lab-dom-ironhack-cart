var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {
  let unitPrice = parseFloat($product.querySelector(".pu span").innerHTML);
  let quantity = $product.querySelector(".qty label input").value;

  const subTotal = unitPrice * quantity;

  $product.querySelector(".subtot span").innerHTML = subTotal;
  console.log(subTotal);
  return subTotal;

  // Iteration 1.1
}

function calcAll(price) {
  // Iteration 1.2
  let totalPrice = 0;

  document.querySelectorAll(".product").forEach(function(row) {
    totalPrice += updateSubtot(row);
  });

  console.log(totalPrice);
  let button = document.querySelector("h2>span");
  button.innerText = totalPrice;
  // document.querySelector("h2>span").innerText = totalPrice;
}
$calc.onclick = calcAll;
//product.querySelector(".subtot span").innerHTML = subTotal;

/*function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById("cart");

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell1 = newRow.insertCell(0);
  let newCell2 = newRow.insertCell(1);
  let newCell3 = newRow.insertCell(2);
  let newCell4 = newRow.insertCell(3);
  let newCell5 = newRow.insertCell(4);

  // Append a text node to the cell
  let newText1 = document.createTextNode("IronShirt");
  newCell1.appendChild(newText1);
  let newText2 = document.createTextNode("$15");
  newCell2.appendChild(newText2);
  let newText = document.createTextNode(#Cart.);
  newCell3.appendChild(newText);
  let newText = document.createTextNode('IronShirt');
  newCell1.appendChild(newText);
}

// Call addRow() with the table's ID
addRow("my-table");
*/
