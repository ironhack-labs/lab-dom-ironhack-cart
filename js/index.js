// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const inputQty = product.querySelector('.quantity input').value;

  const productPrice = product.querySelector('.price span').innerHTML;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = inputQty * productPrice

  return parseFloat(subTotal.innerHTML)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');

  let total = 0
  
  for (let element of allProducts) {
    
    total = total + updateSubtotal(element)
    
  }
  
  //... your code goes here

  // ITERATION 3
 
  let totalList = document.querySelector('#total-value span');

  totalList.innerHTML = total

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
