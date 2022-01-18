// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity>input");
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);
  let subtotal = (priceValue * quantityValue);
  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2);
  return subtotal;
  
}

// ITERATIONS 2 AND 3

function calculateAll() {

  const products = document.querySelectorAll('.product');
  let total = 0;

  for (i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  document.querySelector("#total-value span").innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
}

// ITERATION 5

function createProduct() {
  
  const newProductInputs = document.querySelectorAll('.create-product td input');

  const table = document.getElementById('cart');

  const newRow = document.querySelector('.product').cloneNode(true);
  newRow.querySelector('.name span').innerText = newProductInputs[0].value;
  newRow.querySelector('.price span').innerText = newProductInputs[1].value;

  table.appendChild(newRow);

  newProductInputs[0].value = "";
  newProductInputs[1].value = 0;
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = [...document.getElementsByClassName('btn btn-remove')];
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
