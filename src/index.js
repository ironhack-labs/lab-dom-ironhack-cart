function updateSubtotal(product) {
  // Step 1 & 2: Target DOM elements and extract values
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const priceValue = parseFloat(priceElement.innerText);
  const quantityValue = parseInt(quantityElement.value) || 0; // fallback to 0 if empty


  const subtotalValue = priceValue * quantityValue;


  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalValue.toFixed(2);


  return subtotalValue;
}


function calculateAll() {
  // Get all product rows in the cart
  const allProducts = document.getElementsByClassName('product');
  let totalValue = 0;

  // Loop through each product to calculate individual subtotals and add them together
  for (let productRow of allProducts) {
    totalValue += updateSubtotal(productRow);
  }

  // Update the grand total DOM element
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = totalValue.toFixed(2);
}


function removeProduct(event) {
  const target = event.currentTarget;

  // Navigate up the DOM tree: button -> td (.action) -> tr (.product)
  const productRow = target.parentNode.parentNode;

  // Remove the product row element from its parent (tbody)
  productRow.parentNode.removeChild(productRow);

  // Automatically recalculate totals after the row is cleared
  calculateAll();
}


function createProduct() {
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value).toFixed(2);

  // Simple validation to check if fields are empty
  if (!productName || productPrice <= 0) {
    alert('Please enter a valid product name and price!');
    return;
  }

  const tbody = document.querySelector('#cart tbody');

  // Create a brand new tr element and match the cart architecture
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  tbody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  if (createButton) {
    createButton.addEventListener('click', createProduct);
  }
});