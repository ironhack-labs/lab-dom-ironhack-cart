// ITERATION 1


function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotalPrice = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')
 
  subtotal.innerText = subtotalPrice.toFixed(2)

  return subtotalPrice
}

function calculateAll() {
  
  const allProducts = document.querySelectorAll('.product');
  
  let valueSumatory = 0

  for (let i = 0; i < allProducts.length; i++){

    valueSumatory += updateSubtotal(allProducts[i])
  } 
  
  const totalValue = document.querySelector('#total-value span')

  totalValue.innerText = valueSumatory.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  const deleteGrandParent = target.parentNode.parentNode

  deleteGrandParent.parentNode.removeChild(deleteGrandParent)
}

// ITERATION 5

function createProduct() {
  
  const tableAccess = document.querySelector('tbody')
  const newTableRow = tableAccess.insertRow()
  const newProductCell = newTableRow.insertCell()
  const newPriceCell = newTableRow.insertCell()
  const newQuantityCell = newTableRow.insertCell()
  const newSubtotalCell = newTableRow.insertCell()
  const newActionCell = newTableRow.insertCell()
  
  newTableRow.setAttribute('class', 'product')
  newProductCell.setAttribute('class', 'name')
  newPriceCell.setAttribute('class', 'price')
  newQuantityCell.setAttribute('class', 'quantity')
  newSubtotalCell.setAttribute('class', 'subtotal')
  newActionCell.setAttribute('class', 'action')
  
  const createProduct = document.querySelector('.create-product')
  const inputProduct = createProduct.querySelector('input[type="text"]')
  const newProduct = inputProduct.value

  const inputPrice = createProduct.querySelector('input[type="number"]')
  const newPrice = inputPrice.value

  newProductCell.innerHTML = `<span>${newProduct}</span>`
  newPriceCell.innerHTML = `$<span>${newPrice}</span>`
  newQuantityCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`
  newSubtotalCell.innerHTML = `$<span>0</span>`
  newActionCell.innerHTML = `<button class="btn btn-remove">Remove</button>`

  const removeButton = document.querySelectorAll('.action button')

  for (i = 0; i < removeButton.length; i++) {

    removeButton[i].onclick = removeProduct
  }
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButton = document.querySelectorAll('.action button')

  for (i = 0; i < removeButton.length; i++) {

    removeButton[i].onclick = removeProduct
  }
  
  const addProduct = document.querySelectorAll('#create')

  for (i = 0; i < addProduct.length; i++) {

    addProduct[i].onclick = createProduct
  }
});
