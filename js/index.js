
// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const productOF = (price.innerHTML) * (quantity.value)
  const subTotalProd = product.querySelector('.subtotal span')
  subTotalProd.innerHTML = productOF.toFixed(2)
  return productOF
}



// ITERATION 2 & 3

function calculateAll() {
  const prodArray = document.querySelectorAll('.product')
  const totalValue = document.querySelector('#total-value span')
  let sum = 0
  prodArray.forEach(function (prod) {
    sum += updateSubtotal(prod)
  })
  totalValue.innerHTML = sum.toFixed(2)
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const td = target.parentNode
  const tr = td.parentNode
  const tbody = tr.parentNode
  
  tbody.removeChild(tr)
  calculateAll()
}



// ITERATION 5

function createProduct() {
  const targetBtn = event.currentTarget;

  const newRow = document.createElement('tr')
  newRow.classList.add('product')
  document.querySelector('tbody').appendChild(newRow)

  let tdName = newRow.insertCell(0)
  tdName.classList.add('name')
  tdName.innerHTML = '<span class="newProd">Ironhack Product</span>'
  document.querySelector('.newProd').innerText = "Ironhack Product" // can't retrieve input info

  let tdPrice = newRow.insertCell(1)
  tdPrice.classList.add('price')
  tdPrice.innerHTML = '$<span class="newPrice">00.00</span>'
  document.querySelector('.newPrice').innerText = 12 // can't retrieve input info

  let tdQuantity = newRow.insertCell(2)
  tdQuantity.classList.add('quantity')
  tdQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'

  let tdSubtotal = newRow.insertCell(3)
  tdSubtotal.classList.add('subtotal')
  tdSubtotal.innerHTML = '$<span>0</span>'

  let tdAction = newRow.insertCell(4)
  tdAction.classList.add('action')
  tdAction.innerHTML = '<button class="btn btn-remove">Remove</button>'

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtnsArray = document.querySelectorAll('.product .btn-remove')
  removeBtnsArray.forEach(function (elm) {
    elm.addEventListener('click', removeProduct)
  })

  const createNewProduct = document.getElementById('create')
  createNewProduct.addEventListener('click', createProduct)

});



