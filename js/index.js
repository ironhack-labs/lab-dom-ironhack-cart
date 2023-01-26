// ITERATION 1

let productArray = [];

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let currentPrice = Math.floor(price) * Math.floor(quantity);
  product.querySelector(".subtotal span").innerHTML = currentPrice;
  return currentPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProduct = document.querySelectorAll(".product");
  let finalMultipleProduct = [...multipleProduct];
  let currentPriceOfEachItem = finalMultipleProduct.map((el) => {
    return updateSubtotal(el);
  });
  // ITERATION 3
  let total = currentPriceOfEachItem.reduce((el, acc) => (acc += el), 0);
  let totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  let deleteButton = event.querySelector(".btn-remove");
  deleteButton.onclick = () => event.parentNode.removeChild(event);
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
