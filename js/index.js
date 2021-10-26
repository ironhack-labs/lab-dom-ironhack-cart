// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let totalPrice = 0
  products.forEach((product) => {
    totalPrice += updateSubtotal(product)
  })

  // ITERATION 3
  console.log(totalPrice)
  const total = document.querySelector('#total-value span')
  total.textContent = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parentNode = target.parentNode
  parentNode.removeChild(target)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input').value
  if (!productName) {
    return ''
  }
  console.log(productName)
  productName.value = ''
  const price = document.querySelectorAll('create-product input')[1].value
  price.value = 0

  const table = document.querySelector('tbody')
  const row = document.createElement('tr')
  const col = document.createElement('td')
  const span = document.createElement('span')
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductButtons = document.querySelectorAll('.btn.btn-remove')
  removeProductButtons.forEach((btn) => btn.addEventListener('click', removeProduct))

  const createProductButton = document.querySelector('#create')
  createProductButton.addEventListener('click', createProduct)

});
