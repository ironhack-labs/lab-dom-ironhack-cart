// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  let quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;

  let subtotalResult = product.querySelector('.subtotal span');
  subtotalResult.textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  });

  let totalResult = document.querySelector('#total-value span');
  totalResult.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const product = target.closest('.product');
  product.remove();

  //We recalculate total of cart
  calculateAll();
}

// ITERATION 5

function createProduct() {

  const createProductLine = document.querySelector('.create-product');

  let productNameInput = createProductLine.querySelector('input[type="text"]');
  let productPriceInput = createProductLine.querySelector('input[type="number"]');

  let productName = productNameInput.value;
  let productPrice = productPriceInput.value;

  // We validate that the product name field is not empty
  if (!productName) {
    return alert('Por favor, introduce un nombre al producto.');
  }

  const newProduct = document.createElement('tr');
  newProduct.className = 'product';

  newProduct.innerHTML = `
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
  
  const spaceNewProduct = document.querySelector('#cart tbody');
  spaceNewProduct.appendChild(newProduct);

  // We added the event to the remove button to make it work
  const removeBtn = newProduct.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Clear inputs once the new product has been added
  productNameInput.value = '';
  productPriceInput.value = 0;

  return newProduct;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn =  document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    const button = removeBtn[i];
    button.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
