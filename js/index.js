// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  let extractedPrice = price.innerHTML;
  let extractedQuantity= quantity.value;
  console.log(extractedQuantity);
  let subTotal = extractedPrice * extractedQuantity;
  console.log(subTotal)
  const subTotalClass = product.querySelector('.subtotal span');
  const finalCalculatedSubtotal = subTotalClass.innerHTML(subTotal);
  
}

function calculateAll() {


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 
  const allProducts = document.querySelectorAll('.product');
  let calcTotal = 0

  allProducts.forEach(item => calcTotal += updateSubtotal(item))

  // ITERATION 3

  document.querySelector('#total-value span').innerText = calcTotal  
  //... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()
  calculateAll()
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
