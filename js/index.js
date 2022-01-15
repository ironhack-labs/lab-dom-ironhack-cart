// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const priceValue = product.querySelector('.price span').innerText;
  const quantityValue = product.querySelector('.quantity input').value;
  const subtotalNode = product.querySelector('.subtotal span');

  const subTotal = priceValue * quantityValue;

  subtotalNode.innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const singleProduct = document.querySelectorAll('.product');
  let subT = 0;
  singleProduct.forEach((product) => {
    let subtotalSingleProdcut = updateSubtotal(product);
    subT += subtotalSingleProdcut;
  });

  // ITERATION 3
  //... your code goes here
  let textTotal = document.querySelector('#total-value span');
  console.log('textTotal');

  textTotal.innerText = subT;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const nodeToRemove = target.parentNode.parentNode.remove();

  // recalculo el subtotal
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductName = document.querySelector(
    '.create-product input[type="text"]'
  ).value;
  const newProductPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;

  const nodo = document.createElement('tr');
  nodo.classList.add('product');
  // Soy consciente primero que lo ideal es ir creando nodo por nodo con sus respectivos
  // atributos y de que es preferible utilizar la interpolación en los strings
  nodo.innerHTML =
    '<td class="name">' +
    '<span> ' +
    newProductName +
    '</span>' +
    '</td>' +
    '<td class="price">$<span>' +
    newProductPrice +
    '</span></td>' +
    '<td class="quantity">' +
    '<input type="number" value="0" min="0" placeholder="Quantity" />' +
    '</td>' +
    '<td class="subtotal">$<span>0</span></td>' +
    '<td class="action">' +
    '<button class="btn btn-remove">Remove</button>' +
    '</td>';
  document.querySelector('tbody').appendChild(nodo);

  // actualizo los eventos del nuevo nodo
  updateRemoveEvent();
}

function updateRemoveEvent() {
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((rmvBtt) => {
    rmvBtt.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  updateRemoveEvent();
  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
