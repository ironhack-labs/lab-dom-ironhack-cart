// ITERATION 1
function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  // price.innerHTML
  // quantity.value

  const totalPrice = price.innerHTML * quantity.value

  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerText = totalPrice

  return totalPrice
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
  }
  let valueSum = 0
  for (let i = 0; i < allProducts.length; i++) {
    valueSum += updateSubtotal(allProducts[i])
  }
  const totalValue = document.querySelector('#total-value span')

  totalValue.innerText = valueSum
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  // const buttons = document.querySelectorAll('#btn btn-remove')
  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].onclick = function (event) {
  //     event.currentTarget = quantity.remove

  target.parentNode.parentNode.remove();
  calculateAll()
  //... your code goes here
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
