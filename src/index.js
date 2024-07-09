// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText.replace('$', ''));
  const quantity = parseInt(product.querySelector('.quantity input').value);

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.closest('.product');
  productRow.remove();

  calculateAll();
}
// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input[type="text"]').value;
  const productPrice = document.querySelector('.create-product input[type="number"]').value;

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${parseFloat(productPrice).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  document.querySelector('#cart tbody').appendChild(newProduct);

  // Add event listener to the new remove button
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});