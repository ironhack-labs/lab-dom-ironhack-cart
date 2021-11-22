// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const priceValue = price.innerHTML
  const quantityValue = quantity.value
  let subtotalValue = subtotal.innerHTML

  subtotalValue = priceValue * quantityValue
  subtotal.innerHTML = subtotalValue
  return subtotalValue
}

function calculateAll() {
  const products = document.getElementsByClassName("product")
  const totalPriceNode = document.querySelector("#total-value span")
  let totalPrice = 0
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
    totalPrice += updateSubtotal(products[i])
  }
  totalPriceNode.innerHTML = totalPrice  
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

  //... your code goes here
});
