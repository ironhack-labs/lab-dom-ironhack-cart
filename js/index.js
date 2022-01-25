// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = Number((price.innerHTML)) * Number((quantity.value));
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const allProducts = document.getElementsByClassName('product');

  for (let i=0; i<allProducts.length; i++) {
    
  updateSubtotal(allProducts[i]);

  }

  console.log(allProducts)

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  const allSubtotals = document.querySelectorAll('.subtotal span');
  let finalTotal = 0;

  
  for (let j=0; j<allSubtotals.length; j++) {
    finalTotal +=  Number(allSubtotals[j].innerHTML);

  }

  total.innerHTML = finalTotal;

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
