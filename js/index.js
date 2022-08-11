// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let calc = price.innerText * quantity.value;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = calc;
  return calc;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  let sum = 0;

  // ITERATION 2
  const cart = [...document.getElementsByClassName('product')];
  cart.forEach((product) => (sum += updateSubtotal(product)));

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  //after trial and error i took parent of parent
  const parentElement = target.parentNode.parentNode;

  const cartList = document.getElementById('cart');
  cartList.deleteRow(parentElement.rowIndex);
}

// ITERATION 5

function createProduct() {
  //const target = event.currentTarget;
  const newProd = document.getElementsByClassName('create-product');

  const nameProd = newProd[0].cells[0].childNodes[1];
  const priceProd = newProd[0].cells[1].childNodes[1];

  console.log(nameProd.value);
  console.log(priceProd.value);

  const cartList = document.getElementById('cart');
  row = cartList.insertRow(cartList.length - 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  // Add some text to the new cells:
  cell1.innerHTML = nameProd.value;
  cell2.innerHTML = priceProd.value;
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
});
