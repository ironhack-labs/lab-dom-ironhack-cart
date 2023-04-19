// ITERATION 1

function updateSubtotal(product) {
  // Get DOM elements that hold price and quantity
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subTotalText = product.querySelector('.subtotal span');

  // create variable for subtotal
  // Calculate total values
  let subtotal = price * quantity;
  // Set the product subtotal to the corresponding DOM element
  subTotalText.innerText = subtotal;
  console.log('Calculating subtotal, yey!');
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  // Get the DOM nodes for each product row
  let allProducts = document.getElementsByClassName('product');
  // Declare an auxiliary variable that will hold the sum of each product subtotal
  let total = 0;
  // Iterate through the product nodes,
  // call update subtotal on it and add the subtotal to the total value
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    total += updateSubtotal(allProducts[i]);
  }
  /* for (let product of allProducts) {
    total += updateSubtotal(product);
  } */

  // ITERATION 3
  //... your code goes here
  // Display the total value of products in cart
  let finalTotal = document.querySelector('#total-value span');
  finalTotal.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //creating Product (created some ids in index.html)
  let tableBody = document.getElementById('table-body');
  let row = document.createElement('tr');
  row.classList.add('product');
  let inputText = document.getElementById('text');
  let thePrice = document.getElementById('choose-price');
  row.innerHTML = `<td class="name">
  <span>${inputText.value}</span>
</td>
<td class="price">$<span>${thePrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  //resetting input
  inputText.value = '';
  thePrice.value = 0;
  //inserting product
  tableBody.appendChild(row);
  //adding remove btn function
  const removeIt = document.getElementsByClassName('btn-remove');
  removeIt[removeIt.length - 1].addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
});
