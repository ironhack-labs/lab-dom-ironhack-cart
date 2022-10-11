// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const newPrice = price.innerHTML 
  const newQuantity = quantity.value
  let calculate = newPrice*newQuantity

  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerText = calculate
  return calculate
}  


function calculateAll() {
  const products = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let i = 0; i< products.length; i++) {
    totalValue = totalValue + updateSubtotal(products[i])
  }
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalValue
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
