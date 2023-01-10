const productDOM = document.getElementsByClassName('product');
const products = [...productDOM];

// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
}

function calculateAll() {
  // ITERATION 2

  products.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  let total = 0;
  products.forEach((product) => {
    total += Number(product.querySelector('.subtotal span').textContent);
  });

  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4
products.forEach((product) => {
  const removeButton = product.querySelector('.btn.btn-remove');
  removeButton.addEventListener('click', (e) => {
    const tr = e.target.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
  });
});

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.newProduct').value;
  const priceInput = document.querySelector('.newPrice').value;

  // Create the new row for the product
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
          <td class="name">
            <span>${nameInput}</span>
          </td>
          <td class="price">$<span>${priceInput}.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
          </td>
  `;

  const tableBody = document.querySelector('tbody');
  tableBody.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
