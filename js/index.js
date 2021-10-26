// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const calculateSubtotal = price * quantity
  const subtotal = product.querySelector('.subtotal span') //Target subtotal span
  subtotal.innerText = calculateSubtotal //Update subtotal span with the actual subtotal

  return calculateSubtotal //Return to use in calculate all
}

function calculateAll() {

  // ITERATION 2
  const productArray = document.getElementsByClassName('product') //Extract a list of the products
  for(let item of productArray){ //Update subtotal for every product
    updateSubtotal(item)
  }
  
  // ITERATION 3
  let sum = 0
  for(let product of productArray){
    sum += updateSubtotal(product) //Obtain sum by adding the returned subtotal every iteration
  }

  const total = document.querySelector('#total-value span') //Target the total span
  total.innerText = sum //Change the total span to the sum
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
