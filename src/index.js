// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1: Get the price and quantity DOM elements
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  // Step 2: Extract the values
  const price = parseFloat(priceElement.innerHTML);
  const quantity = parseInt(quantityElement.value);

  // Step 3: Calculate the subtotal
  const subtotal = price * quantity;

  // Step 4: Get the subtotal DOM element
  const subtotalElement = product.querySelector('.subtotal span');

  // Step 5: Update the subtotal in the DOM
  subtotalElement.innerHTML = subtotal.toFixed(2);

  // Return the subtotal value for later use
  return subtotal;
}

function calculateAll() {
  // ITERATION 2: Calculate subtotals for all products
  const products = document.getElementsByClassName('product');
  let totalPrice = 0;

  // Loop through all products and update their subtotals
  for (let product of products) {
    // Call updateSubtotal for each product and add to total
    totalPrice += updateSubtotal(product);
  }

  // ITERATION 3: Update the total price in the DOM
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // Get the row (tr) that contains the button (parent of parent)
  const row = target.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Recalculate the total price after removing the product
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Get the input values
  const nameInput = document.querySelector('.create-product td:first-child input');
  const priceInput = document.querySelector('.create-product td:nth-child(2) input');

  const productName = nameInput.value;
  const productPrice = priceInput.value;

  // Validate inputs
  if (!productName || !productPrice || productPrice <= 0) {
    alert('Please provide a valid product name and price');
    return;
  }

  // Create a new product row
  const newProductHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;

  // Add the new product to the table
  const tableBody = document.querySelector('#cart tbody');
  tableBody.insertAdjacentHTML('beforeend', newProductHTML);

  // Add event listener to the new remove button
  const newRemoveButton = tableBody.lastElementChild.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  // Clear the input fields
  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Add event listeners to all remove buttons
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }

  // Add event listener to the create product button
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
