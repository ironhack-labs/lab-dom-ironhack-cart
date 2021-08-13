function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subTotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subTotal;

  console.log('Calculating subtotal, yey!');

  return subTotal;
}

function calculateAll() {
  const product1 = document.getElementsByClassName('product')[0];
  const product2 = document.getElementsByClassName('product')[1];

  updateSubtotal(product1);
  updateSubtotal(product2);

  const subTotal1 = parseInt(
    document.querySelector('.subtotal span').innerHTML
  );
  const subTotal2 = parseInt(document.getElementById('subtotal2').innerHTML);

  let total = subTotal1 + subTotal2;
  console.log(total);

  document.querySelector('#total-value>span').innerHTML = total;

  // GET TOTAL

  // ITERATION 3
  //... your code goes here
}

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
