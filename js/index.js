// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.textContent = `${price * quantity}`;
  return price * quantity;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  let totals = [];

  allProducts.forEach((element) => {
    totals.push(updateSubtotal(element));
  });

  let totalPrice = totals.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  document.querySelector('#total-value span').innerHTML = totalPrice;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log('clicked');
  const target = event.currentTarget;
  const grandparent = document.querySelector('#cart tbody');
  grandparent.removeChild(target.parentNode.parentNode);
  calculateAll();
  console.log('should be whole TR:', target.parentNode.parentNode);
  //... your code goes here
}

// ITERATION 5

function createProduct(e) {
  let prodName = document.querySelector('#cart tfoot input[type=text]').value;
  let prodPric = document.querySelector('#cart tfoot input[type=number]').value;

  let newElement = `
  <td class="name">
    <span>${prodName}</span>
    </td>
    <td class="price">$<span>${prodPric}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;

  let tableBody = document.querySelector('#cart tbody');

  let newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = newElement;
  let removeProductButton = newRow.querySelectorAll('.btn-remove');
  removeProductButton.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  tableBody.appendChild(newRow);
  calculateAll();
  // console.log('create clicked');
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductButton = document.querySelectorAll('.btn-remove');
  removeProductButton.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
