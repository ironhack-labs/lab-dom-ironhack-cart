// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', {product});
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  // console.log({price: typeof price, qty: typeof quantity});
  return subtotalPrice;
}

function calculateAll() {
// ITERATION 2
  const products = document.querySelectorAll('.product');

  // ITERATION 3
  let sum = 0;
  products.forEach(singleProduct => {
    sum += updateSubtotal(singleProduct);
  });
  const totalPrice = document.querySelector('#total-value');
  console.log({totalPrice, sum});
  totalPrice.children[0].innerText = sum;
}

// ITERATION 4
function addRemoveToButtons() {
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((el) => el.addEventListener('click', () => removeProduct(el)));
}

function removeProduct(event) {
  event.parentNode.parentNode.remove();
  calculateAll();

}

// ITERATION 5
// document.querySelector('.create-product').addEventListener('click', createProduct);

function createProduct() {
  // const productName = document.querySelectorAll('.create-product input')[0].innerText;
  // const productPrice = document.querySelectorAll('.create-product input')[1].value;




  // console.log({productName})
  // const unitPrice =;

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  addRemoveToButtons();

  // ... your code goes here
});
