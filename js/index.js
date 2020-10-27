// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(" .price span").textContent;
  const quantity = product.querySelector(".quantity input ");
  const quantityV = quantity.value
  let subTotal = 0;
  subTotal = subTotal + price * quantityV
  const sTotal = product.querySelector(".subtotal span");
  sTotal.innerHTML = subTotal
  console.log('Calculating subtotal, yey!');
  //... your code goes here
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // ITERATION 2
  //... your code goes here
  
  
  

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
