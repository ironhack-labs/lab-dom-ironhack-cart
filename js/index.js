// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const updatedSubtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = updatedSubtotal;

}

function calculateAll() {
  // ITERATION 2

  let products = document.querySelectorAll(".product")

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here
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
