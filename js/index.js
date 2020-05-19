// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  const subtotalHTML = product.querySelector('.subtotal span')
  subtotalHTML.innerText = subtotal  
}

function calculateAll() {
  // ITERATION 2
  const productList = [...document.getElementsByClassName('product')]
  productList.forEach ((product) => {
    updateSubtotal(product)
  })

  // ITERATION 3
  const total = document.querySelector('#total-value span') 
  const everySubtotal = [...document.querySelectorAll('.subtotal span')]
  
  const addition = everySubtotal.reduce ((accum, subtotal ) => {
    return accum += Number(subtotal.innerText)
  }, 0)
  total.innerText = addition
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
  const productTr = target.parentNode.parentNode
  productTr.remove()
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deletePricesBtns = [...document.getElementsByClassName('btn-remove')]
  deletePricesBtns.forEach((deleteBtn) =>{
    deleteBtn.addEventListener('click', removeProduct)
  })
});
