// ITERATION 1
//calculate subtotal price

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = price * quantity
  return price * quantity
}

 // ITERATION 2
function calculateAll(product) {
  let productsRows = document.querySelectorAll('.product');
  let total = 0;
  productsRows.forEach( function(product) {
    total += updateSubtotal(product)
  })
  document.querySelector('#total-value span').innerText = total

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
