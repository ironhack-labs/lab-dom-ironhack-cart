//Calculate subtotal and return subtotal
function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML)
  const inputQuantity = Number(product.querySelector('.quantity input').value)
  let subtotal = price * inputQuantity
  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}

//Calculate total
function calculateAll() {
  const allProducts = document.querySelectorAll('.product')
  let total = 0
  allProducts.forEach(product => {
   total += updateSubtotal(product)
  })
  document.querySelector('#total-value span').innerHTML = total
}

//Remove product
function removeProduct(event) {
  const target = event.currentTarget
  target.parentNode.parentNode.remove()
}

//Add product
const createProduct = () => {
  let row = document.createElement('tr')
  row.classList.add('type', 'product')
  row.innerHTML = '<td class="name"><span>' + document.getElementById('newName').value + '</span></td><td class="price">$<span>' + document.getElementById('newValue').value + '</span></td><td class="quantity"><input type="number" id="onchange" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>' + document.getElementById('newValue').value + '</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>'
  document.getElementsByTagName('tbody')[0].appendChild(row)
  document.getElementById('newName').value = ''
  document.getElementById('newValue').value = ''
}

//Events
window.addEventListener('load', () => {
  //Calculate total button
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //Remove product button
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(product => {
    let removeButton = product.querySelector('.btn.btn-remove')
    removeButton.addEventListener('click', removeProduct)
  })

  //Create product button
  const createButton = document.getElementById('createBtn')
  createButton.addEventListener('click', createProduct)
})

/* const showSubtotal = document.getElementById('onchange')
showSubtotal.addEventListener('input', updateSubtotal) */
