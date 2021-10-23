// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value;
  let calculateSubtotal = price.textContent * quantityValue;
  product.querySelector('.subtotal span').textContent = calculateSubtotal;
}

function calculateAll() {
  const singleProduct = [...document.getElementsByClassName('product')];
  let total = 0;
  singleProduct.forEach((product) => {
    updateSubtotal(product);
    total += parseFloat(product.querySelector('.subtotal span').textContent);
  });
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode.parentNode;
  console.log(parent);
  //... your code goes here
  document.querySelector('#cart tbody').removeChild(parent);
}

// ITERATION 5

function createProduct(event) {
  console.log('hello');
  let nameInput = document.getElementById('nameInput');
  let priceInput = document.getElementById('priceInput');
  console.log('name tag: ', nameInput);
  console.log('price tag', priceInput);
  //... your code goes here
  console.log(nameInput);
  let newProduct = document.querySelector('.product').cloneNode(true);
  console.log(newProduct);
  newProduct.getElementsByTagName(
    'td'
  )[0].innerHTML = `<span>${nameInput.value}<span>`;
  newProduct.getElementsByTagName('td')[1].innerHTML = `<span>${parseFloat(
    priceInput.value
  ).toFixed(2)}<span>`;
  newProduct.getElementsByTagName(
    'td'
  )[2].innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  newProduct.getElementsByTagName('td')[3].innerHTML = '$<span>0</span>';
  document
    .querySelector('#cart')
    .getElementsByTagName('tbody')[0]
    .appendChild(newProduct);
  lisistenerDeleteProduct();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
  lisistenerDeleteProduct();
});
let lisistenerDeleteProduct = () => {
  const deleteProductBtn = [...document.querySelectorAll('.btn-remove')];
  deleteProductBtn.forEach((btnDelete) => {
    btnDelete.addEventListener('click', removeProduct);
  });
};
