let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");
let $create = document.getElementById("create");

function updateSubtot($product) {
  // Iteration 1.1
  const subTot =
    parseFloat($product.querySelector(".pu > span").innerHTML) *
    $product.querySelector(".qty input").value;
  $product.querySelector(".subtot span").innerHTML = subTot;
  return subTot;
}

function calcAll() {
  // Iteration 1.2
  // Iterate through all the products (rows)
  // Calc. each subtotal
  // Add up all the subtotals
  // Calc. total price
  const productRows = document.getElementsByClassName("product");
  let grandTotal = 0;
  for (const row of productRows) {
    // updateSubtot(row);
    grandTotal += updateSubtot(row);
  }
  document.querySelector(".grand-total").innerHTML = grandTotal;
}
$calc.onclick = calcAll;

// Deleting a product
let $del = document.getElementsByClassName("btn-delete");

// Assigning a onclick event listener for each button
for (const button of $del) {
  button.onclick = deleteProduct;
}

function deleteProduct(event) {
  console.log("Delete things");
  const currentButton = event.target;
  const currentProduct = currentButton.parentNode.parentNode;
  currentProduct.parentNode.removeChild(currentProduct);
}

// 1. Assign an event listener to the create btn
$create.onclick = createProduct;

function createProduct(event) {
  const currentButton = event.target;
  const currentProduct = currentButton.parentNode.parentNode;

  let newProductName = currentProduct.querySelector("td .product-name").value;
  let newPrice = currentProduct.querySelector("td .product-price").value;

  var row = document.getElementById("duplicate"); // find row to copy
  var table = document.getElementById("product-list"); // find table to append to
  var clone = row.cloneNode(true); // copy children too

  clone.querySelector(".name span").innerHTML = newProductName;
  clone.querySelector(".pu span").innerHTML = newPrice;
  console.log(clone);
  table.appendChild(clone); // add new row to end of table
  currentProduct.querySelector("td .product-name").value = "";
  currentProduct.querySelector("td .product-price").value = "";

  let $del = document.getElementsByClassName("btn-delete");

  // Assigning a onclick event listener for each button
  for (const button of $del) {
    button.onclick = deleteProduct;
  }
}

// 2. Select input value from name + pu
// 3. Create a new row that contains user input values
// 4. Onclick event will trigger: add the new row to the end of tbody
