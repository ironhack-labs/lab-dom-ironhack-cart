// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  let total = price.innerHTML * quantity.value;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = total;
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.getElementsByClassName("product");
  allProducts = [...allProducts];

  let total = 0;
  for (let i = 0; i < allProducts.length ; i++){
    total += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  let allTotal = document.querySelector('#total-value span');
  allTotal.innerHTML = total ;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();

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
