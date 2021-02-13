// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let newSubtotal = product.querySelector('.subtotal span');
  newSubtotal.textContent = price.textContent * quantity.value;
}

function calculateAll() {
  // pour chaque produit, appeler updateSubtotal
  document.querySelectorAll('.product').forEach(updateSubtotal);

  // ITERATION 3
  let sumOfSubtotals = 0;
  document.querySelectorAll('.subtotal span').forEach(currentSubtotal => {
    sumOfSubtotals += parseFloat(currentSubtotal.textContent);
  }); 
  document.querySelector('#total-value span').innerHTML =sumOfSubtotals;
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

