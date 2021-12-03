// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const priceElement = document.querySelector('.price span');
  const quantityElement = document.querySelector('.quantity input');

  const price = priceElement.innerText;
  const quantity = quantityElement.value;

  const subtotalElement = document.querySelector('.subtotal span');
  const subtotal = price * quantity;

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleproducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of  multipleproducts){
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productElement = target.parentElement.parentElement;
  const cartTableBodyElement = productElement.parentElement;
  tableBodyElement.removeChild(productElement);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const tableBodyElement = document.querySelector('#cart tbody');
  const createProductNameElement = document.querySelector('.create-product input[type="text"]');
  const createProductPriceElement = ducument.querySelector('.create-product input[type="number"]');
  const name = createProductNameElement.value;
  const price = createProductPriceElement.valueAsNumber;
  const productElement = ducument.createElement('tr');
  productElement.classList.add('product');
  productElement.innerHTML = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price.toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;
const productRemoveButtonElement = productElement.querySelector('button');
productRemoveButtonElement.addEventListener('click',removeProduct);
tableBodyElement.appendChild(productElement);
createProductNameElement.value = '';
createProductPriceElement.valueAsNumber = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtonElements = document.querySelectorAll('.btn-remove');

  for (const removeButtonElement of removeButtonElements) {
    removeButtonElement.addEventListener('click', removeProduct)
  }

  const createProductElement = document.getElementById('create');
  if (createProductElement) {
    createProductElement.addEventListener('click', createProductElement);
  }
});
