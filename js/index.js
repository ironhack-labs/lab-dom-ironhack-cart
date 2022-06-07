// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML)
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotalValue = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  let totalValue = 0;

  // ITERATION 2
  const trProducts = document.querySelectorAll('tbody > tr');

  for (element of trProducts) {
    updateSubtotal(element)
    totalValue += updateSubtotal(element)
  };
  
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  
  total.textContent = totalValue

}

//ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentNode.parentNode.remove();

  calculateAll();
}

// ITERATION 5
//the two inputs inside of `tfoot` represent the name for the new product and the unit price, respectively. The "Create Product" button should add a new product to the cart when triggered.
// Add a `click` event handler to the "Create Product" that will take a function named `createProduct` as a callback.
// In `createProduct` you should target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, 
//as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.
// Remember, the new product should look undistinguished and behave like any of the products previously included in the cart. 
//As such, one should be able to calculate its subtotal when the "Calculate All" button is clicked, and remove the product.
// When the product creation is finalized, please, clear the input fields in the creation form.

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector
});
