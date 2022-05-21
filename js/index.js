// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);

  return subtotal;
}

// ITERATION 2 & 3
function calculateAll() {
  const products = Array.from(document.querySelectorAll('.product'));

  const total = products.reduce((total, product) => {
    return total + updateSubtotal(product);
  }, 0);

  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const btnRemove = event.target;
  btnRemove.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.product .action .btn');
  for (let removeProductBtn of removeProductBtns) {
    removeProductBtn.addEventListener('click', removeProduct)
  };
});
