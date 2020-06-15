// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  product.querySelector('.subtotal span').innerHTML = price * quantity
  return price * quantity
}

function calculateAll() {
  // ITERATION 2
  let sum = 0
  const arr = document.getElementsByClassName('product')
  for (var i = 0; i < arr.length; i++) {
    sum += updateSubtotal(arr[i])
  }
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //better way to do waht is below
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let arr = document.getElementsByClassName("btn btn-remove")
  for (elem of arr) {
    elem.addEventListener('click',removeProduct)
  }
});
