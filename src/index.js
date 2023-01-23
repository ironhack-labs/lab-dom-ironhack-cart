// ITERATION 1

function updateSubtotal(product) {

  let total = 0
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const valQuantity = quantity.value
  const valPrice = price.textContent


  const subTotal = total + valQuantity * valPrice

  const subTotalSpan = product.querySelector('.subtotal span')
  subTotalSpan.textContent = subTotal
  return subTotal
}

console.log('Calculating subtotal, yey!');




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  const products = document.getElementsByClassName('product')
  let totalValue = 0
  for (let i = 0; i < products.length; i++) {
    let subTotalProduct = updateSubtotal(products[i])
    totalValue = totalValue + subTotalProduct
  }
  const totalSpan = document.getElementById('totalSpan')
  totalSpan.textContent = totalValue

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  alert('The target in remove is:' + target)
  let td = target.parentNode;
  let trProduct = td.parentNode;
  alert('The parent in remove is:' + trProduct)
  trProduct.parentNode.removeChild(trProduct)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove')
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct)
  }
});
