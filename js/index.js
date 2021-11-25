// ITERATION 1
const table = document.querySelector('#cart tbody');

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity =  Number(product.querySelector('.quantity input[type="number"]').value);
  const subtotalEl = product.querySelector('.subtotal span');
  const subtotal = (price *quantity)
  subtotalEl.innerHTML = subtotal.toFixed(2);
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0;
  const products = document.querySelectorAll('.product');
  const totalEl = document.querySelector('#total-value span');
  products.forEach(product => total += updateSubtotal(product));
  // end of test
  console.log(total);
  totalEl.innerHTML = total.toFixed(2);
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  table.removeChild(product);
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode;
  const name = parent.querySelector('input[type="text"]');
  const qty = parent.querySelector('input[type="number"]');

  let newProduct = document.createElement("tr");
  newProduct.className = 'product';

  
  newProduct.innerHTML = `
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${Number(qty.value).toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  table.appendChild(newProduct);

  updateClickEvent();

  name.value = '';
  qty.value = 0;
}

function updateClickEvent(){

  const removeButtons =  document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => button.addEventListener('click',removeProduct));
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton =  document.querySelector('.create-product .btn');
  createButton.addEventListener('click',createProduct)

  //... your code goes here
  updateClickEvent();
  
});
