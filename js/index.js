// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  console.log(price.innerHTML);
  const quantity = product.querySelector('.quantity input');
  console.log(quantity.value);
  const totalPrice = price.innerHTML * quantity.value;
  console.log(totalPrice);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalPrice;
  console.log(subtotal);
  return totalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  console.log(allProducts);
  let sum = 0
  for (let i=0; i < allProducts.length; i++) {
  sum += updateSubtotal(allProducts[i]);
 }
  console.log(sum);

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = sum;
  return sum; 
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
