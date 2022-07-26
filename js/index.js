// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //let valuePrice = price.getElementbyTagName(span).innerHTML;
  //let valueQuantity = product.getElementbyTagName(span).innerHTML;
  //let sumSubtotal = valuePrice*valueQuantity;
  //let subtotal = product.querySelector('.subtotal span')
  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const sumSubtotal = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span")

  subtotal.innerHTML = sumSubtotal;

  return sumSubtotal


  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

//function calculateAll() {
// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
//const singleProduct = document.querySelector('.product');
//updateSubtotal(singleProduct);
// end of test

// ITERATION 2
//... your code goes here
function calculateAll() {
  const allProducts = document.getElementsByClassName('product')
  let total = 0;
  for (i=0; i<allProducts.length; i++) {
    total += updateSubtotal(allProducts[i])
  };
  
    // ITERATION 3
  //... your code goes here
  const totalSumText = document.querySelector("#total-value span")
  totalSumText.innerHTML = total
}

calculateAll()



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
