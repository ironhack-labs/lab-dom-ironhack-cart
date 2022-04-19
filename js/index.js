// ITERATION 1

function updateSubtotal(product) {
  const quantity = product.querySelector('.quantity input');
  const price = product.querySelector('.price span');
  const subtotal = product.querySelector('.subtotal span');
  const calc = quantity.value * price.innerHTML;
  subtotal.innerHTML = calc;
  return subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product');
  let totalValue = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    totalValue += Number(updateSubtotal(singleProduct[i]));
  }
  const total = document
    .getElementById('total-value')
    .getElementsByTagName('span');
  total[0].innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const tr = document.createElement('tr');
  tr.className = 'product';
  const tdName = document.createElement('td');
  tdName.className = 'name';
  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  const spanPrice = document.createElement('span');
  const tdQtd = document.createElement('td');
  tdQtd.className = 'quantity';
  const inputQtd = document.createElement('input');
  inputQtd.value = 0;
  inputQtd.type = 'number';
  const tdSubt = document.createElement('td');
  tdSubt.className = 'subtotal';
  tdSubt.innerHTML = '$';
  const spanSubt = document.createElement('span');
  spanSubt.innerHTML = 0;
  const tdRemove = document.createElement('td');
  tdRemove.className = 'action';
  tdSubt.innerHTML = '$';
  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn btn-remove';
  btnRemove.innerHTML = 'Remove';
  const name = document.getElementById('product-name');
  tdName.innerHTML = name.value;
  const price = document.getElementById('product-price');
  tdPrice.innerHTML = '$';
  spanPrice.innerHTML = price.value;
  console.log(name.value, price.value);
  document.getElementsByTagName('tbody')[0].appendChild(tr).appendChild(tdName);
  const getProduct = document.getElementsByClassName('product');
  getProduct[getProduct.length - 1].appendChild(tdPrice).appendChild(spanPrice);
  getProduct[getProduct.length - 1].appendChild(tdQtd).appendChild(inputQtd);
  getProduct[getProduct.length - 1].appendChild(tdSubt).appendChild(spanSubt);
  getProduct[getProduct.length - 1]
    .appendChild(tdRemove)
    .appendChild(btnRemove);
  name.value = '';
  price.value = '';
  removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const newProduct = document.getElementById('create-new-product');
  newProduct.addEventListener('click', createProduct);
  let removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }
});
