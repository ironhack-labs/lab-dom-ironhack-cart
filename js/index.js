// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // Get the price DOM element
  const price = product.querySelector('.price span');
  // Extract value from DOM element
  const priceValue = price.innerHTML;
  // Get the quantity DOM element
  let quantity = product.querySelector('.quantity input');
  // Extract value from DOM element
  let quantityValue = quantity.value;

  // Create subtotal variable and calculate it
  let subtotalValue = priceValue * quantityValue;
  // Assign subtotal valut to the DOM element
  subtotal = product.querySelector('.subtotal');
  subtotal.innerHTML = "$" + subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // 
  // end of test
  let totalValue = 0;
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  for (let product of allProducts) {
    totalValue += updateSubtotal(product);
  }
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector("#total-value");
  total.innerHTML = "Total: $" + totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeBtns = document.getElementsByClassName('action');
  for (let btn of removeBtns) {
    btn.addEventListener('click', removeProduct);
  }

});
