// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  let price = product.querySelector(".price span");
  let quantity = product.getElementsByTagName("input")[0];


  let total = price.innerHTML * quantity.value;

  let subTotal = product.querySelector(".subtotal span");

  subTotal.innerHTML = total.toString();

  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');

  // updateSubtotal(singleProduct);

  // ITERATION 2

  let products = document.getElementsByClassName("product");

  let totalValue = 0;
  
  for (let i = 0; i<products.length; i++) {
    totalValue += updateSubtotal(products[i]);
  };


  // ITERATION 3
  
  let total = document.querySelector("#total-value span");
  total.innerHTML = totalValue;
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
