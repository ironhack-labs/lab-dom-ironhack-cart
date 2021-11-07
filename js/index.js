// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const calcSubtotal = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = calcSubtotal
  return calcSubtotal
}


// ITERATION 2
  
function calculateAll() {
  
  let sum = 0
  const products = document.getElementsByClassName('product')
  for (let i = 0; i < products.length; i++){
    sum += updateSubtotal(products[i])
  }

  // ITERATION 3

  let total = document.querySelector('#total-value span')
  total.innerText = sum
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
