// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  const subTotalElm = product.querySelector('.subtotal span')
  subTotalElm.innerHTML = subTotal;

  console.log(price);
  return subTotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 // ITERATION 3
  
  //... your code goes here
  let sum = 0;

  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);
  allProducts.forEach(product =>{
   sum += updateSubtotal(product);
  })
  // ITERATION 3
  //... your code goes here
  
  const totalElm = document.querySelector('#total-value span');
  totalElm.innerHTML = sum;
  
  
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
