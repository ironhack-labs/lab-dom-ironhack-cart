// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').getAttribute('value');
  const subtotalField = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotalField.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  // ITERATION 3
  let products = document.getElementsByClassName('product');
  let totalPrice = 0;
  let totalPriceField = document.querySelector('#total-value span');
  for (let i=0; i < products.length; i++) {
    updateSubtotal(products[i]);
    totalPrice += updateSubtotal(products[i]);
  }
  totalPriceField.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.closest(".product").remove();
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  const tbody = document.querySelector('tbody');
  const productName = document.querySelector('.create-product input[type="text"]').getAttribute('value');
  const productPrice = document.querySelector('.create-product input[type="number"]').getAttribute('value');

  let newProductRow = document.createElement('tr');
  newProductRow.className = 'product';
  newProductRow.innerHTML = '<td class="name"><span>' + productName + '</span></td><td class="price">$<span>' + productPrice + '</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>';

  tbody.appendChild(newProductRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.getElementsByClassName("btn-remove");
  for (let i=0; i < removeProductBtns.length; i++) {
    removeProductBtns[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener('click', createProduct);
});