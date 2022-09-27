// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // paso 1
  let price = product.querySelector (".price span");
  //paso 2
  let quantity = product.querySelector (".quantity input");
  //paso 3
  let subtotal1 = price.textContent * quantity.value;
  //paso 4
  let subtotal2 = product.querySelector (".subtotal span");
  //paso 5
  subtotal2.innerHTML = subtotal1;
  return subtotal1;
}

function calculateAll() { 
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let moreProducts = document.querySelectorAll(".product");
  moreProducts.forEach((eachProduct) => {
    updateSubtotal(eachProduct)
  });

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
