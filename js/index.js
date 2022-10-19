// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = price.textContent * quantity.value;
  console.log(subtotalPrice);
  const subT = product.querySelector('.subtotal span');
  subT.textContent = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);
  let subTotals = [];
  allProducts.forEach((element) => {
    subTotals.push(updateSubtotal(element));
  });
  console.log(subTotals);
  const total = subTotals.reduce((acc, currVal) => acc + currVal);
  console.log(total);
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.textContent = total;
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
