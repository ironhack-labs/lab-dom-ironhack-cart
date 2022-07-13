// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  let priceValue = price.innerText;
  console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = document.querySelector('.subtotal span')
  subtotal.innerHTML = priceValue * quantity;
  
  //... your code goes here
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let counter = 0;
  for (let i = 0 ; i < allProducts.length ; i++) {
    updateSubtotal(allProducts[i]);
    console.log(allProducts[i]);
    let allProductsSubtotal = allProducts[i].querySelector('.subtotal span').innerHTML;
    counter+= Number(allProductsSubtotal);
  }
  

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
