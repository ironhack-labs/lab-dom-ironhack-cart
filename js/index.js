// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceNum = parseInt(price.innerText);
  const quantity = product.querySelector('.quantity input');
  const quantityNum = parseInt(quantity.value);
  const subtotal = product.querySelector('.subtotal');
  subtotal.innerText = priceNum * quantityNum;

  totalAmount += priceNum * quantityNum;
}

// ITERATION 2​
// ITERATION 3

let totalAmount;

function calculateAll() {
  totalAmount = 0;
  const all = document.getElementsByClassName('product');
  const allArr = [...all];

  allArr.forEach((product) => {
    updateSubtotal(product);
  });

  let totalValue = document.querySelector('h2 span');
  totalValue.innerHTML = totalAmount;

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
