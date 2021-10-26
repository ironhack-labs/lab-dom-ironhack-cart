// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const calculateSubtotal = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = calculateSubtotal
}

function calculateAll() {

  // ITERATION 2
  const productArray = document.getElementsByClassName('product')
  for(let item of productArray){
    updateSubtotal(item)
  }
  

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
