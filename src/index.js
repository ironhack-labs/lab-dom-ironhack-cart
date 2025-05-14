window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
  
});

function updateSubtotal(product) {
  // Primero obtengo los valores de precio y cantidad
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // Luego convierto dichos valores a números con decimales para precio y enteros para cantidad
  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);
  // Realizo el cálculo del subtotal a partir de las dos variables creadas
  const subtotal = priceValue * quantityValue;
  // Permito que se muestre el resultado del subtotal en pantalla con dos decimales
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal.toFixed(2);
  console.log(subtotal);
  
  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerText = total.toFixed(2);
}

const removeButton = document.ge

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll()
}

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value).toFixed(2);

  const tableBody = document.querySelector('tbody');
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

  tableBody.appendChild(newRow);

  // Activar botón Remove en el nuevo producto
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  // Limpiar inputs
  nameInput.value = '';
  priceInput.value = '';
}
