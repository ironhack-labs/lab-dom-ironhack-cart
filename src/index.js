
function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const productPrice = price * quantity

  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = productPrice
  return productPrice
}

function calculateAll() {
  let arrayOfProducts = [ ... document.querySelectorAll(".product")]
  let totalPrice = 0
  for (value of arrayOfProducts) {
    totalPrice += updateSubtotal(value)
  }
  let elemTotalPrice = document.querySelector("#total-value span")
  elemTotalPrice.innerHTML = totalPrice
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
