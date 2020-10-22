// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  let subtotalDisplay = product.querySelector('.subtotal');
  subtotalDisplay.innerHTML = `$${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  const productsArr = [...products];
  console.log(productsArr);
  let total = 0;
  productsArr.forEach(product => {
    total += updateSubtotal(product);
  });
  let totalDisplay = document.querySelector('#total-value');
  totalDisplay.innerHTML = `TOTAL: $${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  event.path[3].removeChild(event.path[2]);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProName = document.querySelector('#create-product__name');
  let newProPrice = document.querySelector('#create-product__price');
  const table = document.querySelector('tbody')
  const newProduct = document.createElement('tr')
  newProduct.classList.add('product');
  newProduct.innerHTML = `
    <td class="name">
      <span>${newProName.value}</span>
    </td>
    <td class="price">$<span>${newProPrice.value}.00</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  table.appendChild(newProduct);
  let nodes = document.querySelectorAll('.btn-remove');
  nodes[nodes.length-1].addEventListener('click', removeProduct);
  newProName.value = '';
  newProPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtns = document.querySelectorAll('.btn-remove');
  const createBtn = document.querySelector("#create");
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  createBtn.addEventListener('click', createProduct);
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
});
