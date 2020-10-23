// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  console.log('Calculating subtotal, yey!');

  const multiplicate = (price.innerHTML * quantity.value);
  const subtotal = product.querySelector(".subtotal span");

  return subtotal.innerHTML = multiplicate;

}

function calculateAll() {

  // ITERATION 2
  //... your code goes here

  let totalPrice = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((elm) => {
    totalPrice += updateSubtotal(elm)
  });

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerText = totalPrice

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
