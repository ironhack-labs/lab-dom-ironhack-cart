// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  // console.log('price: ', price)
  const quantity = product.querySelector('.quantity input')
  // console.log('input quantity: ', quantity)

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  
  const subtotal = priceValue * quantityValue;

  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.getElementsByClassName('product');
  
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += Number(products[i].querySelector('.subtotal span').innerHTML);
  }

  document.querySelector("h2 span").innerHTML = total;

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
