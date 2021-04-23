// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = (parseFloat(price.textContent) * quantity.value);
  const subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  const totalPriceDisplay = document.querySelector('#total-value span');

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    totalPrice += updateSubtotal(allProducts[i]);
  }

  totalPriceDisplay.textContent = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  console.log("hello!")
  const target = event.currentTarget;
  const toRemove = target.parentNode.parentNode;
  toRemove.parentNode.removeChild(toRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  
  // target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.

  const nameInput = document.getElementById('input-text');
  const priceInput = document.getElementById('input-price');

  const tableBody = document.querySelector('#cart tbody');

  let productToInsert = `
  <tr class="product">
    <td class="name">
      <span>${nameInput.value}</span>
    </td>
    <td class="price">$<span>${priceInput.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  tableBody.innerHTML += productToInsert;

  nameInput.value = '';
  priceInput.value = 0;

}

window.addEventListener('change', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
