// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = parseFloat(priceElement.innerText);
  const quantity = parseInt(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerText = `${subtotal.toFixed(2)}`;

  return subtotal;
}



function calculateAll() {


  const filasProduct = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < filasProduct.length; i++) {

    const fila = filasProduct[i];
    const subtotalValue = updateSubtotal(fila)


    if (!isNaN(subtotalValue)) {
      total += subtotalValue;
    }
  }

  const totalElement = document.getElementById('total-value');
  totalElement.innerText = `$ ${total.toFixed(2)}`;
}


// ITERATION 4

function removeProduct(event) {
  const productRow = event.target.closest('.product');
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

function setupEventListeners() {
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  setupEventListeners();
});

// ITERATION 5

