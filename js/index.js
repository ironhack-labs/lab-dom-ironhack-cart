// ITERATION 1

// UPDATE SUBTOTAL

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  console.log(price);
  const quantity = product.querySelector('.quantity input').value
  console.log(quantity);
  const subtotal = (price * quantity)
  console.log(subtotal);
  
  product.querySelector('.subtotal span').innerText = subtotal

  return subtotal
}

// CALCULATE TOTAL

function calculateAll() {
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
 
  const products = document.querySelectorAll('.product')
  let total = 0

  products.forEach(product => { total += updateSubtotal(product)})

  // ITERATION 3

  document.querySelector('#total-value span').innerText = total

}

// ITERATION 4
// REMOVE PRODUCT

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)

  const productTarget = target.parentNode.parentNode 
  console.log(productTarget);
  productTarget.parentNode.removeChild(productTarget)
  calculateAll()

}

// ITERATION 5
// CREATE PRODUCT

function createProduct(event) {

  const target = event.currentTarget
  console.log('The target clicked is:', target)
 
  let createProductName = document.querySelector('.create-product-name').value
  let createProductPrice = document.querySelector('.create-product-price').value

  let newProduct = document.createElement('tr')
  newProduct.setAttribute('class', 'product')
  
  let newProductName = document.createElement('td')
  newProductName.setAttribute('class', 'name')
  newProductName.innerHTML = `<span>${createProductName}</span>`
  newProduct.appendChild(newProductName)
  
  let newProductPrice = document.createElement('td')
  newProductPrice.setAttribute('class', 'price')
  newProductPrice.innerHTML = `$<span>${createProductPrice}</span>`
  newProduct.appendChild(newProductPrice)

  let newProductQuantity = document.createElement('td')
  newProductQuantity.setAttribute('class', 'quantity')
  let newProductQuantityInput = document.createElement('input')
  newProductQuantityInput.setAttribute('type', 'number')
  newProductQuantityInput.setAttribute('value', '0')
  newProductQuantityInput.setAttribute('min', '0')
  newProductQuantityInput.setAttribute('placeholder', 'Quantity')
  newProductQuantity.appendChild(newProductQuantityInput)
  newProduct.appendChild(newProductQuantity)

  let newProductSubtotal = document.createElement('td')
  newProductSubtotal.setAttribute('class', 'subtotal')
  newProductSubtotal.innerHTML = '$<span>0</span>'
  newProduct.appendChild(newProductSubtotal)

  let newProductAction = document.createElement('td')
  newProductAction.setAttribute('class', 'action')
  let newProductButton = document.createElement('button')
  newProductButton.setAttribute('class', 'btn btn-remove')
  newProductButton.innerText = 'Remove'
  newProductAction.appendChild(newProductButton)
  newProduct.appendChild(newProductAction)

  document.querySelector('tbody').appendChild(newProduct)

}

// ADD EVENT

window.addEventListener('load', () => {
  // CALCULATE BUTTON
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // REMOVE BUTTON 
  const removeProductsBtn = document.querySelectorAll('.btn-remove')  
  removeProductsBtn.forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })

  // CREATE BUTTON
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
});
