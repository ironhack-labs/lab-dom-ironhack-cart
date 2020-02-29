// ITERATION 1

function updateSubtotal($product) {
  // let price = document.querySelectorAll(".product")[0].querySelector(".price").firstElementChild.innerText
  let price = parseFloat($product.querySelector(".price").firstElementChild.innerText);
  let quantity = parseFloat($product.querySelector(".quantity").firstElementChild.value);
  let subtotal = price * quantity;
  $product.querySelector(".subtotal").firstElementChild.innerText = (subtotal).toFixed(2)
  return subtotal;
}

function calculateAll() {
  
  // For development testing purposes, paste the following code inside of `calculateAll`:
// const $singleProduct = document.querySelector('.product');
// updateSubtotal($singleProduct);
// End of test

  // ITERATION 2
  // document.querySelectorAll(".product").forEach(element => {
  //   updateSubtotal(element);
  // });
  
  // ITERATION 3
  let total = 0;
  document.querySelectorAll(".product").forEach(element => {
    total += updateSubtotal(element);
    console.log(total);
  });
  document.getElementById("total-value").firstElementChild.innerText = total.toFixed(2);
  //...
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');
  $calculateTrigger.addEventListener('click', calculateAll);

  const $removeTriggers = document.getElementsByClassName("btn-remove");
  [...$removeTriggers].forEach(element => {
    element.addEventListener('click', productRemoveListener);
  })

  const $addTrigger = document.getElementById("create");
  $addTrigger.addEventListener('click', createProduct);
});

// ITERATION 4

function productRemoveListener(event) {
  const row = event.currentTarget.parentNode.parentNode;
  const tbody = event.currentTarget.parentNode.parentNode.parentNode;
  tbody.removeChild(row);
}

let btn;
// ITERATION 5
function createProduct(event) {
  // Points to addRow and gets inputs values
  const addRow = event.currentTarget.parentNode.parentNode;
  const nameInput = addRow.firstElementChild.firstElementChild;
  const newName = nameInput.value;
  const priceInput = addRow.querySelector("input[type=number]");
  const newPrice = priceInput.value;
  // Points to tbody and create new row
  const tbody = event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector("tbody");
  const newRow = tbody.insertRow();
  newRow.className = "product";
  // Inserts Name Cell
  newNameCell = newRow.insertCell(0);
  newNameCell.className = "name";
  const newNameSpan = document.createElement("span");
  newNameSpan.innerText = newName;
  newNameCell.appendChild(newNameSpan);
  // Inserts Price cell with two digits, dollar sign and span inside
  const priceSpan = document.createElement("span");
  priceSpan.textContent = parseFloat(newPrice).toFixed(2);
  const newPriceCell = newRow.insertCell(1);
  newPriceCell.className = "price";
  newPriceCell.appendChild(document.createTextNode("$"));
  newPriceCell.appendChild(priceSpan);
  // Inserts Quantity input
  const newQuantityCell = newRow.insertCell(2);
  newQuantityCell.className = "quantity";
  newQuantityCell.appendChild(setAttributes(document.createElement("input"), {"type": "number", "value" : "0", "min" : "0", "placeholder" : "Quantity"}));
  // Inserts Subtotal cell with dollar sign and span inside
  const subtotalSpan = document.createElement("span");
  subtotalSpan.textContent = "0";
  const newSubtotalCell = newRow.insertCell(3);
  newSubtotalCell.className = "subtotal";
  newSubtotalCell.appendChild(document.createTextNode("$"));
  newSubtotalCell.appendChild(subtotalSpan);
  // Inserts Remove button and adds eventTrigger
  const newRemoveCell = newRow.insertCell(4);
  newRemoveCell.className = "action";
  const removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-remove";
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener('click', productRemoveListener);
  btn = removeBtn;
  newRemoveCell.appendChild(removeBtn);
  // Clears Inputs
  nameInput.value = "";
  priceInput.value = "0";
}

// Helper function
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  return el;
}