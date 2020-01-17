var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot(product) {
  // Iteration 1.1

  product.querySelector('.subtot span').innerHTML =+product.querySelector('.pu span').textContent * product.querySelector('.qty input').value;

}

function calcAll() {
  // Iteration 1.2
  var products = document.querySelectorAll('.product');
  var total = 0;
  products.forEach(p => updateSubtot(p));
  products.forEach(p => total += +p.querySelector('.pu span').textContent * p.querySelector('.qty input').value);
  document.querySelector('h2 span').innerHTML = total;
}

$calc.onclick = calcAll;


var deleteBtn = document.querySelectorAll('.btn.btn-delete');
deleteBtn.forEach(b => b.onclick = deletingProducts);

function deletingProducts(e){
  var totalAfter = document.querySelector('h2 span').textContent - e.currentTarget.parentElement.parentElement.querySelector('.subtot span').textContent

  e.currentTarget.parentElement.parentElement.innerHTML = '';
  document.querySelector('h2 span').innerHTML = totalAfter;

  var productsRemain = document.querySelectorAll('.product');
  var newTotal = 0;
  // productsRemain.forEach(p => updateSubtot(p));
  // productsRemain.forEach(p => newTotal += +p.querySelector('.pu span').textContent * p.querySelector('.qty input').value);
  // document.querySelector('h2 span').innerHTML = newTotal;
}

var addBtn = document.querySelector('#create');
addBtn.onclick = addProducts;

function addProducts(e) {
  var productName = document.querySelector('.create-name').value;
  var productPrice = document.querySelector('.create-price').value;
  var newProduct = document.createElement('tr');
  newProduct.className = 'product';

  newProduct.innerHTML = 
  `<td class="name">
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
    <button class="btn btn-delete newdeletebtn">Delete</button>
  </td>`;

  newProduct.querySelector('button.btn-delete').onclick = deletingProducts;
  $cart.appendChild(newProduct);
  $calc.onclick = calcAll;
}