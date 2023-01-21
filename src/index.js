// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quanty = product.querySelector('.quantity input').value
  const subtotalValue = product.querySelector('.subtotal span')
  subtotalValue.innerText = price.innerText * quanty
  return subtotalValue

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  products.forEach(element => updateSubtotal(element))
  //... your code goes here
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  const totalSubtotal = document.querySelectorAll('.subtotal span')
  let finalTotal = 0
  totalSubtotal.forEach(element => finalTotal += +element.innerHTML)
  total.innerText = finalTotal
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const father = document.querySelector('.father')
  const head = target.parentNode.parentNode
  father.removeChild(head)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  // const newName = document.querySelector('.new-name input').value
  // const newPrice = document.querySelector('.new-price input').value
  // const father = document.querySelector('.father')
  // const newProduct = document.querySelector('.product')

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const trackRemoveBtn = document.querySelectorAll('.btn-remove')
  for (let i = 0; i < trackRemoveBtn.length; i++) {
    trackRemoveBtn[i].addEventListener('click', removeProduct)
  }

  const trackCreate = document.querySelector('#create')
  trackCreate.addEventListener('click', createProduct)
  //... your code goes here
});
