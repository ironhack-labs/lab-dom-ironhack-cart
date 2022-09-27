// ITERATION 1

function updateSubtotal(product) {
  // get product's price & quantity
  const price = product.querySelector('.price span').textContent;
  const qty = product.querySelector('.quantity input').value;

  //calculate & set subtotal
  const subtotal = price * qty;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  // set subtotal for each product & sum all subtotals
  const allProducts = document.getElementsByClassName('product');
  let total = 0;
  for (let product of allProducts) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  // set cart total
  document.querySelector('#total-value span').textContent = total.toFixed(2);
}

// ITERATION 4
// remove the row corresponding to the pressed button
function removeProduct(event) {
  const target = event.currentTarget;
  // target is the button, its parent is the cell (td), and its parent is the row (tr)
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

// aux function that adds a click listener to all remove buttons
function addRemoveBtnListeners() {
  for (let btnRemove of document.querySelectorAll('.btn-remove')) {
    btnRemove.addEventListener('click', removeProduct);
  }
}

function createProduct() {
  const newProdInputs = document.querySelectorAll('.create-product input');
  const newProdName = newProdInputs[0].value.trim();
  const newProdPrice = newProdInputs[1].value;

  // prevent empty values, although price 0 is allowed (a gift)
  if (!newProdName || !newProdPrice) return alert('Enter a valid product name and/or price');

  const newProdHTML = `<tr class="product"><td class="name"><span>${newProdInputs[0].value.trim()}</span></td>
  <td class="price">$<span>${newProdInputs[1].value}</span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action"><button class="btn btn-remove">Remove</button></td>
  </tr>`;

  const cart = document.querySelector('#cart tbody');
  cart.innerHTML += newProdHTML;

  addRemoveBtnListeners();
  calculateAll();

  for (input of newProdInputs) input.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  addRemoveBtnListeners();

  const btnCreate = document.getElementById('create');
  btnCreate.addEventListener('click', createProduct);
});
