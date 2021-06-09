// ITERATION 1

function updateSubtotal(product) {
  let prodVal = product.querySelector('.price span').innerHTML
  console.log(prodVal) 
  let quantity = product.querySelector('.quantity input').value
  console.log(quantity)
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = Number(prodVal) * Number(quantity)

  return subtotal.innerHTML;
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll('.product')
  products.forEach((elem) => {
    updateSubtotal(elem)
  })

  // ITERATION 3
  let total = 0;
  products.forEach((elem) => {
    let subtotal = Number(elem.querySelector('.subtotal span').innerHTML)
    total += subtotal;
  })
  
  let finTotal = document.querySelector('#total-value span')
  finTotal.innerHTML = total 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let node = target.parentNode
  let parent = node.parentNode
  
  let subtotal = parent.querySelector('.subtotal span')
  let finTotal = document.querySelector('#total-value span')
  finTotal.innerHTML -= subtotal.innerHTML
  parent.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProdcart = document.querySelectorAll('.btn-remove');
  removeProdcart.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      removeProduct(event)})
  })
});
