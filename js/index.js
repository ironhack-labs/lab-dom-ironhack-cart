// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // get the data from the table
  let quantity = product.querySelector('.quantity input').value;
  let price = product.querySelector('.price span').textContent;

  let subtotal = quantity * price;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.getElementsByClassName('product'); // devuelve HTML collection
  const arrayProduct = [...singleProduct];
  let totalValue = 0;
  for (let i = 0; i < arrayProduct.length; i++) {
    totalValue += updateSubtotal(arrayProduct[i]);
  }

  let calcButton = document.getElementById('calculate');

  calcButton.onclick = function () {
    document.getElementById('total-value').querySelector('span').innerHTML= totalValue;
    // no entiendo por qué se actualiza el valor del subtotal cuando se pulsa el botón 
  };

  // end of test

  // ITERATION 2
  // let quantity = document.querySelectorAll()
  // ITERATION 3
  //... your code goes here
}

calculateAll();
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
