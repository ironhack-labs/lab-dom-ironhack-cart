// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const multiProducts = document.getElementsByClassName('product');
  for (let product of multiProducts) {
    updateSubtotal(product)
  }
  const subtotals = document.querySelectorAll('.subtotal span')
  let total = 0;
  for (let subtotal of subtotals) {
    total += Number(subtotal.innerText);
  }   
  
  document.querySelector('#total-value span').innerText = total

  
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const product = target.parentNode.parentNode
 product.parentNode.removeChild(product)
  calculateAll()
  console.log('The target in remove is:', target);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove')
  for (let removeBtn of removeBtns) {
  removeBtn.addEventListener('click', removeProduct)
  }
});
