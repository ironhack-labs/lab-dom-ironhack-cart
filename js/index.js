// ITERATION 1





function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const totalPrice = price.innerHTML * quantity.value

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = totalPrice
  return totalPrice
}

function calculateAll() {

  const allProducts = document.querySelectorAll('.product')

  let sumProducts = 0

  for (let i = 0; i < allProducts.length; i++) {
    sumProducts += updateSubtotal(allProducts[i])
  }
  const total = document.querySelector('#total-value span')
  total.innerText = sumProducts
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let remButton = document.querySelectorAll('.action button')

  for (let i = 0; i < remButton.length; i++) {
    remButton[i].onclick = removeProduct
  }

});
