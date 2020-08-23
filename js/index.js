// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = price * quantity


  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  document.querySelectorAll('.product').forEach(product => {
    updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  let total = 0
  const subtotals = document.querySelectorAll('.subtotal span')
  subtotals.forEach(subs => total += parseFloat(subs.textContent))

  const totalValue = document.querySelector('#total-value span')
  totalValue.textContent = total



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
  const product = target.parentNode.parentNode
  document.querySelector('tbody').removeChild(product)

  calculateAll()


}

// ITERATION 5

const product = document.querySelector('.product')
function createProduct() {
  //... your code goes here
  const nameValue = document.querySelectorAll('.create-product input')[0]
  const numValue = document.querySelectorAll('.create-product input')[1]

  
  const clone = product.cloneNode(true)
  
  const name = clone.querySelector('.name span')
  name.textContent = nameValue.value
  
  const num = clone.querySelector('.price span')
  num.textContent = numValue.value
  
  const quantity = clone.querySelector('.quantity input')
  quantity.value = 0

  const subTotal = clone.querySelector('.subtotal span')
  subTotal.textContent = '0'

  nameValue.value = ''
  numValue.value = 0
  document.querySelector('tbody').appendChild(clone)
  clone.querySelector('.btn-remove').addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelector('#create').addEventListener('click', createProduct)
  document.querySelectorAll('.btn-remove').forEach(btns => btns.addEventListener('click', removeProduct))
});
