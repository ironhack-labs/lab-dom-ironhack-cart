var cart      = document.querySelector('#cart tbody');
var total     = document.getElementById('total-price');
var calcBtn   = document.getElementById('btn-calc');
var createBtn = document.getElementById('btn-create');


function updateSubtot(product) {
  let prodPrice = parseFloat(product.querySelector('.pu span').innerHTML);
  let prodQty = parseInt(product.querySelector('.qty input').value, 10);
  let subTotalEl = product.querySelector('.subtot span');

  // Validation
  let subtotal = (isNaN(prodPrice) || isNaN(prodQty)) ? 0 : (prodPrice * prodQty)

  subTotalEl.innerHTML =  subtotal;
  return subtotal;
}

function calcAll() {
  let grandTotal = 0;
  let productRows = cart.querySelectorAll('tr.product');

  productRows.forEach(row => {
    grandTotal += updateSubtot(row)
  })

  total.innerHTML = grandTotal;
}

function deleteRow(event) {
  let deleteBtn = event.currentTarget;
  deleteBtn.parentElement.parentElement.remove();
}

function createProduct() {
  let newProdName = document.getElementById('new-prod-name').value;
  let newProdPrice = document.getElementById('new-prod-price').value;

  // Validation
  if (newProdName === "" || isNaN(parseFloat(newProdPrice)) ) { return }

  let newRow = document.createElement('tr');
  newRow.className = "product";

  newRow.innerHTML =
    `<td class="name">` +
    `<span>${newProdName}</span>` +
    `</td>` +
    `<td class="pu">` +
    `$<span>${newProdPrice}</span>` +
    `</td>` +
    `<td class="qty">` +
    `<label>` +
    `<input type="number" value="0" min="0">` +
    `</label>` +
    `</td>` +
    `<td class="subtot">` +
    `$<span>0</span>` +
    `</td>` +
    `<td class="rm">`+
    `<button class="btn btn-delete">Delete</button>`+
    `</td>` +
    `</tr>`;

    newRow.querySelector('button.btn-delete').onclick = deleteRow;
    cart.appendChild(newRow);
}

function initializeEvents() {

  createBtn.onclick = createProduct;

  calcBtn.onclick = calcAll;

  cart.querySelectorAll('button.btn-delete').forEach(button => {
    button.onclick = deleteRow;
  })

}

initializeEvents()
