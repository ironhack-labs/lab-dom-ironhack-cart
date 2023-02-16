// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span')
  const quantityElement = product.querySelector('.quantity input')
 
  const price = parseFloat(priceElement.innerHTML)
  const quantity = parseFloat(quantityElement.value)
 
  const subTotal = price * quantity
  const subTotalElement = product.querySelector('.subtotal span')

  subTotalElement.innerHTML = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  let totalPrice = 0

  allProducts.forEach(product => {
    const subTotal = updateSubtotal(product)
    totalPrice += subTotal
  });

    // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove()
 
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
});
