// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;

  console.log('Calculating subtotal, yey!');
  return subtotal
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product')
  for(let i = 0; i < products.length ; i += 1){
    updateSubtotal(products[i])
  }
  // ITERATION 3
  //... your code goes here
  let subtotal = document.querySelectorAll('.subtotal span')
  let total = document.querySelector('#total-value span')
  let somaElements = 0
  for (let i = 0 ; i < subtotal.length ; i += 1 ){
    somaElements += Number (subtotal[i].innerHTML)
  }
  total.innerHTML = somaElements
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

