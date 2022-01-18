// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = +price.innerText * +quantity.value;
}

function calculateAll() {
  // Some variables
  const products = document.getElementsByClassName('product');
  const totalValue = document.querySelector('#total-value span');
  // Resetting the total value for every new function call
  totalValue.innerText = 0;
  // Had to use a dummy variable as total value inner text behaves like string when adding to it
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products.item(i));
    total += +document.querySelectorAll('.subtotal span').item(i).innerText;
  }
  // Here assigning value of a dummy total variable to the real total value in html
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // Getting the table to use as a parent
  const table = document.querySelector('tbody');
  // The clicked button's row
  const clickedButtonsRow = target.parentNode.parentNode;
  // Removes child
  table.removeChild(clickedButtonsRow);
  // Calls for a func to update total
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProductInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const newProductPriceInput = document.querySelector(
    '.create-product input[type="number"]'
  );
  const newTableRow = document.createElement('tr');
  const tableBody = document.querySelector('tbody');
  const removeBtns = document.getElementsByClassName('btn-remove');
  if (
    // We don't want too long product names
    newProductInput.value.length > 0 &&
    newProductInput.value.length < 31 &&
    newProductPriceInput.value > 0
  ) {
    if (!newProductPriceInput.value.includes('.')) {
      // Adding '.00' to the price if someone forgot it
      // And creating a new tr element
      newTableRow.classList.add('product');
      newTableRow.innerHTML = `<td class="name">
            <span>${
              newProductInput.value.charAt(0).toUpperCase() +
              newProductInput.value.slice(1)
            }</span>
          </td>
          <td class="price">$<span>${newProductPriceInput.value.concat(
            '.00'
          )}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;
      tableBody.appendChild(newTableRow);
    } else {
      // If the price format is appropriate -> element gets added
      newTableRow.classList.add('product');
      newTableRow.innerHTML = `<td class="name">
            <span>${
              newProductInput.value.charAt(0).toUpperCase() +
              newProductInput.value.slice(1)
            }</span>
          </td>
          <td class="price">$<span>${newProductPriceInput.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;
      tableBody.appendChild(newTableRow);
    }
    // Resetting the value of the input field
    newProductInput.value = '';
    // Adding a click listener for all remove buttons including the new one
    for (let btn of removeBtns) {
      btn.addEventListener('click', removeProduct);
    }
  } else {
    alert(
      'The name for new product is too long, please keep it under 30 characters.'
    );
  }
}

// This listens when the 'Calculate' button is clicked and calls a 'calculateAll' function
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtns = document.getElementsByClassName('btn-remove');
  const createBtn = document.querySelector('#create');
  // Click listener for calc button
  calculatePricesBtn.addEventListener('click', calculateAll);
  // Loop adding click listener for remove buttons
  for (let btn of removeBtns) {
    btn.addEventListener('click', removeProduct);
  }
  // Click listener for create btn
  createBtn.addEventListener('click', createProduct);
});
