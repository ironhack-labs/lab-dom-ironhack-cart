// ITERATION 1
function updateSubtotal(product) {
  const price = +product.querySelector('.price span').textContent;    // "+" converts this value from a string to a number
  const quantity = +product.querySelector('.quantity input').value;   // "+" converts this value from a string to a number
  const subtotalField = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotalField.innerHTML = subtotal.toFixed(2);
  return subtotal;
}

// ITERATION 2
// ITERATION 3
// - create an array of all products (elements with .product class)
// - create variables for the total price and the field that needs to be updated with it
// - loop through the products array and run the updateSubtotal() function on each product
// - after the loop, update the total price field
function calculateAll() {
  let products = document.getElementsByClassName('product');
  let totalPrice = 0;
  let totalPriceField = document.querySelector('#total-value span');
  for (let i=0; i < products.length; i++) {
    updateSubtotal(products[i]);
    totalPrice += updateSubtotal(products[i]);
  }
  totalPriceField.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4
// - create a const of the element (button) that was clicked
// - remove the element with the .product class that is closest to the clicked button
// - recalculate the sum
function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('.product').remove();
  calculateAll();
}

// - make an array of all remove buttons
// - add an event listener to click on each button
function removeBtns() {
  const removeProductBtns = document.getElementsByClassName("btn-remove");
  for (let i=0; i < removeProductBtns.length; i++) {
    removeProductBtns[i].addEventListener('click', removeProduct);
  }
}

// ITERATION 5
// - get the name and price for the new product
// - create the HTML for the new product, inserting the name and price
// - add this HTML to the end of the table body
function createProduct(event) {
  const target = event.currentTarget;
  const tbody = document.querySelector('tbody');
  let productName = document.querySelector('.create-product input[type="text"]').value;
  let productPrice = document.querySelector('.create-product input[type="number"]').value;

  let newProductRow = document.createElement('tr');
  newProductRow.className = 'product';
  newProductRow.innerHTML = '<td class="name"><span>' + productName + '</span></td><td class="price">$<span>' + productPrice + '</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>';
  tbody.appendChild(newProductRow);

  removeBtns()
  //alternative: tbody.lastChild.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

// EVENT LISTENERS
// - clicks on button #calculate
// - clicks on buttons .remove
// - clicks on button #create
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeBtns()

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener('click', createProduct);
});