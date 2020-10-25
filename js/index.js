// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('input')
  const subtotalResult = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalResult
  return subtotalResult
}

function calculateAll() {


  // ITERATION 2
  const products = document.querySelectorAll('.product');
  products.forEach(function (product) {
    updateSubtotal(product);
  })

  // ITERATION 3
  let totalValue = 0
  products.forEach(function (product) {
    totalValue += updateSubtotal(product);
  })
  let total = document.querySelector('#total-value span')
  total.innerHTML = `${totalValue.toFixed(2)}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget

  //... your code goes here

  const productNode = target.parentNode
  const tableNode = productNode.parentNode
  tableNode.removeChild(productNode)
  calculateAll()
  console.log(productNode)
  // console.log(product)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productInput = document.querySelector('.text-input input').value
  const priceProductsInput = document.querySelector('.number-input input').value
  // console.log(numberProductsInput)
  if (productInput !== "" && priceProductsInput > 0) {
    const newRow = document.createElement('tr')
    newRow.className = 'product'
    document.querySelector('tbody').appendChild(newRow)

    const productIndex = document.querySelectorAll('.product').length - 1
    const lastProduct = document.querySelectorAll('.product')[productIndex]

    //Añadir Nombre del producto
    const tdName = document.createElement('td')
    tdName.className = 'name'
    lastProduct.appendChild(tdName)
    const Span = document.createElement('span')
    lastProduct.querySelector('.name').appendChild(Span)
    lastProduct.querySelector('.name span').innerHTML = productInput

    //Añadir Precio del producto
    const tdPrice = document.createElement('td')
    tdPrice.className = 'price'
    lastProduct.appendChild(tdPrice)
    const priceSpan = document.createElement('span')
    lastProduct.querySelector('.price').appendChild(priceSpan)
    lastProduct.querySelector('.price').innerHTML = '$<span></span>'
    lastProduct.querySelector('.price span').innerHTML = priceProductsInput

    //Añadir Cantidad del producto
    const tdQuantity = document.createElement('td')
    lastProduct.appendChild(tdQuantity)
    tdQuantity.className = 'quantity'
    const quantityInput = document.createElement('input')
    quantityInput.type = 'number'
    quantityInput.value = '0'
    quantityInput.min = '0'
    quantityInput.placeholder = 'Quantity'
    lastProduct.querySelector('.quantity').appendChild(quantityInput)

    //Añadir Subtotal del producto
    const tdSubtotal = document.createElement('td')
    lastProduct.appendChild(tdSubtotal)
    tdSubtotal.className = 'subtotal'
    const subtotalSpan = document.createElement('span')
    lastProduct.querySelector('.subtotal').appendChild(subtotalSpan)
    lastProduct.querySelector('.subtotal').innerHTML = '$<span></span>'
    lastProduct.querySelector('.subtotal span').innerHTML = updateSubtotal(lastProduct)

    //Añadir Boton Remove
    const tdAction = document.createElement('td')
    lastProduct.appendChild(tdAction)
    tdAction.className = 'action'
    const removeButton = document.createElement('button')
    removeButton.className = 'btn'
    removeButton.classList.add('btn-remove')
    lastProduct.querySelector('.action').appendChild(removeButton)
    lastProduct.querySelector('.btn-remove').innerHTML = 'Remove'
    console.log(lastProduct)

    //Volver a llamar a removeProduct
    const removeBtn = document.querySelectorAll('.action')
    removeBtn.forEach(btn => {
      btn.onclick = evt => {
        removeProduct(evt)
      }
    })
  } else {
    alert('Please, introduce the product name and its price')
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.action')
  removeBtn.forEach(btn => {
    btn.onclick = evt => {
      removeProduct(evt)
    }
  })
  const createBtn = document.querySelector('.btn-create')
  createBtn.onclick = function () {
    createProduct()
  }
});
