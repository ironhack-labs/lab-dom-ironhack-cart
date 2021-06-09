// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price);
  console.log(quantity);
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  console.log(products);
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    total += updateSubtotal(products[i]);
  }

  //ITERATION 3
  document.querySelector('#total-value span').innerText = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log(event.currentTarget);
  console.log('The target in remove is:', target);
  //console.log(event);
  event.target.parentNode.parentNode.parentNode.removeChild(
    event.target.parentNode.parentNode
  );
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  console.log(event); // i'm stuck here...
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttonRemoves = document.querySelectorAll('.btn-remove');
  console.log(buttonRemoves);
  buttonRemoves.forEach((button) => {
    button.addEventListener('click', removeProduct);
    console.log(button);
  });

  const addProduct = document.querySelector('#create');
  addProduct.addEventListener('click', createProduct);
});
