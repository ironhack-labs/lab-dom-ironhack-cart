// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log('Calling method');
  const priceV = parseFloat(price.innerText);
  const quantityV = quantity.value;
  const subtotalV = priceV * quantityV;
  const subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.innerHTML = subtotalV;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log("Single product" + singleProduct);
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here

  const productsElm = document.querySelectorAll('.product');

  productsElm.forEach((product) => {
    updateSubtotal(product);
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
