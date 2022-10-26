function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText
  console.log(price)
  const quantity = product.querySelector(".quantity input").value
  console.log(quantity)
  let sum = price * quantity
  console.log(sum)
  let subtotal = product.querySelector(".subtotal span")
  console.log(subtotal)
  subtotal.innerText = sum
  console.log(subtotal)
  return sum
}

function calculateAll() {
  const productsHTML = document.getElementsByClassName("product")
  const products = [...productsHTML]
  let sum = 0
  products.forEach(product => { sum += updateSubtotal(product)})
  const total = document.querySelector("#total-value span")
  total.innerText = sum
  return sum
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
