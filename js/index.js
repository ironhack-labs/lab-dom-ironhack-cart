// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(Number(price), Number(quantity));

  const subtotal = Number(price) * Number(quantity);

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const cartItemElements = document.getElementsByClassName('cart-item');

  let totalValue = 0;

  for (cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }

  // ITERATION 3
  //... your code goes here
  const totalValueSpan = document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode
  const productTable = productRow.parentNode

  productTable.removeChild(productRow)

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createProductRowFoot = document.querySelector('tfoot')
  const newProductNameInput = createProductRowFoot.querySelector('input').value
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const productRemoveButtons = document.getElementsByClassName('btn-remove');
  for (const removeButton of productRemoveButtons) {
    removeButton.addEventListener('click', removeProduct)
  }

  const productCreateBtn = document.getElementById('create')
  productCreateBtn.addEventListener('click', createProduct)
});
