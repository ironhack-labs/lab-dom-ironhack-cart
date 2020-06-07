// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price= product.querySelector('.price span').innerHTML
  const quantity= product.querySelector('.quantity input').value
  console.log(quantity)
  
  let subtotalValue= price * quantity
  console.log(subtotalValue)
  product.querySelector('.subtotal span').innerHTML = subtotalValue
  return subtotalValue
}

function calculateAll() {
  
  // ITERATION 2
  let total = 0
  
  const products = document.querySelector('.product')
  products.forEach(function (elm) {
  total += updateSubtotal(elm)
  })
  
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total
  }

  // ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
}

// ITERATION 5
//He tenido difultad en realizar esta Iteration.
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
