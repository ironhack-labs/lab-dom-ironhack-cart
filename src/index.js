// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const button = document.querySelector('.showValue')

  // button.onclick = function () {
  //   const input = document.querySelector('.text-input')
  //   const textOnInput = input.value     // value property gest an input value

  //   const result = document.querySelector('.result')
  //   result.innerText = textOnInput


  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const textOnInput = quantity * price

  const subtotal = product.querySelector('.subtotal span')
  // subtotal.innerText = quantity.value * price.innerText 
  subtotal.innerHTML = textOnInput

  return subtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product')

  for (i = 0; i < allProducts.length; i++) {
    const oneproduct = allProducts[i]
    updateSubtotal(oneproduct)
  }

  // ITERATION 3
  //... your code goes here
  const subtotal = document.querySelectorAll('.subtotal span')

  const totals = document.querySelector('#total-value span');

  let total = 0
  for (i = 0; i < subtotal.length; i++) {

    total = parseInt(subtotal[i].innerHTML) + total
  }
  totals.innerHTML = total
  console.log(total)
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
