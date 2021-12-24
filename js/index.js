// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotalPrice = product.querySelector('.subtotal span')
  subtotalPrice.textContent = Number(price.textContent) * quantity.value;
  return subtotalPrice;
}


function calculateAll() {
  // console.log('Calculating calculateAll, yey!');
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProduct = document.querySelectorAll('.product');
  allProduct.forEach((elem) =>{
    updateSubtotal(elem);
  })
  // end of test
}



  // ITERATION 3
  //... your code goes here


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

