// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const price = priceElement.textContent;
  const quantity = quantityElement.value;
  const subTotal = price * quantity;
  subtotalElement.textContent = subTotal;
  return subTotal;

}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  const totalAmount = document.querySelector('#total-value span');

  let totalValue = 0;
  allProducts.forEach(p => {
    totalValue += updateSubtotal(p);
  })
  totalAmount.textContent = totalValue;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {


  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode;
  const tableBody = productRow.parentNode;
  tableBody.removeChild(productRow);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value);
  if (!productName || productPrice <= 0) {
    alert('wrong input');
    return;
  }
  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtn = document.querySelectorAll('.btn-remove');
  const createProductRow = document.querySelector('#create');

  createProductRow.addEventListener('click', createProduct);
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});
