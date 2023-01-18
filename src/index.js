// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  // console.log(price, quantity)

  let totalPrice = price * quantity;

  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = totalPrice
  // console.log(totalPrice)
  return totalPrice
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product')
  let total = 0
  for (let i = 0; i < products.length; i++) {
    let subtotalUpdated = updateSubtotal(products[i])
    total += subtotalUpdated;
  }
  // ITERATION 3
  //... your code goes here
  document.getElementById('total-value').innerHTML = `${total} $`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const buttons = document.getElementsByClassName('btn-remove');

  for (let button of buttons) {
    button.addEventListener('click', removeProduct)
  }
})
