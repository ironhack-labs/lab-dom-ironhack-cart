// ITERATION 1

let totalPrice;

function updateSubtotal(product, i) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;

  const quantity = product.getElementsByTagName('input')[0].value;

  const result = price * quantity;

  totalPrice += result;

  let subtotal = document.getElementsByClassName('subtotal')[i].getElementsByTagName('span')[0];
  
  subtotal.innerText = result;

  return result;
}

function calculateAll() {
  totalPrice = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i], i);
  }
  const total = document.getElementById('total-value').getElementsByTagName('span')[0];
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productToRemove = target.parentNode.parentNode;
  const table = document.querySelector('tbody');
  table.removeChild(productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {

  let newProductName = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value;
  let newProductPrice = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value;
  
  const newProductContent = `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  const table = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.className = "product";
  newRow.innerHTML = newProductContent;
  table.append(newRow);

  // Clear

  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value = '';
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value = 0;
  
  // 

  addEventListeners();
  

}

function addEventListeners() {
  const calculatePricesBtn = document.getElementById('calculate');
  const addProductBtn = document.getElementById('create');
  const removeBtns = document.getElementsByClassName('btn btn-remove');
  const quantitiesFields = document.getElementsByClassName('quantity');
  for (let i = 0; i < removeBtns.length; i++) {
    quantitiesFields[i].addEventListener('change', calculateAll);
  }
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
  calculatePricesBtn.addEventListener('click', calculateAll);
  addProductBtn.addEventListener('click', createProduct);
}

window.addEventListener('load', addEventListeners); 


