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
  totalProduct;
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
}

const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((removeButton) => removeButton.addEventListener('click', removeProduct));

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product td:first-child input');
  const unitPrice = document.querySelector('.create-product td:nth-child(2) input');
  const nameInput = name.value;
  const unitPriceInput = unitPrice.value;
  const parentNode = document.querySelector('tbody');
  const newProduct = document.createElement("tr");
  newProduct.innerHTML = `<td class="name">
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
  parentNode.appendChild(newProduct);
  newProduct.setAttribute('id', 'new-product');
}

// function updateSubtotalOfNewProduct(newProduct) {
//   console.log('Calculating subtotal, yey!');
//   const newProduct = document.querySelector('#new-product');
//   const price = newProduct.querySelector('.price span');
//   const quantityInput = newProduct.querySelector('.quantity input')
//   const cost = Number(price.innerHTML);
//   const input = Number(quantityInput.value);
//   const totalProduct = cost * input;
//   const subtotal = newProduct.querySelector('.subtotal span');
//   subtotal.innerHTML = totalProduct;
//   return totalProduct;
// }

// function calculateAllNewProducts() {
//   const newProducts = document.querySelectorAll('#new-product');
//   let total = 0;

//   newProducts.forEach((newProduct) => {
//     var productTotal = updateSubtotal(newProduct);
//     total += productTotal;
//   })

// console.log(total);
// const totalValue = newProduct.querySelector('#total-value span')
// return totalValue.textContent = total;

// }

const createProductButton = document.querySelector('#create');
createProductButton.addEventListener('click', createProduct);

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
