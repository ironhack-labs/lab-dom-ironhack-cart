// ITERATION 1

function updateSubtotal(product) {
  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
  let productArray = [...products];

  let totalValue = 0;

  productArray.forEach((product) => {
    totalValue += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerHTML = totalValue;

  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
  console.log(target.parentNode.parentNode.parentNode);
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerHTML = calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelectorAll('.create-product input')[0];
  const unitPrice = document.querySelectorAll('.create-product input')[1];

  const singleProduct = document.querySelector('.product');
  const cloneProduct = singleProduct.cloneNode(true);

  cloneProduct.querySelector('.name span').innerHTML = productName.value;
  if (unitPrice.value < 0) {
    alert('Please enter valid price!');
  } else {
    cloneProduct.querySelector('.price span').innerHTML = unitPrice.value;
    cloneProduct.querySelector('.quantity input').innerHTML = 0;
    document.querySelector('tbody').appendChild(cloneProduct);
  }

  productName.value = '';
  unitPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
