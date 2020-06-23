// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = parseFloat(price) * parseInt(quantity);
  const subtotalDisplay = product.querySelector('.subtotal span');
  subtotalDisplay.textContent = subtotalPrice;
  console.log(subtotalPrice);
  return subtotalPrice;
}
  // ITERATION 2
  function calculateAll() {
  let i;
  let totalPrice = 0;
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++ ){
  const cost = updateSubtotal(products[i]);
  totalPrice += cost;
  };
  const displayTotalPrice = document.querySelector('#total-value span');
  displayTotalPrice.textContent = totalPrice;
  };
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode;
  console.log(parent);
  const grandParent = parent.parentNode;
  console.log(grandParent);
  while (grandParent.firstChild) {
    grandParent.removeChild(grandParent.firstChild);
  }
  grandParent.setAttribute('class','removed');
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const input = document.querySelectorAll('.create-product input');
  const productName = input[0].value;
  const productPrice = input[1].value;
  const trTag = document.createElement('tr');
  const tdTag1 = document.createElement('td');
  const nameSpan = document.createElement('span');
  const tdTag2 = document.createElement('td');
  const priceSpan = document.createElement('span');
  const tdTag3 = document.createElement('td');
  const inputQuantity = document.createElement('input');
  const tdTag4 = document.createElement('td');
  const subtotalSpan = document.createElement('span');
  const tdTag5 = document.createElement('td');
  const removeButton = document.createElement('button');
  trTag.setAttribute('class','product');
  let parent = document.getElementsByTagName('tbody')[0];
  parent.appendChild(trTag);
  tdTag1.setAttribute('class','name');
  trTag.appendChild(tdTag1);
  nameSpan.innerHTML = productName;
  tdTag1.appendChild(nameSpan);
  tdTag2.setAttribute('class','price');
  tdTag2.innerHTML = "$";
  trTag.appendChild(tdTag2);
  priceSpan.innerHTML = productPrice;
  tdTag2.appendChild(priceSpan);
  tdTag3.setAttribute('class','quantity');
  trTag.appendChild(tdTag3);
  inputQuantity.setAttribute('type','number');
  inputQuantity.setAttribute('value','0');
  inputQuantity.setAttribute('min','0');
  inputQuantity.setAttribute('placeholder','Quantity');
  tdTag3.appendChild(inputQuantity);
  tdTag4.setAttribute('class','subtotal');
  tdTag4.innerHTML = '$';
  trTag.appendChild(tdTag4);
  subtotalSpan.innerHTML = '0';
  tdTag4.appendChild(subtotalSpan);
  tdTag5.setAttribute('class','action');
  trTag.appendChild(tdTag5);
  removeButton.setAttribute('class','btn btn-remove');
  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', removeProduct);
  tdTag5.appendChild(removeButton);
  input[0].value = '';
  input[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn btn-remove');
  let i;
  for (i = 0; i < removeBtns.length; i++){
    removeBtns[i].addEventListener('click', removeProduct);
  };
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});