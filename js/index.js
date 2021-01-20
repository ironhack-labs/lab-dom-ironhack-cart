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
