// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const qty = product.querySelector(".quantity input")
  const subtotal = product.querySelector(".subtotal span")

  // subtotal.innerText = price.innerText * qty.value
  return subtotal.innerText = 1 * price.innerText * qty.value


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let total = 0
  products.forEach( el => {
    total += updateSubtotal( el )
  })

  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = total

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const e = event.currentTarget;
  console.log('The target in remove is:', e);
  let product = e.parentNode.parentNode
  product.remove()
  if(document.querySelector('#total-value').textContent != '0'){
    calculateAll()
  }
}

function removeProduct2(e){
  console.log(e)
  let product = e.parentNode.parentNode
  product.remove()
  if(document.querySelector('#total-value').textContent != '0'){
    calculateAll()
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsBtn = document.querySelectorAll('.btn-remove')
  removeProductsBtn.forEach( el => el.addEventListener('click', e => removeProduct(e)) )
  // removeProductsBtn.forEach( el => el.addEventListener('click', e => removeProduct2(e.currentTarget)) )

  //... your code goes here
});
