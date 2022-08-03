// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  return subtotal.innerText = price.innerText * quantity.value
}

function calculateAll() {
  const products = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value > span')
  let acc = 0

  products.forEach(product =>{
    acc += updateSubtotal(product)
  })
  
  return total.innerText = acc 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const removeProduct = target.parentNode.parentNode
  removeProduct.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.create-product')
  let productName = newProduct.querySelector('input[type=text]')
  let productPrice = newProduct.querySelector('input[type=number]')
  const newProductTr = document.createElement('tr')
  const parent = document.getElementsByTagName('tbody')[0]


  newProductTr.className = 'product'
  newProductTr.innerHTML = `
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${Number(productPrice.value).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `

  
  parent.appendChild(newProductTr)
  newProductTr.querySelector('.btn-remove').addEventListener('click', removeProduct)
  productName.value = ""
  productPrice.value = 0
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.querySelector('#calculate')
  let removeProductBtn = document.querySelectorAll('.btn-remove')
  const createProductBtn = document.querySelector('#create')

  

  calculatePricesBtn.onclick = () => {
    calculateAll()
  }

  removeProductBtn.forEach((productToRemove) => {
    productToRemove.addEventListener('click', removeProduct)
  })

  createProductBtn.addEventListener('click', (event) => {
    createProduct()
    calculateAll()
  })

});
