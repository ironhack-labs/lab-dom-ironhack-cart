// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  const subtotalValue = priceValue * quantityValue;
  subtotal.textContent = subtotalValue.toFixed(2);

  return subtotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

    // end of test
  // ITERATION 2
const allProducts = document.querySelectorAll('.product');
  let total = 0;
  // ITERATION 3
allProducts.forEach(function (product) {
  total = total + updateSubtotal(product);
});
  
  const totalValue = document.getElementById('total-value').querySelector('span');
  totalValue.textContent = total.toFixed(2);

  
}
  
   

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const productRow = target.closest('.product');
  if (productRow) {
    productRow.remove();
    calculateAll(); // Recalculate total after removing a product
  }
}
  
const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
  


// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (name === '' || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const productTableBody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  productTableBody.appendChild(newRow);

  // Add event listener to the new remove button
  const newRemoveButton = newRow.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  // Clear input fields after creating a product
  nameInput.value = '';
  priceInput.value = '';  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);  
});
