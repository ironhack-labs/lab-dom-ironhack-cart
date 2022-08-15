// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotalText = price * quantity

  return product.querySelector('.subtotal span').innerHTML = subtotalText

}

// ITERATION 2

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('tbody .product');
  //updateSubtotal(singleProduct);

  let totalValue = 0;

  for (let i = 0; i < document.getElementsByClassName('product').length; i++) {
    updateSubtotal(document.getElementsByClassName('product')[i])

    totalValue += updateSubtotal(document.getElementsByClassName('product')[i])

  }

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = totalValue
}

// end of test


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelector('.btn-remove');
  removeButtons.addEventListener('click', removeProduct);
});

