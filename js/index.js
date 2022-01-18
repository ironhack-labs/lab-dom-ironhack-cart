// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  // product.querySelector("sub")
  product.querySelector('.subtotal span').innerHTML = String(
    (price * quantity).toFixed(2)
  );
  return price * quantity;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const tableProducts = document.querySelector('tbody').children;
  let total = 0;
  for (product of tableProducts) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = String(
    total.toFixed(2)
  );
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let value = updateSubtotal(target.parentElement.parentElement);
  target.parentElement.parentElement.remove();
  let ogTotal = Number(document.querySelector('#total-value span').innerHTML);
  document.querySelector('#total-value span').innerHTML = String(
    ogTotal - value
  );
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const values =
    event.currentTarget.parentElement.parentElement.querySelectorAll(
      'td input'
    );
  let name = values[0].value;
  let price = values[1].value;
  let newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name span').innerHTML = name;
  newProduct.querySelector('.price span').innerHTML = price;
  newProduct.querySelector('.quantity input').value = 0;
  newProduct.querySelector('.subtotal span').innerHTML = 0;
  newProduct
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);
  document.querySelector('tbody').append(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const buttons = document.querySelectorAll('.action button');
  for (removeBtn of buttons) {
    removeBtn.addEventListener('click', removeProduct);
  }
  document.getElementById('create').addEventListener('click', createProduct);
});
