// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElement = product.querySelector('.subtotal span');
  let subtotal = Number(price) * Number(quantity);
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(e => (total += updateSubtotal(e)));
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productToBeRemoved = target.parentNode.parentNode;
  productToBeRemoved.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product .product-name')
    .value;
  const productPrice = document.querySelector('.create-product .product-price')
    .value;
  const newLine = document.createElement('tr');
  newLine.className = 'product';
  newLine.innerHTML = `
     <td class="name">
       <span>${productName}</span>
     </td>
     <td class="price">$<span>${productPrice}</span></td>
     <td class="quantity">
       <input type="number" value="0" min="0" placeholder="Quantity" />
     </td>
     <td class="subtotal">$<span>0</span></td>
     <td class="action">
       <button class="btn btn-remove new-product">Remove</button>
     </td>`;
  document.querySelector('#cart tbody').appendChild(newLine);
  document.querySelector('.btn.btn-remove.new-product').onclick = removeProduct;
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.onclick = calculateAll;

  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  removeBtn.forEach(e => {
    e.onclick = removeProduct;
  });

  const createBtn = document.getElementById('create');
  createBtn.onclick = createProduct;
});
