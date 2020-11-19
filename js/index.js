// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log('Calculating subtotal, yey!');
  let updatedPrice = parseFloat(price) * parseFloat(quantity);
  product.querySelector('.subtotal span').innerHTML = updatedPrice
  return updatedPrice
}

function calculateAll() {
  
  // ITERATION 2
  let products = Array.from(document.getElementsByClassName('product'))
  products.forEach(product => {updateSubtotal(product)})

  // ITERATION 3
  let total = products.reduce(function(acc, curr) {
    return acc + updateSubtotal(curr)
  }, 0)
  
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', );
  const product = target.parentNode.parentNode
  const tBody = document.getElementsByTagName('tbody')[0]
  tBody.removeChild(product)
  calculateAll()
}

// ITERATION 5
// 
function createProduct() {
  const name = document.querySelector('.create-product > td > input[type="text"]').value
  const price =  document.querySelector('.create-product > td > input[type="number"]').value
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = Array.from(document.getElementsByClassName('btn btn-remove'))
  removeBtns.forEach(btn => {btn.addEventListener('click', removeProduct)})
  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct);
});
