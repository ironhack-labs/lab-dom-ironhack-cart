// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let multi = price * quantity

  product.querySelector('.subtotal span').innerHTML = multi

}

function calculateAll() {

  const productArr = document.querySelectorAll('.product')

  // We update the DOM
  productArr.forEach(elm => updateSubtotal(elm))

  // Search again for the price of the elements and add them

  let total = 0;
  // For each of the sub-tatles, we add up to total and then return total

  productArr.forEach(element => {
    const value = element.querySelector('.subtotal span').innerHTML;

    total = parseInt(value) + total
  })

  document.querySelector('#total-value span').innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


  // We access the button's parent, but since it has another parent, we access the parent's parent
  const productTable = document.querySelector('#cart tbody')
  productTable.removeChild(target.parentNode.parentNode)

  calculateAll()

}

// ITERATION 5

function createProduct() {

  const inputs = document.querySelectorAll(".create-product input")

  const productTable = document.querySelector('#cart tbody')
  const productTr = document.createElement('tr')
  productTr.classList.add('product');
  productTable.appendChild(productTr)

  const nameTd = document.createElement('td')
  nameTd.classList.add("name");
  const nameSpan = document.createElement('span')
  nameSpan.innerHTML = inputs[0].value
  nameTd.appendChild(nameSpan)
  productTr.appendChild(nameTd)

  const priceTd = document.createElement('td')
  priceTd.classList.add("price");
  const priceSpan = document.createElement('span')
  priceTd.innerHTML = '$'
  priceSpan.innerHTML = inputs[1].value
  priceTd.appendChild(priceSpan)
  productTr.appendChild(priceTd)

  const quantityTd = document.createElement('td')
  quantityTd.classList.add("quantity");
  const quantityInput = document.createElement('input')
  quantityInput.type = 'number'
  quantityInput.value = 0
  quantityInput.min = 0
  quantityInput.placeholder = 'Quantity'
  quantityTd.appendChild(quantityInput)
  productTr.appendChild(quantityTd)

  const subTotalTd = document.createElement('td')
  subTotalTd.classList.add("subtotal");
  const subTotalSpan = document.createElement('span')
  subTotalTd.innerHTML = '$'
  subTotalSpan.innerHTML = 0
  subTotalTd.appendChild(subTotalSpan)
  productTr.appendChild(subTotalTd)

  const actionTd = document.createElement('td')
  actionTd.classList.add("action");
  const actionButton = document.createElement('button')
  actionButton.classList.add('btn', 'btn-remove')
  actionButton.innerHTML = 'Remove'
  actionButton.addEventListener('click', removeProduct)
  actionTd.appendChild(actionButton)
  productTr.appendChild(actionTd)


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove')

  removeButton.forEach(elm => {
    elm.addEventListener('click', removeProduct)
  })

  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)

});


