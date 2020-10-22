// ITERATION 1
const itemList = document.querySelector('tbody');

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = Number(price) * parseFloat(quantity);
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

// ITERATION 2
  //... your code goes here
function calculateAll() {
  const cartProducts = document.getElementsByClassName("product");
  let totalValue = 0;
  for (cartProduct of cartProducts) {
totalValue += updateSubtotal(cartProduct);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = totalValue;
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  itemList.removeChild(target.parentNode.parentNode);
  calculateAll();
}

function activateRemoveButtons(){
  const removeButtons = document.querySelectorAll('.btn-remove');
  for (button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }
}

// ITERATION 5

function createProduct() {
  let newProductRow = document.createElement('tr');
  const newProductName = document.querySelector('.product-name input');
  const newProductPrice = document.querySelector('.product-price input');

  if (newProductName.value === ''){
    alert(`Please enter a product name`);
  } else if (newProductPrice.value === '0') {
    alert (`Please eter a price`);
  } else {
    newProductRow.innerHTML =  `<td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  <br>`;
  newProductRow.classList.add('product');
  itemList.appendChild(newProductRow);
  newProductName.value = '';
  newProductPrice.value = '0';
  activateRemoveButtons();
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  activateRemoveButtons();
  const productCreateBtn = document.querySelector('#create');
  productCreateBtn.addEventListener('click', createProduct);
});
