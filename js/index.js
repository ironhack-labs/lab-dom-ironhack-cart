// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let quantity = parseInt(
    product.querySelector('.quantity').childNodes[1].value
  );
  let price = parseFloat(
    product.querySelector('.price').childNodes[1].innerText
  );

  var subtotal = quantity * price

  product.querySelector('.subtotal').childNodes[1].innerText = 
  subtotal.toFixed(2);

return subtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productList = document.querySelectorAll('.product')
  
  let total = 0;
  productList.forEach((product) => {
    total += updateSubtotal(product)
  });

  // ITERATION 3
  document.getElementById('total-value').childNodes[1].innerText =
  total.toFixed(2)
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
