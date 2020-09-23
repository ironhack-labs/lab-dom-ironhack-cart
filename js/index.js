// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const priceNum = price.innerHTML;
  const quantityNum = quantity.value;

  const subtotalNum = priceNum * quantityNum;
  subtotal.innerHTML = subtotalNum;

  console.log("Calculating subtotal, yey!");

  return subtotalNum;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  let total = 0
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");

  products.forEach((singleProduct) => {
    totalSum += updateSubtotal(singleProduct);
    console.log(totalSum);
  });

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log("The target in remove is:", target);
  target.parentNode.removeChild(target);

  const total = document.querySelector("#total-value span");
  const subtotal = target.querySelector(".subtotal span");

  total.innerHTML = total.innerHTML - subtotal.innerHTML;
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
