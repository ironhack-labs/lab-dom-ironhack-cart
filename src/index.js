// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;
  const subtotalValue = product.querySelector('.subtotal span');

  subtotalValue.innerText = subtotal.toFixed(2);

  console.log('Unit Price:', priceValue);
  console.log('Quantity:', quantityValue);
  console.log('Subtotal:', subtotal);

  return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  */

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');

  let totalValue = 0;
  for (let product of allProducts) {
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = totalValue.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;

  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value).toFixed(2);

  if (!productName || isNaN(productPrice) || productPrice <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name"><span>${productName}</span></td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(newRow);

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = '';

  console.log('New product added:', productName, productPrice);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
