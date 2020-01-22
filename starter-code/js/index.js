/* jshint esversion: 6 */

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = Number($product.querySelector('.pu span').textContent);
  let quantity = $product.querySelector('.qty label input').value;  // input type is number
  let subtotal = Math.round(100 * priceUnit * quantity) / 100;
  $product.querySelector('.subtot span').textContent = subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  let $products = document.querySelectorAll('.product');
  let total = 0;
  $products.forEach($product => {
    total += updateSubtot($product);
  });
  document.querySelector('h2 span').textContent = total;
}

function setupDeleteListeners() {
  // Iteration 4
  let deleteButtons = document.querySelectorAll('.btn-delete');
  deleteButtons.forEach(button => {
    button.onclick = function(e) {
      let $product = e.currentTarget.parentNode.parentNode;
      $cart.removeChild($product);
      calcAll();
    };
  });
}

function makeProduct(productName, productPrice) {
  let newProduct = document.createElement('tr');
  newProduct.className += "product";
  newProduct.innerHTML = `         // is this lazy?
    <td class="name">
      <span>${productName}</span>
    </td>

    <td class="pu">
      $<span>${productPrice}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>`;
  return newProduct;
}

function refreshForm() {
  document.querySelectorAll('.new input').forEach(input => {
    input.value = null;
  });
}

function createProduct() {
  // Iteration 5
  let createButton = document.getElementById('create');
  createButton.onclick = function(e) {
    let newProductName = document.querySelector('.new input[type="text"]').value;
    let newProductPrice = document.querySelector('.new input[type="number"]').value;
    let newProduct = makeProduct(newProductName, newProductPrice);
    $cart.appendChild(newProduct);
    setupDeleteListeners();
    refreshForm();
  };
}

createProduct();
setupDeleteListeners();
$calc.onclick = calcAll;