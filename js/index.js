// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product')

  let sum = 0 

  for(let i = 0; i < allProducts.length; i++){
    sum += updateSubtotal(allProducts[i])
  }
  const total = document.querySelector('#total-value span')
  total.innerText = sum 
}

// ITERATION 4

function removeProduct(event) {
  
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
