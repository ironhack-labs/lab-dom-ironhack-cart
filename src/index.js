// ITERATION 1: updateSubtotal

function updateSubtotal(product) {
  // First, I need to target the specific elements inside this product row.
  // I use querySelector on the 'product' object passed in, not the whole document.
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  // Logic: Subtotal = unit price * quantity
  const subtotalValue = Number(price) * Number(quantity);

  // Now I find the subtotal element and update its text to match our calculation.
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalValue.toFixed(2);

  // I return the value so I can easily sum it up in the calculateAll function later.
  return subtotalValue;
}

// ITERATIONS 2 & 3: calculateAll

function calculateAll() {
  // I grab all elements with the class 'product' to loop through them.
  const allProducts = document.getElementsByClassName('product');
  
  let totalSum = 0;

  // I use a for...of loop here because it's clean and works well with HTMLCollections.
  for (let singleProduct of allProducts) {
    // For each product, I call the updateSubtotal function and add the result to our total.
    totalSum += updateSubtotal(singleProduct);
  }

  // Finally, I update the total value in the DOM so the user can see it.
  const totalValueDisplay = document.querySelector('#total-value span');
  totalValueDisplay.innerHTML = totalSum.toFixed(2);
}

// ITERATION 4: removeProduct

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // To remove the row, I have to navigate up the DOM tree.
  // The button is inside a <td>, which is inside the <tr> (the product row).
  const rowToRemove = target.parentNode.parentNode;
  
  // I go to the parent (tbody) and tell it to remove this specific child row.
  const parentTableBody = rowToRemove.parentNode;
  parentTableBody.removeChild(rowToRemove);

  // After removing a product, it's good UX to recalculate the total price.
  calculateAll();
}

// ITERATION 5: createProduct

function createProduct() {
  // I target the input fields in the footer where the user types the new info.
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value).toFixed(2);

  // Basic validation: don't add an empty product.
  if (!name || price <= 0) {
    alert('Please enter a valid product name and price!');
    return;
  }

  // Now I build the new row structure. 
  // I'm using a template literal because it's much easier to read than creating every <td> manually.
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // I need to make sure the new "Remove" button actually works.
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Append the new row to the table body.
  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  // Clean up the inputs for the next entry.
  nameInput.value = '';
  priceInput.value = 0;
}

// WINDOW LOAD: Event Listeners

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Add listeners to existing "Remove" buttons when the page loads.
  const existingRemoveButtons = document.querySelectorAll('.btn-remove');
  existingRemoveButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  // Add listener for the "Create Product" button.
  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});