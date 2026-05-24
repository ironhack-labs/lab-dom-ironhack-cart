// ITERATION 1: updateSubtotal
function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    // Step 1 & 2: Get the DOM elements for price and quantity, then extract their values
    const priceElement = product.querySelector('.price span');
    const quantityElement = product.querySelector('.quantity input');

    // Convert the extracted string values into numbers
    const priceValue = parseFloat(priceElement.innerText);
    const quantityValue = parseInt(quantityElement.value);

    // Step 3: Calculate the subtotal price
    const subtotalValue = priceValue * quantityValue;


    // Step 4 & 5: Get the subtotal DOM element and update its text content
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerText = subtotalValue.toFixed(2); // Formats the number to 2 decimal places (e.g., 25.00)

    // Return the subtotal value so it can be reused to calculate the grand total later
    return subtotalValue;
}

// ITERATION 2 & 3: calculateAll
function calculateAll() {
    // ITERATION 2: Update subtotals for all existing products
    const allProducts = document.getElementsByClassName('product');
    let totalSum = 0;

    // Loop through each product row and trigger the updateSubtotal function
    for (let i = 0; i < allProducts.length; i++) {
        const currentProduct = allProducts[i];
        // ITERATION 3: Add each returned subtotal to the running total sum
        totalSum += updateSubtotal(currentProduct);
    }

    // Update the grand total DOM element to display the calculated sum
    const totalElement = document.querySelector('#total-value span');
    totalElement.innerText = totalSum.toFixed(2);
}

// ITERATION 4: Removing a product
function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in removeProduct is:', target);

    // Navigate up the DOM tree to find the product row (tr.product)
    // button -> td.action -> tr.product
    const productRow = target.parentNode.parentNode;

    // Access the parent node (tbody) of the row and remove the row from the DOM
    const tableBody = productRow.parentNode;
    tableBody.removeChild(productRow);

    // Automatically recalculate the prices after a product is removed
    calculateAll();
}

// ITERATION 5: Creating new products
function createProduct() {
    // Target the input elements within the creation row
    const createProductRow = document.querySelector('.create-product');
    const nameInput = createProductRow.querySelector('input[type="text"]');
    const priceInput = createProductRow.querySelector('input[type="number"]');

    const productName = nameInput.value;
    const productPrice = parseFloat(priceInput.value).toFixed(2);

    // Validation: Prevent creating a product if the name is empty or price is 0/negative
    if (!productName || priceInput.value <= 0) {
        alert('Please enter a valid product name and price!');
        return;
    }

    // Create a new table row element for the custom product
    const tbody = document.querySelector('#cart tbody');
    const newRow = document.createElement('tr');
    newRow.className = 'product';

    // Structure the inner HTML of the new row using template literals
    newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

    // Append the newly created row to the table body
    tbody.appendChild(newRow);

    // Bind the removeProduct event listener to the newly created "Remove" button
    const removeButton = newRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);

    // Clear the input fields in the creation form after successful generation
    nameInput.value = '';
    priceInput.value = 0;
}

// Event Listeners Setup
window.addEventListener('load', () => {
    // Bind the calculation logic to the "Calculate Prices" button
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    // Query all initial "Remove" buttons on load and bind the click event listener to them
    const initialRemoveButtons = document.querySelectorAll('.btn-remove');
    initialRemoveButtons.forEach(button => {
        button.addEventListener('click', removeProduct);
    });

    // Bind the creation logic to the "Create Product" button
    const createProductBtn = document.getElementById('create');
    if (createProductBtn) {
        createProductBtn.addEventListener('click', createProduct);
    }
});