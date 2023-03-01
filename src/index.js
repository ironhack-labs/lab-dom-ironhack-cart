// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // select an element
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  // calculate the total
  const total = price * quantity;
  // change the value
  subtotal.innerHTML = total;
  return total;
}

function calculateAll() {
  // testing code
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/

  // ITERATION 2

  let newProduct = document.querySelector(".product");
  let newProduct2 = document.querySelector(".product2");
  const subtotal1 = updateSubtotal(newProduct);
  const subtotal2 = updateSubtotal(newProduct2);

  // ITERATION 3
  let finalTotal = subtotal1 + subtotal2;
  document.querySelector("#total-value span").innerHTML = finalTotal;
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
