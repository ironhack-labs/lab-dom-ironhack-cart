// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product);

  const quantityInput = product.querySelector('.quantity input');
  const quantity = quantityInput.value;

  const priceSpan = product.querySelector('.price span');
  const price = parseFloat(priceSpan.innerText);

  const subtotalSpan = product.querySelector('.subtotal span');
  subtotalSpan.innerText = quantity * price;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  for (let product of products) {
    updateSubtotal(product);
  }
  
  // ITERATION 3
  const subtotals = document.querySelectorAll('.product .subtotal span');
  let total = 0;
  for (let subtotal of subtotals) {
    total += parseFloat(subtotal.innerText);
  }
  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const deleteBtn = event.currentTarget;
  console.log('The target in remove is:', deleteBtn);
  deleteBtn.parentNode.parentNode.remove();
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteBtns = document.querySelectorAll('.product .btn-remove');
  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', removeProduct)
  }
});
