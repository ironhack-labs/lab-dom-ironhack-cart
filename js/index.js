// ITERATION 1

function updateSubtotal(product) {
  let unitPrice = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = Number(unitPrice.innerHTML) * Number(quantity.value);
  let elementSubtotal = product.querySelector('.subtotal span');
  elementSubtotal.innerHTML = subtotal;
  console.log('Calculating subtotal, yey!');
  return subtotal
}


 // ITERATION 2
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  let totalPrice = 0
  let products = document.querySelectorAll('.product')
  for (let singleProduct of products){
   let subtotal = updateSubtotal(singleProduct)
   totalPrice = totalPrice + subtotal
  }

  // ITERATION 3
  let elementTotalValue = document.querySelector('#total-value span')
  elementTotalValue.textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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
});
