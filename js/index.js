// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const priceDom = product.querySelector('.price span')
  const price = priceDom.innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const result = price * quantity
  subtotal.innerText = result
  return result
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalValue = 0
  const products = document.querySelectorAll('.product')
  products.forEach((product) => {
    totalValue += updateSubtotal(product)
  })
  // ITERATION 3
  const totalValueDom = document.querySelector('#total-value span')
  totalValueDom.innerText = totalValue
}


// ITERATION 4
// To access the element an event was fired on, you can reference event.currentTarget.To remove a node from the DOM,
// you need to access its parent node and call removeChild on it.You can access the parent of a DOM node from its property
// parentNode.

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(`The grand-parent of the target is:`, target.parentNode.parentNode)
  const product = target.parentNode.parentNode
  const parentProduct = product.parentNode
  parentProduct.removeChild(product)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn.btn-remove')
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', removeProduct)

  })
});
