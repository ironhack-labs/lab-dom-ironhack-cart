// ITERATION 1

  function updateSubtotal(product) {
    function updateSubtotal(product) {
      console.log('Calculating subtotal, yey!');
    
      const price = product.querySelector('.price span')
      const quantity = product.querySelector('.quantity input').value
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let multiProducts = [...document.getElementsByClassName("product")]
  multiProducts.forEach((element) => updateSubtotal(element))
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log("The target in remove is:", target)
}
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
