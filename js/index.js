// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;

  let priceSubtotal = price * quantity;
  
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = +priceSubtotal;
  
  return priceSubtotal;
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let totalPrice = 0;

  products.forEach(product => {
    let priceSubtotal = 0;
    priceSubtotal = updateSubtotal(product);
    totalPrice += priceSubtotal;
  })

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerText = totalPrice;

}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  let actionCell = target.parentNode;
  let productRow = actionCell.parentNode;

  productRow.parentNode.removeChild(productRow);

  calculateAll();
}

// ITERATION 5
function createProduct() {
  let productName = document.querySelector('.create-product .name input').value;
  let productPrice = document.querySelector('.create-product .price input').value;
  let cart = document.querySelector('#cart tbody');

  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `<tr class="product">
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
    </tr>`;

  let newRmvBtn = newRow.querySelector('.btn-remove');
  newRmvBtn.addEventListener('click', removeProduct);

  cart.append(newRow);

  document.querySelector('.create-product .name input').value = '';
  document.querySelector('.create-product .price input').value = 0;

}

//Event Listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(rmvBtn => {
    rmvBtn.addEventListener('click', removeProduct);
  })

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});