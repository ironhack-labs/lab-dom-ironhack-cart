// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here

  let price = product.querySelector('#cart > tbody > tr > td.price > span').innerText

  let quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value

  let subtotal = product.querySelector('#cart > tbody > tr > td.subtotal > span')

  let sum = price * quantity;
  subtotal.innerText = sum

  return sum

}

function calculateAll() {
  let sumTotal = 0
  // ITERATION 2
  //... your code goes here
  let AllProduct = document.getElementsByClassName("product");
  for (product of AllProduct) {
    sumTotal += updateSubtotal(product)
  };

  console.log(sumTotal)
  // ITERATION 3
  //... your code goes here
  let totalSpan = document.querySelector('#total-value > span')

  totalSpan.textContent = sumTotal

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();

  //... your code goes here
}

// ITERATION 5


function createProduct() {
  //... your code goes here
  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
  newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value
  newProduct.querySelector('.subtotal span').innerText = 0
  newProduct.querySelector('.price span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value
  newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)
  const newTbody = document.querySelector('tbody')

  newTbody.appendChild(newProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll(".btn-remove");
  removeProductBtns.forEach(function (button) {
    button.onclick = removeProduct;
  })
  //... your code goes here
});
