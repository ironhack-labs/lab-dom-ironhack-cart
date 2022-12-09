// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = +price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let product of products) {
    totalPrice += updateSubtotal(product);
  }
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tBody = target.parentNode.parentNode.parentNode
  const productToRemove = target.parentNode.parentNode;
  tBody.removeChild(productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newName = document.querySelectorAll('.create-product input')[0];
  const newPrice = document.querySelectorAll('.create-product input')[1];
  const trTag = document.createElement('tr')
  trTag.innerHTML =
    `<td class="name">
      <span>${newName.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
  trTag.classList.add('product')
  const tBody = document.querySelector('tbody');
  tBody.appendChild(trTag);
  const newBtnRemove = trTag.querySelector('.btn-remove');
  newBtnRemove.addEventListener('click', removeProduct);
  newName.value = '';
  newPrice.value = '0';
}

window.addEventListener('load', () => {
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => button.addEventListener('click', removeProduct));
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
