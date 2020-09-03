function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const subtotalPrice = price.textContent * quantity.value;
  subtotal.textContent = subtotalPrice;
  
  return subtotalPrice;
}

function calculateAll() {

  const multipleProducts = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');

  let subtotals = [];
  multipleProducts.forEach(product => subtotals.push(updateSubtotal(product)));
  let totalPrice = subtotals.reduce((a,c) => a+c);
  total.textContent = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {

  const productName = document.querySelector('.create-product input[type=text]');
  const productPrice = document.querySelector('.create-product input[type=number]');
  const tbody = document.querySelector('#cart>tbody');

  const newProduct = document.createElement("tr");
  newProduct.classList.add('product');

  newProduct.innerHTML += `<td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

tbody.appendChild(newProduct);

productName.value = "";
productPrice.value = "0";

const removeBtn = document.querySelectorAll('.btn-remove');
removeBtn.forEach((btn) => btn.addEventListener('click', removeProduct));
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn) => btn.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
