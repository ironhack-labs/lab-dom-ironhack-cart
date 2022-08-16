// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  // console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal
  // console.log(subtotal);  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let totalPrice =  0  
  products.forEach(function(products){
      totalPrice += updateSubtotal(products)
  })
  
  document.querySelector('#total-value span').innerHTML = totalPrice
  console.log(totalPrice);

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
