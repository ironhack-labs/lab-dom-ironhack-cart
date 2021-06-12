// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector ('.quantity input');

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  const subtotal = product.querySelector ('.subtotal span');
  const subtotalValue = price * quantity;
  subtotal.innerHTML = subtotalValue;
 
  
  return subtotalValue;


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  let totalPrice = 0
  const multipleProducts = document.getElementsByClassName('product');
  for (let i = 0 ; i<multipleProducts.length ; i+=1){
  updateSubtotal(multipleProducts[i]);
  let valueSubtotal = multipleProducts[i].querySelector('.subtotal span').innerHTML;
  totalPrice += parseFloat(valueSubtotal);
}
document.querySelector('#total-value span').innerHTML = totalPrice
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
