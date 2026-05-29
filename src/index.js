// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const subTotalPrice = price.innerText * quantity.value;

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = subTotalPrice;

  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll(".product");
  let totalValue = 0;
  products.forEach((product) => {
    totalValue += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span");
  total.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const selectedProduct = target.parentNode.parentNode;
  const tbody = selectedProduct.parentNode;
  tbody.removeChild(selectedProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  }); 
});
