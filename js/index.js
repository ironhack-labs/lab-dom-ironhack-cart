// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subTotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let totalValue = 0;
  const products = document.querySelectorAll('.product')
  products.forEach(product => {
   totalValue += updateSubtotal(product)
  })

  // ITERATION 3

  document.querySelector('#total-value span').textContent = totalValue;
  
  
}

// ITERATION 4

function removeProduct(event) {
  console.log(event);
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('.product').remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameElement = document.querySelector('.create-product input[type = "text"]')
  const productName = nameElement.value
  const priceElement = document.querySelector('.create-product input[type = "number"]')
  const productPrice = priceElement.value

  /* if (!productName || !productPrice) {
    alert('Rellena perro!')
    return
  } */

  const tBody = document.querySelector('tbody')

  const productRowElement = document.createElement('tr')
  productRowElement.classList.add('product')
  tBody.appendChild(productRowElement)

  const nameCell = document.createElement('td')
  nameCell.classList.add('name')
  productRowElement.appendChild(nameCell)

  const nameSpan = document.createElement('span')
  nameSpan.textContent = productName
  nameCell.appendChild(nameSpan)

  const priceCell = document.createElement('td')
  priceCell.classList.add('price')
  priceCell.textContent = '$'
  productRowElement.appendChild(priceCell)

  const priceSpan = document.createElement('span')
  priceSpan.textContent = Number(productPrice).toFixed(2)
  priceCell.appendChild(priceSpan)

  const quantityCell = document.createElement('td')
  quantityCell.classList.add('quantity')

  const quantityInput = document.createElement('input')
  quantityInput.type = 'number'
  quantityInput.value = 0
  quantityInput.min = 0
  quantityInput.placeholder = 'Quantity'

  productRowElement.appendChild(quantityCell)
  quantityCell.appendChild(quantityInput)

  const subtotalCell = document.createElement('td')
  subtotalCell.classList.add('subtotal')
  productRowElement.appendChild(subtotalCell)

  const subtotalSpan = document.createElement('span')
  subtotalSpan.textContent = '0'
  subtotalCell.appendChild(subtotalSpan)

  const buttonCell = document.createElement('td')
  buttonCell.classList.add('action')
  productRowElement.appendChild(buttonCell)

  const removeButton = document.createElement('button')
  removeButton.classList.add('btn', 'btn-remove')
  removeButton.textContent = 'Remove'
  buttonCell.appendChild(removeButton)

  removeButton.onclick = removeProduct

  nameElement.value = ''
  priceElement.value = '0'
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (const node of removeBtns) {
    node.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
});
