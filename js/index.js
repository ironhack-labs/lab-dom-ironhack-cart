// ITERATION 1


function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = price.textContent * quantity.value




  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here


  const product = document.getElementsByClassName('product')
  let globalSubtotalSum = 0

  for (let i = 0; i < product.length; i++) {

    updateSubtotal(product[i])

  }


  // ITERATION 3
  //... your code goes here

  let totalButtonValue = 0
  const subtotal = document.querySelectorAll('.subtotal span')
  for (let i = 0; i < subtotal.length; i++) {

    totalButtonValue += subtotal[i].textContent * 1

  }
  const sumOfTotals = document.querySelector('#total-value span')

  sumOfTotals.innerHTML = ""
  sumOfTotals.innerHTML += totalButtonValue

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
