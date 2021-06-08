// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;

  let quantity = product.querySelector('.quantity input').value;

  let subTotal = price * quantity;

  let subTotalElement = product.querySelector('.subtotal span');

  subTotalElement.innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // ITERATION 2

  //grab products
  let products = document.getElementsByClassName('product');

  [...products].map((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3

  //select updated subtotals
  let subtotals = document.querySelectorAll('.subtotal span');

  //select total element

  let totalElement = document.querySelector('#total-value span');

  //update total value
  let total = 0;
  subtotals.forEach((span) => (total += parseInt(span.innerHTML)));

  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  //let targetParent = target.parentNode.parentNode.parentNode;
  //console.log(targetParent);
  //targetParent.removeChild(targetParent.querySelector('.');

  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let inputList = document.querySelectorAll('.create-product input');

  let productName = inputList[0].value;

  let productPrice = inputList[1].value;

  let newProductTr = document.createElement('tr');

  newProductTr.innerHTML = `<tr class="product">
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

  let productContainer = document.querySelector('tbody');

  productContainer.appendChild(newProductTr);

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  let createButton = document.querySelector('#create');

  createButton.addEventListener('click', createProduct);

  //... your code goes here
});
