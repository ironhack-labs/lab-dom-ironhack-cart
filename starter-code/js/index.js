var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $delete = document.getElementsByClassName("btn-delete");

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector(".pu span").innerText;
  let quantityUnit = $product.querySelector(".qty label input").value;
  let newSubTotal = Number(priceUnit) * Number(quantityUnit);
  
  $product.querySelector(".subtot span").innerText = newSubTotal;
  return newSubTotal;
}

function calcAll() {
  // Iteration 1.2
  // Iteration 2
 
  //select all currently available rows
  let allRows = document.getElementsByClassName("product");
  //console.log(allRows);
  let fullTotal = 0;

  //Calculate subtotal for all rows
  for (currRow of allRows) {
    //execute subTotal calculation for 1 to N rows
    fullTotal += Number(updateSubtot(currRow));
    //console.log(currRow);
  }

  //Iteration 3
  //update FullTotal
  document.querySelector("h2 span").innerText = fullTotal;
  //console.log(document.querySelector("h2 span").innerText);

  //call add row
  addRow ();

  //get updated list for every new row
  
  $delete = document.getElementsByClassName("btn-delete");
  //console.log(document.getElementsByClassName("btn-delete")[1]);
  let btnIdCounter = 0;
  for (delBtn of $delete) {
    delBtn.id = btnIdCounter;
    btnIdCounter++;
    //console.log(delBtn);
  }
}
$calc.onclick = calcAll;

function addRow () {
  //select all currently available rows
  let allRows = document.getElementsByClassName("product");
  //console.log(allRows);
  let prevTableRow;

  //determine last row in table
  for (currRow of allRows) {
    prevTableRow = currRow;
    //console.log(prevTableRow);
  }

  //Identify table root
  let tableRoot = document.querySelector(".product").parentNode;
  //console.log(document.querySelector(".product").parentNode);

  //Do only add a new row if there is quantity > 0 in the previous row
  if (Number(prevTableRow.querySelector(".qty label input").value) > 0) {
    //clone new row from last existing one
    let newTableRow = prevTableRow.cloneNode(true);
    //console.log(newTableRow);

    //new row value initialization (yet static)
    newTableRow.querySelector(".name span").innerText = "IronShirt";
    newTableRow.querySelector(".pu span").innerText = "15.00";
    newTableRow.querySelector(".qty label input").value = "0";
    newTableRow.querySelector(".subtot span").innerText = "0";

    //add new row
    tableRoot.appendChild(newTableRow);
  }
}

function deleteRow() { //howto derive the set button id ???
  
}

$delete.onclick = deleteRow;