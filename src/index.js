// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 
  //... your code goes here
  // get price and quantity elements
 const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector(`.quantity input`);

  // extract values (convert to numbers)
  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value);

   // calculate subtotal
  const subtotal = price * quantity;

  // update subtotal in DOM
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal;

  return subtotal;
}
  


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const products = document.querySelectorAll(`.product`);
  // ITERATION 3
  //... your code goes here
  let total = 0; 
  products.forEach( product => {
total += updateSubtotal(product);
});

const totalElement = document.querySelector('#total-value span');
totalElement.textContent = total;
}
 // ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;
  
  productRow.remove();
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector(`.create-product input[type="text"]`);
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value
  const price = parseFloat(priceInput.value);
  
  if(!name || isNaN(price)) return;

  const newRow = document.createElement(`tr`);
  newRow.classList.add(`product`);

  newRow.innerHTML =`
  <td class="name">
  <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td> 
  `;
  const tbody = document.querySelector(`#cart tbody`);
  tbody.appendChild(newRow);
  
  const removeBtn = newRow.querySelector(`.btn-remove`);
  removeBtn.addEventListener('click', removeProduct);

  nameInput.value='';
  priceInput.value='';
}

  window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(`.btn-remove`);
  removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
  });
  
  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
  
  });
