// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value
  const subtotalValue = product.querySelector('.subtotal span')

  subtotalValue.innerText = price.innerText * quantity
  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const newCart = document.querySelectorAll('tr.product')

  let subtotalValue = 0
  for (i = 0; i < newCart.length; i++) {
    const singleProduct = newCart[i]
    updateSubtotal(singleProduct)
    subtotalValue += Number(updateSubtotal(singleProduct).innerText)
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span')
  const newSubtotal = document.querySelectorAll('.subtotal span')

  let newTotal = 0
  for (i = 0; i < newSubtotal.length; i++) {
    newTotal += Number(newSubtotal[i].innerText)
  }

  totalPrice.innerText = newTotal
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
