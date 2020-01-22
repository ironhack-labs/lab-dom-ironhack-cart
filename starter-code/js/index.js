var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelector('.product');

/* Iteration 1 */
function updateSubtot($product) {
  let price = $product.querySelector('.pu > span').innerHTML;
  let quantity = $product.querySelector('.qty > label > input').value;
  let subtot = $product.querySelector('.subtot > span');

  let subtotal = price * quantity;
  subtot.textContent = subtotal;

  return subtotal;
}

/* Iterations 2 & 3 */
function calcAll() {
  let allProducts = document.querySelectorAll('.product');
  let finalPrice = document.querySelector('h2 > span');
  let totalPrice = 0;

  allProducts.forEach(element => {
    updateSubtot(element);
    totalPrice += updateSubtot(element);
  });

  finalPrice.textContent = totalPrice;
}

$calc.onclick = calcAll;

/* Iteration 4 */
let deleteBtns = document.querySelectorAll('.btn-delete');

deleteBtns.forEach(element => {
  element.onclick = function() {
    let productContainer = element.parentNode.parentNode.parentNode;
    productContainer.removeChild(element.parentNode.parentNode);
  }
});


/* Iteration 5 */
let createBtn = document.getElementById('create');

let nameProduct = document.querySelector('.new > td > input');
let priceProduct = document.querySelector('.new > td + td > input');

createBtn.onclick = function() {
  let tBody = document.querySelector('tbody');
  tBody.insertAdjacentHTML('beforeend', `<tr class="product"><td class="name"><span>${nameProduct.value}</span></td><td class="pu">$<span>${priceProduct.value}</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`);
}
