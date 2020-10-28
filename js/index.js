function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;
  let subTotalHTML = product.querySelector('.subtotal span');
  subTotalHTML.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  let newProducts = document.getElementsByClassName('product');
  for (let newProduct of newProducts) {
    total += updateSubtotal(newProduct);
  }
  let finalTotalDisplay = document.querySelector('#total-value span');
  finalTotalDisplay.innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = event.target.parentNode.parentNode;
  parent.remove();
  calculateAll();
}

// ITERATION 5
function createProduct() {
  let table = document.querySelector('tbody');
  let row = document.querySelector('.product');
  let rowClone = row.cloneNode(true);

  let rowCloneName = rowClone.querySelector('.name span');
  let nameInput = document.querySelector('.create-product td input').value;
  rowCloneName.innerHTML = `<span>${nameInput}</span>`;


  let rowClonePrice = rowClone.querySelector('.price span');
  let numberInput = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value
  let numberInputDecimal = parseFloat(numberInput).toFixed(2);
  rowClonePrice.innerHTML = numberInputDecimal

  document.querySelector('.input-form input').value = '';
  document.querySelector('.input-field-number input').value = '';
  rowClone.querySelector('.action .btn').addEventListener('click', removeProduct);
  table.appendChild(rowClone);
  eventListeners();
}

// Put this inside behavior into a function
// call the function here and then also after create

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', () => {
    createProduct();
  });
});
