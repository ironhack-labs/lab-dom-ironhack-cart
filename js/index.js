// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerHTML = price * quantity

  return price * quantity
}

function calculateAll() {
  const productsList = document.getElementsByClassName('product')
  let totalValue = document.getElementById('total-value').querySelector('span')
  let totalSum = 0

   for(let i = 0; i<productsList.length; i++){
    totalSum += updateSubtotal(productsList[i])
    totalValue.innerHTML = totalSum
  }

  return totalSum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const temProduct = target.parentNode.parentNode

  temProduct.parentNode.removeChild(temProduct) 
  calculateAll()
}

// ITERATION 5

const generateProduct = () =>{
  let newProduct = document.createElement('tr')
  newProduct.className += 'product'

  newProduct.innerHTML = `<tr class="product">
  <td class="name">
    <span></span>
  </td>
  <td class="price">$<span>0.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  document.getElementById('cart').appendChild(newProduct)
  newProduct.getElementsByClassName('btn btn-remove')[0].addEventListener('click', removeProduct)

  return newProduct
}

const assignValues = (product,name,price) => {
  product.querySelector('.price span').innerHTML = Number(price).toFixed(2)
  product.querySelector('.name span').innerHTML = name
}

function createProduct() {

  const newElement = generateProduct()

  const productName = document.querySelector('.create-product').cells[0].childNodes[1].value
  const unitPrice = document.querySelector('.create-product').cells[1].childNodes[1].value

  assignValues(newElement,productName,unitPrice)
  
  document.querySelector('.create-product').cells[1].childNodes[1].value = 0
  document.querySelector('.create-product').cells[0].childNodes[1].value = ''

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeBtn = document.getElementsByClassName('btn btn-remove')
  for(let i =0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct) 
  }

  const addElementBtn = document.getElementById('create')
  addElementBtn.addEventListener('click',createProduct)

})
