// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity");
  let priceVal = price.innerHTML;
  let quantityVal = product.querySelector("input").value;
  let subtotalVal = priceVal * quantityVal;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalVal;
  console.log("Calculating subtotal, yey!");
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  let products = document.querySelectorAll(".product");
  products.forEach((prod) => {
    updateSubtotal(prod);
  });
  // end of test

  // ITERATION 2
  //... your code goes here

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
