// ITERATION 1

const calculatePricesBtn = document.getElementById('calculate');
const multipleProducts = document.querySelectorAll('.product');
const result = document.querySelector('#total-value span');
const removeBtn = document.querySelector('.btn-remove');

function updateSubtotal(singleProduct) {
  const price = singleProduct.querySelector('.price span').innerHTML;
  const quantity = singleProduct.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  singleProduct.querySelector('.subtotal span').innerHTML = subtotal;
  console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  let totalValue = 0;

  for (let i = 0; i < multipleProducts.length; i++) {
    totalValue += updateSubtotal(multipleProducts[i]);
  }
  result.innerHTML = totalValue;
}

function removeProduct(event) {
  const target = event.currentTarget;
  quantity = 0;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  console.log('Al parecer todo bien, a calcular');

  // LISTAR TODOS LOS EVENTOS DISPONIBLES DE LA APLICACIÓN
  calculatePricesBtn.addEventListener('click', () => {
    calculateAll();
  });
  removeBtn.addEventListener('click', () => {
    removeProduct();
  });
});
