

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });


  const createBtn = document.getElementById('create');

  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }

});




function updateSubtotal(product) {

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const price = Number(priceElement.innerHTML);
  const quantity = Number(quantityElement.value);

  const subtotal = price * quantity;

  subtotalElement.innerHTML = subtotal;

  return subtotal;
}




function calculateAll() {

  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  });

  const totalValue = document.querySelector('#total-value span');

  if (totalValue) {
    totalValue.innerHTML = total;
  }
}




function removeProduct(event) {

  const button = event.currentTarget;

  const productRow = button.parentNode.parentNode;

  productRow.remove();

  calculateAll();
}



function createProduct() {

  const productNameInput = document.querySelector(
    '.create-product input[type="text"]'
  );

  const productPriceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;

  if (productName === '' || productPrice === '') {
    return;
  }

  const newRow = document.createElement('tr');

  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>

    <td class="price">
      $<span>${productPrice}</span>
    </td>

    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>

    <td class="subtotal">
      $<span>0</span>
    </td>

    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const tbody = document.querySelector('#cart tbody');

  tbody.appendChild(newRow);


  const newRemoveBtn = newRow.querySelector('.btn-remove');

  newRemoveBtn.addEventListener('click', removeProduct);

  
  productNameInput.value = '';
  productPriceInput.value = '';
}