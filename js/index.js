// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');

  const calculateSubtotal = price * quantity;
  subTotal.innerHTML = calculateSubtotal;

  return calculateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  const productsArray = [...products];
  const subtotals = productsArray.map(product => updateSubtotal(product));

  // ITERATION 3
  //... your code goes here
  const sumSubTotals = subtotals.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = sumSubTotals;
}

// ITERATION 4

function removeProduct(event) {
  //const target = event.currentTarget;
  const target = event.target;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProduct = document.querySelector('.create-product');

  const nameInput = document.querySelector('.product-name input');
  const priceInput = document.querySelector('.product-price input');

  const newProduct = document.createElement('tr');
  newProduct.setAttribute('class', 'product');
  newProduct.innerHTML = `
    <td> class="name">
      <span>${nameInput.value}</span>
    </td>
    <td class="price">$<span>${priceInput.valueAsNumber}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  newProduct.querySelector('.btn-remove').onclick = removeProduct;

  const tableBody = document.getElementsByTagName('tbody')[0];
  tableBody.appendChild(newProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  [...removeButtons].map(button => button.addEventListener('click', removeProduct));

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
