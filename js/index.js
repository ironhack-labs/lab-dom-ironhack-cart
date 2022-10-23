// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input')

  // price.innerHTML
  // quantity.value

  const totalPrice = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = totalPrice

  return totalPrice
}

function calculateAll() {

  const allProducts = document.querySelectorAll('.product');

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
  const removeParent = target.parentNode.parentNode
  removeParent.parentNode.removeChild(removeParent)
  // console.log('The target in remove is:', target);

}

// ITERATION 5 

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.action button')

  for (i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = removeProduct
  }

});
