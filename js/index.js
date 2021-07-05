// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  const subTotalPrice = (Number(price) * Number(quantity)).toFixed(2);

  subTotal.innerHTML = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  console.log('Clicking Calculate Prices Button')

  let totalPrice = 0;



}


// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.

// end of test

// ITERATION 2

const products = document.querySelectorAll('.product');
// console.log({products});

products.forEach(product => {
  totalPrice += Number(updateSubtotal(product));
});





// ITERATION 3
const totalValue = document.querySelector('#total-value span');

totalValue.innerHTML = totalPrice;

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const mainProductsTable = document.querySelector('tbody');
  const newProductName = document.querySelector('input[placeholder="Product Name"]');
  const newProductPrice = document.querySelector('input[placeholder="Product Price"]');

  // console.log({mainProductsTable, newProductName, newProductPrice});
  const newProductItem = document.createElement('tr');
  newProductItem.innerHTML = `
  <tr class="product">
    <td class="name">
      <span>${newProductName.value}</span>
    </td>
    <td class="price">$<span>${newProductPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  newProductItem.setAttribute('class', "product");
  mainProductsTable.appendChild(newProductItem);

  newProductItem.querySelector('.btn-remove').addEventListener('click', removeProduct);

  newProductName.value = null;
  newProductPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});