// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  price = price.innerHTML;
  quantity = quantity.value;

  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = `${subtotal}`;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalValue = 0;
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {
    let subtotal = updateSubtotal(product);
    totalValue += subtotal;
  })

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = `${totalValue}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let removeBtns = document.querySelectorAll(".btn btn-remove");
  removeBtns.forEach((btn) => {
    addEventListener("click", removeProduct);
  })
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
