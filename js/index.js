// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  //... your code goes here
  let priceElement = document.getElementsByClassName("price");
  let quantityElement = document.getElementsByClassName("quantity");
  let subtotalElement = document.getElementsByClassName("subtotal");

  let priceValue = [];
  let quantityValue = [];
  let subtotal = 0;

  for (let i = 0; i < priceElement.length; i++) {
      priceValue.push(priceElement[i].innerText.slice(1));
      quantityValue.push(quantityElement[i].getElementsByTagName("input")[0].value);
      let subtotal = Number(priceValue[i]) * Number(quantityValue[i]);
      subtotalElement[i].innerText  = subtotal;
    }

  subtotalElement.innerText = subtotal;
  
  console.log(subtotal)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
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
