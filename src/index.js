// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  console.log("Selected quantity:", quantityValue);
  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.textContent = subtotal.toFixed(2);

  console.log("Calculated subtotal: ", subtotal);

  return subtotal;
}

  // ITERATION 2 and 3
function calculateAll() {
  console.log("calculateAll() called");

  const allProd = document.querySelectorAll(".product");
  let total = 0;

  allProd.forEach(product => {
    const subtotal = updateSubtotal(product); 
    total += subtotal;                       
  });

  const totalValue = document.querySelector("#total-value span");
  totalValue.textContent = total.toFixed(2);

  console.log("Total calculado:", total); 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("Remove button clicked:", target);

  const productRow = target.closest('.product');
  productRow.remove();

  calculateAll(); 
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product td input[type="text"]');
  const priceInput = document.querySelector('.create-product td input[type="number"]');

  const nameValue = nameInput.value.trim();
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  if (!nameValue || isNaN(priceValue) || priceValue <= 0) {
    alert('Por favor, introduce un nombre y un precio válido.');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  console.log(`Producto creado: ${nameValue}, $${priceValue}`);
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});