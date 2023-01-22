// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // ITERATION 1
  //... your code goes here

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subtotalPrice = price * quantity

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalPrice

}


function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.getElementsByClassName('product')

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
  }

  // ITERATION 3
  //... your code goes here

  const totalPrice = document.querySelector('#total-value span')

  const individualSubtotals = document.querySelectorAll('.subtotal span')

  let totalSum = 0

  for (let i = 0; i < individualSubtotals.length; i++) {
    totalSum += Number(individualSubtotals[i].innerHTML)
  }

  totalPrice.innerHTML = totalSum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const childNode = target.parentNode.parentNode
  const parentNode = childNode.parentNode
  parentNode.removeChild(childNode)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newProducts = document.querySelectorAll('.create-product input')

  const newRow = document.querySelector('#cart tbody').insertRow()
  newRow.innerHTML = `<td class="name"><span>${newProducts[0].value}</span></td><td class="price">$<span>${newProducts[1].value}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
  newRow.classList.add('product')

  const newProductRemoveBtn = newRow.querySelector('.btn-remove')
  newProductRemoveBtn.addEventListener('click', removeProduct)


  const newPrice = newRow.querySelector('.price span').innerHTML
  const newQuantity = newRow.querySelector('.quantity input').value
  const subtotalPrice = newPrice * newQuantity
  const subtotal = newRow.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalPrice

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll('.btn-remove')

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct)
  }

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)


});

