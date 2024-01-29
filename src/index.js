// ITERATION 1

function updateSubtotal(product) {
  let quantity = product.querySelector(".quantity input").value;
  let price = product.querySelector(".price span").innerHTML;
  let subTotalEl = product.querySelector(".subtotal span");

  let subTotal = quantity * price;
  subTotalEl.innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll(".product");
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];
    total += updateSubtotal(currentProduct);
  }
  // ITERATION 3
  console.log(total);
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
