
// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // your code cames here

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let total = price.innerHTML * quantity.value
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = total
  return total

}

function calculateAll() {
  // ITERATION 2
  let allProducts = document.getElementsByClassName("product");
  let sumTotal=0;
  for(let i = 0; i < allProducts.length; i++){
    sumTotal += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = sumTotal
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
