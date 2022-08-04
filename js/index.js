// ITERATION 1
//const singleProduct = document.querySelector('.product')
function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  const priceTotal = Number(quantity) * Number(price)
  const result = product.querySelector('.subtotal span')
  result.innerHTML = priceTotal
}
function calculateAll() {
  // ITERATION 2
  const nodeProducts = document.querySelectorAll('tbody > tr')
  nodeProducts.forEach((product) =>{
    updateSubtotal(product)
  })

  // ITERATION 3
  let prices = 0;
  nodeProducts.forEach((nodes) =>{
   const priceTotalProduct = nodes.querySelector('.subtotal >span').textContent
   prices += parseFloat(priceTotalProduct)
  })
  const totalPrice = document.querySelector('#total-value > span')
  totalPrice.innerHTML = prices
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const productRemoved = target.parentNode.parentNode
  productRemoved.remove()
}
// ITERATION 5
function clean(){
  document.querySelector('[placeholder ="Product Name"]').value =''
  document.querySelector('[placeholder ="Product Price"]').value =''
}

function createProduct() {
  const tableBody = document.querySelector('tbody')
  const productCreateName  = document.querySelector('[placeholder ="Product Name"]').value
  const productCreatePrice = document.querySelector('[placeholder ="Product Price"]').value
  const newTableRow = document.createElement('tr')
  newTableRow.className='product'
  newTableRow.innerHTML=`
  <td class="name">
   <span>${productCreateName}</span>
    </td>
    <td class="price">$<span>${productCreatePrice}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>`
  tableBody.appendChild(newTableRow)
  clean()
}

window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  let productCreate = document.querySelector('#create')
  productCreate.addEventListener('click',createProduct)
  let removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach((btn) => {
  btn.addEventListener('click',removeProduct)})
})
