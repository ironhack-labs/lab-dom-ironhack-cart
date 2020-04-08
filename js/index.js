// ITERATION 1

function updateSubtotal(product) {
  const price = (product.querySelector('.price span')).innerHTML;
  const quantity = (product.querySelector('.quantity input')).value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

 // ITERATION 2 && 3

  function calculateAll() {
  const products = document.getElementsByClassName('product');
  const arrOfProducts = [...products];
  const totalElement = document.querySelector('#total-value span');
  let total = 0;
  arrOfProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  console.log("remove clicked");
const target = event.currentTarget;
((target.parentNode).parentNode).parentNode.removeChild((target.parentNode).parentNode);
calculateAll();

}

// ITERATION 5

function createProduct() {
console.log("create clicked");
const target = event.currentTarget;
tbody = document.querySelector('tbody');
tfoot = document.querySelector('tfoot');
let productName = "noName"; //just waiting to improve and check/tell for this error etc. so in the mean time products with no name will be noName
if (tfoot.querySelector('input').value) productName = tfoot.querySelector('input').value;
const productPrice = tfoot.querySelector('input[type=number]').value;
tbody.innerHTML += ` <tr class="product">
<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${productPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;
const removeProductBtn = document.getElementsByClassName('btn-remove');
const arrRemoveProductBtn = [...removeProductBtn];
  arrRemoveProductBtn.forEach((product) => {
    product.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.getElementsByClassName('btn-remove');
  const arrRemoveProductBtn = [...removeProductBtn];
  arrRemoveProductBtn.forEach((product) => {
    product.addEventListener('click', removeProduct);
  });
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});