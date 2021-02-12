// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  const total = subTotal.innerHTML = (Number(price.innerHTML) * Number(quantity.value));
  //console.log('Calculating subtotal, yey!');
  return total;

  //... your code goes here
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalProduct = 0;
  allProducts.forEach(element => totalProduct += updateSubtotal(element));
  //console.log(allProducts);
  const totalAll = document.querySelector('#total-value span');
  totalAll.textContent = totalProduct;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  target.parentNode.removeChild(target.parentNode);
  calculateAll();
};

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
