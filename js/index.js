// ITERATION 1
' use strict'

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input')
  const cost = Number(price.innerHTML);
  const input = Number(quantityInput.value);
  const totalProduct = cost * input;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalProduct;
  return totalProduct;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach((product) => {
    var productTotal = updateSubtotal(product);
    total += productTotal;
  })

  console.log(total);
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentNode = document.querySelector('tbody');
  const currentProduct = document.querySelector('.product');
  parentNode.removeChild(currentProduct)
  console.log('The target in remove is:', target);
  calculateAll();
}



// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product td:first-child input');
  const unitPrice = document.querySelector('.create-product td:nth-child(2) input');
  const nameInput = name.value;
  const unitPriceInput = unitPrice.value;
  const parentNode = document.querySelector('tbody');
  const newProduct = document.createElement("tr");
  newProduct.innerHTML = `
  <td class="name">
    <span>${nameInput}</span>
  </td>
  <td class="price">$<span>${unitPriceInput}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  //have to add class 'product' for calculateAll function to work
  newProduct.setAttribute('class', 'product');
  parentNode.appendChild(newProduct);
  //clear inputs 
  name.value = '';
  unitPrice.value = '';

  //remove button
  const removeButton = newProduct.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((removeButton) => removeButton.addEventListener('click', removeProduct));

  const createProductButton = document.querySelector('#create');
  createProductButton.addEventListener('click', createProduct);

});
