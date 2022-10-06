// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //const price = product.querySelector(".price span");
  //const quantity = product.querySelector("quantity");
  //price = product.querySelector(".price span").innerText; 
  //quantity = product.querySelector("quantity").value;
  //const totalcost = price * quantity; 
  //totalcost.innerText = product.querySelector(".subtotal span");
  //return totalcost;

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText);
  
  const quantityValue = quantity.valueAsNumber;

  const subtotalValue = priceValue * quantityValue;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerText = subtotalValue;

  return subtotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & 3

  const myProduct = document.querySelector('.product');

  updateSubtotal(myProduct);

  const allProducts = document.querySelectorAll('.product');

  let totalPrice = 0;

  for (let product of allProducts) {

    totalPrice += updateSubtotal(product);
  }

  let totalCurrency = document.querySelector('#total-value span');

  totalCurrency.innerText = totalPrice;

  return totalPrice;

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
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
