// ITERATION 1

let iterateRM = () => {
  let remove = document.querySelectorAll('.btn.btn-remove');
  remove.forEach((e) => {
    e.addEventListener('click', (event) => {
      removeProduct(event);
    });
  });
};

function updateSubtotal(product) {
  let priceElement = product.querySelector('.price span');
  let quantityElement = product.querySelector('.quantity input');
  let subtotalElement = product.querySelector('.subtotal span');
  let subtotal = Number(priceElement.innerHTML) * Number(quantityElement.value);

  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let total = 0;

  let product = document.querySelectorAll('.product');
  product.forEach((e) => {
    total += updateSubtotal(e);
  });

  // ITERATION 3

  let totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let productItem = event.currentTarget.parentNode.parentNode;
  let productList = productItem.parentNode;
  productList.removeChild(productItem);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log('create button');
  let productName = document.querySelector('#createName');
  let productPrice = document.querySelector('#createPrice');
  let productList = document.querySelector('tbody');
  let productFrame = productList.firstElementChild.cloneNode(true);

  let newName = productFrame.querySelector('.name span');
  let newPrice = productFrame.querySelector('.price span');

  newName.innerHTML = productName.value;
  newPrice.innerHTML = productPrice.value;

  productName.value = '';
  productPrice.value = 0;

  productList.appendChild(productFrame);

  iterateRM();

  // let remove = document.querySelectorAll('.btn.btn-remove');
  // remove.forEach((e) => {
  //   e.addEventListener('click', (event) => {
  //     removeProduct(event);
  //   });
  // });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  iterateRM();

  // let remove = document.querySelectorAll('.btn.btn-remove');
  // remove.forEach((e) => {
  //   e.addEventListener('click', (event) => {
  //     removeProduct(event);
  //   });
  // });

  let createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
