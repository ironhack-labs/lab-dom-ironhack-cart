// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const price = Number(priceElement.innerText);
  const quantityElement = product.querySelector('.quantity input');
  const quantity = Number(quantityElement.value); 
  const subtotalPrice = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalPrice;
  return subtotalPrice;
}

 // ITERATION 2 and 3
function calculateAll() {
  let totalPrice = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((singleProduct) => {
    totalPrice += updateSubtotal(singleProduct);
  });
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRow = target.parentNode.parentNode;
  const cartTableBody = productRow.parentNode;
  cartTableBody.removeChild(productRow);
  calculateAll();
  
}

// ITERATION 5
function createProduct() {
  const createRow = document.querySelector('.create-product');
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const productName = nameInput.value;
  const productPrice = Number(priceInput.value).toFixed(2); 
  if (!productName || priceInput.value === "") {
    alert("Please, enter product name and price, after create product!");
    return;
  }
  const cartTableBody = document.querySelector('#cart tbody');
  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';
  newProductRow.innerHTML = `
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
  cartTableBody.appendChild(newProductRow);
  const newRemoveButton = newProductRow.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);
  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  //Iteration 4-Remove
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  
  //Iteration 5-Create product
  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});
