// ITERATION 1

function updateSubtotal(product) {
  const priceElm = product.querySelector('.price span');
  const quantityElm = product.querySelector('.quantity input');
  const price = priceElm.innerHTML;
  const quantity = quantityElm.value;
  const subtotal = Number(price) * Number(quantity);
  const subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total = total + updateSubtotal(product);
  });
  console.log(total);
  const totalElem = document.querySelector('#total-value span');
  totalElem.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const targetRowParent = target.parentNode.parentNode.parentNode;
  const targetRow = target.parentNode.parentNode;
  console.log('The target in remove is:', targetRowParent, targetRow);
  const totalElem = document.querySelector('#total-value span');
  let total = totalElem.innerHTML;
  targetRowParent.removeChild(targetRow);
  totalElem.innerHTML = Number(total) - updateSubtotal(targetRow);
}

// ITERATION 5

function createProduct() {
  let name = document.querySelector('#new-name').value;
  let price = document.querySelector('#new-price').value;
  let newRow = document.createElement('tr');
  let parent = document.getElementsByTagName('tbody');
  console.log(parent);
  parent[0].appendChild(newRow);
  newRow.className = 'product';
  newRow.innerHTML = `<td class="name">
  <span></span>
</td>
<td class="price">$<span></span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  newRow.querySelector('.name span').innerText = name;
  newRow.querySelector('.price span').innerText = price;
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonList = document.querySelectorAll('.btn-remove');
  removeButtonList.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => removeProduct(event));
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonList = document.querySelectorAll('.btn-remove');
  removeButtonList.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => removeProduct(event));
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
});
