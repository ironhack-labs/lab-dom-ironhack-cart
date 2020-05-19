// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotalPrice = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  return subtotal.innerHTML = subtotalPrice
  
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product')
  const productsArray = [...products]
  let total = 0
  
  productsArray.forEach( item => {
    const itemSubtotal = updateSubtotal(item)
    total += itemSubtotal
  })

  // ITERATION 3

  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target);
  const table = document.querySelector('#cart tbody')
  const action = target.parentNode
  const productClass = action.parentNode
  console.log(productClass)
  table.removeChild(productClass)
  let totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML -= updateSubtotal(productClass)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove')
  const removeBtnArr = [...removeBtn]
  removeBtnArr.forEach(remove => {
    // console.log(remove)
    remove.addEventListener('click', removeProduct)
  })
});
