// ITERATION 1

function updateSubtotal($product) {
  const productPrice = Number($product.querySelector('.price').querySelector('span').innerHTML)
  const productQty = Number($product.querySelector('.quantity').querySelector('input').value)
  const subtotal = $product.querySelector('.subtotal')

  return subtotal.innerHTML = (productPrice * productQty).toFixed(2)

}

function calculateAll() {
  // ITERATION 2
  const productList = document.getElementsByClassName('product')
  const subtotals = []

  for (let product of productList) {
    subtotals.push(Number(updateSubtotal(product)))
  }
  // ITERATION 3
  const totalValue = document.getElementById('total-value').querySelector('span')
  return totalValue.innerHTML = (subtotals.reduce((acc, cur) => acc + cur)).toFixed(2)
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}