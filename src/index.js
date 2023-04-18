// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input');
  const subtotal = product.querySelector('.subtotal span');

  let subTotalCount = price.innerHTML * quantity.value;
  subtotal.innerHTML = `${subTotalCount}`;
  return subTotalCount;
};

function calculateAll() {
  const products = document.getElementsByClassName('product')
  const total = document.querySelector("#total-value span")
  let count = 0;

  for (let i = 0; i < products.length; i++) {
  count +=  updateSubtotal(products[i]);
  }
total.innerHTML = count;

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
