// TO UPDATE SUBTOTAL WHEN SELECTING THE QUANTITY
const allInputs = document.querySelectorAll('.quantity input');
const allProducts = document.querySelectorAll('.product');

allInputs.forEach((element) => {
  element.addEventListener('change', () => {
    allProducts.forEach((element) => {
      updateSubtotal(element);
    });
  });
});

// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  let calculatedSubtotal = price * quantity;
  subtotal.innerHTML = calculatedSubtotal;

  // return subtotal.innerHTML;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  allProducts.forEach((element) => {
    updateSubtotal(element);
  });

  // ITERATION 3
  const allSubTotals = document.querySelectorAll('.product .subtotal span');
  const totalValue = document.querySelector('#total-value span');

  let accumulator = 0;

  allSubTotals.forEach((element) => {
    accumulator = Number(element.innerHTML) + accumulator;
  });
  totalValue.innerHTML = accumulator;
}

// ITERATION 4
const allRemoveButtons = document.querySelectorAll('.btn-remove');

allRemoveButtons.forEach((removeBtn) => {
  removeBtn.addEventListener('click', () => {
    removeProduct(removeBtn);
  });
});

function removeProduct(removeBtn) {
  console.log(removeBtn);
  const product = removeBtn.parentNode.parentNode;
  const tbody = removeBtn.parentNode.parentNode.parentNode;

  tbody.removeChild(product);
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
