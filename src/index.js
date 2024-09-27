// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1: Get the price element and the quantity element
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  // Step 2: Get the price and quantity values
  const price = parseFloat(priceElement.textContent);
  const quantity = quantityElement.valueAsNumber;

  // Step 3: Calculate the subtotal (price * quantity)
  const subtotal = price * quantity;

  // Step 4: Update the subtotal element in the DOM
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal.toFixed(2);

  // Return the subtotal so it can be used in the next iteration
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  function calculateAll() {
    // Step 1: Get all the products
    const products = document.getElementsByClassName('product');
  
    // Step 2: Initialize a total price variable
    let totalPrice = 0;
  
    // Step 3: Loop over all products and calculate their subtotal
    for (let product of products) {
      const subtotal = updateSubtotal(product);  // Call the updateSubtotal for each product
      totalPrice += subtotal;                    // Add each subtotal to the total price
    }
  
    // Step 4: Update the total price in the DOM
    const totalValueElement = document.querySelector('#total-value span');
    totalValueElement.textContent = totalPrice;
  }
  
    // ITERATION 3: Update total price in the DOM
    const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = total; // Set the total in the HTML to show the result
}

  // ITERATION 3
  function calculateAll() {
    // Get all product rows (products in the cart)
    const allProducts = document.getElementsByClassName('product');
    
    let total = 0; // Variable to hold the sum of all subtotals
  
    // Loop through each product and calculate the subtotal
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      const subtotal = updateSubtotal(product); // Call the function from Iteration 1
      
      total += subtotal; // Add each product's subtotal to the total
    }
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  // The button that was clicked
  const productRow = target.closest('.product');  // Get the closest product row

  productRow.remove();  // Remove the product row from the DOM

  calculateAll();  // Update the total price after removing a product
}

// ITERATION 5

function createProduct() {
  // Get the product name and price from the input fields
  const productName = document.querySelector('.create-product input[type="text"]').value;
  const productPrice = document.querySelector('.create-product input[type="number"]').value;

  // Make sure the name and price are valid before adding the product
  if (productName === '' || productPrice === '' || productPrice < 0) {
    alert('Please enter valid product details!');
    return;
  }

  // Create the new product row
  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${parseFloat(productPrice).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // Append the new row to the table body
  const cartBody = document.querySelector('#cart tbody');
  cartBody.appendChild(newProductRow);

  // Add event listener for the Remove button on the new product row
  const newRemoveBtn = newProductRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  // Clear the input fields
  document.querySelector('.create-product input[type="text"]').value = '';
  document.querySelector('.create-product input[type="number"]').value = '0';
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Query all remove buttons and add event listeners
  const removeBtns = document.querySelectorAll('.btn-remove');
  
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });
});}