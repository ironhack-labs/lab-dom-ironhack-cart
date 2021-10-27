// ITERATION 1
function updateSubtotal(product) {
  let unitPrice = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = unitPrice * quantity;
  let elementSubtotal = product.querySelector('.subtotal span'); //Target subtotal span
  elementSubtotal.innerText = subtotal; //Update subtotal span with the actual subtotal
  console.log('Calculating subtotal, yey!');
  return subtotal; //Return to use in calculate all
}

// ITERATION 2
function calculateAll() {
  let total = 0;
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  };

  // ITERATION 3
  let totalCart = document.querySelector('#total-value span');
  totalCart.innerText = total;
}

// ITERATION 4

function removeProduct(event) {

  const removeButtons = document.getElementsByClassName('btn-remove'); //Target on all remove button
  for (let i = 0; i < removeButtons.length; i++) { //Loop through all remove buttons
    removeButtons[i].addEventListener('click', (event) => { // Create the event 'click' on each 'event' (event = button)
      const target = event.currentTarget; // Save the info of each button
      button.parentNode.parentNode.remove(); //Erase each product line accesing the parent of the parent button.           
    });
  }
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
