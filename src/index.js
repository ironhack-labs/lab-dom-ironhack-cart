// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value);

  const total = quantityValue * priceValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = total;

  // return to accumulate 
  return total;
}

function calculateAll() {

  let totalPrice = 0;

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  for (const product of products) {
    totalPrice += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById('total-value');
  const span = totalElement.querySelector('span'); // get the span inside h2

  span.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const card = target.parentNode.parentNode;
  const table = card.parentNode;

  // remove card from table
  table.removeChild(card);
  // recalcualte
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // Get the input values
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const nameValue = nameInput.value.trim();
  const priceValue = Number(priceInput.value).toFixed(2);

  // Create a new row
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name"><span>${nameValue}</span></td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // Append the new row to tbody
  const tbody = document.querySelector('tbody');
  tbody.appendChild(newRow);

  // Add the event listener to the new "Remove" button
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Clear input fields
  nameInput.value = '';
  priceInput.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  });

  // create
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

});
