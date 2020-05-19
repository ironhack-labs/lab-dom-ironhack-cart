// ITERATION 1
let totalPrice = 0;

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input').value;
  const curProduct = price * quantity;
  const subtotal = product.querySelector('.subtotal > span');
  subtotal.innerHTML = curProduct;
  totalPrice += curProduct;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');   --- Testing code
  // updateSubtotal(singleProduct);
  totalPrice = 0;
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => updateSubtotal(product));
  // ITERATION 3
  const totalAmount = document.querySelector('#total-value > span');
  totalAmount.innerHTML = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const parentTRow = target.parentNode.parentNode;
  const parentTBody = parentTRow.parentNode;
  parentTBody.removeChild(parentTRow);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelectorAll('tfoot input')[0].value;
  const unitPrice = document.querySelectorAll('tfoot input')[1].value;

  const newProduct = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${unitPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
      </td>
    </tr>`;

  const tableBody = document.getElementsByTagName('tbody')[0];
  tableBody.innerHTML += newProduct;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  [...removeBtn].forEach(btn => btn.addEventListener('click', removeProduct));
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
