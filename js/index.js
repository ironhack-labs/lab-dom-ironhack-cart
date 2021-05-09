// ITERATION 1

function updateSubtotal(product) {
  const price  =  product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  const subtotalEl = product.querySelector('.subtotal span')
  const calc = price * quantity
  subtotalEl.innerHTML = calc
  // console.log(calc)
  return calc
}

// ITERATION 2
  function calculateAll() {
    const products = document.querySelectorAll('.product')

    let total = 0;
    products.forEach((product) => {
      total += updateSubtotal(product)
    });

    return total
}
  // ITERATION 3
  function onCalculatePrices () {
    const total = calculateAll()
    const totalEl = document.querySelector('#total-value')
    totalEl.innerText = `Total: $${total}`
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  const productsEl = document.querySelector('tbody')
  const createProductEl = document.querySelector('.create-product')
  const productName = createProductEl.querySelector('input[type=text]').value
  const productPrice = createProductEl.querySelector('input[type=number]').value
  const newProduct =  document.createElement("tr");
  newProduct.classList.add('product')
  productsEl.appendChild(newProduct)

  const newProductName = document.createElement('td')
  newProductName.classList.add('name')
  newProductName.innerHTML = `<span>${productName}</span>`
  newProduct.appendChild(newProductName)

  const newProductPrice = document.createElement('td')
  newProductPrice.classList.add('price')
  newProductPrice.innerHTML = `$<span>${productPrice}</span>`
  newProduct.appendChild(newProductPrice)

  const newProductQuantity = document.createElement('td')
  newProductQuantity.classList.add('quantity')
  newProductQuantity.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity"/>`
  newProduct.appendChild(newProductQuantity)

  const newProductSubTotal = document.createElement('td')
  newProductSubTotal.classList.add('subtotal')
  newProductSubTotal.innerHTML = `$<span>0</span>`
  newProduct.appendChild(newProductSubTotal)

  const newProductAction = document.createElement('td')
  newProductAction.classList.add('action')
  newProduct.appendChild(newProductAction)

  const newProductRemoveBtn = document.createElement('button')
  newProductRemoveBtn.classList.add('btn')
  newProductRemoveBtn.classList.add('btn-remove')
  newProductRemoveBtn.innerText = "Remove"
  newProductAction.appendChild(newProductRemoveBtn)
  newProductRemoveBtn.addEventListener('click', removeProduct)


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtns = document.querySelectorAll('.btn.btn-remove')
  const createProductBtn = document.querySelector('#create')

  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct)

  })
  calculatePricesBtn.addEventListener('click', onCalculatePrices);
  createProductBtn.addEventListener('click', createProduct)
})
