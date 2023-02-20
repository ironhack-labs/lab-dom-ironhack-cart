window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

  addOnClickEventForRemoveButtons();
});

function addOnClickEventForRemoveButtons() {
  let removeButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
}

// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let totalByProduct = price * quantity;
  product.querySelector('.subtotal span').innerHTML = totalByProduct;
  return totalByProduct;
}

// ITERATION 2 and 3
function calculateAll() {   
  let totalByCart = 0;
  const products = document.querySelectorAll('.product');  
  for (i=0; i<products.length; i++) {
    totalByCart += updateSubtotal(products[i]);
  }
  document.querySelector('#total-value span').innerHTML = totalByCart;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const trParent = target.parentNode.parentNode;
  trParent.remove();  
  calculateAll();
}

// ITERATION 5
function addProductRow() {
  let tableProducts = document.querySelector('#cart tbody');
  let rowToClone = document.querySelectorAll('tbody .product')[0];
  let clonedRow = rowToClone.cloneNode(true);
  tableProducts.appendChild(clonedRow);
  return clonedRow;
}

function createProduct() {
  const sourceData = document.querySelector(".create-product");
  const name = sourceData.getElementsByTagName('input')[0].value;
  const price = sourceData.getElementsByTagName('input')[1].value;
  
  const clonedRow = addProductRow();
  clonedRow.querySelector('.name').innerHTML = name;
  clonedRow.querySelector('.price span').innerHTML = parseFloat(price);
  addOnClickEventForRemoveButton(clonedRow.querySelector('button'));
  cleanProductTableFooter();
}

function addOnClickEventForRemoveButton(button) {
  button.addEventListener('click', removeProduct);
}


function cleanProductTableFooter() {
  const sourceData = document.querySelector(".create-product");
  sourceData.getElementsByTagName('input')[0].value = "";
  sourceData.getElementsByTagName('input')[1].value = "";
}
