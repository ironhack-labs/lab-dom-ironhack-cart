// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  var totalValue = 0;
  for (let i = 0; i < allProducts.length; i++) {
    var subtotalOfProducts = updateSubtotal(allProducts[i]);
    totalValue += subtotalOfProducts
  }
  document.querySelector("#total-value span").innerText = totalValue;
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentProduct = target.parentNode.parentNode;
  const table = parentProduct.parentNode;
  console.log(parentProduct);
  console.log(table);
  table.removeChild(parentProduct);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  const nameInput = document.querySelector(".create-product td:nth-child(1) input").value;
  const priceInput = document.querySelector(".create-product td:nth-child(2) input").value;
  var table = document.querySelector("tbody");
  if (nameInput === "") { 
    alert("Please type name of new product.");
  } else {
  table.insertRow();
  var insertedRow = table.lastChild;
  insertedRow.classList.add("product");
  insertedRow.insertCell();
  var firstCell = insertedRow.lastChild;
  firstCell.innerHTML = `<span>${nameInput}</span>`
  insertedRow.insertCell();
  var secondCell = insertedRow.lastChild;
  secondCell.classList.add('price');
  secondCell.innerHTML = `$<span>${priceInput}</span>`
  insertedRow.insertCell();
  var thirdCell = insertedRow.lastChild;
  thirdCell.classList.add("quantity");
  thirdCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  insertedRow.insertCell();
  var fourthCell = insertedRow.lastChild;
  fourthCell.classList.add('subtotal');
  fourthCell.innerHTML = `$<span>0</span>`;
  insertedRow.insertCell();
  var lastCell = insertedRow.lastChild;
  lastCell.classList.add('action');
  var button = document.createElement("Button");
  button.classList.add("btn");
  button.classList.add("btn-remove");
  button.innerText = 'Remove';
  lastCell.appendChild(button);
  document.querySelector(".create-product td:nth-child(1) input").value = '';
  document.querySelector(".create-product td:nth-child(2) input").value = 0;
  }
  createListenerForRemoveBtns()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  createListenerForRemoveBtns();
});

function createListenerForRemoveBtns () {
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
}