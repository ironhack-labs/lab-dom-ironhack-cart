// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity>input').value;
  const subtotal = price * quantity

  product.querySelector('.subtotal span').innerHTML = subtotal

  return subtotal
}


function calculateAll() {
  const singleProduct = document.querySelector('.product')
  updateSubtotal(singleProduct)
 
  const productTotal = document.querySelectorAll('.product')
  let total = 0

  productTotal.forEach(product => {
      total += updateSubtotal(product)
  })
  let totalValue = document.querySelector('#total-value span').innerText = total.toFixed(2)
}

// ITERATION 4
const removeBtn = document.querySelectorAll('.btn.btn-remove')
removeBtn.forEach((button) => {
  button.addEventListener('click', removeProduct)
});

function removeProduct() {
  const product = document.querySelector('.product')
  product.parentNode.removeChild(product)

  calculateAll()
}

// ITERATION 5
createBtn = document.getElementById('create').addEventListener('click', createProduct)

function createProduct(product) {
  const newProductTr = document.createElement('tr');
  newProductTr.classList.add('product')
  nameInput = document.querySelector('.create-product input[type=text]')
  priceInput = document.querySelector('.create-product input[type=number]')

  newProductName = document.createElement('td')
  newProductName.innerHTML = `<span>${nameInput.value}</span>`
  newProductName.classList.add('name')

  newProductPrice = document.createElement('td')
  newProductPrice.innerHTML = `$<span>${priceInput.value}</span>`
  newProductPrice.classList.add('price')
  
  newProductQuantity = document.createElement('td')
  newProductQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'
  newProductQuantity.classList.add('quantity')
  
  newProductSubtotal = document.createElement('td')
  newProductSubtotal.innerHTML = `$<span>0</span>`
  newProductSubtotal.classList.add('subtotal')
  
  newProductAction = document.createElement('td')
  newProductAction.classList.add('action')
  newProductAction.innerHTML = '<button class="btn btn-remove">Remove</button>'
  newProductAction.addEventListener('click', removeProduct)

  newProductTr.appendChild(newProductName)
  newProductTr.appendChild(newProductPrice)

  let appendedTr = tbody.appendChild(newProductTr)
  appendedTr.appendChild(newProductQuantity)
  appendedTr.appendChild(newProductSubtotal)
  appendedTr.appendChild(newProductAction)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
