// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price.innerHTML * quantity.value;

return parseFloat(subtotal.innerHTML);

}



function calculateAll() {
  
 // ITERATION 2

 const allProduct = document.querySelectorAll(".product");
 let total = 0
 allProduct.forEach((product) => {
  total += updateSubtotal(product)});
 
 let totalGeral = document.getElementById("total-value");

 return (totalGeral.innerHTML = `$${total}` )

 };

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