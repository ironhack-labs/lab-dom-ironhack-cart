// ITERATION 1

function updateSubtotal(product) {
/*  console.log('Calculating subtotal, yey!');
  console.log(product);
  const price = product.querySelector('.price span');
  console.log(price);
  const priceValue = Number(price.innerText);
  console.log(typeof priceValue);
  const quantity = document.querySelector('.quantity input').value;
  const quantityValue = Number(quantity.innerText);
  console.log(quantityValue);
  const subtotal = document.querySelector('.subtotal span');
  const subtotalValue = Number(subtotal.innertext);
  console.log(quantityValue);
  const calcSubtotalValue =  priceValue * quantityValue;
  return calcSubtotalValue;
  */

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value

  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal;

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelectorAll('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

  // ITERATION 3
  //... your code goes here
    const subtotal = updateSubtotal(product);
    total += subtotal;
  }
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const removeBtn = document.getElementsByClassName('.btn btn-remove');

  removeBtn.forEach(element => {
  element.addEventListener('click', function() {

  let subtotal = product.querySelector('.subtotal span').innerText;
  let quantity = product.querySelector('.quantity input').value.innerText
});
    
});
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
