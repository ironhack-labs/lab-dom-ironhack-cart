// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');


  const subtotal = product.querySelector('.subtotal span');

  let priceValue = price.textContent;
  let quantityValue = quantity.value;
  let subtotalValue = quantityValue * priceValue;

  subtotal.textContent = subtotalValue;
  return subtotalValue;
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct)
  // end of test

  const products = document.querySelectorAll('.product');
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    let currentTarget = products[i];
    total += updateSubtotal(currentTarget);
    console.log(total);
  }

  // ITERATION 2

  // Create variable that retrieves the <span> tag where the total is hosted
  const totalCart = document.querySelector('#total-value span')
  // Write the total amount as innerHTML of the <span> retrieved one line above
  totalCart.innerHTML = total

  // ITERATION 3
  //... your code goes here
}
calculateAll();

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = [...document.querySelectorAll(".btn-remove")];
  const products = [...document.querySelectorAll('.product')];

  for (let i = 0; i < removeButtons.length; i++) {
    let currentRemoveButton = removeButtons[i];
    currentRemoveButton.addEventListener("click", removeProduct)
  }

});


