// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const total = price * quantity
  subtotal.innerHTML = total
  return total
  // ... your code goes here
}


function calculateAll() {
  const everyProduct = document.querySelectorAll('.product')
  let total = 0
  everyProduct.forEach((element) => { total += updateSubtotal(element) })
  const total_span = document.querySelector('.total span')
  total_span.innerHTML = total
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  const father = document.querySelector('#cart tbody')
  const tableSelect = target.parentNode
  const rowDelete = tableSelect.parentNode
  father.removeChild(rowDelete)
  calculateAll()
}

// ITERATION 5

// function createProduct(event) {
//   const target = event.currentTarget
//   console.log('The target in add is:', target)
//   // const father = document.querySelector('#cart tbody')
//   // const tableSelect = target.parentNode
//   // const rowAdd = tableSelect.parentNode
//   // father.appendChild(rowAdd) //... your code goes here
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelector('.btn-remove');
  removeProductBtn.addEventListener('click', removeProduct);

  // const createProductBtn = document.querySelector('.btn-create');
  // createProductBtn.addEventListener('click', createProduct);
});
